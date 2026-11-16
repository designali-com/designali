import {
  Pause as PauseIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
} from "@designali/icons"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Button } from "@workspace/ui/components/button"
import { Progress } from "@workspace/ui/components/progress"

export default function AlbumCoverPlayer() {
  return (
    <div className="w-full max-w-60 border p-3">
      <AspectRatio
        ratio={1}
        className="overflow-hidden bg-linear-to-br from-rose-500 to-amber-400"
      >
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 size-full"
          aria-hidden="true"
        >
          {[40, 30, 20, 10].map((r) => (
            <circle
              key={r}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke="white"
              strokeOpacity="0.35"
              strokeWidth="1.5"
            />
          ))}
          <circle cx="50" cy="50" r="4" fill="white" />
        </svg>
      </AspectRatio>
      <div className="mt-3">
        <p className="truncate text-sm font-medium">Design se code tak</p>
        <p className="truncate text-xs text-muted-foreground">
          Designali studio playlist
        </p>
      </div>
      <Progress value={38} className="mt-3" />
      <div className="mt-2 flex items-center justify-center gap-1">
        <Button variant="ghost" size="icon-sm" aria-label="Previous">
          <SkipBackIcon />
        </Button>
        <Button size="icon" aria-label="Pause" className="rounded-full">
          <PauseIcon />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Next">
          <SkipForwardIcon />
        </Button>
      </div>
    </div>
  )
}
