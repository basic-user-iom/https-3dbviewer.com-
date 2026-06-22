import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: ['index.html', 'orb-preview.html'],
    },
  },
  server: {
    port: 5000,
    open: true
  }
})

