const CACHE_NAME = "is-pedagojisi-pwa-v3";
const ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./questions.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./materyal.pdf"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cached) => {
      return cached || fetch(event.request).catch(() => caches.match("./index.html"));
    })
  );
});
