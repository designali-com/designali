"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const stories = [
  {
    company: "Vantage Travel",
    tagline: "Booking flows rebuilt for mobile",
    gradient: "from-sky-500 via-indigo-500 to-violet-600",
    stats: [
      { value: "+18%", label: "Mobile conversion" },
      { value: "5 wks", label: "Time to launch" },
    ],
    quote:
      "We expected a redesign. We got a system our engineers actually enjoy extending.",
    person: "Priya Raman",
    role: "VP Product",
  },
  {
    company: "Oakmont Health",
    tagline: "One accessible system across 3 platforms",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    stats: [
      { value: "100%", label: "WCAG 2.2 AA pages" },
      { value: "3x", label: "Release frequency" },
    ],
    quote:
      "Accessibility stopped being an audit finding and became the default state of every screen.",
    person: "Rhea Banerjee",
    role: "Director of Digital",
  },
  {
    company: "Ledgerly",
    tagline: "Finance dashboards at startup speed",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    stats: [
      { value: "-54%", label: "UI code per feature" },
      { value: "2 days", label: "Onboarding for new devs" },
    ],
    quote:
      "New engineers ship a production screen in their first week. That used to take a month.",
    person: "Marcus Hale",
    role: "CTO",
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
              className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.25),transparent_50%)]"
            />
            <p className="relative text-3xl font-semibold tracking-tight md:text-4xl">
              {story.company}
            </p>
            <p className="relative mt-16 max-w-xs text-lg text-white/85">
              {story.tagline}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-10 p-8 md:p-10">
            <dl className="grid grid-cols-2 gap-6">
              {story.stats.map((stat) => (
                <div key={stat.label} className="border-t border-border pt-4">
                  <dt className="text-xs text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                    {stat.value}
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
