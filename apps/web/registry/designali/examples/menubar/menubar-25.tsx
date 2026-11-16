"use client"

import * as React from "react"
import {
  Redo2 as Redo2Icon,
  Undo2 as Undo2Icon,
} from "@designali/icons"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  "Created artboard",
  "Added header",
  "Changed fill to indigo",
  "Grouped layers",
]

export default function UndoHistoryMenubar() {
  const [position, setPosition] = React.useState(steps.length)

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarGroup>
              <MenubarItem
                disabled={position === 0}
                onClick={() => setPosition((p) => p - 1)}
              >
                <Undo2Icon />
                <span className="truncate">
                  Undo {position > 0 ? steps[position - 1] : ""}
                </span>
                <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem
                disabled={position === steps.length}
                onClick={() => setPosition((p) => p + 1)}
              >
                <Redo2Icon />
                <span className="truncate">
                  Redo {position < steps.length ? steps[position] : ""}
                </span>
                <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <ol className="border text-xs">
        {steps.map((step, i) => (
          <li
            key={step}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5",
              i >= position && "text-muted-foreground line-through"
            )}
          >
            <span className="w-4 text-muted-foreground tabular-nums">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  )
}
