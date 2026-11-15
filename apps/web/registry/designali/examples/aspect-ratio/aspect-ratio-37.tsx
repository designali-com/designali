import { PlayIcon } from "lucide-react"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Button } from "@workspace/ui/components/button"

const bars = Array.from(
  { length: 48 },
  (_, i) => 20 + Math.abs(Math.sin(i * 0.7) * 60) + ((i * 13) % 17)
)

export default function AudioWaveformStrip() {
  const progress = 0.42

  return (
    <div className="flex w-full max-w-md items-center gap-3 border p-3">
      <Button
        size="icon"
        aria-label="Play memo"
        className="shrink-0 rounded-full"
      >
        <PlayIcon className="fill-current" />
      </Button>
      <div className="min-w-0 flex-1">
        <AspectRatio ratio={4}>
          <svg
            viewBox="0 0 192 100"
            preserveAspectRatio="none"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          >
            {bars.map((height, i) => (
              <rect
                key={i}
                x={i * 4}
                y={50 - height / 2}
                width="2.5"
                height={height}
                className={
                  i / bars.length < progress
                    ? "fill-primary"
                    : "fill-muted-foreground/30"
                }
              />
            ))}
          </svg>
        </AspectRatio>
        <div className="mt-1 flex justify-between font-mono text-[10px] text-muted-foreground">
          <span>0:27</span>
          <span>1:04</span>
        </div>
      </div>
    </div>
  )
}
