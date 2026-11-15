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
      "bg-amber-200 data-checked:bg-amber-200 dark:data-checked:bg-amber-200",
  },
  {
    value: "Sage",
    className:
      "bg-emerald-300 data-checked:bg-emerald-300 dark:data-checked:bg-emerald-300",
  },
  {
    value: "Slate",
    className:
      "bg-slate-500 data-checked:bg-slate-500 dark:data-checked:bg-slate-500",
  },
  {
    value: "Clay",
    className:
      "bg-orange-400 data-checked:bg-orange-400 dark:data-checked:bg-orange-400",
  },
  {
    value: "Ink",
    className:
      "bg-neutral-900 data-checked:bg-neutral-900 dark:data-checked:bg-neutral-900",
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
