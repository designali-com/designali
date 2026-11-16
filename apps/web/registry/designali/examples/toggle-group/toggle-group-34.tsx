import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

export default function CalendarViewToggleGroup() {
  return (
    <div className="flex w-full max-w-md items-center justify-between gap-2 border p-2">
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon-sm" aria-label="Previous">
          <ChevronLeftIcon />
        </Button>
        <span className="text-sm font-medium">June 2026</span>
        <Button variant="ghost" size="icon-sm" aria-label="Next">
          <ChevronRightIcon />
        </Button>
      </div>
      <ToggleGroup
        size="sm"
        variant="outline"
        spacing={0}
        defaultValue={["week"]}
      >
        <ToggleGroupItem value="day">Day</ToggleGroupItem>
        <ToggleGroupItem value="week">Week</ToggleGroupItem>
        <ToggleGroupItem value="month">Month</ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
