"use client"

import * as React from "react"
import {
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
} from "@designali/icons"

import { Toggle } from "@workspace/ui/components/toggle"
import { cn } from "@workspace/ui/lib/utils"

export default function SpoilerRevealToggle() {
  const [revealed, setRevealed] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Review: The Glass Orchard</span>
        <Toggle
          size="sm"
          variant="outline"
          pressed={revealed}
          onPressedChange={setRevealed}
        >
          {revealed ? <EyeIcon /> : <EyeOffIcon />}
          Spoilers
        </Toggle>
      </div>
      <p
        className={cn(
          "text-sm text-muted-foreground transition",
          !revealed && "blur-sm select-none"
        )}
        aria-hidden={!revealed}
      >
        The next Designali drop ships 50 new blocks and a fresh set of
        @designali/icons for the dashboard templates.
      </p>
    </div>
  )
}
