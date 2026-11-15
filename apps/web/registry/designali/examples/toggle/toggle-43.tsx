"use client"

import * as React from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"

import { Toggle } from "@workspace/ui/components/toggle"

export default function MaskBalanceToggle() {
  const [hidden, setHidden] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border bg-gradient-to-br from-muted/60 to-background p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">
          Main account
        </span>
        <Toggle
          size="sm"
          pressed={hidden}
          onPressedChange={setHidden}
          aria-label={hidden ? "Show balance" : "Hide balance"}
        >
          {hidden ? <EyeOffIcon /> : <EyeIcon />}
        </Toggle>
      </div>
      <p className="text-3xl font-semibold tabular-nums">
        {hidden ? "€ ••••••" : "€ 12,480.55"}
      </p>
      <p className="text-xs text-muted-foreground">
        {hidden ? "•••• •••• •••• ••••" : "DE89 3704 0044 0532 0130 00"}
      </p>
    </div>
  )
}
