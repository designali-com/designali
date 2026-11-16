"use client"

import * as React from "react"
import {
  Clock as ClockIcon,
} from "@designali/icons"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@workspace/ui/components/carousel"

const guides = [
  { title: "Install @designali/icons", minutes: 4 },
  { title: "Add your first Designali block", minutes: 3 },
  { title: "Customize a landing page", minutes: 2 },
  { title: "Theme with semantic tokens", minutes: 6 },
  { title: "Use @designali/logos", minutes: 5 },
  { title: "Deploy a template to Vercel", minutes: 2 },
]

export default function SlideCounterHeader() {
  const [state, setState] = React.useState({ current: 1, count: 0 })

  const handleApi = React.useCallback((api: CarouselApi) => {
    if (!api) return
    const update = () =>
      setState({
        current: api.selectedScrollSnap() + 1,
        count: api.scrollSnapList().length,
      })
    update()
    api.on("select", update).on("reInit", update)
  }, [])

  return (
    <Carousel
      setApi={handleApi}
      opts={{ align: "start" }}
      className="w-full max-w-md"
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-medium">Getting started guides</h3>
          <p className="text-xs text-muted-foreground tabular-nums">
            {state.current} / {state.count}
          </p>
        </div>
        <div className="flex gap-1">
          <CarouselPrevious className="static translate-none" />
          <CarouselNext className="static translate-none" />
        </div>
      </div>
      <CarouselContent>
        {guides.map((guide, index) => (
          <CarouselItem key={guide.title} className="basis-1/2">
            <div className="flex h-28 flex-col justify-between border p-3">
              <span className="text-xs text-muted-foreground">
                Guide {index + 1}
              </span>
              <span className="text-sm font-medium">{guide.title}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ClockIcon className="size-3" />
                {guide.minutes} min read
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
