import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

precacheAndRoute(self.__WB_MANIFEST);

const googleFontsRoute = new Route(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  }),
);

const googleFontsWebfontRoute = new Route(
  ({ url }) => url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);

const publicAssetsRoute = new Route(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'public-assets',
  }),
);

const apiRoute = new Route(
  ({ url }) => url.href.startsWith('https://deppredict-api.netlify.app/'),
  new StaleWhileRevalidate({
    cacheName: 'deppredict-api-cache',
  })
);

registerRoute(googleFontsRoute);
registerRoute(googleFontsWebfontRoute);
registerRoute(publicAssetsRoute);
registerRoute(apiRoute);
