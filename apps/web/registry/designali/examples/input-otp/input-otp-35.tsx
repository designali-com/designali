"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldError, FieldLabel } from "@workspace/ui/components/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"
import { Kbd } from "@workspace/ui/components/kbd"

export default function FormSubmitWithValidation() {
  const [value, setValue] = React.useState("")
  const [error, setError] = React.useState("")
  const [sent, setSent] = React.useState(false)

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (value.length < 6) {
      setError("Enter all 6 digits.")
      return
    }
    setError("")
    setSent(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xs flex-col gap-3"
    >
      <Field data-invalid={!!error || undefined}>
        <FieldLabel htmlFor="otp-form">One-time code</FieldLabel>
        <InputOTP
          id="otp-form"
          maxLength={6}
          value={value}
          onChange={(next) => {
            setValue(next)
            setSent(false)
          }}
        >
          <InputOTPGroup>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <InputOTPSlot
                key={index}
                index={index}
                aria-invalid={!!error || undefined}
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
        {error ? <FieldError>{error}</FieldError> : null}
      </Field>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          Press <Kbd>Enter</Kbd> to submit
        </span>
        <Button type="submit" size="sm">
          {sent ? "Submitted" : "Submit"}
        </Button>
      </div>
    </form>
  )
}
