"use client"

import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@workspace/ui/components/carousel"
import { cn } from "@workspace/ui/lib/utils"

const shots = [
  { label: "Portfolio", src: "/images/templates/portfolio-simple.jpg" },
  { label: "Design Agency", src: "/images/templates/design-agency.jpg" },
  { label: "Resort", src: "/images/templates/resort.jpg" },
  { label: "AI Startup", src: "/images/templates/ai.jpg" },
  { label: "Vercel", src: "/images/templates/vercel.jpg" },
]

export default function ProductGalleryThumbnails() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    setSelected(next.selectedScrollSnap())
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Carousel setApi={handleApi}>
        <CarouselContent>
          {shots.map((shot) => (
            <CarouselItem key={shot.label}>
              <div className="relative flex aspect-square items-end overflow-hidden bg-muted p-4">
                <img
                  src={shot.src}
                  alt={shot.label + " template by Designali"}
                  className="absolute inset-0 size-full object-cover"
                />
                <span className="relative bg-background/80 px-2 py-1 text-xs font-medium">
                  {shot.label}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="grid grid-cols-5 gap-2">
        {shots.map((shot, index) => (
          <button
            key={shot.label}
            type="button"
            aria-label={"Show " + shot.label}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "aspect-square overflow-hidden bg-muted ring-offset-2 ring-offset-background transition-opacity",
              selected === index
                ? "ring-2 ring-primary"
                : "opacity-50 hover:opacity-80"
            )}
          >
            <img
              src={shot.src}
              alt=""
              className="size-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
