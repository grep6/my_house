import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/my_house/' : '',
  basePath: isProd ? '/my_house' : '',
  output: 'export'
};

export default nextConfig;
