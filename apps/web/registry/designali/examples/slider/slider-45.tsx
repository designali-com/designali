"use client"

import * as React from "react"
import {
  Brush as BrushIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Slider } from "@workspace/ui/components/slider"

export default function BrushSizePopover() {
  const [size, setSize] = React.useState([12])

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <BrushIcon data-icon="inline-start" />
        Brush {size[0]}px
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <PopoverHeader>
          <PopoverTitle>Brush size</PopoverTitle>
          <PopoverDescription>Applies to pen and eraser.</PopoverDescription>
        </PopoverHeader>
        <div className="flex items-center gap-3">
          <Slider
            aria-label="Brush size"
            value={size}
            onValueChange={(value) => setSize(value as number[])}
            min={1}
            max={48}
          />
          <div className="flex size-12 shrink-0 items-center justify-center border">
            <span
              className="rounded-full bg-foreground"
              style={{ width: size[0]! * 0.9, height: size[0]! * 0.9 }}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
