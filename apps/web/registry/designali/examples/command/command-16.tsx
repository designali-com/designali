"use client"

import * as React from "react"
import { MonitorIcon, MoonIcon, PaletteIcon, SunIcon } from "lucide-react"

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@workspace/ui/components/command"

const modes = [
  { id: "light", label: "Light", icon: SunIcon },
  { id: "dark", label: "Dark", icon: MoonIcon },
  { id: "system", label: "System", icon: MonitorIcon },
]

export default function ThemeModeSwitcher() {
  const [mode, setMode] = React.useState("system")

  return (
    <Command className="w-full max-w-60 border">
      <CommandList>
        <CommandGroup heading="Appearance">
          {modes.map((item) => (
            <CommandItem
              key={item.id}
              data-checked={mode === item.id}
              onSelect={() => setMode(item.id)}
            >
              <item.icon />
              <span>{item.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Accent">
          <CommandItem>
            <PaletteIcon />
            <span>Customize colors...</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
