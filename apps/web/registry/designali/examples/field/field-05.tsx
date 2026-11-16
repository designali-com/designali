"use client"

import * as React from "react"
import {
  CircleCheck as CircleCheckIcon,
  Circle as CircleIcon,
} from "@designali/icons"

import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

const rules = [
  { label: "At least 8 characters", test: (v: string) => v.length >= 8 },
  { label: "One uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "One number", test: (v: string) => /\d/.test(v) },
  { label: "One symbol", test: (v: string) => /[^A-Za-z0-9]/.test(v) },
]

export default function PasswordRequirementsField() {
  const [value, setValue] = React.useState("Designali7")

  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="new-password">New password</FieldLabel>
      <Input
        id="new-password"
        type="password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ul className="flex flex-col gap-1 text-xs">
        {rules.map((rule) => {
          const ok = rule.test(value)
          return (
            <li
              key={rule.label}
              className={cn(
                "flex items-center gap-1.5",
                ok ? "text-emerald-600" : "text-muted-foreground"
              )}
            >
              {ok ? (
                <CircleCheckIcon className="size-3.5" />
              ) : (
                <CircleIcon className="size-3.5" />
              )}
              {rule.label}
            </li>
          )
        })}
      </ul>
    </Field>
  )
}
