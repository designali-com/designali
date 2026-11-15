"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import { InputGroupAddon } from "@workspace/ui/components/input-group"
import { Kbd } from "@workspace/ui/components/kbd"

const pages = [
  "Dashboard",
  "Customers",
  "Invoices",
  "Subscriptions",
  "Reports",
  "Settings",
  "API keys",
]

export default function KeyboardHintFooter() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={pages} autoHighlight>
        <ComboboxInput
          placeholder="Go to page..."
          className="w-full"
          showTrigger={false}
        >
          <InputGroupAddon align="inline-end">
            <Kbd>⌘K</Kbd>
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No pages found.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
          <div className="flex items-center gap-3 border-t px-2 py-1.5 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Kbd>↑</Kbd>
              <Kbd>↓</Kbd>
              navigate
            </span>
            <span className="flex items-center gap-1">
              <Kbd>↵</Kbd>
              open
            </span>
            <span className="flex items-center gap-1">
              <Kbd>esc</Kbd>
              close
            </span>
          </div>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
