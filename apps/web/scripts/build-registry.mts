import { spawn } from "node:child_process"
import { createHash } from "node:crypto"
import { promises as fs } from "node:fs"
import path from "node:path"
import { parseArgs } from "node:util"

import prettier from "prettier"

const { registry } = await import("../registry/index")

type RegistryFile = {
  path: string
  type: string
  target?: string
  content?: string
}

type RegistryItem = {
  name: string
  description?: string
  type: string
  registryDependencies?: string[]
  dependencies?: string[]
  devDependencies?: string[]
  files?: RegistryFile[] | string[]
  categories?: string[]
  meta?: Record<string, unknown>
}

type Registry = {
  name?: string
  homepage?: string
  items: RegistryItem[]
}

type BuildOptions = {
  indexes: boolean
  registry: boolean
}

const CACHE_ROOT = path.join(
  process.cwd(),
  "node_modules/.cache/build-registry"
)

const CACHE_MANIFEST_PATH = path.join(
  CACHE_ROOT,
  "manifest.json"
)

let prettierConfigPromise:
  | Promise<prettier.Options | null>
  | null = null

/*
|--------------------------------------------------------------------------
| Paths
|--------------------------------------------------------------------------
*/

function getRegistryRoot() {
  return path.join(
    process.cwd(),
    "registry/designali"
  )
}

function getPublicRegistryRoot() {
  return path.join(
    process.cwd(),
    "public/r"
  )
}

function getRegistryIndexPath() {
  return path.join(
    process.cwd(),
    "registry/__index__.tsx"
  )
}

function getRegistryJsonPath() {
  return path.join(
    process.cwd(),
    "registry.json"
  )
}

function getPublicRegistryJsonPath() {
  return path.join(
    getPublicRegistryRoot(),
    "registry.json"
  )
}

/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/

function normalizeRegistryFiles(
  item: RegistryItem
): RegistryFile[] {
  return (
    item.files?.map((file) => {
      if (typeof file === "string") {
        return {
          path: file,
          type: item.type,
        }
      }

      return {
        path: file.path,
        type: file.type,
        target: file.target,
        content: file.content,
      }
    }) ?? []
  )
}

function stripFileExtension(filePath: string) {
  return filePath.replace(
    /\.(tsx|ts|jsx|js|json|mdx)$/,
    ""
  )
}

function escapeString(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\r/g, "\\r")
    .replace(/\n/g, "\\n")
    .replace(/\t/g, "\\t")
}

function lazyComponentExpression(
  componentPath: string,
  name: string
) {
  return `React.lazy(async () => {
  const mod = await import("${componentPath}")

  const exportName =
    Object.keys(mod).find(
      (key) =>
        typeof mod[key] === "function" ||
        typeof mod[key] === "object"
    ) || "${escapeString(name)}"

  return {
    default: mod.default || mod[exportName],
  }
})`
}

function hashContent(...parts: string[]) {
  const hash = createHash("sha256")

  for (const part of parts) {
    hash.update(part)
    hash.update("\0")
  }

  return hash.digest("hex")
}

async function readFileIfExists(
  filePath: string
) {
  try {
    return await fs.readFile(
      filePath,
      "utf8"
    )
  } catch (error) {
    if (
      (error as NodeJS.ErrnoException).code ===
      "ENOENT"
    ) {
      return null
    }

    throw error
  }
}

async function fileExists(
  filePath: string
) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function writeIfChanged(
  filePath: string,
  content: string
) {
  const existing =
    await readFileIfExists(filePath)

  if (existing === content) {
    return false
  }

  await fs.mkdir(
    path.dirname(filePath),
    {
      recursive: true,
    }
  )

  await fs.writeFile(
    filePath,
    content,
    "utf8"
  )

  return true
}

/*
|--------------------------------------------------------------------------
| Prettier
|--------------------------------------------------------------------------
*/

async function formatSource(
  content: string,
  filePath: string
) {
  prettierConfigPromise ??=
    prettier.resolveConfig(
      path.join(
        process.cwd(),
        "package.json"
      )
    )

  const prettierConfig =
    (await prettierConfigPromise) ?? {}

  return prettier.format(content, {
    ...prettierConfig,
    filepath: filePath,
  })
}

async function formatJson(
  value: unknown,
  filePath: string
) {
  return formatSource(
    JSON.stringify(
      value,
      null,
      2
    ),
    filePath
  )
}

/*
|--------------------------------------------------------------------------
| Registry Validation
|--------------------------------------------------------------------------
*/

async function validateRegistry() {
  if (!registry) {
    throw new Error(
      "Registry could not be loaded from ../registry/index"
    )
  }

  if (
    !Array.isArray(
      registry.items
    )
  ) {
    throw new Error(
      "registry.items must be an array"
    )
  }

  for (const item of registry.items) {
    if (!item.name) {
      throw new Error(
        "Registry item is missing a name"
      )
    }

    if (!item.type) {
      throw new Error(
        `Registry item "${item.name}" is missing a type`
      )
    }

    const files =
      normalizeRegistryFiles(
        item as RegistryItem
      )

    for (const file of files) {
      if (!file.path) {
        throw new Error(
          `Registry item "${item.name}" contains a file without a path`
        )
      }

      if (!file.type) {
        throw new Error(
          `Registry item "${item.name}" file "${file.path}" is missing a type`
        )
      }
    }
  }

  console.log(
    `   ✅ Registry validation passed (${registry.items.length} items)`
  )
}

/*
|--------------------------------------------------------------------------
| Registry Files
|--------------------------------------------------------------------------
*/

async function buildRegistryFiles() {
  console.log(
    "🗂️ Checking registry files..."
  )

  const root =
    getRegistryRoot()

  try {
    await fs.access(root)
  } catch {
    throw new Error(
      `Registry directory does not exist: ${root}`
    )
  }

  const files: string[] = []

  async function walk(
    directory: string
  ) {
    const entries =
      await fs.readdir(
        directory,
        {
          withFileTypes: true,
        }
      )

    for (const entry of entries) {
      const fullPath =
        path.join(
          directory,
          entry.name
        )

      if (entry.isDirectory()) {
        await walk(fullPath)
        continue
      }

      if (!entry.isFile()) {
        continue
      }

      files.push(fullPath)
    }
  }

  await walk(root)

  console.log(
    `   ✅ ${files.length} source files found`
  )

  return files
}

async function verifyRegistryFiles() {
  const registryItems =
    registry.items as RegistryItem[]

  const missing: string[] = []

  for (const item of registryItems) {
    const files =
      normalizeRegistryFiles(item)

    for (const file of files) {
      const absolutePath =
        path.join(
          getRegistryRoot(),
          file.path
        )

      try {
        await fs.access(
          absolutePath
        )
      } catch {
        missing.push(
          `${item.name}: ${file.path}`
        )
      }
    }
  }

  if (missing.length > 0) {
    console.error(
      "\n❌ Missing registry files:"
    )

    for (const file of missing) {
      console.error(
        `   - ${file}`
      )
    }

    throw new Error(
      `${missing.length} registry file(s) are missing`
    )
  }

  console.log(
    "   ✅ All registry files exist"
  )
}

/*
|--------------------------------------------------------------------------
| Registry Index
|--------------------------------------------------------------------------
*/

function getComponentPath(
  item: RegistryItem
) {
  const files =
    normalizeRegistryFiles(item)

  const firstFile = files[0]

  if (!firstFile?.path) {
    return null
  }

  const cleanPath =
    stripFileExtension(
      firstFile.path
    )

  return `@/registry/designali/${cleanPath}`
}

function getRegistryFilePath(
  filePath: string
) {
  return `registry/designali/${filePath}`
}

function createRegistryItemSource(
  item: RegistryItem
) {
  const files =
    normalizeRegistryFiles(item)

  const componentPath =
    getComponentPath(item)

  const filesSource = files
    .map((file) => {
      const filePath =
        getRegistryFilePath(
          file.path
        )

      return `{
  path: "${escapeString(filePath)}",
  type: "${escapeString(file.type)}",
  target: "${escapeString(
    file.target ?? ""
  )}"
}`
    })
    .join(",\n")

  const registryDependencies =
    JSON.stringify(
      item.registryDependencies ?? []
    )

  const dependencies =
    JSON.stringify(
      item.dependencies ?? []
    )

  const devDependencies =
    JSON.stringify(
      item.devDependencies ?? []
    )

  const categories =
    JSON.stringify(
      item.categories ?? []
    )

  const meta =
    JSON.stringify(
      item.meta ?? {}
    )

  return `
  "${escapeString(item.name)}": {
    name: "${escapeString(item.name)}",
    description: "${escapeString(
      item.description ?? ""
    )}",
    type: "${escapeString(item.type)}",
    registryDependencies: ${registryDependencies},
    dependencies: ${dependencies},
    devDependencies: ${devDependencies},
    files: [
      ${filesSource}
    ],
    categories: ${categories},
    meta: ${meta},
    component: ${
      componentPath
        ? lazyComponentExpression(
            componentPath,
            item.name
          )
        : "null"
    }
  },`
}

async function buildRegistryIndex() {
  console.log(
    "📦 Building registry/__index__.tsx..."
  )

  const registryItems =
    registry.items as RegistryItem[]

  let index = `// @ts-nocheck
// This file is autogenerated by scripts/build-registry.mts
// Do not edit this file directly.

import "server-only"

import * as React from "react"

export const Index: Record<string, any> = {
`

  for (const item of registryItems) {
    if (
      item.type ===
      "registry:internal"
    ) {
      continue
    }

    index +=
      createRegistryItemSource(item)
  }

  index += `
}
`

  const outputPath =
    getRegistryIndexPath()

  const formatted =
    await formatSource(
      index,
      outputPath
    )

  const changed =
    await writeIfChanged(
      outputPath,
      formatted
    )

  console.log(
    changed
      ? "   ✅ registry/__index__.tsx updated"
      : "   ⚡ registry/__index__.tsx unchanged"
  )
}

/*
|--------------------------------------------------------------------------
| Registry JSON
|--------------------------------------------------------------------------
*/

function createFixedRegistryItem(
  item: RegistryItem
): RegistryItem {
  const files =
    normalizeRegistryFiles(item)

  if (files.length === 0) {
    return {
      ...item,
    }
  }

  return {
    ...item,
    files: files.map(
      (file) => ({
        ...file,
        path: getRegistryFilePath(
          file.path
        ),
      })
    ),
  }
}

async function buildRegistryJsonFile() {
  console.log(
    "💅 Building registry.json..."
  )

  const fixedRegistry: Registry = {
    ...registry,
    items: (
      registry.items as RegistryItem[]
    )
      .filter(
        (item) =>
          item.type !==
          "registry:internal"
      )
      .map(
        createFixedRegistryItem
      ),
  }

  const registryJsonPath =
    getRegistryJsonPath()

  const formatted =
    await formatJson(
      fixedRegistry,
      registryJsonPath
    )

  const changed =
    await writeIfChanged(
      registryJsonPath,
      formatted
    )

  console.log(
    changed
      ? `   ✅ registry.json updated (${fixedRegistry.items.length} items)`
      : `   ⚡ registry.json unchanged (${fixedRegistry.items.length} items)`
  )

  return fixedRegistry
}

/*
|--------------------------------------------------------------------------
| Public Registry JSON
|--------------------------------------------------------------------------
*/

async function copyRegistryToPublic() {
  console.log(
    "📋 Updating public/r/registry.json..."
  )

  const source =
    getRegistryJsonPath()

  const target =
    getPublicRegistryJsonPath()

  const sourceContent =
    await fs.readFile(
      source,
      "utf8"
    )

  const existing =
    await readFileIfExists(
      target
    )

  if (existing === sourceContent) {
    console.log(
      "   ⚡ public/r/registry.json unchanged"
    )

    return
  }

  await fs.mkdir(
    getPublicRegistryRoot(),
    {
      recursive: true,
    }
  )

  await fs.writeFile(
    target,
    sourceContent,
    "utf8"
  )

  console.log(
    "   ✅ public/r/registry.json updated"
  )
}

/*
|--------------------------------------------------------------------------
| Public Registry Build
|--------------------------------------------------------------------------
*/

async function buildRegistry() {
  console.log(
    "🏗️ Building public registry..."
  )

  const outputPath =
    getPublicRegistryRoot()

  const registryPath =
    getRegistryJsonPath()

  await fs.mkdir(
    outputPath,
    {
      recursive: true,
    }
  )

  await new Promise<void>(
    (resolve, reject) => {
      const proc =
        spawn(
          "pnpm",
          [
            "exec",
            "shadcn",
            "build",
            registryPath,
            "--output",
            outputPath,
          ],
          {
            cwd: process.cwd(),
            stdio: "pipe",
          }
        )

      let stderr = ""

      proc.stdout?.on(
        "data",
        (data) => {
          process.stdout.write(
            data
          )
        }
      )

      proc.stderr?.on(
        "data",
        (data) => {
          stderr +=
            data.toString()

          process.stderr.write(
            data
          )
        }
      )

      proc.on(
        "close",
        (code) => {
          if (code === 0) {
            resolve()
          } else {
            reject(
              new Error(
                `shadcn registry build failed with exit code ${code}\n${stderr}`
              )
            )
          }
        }
      )

      proc.on(
        "error",
        reject
      )
    }
  )

  console.log(
    "   ✅ public/r generated"
  )
}

/*
|--------------------------------------------------------------------------
| Manifest
|--------------------------------------------------------------------------
*/

async function buildManifest() {
  console.log(
    "📋 Building manifest..."
  )

  const registryItems =
    registry.items as RegistryItem[]

  const manifest = {
    version: 1,

    generatedAt:
      new Date().toISOString(),

    items:
      registryItems
        .filter(
          (item) =>
            item.type !==
            "registry:internal"
        )
        .map(
          (item) => ({
            name: item.name,
            type: item.type,
            description:
              item.description ?? "",
            categories:
              item.categories ?? [],
          })
        ),
  }

  const outputPath =
    path.join(
      getPublicRegistryRoot(),
      "manifest.json"
    )

  /*
   * generatedAt changes every time.
   * Therefore we don't use writeIfChanged()
   * here because that would always update.
   *
   * The manifest is only built when registry
   * itself has changed.
   */

  const formatted =
    await formatJson(
      manifest,
      outputPath
    )

  await fs.mkdir(
    getPublicRegistryRoot(),
    {
      recursive: true,
    }
  )

  await fs.writeFile(
    outputPath,
    formatted,
    "utf8"
  )

  console.log(
    "   ✅ public/r/manifest.json generated"
  )
}

/*
|--------------------------------------------------------------------------
| Registry Hash
|--------------------------------------------------------------------------
*/

async function buildRegistryHash() {
  const registryItems =
    registry.items as RegistryItem[]

  const hashParts: string[] = []

  /*
   * Registry metadata
   */
  for (const item of registryItems) {
    hashParts.push(
      item.name,
      item.type,
      item.description ?? "",

      JSON.stringify(
        item.registryDependencies ??
          []
      ),

      JSON.stringify(
        item.dependencies ??
          []
      ),

      JSON.stringify(
        item.devDependencies ??
          []
      ),

      JSON.stringify(
        item.categories ??
          []
      ),

      JSON.stringify(
        item.meta ??
          {}
      )
    )

    /*
     * Registry files
     */
    for (const file of normalizeRegistryFiles(
      item
    )) {
      hashParts.push(
        file.path,
        file.type,
        file.target ?? "",
        file.content ?? ""
      )

      /*
       * Read actual source file content.
       */
      if (file.content === undefined) {
        const absolutePath =
          path.join(
            getRegistryRoot(),
            file.path
          )

        const content =
          await readFileIfExists(
            absolutePath
          )

        if (content !== null) {
          hashParts.push(
            content
          )
        }
      }
    }
  }

  return hashContent(
    ...hashParts
  )
}

/*
|--------------------------------------------------------------------------
| Cache
|--------------------------------------------------------------------------
*/

async function loadBuildCache() {
  const content =
    await readFileIfExists(
      CACHE_MANIFEST_PATH
    )

  if (!content) {
    return null
  }

  try {
    return JSON.parse(
      content
    ) as {
      hash: string
      generatedAt: string
    }
  } catch {
    return null
  }
}

async function saveBuildCache(
  hash: string
) {
  await fs.mkdir(
    CACHE_ROOT,
    {
      recursive: true,
    }
  )

  await fs.writeFile(
    CACHE_MANIFEST_PATH,
    JSON.stringify(
      {
        hash,

        generatedAt:
          new Date().toISOString(),
      },
      null,
      2
    ),
    "utf8"
  )
}

/*
|--------------------------------------------------------------------------
| Generated Output Verification
|--------------------------------------------------------------------------
|
| Cache same hone ke baad bhi check karte hain
| ki important generated files actually exist.
|
*/

async function generatedRegistryExists() {
  const requiredFiles = [
    getRegistryIndexPath(),

    getRegistryJsonPath(),

    getPublicRegistryJsonPath(),

    path.join(
      getPublicRegistryRoot(),
      "manifest.json"
    ),
  ]

  for (const file of requiredFiles) {
    if (
      !(await fileExists(file))
    ) {
      return false
    }
  }

  return true
}

/*
|--------------------------------------------------------------------------
| Build Options
|--------------------------------------------------------------------------
*/

async function parseBuildOptions(
  argv: string[]
): Promise<BuildOptions> {
  const result =
    parseArgs({
      args: argv,

      options: {
        indexes: {
          type: "boolean",
        },

        registry: {
          type: "boolean",
        },
      },

      allowPositionals: false,

      strict: true,
    })

  return {
    indexes:
      result.values.indexes ??
      false,

    registry:
      result.values.registry ??
      false,
  }
}

/*
|--------------------------------------------------------------------------
| Targeted Builds
|--------------------------------------------------------------------------
*/

async function runIndexesBuild() {
  await validateRegistry()

  await verifyRegistryFiles()

  await buildRegistryIndex()
}

async function runRegistryBuild() {
  await validateRegistry()

  await verifyRegistryFiles()

  await buildRegistryJsonFile()

  await copyRegistryToPublic()

  await buildRegistry()

  await buildManifest()

  /*
   * Save cache after successful
   * targeted registry build as well.
   */
  const hash =
    await buildRegistryHash()

  await saveBuildCache(hash)
}

/*
|--------------------------------------------------------------------------
| Full Build
|--------------------------------------------------------------------------
*/

async function runFullBuild() {
  const start =
    performance.now()

  console.log(
    "\n🚀 Building Designali registry...\n"
  )

  /*
   * 1. Validate registry
   */
  await validateRegistry()

  /*
   * 2. Verify source files
   */
  await buildRegistryFiles()

  await verifyRegistryFiles()

  /*
   * 3. Calculate current source hash
   */
  console.log(
    "\n🔍 Checking registry changes..."
  )

  const currentHash =
    await buildRegistryHash()

  /*
   * 4. Load previous cache
   */
  const cached =
    await loadBuildCache()

  /*
   * 5. Check generated files
   */
  const generatedExists =
    await generatedRegistryExists()

  /*
   * 6. Skip only if:
   *
   * - cache exists
   * - hash is same
   * - generated files still exist
   */
  if (
    cached?.hash === currentHash &&
    generatedExists
  ) {
    console.log(
      "   ⚡ Registry source unchanged"
    )

    console.log(
      "   ⚡ Generated registry already exists"
    )

    console.log(
      "\n⏭️ Skipping registry generation."
    )

    const elapsed =
      (
        (performance.now() -
          start) /
        1000
      ).toFixed(2)

    console.log(
      `\n✅ Registry build skipped in ${elapsed}s!`
    )

    return
  }

  /*
   * If cache matched but generated
   * files are missing, rebuild.
   */
  if (
    cached?.hash === currentHash &&
    !generatedExists
  ) {
    console.log(
      "   ⚠️ Registry source unchanged but generated files are missing."
    )

    console.log(
      "   🔄 Rebuilding generated registry files..."
    )
  }

  /*
   * If hash changed.
   */
  if (
    cached &&
    cached.hash !== currentHash
  ) {
    console.log(
      "   🔄 Registry changes detected."
    )
  }

  /*
   * First build.
   */
  if (!cached) {
    console.log(
      "   🆕 No build cache found. Running first build."
    )
  }

  /*
   * Phase 1
   */
  console.log(
    "\n📦 Phase 1: Registry index"
  )

  await buildRegistryIndex()

  /*
   * Phase 2
   */
  console.log(
    "\n💅 Phase 2: Registry JSON"
  )

  await buildRegistryJsonFile()

  /*
   * Phase 3
   */
  console.log(
    "\n📋 Phase 3: Public registry"
  )

  await copyRegistryToPublic()

  /*
   * Phase 4
   */
  console.log(
    "\n🏗️ Phase 4: shadcn registry build"
  )

  await buildRegistry()

  /*
   * Phase 5
   */
  console.log(
    "\n📋 Phase 5: Manifest"
  )

  await buildManifest()

  /*
   * Save cache ONLY after
   * everything succeeds.
   */
  await saveBuildCache(
    currentHash
  )

  const elapsed =
    (
      (performance.now() -
        start) /
      1000
    ).toFixed(2)

  console.log(
    `\n✅ Registry build completed successfully in ${elapsed}s!`
  )
}

/*
|--------------------------------------------------------------------------
| Main
|--------------------------------------------------------------------------
*/

async function main() {
  const options =
    await parseBuildOptions(
      process.argv.slice(2)
    )

  const isTargeted =
    options.indexes ||
    options.registry

  /*
   * No flags:
   * Full cached build
   */
  if (!isTargeted) {
    await runFullBuild()
    return
  }

  /*
   * Targeted build:
   * --indexes
   * --registry
   */
  console.log(
    "\n🚀 Running targeted Designali registry build...\n"
  )

  if (options.indexes) {
    console.log(
      "📦 Building indexes..."
    )

    await runIndexesBuild()
  }

  if (options.registry) {
    console.log(
      "\n🏗️ Building registry..."
    )

    await runRegistryBuild()
  }

  console.log(
    "\n✅ Targeted registry build completed successfully!"
  )
}

/*
|--------------------------------------------------------------------------
| Error Handling
|--------------------------------------------------------------------------
*/

try {
  await main()
} catch (error) {
  console.error(
    "\n❌ Registry build failed:\n"
  )

  console.error(error)

  process.exit(1)
}