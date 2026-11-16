import {
  GripVertical as GripVerticalIcon,
  ListMusic as ListMusicIcon,
  Pause as PauseIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const queue = [
  { title: "Low Tide", artist: "Marlow Lane", length: "3:42" },
  { title: "Paper Planes at Dusk", artist: "The Sorrels", length: "4:05" },
  { title: "Glasshouse", artist: "Nia Fontaine", length: "2:58" },
  { title: "Northbound", artist: "Atlas & Rye", length: "3:31" },
]

export default function PlaybackQueueSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <ListMusicIcon data-icon="inline-start" />
        Queue
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Up next</SheetTitle>
          <SheetDescription>{queue.length} songs · 14 min</SheetDescription>
        </SheetHeader>
        <div className="mx-4 flex items-center gap-3 border bg-muted/50 p-3">
          <div className="size-12 shrink-0 bg-gradient-to-br from-violet-500 to-fuchsia-500" />
          <div className="flex flex-1 flex-col">
            <span className="text-muted-foreground">Now playing</span>
            <span className="font-medium">Summer Static</span>
            <span className="text-muted-foreground">Juno Vale</span>
          </div>
          <Button size="icon" aria-label="Pause">
            <PauseIcon />
          </Button>
        </div>
        <div className="flex flex-col p-2">
          {queue.map((track, i) => (
            <div
              key={track.title}
              className="flex items-center gap-3 px-2 py-2 hover:bg-muted"
            >
              <GripVerticalIcon className="size-3.5 cursor-grab text-muted-foreground" />
              <span className="w-4 text-muted-foreground tabular-nums">
                {i + 1}
              </span>
              <div className="flex flex-1 flex-col">
                <span>{track.title}</span>
                <span className="text-muted-foreground">{track.artist}</span>
              </div>
              <span className="text-muted-foreground tabular-nums">
                {track.length}
              </span>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
