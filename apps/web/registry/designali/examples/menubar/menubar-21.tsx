"use client"

import * as React from "react"
import {
  ChevronsUpDownIcon,
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

const workspaces = [
  { id: "acme", name: "Lumen Studio" },
  { id: "north", name: "Northfield Labs" },
  { id: "orbit", name: "Orbit Collective" },
]

export default function WorkspaceAccountMenubar() {
  const [workspace, setWorkspace] = React.useState("acme")
  const current = workspaces.find((w) => w.id === workspace)

  return (
    <Menubar className="h-10 w-full max-w-md justify-between">
      <MenubarMenu>
        <MenubarTrigger className="gap-2">
          <span className="flex size-5 items-center justify-center bg-primary text-[10px] font-semibold text-primary-foreground">
            {current?.name[0]}
          </span>
          {current?.name}
          <ChevronsUpDownIcon className="size-3 text-muted-foreground" />
        </MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarGroup>
            <MenubarLabel inset>Workspaces</MenubarLabel>
            <MenubarRadioGroup value={workspace} onValueChange={setWorkspace}>
              {workspaces.map((w) => (
                <MenubarRadioItem key={w.id} value={w.id}>
                  {w.name}
                </MenubarRadioItem>
              ))}
            </MenubarRadioGroup>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>Create workspace</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger aria-label="Account" className="p-0.5">
          <Avatar className="size-6">
            <AvatarFallback className="text-[10px]">EK</AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent align="end" alignOffset={0} className="w-52">
          <MenubarGroup>
            <MenubarLabel>
              <p className="font-medium text-foreground">Elena Kovač</p>
              <p className="font-normal text-muted-foreground">
                elena@lumen.studio
              </p>
            </MenubarLabel>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>
              <UserIcon /> Profile
            </MenubarItem>
            <MenubarItem>
              <CreditCardIcon /> Billing
            </MenubarItem>
            <MenubarItem>
              <SettingsIcon /> Settings <MenubarShortcut>⌘,</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>
              <LogOutIcon /> Sign out
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
