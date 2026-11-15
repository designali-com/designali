"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function TermsRequiredInvalid() {
  const [accepted, setAccepted] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const invalid = submitted && !accepted

  return (
    <form
      className="flex w-full max-w-xs flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <Field>
        <FieldLabel htmlFor="signup-email">Work email</FieldLabel>
        <Input id="signup-email" type="email" placeholder="you@company.com" />
      </Field>
      <Field orientation="horizontal" data-invalid={invalid || undefined}>
        <Checkbox
          id="signup-terms"
          checked={accepted}
          onCheckedChange={setAccepted}
          aria-invalid={invalid || undefined}
        />
        <FieldContent>
          <FieldLabel htmlFor="signup-terms">
            I agree to the Terms of Service
          </FieldLabel>
          {invalid && (
            <FieldError>You must accept the terms to continue.</FieldError>
          )}
        </FieldContent>
      </Field>
      <Button type="submit">Create account</Button>
      {submitted && accepted && (
        <p className="text-xs text-muted-foreground">
          Account created. Check your inbox.
        </p>
      )}
    </form>
  )
}
