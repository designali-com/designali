"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { LayoutGrid } from "lucide-react"
import * as Icons from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"

import { uiCategories } from "@/registry/registry-categories"

export function NavMain() {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      {/* Category Heading */}
      <SidebarGroupLabel className="justify-end group-data-[collapsible=icon]:hidden">
        Categories
      </SidebarGroupLabel>

      {/* All Templates */}
      <SidebarMenu className="pt-8">
        <SidebarMenuItem>
          <SidebarMenuButton
            render={
              <Link href="/ui">
                <span className="group-data-[collapsible=icon]:hidden">
                  All UI Design
                </span>

                <LayoutGrid className="size-4 shrink-0" />
              </Link>
            }
            tooltip="All Templates"
            className={`justify-end group-data-[collapsible=icon]:justify-center hover:text-primary ${
              pathname === "/ui"
                ? "text-primary opacity-100"
                : "opacity-70 hover:opacity-100"
            } `}
          />
        </SidebarMenuItem>
      </SidebarMenu>

      {/* Categories */}
      <SidebarMenu>
        {uiCategories.map((category) => {
          if (category.hidden) return null

          const href = `/ui/${category.slug}`

          const isActive = pathname === href || pathname.startsWith(`${href}/`)

          // Dynamically resolve the icon from iconName
          const Icon = category.iconName
            ? (Icons[category.iconName as keyof typeof Icons] as React.ElementType)
            : null

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