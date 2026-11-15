"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
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
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

const swatches = [
  { id: "violet", className: "bg-violet-500" },
  { id: "sky", className: "bg-sky-500" },
  { id: "emerald", className: "bg-emerald-500" },
  { id: "amber", className: "bg-amber-500" },
  { id: "rose", className: "bg-rose-500" },
  { id: "slate", className: "bg-slate-600" },
]

export default function AvatarColorPickerDialog() {
  const [color, setColor] = React.useState(swatches[0]!)
  const [name, setName] = React.useState("Noah Lindqvist")
  const letters = name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <span
          className={cn(
            "flex size-5 items-center justify-center text-[9px] text-white",
            color.className
          )}
        >
          {letters}
        </span>
        Edit avatar
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Profile picture</DialogTitle>
          <DialogDescription>
            Pick a color for your initials avatar.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <Avatar size="lg" className="size-20">
            <AvatarFallback
              className={cn("text-xl text-white", color.className)}
            >
              {letters || "?"}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex justify-center gap-2">
          {swatches.map((swatch) => (
            <button
              key={swatch.id}
              type="button"
              aria-label={swatch.id}
              aria-pressed={swatch.id === color.id}
              onClick={() => setColor(swatch)}
              className={cn(
                "size-7 rounded-full ring-offset-2 ring-offset-background outline-none focus-visible:ring-2 focus-visible:ring-ring",
                swatch.className,
                swatch.id === color.id && "ring-2 ring-foreground"
              )}
            />
          ))}
        </div>
        <Field>
          <FieldLabel htmlFor="display-name">Display name</FieldLabel>
          <Input
            id="display-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Field>
        <DialogFooter>
          <DialogClose render={<Button />}>Save</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
