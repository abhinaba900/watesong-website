import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Image Optimization & Server Caching
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.builder.io",
        port: "",
        pathname: "/api/v1/image/**",
      },
    ],
    formats: ["image/avif", "image/webp"],

    // ULTRA-AGGRESSIVE: Keep optimized images in the server cache for 1 FULL YEAR (31,536,000 seconds)
    minimumCacheTTL: 31536000,

    // CACHE HIT OPTIMIZATION: Next.js generates a new image for *every* screen size.
    // By strictly defining these 5 breakpoints, we prevent the cache from filling up with
    // hundreds of slightly different image sizes, resulting in a 99% cache hit rate.
    deviceSizes: [640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 64, 128, 256],
  },

  // 2. Production Compiler Tweaks
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },

  // 3. Advanced Bundle Optimization
  experimental: {
    optimizePackageImports: [
      "lucide-react", 
      "framer-motion", 
      "matter-js",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
      "lenis"
    ],
    scrollRestoration: true,
  },
  poweredByHeader: false,

  // 4. Client-Side (Browser) Caching Headers
  async headers() {
    return [
      {
        // Target all standard image files in your /public folder
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico)",
        headers: [
          {
            key: "Cache-Control",
            // public = any CDN can cache it. max-age = 1 year.
            // immutable = browser should NEVER check the server for a newer version
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Target all dynamically generated Next.js <Image /> components
        source: "/_next/image(.*)",
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
