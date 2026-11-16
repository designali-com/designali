"use client"

import * as React from "react"
import {
  Columns2 as Columns2Icon,
  Columns3 as Columns3Icon,
  Square as SquareIcon,
} from "@designali/icons"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { cn } from "@workspace/ui/lib/utils"

const basis: Record<string, string> = {
  "1": "basis-full",
  "2": "basis-1/2",
  "3": "basis-1/3",
}

export default function SlidesPerViewSwitcher() {
  const [perView, setPerView] = React.useState("2")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Cards per view</span>
        <ToggleGroup
          variant="outline"
          size="sm"
          value={[perView]}
          onValueChange={(v) => v[0] && setPerView(v[0])}
        >
          <ToggleGroupItem value="1" aria-label="One per view">
            <SquareIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="2" aria-label="Two per view">
            <Columns2Icon />
          </ToggleGroupItem>
          <ToggleGroupItem value="3" aria-label="Three per view">
            <Columns3Icon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <Carousel key={perView} opts={{ align: "start" }} className="px-8">
        <CarouselContent className="-ms-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className={cn("ps-2", basis[perView])}>
              <div className="flex aspect-square items-center justify-center border bg-muted/40 text-lg font-semibold">
                {index + 1}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="ghost" className="start-0" />
        <CarouselNext variant="ghost" className="end-0" />
      </Carousel>
    </div>
  )
}
