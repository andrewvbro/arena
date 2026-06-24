// ARENA service worker — offline support WITHOUT serving stale builds.
// HTML = network-first (always get the latest game when online, fall back to cache offline).
// Static libs = cache-first (versioned/stable, fast).
const CACHE = 'arena-v2';
const ASSETS = ['./index.html','./vendor/three.min.js','./vendor/peerjs.min.js','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(()=>{})); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (u.hostname.includes('peerjs') || u.protocol === 'wss:' || u.protocol === 'ws:') return;  // never touch signaling/WebRTC
  const isHTML = e.request.mode === 'navigate' || u.pathname.endsWith('/') || u.pathname.endsWith('index.html');
  if (isHTML) {
    // network-first: latest build when online, cached shell when offline
    e.respondWith(
      fetch(e.request).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); return res; })
        .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
    );
  } else {
    // cache-first for stable static assets
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
  }
});
