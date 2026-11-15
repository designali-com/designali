"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const regions = ["NA", "EU", "APAC", "LATAM", "MEA"]

export default function SelectAllToggleGroup() {
  const [selected, setSelected] = React.useState<string[]>(["EU"])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">
          Regions ({selected.length}/{regions.length})
        </span>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="xs"
            onClick={() => setSelected(regions)}
          >
            Select all
          </Button>
          <Button
            variant="ghost"
            size="xs"
            onClick={() => setSelected([])}
            disabled={!selected.length}
          >
            Clear
          </Button>
        </div>
      </div>
      <ToggleGroup
        multiple
        variant="outline"
        spacing={1}
        value={selected}
        onValueChange={setSelected}
        className="flex-wrap"
      >
        {regions.map((r) => (
          <ToggleGroupItem key={r} value={r}>
            {r}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}
