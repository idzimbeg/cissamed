/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: 'gb',
    locales: ['gb', 'fr', 'it', 'hr', 'de', 'es'],
  },
};

module.exports = nextConfig;
