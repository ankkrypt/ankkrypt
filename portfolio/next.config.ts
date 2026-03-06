import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ankkrypt',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
