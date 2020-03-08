'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "4b72d853ffbe7f0637f59389846fa63d",
"/assets\assets\fonts\Clarissa.ttf": "181cf10d8f422eec9cdc4028d9592a50",
"/assets\assets\images\Air_wave.png": "877d6611527241b4dd30813965576a5f",
"/assets\assets\images\Bottle.png": "2daf9a4ac4e19e89b4f16dee89827d44",
"/assets\assets\images\Bottle_transparent.png": "38e8d11679531c87f449652bb9c9e55a",
"/assets\assets\images\Breath_logo.png": "9bb45a2a0f4faa5c9a400e54a05d9140",
"/assets\assets\images\Breath_logo_and_slogan.png": "653a170b17dcb648d6191d0300863efa",
"/assets\FontManifest.json": "f574449b2505922207e61ef3a1f26c09",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "b36c5e254aed32aa2283a5569ba2d25c",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "b092700b1a638ec8e4cf5584bda478ee",
"/main.dart.js": "0fe28cfa78d5a7b758d4d6a1f898a165",
"/manifest.json": "77c114ad3d5fecc769c4e4a53fef3b30"
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
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
