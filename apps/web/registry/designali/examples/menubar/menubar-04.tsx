import {
  BugOff as BugOffIcon,
  Play as PlayIcon,
  Terminal as TerminalIcon,
} from "@designali/icons"

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

export default function CodeEditorMenubar() {
  return (
    <div className="w-full max-w-md">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Selection</MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarGroup>
              <MenubarItem>
                Expand selection <MenubarShortcut>⌃⇧→</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Add cursor above <MenubarShortcut>⌥⌘↑</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Add cursor below <MenubarShortcut>⌥⌘↓</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                Duplicate line <MenubarShortcut>⇧⌥↓</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Go</MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarGroup>
              <MenubarItem>
                Go to file... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Go to symbol... <MenubarShortcut>⇧⌘O</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Go to definition <MenubarShortcut>F12</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Go to line... <MenubarShortcut>⌃G</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Run</MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarGroup>
              <MenubarItem>
                <PlayIcon /> Start debugging{" "}
                <MenubarShortcut>F5</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <BugOffIcon /> Run without debugging{" "}
                <MenubarShortcut>⌃F5</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarSub>
                <MenubarSubTrigger>
                  <TerminalIcon /> Run task
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>dev</MenubarItem>
                    <MenubarItem>build</MenubarItem>
                    <MenubarItem>test:watch</MenubarItem>
                    <MenubarItem>lint --fix</MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
