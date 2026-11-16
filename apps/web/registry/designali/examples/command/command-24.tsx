"use client"

import * as React from "react"
import {
  BookOpen as BookOpenIcon,
} from "@designali/icons"

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
    title: "Authentication blocks",
    summary: "Add sign-in pages to your Next.js app with Designali blocks.",
    section: "Guides",
  },
  {
    title: "Icons",
    summary:
      "Install @designali/icons and use 4000+ icons in React.",
    section: "Guides",
  },
  {
    title: "Registry",
    summary: "Add Designali components to your project from the registry.",
    section: "Reference",
  },
  {
    title: "Theming",
    summary:
      "Theme every block with semantic design tokens and Tailwind CSS.",
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
