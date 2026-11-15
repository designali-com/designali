"use client"

import * as React from "react"
import { CircleCheckIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Spinner } from "@workspace/ui/components/spinner"

export default function AsyncSubmitButton() {
  const [state, setState] = React.useState<"idle" | "loading" | "done">("idle")

  function submit() {
    setState("loading")
    setTimeout(() => {
      setState("done")
      setTimeout(() => setState("idle"), 1500)
    }, 1200)
  }

  return (
    <Button className="w-40" disabled={state === "loading"} onClick={submit}>
      {state === "loading" && <Spinner data-icon="inline-start" />}
      {state === "done" && <CircleCheckIcon data-icon="inline-start" />}
      {state === "idle" && "Publish post"}
      {state === "loading" && "Publishing..."}
      {state === "done" && "Published"}
    </Button>
  )
}
