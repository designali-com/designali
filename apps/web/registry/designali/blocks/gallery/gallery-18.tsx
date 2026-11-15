"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const covers = [
  { title: "Meridian", artist: "Hal & The Tides", gradient: "linear-gradient(135deg, var(--chart-1), var(--chart-3))" },
  { title: "Paper Moons", artist: "Ivy Calder", gradient: "linear-gradient(200deg, var(--chart-2), var(--chart-5))" },
  { title: "Slow Engines", artist: "Northwake", gradient: "linear-gradient(60deg, var(--chart-4), var(--chart-1))" },
  { title: "Glasshouse", artist: "Ruben Ost", gradient: "linear-gradient(160deg, var(--chart-3), var(--chart-2))" },
  { title: "Low Orbit", artist: "Selah Moreno", gradient: "linear-gradient(300deg, var(--chart-5), var(--chart-4))" },
  { title: "Undertow", artist: "The Quiet Year", gradient: "linear-gradient(20deg, var(--chart-2), var(--chart-1))" },
  { title: "Fernweh", artist: "Ada Kline", gradient: "linear-gradient(240deg, var(--chart-4), var(--chart-3))" },
]

export default function Gallery18() {
  const [index, setIndex] = useState(3)
  const go = (dir: number) => setIndex((i) => Math.min(covers.length - 1, Math.max(0, i + dir)))
  const current = covers[index]!

  return (
    <section className="w-full overflow-hidden bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs tracking-widest text-muted-foreground uppercase">Staff picks</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Records of the season
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
