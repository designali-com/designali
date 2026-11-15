"use client"

import * as React from "react"

import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

const LIMIT = 60

export default function CharacterLimitInput() {
  const [value, setValue] = React.useState(
    "Spring sale: 20% off all annual plans"
  )
  const remaining = LIMIT - value.length

  return (
    <Field className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor="headline">Banner headline</FieldLabel>
        <span
          className={cn(
            "text-xs tabular-nums",
            remaining <= 10 ? "text-destructive" : "text-muted-foreground"
          )}
        >
          {remaining} left
        </span>
      </div>
      <Input
        id="headline"
        maxLength={LIMIT}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Field>
  )
}
