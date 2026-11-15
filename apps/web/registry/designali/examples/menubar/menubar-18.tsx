import {
  AlignLeftIcon,
  DatabaseBackupIcon,
  DownloadIcon,
  EraserIcon,
  HistoryIcon,
  KeyRoundIcon,
  ListTreeIcon,
  PlayIcon,
  TableIcon,
} from "lucide-react"

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

export default function DatabaseConsoleMenubar() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Query</MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarItem>
                <PlayIcon /> Run query <MenubarShortcut>⌘↵</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <ListTreeIcon /> Explain plan{" "}
                <MenubarShortcut>⇧⌘E</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <AlignLeftIcon /> Format SQL
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                <HistoryIcon /> Query history
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Table</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <TableIcon /> New table
              </MenubarItem>
              <MenubarItem>
                <KeyRoundIcon /> Manage indexes
              </MenubarItem>
              <MenubarItem variant="destructive">
                <EraserIcon /> Truncate table
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Export</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarSub>
                <MenubarSubTrigger>
                  <DownloadIcon /> Results as
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>CSV</MenubarItem>
                    <MenubarItem>JSON</MenubarItem>
                    <MenubarItem>SQL inserts</MenubarItem>
                    <MenubarItem>Markdown table</MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>
                <DatabaseBackupIcon /> Full backup...
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <pre className="overflow-x-auto border bg-muted/50 p-3 font-mono text-[11px] leading-relaxed">
        {"SELECT plan, COUNT(*)\nFROM subscriptions\nGROUP BY plan;"}
      </pre>
    </div>
  )
}
