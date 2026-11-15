"use client"

import * as React from "react"
import { CheckIcon, CircleIcon } from "lucide-react"

import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

const rules = [
  { label: "At least 10 characters", test: (v: string) => v.length >= 10 },
  { label: "One uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "One number", test: (v: string) => /\d/.test(v) },
  { label: "One symbol", test: (v: string) => /[^A-Za-z0-9]/.test(v) },
]
const colors = [
  "bg-destructive",
  "bg-destructive",
  "bg-amber-500",
  "bg-lime-500",
  "bg-emerald-600",
]

export default function PasswordStrengthInput() {
  const [value, setValue] = React.useState("Harbor2025")
  const score = rules.filter((r) => r.test(value)).length

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="new-password">New password</FieldLabel>
      <Input
        id="new-password"
        type="password"
        autoComplete="new-password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex gap-1">
        {rules.map((r, i) => (
          <div
            key={r.label}
            className={cn("h-1 flex-1", i < score ? colors[score] : "bg-muted")}
          />
        ))}
      </div>
      <ul className="flex flex-col gap-1 text-xs">
        {rules.map((r) => (
          <li
            key={r.label}
            className={cn(
              "flex items-center gap-1.5",
              r.test(value) ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {r.test(value) ? (
              <CheckIcon className="size-3.5 text-emerald-600" />
            ) : (
              <CircleIcon className="size-3.5" />
            )}
            {r.label}
          </li>
        ))}
      </ul>
    </Field>
  )
}
