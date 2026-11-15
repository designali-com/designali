"use client"

import * as React from "react"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@workspace/ui/components/combobox"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"

const topics = [
  "Design systems",
  "Accessibility",
  "Motion",
  "Typography",
  "Research",
  "Prototyping",
  "Illustration",
]
const MAX = 3

export default function TopicTagsMaxThree() {
  const anchor = useComboboxAnchor()
  const [value, setValue] = React.useState<string[]>(["Accessibility"])
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel>Topics you write about</FieldLabel>
      <Combobox
        multiple
        items={topics}
        value={value}
        onValueChange={(next) => setValue(next.slice(0, MAX))}
      >
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: string[]) => (
              <React.Fragment>
                {values.map((topic) => (
                  <ComboboxChip key={topic}>{topic}</ComboboxChip>
                ))}
                <ComboboxChipsInput
                  placeholder={values.length < MAX ? "Add topic" : ""}
                  disabled={values.length >= MAX}
                />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No topics found.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem
                key={item}
                value={item}
                disabled={value.length >= MAX && !value.includes(item)}
              >
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldDescription>
        {MAX - value.length} of {MAX} remaining
      </FieldDescription>
    </Field>
  )
}
