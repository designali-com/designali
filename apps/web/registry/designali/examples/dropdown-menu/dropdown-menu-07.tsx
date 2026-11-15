"use client"

import * as React from "react"
import { ArrowUpDownIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const options = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "name", label: "Name A–Z" },
  { value: "size", label: "Largest size" },
]

export default function SortOrderRadioMenu() {
  const [sort, setSort] = React.useState("newest")
  const current = options.find((option) => option.value === sort)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        <ArrowUpDownIcon data-icon="inline-start" />
        Sort: {current?.label}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
          <DropdownMenuLabel>Sort by</DropdownMenuLabel>
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
