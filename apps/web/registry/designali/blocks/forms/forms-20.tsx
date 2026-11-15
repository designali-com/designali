"use client"

import { useState } from "react"
import { ArrowRight, Building2, LifeBuoy, Newspaper } from "lucide-react"

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
    label: "Sales",
    icon: Building2,
    heading: "Talk to our sales team",
    blurb: "Volume pricing, security reviews and custom contracts for teams of 50+.",
    contact: "sales@brightwater.dev",
  },
  {
    id: "support",
    label: "Support",
    icon: LifeBuoy,
    heading: "Get help from an engineer",
    blurb: "Real engineers answer every ticket, 24/5. Paid plans get a 4-hour SLA.",
    contact: "help@brightwater.dev",
  },
  {
    id: "press",
    label: "Press",
    icon: Newspaper,
    heading: "Press and media",
    blurb: "Interviews, brand assets and commentary on developer tooling.",
    contact: "press@brightwater.dev",
  },
]

const offices = [
  { city: "Toronto", address: "220 King St W, Floor 9" },
  { city: "Lisbon", address: "Rua da Prata 80, 3D" },
]

export default function Forms20() {
  const [active, setActive] = useState("sales")
  const department = departments.find((item) => item.id === active) ?? departments[0]

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
          How can we help?
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
              <a href="#" className="mt-6 inline-block font-mono text-sm underline underline-offset-4">
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
                <Input id="f20-name" placeholder="Kofi Mensah" className="h-10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="f20-email">Email</Label>
                <Input id="f20-email" type="email" placeholder="kofi@lumenhq.com" className="h-10" />
              </div>
            </div>

            {active === "sales" && (
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="f20-company">Company</Label>
                  <Input id="f20-company" placeholder="Lumen HQ" className="h-10" />
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
                <Label htmlFor="f20-workspace">Workspace URL</Label>
                <div className="flex">
                  <span className="flex h-10 items-center border border-r-0 border-input bg-muted px-3 text-xs text-muted-foreground">
                    https://
                  </span>
                  <Input id="f20-workspace" placeholder="lumen.brightwater.dev" className="h-10" />
                </div>
              </div>
            )}

            {active === "press" && (
              <div className="space-y-2">
                <Label htmlFor="f20-outlet">Publication</Label>
                <Input id="f20-outlet" placeholder="The Compile Weekly" className="h-10" />
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
