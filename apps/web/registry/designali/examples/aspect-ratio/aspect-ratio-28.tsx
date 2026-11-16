import {
  Eye as EyeIcon,
} from "@designali/icons"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"

export default function LiveStreamThumbnail() {
  return (
    <div className="w-full max-w-xs">
      <AspectRatio
        ratio={16 / 9}
        className="overflow-hidden bg-linear-to-br from-chart-5 via-chart-3 to-primary"
      >
        <svg
          viewBox="0 0 160 90"
          className="absolute inset-0 size-full opacity-40"
          aria-hidden="true"
        >
          <polyline
            points="0,70 30,50 55,60 80,30 110,45 160,15"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
        <Badge
          variant="destructive"
          className="absolute start-2 top-2 bg-destructive text-white"
        >
          <span className="size-1.5 animate-pulse rounded-full bg-white" />
          LIVE
        </Badge>
        <span className="absolute start-2 bottom-2 flex items-center gap-1 bg-black/60 px-1.5 py-0.5 text-[10px] text-white">
          <EyeIcon className="size-3" />
          3.2k
        </span>
      </AspectRatio>
      <div className="mt-2 flex gap-2">
        <Avatar size="sm">
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">
            Live: building a Designali block in Next.js
          </p>
          <p className="text-xs text-muted-foreground">
            designali - Design se code tak
          </p>
        </div>
      </div>
    </div>
  )
}
