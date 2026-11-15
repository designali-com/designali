import {
  DownloadIcon,
  ExternalLinkIcon,
  FileSpreadsheetIcon,
  HistoryIcon,
  LinkIcon,
  SendIcon,
  Share2Icon,
  UsersIcon,
} from "lucide-react"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

export default function NestedExportSubmenus() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-full max-w-xs flex-col gap-2 border p-4">
        <FileSpreadsheetIcon className="size-6 text-emerald-600" />
        <span className="text-sm font-medium">2026 Budget forecast</span>
        <span className="text-xs text-muted-foreground">
          Spreadsheet · 14 tabs
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem>
            <ExternalLinkIcon />
            Open
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Share2Icon />
              Share & export
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuGroup>
                <ContextMenuItem>
                  <LinkIcon />
                  Copy share link
                </ContextMenuItem>
                <ContextMenuItem>
                  <UsersIcon />
                  Manage access
                </ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <DownloadIcon />
                  Download as
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-44">
                  <ContextMenuGroup>
                    <ContextMenuItem>Excel (.xlsx)</ContextMenuItem>
                    <ContextMenuItem>CSV (current tab)</ContextMenuItem>
                    <ContextMenuItem>PDF document</ContextMenuItem>
                    <ContextMenuItem>OpenDocument (.ods)</ContextMenuItem>
                  </ContextMenuGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <SendIcon />
                  Send to
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-40">
                  <ContextMenuGroup>
                    <ContextMenuItem>Email</ContextMenuItem>
                    <ContextMenuItem>#finance channel</ContextMenuItem>
                  </ContextMenuGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            <HistoryIcon />
            Version history
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
