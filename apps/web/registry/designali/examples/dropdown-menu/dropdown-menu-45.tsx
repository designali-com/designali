"use client"

import * as React from "react"
import {
  HeartIcon,
  ListPlusIcon,
  MoreHorizontalIcon,
  MusicIcon,
  PlusIcon,
  Share2Icon,
} from "lucide-react"

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
  "Morning focus",
  "Late night drives",
  "Workout mix",
  "Rainy Sundays",
]

export default function TrackAddToPlaylistMenu() {
  const [added, setAdded] = React.useState<string[]>(["Late night drives"])

  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-2">
      <span className="flex size-10 items-center justify-center bg-gradient-to-br from-indigo-500 to-cyan-400">
        <MusicIcon className="size-4 text-white" />
      </span>
      <div className="min-w-0 flex-1 text-xs">
        <p className="truncate font-medium">Paper Lanterns</p>
        <p className="truncate text-muted-foreground">
          The Quiet Harbors · 3:41
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
