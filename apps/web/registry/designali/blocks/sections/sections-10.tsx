"use client"

import { useState } from "react"
import {
  ArrowUpRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const roles = [
  { title: "Senior Product Designer", team: "Design", location: "Remote", type: "Full-time" },
  { title: "Brand Designer", team: "Design", location: "Remote", type: "Contract" },
  { title: "Frontend Developer, Next.js", team: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Design Engineer, Components", team: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Motion & 3D Designer", team: "Creative", location: "Remote", type: "Contract" },
  { title: "Illustrator, @designali/vectors", team: "Creative", location: "Remote", type: "Part-time" },
  { title: "Studio Producer", team: "Operations", location: "Remote", type: "Full-time" },
]

const teams = ["All", ...Array.from(new Set(roles.map((role) => role.team)))]

export default function Sections10() {
  const [team, setTeam] = useState("All")
  const visible = team === "All" ? roles : roles.filter((role) => role.team === team)

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest text-muted-foreground uppercase">Careers</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {roles.length} open roles
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">
            Join Ali Imam and the Designali studio. Design se code tak.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter by team">
          {teams.map((item) => {
            const count = item === "All" ? roles.length : roles.filter((role) => role.team === item).length
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={team === item}
                onClick={() => setTeam(item)}
                className={cn(
                  "flex items-center gap-2 border px-3 py-1.5 text-xs transition-colors",
                  team === item ? "border-foreground bg-foreground text-background" : "border-border hover:bg-muted"
                )}
              >
                {item}
                <span className="font-sans opacity-60">{count}</span>
              </button>
            )
          })}
        </div>

        <ul className="mt-8 border-t border-border">
          {visible.map((role) => (
            <li key={role.title}>
              <a
                href="mailto:hello@designali.com"
                className="group grid gap-2 border-b border-border py-5 transition-colors hover:bg-muted/50 sm:grid-cols-[1fr_140px_120px_24px] sm:items-center sm:gap-6 sm:px-3"
              >
                <span>
                  <span className="block text-base font-medium">{role.title}</span>
                  <span className="text-xs text-muted-foreground">{role.team}</span>
                </span>
                <span className="text-sm text-muted-foreground">{role.location}</span>
                <span className="text-sm text-muted-foreground">{role.type}</span>
                <ArrowUpRight className="hidden size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground sm:block" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-4 border border-dashed border-border p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Nothing that fits? Write to hello@designali.com with your work.
          </p>
          <Button variant="outline" nativeButton={false} render={<a href="mailto:hello@designali.com" />}>
            Open application
          </Button>
        </div>
      </div>
    </section>
  )
}
