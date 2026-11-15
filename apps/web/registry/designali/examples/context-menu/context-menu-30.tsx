"use client"

import * as React from "react"
import {
  AsteriskIcon,
  ExternalLinkIcon,
  KeyRoundIcon,
  RefreshCwIcon,
  TrashIcon,
  UserIcon,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

const entries = [
  { site: "Ledgerly", user: "finance@fieldnote.io", strength: "Strong" },
  { site: "Trackwise", user: "maya.chen", strength: "Weak" },
  { site: "Mailroom", user: "maya@fieldnote.io", strength: "Strong" },
]

export default function PasswordVaultMenu() {
  const [copied, setCopied] = React.useState<string | null>(null)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex flex-col divide-y border">
        {entries.map((entry) => (
          <ContextMenu key={entry.site}>
            <ContextMenuTrigger className="flex items-center gap-3 px-3 py-2 text-xs data-popup-open:bg-muted">
              <div className="flex size-8 items-center justify-center bg-muted">
                <KeyRoundIcon className="size-4" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="font-medium">{entry.site}</span>
                <span className="truncate text-muted-foreground">
                  {entry.user}
                </span>
              </div>
              <Badge
                variant={entry.strength === "Weak" ? "destructive" : "outline"}
              >
                {entry.strength}
              </Badge>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-48">
              <ContextMenuGroup>
                <ContextMenuItem
                  onClick={() => setCopied("Username for " + entry.site)}
                >
                  <UserIcon />
                  Copy username
                  <ContextMenuShortcut>⌘B</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem
                  onClick={() => setCopied("Password for " + entry.site)}
                >
                  <AsteriskIcon />
                  Copy password
                  <ContextMenuShortcut>⇧⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <ExternalLinkIcon />
                  Open and fill
                </ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem>
                  <RefreshCwIcon />
                  Generate new password
                </ContextMenuItem>
                <ContextMenuItem variant="destructive">
                  <TrashIcon />
                  Move to trash
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuContent>
          </ContextMenu>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        {copied
          ? copied + " copied · clears in 30s"
          : "Right-click an item for quick actions"}
      </p>
    </div>
  )
}
