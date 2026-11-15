"use client"

import { useState } from "react"
import { Quote } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const people = [
  {
    initials: "EM",
    name: "Elena Moretti",
    role: "Chief Product Officer, Vellum",
    tone: "from-rose-400 to-orange-300",
    quote: "We rebuilt our entire onboarding in a sprint. Activation went from 31% to 54%, and I did not have to file a single ticket with engineering.",
  },
  {
    initials: "KA",
    name: "Kwame Asante",
    role: "Founder, Lattice Coffee",
    tone: "from-emerald-400 to-teal-300",
    quote: "As a three-person team we cannot afford a growth engineer. This is the closest thing to having one on staff.",
  },
  {
    initials: "YN",
    name: "Yuki Nakamura",
    role: "Head of Growth, Strata",
    tone: "from-sky-400 to-indigo-300",
    quote: "The experiment reports are the cleanest I have seen. My CFO reads them without asking me to explain the stats.",
  },
  {
    initials: "BW",
    name: "Ben Whitaker",
    role: "Product Lead, Corvid Health",
    tone: "from-violet-400 to-fuchsia-300",
    quote: "HIPAA review took two weeks instead of the usual three months. Their security docs answered every question up front.",
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
                "flex size-12 items-center justify-center rounded-full bg-gradient-to-br text-sm font-medium text-white transition-all",
                person.tone,
                i === active
                  ? "scale-110 ring-2 ring-foreground ring-offset-2 ring-offset-background"
                  : "opacity-50 grayscale hover:opacity-100 hover:grayscale-0"
              )}
            >
              {person.initials}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
