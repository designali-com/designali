"use client"

import * as React from "react"
import {
  SquareCheck as SquareCheckIcon,
  Square as SquareIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Toggle } from "@workspace/ui/components/toggle"

export default function InvalidConsentToggle() {
  const [agreed, setAgreed] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const invalid = submitted && !agreed

  return (
    <form
      className="flex w-full max-w-xs flex-col gap-3 border p-4"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <p className="text-sm font-medium">Before you publish</p>
      <Toggle
        variant="outline"
        pressed={agreed}
        onPressedChange={setAgreed}
        aria-invalid={invalid || undefined}
        aria-describedby="consent-error"
        className="justify-start"
      >
        {agreed ? <SquareCheckIcon /> : <SquareIcon />}I own the rights to this
        content
      </Toggle>
      {invalid && (
        <p id="consent-error" className="text-xs text-destructive">
          You need to confirm this to publish.
        </p>
      )}
      <Button type="submit">
        {submitted && agreed ? "Published" : "Publish"}
      </Button>
    </form>
  )
}
