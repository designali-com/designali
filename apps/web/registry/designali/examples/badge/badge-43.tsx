"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

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
        className="cursor-pointer font-mono"
        render={
          <button type="button" onClick={copy} aria-label="Copy customer ID" />
        }
      >
        {id}
        {copied ? (
          <CheckIcon data-icon="inline-end" className="text-emerald-600" />
        ) : (
          <CopyIcon data-icon="inline-end" />
        )}
      </Badge>
    </div>
  )
}
