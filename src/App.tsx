import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Cv from "./componants/Cv/cv";

// 🔹 Déclaration globale de `window.gtag` pour éviter les erreurs TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// 🔹 Hook pour suivre les changements de page et envoyer les données à Google Analytics
const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("config", "G-SW486PCZ8X", {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

// 🔹 Composant principal `App`
function App() {
  return (
    <Router>
      <GoogleAnalyticsTracker /> {/* Active le suivi Google Analytics */}
      <Routes>
        <Route path="/cv" element={<Cv />} />
        {/* Ajoute d'autres routes ici si besoin */}
      </Routes>
    </Router>
  );
}

// 🔹 Composant qui injecte le script Google Analytics une seule fois
const GoogleAnalyticsTracker = () => {
  useEffect(() => {
    // Ajout du script Google Analytics
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-SW486PCZ8X";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SW486PCZ8X');
    `;
    document.head.appendChild(script2);
  }, []);

  useGoogleAnalytics(); // Active le suivi des pages

  return null;
};

export default App;
