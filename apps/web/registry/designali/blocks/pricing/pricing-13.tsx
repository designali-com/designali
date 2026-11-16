"use client"

import { useState } from "react"
import {
  Coins,
  Infinity as InfinityIcon,
  Sparkles,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const packs = [
  { credits: 500, price: 10, bonus: 0, renders: "~120 image renders" },
  { credits: 2000, price: 36, bonus: 10, renders: "~520 image renders" },
  { credits: 6000, price: 96, bonus: 20, renders: "~1,700 image renders", best: true },
  { credits: 20000, price: 280, bonus: 30, renders: "~6,200 image renders" },
]

export default function Pricing13() {
  const [selected, setSelected] = useState(2)
  const pack = packs[selected]!
  const total = Math.round(pack.credits * (1 + pack.bonus / 100))

  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground uppercase">
              <Coins className="size-4" />
              Credit packs
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Pay as you go. No subscription.
            </h2>
          </div>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <InfinityIcon className="size-4" />
            Credits never expire
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {packs.map((item, index) => (
            <button
              key={item.credits}
              type="button"
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
              className={cn(
                "relative flex flex-col border p-5 text-start transition-colors md:p-6",
                selected === index
                  ? "border-foreground bg-muted/50"
                  : "border-border hover:border-foreground/40"
              )}
            >
              {item.best && (
                <span className="absolute -top-2.5 left-5 flex items-center gap-1 bg-foreground px-2 py-0.5 text-[10px] tracking-wider text-background uppercase">
                  <Sparkles className="size-3" />
                  Best value
                </span>
              )}
              <span className="text-2xl font-semibold tracking-tight md:text-3xl">
                {item.credits.toLocaleString("en-US")}
              </span>
              <span className="text-xs text-muted-foreground">credits</span>
              <span className="mt-6 text-lg font-medium">${item.price}</span>
              <span className="text-xs text-muted-foreground">
                ${((item.price / item.credits) * 100).toFixed(2)} per 100
              </span>
              {item.bonus > 0 && (
                <span className="mt-4 w-fit bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  +{item.bonus}% bonus
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-6 border border-border bg-card p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-sm text-muted-foreground">You receive</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight">
              {total.toLocaleString("en-US")} credits
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{pack.renders}</p>
          </div>
          <Button size="lg" className="md:w-56">
            Buy for ${pack.price}
          </Button>
        </div>
      </div>
    </section>
  )
}
