"use client"

import * as React from "react"
import {
  CropIcon,
  FlipHorizontalIcon,
  RotateCwIcon,
  SunMediumIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Switch } from "@workspace/ui/components/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const tools = [
  { label: "Crop", icon: CropIcon },
  { label: "Rotate", icon: RotateCwIcon },
  { label: "Flip", icon: FlipHorizontalIcon },
  { label: "Adjust", icon: SunMediumIcon },
]

export default function HintsToggleTooltip() {
  const [hints, setHints] = React.useState(true)

  return (
    <TooltipProvider>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-1 border p-1">
          {tools.map((t) => (
            <Tooltip key={t.label} disabled={!hints}>
              <TooltipTrigger
                render={
                  <Button variant="ghost" size="icon" aria-label={t.label} />
                }
              >
                <t.icon />
              </TooltipTrigger>
              <TooltipContent>{t.label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
        <label className="flex items-center gap-2 text-xs text-muted-foreground">
          <Switch checked={hints} onCheckedChange={setHints} />
          Show hints
        </label>
      </div>
    </TooltipProvider>
  )
}
