const events: Record<number, { title: string; tone: string }[]> = {
  3: [{ title: "Design crit", tone: "bg-sky-500" }],
  6: [{ title: "Workshop: Design tokens", tone: "bg-violet-500" }],
  10: [{ title: "Community call", tone: "bg-emerald-500" }],
  12: [{ title: "Office hours with Ali", tone: "bg-amber-500" }, { title: "New blocks drop", tone: "bg-rose-500" }],
  17: [{ title: "Design crit", tone: "bg-sky-500" }],
  19: [{ title: "Live: Figma to Next.js", tone: "bg-emerald-500" }],
  20: [{ title: "Workshop: Motion", tone: "bg-violet-500" }],
  24: [{ title: "Community call", tone: "bg-emerald-500" }],
  26: [{ title: "Office hours", tone: "bg-amber-500" }],
  30: [{ title: "Designali year in review", tone: "bg-rose-500" }],
}

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
// December 2026 starts on a Tuesday, so one leading empty cell on a Monday-first grid
const leading = 1
const daysInMonth = 31

const legend = [
  { label: "Crit", tone: "bg-sky-500" },
  { label: "Workshop", tone: "bg-violet-500" },
  { label: "Community", tone: "bg-emerald-500" },
  { label: "Office hours", tone: "bg-amber-500" },
  { label: "Release", tone: "bg-rose-500" },
]

export default function Grid12() {
  const cells = Array.from({ length: leading + daysInMonth }, (_, i) => (i < leading ? null : i - leading + 1))
  while (cells.length % 7 !== 0) cells.push(null)

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Designali events calendar</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">December 2026</h2>
          </div>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {legend.map((item) => (
              <li key={item.label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className={`size-2 ${item.tone}`} />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-l border-border">
          <div className="grid grid-cols-7">
            {weekdays.map((day) => (
              <div key={day} className="border-r border-b border-border bg-muted/50 px-2 py-2 text-[10px] font-medium tracking-wider text-muted-foreground uppercase md:px-3">
                <span className="md:hidden">{day[0]}</span>
                <span className="hidden md:inline">{day}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {cells.map((day, index) => {
              const dayEvents = day ? events[day] ?? [] : []
              return (
                <div
                  key={index}
                  className={`min-h-14 border-r border-b border-border p-1.5 md:min-h-28 md:p-2 ${
                    day ? "bg-background" : "bg-muted/30"
                  }`}
                >
                  {day && (
                    <>
                      <span
                        className={`inline-flex size-6 items-center justify-center font-mono text-xs ${
                          day === 12 ? "bg-foreground text-background" : ""
                        }`}
                      >
                        {day}
                      </span>
                      <div className="mt-1 flex gap-1 md:hidden">
                        {dayEvents.map((event) => (
                          <span key={event.title} className={`size-1.5 ${event.tone}`} />
                        ))}
                      </div>
                      <ul className="mt-1 hidden space-y-1 md:block">
                        {dayEvents.map((event) => (
                          <li key={event.title} className="flex items-center gap-1.5 truncate bg-muted px-1.5 py-1 text-[11px]">
                            <span className={`size-1.5 shrink-0 ${event.tone}`} />
                            <span className="truncate">{event.title}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
