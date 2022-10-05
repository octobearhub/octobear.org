/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['user-images.githubusercontent.com', 'api.producthunt.com']
  }
}
module.exports = nextConfig
