"use client"

import * as React from "react"
import {
  Star as StarIcon,
} from "@designali/icons"

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
  "/images/templates/dalim-agency-old.jpg",
  "/images/templates/dalim-fonts-old.jpg",
  "/images/templates/dalim-graphic-old.jpg",
  "/images/templates/dalim-icons-old.jpg",
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
          {photos.map((src, index) => (
            <CarouselItem key={src} className="ps-0">
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-muted">
                <img
                  src={src}
                  alt={"Dalim case study screen " + (index + 1)}
                  className="size-full object-cover"
                />
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
          Dalim Agency case study
          <span className="flex items-center gap-1 text-xs font-normal">
            <StarIcon className="size-3 fill-current" /> 4.92
          </span>
        </CardTitle>
        <CardDescription>Brand identity · Web design · Next.js</CardDescription>
      </CardHeader>
    </Card>
  )
}
