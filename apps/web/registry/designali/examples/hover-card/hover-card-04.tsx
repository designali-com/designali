import {
  BookMarked as BookMarkedIcon,
  GitFork as GitForkIcon,
  Star as StarIcon,
} from "@designali/icons"

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
          designali/designali
        </HoverCardTrigger>
        <HoverCardContent className="flex w-80 flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold">designali</span>
            <Badge variant="outline">Public</Badge>
          </div>
          <p className="text-muted-foreground">
            Designali blocks, templates and UI built with Next.js, React and
            Tailwind CSS.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="size-2.5 rounded-full bg-primary" />
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
