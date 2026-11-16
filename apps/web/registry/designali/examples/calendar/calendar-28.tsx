import { Calendar } from "@workspace/ui/components/calendar"

const year = new Date().getFullYear()
const fullDays = [
  new Date(year, 11, 25),
  new Date(year, 11, 26),
  new Date(year + 1, 0, 1),
]
const halfDays = [new Date(year, 11, 24), new Date(year, 11, 31)]

export default function HolidayLegendCalendar() {
  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3">
      <Calendar
        defaultMonth={new Date(year, 11)}
        modifiers={{ holiday: fullDays, half: halfDays }}
        modifiersClassNames={{
          holiday:
            "[&>button]:bg-rose-500/15 [&>button]:text-rose-700 dark:[&>button]:text-rose-400",
          half: "[&>button]:bg-[linear-gradient(135deg,var(--color-amber-500)_50%,transparent_50%)]/20 [&>button]:text-amber-700 dark:[&>button]:text-amber-400",
        }}
        className="border"
      />
      <div className="flex w-full justify-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 bg-rose-500/30" /> Studio closed
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 bg-amber-500/30" /> Half day
        </span>
      </div>
    </div>
  )
}
