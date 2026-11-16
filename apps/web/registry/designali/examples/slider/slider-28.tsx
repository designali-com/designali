"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Slider } from "@workspace/ui/components/slider"

const params = [
  {
    id: "temperature",
    label: "Temperature",
    min: 0,
    max: 2,
    step: 0.1,
    value: 0.7,
    hint: "Higher values give more varied output.",
  },
  {
    id: "top-p",
    label: "Top P",
    min: 0,
    max: 1,
    step: 0.05,
    value: 0.9,
    hint: "Limits sampling to the most likely tokens.",
  },
  {
    id: "max-tokens",
    label: "Max tokens",
    min: 256,
    max: 8192,
    step: 256,
    value: 2048,
    hint: "Upper bound on response length.",
  },
]

export default function ModelParameterSliders() {
  const [values, setValues] = React.useState<Record<string, number>>(
    Object.fromEntries(params.map((p) => [p.id, p.value]))
  )

  return (
    <FieldGroup className="w-full max-w-sm border p-4">
      {params.map((param) => (
        <Field key={param.id}>
          <div className="flex items-center justify-between">
            <FieldLabel>{param.label}</FieldLabel>
            <span className="border px-1.5 font-sans text-xs tabular-nums">
              {values[param.id]}
            </span>
          </div>
          <Slider
            aria-label={param.label}
            value={[values[param.id]!]}
            onValueChange={(value) =>
              setValues((prev) => ({
                ...prev,
                [param.id]: (value as number[])[0]!,
              }))
            }
            min={param.min}
            max={param.max}
            step={param.step}
          />
          <FieldDescription>{param.hint}</FieldDescription>
        </Field>
      ))}
    </FieldGroup>
  )
}
