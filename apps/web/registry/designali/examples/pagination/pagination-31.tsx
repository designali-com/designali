"use client"

import * as React from "react"

import { Kbd } from "@workspace/ui/components/kbd"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"

const TOTAL = 8

export default function KeyboardPagination() {
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      if (target.closest("input, textarea")) return
      if (event.key === "ArrowLeft") setPage((p) => Math.max(1, p - 1))
      if (event.key === "ArrowRight") setPage((p) => Math.min(TOTAL, p + 1))
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3">
      <Pagination>
        <PaginationContent>
          {Array.from({ length: TOTAL }, (_, i) => i + 1).map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                size="icon-sm"
                isActive={p === page}
                onClick={(event) => {
                  event.preventDefault()
                  setPage(p)
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        Use <Kbd>←</Kbd> <Kbd>→</Kbd> to change pages
      </p>
    </div>
  )
}
