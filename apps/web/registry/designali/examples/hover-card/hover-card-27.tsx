import {
  Package as PackageIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

export default function PackageVersionHoverCard() {
  return (
    <div className="flex w-full max-w-xs items-center justify-between border p-3 text-sm">
      <div className="flex items-center gap-2">
        <PackageIcon className="size-4 text-muted-foreground" />
        <span className="font-sans">@designali/icons</span>
      </div>
      <HoverCard>
        <HoverCardTrigger
          render={
            <Badge variant="secondary" className="cursor-default font-sans" />
          }
        >
          2.4.0 → 2.5.1
        </HoverCardTrigger>
        <HoverCardContent align="end" className="w-64">
          <p className="mb-1.5 font-medium">What&apos;s new in 2.5</p>
          <ul className="flex list-disc flex-col gap-1 ps-4 text-muted-foreground">
            <li>120 new icons for design tools</li>
            <li>Smaller bundle (−3.2 KB gzip)</li>
            <li>Fixed stroke width on small sizes</li>
          </ul>
          <p className="mt-2 text-muted-foreground">No breaking changes</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
