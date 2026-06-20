import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'esbuild',
    reportCompressedSize: false,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (id.includes('three') || id.includes('@react-three')) return 'three';
          if (id.includes('@mui') || id.includes('@emotion')) return 'mui';
          if (id.includes('swiper')) return 'swiper';
          if (id.includes('react-spring')) return 'spring';
          if (id.includes('react-router')) return 'router';
          if (id.includes('react-bootstrap') || id.includes('bootstrap')) return 'bootstrap';
          if (id.includes('react-dom') || id.includes('react/')) return 'react';
          return 'vendor';
        },
      },
    },
  },
})
