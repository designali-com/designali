"use client"

import { useRef } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const frames = [
  {
    title: "Harbour at Dawn",
    place: "Porto Veil",
    year: "2025",
    gradient: "linear-gradient(160deg, var(--chart-1), var(--chart-3))",
  },
  {
    title: "Terrace Garden",
    place: "Casa Lumen",
    year: "2025",
    gradient: "linear-gradient(200deg, var(--chart-2), var(--chart-4))",
  },
  {
    title: "Quarry Light",
    place: "North Ridge",
    year: "2024",
    gradient: "linear-gradient(120deg, var(--chart-5), var(--chart-2))",
  },
  {
    title: "Glass Pavilion",
    place: "Atelier Osk",
    year: "2024",
    gradient: "linear-gradient(90deg, var(--chart-3), var(--chart-1))",
  },
  {
    title: "Winter Orchard",
    place: "Valmont Farm",
    year: "2023",
    gradient: "linear-gradient(30deg, var(--chart-4), var(--chart-5))",
  },
  {
    title: "Salt Road",
    place: "Coastline 9",
    year: "2023",
    gradient: "linear-gradient(240deg, var(--chart-2), var(--chart-1))",
  },
]

export default function Gallery08() {
  const track = useRef<HTMLDivElement>(null)
  const scroll = (dir: number) => {
    const el = track.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" })
  }

  return (
    <section className="w-full overflow-hidden bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Field journal
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Places we photographed this year
            </h2>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon-lg"
              aria-label="Previous"
              onClick={() => scroll(-1)}
            >
              <ArrowLeft />
            </Button>
            <Button
              variant="outline"
              size="icon-lg"
              aria-label="Next"
              onClick={() => scroll(1)}
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div
          ref={track}
          className="-mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {frames.map((frame, i) => (
            <figure
              key={frame.title}
              className="group w-[78%] shrink-0 snap-start sm:w-[45%] lg:w-[30%]"
            >
              <div className="relative aspect-[3/4] overflow-hidden border border-border">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ background: frame.gradient }}
                />
                <span className="absolute top-4 left-4 bg-background/85 px-2 py-1 font-mono text-[11px] tabular-nums backdrop-blur">
                  {String(i + 1).padStart(2, "0")} / {String(frames.length).padStart(2, "0")}
                </span>
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                <span className="font-medium">{frame.title}</span>
                <span className="text-xs text-muted-foreground">
                  {frame.place}, {frame.year}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
