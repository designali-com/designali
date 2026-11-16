"use client"

import * as React from "react"
import {
  ShoppingBag as ShoppingBagIcon,
  X as XIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

const initial = [
  {
    id: "tote",
    name: "Portfolio Simple template",
    qty: 1,
    price: 38,
    tone: "from-amber-200 to-orange-300",
  },
  {
    id: "mug",
    name: "Icons Pack",
    qty: 2,
    price: 22,
    tone: "from-sky-200 to-indigo-300",
  },
]

export default function CartPreviewPopover() {
  const [items, setItems] = React.useState(initial)
  const count = items.reduce((sum, item) => sum + item.qty, 0)
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0)

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <ShoppingBagIcon data-icon="inline-start" />
        Cart
        <Badge className="ms-1">{count}</Badge>
      </PopoverTrigger>
      <PopoverContent className="w-72" align="end">
        <PopoverTitle>Your cart</PopoverTitle>
        {items.length === 0 ? (
          <p className="py-4 text-center text-xs text-muted-foreground">
            Your cart is empty.
          </p>
        ) : (
          <ul className="flex flex-col gap-2.5">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-2.5">
                <div
                  className={cn(
                    "size-10 shrink-0 bg-gradient-to-br",
                    item.tone
                  )}
                />
                <div className="flex flex-1 flex-col">
                  <span className="text-xs font-medium">{item.name}</span>
                  <span className="text-[11px] text-muted-foreground">
                    Qty {item.qty} · ${item.price * item.qty}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label={"Remove " + item.name}
                  onClick={() =>
                    setItems((prev) => prev.filter((i) => i.id !== item.id))
                  }
                >
                  <XIcon />
                </Button>
              </li>
            ))}
          </ul>
        )}
        <Separator />
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium tabular-nums">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <Button size="sm" disabled={!items.length}>
          Checkout
        </Button>
      </PopoverContent>
    </Popover>
  )
}
