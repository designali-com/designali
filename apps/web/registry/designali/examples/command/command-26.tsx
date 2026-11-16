"use client"

import * as React from "react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { cn } from "@workspace/ui/lib/utils"

const fonts = [
  { label: "Inter", className: "font-sans", category: "Sans serif" },
  { label: "Source Serif", className: "font-serif", category: "Serif" },
  { label: "JetBrains Mono", className: "font-mono", category: "Monospace" },
  {
    label: "Display Bold",
    className: "font-sans font-black tracking-tight",
    category: "Display",
  },
  {
    label: "Light Italic",
    className: "font-serif font-light italic",
    category: "Serif",
  },
]

export default function FontFamilyPicker() {
  const [font, setFont] = React.useState("Inter")
  const active = fonts.find((f) => f.label === font)

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <p className={cn("border p-3 text-lg", active?.className)}>
        design se code tak
      </p>
      <Command className="border">
        <CommandInput placeholder="Search fonts..." />
        <CommandList>
          <CommandEmpty>No font found.</CommandEmpty>
          <CommandGroup heading="Fonts">
            {fonts.map((f) => (
              <CommandItem
                key={f.label}
                value={f.label}
                keywords={[f.category]}
                data-checked={f.label === font}
                onSelect={() => setFont(f.label)}
              >
                <span className={cn("text-sm", f.className)}>{f.label}</span>
                <span className="text-[11px] text-muted-foreground">
                  {f.category}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
