"use client"

import { useState } from "react"
import {
  ArrowDown,
  ArrowUp,
  Minus,
  Plus,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const periods = ["This week", "This month", "All time"] as const

const ranking: Record<(typeof periods)[number], { name: string; maker: string; price: number; sold: string; move: number; hue: number }[]> = {
  "This week": [
    { name: "Designali Icons Pro", maker: "Designali", price: 39, sold: "2,140", move: 3, hue: 60 },
    { name: "Design Agency Template", maker: "Designali", price: 79, sold: "1,980", move: 0, hue: 25 },
    { name: "Blocks Pro Bundle", maker: "Designali", price: 149, sold: "1,610", move: -1, hue: 230 },
    { name: "Apple Device Mockups", maker: "Designali", price: 35, sold: "1,402", move: 4, hue: 40 },
    { name: "Portfolio Simple Template", maker: "Designali", price: 49, sold: "1,155", move: -2, hue: 85 },
    { name: "Dalim UI Kit", maker: "Dalim", price: 29, sold: "980", move: 1, hue: 110 },
  ],
  "This month": [
    { name: "Design Agency Template", maker: "Designali", price: 79, sold: "8,420", move: 1, hue: 25 },
    { name: "Blocks Pro Bundle", maker: "Designali", price: 149, sold: "7,960", move: -1, hue: 230 },
    { name: "Designali Icons Pro", maker: "Designali", price: 39, sold: "6,880", move: 5, hue: 60 },
    { name: "Designali Logos Pack", maker: "Designali", price: 29, sold: "5,210", move: 0, hue: 75 },
    { name: "Portfolio Simple Template", maker: "Designali", price: 49, sold: "4,730", move: 2, hue: 85 },
    { name: "Apple Device Mockups", maker: "Designali", price: 35, sold: "4,010", move: -3, hue: 40 },
  ],
  "All time": [
    { name: "Blocks Pro Bundle", maker: "Designali", price: 149, sold: "184k", move: 0, hue: 230 },
    { name: "Design Agency Template", maker: "Designali", price: 79, sold: "161k", move: 0, hue: 25 },
    { name: "Designali Logos Pack", maker: "Designali", price: 29, sold: "122k", move: 0, hue: 75 },
    { name: "Resort Template", maker: "Designali", price: 69, sold: "98k", move: 1, hue: 120 },
    { name: "Portfolio Simple Template", maker: "Designali", price: 49, sold: "87k", move: -1, hue: 85 },
    { name: "Designali Icons Pro", maker: "Designali", price: 39, sold: "64k", move: 2, hue: 60 },
  ],
}

function Jar({ hue }: { hue: number }) {
  return (
    <svg viewBox="0 0 40 48" className="size-full" aria-hidden="true">
      <rect x="10" y="2" width="20" height="7" rx="1.5" fill={`oklch(0.35 0.05 ${hue})`} />
      <rect x="6" y="9" width="28" height="36" rx="5" fill={`oklch(0.72 0.14 ${hue})`} />
      <rect x="9" y="20" width="22" height="13" fill="white" opacity="0.85" />
    </svg>
  )
}

export default function Ecommerce19() {
  const [period, setPeriod] = useState<(typeof periods)[number]>("This week")
  const [added, setAdded] = useState<string[]>([])
  const list = ranking[period]

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Designali top sellers</h2>
            <p className="mt-1 text-sm text-muted-foreground">Ranked by downloads sold on designali.com</p>
          </div>
          <div className="inline-flex w-fit border border-border p-0.5" role="tablist">
            {periods.map((p) => (
              <button
                key={p}
                type="button"
                role="tab"
                aria-selected={period === p}
                onClick={() => setPeriod(p)}
                className={cn(
                  "px-3 py-1.5 text-xs transition-colors",
                  period === p ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <ol className="mt-8 border-t border-border">
          {list.map((item, i) => {
            const isAdded = added.includes(item.name)
            return (
              <li key={item.name} className="flex items-center gap-3 border-b border-border py-4 sm:gap-5">
                <span
                  className={cn(
                    "w-8 shrink-0 text-2xl font-semibold tabular-nums sm:w-10 sm:text-3xl",
                    i < 3 ? "text-foreground" : "text-muted-foreground/50"
                  )}
                >
                  {i + 1}
                </span>
                <span className="size-12 shrink-0 bg-muted p-1.5">
                  <Jar hue={item.hue} />
                </span>
                <span className="min-w-0 flex-1">
                  <a href="#" className="block truncate font-medium hover:underline">{item.name}</a>
                  <span className="block text-xs text-muted-foreground">
                    {item.maker} · {item.sold} sold
                  </span>
                </span>
                <span
                  className={cn(
                    "hidden w-10 items-center gap-0.5 text-xs tabular-nums sm:flex",
                    item.move > 0 && "text-emerald-700 dark:text-emerald-400",
                    item.move < 0 && "text-red-600 dark:text-red-400",
                    item.move === 0 && "text-muted-foreground"
                  )}
                  aria-label={item.move === 0 ? "No change" : `${item.move > 0 ? "Up" : "Down"} ${Math.abs(item.move)}`}
                >
                  {item.move > 0 ? <ArrowUp className="size-3" /> : item.move < 0 ? <ArrowDown className="size-3" /> : <Minus className="size-3" />}
                  {item.move !== 0 && Math.abs(item.move)}
                </span>
                <span className="w-10 shrink-0 text-right text-sm tabular-nums">${item.price}</span>
                <Button
                  size="icon-lg"
                  variant={isAdded ? "default" : "outline"}
                  aria-label={isAdded ? `${item.name} added` : `Add ${item.name}`}
                  onClick={() =>
                    setAdded((a) => (a.includes(item.name) ? a.filter((n) => n !== item.name) : [...a, item.name]))
                  }
                >
                  <Plus className={cn("transition-transform", isAdded && "rotate-45")} />
                </Button>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
