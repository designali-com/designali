"use client"

import * as React from "react"
import {
  Heart as HeartIcon,
  ListEnd as ListEndIcon,
  ListPlus as ListPlusIcon,
  ListStart as ListStartIcon,
  MicVocal as MicVocalIcon,
  Plus as PlusIcon,
} from "@designali/icons"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

const tracks = [
  { title: "Brand identity reel", artist: "Designali", length: "3:42" },
  { title: "Design se code tak", artist: "Ali Imam", length: "4:05" },
  { title: "Colorful spheres", artist: "Designali", length: "2:58" },
]

export default function MusicTrackMenu() {
  const [liked, setLiked] = React.useState<string[]>(["Design se code tak"])

  return (
    <div className="flex w-full max-w-sm flex-col border">
      {tracks.map((track, index) => (
        <ContextMenu key={track.title}>
          <ContextMenuTrigger className="flex items-center gap-3 px-3 py-2 text-xs hover:bg-muted/50 data-popup-open:bg-muted">
            <span className="w-4 text-muted-foreground">{index + 1}</span>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate font-medium">{track.title}</span>
              <span className="text-muted-foreground">{track.artist}</span>
            </div>
            {liked.includes(track.title) ? (
              <HeartIcon className="size-3.5 fill-primary text-primary" />
            ) : null}
            <span className="text-muted-foreground tabular-nums">
              {track.length}
            </span>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuItem>
                <ListStartIcon />
                Play next
              </ContextMenuItem>
              <ContextMenuItem>
                <ListEndIcon />
                Add to queue
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <ListPlusIcon />
                  Add to playlist
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-44">
                  <ContextMenuGroup>
                    <ContextMenuItem>
                      <PlusIcon />
                      New playlist
                    </ContextMenuItem>
                  </ContextMenuGroup>
                  <ContextMenuSeparator />
                  <ContextMenuGroup>
                    <ContextMenuItem>Studio focus</ContextMenuItem>
                    <ContextMenuItem>Motion design</ContextMenuItem>
                    <ContextMenuItem>CGI &amp; 3D</ContextMenuItem>
                  </ContextMenuGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuCheckboxItem
                checked={liked.includes(track.title)}
                onCheckedChange={(checked) =>
                  setLiked((list) =>
                    checked
                      ? [...list, track.title]
                      : list.filter((t) => t !== track.title)
                  )
                }
              >
                Liked
              </ContextMenuCheckboxItem>
              <ContextMenuItem>
                <MicVocalIcon />
                Go to artist
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}
