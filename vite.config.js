import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
    server: {
    port: 5174, // 👈 your new port here
    host: true, // allows access from LAN
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.glb'],
  optimizeDeps: {
    exclude: ['@dimforge/rapier3d-compat']
  }
})
