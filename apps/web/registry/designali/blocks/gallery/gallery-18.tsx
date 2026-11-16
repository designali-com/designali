"use client"

import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const covers = [
  { title: "Portfolio Simple", artist: "Designali template", gradient: 'url("/images/templates/portfolio-simple.jpg") center / cover' },
  { title: "Design Agency", artist: "Designali template", gradient: 'url("/images/templates/design-agency.jpg") center / cover' },
  { title: "Resort", artist: "Designali template", gradient: 'url("/images/templates/resort.jpg") center / cover' },
  { title: "AI", artist: "Designali template", gradient: 'url("/images/templates/ai.jpg") center / cover' },
  { title: "Vercel Style", artist: "Designali template", gradient: 'url("/images/templates/vercel.jpg") center / cover' },
  { title: "Ali Imam", artist: "Designali template", gradient: 'url("/images/templates/aliimam-comp.jpg") center / cover' },
  { title: "Dalim Agency", artist: "Designali template", gradient: 'url("/images/templates/dalim-agency-old.jpg") center / cover' },
]

export default function Gallery18() {
  const [index, setIndex] = useState(3)
  const go = (dir: number) => setIndex((i) => Math.min(covers.length - 1, Math.max(0, i + dir)))
  const current = covers[index]!

  return (
    <section className="w-full overflow-hidden bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs tracking-widest text-muted-foreground uppercase">Ali&apos;s picks</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Templates of the season
        </h2>
      </div>
      <div className="relative mt-14 h-64 [perspective:1200px] sm:h-80">
        {covers.map((cover, i) => {
          const offset = i - index
          const abs = Math.abs(offset)
          return (
            <button
              key={cover.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${cover.title} by ${cover.artist}`}
              aria-current={offset === 0}
              className={cn(
                "absolute top-0 left-1/2 aspect-square h-full border border-border shadow-xl transition-all duration-500 ease-out",
                abs > 3 && "pointer-events-none opacity-0"
              )}
              style={{
                background: cover.gradient,
                transform: `translateX(calc(-50% + ${offset * 38}%)) rotateY(${offset === 0 ? 0 : offset > 0 ? -45 : 45}deg) scale(${offset === 0 ? 1 : 0.8})`,
                zIndex: 10 - abs,
                filter: offset === 0 ? "none" : `brightness(${1 - abs * 0.15})`,
              }}
            />
          )
        })}
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl items-center justify-center gap-6 px-6">
        <Button variant="outline" size="icon-lg" aria-label="Previous" disabled={index === 0} onClick={() => go(-1)}>
          <ChevronLeft />
        </Button>
        <div className="w-48 text-center">
          <p className="truncate font-medium">{current.title}</p>
          <p className="truncate text-sm text-muted-foreground">{current.artist}</p>
        </div>
        <Button variant="outline" size="icon-lg" aria-label="Next" disabled={index === covers.length - 1} onClick={() => go(1)}>
          <ChevronRight />
        </Button>
      </div>
    </section>
  )
}
