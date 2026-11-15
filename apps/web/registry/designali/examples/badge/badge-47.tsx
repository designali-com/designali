import { FilterIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

export default function InlineHeadingCountBadges() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-base font-semibold">
          Pending approvals
          <Badge variant="secondary" className="tabular-nums">
            8
          </Badge>
        </h3>
        <Button size="sm" variant="outline">
          Review all
          <Badge className="h-4 px-1 text-[10px]">8</Badge>
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm">
          <FilterIcon data-icon="inline-start" />
          Filters
          <Badge variant="secondary" className="h-4 px-1 text-[10px]">
            3
          </Badge>
        </Button>
        <Button size="sm" variant="ghost">
          Archived
          <Badge variant="outline" className="h-4 px-1 text-[10px]">
            42
          </Badge>
        </Button>
      </div>
    </div>
  )
}
