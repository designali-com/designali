import { CircleCheckIcon, CircleDashedIcon, CircleDotIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const statuses = [
  { value: "open", label: "Open", count: 24, icon: CircleDotIcon },
  { value: "progress", label: "In progress", count: 7, icon: CircleDashedIcon },
  { value: "closed", label: "Closed", count: 138, icon: CircleCheckIcon },
]

export default function IssueStatusFilterWithCounts() {
  return (
    <ToggleGroup
      variant="outline"
      spacing={0}
      defaultValue={["open"]}
      className="flex-wrap"
    >
      {statuses.map((s) => (
        <ToggleGroupItem key={s.value} value={s.value}>
          <s.icon data-icon="inline-start" />
          {s.label}
          <Badge variant="secondary" className="ms-1 tabular-nums">
            {s.count}
          </Badge>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
