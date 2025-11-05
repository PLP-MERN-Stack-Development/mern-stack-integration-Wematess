// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Configure proxy for API calls
      '/api': {
        target: 'http://localhost:5000', // Matches server PORT
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '') // Not needed if server routes use /api
      },
    },
  },
});