"use client"

import * as React from "react"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"

const regions: Record<string, string[]> = {
  "United States": ["California", "New York", "Texas", "Washington"],
  Canada: ["British Columbia", "Ontario", "Quebec"],
  Australia: ["New South Wales", "Queensland", "Victoria"],
}
const countries = Object.keys(regions)

export default function CountryStateCascade() {
  const [country, setCountry] = React.useState<string | null>(null)
  const [state, setState] = React.useState<string | null>(null)
  const states = country ? regions[country]! : []
  return (
    <FieldGroup className="w-full max-w-xs gap-3">
      <Field>
        <FieldLabel>Country</FieldLabel>
        <Combobox
          items={countries}
          value={country}
          onValueChange={(next) => {
            setCountry(next)
            setState(null)
          }}
        >
          <ComboboxInput placeholder="Select country" className="w-full" />
          <ComboboxContent>
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
      <Field>
        <FieldLabel>State / province</FieldLabel>
        <Combobox
          key={country ?? "none"}
          items={states}
          value={state}
          onValueChange={setState}
          disabled={!country}
        >
          <ComboboxInput
            placeholder={country ? "Select region" : "Choose a country first"}
            disabled={!country}
            className="w-full"
          />
          <ComboboxContent>
            <ComboboxEmpty>No regions found.</ComboboxEmpty>
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
    </FieldGroup>
  )
}
