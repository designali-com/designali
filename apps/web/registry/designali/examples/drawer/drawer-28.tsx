"use client"

import * as React from "react"
import {
  BanknoteIcon,
  FilePlusIcon,
  KeyRoundIcon,
  SearchIcon,
  UserPlusIcon,
  UsersIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Kbd } from "@workspace/ui/components/kbd"

const actions = [
  { label: "Create invoice", icon: FilePlusIcon, hint: "Billing" },
  { label: "Add customer", icon: UserPlusIcon, hint: "Customers" },
  { label: "View payouts", icon: BanknoteIcon, hint: "Finance" },
  { label: "Open API keys", icon: KeyRoundIcon, hint: "Developers" },
  { label: "Invite teammate", icon: UsersIcon, hint: "Team" },
]

export default function CommandSearchTopDrawer() {
  const [query, setQuery] = React.useState("")
  const visible = actions.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <Drawer swipeDirection="up" onOpenChange={(open) => !open && setQuery("")}>
      <DrawerTrigger
        render={
          <Button
            variant="outline"
            className="w-full max-w-xs justify-start text-muted-foreground"
          />
        }
      >
        <SearchIcon data-icon="inline-start" />
        Search or jump to...
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-lg flex-col gap-2 p-4">
          <DrawerTitle className="sr-only">Quick search</DrawerTitle>
          <InputGroup>
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput
              autoFocus
              placeholder="Type a command"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <InputGroupAddon align="inline-end">
              <Kbd>Esc</Kbd>
            </InputGroupAddon>
          </InputGroup>
          <div className="flex flex-col">
            {visible.map((action) => (
              <DrawerClose
                key={action.label}
                render={<button type="button" />}
                className="flex items-center gap-3 px-2 py-2 text-start hover:bg-muted"
              >
                <action.icon className="size-4 text-muted-foreground" />
                <span className="flex-1">{action.label}</span>
                <span className="text-muted-foreground">{action.hint}</span>
              </DrawerClose>
            ))}
            {visible.length === 0 && (
              <p className="py-4 text-center text-muted-foreground">
                No matching commands.
              </p>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
