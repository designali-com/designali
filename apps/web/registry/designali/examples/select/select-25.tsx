"use client"

import * as React from "react"

import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const countries = [
  { label: "Canada", value: "ca" },
  { label: "Japan", value: "jp" },
  { label: "Portugal", value: "pt" },
]

const cities: Record<string, { label: string; value: string }[]> = {
  ca: [
    { label: "Toronto", value: "toronto" },
    { label: "Vancouver", value: "vancouver" },
    { label: "Montreal", value: "montreal" },
  ],
  jp: [
    { label: "Tokyo", value: "tokyo" },
    { label: "Osaka", value: "osaka" },
    { label: "Kyoto", value: "kyoto" },
  ],
  pt: [
    { label: "Lisbon", value: "lisbon" },
    { label: "Porto", value: "porto" },
  ],
}

export default function CascadingLocationSelect() {
  const [country, setCountry] = React.useState<string | null>("jp")
  const [city, setCity] = React.useState<string | null>("kyoto")
  const cityItems = country ? (cities[country] ?? []) : []

  return (
    <FieldGroup className="w-full max-w-xs">
      <Field>
        <FieldLabel htmlFor="country">Country</FieldLabel>
        <Select
          items={countries}
          value={country}
          onValueChange={(next) => {
            setCountry(next)
            setCity(null)
          }}
        >
          <SelectTrigger id="country" className="w-full">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field>
        <FieldLabel htmlFor="city">City</FieldLabel>
        <Select
          items={cityItems}
          value={city}
          onValueChange={setCity}
          disabled={!country}
        >
          <SelectTrigger id="city" className="w-full">
            <SelectValue placeholder="Select a city" />
          </SelectTrigger>
          <SelectContent>
            {cityItems.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
    </FieldGroup>
  )
}
