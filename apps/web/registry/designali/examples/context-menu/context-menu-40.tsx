"use client"

import * as React from "react"
import {
  CheckSquareIcon,
  DownloadIcon,
  FolderInputIcon,
  TagIcon,
  TrashIcon,
} from "lucide-react"

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
  "hero.png",
  "logo.svg",
  "banner.jpg",
  "avatar.png",
  "promo.mp4",
  "icon.svg",
]
const tints = [
  "from-rose-300 to-rose-500",
  "from-sky-300 to-sky-500",
  "from-amber-300 to-amber-500",
  "from-emerald-300 to-emerald-500",
  "from-violet-300 to-violet-500",
  "from-zinc-300 to-zinc-500",
]

export default function BulkSelectionMenu() {
  const [selected, setSelected] = React.useState<string[]>([
    "hero.png",
    "banner.jpg",
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
