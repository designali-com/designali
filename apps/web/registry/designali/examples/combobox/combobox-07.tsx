"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"

const frameworks = [
  "Templates",
  "Blocks",
  "UI Designs",
  "Icons",
  "Logos",
] as const

export function ComboboxInvalid() {
  return (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="Select a Designali product" aria-invalid="true" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}