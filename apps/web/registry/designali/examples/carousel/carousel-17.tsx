"use client"

import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@workspace/ui/components/carousel"
import { Progress } from "@workspace/ui/components/progress"

const swatches = [
  "Slate",
  "Stone",
  "Sand",
  "Sage",
  "Moss",
  "Ocean",
  "Dusk",
  "Plum",
  "Clay",
  "Rust",
]

export default function ScrollProgressCarousel() {
  const [progress, setProgress] = React.useState(0)

  const handleApi = React.useCallback((api: CarouselApi) => {
    if (!api) return
    const update = () =>
      setProgress(Math.max(0, Math.min(1, api.scrollProgress())) * 100)
    api.on("scroll", update).on("reInit", update)
  }, [])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Carousel setApi={handleApi} opts={{ dragFree: true, align: "start" }}>
        <CarouselContent className="-ms-2">
          {swatches.map((swatch, index) => (
            <CarouselItem key={swatch} className="basis-1/3 ps-2">
              <div
                className="flex aspect-[3/4] flex-col justify-end border bg-muted p-2"
                style={{ opacity: 0.4 + (index % 5) * 0.15 }}
              >
                <span className="text-xs font-medium">{swatch}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Progress value={progress} aria-label="Scroll progress" />
    </div>
  )
}
