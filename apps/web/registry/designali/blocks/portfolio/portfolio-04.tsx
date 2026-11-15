"use client"

import { useState } from "react"

import { cn } from "@workspace/ui/lib/utils"

const filters = ["All", "Branding", "Product", "Motion", "Print"]

const works = [
  { title: "Kinfolk Ceramics", type: "Branding", ratio: "aspect-square", color: "var(--chart-1)" },
  { title: "Pulse Wearable", type: "Product", ratio: "aspect-[3/4]", color: "var(--chart-2)" },
  { title: "Tide Festival", type: "Motion", ratio: "aspect-[4/3]", color: "var(--chart-3)" },
  { title: "Verso Magazine", type: "Print", ratio: "aspect-[3/4]", color: "var(--chart-4)" },
  { title: "Fieldnote App", type: "Product", ratio: "aspect-square", color: "var(--chart-5)" },
  { title: "Harbor Hotel", type: "Branding", ratio: "aspect-[4/3]", color: "var(--chart-2)" },
  { title: "Signal Conference", type: "Motion", ratio: "aspect-square", color: "var(--chart-1)" },
  { title: "Paper Trail Annual", type: "Print", ratio: "aspect-[4/3]", color: "var(--chart-3)" },
]

export default function Portfolio04() {
  const [filter, setFilter] = useState("All")
  const visible = filter === "All" ? works : works.filter((w) => w.type === filter)

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 border-b border-border pb-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-medium tracking-tight md:text-5xl">Archive</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {visible.length} projects shown
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={cn(
                  "pb-1 transition-colors",
                  filter === item
                    ? "border-b border-foreground text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visible.map((work) => (
            <a key={work.title} href="#" className="group mb-4 block break-inside-avoid">
              <div className={cn("relative overflow-hidden border border-border bg-muted", work.ratio)}>
                <div
                  className="absolute inset-0 opacity-70 transition-opacity group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 70% 30%, ${work.color}, transparent 70%)`,
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-background/90 px-4 py-3 text-sm backdrop-blur transition-transform md:translate-y-full md:group-hover:translate-y-0">
                  <span className="font-medium">{work.title}</span>
                  <span className="text-xs text-muted-foreground">{work.type}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
