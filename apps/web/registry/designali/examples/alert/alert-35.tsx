"use client"

import * as React from "react"
import { ClockIcon, LockIcon } from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

export default function AlertPermissionDenied() {
  const [requested, setRequested] = React.useState(false)

  return (
    <Alert variant={requested ? "info" : "error"} className="max-w-md">
      {requested ? <ClockIcon /> : <LockIcon />}
      <AlertTitle>
        {requested ? "Request sent" : "You don’t have access to this report"}
      </AlertTitle>
      <AlertDescription>
        {requested
          ? "We’ll email you when Daniel Okafor responds."
          : "Revenue by region is shared with Finance only. Ask the owner, Daniel Okafor, for access."}
      </AlertDescription>
      {!requested && (
        <AlertAction>
          <Button size="xs" onClick={() => setRequested(true)}>
            Request access
          </Button>
        </AlertAction>
      )}
    </Alert>
  )
}
