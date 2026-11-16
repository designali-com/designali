"use client"

import { useState } from "react"
import {
  Quote,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const people = [
  {
    initials: "EL",
    name: "Elena",
    role: "Chief Product Officer, Designali client",
    image: null,
    quote: "Designali rebuilt our onboarding in a sprint, designed in Figma and shipped in Next.js, without a single ticket to our engineering team.",
  },
  {
    initials: "KW",
    name: "Kwame",
    role: "Founder, Designali client",
    image: null,
    quote: "As a three-person team we cannot afford a design and a dev agency. Designali is both, in one studio.",
  },
  {
    initials: "AI",
    name: "Ali Imam",
    role: "Founder, Designali",
    image: "/ali.jpg",
    quote: "I design and build digital experiences that look great, feel intuitive and work beautifully.",
  },
  {
    initials: "BE",
    name: "Ben",
    role: "Product Lead, designali.com customer",
    image: null,
    quote: "Designali blocks and @designali/icons gave our team a head start on every new page we ship.",
  },
]

export default function Testimonials09() {
  const [active, setActive] = useState(0)
  const p = people[active]!

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Quote className="mx-auto size-8 text-muted-foreground" />
        <blockquote
          key={active}
          className="mt-8 min-h-[9rem] animate-in text-2xl leading-snug font-medium tracking-tight duration-500 fade-in md:min-h-[8rem] md:text-3xl"
        >
          &ldquo;{p.quote}&rdquo;
        </blockquote>
        <div className="mt-8 text-sm">
          <div className="font-medium">{p.name}</div>
          <div className="text-muted-foreground">{p.role}</div>
        </div>
        <div className="mt-10 flex justify-center gap-3" role="tablist">
          {people.map((person, i) => (
            <button
              key={person.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={person.name}
              onClick={() => setActive(i)}
              className={cn(
                "flex size-12 items-center justify-center overflow-hidden rounded-full bg-primary text-sm font-medium text-primary-foreground transition-all",
                i === active
                  ? "scale-110 ring-2 ring-foreground ring-offset-2 ring-offset-background"
                  : "opacity-50 grayscale hover:opacity-100 hover:grayscale-0"
              )}
            >
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  className="size-full object-cover"
                />
              ) : (
                person.initials
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
