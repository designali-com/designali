"use client"

import * as React from "react"
import { EllipsisIcon, UserMinusIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

const initialMembers = [
  { name: "Rina Patel", role: "Admin" },
  { name: "Oskar Lund", role: "Editor" },
  { name: "Mei Tanaka", role: "Viewer" },
]

export default function RemoveMemberToast() {
  const [members, setMembers] = React.useState(initialMembers)

  return (
    <Toaster toastManager={notify}>
      <div className="w-full max-w-sm border">
        {members.map((m) => (
          <div
            key={m.name}
            className="flex items-center gap-3 border-b px-3 py-2 last:border-b-0"
          >
            <Avatar size="sm">
              <AvatarFallback>
                {m.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span className="flex-1 text-sm">{m.name}</span>
            <Badge variant="outline">{m.role}</Badge>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Member actions"
                  />
                }
              >
                <EllipsisIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  variant="destructive"
                  onClick={() => {
                    setMembers((prev) => prev.filter((x) => x.name !== m.name))
                    notify.add({
                      type: "error",
                      title: m.name + " removed",
                      description: "They lost access to all projects.",
                    })
                  }}
                >
                  <UserMinusIcon />
                  Remove
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </Toaster>
  )
}
