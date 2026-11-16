import { createMDX } from "fumadocs-mdx/next"

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@workspace/ui",
    "@designali/icons",
    "@designali/logos",
    "@designali/vectors",
  ],

  experimental: {
    // These packages export thousands of components from one barrel file.
    // Only load the components that are actually imported.
    optimizePackageImports: [
      "@designali/icons",
      "@designali/logos",
      "@designali/vectors",
    ],
  },

  // Scoped specifically to routes that actually need them, instead of global "/*"
  outputFileTracingIncludes: {
    "/api/templates/[slug]/download": [
      "../../templates/**/*",
    ],
    // Change "/*" to the exact route patterns that need content/registry
    "/docs/:path*": [
      "./content/**/*",
    ],
    "/view/:path*": [
      "./registry/**/*",
    ],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.lummi.ai",
      },
      {
        protocol: "https",
        hostname: "figma-alpha-api.s3.us-west-2.amazonaws.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/docs/:path*.mdx",
        destination: "/docs/:path*.md",
        permanent: true,
      },
      {
        source: "/docs/primitives/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
    ]
  },

  rewrites() {
    return [
      {
        source: "/docs/:path*.md",
        destination: "/llm/:path*",
      },
    ]
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)