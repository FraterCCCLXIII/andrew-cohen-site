import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["@andrew-cohen/nondualizer"],
  turbopack: {
    resolveAlias: {
      "@nondualizer": path.join(__dirname, "packages/nondualizer/src"),
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "andrewcohen.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;
