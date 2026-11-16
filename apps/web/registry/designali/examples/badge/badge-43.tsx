"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  Copy as CopyIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"

export default function CopyableIdBadge() {
  const [copied, setCopied] = React.useState(false)
  const id = "cus_8Fq2LmZ1xT"

  function copy() {
    navigator.clipboard?.writeText(id)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-muted-foreground">Customer ID</span>
      <Badge
        variant="outline"
        className="cursor-pointer font-sans"
        render={
          <button type="button" onClick={copy} aria-label="Copy customer ID" />
        }
      >
        {id}
        {copied ? (
          <CheckIcon data-icon="inline-end" className="text-primary" />
        ) : (
          <CopyIcon data-icon="inline-end" />
        )}
      </Badge>
    </div>
  )
}
