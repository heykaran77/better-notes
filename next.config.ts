import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "local-origin.dev",
    "*.local-origin.dev",
    "192.168.0.104:3000",
  ],
  experimental: {
    serverActions: {
      allowedOrigins: ["192.168.0.104:3000", "localhost:3000"],
    },
  },
};

export default nextConfig;
