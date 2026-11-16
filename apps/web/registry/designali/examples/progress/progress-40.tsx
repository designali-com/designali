import { Badge } from "@workspace/ui/components/badge"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

const milestones = [
  { title: "More Apple device mockups", quarter: "Q1", value: 100 },
  { title: "Illustrations library", quarter: "Q2", value: 72 },
  { title: "Figma kits for every block", quarter: "Q3", value: 30 },
  { title: "AI workflow templates", quarter: "Q4", value: 5 },
]

export default function QuarterlyMilestones() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <p className="text-sm font-medium">2027 roadmap</p>
      {milestones.map((m) => (
        <div key={m.title} className="flex items-center gap-3">
          <Badge
            variant={m.value === 100 ? "default" : "outline"}
            className="w-9"
          >
            {m.quarter}
          </Badge>
          <Progress value={m.value} className="flex-1 gap-1.5">
            <ProgressLabel>{m.title}</ProgressLabel>
            <ProgressValue />
          </Progress>
        </div>
      ))}
    </div>
  )
}
