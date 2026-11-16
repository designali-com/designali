"use client"

import { useRef } from "react"
import {
  ArrowLeft,
  ArrowRight,
} from "@designali/icons"

import { Macbook } from "@/registry/designali/ui/apple/macbook"

const spots = [
  { name: "Portfolio", city: "Template", address: "Next.js · Tailwind CSS", rooms: 42, image: "/images/templates/portfolio-simple.jpg" },
  { name: "Design Agency", city: "Template", address: "Next.js · Framer-style motion", rooms: 68, image: "/images/templates/design-agency.jpg" },
  { name: "Resort", city: "Template", address: "Next.js · Booking flows", rooms: 54, image: "/images/templates/resort.jpg" },
  { name: "AI Startup", city: "Template", address: "Next.js · Dashboard UI", rooms: 38, image: "/images/templates/ai.jpg" },
  { name: "Dalim UI", city: "Case study", address: "React · Component library", rooms: 26, image: "/images/templates/dalim-ui-old.jpg" },
]

function Thumb({ image, name }: { image: string; name: string }) {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-muted p-4">
      <Macbook variant="macbook-air" size="sm" color="silver" className="max-w-full">
        <img src={image} alt={name} className="size-full object-cover object-top" />
      </Macbook>
    </div>
  )
}

export default function Location14() {
  const track = useRef<HTMLUListElement>(null)

  function scroll(direction: 1 | -1) {
    const el = track.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" })
  }

  return (
    <section className="w-full overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Designali templates
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Five templates, ready to ship
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              aria-label="Previous templates"
              onClick={() => scroll(-1)}
              className="flex size-10 items-center justify-center border transition-colors hover:bg-muted"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next templates"
              onClick={() => scroll(1)}
              className="flex size-10 items-center justify-center border transition-colors hover:bg-muted"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl">
        <ul
          ref={track}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-4 [scrollbar-width:thin]">
          {spots.map((spot) => (
            <li key={spot.name} className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]">
              <a href="/templates" className="group block border bg-card">
                <Thumb image={spot.image} name={spot.name} />
                <div className="space-y-1 p-5">
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">
                    {spot.city}
                  </p>
                  <p className="text-lg font-medium">Designali {spot.name}</p>
                  <p className="text-sm text-muted-foreground">{spot.address}</p>
                  <div className="flex items-center justify-between pt-4 text-sm">
                    <span>{spot.rooms} blocks</span>
                    <span className="inline-flex items-center gap-1 font-medium group-hover:underline">
                      View template <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
