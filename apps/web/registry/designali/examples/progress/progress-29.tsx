import {
  Droplet as DropletIcon,
  Footprints as FootprintsIcon,
  Moon as MoonIcon,
} from "@designali/icons"

import { Progress, ProgressLabel } from "@workspace/ui/components/progress"

const goals = [
  {
    label: "Steps",
    icon: FootprintsIcon,
    value: 7420,
    max: 10000,
    unit: "steps",
  },
  { label: "Water", icon: DropletIcon, value: 1.6, max: 2.5, unit: "L" },
  { label: "Sleep", icon: MoonIcon, value: 6.5, max: 8, unit: "h" },
]

export default function DailyFitnessGoals() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <p className="text-sm font-medium">Today&apos;s goals</p>
      {goals.map((goal) => (
        <div key={goal.label} className="flex items-center gap-3">
          <div className="flex size-8 shrink-0 items-center justify-center bg-muted">
            <goal.icon className="size-4" />
          </div>
          <Progress
            value={goal.value}
            max={goal.max}
            className="flex-1 gap-1.5"
          >
            <ProgressLabel>{goal.label}</ProgressLabel>
            <span className="ms-auto text-xs text-muted-foreground tabular-nums">
              {goal.value.toLocaleString("en-US")} /{" "}
              {goal.max.toLocaleString("en-US")} {goal.unit}
            </span>
          </Progress>
        </div>
      ))}
    </div>
  )
}
