import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.0.194",
    "192.168.0.194:3000",
    "http://192.168.0.194:3000",
  ],
};

export default nextConfig;