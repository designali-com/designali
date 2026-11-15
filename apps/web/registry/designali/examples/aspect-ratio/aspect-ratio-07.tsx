"use client"

import * as React from "react"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const ratios = [
  { label: "16:9", value: 16 / 9 },
  { label: "4:3", value: 4 / 3 },
  { label: "1:1", value: 1 },
  { label: "3:4", value: 3 / 4 },
]

export default function RatioSwitcherToggle() {
  const [label, setLabel] = React.useState("16:9")
  const ratio = ratios.find((item) => item.label === label)?.value ?? 16 / 9

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-3">
      <ToggleGroup
        variant="outline"
        size="sm"
        spacing={0}
        value={[label]}
        onValueChange={(value) => value[0] && setLabel(value[0] as string)}
      >
        {ratios.map((item) => (
          <ToggleGroupItem key={item.label} value={item.label}>
            {item.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex h-64 w-full items-center justify-center">
        <AspectRatio
          ratio={ratio}
          className="max-h-full w-full bg-linear-to-br from-sky-400 to-emerald-400 transition-all"
          style={{ maxWidth: ratio < 1 ? 256 * ratio : undefined }}
        >
          <span className="absolute inset-0 flex items-center justify-center font-mono text-sm font-semibold text-white">
            {label}
          </span>
        </AspectRatio>
      </div>
    </div>
  )
}
