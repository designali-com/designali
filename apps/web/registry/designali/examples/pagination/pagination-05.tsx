"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"

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

const TOTAL = 24

export default function EllipsisRangePagination() {
  const [page, setPage] = React.useState(9)

  const go = (event: React.MouseEvent, next: number) => {
    event.preventDefault()
    setPage(Math.min(TOTAL, Math.max(1, next)))
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(event) => go(event, page - 1)}
          />
        </PaginationItem>
        {getPages(page, TOTAL).map((p, index) =>
          p === "ellipsis" ? (
            <PaginationItem key={"ellipsis-" + index}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                onClick={(event) => go(event, p)}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem>
          <PaginationNext href="#" onClick={(event) => go(event, page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
