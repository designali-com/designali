"use client"

import * as React from "react"
import {
  ArrowUpDown as ArrowUpDownIcon,
  Check as CheckIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"

const options = [
  { value: "relevance", label: "Most relevant" },
  { value: "newest", label: "Newest first" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
]

export default function SortOptionsDrawer() {
  const [open, setOpen] = React.useState(false)
  const [sort, setSort] = React.useState("relevance")
  const current = options.find((option) => option.value === sort)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger render={<Button variant="outline" />}>
        <ArrowUpDownIcon data-icon="inline-start" />
        {current?.label}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Sort by</DrawerTitle>
            <DrawerDescription className="sr-only">
              Choose how results are ordered
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col p-2 pb-4">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setSort(option.value)
                  setOpen(false)
                }}
                className="flex items-center justify-between px-3 py-3 text-start hover:bg-muted"
              >
                {option.label}
                {option.value === sort && <CheckIcon className="size-4" />}
              </button>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
