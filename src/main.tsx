import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import "./index.css";
import Cv from "./componants/Cv/cv.tsx";
import Acceil from "./componants/Acceil.tsx";

const BASENAME = "/Portfolio"; // Nom du repo sur GitHub Pages

const router = createBrowserRouter([
  {
    path: `${BASENAME}/`,
    element: <Acceil />,
  },
  {
    path: `${BASENAME}/Cv`,
    element: <Cv />,
  },
]);

// 🔹 Déclaration de `window.gtag` pour éviter les erreurs TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// 🔹 Hook pour suivre les changements de page avec Google Analytics
const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      console.log(`[Google Analytics] Suivi de la page : ${location.pathname}`);
      window.gtag("config", "G-MR2PV5LN70", {
        page_path: location.pathname,
      });
    } else {
      console.warn("[Google Analytics] gtag non encore chargé !");
    }
  }, [location]);
};

// 🔹 Composant qui injecte Google Analytics une seule fois
const GoogleAnalyticsTracker = () => {
  useEffect(() => {
    if (document.getElementById("google-analytics")) {
      console.log("[Google Analytics] Script déjà chargé.");
      return;
    }

    console.log("[Google Analytics] Ajout du script...");

    // Ajout du script Google Analytics
    const script1 = document.createElement("script");
    script1.id = "google-analytics";
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-MR2PV5LN70";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-MR2PV5LN70');
    `;
    document.head.appendChild(script2);

    console.log("[Google Analytics] Script ajouté.");
  }, []);

  useGoogleAnalytics(); // Active le suivi des pages

  return null;
};

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <GoogleAnalyticsTracker /> {/* Injecte Google Analytics */}
    <RouterProvider router={router} />
  </StrictMode>
);
