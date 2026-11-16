import {
  Funnel as FilterIcon,
} from "@designali/icons"

import { Toggle } from "@workspace/ui/components/toggle"

const searches = [
  { label: "Open block requests", count: 14 },
  { label: "Assigned to me", count: 6 },
  { label: "Due this week", count: 3 },
]

export default function SavedSearchToggleChips() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
      <p className="text-xs font-medium text-muted-foreground">
        Saved searches
      </p>
      <div className="flex flex-wrap gap-2">
        {searches.map((s, i) => (
          <Toggle key={s.label} variant="outline" defaultPressed={i === 0}>
            <FilterIcon data-icon="inline-start" />
            {s.label}
            <span
              data-icon="inline-end"
              className="text-muted-foreground tabular-nums"
            >
              {s.count}
            </span>
          </Toggle>
        ))}
      </div>
    </div>
  )
}
