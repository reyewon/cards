// Kink and Tell - Service Worker
const CACHE = 'knt-v3';
const PRECACHE = ['/', '/index.html', '/KNT2.png', '/KNT.svg', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const req = e.request;

  // Network-first for page navigations so a new deploy is picked up
  // immediately (hashed asset names change every build - a stale cached
  // index.html would point at assets that no longer exist).
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put('/index.html', copy));
        return res;
      }).catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Network-first for data files so new questions appear straight away
  if (req.url.includes('/data/')) {
    e.respondWith(
      fetch(req).catch(() => caches.match(req))
    );
    return;
  }

  // Cache-first for everything else (hashed assets, images, fonts)
  e.respondWith(
    caches.match(req).then(cached => cached || fetch(req))
  );
});
