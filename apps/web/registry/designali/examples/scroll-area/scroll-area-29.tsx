"use client"

import * as React from "react"
import { MinusIcon, PlusIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const initial = [
  { id: 1, name: "Pour-over Kettle", price: 54, qty: 1 },
  { id: 2, name: "Ceramic Dripper", price: 28, qty: 1 },
  { id: 3, name: "Paper Filters (100)", price: 9, qty: 2 },
  { id: 4, name: "Single Origin - Kenya", price: 19, qty: 1 },
  { id: 5, name: "Burr Grinder", price: 139, qty: 1 },
  { id: 6, name: "Glass Server", price: 32, qty: 1 },
]

export default function CartItemsQuantity() {
  const [items, setItems] = React.useState(initial)
  const update = (id: number, delta: number) =>
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i
        )
        .filter((i) => i.qty > 0)
    )

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <span className="text-sm font-medium">Cart</span>
        <Badge variant="secondary">
          {items.reduce((n, i) => n + i.qty, 0)} items
        </Badge>
      </div>
      <ScrollArea className="h-60">
        <div className="flex flex-col divide-y">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 px-4 py-2.5 text-xs"
            >
              <span className="min-w-0 flex-1 truncate">{item.name}</span>
              <Button
                size="icon-xs"
                variant="outline"
                aria-label="Decrease"
                onClick={() => update(item.id, -1)}
              >
                <MinusIcon />
              </Button>
              <span className="w-5 text-center tabular-nums">{item.qty}</span>
              <Button
                size="icon-xs"
                variant="outline"
                aria-label="Increase"
                onClick={() => update(item.id, 1)}
              >
                <PlusIcon />
              </Button>
              <span className="w-12 text-right tabular-nums">
                ${item.price * item.qty}
              </span>
            </div>
          ))}
          {items.length === 0 && (
            <p className="py-10 text-center text-xs text-muted-foreground">
              Your cart is empty.
            </p>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
