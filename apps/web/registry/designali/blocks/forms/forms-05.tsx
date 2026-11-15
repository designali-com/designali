"use client"

import { CalendarDays, Clock, MapPin } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

const sessions = [
  { id: "keynote", time: "09:30", title: "Opening keynote: Designing for slowness" },
  { id: "type", time: "11:00", title: "Workshop: Variable type in production" },
  { id: "systems", time: "14:00", title: "Panel: Design systems at scale" },
  { id: "motion", time: "16:30", title: "Talk: Motion as a brand language" },
]

const details = [
  { icon: CalendarDays, label: "Thursday, 12 March 2026" },
  { icon: Clock, label: "09:00 – 18:00 CET" },
  { icon: MapPin, label: "Kraftwerk, Berlin" },
]

export default function Forms05() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto grid max-w-6xl border-x border-border lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-10 border-b border-border bg-foreground p-8 text-background md:p-12 lg:border-r lg:border-b-0">
          <div>
            <p className="text-xs tracking-widest uppercase opacity-60">
              Conference registration
            </p>
            <h2 className="mt-6 text-5xl leading-none font-semibold tracking-tight md:text-6xl">
              Form &amp; Function 2026
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-6 opacity-70">
              One day of talks and workshops on craft, type and interface
              design. 400 seats, no livestream.
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
              <Input id="f5-name" placeholder="Lena Fischer" className="h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="f5-email">Email</Label>
              <Input id="f5-email" type="email" placeholder="lena@studio.de" className="h-10" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="f5-role">Role &amp; company</Label>
              <Input id="f5-role" placeholder="Art Director, Studio Nord" className="h-10" />
            </div>
          </div>

          <fieldset>
            <legend className="text-sm font-medium">Reserve sessions</legend>
            <p className="mt-1 text-xs text-muted-foreground">
              Workshops are limited to 40 attendees.
            </p>
            <div className="mt-4 divide-y divide-border border border-border">
              {sessions.map((session) => (
                <Label
                  key={session.id}
                  className="flex cursor-pointer items-start gap-4 p-4 hover:bg-muted/50"
                >
                  <Checkbox defaultChecked={session.id === "keynote"} className="mt-0.5" />
                  <span className="w-12 font-mono text-muted-foreground">
                    {session.time}
                  </span>
                  <span className="flex-1 text-sm leading-5">{session.title}</span>
                </Label>
              ))}
            </div>
          </fieldset>

          <div className="flex items-center justify-between gap-4">
            <p className="text-sm">
              <span className="text-2xl font-semibold">€290</span>
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
