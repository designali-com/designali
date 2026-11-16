"use client"

import { useState } from "react"
import {
  CircleCheck,
  CircleX,
  Globe,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

import { GridPattern } from "@/registry/designali/ui/grid-pattern"

const zones = [
  { name: "Full overlap", radius: 70, fee: "live calls", time: "Same day", tone: "fill-primary/25 stroke-primary" },
  { name: "Partial overlap", radius: 120, fee: "morning calls", time: "Next morning", tone: "fill-primary/15 stroke-primary/70" },
  { name: "Async", radius: 170, fee: "async updates", time: "Within 24 hours", tone: "fill-primary/5 stroke-primary/50" },
]

const postcodes: Record<string, number> = {
  GST: 0,
  IST: 0,
  CET: 1,
  EET: 1,
  GMT: 1,
  EST: 2,
  SGT: 0,
  PST: 2,
}

export default function Location13() {
  const [value, setValue] = useState("")
  const [result, setResult] = useState<number | null | "none">(null)

  function check(event: React.FormEvent) {
    event.preventDefault()
    const key = value.trim().toUpperCase().split(" ")[0] ?? ""
    setResult(key in postcodes ? postcodes[key]! : "none")
  }

  const zone = typeof result === "number" ? zones[result] : null

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            <Globe className="size-4" />
            Time zones
          </span>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Do we overlap with your time zone?
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Designali is a remote studio working with clients worldwide. Check how
            we will collaborate with you. Try IST, CET or EST.
          </p>

          <form onSubmit={check} className="mt-8 flex max-w-md gap-2">
            <Input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="Enter your time zone"
              className="h-12 uppercase placeholder:normal-case"
              aria-label="Time zone"
            />
            <Button type="submit" size="lg" className="h-12">
              Check
            </Button>
          </form>

          <div aria-live="polite" className="mt-6 min-h-20 max-w-md">
            {zone && (
              <div className="flex gap-3 border border-primary/40 bg-primary/5 p-4 text-sm dark:bg-primary/30">
                <CircleCheck className="size-5 shrink-0 text-primary dark:text-primary" />
                <p>
                  Good news, you&apos;re in <strong>{zone.name}</strong>. We work through{" "}
                  <strong>{zone.fee}</strong> and reply <strong>{zone.time.toLowerCase()}</strong>.
                </p>
              </div>
            )}
            {result === "none" && (
              <div className="flex gap-3 border bg-muted p-4 text-sm">
                <CircleX className="size-5 shrink-0 text-muted-foreground" />
                <p>
                  We don&apos;t recognise that time zone yet. Email
                  hello@designali.com and we&apos;ll work out a schedule.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="relative overflow-hidden border bg-muted/40 p-4">
          <GridPattern width={40} height={40} className="stroke-border" />
          <svg viewBox="0 0 400 400" className="relative h-auto w-full" role="img" aria-label="Designali collaboration zones">
            <path d="M0 260 C 90 240, 140 300, 230 250 S 350 200, 400 230" className="fill-none stroke-chart-1 dark:stroke-chart-4" strokeWidth="14" />
            {[...zones].reverse().map((z, i) => {
              const index = zones.length - 1 - i
              return (
                <circle
                  key={z.name}
                  cx="200"
                  cy="200"
                  r={z.radius}
                  strokeWidth="1.5"
                  strokeDasharray={index === 0 ? undefined : "4 4"}
                  className={cn(
                    z.tone,
                    "transition-opacity",
                    zone && result !== index && "opacity-40"
                  )}
                />
              )
            })}
            <circle cx="200" cy="200" r="9" className="fill-foreground" />
            <text x="214" y="196" className="fill-foreground text-[11px] font-medium">Designali</text>
            {zones.map((z) => (
              <text key={z.name} x="200" y={200 - z.radius + 14} textAnchor="middle" className="fill-muted-foreground text-[10px]">
                {z.name} &middot; {z.fee}
              </text>
            ))}
          </svg>
        </div>
      </div>
    </section>
  )
}
