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
        // Only split Three.js — it is ~800KB and lazy-loaded on most pages.
        // Do NOT split react / mui / router into separate chunks: that creates
        // circular ES module deps (react ↔ mui) and crashes production with
        // "Cannot read properties of undefined (reading 'useLayoutEffect')".
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (id.includes('three') || id.includes('@react-three')) return 'three';
          return undefined;
        },
      },
    },
  },
})
