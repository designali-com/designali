"use client"

import * as React from "react"
import { CheckIcon, CookieIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

export default function CookieConsentButtons() {
  const [choice, setChoice] = React.useState<string | null>(null)

  if (choice) {
    return (
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <CheckIcon className="size-3.5" />
        Preference saved: {choice}
      </p>
    )
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-3 border bg-background p-4">
      <div className="flex items-start gap-2">
        <CookieIcon className="mt-0.5 size-4 shrink-0" />
        <p className="text-xs text-muted-foreground">
          We use cookies to understand how the site is used and to improve your
          experience.
        </p>
      </div>
      <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setChoice("essential only")}
        >
          Reject all
        </Button>
        <Button variant="outline" size="sm" onClick={() => setChoice("custom")}>
          Customize
        </Button>
        <Button size="sm" onClick={() => setChoice("all cookies")}>
          Accept all
        </Button>
      </div>
    </div>
  )
}
