"use client"

import * as React from "react"
import {
  ArchiveIcon,
  FolderInputIcon,
  MailIcon,
  MailOpenIcon,
  TrashIcon,
} from "lucide-react"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

const initial = [
  {
    id: 1,
    from: "Ava Thompson",
    subject: "Contract redlines for review",
    read: false,
  },
  {
    id: 2,
    from: "Billing",
    subject: "Your November invoice is ready",
    read: true,
  },
  { id: 3, from: "Kai Okafor", subject: "Offsite agenda draft", read: false },
]

export default function InboxRowMenu() {
  const [mails, setMails] = React.useState(initial)

  const update = (id: number, read: boolean) =>
    setMails((list) => list.map((m) => (m.id === id ? { ...m, read } : m)))
  const remove = (id: number) =>
    setMails((list) => list.filter((m) => m.id !== id))

  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      {mails.map((mail) => (
        <ContextMenu key={mail.id}>
          <ContextMenuTrigger className="flex items-center gap-3 px-3 py-2.5 hover:bg-muted/50 data-popup-open:bg-muted">
            <span
              className={cn(
                "size-2 shrink-0 rounded-full",
                mail.read ? "bg-transparent" : "bg-primary"
              )}
            />
            <div className="flex min-w-0 flex-col">
              <span className={cn("text-xs", !mail.read && "font-semibold")}>
                {mail.from}
              </span>
              <span className="truncate text-xs text-muted-foreground">
                {mail.subject}
              </span>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuItem onClick={() => update(mail.id, !mail.read)}>
                {mail.read ? <MailIcon /> : <MailOpenIcon />}
                Mark as {mail.read ? "unread" : "read"}
              </ContextMenuItem>
              <ContextMenuItem onClick={() => remove(mail.id)}>
                <ArchiveIcon />
                Archive
                <ContextMenuShortcut>E</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <FolderInputIcon />
                  Move to
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-40">
                  <ContextMenuGroup>
                    <ContextMenuItem onClick={() => remove(mail.id)}>
                      Receipts
                    </ContextMenuItem>
                    <ContextMenuItem onClick={() => remove(mail.id)}>
                      Clients
                    </ContextMenuItem>
                    <ContextMenuItem onClick={() => remove(mail.id)}>
                      Newsletters
                    </ContextMenuItem>
                  </ContextMenuGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem
                variant="destructive"
                onClick={() => remove(mail.id)}
              >
                <TrashIcon />
                Delete
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
      {mails.length === 0 ? (
        <p className="p-6 text-center text-xs text-muted-foreground">
          Inbox zero. Nice work.
        </p>
      ) : null}
    </div>
  )
}
