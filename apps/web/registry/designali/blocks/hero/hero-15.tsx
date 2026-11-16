"use client"

import { useState } from "react"
import {
  ArrowRight,
  Check,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

import { IPad } from "@/registry/designali/ui/apple/ipad"

const audiences = [
  {
    id: "design",
    label: "For designers",
    headline: "Design in Figma, ship with Designali.",
    body: "Designali UI designs, icons and illustrations match the code one to one, so your Figma file and your Next.js app never drift apart.",
    points: ["2300+ UI designs", "4000+ icons and logos", "Semantic design tokens"],
    image: "/img/hero-1.jpg",
  },
  {
    id: "engineering",
    label: "For engineers",
    headline: "Stop rebuilding the same hero section.",
    body: "Copy typed, accessible Designali blocks into your repo — React, TypeScript and Tailwind CSS, ready for production.",
    points: ["460+ blocks", "Next.js and Tailwind CSS", "@designali/icons included"],
    image: "/img/dashboard-1-light.jpg",
  },
  {
    id: "leads",
    label: "For founders",
    headline: "Launch a product that looks studio-made.",
    body: "Start from a Designali template, or hire the studio to design and build your brand, UI and website end to end.",
    points: ["240+ landing pages", "Brand identity and UI/UX", "Production-ready code"],
    image: "/images/templates/design-agency.jpg",
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
                  <Check className="size-4 text-primary dark:text-primary" />
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
          <div className="flex justify-center">
            <IPad
              variant="ipad-pro"
              color="silver"
              size="lg"
              orientation="landscape"
              className="h-auto! w-full max-w-2xl"
            >
              <img
                src={audience.image}
                alt={`Designali ${audience.label.toLowerCase()} preview`}
                className="size-full object-cover object-top"
              />
            </IPad>
          </div>
        </div>
      </div>
    </section>
  )
}
