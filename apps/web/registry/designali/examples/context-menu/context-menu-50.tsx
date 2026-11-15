"use client"

import * as React from "react"
import {
  BookmarkCheckIcon,
  BookmarkPlusIcon,
  CodeIcon,
  ExternalLinkIcon,
  EyeOffIcon,
  LinkIcon,
} from "lucide-react"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

export default function LinkPreviewCardMenu() {
  const [saved, setSaved] = React.useState(false)
  const [copied, setCopied] = React.useState<string | null>(null)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <ContextMenu>
        <ContextMenuTrigger className="flex overflow-hidden border data-popup-open:ring-2 data-popup-open:ring-ring/40">
          <div className="w-24 shrink-0 bg-linear-to-br from-teal-400 to-cyan-600" />
          <div className="flex min-w-0 flex-col gap-0.5 p-3 text-xs">
            <span className="text-[11px] text-muted-foreground">
              fieldnote.io/blog
            </span>
            <span className="truncate font-medium">
              How we cut onboarding time in half
            </span>
            <span className="line-clamp-2 text-muted-foreground">
              Five small changes to our signup flow that doubled activation in a
              quarter.
            </span>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-52">
          <ContextMenuGroup>
            <ContextMenuItem>
              <ExternalLinkIcon />
              Open in new tab
            </ContextMenuItem>
            <ContextMenuItem onClick={() => setCopied("URL")}>
              <LinkIcon />
              Copy link
            </ContextMenuItem>
            <ContextMenuItem onClick={() => setCopied("Markdown link")}>
              <CodeIcon />
              Copy as Markdown
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem onClick={() => setSaved((v) => !v)}>
              {saved ? <BookmarkCheckIcon /> : <BookmarkPlusIcon />}
              {saved ? "Remove from reading list" : "Save to reading list"}
            </ContextMenuItem>
            <ContextMenuItem>
              <EyeOffIcon />
              Hide preview
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <p className="text-xs text-muted-foreground">
        {copied
          ? copied + " copied to clipboard"
          : saved
            ? "Saved to your reading list"
            : "Right-click the card"}
      </p>
    </div>
  )
}
