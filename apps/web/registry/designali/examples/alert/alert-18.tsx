"use client"

import * as React from "react"
import {
  Mail as MailIcon,
} from "@designali/icons"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

export default function AlertVerifyEmail() {
  const [cooldown, setCooldown] = React.useState(0)

  React.useEffect(() => {
    if (cooldown === 0) return
    const id = setTimeout(() => setCooldown((c) => c - 1), 1000)
    return () => clearTimeout(id)
  }, [cooldown])

  return (
    <Alert variant="info" className="max-w-md">
      <MailIcon />
      <AlertTitle>Confirm your email address</AlertTitle>
      <AlertDescription>
        We sent a link to{" "}
        <span className="font-medium text-foreground">
          sara@example.com
        </span>
        . Check your inbox to unlock your Designali downloads.
      </AlertDescription>
      <AlertAction>
        <Button
          size="xs"
          variant="outline"
          disabled={cooldown > 0}
          onClick={() => setCooldown(30)}
        >
          {cooldown > 0 ? "Resend in " + cooldown + "s" : "Resend"}
        </Button>
      </AlertAction>
    </Alert>
  )
}
