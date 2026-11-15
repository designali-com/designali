"use client"

import { useState } from "react"
import {
  ArrowRight,
  Building2,
  ChevronDown,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const industries = [
  {
    icon: Landmark,
    label: "Financial services",
    blurb: "Audit-ready workflows for banks, lenders and insurers.",
    links: ["KYC automation", "Loan origination", "Claims intake", "Regulatory reporting"],
    stat: "42 of the top 100 credit unions",
  },
  {
    icon: HeartPulse,
    label: "Healthcare",
    blurb: "HIPAA-aligned forms and patient journeys.",
    links: ["Patient intake", "Referral routing", "Prior authorization", "Care plans"],
    stat: "1.8M patient forms processed monthly",
  },
  {
    icon: GraduationCap,
    label: "Education",
    blurb: "Admissions and student services without the paperwork.",
    links: ["Applications", "Financial aid", "Course approvals", "Alumni updates"],
    stat: "Used by 300+ campuses",
  },
  {
    icon: ShoppingBag,
    label: "Retail",
    blurb: "Vendor onboarding and store operations at scale.",
    links: ["Supplier portal", "Store audits", "Returns approvals", "Franchise ops"],
    stat: "8,000 stores run daily checklists",
  },
  {
    icon: Building2,
    label: "Public sector",
    blurb: "Accessible services for residents and agencies.",
    links: ["Permits", "Grant applications", "Public records", "Inspections"],
    stat: "FedRAMP Moderate in process",
  },
]

export default function Navigation18() {
  const [open, setOpen] = useState(true)
  const [active, setActive] = useState(0)
  const current = industries[active]

  return (
    <section className="relative w-full bg-background">
      <nav className="relative border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-6">
          <a href="#" className="font-semibold tracking-tight">Formwell</a>
          <ul className="hidden items-center gap-1 text-sm md:flex">
            <li>
              <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className={cn(
                  "flex h-9 items-center gap-1 px-3 text-muted-foreground hover:text-foreground",
                  open && "text-foreground"
                )}
              >
                Industries
                <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} />
              </button>
            </li>
            {["Product", "Customers", "Pricing"].map((link) => (
              <li key={link}>
                <a href="#" className="flex h-9 items-center px-3 text-muted-foreground hover:text-foreground">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <Button className="ms-auto">Book a demo</Button>
        </div>

        {open && (
          <div className="absolute inset-x-0 top-full z-20 border-b bg-background">
            <div className="mx-auto grid max-w-7xl md:grid-cols-[280px_1fr]">
              <ul className="flex overflow-x-auto border-b py-2 md:block md:border-e md:border-b-0 md:py-4">
                {industries.map((industry, index) => (
                  <li key={industry.label} className="shrink-0">
                    <button
                      type="button"
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() => setActive(index)}
                      className={cn(
                        "flex w-full items-center gap-3 px-6 py-3 text-start text-sm transition-colors",
                        active === index ? "bg-muted font-medium" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <industry.icon className="size-4 shrink-0" />
                      <span className="whitespace-nowrap">{industry.label}</span>
                      <ArrowRight
                        className={cn("ms-auto hidden size-3.5 md:block", active !== index && "invisible")}
                      />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="grid gap-8 p-6 md:grid-cols-[1fr_240px] md:p-8">
                <div>
                  <p className="text-lg font-medium">{current.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{current.blurb}</p>
                  <ul className="mt-6 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                    {current.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="group flex items-center justify-between border-b py-3 text-sm">
                          {link}
                          <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#" className="flex flex-col justify-between gap-6 bg-foreground p-6 text-background">
                  <current.icon className="size-6" />
                  <span>
                    <span className="block text-xs tracking-widest text-background/60 uppercase">Proof</span>
                    <span className="mt-1 block font-medium">{current.stat}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="h-[420px] md:h-80" aria-hidden />
    </section>
  )
}
