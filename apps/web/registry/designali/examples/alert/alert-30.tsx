"use client"

import * as React from "react"
import { CircleCheckIcon, LinkIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

export default function AlertAutoHide() {
  const [visible, setVisible] = React.useState(false)
  const [draining, setDraining] = React.useState(false)

  React.useEffect(() => {
    if (!visible) return
    const start = setTimeout(() => setDraining(true), 30)
    const hide = setTimeout(() => {
      setVisible(false)
      setDraining(false)
    }, 4000)
    return () => {
      clearTimeout(start)
      clearTimeout(hide)
    }
  }, [visible])

  return (
    <div className="relative flex h-40 w-full max-w-sm flex-col items-center justify-center border border-dashed">
      <Button size="sm" variant="outline" onClick={() => setVisible(true)}>
        <LinkIcon data-icon="inline-start" />
        Copy invite link
      </Button>
      {visible && (
        <Alert
          variant="success"
          className="absolute inset-x-3 bottom-3 w-auto overflow-hidden bg-background shadow-md"
        >
          <CircleCheckIcon />
          <AlertTitle>Invite link copied</AlertTitle>
          <AlertDescription>
            Anyone with the link can join as a viewer.
          </AlertDescription>
          <span
            aria-hidden
            className={cn(
              "absolute start-0 bottom-0 h-0.5 w-full origin-left bg-foreground/40 transition-transform duration-[3900ms] ease-linear",
              draining ? "scale-x-0" : "scale-x-100"
            )}
          />
        </Alert>
      )}
    </div>
  )
}
