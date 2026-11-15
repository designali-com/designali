"use client"

import { useState } from "react"
import { Activity } from "lucide-react"

import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

const tiers = [
  { upTo: 1_000_000, rate: 0, label: "First 1M" },
  { upTo: 10_000_000, rate: 0.04, label: "1M - 10M" },
  { upTo: 100_000_000, rate: 0.025, label: "10M - 100M" },
  { upTo: Infinity, rate: 0.012, label: "100M+" },
]

function estimate(events: number) {
  let remaining = events
  let previous = 0
  let cost = 0
  const breakdown = tiers.map((tier) => {
    const span = Math.min(remaining, tier.upTo - previous)
    const used = Math.max(span, 0)
    const subtotal = (used / 1_000_000) * tier.rate * 1000
    cost += subtotal
    remaining -= used
    previous = tier.upTo
    return { ...tier, used, subtotal }
  })
  return { cost, breakdown }
}

const compact = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
})

export default function Pricing20() {
  const [millions, setMillions] = useState(25)
  const events = Math.max(0, millions) * 1_000_000
  const { cost, breakdown } = estimate(events)
  const maxRate = Math.max(...tiers.map((t) => t.rate))

  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="flex items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            <Activity className="size-4" />
            Usage-based
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            The more you track, the less you pay per event.
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Graduated volume pricing: each band is billed at its own rate, so
            crossing a threshold never makes your earlier events more
            expensive. The first million events every month are free.
          </p>
          <div className="mt-10 border border-border p-6">
            <label htmlFor="events" className="text-sm font-medium">
              Monthly events (millions)
            </label>
            <Input
              id="events"
              type="number"
              min={0}
              value={millions}
              onChange={(event) => setMillions(Number(event.target.value) || 0)}
              className="mt-3 h-11 text-base md:text-base"
            />
            <div className="mt-6 flex items-baseline justify-between border-t border-border pt-6">
              <span className="text-sm text-muted-foreground">
                Estimated monthly bill
              </span>
              <span className="text-3xl font-semibold tracking-tight tabular-nums">
                ${Math.round(cost).toLocaleString("en-US")}
              </span>
            </div>
          </div>
        </div>
        <div className="border border-border">
          <div className="grid grid-cols-[1fr_auto] border-b border-border px-6 py-4 text-xs tracking-widest text-muted-foreground uppercase">
            <span>Band</span>
            <span>Per 1k events</span>
          </div>
          <ul>
            {breakdown.map((tier) => (
              <li
                key={tier.label}
                className={cn(
                  "border-b border-border px-6 py-5 last:border-b-0",
                  tier.used > 0 ? "bg-background" : "bg-muted/30"
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium">{tier.label}</span>
                  <span className="font-mono text-sm">
                    {tier.rate === 0 ? "Free" : `$${tier.rate.toFixed(3)}`}
                  </span>
                </div>
                <div className="mt-3 h-1.5 bg-muted">
                  <div
                    className="h-full bg-foreground transition-all"
                    style={{
                      width: `${tier.rate === 0 ? 4 : (tier.rate / maxRate) * 100}%`,
                    }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <span>{compact.format(tier.used)} events in this band</span>
                  <span className="tabular-nums">
                    ${Math.round(tier.subtotal).toLocaleString("en-US")}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
