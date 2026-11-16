"use client"

import { useRef } from "react"
import {
  ArrowLeft,
  ArrowRight,
  LayoutTemplate,
} from "@designali/icons"

const spots = [
  { name: "Portfolio", city: "Template", address: "Next.js · Tailwind CSS", rooms: 42, tone: "from-sky-300 to-blue-600", angle: 12 },
  { name: "Design Agency", city: "Template", address: "Next.js · Framer-style motion", rooms: 68, tone: "from-amber-300 to-rose-500", angle: -8 },
  { name: "Resort", city: "Template", address: "Next.js · Booking flows", rooms: 54, tone: "from-emerald-300 to-teal-600", angle: 20 },
  { name: "AI Startup", city: "Template", address: "Next.js · Dashboard UI", rooms: 38, tone: "from-violet-300 to-indigo-600", angle: -16 },
  { name: "Dalim UI", city: "Case study", address: "React · Component library", rooms: 26, tone: "from-orange-300 to-red-500", angle: 4 },
]

function Thumb({ tone, angle }: { tone: string; angle: number }) {
  return (
    <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${tone}`}>
      <div
        className="absolute inset-[-30%] opacity-40"
        style={{
          transform: `rotate(${angle}deg)`,
          backgroundImage:
            "linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px)",
          backgroundSize: "34px 34px",
        }}
      />
      <div
        className="absolute inset-[-30%] opacity-70"
        style={{
          transform: `rotate(${angle + 30}deg)`,
          backgroundImage: "linear-gradient(90deg, transparent 48%, white 48%, white 52%, transparent 52%)",
        }}
      />
      <span className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg">
        <LayoutTemplate className="size-4" />
      </span>
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
                <Thumb tone={spot.tone} angle={spot.angle} />
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
