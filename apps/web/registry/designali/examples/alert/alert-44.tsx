"use client"

import * as React from "react"
import {
  CloudCheck as CloudCheckIcon,
} from "@designali/icons"

import { Alert, AlertTitle } from "@workspace/ui/components/alert"
import { Spinner } from "@workspace/ui/components/spinner"
import { Textarea } from "@workspace/ui/components/textarea"

export default function AlertAutosaveStatus() {
  const [status, setStatus] = React.useState<"saved" | "saving">("saved")
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const onChange = () => {
    setStatus("saving")
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setStatus("saved"), 900)
  }

  return (
    <div className="w-full max-w-sm space-y-2">
      <Alert role="status" aria-live="polite" className="border-dashed py-1.5">
        {status === "saving" ? (
          <Spinner className="size-3.5" />
        ) : (
          <CloudCheckIcon className="size-3.5" />
        )}
        <AlertTitle className="font-normal text-muted-foreground">
          {status === "saving"
            ? "Saving draft..."
            : "All changes saved to the cloud"}
        </AlertTitle>
      </Alert>
      <Textarea
        rows={4}
        onChange={onChange}
        defaultValue="Hi team, here are the notes from Tuesday's Designali client kickoff."
        aria-label="Draft"
      />
    </div>
  )
}
