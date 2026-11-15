"use client"

import { useState } from "react"
import { Quote } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const clients = [
  {
    name: "Brightline",
    person: "Maya Okafor",
    role: "Head of Design",
    initials: "MO",
    quote:
      "We cut our component backlog from 140 tickets to 12 in a single quarter. Designers finally spend their week on product problems.",
  },
  {
    name: "Ferro Systems",
    person: "Lukas Brandt",
    role: "Staff Engineer",
    initials: "LB",
    quote:
      "The blocks are boring in the best way: typed, accessible and predictable. Our on-call channel stopped getting CSS regressions.",
  },
  {
    name: "Vantage Travel",
    person: "Priya Raman",
    role: "VP Product",
    initials: "PR",
    quote:
      "We rebuilt the booking flow in five weeks. Conversion on mobile went up 18% and nobody had to argue about button padding.",
  },
  {
    name: "Mosswood",
    person: "Theo Lindqvist",
    role: "Founder",
    initials: "TL",
    quote:
      "As a three-person team we look like we have a design department. That alone helped us close our seed round.",
  },
  {
    name: "Quarry",
    person: "Ana Ferreira",
    role: "Design Systems Lead",
    initials: "AF",
    quote:
      "Theming across our four sub-brands used to take a sprint. Now it is a token file and an afternoon of review.",
  },
  {
    name: "Helix Bio",
    person: "Daniel Cho",
    role: "Engineering Manager",
    initials: "DC",
    quote:
      "Our scientists use internal tools all day. Consistent tables and forms reduced support requests by almost half.",
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
