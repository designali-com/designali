"use client"

import * as React from "react"
import {
  Check as CheckIcon,
} from "@designali/icons"

import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const gradients = [
  "from-rose-400 to-orange-300",
  "from-sky-400 to-indigo-500",
  "from-emerald-300 to-teal-600",
  "from-fuchsia-500 to-purple-700",
  "from-amber-200 to-yellow-500",
  "from-slate-500 to-slate-900",
  "from-pink-300 to-rose-500",
  "from-cyan-300 to-blue-600",
  "from-lime-300 to-green-600",
  "from-violet-300 to-indigo-700",
  "from-orange-400 to-red-600",
  "from-teal-200 to-cyan-500",
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
