import { BookMarkedIcon, GitForkIcon, StarIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

export default function RepositoryPreviewHoverCard() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <BookMarkedIcon className="size-4 text-muted-foreground" />
      <HoverCard>
        <HoverCardTrigger href="#" className="font-medium hover:underline">
          lumen-labs/orbit-router
        </HoverCardTrigger>
        <HoverCardContent className="flex w-80 flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold">orbit-router</span>
            <Badge variant="outline">Public</Badge>
          </div>
          <p className="text-muted-foreground">
            File-based routing with typed params, nested layouts, and streaming
            loaders.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="size-2.5 rounded-full bg-blue-500" />
              TypeScript
            </span>
            <span className="flex items-center gap-1">
              <StarIcon className="size-3.5" />
              8.2k
            </span>
            <span className="flex items-center gap-1">
              <GitForkIcon className="size-3.5" />
              416
            </span>
          </div>
          <p className="text-muted-foreground">Updated 2 hours ago</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
