"use client"

import * as React from "react"
import { ChevronDownIcon, UserMinusIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const roles = [
  { value: "admin", label: "Admin", hint: "Manage billing and members" },
  { value: "editor", label: "Editor", hint: "Create and edit content" },
  { value: "viewer", label: "Viewer", hint: "Read-only access" },
]

export default function MemberRoleMenu() {
  const [role, setRole] = React.useState("editor")

  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-3">
      <Avatar>
        <AvatarFallback>JO</AvatarFallback>
      </Avatar>
      <div className="flex-1 text-xs">
        <p className="font-medium">Jonah Okafor</p>
        <p className="text-muted-foreground">jonah@fieldnote.app</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="ghost" size="sm" className="capitalize" />}
        >
          {role}
          <ChevronDownIcon data-icon="inline-end" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuRadioGroup value={role} onValueChange={setRole}>
            <DropdownMenuRadioItem value="owner" disabled>
              <span className="grid">
                <span className="font-medium">Owner</span>
                <span className="text-muted-foreground">
                  Only one owner per team
                </span>
              </span>
            </DropdownMenuRadioItem>
            {roles.map((r) => (
              <DropdownMenuRadioItem key={r.value} value={r.value}>
                <span className="grid">
                  <span className="font-medium">{r.label}</span>
                  <span className="text-muted-foreground">{r.hint}</span>
                </span>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <UserMinusIcon />
            Remove from team
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
