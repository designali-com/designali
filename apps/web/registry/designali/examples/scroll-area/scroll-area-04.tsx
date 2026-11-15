"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area"

const categories = [
  "All",
  "Design",
  "Engineering",
  "Marketing",
  "Sales",
  "Support",
  "Finance",
  "Legal",
  "People",
  "Operations",
  "Research",
]

export default function HorizontalCategoryChips() {
  const [active, setActive] = React.useState("All")

  return (
    <ScrollArea className="w-full max-w-sm whitespace-nowrap">
      <div className="flex w-max gap-2 pb-3">
        {categories.map((c) => (
          <Button
            key={c}
            size="sm"
            variant={active === c ? "default" : "outline"}
            onClick={() => setActive(c)}
          >
            {c}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
