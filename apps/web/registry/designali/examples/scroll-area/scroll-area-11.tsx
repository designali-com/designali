import { PlayIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const tracks = [
  ["Glasshouse", "Mira Vale", "3:42"],
  ["Low Tide", "The Ferns", "4:05"],
  ["Paper Moons", "Odile", "2:58"],
  ["Northbound", "Kestrel", "3:31"],
  ["Satellite Heart", "Juno Ray", "3:17"],
  ["Copper Sky", "Mira Vale", "4:22"],
  ["Night Swim", "Halcyon", "3:49"],
  ["Static Bloom", "The Ferns", "2:44"],
  ["Long Weekend", "Odile", "3:08"],
  ["Lantern", "Kestrel", "4:11"],
]

export default function PlaylistTracks() {
  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center gap-3 border-b p-3">
        <div className="size-12 shrink-0 bg-gradient-to-br from-orange-400 via-pink-500 to-violet-600" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">Late Night Focus</p>
          <p className="text-xs text-muted-foreground">
            {tracks.length} songs - 36 min
          </p>
        </div>
        <Button size="icon" aria-label="Play">
          <PlayIcon />
        </Button>
      </div>
      <ScrollArea className="h-60">
        {tracks.map(([title, artist, length], i) => (
          <div
            key={title}
            className="flex items-center gap-3 px-3 py-2 text-xs hover:bg-muted"
          >
            <span className="w-4 text-right text-muted-foreground tabular-nums">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium">{title}</p>
              <p className="truncate text-muted-foreground">{artist}</p>
            </div>
            <span className="text-muted-foreground tabular-nums">{length}</span>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}
