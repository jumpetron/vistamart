if (!self.define) {
  let e,
    s = {}
  const a = (a, c) => (
    (a = new URL(a + '.js', c).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (c, n) => {
    const i =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[i]) return
    let r = {}
    const t = (e) => a(e, i),
      d = { module: { uri: i }, exports: r, require: t }
    s[i] = Promise.all(c.map((e) => d[e] || t(e))).then((e) => (n(...e), r))
  }
}
define(['./workbox-7c2a5a06'], function (e) {
  'use strict'
  importScripts('fallback-I5p9fjJzCjy-9pGWyS2jk.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/404.svg', revision: 'd38ac435783a21f1956e5ca6c207228d' },
        {
          url: '/_next/static/I5p9fjJzCjy-9pGWyS2jk/_buildManifest.js',
          revision: 'fe722125467b8a586ac4c1206985a32e'
        },
        {
          url: '/_next/static/I5p9fjJzCjy-9pGWyS2jk/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933'
        },
        {
          url: '/_next/static/chunks/1307-9ccbf4cd23c19e6d.js',
          revision: '9ccbf4cd23c19e6d'
        },
        {
          url: '/_next/static/chunks/1545.6786c7972b807d99.js',
          revision: '6786c7972b807d99'
        },
        {
          url: '/_next/static/chunks/1b8dab7b-bce25ef553c45d1c.js',
          revision: 'bce25ef553c45d1c'
        },
        {
          url: '/_next/static/chunks/228771e0-c58d9de9cafb3511.js',
          revision: 'c58d9de9cafb3511'
        },
        {
          url: '/_next/static/chunks/3078-fd5fbd184601d86c.js',
          revision: 'fd5fbd184601d86c'
        },
        {
          url: '/_next/static/chunks/31664189-ef19981d2d279cce.js',
          revision: 'ef19981d2d279cce'
        },
        {
          url: '/_next/static/chunks/3297-de2c36c2fcd00197.js',
          revision: 'de2c36c2fcd00197'
        },
        {
          url: '/_next/static/chunks/3844-53c1c76e3d83ee40.js',
          revision: '53c1c76e3d83ee40'
        },
        {
          url: '/_next/static/chunks/4347-874a4a741df0306c.js',
          revision: '874a4a741df0306c'
        },
        {
          url: '/_next/static/chunks/464.98a9dfbac2cbef70.js',
          revision: '98a9dfbac2cbef70'
        },
        {
          url: '/_next/static/chunks/5353-232c2ac1a2c739e1.js',
          revision: '232c2ac1a2c739e1'
        },
        {
          url: '/_next/static/chunks/5455-2ea8431888100723.js',
          revision: '2ea8431888100723'
        },
        {
          url: '/_next/static/chunks/5733-29c0e057f2196f67.js',
          revision: '29c0e057f2196f67'
        },
        {
          url: '/_next/static/chunks/5e2a4920-97a8df98ca6faf16.js',
          revision: '97a8df98ca6faf16'
        },
        {
          url: '/_next/static/chunks/6250-269a80411b464366.js',
          revision: '269a80411b464366'
        },
        {
          url: '/_next/static/chunks/6528-b5c60d13ac9eaa2b.js',
          revision: 'b5c60d13ac9eaa2b'
        },
        {
          url: '/_next/static/chunks/65291039-1b59d9c74e1bf2ba.js',
          revision: '1b59d9c74e1bf2ba'
        },
        {
          url: '/_next/static/chunks/7136-f0d543ef3274dd25.js',
          revision: 'f0d543ef3274dd25'
        },
        {
          url: '/_next/static/chunks/8114-bc8f3fd2630544b5.js',
          revision: 'bc8f3fd2630544b5'
        },
        {
          url: '/_next/static/chunks/9014-036238546cfe201c.js',
          revision: '036238546cfe201c'
        },
        {
          url: '/_next/static/chunks/9110-b796f2a6d955ea65.js',
          revision: 'b796f2a6d955ea65'
        },
        {
          url: '/_next/static/chunks/9157-033bdfba512e80b4.js',
          revision: '033bdfba512e80b4'
        },
        {
          url: '/_next/static/chunks/9571-88cf2207573e1745.js',
          revision: '88cf2207573e1745'
        },
        {
          url: '/_next/static/chunks/ae51ba48-dddd7acd8393e5e3.js',
          revision: 'dddd7acd8393e5e3'
        },
        {
          url: '/_next/static/chunks/c9184924-f97cfe4ccbfdb901.js',
          revision: 'f97cfe4ccbfdb901'
        },
        {
          url: '/_next/static/chunks/framework-353dac0233342c57.js',
          revision: '353dac0233342c57'
        },
        {
          url: '/_next/static/chunks/main-fae90d64cf8551bd.js',
          revision: 'fae90d64cf8551bd'
        },
        {
          url: '/_next/static/chunks/pages/404-7b739286ba3baf98.js',
          revision: '7b739286ba3baf98'
        },
        {
          url: '/_next/static/chunks/pages/_app-48efebd24f1dd874.js',
          revision: '48efebd24f1dd874'
        },
        {
          url: '/_next/static/chunks/pages/_error-22b4b50b70253e43.js',
          revision: '22b4b50b70253e43'
        },
        {
          url: '/_next/static/chunks/pages/_offline-63a736c0d555cc20.js',
          revision: '63a736c0d555cc20'
        },
        {
          url: '/_next/static/chunks/pages/about-us-5793b8656816b8c8.js',
          revision: '5793b8656816b8c8'
        },
        {
          url: '/_next/static/chunks/pages/auth/forget-password-a2ff0a9372883728.js',
          revision: 'a2ff0a9372883728'
        },
        {
          url: '/_next/static/chunks/pages/auth/login-0b1b155d3167a7c7.js',
          revision: '0b1b155d3167a7c7'
        },
        {
          url: '/_next/static/chunks/pages/auth/signup-90d49916908a65d7.js',
          revision: '90d49916908a65d7'
        },
        {
          url: '/_next/static/chunks/pages/checkout-e0629216fb6b544e.js',
          revision: 'e0629216fb6b544e'
        },
        {
          url: '/_next/static/chunks/pages/contact-us-ac382e064b762528.js',
          revision: 'ac382e064b762528'
        },
        {
          url: '/_next/static/chunks/pages/faq-0b03ba38ee35c75b.js',
          revision: '0b03ba38ee35c75b'
        },
        {
          url: '/_next/static/chunks/pages/index-841ee59bb4fe344f.js',
          revision: '841ee59bb4fe344f'
        },
        {
          url: '/_next/static/chunks/pages/offer-7adc525048959718.js',
          revision: '7adc525048959718'
        },
        {
          url: '/_next/static/chunks/pages/order/%5Bid%5D-03f0d8c89fabbcad.js',
          revision: '03f0d8c89fabbcad'
        },
        {
          url: '/_next/static/chunks/pages/privacy-policy-5923ecfcc173fe4f.js',
          revision: '5923ecfcc173fe4f'
        },
        {
          url: '/_next/static/chunks/pages/product/%5Bslug%5D-e204da0aef2269a0.js',
          revision: 'e204da0aef2269a0'
        },
        {
          url: '/_next/static/chunks/pages/search-fe4f429297648b58.js',
          revision: 'fe4f429297648b58'
        },
        {
          url: '/_next/static/chunks/pages/terms-and-conditions-17793789b08d8f2e.js',
          revision: '17793789b08d8f2e'
        },
        {
          url: '/_next/static/chunks/pages/user/add-shipping-address-54e96ce6f8fbc8a4.js',
          revision: '54e96ce6f8fbc8a4'
        },
        {
          url: '/_next/static/chunks/pages/user/change-password-c0b29f7fa119366a.js',
          revision: 'c0b29f7fa119366a'
        },
        {
          url: '/_next/static/chunks/pages/user/dashboard-aecc8adc22d368a7.js',
          revision: 'aecc8adc22d368a7'
        },
        {
          url: '/_next/static/chunks/pages/user/email-verification/%5Btoken%5D-290ed7c1d8a6d7a5.js',
          revision: '290ed7c1d8a6d7a5'
        },
        {
          url: '/_next/static/chunks/pages/user/forget-password/%5Btoken%5D-d5722d437dde8a15.js',
          revision: 'd5722d437dde8a15'
        },
        {
          url: '/_next/static/chunks/pages/user/my-account-1768eaf077d0c878.js',
          revision: '1768eaf077d0c878'
        },
        {
          url: '/_next/static/chunks/pages/user/my-orders-1e2eb3fe97914fbc.js',
          revision: '1e2eb3fe97914fbc'
        },
        {
          url: '/_next/static/chunks/pages/user/recent-order-a93d64c7830d2ff6.js',
          revision: 'a93d64c7830d2ff6'
        },
        {
          url: '/_next/static/chunks/pages/user/update-profile-4ed6ec979abe9c81.js',
          revision: '4ed6ec979abe9c81'
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3'
        },
        {
          url: '/_next/static/chunks/webpack-9f428b477b24318c.js',
          revision: '9f428b477b24318c'
        },
        {
          url: '/_next/static/css/5c713c8b8690bde9.css',
          revision: '5c713c8b8690bde9'
        },
        {
          url: '/_next/static/css/a90c3bb8df6bdbd1.css',
          revision: 'a90c3bb8df6bdbd1'
        },
        {
          url: '/_next/static/css/fe3ca4aa668b6f4f.css',
          revision: 'fe3ca4aa668b6f4f'
        },
        { url: '/_offline', revision: 'I5p9fjJzCjy-9pGWyS2jk' },
        {
          url: '/about-banner.jpg',
          revision: '79bcd14e1663eeb10fd2078a1b40a68a'
        },
        { url: '/about-us.jpg', revision: 'a69c8f7c944c6dd9673e4e8407684ae9' },
        {
          url: '/app-download-img-left.png',
          revision: '72d8da82c11b9694f687e2b24711a82a'
        },
        {
          url: '/app-download-img.png',
          revision: '22ab424e74d09df11be0f6943a264856'
        },
        {
          url: '/app/app-store.svg',
          revision: 'a717e97b14d37aa12c48a288bddf4bae'
        },
        {
          url: '/app/mastercard-icon.svg',
          revision: '2f3b7f6dc10d68bf74366ce0e4b39217'
        },
        {
          url: '/app/paypal-icon.svg',
          revision: '99025da84086629516e323641cdfd73b'
        },
        {
          url: '/app/play-store.svg',
          revision: 'a2b0ad8b1000e23bf80ca9ef30b14b97'
        },
        {
          url: '/app/skrill-icon.svg',
          revision: '01cb261e1e28b74c3f51a379a63216d3'
        },
        {
          url: '/app/visa-icon.svg',
          revision: '58cb00fe42ab95ae26c5e7e429f04545'
        },
        { url: '/banner-1.jpg', revision: '96eaf5765f56f7574dc21db0424668f3' },
        { url: '/banner-2.jpg', revision: 'd08fc088d9d75823e8259261e9208cf2' },
        {
          url: '/contact-us.png',
          revision: '1f0a34dcebe83884f7d986c29069cff0'
        },
        { url: '/cta-bg.png', revision: '0dd94ded00743cc74d0da8027b579b73' },
        {
          url: '/cta/cta-bg-1.jpg',
          revision: '45b3e432be8fc7f3eb09f2568a61d8c2'
        },
        {
          url: '/cta/cta-bg-2.jpg',
          revision: '83ca16fa37654fd7de5518d0f347a29c'
        },
        {
          url: '/cta/cta-bg-3.jpg',
          revision: '42c150e775ca1b35399b3428d5ee2e00'
        },
        {
          url: '/cta/delivery-boy.png',
          revision: '9914b651b1428467046e8b886166dac9'
        },
        {
          url: '/facebook-page.png',
          revision: '0a668853fee7423c27bb93b947a6fc1c'
        },
        { url: '/faq.svg', revision: '2979a7b97c0c5d96960e9558a389bbd4' },
        { url: '/favicon.png', revision: '0033e08ea1185a9ef4ddea787f470df5' },
        { url: '/flags/de.svg', revision: 'a491da9c1549a36b293a6a391739dfda' },
        { url: '/flags/us.svg', revision: '8886b28b10e3ec0756a9935a216d5bba' },
        {
          url: '/icon-192x192.png',
          revision: '47e2812c3e78f1903ccd46f0545f5d48'
        },
        {
          url: '/icon-256x256.png',
          revision: '5cfadd2f4679b3d86f1d994297809226'
        },
        {
          url: '/icon-384x384.png',
          revision: 'e793bffd9497800be7d461caa873b96b'
        },
        {
          url: '/icon-512x512.png',
          revision: 'b9df59369ad910b5d3e338e9076fd944'
        },
        {
          url: '/vistamart-store-min.png',
          revision: '6bf12cd3f0a8d7ccf8285ea0672bf182'
        },
        {
          url: '/loader/spinner.gif',
          revision: '9317b1364997865cda53478fb9302977'
        },
        {
          url: '/logo/bag-shoping.svg',
          revision: '54014870b794b613e62017decbe943d0'
        },
        {
          url: '/logo/logo-color.png',
          revision: '5935965ef93ee2a9eab4a1240699bc5f'
        },
        {
          url: '/logo/logo-color.svg',
          revision: '9cdfd2a1723ebe5d6fbfeb2a3a07765d'
        },
        {
          url: '/logo/logo-dark-2.svg',
          revision: '990e13afb1b79734e26b71f2fcc062d9'
        },
        {
          url: '/logo/logo-dark.svg',
          revision: '3d5619a9dd2312d20ee908259e95a635'
        },
        {
          url: '/logo/logo-light-2.svg',
          revision: '8e9e97fd3acd9a7aa3525e2c5eb93811'
        },
        {
          url: '/logo/logo-light.svg',
          revision: 'a295f016c697789c084b023006b33ac5'
        },
        { url: '/manifest.json', revision: '1bdc898597594f46bcd9b0ae76e7c991' },
        { url: '/no-result.svg', revision: '508b2439b4b83ce579e826c9c625b675' },
        {
          url: '/page-header-bg.jpg',
          revision: 'c7cf9224e6c1ae3add73d30c2ae7a8f8'
        },
        {
          url: '/payment-method/payment-logo.png',
          revision: '469911779f6463e5751cf5b7046384d2'
        },
        { url: '/robots.txt', revision: '61c27d2cd39a713f7829422c3d9edcc7' },
        {
          url: '/slider/slider-1.jpg',
          revision: '9611448d0a85493ee21c5317323cb601'
        },
        {
          url: '/slider/slider-2.jpg',
          revision: 'fe98a6e4032332b05d52aa1254f085a7'
        },
        {
          url: '/slider/slider-3.jpg',
          revision: '06cef52491c3b8682d15596e784362bb'
        },
        { url: '/sw.js', revision: '3babca1d969f2ec8e3f712ae338713de' },
        {
          url: '/team/team-1.jpg',
          revision: 'e318a12728d39d01c926be7fbbcd6876'
        },
        {
          url: '/team/team-2.jpg',
          revision: 'ba945720d060272d028634a8729b7d2b'
        },
        {
          url: '/team/team-3.jpg',
          revision: 'dfa429c7e964aa5a8ea01c3959710529'
        },
        {
          url: '/team/team-4.jpg',
          revision: '490ae645f676543ef728fc2548a6bd3f'
        },
        {
          url: '/team/team-5.jpg',
          revision: 'a345363d59da88084c7fd6de76cc978c'
        },
        {
          url: '/team/team-6.jpg',
          revision: '39e8a23ea2ae4bc88316d1ddad73132c'
        }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: c
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers
                  })
                : s
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) }
        ]
      }),
      'GET'
    )
})
