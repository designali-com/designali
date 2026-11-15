"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"

import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

export default function ThemeSwitchWithIcons() {
  const [dark, setDark] = React.useState(false)

  return (
    <div className="flex items-center gap-3 border px-4 py-3">
      <SunIcon
        className={cn(
          "size-4",
          dark ? "text-muted-foreground" : "text-foreground"
        )}
      />
      <Switch checked={dark} onCheckedChange={setDark} aria-label="Dark mode" />
      <MoonIcon
        className={cn(
          "size-4",
          dark ? "text-foreground" : "text-muted-foreground"
        )}
      />
      <span className="ms-2 w-10 text-xs text-muted-foreground">
        {dark ? "Dark" : "Light"}
      </span>
    </div>
  )
}
