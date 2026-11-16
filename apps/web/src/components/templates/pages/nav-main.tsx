"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Blocks } from "lucide-react"
import { getCategoryIcon } from "@/src/lib/category-icons"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"

import { registryPages } from "@/registry/registry-categories"

export function NavMain() {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      {/* Category Heading */}
      <SidebarGroupLabel className="justify-end group-data-[collapsible=icon]:hidden">
        Categories
      </SidebarGroupLabel>

      {/* All Blocks */}
      <SidebarMenu className="pt-8">
        <SidebarMenuItem>
          <SidebarMenuButton
            render={
              <Link href="/pages">
                <span className="group-data-[collapsible=icon]:hidden">
                  All pages
                </span>

                <Blocks className="size-4 shrink-0" />
              </Link>
            }
            tooltip="All Pages"
            className={`justify-end group-data-[collapsible=icon]:justify-center hover:text-primary ${
              pathname === "/pages"
                ? "text-primary opacity-100"
                : "opacity-70 hover:opacity-100"
            } `}
          />
        </SidebarMenuItem>
      </SidebarMenu>

      {/* Categories */}
      <SidebarMenu>
        {registryPages.map((category) => {
          if (category.hidden) return null

          const href = `/pages/${category.slug}`

          const isActive = pathname === href || pathname.startsWith(`${href}/`)

          // Dynamically retrieve the icon component using iconName string
          const Icon = getCategoryIcon(category.iconName)

          return (
            <SidebarMenuItem key={category.slug}>
              <SidebarMenuButton
                render={
                  <Link href={href}>
                    <span className="group-data-[collapsible=icon]:hidden">
                      {category.name}
                    </span>

                    {Icon && <Icon className="size-4 shrink-0" />}
                  </Link>
                }
                tooltip={category.name}
                className={`justify-end group-data-[collapsible=icon]:justify-center hover:text-primary ${
                  isActive
                    ? "text-primary opacity-100"
                    : "opacity-70 hover:opacity-100"
                } `}
              />
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
