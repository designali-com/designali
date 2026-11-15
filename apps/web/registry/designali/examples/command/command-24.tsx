"use client"

import * as React from "react"
import { BookOpenIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

const articles = [
  {
    title: "Authentication",
    summary: "Sign users in with email links, passkeys, or SSO providers.",
    section: "Guides",
  },
  {
    title: "Webhooks",
    summary:
      "Receive signed HTTP callbacks when events happen in your workspace.",
    section: "Guides",
  },
  {
    title: "Rate limits",
    summary: "Each API key can make 600 requests per minute before throttling.",
    section: "Reference",
  },
  {
    title: "Pagination",
    summary:
      "List endpoints return cursors so you can page through large result sets.",
    section: "Reference",
  },
]

export default function DocsSearchWithPreview() {
  const [value, setValue] = React.useState(articles[0]!.title)
  const active = articles.find(
    (a) => a.title.toLowerCase() === value.toLowerCase()
  )

  return (
    <Command
      value={value}
      onValueChange={setValue}
      className="w-full max-w-lg border"
    >
      <CommandInput placeholder="Search documentation..." />
      <div className="grid sm:grid-cols-[1fr_1fr]">
        <CommandList className="border-b sm:border-e sm:border-b-0">
          <CommandEmpty>No articles found.</CommandEmpty>
          <CommandGroup heading="Articles">
            {articles.map((article) => (
              <CommandItem key={article.title} value={article.title}>
                <BookOpenIcon />
                <span>{article.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
        <div className="flex flex-col gap-2 p-3">
          {active ? (
            <>
              <Badge variant="secondary">{active.section}</Badge>
              <p className="text-sm font-medium">{active.title}</p>
              <p className="text-xs text-muted-foreground">{active.summary}</p>
            </>
          ) : (
            <p className="text-xs text-muted-foreground">
              Highlight a result to preview it.
            </p>
          )}
        </div>
      </div>
    </Command>
  )
}
