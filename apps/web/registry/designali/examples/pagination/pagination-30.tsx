"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"
import { cn } from "@workspace/ui/lib/utils"

const cursors = ["evt_9f2a", "evt_81cd", "evt_77b0", "evt_6e13"]

export default function CursorPagination() {
  const [history, setHistory] = React.useState<string[]>([cursors[0]!])
  const current = history[history.length - 1]!
  const nextIndex = cursors.indexOf(current) + 1
  const hasMore = nextIndex < cursors.length

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-3">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium">designali.com webhook events</span>
        <code className="bg-muted px-1.5 py-0.5 font-mono text-[11px]">
          after={current}
        </code>
      </div>
      <p className="text-xs text-muted-foreground">
        {history.length} {history.length === 1 ? "batch" : "batches"} loaded ·
        25 events each
      </p>
      <Pagination>
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              aria-disabled={history.length === 1}
              className={cn(
                history.length === 1 && "pointer-events-none opacity-50"
              )}
              onClick={(event) => {
                event.preventDefault()
                setHistory((h) => h.slice(0, -1))
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              text={hasMore ? "Next" : "End of feed"}
              aria-disabled={!hasMore}
              className={cn(!hasMore && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                if (hasMore) setHistory((h) => [...h, cursors[nextIndex]!])
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
