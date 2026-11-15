"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon, PlusIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { cn } from "@workspace/ui/lib/utils"

const accounts = [
  {
    id: "personal",
    name: "Clara Novak",
    email: "clara.novak@mailbox.io",
    initials: "CN",
  },
  {
    id: "work",
    name: "Clara Novak",
    email: "clara@fernhill.studio",
    initials: "FH",
  },
  {
    id: "side",
    name: "Bookbinding Club",
    email: "hello@bindclub.org",
    initials: "BC",
  },
]

export default function AccountSwitcherDrawer() {
  const [active, setActive] = React.useState("work")
  const current =
    accounts.find((account) => account.id === active) ?? accounts[0]!

  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger
        render={
          <Button
            variant="outline"
            className="h-auto justify-start gap-2 py-1.5"
          />
        }
      >
        <Avatar size="sm">
          <AvatarFallback>{current.initials}</AvatarFallback>
        </Avatar>
        <span className="flex flex-col items-start">
          <span className="font-medium">{current.name}</span>
          <span className="font-normal text-muted-foreground">
            {current.email}
          </span>
        </span>
        <ChevronsUpDownIcon data-icon="inline-end" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Accounts</DrawerTitle>
          <DrawerDescription>Switch without signing out.</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-1 p-2 pt-4">
          {accounts.map((account) => (
            <DrawerClose
              key={account.id}
              render={<button type="button" />}
              onClick={() => setActive(account.id)}
              className={cn(
                "flex items-center gap-3 p-2 text-start hover:bg-muted",
                account.id === active && "bg-muted"
              )}
            >
              <Avatar>
                <AvatarFallback>{account.initials}</AvatarFallback>
              </Avatar>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-medium">
                  {account.name}
                </span>
                <span className="block truncate text-muted-foreground">
                  {account.email}
                </span>
              </span>
              {account.id === active && <CheckIcon className="size-4" />}
            </DrawerClose>
          ))}
        </div>
        <DrawerFooter className="border-t pt-4">
          <Button variant="outline">
            <PlusIcon data-icon="inline-start" />
            Add another account
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
