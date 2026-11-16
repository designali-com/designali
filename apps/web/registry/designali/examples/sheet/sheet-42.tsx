"use client"

import * as React from "react"
import {
  ChevronRight as ChevronRightIcon,
  CircleQuestionMark as CircleHelpIcon,
  Mail as MailIcon,
  MessageCircle as MessageCircleIcon,
  Search as SearchIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const articles = [
  "Installing @designali/icons",
  "Downloading template files",
  "Licensing for client work",
  "Customizing blocks with Tailwind",
]

export default function HelpCenterSheet() {
  const [query, setQuery] = React.useState("")
  const results = articles.filter((a) =>
    a.toLowerCase().includes(query.toLowerCase())
  )
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="outline" size="icon" aria-label="Help" />}
      >
        <CircleHelpIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Help center</SheetTitle>
          <SheetDescription>Search guides or reach our team.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-4 px-4">
          <InputGroup>
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search help articles"
            />
          </InputGroup>
          <div className="flex flex-col">
            {results.map((a) => (
              <a
                key={a}
                href="#"
                className="flex items-center justify-between border-b py-2.5 hover:text-primary"
              >
                {a}
                <ChevronRightIcon className="size-3.5 text-muted-foreground" />
              </a>
            ))}
            {results.length === 0 && (
              <p className="py-6 text-center text-muted-foreground">
                No articles match &quot;{query}&quot;.
              </p>
            )}
          </div>
        </div>
        <SheetFooter className="border-t">
          <span className="font-medium">Still stuck?</span>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline">
              <MailIcon data-icon="inline-start" />
              Email us
            </Button>
            <Button variant="outline">
              <MessageCircleIcon data-icon="inline-start" />
              Live chat
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
