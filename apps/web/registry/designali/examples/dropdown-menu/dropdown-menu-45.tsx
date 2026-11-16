"use client"

import * as React from "react"
import {
  Heart as HeartIcon,
  ListPlus as ListPlusIcon,
  Ellipsis as MoreHorizontalIcon,
  Music as MusicIcon,
  Plus as PlusIcon,
  Share2 as Share2Icon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const playlists = [
  "Studio focus",
  "Late night builds",
  "Motion design",
  "CGI & 3D",
]

export default function TrackAddToPlaylistMenu() {
  const [added, setAdded] = React.useState<string[]>(["Late night builds"])

  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-2">
      <span className="flex size-10 items-center justify-center bg-gradient-to-br from-primary to-primary">
        <MusicIcon className="size-4 text-white" />
      </span>
      <div className="min-w-0 flex-1 text-xs">
        <p className="truncate font-medium">Design se code tak</p>
        <p className="truncate text-muted-foreground">
          Designali · 3:41
        </p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon-sm" aria-label="Track options" />
          }
        >
          <MoreHorizontalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>
            <ListPlusIcon />
            Add to queue
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <PlusIcon />
              Add to playlist
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-48">
              {playlists.map((p) => (
                <DropdownMenuCheckboxItem
                  key={p}
                  checked={added.includes(p)}
                  onCheckedChange={(checked) =>
                    setAdded((prev) =>
                      checked ? [...prev, p] : prev.filter((x) => x !== p)
                    )
                  }
                >
                  {p}
                </DropdownMenuCheckboxItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusIcon />
                New playlist
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <HeartIcon />
            Save to liked songs
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Share2Icon />
            Share
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
