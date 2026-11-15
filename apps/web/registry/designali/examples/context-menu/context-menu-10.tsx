"use client"

import * as React from "react"
import { DownloadIcon, ImageIcon, LinkIcon, TrashIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

const photos = [
  { id: "p1", gradient: "from-rose-400 to-orange-300" },
  { id: "p2", gradient: "from-sky-400 to-emerald-300" },
  { id: "p3", gradient: "from-violet-500 to-pink-400" },
  { id: "p4", gradient: "from-amber-300 to-lime-400" },
]

export default function PhotoGalleryMenu() {
  const [cover, setCover] = React.useState("p1")
  const [size, setSize] = React.useState("large")

  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-2">
      {photos.map((photo) => (
        <ContextMenu key={photo.id}>
          <ContextMenuTrigger
            className={cn(
              "relative aspect-square bg-linear-to-br data-popup-open:ring-2 data-popup-open:ring-primary",
              photo.gradient
            )}
          >
            {cover === photo.id ? (
              <Badge className="absolute top-2 left-2">Cover</Badge>
            ) : null}
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuItem
                onClick={() => setCover(photo.id)}
                disabled={cover === photo.id}
              >
                <ImageIcon />
                Set as album cover
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <DownloadIcon />
                  Download
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-44">
                  <ContextMenuRadioGroup value={size} onValueChange={setSize}>
                    <ContextMenuLabel>Size</ContextMenuLabel>
                    <ContextMenuRadioItem value="small">
                      Small · 640px
                    </ContextMenuRadioItem>
                    <ContextMenuRadioItem value="large">
                      Large · 2048px
                    </ContextMenuRadioItem>
                    <ContextMenuRadioItem value="original">
                      Original
                    </ContextMenuRadioItem>
                  </ContextMenuRadioGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuItem>
                <LinkIcon />
                Copy link
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem variant="destructive">
                <TrashIcon />
                Remove from album
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}
