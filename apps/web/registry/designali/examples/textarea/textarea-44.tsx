"use client"

import * as React from "react"

import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"
import { Textarea } from "@workspace/ui/components/textarea"

export default function CustomCssTextarea() {
  const [enabled, setEnabled] = React.useState(false)

  return (
    <div className="flex w-full max-w-md flex-col gap-3 border p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Label htmlFor="css-switch">Custom CSS</Label>
          <p className="text-xs text-muted-foreground">
            Applied to your Designali docs pages only.
          </p>
        </div>
        <Switch
          id="css-switch"
          checked={enabled}
          onCheckedChange={setEnabled}
        />
      </div>
      <Textarea
        disabled={!enabled}
        spellCheck={false}
        aria-label="Custom CSS"
        className="min-h-28 font-mono"
        defaultValue={
          ".hc-header {\n  background: #0f172a;\n}\n.hc-article h2 {\n  letter-spacing: -0.01em;\n}"
        }
      />
    </div>
  )
}
