"use client"

import { useState } from "react"
import { CalendarDays, Check, Clock, Globe, Users } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

const speakers = [
  { name: "Priya Nandakumar", role: "Head of Data, Kestrel Bank", initials: "PN" },
  { name: "Marcus Oyelaran", role: "Staff Engineer, Lumen Health", initials: "MO" },
  { name: "Elise Fournier", role: "Product Lead, Driftline", initials: "EF" },
]
const agenda = [
  "Why most analytics migrations stall in month three",
  "Live demo: modelling events without a data team",
  "Panel Q&A with audience questions",
]

export default function Media09() {
  const [done, setDone] = useState(false)

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 border border-border px-2.5 py-1 text-xs font-medium">
            <span className="size-1.5 rounded-full bg-emerald-500" /> Free live webinar
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
            Shipping analytics in 30 days, not 6 months
          </h2>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><CalendarDays className="size-4" /> Thu, 4 Dec 2025</span>
            <span className="flex items-center gap-2"><Clock className="size-4" /> 17:00 - 18:00 GMT</span>
            <span className="flex items-center gap-2"><Globe className="size-4" /> Online, English</span>
            <span className="flex items-center gap-2"><Users className="size-4" /> 1,286 registered</span>
          </div>
          <h3 className="mt-10 text-sm font-medium">What we&apos;ll cover</h3>
          <ol className="mt-3 space-y-3">
            {agenda.map((item, i) => (
              <li key={item} className="flex gap-4 text-sm">
                <span className="font-mono text-muted-foreground">0{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <h3 className="mt-10 text-sm font-medium">Speakers</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {speakers.map((s, i) => (
              <li key={s.name} className="border border-border p-4">
                <span
                  className="flex size-11 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ background: `linear-gradient(135deg, var(--chart-${i + 1}), var(--chart-${i + 3}))` }}
                >
                  {s.initials}
                </span>
                <p className="mt-3 text-sm font-medium">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.role}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:sticky lg:top-10 lg:self-start">
          <div className="border border-border bg-card p-6 text-card-foreground">
            <div className="grid grid-cols-4 gap-2 text-center">
              {[["18", "days"], ["06", "hrs"], ["42", "min"], ["09", "sec"]].map(([n, l]) => (
                <div key={l} className="border border-border py-3">
                  <p className="font-mono text-2xl font-semibold tabular-nums">{n}</p>
                  <p className="text-[11px] text-muted-foreground uppercase">{l}</p>
                </div>
              ))}
            </div>
            {done ? (
              <div className="mt-6 flex flex-col items-center py-8 text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <Check className="size-6" />
                </span>
                <p className="mt-4 font-medium">You&apos;re registered</p>
                <p className="mt-1 text-sm text-muted-foreground">A calendar invite and joining link are on their way.</p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  setDone(true)
                }}
              >
                <div className="space-y-1.5">
                  <Label htmlFor="m09-name">Full name</Label>
                  <Input id="m09-name" required placeholder="Jordan Ellis" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="m09-email">Work email</Label>
                  <Input id="m09-email" type="email" required placeholder="jordan@company.com" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="m09-company">Company</Label>
                  <Input id="m09-company" placeholder="Optional" />
                </div>
                <Button type="submit" size="lg" className="w-full">Save my seat</Button>
                <p className="text-center text-xs text-muted-foreground">Can&apos;t make it live? Register and we&apos;ll send the recording.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
