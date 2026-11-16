"use client"

import * as React from "react"
import {
  Rows2 as Rows2Icon,
  Rows3 as Rows3Icon,
  Rows4 as Rows4Icon,
} from "@designali/icons"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { cn } from "@workspace/ui/lib/utils"

const padding: Record<string, string> = {
  compact: "py-1",
  default: "py-2",
  relaxed: "py-3.5",
}
const invoices = [
  { id: "INV-1042", amount: "$1,240.00" },
  { id: "INV-1043", amount: "$318.50" },
  { id: "INV-1044", amount: "$2,905.00" },
]

export default function TableDensityToggleGroup() {
  const [density, setDensity] = React.useState("default")

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <ToggleGroup
        size="sm"
        variant="outline"
        spacing={0}
        value={[density]}
        onValueChange={(next) => next[0] && setDensity(next[0])}
        className="self-end"
      >
        <ToggleGroupItem value="compact" aria-label="Compact">
          <Rows4Icon />
        </ToggleGroupItem>
        <ToggleGroupItem value="default" aria-label="Default">
          <Rows3Icon />
        </ToggleGroupItem>
        <ToggleGroupItem value="relaxed" aria-label="Relaxed">
          <Rows2Icon />
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="divide-y border text-sm">
        {invoices.map((inv) => (
          <div
            key={inv.id}
            className={cn(
              "flex justify-between px-3 transition-all",
              padding[density]
            )}
          >
            <span className="font-mono text-xs">{inv.id}</span>
            <span className="tabular-nums">{inv.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
