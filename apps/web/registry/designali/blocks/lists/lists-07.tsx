import {
  Crown,
  TrendingDown,
  TrendingUp,
} from "@designali/icons"

const leaders = [
  { name: "Ines", team: "UI designer", points: 12840, delta: 3 },
  { name: "Kwame", team: "Next.js developer", points: 12215, delta: 1 },
  { name: "Mei", team: "Icon designer", points: 11980, delta: -1 },
  { name: "Oskar", team: "Motion designer", points: 10422, delta: 2 },
  { name: "Ravi", team: "Design engineer", points: 9870, delta: 0 },
  { name: "Clara", team: "Brand designer", points: 9315, delta: -2 },
  { name: "Diego", team: "Frontend developer", points: 8760, delta: 4 },
  { name: "Aiko", team: "3D artist", points: 8104, delta: -1 },
]

const podium = ["bg-amber-400 text-amber-950", "bg-zinc-300 text-zinc-900", "bg-orange-300 text-orange-950"]

export default function Lists07() {
  const top = leaders[0]!.points

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-muted-foreground">Designali community · Week 11</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">Top block builders</h2>
          </div>
          <p className="text-xs text-muted-foreground">Resets in 3 days, 14 hours</p>
        </div>

        <ol className="mt-10 space-y-2">
          {leaders.map((leader, index) => {
            const isTop = index < 3
            return (
              <li
                key={leader.name}
                className={`grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border p-4 ${
                  index === 0 ? "border-amber-400/60 bg-amber-50 dark:bg-amber-400/10" : "border-border bg-background"
                }`}
              >
                <span
                  className={`flex size-10 items-center justify-center font-mono text-sm font-semibold ${
                    isTop ? podium[index] : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index === 0 ? <Crown className="size-4" /> : index + 1}
                </span>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="truncate font-medium">{leader.name}</span>
                    <span className="hidden text-xs text-muted-foreground sm:inline">{leader.team}</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-muted">
                    <div
                      className={index === 0 ? "h-full bg-amber-400" : "h-full bg-foreground/70"}
                      style={{ width: `${(leader.points / top) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm font-semibold">{leader.points.toLocaleString("en-US")}</p>
                  <p
                    className={`mt-0.5 inline-flex items-center gap-1 font-mono text-[10px] ${
                      leader.delta > 0
                        ? "text-emerald-600 dark:text-emerald-400"
                        : leader.delta < 0
                          ? "text-rose-600 dark:text-rose-400"
                          : "text-muted-foreground"
                    }`}
                  >
                    {leader.delta > 0 && <TrendingUp className="size-3" />}
                    {leader.delta < 0 && <TrendingDown className="size-3" />}
                    {leader.delta === 0 ? "—" : Math.abs(leader.delta)}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>

        <div className="mt-4 grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border border-dashed border-foreground/40 p-4">
          <span className="flex size-10 items-center justify-center bg-foreground font-mono text-sm text-background">24</span>
          <span className="font-medium">You</span>
          <span className="font-mono text-sm">5,420</span>
        </div>
      </div>
    </section>
  )
}
