"use client"

import * as React from "react"
import { ALargeSmallIcon, ContrastIcon, PauseCircleIcon } from "lucide-react"

import { Toggle } from "@workspace/ui/components/toggle"
import { cn } from "@workspace/ui/lib/utils"

export default function AccessibilityPreferenceToggles() {
  const [large, setLarge] = React.useState(false)
  const [contrast, setContrast] = React.useState(false)
  const [motion, setMotion] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex flex-wrap gap-2">
        <Toggle
          variant="outline"
          size="sm"
          pressed={large}
          onPressedChange={setLarge}
        >
          <ALargeSmallIcon />
          Larger text
        </Toggle>
        <Toggle
          variant="outline"
          size="sm"
          pressed={contrast}
          onPressedChange={setContrast}
        >
          <ContrastIcon />
          High contrast
        </Toggle>
        <Toggle
          variant="outline"
          size="sm"
          pressed={motion}
          onPressedChange={setMotion}
        >
          <PauseCircleIcon />
          Reduce motion
        </Toggle>
      </div>
      <div
        className={cn(
          "border p-3",
          contrast && "border-foreground bg-foreground text-background"
        )}
      >
        <p className={cn("font-medium", large ? "text-lg" : "text-sm")}>
          Your appointment is confirmed
        </p>
        <p
          className={cn(
            large ? "text-base" : "text-xs",
            contrast ? "text-background" : "text-muted-foreground"
          )}
        >
          Tue, 14 Nov at 09:15 with Dr. Alvarez
        </p>
        <div
          className={cn(
            "mt-2 h-1 w-1/2 bg-primary",
            !motion && "animate-pulse"
          )}
        />
      </div>
    </div>
  )
}
