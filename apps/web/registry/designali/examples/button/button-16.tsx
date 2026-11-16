"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  Copy as CopyIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

export default function CopyToClipboardButton() {
  const [copied, setCopied] = React.useState(false)
  const link = "https://www.designali.com/join/k7Qx2"

  function copy() {
    void navigator.clipboard?.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <div className="h-8 min-w-0 flex-1 truncate border bg-muted/40 px-2.5 py-2 font-mono text-xs">
        {link}
      </div>
      <Button variant="outline" size="sm" onClick={copy} aria-live="polite">
        {copied ? (
          <CheckIcon data-icon="inline-start" />
        ) : (
          <CopyIcon data-icon="inline-start" />
        )}
        {copied ? "Copied" : "Copy"}
      </Button>
    </div>
  )
}
