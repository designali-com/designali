"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldError, FieldLabel } from "@workspace/ui/components/field"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

export default function RequiredToggleGroupField() {
  const [size, setSize] = React.useState<string[]>([])
  const [submitted, setSubmitted] = React.useState(false)
  const invalid = submitted && size.length === 0

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <Field data-invalid={invalid || undefined}>
        <FieldLabel>Team size</FieldLabel>
        <ToggleGroup
          variant="outline"
          spacing={0}
          value={size}
          onValueChange={setSize}
        >
          {["1-10", "11-50", "51-200", "200+"].map((s) => (
            <ToggleGroupItem
              key={s}
              value={s}
              aria-invalid={invalid || undefined}
            >
              {s}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        {invalid ? (
          <FieldError>Choose a team size to continue.</FieldError>
        ) : null}
      </Field>
      <Button type="submit" size="sm" className="self-start">
        Continue
      </Button>
    </form>
  )
}
