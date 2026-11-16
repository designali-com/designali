"use client"

import * as React from "react"

import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { cn } from "@workspace/ui/lib/utils"

const colors = [
  {
    value: "Sand",
    className:
      "bg-primary/20 data-checked:bg-primary/20 dark:data-checked:bg-primary/20",
  },
  {
    value: "Sage",
    className:
      "bg-chart-1 data-checked:bg-chart-1 dark:data-checked:bg-chart-1",
  },
  {
    value: "Slate",
    className:
      "bg-muted-foreground data-checked:bg-muted-foreground dark:data-checked:bg-muted-foreground",
  },
  {
    value: "Clay",
    className:
      "bg-primary data-checked:bg-primary dark:data-checked:bg-primary",
  },
  {
    value: "Ink",
    className:
      "bg-foreground data-checked:bg-foreground dark:data-checked:bg-card",
  },
]

export default function ProductColorSwatches() {
  const [color, setColor] = React.useState("Sage")

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <p className="text-sm">
        Color: <span className="font-medium">{color}</span>
      </p>
      <RadioGroup
        value={color}
        onValueChange={(v) => setColor(v as string)}
        className="flex gap-3"
        aria-label="Color"
      >
        {colors.map((c) => (
          <RadioGroupItem
            key={c.value}
            value={c.value}
            aria-label={c.value}
            className={cn(
              "size-8 border-0 ring-offset-2 ring-offset-background data-checked:ring-2 data-checked:ring-foreground [&_[data-slot=radio-group-indicator]]:hidden",
              c.className
            )}
          />
        ))}
      </RadioGroup>
    </div>
  )
}
