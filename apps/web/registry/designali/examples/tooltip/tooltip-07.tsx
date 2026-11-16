"use client"

import * as React from "react"
import {
  Sparkles as SparklesIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Switch } from "@workspace/ui/components/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function ControlledTooltip() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col items-center gap-6">
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger render={<Button variant="outline" />}>
          <SparklesIcon data-icon="inline-start" />
          Generate summary
        </TooltipTrigger>
        <TooltipContent>Uses 1 AI credit</TooltipContent>
      </Tooltip>
      <label className="flex items-center gap-2 text-xs text-muted-foreground">
        <Switch checked={open} onCheckedChange={setOpen} />
        Show tooltip
      </label>
    </div>
  )
}
