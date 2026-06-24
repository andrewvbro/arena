// ARENA service worker — cache the game shell for offline / fast loads
const CACHE = 'arena-v1';
const ASSETS = ['./index.html','./vendor/three.min.js','./vendor/peerjs.min.js','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(()=>{})); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  // never cache the PeerJS signaling/WebRTC traffic
  if (u.hostname.includes('peerjs') || u.protocol === 'wss:' || u.protocol === 'ws:') return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(()=>caches.match('./index.html'))));
});
