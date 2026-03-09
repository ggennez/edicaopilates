import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react(), tailwindcss()],

    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        'node-fetch': path.resolve(__dirname, 'src/empty.ts'),
      },
    },

    server: {
      // HMR disabled for AI Studio
      hmr: process.env.DISABLE_HMR !== 'true',
    },

    build: {
      target: "esnext",
      minify: "esbuild",
      sourcemap: true,
      chunkSizeWarningLimit: 1000
    }
  };
});
