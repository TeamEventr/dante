import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; 
import tailwindcss from 'tailwindcss'; 
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  plugins: [
    react(), 
    TanStackRouterVite(), // Add TanStack Router plugin here
  ],
});
