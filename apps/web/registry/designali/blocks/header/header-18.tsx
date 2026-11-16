"use client"

import { useState } from "react"

import { Button } from "@workspace/ui/components/button"
import { Logo } from "@/src/components/logo"

const links = ["Home", "Templates", "Blocks", "Pricing", "Docs"]

export default function Header18() {
  const [active, setActive] = useState(0)

  return (
    <section className="w-full bg-background">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
          <a href="#" className="flex items-center gap-2 text-sm font-semibold">
            <Logo className="size-6" />
            designali
          </a>
          <nav className="relative hidden border bg-muted/50 p-1 md:block">
            <span
              aria-hidden
              className="absolute top-1 bottom-1 bg-background shadow-sm transition-transform duration-300 ease-out"
              style={{ width: "6.5rem", transform: `translateX(${active * 6.5}rem)` }}
            />
            <ul className="relative flex">
              {links.map((link, index) => (
                <li key={link}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-current={index === active ? "page" : undefined}
                    className={`w-[6.5rem] py-1.5 text-center text-sm transition-colors ${
                      index === active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden sm:inline-flex" nativeButton={false} render={<a href="#" />}>
              Sign in
            </Button>
            <Button nativeButton={false} render={<a href="#" />}>
              Get started
            </Button>
          </div>
        </div>
        <nav className="border-t md:hidden">
          <ul className="flex gap-1 overflow-x-auto px-4 py-2">
            {links.map((link, index) => (
              <li key={link} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-current={index === active ? "page" : undefined}
                  className={`px-3 py-1.5 text-sm transition-colors ${
                    index === active ? "bg-foreground text-background" : "text-muted-foreground"
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </section>
  )
}
