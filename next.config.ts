import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isDeploy = process.env.NEXT_PUBLIC_DEPLOY === 'true';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/my_house/' : isDeploy ? '/my_house/' : '',
  basePath: isProd ? '/my_house' : '',
  output: 'export'
};

export default nextConfig;
