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
  { label: "Front", from: "from-sky-400", to: "to-indigo-500" },
  { label: "Side", from: "from-emerald-400", to: "to-teal-600" },
  { label: "Back", from: "from-amber-300", to: "to-orange-500" },
  { label: "Detail", from: "from-rose-400", to: "to-fuchsia-500" },
  { label: "In use", from: "from-slate-400", to: "to-slate-700" },
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
              <div
                className={cn(
                  "flex aspect-square items-end bg-gradient-to-br p-4",
                  shot.from,
                  shot.to
                )}
              >
                <span className="bg-background/80 px-2 py-1 text-xs font-medium">
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
              "aspect-square bg-gradient-to-br ring-offset-2 ring-offset-background transition-opacity",
              shot.from,
              shot.to,
              selected === index
                ? "ring-2 ring-primary"
                : "opacity-50 hover:opacity-80"
            )}
          />
        ))}
      </div>
    </div>
  )
}
