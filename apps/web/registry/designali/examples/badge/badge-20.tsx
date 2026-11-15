"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"

const categories = [
  "All",
  "Design",
  "Engineering",
  "Marketing",
  "Sales",
  "Support",
]

export default function SelectableCategoryBadges() {
  const [active, setActive] = React.useState("All")

  return (
    <div
      className="flex max-w-sm flex-wrap justify-center gap-1.5"
      role="group"
      aria-label="Filter by category"
    >
      {categories.map((category) => (
        <Badge
          key={category}
          variant={active === category ? "default" : "outline"}
          className="h-7 cursor-pointer px-3"
          render={
            <button
              type="button"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
            />
          }
        >
          {category}
        </Badge>
      ))}
    </div>
  )
}
