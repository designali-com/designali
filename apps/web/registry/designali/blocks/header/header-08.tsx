"use client"

import { useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const links = ["Platform", "Solutions", "Developers", "Pricing", "Company"]

export default function Header08() {
  const [open, setOpen] = useState(false)
  const [banner, setBanner] = useState(true)

  return (
    <section className="w-full bg-background">
      {banner && (
        <div className="bg-foreground text-background">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-2.5 text-xs sm:text-sm">
            <span className="hidden bg-background/15 px-2 py-0.5 text-xs sm:inline">New</span>
            <a href="#" className="flex items-center gap-1.5 hover:underline">
              Realtime sync is now generally available
              <ArrowRight className="size-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setBanner(false)}
              aria-label="Dismiss announcement"
              className="ms-auto opacity-60 hover:opacity-100 sm:absolute sm:end-6"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      )}
      <header className="relative border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-10 px-6">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
              <path d="M2 12 12 2l10 10-10 10z" className="fill-foreground" />
              <path d="M7 12l5-5 5 5-5 5z" className="fill-background" />
            </svg>
            Stratus
          </a>
          <nav className="hidden gap-6 text-sm lg:flex">
            {links.map((link) => (
              <a key={link} href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                {link}
              </a>
            ))}
          </nav>
          <div className="ms-auto hidden items-center gap-2 lg:flex">
            <Button variant="ghost">Log in</Button>
            <Button variant="outline">Contact sales</Button>
            <Button>Start free</Button>
          </div>
          <Button
            variant="outline"
            size="icon-lg"
            className="ms-auto lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <div className="border-t lg:hidden">
            <nav className="flex flex-col px-6 py-4">
              {links.map((link) => (
                <a key={link} href="#" className="border-b py-3 text-sm">
                  {link}
                </a>
              ))}
            </nav>
            <div className="grid grid-cols-2 gap-2 px-6 pb-6">
              <Button variant="outline">Log in</Button>
              <Button>Start free</Button>
            </div>
          </div>
        )}
      </header>
    </section>
  )
}
