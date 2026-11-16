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

export default function DesktopWindowMenubar() {
  return (
    <div className="w-full max-w-md border bg-background shadow-sm">
      <div className="flex items-center gap-3 border-b bg-muted/50 px-3 py-1.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
        </div>
        <Menubar className="h-7 border-0 bg-transparent p-0">
          <MenubarMenu>
            <MenubarTrigger className="font-semibold">Designali</MenubarTrigger>
            <MenubarContent>
              <MenubarGroup>
                <MenubarItem>About Designali</MenubarItem>
                <MenubarItem>
                  Settings... <MenubarShortcut>⌘,</MenubarShortcut>
                </MenubarItem>
              </MenubarGroup>
              <MenubarSeparator />
              <MenubarGroup>
                <MenubarItem>
                  Quit Designali <MenubarShortcut>⌘Q</MenubarShortcut>
                </MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarGroup>
                <MenubarItem>
                  New transaction <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Import statement...</MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Window</MenubarTrigger>
            <MenubarContent>
              <MenubarGroup>
                <MenubarItem>
                  Minimize <MenubarShortcut>⌘M</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Zoom</MenubarItem>
                <MenubarItem>Bring all to front</MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="grid grid-cols-3 gap-2 p-4 text-xs">
        {["Income", "Expenses", "Balance"].map((label, i) => (
          <div key={label} className="border p-2">
            <p className="text-muted-foreground">{label}</p>
            <p className="font-medium tabular-nums">
              {["$8,420", "$5,113", "$3,307"][i]}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
