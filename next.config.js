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
        domains: [
            "images.pexels.com",
            "images.unsplash.com",
            "media.giphy.com",
            "media0.giphy.com",
            "media1.giphy.com",
            "media2.giphy.com",
            "media3.giphy.com",
            "media4.giphy.com",
        ],
    },
};

module.exports = nextConfig;
