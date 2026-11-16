"use client"

import {
  CalendarDays,
  Clock,
  MapPin,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

const sessions = [
  { id: "keynote", time: "09:30", title: "Intro: Design se code tak with Ali Imam" },
  { id: "type", time: "11:00", title: "Workshop: From Figma to Next.js" },
  { id: "systems", time: "14:00", title: "Session: Building a design system with Tailwind CSS" },
  { id: "motion", time: "16:30", title: "Talk: Motion and 3D for brand websites" },
]

const details = [
  { icon: CalendarDays, label: "Thursday, 12 March 2026" },
  { icon: Clock, label: "09:00 – 18:00 IST" },
  { icon: MapPin, label: "Online, hosted by Designali" },
]

export default function Forms05() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto grid max-w-6xl border-x border-border lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-10 border-b border-border bg-foreground p-8 text-background md:p-12 lg:border-r lg:border-b-0">
          <div>
            <p className="text-xs tracking-widest uppercase opacity-60">
              Workshop registration
            </p>
            <h2 className="mt-6 text-5xl leading-none font-semibold tracking-tight md:text-6xl">
              Designali Live 2026
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-6 opacity-70">
              One day of sessions with Ali Imam on brand identity, UI/UX design
              and production-ready code.
            </p>
          </div>
          <ul className="space-y-3 text-sm">
            {details.map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <item.icon className="size-4 opacity-60" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <form className="space-y-8 p-8 md:p-12">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="f5-name">Name</Label>
              <Input id="f5-name" placeholder="Your name" className="h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="f5-email">Email</Label>
              <Input id="f5-email" type="email" placeholder="you@example.com" className="h-10" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="f5-role">Role &amp; company</Label>
              <Input id="f5-role" placeholder="Designer, Your Studio" className="h-10" />
            </div>
          </div>

          <fieldset>
            <legend className="text-sm font-medium">Reserve sessions</legend>
            <p className="mt-1 text-xs text-muted-foreground">
              Sessions are limited to 40 attendees.
            </p>
            <div className="mt-4 divide-y divide-border border border-border">
              {sessions.map((session) => (
                <Label
                  key={session.id}
                  className="flex cursor-pointer items-start gap-4 p-4 hover:bg-muted/50"
                >
                  <Checkbox defaultChecked={session.id === "keynote"} className="mt-0.5" />
                  <span className="w-12 font-sans text-muted-foreground">
                    {session.time}
                  </span>
                  <span className="flex-1 text-sm leading-5">{session.title}</span>
                </Label>
              ))}
            </div>
          </fieldset>

          <div className="flex items-center justify-between gap-4">
            <p className="text-sm">
              <span className="text-2xl font-semibold">$49</span>
              <span className="text-muted-foreground"> / ticket</span>
            </p>
            <Button type="submit" size="lg">
              Register
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
