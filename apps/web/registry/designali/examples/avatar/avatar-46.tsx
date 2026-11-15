"use client"

import * as React from "react"
import { ChevronLeftIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@workspace/ui/components/avatar"
import { cn } from "@workspace/ui/lib/utils"

const contributors = ["AH", "BC", "DE", "FG", "HJ", "KL", "MN", "PQ", "RS"]

export default function ExpandableContributorStack() {
  const [expanded, setExpanded] = React.useState(false)
  const visible = expanded ? contributors : contributors.slice(0, 4)

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-2">
      <AvatarGroup
        className={cn("flex-wrap justify-center", expanded && "gap-y-2")}
      >
        {visible.map((value) => (
          <Avatar key={value}>
            <AvatarFallback>{value}</AvatarFallback>
          </Avatar>
        ))}
        <button
          type="button"
          aria-expanded={expanded}
          aria-label={
            expanded ? "Show fewer contributors" : "Show all contributors"
          }
          onClick={() => setExpanded((value) => !value)}
          className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground ring-2 ring-background hover:bg-accent hover:text-foreground [&>svg]:size-4"
        >
          {expanded ? <ChevronLeftIcon /> : "+" + (contributors.length - 4)}
        </button>
      </AvatarGroup>
      <p className="text-xs text-muted-foreground">
        {contributors.length} contributors
      </p>
    </div>
  )
}
