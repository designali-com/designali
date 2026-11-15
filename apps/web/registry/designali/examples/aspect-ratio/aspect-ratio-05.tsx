import { MaximizeIcon, PlayIcon, Volume2Icon } from "lucide-react"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Button } from "@workspace/ui/components/button"

export default function VideoPlayerPlaceholder() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio
        ratio={16 / 9}
        className="overflow-hidden bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            size="icon-lg"
            variant="secondary"
            aria-label="Play video"
            className="rounded-full"
          >
            <PlayIcon className="fill-current" />
          </Button>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-linear-to-t from-black/70 to-transparent px-3 pt-6 pb-2 text-white">
          <span className="font-mono text-[10px] tabular-nums">0:00</span>
          <div className="h-1 flex-1 bg-white/30">
            <div className="h-full w-1/4 bg-white" />
          </div>
          <span className="font-mono text-[10px] tabular-nums">12:48</span>
          <Volume2Icon className="size-3.5" />
          <MaximizeIcon className="size-3.5" />
        </div>
      </AspectRatio>
    </div>
  )
}
