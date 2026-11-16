"use client"

import * as React from "react"
import {
  MonitorSmartphone as MonitorSmartphoneIcon,
} from "@designali/icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

export default function AlertNewSignIn() {
  const [answer, setAnswer] = React.useState<"me" | "secure" | null>(null)

  return (
    <Alert
      variant={answer === "secure" ? "error" : "default"}
      className="max-w-md"
    >
      <MonitorSmartphoneIcon />
      <AlertTitle>New sign-in to your designali.com account</AlertTitle>
      <AlertDescription>
        <dl className="my-1 grid grid-cols-[auto_1fr] gap-x-3">
          <dt>Device</dt>
          <dd className="text-foreground">Firefox on Windows</dd>
          <dt>Location</dt>
          <dd className="text-foreground">New Delhi, IN</dd>
          <dt>Time</dt>
          <dd className="text-foreground">Today at 08:14</dd>
        </dl>
        {answer === null ? (
          <div className="mt-2 flex gap-1.5">
            <Button size="xs" variant="outline" onClick={() => setAnswer("me")}>
              This was me
            </Button>
            <Button
              size="xs"
              variant="destructive"
              onClick={() => setAnswer("secure")}
            >
              Secure account
            </Button>
          </div>
        ) : (
          <p className="mt-2 text-foreground">
            {answer === "me"
              ? "Thanks, we’ll remember this device."
              : "We signed out all sessions. Check your email to reset your password."}
          </p>
        )}
      </AlertDescription>
    </Alert>
  )
}
