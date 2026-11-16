import { Badge } from "@workspace/ui/components/badge"

const counts = [3, 12, 148, 2400]

function format(value: number) {
  if (value >= 1000) return (value / 1000).toFixed(1).replace(".0", "") + "k"
  if (value > 99) return "99+"
  return String(value)
}

export default function CappedCountBadges() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1">
      {counts.map((count, index) => (
        <div
          key={count}
          className="flex items-center justify-between px-2 py-1.5 hover:bg-muted"
        >
          <span className="text-sm">
            {["Mentions", "Client messages", "Template updates", "Followers"][index]}
          </span>
          <Badge variant="secondary" className="min-w-6 tabular-nums">
            {format(count)}
          </Badge>
        </div>
      ))}
    </div>
  )
}
