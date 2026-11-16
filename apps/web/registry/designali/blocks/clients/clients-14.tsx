"use client"

import { useState } from "react"
import {
  Quote,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const clients = [
  {
    name: "Portfolio client",
    person: "Sara",
    role: "Independent Designer",
    initials: "SA",
    quote:
      "Ali turned a messy Figma file into a portfolio site I am proud of. It looks great, feels intuitive and was live in two weeks.",
  },
  {
    name: "SaaS startup",
    person: "Omar",
    role: "Founder",
    initials: "OM",
    quote:
      "The Designali blocks are boring in the best way: typed, accessible and predictable. We stopped shipping CSS regressions.",
  },
  {
    name: "Resort brand",
    person: "Lena",
    role: "Marketing Lead",
    initials: "LE",
    quote:
      "Designali rebuilt our booking pages in five weeks. Mobile enquiries went up and nobody had to argue about button padding.",
  },
  {
    name: "Design agency",
    person: "Rohan",
    role: "Creative Director",
    initials: "RO",
    quote:
      "As a small team we now look like we have a full design department. Designali templates did the heavy lifting.",
  },
  {
    name: "Product team",
    person: "Mina",
    role: "Design Systems Lead",
    initials: "MI",
    quote:
      "Theming across our sub-brands used to take a sprint. With Designali tokens it is one file and an afternoon of review.",
  },
  {
    name: "AI startup",
    person: "Daniel",
    role: "Engineering Manager",
    initials: "DA",
    quote:
      "Ali designs and codes, so the handoff simply disappeared. Design se code tak is exactly how it felt.",
  },
]

export default function Clients14() {
  const [active, setActive] = useState(0)
  const current = clients[active]!

  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Select a customer to hear from them
        </p>
        <div
          role="tablist"
          aria-label="Customers"
          className="mt-8 grid grid-cols-2 border-t border-l border-border sm:grid-cols-3 lg:grid-cols-6"
        >
          {clients.map((client, index) => (
            <button
              key={client.name}
              type="button"
              role="tab"
              aria-selected={active === index}
              onClick={() => setActive(index)}
              className={cn(
                "relative flex h-20 items-center justify-center border-r border-b border-border px-3 text-base font-semibold tracking-tight transition-colors md:h-24 md:text-lg",
                active === index
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              {client.name}
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 h-0.5 bg-foreground transition-opacity",
                  active === index ? "opacity-100" : "opacity-0"
                )}
              />
            </button>
          ))}
        </div>
        <figure
          role="tabpanel"
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <Quote className="mx-auto size-8 text-muted-foreground" />
          <blockquote
            key={current.name}
            className="mt-6 text-xl leading-relaxed font-medium tracking-tight text-balance animate-in fade-in md:text-2xl"
          >
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex items-center justify-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
              {current.initials}
            </span>
            <span className="text-start text-sm">
              <span className="block font-medium">{current.person}</span>
              <span className="block text-muted-foreground">
                {current.role}, {current.name}
              </span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
