"use client"

import * as React from "react"
import { TerminalIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

export default function InsetLabelsMenu() {
  const [wrap, setWrap] = React.useState(true)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" />}>
        View
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel inset>Editor</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            inset
            checked={wrap}
            onCheckedChange={setWrap}
          >
            Word wrap
          </DropdownMenuCheckboxItem>
          <DropdownMenuItem inset>Toggle minimap</DropdownMenuItem>
          <DropdownMenuItem>
            <TerminalIcon />
            Show terminal
            <DropdownMenuShortcut>⌃`</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel inset>Appearance</DropdownMenuLabel>
          <DropdownMenuItem inset>Zoom in</DropdownMenuItem>
          <DropdownMenuItem inset>Zoom out</DropdownMenuItem>
          <DropdownMenuItem inset>Reset zoom</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
