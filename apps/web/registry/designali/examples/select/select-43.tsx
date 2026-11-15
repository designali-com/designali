"use client"

import * as React from "react"
import { ShoppingBagIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const sizes = [
  { label: "XS", value: "xs", left: 0 },
  { label: "S", value: "s", left: 8 },
  { label: "M", value: "m", left: 2 },
  { label: "L", value: "l", left: 14 },
  { label: "XL", value: "xl", left: 0 },
]

export default function ApparelSizeSelect() {
  const [size, setSize] = React.useState<string | null>(null)
  const current = sizes.find((item) => item.value === size)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium">Merino crew sweater</span>
        <span className="text-sm">$89</span>
      </div>
      <Select items={sizes} value={size} onValueChange={setSize}>
        <SelectTrigger className="w-full" aria-label="Size">
          <SelectValue placeholder="Select size" />
        </SelectTrigger>
        <SelectContent>
          {sizes.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              disabled={item.left === 0}
            >
              {item.label}
              {item.left === 0 && (
                <span className="text-muted-foreground">Sold out</span>
              )}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {current && current.left <= 3 && (
        <p className="text-xs text-amber-600 dark:text-amber-400">
          Only {current.left} left in {current.label}
        </p>
      )}
      <Button disabled={!size}>
        <ShoppingBagIcon data-icon="inline-start" />
        Add to bag
      </Button>
    </div>
  )
}
