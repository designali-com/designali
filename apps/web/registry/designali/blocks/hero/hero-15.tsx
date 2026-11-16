"use client"

import { useState } from "react"
import {
  ArrowRight,
  Check,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const audiences = [
  {
    id: "design",
    label: "For designers",
    headline: "Design in Figma, ship with Designali.",
    body: "Designali UI designs, icons and illustrations match the code one to one, so your Figma file and your Next.js app never drift apart.",
    points: ["2300+ UI designs", "4000+ icons and logos", "Semantic design tokens"],
    preview: ["Hero / Designali", "Pricing / Pro", "Login / Split"],
    accent: "from-chart-1/40 to-chart-2/10",
  },
  {
    id: "engineering",
    label: "For engineers",
    headline: "Stop rebuilding the same hero section.",
    body: "Copy typed, accessible Designali blocks into your repo — React, TypeScript and Tailwind CSS, ready for production.",
    points: ["460+ blocks", "Next.js and Tailwind CSS", "@designali/icons included"],
    preview: ["hero-01.tsx", "pricing-01.tsx", "globals.css"],
    accent: "from-chart-3/40 to-chart-4/10",
  },
  {
    id: "leads",
    label: "For founders",
    headline: "Launch a product that looks studio-made.",
    body: "Start from a Designali template, or hire the studio to design and build your brand, UI and website end to end.",
    points: ["240+ landing pages", "Brand identity and UI/UX", "Production-ready code"],
    preview: ["Brand: done", "UI/UX: in review", "Website: building"],
    accent: "from-chart-5/40 to-chart-1/10",
  },
]

export default function Hero15() {
  const [active, setActive] = useState(audiences[0]!.id)
  const audience = audiences.find((item) => item.id === active) ?? audiences[0]!

  return (
    <section className="w-full bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div
          role="tablist"
          aria-label="Choose your role"
          className="flex w-full gap-1 overflow-x-auto border border-border p-1 sm:w-fit"
        >
          {audiences.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={item.id === active}
              onClick={() => setActive(item.id)}
              className={
                item.id === active
                  ? "shrink-0 bg-foreground px-4 py-2 text-sm text-background"
                  : "shrink-0 px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
              }
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-medium tracking-tight md:text-6xl">
              {audience.headline}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
              {audience.body}
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {audience.points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <Check className="size-4 text-emerald-600 dark:text-emerald-400" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button size="lg" nativeButton={false} render={<a href="/blocks" />}>
                Start with Designali
                <ArrowRight />
              </Button>
              <Button size="lg" variant="outline" nativeButton={false} render={<a href="/contact" />}>
                Talk to us
              </Button>
            </div>
          </div>
          <div className={`border border-border bg-gradient-to-br p-6 sm:p-10 ${audience.accent}`}>
            <div className="border border-border bg-background/90 backdrop-blur">
              <div className="border-b border-border px-4 py-3 text-xs text-muted-foreground">
                designali / {audience.id}
              </div>
              <ul>
                {audience.preview.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center justify-between border-b border-border px-4 py-4 text-sm last:border-b-0"
                  >
                    <span className="font-mono text-xs sm:text-sm">{item}</span>
                    <span className="h-2 w-16 bg-muted sm:w-24">
                      <span
                        className="block h-full bg-primary"
                        style={{ width: `${90 - index * 22}%` }}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
