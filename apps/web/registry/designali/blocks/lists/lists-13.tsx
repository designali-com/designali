"use client"

import { useState } from "react"
import {
  Mail,
  Search,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const people = [
  { name: "Ali Imam", title: "Founder, Design Engineer", dept: "Leadership", email: "ali@designali.com", status: "online", hue: 25 },
  { name: "Ben", title: "Client Partner", dept: "Studio", email: "ben@designali.com", status: "away", hue: 200 },
  { name: "Chiara", title: "UI/UX Designer", dept: "Design", email: "chiara@designali.com", status: "online", hue: 330 },
  { name: "Dev", title: "Next.js Developer", dept: "Development", email: "dev@designali.com", status: "offline", hue: 150 },
  { name: "Elena", title: "Brand Designer", dept: "Design", email: "elena@designali.com", status: "online", hue: 280 },
  { name: "Femi", title: "Project Manager", dept: "Studio", email: "femi@designali.com", status: "online", hue: 60 },
  { name: "Grace", title: "Frontend Developer", dept: "Development", email: "grace@designali.com", status: "away", hue: 0 },
  { name: "Henrik", title: "Creative Developer", dept: "Development", email: "henrik@designali.com", status: "online", hue: 230 },
  { name: "Isla", title: "Support Lead", dept: "Studio", email: "support@designali.com", status: "offline", hue: 100 },
]

const departments = ["All", "Leadership", "Design", "Development", "Studio"]

const dot: Record<string, string> = {
  online: "bg-primary",
  away: "bg-primary",
  offline: "bg-muted-foreground/40",
}

export default function Lists13() {
  const [query, setQuery] = useState("")
  const [dept, setDept] = useState("All")

  const q = query.trim().toLowerCase()
  const visible = people.filter(
    (person) =>
      (dept === "All" || person.dept === dept) &&
      (person.name.toLowerCase().includes(q) || person.title.toLowerCase().includes(q))
  )

  return (
    <section className="w-full bg-muted/30 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="border border-border bg-background">
          <div className="space-y-4 border-b border-border p-5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold tracking-tight">Designali studio</h2>
              <span className="font-sans text-xs text-muted-foreground">
                {visible.length} of {people.length}
              </span>
            </div>
            <label className="flex h-10 items-center gap-2 border border-border px-3 focus-within:border-foreground">
              <Search className="size-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name or role"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </label>
            <div className="flex flex-wrap gap-1.5">
              {departments.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={dept === item}
                  onClick={() => setDept(item)}
                  className={cn(
                    "border px-2.5 py-1 text-xs transition-colors",
                    dept === item ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <ul className="max-h-[420px] divide-y divide-border overflow-y-auto">
            {visible.map((person) => (
              <li key={person.email} className="flex items-center gap-4 px-5 py-3.5 hover:bg-muted/40">
                <span className="relative shrink-0">
                  <span
                    className="flex size-10 items-center justify-center rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: `oklch(0.55 0.14 ${person.hue})` }}
                  >
                    {person.name.split(" ").map((part) => part[0]).join("")}
                  </span>
                  <span className={cn("absolute right-0 bottom-0 size-2.5 rounded-full ring-2 ring-background", dot[person.status])} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">{person.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {person.title} · {person.dept}
                  </span>
                </span>
                <a
                  href={`mailto:${person.email}`}
                  aria-label={`Email ${person.name}`}
                  className="flex size-8 shrink-0 items-center justify-center border border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <Mail className="size-3.5" />
                </a>
              </li>
            ))}
            {visible.length === 0 && (
              <li className="px-5 py-12 text-center text-sm text-muted-foreground">
                Nobody matches that search.
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}
