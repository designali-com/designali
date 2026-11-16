"use client"

import { useState } from "react"
import {
  ArrowRight,
  Building2,
  LifeBuoy,
  Newspaper,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

const departments = [
  {
    id: "sales",
    label: "Projects",
    icon: Building2,
    heading: "Start a project with Designali",
    blurb: "Brand identity, UI/UX design and Next.js development for brands that want to stand out.",
    contact: "hello@designali.com",
  },
  {
    id: "support",
    label: "Support",
    icon: LifeBuoy,
    heading: "Get help with templates and blocks",
    blurb: "Questions about installing or customising Designali products? We are happy to help.",
    contact: "support@designali.com",
  },
  {
    id: "press",
    label: "Billing",
    icon: Newspaper,
    heading: "Billing and licences",
    blurb: "Invoices, plan changes and licence questions for designali.com purchases.",
    contact: "billing@designali.com",
  },
]

const offices = [
  { city: "Instagram", address: "@designali.code" },
  { city: "X", address: "@designali_com" },
]

export default function Forms20() {
  const [active, setActive] = useState("sales")
  const department = departments.find((item) => item.id === active) ?? departments[0]!

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
          How can Designali help?
        </h2>

        <div className="mt-10 grid grid-cols-3 border border-border" role="tablist" aria-label="Department">
          {departments.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active === item.id}
              onClick={() => setActive(item.id)}
              className={cn(
                "flex items-center justify-center gap-2 border-border px-2 py-4 text-sm transition-colors not-last:border-r sm:justify-start sm:px-6",
                active === item.id ? "bg-foreground text-background" : "hover:bg-muted"
              )}
            >
              <item.icon className="size-4 shrink-0" />
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid border-x border-b border-border lg:grid-cols-[1fr_1.5fr]">
          <div className="flex flex-col justify-between gap-10 border-b border-border p-6 md:p-10 lg:border-r lg:border-b-0">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">{department.heading}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{department.blurb}</p>
              <a href={`mailto:${department.contact}`} className="mt-6 inline-block font-sans text-sm underline underline-offset-4">
                {department.contact}
              </a>
            </div>
            <ul className="grid gap-6 sm:grid-cols-2">
              {offices.map((office) => (
                <li key={office.city}>
                  <p className="text-sm font-medium">{office.city}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{office.address}</p>
                </li>
              ))}
            </ul>
          </div>

          <form key={active} className="space-y-5 p-6 md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="f20-name">Name</Label>
                <Input id="f20-name" placeholder="Your name" className="h-10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="f20-email">Email</Label>
                <Input id="f20-email" type="email" placeholder="you@example.com" className="h-10" />
              </div>
            </div>

            {active === "sales" && (
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="f20-company">Company</Label>
                  <Input id="f20-company" placeholder="Your company" className="h-10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="f20-size">Team size</Label>
                  <NativeSelect id="f20-size" className="w-full" defaultValue="51-200">
                    <NativeSelectOption value="1-50">1 - 50</NativeSelectOption>
                    <NativeSelectOption value="51-200">51 - 200</NativeSelectOption>
                    <NativeSelectOption value="201-1000">201 - 1,000</NativeSelectOption>
                    <NativeSelectOption value="1000+">1,000+</NativeSelectOption>
                  </NativeSelect>
                </div>
              </div>
            )}

            {active === "support" && (
              <div className="space-y-2">
                <Label htmlFor="f20-workspace">Your site URL</Label>
                <div className="flex">
                  <span className="flex h-10 items-center border border-r-0 border-input bg-muted px-3 text-xs text-muted-foreground">
                    https://
                  </span>
                  <Input id="f20-workspace" placeholder="your-site.vercel.app" className="h-10" />
                </div>
              </div>
            )}

            {active === "press" && (
              <div className="space-y-2">
                <Label htmlFor="f20-outlet">Invoice number</Label>
                <Input id="f20-outlet" placeholder="INV-2026-0042" className="h-10" />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="f20-message">Message</Label>
              <Textarea id="f20-message" rows={5} placeholder="A few lines about what you need..." />
            </div>
            <div className="flex justify-end">
              <Button type="submit" size="lg">
                Send to {department.label.toLowerCase()}
                <ArrowRight />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
