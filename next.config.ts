import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  outputFileTracingRoot: process.cwd(),
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
