"use client"

import * as React from "react"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@workspace/ui/components/combobox"
import { cn } from "@workspace/ui/lib/utils"

type IssueLabel = { name: string; color: string }

const labels: IssueLabel[] = [
  { name: "bug", color: "bg-red-500" },
  { name: "feature", color: "bg-emerald-500" },
  { name: "design", color: "bg-violet-500" },
  { name: "docs", color: "bg-sky-500" },
  { name: "performance", color: "bg-amber-500" },
]

export default function IssueLabelChips() {
  const anchor = useComboboxAnchor()
  return (
    <div className="w-full max-w-xs">
      <Combobox
        multiple
        items={labels}
        defaultValue={[labels[0]!, labels[2]!]}
        itemToStringLabel={(label: IssueLabel) => label.name}
        isItemEqualToValue={(a, b) => a.name === b.name}
      >
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: IssueLabel[]) => (
              <React.Fragment>
                {values.map((label) => (
                  <ComboboxChip key={label.name}>
                    <span className={cn("size-2 rounded-full", label.color)} />
                    {label.name}
                  </ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="Add label" />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No labels found.</ComboboxEmpty>
          <ComboboxList>
            {(label: IssueLabel) => (
              <ComboboxItem key={label.name} value={label}>
                <span className={cn("size-2.5 rounded-full", label.color)} />
                {label.name}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
