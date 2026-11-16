"use client"

import * as React from "react"
import {
  Type as TypeIcon,
} from "@designali/icons"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import { InputGroupAddon } from "@workspace/ui/components/input-group"

type Font = { name: string; stack: string; category: string }

const fonts: Font[] = [
  {
    name: "System Sans",
    stack: "ui-sans-serif, system-ui, sans-serif",
    category: "Sans",
  },
  { name: "Georgia", stack: "Georgia, serif", category: "Serif" },
  {
    name: "Palatino",
    stack: "Palatino, 'Book Antiqua', serif",
    category: "Serif",
  },
  { name: "Courier", stack: "'Courier New', monospace", category: "Mono" },
  { name: "Trebuchet", stack: "'Trebuchet MS', sans-serif", category: "Sans" },
]

export default function FontFamilyPicker() {
  const [font, setFont] = React.useState<Font | null>(fonts[1]!)
  return (
    <div className="w-full max-w-xs space-y-3">
      <Combobox
        items={fonts}
        value={font}
        onValueChange={setFont}
        itemToStringLabel={(f: Font) => f.name}
      >
        <ComboboxInput placeholder="Font family" className="w-full">
          <InputGroupAddon>
            <TypeIcon />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No fonts found.</ComboboxEmpty>
          <ComboboxList>
            {(f: Font) => (
              <ComboboxItem key={f.name} value={f}>
                <span
                  className="flex-1 text-sm"
                  style={{ fontFamily: f.stack }}
                >
                  {f.name}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {f.category}
                </span>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <p className="border p-3 text-lg" style={{ fontFamily: font?.stack }}>
        The quick brown fox jumps over the lazy dog.
      </p>
    </div>
  )
}
