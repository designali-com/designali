"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

import { Macbook } from "@/registry/designali/ui/apple/macbook"
import { CounterNumber } from "@/registry/designali/ui/counter-number"

const stories = [
  {
    company: "Resort Website",
    image: "/images/templates/resort.jpg",
    tagline: "Booking pages rebuilt for mobile",
    gradient: "from-primary via-primary to-chart-2",
    stats: [
      { value: 18, prefix: "+", suffix: "%", label: "Mobile enquiries" },
      { value: 5, prefix: "", suffix: " wks", label: "Time to launch" },
    ],
    quote:
      "We expected a redesign. Designali gave us a brand and a site our team actually enjoys extending.",
    person: "Lena",
    role: "Marketing Lead, Designali client",
  },
  {
    company: "Design Agency Site",
    image: "/images/templates/design-agency.jpg",
    tagline: "One accessible system across 3 platforms",
    gradient: "from-primary via-primary to-chart-2",
    stats: [
      { value: 100, prefix: "", suffix: "%", label: "WCAG 2.2 AA pages" },
      { value: 3, prefix: "", suffix: "x", label: "Release frequency" },
    ],
    quote:
      "Accessibility stopped being an audit finding and became the default state of every Designali block we use.",
    person: "Rohan",
    role: "Creative Director, Designali client",
  },
  {
    company: "AI Product Launch",
    image: "/images/templates/ai.jpg",
    tagline: "Product dashboards at startup speed",
    gradient: "from-primary via-primary to-primary",
    stats: [
      { value: -54, prefix: "", suffix: "%", label: "UI code per feature" },
      { value: 2, prefix: "", suffix: " days", label: "Onboarding for new devs" },
    ],
    quote:
      "Ali designed it in Figma and shipped it in Next.js. New engineers built a production screen in their first week.",
    person: "Daniel",
    role: "CTO, Designali client",
  },
]

export default function Clients19() {
  const [index, setIndex] = useState(0)
  const story = stories[index]!
  const go = (step: number) =>
    setIndex((current) => (current + step + stories.length) % stories.length)

  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Featured story {index + 1} of {stories.length}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Customer spotlight
            </h2>
          </div>
          <div className="flex gap-2">
            <Button
              size="icon-lg"
              variant="outline"
              aria-label="Previous story"
              onClick={() => go(-1)}
            >
              <ArrowLeft />
            </Button>
            <Button
              size="icon-lg"
              variant="outline"
              aria-label="Next story"
              onClick={() => go(1)}
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="mt-10 grid border border-border lg:grid-cols-[1.1fr_1fr]">
          <div
            className={cn(
              "relative flex min-h-72 flex-col justify-between overflow-hidden bg-gradient-to-br p-8 text-white md:p-10",
              story.gradient
            )}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,color-mix(in_oklch,white_25%,transparent),transparent_50%)]"
            />
            <p className="relative text-3xl font-semibold tracking-tight md:text-4xl">
              {story.company}
            </p>
            <p className="relative mt-3 max-w-xs text-lg text-white/85">
              {story.tagline}
            </p>
            <div className="relative mt-8 flex justify-center">
              <Macbook variant="macbook-pro" color="silver" size="sm" className="max-w-full">
                <img
                  src={story.image}
                  alt={`${story.company} preview`}
                  className="size-full object-cover object-top"
                />
              </Macbook>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-10 p-8 md:p-10">
            <dl className="grid grid-cols-2 gap-6">
              {story.stats.map((stat) => (
                <div key={stat.label} className="border-t border-border pt-4">
                  <dt className="text-xs text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-2">
                    <CounterNumber
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      className="text-3xl font-semibold tracking-tight md:text-4xl"
                    />
                  </dd>
                </div>
              ))}
            </dl>
            <figure>
              <blockquote className="text-lg leading-relaxed">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                {story.person}, {story.role}
              </figcaption>
            </figure>
            <div className="flex gap-1.5">
              {stories.map((item, i) => (
                <button
                  key={item.company}
                  type="button"
                  aria-label={`Show ${item.company}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-1 flex-1 transition-colors",
                    i === index ? "bg-foreground" : "bg-muted"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
