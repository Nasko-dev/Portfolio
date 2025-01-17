import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Cv from "./componants/Cv/cv.tsx";
import Acceil from "./componants/Acceil.tsx";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Acceil />,
      },
      {
        path: "/Cv",
        element: <Cv />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
