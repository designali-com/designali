"use client"

import { useState } from "react"
import {
  ArrowUpRight,
  Check,
  Copy,
} from "@designali/icons"

const EMAIL = "hello@designali.com"

const socials = [
  { label: "Instagram", handle: "@designali.code", href: "https://www.instagram.com/designali.code/" },
  { label: "X", handle: "@designali_com", href: "https://x.com/designali_com" },
  { label: "LinkedIn", handle: "Designali", href: "https://www.linkedin.com/company/designali-com/" },
  { label: "21st.dev", handle: "@designali-in", href: "https://21st.dev/@designali-in" },
]

export default function Contact06() {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="w-full bg-background py-24 md:py-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <span className="inline-flex items-center gap-2 border px-3 py-1 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" />
          Booking projects for March 2027
        </span>
        <h2 className="mt-8 text-4xl font-semibold tracking-tight md:text-6xl">
          Say hello.
        </h2>
        <p className="mt-4 max-w-md text-muted-foreground">
          No forms, no funnels. Write to us directly and Ali Imam, not a
          salesperson, will reply.
        </p>

        <div className="mt-12 flex w-full max-w-2xl flex-col items-stretch border sm:flex-row">
          <a
            href={`mailto:${EMAIL}`}
            className="flex-1 truncate px-6 py-5 text-lg font-medium transition-colors hover:bg-muted sm:text-2xl"
          >
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={copy}
            aria-label="Copy email address"
            className="flex items-center justify-center gap-2 border-t px-6 py-4 text-sm transition-colors hover:bg-muted sm:border-t-0 sm:border-s"
          >
            {copied ? (
              <>
                <Check className="size-4 text-primary dark:text-primary" />
                Copied
              </>
            ) : (
              <>
                <Copy className="size-4" />
                Copy
              </>
            )}
          </button>
        </div>

        <ul className="mt-16 grid w-full grid-cols-2 border-t md:grid-cols-4">
          {socials.map((social) => (
            <li key={social.label} className="border-b md:border-b-0 [&:nth-child(odd)]:border-e md:[&:not(:last-child)]:border-e">
              <a
                href={social.href}
                className="group flex flex-col items-start gap-1 p-5 text-start transition-colors hover:bg-muted/60"
              >
                <span className="flex w-full items-center justify-between text-xs text-muted-foreground">
                  {social.label}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <span className="text-sm font-medium">{social.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
