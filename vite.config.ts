
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tanstackStart({
      router: {
        entry: "app/router",
        routesDirectory: "app/routes",
      },
      start: { entry: "app/start" },
      server: { entry: "app/server" },
    }),
    react(),
    tailwindcss(),
  ],
  resolve: { tsconfigPaths: true },
  server: { host: "0.0.0.0", port: 8080 },
});
