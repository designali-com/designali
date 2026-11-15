"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"
import { Spinner } from "@workspace/ui/components/spinner"

export default function LoadingPagePagination() {
  const [page, setPage] = React.useState(1)
  const [pending, setPending] = React.useState<number | null>(null)

  const go = (event: React.MouseEvent, next: number) => {
    event.preventDefault()
    if (pending || next === page) return
    setPending(next)
    window.setTimeout(() => {
      setPage(next)
      setPending(null)
    }, 900)
  }

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3">
      <div className="flex h-16 w-full items-center justify-center border border-dashed text-xs text-muted-foreground">
        {pending
          ? "Fetching page " + pending + "..."
          : "Showing results on page " + page}
      </div>
      <Pagination aria-busy={pending !== null}>
        <PaginationContent>
          {[1, 2, 3, 4, 5].map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                onClick={(event) => go(event, p)}
              >
                {pending === p ? <Spinner /> : p}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  )
}
