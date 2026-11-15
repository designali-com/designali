"use client"

import { useState } from "react"
import { Check, Copy, Mail, Phone } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const offices = [
  {
    city: "London",
    timezone: "GMT",
    email: "london@fieldwork.co",
    phone: "+44 20 7946 0958",
    address: ["48 Shoreditch High St", "London E1 6PG"],
  },
  {
    city: "New York",
    timezone: "EST",
    email: "nyc@fieldwork.co",
    phone: "+1 212 555 0187",
    address: ["101 Greene St, Floor 4", "New York, NY 10012"],
  },
  {
    city: "Singapore",
    timezone: "SGT",
    email: "sg@fieldwork.co",
    phone: "+65 6555 0143",
    address: ["8 Club St, #03-01", "Singapore 069472"],
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
            Three studios,
            <br />
            one team.
          </h2>
          <p className="max-w-sm text-muted-foreground">
            Reach the office closest to you. Every studio handles new business,
            press and careers.
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
                  render={<a href={`tel:${office.phone}`} />}
                >
                  <Phone />
                  {office.phone}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
