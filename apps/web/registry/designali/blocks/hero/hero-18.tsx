"use client"

import { useState } from "react"
import {
  ArrowRight,
  Clock,
  Wallet,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const HOURS_SAVED_PER_REP = 6.5
const HOURLY_COST = 48

export default function Hero18() {
  const [reps, setReps] = useState(25)
  const hours = Math.round(reps * HOURS_SAVED_PER_REP * 4.33)
  const savings = hours * HOURLY_COST * 12

  return (
    <section className="w-full bg-background px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-sm text-muted-foreground">Designali blocks for product teams</p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">
            Build pages in minutes, not weeks.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
            460+ production-ready blocks, 240+ landing pages and 4000+ icons.
            Your developers stop rebuilding sections and start shipping.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" nativeButton={false} render={<a href="/blocks" />}>
              Browse blocks
              <ArrowRight />
            </Button>
            <Button size="lg" variant="outline" nativeButton={false} render={<a href="/pricing" />}>
              See pricing
            </Button>
          </div>
        </div>

        <div className="border border-border bg-card p-6 sm:p-8">
          <p className="text-sm font-medium">Estimate your time saved</p>
          <label htmlFor="hero-18-reps" className="mt-6 flex items-baseline justify-between text-sm">
            <span className="text-muted-foreground">Developers on your team</span>
            <span className="text-2xl font-medium tabular-nums">{reps}</span>
          </label>
          <input
            id="hero-18-reps"
            type="range"
            min={1}
            max={200}
            value={reps}
            onChange={(event) => setReps(Number(event.target.value))}
            className="mt-3 w-full accent-primary"
          />
          <div className="mt-1 flex justify-between text-xs text-muted-foreground">
            <span>1</span>
            <span>200</span>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-px border border-border bg-border">
            <div className="bg-card p-4">
              <Clock className="size-4 text-muted-foreground" />
              <p className="mt-3 text-2xl font-medium tabular-nums">
                {hours.toLocaleString("en-US")}
              </p>
              <p className="text-xs text-muted-foreground">hours saved / month</p>
            </div>
            <div className="bg-card p-4">
              <Wallet className="size-4 text-muted-foreground" />
              <p className="mt-3 text-2xl font-medium tabular-nums">
                ${(savings / 1000).toLocaleString("en-US", { maximumFractionDigits: 0 })}k
              </p>
              <p className="text-xs text-muted-foreground">saved / year</p>
            </div>
          </div>
          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            Based on 6.5 hours saved per developer each week at a ${HOURLY_COST}/hour
            loaded cost. An illustrative estimate, not a guarantee.
          </p>
        </div>
      </div>
    </section>
  )
}
