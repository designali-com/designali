"use client"

import * as React from "react"
import { MailIcon, ShieldIcon, UserMinusIcon } from "lucide-react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

const users = [
  { id: 1, name: "Hana Ito", role: "Admin" },
  { id: 2, name: "Diego Mora", role: "Editor" },
  { id: 3, name: "Ines Duarte", role: "Viewer" },
]

export default function TableBulkActionsMenubar() {
  const [selected, setSelected] = React.useState<number[]>([2])

  const toggle = (id: number) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center gap-2 border-b p-1.5">
        <Menubar className="border-0 p-0">
          <MenubarMenu disabled={selected.length === 0}>
            <MenubarTrigger className="data-disabled:opacity-50">
              Bulk actions
            </MenubarTrigger>
            <MenubarContent>
              <MenubarGroup>
                <MenubarSub>
                  <MenubarSubTrigger>
                    <ShieldIcon /> Change role
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarGroup>
                      <MenubarItem>Admin</MenubarItem>
                      <MenubarItem>Editor</MenubarItem>
                      <MenubarItem>Viewer</MenubarItem>
                    </MenubarGroup>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarItem>
                  <MailIcon /> Resend invite
                </MenubarItem>
              </MenubarGroup>
              <MenubarSeparator />
              <MenubarGroup>
                <MenubarItem
                  variant="destructive"
                  onClick={() => setSelected([])}
                >
                  <UserMinusIcon /> Remove {selected.length} user
                  {selected.length === 1 ? "" : "s"}
                </MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <span className="ms-auto pe-1 text-xs text-muted-foreground">
          {selected.length} selected
        </span>
      </div>
      <ul className="divide-y text-xs">
        {users.map((user) => (
          <li key={user.id} className="flex items-center gap-2 px-3 py-2">
            <Checkbox
              checked={selected.includes(user.id)}
              onCheckedChange={() => toggle(user.id)}
              aria-label={"Select " + user.name}
            />
            <span className="flex-1">{user.name}</span>
            <span className="text-muted-foreground">{user.role}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
