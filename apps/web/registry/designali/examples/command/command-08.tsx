"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { cn } from "@workspace/ui/lib/utils"

const labels = [
  { id: "bug", name: "Bug", color: "bg-red-500" },
  { id: "feature", name: "Feature", color: "bg-violet-500" },
  { id: "docs", name: "Documentation", color: "bg-sky-500" },
  { id: "design", name: "Design", color: "bg-pink-500" },
  { id: "perf", name: "Performance", color: "bg-amber-500" },
  { id: "security", name: "Security", color: "bg-emerald-500" },
]

export default function MultiSelectLabels() {
  const [selected, setSelected] = React.useState<string[]>(["bug", "perf"])

  const toggle = (id: string) =>
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    )

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex min-h-6 flex-wrap gap-1">
        {selected.length === 0 ? (
          <span className="text-xs text-muted-foreground">
            No labels applied
          </span>
        ) : (
          labels
            .filter((label) => selected.includes(label.id))
            .map((label) => (
              <Badge key={label.id} variant="outline">
                <span className={cn("size-2 rounded-full", label.color)} />
                {label.name}
              </Badge>
            ))
        )}
      </div>
      <Command className="border">
        <CommandInput placeholder="Apply labels..." />
        <CommandList>
          <CommandEmpty>No labels found.</CommandEmpty>
          <CommandGroup heading={selected.length + " selected"}>
            {labels.map((label) => (
              <CommandItem
                key={label.id}
                value={label.name}
                data-checked={selected.includes(label.id)}
                onSelect={() => toggle(label.id)}
              >
                <span className={cn("size-2.5 rounded-full", label.color)} />
                <span>{label.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
