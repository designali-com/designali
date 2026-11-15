"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const sources = [
  "Search engine",
  "Friend or colleague",
  "Podcast",
  "Social media",
]

export default function RequiredRadioValidation() {
  const [value, setValue] = React.useState<string | null>(null)
  const [submitted, setSubmitted] = React.useState(false)
  const invalid = submitted && !value

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <FieldSet data-invalid={invalid || undefined}>
        <FieldLegend variant="label">How did you hear about us?</FieldLegend>
        <RadioGroup
          value={value}
          onValueChange={(v) => setValue(v as string)}
          aria-invalid={invalid || undefined}
        >
          {sources.map((source) => (
            <Field key={source} orientation="horizontal">
              <RadioGroupItem
                value={source}
                id={"src-" + source}
                aria-invalid={invalid || undefined}
              />
              <FieldLabel htmlFor={"src-" + source} className="font-normal">
                {source}
              </FieldLabel>
            </Field>
          ))}
        </RadioGroup>
        {invalid && (
          <FieldError>Please choose an option to continue.</FieldError>
        )}
      </FieldSet>
      <Button type="submit" className="self-start">
        {submitted && value ? "Thanks!" : "Submit"}
      </Button>
    </form>
  )
}
