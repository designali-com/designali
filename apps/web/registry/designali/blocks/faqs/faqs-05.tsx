"use client"

import { useState } from "react"
import {
  Search,
} from "@designali/icons"

import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

const groups = [
  {
    name: "Billing",
    items: [
      {
        question: "Can I upgrade to Designali Pro at any time?",
        answer:
          "Yes. Upgrade from your account page on designali.com and Pro blocks, templates and icon sets unlock straight away.",
      },
      {
        question: "Where do I find my invoices?",
        answer:
          "Every receipt is emailed after purchase. For copies or billing questions, write to billing@designali.com.",
      },
    ],
  },
  {
    name: "Account",
    items: [
      {
        question: "Can my team share one Designali account?",
        answer:
          "Each person should have their own account. Studio teammates can still share the same blocks, @designali/icons and @designali/logos in your codebase.",
      },
      {
        question: "How do I change the email on my account?",
        answer:
          "Sign in, open Settings and update your email. If you no longer have access to the old address, contact support@designali.com.",
      },
    ],
  },
  {
    name: "Code & usage",
    items: [
      {
        question: "What stack are the blocks built with?",
        answer:
          "Next.js, React, TypeScript and Tailwind CSS with shadcn-style UI primitives. Each block copies straight into your project.",
      },
      {
        question: "Can I use blocks in client projects?",
        answer:
          "Yes. Designali blocks, templates and icons can be used in personal and client work under the license listed on each resource.",
      },
    ],
  },
]

export default function Faqs05() {
  const [query, setQuery] = useState("")
  const [active, setActive] = useState("All")
  const term = query.trim().toLowerCase()

  const visible = groups
    .filter((group) => active === "All" || group.name === active)
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          !term ||
          item.question.toLowerCase().includes(term) ||
          item.answer.toLowerCase().includes(term)
      ),
    }))
    .filter((group) => group.items.length > 0)

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Help center
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Search common questions about Designali blocks, templates and icons, or browse by topic.
        </p>
        <div className="relative mt-10">
          <Search className="absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search questions"
            className="h-11 ps-9 text-sm md:text-sm"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["All", ...groups.map((group) => group.name)].map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setActive(name)}
              className={cn(
                "border border-border px-3 py-1.5 text-xs transition-colors",
                active === name
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="mt-10 space-y-10">
          {visible.map((group) => (
            <div key={group.name}>
              <h3 className="border-b border-border pb-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {group.name}
              </h3>
              <ul className="divide-y divide-border">
                {group.items.map((item) => (
                  <li key={item.question} className="py-5">
                    <p className="text-sm font-medium">{item.question}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.answer}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {visible.length === 0 && (
            <p className="border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
              No answers match &ldquo;{query}&rdquo;. Try another keyword or{" "}
              <a href="#" className="text-foreground underline underline-offset-4">
                contact support
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
