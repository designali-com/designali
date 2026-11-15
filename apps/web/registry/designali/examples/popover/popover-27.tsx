"use client"

import * as React from "react"
import { SearchIcon, UserRoundIcon, UserXIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Separator } from "@workspace/ui/components/separator"

const team = [
  { name: "Maya Chen", role: "Design" },
  { name: "Dario Mendes", role: "Engineering" },
  { name: "Hana Sato", role: "Engineering" },
  { name: "Owen Brandt", role: "Product" },
]

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")

export default function AssigneePickerPopover() {
  const [assignee, setAssignee] = React.useState<string | null>("Hana Sato")
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const results = team.filter((m) =>
    m.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="flex w-full max-w-xs items-center justify-between border p-3">
      <span className="text-xs text-muted-foreground">Assignee</span>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger render={<Button variant="ghost" size="sm" />}>
          {assignee ? (
            <>
              <Avatar size="sm">
                <AvatarFallback>{initials(assignee)}</AvatarFallback>
              </Avatar>
              {assignee}
            </>
          ) : (
            <>
              <UserRoundIcon data-icon="inline-start" /> Unassigned
            </>
          )}
        </PopoverTrigger>
        <PopoverContent className="w-60 gap-1.5 p-1.5" align="end">
          <InputGroup className="h-7">
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Find teammate"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </InputGroup>
          <div className="flex flex-col">
            {results.map((member) => (
              <button
                key={member.name}
                type="button"
                onClick={() => (setAssignee(member.name), setOpen(false))}
                className="flex items-center gap-2 px-2 py-1.5 text-start text-xs hover:bg-muted"
              >
                <Avatar size="sm">
                  <AvatarFallback>{initials(member.name)}</AvatarFallback>
                </Avatar>
                <span className="flex-1">{member.name}</span>
                <span className="text-[11px] text-muted-foreground">
                  {member.role}
                </span>
              </button>
            ))}
            {results.length === 0 && (
              <p className="p-2 text-xs text-muted-foreground">No one found.</p>
            )}
          </div>
          <Separator />
          <Button
            variant="ghost"
            size="sm"
            className="justify-start"
            onClick={() => (setAssignee(null), setOpen(false))}
          >
            <UserXIcon data-icon="inline-start" /> Unassign
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  )
}
