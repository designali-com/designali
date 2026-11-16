"use client"

import * as React from "react"
import {
  CloudCheck as CloudCheckIcon,
} from "@designali/icons"

import { Label } from "@workspace/ui/components/label"
import { Spinner } from "@workspace/ui/components/spinner"
import { Textarea } from "@workspace/ui/components/textarea"

export default function AutosaveTextarea() {
  const [value, setValue] = React.useState(
    "Share the Designali homepage moodboard with the client."
  )
  const [status, setStatus] = React.useState<"saved" | "saving" | "idle">(
    "saved"
  )

  React.useEffect(() => {
    if (status !== "idle") return
    const save = setTimeout(() => setStatus("saving"), 600)
    return () => clearTimeout(save)
  }, [value, status])

  React.useEffect(() => {
    if (status !== "saving") return
    const done = setTimeout(() => setStatus("saved"), 700)
    return () => clearTimeout(done)
  }, [status])

  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <div className="flex items-center justify-between">
        <Label htmlFor="ta-autosave">Private notes</Label>
        <span
          className="flex items-center gap-1 text-xs text-muted-foreground"
          aria-live="polite"
        >
          {status === "saving" && (
            <>
              <Spinner className="size-3" />
              Saving…
            </>
          )}
          {status === "saved" && (
            <>
              <CloudCheckIcon className="size-3.5" />
              Saved
            </>
          )}
          {status === "idle" && "Editing"}
        </span>
      </div>
      <Textarea
        id="ta-autosave"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          setStatus("idle")
        }}
      />
    </div>
  )
}
