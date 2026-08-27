// @lovable.dev/vite-tanstack-config already includes tanstackStart, react, tailwind, etc.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    // لضمان نسخ وتخديم ملفات public بما فيها المجلدات الخفية (.well-known)
    publicDir: "public",
    build: {
      copyPublicDir: true,
    },
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: null,
        filename: "sw.js",
        devOptions: { enabled: false },
        manifest: false, // we serve /public/manifest.webmanifest ourselves
        workbox: {
          navigateFallback: "/",
          // استثناء مسار .well-known من SPA fallback لمنع إرجاع 404 أو صفحة HTML
          navigateFallbackDenylist: [
            /^\/~oauth/,
            /^\/api\//,
            /^\/\.well-known\//,
          ],
          maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
          globPatterns: [
            "**/*.{js,css,html,ico,json,webmanifest,txt}",
            "**/*.{png,jpg,jpeg,svg,gif,webp,avif}",
            "**/*.{mp3,ogg,wav,m4a,aac}",
            "**/*.{woff,woff2,ttf,otf}",
          ],
          runtimeCaching: [
            {
              urlPattern: ({ request }) => request.mode === "navigate",
              handler: "NetworkFirst",
              options: {
                cacheName: "html-cache",
                networkTimeoutSeconds: 3,
              },
            },
            {
              urlPattern: ({ request, sameOrigin }) =>
                sameOrigin && ["style", "script", "worker", "document"].includes(request.destination),
              handler: "StaleWhileRevalidate",
              options: { cacheName: "assets-cache" },
            },
            {
              // Images (app art, mascot, story pictures) — even cross-origin
              urlPattern: ({ request }) => request.destination === "image",
              handler: "CacheFirst",
              options: {
                cacheName: "image-cache",
                expiration: { maxEntries: 400, maxAgeSeconds: 60 * 60 * 24 * 90 },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
            {
              // Audio files (pronunciation / story narration)
              urlPattern: ({ request, url }) =>
                request.destination === "audio" || /\.(mp3|ogg|wav|m4a|aac)$/i.test(url.pathname),
              handler: "CacheFirst",
              options: {
                cacheName: "audio-cache",
                expiration: { maxEntries: 300, maxAgeSeconds: 60 * 60 * 24 * 90 },
                cacheableResponse: { statuses: [0, 200] },
                rangeRequests: true,
              },
            },
            {
              // Fonts (Google Fonts CSS + files) so text renders offline
              urlPattern: ({ request, url }) =>
                request.destination === "font" ||
                url.origin === "https://fonts.googleapis.com" ||
                url.origin === "https://fonts.gstatic.com",
              handler: "CacheFirst",
              options: {
                cacheName: "font-cache",
                expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 365 },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
          ],
        },
      }),
    ],
  },
});
