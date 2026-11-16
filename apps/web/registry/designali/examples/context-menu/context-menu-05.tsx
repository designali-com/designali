import {
  FilePlus as FilePlusIcon,
  Folder as FolderIcon,
  FolderPlus as FolderPlusIcon,
  Pencil as PencilIcon,
  Trash as TrashIcon,
} from "@designali/icons"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

const folders = [
  { name: "Clients", depth: 0 },
  { name: "Brand identity", depth: 1 },
  { name: "Next.js website", depth: 1 },
  { name: "Designali", depth: 0 },
  { name: "Templates", depth: 1 },
]

export default function FolderTreeRowMenu() {
  return (
    <div className="flex w-full max-w-60 flex-col border p-1">
      {folders.map((folder) => (
        <ContextMenu key={folder.name}>
          <ContextMenuTrigger
            className="flex items-center gap-2 px-2 py-1.5 text-xs hover:bg-muted data-popup-open:bg-muted"
            style={{ paddingInlineStart: 8 + folder.depth * 16 }}
          >
            <FolderIcon className="size-4 text-primary" />
            {folder.name}
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuLabel>{folder.name}</ContextMenuLabel>
              <ContextMenuItem>
                <FolderPlusIcon />
                New subfolder
              </ContextMenuItem>
              <ContextMenuItem>
                <FilePlusIcon />
                New file
              </ContextMenuItem>
              <ContextMenuItem>
                <PencilIcon />
                Rename
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem variant="destructive">
                <TrashIcon />
                Delete folder
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}
