"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const columns = [
  { title: "Shop", links: ["Running", "Training", "Trail", "Recovery", "Gift cards"] },
  { title: "Help", links: ["Order status", "Shipping", "Returns", "Size guide", "Contact us"] },
  { title: "Company", links: ["Our story", "Materials", "Sustainability", "Careers", "Press"] },
  { title: "Community", links: ["Run clubs", "Ambassadors", "Events", "Journal"] },
]

export default function Footer14() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xl font-bold tracking-tight italic">STRIDEWELL</p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
              Running shoes engineered in Portland and tested on 40,000 miles
              of real roads before they ship.
            </p>
          </div>
          <div className="md:grid md:grid-cols-4 md:gap-8">
            {columns.map((column) => {
              const expanded = open === column.title
              return (
                <div key={column.title} className="border-b md:border-b-0">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? null : column.title)}
                    className="flex w-full items-center justify-between py-4 text-sm font-medium md:pointer-events-none md:py-0"
                  >
                    {column.title}
                    <ChevronDown
                      className={`size-4 transition-transform md:hidden ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                  <ul
                    className={`space-y-2.5 pb-4 text-sm text-muted-foreground md:mt-4 md:block md:pb-0 ${
                      expanded ? "block" : "hidden"
                    }`}
                  >
                    {column.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="hover:text-foreground">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Stridewell Athletics Inc.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Do not sell my info</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
