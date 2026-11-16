"use client"

import * as React from "react"
import {
  ArrowUpDown as ArrowUpDownIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const sorts = [
  { value: "recent", label: "Most recent" },
  { value: "oldest", label: "Oldest first" },
  { value: "name", label: "Name A-Z" },
  { value: "size", label: "File size" },
]

export default function SortOrderPopover() {
  const [sort, setSort] = React.useState("recent")
  const current = sorts.find((s) => s.value === sort)

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <ArrowUpDownIcon data-icon="inline-start" />
        {current?.label}
      </PopoverTrigger>
      <PopoverContent className="w-52">
        <PopoverHeader>
          <PopoverTitle>Sort files by</PopoverTitle>
        </PopoverHeader>
        <RadioGroup
          value={sort}
          onValueChange={(v) => setSort(v as string)}
          className="gap-3"
        >
          {sorts.map((s) => (
            <Field key={s.value} orientation="horizontal">
              <RadioGroupItem value={s.value} id={"sort-" + s.value} />
              <FieldLabel htmlFor={"sort-" + s.value} className="font-normal">
                {s.label}
              </FieldLabel>
            </Field>
          ))}
        </RadioGroup>
      </PopoverContent>
    </Popover>
  )
}
