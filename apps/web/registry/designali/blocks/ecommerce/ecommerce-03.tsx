"use client"

import { useState } from "react"
import {
  Minus,
  Plus,
  X,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const initialItems = [
  { id: 1, name: "Designali Icons Pro", variant: "Personal license · 4,000+ icons", price: 39, qty: 1, image: "/images/templates/dalim-icons-old.jpg" },
  { id: 2, name: "Design Agency Template", variant: "Pro license · Next.js + Figma", price: 79, qty: 1, image: "/images/templates/design-agency.jpg" },
  { id: 3, name: "Apple Device Mockups", variant: "Team license · 3 seats", price: 35, qty: 3, image: "/images/templates/aliimam-comp.jpg" },
]

export default function Ecommerce03() {
  const [items, setItems] = useState(initialItems)

  const updateQty = (id: number, delta: number) =>
    setItems((list) =>
      list.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    )
  const remove = (id: number) => setItems((list) => list.filter((item) => item.id !== id))

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 8
  const tax = Math.round(subtotal * 0.08 * 100) / 100

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-medium tracking-tight">Your cart</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {items.length} {items.length === 1 ? "item" : "items"}
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
          <ul className="border-t border-border">
            {items.length === 0 && (
              <li className="py-16 text-center text-sm text-muted-foreground">
                Your cart is empty.
              </li>
            )}
            {items.map((item) => (
              <li key={item.id} className="flex gap-4 border-b border-border py-6">
                <img src={item.image} alt={item.name} className="size-24 shrink-0 border border-border object-cover object-top" />
                <div className="flex flex-1 flex-col justify-between gap-3 sm:flex-row">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.variant}</p>
                    <p className="mt-2 text-sm">${item.price}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center border border-border">
                      <button type="button" aria-label="Decrease quantity" className="p-2" onClick={() => updateQty(item.id, -1)}>
                        <Minus className="size-3" />
                      </button>
                      <span className="w-6 text-center text-sm tabular-nums">{item.qty}</span>
                      <button type="button" aria-label="Increase quantity" className="p-2" onClick={() => updateQty(item.id, 1)}>
                        <Plus className="size-3" />
                      </button>
                    </div>
                    <p className="w-16 pt-1.5 text-right text-sm tabular-nums">
                      ${item.price * item.qty}
                    </p>
                    <button
                      type="button"
                      aria-label={`Remove ${item.name}`}
                      onClick={() => remove(item.id)}
                      className="pt-1.5 text-muted-foreground hover:text-foreground"
                    >
                      <X className="size-4" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit border border-border bg-muted/40 p-6">
            <h3 className="font-medium">Order summary</h3>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd className="tabular-nums">${subtotal.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Processing</dt>
                <dd className="tabular-nums">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Estimated tax</dt>
                <dd className="tabular-nums">${tax.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-3 text-base font-medium">
                <dt>Total</dt>
                <dd className="tabular-nums">${(subtotal + shipping + tax).toFixed(2)}</dd>
              </div>
            </dl>
            <div className="mt-6 flex gap-2">
              <Input placeholder="Discount code" aria-label="Discount code" className="h-10 bg-background" />
              <Button variant="outline">Apply</Button>
            </div>
            <Button size="lg" className="mt-4 w-full" disabled={items.length === 0}>
              Checkout
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              No processing fee on orders over $100
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
