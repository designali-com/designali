"use client"

import { useState } from "react"
import {
  MapPin,
  Search,
} from "@designali/icons"

import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

const stores = [
  {
    name: "Americas",
    address: "Remote · UTC−8 to UTC−3",
    distance: "Async",
    open: true,
    x: 38,
    y: 42,
  },
  {
    name: "Europe",
    address: "Remote · UTC to UTC+3",
    distance: "Live",
    open: true,
    x: 46,
    y: 66,
  },
  {
    name: "Middle East",
    address: "Remote · UTC+3 to UTC+4",
    distance: "Live",
    open: false,
    x: 64,
    y: 18,
  },
  {
    name: "Asia Pacific",
    address: "Remote · UTC+5:30 to UTC+10",
    distance: "Live",
    open: true,
    x: 16,
    y: 56,
  },
]

export default function Location03() {
  const [active, setActive] = useState(0)
  const [query, setQuery] = useState("")
  const results = stores.filter((store) =>
    `${store.name} ${store.address}`.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section className="w-full bg-background">
      <div className="mx-auto grid max-w-7xl border-y md:h-[640px] md:grid-cols-[380px_1fr] md:border-x">
        <aside className="flex flex-col border-b md:border-e md:border-b-0">
          <div className="space-y-4 border-b p-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              Designali time zones
            </h2>
            <div className="relative">
              <Search className="absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by region"
                className="h-10 ps-9"
              />
            </div>
          </div>
          <ul className="flex-1 divide-y overflow-y-auto">
            {results.map((store) => {
              const index = stores.indexOf(store)
              return (
                <li key={store.name}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className={cn(
                      "flex w-full items-start gap-3 p-6 text-start transition-colors hover:bg-muted/50",
                      active === index && "bg-muted"
                    )}
                  >
                    <MapPin className="mt-0.5 size-4 shrink-0" />
                    <span className="flex-1">
                      <span className="block font-medium">{store.name}</span>
                      <span className="block text-sm text-muted-foreground">
                        {store.address}
                      </span>
                      <span
                        className={cn(
                          "mt-2 block text-xs",
                          store.open ? "text-emerald-600" : "text-muted-foreground"
                        )}
                      >
                        {store.open ? "Available now" : "Offline · replies within 24h"}
                      </span>
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {store.distance}
                    </span>
                  </button>
                </li>
              )
            })}
            {results.length === 0 && (
              <li className="p-6 text-sm text-muted-foreground">
                No regions match &ldquo;{query}&rdquo;.
              </li>
            )}
          </ul>
        </aside>

        <div
          className="relative min-h-96 bg-muted"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        >
          {stores.map((store, index) => (
            <button
              key={store.name}
              type="button"
              onClick={() => setActive(index)}
              style={{ left: `${store.x}%`, top: `${store.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              aria-label={store.name}
            >
              <span
                className={cn(
                  "flex size-4 items-center justify-center rounded-full border-2 border-background transition-transform",
                  active === index
                    ? "scale-150 bg-primary ring-8 ring-primary/20"
                    : "bg-foreground/60"
                )}
              />
            </button>
          ))}
          <div className="absolute end-4 bottom-4 border bg-background p-4 text-sm shadow-sm">
            <p className="font-medium">{stores[active]?.name}</p>
            <p className="text-muted-foreground">{stores[active]?.address}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
