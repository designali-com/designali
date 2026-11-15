"use client"

import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"
import { cn } from "@workspace/ui/lib/utils"

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const dates = Array.from({ length: 21 }, (_, i) => ({
  key: i,
  weekday: dayNames[(i + 1) % 7],
  date: ((i + 2) % 30) + 1,
  full: (i + 1) % 7 === 0 || i === 4,
}))

export default function WeekDayPickerStrip() {
  const [picked, setPicked] = React.useState(2)

  return (
    <div className="w-full max-w-sm">
      <p className="mb-2 text-sm font-medium">Pick a delivery date</p>
      <Carousel opts={{ slidesToScroll: 7, align: "start" }} className="px-8">
        <CarouselContent className="-ms-1">
          {dates.map((d) => (
            <CarouselItem key={d.key} className="basis-1/7 ps-1">
              <button
                type="button"
                disabled={d.full}
                onClick={() => setPicked(d.key)}
                className={cn(
                  "flex w-full flex-col items-center gap-0.5 border py-2 text-xs transition-colors disabled:cursor-not-allowed disabled:opacity-40",
                  picked === d.key
                    ? "border-primary bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                <span className="text-[10px] uppercase">{d.weekday}</span>
                <span className="text-sm font-semibold">{d.date}</span>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="ghost" className="start-0" />
        <CarouselNext variant="ghost" className="end-0" />
      </Carousel>
      <p className="mt-2 text-xs text-muted-foreground">
        Greyed out days are fully booked.
      </p>
    </div>
  )
}
