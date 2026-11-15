"use client"

import * as React from "react"
import { TimerIcon } from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

export default function AlertSessionExpiring() {
  const [seconds, setSeconds] = React.useState(119)

  React.useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(id)
  }, [])

  const mm = Math.floor(seconds / 60)
  const ss = String(seconds % 60).padStart(2, "0")

  return (
    <Alert variant="warning" className="max-w-md">
      <TimerIcon />
      <AlertTitle>
        Your session expires in {mm}:{ss}
      </AlertTitle>
      <AlertDescription>
        You&apos;ll be signed out to keep your account secure.
      </AlertDescription>
      <AlertAction>
        <Button size="xs" onClick={() => setSeconds(15 * 60)}>
          Stay signed in
        </Button>
      </AlertAction>
    </Alert>
  )
}
