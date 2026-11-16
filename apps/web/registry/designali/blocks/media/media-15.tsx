"use client"

import { useState } from "react"
import { ArrowRight, Play } from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { Macbook } from "@/registry/designali/ui/apple/macbook"
import { DotPattern } from "@/registry/designali/ui/dot-pattern"

const features = [
  {
    title: "Pick a template",
    body: "Start from a Designali template — portfolio, design agency, resort or AI startup — built with Next.js and Tailwind CSS.",
    length: "0:48",
    image: "/images/templates/portfolio-simple.jpg",
  },
  {
    title: "Copy a block",
    body: "Browse 460+ blocks, copy the React code and drop it into your project. Icons come from @designali/icons.",
    length: "1:12",
    image: "/img/dashboard-1-light.jpg",
  },
  {
    title: "Make it yours",
    body: "Swap semantic design tokens for your brand colours and type. Light and dark mode work out of the box.",
    length: "0:56",
    image: "/img/hero-1.jpg",
  },
  {
    title: "Ship it",
    body: "Deploy on Vercel in minutes. Design se code tak, without rebuilding a single section from scratch.",
    length: "1:05",
    image: "/images/templates/vercel.jpg",
  },
]

export default function Media15() {
  const [active, setActive] = useState(0)
  const feature = features[active]!

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Designali tour
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Four short videos. The whole of Designali.
          </h2>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:items-start">
          <div
            role="tablist"
            aria-orientation="vertical"
            className="flex flex-col"
          >
            {features.map((f, i) => (
              <button
                key={f.title}
                role="tab"
                type="button"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "border-l-2 py-4 pr-4 pl-5 text-left transition-colors",
                  i === active
                    ? "border-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="flex items-center justify-between gap-4">
                  <span className="font-medium">{f.title}</span>
                  <span className="font-sans text-xs">{f.length}</span>
                </span>
                <span
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300",
                    i === active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <span className="overflow-hidden">
                    <span className="mt-2 block text-sm text-muted-foreground">
                      {f.body}
                    </span>
                  </span>
                </span>
              </button>
            ))}
            <Button
              variant="outline"
              className="mt-6 self-start"
              nativeButton={false}
              render={<a href="/blocks" />}
            >
              Browse Designali blocks <ArrowRight />
            </Button>
          </div>
          <div
            role="tabpanel"
            className="group relative aspect-video overflow-hidden border border-border bg-muted/40"
          >
            <DotPattern className="text-muted-foreground" />
            <div className="absolute inset-0 flex items-end justify-center pt-6">
              <Macbook
                variant="macbook-pro"
                color="silver"
                className="max-w-[88%]"
              >
                <img
                  key={feature.title}
                  src={feature.image}
                  alt={feature.title}
                  className="size-full animate-in object-cover object-top duration-500 fade-in"
                />
              </Macbook>
            </div>
            <button
              type="button"
              aria-label={`Play ${feature.title} video`}
              className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-transform group-hover:scale-110"
            >
              <Play className="size-6 translate-x-0.5 fill-current" />
            </button>
            <span className="absolute right-3 bottom-3 bg-foreground px-2 py-0.5 font-sans text-xs text-background">
              {active + 1}/{features.length} - {feature.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
