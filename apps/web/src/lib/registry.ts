 
import { promises as fs } from "node:fs"
import path from "node:path"

// Metadata only. Importing "@/registry/__index__" here would make every page
// that reads registry files compile all registry components.
import { RegistryMeta } from "@/registry/__meta__"

type RegistryFile = {
  path: string
  type?: string
  target?: string
  content?: string
}

export async function getRegistryItem(name: string) {
  const item = RegistryMeta[name]

  if (!item) {
    return null
  }

  // Convert all file paths to objects.
  // TODO: remove when we migrate to the new registry.
  const normalizedFiles: RegistryFile[] = Array.isArray(item.files)
    ? item.files.map((file: unknown) =>
        typeof file === "string" ? { path: file } : file
      )
    : []

  // Read all files in parallel.
  let files: RegistryFile[] = await Promise.all(
    normalizedFiles.map(async (file) => {
      const content = await getFileContent(file)
      const relativePath = path.relative(process.cwd(), file.path)

      return {
        ...file,
        path: relativePath,
        content,
      }
    })
  )

  // Fix file paths.
  files = fixFilePaths(files)

  return {
    ...item,
    files,
  }
}

async function getFileContent(file: RegistryFile) {
  let code = await fs.readFile(file.path, "utf-8")

  // Some registry items use default exports.
  // Convert them to named exports.
  if (file.type !== "registry:page") {
    code = code.replaceAll("export default", "export")
  }

  // Fix imports.
  code = fixImport(code)

  return code
}

function getFileTarget(file: RegistryFile) {
  let target = file.target

  if (!target || target === "") {
    const fileName = file.path.split("/").pop()

    if (
      file.type === "registry:block" ||
      file.type === "registry:page" ||
      file.type === "registry:component" ||
      file.type === "registry:example"
    ) {
      target = `components/${fileName}`
    }

    if (file.type === "registry:ui") {
      target = `components/ui/${fileName}`
    }

    if (file.type === "registry:hook") {
      target = `hooks/${fileName}`
    }

    if (file.type === "registry:lib") {
      target = file.path.includes("base-ui/")
        ? `base-ui/${fileName}`
        : `lib/${fileName}`
    }
  }

  return target ?? ""
}

function fixFilePaths(files: RegistryFile[]) {
  return files.map((file) => ({
    ...file,
    target: getFileTarget(file),
  }))
}

export function fixImport(content: string) {
  // UI SDK wrappers install to components/ui-sdk/<name> (not components/ui,
  // so they never overwrite the shadcn component with the same name):
  // @workspace/ui/components/ui-sdk/dialog -> @/components/ui-sdk/dialog
  // @/registry/designali/ui/ui-sdk/dialog  -> @/components/ui-sdk/dialog
  content = content.replace(
    /@(?:workspace\/ui\/components|\/registry\/[\w-]+\/ui)\/ui-sdk\/([\w-]+)/g,
    "@/components/ui-sdk/$1"
  )

  // Handle @workspace/ui/* monorepo aliases:
  // @workspace/ui/components/navigation-menu -> @/components/ui/navigation-menu
  // @workspace/ui/lib/utils                  -> @/lib/utils
  // @workspace/ui/hooks/use-foo              -> @/hooks/use-foo
  content = content.replace(
    /@workspace\/ui\/(components|ui|lib|hooks)\/([\w-]+)/g,
    (match, type, name) => {
      if (type === "components" || type === "ui") {
        return `@/components/ui/${name}`
      }
      if (type === "lib") {
        return `@/lib/${name}`
      }
      if (type === "hooks") {
        return `@/hooks/${name}`
      }
      return match
    }
  )

  content = content.replace(
    /@\/registry\/[\w-]+\/blocks\/[\w-]+\/([\w-]+)\/components\/([\w-]+)/g,
    (_match, blockName, component) =>
      `@/components/${blockName}/components/${component}`
  )

  // Handle imports such as:
  // @/registry/designali/components/button
  // @/registry/designali/ui/button
  // @/registry/designali/hooks/use-example
  // @/registry/designali/lib/utils
  const regex =
    /@\/(.+?)\/((?:.*?\/)?(?:components|ui|hooks|lib))\/([\w-]+)/g

  const replacement = (
    match: string,
    _path: string,
    type: string,
    component: string
  ) => {
    if (type.endsWith("components")) {
      return `@/components/${component}`
    }

    if (type.endsWith("ui")) {
      return `@/components/ui/${component}`
    }

    if (type.endsWith("hooks")) {
      return `@/hooks/${component}`
    }

    if (type.endsWith("lib")) {
      return `@/lib/${component}`
    }

    return match
  }

  return content.replace(regex, replacement)
}

export type FileTree = {
  name: string
  path?: string
  children?: FileTree[]
} 

export function createFileTreeForRegistryItemFiles(
  files: Array<{ path: string; target?: string }>
) {
  const root: FileTree[] = []

  for (const file of files) {
    // target is the canonical path shown in the file tree.
    // Fall back to path only when target is unavailable.
    const filePath = file.target || file.path

    if (!filePath) {
      continue
    }

    const parts = filePath.split("/").filter(Boolean)

    let currentLevel = root

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]

      if (!part) {
        continue
      }

      const isFile = i === parts.length - 1

      let existingNode = currentLevel.find(
        (node) => node.name === part
      )

      if (!existingNode) {
        existingNode = isFile
          ? {
              name: part,
              path: filePath,
            }
          : {
              name: part,
              children: [],
            }

        currentLevel.push(existingNode)
      }

      if (isFile) {
        // Always keep the complete canonical path.
        existingNode.path = filePath
      } else {
        if (!existingNode.children) {
          existingNode.children = []
        }

        currentLevel = existingNode.children
      }
    }
  }

  return root
}