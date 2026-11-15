"use client"

import * as React from "react"
import { Columns3Icon } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { Toggle } from "@workspace/ui/components/toggle"

const rows = [
  { id: "INV-301", customer: "Fable & Co", amount: "$1,240", due: "Oct 30" },
  { id: "INV-302", customer: "Orbit Labs", amount: "$860", due: "Nov 04" },
  { id: "INV-303", customer: "Pine Studio", amount: "$3,100", due: "Nov 12" },
]

export default function TableColumnVisibilityToggles() {
  const [showAmount, setShowAmount] = React.useState(true)
  const [showDue, setShowDue] = React.useState(false)

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Columns3Icon className="size-3.5" />
        Columns
        <Toggle
          size="sm"
          variant="outline"
          pressed={showAmount}
          onPressedChange={setShowAmount}
        >
          Amount
        </Toggle>
        <Toggle
          size="sm"
          variant="outline"
          pressed={showDue}
          onPressedChange={setShowDue}
        >
          Due date
        </Toggle>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Customer</TableHead>
            {showAmount && <TableHead className="text-end">Amount</TableHead>}
            {showDue && <TableHead>Due</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.id}>
              <TableCell className="font-mono text-xs">{r.id}</TableCell>
              <TableCell>{r.customer}</TableCell>
              {showAmount && (
                <TableCell className="text-end tabular-nums">
                  {r.amount}
                </TableCell>
              )}
              {showDue && <TableCell>{r.due}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
