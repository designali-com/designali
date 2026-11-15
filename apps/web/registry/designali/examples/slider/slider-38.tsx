"use client"

import * as React from "react"

import { Slider } from "@workspace/ui/components/slider"
import { cn } from "@workspace/ui/lib/utils"

const categories = [
  { name: "Groceries", spent: 412, cap: 500 },
  { name: "Dining out", spent: 268, cap: 200 },
  { name: "Transport", spent: 96, cap: 150 },
]

export default function BudgetCategoryCaps() {
  const [caps, setCaps] = React.useState(categories.map((c) => c.cap))

  return (
    <div className="flex w-full max-w-sm flex-col gap-5 border p-4">
      <div className="text-sm font-medium">March budget</div>
      {categories.map((category, i) => {
        const over = category.spent > caps[i]!
        return (
          <div key={category.name} className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <span>{category.name}</span>
              <span
                className={cn(
                  "text-xs tabular-nums",
                  over ? "text-destructive" : "text-muted-foreground"
                )}
              >
                ${category.spent} of ${caps[i]}
              </span>
            </div>
            <Slider
              aria-label={category.name + " cap"}
              className={cn(
                over && "[&_[data-slot=slider-range]]:bg-destructive"
              )}
              value={[caps[i]!]}
              onValueChange={(value) =>
                setCaps((prev) =>
                  prev.map((c, j) => (j === i ? (value as number[])[0]! : c))
                )
              }
              max={800}
              step={25}
            />
          </div>
        )
      })}
    </div>
  )
}
