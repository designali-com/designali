"use client"

import * as React from "react"
import {
  MessageCirclePlus as MessageCirclePlusIcon,
  Search as SearchIcon,
  X as XIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

const people = [
  "Ali Imam",
  "Brand Designer",
  "Client Lead",
  "Design Engineer",
  "Motion Designer",
  "Studio Developer",
]

export default function NewGroupChatDialog() {
  const [query, setQuery] = React.useState("")
  const [selected, setSelected] = React.useState<string[]>(["Client Lead"])
  const visible = people.filter((person) =>
    person.toLowerCase().includes(query.toLowerCase())
  )

  function toggle(person: string) {
    setSelected((current) =>
      current.includes(person)
        ? current.filter((item) => item !== person)
        : [...current, person]
    )
  }

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <MessageCirclePlusIcon data-icon="inline-start" />
        New group
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New group chat</DialogTitle>
          <DialogDescription>{selected.length} selected</DialogDescription>
        </DialogHeader>
        {selected.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {selected.map((person) => (
              <Badge key={person} variant="secondary" className="gap-1">
                {person}
                <button
                  type="button"
                  aria-label={"Remove " + person}
                  onClick={() => toggle(person)}
                >
                  <XIcon className="size-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}
        <InputGroup>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Search people"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </InputGroup>
        <div className="flex max-h-48 flex-col overflow-y-auto">
          {visible.map((person) => (
            <label
              key={person}
              className="flex cursor-pointer items-center gap-3 px-1 py-1.5 hover:bg-muted"
            >
              <Avatar size="sm">
                <AvatarFallback>
                  {person
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="flex-1">{person}</span>
              <Checkbox
                checked={selected.includes(person)}
                onCheckedChange={() => toggle(person)}
              />
            </label>
          ))}
        </div>
        <DialogFooter>
          <DialogClose render={<Button disabled={selected.length < 2} />}>
            Create group
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
