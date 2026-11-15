"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"

const categories = [
  "All",
  "Design",
  "Engineering",
  "Marketing",
  "Sales",
  "Support",
  "Finance",
  "People",
  "Legal",
  "Operations",
]

export default function CategoryChipScroller() {
  const [active, setActive] = React.useState("All")

  return (
    <Carousel
      opts={{ dragFree: true, align: "start" }}
      className="w-full max-w-sm px-9"
    >
      <CarouselContent className="-ms-2">
        {categories.map((category) => (
          <CarouselItem key={category} className="basis-auto ps-2">
            <Button
              size="sm"
              variant={active === category ? "default" : "outline"}
              onClick={() => setActive(category)}
            >
              {category}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant="ghost" className="start-0" />
      <CarouselNext variant="ghost" className="end-0" />
    </Carousel>
  )
}
