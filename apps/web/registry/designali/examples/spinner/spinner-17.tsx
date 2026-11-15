"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Spinner } from "@workspace/ui/components/spinner"

export default function SubmittingFormSpinner() {
  const [pending, setPending] = React.useState(false)

  return (
    <form
      className="w-full max-w-sm border p-4"
      onSubmit={(e) => {
        e.preventDefault()
        setPending(true)
        setTimeout(() => setPending(false), 1800)
      }}
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="login-email">Email</FieldLabel>
          <Input
            id="login-email"
            type="email"
            defaultValue="ines@quillpost.io"
            disabled={pending}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="login-password">Password</FieldLabel>
          <Input
            id="login-password"
            type="password"
            defaultValue="hunter22"
            disabled={pending}
          />
        </Field>
        <Button type="submit" disabled={pending}>
          {pending && <Spinner data-icon="inline-start" />}
          {pending ? "Signing in..." : "Sign in"}
        </Button>
      </FieldGroup>
    </form>
  )
}
