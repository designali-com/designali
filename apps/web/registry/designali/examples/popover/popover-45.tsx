"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  ChevronRight as ChevronRightIcon,
  Funnel as FilterIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Separator } from "@workspace/ui/components/separator"

const ranges = ["Today", "Last 7 days", "This month", "This quarter"]

export default function NestedFilterPopover() {
  const [range, setRange] = React.useState("Last 7 days")
  const [innerOpen, setInnerOpen] = React.useState(false)

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <FilterIcon data-icon="inline-start" /> Filters
      </PopoverTrigger>
      <PopoverContent className="w-72" align="start">
        <PopoverTitle>Show tasks where</PopoverTitle>
        <div className="flex items-center gap-2 text-xs">
          <span className="w-16 text-muted-foreground">Created</span>
          <Popover open={innerOpen} onOpenChange={setInnerOpen}>
            <PopoverTrigger
              render={
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 justify-between"
                />
              }
            >
              {range}
              <ChevronRightIcon data-icon="inline-end" />
            </PopoverTrigger>
            <PopoverContent
              side="right"
              align="start"
              className="w-40 gap-0 p-1"
            >
              {ranges.map((r) => (
                <Button
                  key={r}
                  variant="ghost"
                  size="sm"
                  className="justify-between"
                  onClick={() => (setRange(r), setInnerOpen(false))}
                >
                  {r}
                  {r === range && <CheckIcon />}
                </Button>
              ))}
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="w-16 text-muted-foreground">Owner</span>
          <Badge variant="secondary">Me</Badge>
        </div>
        <Separator />
        <Button size="sm">Apply filters</Button>
      </PopoverContent>
    </Popover>
  )
}
