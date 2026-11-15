"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import { Field, FieldError, FieldLabel } from "@workspace/ui/components/field"

const departments = [
  "Engineering",
  "Design",
  "Marketing",
  "Sales",
  "Operations",
  "Finance",
]

export default function RequiredFieldValidation() {
  const [value, setValue] = React.useState<string | null>(null)
  const [submitted, setSubmitted] = React.useState(false)
  const invalid = submitted && !value
  return (
    <form
      className="flex w-full max-w-xs flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <Field data-invalid={invalid || undefined}>
        <FieldLabel htmlFor="department">Department</FieldLabel>
        <Combobox items={departments} value={value} onValueChange={setValue}>
          <ComboboxInput
            id="department"
            placeholder="Select department"
            aria-invalid={invalid}
            className="w-full"
          />
          <ComboboxContent>
            <ComboboxEmpty>No departments found.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        {invalid && <FieldError>Please choose a department.</FieldError>}
      </Field>
      <Button type="submit">{submitted && value ? "Saved" : "Continue"}</Button>
    </form>
  )
}
