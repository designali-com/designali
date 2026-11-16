"use client"

import * as React from "react"
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@designali/icons"

import { Input } from "@workspace/ui/components/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"

const TOTAL = 37

export default function InlinePageInputPagination() {
  const [page, setPage] = React.useState(5)
  const [draft, setDraft] = React.useState("5")

  const commit = (value: number) => {
    const next = Math.min(
      TOTAL,
      Math.max(1, Number.isNaN(value) ? page : value)
    )
    setPage(next)
    setDraft(String(next))
  }

  return (
    <Pagination>
      <PaginationContent className="gap-1">
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Previous page"
            onClick={(event) => {
              event.preventDefault()
              commit(page - 1)
            }}
          >
            <ChevronLeftIcon />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="flex items-center gap-1.5 text-xs text-muted-foreground">
          Page
          <Input
            aria-label="Current page"
            inputMode="numeric"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onBlur={() => commit(Number(draft))}
            onKeyDown={(event) => {
              if (event.key === "Enter") commit(Number(draft))
            }}
            className="h-7 w-12 text-center tabular-nums"
          />
          of {TOTAL}
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Next page"
            onClick={(event) => {
              event.preventDefault()
              commit(page + 1)
            }}
          >
            <ChevronRightIcon />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
