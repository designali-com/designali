"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

const titles = [
  "Product Designer",
  "Product Manager",
  "Frontend Engineer",
  "Backend Engineer",
  "Data Analyst",
  "Engineering Manager",
  "Customer Success Lead",
]

export default function JobTitleField() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <Field>
        <FieldLabel htmlFor="full-name">Full name</FieldLabel>
        <Input id="full-name" defaultValue="Hana Okada" />
      </Field>
      <Field>
        <FieldLabel htmlFor="job-title">Job title</FieldLabel>
        <Combobox items={titles}>
          <ComboboxInput
            id="job-title"
            placeholder="Search titles"
            className="w-full"
          />
          <ComboboxContent>
            <ComboboxEmpty>No matching titles.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <FieldDescription>
          Shown on your profile and in mentions.
        </FieldDescription>
      </Field>
    </FieldGroup>
  )
}
