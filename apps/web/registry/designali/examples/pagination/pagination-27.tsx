"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export default function MonthNavigatorPagination() {
  const [offset, setOffset] = React.useState(10)
  const year = 2026 + Math.floor(offset / 12)
  const label = months[((offset % 12) + 12) % 12] + " " + year

  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-2 border p-2">
      <Button variant="outline" size="sm" onClick={() => setOffset(10)}>
        Today
      </Button>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink
              href="#"
              aria-label="Previous month"
              onClick={(event) => {
                event.preventDefault()
                setOffset((o) => o - 1)
              }}
            >
              <ChevronLeftIcon />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="w-32 text-center text-sm font-medium">
            {label}
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              aria-label="Next month"
              onClick={(event) => {
                event.preventDefault()
                setOffset((o) => o + 1)
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
