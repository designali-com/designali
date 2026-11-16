"use client"

import { useState } from "react"
import {
  ChevronDown,
} from "@designali/icons"

const columns = [
  { title: "Shop", links: ["Templates", "Blocks", "UI Designs", "Icons", "Logos"] },
  { title: "Help", links: ["Docs", "Pricing", "Licensing", "Downloads", "Contact us"] },
  { title: "Studio", links: ["Work", "Ali Imam", "Services", "Case studies", "Terms"] },
  { title: "Community", links: ["Instagram", "X", "LinkedIn", "Blogs"] },
]

export default function Footer14() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xl font-bold tracking-tight italic">DESIGNALI</p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
              Templates, blocks and design resources crafted by Ali Imam and
              tested in real projects before they ship.
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
          <p>© 2026 Designali</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="/contact" className="hover:text-foreground">Contact</a>
            <a href="/docs/legal/terms" className="hover:text-foreground">Terms</a>
            <a href="/docs" className="hover:text-foreground">Docs</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
