"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const slides = [
  {
    title: "Morning, Lisbon",
    caption: "Shot on 35mm, April",
    gradient: "linear-gradient(120deg, var(--chart-4), var(--chart-1))",
  },
  {
    title: "Concrete Garden",
    caption: "Barbican Estate, London",
    gradient: "linear-gradient(200deg, var(--chart-2), var(--chart-5))",
  },
  {
    title: "Salt Flats",
    caption: "Bonneville, Utah",
    gradient: "linear-gradient(160deg, var(--chart-3), var(--chart-2))",
  },
  {
    title: "Night Market",
    caption: "Taipei, Taiwan",
    gradient: "linear-gradient(60deg, var(--chart-5), var(--chart-4))",
  },
]

export default function Gallery05() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]!
  const go = (step: number) =>
    setIndex((i) => (i + step + slides.length) % slides.length)

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div
          className="relative aspect-[16/9] border border-border"
          style={{ background: slide.gradient }}
        >
          <div className="absolute bottom-0 left-0 bg-background px-5 py-4">
            <p className="font-medium">{slide.title}</p>
            <p className="text-xs text-muted-foreground">{slide.caption}</p>
          </div>
          <div className="absolute right-4 bottom-4 flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => go(-1)}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => go(1)}
              aria-label="Next image"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-3">
          {slides.map((item, i) => (
            <button
              key={item.title}
              onClick={() => setIndex(i)}
              aria-label={`Show ${item.title}`}
              className={cn(
                "aspect-video border transition-opacity",
                i === index
                  ? "border-foreground"
                  : "border-border opacity-50 hover:opacity-100"
              )}
              style={{ background: item.gradient }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
