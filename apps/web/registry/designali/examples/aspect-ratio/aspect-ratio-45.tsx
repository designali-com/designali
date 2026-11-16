import {
  Mic as MicIcon,
  Play as PlayIcon,
} from "@designali/icons"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Button } from "@workspace/ui/components/button"

export default function PodcastEpisodeRow() {
  return (
    <div className="flex w-full max-w-md items-center gap-3 border p-3">
      <div className="w-16 shrink-0">
        <AspectRatio
          ratio={1}
          className="bg-linear-to-br from-teal-400 to-indigo-700"
        >
          <MicIcon className="absolute start-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 text-white rtl:translate-x-1/2" />
        </AspectRatio>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] text-muted-foreground uppercase">
          Ep. 112 - May 3
        </p>
        <p className="truncate text-sm font-medium">
          Design se code tak
        </p>
        <p className="truncate text-xs text-muted-foreground">
          The Designali podcast with Ali Imam
        </p>
      </div>
      <Button
        size="icon-sm"
        variant="outline"
        aria-label="Play episode"
        className="rounded-full"
      >
        <PlayIcon />
      </Button>
    </div>
  )
}
