"use client"

import { useState } from "react"
import {
  ArrowRight,
  Check,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const columns = [
  { title: "Read", links: ["Latest issue", "Blogs", "Case studies", "Docs"] },
  { title: "Explore", links: ["Templates", "Blocks", "Icons", "Logos"] },
  { title: "Help", links: ["Manage subscription", "Pricing", "Contact", "Terms"] },
]

export default function Footer11() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 border-b pb-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="font-sans text-3xl tracking-tight md:text-4xl">The Designali Letter</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              One note from Ali Imam on design, code and craft, plus the newest
              Designali templates and blocks, in your inbox every month.
            </p>
          </div>
          {done ? (
            <p className="flex items-center gap-2 text-sm">
              <Check className="size-4 text-primary dark:text-primary" />
              You are on the list. The next Designali letter is on its way.
            </p>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                if (email) setDone(true)
              }}
              className="flex w-full flex-col gap-2 sm:flex-row lg:justify-self-end"
            >
              <Input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                aria-label="Email address"
                className="h-10 sm:w-72"
              />
              <Button type="submit">
                Subscribe free
                <ArrowRight />
              </Button>
            </form>
          )}
        </div>
        <div className="grid grid-cols-2 gap-8 pt-12 sm:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-medium">{column.title}</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 text-xs leading-5 text-muted-foreground sm:col-span-1">
            <p>Designali</p>
            <p>Design se code tak</p>
            <p>hello@designali.com</p>
            <p className="mt-4">© 2026 Designali. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
