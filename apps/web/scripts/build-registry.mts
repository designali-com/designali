import { spawn } from "node:child_process"
import { createHash } from "node:crypto"
import { promises as fs } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { availableParallelism } from "node:os"
import { parseArgs } from "node:util"

import prettier from "prettier"
import { rimraf } from "rimraf"

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

type ComponentEntry = {
  name: string
  componentPath: string
}

const CPU_COUNT = availableParallelism()

const FILE_BUILD_CONCURRENCY = Math.max(
  4,
  Math.min(CPU_COUNT, 8)
)

const CACHE_ROOT = path.join(
  process.cwd(),
  "node_modules/.cache/build-registry"
)

const CACHE_MANIFEST_PATH = path.join(
  CACHE_ROOT,
  "manifest.json"
)

const resolveFromScript = fileURLToPath(import.meta.url)

let prettierConfigPromise: Promise<prettier.Options | null> | null = null

const normalizePath = (value: string) => {
  return value.split(path.sep).join("/")
}

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

async function writeIfChanged(
  filePath: string,
  content: string
) {
  const existing = await readFileIfExists(
    filePath
  )

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
    JSON.stringify(value, null, 2),
    filePath
  )
}

async function runWithConcurrency<T>(
  items: T[],
  limit: number,
  worker: (
    item: T,
    index: number
  ) => Promise<void>
) {
  let currentIndex = 0

  await Promise.all(
    Array.from(
      {
        length: Math.min(
          limit,
          items.length
        ),
      },
      async () => {
        while (true) {
          const index = currentIndex++
      
          if (index >= items.length) {
            return
          }
      
          const item = items[index]
      
          if (item === undefined) {
            return
          }
      
          await worker(item, index)
        }
      }
    )
  )
}

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
        target: "${escapeString(file.target ?? "")}"
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
      description: "${escapeString(item.description ?? "")}",
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

    const files =
      normalizeRegistryFiles(item)

    if (files.length === 0) {
      index += createRegistryItemSource(
        item
      )

      continue
    }

    index += createRegistryItemSource(
      item
    )
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

  await writeIfChanged(
    outputPath,
    formatted
  )

  console.log(
    `   ✅ ${registryItems.length} registry items indexed`
  )
}

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

  await writeIfChanged(
    registryJsonPath,
    formatted
  )

  console.log(
    `   ✅ ${fixedRegistry.items.length} items written`
  )

  return fixedRegistry
}

async function copyRegistryToPublic() {
  console.log(
    "📋 Copying registry.json to public/r..."
  )

  const source =
    getRegistryJsonPath()

  const target =
    getPublicRegistryJsonPath()

  await fs.mkdir(
    getPublicRegistryRoot(),
    {
      recursive: true,
    }
  )

  await fs.copyFile(
    source,
    target
  )

  console.log(
    "   ✅ public/r/registry.json"
  )
}

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

async function buildRegistry() {
  console.log(
    "🏗️ Building public registry..."
  )

  const outputPath =
    path.join(
      process.cwd(),
      "public/r"
    )

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
          stderr += data.toString()
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

async function buildManifest() {
  const registryItems =
    registry.items as RegistryItem[]

  const manifest = {
    version: 1,
    generatedAt:
      new Date().toISOString(),
    items:
      registryItems.map(
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
      process.cwd(),
      "public/r/manifest.json"
    )

  const formatted =
    await formatJson(
      manifest,
      outputPath
    )

  await writeIfChanged(
    outputPath,
    formatted
  )

  console.log(
    "   ✅ public/r/manifest.json"
  )
}

async function buildRegistryHash() {
  const registryItems =
    registry.items as RegistryItem[]

  const hashParts: string[] = []

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
        item.dependencies ?? []
      ),
      JSON.stringify(
        item.categories ?? []
      )
    )

    for (const file of normalizeRegistryFiles(
      item
    )) {
      hashParts.push(
        file.path,
        file.type,
        file.target ?? ""
      )

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

  return hashContent(
    ...hashParts
  )
}

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
    )
  )
}

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
}

async function runFullBuild() {
  const start =
    performance.now()

  console.log(
    "\n🚀 Building Designali registry...\n"
  )

  await validateRegistry()

  await buildRegistryFiles()

  await verifyRegistryFiles()

  console.log(
    "\n📦 Phase 1: Registry index"
  )

  await buildRegistryIndex()

  console.log(
    "\n💅 Phase 2: Registry JSON"
  )

  await buildRegistryJsonFile()

  console.log(
    "\n📋 Phase 3: Public registry"
  )

  await copyRegistryToPublic()

  console.log(
    "\n🏗️ Phase 4: shadcn registry build"
  )

  await buildRegistry()

  console.log(
    "\n📋 Phase 5: Manifest"
  )

  await buildManifest()

  const hash =
    await buildRegistryHash()

  await saveBuildCache(hash)

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

async function main() {
  const options =
    await parseBuildOptions(
      process.argv.slice(2)
    )

  const isTargeted =
    options.indexes ||
    options.registry

  if (!isTargeted) {
    await runFullBuild()
    return
  }

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

try {
  await main()
} catch (error) {
  console.error(
    "\n❌ Registry build failed:\n"
  )

  console.error(error)

  process.exit(1)
}