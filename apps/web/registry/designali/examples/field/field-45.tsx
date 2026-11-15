"use client"

import * as React from "react"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { Slider } from "@workspace/ui/components/slider"
import { Switch } from "@workspace/ui/components/switch"

export default function AccessibilityPreferencesFields() {
  const [size, setSize] = React.useState([16])

  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <div className="flex items-center justify-between">
          <FieldLabel htmlFor="a11y-size">Text size</FieldLabel>
          <span className="text-xs text-muted-foreground tabular-nums">
            {size[0]}px
          </span>
        </div>
        <Slider
          id="a11y-size"
          value={size}
          onValueChange={(v) => setSize(v as number[])}
          min={12}
          max={24}
          step={1}
        />
        <p style={{ fontSize: size[0] }} className="leading-snug">
          The quick brown fox jumps.
        </p>
      </Field>
      <FieldSeparator />
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="a11y-motion">Reduce motion</FieldLabel>
          <FieldDescription>Minimize animations and parallax.</FieldDescription>
        </FieldContent>
        <Switch id="a11y-motion" size="sm" />
      </Field>
      <FieldSeparator />
      <FieldSet>
        <FieldLegend variant="label">Contrast</FieldLegend>
        <RadioGroup defaultValue="standard" className="flex gap-4">
          {["standard", "high"].map((c) => (
            <Field key={c} orientation="horizontal" className="w-auto">
              <RadioGroupItem value={c} id={"contrast-" + c} />
              <FieldLabel
                htmlFor={"contrast-" + c}
                className="font-normal capitalize"
              >
                {c}
              </FieldLabel>
            </Field>
          ))}
        </RadioGroup>
      </FieldSet>
    </FieldGroup>
  )
}
