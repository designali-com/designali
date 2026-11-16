"use client"

import { useState } from "react"
import {
  MapPin,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

type Session = { time: string; end: string; title: string; speaker?: string; room: string; track: "Design" | "Engineering" | "Break" | "Keynote" }

const schedule: Record<string, Session[]> = {
  "Day 1": [
    { time: "09:00", end: "09:45", title: "Welcome and studio intro", room: "Lobby", track: "Break" },
    { time: "10:00", end: "10:45", title: "Design se code tak", speaker: "Ali Imam", room: "Main stage", track: "Keynote" },
    { time: "11:00", end: "11:40", title: "Brand identity from scratch", speaker: "Sara", room: "Studio A", track: "Design" },
    { time: "11:00", end: "11:40", title: "Shipping blocks with Next.js", speaker: "Omar", room: "Studio B", track: "Engineering" },
    { time: "12:00", end: "13:15", title: "Lunch break", room: "Lounge", track: "Break" },
    { time: "13:30", end: "14:10", title: "Icons that scale", speaker: "Nina", room: "Studio A", track: "Design" },
    { time: "14:30", end: "15:10", title: "Tailwind CSS design tokens", speaker: "Yuki", room: "Studio B", track: "Engineering" },
  ],
  "Day 2": [
    { time: "09:30", end: "10:15", title: "AI workflows for designers", speaker: "Ali Imam", room: "Main stage", track: "Keynote" },
    { time: "10:30", end: "11:10", title: "CGI and 3D for brands", speaker: "Marta", room: "Studio A", track: "Design" },
    { time: "10:30", end: "11:10", title: "Type-safe Designali blocks", speaker: "Felix", room: "Studio B", track: "Engineering" },
    { time: "11:30", end: "12:30", title: "Community lightning talks", room: "Main stage", track: "Keynote" },
    { time: "12:30", end: "14:00", title: "Portfolio reviews with Ali", room: "Lounge", track: "Break" },
  ],
}

const trackStyle: Record<Session["track"], string> = {
  Keynote: "bg-foreground text-background",
  Design: "bg-rose-100 text-rose-800 dark:bg-rose-500/15 dark:text-rose-300",
  Engineering: "bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-300",
  Break: "bg-muted text-muted-foreground",
}

export default function Lists12() {
  const [day, setDay] = useState("Day 1")
  const dates: Record<string, string> = { "Day 1": "Thu, Mar 18", "Day 2": "Fri, Mar 19" }

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs text-muted-foreground">Designali Live · Online</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">Schedule</h2>
          </div>
          <div role="tablist" className="grid grid-cols-2 border border-border">
            {Object.keys(schedule).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={day === key}
                onClick={() => setDay(key)}
                className={cn(
                  "px-5 py-2 text-left transition-colors",
                  day === key ? "bg-foreground text-background" : "hover:bg-muted"
                )}
              >
                <span className="block text-sm font-medium">{key}</span>
                <span className="block text-[11px] opacity-70">{dates[key]}</span>
              </button>
            ))}
          </div>
        </div>

        <ol className="mt-10 border-t border-border">
          {schedule[day]!.map((session) => (
            <li
              key={session.time + session.title}
              className={cn(
                "grid grid-cols-[4.5rem_1fr] gap-4 border-b border-border py-5 sm:grid-cols-[7rem_1fr_auto] sm:gap-6",
                session.track === "Break" && "bg-muted/30"
              )}
            >
              <div className="font-mono text-sm">
                {session.time}
                <span className="block text-xs text-muted-foreground">{session.end}</span>
              </div>
              <div className="min-w-0">
                <span className={cn("inline-block px-1.5 py-0.5 text-[10px] font-medium tracking-wider uppercase", trackStyle[session.track])}>
                  {session.track}
                </span>
                <h3 className="mt-2 text-base font-medium">{session.title}</h3>
                {session.speaker && <p className="mt-0.5 text-sm text-muted-foreground">{session.speaker}</p>}
                <p className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground sm:hidden">
                  <MapPin className="size-3" /> {session.room}
                </p>
              </div>
              <p className="hidden items-center gap-1 self-start text-xs text-muted-foreground sm:inline-flex">
                <MapPin className="size-3" /> {session.room}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
