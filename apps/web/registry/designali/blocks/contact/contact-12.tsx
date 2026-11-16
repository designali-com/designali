"use client"

import { useState } from "react"
import {
  CalendarCheck,
  Clock,
  Globe,
  Video,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const days = [
  { key: "mon", label: "Mon", date: 16 },
  { key: "tue", label: "Tue", date: 17 },
  { key: "wed", label: "Wed", date: 18 },
  { key: "thu", label: "Thu", date: 19 },
  { key: "fri", label: "Fri", date: 20 },
]

const slots: Record<string, string[]> = {
  mon: ["9:00", "9:30", "11:00", "14:30", "16:00"],
  tue: ["10:00", "13:00", "13:30", "15:00"],
  wed: ["9:00", "10:30", "12:00", "14:00", "15:30", "16:30"],
  thu: ["11:30", "15:00"],
  fri: ["9:30", "10:00", "11:00"],
}

export default function Contact12() {
  const [day, setDay] = useState("wed")
  const [time, setTime] = useState<string | null>(null)
  const current = days.find((d) => d.key === day)!

  return (
    <section className="w-full bg-muted/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl border bg-background lg:grid-cols-[1fr_1.6fr]">
        <div className="flex flex-col gap-8 border-b p-8 lg:border-e lg:border-b-0 lg:p-10">
          <div className="flex items-center gap-3">
            <img src="/ali.jpg" alt="Ali Imam" className="size-11 rounded-full object-cover" />
            <div className="text-sm">
              <p className="font-medium">Ali Imam</p>
              <p className="text-muted-foreground">Founder, Designali</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Book a 30-minute intro call
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We&apos;ll look at your brand, product and goals, answer questions
              and sketch a design-to-code plan together.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Clock className="size-4" /> 30 minutes
            </li>
            <li className="flex items-center gap-3">
              <Video className="size-4" /> Video call, link sent on booking
            </li>
            <li className="flex items-center gap-3">
              <Globe className="size-4" /> Times shown in your local time zone
            </li>
          </ul>
        </div>

        <div className="p-8 lg:p-10">
          <p className="text-sm font-medium">November 2026</p>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {days.map((d) => (
              <button
                key={d.key}
                type="button"
                onClick={() => {
                  setDay(d.key)
                  setTime(null)
                }}
                className={cn(
                  "flex flex-col items-center gap-1 border py-3 transition-colors",
                  day === d.key
                    ? "border-foreground bg-foreground text-background"
                    : "hover:bg-muted"
                )}
              >
                <span className="text-xs opacity-70">{d.label}</span>
                <span className="text-lg font-semibold">{d.date}</span>
              </button>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            {slots[day]!.length} times available on {current.label} {current.date}
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
            {slots[day]!.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setTime(slot)}
                className={cn(
                  "h-11 border text-sm transition-colors",
                  time === slot
                    ? "border-primary bg-primary text-primary-foreground"
                    : "hover:border-foreground"
                )}
              >
                {slot}
              </button>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm">
              {time ? (
                <>
                  <span className="font-medium">
                    {current.label} {current.date} Nov, {time}
                  </span>
                  <span className="text-muted-foreground"> &middot; 30 min</span>
                </>
              ) : (
                <span className="text-muted-foreground">Pick a time to continue</span>
              )}
            </p>
            <Button size="lg" disabled={!time}>
              <CalendarCheck />
              Confirm booking
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
