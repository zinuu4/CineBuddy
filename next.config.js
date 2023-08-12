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
      {
        protocol: 'https',
        hostname: 'avatars.mds.yandex.net',
      },
      {
        protocol: 'https',
        hostname: 'imagetmdb.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
