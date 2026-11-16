"use client"

import { useState } from "react"
import {
  Code,
  Search,
  Star,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const categories = ["All", "Templates", "Blocks", "Landing pages", "UI designs", "Icons", "Logos"]

const popular = ["Pricing table", "Hero section", "Login page", "Dashboard"]

export default function Hero12() {
  const [category, setCategory] = useState("All")
  const [query, setQuery] = useState("")

  return (
    <section className="relative w-full overflow-hidden bg-background px-6 py-20 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <Star className="size-4 fill-amber-400 text-amber-400" />
          Loved by designers and developers on designali.com
        </p>
        <h1 className="mt-6 text-4xl font-medium tracking-tight md:text-6xl">
          Find the right Designali block in seconds.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground">
          Search 460+ blocks, 240+ landing pages, 2300+ UI designs and 4000+
          icons — all built with Next.js, React and Tailwind CSS.
        </p>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="mx-auto mt-10 flex max-w-3xl flex-col border border-border bg-card shadow-sm sm:flex-row"
        >
          <label className="flex flex-1 items-center gap-3 border-b border-border px-4 py-3 sm:border-e sm:border-b-0">
            <Search className="size-4 shrink-0 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="What are you building?"
              className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>
          <label className="flex items-center gap-3 px-4 py-3 sm:w-52">
            <Code className="size-4 shrink-0 text-muted-foreground" />
            <input
              defaultValue="Next.js + Tailwind"
              aria-label="Stack"
              className="w-full min-w-0 bg-transparent text-sm outline-none"
            />
          </label>
          <Button type="submit" size="lg" className="h-auto py-3 sm:h-auto">
            Search
          </Button>
        </form>

        <div className="mx-auto mt-6 flex max-w-3xl gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={
                item === category
                  ? "shrink-0 border border-foreground bg-foreground px-3 py-1.5 text-xs text-background"
                  : "shrink-0 border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"
              }
            >
              {item}
            </button>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Popular right now:{" "}
          {popular.map((item, index) => (
            <span key={item}>
              <button
                type="button"
                onClick={() => setQuery(item)}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {item}
              </button>
              {index < popular.length - 1 && ", "}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
