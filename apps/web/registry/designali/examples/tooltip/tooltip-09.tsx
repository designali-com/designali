import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
const hours = [6.5, 8, 7.25, 9, 4.5]

export default function ProviderGroupedTooltips() {
  return (
    <TooltipProvider delay={500}>
      <div className="flex w-full max-w-xs flex-col gap-2">
        <span className="text-sm font-medium">Focus time this week</span>
        <div className="flex h-28 items-end gap-2">
          {days.map((day, i) => (
            <Tooltip key={day}>
              <TooltipTrigger
                render={
                  <button
                    type="button"
                    aria-label={day}
                    className="flex-1 bg-primary/80 hover:bg-primary"
                    style={{ height: hours[i]! * 10 + "%" }}
                  />
                }
              />
              <TooltipContent>
                {day}: {hours[i]} h
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <div className="flex gap-2 text-center text-[10px] text-muted-foreground">
          {days.map((d) => (
            <span key={d} className="flex-1">
              {d}
            </span>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}
