"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"

const invoices = [
  { id: "INV-2041", date: "Nov 1, 2026", amount: "$249.00", status: "Paid" },
  { id: "INV-2017", date: "Oct 1, 2026", amount: "$249.00", status: "Paid" },
  {
    id: "INV-1988",
    date: "Sep 1, 2026",
    amount: "$199.00",
    status: "Refunded",
  },
  { id: "INV-1952", date: "Aug 1, 2026", amount: "$199.00", status: "Paid" },
  { id: "INV-1930", date: "Jul 1, 2026", amount: "$199.00", status: "Failed" },
  { id: "INV-1904", date: "Jun 1, 2026", amount: "$199.00", status: "Paid" },
]

const PAGE_SIZE = 3

export default function InvoiceListPagination() {
  const [page, setPage] = React.useState(1)
  const pageCount = Math.ceil(invoices.length / PAGE_SIZE)
  const rows = invoices.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Invoices</CardTitle>
        <CardDescription>Billing history for your designali.com account</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col divide-y">
        {rows.map((invoice) => (
          <div
            key={invoice.id}
            className="flex items-center justify-between py-2 text-xs"
          >
            <div className="flex flex-col">
              <span className="font-medium">{invoice.id}</span>
              <span className="text-muted-foreground">{invoice.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="tabular-nums">{invoice.amount}</span>
              <Badge
                variant={
                  invoice.status === "Failed"
                    ? "destructive"
                    : invoice.status === "Paid"
                      ? "secondary"
                      : "outline"
                }
              >
                {invoice.status}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(event) => {
                  event.preventDefault()
                  setPage((p) => Math.max(1, p - 1))
                }}
              />
            </PaginationItem>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
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
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(event) => {
                  event.preventDefault()
                  setPage((p) => Math.min(pageCount, p + 1))
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  )
}
