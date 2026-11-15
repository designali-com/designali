"use client"

import * as React from "react"
import { TagIcon, XIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const labels = [
  { label: "Bug", value: "bug" },
  { label: "Feature", value: "feature" },
  { label: "Docs", value: "docs" },
  { label: "Performance", value: "perf" },
  { label: "Security", value: "security" },
  { label: "Good first issue", value: "first" },
]

const nameOf = (value: string) =>
  labels.find((item) => item.value === value)?.label ?? value

export default function MultipleTagsBadgesSelect() {
  const [selected, setSelected] = React.useState<string[]>(["bug", "perf"])

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Select
        items={labels}
        multiple
        value={selected}
        onValueChange={setSelected}
      >
        <SelectTrigger className="w-full" aria-label="Labels">
          <TagIcon className="text-muted-foreground" />
          <SelectValue>
            {(value: string[]) => (value.length ? "Edit labels" : "Add labels")}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {labels.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex min-h-6 flex-wrap gap-1">
        {selected.map((value) => (
          <Badge key={value} variant="secondary" className="gap-1 pe-1">
            {nameOf(value)}
            <button
              type="button"
              aria-label={"Remove " + nameOf(value)}
              className="text-muted-foreground hover:text-foreground"
              onClick={() =>
                setSelected(selected.filter((item) => item !== value))
              }
            >
              <XIcon className="size-3" />
            </button>
          </Badge>
        ))}
        {selected.length === 0 && (
          <span className="text-xs text-muted-foreground">No labels yet</span>
        )}
      </div>
    </div>
  )
}
