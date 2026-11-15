"use client"

import * as React from "react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { cn } from "@workspace/ui/lib/utils"

export default function CodeDiffViewToggleGroup() {
  const [view, setView] = React.useState("unified")

  return (
    <div className="flex w-full max-w-md flex-col border">
      <div className="flex items-center justify-between gap-2 border-b px-3 py-2">
        <span className="truncate font-mono text-xs">
          src/billing/invoice.ts
        </span>
        <ToggleGroup
          size="sm"
          spacing={0}
          variant="outline"
          value={[view]}
          onValueChange={(next) => next[0] && setView(next[0])}
        >
          <ToggleGroupItem value="unified">Unified</ToggleGroupItem>
          <ToggleGroupItem value="split">Split</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div
        className={cn(
          "grid font-mono text-[11px]",
          view === "split" ? "grid-cols-2 divide-x" : "grid-cols-1"
        )}
      >
        <div className="bg-rose-500/10 px-3 py-1.5 text-rose-700 dark:text-rose-300">
          - const total = sum(items)
        </div>
        <div className="bg-emerald-500/10 px-3 py-1.5 text-emerald-700 dark:text-emerald-300">
          + const total = sum(items) + tax
        </div>
      </div>
    </div>
  )
}
