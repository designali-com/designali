"use client"

import * as React from "react"
import {
  Folder as FolderIcon,
  LayoutGrid as LayoutGridIcon,
  List as ListIcon,
} from "@designali/icons"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { cn } from "@workspace/ui/lib/utils"

const projects = [
  "Designali templates",
  "Dalim Icons",
  "Dalim UI",
  "Dalim Works",
]

export default function ProjectViewModeSwitcher() {
  const [view, setView] = React.useState("grid")

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Projects</span>
        <ToggleGroup
          variant="outline"
          size="sm"
          spacing={0}
          value={[view]}
          onValueChange={(next) => next[0] && setView(next[0])}
        >
          <ToggleGroupItem value="grid" aria-label="Grid view">
            <LayoutGridIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List view">
            <ListIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div
        className={cn(
          "gap-2",
          view === "grid" ? "grid grid-cols-2" : "flex flex-col"
        )}
      >
        {projects.map((project) => (
          <div
            key={project}
            className={cn(
              "flex border bg-card text-xs",
              view === "grid"
                ? "h-20 items-end p-3"
                : "items-center gap-2 px-3 py-2"
            )}
          >
            <FolderIcon className="size-3.5 text-muted-foreground" />
            <span className={cn(view === "grid" && "ms-1.5")}>{project}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
