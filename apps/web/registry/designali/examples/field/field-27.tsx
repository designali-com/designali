"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"

export default function TermsAgreementField() {
  const [agreed, setAgreed] = React.useState(false)
  const [tried, setTried] = React.useState(false)
  const invalid = tried && !agreed

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        setTried(true)
      }}
    >
      <Field orientation="horizontal" data-invalid={invalid}>
        <Checkbox
          id="terms-agree"
          checked={agreed}
          aria-invalid={invalid}
          onCheckedChange={setAgreed}
        />
        <FieldContent>
          <FieldLabel htmlFor="terms-agree">I agree to the terms</FieldLabel>
          <FieldDescription>
            By creating an account you accept our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </FieldDescription>
          {invalid && (
            <FieldError>You need to accept the terms to continue.</FieldError>
          )}
        </FieldContent>
      </Field>
      <Button type="submit">
        {tried && agreed ? "Account created" : "Create account"}
      </Button>
    </form>
  )
}
