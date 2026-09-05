"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Toggle } from "@workspace/ui/components/toggle"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === "dark"

  return (
    <div className="flex flex-col justify-center">
      <Toggle
        className="group size-9 h-14 w-14 cursor-pointer bg-secondary data-[state=on]:bg-transparent data-[state=on]:hover:bg-muted dark:bg-secondary"
        pressed={isDark}
        onPressedChange={() => setTheme(isDark ? "light" : "dark")}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        <Moon
          size={16}
          className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
          aria-hidden="true"
        />

        <Sun
          size={16}
          className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
          aria-hidden="true"
        />
      </Toggle>
    </div>
  )
}
