var cacheName = 'myAwWeb-v4.28';
var urlsToCache = [
    '/',
    '/home/about?utm_source=PWA',
    '/home/about',
    '/home/contact',
    '/manifest.json',
    '/lib/bootstrap/dist/css/bootstrap.css',
    '/lib/bootstrap/dist/css/bootstrap.css.map',
    '/css/site.css',
    '/images/banner1.svg',
    '/images/banner2.svg',
    '/images/banner3.svg',
    '/images/banner4.svg',
    '/lib/jquery/dist/jquery.js',
    '/lib/bootstrap/dist/js/bootstrap.js',
    '/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
    '/favicon.ico'
];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(urlsToCache).then(function () {
                self.skipWaiting();
            });
        })
    );
});

self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function (e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});