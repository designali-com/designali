"use client"

import * as React from "react"
import { ChevronDownIcon, SearchIcon, SearchXIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Input } from "@workspace/ui/components/input"

const articles = [
  {
    value: "reset",
    q: "How do I reset my password?",
    a: "Choose Forgot password on the sign-in page and follow the emailed link within 30 minutes.",
  },
  {
    value: "2fa",
    q: "How do I turn on two-factor authentication?",
    a: "Go to Settings, Security, then Two-factor and scan the QR code with your authenticator app.",
  },
  {
    value: "email",
    q: "Can I change my login email?",
    a: "Yes. Update it under Settings, Account. We send a confirmation to both addresses.",
  },
  {
    value: "delete",
    q: "How do I delete my account?",
    a: "Settings, Account, Delete account. Your data is removed permanently after 30 days.",
  },
]

export default function AccordionKnowledgeBaseSearch() {
  const [query, setQuery] = React.useState("")
  const results = articles.filter((article) =>
    article.q.toLowerCase().includes(query.trim().toLowerCase())
  )

  return (
    <div className="w-full max-w-md space-y-3">
      <div className="relative">
        <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search account help"
          className="ps-8"
        />
      </div>
      {results.length > 0 ? (
        <Accordion className="border px-3">
          {results.map((article) => (
            <AccordionItem key={article.value} value={article.value}>
              <AccordionTrigger>
                {article.q}
                <ChevronDownIcon
                  data-slot="accordion-trigger-icon"
                  className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
                />
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {article.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="flex flex-col items-center gap-1 border border-dashed py-8 text-center">
          <SearchXIcon className="size-5 text-muted-foreground" />
          <p className="text-xs font-medium">
            No articles match &ldquo;{query}&rdquo;
          </p>
          <p className="text-xs text-muted-foreground">
            Try a different keyword or contact support.
          </p>
        </div>
      )}
    </div>
  )
}
