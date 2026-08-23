const CACHE_NAME = 'wodweights-v2';
const BLOCKED = true; // Cambiar a true para bloquear acceso

self.addEventListener('install', e => {
  if (BLOCKED) {
    // Borrar todas las cachés existentes
    e.waitUntil(
      caches.keys().then(keys =>
        Promise.all(keys.map(k => caches.delete(k)))
      )
    );
  } else {
    const ASSETS = ['./', './index.html', './manifest.json'];
    e.waitUntil(
      caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(() => {})
    );
  }
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => BLOCKED || k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (BLOCKED) {
    // Devolver página de bloqueo
    e.respondWith(
      new Response(
        `<!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>WOD Weights — No disponible</title>
          <style>
            * { margin:0; padding:0; box-sizing:border-box }
            body {
              background:#0a0a0a; color:#f0f0f0;
              font-family:-apple-system,sans-serif;
              display:flex; align-items:center; justify-content:center;
              min-height:100vh; text-align:center; padding:20px;
            }
            .box { max-width:320px }
            h1 { font-size:48px; color:#e8ff00; margin-bottom:8px }
            h2 { font-size:20px; font-weight:700; margin-bottom:12px; letter-spacing:1px }
            p  { font-size:14px; color:#888; line-height:1.6 }
          </style>
        </head>
        <body>
          <div class="box">
            <h1>🔒</h1>
            <h2>APP NO DISPONIBLE</h2>
            <p>Esta aplicación no está disponible en este momento.</p>
          </div>
        </body>
        </html>`,
        { headers: { 'Content-Type': 'text/html' } }
      )
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).catch(() => cached))
  );
});
