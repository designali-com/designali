"use client"

import * as React from "react"
import {
  Copy as CopyIcon,
  Highlighter as HighlighterIcon,
  Languages as LanguagesIcon,
  MessageSquarePlus as MessageSquarePlusIcon,
  Search as SearchIcon,
  Volume2 as Volume2Icon,
} from "@designali/icons"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

export default function ArticleTextMenu() {
  const [highlighted, setHighlighted] = React.useState(false)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="w-full max-w-md select-text">
        <h3 className="mb-1 text-sm font-semibold">Design se code tak</h3>
        <p
          className={cn(
            "text-sm leading-relaxed text-muted-foreground",
            highlighted &&
              "bg-amber-200/60 text-foreground dark:bg-amber-500/30"
          )}
        >
          Designali is where thoughtful design meets production-ready code. Ali
          Imam designs and builds digital experiences that look great, feel
          intuitive, and work beautifully, from brand identity to Next.js.
        </p>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuItem>
            <CopyIcon />
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem onClick={() => setHighlighted((v) => !v)}>
            <HighlighterIcon />
            {highlighted ? "Remove highlight" : "Highlight"}
          </ContextMenuItem>
          <ContextMenuItem>
            <MessageSquarePlusIcon />
            Add note
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <LanguagesIcon />
              Translate to
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-36">
              <ContextMenuGroup>
                <ContextMenuItem>Español</ContextMenuItem>
                <ContextMenuItem>Français</ContextMenuItem>
                <ContextMenuItem>Deutsch</ContextMenuItem>
                <ContextMenuItem>日本語</ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuItem>
            <SearchIcon />
            Search the web
          </ContextMenuItem>
          <ContextMenuItem>
            <Volume2Icon />
            Read aloud
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
