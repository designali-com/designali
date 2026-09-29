"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"
import { toolsCategory } from "./tools-category"
import { Palette } from "lucide-react"

export function ToolsSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category")

  const isGradientActive = pathname === "/tools/gradient"

  return (
    <Sidebar
      side="right"
      collapsible="icon"
      className="mt-6"
      {...props}
    >
      <SidebarHeader />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-50 h-20 bg-gradient-to-t from-background to-transparent" />

      <SidebarContent className="items-end pb-20 flex flex-col justify-between h-full">
        <SidebarTrigger className="absolute top-6 left-2.5 z-10 opacity-60" />

        <SidebarGroup className="w-full">
          <SidebarGroupLabel className="justify-end group-data-[collapsible=icon]:hidden">
            Tools
          </SidebarGroupLabel>
 
          <SidebarMenu className="pt-8">
            <SidebarMenuItem>
              <SidebarMenuButton
                render={
                  <Link href="/tools/gradient">
                    <span className="group-data-[collapsible=icon]:hidden">
                      Gradient
                    </span>

                    <Palette className="size-4 shrink-0" />
                  </Link>
                }
                tooltip="Gradient"
                className={`
                  justify-end
                  group-data-[collapsible=icon]:justify-center
                  hover:text-primary
                  ${
                    isGradientActive
                      ? "text-primary opacity-100"
                      : "opacity-70 hover:opacity-100"
                  }
                `}
              />
            </SidebarMenuItem>
          </SidebarMenu>

          {/* Categories */}
          <SidebarMenu >
            {toolsCategory.map((category) => {
              const href =
                category.slug === "all"
                  ? "/tools"
                  : `/tools?category=${encodeURIComponent(category.slug)}`

              const isActive =
                category.slug === "all"
                  ? pathname === "/tools" && !currentCategory
                  : currentCategory === category.slug

              const Icon = category.icon

              return (
                <SidebarMenuItem key={category.slug}>
                  <SidebarMenuButton
                    render={
                      <Link href={href}>
                        <span className="group-data-[collapsible=icon]:hidden">
                          {category.name}
                        </span>

                        <Icon className="size-4 shrink-0" />
                      </Link>
                    }
                    tooltip={category.name}
                    className={`
                      justify-end
                      group-data-[collapsible=icon]:justify-center
                      hover:text-primary
                      ${
                        isActive
                          ? "text-primary opacity-100"
                          : "opacity-70 hover:opacity-100"
                      }
                    `}
                  />
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}