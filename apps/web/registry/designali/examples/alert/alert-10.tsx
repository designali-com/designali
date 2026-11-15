"use client"

import * as React from "react"
import { MegaphoneIcon, RotateCcwIcon, XIcon } from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

export default function AlertDismissible() {
  const [open, setOpen] = React.useState(true)

  if (!open) {
    return (
      <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
        <RotateCcwIcon data-icon="inline-start" />
        Show announcement
      </Button>
    )
  }

  return (
    <Alert variant="info" className="max-w-md">
      <MegaphoneIcon />
      <AlertTitle>Dark mode is here</AlertTitle>
      <AlertDescription>
        Switch themes from the avatar menu, or follow your system setting.
      </AlertDescription>
      <AlertAction>
        <Button
          size="icon-xs"
          variant="ghost"
          aria-label="Dismiss"
          onClick={() => setOpen(false)}
        >
          <XIcon />
        </Button>
      </AlertAction>
    </Alert>
  )
}
