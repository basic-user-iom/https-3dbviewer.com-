import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VIEWER_APP_VERSION } from './src/viewerAppMeta'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inject-viewer-app-version',
      transformIndexHtml(html) {
        return html.replaceAll('%VIEWER_APP_VERSION%', VIEWER_APP_VERSION)
      },
    },
  ],
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

