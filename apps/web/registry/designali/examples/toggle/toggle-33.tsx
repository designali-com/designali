"use client"

import * as React from "react"
import {
  Focus as FocusIcon,
  SpellCheck as SpellCheckIcon,
} from "@designali/icons"

import { Toggle } from "@workspace/ui/components/toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function TooltipStateToggle() {
  const [spell, setSpell] = React.useState(true)
  const [focus, setFocus] = React.useState(false)

  return (
    <div className="flex items-center gap-1 border p-1">
      <Tooltip>
        <TooltipTrigger
          render={
            <Toggle
              size="sm"
              pressed={spell}
              onPressedChange={setSpell}
              aria-label="Spellcheck"
            />
          }
        >
          <SpellCheckIcon />
        </TooltipTrigger>
        <TooltipContent>
          {spell ? "Spellcheck on" : "Spellcheck off"}
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={
            <Toggle
              size="sm"
              pressed={focus}
              onPressedChange={setFocus}
              aria-label="Focus mode"
            />
          }
        >
          <FocusIcon />
        </TooltipTrigger>
        <TooltipContent>
          {focus ? "Exit focus mode" : "Enter focus mode"}
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
