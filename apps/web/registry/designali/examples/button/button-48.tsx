"use client"

import * as React from "react"
import {
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

export default function ShowMoreToggleButton() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-1">
      <p
        className={cn("text-xs text-muted-foreground", !open && "line-clamp-2")}
      >
        The Alder cabin sits on a quiet ridge two hours north of the city. It
        sleeps six across three bedrooms, has a wood-burning stove and a covered
        deck facing the lake, and is a short walk to hiking trails, a small
        general store and a public boat launch.
      </p>
      <Button
        variant="link"
        size="xs"
        className="px-0"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? "Show less" : "Show more"}
        <ChevronDownIcon
          data-icon="inline-end"
          className={cn("transition-transform", open && "rotate-180")}
        />
      </Button>
    </div>
  )
}
