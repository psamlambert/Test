import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Images are served from /public; no remote hosts required.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
