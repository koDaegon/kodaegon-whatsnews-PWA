// const CACHE_NAME='CACHE_NAME_V1';

// const CACHED_FILES = [
//     '/',
//     '/index.html',
//     '/index.css',
//     '/index.js',
// ];

// //once when it's installed

// self.addEventListener('install', function(event) {
//    console.log('service worker install');

//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then((cache) => cache.addAll(CACHED_FILES))
//     )
// });

// self.addEventListener('fetch' , function(event){
//     event.respondWith(
//         caches.open(CACHE_NAME)
//             .then( cache => {
//                 return cache
//                     .match(event.request)
//                     .then( function(response) {
//                      return response || fetch(event.request).then( response => {
//                         if(response.status ===200) {
//                             cache.put(event.request.url, response.clone());
//                         }
//                     })
//                 })
//             })
//     )
// })

// //caches is built for archving the datas from all the fetch event



importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if(workbox) {
    console.log('workbox is loaded');
}

workbox.routing.registerRoute(
    new RegExp('^https://newsapi.org')
)

workbox.routing.registerRoute(
    /\.(?:js/css/html)$/,
    new workbox.regi;
)