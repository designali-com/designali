"use client"

import * as React from "react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const scores = Array.from({ length: 11 }, (_, i) => String(i))

export default function NpsScoreToggleGroup() {
  const [score, setScore] = React.useState<string[]>([])

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <span className="text-sm font-medium">
        How likely are you to recommend Fieldnote to a friend?
      </span>
      <ToggleGroup
        variant="outline"
        spacing={0}
        size="sm"
        value={score}
        onValueChange={setScore}
        className="w-full"
      >
        {scores.map((s) => (
          <ToggleGroupItem key={s} value={s} className="min-w-0 flex-1 px-0">
            {s}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Not likely</span>
        <span>{score[0] ? "You picked " + score[0] : "No answer yet"}</span>
        <span>Very likely</span>
      </div>
    </div>
  )
}
