"use client"

import {
  Building2 as Building2Icon,
  Search as SearchIcon,
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

const customers = [
  "Dalim Agency",
  "Dalim Fonts",
  "Dalim Graphic",
  "Dalim Icons",
  "Dalim Tools",
  "Dalim Works",
]

export default function CustomerSearchAddon() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={customers}>
        <ComboboxInput
          placeholder="Search customers"
          showTrigger={false}
          showClear
          className="w-full"
        >
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No customers match.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                <Building2Icon className="text-muted-foreground" />
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
