"use client"

import * as React from "react"
import {
  Check as CheckIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { cn } from "@workspace/ui/lib/utils"

const answers = [
  { value: "a", label: "Kerning" },
  { value: "b", label: "Leading" },
  { value: "c", label: "Tracking" },
]
const correct = "b"

export default function QuizAnswerFeedback() {
  const [value, setValue] = React.useState<string | null>(null)
  const [checked, setChecked] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <p className="text-sm font-medium">
        What is the vertical space between lines of text called?
      </p>
      <RadioGroup
        value={value}
        onValueChange={(v) => {
          setValue(v as string)
          setChecked(false)
        }}
      >
        {answers.map((a) => (
          <Field key={a.value} orientation="horizontal">
            <RadioGroupItem
              value={a.value}
              id={"quiz-" + a.value}
              aria-invalid={
                (checked && value === a.value && a.value !== correct) ||
                undefined
              }
            />
            <FieldLabel htmlFor={"quiz-" + a.value} className="font-normal">
              {a.label}
            </FieldLabel>
            {checked && a.value === correct && (
              <CheckIcon className="ms-auto size-4 text-emerald-600" />
            )}
          </Field>
        ))}
      </RadioGroup>
      {checked && (
        <p
          className={cn(
            "text-sm",
            value === correct
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-destructive"
          )}
        >
          {value === correct
            ? "Correct! Leading comes from strips of lead."
            : "Not quite. Try again."}
        </p>
      )}
      <Button
        size="sm"
        className="self-start"
        disabled={!value}
        onClick={() => setChecked(true)}
      >
        Check answer
      </Button>
    </div>
  )
}
