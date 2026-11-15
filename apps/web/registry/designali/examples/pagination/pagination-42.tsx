"use client"

import * as React from "react"
import { CalendarDaysIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"

const base = new Date(2026, 10, 9)

function formatRange(offset: number) {
  const start = new Date(base)
  start.setDate(base.getDate() + offset * 7)
  const end = new Date(start)
  end.setDate(start.getDate() + 6)
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  return fmt(start) + " - " + fmt(end)
}

export default function WeekRangePagination() {
  const [offset, setOffset] = React.useState(0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-3">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-sm font-medium">
          <CalendarDaysIcon className="size-4" /> {formatRange(offset)}
        </span>
        {offset === 0 && <Badge variant="secondary">This week</Badge>}
      </div>
      <Pagination>
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              text="Last week"
              onClick={(event) => {
                event.preventDefault()
                setOffset((o) => o - 1)
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              size="sm"
              isActive={offset === 0}
              onClick={(event) => {
                event.preventDefault()
                setOffset(0)
              }}
            >
              Today
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              text="Next week"
              onClick={(event) => {
                event.preventDefault()
                setOffset((o) => o + 1)
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
