"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"
import { cn } from "@workspace/ui/lib/utils"

const tickets = [
  { id: 4821, subject: "Template download link expired", priority: "High" },
  { id: 4819, subject: "Icons package install fails", priority: "Medium" },
  { id: 4815, subject: "License for a client project", priority: "High" },
  { id: 4810, subject: "Figma file missing from bundle", priority: "Low" },
  { id: 4804, subject: "Add teammate to Pro plan", priority: "Low" },
  { id: 4799, subject: "Block looks off in dark mode", priority: "Medium" },
]

const PAGE_SIZE = 3

export default function TicketQueuePagination() {
  const [page, setPage] = React.useState(1)
  const pageCount = Math.ceil(tickets.length / PAGE_SIZE)
  const rows = tickets.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-3">
      <span className="text-sm font-medium">Unassigned tickets</span>
      <ul className="flex flex-col divide-y">
        {rows.map((ticket) => (
          <li key={ticket.id} className="flex items-center gap-2 py-2 text-xs">
            <span className="font-sans text-muted-foreground">
              #{ticket.id}
            </span>
            <span className="flex-1 truncate">{ticket.subject}</span>
            <Badge
              variant={ticket.priority === "High" ? "destructive" : "outline"}
            >
              {ticket.priority}
            </Badge>
          </li>
        ))}
      </ul>
      <Pagination>
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              aria-disabled={page === 1}
              className={cn(page === 1 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.max(1, p - 1))
              }}
            />
          </PaginationItem>
          <PaginationItem className="text-xs text-muted-foreground">
            Page {page} of {pageCount}
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              aria-disabled={page === pageCount}
              className={cn(
                page === pageCount && "pointer-events-none opacity-50"
              )}
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.min(pageCount, p + 1))
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
