/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        dangerouslyAllowSVG: true,
        domains: ["user-images.githubusercontent.com", "api.producthunt.com"],
    },
    eslint: {
        dirs: ["src", "src/pages", "src/components"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
}
module.exports = nextConfig
