"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

export default function TeamInviteInput() {
  const [email, setEmail] = React.useState("")
  const [role, setRole] = React.useState("Member")
  const [invites, setInvites] = React.useState([
    { email: "kai@harborlabs.io", role: "Admin" },
  ])

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          if (!email) return
          setInvites([...invites, { email, role }])
          setEmail("")
        }}
      >
        <Input
          type="email"
          required
          aria-label="Email to invite"
          placeholder="teammate@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <NativeSelect
          aria-label="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-28"
        >
          <NativeSelectOption>Member</NativeSelectOption>
          <NativeSelectOption>Admin</NativeSelectOption>
          <NativeSelectOption>Viewer</NativeSelectOption>
        </NativeSelect>
        <Button type="submit">Invite</Button>
      </form>
      <ul className="divide-y border text-xs">
        {invites.map((i) => (
          <li
            key={i.email}
            className="flex items-center justify-between px-3 py-2"
          >
            <span>{i.email}</span>
            <Badge variant="outline">{i.role} · Pending</Badge>
          </li>
        ))}
      </ul>
    </div>
  )
}
