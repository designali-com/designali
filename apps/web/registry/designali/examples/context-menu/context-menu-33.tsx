"use client"

import * as React from "react"
import {
  Archive as ArchiveIcon,
  ExternalLink as ExternalLinkIcon,
  Hash as HashIcon,
  Pencil as PencilIcon,
  Star as StarIcon,
  StarOff as StarOffIcon,
} from "@designali/icons"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

const initialProjects = [
  { name: "Designali Website", favorite: true },
  { name: "Dalim UI", favorite: false },
  { name: "Dalim Icons", favorite: false },
]

export default function SidebarProjectMenu() {
  const [projects, setProjects] = React.useState(initialProjects)
  const toggleFavorite = (name: string) =>
    setProjects((list) =>
      list.map((p) => (p.name === name ? { ...p, favorite: !p.favorite } : p))
    )

  return (
    <nav className="flex w-full max-w-56 flex-col gap-0.5 border p-2">
      <span className="px-2 pb-1 text-[11px] font-medium text-muted-foreground">
        Projects
      </span>
      {[...projects]
        .sort((a, b) => Number(b.favorite) - Number(a.favorite))
        .map((project) => (
          <ContextMenu key={project.name}>
            <ContextMenuTrigger className="flex items-center gap-2 px-2 py-1.5 text-xs hover:bg-muted data-popup-open:bg-muted">
              <HashIcon className="size-3.5 text-muted-foreground" />
              <span className="flex-1 truncate">{project.name}</span>
              {project.favorite ? (
                <StarIcon className="size-3 fill-amber-400 text-amber-400" />
              ) : null}
            </ContextMenuTrigger>
            <ContextMenuContent className="w-48">
              <ContextMenuGroup>
                <ContextMenuItem>
                  <ExternalLinkIcon />
                  Open in new tab
                </ContextMenuItem>
                <ContextMenuItem onClick={() => toggleFavorite(project.name)}>
                  {project.favorite ? <StarOffIcon /> : <StarIcon />}
                  {project.favorite
                    ? "Remove from favorites"
                    : "Add to favorites"}
                </ContextMenuItem>
                <ContextMenuItem>
                  <PencilIcon />
                  Rename
                </ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem
                  onClick={() =>
                    setProjects((list) =>
                      list.filter((p) => p.name !== project.name)
                    )
                  }
                >
                  <ArchiveIcon />
                  Archive project
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuContent>
          </ContextMenu>
        ))}
    </nav>
  )
}
