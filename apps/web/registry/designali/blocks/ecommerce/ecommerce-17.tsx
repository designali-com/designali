"use client"

import { useState } from "react"
import {
  Bell,
  Heart,
  ShoppingBag,
  Trash2,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

type Item = {
  id: number
  name: string
  variant: string
  price: number
  was?: number
  stock: "in" | "low" | "out"
  added: string
  image: string
}

const initial: Item[] = [
  { id: 1, name: "Blocks Pro Bundle", variant: "Pro license · 460+ blocks", price: 149, was: 199, stock: "in", added: "Added 3 days ago", image: "/images/templates/aliimam-comp.jpg" },
  { id: 2, name: "Design Agency Template", variant: "Studio license", price: 179, stock: "low", added: "Added 2 weeks ago", image: "/images/templates/design-agency.jpg" },
  { id: 3, name: "Dalim Fonts Collection", variant: "Desktop + web", price: 59, stock: "out", added: "Added 1 month ago", image: "/images/templates/dalim-fonts-old.jpg" },
  { id: 4, name: "Apple Device Mockups", variant: "iPhone, iPad, MacBook, iMac", price: 35, stock: "in", added: "Added 1 month ago", image: "/images/templates/aliimam-comp.jpg" },
]

const stockLabel = {
  in: { text: "In stock", className: "text-chart-3 dark:text-primary" },
  low: { text: "Launch price ends soon", className: "text-chart-3 dark:text-primary" },
  out: { text: "Coming soon", className: "text-muted-foreground" },
}

export default function Ecommerce17() {
  const [items, setItems] = useState(initial)
  const [moved, setMoved] = useState<number[]>([])
  const [notify, setNotify] = useState<number[]>([])

  const remove = (id: number) => setItems((l) => l.filter((i) => i.id !== id))
  const value = items.reduce((s, i) => s + i.price, 0)
  const drops = items.filter((i) => i.was).length

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="flex items-center gap-3 text-3xl font-medium tracking-tight">
              <Heart className="size-6" />
              Saved for later
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {items.length} items · ${value.toLocaleString()} total
              {drops > 0 && <span> · {drops} price drop</span>}
            </p>
          </div>
          <Button variant="outline" disabled={items.length === 0} onClick={() => setMoved(items.filter((i) => i.stock !== "out").map((i) => i.id))}>
            <ShoppingBag />
            Move all available to bag
          </Button>
        </div>

        <ul className="mt-8 border-t border-border">
          {items.length === 0 && (
            <li className="py-20 text-center text-sm text-muted-foreground">
              Nothing saved yet. Tap the heart on any product to keep it here.
            </li>
          )}
          {items.map((item) => {
            const inBag = moved.includes(item.id)
            const notified = notify.includes(item.id)
            return (
              <li key={item.id} className="grid grid-cols-[80px_1fr] gap-4 border-b border-border py-5 sm:grid-cols-[96px_1fr_auto] sm:items-center">
                <img src={item.image} alt={item.name} className={cn("aspect-square w-full border border-border object-cover object-top", item.stock === "out" && "opacity-50 grayscale")} />
                <div className="min-w-0">
                  <a href="#" className="font-medium hover:underline">{item.name}</a>
                  <p className="text-xs text-muted-foreground">{item.variant}</p>
                  <p className="mt-2 flex flex-wrap items-baseline gap-x-2 text-sm tabular-nums">
                    <span className={cn(item.was && "text-destructive dark:text-destructive")}>${item.price}</span>
                    {item.was && <span className="text-xs text-muted-foreground line-through">${item.was}</span>}
                    <span className={cn("text-xs", stockLabel[item.stock].className)}>{stockLabel[item.stock].text}</span>
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">{item.added}</p>
                </div>
                <div className="col-span-2 flex items-center gap-2 sm:col-span-1">
                  {item.stock === "out" ? (
                    <Button
                      variant="outline"
                      className="flex-1 sm:w-40 sm:flex-none"
                      onClick={() => setNotify((n) => (n.includes(item.id) ? n : [...n, item.id]))}
                    >
                      <Bell />
                      {notified ? "We'll email you" : "Notify me"}
                    </Button>
                  ) : (
                    <Button
                      variant={inBag ? "secondary" : "default"}
                      className="flex-1 sm:w-40 sm:flex-none"
                      onClick={() => setMoved((m) => (m.includes(item.id) ? m : [...m, item.id]))}
                    >
                      {inBag ? "In your bag" : "Move to bag"}
                    </Button>
                  )}
                  <Button variant="ghost" size="icon-lg" aria-label={`Remove ${item.name}`} onClick={() => remove(item.id)}>
                    <Trash2 />
                  </Button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
