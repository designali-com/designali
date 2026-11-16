"use client"

import * as React from "react"

import { Field, FieldError, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function PriceRangeFilterInputs() {
  const [min, setMin] = React.useState("40")
  const [max, setMax] = React.useState("25")
  const invalid = min !== "" && max !== "" && Number(min) > Number(max)

  return (
    <Field data-invalid={invalid} className="w-full max-w-xs">
      <FieldLabel>Template price range</FieldLabel>
      <div className="flex items-center gap-2">
        <Input
          aria-label="Minimum price"
          type="number"
          placeholder="Min"
          value={min}
          aria-invalid={invalid}
          onChange={(e) => setMin(e.target.value)}
        />
        <span className="text-muted-foreground">–</span>
        <Input
          aria-label="Maximum price"
          type="number"
          placeholder="Max"
          value={max}
          aria-invalid={invalid}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      {invalid && (
        <FieldError>Minimum can&apos;t be higher than maximum.</FieldError>
      )}
    </Field>
  )
}
