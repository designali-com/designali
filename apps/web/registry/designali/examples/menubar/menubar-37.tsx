import {
  Share2 as Share2Icon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function AppHeaderMenubar() {
  return (
    <div className="flex w-full max-w-lg items-center gap-2 border bg-background px-2 py-1.5">
      <div className="flex size-7 shrink-0 items-center justify-center bg-gradient-to-br from-violet-500 to-pink-500 text-[11px] font-bold text-white">
        Q
      </div>
      <Menubar className="h-7 border-0 p-0">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>New survey</MenubarItem>
              <MenubarItem>Duplicate</MenubarItem>
              <MenubarItem>Move to folder</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Add question</MenubarItem>
              <MenubarItem>Add logic jump</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Templates</MenubarItem>
              <MenubarItem>Contact support</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="ms-auto flex items-center gap-1.5">
        <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
          <Share2Icon data-icon="inline-start" />
          Share
        </Button>
        <Button size="sm">Publish</Button>
      </div>
    </div>
  )
}
