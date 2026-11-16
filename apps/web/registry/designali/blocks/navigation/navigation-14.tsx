"use client"

import { useState } from "react"
import {
  Heart,
  Globe,
  Search,
  ShoppingCart,
  Sparkles,
  User,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const categories = [
  "New in",
  "Templates",
  "Blocks",
  "Landing pages",
  "UI designs",
  "Icons",
  "Logos",
  "Illustrations",
  "Sale",
]

const suggestions = ["portfolio template", "pricing block", "dashboard ui", "icon pack"]

export default function Navigation14() {
  const [query, setQuery] = useState("")
  const [focused, setFocused] = useState(false)
  const [category, setCategory] = useState("New in")

  const matches = suggestions.filter((item) => item.includes(query.toLowerCase()))

  return (
    <section className="w-full bg-background">
      <div className="bg-muted/60 text-xs text-muted-foreground">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-6">
          <span className="flex items-center gap-1.5 truncate">
            <Sparkles className="size-3.5 shrink-0" />
            Free updates on every Designali template
          </span>
          <a href="#" className="hidden items-center gap-1.5 hover:text-foreground sm:flex">
            <Globe className="size-3.5" />
            Remote · Worldwide
          </a>
        </div>
      </div>

      <div className="border-b">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr] items-center gap-x-6 gap-y-3 px-6 py-4 md:grid-cols-[auto_1fr_auto]">
          <a href="#" className="text-xl font-bold tracking-tight">
            design<span className="text-muted-foreground">ali</span>
          </a>

          <div className="relative col-span-2 row-start-2 md:col-span-1 md:row-start-auto">
            <label className="flex h-11 items-center gap-2 border bg-background px-3 focus-within:border-foreground">
              <Search className="size-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Search 2300+ UI designs"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </label>
            {focused && matches.length > 0 && (
              <ul className="absolute inset-x-0 top-full z-20 mt-1 border bg-popover py-1 text-sm text-popover-foreground">
                <li className="px-3 py-1.5 text-xs text-muted-foreground">Popular searches</li>
                {matches.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onMouseDown={() => setQuery(item)}
                      className="flex w-full items-center gap-2 px-3 py-2 text-start hover:bg-muted"
                    >
                      <Search className="size-3.5 text-muted-foreground" />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex items-center justify-end gap-1">
            {[
              { icon: User, label: "Account" },
              { icon: Heart, label: "Saved", count: 5 },
              { icon: ShoppingCart, label: "Cart", count: 3 },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className="relative flex flex-col items-center gap-0.5 px-2.5 py-1 text-[11px] text-muted-foreground hover:text-foreground"
              >
                <item.icon className="size-5 text-foreground" />
                <span className="hidden sm:block">{item.label}</span>
                {item.count && (
                  <span className="absolute -top-0.5 right-1 flex size-4 items-center justify-center bg-foreground text-[10px] text-background">
                    {item.count}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav className="border-b">
        <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-6">
          {categories.map((item) => (
            <li key={item} className="shrink-0">
              <button
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  "h-11 border-b-2 px-3 text-sm transition-colors",
                  category === item
                    ? "border-foreground font-medium text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                  item === "Sale" && "text-destructive dark:text-destructive"
                )}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="h-56" aria-hidden />
    </section>
  )
}
