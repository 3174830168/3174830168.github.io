/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.jpg",
    "revision": "d845798d72488d5cb9f7da29385e26b8"
  },
  {
    "url": "404.html",
    "revision": "68e55e5804a3e124ecc980eed90c5bed"
  },
  {
    "url": "assets/css/0.styles.ab88cbff.css",
    "revision": "065fa34f7e7f824fd1999e256b1dac77"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.daa4d35c.js",
    "revision": "a01f171184872879d78e0516ede700d2"
  },
  {
    "url": "assets/js/10.f75dacd8.js",
    "revision": "257c28bfe5c085aef00c23e1b4daa789"
  },
  {
    "url": "assets/js/11.1bca7a20.js",
    "revision": "a3ef83abfda02e545c3dd4fb40a3c1c8"
  },
  {
    "url": "assets/js/12.59e16a75.js",
    "revision": "66d96a25aec509389a4f3d547a9ade5a"
  },
  {
    "url": "assets/js/13.44da5fdd.js",
    "revision": "a55c6e5d4c9ed73d3dd28ddf6ab9b152"
  },
  {
    "url": "assets/js/14.7ef7232f.js",
    "revision": "6b3bc350ee4a175df81ac0d057263dc8"
  },
  {
    "url": "assets/js/15.e4056b20.js",
    "revision": "5c3dd388587a9adcf68b595a3f77983a"
  },
  {
    "url": "assets/js/16.cb84c5d0.js",
    "revision": "f5cd9523c9696632692453ed10394ce4"
  },
  {
    "url": "assets/js/17.b7e6c51c.js",
    "revision": "2a48502069a63eec36d87f354326319e"
  },
  {
    "url": "assets/js/18.a72fa51f.js",
    "revision": "f9c5387d610cca05d83e6caf55c2c319"
  },
  {
    "url": "assets/js/19.82a418f7.js",
    "revision": "49294700c59eee9e87b6afc29d578d9a"
  },
  {
    "url": "assets/js/20.c166f1c8.js",
    "revision": "178ca307d379d33ffc65c48415cc24be"
  },
  {
    "url": "assets/js/21.cdead59a.js",
    "revision": "adcd567e26fa804b232f403d702eba21"
  },
  {
    "url": "assets/js/22.fc49842b.js",
    "revision": "ae347a9b6c5db2e0098d4576ea099816"
  },
  {
    "url": "assets/js/23.edd6105e.js",
    "revision": "30cd31298cc9d9755ff6e0e01df7464a"
  },
  {
    "url": "assets/js/24.74a9753f.js",
    "revision": "f3ed73bd11e5883d9e1766208de3bc35"
  },
  {
    "url": "assets/js/25.3842e1a6.js",
    "revision": "2413894e95dee59d248829c4beb11896"
  },
  {
    "url": "assets/js/26.15501485.js",
    "revision": "c40fdd9037962be38eb4604f211a0c81"
  },
  {
    "url": "assets/js/27.5af6e6ad.js",
    "revision": "e67bca7c5a82c3e3cf15379435fb5610"
  },
  {
    "url": "assets/js/28.3c55d717.js",
    "revision": "5422bd6d2ae6a1f3abbd67f99c937853"
  },
  {
    "url": "assets/js/29.a5a678e5.js",
    "revision": "82201766401c780b6d415e79fe5f9efb"
  },
  {
    "url": "assets/js/3.04a9867f.js",
    "revision": "5ec79ccd6f00ae1484a0bd24a91ce43d"
  },
  {
    "url": "assets/js/30.dbfabe30.js",
    "revision": "9aa26772cbbc7b552f7483c54a7bf66b"
  },
  {
    "url": "assets/js/31.63ef1e96.js",
    "revision": "5c7ac6d4817d3a17225a54c0110c4393"
  },
  {
    "url": "assets/js/32.d0ea73b0.js",
    "revision": "d3acc605eaecdc2dec11667c3fecc278"
  },
  {
    "url": "assets/js/4.2feb279c.js",
    "revision": "bb96dff24352b99831fd077a4e137338"
  },
  {
    "url": "assets/js/5.9a121923.js",
    "revision": "12e7105c9973a635c89e9fc80544a4a2"
  },
  {
    "url": "assets/js/6.6f336777.js",
    "revision": "ff8bd3e9c9b82b94a38894cfe94c1b5b"
  },
  {
    "url": "assets/js/7.381fc17d.js",
    "revision": "912fee287d351400e3837f6f7d011a38"
  },
  {
    "url": "assets/js/8.cf5bccd9.js",
    "revision": "2f1354f6c2c92996d0d3b3b560d77936"
  },
  {
    "url": "assets/js/9.325a9a28.js",
    "revision": "c22dab6fc62bb074199795b2788dcbd1"
  },
  {
    "url": "assets/js/app.f88e999d.js",
    "revision": "f798ab1cc36a4eaddd164b2904271d64"
  },
  {
    "url": "baodian/high/index.html",
    "revision": "425b10e35453968888349c6dda12bbbc"
  },
  {
    "url": "baodian/high/notes/high.html",
    "revision": "62ac7cb51978c1d401d29ea799bbab4c"
  },
  {
    "url": "baodian/zero/index.html",
    "revision": "0239f0f09d9315f729e68a57cffc1e33"
  },
  {
    "url": "baodian/zero/notes/02 String、Long 源码解析和面试题.html",
    "revision": "946e592893be40f0d89333dd260fb19b"
  },
  {
    "url": "baodian/zero/notes/03 Java 常用关键字理解.html",
    "revision": "7d60c989a098886085e12c5954e6f78a"
  },
  {
    "url": "baodian/zero/notes/04 Arrays、Collections、Objects 常用方法源码解析.html",
    "revision": "fb865c8c5545908a73917a9fb28b4574"
  },
  {
    "url": "baodian/zero/notes/05 ArrayList 源码解析和设计思路.html",
    "revision": "4e1211740c3c13bda46428341ca70595"
  },
  {
    "url": "baodian/zero/notes/06 LinkedList 源码解析.html",
    "revision": "a73c45d3a73f11161195cbbf2c4ca7ce"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "bgm/1.jpg",
    "revision": "d845798d72488d5cb9f7da29385e26b8"
  },
  {
    "url": "categories/backEnd/index.html",
    "revision": "dd3d30f0e3893324cbaec31ea101f3f7"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "bf023b7b76539ecf0bd165e1f985b744"
  },
  {
    "url": "categories/index.html",
    "revision": "9b814f9593d941b3ee155a6f8de61781"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "b23a3f3ffd3c5bbdace63adcad3e4534"
  },
  {
    "url": "categories/js/index.html",
    "revision": "9a83512a03c4215384ffea8bffd4341b"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "c44238a41d9c33e91f30982cb8c50954"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "1d99de0d01a3ff082bd3904ef692cdea"
  },
  {
    "url": "categories/wechat/index.html",
    "revision": "d49ca5df2b86ab74fa93fc26e37b2d15"
  },
  {
    "url": "css/style.css",
    "revision": "81051bcc2cf1bedf378224b0a93e2877"
  },
  {
    "url": "guide/index.html",
    "revision": "13ea22dbb87ec937ad8ecaa7f9b3f4d1"
  },
  {
    "url": "guide/notes/微信小程序.html",
    "revision": "15dabab943a3dbb642d532f9313f7700"
  },
  {
    "url": "guide/notes/css.html",
    "revision": "5e6d53f8f78a9af7786c6dcdee24b386"
  },
  {
    "url": "guide/notes/ele.html",
    "revision": "9ace230670a0cf26773cb6d449e65736"
  },
  {
    "url": "guide/notes/js1.html",
    "revision": "dd86caa7e53290299ba0bc4c0d4c75eb"
  },
  {
    "url": "guide/notes/js2.html",
    "revision": "3f6c09eb8a28ac99837d2476815628de"
  },
  {
    "url": "guide/notes/linux.html",
    "revision": "a52b90d75f7265b9839d7b75ad8aa53e"
  },
  {
    "url": "guide/notes/vue.html",
    "revision": "0961ac305fbf7f2cd21c6f05d507345d"
  },
  {
    "url": "index.html",
    "revision": "7e410101825acab19adc155f923a51f7"
  },
  {
    "url": "java/index.html",
    "revision": "6b3ff0079b783a75e94f0e98a9f78826"
  },
  {
    "url": "java/notes/filter.html",
    "revision": "2a5477d60154a695541b10239fb469bb"
  },
  {
    "url": "tag/css/index.html",
    "revision": "45c06e4b9435bfba1937fca8c8aa93b0"
  },
  {
    "url": "tag/elementUI/index.html",
    "revision": "0c915e35e1c3a3d857657b4bf0e51256"
  },
  {
    "url": "tag/index.html",
    "revision": "c630b617d454741e83ed0701be3dc7cf"
  },
  {
    "url": "tag/java/index.html",
    "revision": "2e3a6a897d5ab0dae105b365c7555a27"
  },
  {
    "url": "tag/js/index.html",
    "revision": "529ef160aa21e1c576a13ef1fe5ffc2f"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "b3c12e60873761f7f2971a01937dae3f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4e4329ad1c02c77562c7520e79358662"
  },
  {
    "url": "tag/wechat/index.html",
    "revision": "323000419e22889e0bf43c3a120af3c7"
  },
  {
    "url": "timeline/index.html",
    "revision": "d4b78219eb3e8ad2df645aeb34ddea34"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
