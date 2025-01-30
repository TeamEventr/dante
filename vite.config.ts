import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; 
import tailwindcss from 'tailwindcss'; 
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    TanStackRouterVite(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});