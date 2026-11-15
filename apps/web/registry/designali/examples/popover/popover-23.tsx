"use client"

import * as React from "react"
import { TypeIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Slider } from "@workspace/ui/components/slider"

export default function ReaderSettingsPopover() {
  const [size, setSize] = React.useState(15)
  const [leading, setLeading] = React.useState(1.6)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">
          Field Notes · 6 min read
        </span>
        <Popover>
          <PopoverTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Reading settings"
              />
            }
          >
            <TypeIcon />
          </PopoverTrigger>
          <PopoverContent className="w-60" align="end">
            <PopoverTitle>Reading settings</PopoverTitle>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs">
                <span>Font size</span>
                <span className="text-muted-foreground tabular-nums">
                  {size}px
                </span>
              </div>
              <Slider
                min={12}
                max={22}
                value={[size]}
                onValueChange={(v) => setSize(Array.isArray(v) ? v[0]! : v)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs">
                <span>Line height</span>
                <span className="text-muted-foreground tabular-nums">
                  {leading.toFixed(1)}
                </span>
              </div>
              <Slider
                min={1.2}
                max={2}
                step={0.1}
                value={[leading]}
                onValueChange={(v) => setLeading(Array.isArray(v) ? v[0]! : v)}
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <p style={{ fontSize: size, lineHeight: leading }}>
        The tide came in slowly that morning, folding the harbor into a single
        sheet of grey light.
      </p>
    </div>
  )
}
