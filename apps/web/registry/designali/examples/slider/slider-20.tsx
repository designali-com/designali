"use client"

import * as React from "react"

import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Slider } from "@workspace/ui/components/slider"

export default function SliderWithNumberInput() {
  const [value, setValue] = React.useState(40)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="max-upload">Max upload size (MB)</Label>
      <div className="flex items-center gap-3">
        <Slider
          aria-label="Max upload size"
          value={[value]}
          onValueChange={(v) => setValue((v as number[])[0]!)}
          min={1}
          max={250}
        />
        <Input
          id="max-upload"
          type="number"
          className="w-20"
          min={1}
          max={250}
          value={value}
          onChange={(e) =>
            setValue(Math.min(250, Math.max(1, Number(e.target.value) || 1)))
          }
        />
      </div>
    </div>
  )
}
