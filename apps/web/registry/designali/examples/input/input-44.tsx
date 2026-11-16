"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

const parts = [
  { key: "dd", label: "Day", placeholder: "DD", max: 2, width: "w-12" },
  { key: "mm", label: "Month", placeholder: "MM", max: 2, width: "w-12" },
  { key: "yyyy", label: "Year", placeholder: "YYYY", max: 4, width: "w-20" },
]

export default function DateOfBirthInputs() {
  const refs = React.useRef<(HTMLInputElement | null)[]>([])

  return (
    <FieldSet className="w-fit">
      <FieldLegend variant="label">Date of birth</FieldLegend>
      <div className="flex items-end gap-2">
        {parts.map((p, i) => (
          <Field key={p.key} className="w-auto">
            <FieldLabel
              htmlFor={"dob-" + p.key}
              className="text-muted-foreground"
            >
              {p.label}
            </FieldLabel>
            <Input
              id={"dob-" + p.key}
              ref={(el) => {
                refs.current[i] = el
              }}
              inputMode="numeric"
              placeholder={p.placeholder}
              maxLength={p.max}
              className={cn("text-center tabular-nums", p.width)}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "")
                if (e.target.value.length === p.max)
                  refs.current[i + 1]?.focus()
              }}
            />
          </Field>
        ))}
      </div>
      <FieldDescription>
        You must be 18 or older to open a designali.com account.
      </FieldDescription>
    </FieldSet>
  )
}
