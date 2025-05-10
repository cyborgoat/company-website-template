/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow production builds even if there are type errors
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.pexels.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
