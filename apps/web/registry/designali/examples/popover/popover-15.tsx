"use client"

import * as React from "react"
import { UserPlusIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { Separator } from "@workspace/ui/components/separator"

const roles = [
  { label: "Viewer", value: "viewer" },
  { label: "Editor", value: "editor" },
  { label: "Admin", value: "admin" },
]

export default function InviteMembersPopover() {
  const [email, setEmail] = React.useState("")
  const [role, setRole] = React.useState("editor")
  const [invites, setInvites] = React.useState([
    { email: "sora@finchwork.io", role: "viewer" },
  ])
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)

  return (
    <Popover>
      <PopoverTrigger render={<Button />}>
        <UserPlusIcon data-icon="inline-start" />
        Invite
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <PopoverHeader>
          <PopoverTitle>Invite to Finchwork</PopoverTitle>
          <PopoverDescription>Invites expire after 7 days.</PopoverDescription>
        </PopoverHeader>
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-8 flex-1"
          />
          <Select
            items={roles}
            value={role}
            onValueChange={(value) => setRole(String(value))}
          >
            <SelectTrigger size="sm" className="w-24" aria-label="Role">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {roles.map((r) => (
                <SelectItem key={r.value} value={r.value}>
                  {r.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          size="sm"
          disabled={!valid}
          onClick={() => {
            setInvites((prev) => [...prev, { email, role }])
            setEmail("")
          }}
        >
          Send invite
        </Button>
        <Separator />
        <ul className="flex flex-col gap-1.5">
          {invites.map((invite) => (
            <li
              key={invite.email}
              className="flex items-center justify-between text-xs"
            >
              <span className="truncate">{invite.email}</span>
              <Badge variant="outline" className="capitalize">
                {invite.role}
              </Badge>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  )
}
