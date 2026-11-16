"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

const members = [
  { handle: "ali", name: "Ali Imam", status: "online" },
  { handle: "sara", name: "Sara", status: "away" },
  { handle: "omar", name: "Omar", status: "online" },
  { handle: "zara", name: "Zara", status: "offline" },
]

export default function ChatMentionSuggestions() {
  const [message, setMessage] = React.useState("Hey @")
  const match = message.match(/@(\w*)$/)
  const query = match ? match[1]! : null

  const insert = (handle: string) => {
    setMessage((current) => current.replace(/@\w*$/, "@" + handle + " "))
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      {query !== null ? (
        <Command
          className="border shadow-md"
          filter={(value, search) => (value.includes(search) ? 1 : 0)}
        >
          <CommandList>
            <CommandGroup heading="Mention a teammate">
              {members
                .filter((m) => m.handle.startsWith(query.toLowerCase()))
                .map((member) => (
                  <CommandItem
                    key={member.handle}
                    value={member.handle}
                    onSelect={() => insert(member.handle)}
                  >
                    <Avatar className="size-5">
                      <AvatarFallback className="text-[9px]">
                        {member.name.slice(0, 1)}
                      </AvatarFallback>
                    </Avatar>
                    <span>{member.name}</span>
                    <span className="text-muted-foreground">
                      @{member.handle}
                    </span>
                    <span
                      className={cn(
                        "ms-auto size-2 rounded-full",
                        member.status === "online" && "bg-emerald-500",
                        member.status === "away" && "bg-amber-500",
                        member.status === "offline" && "bg-muted-foreground/40"
                      )}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      ) : null}
      <Textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Message #design-crit"
        className="min-h-20"
      />
    </div>
  )
}
