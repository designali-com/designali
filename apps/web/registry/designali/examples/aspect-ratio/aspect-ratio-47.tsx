"use client"

import * as React from "react"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function CustomRatioInputs() {
  const [w, setW] = React.useState(1200)
  const [h, setH] = React.useState(628)
  const ratio = w > 0 && h > 0 ? w / h : 1
  const clamped = Math.min(Math.max(ratio, 0.5), 3)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <Field>
          <FieldLabel htmlFor="ratio-w">Width (px)</FieldLabel>
          <Input
            id="ratio-w"
            type="number"
            min={1}
            value={w}
            onChange={(event) => setW(Number(event.target.value))}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="ratio-h">Height (px)</FieldLabel>
          <Input
            id="ratio-h"
            type="number"
            min={1}
            value={h}
            onChange={(event) => setH(Number(event.target.value))}
          />
        </Field>
      </div>
      <div
        className="mx-auto w-full"
        style={{ maxWidth: clamped < 1 ? 220 * clamped : undefined }}
      >
        <AspectRatio
          ratio={clamped}
          className="bg-linear-to-br from-primary/20 to-primary/5 ring-1 ring-primary/30"
        >
          <span className="absolute inset-0 flex items-center justify-center font-mono text-xs">
            {ratio.toFixed(3)} : 1
          </span>
        </AspectRatio>
      </div>
    </div>
  )
}
