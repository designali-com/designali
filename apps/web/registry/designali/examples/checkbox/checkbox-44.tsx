"use client"

import * as React from "react"
import { DownloadIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"

const tracks = [
  { title: "Morning Static", artist: "June Avenue", mb: 8.4 },
  { title: "Glass Rooms", artist: "Mira Sol", mb: 9.1 },
  { title: "Long Way North", artist: "Atlas Choir", mb: 11.6 },
  { title: "Paper Boats", artist: "Harbor Lights", mb: 7.2 },
]

export default function OfflineDownloadTracks() {
  const [picked, setPicked] = React.useState<string[]>(
    tracks.map((t) => t.title)
  )
  const size = tracks
    .filter((t) => picked.includes(t.title))
    .reduce((s, t) => s + t.mb, 0)

  return (
    <div className="flex w-full max-w-sm flex-col border">
      {tracks.map((track, index) => (
        <label
          key={track.title}
          className="flex cursor-pointer items-center gap-3 border-b px-3 py-2 hover:bg-muted/50"
        >
          <span className="w-4 text-xs text-muted-foreground tabular-nums">
            {index + 1}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm">{track.title}</p>
            <p className="truncate text-xs text-muted-foreground">
              {track.artist}
            </p>
          </div>
          <span className="text-[11px] text-muted-foreground">
            {track.mb} MB
          </span>
          <Checkbox
            checked={picked.includes(track.title)}
            onCheckedChange={(checked) =>
              setPicked((list) =>
                checked
                  ? [...list, track.title]
                  : list.filter((t) => t !== track.title)
              )
            }
          />
        </label>
      ))}
      <div className="flex items-center justify-between p-3">
        <span className="text-xs text-muted-foreground">
          {size.toFixed(1)} MB on device
        </span>
        <Button size="sm" disabled={picked.length === 0}>
          <DownloadIcon data-icon="inline-start" />
          Download {picked.length}
        </Button>
      </div>
    </div>
  )
}
