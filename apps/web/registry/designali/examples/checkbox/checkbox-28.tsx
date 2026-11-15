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

const topics = [
  "Engineering",
  "Design",
  "Product",
  "Leadership",
  "Careers",
  "Events",
]
const LIMIT = 3

export default function MaxSelectionLimit() {
  const [picked, setPicked] = React.useState<string[]>(["Design"])
  const atLimit = picked.length >= LIMIT

  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend>Newsletter topics</FieldLegend>
      <FieldDescription>
        Choose up to {LIMIT}. {LIMIT - picked.length} left.
      </FieldDescription>
      <FieldGroup className="grid grid-cols-2 gap-3">
        {topics.map((topic) => {
          const checked = picked.includes(topic)
          const disabled = atLimit && !checked
          return (
            <Field
              key={topic}
              orientation="horizontal"
              data-disabled={disabled || undefined}
            >
              <Checkbox
                id={"topic-" + topic}
                checked={checked}
                disabled={disabled}
                onCheckedChange={(value) =>
                  setPicked((list) =>
                    value ? [...list, topic] : list.filter((t) => t !== topic)
                  )
                }
              />
              <FieldLabel htmlFor={"topic-" + topic} className="font-normal">
                {topic}
              </FieldLabel>
            </Field>
          )
        })}
      </FieldGroup>
    </FieldSet>
  )
}
