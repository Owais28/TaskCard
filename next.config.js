// /** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
})

// module.exports = withPWA({
//   //...before
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   runtimeCaching,
//   buildExcludes: [/middleware-manifest.json$/],
//   //...after
// });

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
});

module.exports = nextConfig;