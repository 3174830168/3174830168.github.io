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
    "revision": "cb4d1ab0531d3e777419a247e9b39784"
  },
  {
    "url": "404.html",
    "revision": "8f534ea2b75530dc549d80942d4ec08a"
  },
  {
    "url": "assets/css/0.styles.6f4651b2.css",
    "revision": "2ebb8d7cd73a801ae6873f04c247534e"
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
    "url": "assets/js/1.b42e399a.js",
    "revision": "a01f171184872879d78e0516ede700d2"
  },
  {
    "url": "assets/js/10.f75dacd8.js",
    "revision": "257c28bfe5c085aef00c23e1b4daa789"
  },
  {
    "url": "assets/js/11.85b49775.js",
    "revision": "f990e0814160b9b4958f81f9219a4dd9"
  },
  {
    "url": "assets/js/12.63c9d7d8.js",
    "revision": "5fd824b75bb16671081dc5181e64d24f"
  },
  {
    "url": "assets/js/13.169ecc31.js",
    "revision": "8928a674ee12779a1aa9c75617b661de"
  },
  {
    "url": "assets/js/14.7ef7232f.js",
    "revision": "6b3bc350ee4a175df81ac0d057263dc8"
  },
  {
    "url": "assets/js/15.29a9024f.js",
    "revision": "d2de59c4333be421598300bfd07c7404"
  },
  {
    "url": "assets/js/16.8dcda9a1.js",
    "revision": "40beb213312e113720ff6a59caeccb15"
  },
  {
    "url": "assets/js/17.b7e6c51c.js",
    "revision": "2a48502069a63eec36d87f354326319e"
  },
  {
    "url": "assets/js/18.ea53f040.js",
    "revision": "fcdada990a4c42a915f1f445c1947a6e"
  },
  {
    "url": "assets/js/19.88baf4cf.js",
    "revision": "5887201223d16341bc8dc1654d0fa405"
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
    "url": "assets/js/23.8ca6b283.js",
    "revision": "c9981c4df8cea541e4efce7b14c6bc91"
  },
  {
    "url": "assets/js/24.b1897949.js",
    "revision": "81efa6d4f54a86e521e03b667b46e79f"
  },
  {
    "url": "assets/js/25.3842e1a6.js",
    "revision": "2413894e95dee59d248829c4beb11896"
  },
  {
    "url": "assets/js/26.6d0ad106.js",
    "revision": "e514408621edaf20bbcae2509d3ed1ee"
  },
  {
    "url": "assets/js/27.137faf2d.js",
    "revision": "866bfd737a208122602a4928556f1900"
  },
  {
    "url": "assets/js/28.8458115c.js",
    "revision": "a046e1841ac90161af966a0d311d99e3"
  },
  {
    "url": "assets/js/29.a5a678e5.js",
    "revision": "82201766401c780b6d415e79fe5f9efb"
  },
  {
    "url": "assets/js/3.807358b2.js",
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
    "url": "assets/js/4.9be0e219.js",
    "revision": "bb96dff24352b99831fd077a4e137338"
  },
  {
    "url": "assets/js/5.ee92ee15.js",
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
    "url": "assets/js/app.ab5ceab6.js",
    "revision": "cb205b40c0c4f7322c5879ac52ae7112"
  },
  {
    "url": "baodian/high/index.html",
    "revision": "368f34e7db0fceadc3ef7a8023c65850"
  },
  {
    "url": "baodian/high/notes/high.html",
    "revision": "359829f8b3a9cfb93163db8494dbadbc"
  },
  {
    "url": "baodian/zero/index.html",
    "revision": "a240d26a18d443debb1a0cebaa7d1b07"
  },
  {
    "url": "baodian/zero/notes/02 String、Long 源码解析和面试题.html",
    "revision": "995fc195e70c654cacbf47dbefd9c62c"
  },
  {
    "url": "baodian/zero/notes/03 Java 常用关键字理解.html",
    "revision": "20b801369ff5d489d91d728bd92fc696"
  },
  {
    "url": "baodian/zero/notes/04 Arrays、Collections、Objects 常用方法源码解析.html",
    "revision": "73ecb5c10a24a7d9f66f63785473c1eb"
  },
  {
    "url": "baodian/zero/notes/05 ArrayList 源码解析和设计思路.html",
    "revision": "48f3d4de8ddfc706ab82bab2db965830"
  },
  {
    "url": "baodian/zero/notes/06 LinkedList 源码解析.html",
    "revision": "d545b2d14dca2779cd7976d1f945cf5d"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "bgm/1.jpg",
    "revision": "cb4d1ab0531d3e777419a247e9b39784"
  },
  {
    "url": "categories/backEnd/index.html",
    "revision": "abb65301a4c19d8c62a9b07ea009fcd7"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "af488d7455fd65b6b18d0fa50f40eb0e"
  },
  {
    "url": "categories/index.html",
    "revision": "889c6c7ca663bb91ef64434c5860a25c"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "6114c4976393b53f7961670cbc58db32"
  },
  {
    "url": "categories/js/index.html",
    "revision": "0e22108d1b795ed99daf1a9edd466b5f"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "d73d4c0079d795ab130bfc54bc483031"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "0c6b41cecb6233b764249a9c1bf4b7db"
  },
  {
    "url": "categories/wechat/index.html",
    "revision": "c5b055d41228daf8caa5efe4ade23e0a"
  },
  {
    "url": "css/style.css",
    "revision": "81051bcc2cf1bedf378224b0a93e2877"
  },
  {
    "url": "guide/index.html",
    "revision": "def3407c8f13704acc41d6d297d8c01e"
  },
  {
    "url": "guide/notes/css.html",
    "revision": "f6b0d0b7511d8b59fcf04235283275df"
  },
  {
    "url": "guide/notes/ele.html",
    "revision": "66c4b6dfa5fe2a0e06cc94aef47c4b49"
  },
  {
    "url": "guide/notes/js1.html",
    "revision": "920382cc6a41e609ce889c90fe92dd24"
  },
  {
    "url": "guide/notes/js2.html",
    "revision": "1bbf7d26ce53e1029787b0afa0303388"
  },
  {
    "url": "guide/notes/linux.html",
    "revision": "b20b0ef5732db81dc96dda6d39c09c8a"
  },
  {
    "url": "guide/notes/vue.html",
    "revision": "f7a0a8133c323345c7511822476be082"
  },
  {
    "url": "guide/notes/微信小程序.html",
    "revision": "93189acf9b932b310283d86d1047b6d0"
  },
  {
    "url": "index.html",
    "revision": "f5c4cea46bae4ef3f26adbbeff2611a2"
  },
  {
    "url": "java/index.html",
    "revision": "98fadd6a21c8dc5605289f28bab6113a"
  },
  {
    "url": "java/notes/filter.html",
    "revision": "f07c1ef22198832c043d74e19cfdd958"
  },
  {
    "url": "tag/css/index.html",
    "revision": "ef19445594ffafd94cfcaaf1a79b9e4b"
  },
  {
    "url": "tag/elementUI/index.html",
    "revision": "ad26084211d16c9c2e885f205e682992"
  },
  {
    "url": "tag/index.html",
    "revision": "0a1875452aff058152e2fe818bb2b23f"
  },
  {
    "url": "tag/java/index.html",
    "revision": "25141a4ccd524c6d4c735ce979d4a762"
  },
  {
    "url": "tag/js/index.html",
    "revision": "a25991fc4fddd3c0e3175cdbcef8fe33"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "1f50c0a425fe29813febbfd00a3bf3e6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "edbe619d2aea2d2c28e7815f36a32c51"
  },
  {
    "url": "tag/wechat/index.html",
    "revision": "8b69bf624a5fea73e329da034b6b42ca"
  },
  {
    "url": "timeline/index.html",
    "revision": "a666c530035ff5ec32a22713dd3dc145"
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
