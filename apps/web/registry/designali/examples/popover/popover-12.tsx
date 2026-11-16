"use client"

import * as React from "react"
import {
  ArrowDown as ArrowDownIcon,
  ArrowUpDown as ArrowUpDownIcon,
  ArrowUp as ArrowUpIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { Separator } from "@workspace/ui/components/separator"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const fields = [
  { value: "updated", label: "Last updated" },
  { value: "created", label: "Date created" },
  { value: "name", label: "Name" },
  { value: "size", label: "File size" },
]

export default function SortOrderPopover() {
  const [field, setField] = React.useState("updated")
  const [direction, setDirection] = React.useState("desc")
  const label = fields.find((f) => f.value === field)?.label

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <ArrowUpDownIcon data-icon="inline-start" />
        {label}
      </PopoverTrigger>
      <PopoverContent className="w-56" align="start">
        <PopoverTitle>Sort by</PopoverTitle>
        <RadioGroup
          value={field}
          onValueChange={(value) => setField(String(value))}
        >
          {fields.map((f) => (
            <Label
              key={f.value}
              className="flex items-center gap-2 font-normal"
            >
              <RadioGroupItem value={f.value} />
              {f.label}
            </Label>
          ))}
        </RadioGroup>
        <Separator />
        <ToggleGroup
          variant="outline"
          size="sm"
          spacing={0}
          className="w-full"
          value={[direction]}
          onValueChange={(value) =>
            value.length && setDirection(String(value[0]))
          }
        >
          <ToggleGroupItem value="asc" className="flex-1">
            <ArrowUpIcon /> Asc
          </ToggleGroupItem>
          <ToggleGroupItem value="desc" className="flex-1">
            <ArrowDownIcon /> Desc
          </ToggleGroupItem>
        </ToggleGroup>
      </PopoverContent>
    </Popover>
  )
}
