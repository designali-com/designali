"use client"

import * as React from "react"
import {
  ArrowDownWideNarrow as ArrowDownWideNarrowIcon,
  Folder as FolderIcon,
  FolderPlus as FolderPlusIcon,
  Info as InfoIcon,
  Wallpaper as WallpaperIcon,
} from "@designali/icons"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

export default function DesktopBackgroundMenu() {
  const [sortBy, setSortBy] = React.useState("name")
  const [showIcons, setShowIcons] = React.useState(true)
  const [snapToGrid, setSnapToGrid] = React.useState(true)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="relative flex h-52 w-full max-w-md items-start gap-4 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-400 p-4 text-[11px] text-white">
        {showIcons
          ? ["Designali", "Templates", "Brand kit"].map((name) => (
              <span
                key={name}
                className="flex w-16 flex-col items-center gap-1 text-center"
              >
                <FolderIcon className="size-8 fill-white/30" />
                {name}
              </span>
            ))
          : null}
        <span className="absolute end-3 bottom-2 opacity-80">
          Sorted by {sortBy}
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuItem>
            <FolderPlusIcon />
            New folder
            <ContextMenuShortcut>⇧⌘N</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <InfoIcon />
            Get info
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <ArrowDownWideNarrowIcon />
            Sort by
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-40">
            <ContextMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
              <ContextMenuRadioItem value="name">Name</ContextMenuRadioItem>
              <ContextMenuRadioItem value="kind">Kind</ContextMenuRadioItem>
              <ContextMenuRadioItem value="date added">
                Date added
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="size">Size</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuGroup>
          <ContextMenuCheckboxItem
            checked={showIcons}
            onCheckedChange={setShowIcons}
          >
            Show desktop icons
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={snapToGrid}
            onCheckedChange={setSnapToGrid}
          >
            Snap to grid
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            <WallpaperIcon />
            Change wallpaper...
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
