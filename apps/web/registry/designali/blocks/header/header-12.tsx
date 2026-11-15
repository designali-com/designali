"use client"

import { useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const links = ["Features", "Integrations", "Pricing", "Changelog"]

export default function Header12() {
  const [open, setOpen] = useState(false)

  return (
    <section className="w-full bg-gradient-to-b from-muted/60 to-background px-4 pt-4 pb-10 sm:px-6">
      <header className="relative mx-auto max-w-5xl">
        <div className="flex h-14 items-center gap-6 rounded-full border bg-background/80 ps-5 pe-2 shadow-sm backdrop-blur">
          <a href="#" className="flex items-center gap-2 text-sm font-semibold">
            <span className="size-5 rounded-full bg-gradient-to-br from-chart-1 to-chart-3" />
            Orbitly
          </a>
          <nav className="mx-auto hidden items-center gap-1 text-sm md:flex">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="ms-auto flex items-center gap-1 md:ms-0">
            <a href="#" className="hidden px-3 text-sm text-muted-foreground hover:text-foreground sm:block">
              Log in
            </a>
            <Button className="hidden rounded-full sm:inline-flex" nativeButton={false} render={<a href="#" />}>
              Get Orbitly
              <ArrowUpRight />
            </Button>
            <Button
              variant="ghost"
              size="icon-lg"
              className="rounded-full md:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {open && (
          <div className="absolute inset-x-0 top-full z-20 mt-2 rounded-3xl border bg-background p-3 shadow-lg md:hidden">
            <nav className="flex flex-col">
              {links.map((link) => (
                <a key={link} href="#" className="rounded-2xl px-4 py-3 text-sm hover:bg-muted">
                  {link}
                </a>
              ))}
              <a href="#" className="rounded-2xl px-4 py-3 text-sm hover:bg-muted">
                Log in
              </a>
            </nav>
            <Button className="mt-2 w-full rounded-full" nativeButton={false} render={<a href="#" />}>
              Get Orbitly
              <ArrowUpRight />
            </Button>
          </div>
        )}
      </header>
    </section>
  )
}
