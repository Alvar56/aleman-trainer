import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { claudeBridge } from './dev/claude-bridge.js';
import { syncBridge } from './dev/sync-bridge.js';

// PORTABLE=1 compila la version para repartir: un solo fichero .html que se
// abre con doble clic, sin servidor. Cambia tres cosas respecto a la normal:
//   - rutas relativas, porque no hay raiz de servidor (file:// no tiene '/')
//   - sin PWA: el service worker no se registra en file:// y da error
//   - todo en un bundle, para poder incrustarlo luego en el HTML
const portable = !!process.env.PORTABLE;

export default defineConfig({
  base: portable ? './' : '/',
  plugins: [
    react(),
    claudeBridge(),
    syncBridge(),
    ...(portable ? [] : [VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['favicon.svg', 'icon.ico', 'favicon-fuchs.svg'],
      manifest: {
        name: 'Deutsch Trainer A2-B1',
        short_name: 'Deutsch Trainer',
        description: 'App para aprender alemán A2-B1',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192 512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        navigateFallbackDenylist: [/^\/api/]
      }
    })])
  ],
  build: portable
    ? { outDir: 'dist-portable', cssCodeSplit: false, assetsInlineLimit: 100 * 1024 * 1024 }
    : {},
  server: { port: 5180, host: true, open: false }
});
