"use client"

import { useState } from "react"
import {
  Clock,
  Globe,
  Video,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const days = [
  { id: "mon", weekday: "Mon", date: "16", open: true },
  { id: "tue", weekday: "Tue", date: "17", open: true },
  { id: "wed", weekday: "Wed", date: "18", open: false },
  { id: "thu", weekday: "Thu", date: "19", open: true },
  { id: "fri", weekday: "Fri", date: "20", open: true },
  { id: "sat", weekday: "Sat", date: "21", open: false },
  { id: "sun", weekday: "Sun", date: "22", open: false },
]

const slots: Record<string, string[]> = {
  mon: ["09:00", "09:30", "11:00", "13:30", "15:00", "16:30"],
  tue: ["10:00", "10:30", "14:00", "14:30"],
  thu: ["09:00", "12:00", "12:30", "15:30", "16:00", "17:00"],
  fri: ["09:30", "10:00", "11:30"],
}

export default function Forms13() {
  const [day, setDay] = useState("mon")
  const [slot, setSlot] = useState<string | null>("11:00")
  const selectedDay = days.find((item) => item.id === day)

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid border border-border md:grid-cols-[280px_1fr]">
          <div className="space-y-6 border-b border-border p-6 md:border-r md:border-b-0 md:p-8">
            <img
              src="/ali.jpg"
              alt="Ali Imam"
              className="size-12 object-cover"
            />
            <div>
              <p className="text-xs text-muted-foreground">Ali Imam, Founder of Designali</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">Intro call</h2>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3"><Clock className="size-4" /> 30 minutes</li>
              <li className="flex items-center gap-3"><Video className="size-4" /> Video call, link by email</li>
              <li className="flex items-center gap-3"><Globe className="size-4" /> India Standard Time</li>
            </ul>
            <p className="text-sm leading-6 text-muted-foreground">
              A 30-minute call with Ali Imam to talk about your brand, website
              or product, and how Designali can help.
            </p>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-medium">Select a date</h3>
              <p className="text-xs text-muted-foreground">November 2026</p>
            </div>
            <div className="mt-4 grid grid-cols-7 gap-1">
              {days.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  disabled={!item.open}
                  onClick={() => {
                    setDay(item.id)
                    setSlot(null)
                  }}
                  aria-pressed={day === item.id}
                  className={cn(
                    "flex flex-col items-center gap-1 border py-3 text-xs transition-colors disabled:cursor-not-allowed disabled:opacity-40",
                    day === item.id
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:bg-muted"
                  )}
                >
                  <span className="opacity-70">{item.weekday}</span>
                  <span className="text-base font-medium">{item.date}</span>
                </button>
              ))}
            </div>

            <h3 className="mt-8 text-sm font-medium">
              Available times on {selectedDay?.weekday} {selectedDay?.date}
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4">
              {(slots[day] ?? []).map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSlot(time)}
                  aria-pressed={slot === time}
                  className={cn(
                    "border py-2.5 font-mono text-sm transition-colors",
                    slot === time
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-foreground"
                  )}
                >
                  {time}
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground" aria-live="polite">
                {slot ? (
                  <>
                    <span className="text-foreground">{selectedDay?.weekday} {selectedDay?.date} Nov</span> at{" "}
                    <span className="text-foreground">{slot}</span>
                  </>
                ) : (
                  "Pick a time to continue"
                )}
              </p>
              <Button size="lg" disabled={!slot}>Confirm booking</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
