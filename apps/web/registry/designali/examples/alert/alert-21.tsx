"use client"

import * as React from "react"
import { CheckIcon, CopyIcon, KeyRoundIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

const codes = [
  "4F7K-92QD",
  "M8TZ-1LXA",
  "Q3VB-7HNP",
  "C6RW-0YJE",
  "T2GS-5KMU",
  "H9DN-8PFC",
]

export default function AlertRecoveryCodes() {
  const [copied, setCopied] = React.useState(false)

  const copy = async () => {
    await navigator.clipboard?.writeText(codes.join("\n"))
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <Alert variant="warning" className="max-w-md">
      <KeyRoundIcon />
      <AlertTitle>Save your recovery codes</AlertTitle>
      <AlertDescription className="space-y-2">
        <p>
          Each code works once. Store them somewhere safe, you won&apos;t see
          them again.
        </p>
        <div className="grid grid-cols-2 gap-1 border bg-background p-2 font-mono text-foreground sm:grid-cols-3">
          {codes.map((code) => (
            <span key={code}>{code}</span>
          ))}
        </div>
        <Button size="xs" variant="outline" onClick={copy}>
          {copied ? (
            <CheckIcon data-icon="inline-start" />
          ) : (
            <CopyIcon data-icon="inline-start" />
          )}
          {copied ? "Copied" : "Copy codes"}
        </Button>
      </AlertDescription>
    </Alert>
  )
}
