import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Cv from "./componants/Cv/cv";

// Fonction pour envoyer les données de suivi à Google Analytics
const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-SW486PCZ8X", {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

function App() {
  return (
    <Router>
      <GoogleAnalyticsTracker /> {/* Suivi des pages */}
      <Routes>
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </Router>
  );
}

// Composant qui charge Google Analytics une seule fois
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
