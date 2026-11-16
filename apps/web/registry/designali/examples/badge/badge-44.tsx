import {
  Calendar as CalendarIcon,
  Hourglass as HourglassIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"

const items = [
  { label: "Designali Pro trial", days: 12 },
  { label: "DESIGNALI25 coupon", days: 2 },
  { label: "API key key_demo_...4f", days: 0 },
]

export default function ExpiryCountdownBadges() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between border p-3"
        >
          <span className="truncate text-sm">{item.label}</span>
          {item.days === 0 ? (
            <Badge variant="destructive">Expired</Badge>
          ) : item.days <= 3 ? (
            <Badge className="bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
              <HourglassIcon data-icon="inline-start" />
              {item.days} days left
            </Badge>
          ) : (
            <Badge variant="secondary">
              <CalendarIcon data-icon="inline-start" />
              {item.days} days left
            </Badge>
          )}
        </div>
      ))}
    </div>
  )
}
