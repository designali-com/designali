"use client"

import * as React from "react"
import {
  ArchiveIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  RefreshCwIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"
import { cn } from "@workspace/ui/lib/utils"

const TOTAL = 2384
const PAGE_SIZE = 50

export default function InboxRangePagination() {
  const [page, setPage] = React.useState(1)
  const start = (page - 1) * PAGE_SIZE + 1
  const end = Math.min(page * PAGE_SIZE, TOTAL)
  const last = Math.ceil(TOTAL / PAGE_SIZE)

  return (
    <div className="flex w-full max-w-md items-center justify-between gap-2 border-b px-2 py-1">
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon-sm" aria-label="Refresh">
          <RefreshCwIcon />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Archive">
          <ArchiveIcon />
        </Button>
      </div>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem className="pe-1 text-xs text-muted-foreground tabular-nums">
            {start.toLocaleString()}-{end.toLocaleString()} of{" "}
            {TOTAL.toLocaleString()}
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              size="icon-sm"
              aria-label="Newer messages"
              aria-disabled={page === 1}
              className={cn(page === 1 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.max(1, p - 1))
              }}
            >
              <ChevronLeftIcon />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              size="icon-sm"
              aria-label="Older messages"
              aria-disabled={page === last}
              className={cn(page === last && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.min(last, p + 1))
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
