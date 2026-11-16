import { Progress } from "@workspace/ui/components/progress"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { cn } from "@workspace/ui/lib/utils"

const milestones = [
  { at: 25, label: "25%: Figma designs" },
  { at: 60, label: "60%: Next.js build" },
  { at: 100, label: "100%: Launch on Vercel" },
]

export default function ProgressMilestoneTooltip() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-sm flex-col gap-3">
        <div className="flex justify-between text-sm">
          <span className="font-medium">Designali client site</span>
          <span className="text-muted-foreground">67% complete</span>
        </div>
        <div className="relative">
          <Progress value={67} />
          {milestones.map((m) => (
            <Tooltip key={m.at}>
              <TooltipTrigger
                render={
                  <button
                    type="button"
                    aria-label={m.label}
                    className={cn(
                      "absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-background",
                      m.at <= 67 ? "bg-primary" : "bg-muted-foreground"
                    )}
                    style={{ left: m.at + "%" }}
                  />
                }
              />
              <TooltipContent>{m.label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}
