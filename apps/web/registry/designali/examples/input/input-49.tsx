"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@workspace/ui/components/input-group"
import { Slider } from "@workspace/ui/components/slider"

export default function PercentageSliderInput() {
  const [pct, setPct] = React.useState(15)

  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="discount">Discount</FieldLabel>
      <div className="flex items-center gap-3">
        <Slider
          value={[pct]}
          max={100}
          step={1}
          onValueChange={(v) => setPct(Array.isArray(v) ? v[0]! : v)}
          aria-label="Discount slider"
          className="flex-1"
        />
        <InputGroup className="w-20">
          <InputGroupInput
            id="discount"
            type="number"
            min={0}
            max={100}
            value={pct}
            onChange={(e) =>
              setPct(Math.min(100, Math.max(0, Number(e.target.value))))
            }
            className="text-right tabular-nums"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupText>%</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <FieldDescription>
        designali.com customers pay {"$" + ((99 * (100 - pct)) / 100).toFixed(2)} instead of
        $99.00 for Designali Pro.
      </FieldDescription>
    </Field>
  )
}
