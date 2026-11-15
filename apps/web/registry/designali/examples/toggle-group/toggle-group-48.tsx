"use client"

import * as React from "react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const options = [
  { value: "tue", label: "Tuesday offsite", votes: 6 },
  { value: "wed", label: "Wednesday offsite", votes: 9 },
  { value: "fri", label: "Friday offsite", votes: 4 },
]

export default function PollVoteToggleGroup() {
  const [vote, setVote] = React.useState<string[]>([])
  const total = options.reduce((n, o) => n + o.votes, 0) + (vote.length ? 1 : 0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <span className="text-sm font-medium">
        When should we hold the Q3 offsite?
      </span>
      <ToggleGroup
        orientation="vertical"
        variant="outline"
        spacing={1}
        value={vote}
        onValueChange={setVote}
        className="w-full"
      >
        {options.map((o) => {
          const count = o.votes + (vote[0] === o.value ? 1 : 0)
          return (
            <ToggleGroupItem
              key={o.value}
              value={o.value}
              className="relative h-9 justify-between overflow-hidden"
            >
              {vote.length ? (
                <span
                  className="absolute inset-y-0 start-0 bg-primary/10"
                  style={{ width: (count / total) * 100 + "%" }}
                />
              ) : null}
              <span className="relative">{o.label}</span>
              {vote.length ? (
                <span className="relative tabular-nums">
                  {Math.round((count / total) * 100)}%
                </span>
              ) : null}
            </ToggleGroupItem>
          )
        })}
      </ToggleGroup>
    </div>
  )
}
