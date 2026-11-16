"use client"

import * as React from "react"
import {
  Command as CommandIcon,
  CreditCard as CreditCardIcon,
  FolderPlus as FolderPlusIcon,
  Moon as MoonIcon,
  UserPlus as UserPlusIcon,
} from "@designali/icons"

import { Input } from "@workspace/ui/components/input"

const actions = [
  { label: "Create new project", icon: FolderPlusIcon },
  { label: "Invite teammate", icon: UserPlusIcon },
  { label: "Open billing settings", icon: CreditCardIcon },
  { label: "Toggle dark mode", icon: MoonIcon },
]

export default function CommandSearchInput() {
  const [q, setQ] = React.useState("in")
  const matches = actions.filter((a) =>
    a.label.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div className="w-full max-w-sm border bg-popover shadow-md">
      <div className="flex items-center gap-2 border-b px-3">
        <CommandIcon className="size-4 text-muted-foreground" />
        <Input
          autoFocus
          aria-label="Type a command"
          placeholder="Type a command..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="h-10 border-0 px-0 focus-visible:ring-0 dark:bg-transparent"
        />
      </div>
      <ul className="p-1 text-sm">
        {matches.map((a) => {
          const i = a.label.toLowerCase().indexOf(q.toLowerCase())
          return (
            <li
              key={a.label}
              className="flex items-center gap-2 px-2 py-1.5 hover:bg-muted"
            >
              <a.icon className="size-4 text-muted-foreground" />
              <span>
                {a.label.slice(0, i)}
                <mark className="bg-transparent font-semibold text-foreground">
                  {a.label.slice(i, i + q.length)}
                </mark>
                {a.label.slice(i + q.length)}
              </span>
            </li>
          )
        })}
        {!matches.length && (
          <li className="px-2 py-4 text-center text-xs text-muted-foreground">
            No commands found.
          </li>
        )}
      </ul>
    </div>
  )
}
