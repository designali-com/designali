"use client"

import * as React from "react"
import { StarIcon } from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@workspace/ui/components/carousel"
import { cn } from "@workspace/ui/lib/utils"

const photos = [
  "from-sky-300 to-blue-600",
  "from-amber-200 to-amber-600",
  "from-emerald-200 to-emerald-700",
  "from-stone-300 to-stone-600",
]

export default function ListingPhotoCarousel() {
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((api: CarouselApi) => {
    if (!api) return
    api.on("select", () => setSelected(api.selectedScrollSnap()))
  }, [])

  return (
    <Card className="w-full max-w-xs pt-0">
      <Carousel setApi={handleApi} className="group/listing">
        <CarouselContent className="-ms-0">
          {photos.map((tone, index) => (
            <CarouselItem key={tone} className="ps-0">
              <div
                className={cn(
                  "flex aspect-[4/3] items-center justify-center bg-gradient-to-br text-xs text-white/80",
                  tone
                )}
              >
                Photo {index + 1}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="secondary"
          className="start-2 opacity-0 transition-opacity group-hover/listing:opacity-100 disabled:opacity-0"
        />
        <CarouselNext
          variant="secondary"
          className="end-2 opacity-0 transition-opacity group-hover/listing:opacity-100 disabled:opacity-0"
        />
        <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1">
          {photos.map((tone, index) => (
            <span
              key={tone}
              className={cn(
                "size-1.5 rounded-full",
                selected === index ? "bg-white" : "bg-white/50"
              )}
            />
          ))}
        </div>
      </Carousel>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Lakeside cabin, Harrow Bay
          <span className="flex items-center gap-1 text-xs font-normal">
            <StarIcon className="size-3 fill-current" /> 4.92
          </span>
        </CardTitle>
        <CardDescription>2 guests · 1 bedroom · $148 night</CardDescription>
      </CardHeader>
    </Card>
  )
}
