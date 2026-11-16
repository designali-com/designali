"use client"

import * as React from "react"
import {
  Megaphone as MegaphoneIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@workspace/ui/components/carousel"

const announcements = [
  { tag: "New", text: "460+ blocks are now live on designali.com/blocks." },
  { tag: "Update", text: "@designali/icons now ships 4000+ icons." },
  {
    tag: "Event",
    text: "Join Ali Imam for a live design-to-code session this Thursday.",
  },
  { tag: "Fix", text: "Logo downloads from /logos now keep their SVG names." },
]

export default function VerticalAnnouncementTicker() {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) return
    const id = setInterval(() => api.scrollNext(), 3000)
    return () => clearInterval(id)
  }, [api])

  return (
    <div className="flex w-full max-w-md items-center gap-3 border bg-muted/40 px-3">
      <MegaphoneIcon className="size-4 shrink-0 text-muted-foreground" />
      <Carousel
        setApi={setApi}
        orientation="vertical"
        opts={{ loop: true }}
        className="min-w-0 flex-1"
      >
        <CarouselContent className="-mt-0 h-11">
          {announcements.map((item) => (
            <CarouselItem
              key={item.text}
              className="flex items-center gap-2 pt-0"
            >
              <Badge variant="outline">{item.tag}</Badge>
              <span className="truncate text-xs">{item.text}</span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
