"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  ChevronDown as ChevronDownIcon,
  Minus as MinusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const rows = [
  { feature: "Templates", free: "3", pro: "All" },
  { feature: "Blocks", free: "50", pro: "460+" },
  { feature: "Figma files", free: false, pro: true },
  { feature: "Commercial license", free: false, pro: true },
  { feature: "Landing pages", free: false, pro: true },
  { feature: "Priority support", free: false, pro: true },
]

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "string") return <span>{value}</span>
  return value ? (
    <CheckIcon className="size-4" />
  ) : (
    <MinusIcon className="size-4 text-muted-foreground" />
  )
}

export default function CompareAllFeatures() {
  const [open, setOpen] = React.useState(false)
  const renderRow = (row: (typeof rows)[number]) => (
    <div
      key={row.feature}
      className="grid grid-cols-3 items-center border-t px-3 py-2 text-sm"
    >
      <span className="text-muted-foreground">{row.feature}</span>
      <Cell value={row.free} />
      <Cell value={row.pro} />
    </div>
  )
  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="w-full max-w-md border"
    >
      <div className="grid grid-cols-3 px-3 py-2 text-xs font-medium">
        <span>Feature</span>
        <span>Free</span>
        <span>Pro</span>
      </div>
      {rows.slice(0, 2).map(renderRow)}
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
        {rows.slice(2).map(renderRow)}
      </CollapsibleContent>
      <CollapsibleTrigger
        render={<Button variant="ghost" className="w-full border-t" />}
      >
        {open ? "Hide comparison" : "Compare all features"}
        <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
      </CollapsibleTrigger>
    </Collapsible>
  )
}
