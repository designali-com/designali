"use client"

import * as React from "react"
import { PauseIcon, PlayIcon } from "lucide-react"

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
    title: "Spring collection",
    body: "Lightweight layers for changing weather.",
    tone: "from-emerald-500 to-teal-700",
  },
  {
    title: "Free shipping weekend",
    body: "On every order over $50, through Sunday.",
    tone: "from-indigo-500 to-violet-700",
  },
  {
    title: "Members save 15%",
    body: "Join free and unlock early access drops.",
    tone: "from-orange-400 to-rose-600",
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
            <div
              className={cn(
                "flex h-44 flex-col justify-end gap-1 bg-gradient-to-br p-5 text-white",
                slide.tone
              )}
            >
              <h3 className="text-lg font-semibold">{slide.title}</h3>
              <p className="text-sm text-white/80">{slide.body}</p>
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
