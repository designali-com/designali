"use client"

import { useState } from "react"
import { MapPin, Search, Star } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const categories = ["All", "Plumbing", "Electrical", "Cleaning", "Painting", "Moving", "Gardening"]

const popular = ["Leaky faucet", "Deep clean", "Ceiling fan install", "Fence repair"]

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
          4.9 average from 38,000 completed jobs
        </p>
        <h1 className="mt-6 text-4xl font-medium tracking-tight md:text-6xl">
          Vetted local pros, booked in minutes.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground">
          Upfront pricing, background-checked tradespeople and a 90-day
          workmanship guarantee on every booking.
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
              placeholder="What do you need done?"
              className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>
          <label className="flex items-center gap-3 px-4 py-3 sm:w-52">
            <MapPin className="size-4 shrink-0 text-muted-foreground" />
            <input
              defaultValue="Portland, OR"
              aria-label="Location"
              className="w-full min-w-0 bg-transparent text-sm outline-none"
            />
          </label>
          <Button type="submit" size="lg" className="h-auto py-3 sm:h-auto">
            Find a pro
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
