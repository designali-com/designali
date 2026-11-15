"use client"

import * as React from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { cn } from "@workspace/ui/lib/utils"

const invoices = [
  { id: "INV-2041", client: "Brightpath Tutors", amount: 1200, status: "Paid" },
  {
    id: "INV-2042",
    client: "Copperleaf Dental",
    amount: 860,
    status: "Overdue",
  },
  { id: "INV-2043", client: "Northgate Gym", amount: 450, status: "Draft" },
  { id: "INV-2044", client: "Saltwater Surf Co", amount: 2300, status: "Paid" },
  { id: "INV-2045", client: "Juniper Florist", amount: 310, status: "Overdue" },
]

const filters = ["All", "Paid", "Overdue", "Draft"]

export default function StatusFilterTabsTable() {
  const [filter, setFilter] = React.useState("All")
  const rows =
    filter === "All" ? invoices : invoices.filter((i) => i.status === filter)

  return (
    <div className="flex w-full max-w-lg flex-col gap-2">
      <Tabs value={filter} onValueChange={(v) => setFilter(v as string)}>
        <TabsList>
          {filters.map((f) => (
            <TabsTrigger key={f} value={f}>
              {f}
              <span className="text-muted-foreground">
                {f === "All"
                  ? invoices.length
                  : invoices.filter((i) => i.status === f).length}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Client</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="font-mono">{inv.id}</TableCell>
                <TableCell>{inv.client}</TableCell>
                <TableCell
                  className={cn(
                    "text-right tabular-nums",
                    inv.status === "Overdue" && "text-destructive"
                  )}
                >
                  {"$" + inv.amount.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
