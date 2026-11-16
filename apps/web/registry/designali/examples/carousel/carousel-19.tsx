"use client"

import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@workspace/ui/components/carousel"
import { cn } from "@workspace/ui/lib/utils"

const days = [
  {
    day: "Mon",
    sessions: [
      ["09:00", "Brand identity kickoff"],
      ["11:00", "Moodboard review"],
      ["14:00", "Logo concepts"],
    ],
  },
  {
    day: "Tue",
    sessions: [
      ["09:30", "UI/UX wireframes in Figma"],
      ["13:00", "Design system tokens"],
      ["16:00", "Client feedback call"],
    ],
  },
  {
    day: "Wed",
    sessions: [
      ["10:00", "Next.js build"],
      ["12:30", "Motion and CGI pass"],
      ["15:00", "Deploy to Vercel"],
    ],
  },
]

export default function ConferenceDayTabs() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  return (
    <div className="w-full max-w-sm border">
      <div className="grid grid-cols-3 border-b">
        {days.map((d, index) => (
          <button
            key={d.day}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "border-b-2 py-2 text-xs font-medium transition-colors",
              selected === index
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground"
            )}
          >
            {d.day}
          </button>
        ))}
      </div>
      <Carousel setApi={handleApi}>
        <CarouselContent>
          {days.map((d) => (
            <CarouselItem key={d.day}>
              <ul className="flex flex-col divide-y">
                {d.sessions.map(([time, title]) => (
                  <li key={title} className="flex items-center gap-3 p-3">
                    <span className="w-12 text-xs text-muted-foreground tabular-nums">
                      {time}
                    </span>
                    <span className="text-sm">{title}</span>
                  </li>
                ))}
              </ul>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
