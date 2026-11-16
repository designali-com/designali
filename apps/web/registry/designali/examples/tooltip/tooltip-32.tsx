import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const events: Record<number, string[]> = {
  3: ["Sprint planning"],
  9: ["Client call 9:30", "Studio lunch"],
  14: ["Brand identity review"],
  21: ["Figma design day", "Next.js build day", "Vercel deploy"],
  27: ["designali.com launch"],
}

export default function CalendarEventDotTooltips() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-xs flex-col gap-2 border p-3">
        <span className="text-sm font-medium">July 2026</span>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) =>
            events[day] ? (
              <Tooltip key={day}>
                <TooltipTrigger
                  render={
                    <button
                      type="button"
                      className="flex h-8 flex-col items-center justify-center gap-0.5 bg-muted font-medium hover:bg-accent"
                    />
                  }
                >
                  {day}
                  <span className="size-1 rounded-full bg-primary" />
                </TooltipTrigger>
                <TooltipContent className="flex-col items-start gap-0.5">
                  {events[day]!.map((e) => (
                    <span key={e}>{e}</span>
                  ))}
                </TooltipContent>
              </Tooltip>
            ) : (
              <span
                key={day}
                className="flex h-8 items-center justify-center text-muted-foreground"
              >
                {day}
              </span>
            )
          )}
        </div>
      </div>
    </TooltipProvider>
  )
}
