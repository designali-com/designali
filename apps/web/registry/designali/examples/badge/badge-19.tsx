import { Badge } from "@workspace/ui/components/badge"

const labels = [
  { name: "bug", color: "#d73a4a" },
  { name: "enhancement", color: "#2563eb" },
  { name: "good first issue", color: "#16a34a" },
  { name: "needs triage", color: "#ca8a04" },
  { name: "docs", color: "#7c3aed" },
]

export default function IssueLabelSet() {
  return (
    <div className="flex max-w-sm flex-wrap justify-center gap-1.5">
      {labels.map((label) => (
        <Badge
          key={label.name}
          variant="outline"
          className="rounded-full"
          style={{
            borderColor: label.color + "66",
            backgroundColor: label.color + "1a",
            color: label.color,
          }}
        >
          {label.name}
        </Badge>
      ))}
    </div>
  )
}
