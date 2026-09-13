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

  // ── Image Optimization ─────────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: false,
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

