import { CheckIcon, CircleAlertIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

const sections = [
  { name: "Company details", errors: 0 },
  { name: "Billing address", errors: 2 },
  { name: "Tax information", errors: 1 },
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
