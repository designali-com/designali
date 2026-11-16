"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  Copy as CopyIcon,
} from "@designali/icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"
import { Spinner } from "@workspace/ui/components/spinner"

export default function AlertDnsPending() {
  const [copied, setCopied] = React.useState(false)
  const record = "verify=designali-7c21f9a4e0"

  return (
    <Alert className="max-w-md">
      <Spinner />
      <AlertTitle>Waiting for DNS verification</AlertTitle>
      <AlertDescription className="space-y-2">
        <p>
          Add this TXT record to{" "}
          <span className="font-medium text-foreground">
            studio.designali.com
          </span>
          . Changes can take up to 24 hours.
        </p>
        <div className="flex items-center gap-1 border bg-muted/50 ps-2">
          <code className="flex-1 truncate font-mono text-foreground">
            {record}
          </code>
          <Button
            size="icon-xs"
            variant="ghost"
            aria-label="Copy record"
            onClick={() => {
              navigator.clipboard?.writeText(record)
              setCopied(true)
            }}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}
