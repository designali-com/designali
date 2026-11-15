"use client"

import * as React from "react"
import { AudioLinesIcon } from "lucide-react"

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
  { title: "Paper Lanterns", artist: "Mira Sol", length: "3:42" },
  { title: "Low Tide", artist: "The Harbor Lights", length: "4:05" },
  { title: "Glasshouse", artist: "Ondine", length: "2:58" },
  { title: "Night Bus", artist: "Kofi & The Rails", length: "3:21" },
  { title: "Static Bloom", artist: "Mira Sol", length: "5:10" },
]

export default function LoopingPlaylistSearch() {
  const [playing, setPlaying] = React.useState("Low Tide")

  return (
    <Command loop className="w-full max-w-sm border">
      <CommandInput placeholder="Search songs or artists..." />
      <CommandList>
        <CommandEmpty>No tracks found.</CommandEmpty>
        <CommandGroup heading="Road trip mix · 5 songs">
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
