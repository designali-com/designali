"use client"

import { useState } from "react"

const templates = [
  { name: "Portfolio Simple", category: "Portfolio", pages: 6, price: "Free", hue: 210 },
  { name: "AI", category: "SaaS", pages: 12, price: "$49", hue: 160 },
  { name: "Designali Blog", category: "Blog", pages: 5, price: "Free", hue: 120 },
  { name: "Vercel Style", category: "SaaS", pages: 14, price: "$79", hue: 260 },
  { name: "Resort", category: "Store", pages: 9, price: "$59", hue: 30 },
  { name: "Design Notes", category: "Blog", pages: 7, price: "$29", hue: 350 },
  { name: "Design Agency", category: "Portfolio", pages: 4, price: "$19", hue: 290 },
  { name: "Icon Store", category: "Store", pages: 11, price: "$69", hue: 60 },
  { name: "Dashboard", category: "SaaS", pages: 10, price: "Free", hue: 190 },
]

const filters = ["All", "SaaS", "Portfolio", "Store", "Blog"]

export default function Grid10() {
  const [active, setActive] = useState("All")
  const visible = active === "All" ? templates : templates.filter((t) => t.category === active)

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Start from a Designali template</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            Every Designali template is built with Next.js and Tailwind CSS, responsive, accessible and ships with light and dark themes.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div role="tablist" className="inline-flex flex-wrap justify-center gap-1 bg-muted p-1">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={active === filter}
                onClick={() => setActive(filter)}
                className={`px-4 py-2 text-xs font-medium transition-colors ${
                  active === filter
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter}
                <span className="ml-1.5 font-mono opacity-50">
                  {filter === "All" ? templates.length : templates.filter((t) => t.category === filter).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((template) => (
            <li key={template.name}>
              <a href="#" className="group block">
                <div
                  className="relative aspect-[4/3] overflow-hidden border border-border p-5"
                  style={{ background: `oklch(0.94 0.04 ${template.hue})` }}
                >
                  <div className="h-full translate-y-3 border border-black/10 bg-white shadow-xl transition-transform duration-300 group-hover:translate-y-0">
                    <div className="flex items-center gap-1 border-b border-black/10 px-3 py-2">
                      <span className="size-1.5 rounded-full bg-black/20" />
                      <span className="size-1.5 rounded-full bg-black/20" />
                      <span className="size-1.5 rounded-full bg-black/20" />
                    </div>
                    <div className="space-y-2 p-4">
                      <div className="h-2 w-1/3" style={{ background: `oklch(0.55 0.15 ${template.hue})` }} />
                      <div className="h-4 w-3/4 bg-neutral-800" />
                      <div className="h-2 w-2/3 bg-neutral-200" />
                      <div className="grid grid-cols-3 gap-2 pt-3">
                        <div className="aspect-square" style={{ background: `oklch(0.85 0.08 ${template.hue})` }} />
                        <div className="aspect-square bg-neutral-100" />
                        <div className="aspect-square bg-neutral-100" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium">{template.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {template.category} · {template.pages} pages
                    </p>
                  </div>
                  <span className="border border-border px-2 py-0.5 font-mono text-xs">{template.price}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
