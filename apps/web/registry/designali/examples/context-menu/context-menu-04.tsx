import {
  Download as DownloadIcon,
  ExternalLink as ExternalLinkIcon,
  FileText as FileTextIcon,
  Link as LinkIcon,
  Mail as MailIcon,
  Pencil as PencilIcon,
  Share2 as Share2Icon,
  Trash as TrashIcon,
  UserPlus as UserPlusIcon,
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

export default function FileTileMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-40 flex-col items-center gap-2 border p-4 text-center hover:bg-muted/50 data-popup-open:bg-muted">
        <FileTextIcon className="size-10 text-sky-500" />
        <span className="text-xs font-medium">designali-brand-guide.fig</span>
        <span className="text-[11px] text-muted-foreground">
          284 KB · Edited today
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuItem>
            <ExternalLinkIcon />
            Open
            <ContextMenuShortcut>↵</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <PencilIcon />
            Rename
            <ContextMenuShortcut>F2</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Share2Icon />
              Share
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-44">
              <ContextMenuGroup>
                <ContextMenuItem>
                  <LinkIcon />
                  Copy link
                </ContextMenuItem>
                <ContextMenuItem>
                  <MailIcon />
                  Email file
                </ContextMenuItem>
                <ContextMenuItem>
                  <UserPlusIcon />
                  Invite people...
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuItem>
            <DownloadIcon />
            Download
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive">
            <TrashIcon />
            Move to trash
            <ContextMenuShortcut>⌫</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
