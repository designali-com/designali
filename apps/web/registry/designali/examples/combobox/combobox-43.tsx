"use client"

import * as React from "react"

import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import { cn } from "@workspace/ui/lib/utils"

type Theme = { name: string; bg: string; fg: string; accent: string }

const themes: Theme[] = [
  {
    name: "Paper",
    bg: "bg-muted",
    fg: "text-foreground",
    accent: "bg-foreground",
  },
  {
    name: "Midnight",
    bg: "bg-foreground",
    fg: "text-background",
    accent: "bg-primary",
  },
  {
    name: "Forest",
    bg: "bg-chart-5",
    fg: "text-chart-1",
    accent: "bg-primary",
  },
  {
    name: "Sunset",
    bg: "bg-primary/10",
    fg: "text-chart-5",
    accent: "bg-primary",
  },
]

export default function HighlightedThemePreview() {
  const [value, setValue] = React.useState<Theme | null>(themes[0]!)
  const [preview, setPreview] = React.useState<Theme | undefined>(undefined)
  const shown = preview ?? value ?? themes[0]!
  return (
    <div className="w-full max-w-xs space-y-3">
      <div
        className={cn(
          "space-y-2 border p-4 transition-colors",
          shown.bg,
          shown.fg
        )}
      >
        <p className="text-sm font-semibold">{shown.name}</p>
        <p className="text-xs opacity-80">Your editor will look like this.</p>
        <span className={cn("block h-1.5 w-16", shown.accent)} />
      </div>
      <Combobox
        items={themes}
        value={value}
        onValueChange={setValue}
        onItemHighlighted={(item) => setPreview(item)}
        onOpenChange={(open) => !open && setPreview(undefined)}
        itemToStringLabel={(t: Theme) => t.name}
      >
        <ComboboxInput placeholder="Choose theme" className="w-full" />
        <ComboboxContent>
          <ComboboxList>
            {(t: Theme) => (
              <ComboboxItem key={t.name} value={t}>
                <span className={cn("size-4 border", t.bg)} />
                {t.name}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
