"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function RequiredFieldsFormInputs() {
  const [submitted, setSubmitted] = React.useState(false)
  const [values, setValues] = React.useState({ company: "", vat: "" })
  const companyError = submitted && !values.company

  return (
    <form
      noValidate
      className="w-full max-w-sm"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <FieldGroup>
        <Field data-invalid={companyError}>
          <FieldLabel htmlFor="req-company">
            Company name <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="req-company"
            required
            aria-invalid={companyError}
            value={values.company}
            onChange={(e) => setValues({ ...values, company: e.target.value })}
          />
          {companyError && <FieldError>Company name is required.</FieldError>}
        </Field>
        <Field>
          <FieldLabel htmlFor="req-vat">
            VAT number{" "}
            <span className="font-normal text-muted-foreground">
              (optional)
            </span>
          </FieldLabel>
          <Input
            id="req-vat"
            value={values.vat}
            onChange={(e) => setValues({ ...values, vat: e.target.value })}
          />
        </Field>
        <Button type="submit">Continue to payment</Button>
      </FieldGroup>
    </form>
  )
}
