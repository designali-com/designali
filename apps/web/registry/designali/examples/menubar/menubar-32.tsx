import { BookmarkIcon, BookmarkPlusIcon, FolderIcon } from "lucide-react"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function BookmarkFoldersMenubar() {
  return (
    <div className="w-full max-w-xs">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Bookmarks</MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarItem>
                <BookmarkPlusIcon /> Bookmark this page{" "}
                <MenubarShortcut>⌘D</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <BookmarkIcon /> Bookmark manager
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarSub>
                <MenubarSubTrigger>
                  <FolderIcon /> Work
                </MenubarSubTrigger>
                <MenubarSubContent className="w-44">
                  <MenubarGroup>
                    <MenubarItem>Team wiki</MenubarItem>
                    <MenubarItem>Sprint board</MenubarItem>
                    <MenubarSub>
                      <MenubarSubTrigger>
                        <FolderIcon /> Dashboards
                      </MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarGroup>
                          <MenubarItem>Revenue</MenubarItem>
                          <MenubarItem>Uptime</MenubarItem>
                          <MenubarItem>Signups</MenubarItem>
                        </MenubarGroup>
                      </MenubarSubContent>
                    </MenubarSub>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>
                  <FolderIcon /> Reading list
                </MenubarSubTrigger>
                <MenubarSubContent className="w-48">
                  <MenubarGroup>
                    <MenubarItem>On writing clear specs</MenubarItem>
                    <MenubarItem>Designing for latency</MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>History</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                Show full history <MenubarShortcut>⌘Y</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>Reopen closed tab</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
