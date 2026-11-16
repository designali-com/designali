"use client"

import * as React from "react"

import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Slider } from "@workspace/ui/components/slider"

export default function PriceRangeField() {
  const [range, setRange] = React.useState([20, 180])

  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">Designali template price</FieldLegend>
      <Slider
        value={range}
        onValueChange={(v) => setRange(v as number[])}
        min={0}
        max={300}
        step={10}
        aria-label="Template price range"
      />
      <div className="grid grid-cols-2 gap-3">
        <Field>
          <FieldLabel htmlFor="price-min" className="text-muted-foreground">
            Min
          </FieldLabel>
          <InputGroup>
            <InputGroupAddon>$</InputGroupAddon>
            <InputGroupInput id="price-min" readOnly value={range[0]} />
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="price-max" className="text-muted-foreground">
            Max
          </FieldLabel>
          <InputGroup>
            <InputGroupAddon>$</InputGroupAddon>
            <InputGroupInput id="price-max" readOnly value={range[1]} />
          </InputGroup>
        </Field>
      </div>
    </FieldSet>
  )
}
