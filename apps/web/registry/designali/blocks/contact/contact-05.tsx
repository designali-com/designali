"use client"

import { useState } from "react"
import {
  Check,
  Copy,
  ExternalLink,
  Mail,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const offices = [
  {
    city: "Studio",
    timezone: "New projects",
    email: "hello@designali.com",
    link: "Book a call",
    href: "https://cal.com/aliimam/30min",
    address: ["Brand identity, UI/UX design", "Web design and Next.js development"],
  },
  {
    city: "Support",
    timezone: "Templates & blocks",
    email: "support@designali.com",
    link: "Read the docs",
    href: "https://www.designali.com/docs",
    address: ["Help with templates, blocks", "@designali/icons and logos"],
  },
  {
    city: "Billing",
    timezone: "Orders & licenses",
    email: "billing@designali.com",
    link: "View pricing",
    href: "https://www.designali.com/pricing",
    address: ["Invoices, refunds and", "Designali Pro licenses"],
  },
]

export default function Contact05() {
  const [copied, setCopied] = useState<string | null>(null)

  function copy(value: string) {
    navigator.clipboard?.writeText(value)
    setCopied(value)
    setTimeout(() => setCopied(null), 1600)
  }

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 border-b pb-10 md:flex-row md:items-end">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Three desks,
            <br />
            one studio.
          </h2>
          <p className="max-w-sm text-muted-foreground">
            Reach the right desk at Designali. Every email lands with Ali Imam
            and the studio team.
          </p>
        </div>

        <div className="divide-y">
          {offices.map((office) => (
            <div
              key={office.city}
              className="grid gap-6 py-10 md:grid-cols-[1fr_1fr_auto] md:items-center"
            >
              <div className="flex items-baseline gap-3">
                <h3 className="text-3xl font-medium tracking-tight">
                  {office.city}
                </h3>
                <span className="text-xs text-muted-foreground">
                  {office.timezone}
                </span>
              </div>
              <address className="text-sm leading-6 text-muted-foreground not-italic">
                {office.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button
                  variant="outline"
                  onClick={() => copy(office.email)}
                  className="justify-between gap-3"
                >
                  <Mail />
                  {office.email}
                  {copied === office.email ? <Check /> : <Copy />}
                </Button>
                <Button
                  variant="ghost"
                  nativeButton={false}
                  render={<a href={office.href} />}
                >
                  <ExternalLink />
                  {office.link}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
