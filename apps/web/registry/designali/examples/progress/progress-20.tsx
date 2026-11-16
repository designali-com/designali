import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@workspace/ui/components/avatar"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

const team = ["Ali Imam", "Theo", "Iris"]

export default function SprintProgressCard() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-medium">
            Sprint 24 &middot; designali.com pricing revamp
          </p>
          <p className="text-xs text-muted-foreground">Ends Friday, Nov 21</p>
        </div>
        <AvatarGroup>
          {team.map((name) => (
            <Avatar key={name} size="sm">
              <AvatarFallback>
                {name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
      </div>
      <Progress
        value={34}
        max={52}
        className="[&_[data-slot=progress-track]]:h-2"
      >
        <ProgressLabel>34 of 52 points</ProgressLabel>
        <ProgressValue />
      </Progress>
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-muted p-2">
          <p className="text-base font-semibold">9</p>Done
        </div>
        <div className="bg-muted p-2">
          <p className="text-base font-semibold">5</p>In review
        </div>
        <div className="bg-muted p-2">
          <p className="text-base font-semibold">4</p>To do
        </div>
      </div>
    </div>
  )
}
