"use client"

import * as React from "react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

const options = [
  "Search engine",
  "Friend or colleague",
  "Podcast",
  "Social media",
]

export default function SurveyOtherOption() {
  const [other, setOther] = React.useState(false)

  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend>How did you hear about us?</FieldLegend>
      <FieldDescription>Select all that apply.</FieldDescription>
      <FieldGroup className="gap-3">
        {options.map((option) => (
          <Field key={option} orientation="horizontal">
            <Checkbox id={"source-" + option} name="source" value={option} />
            <FieldLabel htmlFor={"source-" + option} className="font-normal">
              {option}
            </FieldLabel>
          </Field>
        ))}
        <Field orientation="horizontal">
          <Checkbox
            id="source-other"
            checked={other}
            onCheckedChange={setOther}
          />
          <FieldLabel htmlFor="source-other" className="font-normal">
            Other
          </FieldLabel>
        </Field>
        {other && (
          <Input
            autoFocus
            placeholder="Tell us where"
            aria-label="Other source"
            className="ms-6 w-auto"
          />
        )}
      </FieldGroup>
    </FieldSet>
  )
}
