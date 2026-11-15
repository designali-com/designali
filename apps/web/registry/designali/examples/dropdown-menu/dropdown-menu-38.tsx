"use client"

import * as React from "react"
import {
  BaselineIcon,
  BoldIcon,
  ChevronDownIcon,
  ItalicIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { cn } from "@workspace/ui/lib/utils"

const colors = [
  { name: "Default", className: "bg-foreground" },
  { name: "Gray", className: "bg-zinc-400" },
  { name: "Red", className: "bg-red-500" },
  { name: "Orange", className: "bg-orange-500" },
  { name: "Amber", className: "bg-amber-400" },
  { name: "Green", className: "bg-emerald-500" },
  { name: "Teal", className: "bg-teal-500" },
  { name: "Blue", className: "bg-blue-500" },
  { name: "Violet", className: "bg-violet-500" },
  { name: "Pink", className: "bg-pink-500" },
]

export default function TextColorSwatchMenu() {
  const [color, setColor] = React.useState(colors[0]!)

  return (
    <div className="flex items-center gap-1 border p-1">
      <Button variant="ghost" size="icon-sm" aria-label="Bold">
        <BoldIcon />
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Italic">
        <ItalicIcon />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="ghost" size="sm" aria-label="Text color" />}
        >
          <span className="flex flex-col items-center">
            <BaselineIcon />
            <span className={cn("-mt-0.5 h-0.5 w-3.5", color.className)} />
          </span>
          <ChevronDownIcon className="size-3" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 p-1">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Text color</DropdownMenuLabel>
            <div className="grid grid-cols-5 gap-1">
              {colors.map((c) => (
                <DropdownMenuItem
                  key={c.name}
                  aria-label={c.name}
                  onClick={() => setColor(c)}
                  className="justify-center p-1.5"
                >
                  <span
                    className={cn(
                      "size-5 ring-offset-1 ring-offset-popover",
                      c.className,
                      c.name === color.name && "ring-2 ring-ring"
                    )}
                  />
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
