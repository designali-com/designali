"use client"

import * as React from "react"
import {
  Hash as HashIcon,
  MessageSquare as MessageSquareIcon,
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

const channels = [
  "#general",
  "#design-crit",
  "#eng-platform",
  "#launch-q4",
  "#random",
  "#support-escalations",
]

export default function QuickJumpAutoHighlight() {
  const [active, setActive] = React.useState("#general")
  return (
    <div className="w-full max-w-xs space-y-3">
      <Combobox
        items={channels}
        autoHighlight
        value={null}
        onValueChange={(next) => next && setActive(next)}
      >
        <ComboboxInput
          placeholder="Jump to channel"
          className="w-full"
          showTrigger={false}
        >
          <InputGroupAddon>
            <HashIcon />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No channels found.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <div className="flex items-center gap-2 border bg-muted/40 px-3 py-2 text-sm">
        <MessageSquareIcon className="size-4 text-muted-foreground" />
        Viewing <span className="font-medium">{active}</span>
      </div>
    </div>
  )
}
