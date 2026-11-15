"use client"

import * as React from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"

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
        The gardener was the narrator all along, and the final chapter rewinds
        the whole story from the orchard&apos;s point of view.
      </p>
    </div>
  )
}
