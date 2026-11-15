"use client"

import { useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const links = [
  { label: "Work", count: "24" },
  { label: "Studio", count: "" },
  { label: "Services", count: "06" },
  { label: "Journal", count: "41" },
  { label: "Contact", count: "" },
]

const socials = ["Instagram", "Dribbble", "LinkedIn"]

export default function Navigation10() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="relative h-[640px]">
        <header className="relative z-20 mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a
            href="#"
            className={cn(
              "text-lg font-semibold tracking-tight transition-colors",
              open && "text-background"
            )}
          >
            Fieldwork&reg;
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className={cn(
              "flex h-10 items-center gap-2 border px-4 text-sm transition-colors",
              open && "border-background/30 text-background"
            )}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
            {open ? "Close" : "Menu"}
          </button>
        </header>

        <div className="mx-auto max-w-7xl px-6 pt-16">
          <h2 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
            Brand systems for companies that make physical things.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            An independent design studio in Lisbon working with manufacturers,
            hardware startups and craft producers.
          </p>
        </div>

        <div
          className={cn(
            "absolute inset-0 z-10 bg-foreground text-background transition-[clip-path] duration-500 ease-out",
            open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
          )}
          aria-hidden={!open}
        >
          <div className="mx-auto grid h-full max-w-7xl gap-10 px-6 pt-28 pb-10 md:grid-cols-[1fr_240px]">
            <nav>
              <ul className="divide-y divide-background/15 border-y border-background/15">
                {links.map((link, index) => (
                  <li key={link.label}>
                    <a
                      href="#"
                      tabIndex={open ? 0 : -1}
                      className="group flex items-baseline gap-4 py-3 md:py-4"
                    >
                      <span className="font-mono text-xs text-background/50">0{index + 1}</span>
                      <span className="text-3xl font-semibold tracking-tight transition-transform group-hover:translate-x-2 md:text-5xl">
                        {link.label}
                      </span>
                      {link.count && (
                        <sup className="font-mono text-xs text-background/50">{link.count}</sup>
                      )}
                      <ArrowUpRight className="ms-auto size-6 self-center opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden flex-col justify-end gap-8 text-sm md:flex">
              <div>
                <p className="text-background/50">New business</p>
                <a href="#" tabIndex={open ? 0 : -1} className="mt-1 block">
                  hello@fieldwork.studio
                </a>
              </div>
              <ul className="space-y-1">
                {socials.map((social) => (
                  <li key={social}>
                    <a href="#" tabIndex={open ? 0 : -1} className="text-background/70 hover:text-background">
                      {social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
