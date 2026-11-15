"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const swatches = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#14b8a6",
  "#3b82f6",
  "#6366f1",
  "#a855f7",
  "#ec4899",
  "#64748b",
]

export default function ColorSwatchPopover() {
  const [color, setColor] = React.useState("#3b82f6")

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <span className="size-3.5 border" style={{ backgroundColor: color }} />
        Label color
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <PopoverTitle>Choose a color</PopoverTitle>
        <div className="grid grid-cols-5 gap-1.5">
          {swatches.map((swatch) => (
            <button
              key={swatch}
              type="button"
              aria-label={swatch}
              aria-pressed={swatch === color}
              onClick={() => setColor(swatch)}
              className="flex aspect-square items-center justify-center ring-offset-2 ring-offset-popover outline-none focus-visible:ring-2 focus-visible:ring-ring aria-pressed:ring-2 aria-pressed:ring-foreground"
              style={{ backgroundColor: swatch }}
            >
              {swatch === color && (
                <CheckIcon className="size-3.5 text-white" />
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between border p-1.5 font-mono text-[11px]">
          <span className="text-muted-foreground">HEX</span>
          <span>{color.toUpperCase()}</span>
        </div>
      </PopoverContent>
    </Popover>
  )
}
