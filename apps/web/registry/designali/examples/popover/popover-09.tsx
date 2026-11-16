"use client"

import * as React from "react"
import {
  Check as CheckIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const swatches = [
  "#00A8FF",
  "#8EC5FF",
  "#2B7FFF",
  "#155DFC",
  "#1447E6",
  "#193CB8",
  "#000000",
  "#525252",
  "#E5E5E5",
  "#FFFFFF",
]

export default function ColorSwatchPopover() {
  const [color, setColor] = React.useState("#00A8FF")

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
        <div className="flex items-center justify-between border p-1.5 font-sans text-[11px]">
          <span className="text-muted-foreground">HEX</span>
          <span>{color.toUpperCase()}</span>
        </div>
      </PopoverContent>
    </Popover>
  )
}
