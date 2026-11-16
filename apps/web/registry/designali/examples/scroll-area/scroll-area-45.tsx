"use client"

import * as React from "react"
import {
  Check as CheckIcon,
} from "@designali/icons"

import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const gradients = [
  "from-primary to-chart-1",
  "from-primary to-primary",
  "from-chart-1 to-chart-2",
  "from-primary to-chart-3",
  "from-primary/20 to-primary",
  "from-muted-foreground to-foreground",
  "from-chart-1 to-primary",
  "from-chart-1 to-chart-2",
  "from-chart-1 to-chart-2",
  "from-chart-1 to-chart-3",
  "from-primary to-destructive",
  "from-primary/20 to-primary",
]

export default function GradientGalleryGrid() {
  const [picked, setPicked] = React.useState(1)

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <span className="text-sm font-medium">Choose a wallpaper</span>
      <ScrollArea className="h-60 border">
        <div className="grid grid-cols-3 gap-2 p-2">
          {gradients.map((g, i) => (
            <button
              key={g}
              onClick={() => setPicked(i)}
              aria-label={"Wallpaper " + (i + 1)}
              aria-pressed={picked === i}
              className={cn(
                "relative aspect-[3/4] bg-gradient-to-br",
                g,
                picked === i &&
                  "ring-2 ring-ring ring-offset-2 ring-offset-background"
              )}
            >
              {picked === i && (
                <CheckIcon className="absolute top-1 right-1 size-3.5 text-white" />
              )}
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
