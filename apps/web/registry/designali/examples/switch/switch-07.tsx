"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Switch } from "@workspace/ui/components/switch"

export default function RequiredConsentSwitch() {
  const [accepted, setAccepted] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const invalid = submitted && !accepted

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-4 border p-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <Field orientation="horizontal" data-invalid={invalid}>
        <FieldContent>
          <FieldLabel htmlFor="dpa">
            Accept data processing agreement
          </FieldLabel>
          <FieldDescription>
            Required before inviting teammates.
          </FieldDescription>
          {invalid && (
            <FieldError>
              You need to accept the agreement to continue.
            </FieldError>
          )}
        </FieldContent>
        <Switch
          id="dpa"
          checked={accepted}
          onCheckedChange={setAccepted}
          aria-invalid={invalid}
        />
      </Field>
      <Button type="submit" size="sm">
        {submitted && accepted ? "Agreement accepted" : "Continue"}
      </Button>
    </form>
  )
}
