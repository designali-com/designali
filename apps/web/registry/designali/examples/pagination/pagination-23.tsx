"use client"

import * as React from "react"
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@designali/icons"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"

export default function SegmentedPagination() {
  const [page, setPage] = React.useState(3)

  return (
    <Pagination>
      <PaginationContent className="gap-0 border [&_li+li]:border-s">
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Previous page"
            onClick={(event) => {
              event.preventDefault()
              setPage((p) => Math.max(1, p - 1))
            }}
          >
            <ChevronLeftIcon />
          </PaginationLink>
        </PaginationItem>
        {[1, 2, 3, 4, 5].map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              href="#"
              isActive={p === page}
              className="border-0 data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              onClick={(event) => {
                event.preventDefault()
                setPage(p)
              }}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Next page"
            onClick={(event) => {
              event.preventDefault()
              setPage((p) => Math.min(5, p + 1))
            }}
          >
            <ChevronRightIcon />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
