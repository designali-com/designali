"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"

const reasons = [
  "Too expensive",
  "Missing features",
  "Switching to another tool",
  "No longer needed",
]

export default function AtLeastOneRequired() {
  const [picked, setPicked] = React.useState<string[]>([])
  const [touched, setTouched] = React.useState(false)
  const invalid = touched && picked.length === 0

  return (
    <form
      className="flex w-full max-w-xs flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        setTouched(true)
      }}
    >
      <FieldSet data-invalid={invalid || undefined}>
        <FieldLegend>Why are you cancelling?</FieldLegend>
        <FieldDescription>Select at least one reason.</FieldDescription>
        <FieldGroup className="gap-3">
          {reasons.map((reason) => (
            <Field
              key={reason}
              orientation="horizontal"
              data-invalid={invalid || undefined}
            >
              <Checkbox
                id={"reason-" + reason}
                aria-invalid={invalid || undefined}
                checked={picked.includes(reason)}
                onCheckedChange={(checked) =>
                  setPicked((list) =>
                    checked
                      ? [...list, reason]
                      : list.filter((r) => r !== reason)
                  )
                }
              />
              <FieldLabel htmlFor={"reason-" + reason} className="font-normal">
                {reason}
              </FieldLabel>
            </Field>
          ))}
        </FieldGroup>
        {invalid && <FieldError>Please choose at least one reason.</FieldError>}
      </FieldSet>
      <Button type="submit" variant="destructive">
        Cancel subscription
      </Button>
    </form>
  )
}
