/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "www.shapedivider.app",
      "haikei.app",
    ],
  },
};
module.exports = nextConfig;
