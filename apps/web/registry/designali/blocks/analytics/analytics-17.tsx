import { Check, Flag } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const milestones = [
  { arr: 100, label: "$100k ARR", date: "Feb 2025", note: "First 40 paying teams, all founder-led sales." },
  { arr: 500, label: "$500k ARR", date: "Sep 2025", note: "Self-serve checkout shipped. Sales cycle cut to 9 days." },
  { arr: 1000, label: "$1M ARR", date: "Mar 2026", note: "Opened the EU region and hired the first AE." },
  { arr: 2500, label: "$2.5M ARR", date: "Oct 2026", note: "Enterprise plan with SSO now 31% of new bookings." },
  { arr: 5000, label: "$5M ARR", date: "Target Q3 2027", note: "Requires 118% net revenue retention to hit plan." },
]

const currentArr = 2870
const goal = 5000

export default function Analytics17() {
  const progress = (currentArr / goal) * 100

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Investor update, November 2026
            </p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
              The road to $5M ARR
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-4xl font-semibold tracking-tight">$2.87M</p>
            <p className="text-sm text-muted-foreground">Current ARR, {progress.toFixed(0)}% of goal</p>
          </div>
        </div>

        <div className="relative mt-14 hidden md:block">
          <div className="absolute top-4 right-0 left-0 h-1 bg-muted" />
          <div className="absolute top-4 left-0 h-1 bg-primary" style={{ width: `${progress}%` }} />
          <div
            className="absolute top-0 -translate-x-1/2"
            style={{ left: `${progress}%` }}
          >
            <span className="block size-9 animate-pulse rounded-full bg-primary/20" />
          </div>
          <ol className="relative grid grid-cols-5">
            {milestones.map((m) => {
              const done = m.arr <= currentArr
              return (
                <li key={m.label} className="pr-6">
                  <span
                    className={cn(
                      "flex size-9 items-center justify-center rounded-full border-2",
                      done
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground"
                    )}
                  >
                    {done ? <Check className="size-4" /> : <Flag className="size-4" />}
                  </span>
                  <p className="mt-6 text-lg font-medium">{m.label}</p>
                  <p className="text-xs text-muted-foreground">{m.date}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{m.note}</p>
                </li>
              )
            })}
          </ol>
        </div>

        <ol className="mt-10 space-y-0 border-l-2 md:hidden">
          {milestones.map((m) => {
            const done = m.arr <= currentArr
            return (
              <li key={m.label} className="relative pb-8 pl-8 last:pb-0">
                <span
                  className={cn(
                    "absolute top-0 -left-[13px] flex size-6 items-center justify-center rounded-full border-2",
                    done
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground"
                  )}
                >
                  {done ? <Check className="size-3" /> : <Flag className="size-3" />}
                </span>
                <p className="font-medium">{m.label}</p>
                <p className="text-xs text-muted-foreground">{m.date}</p>
                <p className="mt-2 text-sm text-muted-foreground">{m.note}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
