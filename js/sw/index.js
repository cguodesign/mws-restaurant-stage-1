var staticCacheName = 'nws-restaurant-stage-1';
let fileToCache = [
    'index.html',
    'restaurant.html',
    'js/dbhelper.js',
    'js/main.js',
    'js/restaurant_info.js',
    'css/styles.css',
    'data/restaurants.json',
    '/img/1_sm.jpg',
    '/img/2_sm.jpg',
    '/img/3_sm.jpg',
    '/img/4_sm.jpg',
    '/img/5_sm.jpg',
    '/img/6_sm.jpg',
    '/img/7_sm.jpg',
    '/img/8_sm.jpg',
    '/img/9_sm.jpg',
    '/img/10_sm.jpg'
];

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(staticCacheName)
      .then(function(cache){
        return cache.addAll(fileToCache);
      })
  );
});

self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request)
      .then(function(response){
        if(response) return response;
        return fetch(event.request);
      }
    )
  );
});
