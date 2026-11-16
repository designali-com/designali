"use client"

import { useState } from "react"
import {
  ArrowRight,
  AtSign,
  Check,
  Clock,
  Mail,
  MessageCircle,
  Rss,
} from "@designali/icons"

const groups = [
  { title: "Products", links: ["Templates", "Blocks", "Icons", "Pricing"] },
  { title: "Studio", links: ["Work", "Blogs", "Docs", "Contact"] },
]

export default function Footer20() {
  const [email, setEmail] = useState("")
  const [joined, setJoined] = useState(false)

  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-12 md:grid-cols-4 md:grid-rows-[auto_auto]">
        <div className="flex flex-col justify-between border bg-background p-6 md:col-span-2 md:row-span-2">
          <div>
            <p className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <span className="size-4 rotate-45 bg-primary" />
              designali
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              Design and development studio by Ali Imam. One monthly email
              with new templates, blocks and nothing else.
            </p>
          </div>
          {joined ? (
            <p className="mt-10 flex items-center gap-2 text-sm">
              <Check className="size-4 text-emerald-600 dark:text-emerald-400" />
              Thanks, see you next month.
            </p>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                if (email) setJoined(true)
              }}
              className="mt-10 flex border focus-within:border-foreground/40"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                aria-label="Email address"
                className="h-11 w-full min-w-0 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex w-11 shrink-0 items-center justify-center bg-foreground text-background"
              >
                <ArrowRight className="size-4" />
              </button>
            </form>
          )}
        </div>

        {groups.map((group) => (
          <div key={group.title} className="border bg-background p-6">
            <p className="text-xs text-muted-foreground">{group.title}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="border bg-background p-6 text-sm">
          <p className="flex items-start gap-2 text-muted-foreground">
            <Mail className="mt-0.5 size-4 shrink-0" />
            hello@designali.com
          </p>
          <p className="mt-3 flex items-center gap-2 text-muted-foreground">
            <Clock className="size-4 shrink-0" />
            Support via support@designali.com
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 border bg-foreground p-6 text-background">
          <p className="text-sm">Follow along</p>
          <div className="flex gap-1">
            {[
              { label: "Designali on Instagram", icon: MessageCircle, href: "https://www.instagram.com/designali.code/" },
              { label: "Designali on X", icon: AtSign, href: "https://x.com/designali_com" },
              { label: "Designali blogs", icon: Rss, href: "/blogs" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="flex size-9 items-center justify-center border border-background/20 transition-colors hover:bg-background/10"
              >
                <item.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 pb-8 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>© 2026 Designali</p>
        <div className="flex gap-5">
          <a href="/contact" className="hover:text-foreground">Contact</a>
          <a href="/docs/legal/terms" className="hover:text-foreground">Terms</a>
          <a href="/pricing" className="hover:text-foreground">Pricing</a>
        </div>
      </div>
    </footer>
  )
}
