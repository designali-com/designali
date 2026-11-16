"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Spinner } from "@workspace/ui/components/spinner"

export default function LoadingSubmitFields() {
  const [state, setState] = React.useState<"idle" | "loading" | "done">("idle")

  return (
    <form
      className="w-full max-w-sm"
      onSubmit={(e) => {
        e.preventDefault()
        setState("loading")
        setTimeout(() => setState("done"), 1500)
      }}
    >
      <FieldSet disabled={state !== "idle"}>
        <FieldLegend>Get the Designali newsletter</FieldLegend>
        <FieldDescription>
          Design essays from Ali Imam and new Designali blocks. No spam.
        </FieldDescription>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="news-email" className="sr-only">
            Email
          </FieldLabel>
          <Input
            id="news-email"
            type="email"
            required
            placeholder="you@example.com"
          />
          <Button type="submit" className="w-28">
            {state === "loading" && <Spinner data-icon="inline-start" />}
            {state === "done"
              ? "Subscribed"
              : state === "loading"
                ? "Joining"
                : "Subscribe"}
          </Button>
        </Field>
      </FieldSet>
    </form>
  )
}
