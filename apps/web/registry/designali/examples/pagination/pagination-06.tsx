"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const customers = [
  { name: "Maya Chen", plan: "Pro", seats: 12 },
  { name: "Jonah Okafor", plan: "Starter", seats: 3 },
  { name: "Priya Raman", plan: "Business", seats: 48 },
  { name: "Leo Varga", plan: "Pro", seats: 9 },
  { name: "Ines Duarte", plan: "Starter", seats: 2 },
  { name: "Tomas Lind", plan: "Business", seats: 31 },
  { name: "Aiko Mori", plan: "Pro", seats: 15 },
  { name: "Sam Whitfield", plan: "Starter", seats: 1 },
  { name: "Noor Haddad", plan: "Pro", seats: 7 },
  { name: "Elena Petrova", plan: "Business", seats: 64 },
  { name: "Kofi Mensah", plan: "Starter", seats: 4 },
]

const PAGE_SIZE = 4

export default function TableFooterPagination() {
  const [page, setPage] = React.useState(1)
  const pageCount = Math.ceil(customers.length / PAGE_SIZE)
  const start = (page - 1) * PAGE_SIZE
  const rows = customers.slice(start, start + PAGE_SIZE)

  const go = (event: React.MouseEvent, next: number) => {
    event.preventDefault()
    setPage(Math.min(pageCount, Math.max(1, next)))
  }

  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead className="text-end">Seats</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>{row.plan}</TableCell>
              <TableCell className="text-end tabular-nums">
                {row.seats}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t p-2">
        <p className="text-xs text-muted-foreground">
          {start + 1}-{Math.min(start + PAGE_SIZE, customers.length)} of{" "}
          {customers.length}
        </p>
        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(event) => go(event, page - 1)}
              />
            </PaginationItem>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
              <PaginationItem key={p}>
                <PaginationLink
                  href="#"
                  size="icon-sm"
                  isActive={p === page}
                  onClick={(event) => go(event, p)}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(event) => go(event, page + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
