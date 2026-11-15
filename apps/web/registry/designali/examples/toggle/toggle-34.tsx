"use client"

import * as React from "react"
import { MoonStarIcon } from "lucide-react"

import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import { Toggle } from "@workspace/ui/components/toggle"
import { cn } from "@workspace/ui/lib/utils"

export default function KeyboardShortcutToggle() {
  const [zen, setZen] = React.useState(false)

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.altKey && e.key.toLowerCase() === "z") {
        e.preventDefault()
        setZen((v) => !v)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center justify-between gap-2">
        <Toggle variant="outline" pressed={zen} onPressedChange={setZen}>
          <MoonStarIcon />
          Zen mode
        </Toggle>
        <KbdGroup>
          <Kbd>Alt</Kbd>
          <Kbd>Z</Kbd>
        </KbdGroup>
      </div>
      <p className={cn("text-sm transition-opacity", zen && "opacity-30")}>
        Sidebar, comments and toolbars {zen ? "are hidden" : "are visible"}.
      </p>
    </div>
  )
}
