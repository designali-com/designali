"use client"

import { useState } from "react"
import {
  Calendar,
  Check,
  Clock,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const team = [
  { initials: "AI", tone: "bg-amber-200 text-amber-900 dark:bg-amber-900 dark:text-amber-100" },
  { initials: "DS", tone: "bg-sky-200 text-sky-900 dark:bg-sky-900 dark:text-sky-100" },
  { initials: "DV", tone: "bg-emerald-200 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100" },
]

const days = [
  { day: "Tue", date: "18", slots: ["09:30", "11:00", "14:30"] },
  { day: "Wed", date: "19", slots: ["10:00", "13:00", "16:00"] },
  { day: "Thu", date: "20", slots: ["09:00", "12:30", "15:30"] },
]

export default function CallToAction14() {
  const [day, setDay] = useState(0)
  const [slot, setSlot] = useState<string | null>(null)
  const current = days[day]!

  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-px border border-border bg-border lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-10 bg-background p-8 md:p-12">
          <div>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Talk to someone who has done this before.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
              A 25-minute call with Ali Imam. We will look at your
              current stack, estimate migration effort, and tell you honestly
              if Designali is the wrong fit.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {team.map((m) => (
                <span
                  key={m.initials}
                  className={cn(
                    "flex size-10 items-center justify-center rounded-full text-xs font-medium ring-2 ring-background",
                    m.tone
                  )}
                >
                  {m.initials}
                </span>
              ))}
            </div>
            <p className="text-xs leading-5 text-muted-foreground">
              Average reply time under 2 hours,
              <br />
              Mon to Fri, 8am to 6pm CET.
            </p>
          </div>
        </div>
        <div className="bg-muted/40 p-8 md:p-12">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Calendar className="size-4" />
            Pick a time
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2">
            {days.map((d, i) => (
              <button
                key={d.day}
                type="button"
                onClick={() => {
                  setDay(i)
                  setSlot(null)
                }}
                className={cn(
                  "border px-3 py-3 text-center transition-colors",
                  i === day
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background hover:border-foreground/40"
                )}
              >
                <div className="text-xs opacity-70">{d.day}</div>
                <div className="text-lg font-medium">{d.date}</div>
              </button>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {current.slots.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSlot(s)}
                className={cn(
                  "flex items-center justify-center gap-1.5 border px-2 py-2 font-mono text-xs transition-colors",
                  slot === s
                    ? "border-foreground bg-background text-foreground"
                    : "border-border bg-background text-muted-foreground hover:text-foreground"
                )}
              >
                {slot === s ? <Check className="size-3" /> : <Clock className="size-3" />}
                {s}
              </button>
            ))}
          </div>
          <Button size="lg" className="mt-8 w-full" disabled={!slot}>
            {slot ? `Book ${current.day} ${current.date} at ${slot}` : "Select a slot"}
          </Button>
        </div>
      </div>
    </section>
  )
}
