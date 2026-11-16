"use client"

import * as React from "react"
import {
  WandSparkles as WandSparklesIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function FeatureDiscoveryTooltip() {
  const [open, setOpen] = React.useState(true)

  return (
    <div className="flex flex-col items-center gap-3 pt-10">
      <Tooltip open={open} onOpenChange={(next) => next && setOpen(next)}>
        <TooltipTrigger render={<Button variant="outline" />}>
          <WandSparklesIcon data-icon="inline-start" />
          Auto layout
        </TooltipTrigger>
        <TooltipContent className="gap-2">
          New in Designali: arrange blocks in one click
          <Button size="xs" variant="secondary" onClick={() => setOpen(false)}>
            Got it
          </Button>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
