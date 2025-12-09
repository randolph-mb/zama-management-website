/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Image Optimization (limitiert wegen 'export', aber wir konfigurieren trotzdem)
  images: {
    unoptimized: true, // Muss bei output:'export' true sein

    // Aber wir können Formate und Sizes definieren für bessere Developer Experience
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Dangerously allow SVG (nur wenn nötig)
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance Optimierungen
  compress: true, // Gzip/Brotli Compression

  // Compiler Optimierungen
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Experimental Features für Performance
  experimental: {
    // Optimiere Package Imports
    optimizePackageImports: ['@/components', '@/lib'],
  },

  // Webpack Optimierungen
  webpack: (config, { dev, isServer }) => {
    // Production Optimierungen
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor Chunk (node_modules)
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Common Chunk (häufig verwendete Module)
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }

    return config;
  },

  // Headers für besseres Caching (wird von netlify.toml überschrieben)
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
