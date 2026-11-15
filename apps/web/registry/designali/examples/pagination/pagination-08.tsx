"use client"

import * as React from "react"
import { ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"
import { cn } from "@workspace/ui/lib/utils"

const TOTAL = 40

export default function FirstLastPagination() {
  const [page, setPage] = React.useState(12)
  const go = (event: React.MouseEvent, next: number) => {
    event.preventDefault()
    setPage(Math.min(TOTAL, Math.max(1, next)))
  }
  const atStart = page === 1
  const atEnd = page === TOTAL

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Go to first page"
            aria-disabled={atStart}
            className={cn(atStart && "pointer-events-none opacity-50")}
            onClick={(event) => go(event, 1)}
          >
            <ChevronsLeftIcon />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            aria-disabled={atStart}
            className={cn(atStart && "pointer-events-none opacity-50")}
            onClick={(event) => go(event, page - 1)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            size="default"
            onClick={(event) => event.preventDefault()}
          >
            {page} / {TOTAL}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            aria-disabled={atEnd}
            className={cn(atEnd && "pointer-events-none opacity-50")}
            onClick={(event) => go(event, page + 1)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Go to last page"
            aria-disabled={atEnd}
            className={cn(atEnd && "pointer-events-none opacity-50")}
            onClick={(event) => go(event, TOTAL)}
          >
            <ChevronsRightIcon />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
