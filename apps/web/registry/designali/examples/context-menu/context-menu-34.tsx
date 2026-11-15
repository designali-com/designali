"use client"

import * as React from "react"
import { MailIcon, ShieldIcon, UserMinusIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

const initialMembers = [
  { name: "Maya Chen", email: "maya@fieldnote.io", role: "owner" },
  { name: "Jonah Reyes", email: "jonah@fieldnote.io", role: "admin" },
  { name: "Elliot Brandt", email: "elliot@fieldnote.io", role: "member" },
  { name: "Sofia Laurent", email: "sofia@fieldnote.io", role: "viewer" },
]

export default function TeamMemberRoleMenu() {
  const [members, setMembers] = React.useState(initialMembers)
  const setRole = (email: string, role: string) =>
    setMembers((list) =>
      list.map((m) => (m.email === email ? { ...m, role } : m))
    )

  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      {members.map((member) => (
        <ContextMenu key={member.email} disabled={member.role === "owner"}>
          <ContextMenuTrigger className="flex items-center gap-3 px-3 py-2 text-xs data-popup-open:bg-muted">
            <Avatar className="size-7">
              <AvatarFallback className="text-[10px]">
                {member.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="font-medium">{member.name}</span>
              <span className="truncate text-muted-foreground">
                {member.email}
              </span>
            </div>
            <Badge variant="outline" className="capitalize">
              {member.role}
            </Badge>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <ShieldIcon />
                Change role
              </ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-36">
                <ContextMenuRadioGroup
                  value={member.role}
                  onValueChange={(role) => setRole(member.email, role)}
                >
                  <ContextMenuRadioItem value="admin">
                    Admin
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="member">
                    Member
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="viewer">
                    Viewer
                  </ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuGroup>
              <ContextMenuItem>
                <MailIcon />
                Resend invite
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem
                variant="destructive"
                onClick={() =>
                  setMembers((list) =>
                    list.filter((m) => m.email !== member.email)
                  )
                }
              >
                <UserMinusIcon />
                Remove from team
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
      <p className="px-3 py-1.5 text-[11px] text-muted-foreground">
        The workspace owner can&apos;t be edited.
      </p>
    </div>
  )
}
