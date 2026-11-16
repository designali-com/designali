"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  Copy as CopyIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"

const key =
  "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIK3m9qP0xVb7rT2sYw8fLh4cN1jQeZ6uD5oG2aRk9WvX deploy@designali.com"

export default function ReadOnlyKeyTextarea() {
  const [copied, setCopied] = React.useState(false)

  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <div className="flex items-center justify-between">
        <Label htmlFor="ta-key">Deploy key</Label>
        <Button
          variant="ghost"
          size="xs"
          onClick={() => {
            void navigator.clipboard?.writeText(key)
            setCopied(true)
          }}
        >
          {copied ? (
            <CheckIcon data-icon="inline-start" />
          ) : (
            <CopyIcon data-icon="inline-start" />
          )}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
      <Textarea
        id="ta-key"
        readOnly
        value={key}
        className="resize-none bg-muted/40 font-mono break-all"
      />
    </div>
  )
}
