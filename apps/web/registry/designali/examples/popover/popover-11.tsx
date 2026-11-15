"use client"

import * as React from "react"
import { ListFilterIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Separator } from "@workspace/ui/components/separator"

const statuses = [
  { value: "active", label: "Active", count: 128 },
  { value: "trial", label: "Trial", count: 42 },
  { value: "past_due", label: "Past due", count: 9 },
  { value: "canceled", label: "Canceled", count: 31 },
]

export default function StatusFilterPopover() {
  const [selected, setSelected] = React.useState<string[]>(["active"])

  const toggle = (value: string, checked: boolean) =>
    setSelected((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    )

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button variant="outline" size="sm" className="border-dashed" />
        }
      >
        <ListFilterIcon data-icon="inline-start" />
        Status
        {selected.length > 0 && (
          <Badge variant="secondary" className="ms-1">
            {selected.length}
          </Badge>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-56" align="start">
        <PopoverTitle>Filter by status</PopoverTitle>
        <div className="flex flex-col gap-2">
          {statuses.map((status) => (
            <Label
              key={status.value}
              className="flex items-center gap-2 font-normal"
            >
              <Checkbox
                checked={selected.includes(status.value)}
                onCheckedChange={(checked) =>
                  toggle(status.value, checked === true)
                }
              />
              <span className="flex-1">{status.label}</span>
              <span className="text-[11px] text-muted-foreground tabular-nums">
                {status.count}
              </span>
            </Label>
          ))}
        </div>
        <Separator />
        <Button
          variant="ghost"
          size="sm"
          disabled={!selected.length}
          onClick={() => setSelected([])}
        >
          Clear filters
        </Button>
      </PopoverContent>
    </Popover>
  )
}
