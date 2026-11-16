"use client"

import * as React from "react"
import {
  Minus as MinusIcon,
  Plus as PlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

const initial = [
  {
    id: "mug",
    name: "Portfolio Simple template",
    price: 18,
    qty: 2,
    tone: "from-border to-muted-foreground",
  },
  {
    id: "kettle",
    name: "Icons Pack",
    price: 46,
    qty: 1,
    tone: "from-muted-foreground to-foreground",
  },
]

export default function CartItemsSeparated() {
  const [items, setItems] = React.useState(initial)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  const update = (id: string, delta: number) =>
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    )

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          {index > 0 && <Separator />}
          <div className="flex items-center gap-3">
            <div
              className={cn("size-12 shrink-0 bg-linear-to-br", item.tone)}
            />
            <div className="flex flex-1 flex-col text-sm">
              <span className="font-medium">{item.name}</span>
              <span className="text-xs text-muted-foreground">
                {"$" + item.price}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="icon-xs"
                aria-label="Decrease"
                onClick={() => update(item.id, -1)}
              >
                <MinusIcon />
              </Button>
              <span className="w-5 text-center text-sm tabular-nums">
                {item.qty}
              </span>
              <Button
                variant="outline"
                size="icon-xs"
                aria-label="Increase"
                onClick={() => update(item.id, 1)}
              >
                <PlusIcon />
              </Button>
            </div>
          </div>
        </React.Fragment>
      ))}
      <Separator className="data-horizontal:h-0.5" />
      <div className="flex justify-between text-sm font-medium">
        <span>Subtotal</span>
        <span>{"$" + subtotal.toFixed(2)}</span>
      </div>
    </div>
  )
}
