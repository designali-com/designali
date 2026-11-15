"use client"

import * as React from "react"
import {
  BanIcon,
  CopyIcon,
  EyeIcon,
  EyeOffIcon,
  KeyRoundIcon,
  MoreVerticalIcon,
  RefreshCwIcon,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

export default function ApiKeyActionsMenu() {
  const [revealed, setRevealed] = React.useState(false)
  const [rotated, setRotated] = React.useState(false)
  const secret = rotated ? "key_demo_44e0" : "key_demo_03a2"

  return (
    <div className="flex w-full max-w-md items-center gap-3 border p-3 text-xs">
      <KeyRoundIcon className="size-4 text-muted-foreground" />
      <div className="min-w-0 flex-1">
        <p className="font-medium">Production server</p>
        <p className="truncate font-mono text-muted-foreground">
          {revealed ? secret : "key_demo_••••••••" + secret.slice(-4)}
        </p>
      </div>
      <Badge variant="outline">{rotated ? "Rotated" : "Active"}</Badge>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon-sm" aria-label="Key actions" />
          }
        >
          <MoreVerticalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuItem onClick={() => setRevealed(!revealed)}>
            {revealed ? <EyeOffIcon /> : <EyeIcon />}
            {revealed ? "Hide key" : "Reveal key"}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            Copy to clipboard
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setRotated(true)}>
            <RefreshCwIcon />
            Rotate key
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <BanIcon />
            Revoke key
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
