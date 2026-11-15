"use client"

import { useState } from "react"
import { ArrowLeft, ChevronRight, Menu, Moon, X } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const menu = [
  {
    label: "Products",
    children: ["Checking accounts", "Savings", "Credit cards", "Business banking"],
  },
  {
    label: "Borrow",
    children: ["Personal loans", "Mortgages", "Auto refinancing"],
  },
  { label: "Invest", children: ["Robo portfolios", "Retirement", "Crypto"] },
  { label: "Learn" },
  { label: "Help center" },
]

export default function Navigation15() {
  const [open, setOpen] = useState(true)
  const [panel, setPanel] = useState<string | null>(null)
  const sub = menu.find((item) => item.label === panel)

  return (
    <section className="w-full bg-muted/40 py-16">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">Mobile drill-down</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Nested menus that slide instead of stacking.
          </h2>
          <p className="text-muted-foreground">
            Each parent opens a full panel with a back button, so deep trees stay
            readable on a small screen.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[340px] overflow-hidden border-8 border-foreground bg-background">
          <div className="relative h-[560px] overflow-hidden">
            <header className="flex h-14 items-center justify-between border-b px-4">
              <span className="font-semibold">Pennant</span>
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => {
                  setOpen(!open)
                  setPanel(null)
                }}
                className="flex size-9 items-center justify-center"
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </header>

            <div className="space-y-3 p-4">
              <div className="h-28 bg-gradient-to-br from-muted to-muted-foreground/20" />
              <div className="h-3 w-3/4 bg-muted" />
              <div className="h-3 w-1/2 bg-muted" />
            </div>

            <div
              className={cn(
                "absolute inset-x-0 top-14 bottom-0 bg-background transition-transform duration-300",
                open ? "translate-x-0" : "translate-x-full"
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 flex flex-col transition-transform duration-300",
                  sub && "-translate-x-full"
                )}
              >
                <ul className="flex-1 divide-y">
                  {menu.map((item) => (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => item.children && setPanel(item.label)}
                        className="flex w-full items-center justify-between px-5 py-4 text-start font-medium"
                      >
                        {item.label}
                        {item.children && <ChevronRight className="size-4 text-muted-foreground" />}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="space-y-3 border-t p-5">
                  <button type="button" className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Moon className="size-4" />
                    Dark mode
                  </button>
                  <Button className="w-full">Open an account</Button>
                  <Button variant="outline" className="w-full">Log in</Button>
                </div>
              </div>

              <div
                className={cn(
                  "absolute inset-0 transition-transform duration-300",
                  sub ? "translate-x-0" : "translate-x-full"
                )}
              >
                <button
                  type="button"
                  onClick={() => setPanel(null)}
                  className="flex w-full items-center gap-2 border-b px-5 py-4 text-sm text-muted-foreground"
                >
                  <ArrowLeft className="size-4" />
                  Back
                </button>
                <p className="px-5 pt-5 text-xs tracking-widest text-muted-foreground uppercase">
                  {sub?.label}
                </p>
                <ul className="py-2">
                  {sub?.children?.map((child) => (
                    <li key={child}>
                      <a href="#" className="block px-5 py-3 hover:bg-muted">
                        {child}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
