"use client"

import * as React from "react"
import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"

const initialCart = [
  { id: "a", name: "Pour-over kettle", price: 64 },
  { id: "b", name: "Ceramic dripper", price: 28 },
  { id: "c", name: "Paper filters (100)", price: 9 },
]

export default function CartSummaryTable() {
  const [qty, setQty] = React.useState<Record<string, number>>({
    a: 1,
    b: 2,
    c: 3,
  })
  const total = initialCart.reduce(
    (s, item) => s + item.price * (qty[item.id] ?? 0),
    0
  )
  const change = (id: string, d: number) =>
    setQty((q) => ({ ...q, [id]: Math.max(0, (q[id] ?? 0) + d) }))

  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead className="text-center">Qty</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {initialCart.map((item) => (
            <TableRow
              key={item.id}
              className={cn(qty[item.id] === 0 && "opacity-50")}
            >
              <TableCell>
                <p className="font-medium">{item.name}</p>
                <p className="text-muted-foreground">
                  {"$" + item.price.toFixed(2)} each
                </p>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-1">
                  <Button
                    variant="outline"
                    size="icon-xs"
                    aria-label="Decrease"
                    onClick={() => change(item.id, -1)}
                  >
                    <MinusIcon />
                  </Button>
                  <span className="w-6 text-center tabular-nums">
                    {qty[item.id]}
                  </span>
                  <Button
                    variant="outline"
                    size="icon-xs"
                    aria-label="Increase"
                    onClick={() => change(item.id, 1)}
                  >
                    <PlusIcon />
                  </Button>
                </div>
              </TableCell>
              <TableCell className="text-right tabular-nums">
                {"$" + (item.price * (qty[item.id] ?? 0)).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell className="text-right tabular-nums">
              {"$" + total.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
