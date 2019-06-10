importScripts('/password-police/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/password-police/_nuxt/8ff4bb255beeba9da281.js",
    "revision": "d27f38c369e47a28a4772e1df9a3fb11"
  },
  {
    "url": "/password-police/_nuxt/a251743e797e855337d1.js",
    "revision": "486f0bc4a89fd6de0eceec7d0633a7dd"
  },
  {
    "url": "/password-police/_nuxt/d3ffde5fad6314360c0b.js",
    "revision": "9e4f43f6c44c614a8c50a0e2440be85c"
  },
  {
    "url": "/password-police/_nuxt/dec3d0925da0c8ed0709.js",
    "revision": "d0017c4f6acdb3777697f35b70baf3d4"
  },
  {
    "url": "/password-police/_nuxt/efdc0b439c6975885a88.js",
    "revision": "681e74e3bc5803dc19924fc6dce48628"
  }
], {
  "cacheId": "password-police",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/password-police/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/password-police/.*'), workbox.strategies.networkFirst({}), 'GET')
