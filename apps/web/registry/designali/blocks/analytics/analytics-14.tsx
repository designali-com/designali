const weeks = 26
const dayLabels = ["Mon", "", "Wed", "", "Fri", "", "Sun"]

function level(week: number, day: number) {
  const base = Math.sin(week * 0.7 + day * 1.3) + Math.cos(week * 0.31 - day * 0.9)
  const weekend = day >= 5 ? -1.1 : 0
  const ramp = week / weeks
  const score = base + weekend + ramp * 1.4
  if (score < -0.8) return 0
  if (score < 0) return 1
  if (score < 0.7) return 2
  if (score < 1.4) return 3
  return 4
}

const tones = [
  "bg-muted",
  "bg-emerald-200 dark:bg-emerald-900",
  "bg-emerald-400 dark:bg-emerald-700",
  "bg-emerald-500 dark:bg-emerald-500",
  "bg-emerald-700 dark:bg-emerald-300",
]

const monthLabels = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"]

export default function Analytics14() {
  const grid = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => level(w, d))
  )
  const activeDays = grid.flat().filter((l) => l > 0).length

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Deploy activity</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Production deploys for the designali.com studio, last 26 weeks.
            </p>
          </div>
          <div className="flex gap-8 text-sm">
            <div>
              <p className="text-2xl font-semibold">1,906</p>
              <p className="text-xs text-muted-foreground">Deploys</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">{activeDays}</p>
              <p className="text-xs text-muted-foreground">Active days</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">23</p>
              <p className="text-xs text-muted-foreground">Day streak</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border p-4 md:p-6">
          <div className="mb-2 ml-8 grid grid-cols-6 text-[10px] text-muted-foreground">
            {monthLabels.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="grid w-6 shrink-0 grid-rows-7 gap-[3px] text-[9px] leading-none text-muted-foreground">
              {dayLabels.map((d, i) => (
                <span key={i} className="flex items-center">
                  {d}
                </span>
              ))}
            </div>
            <div
              className="grid min-w-0 flex-1 grid-flow-col grid-rows-7 gap-[3px]"
              style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}
            >
              {grid.map((week, w) =>
                week.map((l, d) => (
                  <div
                    key={`${w}-${d}`}
                    title={`Week ${w + 1}, ${["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][d]}: level ${l}`}
                    className={`aspect-square w-full ${tones[l]}`}
                  />
                ))
              )}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-end gap-1.5 text-[10px] text-muted-foreground">
            <span>Less</span>
            {tones.map((t) => (
              <span key={t} className={`size-3 ${t}`} />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  )
}
