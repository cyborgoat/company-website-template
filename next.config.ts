// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your other configurations (e.g., reactStrictMode: true) might be here
    images: {
        remotePatterns: [
            {
                protocol: 'https', // Typically 'http' or 'https'
                hostname: 'images.pexels.com', // The hostname from the error message
                port: '',         // Usually empty unless a specific port is needed
                pathname: '/**',   // Allows any path under this hostname. You could be more specific, e.g., '/photos/**'
            },
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
              pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media*.giphy.com',
                port: '',
                pathname: '/**',
            },
            // You can add more pattern objects here for other domains
            // Example for another domain:
            // {
            //   protocol: 'https',
            //   hostname: 'another-image-domain.com',
            //   port: '',
            //   pathname: '/path/to/images/**',
            // },
        ],
    },
};

module.exports = nextConfig; // Or export default nextConfig if using ES Modules
