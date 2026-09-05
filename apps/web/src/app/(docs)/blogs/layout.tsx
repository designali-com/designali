
import { BlogsSidebar } from "@/src/components/docs/blogs-sidebar"
import { blogSource } from "@/src/lib/source"

import {
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = blogSource.getPages()

  const tagMap = new Map<string, number>()

  for (const page of pages) {
    const tags = page.data.tag

    if (!tags) continue

    const normalizedTags = Array.isArray(tags)
      ? tags
      : [tags]

    for (const tag of normalizedTags) {
      if (typeof tag !== "string" || !tag.trim()) {
        continue
      }

      const name = tag.trim()

      tagMap.set(
        name,
        (tagMap.get(name) ?? 0) + 1
      )
    }
  }

  const tags = Array.from(tagMap.entries())
    .map(([name, count]) => ({
      name,
      count,
    }))
    .sort((a, b) =>
      a.name.localeCompare(b.name)
    )

  return (
    <div className="container-wrapper flex w-full min-w-0 flex-1 flex-col overflow-x-hidden">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "12rem",
            "--sidebar-width-mobile": "12rem",
          } as React.CSSProperties
        }
        className="flex h-full min-h-0 w-full min-w-0"
      >
        <BlogsSidebar
          tree={blogSource.pageTree}
          tags={tags}
        />

        <main className="flex min-w-0 flex-1 flex-col overflow-x-hidden">
          <SidebarTrigger className="absolute z-10 opacity-60 md:hidden" />

          <div className="h-full w-full min-w-0 flex-1">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
} 