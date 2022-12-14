/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'it', 'hr', 'de', 'es'],
  },
};

module.exports = nextConfig;
