"use client"

import * as React from "react"
import {
  AudioLines as AudioLinesIcon,
} from "@designali/icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { cn } from "@workspace/ui/lib/utils"

const tracks = [
  { title: "Colorful Spheres", artist: "Designali Motion", length: "3:42" },
  { title: "Abstract Fluid", artist: "Designali Motion", length: "4:05" },
  { title: "Design se code tak", artist: "Ali Imam", length: "2:58" },
  { title: "Studio Session", artist: "Designali", length: "3:21" },
  { title: "Late Night Build", artist: "Ali Imam", length: "5:10" },
]

export default function LoopingPlaylistSearch() {
  const [playing, setPlaying] = React.useState("Abstract Fluid")

  return (
    <Command loop className="w-full max-w-sm border">
      <CommandInput placeholder="Search songs or artists..." />
      <CommandList>
        <CommandEmpty>No tracks found.</CommandEmpty>
        <CommandGroup heading="Designali studio mix · 5 tracks">
          {tracks.map((track, index) => (
            <CommandItem
              key={track.title}
              value={track.title + " " + track.artist}
              onSelect={() => setPlaying(track.title)}
            >
              <span className="w-4 text-center text-[11px] text-muted-foreground">
                {playing === track.title ? (
                  <AudioLinesIcon className="size-3.5 text-primary" />
                ) : (
                  index + 1
                )}
              </span>
              <div className="flex min-w-0 flex-col">
                <span
                  className={cn(
                    "truncate",
                    playing === track.title && "font-medium"
                  )}
                >
                  {track.title}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {track.artist}
                </span>
              </div>
              <span className="ms-auto text-[11px] text-muted-foreground tabular-nums">
                {track.length}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
