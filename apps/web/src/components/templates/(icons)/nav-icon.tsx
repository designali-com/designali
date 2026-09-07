 
"use client"

import { useEffect, useMemo, useState } from "react"

import { LayoutGrid } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"

import { allIcons } from "@designali/icons"

import { useIconFilter } from "./icons/icon-filter-context"

type VariantTab = "outline" | "filled" | "rounded" | "doodle"

function matchesVariantTab(
  variant: string,
  tab: VariantTab
): boolean {
  const v = (variant ?? "").toLowerCase()

  if (tab === "outline") {
    return v === "default" || v === "outline" || v === ""
  }

  if (tab === "filled") {
    return v === "filled"
  }

  if (tab === "rounded") {
    return v === "rounded"
  }

  if (tab === "doodle") {
    return v === "doodle"
  }

  return false
}

export function NavIcon() {
  const { setCategory, variantTab } = useIconFilter()

  const [activeHash, setActiveHash] = useState<string | null>(null)

  // Sync active category with URL hash
  useEffect(() => {
    const syncHash = () => {
      const hash =
        window.location.hash.replace("#", "") || null

      setActiveHash(hash)
      setCategory(hash)
    }

    syncHash()

    window.addEventListener("hashchange", syncHash)

    return () => {
      window.removeEventListener("hashchange", syncHash)
    }
  }, [setCategory])

  // Category counts based on selected variant
  const categoriesWithCount = useMemo(() => {
    const map = new Map<string, number>()

    ;(
      Object.entries(allIcons) as [string, Record<string, any>][]
    ).forEach(([category, icons]) => {
      const uniqueBaseIds = new Set(
        Object.values(icons)
          .filter((entry: any) =>
            matchesVariantTab(
              entry.metadata?.variant,
              variantTab
            )
          )
          .map(
            (entry: any) =>
              entry.metadata?.baseId as string
          )
          .filter(Boolean)
      )

      if (uniqueBaseIds.size > 0) {
        map.set(category, uniqueBaseIds.size)
      }
    })

    return Array.from(map.entries()).sort((a, b) =>
      a[0].localeCompare(b[0])
    )
  }, [variantTab])

  // Total icons
  const totalCount = useMemo(
    () =>
      categoriesWithCount.reduce(
        (total, [, count]) => total + count,
        0
      ),
    [categoriesWithCount]
  )

  // Handle category selection
  const handleClick = (category: string | null) => {
    setCategory(category)

    const url = new URL(window.location.href)

    const tab = url.searchParams.get("tab")

    const params = new URLSearchParams()

    if (tab) {
      params.set("tab", tab)
    }

    const search = params.size ? `?${params}` : ""
    const hash = category ? `#${category}` : ""

    window.history.pushState(
      null,
      "",
      `/icons${search}${hash}`
    )

    window.dispatchEvent(
      new HashChangeEvent("hashchange")
    )
  }

  return (
    <SidebarGroup>
      {/* Category Heading */}
      <SidebarGroupLabel className="justify-end group-data-[collapsible=icon]:hidden">
        Categories
      </SidebarGroupLabel>

      {/* All Icons */}
      <SidebarMenu className="pt-8">
        <SidebarMenuItem>
          <SidebarMenuButton
            onClick={() => handleClick(null)}
            tooltip="All Icons"
            className={`justify-end gap-2 group-data-[collapsible=icon]:justify-center hover:text-primary ${
              activeHash === null
                ? "text-primary opacity-100"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <span className="capitalize group-data-[collapsible=icon]:hidden">
              All
            </span>

            <div className="flex items-center gap-2">
              <span className="shrink-0 tabular-nums">
                {totalCount}
              </span>

              <LayoutGrid className="size-4 shrink-0" />
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>

      {/* Categories */}
      <SidebarMenu>
        {categoriesWithCount.map(
          ([category, count]) => {
            const isActive =
              activeHash === category

            return (
              <SidebarMenuItem key={category}>
                <SidebarMenuButton
                  onClick={() =>
                    handleClick(category)
                  }
                  tooltip={category}
                  className={`justify-end gap-2 group-data-[collapsible=icon]:justify-center hover:text-primary ${
                    isActive
                      ? "text-primary opacity-100"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <span className="capitalize group-data-[collapsible=icon]:hidden">
                    {category}
                  </span>

                  <span className="shrink-0 tabular-nums">
                    {count}
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          }
        )}
      </SidebarMenu>
    </SidebarGroup>
  )
} 