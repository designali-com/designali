"use client"

import { useState } from "react"

import { cn } from "@workspace/ui/lib/utils"

const filters = ["All", "Branding", "Product", "Motion"] as const

const items = [
  { title: "Kestrel identity", tag: "Branding", hue: "var(--chart-1)" },
  { title: "Orbital app", tag: "Product", hue: "var(--chart-2)" },
  { title: "Launch film", tag: "Motion", hue: "var(--chart-3)" },
  { title: "Sable packaging", tag: "Branding", hue: "var(--chart-4)" },
  { title: "Quanta dashboard", tag: "Product", hue: "var(--chart-5)" },
  { title: "Title sequence", tag: "Motion", hue: "var(--chart-1)" },
  { title: "Fieldnote type", tag: "Branding", hue: "var(--chart-3)" },
  { title: "Tessel onboarding", tag: "Product", hue: "var(--chart-4)" },
]

export default function Gallery04() {
  const [active, setActive] = useState<(typeof filters)[number]>("All")
  const visible = items.filter(
    (item) => active === "All" || item.tag === active
  )

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight">Archive</h2>
          <div className="flex flex-wrap gap-1">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={cn(
                  "border px-3 py-1.5 text-xs transition-colors",
                  active === filter
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:text-foreground"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {visible.map((item) => (
            <figure key={item.title}>
              <div
                className="aspect-[4/5] border border-border"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${item.hue}, transparent 70%), var(--muted)`,
                }}
              />
              <figcaption className="mt-2 flex justify-between text-xs">
                <span className="font-medium">{item.title}</span>
                <span className="text-muted-foreground">{item.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
