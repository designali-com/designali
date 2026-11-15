"use client"

import * as React from "react"
import {
  CopyIcon,
  HighlighterIcon,
  LanguagesIcon,
  MessageSquarePlusIcon,
  SearchIcon,
  Volume2Icon,
} from "lucide-react"

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
        <h3 className="mb-1 text-sm font-semibold">Why tide pools matter</h3>
        <p
          className={cn(
            "text-sm leading-relaxed text-muted-foreground",
            highlighted &&
              "bg-amber-200/60 text-foreground dark:bg-amber-500/30"
          )}
        >
          Tide pools are miniature ecosystems that rebuild themselves twice a
          day. Sea stars, anemones, and hermit crabs survive crashing waves and
          hours of sun by adapting in ways scientists are still uncovering.
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
