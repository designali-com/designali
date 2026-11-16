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
import { Textarea } from "@workspace/ui/components/textarea"

export default function ValidateOnSubmitForm() {
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [sent, setSent] = React.useState(false)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const next: Record<string, string> = {}
        if (!String(data.get("name")).trim())
          next.name = "Please tell Ali your name."
        if (!/^\S+@\S+\.\S+$/.test(String(data.get("email"))))
          next.email = "Enter a valid email."
        if (String(data.get("message")).trim().length < 10)
          next.message = "Message needs at least 10 characters."
        setErrors(next)
        setSent(Object.keys(next).length === 0)
      }}
      noValidate
      className="w-full max-w-sm"
    >
      <FieldGroup>
        <Field data-invalid={!!errors.name}>
          <FieldLabel htmlFor="contact-name">Name</FieldLabel>
          <Input id="contact-name" name="name" aria-invalid={!!errors.name} />
          <FieldError>{errors.name}</FieldError>
        </Field>
        <Field data-invalid={!!errors.email}>
          <FieldLabel htmlFor="contact-email">Email</FieldLabel>
          <Input
            id="contact-email"
            name="email"
            type="email"
            aria-invalid={!!errors.email}
          />
          <FieldError>{errors.email}</FieldError>
        </Field>
        <Field data-invalid={!!errors.message}>
          <FieldLabel htmlFor="contact-message">Message</FieldLabel>
          <Textarea
            id="contact-message"
            name="message"
            rows={3}
            aria-invalid={!!errors.message}
            className="resize-none"
          />
          <FieldError>{errors.message}</FieldError>
        </Field>
        <Field orientation="horizontal">
          <Button type="submit">Message Ali</Button>
          {sent && (
            <span className="text-xs text-primary">
              Thanks! Ali will reply from hello@designali.com within a day.
            </span>
          )}
        </Field>
      </FieldGroup>
    </form>
  )
}
