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

import {skipWaiting, clientsClaim} from "workbox-core";
import {precacheAndRoute} from "workbox-precaching";
import {registerRoute} from "workbox-routing";
import {StaleWhileRevalidate} from "workbox-strategies";
import {ExpirationPlugin} from "workbox-expiration";
import "../../src/weiwudi_gw";

skipWaiting();

clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
precacheAndRoute(self.__WB_MANIFEST, {});
registerRoute(/(?:maps\/.+\.json|pwa\/.+|pois\/.+\.json|apps\/.+\.json|tmbs\/.+\.jpg|img\/.+\.(?:png|jpg))$/, new StaleWhileRevalidate({ "cacheName":"resourcesCache", plugins: [new ExpirationPlugin({ maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
