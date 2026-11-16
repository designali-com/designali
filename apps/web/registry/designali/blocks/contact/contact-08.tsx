"use client"

import { useState } from "react"
import {
  Briefcase,
  LifeBuoy,
  Mail,
  Newspaper,
  Phone,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

const departments = [
  {
    id: "sales",
    label: "Projects",
    icon: Briefcase,
    title: "Start a project with Designali",
    body: "Brand identity, UI/UX design, web design and Next.js development, scoped by Ali Imam.",
    email: "hello@designali.com",
    phone: "Book a 30-minute call",
    placeholder: "We need a brand identity and a Next.js website for our launch in...",
    response: "Replies in ~2 hours",
  },
  {
    id: "support",
    label: "Support",
    icon: LifeBuoy,
    title: "Get help with templates and blocks",
    body: "Stuck installing a block, an icon pack or a template? Include the page URL so we can look right away.",
    email: "support@designali.com",
    phone: "Read the docs",
    placeholder: "The hero block from /blocks is not picking up my Tailwind CSS theme...",
    response: "Replies in ~30 minutes",
  },
  {
    id: "press",
    label: "Press",
    icon: Newspaper,
    title: "Media and interview enquiries",
    body: "Interviews with Ali Imam, Designali brand assets and project features. We aim to respond before your deadline.",
    email: "ali@designali.com",
    phone: "Download brand assets",
    placeholder: "I'm writing a piece on design engineering and would like...",
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
              <a href="https://cal.com/aliimam/30min" className="flex items-center gap-3 hover:underline">
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
                <Input placeholder="Budget (USD)" inputMode="numeric" className="h-11" />
              </div>
            )}
            {dept.id === "support" && (
              <Input placeholder="Page URL, e.g. designali.com/blocks/hero" className="h-11" />
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
