import svg from '@neodx/svg/webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // We don't want to run generator twice
    if (!isServer) {
      config.plugins.push(
        svg({
          root: 'src/shared/ui/icon/assets',
          output: 'public',
          metadata: 'src/shared/ui/icon/sprite.gen.ts',
          resetColors: false,
        }),
      );
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nest-kinomore-server-gnzn.onrender.com',
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
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    API_KEY: process.env.API_KEY,
  },
};

export default nextConfig;
