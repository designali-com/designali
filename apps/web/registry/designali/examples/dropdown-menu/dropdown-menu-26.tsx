"use client"

import * as React from "react"
import { CalendarIcon, CalendarRangeIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const presets = [
  { value: "today", label: "Today" },
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "qtd", label: "Quarter to date" },
  { value: "ytd", label: "Year to date" },
]

export default function DateRangePresetMenu() {
  const [range, setRange] = React.useState("30d")
  const label = presets.find((p) => p.value === range)?.label ?? "Custom range"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline" className="w-48 justify-start" />}
      >
        <CalendarIcon data-icon="inline-start" />
        <span className="flex-1 text-start">{label}</span>
        <ChevronDownIcon className="text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuRadioGroup value={range} onValueChange={setRange}>
          {presets.map((p) => (
            <DropdownMenuRadioItem key={p.value} value={p.value}>
              {p.label}
            </DropdownMenuRadioItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="custom">
            <CalendarRangeIcon />
            Custom range...
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
