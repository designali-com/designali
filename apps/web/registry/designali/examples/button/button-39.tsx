"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

export default function InvalidSubmitButton() {
  const [email, setEmail] = React.useState("")
  const [tried, setTried] = React.useState(false)
  const invalid = tried && !email.includes("@")

  return (
    <form
      className="flex w-full max-w-xs flex-col gap-2"
      onSubmit={(event) => {
        event.preventDefault()
        setTried(true)
      }}
    >
      <Input
        type="email"
        placeholder="you@example.com"
        value={email}
        aria-invalid={invalid}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Button type="submit" variant="outline" aria-invalid={invalid}>
        Join waitlist
      </Button>
      {invalid && (
        <p className="text-xs text-destructive">
          Enter a valid email address to continue.
        </p>
      )}
    </form>
  )
}
