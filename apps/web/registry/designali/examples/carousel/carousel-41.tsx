"use client"

import * as React from "react"
import { RefreshCwIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@workspace/ui/components/carousel"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { cn } from "@workspace/ui/lib/utils"

const events = [
  { title: "Design critique", when: "Today, 2:00 PM" },
  { title: "Sprint planning", when: "Tomorrow, 10:00 AM" },
  { title: "Customer call", when: "Thu, 4:30 PM" },
  { title: "Team lunch", when: "Fri, 12:30 PM" },
]

export default function LoadingSkeletonCarousel() {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    if (!loading) return
    const id = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(id)
  }, [loading])

  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-md">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium">Upcoming</span>
        <Button
          size="xs"
          variant="ghost"
          onClick={() => setLoading(true)}
          disabled={loading}
        >
          <RefreshCwIcon
            data-icon="inline-start"
            className={cn(loading && "animate-spin")}
          />
          Reload
        </Button>
      </div>
      <CarouselContent className="-ms-2">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2 ps-2 sm:basis-1/3">
                <div className="flex flex-col gap-2 border p-3">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </CarouselItem>
            ))
          : events.map((event) => (
              <CarouselItem
                key={event.title}
                className="basis-1/2 ps-2 sm:basis-1/3"
              >
                <div className="flex flex-col gap-1 border p-3">
                  <span className="truncate text-xs font-medium">
                    {event.title}
                  </span>
                  <span className="truncate text-[11px] text-muted-foreground">
                    {event.when}
                  </span>
                </div>
              </CarouselItem>
            ))}
      </CarouselContent>
    </Carousel>
  )
}
