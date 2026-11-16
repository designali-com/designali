"use client"

import * as React from "react"
import {
  CircleCheck as CircleCheckIcon,
} from "@designali/icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Spinner } from "@workspace/ui/components/spinner"

export default function AlertSaveFeedback() {
  const [state, setState] = React.useState<"idle" | "saving" | "saved">("idle")

  const save = () => {
    setState("saving")
    setTimeout(() => setState("saved"), 1200)
  }

  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor="workspace">Workspace name</Label>
        <Input
          id="workspace"
          defaultValue="Designali Studio"
          onChange={() => setState("idle")}
        />
      </div>
      <Button size="sm" onClick={save} disabled={state === "saving"}>
        {state === "saving" && <Spinner data-icon="inline-start" />}
        {state === "saving" ? "Saving..." : "Save changes"}
      </Button>
      {state === "saved" && (
        <Alert variant="success">
          <CircleCheckIcon />
          <AlertTitle>Changes saved</AlertTitle>
          <AlertDescription>
            Everyone on the Designali studio team will see the new name.
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}
