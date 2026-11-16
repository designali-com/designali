"use client"

import { useState } from "react"
import { Check, Copy, Globe } from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const email = "hello@designali.com"

const slots = [
  { day: "Tue", date: "18 Nov", times: ["10:00", "14:30"] },
  { day: "Wed", date: "19 Nov", times: ["09:00", "11:30", "16:00"] },
  { day: "Thu", date: "20 Nov", times: ["13:00"] },
  { day: "Fri", date: "21 Nov", times: ["10:30", "15:00"] },
]

const links = [
  {
    label: "Instagram",
    handle: "@designali.code",
    href: "https://www.instagram.com/designali.code/",
  },
  { label: "X", handle: "@designali_com", href: "https://x.com/designali_com" },
  {
    label: "LinkedIn",
    handle: "in/aliimam-in",
    href: "https://www.linkedin.com/in/aliimam-in/",
  },
  {
    label: "21st.dev",
    handle: "@designali-in",
    href: "https://21st.dev/@designali-in",
  },
]

export default function Portfolio20() {
  const [copied, setCopied] = useState(false)
  const [day, setDay] = useState(1)
  const [time, setTime] = useState<string | null>(null)
  const selected = slots[day]!

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      // Clipboard may be unavailable; still show feedback
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Available for selected projects
        </div>

        <h2 className="mt-6 text-4xl leading-[1.05] font-medium tracking-tight md:text-7xl">
          Have something in mind?
          <br />
          <span className="text-muted-foreground">
            Let&apos;s talk it through.
          </span>
        </h2>

        <button
          type="button"
          onClick={copy}
          className="group mt-8 flex max-w-full items-center gap-3 border-b border-foreground pb-2 text-left text-lg font-medium break-all md:text-3xl"
        >
          {email}
          {copied ? (
            <Check className="size-5 shrink-0 text-primary dark:text-primary" />
          ) : (
            <Copy className="size-5 shrink-0 text-muted-foreground group-hover:text-foreground" />
          )}
          <span className="sr-only" aria-live="polite">
            {copied ? "Email copied" : ""}
          </span>
        </button>

        <div className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-[1.5fr_1fr]">
          <div className="bg-background p-6 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-medium">Book a 30-minute intro call</h3>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Globe className="size-3.5" />
                Remote · your timezone
              </span>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-2">
              {slots.map((slot, i) => (
                <button
                  key={slot.date}
                  type="button"
                  onClick={() => {
                    setDay(i)
                    setTime(null)
                  }}
                  className={cn(
                    "border py-3 text-center transition-colors",
                    day === i
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:bg-muted"
                  )}
                >
                  <span className="block text-xs opacity-70">{slot.day}</span>
                  <span className="block text-sm font-medium">{slot.date}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {selected.times.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTime(t)}
                  className={cn(
                    "border px-4 py-2 font-sans text-sm transition-colors",
                    time === t
                      ? "border-foreground bg-muted"
                      : "border-border hover:bg-muted"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
            <Button
              size="lg"
              className="mt-6 w-full sm:w-auto"
              disabled={!time}
            >
              {time
                ? `Confirm ${selected.day} ${selected.date} at ${time}`
                : "Pick a time"}
            </Button>
          </div>

          <ul className="bg-background">
            {links.map((link) => (
              <li
                key={link.label}
                className="border-b border-border last:border-b-0"
              >
                <a
                  href={link.href}
                  className="flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-muted md:px-8"
                >
                  <span className="font-medium">{link.label}</span>
                  <span className="text-sm text-muted-foreground">
                    {link.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
