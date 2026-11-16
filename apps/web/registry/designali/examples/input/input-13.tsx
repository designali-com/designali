"use client"

import * as React from "react"
import {
  CircleCheck as CircleCheckIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

export default function NewsletterSignupInput() {
  const [done, setDone] = React.useState(false)

  return (
    <div className="w-full max-w-sm border p-4">
      <p className="text-sm font-medium">Designali Notes</p>
      <p className="mb-3 text-xs text-muted-foreground">
        One email a week with new templates, blocks and design tips.
      </p>
      {done ? (
        <p className="flex items-center gap-2 text-xs text-primary">
          <CircleCheckIcon className="size-4" />
          You&apos;re subscribed. Check your inbox to confirm.
        </p>
      ) : (
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            setDone(true)
          }}
        >
          <Input
            type="email"
            required
            placeholder="you@example.com"
            aria-label="Email address"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      )}
    </div>
  )
}
