"use client"

import * as React from "react"
import { GitCompareIcon, LaptopIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Toggle } from "@workspace/ui/components/toggle"

const laptops = [
  { id: "air", name: "Nimbus Air 13", price: "$999" },
  { id: "pro", name: "Nimbus Pro 14", price: "$1,599" },
  { id: "max", name: "Nimbus Max 16", price: "$2,399" },
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
