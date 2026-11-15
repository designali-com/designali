"use client"

import { useState } from "react"
import { Bell, Compass, House, Plus, User } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const items = [
  { icon: House, label: "Home" },
  { icon: Compass, label: "Explore" },
  { icon: Plus, label: "Create", primary: true },
  { icon: Bell, label: "Activity" },
  { icon: User, label: "Profile" },
]

const dock = ["Work", "About", "Journal", "Contact"]

export default function Navigation05() {
  const [active, setActive] = useState("Home")
  const [section, setSection] = useState("Work")

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-16 px-6 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Floating dock
          </p>
          <nav className="inline-flex border bg-background/80 p-1 backdrop-blur">
            {dock.map((link) => (
              <button
                key={link}
                type="button"
                onClick={() => setSection(link)}
                className={cn(
                  "h-9 px-4 text-sm transition-colors",
                  section === link
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link}
              </button>
            ))}
          </nav>
          <p className="max-w-sm text-sm text-muted-foreground">
            A compact pill navigation that sits above content, ideal for
            portfolios and single-page sites.
          </p>
        </div>

        <div className="mx-auto w-full max-w-xs border bg-muted/40">
          <div className="flex h-96 flex-col justify-end">
            <div className="m-4 space-y-2">
              <div className="h-3 w-2/3 bg-muted" />
              <div className="h-3 w-1/2 bg-muted" />
            </div>
            <nav className="grid grid-cols-5 border-t bg-background">
              {items.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActive(item.label)}
                  className={cn(
                    "flex flex-col items-center gap-1 py-3 text-[10px] transition-colors",
                    active === item.label ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.primary ? (
                    <span className="flex size-9 -translate-y-1 items-center justify-center bg-primary text-primary-foreground">
                      <item.icon className="size-4" />
                    </span>
                  ) : (
                    <>
                      <item.icon className="size-5" />
                      {item.label}
                    </>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
