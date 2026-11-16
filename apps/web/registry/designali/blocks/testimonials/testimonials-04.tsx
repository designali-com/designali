"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const testimonials = [
  {
    quote:
      "Our pricing page finally makes sense. Designali redesigned and rebuilt it in Next.js, and the hierarchy is simply clearer.",
    name: "Hannah",
    role: "Growth Lead",
    company: "Designali client",
  },
  {
    quote:
      "It is the first studio our brand team and our engineers both agreed on. Ali designs it and codes it, so nothing gets lost.",
    name: "Marcus",
    role: "VP Engineering",
    company: "Designali client",
  },
  {
    quote:
      "Every Designali block reads like it was art-directed. Our clients assume we built everything from scratch.",
    name: "Aiko",
    role: "Partner",
    company: "Design studio, designali.com customer",
  },
]

export default function Testimonials04() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]!
  const go = (step: number) =>
    setIndex((i) => (i + step + testimonials.length) % testimonials.length)

  return (
    <section className="w-full bg-muted/40 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_2fr]">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              What clients say about designali
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => go(-1)}
              aria-label="Previous"
            >
              <ArrowLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => go(1)}
              aria-label="Next"
            >
              <ArrowRight />
            </Button>
            <span className="ml-3 text-sm text-muted-foreground tabular-nums">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>
        <figure className="border border-border bg-background p-8 md:p-12">
          <blockquote className="text-xl leading-relaxed font-medium md:text-2xl">
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-10 border-t border-border pt-6 text-sm">
            <span className="font-medium">{current.name}</span>
            <span className="text-muted-foreground">
              {" "}
              &middot; {current.role}, {current.company}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
