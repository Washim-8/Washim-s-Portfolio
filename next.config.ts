import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // ── Tree-shake large packages: only import what's actually used ─────────
  // Reduces initial JS bundle by 30-50KB for lucide-react, framer-motion etc.
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "react-icons",
      "@heroicons/react",
    ],
  },

  // ── Image Configuration: Direct static serving without runtime Sharp bottleneck ──
  images: {
    unoptimized: true,
  },

  // ── HTTP Headers for caching static assets ─────────────────────────────
  async headers() {
    return [
      {
        source: "/:all*(webp|avif|png|jpg|jpeg|svg|ico|woff2|woff)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

