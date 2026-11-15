"use client"

import { useEffect, useState } from "react"
import { CalendarX, MapPin } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const hours = [
  { day: "Monday", open: "07:00", close: "19:00" },
  { day: "Tuesday", open: "07:00", close: "19:00" },
  { day: "Wednesday", open: "07:00", close: "21:00", note: "Late opening" },
  { day: "Thursday", open: "07:00", close: "19:00" },
  { day: "Friday", open: "07:00", close: "20:00" },
  { day: "Saturday", open: "08:00", close: "18:00" },
  { day: "Sunday", open: null, close: null },
]

const closures = [
  { date: "24 Dec", label: "Closes at 14:00" },
  { date: "25-26 Dec", label: "Closed" },
  { date: "1 Jan", label: "Opens at 10:00" },
]

export default function Location10() {
  const [today, setToday] = useState<number | null>(null)

  useEffect(() => {
    const id = setTimeout(() => setToday((new Date().getDay() + 6) % 7), 0)
    return () => clearTimeout(id)
  }, [])

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Opening hours
          </h2>
          <p className="mt-3 text-muted-foreground">
            Fieldwork Bakery &middot; Gorton Road
          </p>

          <table className="mt-10 w-full text-sm">
            <tbody className="divide-y border-y">
              {hours.map((row, index) => {
                const isToday = index === today
                return (
                  <tr key={row.day} className={cn(isToday && "bg-muted")}>
                    <th scope="row" className="py-4 ps-3 text-start font-normal">
                      <span className={cn(isToday && "font-semibold")}>{row.day}</span>
                      {isToday && (
                        <span className="ms-2 bg-primary px-1.5 py-0.5 text-[10px] font-medium text-primary-foreground uppercase">
                          Today
                        </span>
                      )}
                    </th>
                    <td className="hidden py-4 text-xs text-muted-foreground sm:table-cell">
                      {row.note}
                    </td>
                    <td className="py-4 pe-3 text-end tabular-nums">
                      {row.open ? (
                        `${row.open} - ${row.close}`
                      ) : (
                        <span className="text-muted-foreground">Closed</span>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative aspect-square overflow-hidden border bg-amber-50 dark:bg-amber-950/30">
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden>
              <circle cx="100" cy="100" r="80" className="fill-none stroke-amber-200 dark:stroke-amber-900" strokeWidth="1" />
              <circle cx="100" cy="100" r="50" className="fill-none stroke-amber-200 dark:stroke-amber-900" strokeWidth="1" />
              <path d="M0 120 L200 70" className="stroke-background" strokeWidth="10" />
              <path d="M70 0 L120 200" className="stroke-background" strokeWidth="10" />
              <path d="M0 40 C 60 60, 140 20, 200 30" className="stroke-background" strokeWidth="5" fill="none" />
            </svg>
            <span className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg">
              <MapPin className="size-6" />
            </span>
            <p className="absolute start-4 bottom-4 bg-background px-3 py-2 text-xs">
              212 Gorton Road, Leeds LS6 2PQ
            </p>
          </div>

          <div className="border p-6">
            <p className="flex items-center gap-2 text-sm font-medium">
              <CalendarX className="size-4" />
              Holiday hours
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {closures.map((c) => (
                <li key={c.date} className="flex justify-between gap-4">
                  <span className="text-muted-foreground">{c.date}</span>
                  <span>{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
