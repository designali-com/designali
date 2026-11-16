"use client"

import * as React from "react"
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const transactions = Array.from({ length: 23 }, (_, i) => ({
  id: "TX-" + (1040 + i),
  merchant: [
    "Vercel",
    "Figma",
    "GitHub",
    "Notion",
    "Cursor",
  ][i % 5],
  amount: ((i * 37) % 180) + 4.75,
}))

const pageSize = 5

export default function PaginatedTable() {
  const [page, setPage] = React.useState(0)
  const pageCount = Math.ceil(transactions.length / pageSize)
  const rows = transactions.slice(page * pageSize, page * pageSize + pageSize)

  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Merchant</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((tx) => (
            <TableRow key={tx.id}>
              <TableCell className="font-sans">{tx.id}</TableCell>
              <TableCell>{tx.merchant}</TableCell>
              <TableCell className="text-right tabular-nums">
                {"$" + tx.amount.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between border-t px-3 py-2">
        <span className="text-xs text-muted-foreground">
          {page * pageSize + 1}-
          {Math.min((page + 1) * pageSize, transactions.length)} of{" "}
          {transactions.length}
        </span>
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="icon-sm"
            disabled={page === 0}
            onClick={() => setPage((p) => p - 1)}
            aria-label="Previous page"
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            disabled={page === pageCount - 1}
            onClick={() => setPage((p) => p + 1)}
            aria-label="Next page"
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}
