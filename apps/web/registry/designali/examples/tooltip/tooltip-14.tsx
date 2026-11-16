import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { cn } from "@workspace/ui/lib/utils"

const days = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  status: i === 11 ? "outage" : i === 4 || i === 22 ? "degraded" : "ok",
}))
const tone: Record<string, string> = {
  ok: "bg-emerald-500",
  degraded: "bg-amber-500",
  outage: "bg-rose-500",
}
const text: Record<string, string> = {
  ok: "No incidents",
  degraded: "Degraded performance",
  outage: "Major outage, 42 min",
}

export default function ServiceStatusTooltips() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-sm flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span className="font-medium">designali.com</span>
          <span className="text-muted-foreground">99.91% uptime</span>
        </div>
        <div className="flex h-8 gap-0.5">
          {days.map((d) => (
            <Tooltip key={d.day}>
              <TooltipTrigger
                render={
                  <button
                    type="button"
                    aria-label={"June " + d.day}
                    className={cn(
                      "flex-1 opacity-80 hover:opacity-100",
                      tone[d.status]
                    )}
                  />
                }
              />
              <TooltipContent>
                June {d.day}: {text[d.status]}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}
