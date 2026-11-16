"use client"

import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const slides = [
  {
    title: "Designali Agency",
    caption: "Brand and website, design se code tak",
    gradient: 'url("/images/templates/design-agency.jpg") center / cover',
  },
  {
    title: "Portfolio Simple",
    caption: "Next.js portfolio template",
    gradient: 'url("/images/templates/portfolio-simple.jpg") center / cover',
  },
  {
    title: "Resort",
    caption: "Landing page template",
    gradient: 'url("/images/templates/resort.jpg") center / cover',
  },
  {
    title: "AI",
    caption: "AI product template",
    gradient: 'url("/images/templates/ai.jpg") center / cover',
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
