import {
  Download as DownloadIcon,
  ExternalLink as ExternalLinkIcon,
  FileText as FileTextIcon,
  Folder as FolderIcon,
  FolderInput as FolderInputIcon,
  FolderPlus as FolderPlusIcon,
  EllipsisVertical as MoreVerticalIcon,
  Pencil as PencilIcon,
  Trash2 as Trash2Icon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const folders = [
  "Design reviews",
  "Client handoff",
  "Designali templates",
  "Shared with me",
]

export default function FileItemMenuWithMoveSubmenu() {
  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-3">
      <div className="flex size-9 items-center justify-center bg-muted">
        <FileTextIcon className="size-4 text-muted-foreground" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium">designali-brand-guidelines.pdf</p>
        <p className="text-xs text-muted-foreground">4.2 MB · Edited 2h ago</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon-sm" aria-label="File actions" />
          }
        >
          <MoreVerticalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuItem>
            <ExternalLinkIcon />
            Open
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PencilIcon />
            Rename
            <DropdownMenuShortcut>F2</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <FolderInputIcon />
              Move to
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-44">
              {folders.map((folder) => (
                <DropdownMenuItem key={folder}>
                  <FolderIcon />
                  {folder}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <FolderPlusIcon />
                New folder...
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <DownloadIcon />
            Download
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <Trash2Icon />
            Move to trash
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
