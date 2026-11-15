import {
  ArrowUpDownIcon,
  DownloadIcon,
  ListFilterIcon,
  PlusIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const actions = [
  { label: "Filter", icon: ListFilterIcon },
  { label: "Sort", icon: ArrowUpDownIcon },
  { label: "Export", icon: DownloadIcon },
]

export default function ResponsiveIconLabelButtons() {
  return (
    <div className="flex items-center gap-1.5">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant="outline"
          size="sm"
          aria-label={action.label}
        >
          <action.icon data-icon="inline-start" />
          <span className="hidden sm:inline">{action.label}</span>
        </Button>
      ))}
      <Button size="sm">
        <PlusIcon data-icon="inline-start" />
        <span className="hidden sm:inline">New record</span>
      </Button>
    </div>
  )
}
