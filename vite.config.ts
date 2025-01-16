import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "../Portfolio/", // Remplace "Portfolio" par le nom exact de ton dépôt GitHub
});
