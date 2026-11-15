import { CheckIcon } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  { label: "Create account", done: true },
  { label: "Invite teammates", done: true },
  { label: "Connect calendar", done: false },
  { label: "Book first meeting", done: false },
]

export default function OnboardingStepTooltips() {
  return (
    <TooltipProvider>
      <div className="flex flex-col items-center gap-3">
        <span className="text-sm text-muted-foreground">Step 3 of 4</span>
        <div className="flex items-center gap-2">
          {steps.map((s, i) => (
            <Tooltip key={s.label}>
              <TooltipTrigger
                render={
                  <button
                    type="button"
                    aria-label={s.label}
                    className={cn(
                      "h-2 transition-all",
                      s.done
                        ? "w-6 bg-primary"
                        : i === 2
                          ? "w-10 bg-primary/60"
                          : "w-6 bg-muted"
                    )}
                  />
                }
              />
              <TooltipContent>
                {s.done ? <CheckIcon className="size-3" /> : null}
                {s.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}
