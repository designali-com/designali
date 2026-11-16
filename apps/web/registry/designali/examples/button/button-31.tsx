"use client"

import * as React from "react"
import {
  Moon as MoonIcon,
  Sun as SunIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

export default function ThemeSwitchIconButton() {
  const [dark, setDark] = React.useState(false)

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setDark(!dark)}
      className="relative"
    >
      <SunIcon
        className={cn(
          "absolute transition-all",
          dark ? "scale-0 -rotate-90" : "scale-100 rotate-0"
        )}
      />
      <MoonIcon
        className={cn(
          "absolute transition-all",
          dark ? "scale-100 rotate-0" : "scale-0 rotate-90"
        )}
      />
    </Button>
  )
}
