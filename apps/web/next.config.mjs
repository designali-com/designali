import { createMDX } from "fumadocs-mdx/next"

// `next build` pre-renders thousands of pages and by default starts one worker
// per CPU core (minus one). Each worker loads the whole server bundle, which
// fills an 8 GB machine and makes it lag. Locally, use 2 workers; CI and
// Vercel keep the default. Override with NEXT_BUILD_WORKERS=<n>.
const buildWorkers =
  Number(process.env.NEXT_BUILD_WORKERS) ||
  (process.env.CI || process.env.VERCEL ? undefined : 2)

// Target memory for Turbopack (dev and build). Past this it drops cached work
// instead of growing until the machine swaps. Locally 3 GB; CI and Vercel keep
// the default. Override with TURBOPACK_MEMORY_LIMIT_MB=<n>.
const turbopackMemoryLimitMb =
  Number(process.env.TURBOPACK_MEMORY_LIMIT_MB) ||
  (process.env.CI || process.env.VERCEL ? undefined : 3072)

/** @type {import('next').NextConfig} */
const nextConfig = {
  // `pnpm build` runs `pnpm typecheck` first (tsconfig.typecheck.json), which
  // uses light declarations for the generated icon packages and an
  // incremental cache. Next's own check would use tsconfig.json, type-check
  // every generated icon source and run out of memory, so skip it here.
  typescript: {
    ignoreBuildErrors: true,
  },

  // Pages like /blocks/<category> render and highlight 20 blocks each. With
  // few workers they can pass the default 60s, and Next then throws the work
  // away and renders them again (up to 3 times). Give them longer locally.
  staticPageGenerationTimeout: process.env.CI || process.env.VERCEL ? 60 : 300,

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
    ...(buildWorkers ? { cpus: buildWorkers } : {}),
    ...(turbopackMemoryLimitMb
      ? { turbopackMemoryLimit: turbopackMemoryLimitMb * 1024 * 1024 }
      : {}),
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