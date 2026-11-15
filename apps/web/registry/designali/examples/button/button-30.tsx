"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"

const filters = ["All", "Unread", "Mentions", "Assigned", "Archived"]

export default function FilterChipButtons() {
  const [active, setActive] = React.useState("All")

  return (
    <div className="flex max-w-sm flex-wrap gap-1.5">
      {filters.map((filter) => (
        <Button
          key={filter}
          size="xs"
          variant={active === filter ? "default" : "outline"}
          aria-pressed={active === filter}
          onClick={() => setActive(filter)}
          className="rounded-full px-3"
        >
          {filter}
        </Button>
      ))}
    </div>
  )
}
