"use client"

import { useState } from "react"
import {
  Check,
  Copy,
  Footprints,
  Mountain,
  Navigation,
  Timer,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const coords = "hello@designali.com"

const stats = [
  { icon: Footprints, label: "Phases", value: "4 steps" },
  { icon: Timer, label: "Typical timeline", value: "4–8 weeks" },
  { icon: Mountain, label: "Scope", value: "Brand to code" },
  { icon: Navigation, label: "From", value: "Discovery call" },
]

export default function Location20() {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(coords)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              The process
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              From first call to launch
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={copy}>
              {copied ? <Check /> : <Copy />}
              {copied ? "Copied" : coords}
            </Button>
            <Button nativeButton={false} render={<a href="/contact" />}>
              <Navigation />
              Start a project
            </Button>
          </div>
        </div>

        <div className="mt-10 border">
          <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-primary/10 to-primary/5 md:aspect-[21/8] dark:from-chart-5/50 dark:to-chart-5/40">
            <svg viewBox="0 0 1000 380" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
              {Array.from({ length: 9 }).map((_, i) => (
                <path
                  key={i}
                  d={`M-20 ${330 - i * 30} C 200 ${300 - i * 34}, 380 ${350 - i * 40}, 560 ${290 - i * 30} S 860 ${200 - i * 18}, 1020 ${240 - i * 22}`}
                  className="fill-none stroke-chart-3/15 dark:stroke-chart-1/15"
                  strokeWidth="1.5"
                />
              ))}
              <path
                d="M80 330 C 180 320, 220 270, 320 260 S 460 290, 540 230 S 680 160, 760 150 S 880 110, 920 80"
                className="fill-none stroke-background"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M80 330 C 180 320, 220 270, 320 260 S 460 290, 540 230 S 680 160, 760 150 S 880 110, 920 80"
                className="fill-none stroke-primary"
                strokeWidth="4"
                strokeDasharray="10 8"
                strokeLinecap="round"
              />
              <circle cx="80" cy="330" r="10" className="fill-background stroke-foreground" strokeWidth="4" />
              <circle cx="540" cy="230" r="6" className="fill-foreground" />
              <circle cx="920" cy="80" r="16" className="fill-primary/25" />
              <circle cx="920" cy="80" r="8" className="fill-primary" />
            </svg>
            <span className="absolute start-[6%] bottom-[4%] bg-background px-2 py-1 text-xs">Start &middot; Discovery call</span>
            <span className="absolute start-[50%] top-[50%] hidden bg-background px-2 py-1 text-xs sm:block">Design review</span>
            <span className="absolute end-[4%] top-[6%] bg-foreground px-2 py-1 text-xs font-medium text-background">
              Launch &middot; designali.com
            </span>
          </div>

          <dl className="grid grid-cols-2 border-t lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex items-center gap-4 p-5 md:p-6 ${index % 2 === 0 ? "border-e" : ""} ${index < 2 ? "border-b lg:border-b-0" : ""} lg:not-last:border-e`}
              >
                <stat.icon className="size-5 shrink-0 text-muted-foreground" />
                <div className="min-w-0">
                  <dt className="text-xs text-muted-foreground">{stat.label}</dt>
                  <dd className="truncate font-medium">{stat.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
