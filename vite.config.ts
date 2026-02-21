import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    // Minify for production
    minify: 'terser',
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: (id) => {
          // Vendor chunk for three.js and OGL
          if (id.includes('node_modules/three') || id.includes('node_modules/ogl')) {
            return 'three-vendor';
          }
          // Postprocessing vendor chunk
          if (id.includes('node_modules/postprocessing')) {
            return 'postprocessing-vendor';
          }
          // React vendor chunk
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          // Other node_modules
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    // Source map only for debugging, disable in production
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', 'ogl', 'postprocessing'],
  },
  // Performance settings
  server: {
    hmr: {
      overlay: false, // Disable error overlay for better dev experience
    },
  },
})
