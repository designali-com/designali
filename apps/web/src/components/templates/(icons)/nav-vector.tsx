
/* eslint-disable @typescript-eslint/no-explicit-any */

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

import { allVectors } from "@designali/vectors"

import { useVectorFilter } from "./vectors/vector-filter-context"

type VariantTab =
  | "shapes"
  | "sketch"
  | "pattern"
  | "character"
  | "texture"

function matchesVariantTab(
  variant: string,
  tab: VariantTab
): boolean {
  const v = (variant ?? "").toLowerCase()

  if (tab === "shapes") {
    return v === "default" || v === "shapes" || v === ""
  }

  if (tab === "sketch") {
    return v === "sketch"
  }

  if (tab === "pattern") {
    return v === "pattern"
  }

  if (tab === "character") {
    return v === "character"
  }

  if (tab === "texture") {
    return v === "texture"
  }

  return false
}

export function NavVector() {
  const { setCategory, variantTab } = useVectorFilter()

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

  // Calculate category counts based on selected variant
  const categoriesWithCount = useMemo(() => {
    const map = new Map<string, number>()

      ; (
        Object.entries(allVectors) as [
          string,
          Record<string, any>,
        ][]
      ).forEach(([category, vectors]) => {
        const uniqueBaseIds = new Set(
          Object.values(vectors)
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

  // Handle category selection
  const handleClick = (category: string | null) => {
    setCategory(category)

    const url = new URL(window.location.href)

    url.pathname = "/vectors"
    url.hash = category ? `#${category}` : ""

    window.history.pushState(
      null,
      "",
      `${url.pathname}${url.search}${url.hash}`
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

      {/* All Vectors */}
      <SidebarMenu className="pt-8">
        <SidebarMenuItem>
          <SidebarMenuButton
            onClick={() => handleClick(null)}
            tooltip="All Vectors"
            className={`justify-end gap-2 group-data-[collapsible=icon]:justify-center hover:text-primary ${activeHash === null
                ? "text-primary opacity-100"
                : "opacity-70 hover:opacity-100"
              }`}
          >
            <span className="capitalize group-data-[collapsible=icon]:hidden">
              All Vectors
            </span>

            <LayoutGrid className="size-4 shrink-0" />
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
                  className={`justify-end gap-2 group-data-[collapsible=icon]:justify-center hover:text-primary ${isActive
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