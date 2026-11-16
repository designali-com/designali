"use client"

import * as React from "react"
import {
  ShoppingCart as ShoppingCartIcon,
  Truck as TruckIcon,
} from "@designali/icons"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

const speeds: Record<string, { label: string; price: number }> = {
  standard: { label: "Standard (5-7 days)", price: 0 },
  express: { label: "Express (2 days)", price: 12 },
  overnight: { label: "Overnight", price: 29 },
}

export default function CheckoutStepsMenubar() {
  const [speed, setSpeed] = React.useState("standard")
  const subtotal = 148

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <ShoppingCartIcon className="me-1.5 size-3.5" /> Cart (2)
          </MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarGroup>
              <MenubarItem>
                Designali Templates Pro{" "}
                <span className="ms-auto text-muted-foreground tabular-nums">
                  $96
                </span>
              </MenubarItem>
              <MenubarItem>
                Icons Pro license{" "}
                <span className="ms-auto text-muted-foreground tabular-nums">
                  $52
                </span>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>Edit cart</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <TruckIcon className="me-1.5 size-3.5" /> Shipping
          </MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarRadioGroup value={speed} onValueChange={setSpeed}>
              {Object.entries(speeds).map(([value, s]) => (
                <MenubarRadioItem key={value} value={value}>
                  {s.label}
                  <span className="ms-auto text-muted-foreground tabular-nums">
                    {s.price ? "$" + s.price : "Free"}
                  </span>
                </MenubarRadioItem>
              ))}
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex items-center justify-between border p-3 text-sm">
        <span className="text-muted-foreground">Total</span>
        <span className="font-semibold tabular-nums">
          {"$" + (subtotal + speeds[speed]!.price) + ".00"}
        </span>
      </div>
    </div>
  )
}
