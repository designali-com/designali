"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { cn } from "@workspace/ui/lib/utils"

const invoices = [
  { id: "INV-1042", due: "Overdue 4 days", amount: 1200, overdue: true },
  { id: "INV-1047", due: "Due Nov 20", amount: 640 },
  { id: "INV-1051", due: "Due Dec 2", amount: 2150 },
]

export default function InvoicePaySelection() {
  const [picked, setPicked] = React.useState<string[]>(["INV-1042"])
  const total = invoices
    .filter((i) => picked.includes(i.id))
    .reduce((s, i) => s + i.amount, 0)

  return (
    <div className="flex w-full max-w-sm flex-col border">
      {invoices.map((invoice) => (
        <label
          key={invoice.id}
          className="flex cursor-pointer items-center gap-3 border-b px-4 py-3"
        >
          <Checkbox
            checked={picked.includes(invoice.id)}
            onCheckedChange={(checked) =>
              setPicked((list) =>
                checked
                  ? [...list, invoice.id]
                  : list.filter((id) => id !== invoice.id)
              )
            }
          />
          <div className="flex-1">
            <p className="font-mono text-xs">{invoice.id}</p>
            <p
              className={cn(
                "text-xs",
                invoice.overdue ? "text-destructive" : "text-muted-foreground"
              )}
            >
              {invoice.due}
            </p>
          </div>
          <span className="text-sm font-medium tabular-nums">
            ${invoice.amount.toLocaleString()}
          </span>
        </label>
      ))}
      <div className="flex items-center justify-between gap-3 bg-muted/40 px-4 py-3">
        <span className="text-sm">
          Total{" "}
          <span className="font-semibold tabular-nums">
            ${total.toLocaleString()}
          </span>
        </span>
        <Button size="sm" disabled={total === 0}>
          Pay now
        </Button>
      </div>
    </div>
  )
}
