"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

const frames = [
  "from-sky-500 to-blue-800",
  "from-amber-400 to-orange-700",
  "from-emerald-400 to-green-800",
  "from-fuchsia-400 to-purple-800",
]

export default function CoverThumbnailPicker() {
  const [selected, setSelected] = React.useState(0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <AspectRatio
        ratio={16 / 9}
        className={cn("bg-linear-to-br transition-colors", frames[selected])}
      >
        <Badge variant="secondary" className="absolute start-2 bottom-2">
          Cover
        </Badge>
      </AspectRatio>
      <div
        className="grid grid-cols-4 gap-2"
        role="radiogroup"
        aria-label="Cover frame"
      >
        {frames.map((frame, index) => (
          <button
            key={frame}
            type="button"
            role="radio"
            aria-checked={selected === index}
            aria-label={"Frame " + (index + 1)}
            onClick={() => setSelected(index)}
            className={cn(
              "outline-none focus-visible:ring-2 focus-visible:ring-ring",
              selected === index
                ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                : "opacity-70 hover:opacity-100"
            )}
          >
            <AspectRatio
              ratio={16 / 9}
              className={cn("bg-linear-to-br", frame)}
            >
              {selected === index && (
                <CheckIcon className="absolute end-1 top-1 size-3 text-white" />
              )}
            </AspectRatio>
          </button>
        ))}
      </div>
    </div>
  )
}
