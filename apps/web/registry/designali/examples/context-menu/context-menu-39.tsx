"use client"

import * as React from "react"
import {
  Activity as ActivityIcon,
  BookmarkX as BookmarkXIcon,
  Link as LinkIcon,
  Map as MapIcon,
  Pencil as PencilIcon,
  Shapes as ShapesIcon,
  Wallet as WalletIcon,
} from "@designali/icons"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

const initialBookmarks = [
  { title: "Templates", icon: MapIcon },
  { title: "Blocks", icon: ActivityIcon },
  { title: "Icons", icon: ShapesIcon },
  { title: "Pricing", icon: WalletIcon },
]

export default function BookmarksBarMenu() {
  const [bookmarks, setBookmarks] = React.useState(initialBookmarks)

  return (
    <div className="flex w-full max-w-md flex-wrap items-center gap-1 border bg-muted/30 p-1">
      {bookmarks.map((bookmark) => (
        <ContextMenu key={bookmark.title}>
          <ContextMenuTrigger className="flex items-center gap-1.5 px-2 py-1 text-xs hover:bg-muted data-popup-open:bg-muted">
            <bookmark.icon className="size-3.5" />
            {bookmark.title}
          </ContextMenuTrigger>
          <ContextMenuContent className="w-52">
            <ContextMenuGroup>
              <ContextMenuItem>Open in new tab</ContextMenuItem>
              <ContextMenuItem>Open in new window</ContextMenuItem>
              <ContextMenuItem>Open in private window</ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem>
                <PencilIcon />
                Edit bookmark
              </ContextMenuItem>
              <ContextMenuItem>
                <LinkIcon />
                Copy URL
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem
                variant="destructive"
                onClick={() =>
                  setBookmarks((list) =>
                    list.filter((b) => b.title !== bookmark.title)
                  )
                }
              >
                <BookmarkXIcon />
                Remove bookmark
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
      {bookmarks.length === 0 ? (
        <span className="px-2 py-1 text-xs text-muted-foreground">
          No bookmarks
        </span>
      ) : null}
    </div>
  )
}
