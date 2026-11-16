"use client"

import { useState } from "react"
import {
  Menu,
  X,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const left = ["Templates", "Blocks", "UI Designs"]
const right = ["Pricing", "Docs"]

export default function Header07() {
  const [open, setOpen] = useState(false)

  return (
    <section className="w-full border-b bg-background">
      <header className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6">
        <nav className="hidden gap-8 text-sm md:flex">
          {left.map((link) => (
            <a key={link} href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              {link}
            </a>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>

        <a href="#" className="font-serif text-2xl tracking-[0.3em] uppercase">
          designali
        </a>

        <div className="flex items-center justify-end gap-8 text-sm">
          <nav className="hidden gap-8 md:flex">
            {right.map((link) => (
              <a key={link} href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                {link}
              </a>
            ))}
          </nav>
          <a href="#" className="border-b border-foreground pb-0.5">
            Cart (2)
          </a>
        </div>
      </header>

      {open && (
        <nav className="border-t md:hidden">
          {[...left, ...right].map((link) => (
            <a key={link} href="#" className="block border-b px-6 py-4 text-lg last:border-b-0">
              {link}
            </a>
          ))}
        </nav>
      )}
    </section>
  )
}
