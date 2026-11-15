"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"
import { cn } from "@workspace/ui/lib/utils"

const TOTAL = 5

export default function ControlledPagination() {
  const [page, setPage] = React.useState(1)

  const go = (event: React.MouseEvent, next: number) => {
    event.preventDefault()
    setPage(Math.min(TOTAL, Math.max(1, next)))
  }

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              aria-disabled={page === 1}
              className={cn(page === 1 && "pointer-events-none opacity-50")}
              onClick={(event) => go(event, page - 1)}
            />
          </PaginationItem>
          {Array.from({ length: TOTAL }, (_, i) => i + 1).map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                onClick={(event) => go(event, p)}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              aria-disabled={page === TOTAL}
              className={cn(page === TOTAL && "pointer-events-none opacity-50")}
              onClick={(event) => go(event, page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <p className="text-xs text-muted-foreground">
        Page {page} of {TOTAL}
      </p>
    </div>
  )
}
