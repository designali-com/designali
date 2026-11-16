"use client"

import { useState } from "react"

import { cn } from "@workspace/ui/lib/utils"

const filters = ["All", "Branding", "Product", "Web"] as const

const items = [
  { title: "Dalim Agency", tag: "Branding", image: "/images/templates/dalim-agency-old.jpg" },
  { title: "Dalim UI", tag: "Product", image: "/images/templates/dalim-ui-old.jpg" },
  { title: "Portfolio Simple", tag: "Web", image: "/images/templates/portfolio-simple.jpg" },
  { title: "Dalim Graphic", tag: "Branding", image: "/images/templates/dalim-graphic-old.jpg" },
  { title: "Dalim Tools", tag: "Product", image: "/images/templates/dalim-tools-old.jpg" },
  { title: "Resort template", tag: "Web", image: "/images/templates/resort.jpg" },
  { title: "Dalim Fonts", tag: "Branding", image: "/images/templates/dalim-fonts-old.jpg" },
  { title: "AI template", tag: "Product", image: "/images/templates/ai.jpg" },
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
          <h2 className="text-3xl font-semibold tracking-tight">Designali archive</h2>
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
                  background: `url("${item.image}") center / cover, var(--muted)`,
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
