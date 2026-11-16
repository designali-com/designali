"use client"

import { useState } from "react"
import {
  ArrowRight,
  ChevronDown,
  Globe,
  X,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

import { Logo } from "@/src/components/logo"

const links = ["Templates", "Blocks", "Icons", "Pricing", "Work"]

export default function Navigation07() {
  const [banner, setBanner] = useState(true)

  return (
    <section className="w-full bg-background">
      {banner && (
        <div className="bg-foreground text-background">
          <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-2.5">
            <p className="flex-1 text-center text-xs sm:text-sm">
              <span className="me-2 border border-background/30 px-1.5 py-0.5 text-[10px] tracking-widest uppercase">
                Live
              </span>
              Designali Live with Ali Imam starts Thursday.{" "}
              <a
                href="#"
                className="inline-flex items-center gap-1 font-medium underline underline-offset-4"
              >
                Save your seat
                <ArrowRight className="size-3" />
              </a>
            </p>
            <button
              type="button"
              aria-label="Dismiss announcement"
              onClick={() => setBanner(false)}
              className="flex size-6 shrink-0 items-center justify-center text-background/70 hover:text-background"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      )}

      <div className="hidden border-b bg-muted/40 md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-end gap-6 px-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground">designali.com: all systems normal</a>
          <a href="#" className="hover:text-foreground">Support</a>
          <a href="#" className="hover:text-foreground">hello@designali.com</a>
          <button type="button" className="flex items-center gap-1 hover:text-foreground">
            <Globe className="size-3.5" />
            English
            <ChevronDown className="size-3" />
          </button>
        </div>
      </div>

      <nav className="border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-10 px-6">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <Logo className="h-5 w-auto" />
            designali
          </a>
          <ul className="hidden flex-1 items-center gap-6 lg:flex">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="ms-auto flex items-center gap-2">
            <Button variant="ghost" className="hidden sm:inline-flex" nativeButton={false} render={<a href="#" />}>
              Log in
            </Button>
            <Button nativeButton={false} render={<a href="#" />}>
              Get Designali Pro
            </Button>
          </div>
        </div>
      </nav>
    </section>
  )
}
