"use client"

import * as React from "react"
import {
  CopyPlusIcon,
  HourglassIcon,
  MailIcon,
  MessageSquareIcon,
  PencilIcon,
  PlusIcon,
  SplitIcon,
  TrashIcon,
  ZapIcon,
} from "lucide-react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

export default function WorkflowNodeMenu() {
  const [enabled, setEnabled] = React.useState(true)
  const [next, setNext] = React.useState<string | null>(null)

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-2">
      <div className="flex w-full items-center gap-2 border border-dashed p-2 text-xs text-muted-foreground">
        <ZapIcon className="size-4" />
        When a form is submitted
      </div>
      <span className="h-4 w-px bg-border" />
      <ContextMenu>
        <ContextMenuTrigger
          className={cn(
            "flex w-full items-center gap-3 border bg-background p-3 text-xs shadow-xs data-popup-open:ring-2 data-popup-open:ring-ring/40",
            !enabled && "opacity-50"
          )}
        >
          <div className="flex size-8 items-center justify-center bg-sky-500/15 text-sky-600">
            <MailIcon className="size-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium">Send welcome email</span>
            <span className="text-muted-foreground">
              {enabled ? "Step 2 · Email" : "Step 2 · Skipped"}
            </span>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-52">
          <ContextMenuGroup>
            <ContextMenuItem>
              <PencilIcon />
              Rename step
            </ContextMenuItem>
            <ContextMenuItem>
              <CopyPlusIcon />
              Duplicate step
            </ContextMenuItem>
            <ContextMenuCheckboxItem
              checked={enabled}
              onCheckedChange={setEnabled}
            >
              Step enabled
            </ContextMenuCheckboxItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <PlusIcon />
              Add step after
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-44">
              <ContextMenuGroup>
                <ContextMenuItem onClick={() => setNext("Wait 1 day")}>
                  <HourglassIcon />
                  Delay
                </ContextMenuItem>
                <ContextMenuItem onClick={() => setNext("If plan is Pro")}>
                  <SplitIcon />
                  Condition
                </ContextMenuItem>
                <ContextMenuItem onClick={() => setNext("Post to #signups")}>
                  <MessageSquareIcon />
                  Send message
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem variant="destructive">
              <TrashIcon />
              Delete step
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      {next ? (
        <>
          <span className="h-4 w-px bg-border" />
          <div className="w-full border p-2 text-xs">{next}</div>
        </>
      ) : null}
    </div>
  )
}
