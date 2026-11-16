"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

function pageList(current: number, total: number): (number | "gap")[] {
  if (total <= 7) return Array.from({ length: total }, (_, index) => index + 1)
  if (current <= 4) return [1, 2, 3, 4, 5, "gap", total]
  if (current >= total - 3) return [1, "gap", total - 4, total - 3, total - 2, total - 1, total]
  return [1, "gap", current - 1, current, current + 1, "gap", total]
}

export default function Navigation13() {
  const [page, setPage] = useState(6)
  const [perPage, setPerPage] = useState(20)

  const TOTAL = Math.ceil(468 / perPage)
  const start = (page - 1) * perPage + 1
  const end = Math.min(page * perPage, 468)

  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="space-y-4">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">Table pagination</p>
          <div className="flex flex-col gap-4 border p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Showing <span className="text-foreground tabular-nums">{start}-{end}</span> of{" "}
              <span className="text-foreground tabular-nums">468</span> Designali blocks
            </p>
            <div className="flex items-center gap-4">
              <label className="hidden items-center gap-2 text-sm text-muted-foreground md:flex">
                Rows
                <select
                  value={perPage}
                  onChange={(event) => {
                    setPerPage(Number(event.target.value))
                    setPage(1)
                  }}
                  className="h-8 border bg-background px-2 text-foreground"
                >
                  {[10, 20, 50].map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </label>
              <nav aria-label="Pagination" className="flex items-center">
                <button
                  type="button"
                  aria-label="Previous page"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  className="flex size-8 items-center justify-center border disabled:opacity-40"
                >
                  <ChevronLeft className="size-4" />
                </button>
                {pageList(page, TOTAL).map((item, index) =>
                  item === "gap" ? (
                    <span key={`gap-${index}`} className="flex size-8 items-center justify-center text-sm text-muted-foreground">
                      &hellip;
                    </span>
                  ) : (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setPage(item)}
                      aria-current={page === item ? "page" : undefined}
                      className={cn(
                        "hidden size-8 items-center justify-center text-sm tabular-nums transition-colors sm:flex",
                        page === item
                          ? "flex bg-foreground text-background"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {item}
                    </button>
                  )
                )}
                <button
                  type="button"
                  aria-label="Next page"
                  disabled={page === TOTAL}
                  onClick={() => setPage(page + 1)}
                  className="flex size-8 items-center justify-center border disabled:opacity-40"
                >
                  <ChevronRight className="size-4" />
                </button>
              </nav>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">Article navigation</p>
          <nav aria-label="Chapters" className="grid border sm:grid-cols-2">
            <a href="#" className="group flex flex-col gap-3 border-b p-6 transition-colors hover:bg-muted/50 sm:border-e sm:border-b-0">
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
                Chapter 3
              </span>
              <span className="text-lg font-medium">Designing the block in Figma</span>
            </a>
            <a href="#" className="group flex flex-col items-end gap-3 p-6 text-end transition-colors hover:bg-muted/50">
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                Chapter 5
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="text-lg font-medium">Shipping it with Next.js</span>
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground tabular-nums">4 / 12</span>
            <div className="h-1 flex-1 bg-muted">
              <div className="h-full w-1/3 bg-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
