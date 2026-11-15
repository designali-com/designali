"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Slider } from "@workspace/ui/components/slider"

export default function AudienceAgeRange() {
  const [ages, setAges] = React.useState([25, 44])

  return (
    <Field className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <FieldLabel>Audience age</FieldLabel>
        <span className="text-sm tabular-nums">
          {ages[0]} - {ages[1] === 65 ? "65+" : ages[1]}
        </span>
      </div>
      <Slider
        aria-label="Audience age"
        value={ages}
        onValueChange={(value) => setAges(value as number[])}
        min={18}
        max={65}
        minStepsBetweenValues={5}
      />
      <FieldDescription>
        Ranges must span at least 5 years. Estimated reach: 1.2M people.
      </FieldDescription>
    </Field>
  )
}
