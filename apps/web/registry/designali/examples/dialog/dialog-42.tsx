"use client"

import * as React from "react"
import { FolderIcon, FolderInputIcon, FolderOpenIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { cn } from "@workspace/ui/lib/utils"

const folders = [
  { id: "root", name: "My Drive", depth: 0 },
  { id: "clients", name: "Clients", depth: 1 },
  { id: "acme", name: "Bluefin Retail", depth: 2 },
  { id: "kestrel", name: "Kestrel Health", depth: 2 },
  { id: "internal", name: "Internal", depth: 1 },
  { id: "hiring", name: "Hiring", depth: 2 },
  { id: "archive", name: "Archive", depth: 1 },
]

export default function MoveToFolderDialog() {
  const [target, setTarget] = React.useState("kestrel")
  const selected = folders.find((folder) => folder.id === target)

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <FolderInputIcon data-icon="inline-start" />
        Move 3 items
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Move 3 items</DialogTitle>
          <DialogDescription>Choose a destination folder.</DialogDescription>
        </DialogHeader>
        <div
          className="flex max-h-60 flex-col overflow-y-auto border p-1"
          role="listbox"
          aria-label="Folders"
        >
          {folders.map((folder) => (
            <button
              key={folder.id}
              type="button"
              role="option"
              aria-selected={folder.id === target}
              onClick={() => setTarget(folder.id)}
              style={{ paddingInlineStart: 8 + folder.depth * 16 }}
              className={cn(
                "flex items-center gap-2 py-1.5 pe-2 text-start hover:bg-muted",
                folder.id === target && "bg-muted font-medium"
              )}
            >
              {folder.id === target ? (
                <FolderOpenIcon className="size-4" />
              ) : (
                <FolderIcon className="size-4 text-muted-foreground" />
              )}
              {folder.name}
            </button>
          ))}
        </div>
        <DialogFooter className="items-center sm:justify-between">
          <span className="truncate text-muted-foreground">
            To: {selected?.name}
          </span>
          <DialogClose render={<Button />}>Move here</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
