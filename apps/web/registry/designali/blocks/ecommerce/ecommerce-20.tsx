"use client"

import { useState } from "react"
import {
  ChevronDown,
  Download,
  RotateCcw,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

type Status = "Processing" | "Shipped" | "Delivered" | "Returned"

const orders: {
  id: string
  date: string
  status: Status
  total: number
  items: { name: string; qty: number; price: number; image: string }[]
}[] = [
  {
    id: "DA-30418",
    date: "12 Nov 2026",
    status: "Processing",
    total: 86,
    items: [
      { name: "Portfolio Simple Template", qty: 1, price: 24, image: "/images/templates/portfolio-simple.jpg" },
      { name: "Dalim UI Kit", qty: 2, price: 31, image: "/images/templates/dalim-ui-old.jpg" },
    ],
  },
  {
    id: "DA-29877",
    date: "28 Oct 2026",
    status: "Shipped",
    total: 142,
    items: [
      { name: "Designali Icons Pro", qty: 2, price: 36, image: "/images/templates/dalim-icons-old.jpg" },
      { name: "Apple Device Mockups", qty: 2, price: 35, image: "/images/templates/aliimam-comp.jpg" },
    ],
  },
  {
    id: "DA-28102",
    date: "3 Sep 2026",
    status: "Delivered",
    total: 58,
    items: [
      { name: "Designali Logos Pack", qty: 2, price: 29, image: "/images/templates/dalim-graphic-old.jpg" },
    ],
  },
  {
    id: "DA-27650",
    date: "19 Aug 2026",
    status: "Returned",
    total: 44,
    items: [
      { name: "Vectors Starter Pack", qty: 4, price: 11, image: "/images/templates/dalim-visuals-old.jpg" },
    ],
  },
]

const statusStyle: Record<Status, string> = {
  Processing: "bg-primary/15 text-chart-4 dark:text-chart-1",
  Shipped: "bg-primary/15 text-chart-4 dark:text-chart-1",
  Delivered: "bg-primary/15 text-chart-4 dark:text-chart-1",
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
          <p className="text-sm text-muted-foreground">Account · designali.com</p>
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
                    <span className="block font-sans text-sm font-medium">#{order.id}</span>
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
                          <img src={item.image} alt={item.name} className="size-12 shrink-0 object-cover object-top border border-border" />
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
                            Request a refund
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
