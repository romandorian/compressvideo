import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site can be hosted on Cloudflare Pages / any static host.
  // The ffmpeg core is single-threaded and loaded from a CDN, so no
  // SharedArrayBuffer / COOP+COEP headers are required.
  output: "export",
};

export default nextConfig;
