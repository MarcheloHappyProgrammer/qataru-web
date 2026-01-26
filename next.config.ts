import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/qataru-web',
  assetPrefix: '/qataru-web/',
};

module.exports = nextConfig;
export default nextConfig;
