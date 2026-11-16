"use client"

import { useState } from "react"
import {
  Minus,
  Plus,
  ShoppingBag,
  Truck,
  X,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const FREE_SHIPPING = 120

const initial = [
  { id: 1, name: "Design Agency Template", variant: "Pro license", price: 38, qty: 1, tone: "from-amber-700/60 to-amber-200/40" },
  { id: 2, name: "Designali Icons Pro", variant: "Personal license", price: 24, qty: 2, tone: "from-lime-600/50 to-lime-100/40" },
]

const upsell = { id: 3, name: "Apple Device Mockups", variant: "iPhone, iPad, MacBook", price: 18, qty: 1, tone: "from-yellow-500/60 to-yellow-100/40" }

export default function Ecommerce13() {
  const [open, setOpen] = useState(true)
  const [items, setItems] = useState(initial)

  const count = items.reduce((s, i) => s + i.qty, 0)
  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0)
  const remaining = Math.max(0, FREE_SHIPPING - subtotal)
  const pct = Math.min(100, (subtotal / FREE_SHIPPING) * 100)
  const hasUpsell = items.some((i) => i.id === upsell.id)

  const update = (id: number, delta: number) =>
    setItems((list) =>
      list
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    )

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative h-[640px] overflow-hidden border border-border bg-muted/30">
          {/* Mock storefront header */}
          <header className="flex items-center justify-between border-b border-border bg-background px-5 py-4">
            <span className="text-sm font-semibold tracking-tight">designali</span>
            <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
              <span>Templates</span>
              <span>Blocks</span>
              <span>Icons</span>
            </nav>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={`Open cart, ${count} items`}
              className="relative flex size-9 items-center justify-center"
            >
              <ShoppingBag className="size-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  {count}
                </span>
              )}
            </button>
          </header>

          <div className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="aspect-[4/5] bg-gradient-to-br from-muted to-background" />
            ))}
          </div>

          {/* Overlay */}
          <div
            onClick={() => setOpen(false)}
            className={cn(
              "absolute inset-0 bg-black/30 transition-opacity",
              open ? "opacity-100" : "pointer-events-none opacity-0"
            )}
          />

          {/* Drawer */}
          <aside
            aria-label="Shopping cart"
            aria-hidden={!open}
            className={cn(
              "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-border bg-background shadow-2xl transition-transform duration-300",
              open ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="font-medium">Your bag ({count})</h2>
              <Button variant="ghost" size="icon" aria-label="Close cart" onClick={() => setOpen(false)}>
                <X />
              </Button>
            </div>

            <div className="border-b border-border px-5 py-4">
              <p className="flex items-center gap-2 text-xs">
                <Truck className="size-3.5" />
                {remaining > 0 ? (
                  <span>
                    Spend <strong className="font-medium">${remaining}</strong> more for free updates
                  </span>
                ) : (
                  <span>You&apos;ve unlocked free updates</span>
                )}
              </p>
              <div className="mt-2 h-1 bg-muted">
                <div
                  className={cn("h-full transition-all", remaining > 0 ? "bg-foreground" : "bg-emerald-500")}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>

            <ul className="flex-1 overflow-y-auto px-5">
              {items.length === 0 && (
                <li className="py-16 text-center text-sm text-muted-foreground">Your bag is empty.</li>
              )}
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 border-b border-border py-4">
                  <span className={cn("size-16 shrink-0 bg-gradient-to-br", item.tone)} />
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-sm tabular-nums">${item.price * item.qty}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.variant}</p>
                    <div className="mt-auto flex w-fit items-center border border-border">
                      <button type="button" aria-label="Decrease" className="p-1.5" onClick={() => update(item.id, -1)}>
                        <Minus className="size-3" />
                      </button>
                      <span className="w-6 text-center text-xs tabular-nums">{item.qty}</span>
                      <button type="button" aria-label="Increase" className="p-1.5" onClick={() => update(item.id, 1)}>
                        <Plus className="size-3" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}

              {!hasUpsell && (
                <li className="py-4">
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">Pairs well with</p>
                  <div className="mt-3 flex items-center gap-3 bg-muted/60 p-3">
                    <span className={cn("size-12 shrink-0 bg-gradient-to-br", upsell.tone)} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{upsell.name}</p>
                      <p className="text-xs text-muted-foreground">${upsell.price}</p>
                    </div>
                    <Button size="sm" variant="outline" onClick={() => setItems((l) => [...l, upsell])}>
                      Add
                    </Button>
                  </div>
                </li>
              )}
            </ul>

            <div className="border-t border-border p-5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium tabular-nums">${subtotal.toFixed(2)}</span>
              </div>
              <Button size="lg" className="mt-4 w-full" disabled={items.length === 0}>
                Checkout
              </Button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-3 w-full text-center text-xs text-muted-foreground underline underline-offset-4"
              >
                Continue shopping
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
