"use client"

import * as React from "react"
import {
  Gauge as GaugeIcon,
} from "@designali/icons"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

export default function AlertRateLimited() {
  const [wait, setWait] = React.useState(20)

  React.useEffect(() => {
    if (wait === 0) return
    const id = setTimeout(() => setWait((w) => w - 1), 1000)
    return () => clearTimeout(id)
  }, [wait])

  return (
    <Alert variant="error" className="max-w-md">
      <GaugeIcon />
      <AlertTitle>Too many requests</AlertTitle>
      <AlertDescription>
        You&apos;ve hit the limit of 60 icon exports per hour.{" "}
        {wait > 0
          ? "Try again in " + wait + " seconds."
          : "You can try again now."}
      </AlertDescription>
      <AlertAction>
        <Button
          size="xs"
          variant="outline"
          disabled={wait > 0}
          onClick={() => setWait(20)}
        >
          Retry
        </Button>
      </AlertAction>
    </Alert>
  )
}
