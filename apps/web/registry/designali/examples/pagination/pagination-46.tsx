"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"
import { Slider } from "@workspace/ui/components/slider"

function getPages(current: number, total: number, siblings = 1) {
  const pages: (number | "ellipsis")[] = [1]
  const start = Math.max(2, current - siblings)
  const end = Math.min(total - 1, current + siblings)
  if (start > 2) pages.push("ellipsis")
  for (let i = start; i <= end; i++) pages.push(i)
  if (end < total - 1) pages.push("ellipsis")
  if (total > 1) pages.push(total)
  return pages
}

const TOTAL = 200

export default function SliderScrubberPagination() {
  const [page, setPage] = React.useState(86)

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="text-xs text-muted-foreground tabular-nums">1</span>
        <Slider
          min={1}
          max={TOTAL}
          value={[page]}
          onValueChange={(value) =>
            setPage(Array.isArray(value) ? value[0]! : value)
          }
          aria-label="Scrub pages"
        />
        <span className="text-xs text-muted-foreground tabular-nums">
          {TOTAL}
        </span>
      </div>
      <Pagination>
        <PaginationContent>
          {getPages(page, TOTAL).map((p, index) =>
            p === "ellipsis" ? (
              <PaginationItem key={"e" + index}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={p}>
                <PaginationLink
                  href="#"
                  isActive={p === page}
                  className="min-w-8 px-1 tabular-nums"
                  onClick={(event) => {
                    event.preventDefault()
                    setPage(p)
                  }}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            )
          )}
        </PaginationContent>
      </Pagination>
    </div>
  )
}
