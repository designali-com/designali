import { PauseIcon, SkipBackIcon, SkipForwardIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

const queue = [
  { title: "Glasshouse", artist: "Mira Vale", length: "3:42" },
  { title: "Low Tide", artist: "The Ferns", length: "4:05" },
  { title: "Paper Moons", artist: "Odile", length: "2:58" },
  { title: "Northbound", artist: "Kestrel", length: "3:31" },
]

export default function MusicPlayerQueue() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-64 w-full max-w-xl border"
    >
      <ResizablePanel defaultSize="45%" minSize="35%">
        <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
          <div className="aspect-square w-24 bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500" />
          <div className="text-center">
            <p className="text-sm font-medium">Midnight Arcade</p>
            <p className="text-xs text-muted-foreground">Neon Static</p>
          </div>
          <div className="flex items-center gap-1">
            <Button size="icon-sm" variant="ghost" aria-label="Previous">
              <SkipBackIcon />
            </Button>
            <Button size="icon" aria-label="Pause">
              <PauseIcon />
            </Button>
            <Button size="icon-sm" variant="ghost" aria-label="Next">
              <SkipForwardIcon />
            </Button>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="55%" minSize="30%">
        <div className="flex h-full flex-col">
          <span className="border-b px-3 py-2 text-xs font-medium">
            Up next
          </span>
          {queue.map((track, i) => (
            <div
              key={track.title}
              className="flex items-center gap-3 px-3 py-2 text-xs hover:bg-muted"
            >
              <span className="w-3 text-muted-foreground tabular-nums">
                {i + 1}
              </span>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="truncate font-medium">{track.title}</span>
                <span className="truncate text-muted-foreground">
                  {track.artist}
                </span>
              </div>
              <span className="text-muted-foreground tabular-nums">
                {track.length}
              </span>
            </div>
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
