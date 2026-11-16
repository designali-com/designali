"use client"

import * as React from "react"
import {
  Laptop as LaptopIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { cn } from "@workspace/ui/lib/utils"

const laptops = [
  { name: "Portfolio Simple", price: "$49" },
  { name: "Design Agency", price: "$79" },
  { name: "Resort", price: "$59" },
  { name: "AI Starter", price: "$69" },
]

export default function CompareProductsBar() {
  const [compare, setCompare] = React.useState<string[]>([])

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {laptops.map((laptop) => {
        const checked = compare.includes(laptop.name)
        const disabled = !checked && compare.length >= 3
        return (
          <div key={laptop.name} className="flex items-center gap-3 border p-3">
            <div className="flex size-10 items-center justify-center bg-muted">
              <LaptopIcon className="size-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{laptop.name}</p>
              <p className="text-xs text-muted-foreground">{laptop.price}</p>
            </div>
            <label
              className={cn(
                "flex items-center gap-2 text-xs",
                disabled && "opacity-50"
              )}
            >
              <Checkbox
                checked={checked}
                disabled={disabled}
                onCheckedChange={(value) =>
                  setCompare((list) =>
                    value
                      ? [...list, laptop.name]
                      : list.filter((n) => n !== laptop.name)
                  )
                }
              />
              Compare
            </label>
          </div>
        )
      })}
      {compare.length > 0 && (
        <div className="flex items-center justify-between bg-primary px-3 py-2 text-primary-foreground">
          <span className="text-xs">{compare.length} of 3 selected</span>
          <Button size="xs" variant="secondary" disabled={compare.length < 2}>
            Compare now
          </Button>
        </div>
      )}
    </div>
  )
}
