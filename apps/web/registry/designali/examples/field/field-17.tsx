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

const LIMIT = 140

export default function CharacterLimitTextarea() {
  const [text, setText] = React.useState(
    "Shipping a calmer, faster dashboard this week. Huge thanks to everyone who tested the beta!"
  )
  const over = text.length > LIMIT

  return (
    <Field data-invalid={over} className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor="status-update">Status update</FieldLabel>
        <span
          className={cn(
            "text-xs tabular-nums",
            over ? "text-destructive" : "text-muted-foreground"
          )}
        >
          {text.length}/{LIMIT}
        </span>
      </div>
      <Textarea
        id="status-update"
        rows={3}
        value={text}
        aria-invalid={over}
        onChange={(e) => setText(e.target.value)}
        className="resize-none"
      />
      {over ? (
        <FieldError>Trim {text.length - LIMIT} characters to post.</FieldError>
      ) : (
        <FieldDescription>
          Posted to your team&apos;s activity feed.
        </FieldDescription>
      )}
    </Field>
  )
}
