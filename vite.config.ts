import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const resolve = (p: string) => path.join(dirname, p);

// https://vite.dev/config/
export default defineConfig({
  root: resolve("./src"),
  build: {
    minify: false, // Disable minification for easier debugging    
  },
  plugins: [
    TanStackRouterVite({
      target: "react",
      autoCodeSplitting: true,      
      routeFileIgnorePattern:
        "components|assets|styles|stories|.spec.|page.tsx",
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
