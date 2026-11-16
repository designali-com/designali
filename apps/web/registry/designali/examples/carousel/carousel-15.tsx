"use client"

import * as React from "react"
import {
  Pause as PauseIcon,
  Play as PlayIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@workspace/ui/components/carousel"
import { cn } from "@workspace/ui/lib/utils"

const slides = [
  {
    title: "design se code tak",
    body: "Brand identity, UI/UX and production-ready websites.",
    src: "/stock/design.jpg",
  },
  {
    title: "460+ blocks",
    body: "Copy, paste and ship with Next.js and Tailwind CSS.",
    src: "/stock/development.jpg",
  },
  {
    title: "Work with Designali",
    body: "From strategy to launch, designed and built by Ali Imam.",
    src: "/stock/strategy.jpg",
  },
]

export default function AutoplayHeroWithPause() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [playing, setPlaying] = React.useState(true)
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  React.useEffect(() => {
    if (!api || !playing) return
    const id = setInterval(() => api.scrollNext(), 4000)
    return () => clearInterval(id)
  }, [api, playing, selected])

  return (
    <Carousel
      setApi={handleApi}
      opts={{ loop: true }}
      className="w-full max-w-md"
    >
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.title}>
            <div className="relative flex h-44 flex-col justify-end gap-1 overflow-hidden bg-muted p-5 text-white">
              <img
                src={slide.src}
                alt={slide.title}
                className="absolute inset-0 size-full object-cover brightness-50"
              />
              <h3 className="relative text-lg font-semibold">{slide.title}</h3>
              <p className="relative text-sm text-white/80">{slide.body}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-2 flex items-center gap-2">
        <Button
          variant="outline"
          size="icon-sm"
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          onClick={() => setPlaying((p) => !p)}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </Button>
        <div className="flex flex-1 gap-1">
          {slides.map((slide, index) => (
            <div key={slide.title} className="h-1 flex-1 bg-muted">
              <div
                className={cn(
                  "h-full bg-primary transition-all",
                  index <= selected ? "w-full" : "w-0"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </Carousel>
  )
}
