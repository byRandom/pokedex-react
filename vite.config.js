import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  cacheDir: '.vite',
  optimizeDeps: {
    disabled: false,
    cacheDir: '.vite-deps'
  },
  build: {
    // Set build cache directory
    cacheDir: '.vite-build',
    // Optional: Adjust other build settings
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
    // Clean output directory before build
    emptyOutDir: true,
    // Cache build assets
    manifest: true,
    rollupOptions: {
      cache: true
    }
  }
})