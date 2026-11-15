"use client"

import * as React from "react"
import { MinusIcon, PlusIcon, ShoppingCartIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const initialItems = [
  {
    id: "mug",
    name: "Stoneware mug",
    variant: "Sand / 350ml",
    price: 18,
    qty: 2,
  },
  { id: "tote", name: "Canvas tote", variant: "Natural", price: 24, qty: 1 },
  { id: "candle", name: "Cedar candle", variant: "8oz", price: 32, qty: 1 },
]

export default function ShoppingCartSheet() {
  const [items, setItems] = React.useState(initialItems)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const count = items.reduce((sum, item) => sum + item.qty, 0)

  function update(id: string, delta: number) {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    )
  }

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <ShoppingCartIcon data-icon="inline-start" />
        Cart ({count})
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your cart</SheetTitle>
          <SheetDescription>{count} items ready for checkout.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className="size-14 shrink-0 bg-gradient-to-br from-muted to-muted-foreground/20" />
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex justify-between gap-2">
                  <span className="font-medium">{item.name}</span>
                  <span>${item.price * item.qty}</span>
                </div>
                <span className="text-muted-foreground">{item.variant}</span>
                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="icon-xs"
                    aria-label="Decrease"
                    onClick={() => update(item.id, -1)}
                  >
                    <MinusIcon />
                  </Button>
                  <span className="w-6 text-center tabular-nums">
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
            </div>
          ))}
          {items.length === 0 && (
            <p className="py-10 text-center text-muted-foreground">
              Your cart is empty.
            </p>
          )}
        </div>
        <SheetFooter className="border-t">
          <div className="flex justify-between font-medium">
            <span>Subtotal</span>
            <span>${subtotal}.00</span>
          </div>
          <p className="text-muted-foreground">
            Shipping and taxes calculated at checkout.
          </p>
          <Button disabled={items.length === 0}>Checkout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
