"use client"

import { useEffect, useState } from "react"
import {
  Moon,
  Sun,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const offices = [
  { city: "San Francisco", zone: "America/Los_Angeles", email: "hello@designali.com", phone: "Book a call" },
  { city: "New York", zone: "America/New_York", email: "hello@designali.com", phone: "Book a call" },
  { city: "London", zone: "Europe/London", email: "hello@designali.com", phone: "Book a call" },
  { city: "Berlin", zone: "Europe/Berlin", email: "hello@designali.com", phone: "Book a call" },
  { city: "Singapore", zone: "Asia/Singapore", email: "hello@designali.com", phone: "Book a call" },
  { city: "Sydney", zone: "Australia/Sydney", email: "hello@designali.com", phone: "Book a call" },
]

function localTime(date: Date, zone: string) {
  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: zone,
  }).format(date)
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", { hour: "numeric", hourCycle: "h23", timeZone: zone }).format(date)
  )
  return { time, open: hour >= 9 && hour < 18 }
}

export default function Contact17() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    const tick = () => setNow(new Date())
    const first = setTimeout(tick, 0)
    const id = setInterval(tick, 30_000)
    return () => {
      clearTimeout(first)
      clearInterval(id)
    }
  }, [])

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Clients everywhere
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Designali works across time zones.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Ali Imam works async with clients worldwide. Green means it&apos;s
            working hours in that city.
          </p>
        </div>

        <ul className="mt-12 grid gap-px border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office) => {
            const info = now ? localTime(now, office.zone) : null
            return (
              <li key={office.city} className="flex flex-col gap-10 bg-background p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-medium">{office.city}</p>
                    <p
                      className={cn(
                        "mt-1 flex items-center gap-1.5 text-xs",
                        info?.open
                          ? "text-chart-3 dark:text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      <span
                        className={cn(
                          "size-1.5 rounded-full",
                          info?.open ? "bg-primary" : "bg-muted-foreground/40"
                        )}
                      />
                      {info ? (info.open ? "Open now" : "Closed") : " "}
                    </p>
                  </div>
                  {info?.open ? (
                    <Sun className="size-5 text-primary" />
                  ) : (
                    <Moon className="size-5 text-muted-foreground" />
                  )}
                </div>
                <p className="font-sans text-5xl font-light tracking-tight tabular-nums">
                  {info?.time ?? "--:--"}
                </p>
                <div className="space-y-1 border-t pt-4 text-sm">
                  <a href={`mailto:${office.email}`} className="block hover:underline">
                    {office.email}
                  </a>
                  <a href="https://cal.com/aliimam/30min" className="block text-muted-foreground hover:text-foreground">
                    {office.phone}
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
