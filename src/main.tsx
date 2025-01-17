import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Cv from "./componants/Cv/cv.tsx";
import Acceil from "./componants/Acceil.tsx";

const BASENAME = "/Portfolio"; // Nom du repo sur GitHub Pages

const router = createBrowserRouter([
  {
    path: `${BASENAME}/`, // Ajoute le basename manuellement
    element: <Acceil />,
  },
  {
    path: `${BASENAME}/Cv`, // Préfixe aussi ici
    element: <Cv />,
  },
]);

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
