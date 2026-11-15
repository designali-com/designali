import { EyeIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

export default function LiveRecordingBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge className="bg-red-600 font-semibold tracking-wide text-white uppercase">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex size-1.5 rounded-full bg-white" />
        </span>
        Live
      </Badge>
      <Badge variant="outline">
        <span className="size-1.5 animate-pulse rounded-full bg-red-500" />
        Recording · 12:04
      </Badge>
      <Badge variant="secondary">
        <EyeIcon data-icon="inline-start" />
        1,204 watching
      </Badge>
    </div>
  )
}
