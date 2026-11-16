import {
  Sparkles as SparklesIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Progress } from "@workspace/ui/components/progress"

export default function TrialDaysRemaining() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border bg-muted/40 p-4">
      <div className="flex items-center gap-2">
        <SparklesIcon className="size-4" />
        <span className="text-sm font-medium">Pro trial</span>
        <span className="ms-auto text-xs text-muted-foreground">
          9 days left
        </span>
      </div>
      <Progress value={5} max={14} aria-label="Trial days used" />
      <p className="text-xs text-muted-foreground">
        Upgrade before Nov 24 to keep every template, block and icon.
      </p>
      <Button size="sm" className="self-start">
        Upgrade to Pro
      </Button>
    </div>
  )
}
