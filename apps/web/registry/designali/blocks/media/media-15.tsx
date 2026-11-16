"use client"

import { useState } from "react"
import {
  ArrowRight,
  Play,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const features = [
  {
    title: "Pick a template",
    body: "Start from a Designali template — portfolio, design agency, resort or AI startup — built with Next.js and Tailwind CSS.",
    length: "0:48",
    gradient: "radial-gradient(circle at 20% 30%, var(--chart-1), transparent 55%), linear-gradient(135deg, var(--muted), var(--background))",
  },
  {
    title: "Copy a block",
    body: "Browse 460+ blocks, copy the React code and drop it into your project. Icons come from @designali/icons.",
    length: "1:12",
    gradient: "radial-gradient(circle at 80% 30%, var(--chart-2), transparent 55%), linear-gradient(200deg, var(--muted), var(--background))",
  },
  {
    title: "Make it yours",
    body: "Swap semantic design tokens for your brand colours and type. Light and dark mode work out of the box.",
    length: "0:56",
    gradient: "radial-gradient(circle at 50% 80%, var(--chart-4), transparent 55%), linear-gradient(90deg, var(--muted), var(--background))",
  },
  {
    title: "Ship it",
    body: "Deploy on Vercel in minutes. Design se code tak, without rebuilding a single section from scratch.",
    length: "1:05",
    gradient: "radial-gradient(circle at 30% 70%, var(--chart-5), transparent 55%), linear-gradient(300deg, var(--muted), var(--background))",
  },
]

export default function Media15() {
  const [active, setActive] = useState(0)
  const feature = features[active]!

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">Designali tour</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Four short videos. The whole of Designali.</h2>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:items-start">
          <div role="tablist" aria-orientation="vertical" className="flex flex-col">
            {features.map((f, i) => (
              <button
                key={f.title}
                role="tab"
                type="button"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "border-l-2 py-4 pr-4 pl-5 text-left transition-colors",
                  i === active ? "border-foreground" : "border-border text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="flex items-center justify-between gap-4">
                  <span className="font-medium">{f.title}</span>
                  <span className="font-mono text-xs">{f.length}</span>
                </span>
                <span className={cn("grid transition-[grid-template-rows] duration-300", i === active ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <span className="overflow-hidden">
                    <span className="mt-2 block text-sm text-muted-foreground">{f.body}</span>
                  </span>
                </span>
              </button>
            ))}
            <Button variant="outline" className="mt-6 self-start" nativeButton={false} render={<a href="/blocks" />}>
              Browse Designali blocks <ArrowRight />
            </Button>
          </div>
          <div role="tabpanel" className="group relative aspect-video overflow-hidden border border-border">
            <div key={feature.title} className="absolute inset-0 animate-in fade-in duration-500" style={{ background: feature.gradient }} />
            <div className="absolute inset-x-[8%] top-[10%] bottom-0 border border-b-0 border-border bg-background/80 p-4 shadow-xl backdrop-blur">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-border" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-3 w-2/5 bg-foreground/80" />
                <div className="h-2 w-4/5 bg-muted" />
                <div className="h-2 w-3/5 bg-muted" />
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-14 bg-muted" />
                  <div className="h-14 bg-muted" />
                  <div className="h-14 bg-muted" />
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-label={`Play ${feature.title} video`}
              className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-transform group-hover:scale-110"
            >
              <Play className="size-6 translate-x-0.5 fill-current" />
            </button>
            <span className="absolute right-3 bottom-3 bg-foreground px-2 py-0.5 font-mono text-xs text-background">
              {active + 1}/{features.length} - {feature.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
