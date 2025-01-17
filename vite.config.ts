import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Remplace 'Portfolio' par le nom de ton repo GitHub
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/", // Indique à Vite le bon chemin pour GitHub Pages
});
