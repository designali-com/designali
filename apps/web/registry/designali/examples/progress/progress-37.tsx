import {
  Trophy as TrophyIcon,
} from "@designali/icons"

import { Progress, ProgressLabel } from "@workspace/ui/components/progress"

export default function LevelExperienceBar() {
  return (
    <div className="flex w-full max-w-sm items-center gap-4 border p-4">
      <div className="flex size-12 shrink-0 flex-col items-center justify-center bg-primary text-primary-foreground">
        <span className="text-[10px] uppercase">Lvl</span>
        <span className="text-lg leading-none font-semibold">7</span>
      </div>
      <Progress
        value={2340}
        min={2000}
        max={3000}
        className="flex-1 [&_[data-slot=progress-track]]:h-2"
      >
        <ProgressLabel className="flex items-center gap-1 text-sm font-medium">
          <TrophyIcon className="size-3.5" />
          Trailblazer
        </ProgressLabel>
        <span className="ms-auto text-xs text-muted-foreground tabular-nums">
          660 XP to level 8
        </span>
      </Progress>
    </div>
  )
}
