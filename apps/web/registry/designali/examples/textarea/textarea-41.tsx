"use client"

import * as React from "react"
import { GitCommitHorizontalIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

export default function CommitMessageTextarea() {
  const [summary, setSummary] = React.useState("Fix rounding in cart totals")
  const [body, setBody] = React.useState("")
  const longLine = body.split("\n").some((l) => l.length > 72)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-3">
      <div className="flex items-center gap-2">
        <Input
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          aria-label="Summary"
          className="font-mono"
        />
        <span
          className={cn(
            "w-8 text-end text-xs tabular-nums",
            summary.length > 50 ? "text-destructive" : "text-muted-foreground"
          )}
        >
          {50 - summary.length}
        </span>
      </div>
      <Textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Explain why this change is needed (optional)"
        aria-label="Description"
        className="min-h-20 font-mono"
      />
      {longLine && (
        <p className="text-xs text-amber-600">
          Some lines are longer than 72 characters.
        </p>
      )}
      <Button size="sm" disabled={!summary.trim()}>
        <GitCommitHorizontalIcon data-icon="inline-start" />
        Commit to main
      </Button>
    </div>
  )
}
