import {
  Heart as HeartIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Progress } from "@workspace/ui/components/progress"

export default function FundraisingGoal() {
  const raised = 18450
  const goal = 25000

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div>
        <p className="text-xs text-muted-foreground">
          Open-source @designali/icons
        </p>
        <p className="text-2xl font-semibold tabular-nums">
          {"$" + raised.toLocaleString("en-US")}
          <span className="text-sm font-normal text-muted-foreground">
            {" raised of $" + goal.toLocaleString("en-US")}
          </span>
        </p>
      </div>
      <Progress
        value={raised}
        max={goal}
        aria-label="Funds raised"
        className="[&_[data-slot=progress-track]]:h-2"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>312 backers</span>
        <span>11 days left</span>
      </div>
      <Button className="w-full">
        <HeartIcon data-icon="inline-start" />
        Back this project
      </Button>
    </div>
  )
}
