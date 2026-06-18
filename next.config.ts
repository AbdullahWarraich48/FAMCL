import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Corporate / MITM networks: use system CA store when Turbopack fetches Google Fonts
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.create.vista.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
