/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  env: {
    REACT_APP_BACKEND: process.env.REACT_APP_BACKEND ?? '',
    REACT_APP_STOREFRONTAPI_ACCESS_TOKEN:
      process.env.REACT_APP_STOREFRONTAPI_ACCESS_TOKEN ?? '',
  },

  images: {
    domains: ['localhost', 'cdn.shopify.com'],
  },
};
module.exports = nextConfig;
