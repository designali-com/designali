"use client"

import * as React from "react"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { cn } from "@workspace/ui/lib/utils"

const slides = ["Title", "Problem", "Solution", "Market", "Team"]

export default function SlideThumbnailStrip() {
  const [active, setActive] = React.useState(1)

  return (
    <div className="flex w-full max-w-40 flex-col gap-2">
      {slides.map((slide, index) => (
        <button
          key={slide}
          type="button"
          onClick={() => setActive(index)}
          className="flex items-start gap-2 text-start"
        >
          <span className="w-3 pt-1 text-[10px] text-muted-foreground tabular-nums">
            {index + 1}
          </span>
          <AspectRatio
            ratio={16 / 9}
            className={cn(
              "flex-1 border bg-background",
              active === index && "ring-2 ring-primary"
            )}
          >
            <div className="absolute inset-0 flex flex-col gap-1 p-1.5">
              <div className="h-1 w-1/2 bg-foreground/70" />
              <div className="h-0.5 w-3/4 bg-muted-foreground/30" />
              <div className="h-0.5 w-2/3 bg-muted-foreground/30" />
              <span className="mt-auto text-[8px] text-muted-foreground">
                {slide}
              </span>
            </div>
          </AspectRatio>
        </button>
      ))}
    </div>
  )
}
