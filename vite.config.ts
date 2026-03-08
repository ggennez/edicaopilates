import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./"),
        "node-fetch": path.resolve(__dirname, "src/empty.ts"),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== "true",
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV || "production")
    }
  };
});
