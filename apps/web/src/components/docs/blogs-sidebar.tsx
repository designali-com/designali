 
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  AppWindow,
  Blocks,
  Book,
  BookOpen,
  FileCode,
  LayoutGrid,
  NotebookText,
} from "lucide-react"

import type { blogSource } from "@/src/lib/source"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"

const TOP_LEVEL_SECTIONS = [
  {
    name: "All Blogs",
    href: "/blogs",
    icon: BookOpen,
  },
]

const BOTTOM_LEVEL_SECTIONS = [
  {
    name: "UI Design",
    href: "/ui",
    icon: LayoutGrid,
  },
  {
    name: "Templates",
    href: "/templates",
    icon: AppWindow,
  },
  {
    name: "Blocks",
    href: "/blocks",
    icon: Blocks,
  },
  {
    name: "Docs",
    href: "/docs",
    icon: Book,
  },
  {
    name: "Components",
    href: "/docs/components/bento",
    icon: LayoutGrid,
  },
]

const EXCLUDED_PAGES: string[] = []

const NEW_COMPONENTS: string[] = [
  "/blogs/websites-to-build-and-publish",
]

interface BlogTag {
  name: string
  count: number
}

interface BlogsSidebarProps
  extends React.ComponentProps<typeof Sidebar> {
  tree: typeof blogSource.pageTree
  tags: BlogTag[]
  selectedTag?: string
}

export function BlogsSidebar({
  tree,
  tags,
  selectedTag = "",
  ...props
}: BlogsSidebarProps) {
  const pathname = usePathname()

  return (
    <Sidebar
      collapsible="icon"
      className="mt-6"
      {...props}
    >
      <SidebarContent>
        {/* Sidebar Toggle */}
        <SidebarTrigger className="absolute top-6 right-2.5 z-10 opacity-60" />

        {/* Top Level Sections */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="pt-12">
              {TOP_LEVEL_SECTIONS.map(
                ({ name, href, icon: Icon }) => {
                  const isActive =
                    pathname === href &&
                    !selectedTag

                  return (
                    <SidebarMenuItem key={name}>
                      <SidebarMenuButton
                        isActive={isActive}
                        tooltip={name}
                        render={<Link href={href} />}
                        className={`transition-opacity duration-200 hover:text-primary ${
                          isActive
                            ? "text-primary opacity-100"
                            : "opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Icon className="size-3.5 shrink-0" />
                        <span>{name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                }
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Blog Tags */}
        {tags.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>
              <span>Tags</span>
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {tags.map((tag) => {
                  const href = `/blogs?tag=${encodeURIComponent(
                    tag.name
                  )}`

                  const isActive =
                    pathname === "/blogs" &&
                    selectedTag.toLowerCase() ===
                      tag.name.toLowerCase()

                  return (
                    <SidebarMenuItem key={tag.name}>
                      <SidebarMenuButton
                        isActive={isActive}
                        tooltip={tag.name}
                        render={<Link href={href} />}
                        className={`transition-opacity duration-200 hover:text-primary ${
                          isActive
                            ? "text-primary opacity-100"
                            : "opacity-60 hover:opacity-100"
                        }`}
                      >
                        <NotebookText className="size-3.5 shrink-0" />

                        <span className="flex min-w-0 flex-1 items-center justify-between gap-2">
                          <span className="truncate">
                            {tag.name}
                          </span>

                          <span className="text-muted-foreground text-xs">
                            {tag.count}
                          </span>
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Dynamic Documentation Sections */}
        {tree.children.map((section) => {
          const sectionId = section.$id
            ? String(section.$id)
            : ""

          const sectionNameStr = section.name
            ? String(section.name)
            : ""

          if (section.type !== "folder") {
            return null
          }

          return (
            <SidebarGroup
              key={sectionId || sectionNameStr}
            >
              <SidebarGroupLabel>
                <span>{section.name}</span>
              </SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu>
                  {section.children.map((page) => {
                    if (page.type !== "page") {
                      return null
                    }

                    if (
                      EXCLUDED_PAGES.includes(
                        page.url
                      )
                    ) {
                      return null
                    }

                    const isActive =
                      pathname === page.url

                    const isNew =
                      NEW_COMPONENTS.includes(
                        page.url
                      )

                    const pageNameStr = page.name
                      ? String(page.name)
                      : ""

                    return (
                      <SidebarMenuItem
                        key={page.url}
                      >
                        <SidebarMenuButton
                          isActive={isActive}
                          tooltip={pageNameStr}
                          render={
                            <Link href={page.url} />
                          }
                          className={`transition-opacity duration-200 hover:text-primary ${
                            isActive
                              ? "text-primary opacity-100"
                              : "opacity-60 hover:opacity-100"
                          }`}
                        >
                          <FileCode className="size-3.5 shrink-0" />

                          <span>{page.name}</span>

                          {isNew && (
                            <span
                              className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                              aria-label="New"
                            />
                          )}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )
        })}

        {/* Bottom Level Sections */}
        <SidebarGroup>
          <SidebarGroupLabel>
            <span>Pages</span>
          </SidebarGroupLabel>

          <SidebarMenu>
            {BOTTOM_LEVEL_SECTIONS.map(
              ({ name, href, icon: Icon }) => {
                const isActive =
                  pathname === href

                return (
                  <SidebarMenuItem key={name}>
                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={name}
                      render={<Link href={href} />}
                      className={`transition-opacity duration-200 hover:text-primary ${
                        isActive
                          ? "text-primary opacity-100"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Icon className="size-3.5 shrink-0" />

                      <span>{name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              }
            )}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
} 