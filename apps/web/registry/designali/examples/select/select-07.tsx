"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldError, FieldLabel } from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const departments = [
  { label: "Engineering", value: "engineering" },
  { label: "Design", value: "design" },
  { label: "Marketing", value: "marketing" },
  { label: "Finance", value: "finance" },
]

export default function RequiredInvalidSelect() {
  const [value, setValue] = React.useState<string | null>(null)
  const [touched, setTouched] = React.useState(false)
  const invalid = touched && !value

  return (
    <form
      className="flex w-full max-w-xs flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        setTouched(true)
      }}
    >
      <Field data-invalid={invalid}>
        <FieldLabel htmlFor="department">Department</FieldLabel>
        <Select
          items={departments}
          value={value}
          onValueChange={setValue}
          required
        >
          <SelectTrigger
            id="department"
            className="w-full"
            aria-invalid={invalid}
          >
            <SelectValue placeholder="Choose a department" />
          </SelectTrigger>
          <SelectContent>
            {departments.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {invalid && (
          <FieldError>Please select a department to continue.</FieldError>
        )}
      </Field>
      <Button type="submit">Continue</Button>
    </form>
  )
}
