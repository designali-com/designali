"use client"

import * as React from "react"
import { SendIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"

export default function BulkInviteTextarea() {
  const [raw, setRaw] = React.useState(
    "maya@loom.dev, kenji@loom.dev\nnot-an-email\nzara@loom.dev"
  )
  const entries = raw.split(/[\s,;]+/).filter(Boolean)
  const isValid = (e: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)
  const valid = entries.filter(isValid)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="ta-invite">Invite by email</Label>
      <Textarea
        id="ta-invite"
        value={raw}
        onChange={(e) => setRaw(e.target.value)}
        className="min-h-20"
        placeholder="Paste emails separated by commas or new lines"
      />
      <div className="flex flex-wrap gap-1">
        {entries.map((e, i) => (
          <Badge key={i} variant={isValid(e) ? "secondary" : "destructive"}>
            {e}
          </Badge>
        ))}
      </div>
      <Button size="sm" disabled={!valid.length}>
        <SendIcon data-icon="inline-start" />
        Send {valid.length} invite{valid.length === 1 ? "" : "s"}
      </Button>
    </div>
  )
}
