"use client"

import * as React from "react"

import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import { Label } from "@workspace/ui/components/label"
import { Slider } from "@workspace/ui/components/slider"

export default function KeyboardLargeStepSlider() {
  const [value, setValue] = React.useState([400])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex justify-between text-sm">
        <Label>Monthly email quota</Label>
        <span className="tabular-nums">{value[0]!.toLocaleString()}</span>
      </div>
      <Slider
        aria-label="Monthly email quota"
        value={value}
        onValueChange={(v) => setValue(v as number[])}
        max={5000}
        step={10}
        largeStep={500}
      />
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <KbdGroup>
            <Kbd>&larr;</Kbd>
            <Kbd>&rarr;</Kbd>
          </KbdGroup>
          &plusmn;10
        </span>
        <span className="flex items-center gap-1">
          <KbdGroup>
            <Kbd>PgUp</Kbd>
            <Kbd>PgDn</Kbd>
          </KbdGroup>
          &plusmn;500
        </span>
      </div>
    </div>
  )
}
