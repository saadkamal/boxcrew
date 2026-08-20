import type { NextConfig } from "next";

/**
 * Next.js configuration for Boxcrew.
 * 
 * output: "standalone" enables Railway deployment via `next start`
 * without needing to copy node_modules. The build produces a
 * self-contained .next/standalone directory.
 */
const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
