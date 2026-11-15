import { ChevronUpIcon, ListMusicIcon, PauseIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const queue = [
  { title: "Low Tide", artist: "Marisol Vey", length: "3:42" },
  { title: "Paper Lanterns", artist: "The Quiet Hours", length: "4:05" },
  { title: "Northbound", artist: "Elm & Ash", length: "2:58" },
]

export default function PlayerUpNextQueue() {
  return (
    <Collapsible className="w-full max-w-xs border">
      <div className="flex items-center gap-3 p-3">
        <div className="size-12 shrink-0 bg-gradient-to-br from-orange-400 to-pink-600" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">Glass Harbor</p>
          <p className="truncate text-xs text-muted-foreground">Marisol Vey</p>
        </div>
        <Button size="icon" aria-label="Pause">
          <PauseIcon />
        </Button>
      </div>
      <CollapsibleTrigger
        render={
          <Button variant="ghost" size="sm" className="w-full border-t" />
        }
      >
        <ListMusicIcon />
        Up next · {queue.length}
        <ChevronUpIcon className="ml-auto transition-transform group-data-panel-open/button:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
        <ol className="divide-y border-t">
          {queue.map((song, index) => (
            <li
              key={song.title}
              className="flex items-center gap-3 px-3 py-2 text-sm"
            >
              <span className="w-4 text-xs text-muted-foreground">
                {index + 1}
              </span>
              <span className="flex-1 truncate">
                {song.title}{" "}
                <span className="text-muted-foreground">· {song.artist}</span>
              </span>
              <span className="text-xs text-muted-foreground">
                {song.length}
              </span>
            </li>
          ))}
        </ol>
      </CollapsibleContent>
    </Collapsible>
  )
}
