"use client"

import * as React from "react"
import { ChevronRightIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"

const orders = [
  {
    id: "SO-881",
    customer: "Harbor Cafe",
    total: 412.5,
    items: [
      ["Espresso beans 5kg", 2],
      ["Oat milk case", 4],
    ],
  },
  {
    id: "SO-882",
    customer: "Pine & Co",
    total: 96.0,
    items: [["Paper cups 1k", 1]],
  },
  {
    id: "SO-883",
    customer: "Lantern Bakery",
    total: 238.2,
    items: [
      ["Flour 25kg", 3],
      ["Butter 10kg", 1],
    ],
  },
] as const

export default function ExpandableRowsTable() {
  const [open, setOpen] = React.useState<string | null>("SO-881")

  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8" />
            <TableHead>Order</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            const expanded = open === order.id
            return (
              <React.Fragment key={order.id}>
                <TableRow>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      aria-expanded={expanded}
                      aria-label={"Toggle " + order.id}
                      onClick={() => setOpen(expanded ? null : order.id)}
                    >
                      <ChevronRightIcon
                        className={cn(
                          "transition-transform",
                          expanded && "rotate-90"
                        )}
                      />
                    </Button>
                  </TableCell>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell className="text-right tabular-nums">
                    {"$" + order.total.toFixed(2)}
                  </TableCell>
                </TableRow>
                {expanded && (
                  <TableRow className="bg-muted/30 hover:bg-muted/30">
                    <TableCell />
                    <TableCell colSpan={3}>
                      <ul className="flex flex-col gap-1">
                        {order.items.map(([name, qty]) => (
                          <li
                            key={name}
                            className="flex justify-between text-muted-foreground"
                          >
                            <span>{name}</span>
                            <span>x{qty}</span>
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
