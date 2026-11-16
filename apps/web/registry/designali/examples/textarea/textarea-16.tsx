"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Textarea } from "@workspace/ui/components/textarea"

const people = ["Ali Imam", "Aisha Designer", "Arjun Developer", "Chris Client"]

export default function MentionSuggestionsTextarea() {
  const [value, setValue] = React.useState("Thanks for the review ")
  const match = /@(\w*)$/.exec(value)
  const query = match?.[1]?.toLowerCase() ?? null
  const results =
    query === null ? [] : people.filter((p) => p.toLowerCase().includes(query))

  function pick(name: string) {
    setValue(value.replace(/@\w*$/, "@" + name.split(" ")[0] + " "))
  }

  return (
    <div className="relative w-full max-w-sm">
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="Reply"
        placeholder="Type @ to mention"
      />
      {results.length > 0 && (
        <div className="absolute inset-x-0 top-full z-10 mt-1 border bg-popover p-1 shadow-md">
          {results.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => pick(p)}
              className="flex w-full items-center gap-2 px-2 py-1.5 text-start text-xs hover:bg-muted"
            >
              <Avatar size="sm">
                <AvatarFallback>
                  {p
                    .split(" ")
                    .map((x) => x[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {p}
            </button>
          ))}
        </div>
      )}
      <p className="mt-1.5 text-xs text-muted-foreground">Try typing @a</p>
    </div>
  )
}
