"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const columns = [
  { title: "Read", links: ["Latest issue", "Archive", "Long reads", "Interviews"] },
  { title: "About", links: ["Our editors", "Ethics policy", "Advertise", "Careers"] },
  { title: "Help", links: ["Manage subscription", "Gift a subscription", "Contact", "Privacy"] },
]

export default function Footer11() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 border-b pb-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="font-serif text-3xl tracking-tight md:text-4xl">The Sunday Ledger</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              One carefully reported essay on money, work and cities, in your
              inbox every Sunday at 7am. Read by 140,000 people.
            </p>
          </div>
          {done ? (
            <p className="flex items-center gap-2 text-sm">
              <Check className="size-4 text-emerald-600 dark:text-emerald-400" />
              You are on the list. First issue arrives Sunday.
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
            <p>Ledger Media Ltd.</p>
            <p>12 Clerkenwell Green</p>
            <p>London EC1R 0DP</p>
            <p className="mt-4">© 2026 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
