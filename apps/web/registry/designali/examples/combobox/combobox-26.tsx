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
import { Field, FieldLabel } from "@workspace/ui/components/field"

const cities = [
  "Amsterdam",
  "Barcelona",
  "Copenhagen",
  "Lisbon",
  "Prague",
  "Vienna",
]

export default function NativeFormSubmission() {
  const [result, setResult] = React.useState<string | null>(null)
  return (
    <form
      className="flex w-full max-w-xs flex-col gap-3"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        setResult(String(data.get("city") || "(empty)"))
      }}
    >
      <Field>
        <FieldLabel htmlFor="city">Office location</FieldLabel>
        <Combobox items={cities} name="city" defaultValue="Lisbon">
          <ComboboxInput id="city" className="w-full" />
          <ComboboxContent>
            <ComboboxEmpty>No cities found.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Field>
      <Button type="submit" variant="secondary">
        Submit
      </Button>
      {result && (
        <code className="bg-muted px-2 py-1.5 text-xs">city = {result}</code>
      )}
    </form>
  )
}
