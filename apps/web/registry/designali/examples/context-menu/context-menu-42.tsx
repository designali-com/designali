import {
  Download as DownloadIcon,
  ExternalLink as ExternalLinkIcon,
  FileSpreadsheet as FileSpreadsheetIcon,
  History as HistoryIcon,
  Link as LinkIcon,
  Send as SendIcon,
  Share2 as Share2Icon,
  Users as UsersIcon,
} from "@designali/icons"

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
        <FileSpreadsheetIcon className="size-6 text-primary" />
        <span className="text-sm font-medium">Designali 2026 roadmap</span>
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
                    <ContextMenuItem>#studio channel</ContextMenuItem>
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
