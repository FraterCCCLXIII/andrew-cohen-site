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
    // Vercel Image Optimization is returning 402
    // OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED on this project.
    // Serve originals directly until optimization is re-enabled.
    unoptimized: true,
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
