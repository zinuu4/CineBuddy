/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nest-kinomore-server-gnzn.onrender.com',
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'st.kp.yandex.net',
      },
    ],
  },
};

module.exports = nextConfig;
