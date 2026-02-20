const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif']
  },
  output: 'export',
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;