"use client"

import * as React from "react"
import { QuoteIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Card, CardContent } from "@workspace/ui/components/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@workspace/ui/components/carousel"
import { cn } from "@workspace/ui/lib/utils"

const testimonials = [
  {
    quote:
      "We cut our onboarding time in half within the first month. The team actually enjoys using it.",
    name: "Lena Ortiz",
    role: "Head of Ops, Brightpath",
  },
  {
    quote:
      "Reporting used to take a full day every Friday. Now it is a ten minute review over coffee.",
    name: "Tomas Reyes",
    role: "Finance Lead, Northwind Labs",
  },
  {
    quote:
      "Support answered every question within the hour. That alone made the switch worth it.",
    name: "Aisha Karim",
    role: "Founder, Pebble Studio",
  },
]

export default function TestimonialDotsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  return (
    <Carousel
      setApi={handleApi}
      opts={{ loop: true }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {testimonials.map((item) => (
          <CarouselItem key={item.name}>
            <Card>
              <CardContent className="flex flex-col gap-4">
                <QuoteIcon className="size-5 text-muted-foreground" />
                <p className="text-sm leading-relaxed">{item.quote}</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {item.name
                        .split(" ")
                        .map((p) => p[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-label={"Go to testimonial " + (index + 1)}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-1.5 transition-all",
              selected === index
                ? "w-6 bg-primary"
                : "w-1.5 bg-muted-foreground/30"
            )}
          />
        ))}
      </div>
    </Carousel>
  )
}
