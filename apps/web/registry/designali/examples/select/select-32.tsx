import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { ButtonGroup } from "@workspace/ui/components/button-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const views = [
  { label: "Day", value: "day" },
  { label: "Week", value: "week" },
  { label: "Month", value: "month" },
  { label: "Agenda", value: "agenda" },
]

export default function CalendarViewSelect() {
  return (
    <div className="flex w-full max-w-md items-center gap-2 border p-2">
      <ButtonGroup>
        <Button variant="outline" size="icon-sm" aria-label="Previous">
          <ChevronLeftIcon />
        </Button>
        <Button variant="outline" size="sm">
          Today
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="Next">
          <ChevronRightIcon />
        </Button>
      </ButtonGroup>
      <span className="flex-1 truncate text-sm font-medium">March 2026</span>
      <Select items={views} defaultValue="week">
        <SelectTrigger size="sm" className="w-24" aria-label="Calendar view">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {views.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
