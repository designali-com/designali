"use client"

import * as React from "react"
import {
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const sizes = [
  { value: "xs", label: "XS", stock: 0 },
  { value: "s", label: "S", stock: 12 },
  { value: "m", label: "M", stock: 3 },
  { value: "l", label: "L", stock: 8 },
  { value: "xl", label: "XL", stock: 0 },
]

export default function ProductSizePicker() {
  const [size, setSize] = React.useState("")

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center gap-3">
        <span className="size-12 bg-gradient-to-br from-slate-300 to-slate-500" />
        <div>
          <p className="text-xs font-medium">Merino crew sweater</p>
          <p className="text-xs text-muted-foreground">$89.00 · Charcoal</p>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="outline" className="w-full justify-between" />
          }
        >
          {size ? "Size " + size.toUpperCase() : "Select a size"}
          <ChevronDownIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value={size} onValueChange={setSize}>
            {sizes.map((s) => (
              <DropdownMenuRadioItem
                key={s.value}
                value={s.value}
                disabled={s.stock === 0}
              >
                <span className="w-6 font-medium">{s.label}</span>
                <span className="text-muted-foreground">
                  {s.stock === 0
                    ? "Sold out"
                    : s.stock < 5
                      ? "Only " + s.stock + " left"
                      : "In stock"}
                </span>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button disabled={!size}>Add to bag</Button>
    </div>
  )
}
