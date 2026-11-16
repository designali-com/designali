"use client"

import * as React from "react"

import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"
import { Textarea } from "@workspace/ui/components/textarea"

export default function AutoReplySwitch() {
  const [enabled, setEnabled] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <Label htmlFor="auto-reply">Out of office reply</Label>
          <p className="text-xs text-muted-foreground">Sent once per sender.</p>
        </div>
        <Switch
          id="auto-reply"
          checked={enabled}
          onCheckedChange={setEnabled}
        />
      </div>
      {enabled && (
        <Textarea
          aria-label="Auto-reply message"
          defaultValue="Thanks for reaching out to Designali! I'm away until Monday, Dec 2 with limited access to email. For urgent project questions, write to hello@designali.com. - Ali Imam"
          className="min-h-24"
        />
      )}
    </div>
  )
}
