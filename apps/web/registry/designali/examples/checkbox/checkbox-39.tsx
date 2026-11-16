"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"

const integrations = [
  { value: "slack", label: "Slack" },
  { value: "github", label: "GitHub" },
  { value: "linear", label: "Linear" },
  { value: "figma", label: "Figma" },
]

export default function NativeFormDataSubmit() {
  const [result, setResult] = React.useState<string[] | null>(null)

  return (
    <form
      className="flex w-full max-w-xs flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        setResult(
          new FormData(e.currentTarget).getAll("integrations").map(String)
        )
      }}
    >
      <FieldSet>
        <FieldLegend variant="label">Connect integrations</FieldLegend>
        <FieldGroup className="gap-3">
          {integrations.map((item) => (
            <Field key={item.value} orientation="horizontal">
              <Checkbox
                id={"int-" + item.value}
                name="integrations"
                value={item.value}
                defaultChecked={item.value === "slack"}
              />
              <FieldLabel htmlFor={"int-" + item.value} className="font-normal">
                {item.label}
              </FieldLabel>
            </Field>
          ))}
        </FieldGroup>
      </FieldSet>
      <Button type="submit" size="sm">
        Save
      </Button>
      {result && (
        <p className="font-sans text-xs text-muted-foreground">
          integrations = [{result.join(", ")}]
        </p>
      )}
    </form>
  )
}
