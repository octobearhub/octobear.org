/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['user-images.githubusercontent.com', 'api.producthunt.com', 'www.shapedivider.app',
      'haikei.app'
      ]
  }
}
module.exports = nextConfig
