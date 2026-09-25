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

// SIN_IA=1 compila la app SIN nada de inteligencia artificial: fuera el chat
// con Felix, las noticias, las canciones, el examen, los generadores y los
// ajustes de IA. Es lo que se reparte en el HTML de un fichero, donde no hay
// servidor con el que hablar y todo eso solo enseñaba botones muertos.
//
// Bandera de compilacion y NO una copia del proyecto: dos copias se separan a
// la semana y los arreglos solo llegan a una.

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
        navigateFallbackDenylist: [/^\/api/],
        // El bundle pasó de los 2 MiB que trae Workbox por defecto al ampliar
        // los ejercicios del libro, y el build fallaba entero. Aquí TODO el
        // material va dentro del JS -las palabras, las frases, los ejercicios-
        // y ese fichero es justo el que hay que precachear para que la app
        // funcione sin conexión: si se queda fuera, no sirve de nada.
        maximumFileSizeToCacheInBytes: 12 * 1024 * 1024
      }
    })])
  ],
  // La app necesita saber si es la version de un solo fichero: ahi no hay
  // servidor de sincronizacion y no tiene sentido ni intentarlo.
  define: {
    __PORTABLE__: JSON.stringify(portable),
    __SIN_IA__: JSON.stringify(!!process.env.SIN_IA),
    // Cuándo se compiló esto. Sirve para una cosa muy concreta: el service
    // worker sigue sirviendo el build anterior hasta que se actualiza, y
    // cuesta saber si lo que tienes delante es lo último o una copia vieja
    // del fichero portable. Se ve en Ajustes.
    __BUILD__: JSON.stringify(
      new Date().toLocaleString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    )
  },
  build: portable
    ? {
        outDir: 'dist-portable',
        cssCodeSplit: false,
        assetsInlineLimit: 100 * 1024 * 1024,
        // Todo en un trozo: los import() dinamicos (xlsx) generarian ficheros
        // sueltos que el empaquetador no incrusta y que no viajan con el HTML.
        rollupOptions: { output: { inlineDynamicImports: true } }
      }
    : {},
  server: { port: 5180, host: true, open: false }
});
