"use client"

import { useMemo, useState } from "react"
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
} from "@designali/icons"

const packages = [
  { name: "@designali/icons", version: "4.2.1", size: 18.4, downloads: 1_240_000, updated: 2 },
  { name: "@designali/logos", version: "4.2.0", size: 9.1, downloads: 980_400, updated: 5 },
  { name: "@designali/vectors", version: "2.8.3", size: 142.6, downloads: 612_900, updated: 12 },
  { name: "designali/marquee", version: "1.4.0", size: 22.7, downloads: 301_250, updated: 1 },
  { name: "designali/number-counter", version: "3.0.5", size: 14.2, downloads: 288_700, updated: 21 },
  { name: "designali/gauge", version: "0.9.2", size: 64.0, downloads: 97_430, updated: 34 },
  { name: "designali/dot-pattern", version: "2.1.7", size: 3.8, downloads: 54_100, updated: 9 },
]

type Key = "name" | "size" | "downloads" | "updated"

const columns: { key: Key; label: string; align: string }[] = [
  { key: "name", label: "Package", align: "text-left" },
  { key: "size", label: "Size", align: "text-right" },
  { key: "downloads", label: "Weekly", align: "text-right" },
  { key: "updated", label: "Updated", align: "text-right" },
]

function compact(n: number) {
  return n >= 1_000_000 ? `${(n / 1_000_000).toFixed(2)}M` : `${(n / 1000).toFixed(1)}k`
}

export default function Lists08() {
  const [sort, setSort] = useState<{ key: Key; dir: "asc" | "desc" }>({ key: "downloads", dir: "desc" })

  const rows = useMemo(() => {
    const sorted = [...packages].sort((a, b) => {
      const av = a[sort.key]
      const bv = b[sort.key]
      const result = typeof av === "string" ? av.localeCompare(bv as string) : av - (bv as number)
      return sort.dir === "asc" ? result : -result
    })
    return sorted
  }, [sort])

  const onSort = (key: Key) =>
    setSort((current) =>
      current.key === key ? { key, dir: current.dir === "asc" ? "desc" : "asc" } : { key, dir: key === "name" ? "asc" : "desc" }
    )

  const maxDownloads = Math.max(...packages.map((p) => p.downloads))

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight">Packages</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Designali packages and components, all in one monorepo. Sort by any column.
        </p>

        <div className="mt-8 border border-border">
          <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-border bg-muted/50 px-4 py-2 sm:grid-cols-[1fr_80px_120px_90px]">
            {columns.map((column) => {
              const active = sort.key === column.key
              const Icon = !active ? ArrowUpDown : sort.dir === "asc" ? ArrowUp : ArrowDown
              return (
                <button
                  key={column.key}
                  type="button"
                  onClick={() => onSort(column.key)}
                  className={`inline-flex items-center gap-1 text-xs font-medium ${column.align === "text-right" ? "justify-end" : ""} ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  } ${column.key === "size" ? "hidden sm:inline-flex" : ""}`}
                >
                  {column.label}
                  <Icon className="size-3" />
                </button>
              )
            })}
          </div>
          <ul className="divide-y divide-border">
            {rows.map((pkg) => (
              <li
                key={pkg.name}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-4 py-3.5 hover:bg-muted/40 sm:grid-cols-[1fr_80px_120px_90px]"
              >
                <div className="min-w-0">
                  <p className="truncate font-mono text-sm">{pkg.name}</p>
                  <p className="text-xs text-muted-foreground">v{pkg.version}</p>
                </div>
                <span className="hidden text-right font-mono text-xs text-muted-foreground sm:block">{pkg.size} kB</span>
                <div className="flex items-center justify-end gap-2">
                  <div className="hidden h-1 w-12 bg-muted sm:block">
                    <div className="h-full bg-foreground" style={{ width: `${(pkg.downloads / maxDownloads) * 100}%` }} />
                  </div>
                  <span className="font-mono text-xs">{compact(pkg.downloads)}</span>
                </div>
                <span className="text-right font-mono text-xs text-muted-foreground">{pkg.updated}d ago</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
