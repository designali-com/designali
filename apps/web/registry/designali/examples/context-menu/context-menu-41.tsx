"use client"

import * as React from "react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

export default function TextFormattingInsetMenu() {
  const [bold, setBold] = React.useState(true)
  const [italic, setItalic] = React.useState(false)
  const [align, setAlign] = React.useState("left")

  return (
    <ContextMenu>
      <ContextMenuTrigger className="w-full max-w-sm border p-4">
        <p
          className={cn("text-sm", bold && "font-semibold", italic && "italic")}
          style={{ textAlign: align as "left" | "center" | "right" }}
        >
          Welcome to Designali. New templates, blocks and icons ship every
          week. Design se code tak.
        </p>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem inset>
            Cut
            <ContextMenuShortcut>⌘X</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel inset>Style</ContextMenuLabel>
          <ContextMenuCheckboxItem
            inset
            checked={bold}
            onCheckedChange={setBold}
          >
            Bold
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            inset
            checked={italic}
            onCheckedChange={setItalic}
          >
            Italic
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={align} onValueChange={setAlign}>
          <ContextMenuLabel inset>Alignment</ContextMenuLabel>
          <ContextMenuRadioItem inset value="left">
            Left
          </ContextMenuRadioItem>
          <ContextMenuRadioItem inset value="center">
            Center
          </ContextMenuRadioItem>
          <ContextMenuRadioItem inset value="right">
            Right
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
