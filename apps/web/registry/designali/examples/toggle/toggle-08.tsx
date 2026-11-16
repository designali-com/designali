"use client"

import * as React from "react"
import {
  Star as StarIcon,
} from "@designali/icons"

import {
  ButtonGroup,
  ButtonGroupText,
} from "@workspace/ui/components/button-group"
import { Toggle } from "@workspace/ui/components/toggle"

export default function StarRepositoryToggle() {
  const [starred, setStarred] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-3 border p-4">
      <div className="min-w-0">
        <p className="truncate font-mono text-sm">designali/icons</p>
        <p className="text-xs text-muted-foreground">
          4000+ React icons from Designali
        </p>
      </div>
      <ButtonGroup>
        <Toggle
          variant="outline"
          size="sm"
          pressed={starred}
          onPressedChange={setStarred}
          aria-label="Star repository"
        >
          <StarIcon className="group-aria-pressed/toggle:fill-amber-400 group-aria-pressed/toggle:text-amber-400" />
          {starred ? "Starred" : "Star"}
        </Toggle>
        <ButtonGroupText className="h-7 text-xs tabular-nums">
          {starred ? "2.4k" : "2.3k"}
        </ButtonGroupText>
      </ButtonGroup>
    </div>
  )
}
