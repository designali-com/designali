"use client"

import * as React from "react"
import {
  CircleCheck as CircleCheckIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import { Spinner } from "@workspace/ui/components/spinner"
import { Textarea } from "@workspace/ui/components/textarea"

export default function SubmittingTextarea() {
  const [state, setState] = React.useState<"idle" | "sending" | "sent">("idle")

  function submit() {
    setState("sending")
    setTimeout(() => setState("sent"), 1500)
  }

  if (state === "sent") {
    return (
      <div className="flex w-full max-w-sm flex-col items-center gap-2 border p-6 text-center text-xs">
        <CircleCheckIcon className="size-6 text-emerald-600" />
        Thanks! Ali reads every Designali feature request.
        <Button variant="outline" size="xs" onClick={() => setState("idle")}>
          Send another
        </Button>
      </div>
    )
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="ta-submit">Suggest a feature</Label>
      <Textarea
        id="ta-submit"
        disabled={state === "sending"}
        defaultValue="Add more pricing page blocks to Designali."
      />
      <Button size="sm" onClick={submit} disabled={state === "sending"}>
        {state === "sending" && <Spinner data-icon="inline-start" />}
        {state === "sending" ? "Sending…" : "Submit"}
      </Button>
    </div>
  )
}
