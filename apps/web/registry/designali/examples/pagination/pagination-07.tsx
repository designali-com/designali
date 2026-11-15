"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const TOTAL_ITEMS = 120

export default function PageSizeTogglePagination() {
  const [size, setSize] = React.useState(20)
  const [page, setPage] = React.useState(1)
  const pageCount = Math.ceil(TOTAL_ITEMS / size)
  const visible = Array.from(
    { length: Math.min(pageCount, 5) },
    (_, i) => i + 1
  )

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs text-muted-foreground">Items per page</span>
        <ToggleGroup
          variant="outline"
          size="sm"
          spacing={0}
          value={[String(size)]}
          onValueChange={(value) => {
            if (!value.length) return
            setSize(Number(value[0]))
            setPage(1)
          }}
        >
          {[10, 20, 40].map((option) => (
            <ToggleGroupItem key={option} value={String(option)}>
              {option}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <Pagination>
        <PaginationContent>
          {visible.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
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
          {pageCount > 5 && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={page === pageCount}
                  onClick={(event) => {
                    event.preventDefault()
                    setPage(pageCount)
                  }}
                >
                  {pageCount}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
        </PaginationContent>
      </Pagination>
      <p className="text-center text-xs text-muted-foreground">
        {pageCount} pages of {size} items
      </p>
    </div>
  )
}
