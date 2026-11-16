"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

export default function ControlledSwitchStatus() {
  const [enabled, setEnabled] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="vacation-mode">Studio booking pause</Label>
        <Switch
          id="vacation-mode"
          checked={enabled}
          onCheckedChange={setEnabled}
        />
      </div>
      <p className="text-xs text-muted-foreground" aria-live="polite">
        {enabled
          ? "Designali is paused for new projects. Clients can browse but can't book."
          : "Designali is open and accepting new projects."}
      </p>
      <Button variant="outline" size="sm" onClick={() => setEnabled((v) => !v)}>
        Toggle from outside
      </Button>
    </div>
  )
}
