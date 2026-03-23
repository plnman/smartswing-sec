import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/smartswing-sec/",   // GitHub Pages: plnman.github.io/smartswing-sec/
  build: {
    outDir: "dist",
  },
});
