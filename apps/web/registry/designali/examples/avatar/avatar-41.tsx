"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  LogOut as LogOutIcon,
  UserPlus as UserPlusIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const accounts = [
  { name: "Ali Imam", email: "ali@designali.com", initials: "AI" },
  { name: "Designali", email: "hello@designali.com", initials: "DA" },
]

export default function AccountSwitcherMenu() {
  const [active, setActive] = React.useState(accounts[0]!.email)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label="Account menu"
          />
        }
      >
        <Avatar>
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Switch account</DropdownMenuLabel>
          {accounts.map((account) => (
            <DropdownMenuItem
              key={account.email}
              onClick={() => setActive(account.email)}
            >
              <Avatar size="sm">
                <AvatarFallback>{account.initials}</AvatarFallback>
              </Avatar>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="truncate">{account.name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {account.email}
                </span>
              </div>
              {active === account.email && <CheckIcon />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserPlusIcon />
          Add another account
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Sign out of all accounts
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
