"use client"

import * as React from "react"
import {
  Star as StarIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

export default function ProductReviewTextarea() {
  const [stars, setStars] = React.useState(4)
  const [text, setText] = React.useState("")
  const tooShort = text.length > 0 && text.length < 30

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div
        className="flex items-center gap-1"
        role="radiogroup"
        aria-label="Rating"
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={stars === n}
            aria-label={n + " stars"}
            onClick={() => setStars(n)}
          >
            <StarIcon
              className={cn(
                "size-5",
                n <= stars
                  ? "fill-primary text-primary"
                  : "text-muted-foreground"
              )}
            />
          </button>
        ))}
      </div>
      <Field data-invalid={tooShort || undefined}>
        <FieldLabel htmlFor="pr-text">Your review</FieldLabel>
        <Textarea
          id="pr-text"
          value={text}
          aria-invalid={tooShort || undefined}
          onChange={(e) => setText(e.target.value)}
          placeholder="How did the Designali portfolio template work out?"
        />
        {tooShort ? (
          <FieldError>{30 - text.length} more characters needed.</FieldError>
        ) : (
          <FieldDescription>Minimum 30 characters.</FieldDescription>
        )}
      </Field>
      <Button size="sm" disabled={text.length < 30}>
        Post review
      </Button>
    </div>
  )
}
