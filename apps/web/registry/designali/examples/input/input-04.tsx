"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function EmailValidationInput() {
  const [value, setValue] = React.useState("ali@designali")
  const [touched, setTouched] = React.useState(true)
  const invalid = touched && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  return (
    <Field data-invalid={invalid} className="w-full max-w-sm">
      <FieldLabel htmlFor="email-validation">Work email</FieldLabel>
      <Input
        id="email-validation"
        type="email"
        value={value}
        aria-invalid={invalid}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setTouched(true)}
      />
      {invalid ? (
        <FieldError>
          Enter a valid email address, like hello@designali.com.
        </FieldError>
      ) : (
        <FieldDescription>
          We&apos;ll send the invite to this address.
        </FieldDescription>
      )}
    </Field>
  )
}
