"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const skills = [
  { label: "TypeScript", value: "typescript" },
  { label: "React", value: "react" },
  { label: "Node.js", value: "node" },
  { label: "PostgreSQL", value: "postgres" },
  { label: "Figma", value: "figma" },
  { label: "Rust", value: "rust" },
]

const labelFor = (value: string) =>
  skills.find((skill) => skill.value === value)?.label ?? value

export default function MultipleSkillsSelect() {
  const [value, setValue] = React.useState<string[]>(["typescript", "react"])

  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="skills">Skills</FieldLabel>
      <Select items={skills} multiple value={value} onValueChange={setValue}>
        <SelectTrigger id="skills" className="w-full">
          <SelectValue>
            {(selected: string[]) =>
              selected.length === 0
                ? "Select skills"
                : selected.length <= 2
                  ? selected.map(labelFor).join(", ")
                  : selected.length + " skills selected"
            }
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {skills.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldDescription>
        Pick the stack for your Designali project.
      </FieldDescription>
    </Field>
  )
}
