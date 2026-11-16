"use client"

import * as React from "react"
import {
  Heart as HeartIcon,
  X as XIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"

const initial = ["Portfolio Simple", "Design Agency", "Resort", "AI Startup"]

const covers: Record<string, string> = {
  "Portfolio Simple": "/images/templates/portfolio-simple.jpg",
  "Design Agency": "/images/templates/design-agency.jpg",
  Resort: "/images/templates/resort.jpg",
  "AI Startup": "/images/templates/ai.jpg",
}

export default function SavedItemsWithEmpty() {
  const [items, setItems] = React.useState(initial)

  if (items.length === 0) {
    return (
      <Empty className="w-full max-w-sm border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <HeartIcon />
          </EmptyMedia>
          <EmptyTitle>No saved templates</EmptyTitle>
          <EmptyDescription>Designali templates you save will show up here.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm" variant="outline" onClick={() => setItems(initial)}>
            Restore templates
          </Button>
        </EmptyContent>
      </Empty>
    )
  }

  return (
    <Carousel
      opts={{ align: "start" }}
      className="w-full max-w-[14rem] sm:max-w-sm"
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item} className="sm:basis-1/2">
            <div className="flex flex-col gap-2 border p-3">
              <img
                src={covers[item]}
                alt={item + " template"}
                className="aspect-square w-full bg-muted object-cover"
              />
              <span className="text-xs font-medium">{item}</span>
              <Button
                size="xs"
                variant="ghost"
                onClick={() =>
                  setItems((list) => list.filter((i) => i !== item))
                }
              >
                <XIcon data-icon="inline-start" />
                Remove
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
