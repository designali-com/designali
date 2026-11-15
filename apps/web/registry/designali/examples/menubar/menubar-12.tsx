import {
  CopyIcon,
  DownloadIcon,
  EyeIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function ReadOnlyModeMenubar() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Menubar className="flex-1">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <CopyIcon /> Make a copy
              </MenubarItem>
              <MenubarItem>
                <DownloadIcon /> Download
              </MenubarItem>
              <MenubarItem disabled>
                <PencilIcon /> Rename
              </MenubarItem>
              <MenubarItem disabled variant="destructive">
                <Trash2Icon /> Move to trash
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu disabled>
          <MenubarTrigger className="data-disabled:opacity-50">
            Edit
          </MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Undo</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu disabled>
          <MenubarTrigger className="data-disabled:opacity-50">
            Insert
          </MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Image</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Badge variant="secondary">
        <EyeIcon data-icon="inline-start" />
        View only
      </Badge>
    </div>
  )
}
