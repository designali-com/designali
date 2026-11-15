"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"

const unread = new Set([2, 5])

export default function UnreadMarkerPagination() {
  const [page, setPage] = React.useState(1)

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-2">
      <Pagination>
        <PaginationContent>
          {[1, 2, 3, 4, 5, 6].map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                className="relative"
                aria-label={
                  unread.has(p)
                    ? "Page " + p + ", has unread reviews"
                    : "Page " + p
                }
                onClick={(event) => {
                  event.preventDefault()
                  setPage(p)
                }}
              >
                {p}
                {unread.has(p) && (
                  <span className="absolute end-1 top-1 size-1.5 rounded-full bg-primary" />
                )}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
      <p className="text-xs text-muted-foreground">
        Pages with a dot contain unread reviews
      </p>
    </div>
  )
}
