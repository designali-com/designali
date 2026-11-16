"use client"

import * as React from "react"
import {
  GitCompare as GitCompareIcon,
  Laptop as LaptopIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Toggle } from "@workspace/ui/components/toggle"

const laptops = [
  { id: "air", name: "MacBook mockup", price: "$19" },
  { id: "pro", name: "iMac mockup", price: "$29" },
  { id: "max", name: "Studio Display mockup", price: "$39" },
]

export default function ProductCompareToggle() {
  const [compare, setCompare] = React.useState<string[]>([])

  return (
    <div className="flex w-full max-w-sm flex-col border">
      {laptops.map((l) => (
        <div
          key={l.id}
          className="flex items-center gap-3 border-b px-3 py-2.5"
        >
          <LaptopIcon className="size-5 text-muted-foreground" />
          <div className="flex-1">
            <p className="text-sm font-medium">{l.name}</p>
            <p className="text-xs text-muted-foreground">{l.price}</p>
          </div>
          <Toggle
            size="sm"
            variant="outline"
            pressed={compare.includes(l.id)}
            onPressedChange={(on) =>
              setCompare((prev) =>
                on ? [...prev, l.id] : prev.filter((x) => x !== l.id)
              )
            }
          >
            <GitCompareIcon />
            Compare
          </Toggle>
        </div>
      ))}
      <div className="flex items-center justify-between bg-muted/40 px-3 py-2">
        <span className="text-xs text-muted-foreground">
          {compare.length} selected
        </span>
        <Button size="sm" disabled={compare.length < 2}>
          Compare now
        </Button>
      </div>
    </div>
  )
}
