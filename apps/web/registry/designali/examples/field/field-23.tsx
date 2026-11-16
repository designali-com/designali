"use client"

import * as React from "react"

import {
  FieldDescription,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

export default function NpsScoreField() {
  const [score, setScore] = React.useState<string[]>([])

  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend variant="label">
        How likely are you to recommend Designali to a friend?
      </FieldLegend>
      <ToggleGroup
        variant="outline"
        size="sm"
        value={score}
        onValueChange={(v) => setScore(v as string[])}
        className="w-full"
        aria-label="Score from 0 to 10"
      >
        {Array.from({ length: 11 }, (_, i) => (
          <ToggleGroupItem key={i} value={String(i)} className="flex-1 px-0">
            {i}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Not likely</span>
        <span>Extremely likely</span>
      </div>
      {score[0] && (
        <FieldDescription>Thanks — you picked {score[0]}.</FieldDescription>
      )}
    </FieldSet>
  )
}
