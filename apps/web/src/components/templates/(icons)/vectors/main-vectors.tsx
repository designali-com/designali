/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

import { allVectors } from "@designali/vectors"
import { useVectorFilter } from "./vector-filter-context"
import { Vectors } from "./vectors"

interface LogoGridProps {
  selectedLogo?: string | null
  onSelectLogo?: (name: string) => void
}

const BATCH_SIZE = 100

const allEntries_flat: any[] = []
for (const icons of Object.values(allVectors) as Record<string, any>[]) {
  for (const entry of Object.values(icons)) {
    allEntries_flat.push(entry)
  }
}

function matchesVariantTab(
  variant: string,
  tab: "shapes" | "sketch" | "pattern" | "character" | "texture"
): boolean {
  const v = (variant ?? "").toLowerCase()
  if (tab === "shapes") return v === "default" || v === "shapes" || v === ""
  if (tab === "sketch") return v === "sketch"
  if (tab === "pattern") return v === "pattern"
  if (tab === "character") return v === "character"
  if (tab === "texture") return v === "texture"
  return false
}

export function VectorGrid({ selectedLogo, onSelectLogo }: LogoGridProps) {
  const { query, category, variantTab, color } = useVectorFilter()
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const allGridEntries = useMemo(() => {
    const seen = new Set<string>()
    const result: {
      baseId: string
      iconId: string
      category: string
      tags: string[]
    }[] = []

      ; (Object.entries(allVectors) as [string, Record<string, any>][]).forEach(
        ([cat, logos]) => {
          Object.values(logos).forEach((entry: any) => {
            const { baseId, tags, variant } = entry.metadata

            if (!matchesVariantTab(variant, variantTab)) return

            const key = `${cat}:${baseId}`
            if (!seen.has(key)) {
              seen.add(key)
              result.push({
                baseId,
                iconId: entry.metadata.id,
                category: cat,
                tags: tags ?? [],
              })
            }
          })
        }
      )

    return result
  }, [variantTab])

  const filtered = useMemo(() => {
    const q = query.toLowerCase()

    const result = allGridEntries.filter(({ baseId, category: cat, tags }) => {
      const matchesQuery =
        !q ||
        baseId.toLowerCase().includes(q) ||
        tags.some((t) => t.toLowerCase().includes(q))

      const matchesCategory = !category || cat === category

      return matchesQuery && matchesCategory
    })

    // 🔥 Alphabetical sort
    return result.sort((a, b) =>
      a.baseId.localeCompare(b.baseId, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    )
  }, [allGridEntries, query, category])

  function getSizeByVariant(
    tab: "shapes" | "sketch" | "pattern" | "texture" | "character"
  ) {
    switch (tab) {
      case "shapes":
        return 100
      case "sketch":
        return 140
      case "pattern":
        return 140
      case "texture":
        return 100
      case "character":
        return 300
      default:
        return 50
    }
  }

  function getCardClasses(
    tab: "shapes" | "sketch" | "pattern" | "texture" | "character"
  ) {
    switch (tab) {
      case "shapes":
        return "h-60 w-60 aspect-square max-w-80"
      case "sketch":
        return "h-60 w-60 aspect-square max-w-80"
      case "pattern":
        return "h-80 w-80 aspect-square max-w-120"
      case "texture":
        return "h-80 w-80 aspect-square max-w-120"
      case "character":
        return "h-100 w-100 aspect-square max-w-140"
      default:
        return "h-80 w-80 aspect-square max-w-100"
    }
  }


  useEffect(() => {
    setVisibleCount(BATCH_SIZE)
  }, [query, category, variantTab])

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filtered.length))
  }, [filtered.length])

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return
    const observer = new IntersectionObserver(
      (entries) => {
        //@ts-ignore
        if (entries[0].isIntersecting) loadMore()
      },
      { rootMargin: "200px" }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [loadMore])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  if (filtered.length === 0) {
    return (
      <div className="text-muted-foreground flex h-full items-center justify-center p-4 text-sm">
        No icons found
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full flex-wrap gap-2">
        {visible.map(({ baseId, iconId }) => {
          const isActive = selectedLogo === baseId 
          return ( 
            <Tooltip key={baseId}>
              <TooltipTrigger render={
                <button
                  type="button"
                  onClick={() => onSelectLogo?.(baseId)}
                  className={` ${getCardClasses(variantTab)} flex flex-1  cursor-pointer items-center justify-center border p-2 transition hover\:bg-muted  ${isActive ? "border-primary transition duration-300" : ""
                    }`}
                >
                  <Vectors
                    name={iconId}
                    size={getSizeByVariant(variantTab)}
                    color={color}
                  />
                </button>
              } /> 
              <TooltipContent sideOffset={-10}>
                <p className="text-xs">{baseId}</p>
              </TooltipContent>
            </Tooltip>
          )
        })}
      </div>

      <div ref={sentinelRef} className="flex items-center justify-center py-6">
        {hasMore ? (
          <div className="flex items-center gap-2">
            <div className="border-muted-foreground h-4 w-4 animate-spin rounded-full border-2 border-t-transparent" />
            <span className="text-muted-foreground text-xs">
              Loading {Math.min(BATCH_SIZE, filtered.length - visibleCount)}{" "}
              more…
            </span>
          </div>
        ) : (
          <span className="text-muted-foreground text-xs">
            {filtered.length} icons
          </span>
        )}
      </div>
    </div>
  )
}