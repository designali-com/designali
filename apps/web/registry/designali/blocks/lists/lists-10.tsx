"use client"

import { useState } from "react"
import {
  ChevronDown,
  Package,
  RotateCcw,
  Truck,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const orders = [
  {
    id: "DSG-20841",
    date: "Nov 12, 2026",
    status: "Processing",
    total: 248,
    eta: "Download link sent to your email",
    items: [
      { name: "Designali Pro", variant: "Personal · 1 year", qty: 1, price: 128 },
      { name: "Dashboard UI kit", variant: "Figma + React", qty: 2, price: 36 },
      { name: "Icon pack add-on", variant: "@designali/icons", qty: 1, price: 48 },
    ],
  },
  {
    id: "DSG-20517",
    date: "Oct 28, 2026",
    status: "Delivered",
    total: 186,
    eta: "Delivered to your inbox Oct 28",
    items: [
      { name: "Portfolio template", variant: "Next.js · Commercial", qty: 1, price: 186 },
    ],
  },
  {
    id: "DSG-19902",
    date: "Sep 14, 2026",
    status: "Refunded",
    total: 94,
    eta: "Refunded Sep 25",
    items: [
      { name: "Landing page pack", variant: "Tailwind CSS", qty: 1, price: 38 },
      { name: "Illustration set", variant: "@designali/vectors", qty: 1, price: 56 },
    ],
  },
]

const statusStyle: Record<string, string> = {
  Processing: "bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-300",
  Delivered: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300",
  Refunded: "bg-muted text-muted-foreground",
}

export default function Lists10() {
  const [open, setOpen] = useState<string | null>(orders[0]!.id)

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight">Designali orders</h2>
        <p className="mt-2 text-sm text-muted-foreground">Download, renew or reorder your Designali templates from the last 12 months.</p>

        <ul className="mt-10 space-y-3">
          {orders.map((order) => {
            const isOpen = open === order.id
            return (
              <li key={order.id} className="border border-border">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : order.id)}
                  className="grid w-full grid-cols-[1fr_auto] items-center gap-4 p-5 text-left hover:bg-muted/40 sm:grid-cols-[1fr_auto_auto_auto]"
                >
                  <span>
                    <span className="block font-mono text-sm">{order.id}</span>
                    <span className="text-xs text-muted-foreground">
                      {order.date} · {order.items.length} {order.items.length === 1 ? "item" : "items"}
                    </span>
                  </span>
                  <span className={cn("hidden px-2 py-1 text-[11px] font-medium sm:inline-block", statusStyle[order.status])}>
                    {order.status}
                  </span>
                  <span className="hidden font-mono text-sm sm:block">${order.total}.00</span>
                  <ChevronDown className={cn("size-4 text-muted-foreground transition-transform", isOpen && "rotate-180")} />
                </button>

                {isOpen && (
                  <div className="border-t border-border bg-muted/20 p-5">
                    <div className="mb-4 flex items-center justify-between gap-3 sm:hidden">
                      <span className={cn("px-2 py-1 text-[11px] font-medium", statusStyle[order.status])}>{order.status}</span>
                      <span className="font-mono text-sm">${order.total}.00</span>
                    </div>
                    <ul className="divide-y divide-border">
                      {order.items.map((item) => (
                        <li key={item.name} className="flex items-center gap-4 py-3">
                          <span className="flex size-12 shrink-0 items-center justify-center bg-gradient-to-br from-stone-200 to-stone-400 dark:from-stone-700 dark:to-stone-500">
                            <Package className="size-4 text-stone-700 dark:text-stone-200" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-medium">{item.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {item.variant} · Qty {item.qty}
                            </span>
                          </span>
                          <span className="font-mono text-sm">${item.price * item.qty}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                        <Truck className="size-3.5" /> {order.eta}
                      </span>
                      <div className="flex gap-2">
                        <a href="#" className="inline-flex h-8 items-center border border-border bg-background px-3 text-xs hover:bg-muted">
                          Download files
                        </a>
                        <a href="#" className="inline-flex h-8 items-center gap-1.5 border border-border bg-background px-3 text-xs hover:bg-muted">
                          <RotateCcw className="size-3" /> Reorder
                        </a>
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
