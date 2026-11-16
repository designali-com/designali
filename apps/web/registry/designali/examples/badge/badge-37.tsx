import {
  Check as CheckIcon,
  CircleAlert as CircleAlertIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"

const sections = [
  { name: "Project brief", errors: 0 },
  { name: "Brand assets", errors: 2 },
  { name: "Billing details", errors: 1 },
]

export default function FormErrorCountBadges() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      {sections.map((section) => (
        <div
          key={section.name}
          className="flex items-center justify-between border p-3"
        >
          <span className="text-sm">{section.name}</span>
          {section.errors > 0 ? (
            <Badge variant="destructive" aria-invalid="true">
              <CircleAlertIcon data-icon="inline-start" />
              {section.errors} {section.errors === 1 ? "issue" : "issues"}
            </Badge>
          ) : (
            <Badge variant="outline">
              <CheckIcon data-icon="inline-start" />
              Complete
            </Badge>
          )}
        </div>
      ))}
    </div>
  )
}
