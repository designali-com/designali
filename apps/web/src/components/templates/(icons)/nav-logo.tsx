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

import { allLogos } from "@designali/logos"
import { useLogoFilter } from "./logos/logo-filter-context"

function matchesVariantTab(
  variant: string,
  tab: "icon" | "wordmark" | "symbols"
) {
  const v = (variant ?? "").toLowerCase()

  if (tab === "icon") {
    return v === "default" || v === "icon" || v === ""
  }

  if (tab === "wordmark") {
    return v === "wordmark"
  }

  if (tab === "symbols") {
    return v === "symbols"
  }

  return false
}

export function NavLogo() {
  const { setCategory, variantTab } = useLogoFilter()

  const [activeHash, setActiveHash] = useState<string | null>(null)

  // Sync active category with URL hash
  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace("#", "") || null

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

    ;(Object.entries(allLogos) as [string, Record<string, any>][]).forEach(
      ([category, logos]) => {
        const uniqueBaseIds = new Set(
          Object.values(logos)
            .filter((entry: any) =>
              matchesVariantTab(entry.metadata?.variant, variantTab)
            )
            .map((entry: any) => entry.metadata?.baseId as string)
            .filter(Boolean)
        )

        if (uniqueBaseIds.size > 0) {
          map.set(category, uniqueBaseIds.size)
        }
      }
    )

    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]))
  }, [variantTab])
 
   
 
  return (
    <SidebarGroup>
      {/* Category Heading */}
      <SidebarGroupLabel className="justify-end group-data-[collapsible=icon]:hidden">
        Categories
      </SidebarGroupLabel>

      {/* All Logos */}
      <SidebarMenu className="pt-8">
        <SidebarMenuItem>
          <SidebarMenuButton
             render={<a href={`/logos`}/>}
            tooltip="All Logos"
            className={`justify-end gap-2 group-data-[collapsible=icon]:justify-center hover:text-primary ${
              activeHash === null
                ? "text-primary opacity-100"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <span className="capitalize group-data-[collapsible=icon]:hidden">
              All Logos
            </span>
            <LayoutGrid className="size-4 shrink-0" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>

      {/* Categories */}
      <SidebarMenu>
        {categoriesWithCount.map(([category, count]) => {
          const isActive = activeHash === category

          return (
            <SidebarMenuItem key={category}>
              <SidebarMenuButton
                 render={<a href={`/logos#${category}`}/>}
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

                <span className="shrink-0 tabular-nums">{count}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
