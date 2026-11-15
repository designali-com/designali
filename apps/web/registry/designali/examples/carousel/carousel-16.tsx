"use client"

import * as React from "react"
import { ClockIcon } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@workspace/ui/components/carousel"

const guides = [
  { title: "Set up your first workspace", minutes: 4 },
  { title: "Invite teammates and assign roles", minutes: 3 },
  { title: "Connect your calendar", minutes: 2 },
  { title: "Build an automation", minutes: 6 },
  { title: "Share a public dashboard", minutes: 5 },
  { title: "Export data to CSV", minutes: 2 },
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
