'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f849503a0f24347d7724fd15ea95c51d",
"assets/assets/fonts/Clarissa.ttf": "d36867bcfd06d796a6cb81f65f6fa327",
"assets/assets/images/Air_wave.png": "877d6611527241b4dd30813965576a5f",
"assets/assets/images/Bottle.png": "2daf9a4ac4e19e89b4f16dee89827d44",
"assets/assets/images/Bottle_CA.png": "9a3a29337ac8dd458a9e57aa2357dec3",
"assets/assets/images/Bottle_FI.png": "0186c92590a148ad97d00b18937982b8",
"assets/assets/images/Bottle_FR.png": "6a82aa7a66724760d5f823b51297dd76",
"assets/assets/images/Bottle_transparent.png": "38e8d11679531c87f449652bb9c9e55a",
"assets/assets/images/Breath_logo.png": "9bb45a2a0f4faa5c9a400e54a05d9140",
"assets/assets/images/Breath_logo_and_slogan.png": "653a170b17dcb648d6191d0300863efa",
"assets/assets/images/Flag_CA.png": "bbae00335d79b3b52efd2f12accb6921",
"assets/assets/images/Flag_FI.png": "6c2ab93106d42304c4588505b15c2ea9",
"assets/assets/images/Flag_FR.png": "2b393fc94a98f43212954544e02d0615",
"assets/FontManifest.json": "f574449b2505922207e61ef3a1f26c09",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "3f38540a7d8b7904e4335ae1d0cd909d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0673420412b279ac137c9dbdcf5b699a",
"/": "0673420412b279ac137c9dbdcf5b699a",
"main.dart.js": "b918707c7fdfbaf401cc8eaa238dab02",
"manifest.json": "a0c332e54208cea1ed514bfedde0df0d"
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
