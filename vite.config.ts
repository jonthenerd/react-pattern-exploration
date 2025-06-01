import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
    build: {
        minify: false // Disable minification for easier reviewing of the output
    },
    plugins: [
        TanStackRouterVite({
            target: "react",
            autoCodeSplitting: true
        }),
        react()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});
