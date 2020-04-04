'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "df9d0cf4e5c415888c9fa90fe15fee1c",
"/assets/assets/fonts/Clarissa.ttf": "d36867bcfd06d796a6cb81f65f6fa327",
"/assets/assets/images/Air_wave.png": "877d6611527241b4dd30813965576a5f",
"/assets/assets/images/Bottle.png": "2daf9a4ac4e19e89b4f16dee89827d44",
"/assets/assets/images/Bottle_transparent.png": "38e8d11679531c87f449652bb9c9e55a",
"/assets/assets/images/Breath_logo.png": "9bb45a2a0f4faa5c9a400e54a05d9140",
"/assets/assets/images/Breath_logo_and_slogan.png": "653a170b17dcb648d6191d0300863efa",
"/assets/assets/images/Flag_Finland.png": "6c2ab93106d42304c4588505b15c2ea9",
"/assets/FontManifest.json": "f574449b2505922207e61ef3a1f26c09",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "44b38bb5eb49b7704e89c1ff5ce01dfa",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "0673420412b279ac137c9dbdcf5b699a",
"/main.dart.js": "c632e69d5d9e3e94e766dd37c77956ff",
"/manifest.json": "a0c332e54208cea1ed514bfedde0df0d"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
