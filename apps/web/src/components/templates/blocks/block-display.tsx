import * as React from "react"

import { highlightCode } from "@/src/lib/highlight-code"
import {
  createFileTreeForRegistryItemFiles,
  getRegistryItem,
} from "@/src/lib/registry"
import { cn } from "@workspace/ui/lib/utils"

import { BlockViewer } from "./block-viewer"
import { ComponentPreview } from "@/src/components/docs/component-preview"

type RegistryFile = {
  path: string
  content?: string
  target?: string
  type?: string
}

export async function BlockDisplay({
  name,
}: {
  name: string
}) {
  const item = await getCachedRegistryItem(name)

  if (!item?.files) {
    return null
  }

  const [tree, highlightedFiles] = await Promise.all([
    getCachedFileTree(item.files),
    getCachedHighlightedFiles(item.files),
  ])

  return (
    <BlockViewer
      item={item}
      tree={tree}
      highlightedFiles={highlightedFiles}
    >
      <ComponentPreview
        name={item.name}
        hideCode
        className={cn(
          "my-0 **:[.preview]:h-auto **:[.preview]:p-4 **:[.preview>.p-6]:p-0",
          item.meta?.containerClassName
        )}
      />
    </BlockViewer>
  )
}

const getCachedRegistryItem = React.cache(async (name: string) => {
  return getRegistryItem(name)
})

const getCachedFileTree = React.cache(
  async (
    files: Array<{
      path: string
      target?: string
    }>
  ) => {
    if (!files?.length) {
      return null
    }

    return createFileTreeForRegistryItemFiles(files)
  }
)

const getCachedHighlightedFiles = React.cache(
  async (files: RegistryFile[]) => {
    return Promise.all(
      files.map(async (file) => ({
        ...file,
        highlightedContent: await highlightCode(
          file.content ?? ""
        ),
      }))
    )
  }
)