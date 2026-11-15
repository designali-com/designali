"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"

const TOTAL = 18

export default function IconOnlyPageIndicator() {
  const [page, setPage] = React.useState(3)

  return (
    <div className="flex w-full max-w-xs items-center justify-between border px-3 py-1.5">
      <span className="text-xs font-medium">Activity</span>
      <Pagination className="mx-0 w-auto">
        <PaginationContent className="gap-1">
          <PaginationItem>
            <PaginationLink
              href="#"
              size="icon-sm"
              aria-label="Previous page"
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.max(1, p - 1))
              }}
            >
              <ChevronLeftIcon />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <span className="px-1 text-xs text-muted-foreground tabular-nums">
              Page {page} of {TOTAL}
            </span>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              size="icon-sm"
              aria-label="Next page"
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.min(TOTAL, p + 1))
              }}
            >
              <ChevronRightIcon />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
