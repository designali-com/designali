"use client"

import * as React from "react"
import { CircleIcon, FolderIcon, FolderPlusIcon } from "lucide-react"

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
import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

const colors = [
  { id: "gray", className: "text-muted-foreground" },
  { id: "blue", className: "text-blue-500" },
  { id: "green", className: "text-emerald-500" },
  { id: "amber", className: "text-amber-500" },
  { id: "red", className: "text-red-500" },
]

export default function CreateFolderDialog() {
  const [color, setColor] = React.useState("blue")
  const [name, setName] = React.useState("")
  const active = colors.find((item) => item.id === color) ?? colors[0]!

  return (
    <Dialog onOpenChange={(open) => !open && setName("")}>
      <DialogTrigger render={<Button variant="outline" />}>
        <FolderPlusIcon data-icon="inline-start" />
        New folder
      </DialogTrigger>
      <DialogContent className="sm:max-w-xs">
        <DialogHeader>
          <DialogTitle>New folder</DialogTitle>
          <DialogDescription>Inside Projects / 2026</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-3">
          <FolderIcon
            className={cn("size-10 shrink-0 fill-current", active.className)}
          />
          <Input
            autoFocus
            placeholder="Untitled folder"
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-label="Folder name"
          />
        </div>
        <div className="flex gap-2" role="radiogroup" aria-label="Folder color">
          {colors.map((item) => (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={item.id === color}
              aria-label={item.id}
              onClick={() => setColor(item.id)}
              className={cn(
                "flex size-7 items-center justify-center border",
                item.id === color && "border-foreground"
              )}
            >
              <CircleIcon
                className={cn("size-3.5 fill-current", item.className)}
              />
            </button>
          ))}
        </div>
        <DialogFooter>
          <DialogClose render={<Button disabled={!name.trim()} />}>
            Create
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
