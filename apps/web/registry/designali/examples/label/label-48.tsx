"use client"

import * as React from "react"

import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"
import { Textarea } from "@workspace/ui/components/textarea"

export default function DependentFieldLabel() {
  const [enabled, setEnabled] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center gap-2">
        <Switch
          id="auto-reply"
          checked={enabled}
          onCheckedChange={setEnabled}
        />
        <Label htmlFor="auto-reply">Send an out-of-office reply</Label>
      </div>
      <div className="group grid gap-2" data-disabled={!enabled}>
        <Label htmlFor="auto-reply-msg">Reply message</Label>
        <Textarea
          id="auto-reply-msg"
          disabled={!enabled}
          defaultValue="Thanks for reaching out to Designali. I'm away until Jan 6 and will reply when I'm back. – Ali"
          className="min-h-20"
        />
      </div>
    </div>
  )
}
