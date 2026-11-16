"use client"

import { useState } from "react"
import {
  Menu,
  Search,
  ShoppingBag,
  X,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const left = ["Templates", "Blocks", "Blog"]
const right = ["Pricing", "About"]

export default function Navigation06() {
  const [open, setOpen] = useState(false)

  return (
    <section className="w-full bg-background">
      <nav className="relative border-b">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6">
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
              className="-ms-2 flex size-10 items-center justify-center md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
            <ul className="hidden items-center gap-8 md:flex">
              {left.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a href="#" className="flex flex-col items-center leading-none">
            <span className="font-serif text-2xl tracking-[0.3em] uppercase">Designali</span>
            <span className="mt-1 text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
              Design se code tak
            </span>
          </a>

          <div className="flex items-center justify-end gap-8">
            <ul className="hidden items-center gap-8 md:flex">
              {right.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label="Search"
                className="hidden size-10 items-center justify-center sm:flex"
              >
                <Search className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Cart, 2 templates"
                className="relative -me-2 flex size-10 items-center justify-center"
              >
                <ShoppingBag className="size-4" />
                <span className="absolute top-1.5 right-1.5 flex size-4 items-center justify-center bg-foreground text-[10px] text-background">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "grid overflow-hidden border-t transition-[grid-template-rows] duration-300 md:hidden",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-transparent"
          )}
        >
          <ul className="min-h-0 divide-y px-6">
            {[...left, ...right].map((link) => (
              <li key={link}>
                <a href="#" className="flex py-4 font-serif text-xl">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
          New template collection
        </p>
        <p className="mx-auto mt-4 max-w-xl font-serif text-3xl leading-snug md:text-4xl">
          Production-ready templates, designed and coded by Ali Imam.
        </p>
      </div>
    </section>
  )
}
