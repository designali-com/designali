"use client"

import { useState } from "react"

import { cn } from "@workspace/ui/lib/utils"

const tabs = [
  {
    id: "design",
    label: "Design",
    title: "Tokens that sync both ways",
    body: "Designali design tokens live in Figma and code. Change a colour once and every block, template and page stays in sync.",
    metric: "62%",
    metricLabel: "less time spent on handoff",
  },
  {
    id: "build",
    label: "Build",
    title: "Components with guardrails",
    body: "Accessible components built with React, TypeScript and Tailwind CSS, so you compose new screens without reinventing behaviour.",
    metric: "3.4x",
    metricLabel: "faster feature delivery",
  },
  {
    id: "review",
    label: "Review",
    title: "Shipped on Vercel",
    body: "Ali Imam reviews every page for polish and performance before it ships, so your site looks great and loads fast on every device.",
    metric: "91%",
    metricLabel: "Lighthouse-ready pages",
  },
]

export default function Features08() {
  const [active, setActive] = useState(tabs[0]!.id)
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0]!

  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-medium tracking-tight md:text-5xl">
          Design se code tak — one system, start to finish
        </h2>
        <div className="mx-auto mt-10 flex w-fit border border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={cn(
                "px-5 py-2 text-sm transition-colors not-last:border-r not-last:border-border",
                active === tab.id
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-10 grid border border-border md:grid-cols-[1fr_280px]">
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-medium tracking-tight">
              {current.title}
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
              {current.body}
            </p>
          </div>
          <div className="flex flex-col justify-center border-t border-border bg-muted/40 p-8 md:border-t-0 md:border-l">
            <div className="text-5xl font-medium tracking-tight">
              {current.metric}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              {current.metricLabel}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
