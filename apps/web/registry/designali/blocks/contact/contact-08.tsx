"use client"

import { useState } from "react"
import { Briefcase, LifeBuoy, Mail, Newspaper, Phone } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

const departments = [
  {
    id: "sales",
    label: "Sales",
    icon: Briefcase,
    title: "Plan a rollout with our sales team",
    body: "Volume pricing, security reviews and procurement paperwork for teams of 50 or more.",
    email: "sales@ledgerline.app",
    phone: "+1 (646) 555-0190",
    placeholder: "We have 120 finance users across 3 entities and need SSO...",
    response: "Replies in ~2 hours",
  },
  {
    id: "support",
    label: "Support",
    icon: LifeBuoy,
    title: "Get help from a product specialist",
    body: "Stuck on an import, a sync or a report? Include your workspace URL so we can look right away.",
    email: "help@ledgerline.app",
    phone: "+1 (646) 555-0144",
    placeholder: "Our bank feed stopped syncing on Tuesday and shows error 4021...",
    response: "Replies in ~30 minutes",
  },
  {
    id: "press",
    label: "Press",
    icon: Newspaper,
    title: "Media and analyst enquiries",
    body: "Interviews, data requests and brand assets. We aim to respond before your deadline.",
    email: "press@ledgerline.app",
    phone: "+1 (646) 555-0102",
    placeholder: "I'm writing a piece on small business cash flow and would like...",
    response: "Replies same business day",
  },
]

export default function Contact08() {
  const [active, setActive] = useState(departments[0]!.id)
  const dept = departments.find((d) => d.id === active) ?? departments[0]!

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
            Who would you like to reach?
          </h2>
          <div
            role="tablist"
            aria-label="Departments"
            className="grid grid-cols-3 border"
          >
            {departments.map((d) => (
              <button
                key={d.id}
                role="tab"
                type="button"
                aria-selected={active === d.id}
                onClick={() => setActive(d.id)}
                className={cn(
                  "flex h-11 items-center justify-center gap-2 px-4 text-sm transition-colors not-last:border-e",
                  active === d.id
                    ? "bg-foreground text-background"
                    : "hover:bg-muted"
                )}
              >
                <d.icon className="size-4" />
                {d.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid border lg:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col justify-between gap-10 border-b bg-muted/40 p-8 lg:border-e lg:border-b-0 lg:p-10">
            <div className="space-y-4">
              <p className="text-xs text-emerald-700 dark:text-emerald-400">
                {dept.response}
              </p>
              <h3 className="text-2xl font-semibold tracking-tight">
                {dept.title}
              </h3>
              <p className="text-sm text-muted-foreground">{dept.body}</p>
            </div>
            <div className="space-y-3 text-sm">
              <a href={`mailto:${dept.email}`} className="flex items-center gap-3 hover:underline">
                <Mail className="size-4 text-muted-foreground" />
                {dept.email}
              </a>
              <a href="#" className="flex items-center gap-3 hover:underline">
                <Phone className="size-4 text-muted-foreground" />
                {dept.phone}
              </a>
            </div>
          </div>

          <form key={dept.id} className="space-y-4 p-8 lg:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="Full name" className="h-11" />
              <Input type="email" placeholder="Email" className="h-11" />
            </div>
            {dept.id === "sales" && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Company" className="h-11" />
                <Input placeholder="Number of seats" inputMode="numeric" className="h-11" />
              </div>
            )}
            {dept.id === "support" && (
              <Input placeholder="Workspace URL, e.g. acme.ledgerline.app" className="h-11" />
            )}
            {dept.id === "press" && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Publication" className="h-11" />
                <Input type="date" aria-label="Deadline" className="h-11" />
              </div>
            )}
            <Textarea placeholder={dept.placeholder} className="min-h-36" />
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Send to {dept.label.toLowerCase()}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
