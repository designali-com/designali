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
  "Artwork 01",
  "Artwork 02",
  "Artwork 03",
  "Artwork 04",
  "Artwork 05",
  "Artwork 06",
  "Artwork 07",
  "Artwork 08",
  "Artwork 09",
  "Artwork 10",
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
              <div className="relative flex aspect-[3/4] flex-col justify-end overflow-hidden border bg-muted p-2">
                <img
                  src={"/img/ask/ask" + (index + 1) + ".jpg"}
                  alt={swatch + " by Designali"}
                  className="absolute inset-0 size-full object-cover"
                />
                <span className="relative bg-background/80 px-1 text-xs font-medium">
                  {swatch}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Progress value={progress} aria-label="Scroll progress" />
    </div>
  )
}
