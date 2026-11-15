"use client"

import { useState } from "react"
import { Search } from "lucide-react"

import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

const groups = [
  {
    name: "Billing",
    items: [
      {
        question: "Can I change plans at any time?",
        answer:
          "Yes. Upgrades take effect immediately and are prorated. Downgrades apply at the start of your next billing cycle.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "Annual plans can be refunded in full within 14 days of purchase. Monthly plans can be cancelled at any time and won't renew.",
      },
    ],
  },
  {
    name: "Account",
    items: [
      {
        question: "How do I invite teammates?",
        answer:
          "Open Settings, then Members, and send invites by email. New members join with Viewer access until an admin changes their role.",
      },
      {
        question: "Can I use single sign-on?",
        answer:
          "SAML SSO and SCIM provisioning are available on the Business plan for Okta, Azure AD and Google Workspace.",
      },
    ],
  },
  {
    name: "Data & privacy",
    items: [
      {
        question: "Where is my data stored?",
        answer:
          "All workspaces are hosted in the EU (Frankfurt) by default. US data residency is available on request for Business customers.",
      },
      {
        question: "Can I export everything?",
        answer:
          "You can export your full workspace as JSON or CSV at any time from Settings, with no limits and no support ticket required.",
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
          Search our most common questions or browse by topic.
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
