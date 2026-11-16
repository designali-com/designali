"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const sizes = [
  { label: "1-10 employees", value: "1-10" },
  { label: "11-50 employees", value: "11-50" },
  { label: "51-200 employees", value: "51-200" },
  { label: "201+ employees", value: "201+" },
]

export default function FormDataSelect() {
  const [submitted, setSubmitted] = React.useState<string | null>(null)

  return (
    <form
      className="flex w-full max-w-xs flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        setSubmitted(String(data.get("companySize") ?? ""))
      }}
    >
      <Field>
        <FieldLabel htmlFor="company-size">Company size</FieldLabel>
        <Select items={sizes} name="companySize" defaultValue="11-50">
          <SelectTrigger id="company-size" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Button type="submit">Save</Button>
      {submitted !== null && (
        <p className="bg-muted p-2 font-sans text-xs">
          companySize = {submitted}
        </p>
      )}
    </form>
  )
}
