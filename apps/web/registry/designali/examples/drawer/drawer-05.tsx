"use client"

import * as React from "react"
import {
  Minus as MinusIcon,
  Plus as PlusIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { cn } from "@workspace/ui/lib/utils"

const initialItems = [
  {
    id: "mug",
    name: "Templates Pro",
    variant: "Next.js · Tailwind CSS",
    price: 22,
    qty: 2,
    gradient: "from-primary/20 to-primary",
  },
  {
    id: "tote",
    name: "Icons Pro",
    variant: "4000+ icons",
    price: 35,
    qty: 1,
    gradient: "from-muted to-muted-foreground",
  },
  {
    id: "candle",
    name: "Logo pack",
    variant: "SVG + React",
    price: 28,
    qty: 1,
    gradient: "from-primary/20 to-primary",
  },
]

export default function ShoppingCartDrawer() {
  const [items, setItems] = React.useState(initialItems)
  const count = items.reduce((sum, item) => sum + item.qty, 0)
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0)

  function update(id: string, delta: number) {
    setItems((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    )
  }

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        <ShoppingCartIcon data-icon="inline-start" />
        Cart ({count})
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Your cart</DrawerTitle>
          <DrawerDescription>
            {count} items · Instant download after checkout
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          {items.length === 0 && (
            <p className="py-10 text-center text-muted-foreground">
              Your cart is empty.
            </p>
          )}
          {items.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div
                className={cn(
                  "size-14 shrink-0 bg-gradient-to-br",
                  item.gradient
                )}
              />
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex justify-between gap-2">
                  <span className="truncate font-medium">{item.name}</span>
                  <span className="tabular-nums">
                    {"$" + item.price * item.qty}
                  </span>
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
        </div>
        <DrawerFooter className="border-t pt-4">
          <div className="flex justify-between font-medium">
            <span>Subtotal</span>
            <span className="tabular-nums">{"$" + subtotal.toFixed(2)}</span>
          </div>
          <Button disabled={items.length === 0}>Checkout</Button>
          <DrawerClose render={<Button variant="ghost" />}>
            Continue shopping
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
