"use client"

import { useMemo, useState } from "react"
import {
  ArrowDown,
  ArrowUp,
  ChevronsUpDown,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

type Row = {
  name: string
  owner: string
  installs: number
  rating: number
  revenue: number
  trend: number[]
}

const rows: Row[] = [
  { name: "Portfolio Simple", owner: "Designali", installs: 18420, rating: 4.8, revenue: 42300, trend: [4, 5, 5, 6, 7, 8, 9] },
  { name: "Design Agency", owner: "Designali", installs: 12980, rating: 4.6, revenue: 31750, trend: [6, 6, 7, 6, 7, 7, 8] },
  { name: "Resort", owner: "Designali", installs: 9340, rating: 4.9, revenue: 58900, trend: [3, 4, 4, 5, 6, 6, 7] },
  { name: "Designali Icons", owner: "Designali", installs: 21760, rating: 4.2, revenue: 19400, trend: [9, 8, 8, 7, 7, 6, 6] },
  { name: "Dalim UI", owner: "Ali Imam", installs: 6210, rating: 4.7, revenue: 12800, trend: [2, 2, 3, 3, 4, 5, 6] },
  { name: "AI Template", owner: "Designali", installs: 15530, rating: 4.4, revenue: 37600, trend: [5, 6, 6, 6, 7, 6, 7] },
]

type SortKey = "installs" | "rating" | "revenue"

const columns: { key: SortKey; label: string }[] = [
  { key: "installs", label: "Installs" },
  { key: "rating", label: "Rating" },
  { key: "revenue", label: "Revenue" },
]

function Spark({ data }: { data: number[] }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const up = (data[data.length - 1] ?? 0) >= (data[0] ?? 0)
  const pts = data
    .map((v, i) => `${(i / (data.length - 1)) * 60},${20 - ((v - min) / (max - min || 1)) * 16 - 2}`)
    .join(" ")
  return (
    <svg viewBox="0 0 60 20" className="h-5 w-16">
      <polyline
        points={pts}
        fill="none"
        strokeWidth="1.5"
        className={up ? "stroke-emerald-500" : "stroke-rose-500"}
      />
    </svg>
  )
}

export default function Analytics19() {
  const [sort, setSort] = useState<{ key: SortKey; dir: "asc" | "desc" }>({
    key: "revenue",
    dir: "desc",
  })

  const sorted = useMemo(
    () =>
      [...rows].sort((a, b) =>
        sort.dir === "asc" ? a[sort.key] - b[sort.key] : b[sort.key] - a[sort.key]
      ),
    [sort]
  )

  function toggle(key: SortKey) {
    setSort((prev) =>
      prev.key === key ? { key, dir: prev.dir === "asc" ? "desc" : "asc" } : { key, dir: "desc" }
    )
  }

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Templates leaderboard</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Top Designali templates, last 30 days. Click a column to sort.
            </p>
          </div>
          <span className="text-xs text-muted-foreground">{rows.length} templates</span>
        </div>

        <div className="overflow-x-auto border">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="border-b bg-muted/50 text-xs text-muted-foreground">
              <tr>
                <th className="w-12 px-4 py-3 text-left font-medium">#</th>
                <th className="px-4 py-3 text-left font-medium">Template</th>
                {columns.map((c) => {
                  const on = sort.key === c.key
                  return (
                    <th key={c.key} className="px-4 py-3 text-right font-medium">
                      <button
                        type="button"
                        onClick={() => toggle(c.key)}
                        className={cn(
                          "inline-flex items-center gap-1 hover:text-foreground",
                          on && "text-foreground"
                        )}
                      >
                        {c.label}
                        {on ? (
                          sort.dir === "asc" ? (
                            <ArrowUp className="size-3" />
                          ) : (
                            <ArrowDown className="size-3" />
                          )
                        ) : (
                          <ChevronsUpDown className="size-3" />
                        )}
                      </button>
                    </th>
                  )
                })}
                <th className="px-4 py-3 text-right font-medium">7-week trend</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((r, i) => (
                <tr key={r.name} className="border-b transition-colors last:border-b-0 hover:bg-muted/40">
                  <td className="px-4 py-4 font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center bg-muted text-xs font-semibold">
                        {r.name.slice(0, 2).toUpperCase()}
                      </span>
                      <div>
                        <p className="font-medium">{r.name}</p>
                        <p className="text-xs text-muted-foreground">{r.owner}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right font-mono">{r.installs.toLocaleString()}</td>
                  <td className="px-4 py-4 text-right font-mono">{r.rating.toFixed(1)}</td>
                  <td className="px-4 py-4 text-right font-mono">${r.revenue.toLocaleString()}</td>
                  <td className="px-4 py-4">
                    <div className="flex justify-end">
                      <Spark data={r.trend} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
