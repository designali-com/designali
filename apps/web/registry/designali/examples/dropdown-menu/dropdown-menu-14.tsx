"use client"

import * as React from "react"
import { UserPlusIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const people = [
  "Priya Natarajan",
  "Owen Clarke",
  "Sofia Marin",
  "Kenji Watanabe",
  "Lena Hoffmann",
]

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")

export default function AssigneeMultiSelectMenu() {
  const [selected, setSelected] = React.useState([
    "Priya Natarajan",
    "Sofia Marin",
  ])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline" className="gap-2" />}
      >
        {selected.length ? (
          <AvatarGroup>
            {selected.slice(0, 3).map((name) => (
              <Avatar key={name} size="sm">
                <AvatarFallback>{initialsOf(name)}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
        ) : (
          <UserPlusIcon />
        )}
        {selected.length ? selected.length + " assigned" : "Assign"}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Assignees</DropdownMenuLabel>
          {people.map((name) => (
            <DropdownMenuCheckboxItem
              key={name}
              checked={selected.includes(name)}
              onCheckedChange={(checked) =>
                setSelected((prev) =>
                  checked ? [...prev, name] : prev.filter((n) => n !== name)
                )
              }
            >
              <Avatar size="sm">
                <AvatarFallback>{initialsOf(name)}</AvatarFallback>
              </Avatar>
              {name}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
