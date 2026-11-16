"use client"

import * as React from "react"
import {
  SquareCheck as CheckSquareIcon,
  Download as DownloadIcon,
  FolderInput as FolderInputIcon,
  Tag as TagIcon,
  Trash as TrashIcon,
} from "@designali/icons"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

const assets = [
  "designali-hero.png",
  "designali-logo.svg",
  "brand-banner.jpg",
  "ali-imam.jpg",
  "colorful-spheres.mp4",
  "icon-set.svg",
]
const tints = [
  "from-chart-1 to-primary",
  "from-chart-1 to-primary",
  "from-chart-1 to-primary",
  "from-chart-1 to-primary",
  "from-chart-1 to-primary",
  "from-border to-muted-foreground",
]

export default function BulkSelectionMenu() {
  const [selected, setSelected] = React.useState<string[]>([
    "designali-hero.png",
    "brand-banner.jpg",
  ])
  const toggle = (name: string) =>
    setSelected((s) =>
      s.includes(name) ? s.filter((n) => n !== name) : [...s, name]
    )

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-full max-w-sm flex-col gap-2">
        <div className="grid grid-cols-3 gap-2">
          {assets.map((asset, index) => (
            <button
              key={asset}
              type="button"
              onClick={() => toggle(asset)}
              onContextMenu={() =>
                !selected.includes(asset) && setSelected([asset])
              }
              className={cn(
                "flex flex-col gap-1 p-1 text-start text-[11px]",
                selected.includes(asset)
                  ? "bg-primary/10 ring-2 ring-primary"
                  : "hover:bg-muted"
              )}
            >
              <span
                className={cn("aspect-square bg-linear-to-br", tints[index])}
              />
              <span className="truncate">{asset}</span>
            </button>
          ))}
        </div>
        <span className="text-xs text-muted-foreground">
          Click to select · right-click for actions
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuLabel>
            {selected.length} {selected.length === 1 ? "item" : "items"}{" "}
            selected
          </ContextMenuLabel>
          <ContextMenuItem disabled={!selected.length}>
            <DownloadIcon />
            Download {selected.length > 1 ? "as .zip" : ""}
          </ContextMenuItem>
          <ContextMenuItem disabled={!selected.length}>
            <FolderInputIcon />
            Move to folder...
          </ContextMenuItem>
          <ContextMenuItem disabled={!selected.length}>
            <TagIcon />
            Add tags...
          </ContextMenuItem>
          <ContextMenuItem onClick={() => setSelected(assets)}>
            <CheckSquareIcon />
            Select all
            <ContextMenuShortcut>⌘A</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive" disabled={!selected.length}>
            <TrashIcon />
            Delete {selected.length || ""}
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
