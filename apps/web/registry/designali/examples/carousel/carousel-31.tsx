"use client"

import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@workspace/ui/components/carousel"
import { cn } from "@workspace/ui/lib/utils"

const quotes = [
  "design se code tak.",
  "Thoughtful design, production-ready code.",
  "Look great, feel intuitive.",
  "Design it in Figma, ship it on Vercel.",
  "Work beautifully.",
]

export default function CenterFocusCarousel() {
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((api: CarouselApi) => {
    if (!api) return
    api.on("select", () => setSelected(api.selectedScrollSnap()))
  }, [])

  return (
    <Carousel
      setApi={handleApi}
      opts={{ align: "center", loop: true }}
      className="w-full max-w-md"
    >
      <CarouselContent>
        {quotes.map((quote, index) => (
          <CarouselItem key={quote} className="basis-2/3 sm:basis-1/2">
            <div
              className={cn(
                "flex aspect-[4/3] items-center justify-center border p-4 text-center text-sm font-medium transition-all duration-300",
                selected === index
                  ? "scale-100 bg-card"
                  : "scale-90 bg-muted/50 opacity-50"
              )}
            >
              {quote}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
