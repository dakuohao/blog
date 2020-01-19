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
    "url": "404.html",
    "revision": "1291bd6d008df162fe3919b571a34c9d"
  },
  {
    "url": "assets/css/0.styles.a0b9e610.css",
    "revision": "597780c06428daf2785d193750fcfd86"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0a41504e.js",
    "revision": "d572e3ce13cf2346212537469ad41350"
  },
  {
    "url": "assets/js/100.1a122381.js",
    "revision": "7d0bc53765c8e6a97a0025c00ec17b7d"
  },
  {
    "url": "assets/js/101.2d7bd1ee.js",
    "revision": "5b553f8093d80ac836493f26fce9fd65"
  },
  {
    "url": "assets/js/102.de74ad39.js",
    "revision": "3c0300e2c9f5a7b38856cac714a2a0e6"
  },
  {
    "url": "assets/js/103.ed94503f.js",
    "revision": "7ffa714a6bdb4e5b3681ee24eac120b3"
  },
  {
    "url": "assets/js/104.ff6b9342.js",
    "revision": "e44dd5f24ede6e7fe960034cbbd80458"
  },
  {
    "url": "assets/js/105.0aee0689.js",
    "revision": "f6df24aca3934f9bb58d2cd843427d97"
  },
  {
    "url": "assets/js/106.d083aead.js",
    "revision": "22ec04938c8282d388657381f6713d2e"
  },
  {
    "url": "assets/js/107.7cd4b44e.js",
    "revision": "3eecfa9492838e6ec02d6352db3feeb0"
  },
  {
    "url": "assets/js/108.4e11fc44.js",
    "revision": "7729b9d7584cc7f8fab63bc3a67fa191"
  },
  {
    "url": "assets/js/109.ac3113eb.js",
    "revision": "4d8887d123e61cc267564568d38938ee"
  },
  {
    "url": "assets/js/11.25d90c0a.js",
    "revision": "fcaa02703e22a726fa552a5800947c5f"
  },
  {
    "url": "assets/js/110.4dcdcf48.js",
    "revision": "93ac71f56a3dd299514b667a6cc34482"
  },
  {
    "url": "assets/js/111.d347c169.js",
    "revision": "75c8bc74ea8aaeb93c0b4f11d25c67bc"
  },
  {
    "url": "assets/js/112.fb317b11.js",
    "revision": "495831b476042856f46315a19440098b"
  },
  {
    "url": "assets/js/113.3e91ba64.js",
    "revision": "3698b7afca721b28349beafeb7f24f6e"
  },
  {
    "url": "assets/js/114.304f2423.js",
    "revision": "409885337495246dbf7123976fb4d768"
  },
  {
    "url": "assets/js/115.8ba7f602.js",
    "revision": "d1966fee2c35507414a0218b06dc6294"
  },
  {
    "url": "assets/js/116.13c70e62.js",
    "revision": "f31835ebbc3793ca3b8be03ebf3200ec"
  },
  {
    "url": "assets/js/117.ec0760bf.js",
    "revision": "eb82329df64c272065290d963db250b6"
  },
  {
    "url": "assets/js/118.2bbe714e.js",
    "revision": "0aa36f9d4f6c04296eba7e39c46e5f86"
  },
  {
    "url": "assets/js/119.c185fb07.js",
    "revision": "17665fa8824f194b5bc1aa2defb8bfec"
  },
  {
    "url": "assets/js/12.94b1db06.js",
    "revision": "7f688648d78a6abd174ea2e3289a542a"
  },
  {
    "url": "assets/js/120.a3cd0fb6.js",
    "revision": "c10a57968496cedb904265c5010cc04e"
  },
  {
    "url": "assets/js/121.cfd680d6.js",
    "revision": "d458e76521027f478b3e1e5a1460f315"
  },
  {
    "url": "assets/js/122.9a58ffbe.js",
    "revision": "b18c6d6725438bcc494286e75933c765"
  },
  {
    "url": "assets/js/123.1ee395ea.js",
    "revision": "2c17c3865f2918d0010c9132f3088bdb"
  },
  {
    "url": "assets/js/124.7b28e94f.js",
    "revision": "a259a6a20007305143b55957df724260"
  },
  {
    "url": "assets/js/125.5590a903.js",
    "revision": "c43da4ced3b518320b494f1cf8dc27ba"
  },
  {
    "url": "assets/js/126.72bf5179.js",
    "revision": "19bdc83d1b8221e48174bd939077f795"
  },
  {
    "url": "assets/js/127.59a541b4.js",
    "revision": "3715808ae771ec195ab088a4761c4651"
  },
  {
    "url": "assets/js/128.0e03aec8.js",
    "revision": "20c9dad5b2d6f0a8ad8bde35ec2473f5"
  },
  {
    "url": "assets/js/129.0a38d268.js",
    "revision": "4139505583c664ad638132fd1a2e4929"
  },
  {
    "url": "assets/js/13.4dc0ff60.js",
    "revision": "ae260d8db3185acf3c2567254a52bbea"
  },
  {
    "url": "assets/js/130.3a50d325.js",
    "revision": "02f1b20095a775d43e9c16a8738396f1"
  },
  {
    "url": "assets/js/131.c47e4e8c.js",
    "revision": "866655ced0ef65ad268b7bfd54e7d593"
  },
  {
    "url": "assets/js/132.b52cb501.js",
    "revision": "3fd6569f180eeec6533b893ea46048cd"
  },
  {
    "url": "assets/js/133.17d4731c.js",
    "revision": "48efcea036176604409a77841de5a7dc"
  },
  {
    "url": "assets/js/134.3e110607.js",
    "revision": "796816be47369196dbbc51f1d03fd62e"
  },
  {
    "url": "assets/js/135.2468c220.js",
    "revision": "973e62feb357a0b1ca285162a50e3191"
  },
  {
    "url": "assets/js/136.bb8169b1.js",
    "revision": "3b2c9fb2383d31da2c0b4191841a8cfa"
  },
  {
    "url": "assets/js/137.29325f1c.js",
    "revision": "08580dd6ecb1653c20856452d268fc83"
  },
  {
    "url": "assets/js/138.89132ce9.js",
    "revision": "14409d6bec3e6853a87b364d1b62d803"
  },
  {
    "url": "assets/js/139.cae74964.js",
    "revision": "5c303c87bcf78c6a3aa55ea6b05452c8"
  },
  {
    "url": "assets/js/14.c3e4e2cc.js",
    "revision": "e2ccb9d1694083e407bb4b359bd2fd17"
  },
  {
    "url": "assets/js/140.01ed8884.js",
    "revision": "c8f786fdea861ec22fb8b9e0e6553e5b"
  },
  {
    "url": "assets/js/141.96af4211.js",
    "revision": "c5ffba33b9cbb70e3578484eeddef368"
  },
  {
    "url": "assets/js/142.8a04a338.js",
    "revision": "6e066b61bacd558f466add80e05a8b44"
  },
  {
    "url": "assets/js/143.a6bfabc3.js",
    "revision": "71879daee5e7e9dbd1c2821f2e9b4ef4"
  },
  {
    "url": "assets/js/144.f72f0548.js",
    "revision": "30e612575e64792f67f74465c9b44dda"
  },
  {
    "url": "assets/js/145.c9e82eb5.js",
    "revision": "3159cd1c236b419928368983665d5fa6"
  },
  {
    "url": "assets/js/146.f3896e8b.js",
    "revision": "763e2faff942ca8914c80544e16b2a0a"
  },
  {
    "url": "assets/js/147.7d5ad47d.js",
    "revision": "e08fb0fdcf092f6e59e0247c90917980"
  },
  {
    "url": "assets/js/148.6131e58e.js",
    "revision": "61988a5b10fedaa7e80617abf3780582"
  },
  {
    "url": "assets/js/149.9bb95838.js",
    "revision": "fd2543b8436e1261c277be520b79a5e5"
  },
  {
    "url": "assets/js/15.89df067f.js",
    "revision": "f201529526585c7c9c7c32878abcf9e8"
  },
  {
    "url": "assets/js/150.a45d5e5c.js",
    "revision": "cca9a537f088645fa848d7ecd28a3115"
  },
  {
    "url": "assets/js/151.4b4e2b4b.js",
    "revision": "68f80b89fc6e4d31bda88a12e778b612"
  },
  {
    "url": "assets/js/152.04ce8ece.js",
    "revision": "db46945aa63938bb8656640c8d71a901"
  },
  {
    "url": "assets/js/153.1fc1b1d8.js",
    "revision": "960714a531f3a869683d79247e6be39b"
  },
  {
    "url": "assets/js/154.a9a109b3.js",
    "revision": "9328be876944921d700867b905cccb0d"
  },
  {
    "url": "assets/js/155.c7f62f97.js",
    "revision": "f3c58fead685eb678669b19c173cd8cd"
  },
  {
    "url": "assets/js/156.d22e0e71.js",
    "revision": "7329d4aa6dd7fa22ced9bd519647bac9"
  },
  {
    "url": "assets/js/157.fb1721b7.js",
    "revision": "62d5246f972db685d37139ae0de86a43"
  },
  {
    "url": "assets/js/158.3870e461.js",
    "revision": "58d4da557d80d1d6ad4c161cdb78e994"
  },
  {
    "url": "assets/js/159.9aa7c418.js",
    "revision": "cde318589ad7e439ac66234dc0ac2b1f"
  },
  {
    "url": "assets/js/16.903c2929.js",
    "revision": "109cc246beed27e9b181efc23fd24158"
  },
  {
    "url": "assets/js/160.766b24c7.js",
    "revision": "3f12cdb4948a207d637f4abf653434c2"
  },
  {
    "url": "assets/js/161.70f87529.js",
    "revision": "1b99c348952885559ec7078db8751adf"
  },
  {
    "url": "assets/js/162.8ce53b76.js",
    "revision": "da8b42d54552b7d7507b13c6d3b8a4c9"
  },
  {
    "url": "assets/js/163.d961093e.js",
    "revision": "4571b550683c528d2f3953bfb2a79f37"
  },
  {
    "url": "assets/js/164.0ffa62f6.js",
    "revision": "afeaac7fdd32b6f1a23e555f52026982"
  },
  {
    "url": "assets/js/165.b4e15812.js",
    "revision": "d68fdbd08446c04b4e5fe312250bf70c"
  },
  {
    "url": "assets/js/166.b0d04ae4.js",
    "revision": "824075460fbe21e460233fd336979be4"
  },
  {
    "url": "assets/js/167.a1e61445.js",
    "revision": "2ff7b38e5cf1cbbff4b2f3802f02b6d4"
  },
  {
    "url": "assets/js/168.62620016.js",
    "revision": "29f3cf783b42f9ca07b9b1b924f1998b"
  },
  {
    "url": "assets/js/169.1462974c.js",
    "revision": "0813a4c7502bbbb6b5e5e6e84f452595"
  },
  {
    "url": "assets/js/17.8a25a80c.js",
    "revision": "e94ec600a99f4ccc65f1d8ad8d5d840f"
  },
  {
    "url": "assets/js/170.161fae48.js",
    "revision": "85e3e5d4f018d408b5f0cf7e1a3b45e2"
  },
  {
    "url": "assets/js/171.2c89e0fd.js",
    "revision": "04c09712d06fe3ef85d3c6cba134d853"
  },
  {
    "url": "assets/js/172.d65587f3.js",
    "revision": "c42071cbaa1a467605352c695470fe94"
  },
  {
    "url": "assets/js/18.db842125.js",
    "revision": "6d83ce5fb03b81aa03d0e9649c6f73b5"
  },
  {
    "url": "assets/js/19.b53ec118.js",
    "revision": "f587f168e6278276a6357276af9db49b"
  },
  {
    "url": "assets/js/2.627a8444.js",
    "revision": "7497759640baaef5c8e73d2e18c054ac"
  },
  {
    "url": "assets/js/20.e26506a4.js",
    "revision": "cafa7eafcd9e3c4356573f203b81492b"
  },
  {
    "url": "assets/js/21.1457e6aa.js",
    "revision": "47f3f297a0f4aded039d0a3156ad31e1"
  },
  {
    "url": "assets/js/22.eed21fb2.js",
    "revision": "f02a3060ae7f7bcbcedb10b0497892d0"
  },
  {
    "url": "assets/js/23.f5f75791.js",
    "revision": "22773e94767a12a12b91815c8eaaedb7"
  },
  {
    "url": "assets/js/24.8d0927e0.js",
    "revision": "51ab780c4a36d9cc0ac3f6d800dfa1cc"
  },
  {
    "url": "assets/js/25.0629350a.js",
    "revision": "d4f5c06452ef62a8b4ba2dc8dc6e2894"
  },
  {
    "url": "assets/js/26.38463e1f.js",
    "revision": "b6af5694b5ebbf45dc6ad01fc59c5d9c"
  },
  {
    "url": "assets/js/27.30bcb8d6.js",
    "revision": "e44154fded5e0345f9d8b3048fefc957"
  },
  {
    "url": "assets/js/28.a031a5cd.js",
    "revision": "5a32b29325a2311f8ed7c250e1c1e518"
  },
  {
    "url": "assets/js/29.d0326c2a.js",
    "revision": "10a84f7f42c82cd3bff3331b7f6728d1"
  },
  {
    "url": "assets/js/3.7ef7dc05.js",
    "revision": "d4c68f310288da85390df9a478f3308d"
  },
  {
    "url": "assets/js/30.9b8af315.js",
    "revision": "496daac893c922fdb147b81e7b3b3268"
  },
  {
    "url": "assets/js/31.c771f36e.js",
    "revision": "b8e43db20ecf309d6e76a011017925cc"
  },
  {
    "url": "assets/js/32.c91ebcb9.js",
    "revision": "67841be485aae5aeda3a9d21293314e0"
  },
  {
    "url": "assets/js/33.f9be7a25.js",
    "revision": "c7b1508a39cf46fdc61d6266348b3221"
  },
  {
    "url": "assets/js/34.46ecbf6c.js",
    "revision": "29aa4ca8feaf07355fb3de7775d3e19b"
  },
  {
    "url": "assets/js/35.c68c499a.js",
    "revision": "9879a6a00225ad998fea9507d5a60d31"
  },
  {
    "url": "assets/js/36.8b6441c6.js",
    "revision": "ce63da1d27cf515d5883f9caea9df40a"
  },
  {
    "url": "assets/js/37.e39c92dd.js",
    "revision": "a0c5d5772b25726f8d513c01d71d66e3"
  },
  {
    "url": "assets/js/38.29e85c2e.js",
    "revision": "f9a23625e291abd7e232aa9333dbc4ec"
  },
  {
    "url": "assets/js/39.cf6a1cd8.js",
    "revision": "1257fc1e73679c2bd1552231001d9397"
  },
  {
    "url": "assets/js/4.19000175.js",
    "revision": "46032e61a2da83ef246232458ae73c7d"
  },
  {
    "url": "assets/js/40.278dd2ac.js",
    "revision": "65c5c9d27d3a7cdb1d455470dc81f69b"
  },
  {
    "url": "assets/js/41.d8144f35.js",
    "revision": "a6adbba8eafe212eeece842e77f1cabc"
  },
  {
    "url": "assets/js/42.a0a530aa.js",
    "revision": "41138d20a2d743fa869871b4a917af1c"
  },
  {
    "url": "assets/js/43.1b0c1dc0.js",
    "revision": "d318b9cc9404444d68532ee7616b44e9"
  },
  {
    "url": "assets/js/44.a7e946ea.js",
    "revision": "f5e45f4668b3773dca8c79ceb0e7dc64"
  },
  {
    "url": "assets/js/45.859df762.js",
    "revision": "8057c79f47276c47914fce4012942557"
  },
  {
    "url": "assets/js/46.27f60658.js",
    "revision": "c9c66644f91d8ba0d433d11dd471e5f0"
  },
  {
    "url": "assets/js/47.c5f7d817.js",
    "revision": "60c630fc4366e5e4b30580b913877b9f"
  },
  {
    "url": "assets/js/48.736d243f.js",
    "revision": "c29611b8793ddc9bd19f8e7ae9b5c944"
  },
  {
    "url": "assets/js/49.d8a4139f.js",
    "revision": "77a57a599b803685d857d83e2aac574c"
  },
  {
    "url": "assets/js/5.f9ea3137.js",
    "revision": "50a2700104fe05039b6788e05a972b57"
  },
  {
    "url": "assets/js/50.dde0ab56.js",
    "revision": "c4816ee3e0c4c5be21c28fab6eca3e21"
  },
  {
    "url": "assets/js/51.dc42e9b9.js",
    "revision": "0c7cad7af942c9fdcefcc41825172e15"
  },
  {
    "url": "assets/js/52.e6bf7fc8.js",
    "revision": "8214b6c39bd96b0bf28594759c625eae"
  },
  {
    "url": "assets/js/53.17eb7810.js",
    "revision": "c9758ab9b9aab77a8b8fb039aa23f797"
  },
  {
    "url": "assets/js/54.f393adbe.js",
    "revision": "458bf36dcbaa9bb2d10aabc8262285e8"
  },
  {
    "url": "assets/js/55.edbee58f.js",
    "revision": "6b860d22b3a6c98d46cfe2914d5e2251"
  },
  {
    "url": "assets/js/56.8768fe9f.js",
    "revision": "4b4f4868993a865a593b9a480a9ab79d"
  },
  {
    "url": "assets/js/57.98d9372d.js",
    "revision": "6e2cce1d7973700f8a73e84ce5231c67"
  },
  {
    "url": "assets/js/58.50057614.js",
    "revision": "706dda4d58d5afd82c23978de16f114f"
  },
  {
    "url": "assets/js/59.ee218327.js",
    "revision": "179a99d67a22adc95de7934e8332be1a"
  },
  {
    "url": "assets/js/6.521b284e.js",
    "revision": "eec6acf6af3e89fe6e6cf03f7e080277"
  },
  {
    "url": "assets/js/60.41a2b364.js",
    "revision": "f2bf90b74919f1a05b251773d1292d24"
  },
  {
    "url": "assets/js/61.cb40927a.js",
    "revision": "b1a8001ed6ba712ed586c415ec77d2a7"
  },
  {
    "url": "assets/js/62.abcc3544.js",
    "revision": "4759eed650cb8cb7d878cd9edad3ff09"
  },
  {
    "url": "assets/js/63.f42e4ad5.js",
    "revision": "417795e0767985a13e88d1b891b92d6b"
  },
  {
    "url": "assets/js/64.0c192abf.js",
    "revision": "7b69e17bcea36faea21908cf46d4f256"
  },
  {
    "url": "assets/js/65.75cab293.js",
    "revision": "dbed077202113c697fe9e6cda9821044"
  },
  {
    "url": "assets/js/66.cc88e000.js",
    "revision": "a4957c3091b42bd18cb1ecf3946e3e0a"
  },
  {
    "url": "assets/js/67.2f017eb6.js",
    "revision": "ff0cbf9294451dcf1d2b261864b8d0ad"
  },
  {
    "url": "assets/js/68.45248a24.js",
    "revision": "97156e5e9007719c8b0d00a6c30ef80b"
  },
  {
    "url": "assets/js/69.b0d7ef43.js",
    "revision": "7ef1bc90dc5419964c25ca21b614008b"
  },
  {
    "url": "assets/js/7.5e28f7d9.js",
    "revision": "cc7e57725929f8e5bf44ce503fcd12ac"
  },
  {
    "url": "assets/js/70.6ea1afb1.js",
    "revision": "16ad8ef430962afceb45f38778bffa04"
  },
  {
    "url": "assets/js/71.ecb70702.js",
    "revision": "78b4822cb0b5aa7541cb17eecec0c3a9"
  },
  {
    "url": "assets/js/72.3566603a.js",
    "revision": "3649ec510acca1e746c25a184f061a5c"
  },
  {
    "url": "assets/js/73.65345d33.js",
    "revision": "d3793b7835e147c05b52e4fbd7e2a48a"
  },
  {
    "url": "assets/js/74.c7ae9ca7.js",
    "revision": "784057aa231b4a5b010d2ddf4ad47324"
  },
  {
    "url": "assets/js/75.54c0b0e5.js",
    "revision": "b654d0412f22e4dddfbd504eb8181d67"
  },
  {
    "url": "assets/js/76.627576b6.js",
    "revision": "a5aa0fe6b1c8968997e793f6b755cfcf"
  },
  {
    "url": "assets/js/77.e3f5f700.js",
    "revision": "5660065eb0f880d137a262b278c5a7a9"
  },
  {
    "url": "assets/js/78.bf697a28.js",
    "revision": "210b5f04a045cef11c2c637c112c6970"
  },
  {
    "url": "assets/js/79.feef3808.js",
    "revision": "977cb81541b1e7c7607b9d4844fe7d24"
  },
  {
    "url": "assets/js/8.d51e1d74.js",
    "revision": "af2697bdd76561020008e3915d2fb29c"
  },
  {
    "url": "assets/js/80.82cda44b.js",
    "revision": "a48048f47a285230c83e3bc9bbbfe443"
  },
  {
    "url": "assets/js/81.c8fccac7.js",
    "revision": "9bb3892952c9b81d0e636fac5feeb05c"
  },
  {
    "url": "assets/js/82.289b7174.js",
    "revision": "4d0c14c7d03b4f100ae7cc6e1802fb9e"
  },
  {
    "url": "assets/js/83.4562bdad.js",
    "revision": "abc19e6cbfd585de7ca901bcb8967ef8"
  },
  {
    "url": "assets/js/84.657e679a.js",
    "revision": "de780133fc2da9e7f9d57b85e9ddc5d4"
  },
  {
    "url": "assets/js/85.fabd0cba.js",
    "revision": "980ef77f329573f0541ea3b2512780ec"
  },
  {
    "url": "assets/js/86.ed61cf71.js",
    "revision": "840c026471c1ebc1d049fb5b6c73d08e"
  },
  {
    "url": "assets/js/87.0ed64e26.js",
    "revision": "9a2f23ad63d3336e52d9541f18b0aac6"
  },
  {
    "url": "assets/js/88.fefc450b.js",
    "revision": "0137d2521182aa5ead134acbaa871300"
  },
  {
    "url": "assets/js/89.1e2600dd.js",
    "revision": "439e819a74962001a1e63106eb8a2943"
  },
  {
    "url": "assets/js/9.de8e0795.js",
    "revision": "a453c3c69b259940dec24a94c684ccb5"
  },
  {
    "url": "assets/js/90.80683241.js",
    "revision": "193510706e765913748de936aa0aa613"
  },
  {
    "url": "assets/js/91.c2dc6266.js",
    "revision": "731bf0ec8871ac4c5713027ff14c7b8f"
  },
  {
    "url": "assets/js/92.e013223a.js",
    "revision": "b4040b8595cb70bfc87d656af2f4e305"
  },
  {
    "url": "assets/js/93.79d4fa90.js",
    "revision": "036f73ca18e25ecec1f87bb8b8ed10b9"
  },
  {
    "url": "assets/js/94.ea6fee64.js",
    "revision": "177f75a2c5d4552f5134114385ee3798"
  },
  {
    "url": "assets/js/95.e1a876aa.js",
    "revision": "d32c9b6051f92bbc9d77ad5fc69b9f47"
  },
  {
    "url": "assets/js/96.c2f54821.js",
    "revision": "ac2f6d11d2db61ddbe6e18d429a30df3"
  },
  {
    "url": "assets/js/97.aa3e46d6.js",
    "revision": "e57ae1261e9ea85300939e1f79df85f7"
  },
  {
    "url": "assets/js/98.81148aa0.js",
    "revision": "b77bb2ae9cc0df498cf522504a2dae79"
  },
  {
    "url": "assets/js/99.38e6e3a6.js",
    "revision": "0d6395edf1531ea16d7b79e20437d1ef"
  },
  {
    "url": "assets/js/app.6d8a1bfd.js",
    "revision": "dc8b114a4d1950d33895687616904c59"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "fc96b113d8943c7e6b93f1094eff59ef"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "friends/index.html",
    "revision": "fcee784a2fd789bf972ae2e300570c97"
  },
  {
    "url": "guide/index.html",
    "revision": "29fc45aad4e9f2a1251f72826b599cea"
  },
  {
    "url": "index.html",
    "revision": "9a58a0881ebded0687202e79bcf7181b"
  },
  {
    "url": "notes/交互设计/love.html",
    "revision": "78380a15988c3f50f566920c9acd144b"
  },
  {
    "url": "notes/交互设计/个人主页设计.html",
    "revision": "6dd00dbfbc4c78122f371dca9c2cfb8d"
  },
  {
    "url": "notes/交互设计/交互设计资料.html",
    "revision": "fa08646ada1eda36f570cc209bd073a0"
  },
  {
    "url": "notes/待整理.html",
    "revision": "59682de89c1e40741c4de24b30c589a6"
  },
  {
    "url": "notes/静态网站/重构选型.html",
    "revision": "219832afe166470f4adc63d9bfeb8ead"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "975d783eafecafcc695c35ac1c5e7977"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "1e2c18318064a6532402752bc0233241"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "76a226f12d7831a592099dc11b8c67ac"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "0e1dd9aaf905a418d2bd65a56a48f2e9"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "da9bddbc1d049c60d111c82cbc7eab40"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "66ba3020852958771955240f7f825293"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "56b65faf498a98b130dcacb61d19d139"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "7bb83d257e2c0c49370db47ed228b9ef"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "6adee3caaea0fec96854ebd50d81e395"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "c7b6cc127a46405effadc826f7d190ea"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "6a9deeeb856559fb3ef03d72746d1af4"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "485ef795e935e43761e9f46f9ecc96b5"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "32de230f2d254b6fa14341b30ff12ec4"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "3390962f38324b65abdbe57f208cf4fa"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "9f8a545c0a41e49bd98a5ec4eea7d8e6"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "25f754902abf513a33fb27f5ec186a71"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "af8fd68347bac7fa8a0875de84e4c5ac"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "d9a365ce870772be873b98e83fd7ebd8"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "f364e75dff86841736406e3b4738273b"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "33e5fc80c7f485dc3d23cabd908fd0a6"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "0d3e5dae074c08588935ed143ac95423"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "fd962330a9fc3011e6ca9848b964df76"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "02aba2e68fe5d372cd0ad8726cf78f49"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "f475ecfd4115858619a6f2a3d8318ed8"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "6a9ecfdcbeed066095d3eb112c482b5e"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "22fe8fe6440c073f80dc74080a3af777"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "f829de3447bf066a279bfe763904db7c"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "6c346b4dbffb6740c32766b6798ce97d"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "e74ec1bebab305ba008ca08bb7de125d"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "7d152b71cad5011d1ccdf8029b99c37c"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "4247b604b8672b21833d7a84f1f85f78"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "5b0dd0779608543d5c7c1dc0db718492"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "14dc4910f165bdedc8e2d5f6f8bb7c21"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "7e54416fa13d41b32055e5f3a380c80a"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "a74946631eebf7bd66c29f1f5eb8b68e"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "39492834251a8edfd470bc84cbe5d2d8"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "859f336f3a2805d555be1ed1573410b0"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "45bf4199f1a8338da547b31b4cf9397c"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "29d5a142a05bf45a8bc03c990f65a23a"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "2fd914a024a5768702cd5ae64f975886"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "76877ee0194f71a25d5cded7855a6778"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "52acf993e521a064b64365250980b7cb"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "d01122db7f0e53337a47a796095314ac"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "6be25c0811d0907bb5dce3e4297215c8"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "cdb8aa7d8dec8789c70e9bdf0b7e6a54"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "1c161acdcd1c6160d249b27a9403613c"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "f8eb3dfa8b04db467a0d9f89b1ae9a3e"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "51102d0c216af3076f0ad1bf60c87b8c"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "144a786c16d445f5d8551b568ab560d5"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "023f87011bb368f31e87d09a9b59ee49"
  },
  {
    "url": "passages/2019-03-15-weekly-share-3/index.html",
    "revision": "63ce8b78778e917e2bea4bf6d63fa221"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "d8b47f707fc8d8f43a9db9c3e8a78e31"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "d7bceb8ddea83d50c3d5406911bf7ba7"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "af82f66a0a8ddc1838a790739be813a5"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "cacebf6df0887b4c7962c07efa484560"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "5a265f6b09a3ccad1545d62a1477cf74"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "df3f31082df38b6069ec2910d4f3f61d"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "7b78d67da88195cef04902afef88527e"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "dccf84fa80436cd2276a7dcb91ff55c7"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "b5593ab89dab33d2ae2c4bd52bf48e25"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "329d61edf2fdf7b44365f55186255d0e"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "d6081d45fb5b7cd5e4ccbc698bdf2ebd"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "aae7281040f90da5add2ceae0ffeca82"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "1a14d31853bf6e70d8dbd80b395ff01f"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "adfb41cd81b7c388a7baa5b9b8721501"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "b44cfd7040de5c2021cd7dbeea7f18b3"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "04a8b10837c55e93b91b2d66be9aa7ee"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "55c5195e864e1f928213b33e5c9b2f7a"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "04a892394125db2c5a643fe2a38ab744"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "ef1bc5b3f99bacebcea21edb109189f3"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "67b400fb41f6db8cf5d14350f092a825"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "b9d0c23fbef702b19f337e7509925cfb"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "94b1c3db998f5ff120a652801bc82d5f"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "e7ec1cf75f058fe2fc31121b596f8ced"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "e54fb7af88058dfcc1dc66a61b612f46"
  },
  {
    "url": "passages/2019-05-25-learn-to-learn/index.html",
    "revision": "5b1e97fd2ba082594aaaf3f6bd98968e"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "444b60e0fdeec9f56ef482e844e4ffbc"
  },
  {
    "url": "passages/2019-06-10-weekly-share/index.html",
    "revision": "981aafaaf268237177f04cb89ece7fdd"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "3952a1ef8c49a50705763c4ce8298710"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "15127a7b053eba07c81c063ce1224c97"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "113a5122f8db15c665963a185686ef97"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "73d7ab636e38357ef0535635864e5b00"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "1fcffe1e50f72eaea05ffb1968441aa2"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "5529ef6f78324b1b4748f931816dea3f"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "8002877eaa380b2622e0ec09f8ccaa63"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "47ef5cdabf28afbd39e79b21be2e1073"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "68e41aef29d2a0233303f4ad132b35ef"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "f951c45ca98bfd98382a79ceb773f587"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "a9e230dfcba0a08d17359e07e6b63213"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "666a64fd1fddcd3756984322e59369eb"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "f9f45d8db237fbb3646d92f53bcaaecf"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "847fc00748d1ad143e17514dff14ffd8"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "420d538d0a4dab9ee06b2000b5512220"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "34aa26fb18b3b52208588e816350d317"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "a22699c9a02d552374b89825381e824c"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "a158909d93c05f34c4efdc8a94bc4a22"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "530b9445fbcd83cd74e0a36ac64238ca"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "cc0cc0dbd9237b17931661ad94d42047"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "2f3afce195f4466be4d69f635b9eb058"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "b11c9d3ae8a62f42a38e993000eb5c62"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "0995bc50f333e4b774b101387851d05e"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "a013c0a671aebaf8f703ece9760905ac"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "893c20819d226ab4e7abffe448da8510"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "8dfb09450672d137f2e8504148884cdd"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "930ccd922cfec283d4c75429a28c8ac6"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "18cd3ab139e5162e1dbcbeac0fa66a25"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "d2ada74a4bed7f61eb04e365c3c0428e"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "02e2a32183ba692cdb3ec6d4069ce1ee"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "455bed2a62b30dfc9cba3cb5d6d06786"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "9876d6fd8f0dfb5f5556d37dae24dd6d"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "f7522792561a1c44a9967343f611905e"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "98bff2eb53dd05e2a2e8cf477f1cbb39"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "4796f167ea1439b4e86c0d421ed6e5aa"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "f9872de7e3e7baf8bd7f650227735818"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "3a600c5bb2f8e90b8f8321783f98e8fa"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "1773180684ff289d258897ad3ad64cff"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "abab1f15935f5836e60af9ff80958012"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "21ffd45ab3acc82b91d5de77d87164fb"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "7c8bb364feeb75155b30375e921de01e"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "616745ca5890b24a0a17f8ae7c32defb"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "4419eb473d0b8e212cef1c789aca7c44"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "177974ab0a5b642f74b0002777631ae4"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "0ad3cb60b4a3df5625ff361aef8ad95c"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "07e6f696b4bed0bf1f8737490d1f344a"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "7dca2bca1dc697caa9aca50dab695740"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "7b84b602dc8487ad5c35e01cafb43b57"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "dab502aa964a7a5683a784f38d19b19e"
  },
  {
    "url": "passages/2019-07-06-half-year/index.html",
    "revision": "293f1f55770404c1476ceed0262586c0"
  },
  {
    "url": "passages/2019-07-12-redis-cache-question/index.html",
    "revision": "09455bfdf1d3d662c49f5e4597eded02"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "d73f3bb8051a734e2e9391b30611e1be"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "d7cf249cae95850860aaab3d86c47893"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "7600225214318ef6c51fbf2b56e5986c"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "bd74837eb899e695ad32cebb368a5016"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "ad879127574206d33e3c961f46c83a91"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "596b151f844c8c3a956745208f53ee2c"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "8f71337b9f72af98ea1ed00409a38fad"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "ecdbec30ea86538f3c2fa3d557bab674"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "89568976fcc0bf1994d4135e52856bcd"
  },
  {
    "url": "passages/2019-09-03-nodejs-watch-file/index.html",
    "revision": "5986dc7482f4b186f7dc25c2b05d0735"
  },
  {
    "url": "passages/2019-09-04-count-os/index.html",
    "revision": "60a7e23d0052a5ba0471535afc8b9f79"
  },
  {
    "url": "passages/2019-09-04-log-module/index.html",
    "revision": "a8d0b35d44cbc2a88dfba57f0d302010"
  },
  {
    "url": "passages/2019-09-07-middleground/index.html",
    "revision": "3fab93ecddb24104b7a87e93f67f1056"
  },
  {
    "url": "passages/2019-09-11-react-router/index.html",
    "revision": "c4028b912c7564e3e6a00b46b6fa6c70"
  },
  {
    "url": "passages/2019-09-11-word-segmentation-and-search/index.html",
    "revision": "917ece17bc2345931c399e53ea73ff43"
  },
  {
    "url": "passages/2019-09-30-mongo-links/index.html",
    "revision": "031528a0562a13f711352fd07813413f"
  },
  {
    "url": "passages/2019-10-01-mongo-book/index.html",
    "revision": "8ceafdaeac994bdd4c322da0f1e4f320"
  },
  {
    "url": "passages/2019-10-02-os-base/index.html",
    "revision": "3f1f93e01d325b131e873c19bf1cb46e"
  },
  {
    "url": "passages/2019-10-03-os-logic/index.html",
    "revision": "d9fbb5619bdd59eb675802669439e25e"
  },
  {
    "url": "passages/2019-10-03-os-user/index.html",
    "revision": "9150ecb08cd69af399461d981746c2b8"
  },
  {
    "url": "passages/2019-10-04-os-process/index.html",
    "revision": "dc161bad24a197813ba38cbbda89aaf3"
  },
  {
    "url": "passages/2019-10-10-mongo-book-advance/index.html",
    "revision": "fbf7bf2f58f9bcbb5c68416002bb08b4"
  },
  {
    "url": "passages/2019-10-21-react-hooks/index.html",
    "revision": "66a8effce5274fc52690f29461b896c1"
  },
  {
    "url": "passages/2019-11-11-wirte-virtual-dom/index.html",
    "revision": "46a19b1577b01b1df4c9ae23c2cdd8fd"
  },
  {
    "url": "passages/2019-11-23-promise-methods/index.html",
    "revision": "f35c57e72397ea98d5217a3834375353"
  },
  {
    "url": "passages/2019-11-25-how-insist-on-learning/index.html",
    "revision": "89fa954f59fe92cd50cc2dd49f64fda2"
  },
  {
    "url": "passages/2019-11-25-promise-a-plus/index.html",
    "revision": "06257de17652df63cf5e5af9e1163ded"
  },
  {
    "url": "scripts/baidu-analytics.js",
    "revision": "a670158da0f7dde040f4d39a7e632d13"
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
