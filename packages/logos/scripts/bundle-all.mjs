// Bundles src/generated/all.tsx (the object holding every component) into a
// single minified dist/all.mjs.
//
// Apps import it as "<package>/all". One prebuilt file is much faster for a
// bundler to load than thousands of separate source files. Named imports
// (import { Check } from "<package>") still go to the per-file sources.
import { build } from "tsup"
import { promises as fs } from "node:fs"
import path from "node:path"
import { writeTypes } from "./write-types.mjs"

const root = path.resolve(import.meta.dirname, "..")
const entry = path.join(root, "src/generated/all.tsx")
const outfile = path.join(root, "dist/all.mjs")

const started = Date.now()
await build({
  entry: { all: entry },
  outDir: path.join(root, "dist"),
  format: ["esm"],
  outExtension: () => ({ js: ".mjs" }),
  bundle: true,
  splitting: false,
  sourcemap: false,
  minify: true,
  dts: false,
  clean: false,
  external: ["react"],
  silent: true,
  config: false,
})

// Types come straight from the source, so no slow .d.ts generation is needed.
await fs.writeFile(
  path.join(root, "dist/all.d.mts"),
  'export * from "../src/generated/all"\n'
)

// Light declarations for type-checking apps (see write-types.mjs).
await writeTypes(root)

const { size } = await fs.stat(outfile)
console.log(
  `✅ ${path.relative(process.cwd(), outfile)} (${(size / 1048576).toFixed(1)} MB) in ${Date.now() - started}ms`
)
