"use client"

import * as React from "react"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { InputGroupAddon } from "@workspace/ui/components/input-group"
import { cn } from "@workspace/ui/lib/utils"

type Token = { name: string; className: string }

const tokens: Token[] = [
  { name: "slate-900", className: "bg-foreground" },
  { name: "indigo-600", className: "bg-chart-2" },
  { name: "emerald-500", className: "bg-primary" },
  { name: "amber-400", className: "bg-primary" },
  { name: "rose-500", className: "bg-primary" },
  { name: "sky-400", className: "bg-primary" },
]

export default function BrandColorToken() {
  const [token, setToken] = React.useState<Token | null>(tokens[1]!)
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="accent">Accent colour</FieldLabel>
      <Combobox
        items={tokens}
        value={token}
        onValueChange={setToken}
        itemToStringLabel={(t: Token) => t.name}
      >
        <ComboboxInput id="accent" className="w-full font-sans">
          <InputGroupAddon>
            <span
              className={cn(
                "size-4 border",
                token?.className ?? "bg-transparent"
              )}
            />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No tokens found.</ComboboxEmpty>
          <ComboboxList>
            {(t: Token) => (
              <ComboboxItem key={t.name} value={t} className="font-sans">
                <span className={cn("size-4 border", t.className)} />
                {t.name}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
