import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // oficial React plugin for Vite
import path from 'path'; // Note.js path module to resolve directories
import tailwindcss from '@tailwindcss/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // Enable React plugin (JSX, Fast Refresh, etc. )
  resolve: {
    alias: {
      //Define path aliases for easier imports
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@services': path.resolve(__dirname, './src/services'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@types': path.resolve(__dirname, './src/types'),
      '@store': path.resolve(__dirname, './src/store'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  server: {
    port: 3000, // Dev port
    proxy: {
      // Proxy API requests to backend
      '/api': {
        target: 'http://localhost:4000', // Redirect '/api' requests to backend server
        changeOrigin: true, // change origin header to target URL
      },
    },
  },
  build: {
    sourcemap: true, //Generate source maps for debugging
    rollupOptions: {
      output: {
        manualChunks: {
          //Split vendor libraries into separate chunks
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@mui/material', '@emotion/react', '@emotion/styled'],
          charts: ['recharts'],
          utils: ['date-fns', 'axios'],
        },
      },
    },
  },
});
