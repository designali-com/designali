"use client"

import * as React from "react"
import { ChevronRightIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Toggle } from "@workspace/ui/components/toggle"

const items = [
  { name: "Linen tote bag", qty: 2, price: "$36.00" },
  { name: "Beeswax wraps (set of 3)", qty: 1, price: "$18.00" },
]

export default function ExpandableRowToggle() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center gap-2 px-3 py-2">
        <Toggle
          size="sm"
          pressed={open}
          onPressedChange={setOpen}
          aria-label={open ? "Collapse order" : "Expand order"}
          aria-expanded={open}
        >
          <ChevronRightIcon className="transition-transform group-aria-pressed/toggle:rotate-90" />
        </Toggle>
        <span className="flex-1 font-mono text-xs">#ORD-7721</span>
        <Badge variant="secondary">Shipped</Badge>
        <span className="text-sm tabular-nums">$54.00</span>
      </div>
      {open && (
        <div className="border-t bg-muted/30 px-3 py-2">
          {items.map((i) => (
            <div key={i.name} className="flex justify-between py-1 text-xs">
              <span>
                {i.qty} x {i.name}
              </span>
              <span className="tabular-nums">{i.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
