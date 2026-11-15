"use client"

import * as React from "react"
import {
  ChartLineIcon,
  ChartPieIcon,
  CreditCardIcon,
  FileTextIcon,
  SearchIcon,
  UsersIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Kbd } from "@workspace/ui/components/kbd"

const pages = [
  { title: "Billing settings", section: "Settings", icon: CreditCardIcon },
  { title: "Team members", section: "Settings", icon: UsersIcon },
  { title: "Revenue overview", section: "Reports", icon: ChartLineIcon },
  { title: "Churn analysis", section: "Reports", icon: ChartPieIcon },
  { title: "Onboarding checklist", section: "Docs", icon: FileTextIcon },
]

export default function QuickSearchDialog() {
  const [query, setQuery] = React.useState("")
  const results = pages.filter((page) =>
    page.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <Dialog onOpenChange={(open) => !open && setQuery("")}>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className="w-full max-w-xs justify-between text-muted-foreground"
          />
        }
      >
        <span className="flex items-center gap-2">
          <SearchIcon />
          Search pages...
        </span>
        <Kbd>⌘K</Kbd>
      </DialogTrigger>
      <DialogContent className="gap-0 p-0" showCloseButton={false}>
        <DialogTitle className="sr-only">Search</DialogTitle>
        <div className="flex items-center gap-2 border-b px-3">
          <SearchIcon className="size-4 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Type to search..."
            className="h-11 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="max-h-64 overflow-y-auto p-1">
          {results.length === 0 ? (
            <p className="p-6 text-center text-muted-foreground">
              No pages match &quot;{query}&quot;.
            </p>
          ) : (
            results.map((page) => (
              <DialogClose
                key={page.title}
                render={<button type="button" />}
                className="flex w-full items-center gap-3 px-3 py-2 text-start hover:bg-muted"
              >
                <page.icon className="size-4 text-muted-foreground" />
                <span className="flex-1">{page.title}</span>
                <span className="text-muted-foreground">{page.section}</span>
              </DialogClose>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
