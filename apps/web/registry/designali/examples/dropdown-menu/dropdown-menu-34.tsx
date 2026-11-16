"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  ChevronDown as ChevronDownIcon,
  Code as CodeIcon,
  Copy as CopyIcon,
  FileArchive as FileArchiveIcon,
  Monitor as MonitorIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const urls: Record<string, string> = {
  https: "https://github.com/designali/designali.git",
  ssh: "git@github.com:designali/designali.git",
}

export default function RepositoryCloneMenu() {
  const [protocol, setProtocol] = React.useState("https")
  const [copied, setCopied] = React.useState(false)

  return (
    <DropdownMenu onOpenChange={() => setCopied(false)}>
      <DropdownMenuTrigger render={<Button />}>
        <CodeIcon data-icon="inline-start" />
        Code
        <ChevronDownIcon data-icon="inline-end" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuRadioGroup value={protocol} onValueChange={setProtocol}>
          <DropdownMenuLabel>Clone with</DropdownMenuLabel>
          <DropdownMenuRadioItem value="https" closeOnClick={false}>
            HTTPS
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ssh" closeOnClick={false}>
            SSH
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuItem
          closeOnClick={false}
          onClick={() => setCopied(true)}
          className="mx-1 my-1 border bg-muted/50 font-mono"
        >
          <span className="flex-1 truncate">{urls[protocol]}</span>
          {copied ? <CheckIcon /> : <CopyIcon />}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <MonitorIcon />
          Open with desktop app
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileArchiveIcon />
          Download ZIP
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
