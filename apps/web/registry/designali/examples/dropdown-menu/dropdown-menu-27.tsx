"use client"

import * as React from "react"
import { ListFilterIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { cn } from "@workspace/ui/lib/utils"

const labels = [
  { name: "Bug", count: 24, color: "bg-red-500" },
  { name: "Feature", count: 41, color: "bg-violet-500" },
  { name: "Docs", count: 9, color: "bg-sky-500" },
  { name: "Performance", count: 6, color: "bg-amber-500" },
]

export default function LabelFilterWithCounts() {
  const [selected, setSelected] = React.useState<string[]>(["Bug"])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" size="sm" className="border-dashed" />
        }
      >
        <ListFilterIcon data-icon="inline-start" />
        Labels
        {selected.length > 0 && (
          <Badge variant="secondary">{selected.length}</Badge>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          {labels.map((label) => (
            <DropdownMenuCheckboxItem
              key={label.name}
              checked={selected.includes(label.name)}
              onCheckedChange={(checked) =>
                setSelected((prev) =>
                  checked
                    ? [...prev, label.name]
                    : prev.filter((n) => n !== label.name)
                )
              }
            >
              <span className={cn("size-2 rounded-full", label.color)} />
              {label.name}
              <span className="ms-auto text-muted-foreground tabular-nums">
                {label.count}
              </span>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          disabled={selected.length === 0}
          onClick={() => setSelected([])}
          className="justify-center"
        >
          Clear filters
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
