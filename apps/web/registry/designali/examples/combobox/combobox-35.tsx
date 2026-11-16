"use client"

import * as React from "react"
import {
  Plus as PlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
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
import { Field, FieldLabel } from "@workspace/ui/components/field"

const skills = [
  "React",
  "TypeScript",
  "Figma",
  "SQL",
  "Python",
  "Node.js",
  "Copywriting",
  "User research",
  "GraphQL",
  "Swift",
]
const suggested = ["TypeScript", "Figma", "SQL"]

export default function SkillsWithSuggestions() {
  const anchor = useComboboxAnchor()
  const [value, setValue] = React.useState<string[]>(["React"])
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel>What are you good at?</FieldLabel>
      <Combobox multiple items={skills} value={value} onValueChange={setValue}>
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: string[]) => (
              <React.Fragment>
                {values.map((skill) => (
                  <ComboboxChip key={skill}>{skill}</ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="Search skills" />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No skills found.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="text-xs text-muted-foreground">Suggested:</span>
        {suggested
          .filter((skill) => !value.includes(skill))
          .map((skill) => (
            <Button
              key={skill}
              variant="outline"
              size="xs"
              onClick={() => setValue((prev) => [...prev, skill])}
            >
              <PlusIcon />
              {skill}
            </Button>
          ))}
      </div>
    </Field>
  )
}
