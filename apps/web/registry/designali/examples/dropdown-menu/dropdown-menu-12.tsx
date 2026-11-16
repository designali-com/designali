"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  Code as CodeIcon,
  FileDown as FileDownIcon,
  Link as LinkIcon,
  Mail as MailIcon,
  Share2 as Share2Icon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

export default function ShareDocumentMenu() {
  const [copied, setCopied] = React.useState(false)

  return (
    <DropdownMenu onOpenChange={(open) => !open && setCopied(false)}>
      <DropdownMenuTrigger render={<Button />}>
        <Share2Icon data-icon="inline-start" />
        Share
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem closeOnClick={false} onClick={() => setCopied(true)}>
          {copied ? <CheckIcon /> : <LinkIcon />}
          {copied ? "Link copied" : "Copy link"}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MailIcon />
          Send by email
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CodeIcon />
          Embed
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <FileDownIcon />
            Export as
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>PDF document</DropdownMenuItem>
            <DropdownMenuItem>Markdown</DropdownMenuItem>
            <DropdownMenuItem>HTML page</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
