"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"

const TOTAL = 9

export default function CompactMobilePagination() {
  const [page, setPage] = React.useState(4)

  return (
    <Pagination className="max-w-xs">
      <PaginationContent className="w-full justify-between">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            text="Back"
            className="border"
            onClick={(event) => {
              event.preventDefault()
              setPage((p) => Math.max(1, p - 1))
            }}
          />
        </PaginationItem>
        <PaginationItem className="text-sm tabular-nums">
          <span className="font-semibold">{page}</span>
          <span className="text-muted-foreground"> / {TOTAL}</span>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            text="More"
            className="border"
            onClick={(event) => {
              event.preventDefault()
              setPage((p) => Math.min(TOTAL, p + 1))
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
