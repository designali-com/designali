"use client"

import * as React from "react"
import {
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

export default function VoteButtons() {
  const [vote, setVote] = React.useState<1 | 0 | -1>(0)
  const score = 132 + vote

  return (
    <div className="flex w-full max-w-sm gap-3 border p-3">
      <div className="flex flex-col items-center">
        <Button
          variant={vote === 1 ? "secondary" : "ghost"}
          size="icon-sm"
          aria-label="Upvote"
          aria-pressed={vote === 1}
          onClick={() => setVote(vote === 1 ? 0 : 1)}
        >
          <ChevronUpIcon />
        </Button>
        <span className="text-xs font-semibold tabular-nums">{score}</span>
        <Button
          variant={vote === -1 ? "secondary" : "ghost"}
          size="icon-sm"
          aria-label="Downvote"
          aria-pressed={vote === -1}
          onClick={() => setVote(vote === -1 ? 0 : -1)}
        >
          <ChevronDownIcon />
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium">
          How do you organise design tokens across brands?
        </p>
        <p className="text-xs text-muted-foreground">
          Asked by tomasz.k · 24 answers
        </p>
      </div>
    </div>
  )
}
