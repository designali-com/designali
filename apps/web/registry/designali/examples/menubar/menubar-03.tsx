import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Link as LinkIcon,
  MessageSquare as MessageSquareIcon,
  Minus as MinusIcon,
  RemoveFormatting as RemoveFormattingIcon,
  Table as TableIcon,
  Underline as UnderlineIcon,
} from "@designali/icons"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function DocumentEditorMenubar() {
  return (
    <div className="w-full max-w-md">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                New document <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Open... <MenubarShortcut>⌘O</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>Make a copy</MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                Download as PDF <MenubarShortcut>⇧⌘D</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>Version history</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                Undo typing <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Find and replace <MenubarShortcut>⇧⌘H</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Select all <MenubarShortcut>⌘A</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Format</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <BoldIcon /> Bold <MenubarShortcut>⌘B</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <ItalicIcon /> Italic <MenubarShortcut>⌘I</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <UnderlineIcon /> Underline{" "}
                <MenubarShortcut>⌘U</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                <RemoveFormattingIcon /> Clear formatting
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Insert</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <TableIcon /> Table
              </MenubarItem>
              <MenubarItem>
                <LinkIcon /> Link <MenubarShortcut>⌘K</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <MinusIcon /> Horizontal line
              </MenubarItem>
              <MenubarItem>
                <MessageSquareIcon /> Comment{" "}
                <MenubarShortcut>⌥⌘M</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
