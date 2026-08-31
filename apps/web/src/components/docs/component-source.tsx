import fs from "node:fs/promises"
import path from "node:path"
import type * as React from "react"
import { CodeCollapsibleWrapper } from "@/src/components/docs/code-collapsible-wrapper"
import { getRegistryItem } from "@/src/lib/registry"
import { cn } from "@workspace/ui/lib/utils"
import { getIconForLanguageExtension } from "./icons"
import { CopyButton } from "./copy-button"
import { highlightCode } from "@/src/lib/highlight-code"

export async function ComponentSource({
  name,
  src,
  title,
  language,
  collapsible = true,
  className,
}: React.ComponentProps<"div"> & {
  name?: string
  src?: string
  title?: string
  language?: string
  collapsible?: boolean
}) {
  if (!name && !src) {
    return null
  }

  let code: string | undefined

  if (name) {
    const item = await getRegistryItem(name)
    code = item?.files?.[0]?.content
  }

  if (src) {
    const file = await fs.readFile(path.join(process.cwd(), src), "utf-8")
    code = file
  }

  if (!code) {
    return null
  }

  const lang = language ?? title?.split(".").pop() ?? "tsx"
  const highlightedCode = await highlightCode(code, lang)

  if (!collapsible) {
    return (
      <div className={cn("relative w-full min-w-0", className)}>
        <ComponentCode
          code={code}
          highlightedCode={highlightedCode}
          language={lang}
          title={title}
        />
      </div>
    )
  }

  return (
    <CodeCollapsibleWrapper className={className}>
      <ComponentCode
        code={code}
        highlightedCode={highlightedCode}
        language={lang}
        title={title}
      />
    </CodeCollapsibleWrapper>
  )
}

function ComponentCode({
  code,
  highlightedCode,
  language,
  title,
}: {
  code: string
  highlightedCode: string
  language: string
  title: string | undefined
}) {
  return (
    <figure
      data-rehype-pretty-code-figure=""
      className="relative w-full min-w-0 overflow-hidden border"
    >
      {title && (
        <figcaption
          data-rehype-pretty-code-title=""
          className="flex items-center gap-2 border-b p-3 text-sm font-medium [&_svg]:size-4 [&_svg]:shrink-0"
          data-language={language}
        >
          <span className="flex size-4 shrink-0 items-center justify-center [&_svg]:size-4">
            {getIconForLanguageExtension(language)}
          </span>
          <span className="truncate font-mono text-xs">{title}</span>
        </figcaption>
      )}

      <CopyButton value={code} />

      <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </figure>
  )
}
