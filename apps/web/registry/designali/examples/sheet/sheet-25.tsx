"use client"

import * as React from "react"
import {
  FilePlusIcon,
  HistoryIcon,
  SearchIcon,
  SettingsIcon,
  UserPlusIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Kbd } from "@workspace/ui/components/kbd"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const recent = ["quarterly report", "onboarding checklist", "brand colors"]
const quick = [
  { label: "Create document", icon: FilePlusIcon },
  { label: "Invite teammate", icon: UserPlusIcon },
  { label: "Open settings", icon: SettingsIcon },
]

export default function SearchTopSheet() {
  const [query, setQuery] = React.useState("")
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            className="w-56 justify-start text-muted-foreground"
          />
        }
      >
        <SearchIcon data-icon="inline-start" />
        Search…
        <Kbd className="ms-auto">⌘K</Kbd>
      </SheetTrigger>
      <SheetContent side="top" showCloseButton={false}>
        <div className="mx-auto flex w-full max-w-xl flex-col gap-4 p-4">
          <SheetTitle className="sr-only">Search</SheetTitle>
          <SheetDescription className="sr-only">
            Search documents, people, and actions.
          </SheetDescription>
          <InputGroup>
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search docs, people, actions"
            />
          </InputGroup>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground">Recent</span>
            {recent
              .filter((r) => r.includes(query.toLowerCase()))
              .map((r) => (
                <Button
                  key={r}
                  variant="ghost"
                  className="justify-start"
                  onClick={() => setQuery(r)}
                >
                  <HistoryIcon data-icon="inline-start" />
                  {r}
                </Button>
              ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {quick.map((q) => (
              <Button key={q.label} variant="outline" size="sm">
                <q.icon data-icon="inline-start" />
                {q.label}
              </Button>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
