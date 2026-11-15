"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

export default function WordLimitEssayTextarea() {
  const [text, setText] = React.useState("")
  const limit = 50
  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const over = words > limit

  return (
    <Field data-invalid={over || undefined} className="w-full max-w-sm">
      <FieldLabel htmlFor="ta-essay">
        Why do you want to join the residency?
      </FieldLabel>
      <Textarea
        id="ta-essay"
        value={text}
        aria-invalid={over || undefined}
        onChange={(e) => setText(e.target.value)}
        className="min-h-28"
      />
      <div className="flex justify-between text-xs">
        {over ? (
          <FieldError>Please trim {words - limit} words.</FieldError>
        ) : (
          <FieldDescription>Up to {limit} words.</FieldDescription>
        )}
        <span
          className={cn(
            "tabular-nums",
            over ? "text-destructive" : "text-muted-foreground"
          )}
        >
          {words}/{limit}
        </span>
      </div>
    </Field>
  )
}
