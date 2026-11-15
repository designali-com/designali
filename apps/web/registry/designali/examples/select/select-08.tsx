"use client"

import * as React from "react"
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { cn } from "@workspace/ui/lib/utils"

const themes = [
  { label: "Light", value: "light", icon: SunIcon },
  { label: "Dark", value: "dark", icon: MoonIcon },
  { label: "System", value: "system", icon: MonitorIcon },
]

export default function ThemePreviewSelect() {
  const [theme, setTheme] = React.useState<string | null>("dark")

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div
        className={cn(
          "flex h-24 flex-col gap-2 border p-3",
          theme === "light" && "bg-white",
          theme === "dark" && "bg-neutral-900",
          theme === "system" && "bg-linear-to-r from-white to-neutral-900"
        )}
      >
        <div className="h-2 w-1/2 bg-neutral-400/60" />
        <div className="h-2 w-3/4 bg-neutral-400/40" />
        <div className="mt-auto h-5 w-16 bg-neutral-500/70" />
      </div>
      <Select items={themes} value={theme} onValueChange={setTheme}>
        <SelectTrigger className="w-full" aria-label="Theme">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {themes.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <item.icon />
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
