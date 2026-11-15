"use client"

import { useState } from "react"
import { ChevronDown, Download, RotateCcw } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

type Status = "Processing" | "Shipped" | "Delivered" | "Returned"

const orders: {
  id: string
  date: string
  status: Status
  total: number
  items: { name: string; qty: number; price: number; tone: string }[]
}[] = [
  {
    id: "WM-30418",
    date: "12 Nov 2026",
    status: "Processing",
    total: 86,
    items: [
      { name: "Oat Milk Soap, 3-pack", qty: 1, price: 24, tone: "from-amber-100 to-orange-200 dark:from-amber-900 dark:to-orange-950" },
      { name: "Bamboo Toothbrush Set", qty: 2, price: 31, tone: "from-lime-200 to-emerald-100 dark:from-lime-900 dark:to-emerald-950" },
    ],
  },
  {
    id: "WM-29877",
    date: "28 Oct 2026",
    status: "Shipped",
    total: 142,
    items: [
      { name: "Refill Pouch, Hand Wash 1L", qty: 2, price: 36, tone: "from-sky-200 to-sky-50 dark:from-sky-900 dark:to-sky-950" },
      { name: "Glass Dispenser", qty: 2, price: 35, tone: "from-zinc-200 to-zinc-50 dark:from-zinc-700 dark:to-zinc-900" },
    ],
  },
  {
    id: "WM-28102",
    date: "3 Sep 2026",
    status: "Delivered",
    total: 58,
    items: [
      { name: "Shampoo Bar, Rosemary", qty: 2, price: 29, tone: "from-emerald-200 to-lime-100 dark:from-emerald-900 dark:to-lime-950" },
    ],
  },
  {
    id: "WM-27650",
    date: "19 Aug 2026",
    status: "Returned",
    total: 44,
    items: [
      { name: "Konjac Sponge, Charcoal", qty: 4, price: 11, tone: "from-neutral-500 to-neutral-300 dark:from-neutral-700 dark:to-neutral-900" },
    ],
  },
]

const statusStyle: Record<Status, string> = {
  Processing: "bg-amber-500/15 text-amber-800 dark:text-amber-300",
  Shipped: "bg-sky-500/15 text-sky-800 dark:text-sky-300",
  Delivered: "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300",
  Returned: "bg-muted text-muted-foreground",
}

const filters = ["All", "Processing", "Shipped", "Delivered", "Returned"] as const

export default function Ecommerce20() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All")
  const [expanded, setExpanded] = useState<string | null>(orders[0]!.id)
  const [reordered, setReordered] = useState<string[]>([])
  const visible = filter === "All" ? orders : orders.filter((o) => o.status === filter)

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-muted-foreground">Account · Wellmade Goods</p>
          <h2 className="text-3xl font-medium tracking-tight">Your orders</h2>
        </div>

        <div className="mt-6 flex gap-1 overflow-x-auto border-b border-border [scrollbar-width:none]">
          {filters.map((f) => {
            const count = f === "All" ? orders.length : orders.filter((o) => o.status === f).length
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "-mb-px shrink-0 border-b-2 px-3 py-2.5 text-sm transition-colors",
                  filter === f ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {f} <span className="text-xs text-muted-foreground">{count}</span>
              </button>
            )
          })}
        </div>

        <ul className="mt-6 space-y-3">
          {visible.map((order) => {
            const isOpen = expanded === order.id
            const done = reordered.includes(order.id)
            return (
              <li key={order.id} className="border border-border">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setExpanded(isOpen ? null : order.id)}
                  className="grid w-full grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 p-4 text-left transition-colors hover:bg-muted/40 sm:grid-cols-[1fr_1fr_1fr_auto_auto] sm:p-5"
                >
                  <span>
                    <span className="block font-mono text-sm font-medium">#{order.id}</span>
                    <span className="block text-xs text-muted-foreground sm:hidden">{order.date}</span>
                  </span>
                  <span className="hidden text-sm text-muted-foreground sm:block">{order.date}</span>
                  <span className="hidden text-sm tabular-nums sm:block">${order.total.toFixed(2)}</span>
                  <span className={cn("w-fit px-2 py-0.5 text-xs", statusStyle[order.status])}>{order.status}</span>
                  <ChevronDown
                    className={cn("hidden size-4 text-muted-foreground transition-transform sm:block", isOpen && "rotate-180")}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-border p-4 sm:p-5">
                    <ul className="space-y-3">
                      {order.items.map((item) => (
                        <li key={item.name} className="flex items-center gap-3 text-sm">
                          <span className={cn("size-12 shrink-0 border border-border bg-gradient-to-br", item.tone)} />
                          <span className="min-w-0 flex-1">
                            <span className="block truncate">{item.name}</span>
                            <span className="block text-xs text-muted-foreground">Qty {item.qty}</span>
                          </span>
                          <span className="tabular-nums">${item.price.toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                      <span className="text-sm">
                        Total <span className="font-medium tabular-nums">${order.total.toFixed(2)}</span>
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="ghost" size="md">
                          <Download />
                          Invoice
                        </Button>
                        {order.status === "Delivered" && (
                          <Button variant="outline" size="md">
                            Start a return
                          </Button>
                        )}
                        <Button
                          size="md"
                          variant={done ? "secondary" : "default"}
                          onClick={() => setReordered((r) => (r.includes(order.id) ? r : [...r, order.id]))}
                        >
                          <RotateCcw />
                          {done ? "Added to bag" : "Buy again"}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
