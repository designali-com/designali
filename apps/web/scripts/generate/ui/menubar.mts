import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "DocumentEditorMenubar",
    description: "Word-processor menubar with File, Edit, Format and Insert menus and keyboard shortcuts.",
    code: `
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
                <UnderlineIcon /> Underline <MenubarShortcut>⌘U</MenubarShortcut>
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
                <MessageSquareIcon /> Comment <MenubarShortcut>⌥⌘M</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}`,
  },
  {
    name: "CodeEditorMenubar",
    description: "IDE-style menubar with Selection, Go and Run menus plus a Run Task submenu.",
    code: `
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
                <PlayIcon /> Start debugging <MenubarShortcut>F5</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <BugOffIcon /> Run without debugging <MenubarShortcut>⌃F5</MenubarShortcut>
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
}`,
  },
  {
    name: "SpreadsheetMenubar",
    description: "Spreadsheet menubar with insert submenus and a controlled number-format radio group shown in a sample cell.",
    code: `
const formats: Record<string, string> = {
  number: "1,284.50",
  currency: "$1,284.50",
  percent: "128,450%",
  scientific: "1.28E+03",
}

export default function SpreadsheetMenubar() {
  const [format, setFormat] = React.useState("currency")

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Insert</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarSub>
                <MenubarSubTrigger>Rows</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>Insert 1 row above</MenubarItem>
                    <MenubarItem>Insert 1 row below</MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Columns</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>Insert 1 column left</MenubarItem>
                    <MenubarItem>Insert 1 column right</MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                <SigmaIcon /> Function
              </MenubarItem>
              <MenubarItem>
                <ChartColumnIcon /> Chart
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Format</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarLabel>Number format</MenubarLabel>
              <MenubarRadioGroup value={format} onValueChange={setFormat}>
                <MenubarRadioItem value="number">Number</MenubarRadioItem>
                <MenubarRadioItem value="currency">Currency</MenubarRadioItem>
                <MenubarRadioItem value="percent">Percent</MenubarRadioItem>
                <MenubarRadioItem value="scientific">Scientific</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Data</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Sort sheet A to Z</MenubarItem>
              <MenubarItem>Create a filter</MenubarItem>
              <MenubarItem>Data validation</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="grid grid-cols-[3rem_1fr] border text-xs">
        <div className="border-e bg-muted px-2 py-1.5 font-medium text-muted-foreground">B4</div>
        <div className="px-2 py-1.5 text-end font-mono tabular-nums">{formats[format]}</div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "PhotoEditorMenubar",
    description: "Image editing menubar with adjustment and filter submenus using leading icons.",
    code: `
export default function PhotoEditorMenubar() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Image</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <CropIcon /> Crop <MenubarShortcut>C</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <RotateCwIcon /> Rotate 90° clockwise
              </MenubarItem>
              <MenubarItem>
                <FlipHorizontalIcon /> Flip horizontal
              </MenubarItem>
              <MenubarItem>
                <ScalingIcon /> Resize canvas...
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Adjust</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <SunIcon /> Brightness
              </MenubarItem>
              <MenubarItem>
                <ContrastIcon /> Contrast
              </MenubarItem>
              <MenubarItem>
                <DropletIcon /> Saturation
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                <WandSparklesIcon /> Auto enhance <MenubarShortcut>⇧⌘E</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Filter</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarSub>
                <MenubarSubTrigger>
                  <AppWindowIcon /> Blur
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>Gaussian blur</MenubarItem>
                    <MenubarItem>Motion blur</MenubarItem>
                    <MenubarItem>Lens blur</MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>
                  <PaletteIcon /> Stylize
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>Grain</MenubarItem>
                    <MenubarItem>Duotone</MenubarItem>
                    <MenubarItem>Vignette</MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="aspect-video w-full bg-gradient-to-br from-amber-300 via-rose-400 to-indigo-500" />
    </div>
  )
}`,
  },
  {
    name: "MusicPlayerMenubar",
    description: "Media player menubar with a play/pause action, shuffle checkbox and repeat mode radio reflected in a status line.",
    code: `
export default function MusicPlayerMenubar() {
  const [playing, setPlaying] = React.useState(false)
  const [shuffle, setShuffle] = React.useState(true)
  const [repeat, setRepeat] = React.useState("off")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Controls</MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarItem onClick={() => setPlaying((p) => !p)}>
                {playing ? <PauseIcon /> : <PlayIcon />}
                {playing ? "Pause" : "Play"}
                <MenubarShortcut>Space</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <SkipForwardIcon /> Next track <MenubarShortcut>⌘→</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <SkipBackIcon /> Previous track <MenubarShortcut>⌘←</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarCheckboxItem checked={shuffle} onCheckedChange={setShuffle}>
                Shuffle
              </MenubarCheckboxItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarLabel inset>Repeat</MenubarLabel>
              <MenubarRadioGroup value={repeat} onValueChange={setRepeat}>
                <MenubarRadioItem value="off">Off</MenubarRadioItem>
                <MenubarRadioItem value="all">All</MenubarRadioItem>
                <MenubarRadioItem value="one">One</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Library</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Add to playlist</MenubarItem>
              <MenubarItem>Show album</MenubarItem>
              <MenubarItem>Love track</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex items-center gap-3 border p-3">
        <div className="size-10 shrink-0 bg-gradient-to-br from-fuchsia-500 to-sky-500" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">Harbor Lights</p>
          <p className="truncate text-xs text-muted-foreground">The Quiet Tides</p>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          {playing ? <Volume2Icon className="size-4" /> : <VolumeXIcon className="size-4" />}
          {shuffle && <ShuffleIcon className="size-4" />}
          {repeat !== "off" && (repeat === "one" ? <Repeat1Icon className="size-4" /> : <RepeatIcon className="size-4" />)}
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "EmailMessageMenubar",
    description: "Email client menubar with reply actions, a Mark as submenu and a destructive delete item.",
    code: `
export default function EmailMessageMenubar() {
  return (
    <div className="w-full max-w-sm">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Message</MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarItem>
                <ReplyIcon /> Reply <MenubarShortcut>R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <ReplyAllIcon /> Reply all <MenubarShortcut>⇧R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <ForwardIcon /> Forward <MenubarShortcut>F</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarSub>
                <MenubarSubTrigger>
                  <TagIcon /> Mark as
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>
                      <MailOpenIcon /> Read
                    </MenubarItem>
                    <MenubarItem>
                      <MailIcon /> Unread
                    </MenubarItem>
                    <MenubarItem>
                      <StarIcon /> Important
                    </MenubarItem>
                    <MenubarItem>
                      <ShieldAlertIcon /> Spam
                    </MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>
                <ArchiveIcon /> Archive <MenubarShortcut>E</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem variant="destructive">
                <Trash2Icon /> Delete <MenubarShortcut>⌫</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Mailbox</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <InboxIcon /> Inbox
              </MenubarItem>
              <MenubarItem>
                <SendIcon /> Sent
              </MenubarItem>
              <MenubarItem>
                <FileTextIcon /> Drafts
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}`,
  },
  {
    name: "PanelVisibilityMenubar",
    description: "View menu whose controlled checkbox items toggle sidebar, minimap and status bar panels in a layout preview.",
    code: `
export default function PanelVisibilityMenubar() {
  const [sidebar, setSidebar] = React.useState(true)
  const [minimap, setMinimap] = React.useState(false)
  const [statusBar, setStatusBar] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarLabel inset>Appearance</MenubarLabel>
              <MenubarCheckboxItem checked={sidebar} onCheckedChange={setSidebar}>
                Primary sidebar
                <MenubarShortcut>⌘B</MenubarShortcut>
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked={minimap} onCheckedChange={setMinimap}>
                Minimap
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked={statusBar} onCheckedChange={setStatusBar}>
                Status bar
              </MenubarCheckboxItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex h-40 flex-col border">
        <div className="flex min-h-0 flex-1">
          {sidebar && <div className="w-16 shrink-0 border-e bg-muted" />}
          <div className="flex-1 space-y-1.5 p-3">
            {[80, 60, 72, 40, 66].map((w, i) => (
              <div key={i} className="h-1.5 bg-muted-foreground/20" style={{ width: w + "%" }} />
            ))}
          </div>
          {minimap && <div className="w-8 shrink-0 border-s bg-muted/60" />}
        </div>
        {statusBar && (
          <div className="flex items-center justify-between border-t bg-muted px-2 py-1 text-[10px] text-muted-foreground">
            <span>main</span>
            <span>Ln 12, Col 4</span>
          </div>
        )}
      </div>
    </div>
  )
}`,
  },
  {
    name: "ThemeDensityMenubar",
    description: "Appearance menubar with theme and density radio groups applied to a preview card.",
    code: `
export default function ThemeDensityMenubar() {
  const [theme, setTheme] = React.useState("light")
  const [density, setDensity] = React.useState("comfortable")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Theme</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={theme} onValueChange={setTheme}>
              <MenubarRadioItem value="light">
                <SunIcon /> Light
              </MenubarRadioItem>
              <MenubarRadioItem value="dark">
                <MoonIcon /> Dark
              </MenubarRadioItem>
              <MenubarRadioItem value="system">
                <MonitorIcon /> System
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Density</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={density} onValueChange={setDensity}>
              <MenubarRadioItem value="compact">Compact</MenubarRadioItem>
              <MenubarRadioItem value="comfortable">Comfortable</MenubarRadioItem>
              <MenubarRadioItem value="spacious">Spacious</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div
        className={cn(
          "border",
          theme === "dark" ? "bg-zinc-900 text-zinc-100" : "bg-background",
          density === "compact" && "p-2 text-xs",
          density === "comfortable" && "p-4 text-sm",
          density === "spacious" && "p-6 text-base"
        )}
      >
        <p className="font-medium">Weekly digest</p>
        <p className="opacity-70">Theme: {theme}, density: {density}</p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "IconOnlyMenubar",
    description: "Compact menubar using icon-only triggers with accessible labels for a canvas toolbar.",
    code: `
export default function IconOnlyMenubar() {
  return (
    <Menubar className="h-9 w-fit">
      <MenubarMenu>
        <MenubarTrigger aria-label="Shapes" className="px-2">
          <ShapesIcon className="size-4" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              <SquareIcon /> Rectangle <MenubarShortcut>R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <CircleIcon /> Ellipse <MenubarShortcut>O</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <TriangleIcon /> Polygon
            </MenubarItem>
            <MenubarItem>
              <StarIcon /> Star
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger aria-label="Text" className="px-2">
          <TypeIcon className="size-4" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>Heading</MenubarItem>
            <MenubarItem>Paragraph</MenubarItem>
            <MenubarItem>Text on path</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger aria-label="Pen tools" className="px-2">
          <PenToolIcon className="size-4" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              <PenToolIcon /> Pen <MenubarShortcut>P</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <PencilIcon /> Pencil <MenubarShortcut>⇧P</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger aria-label="More" className="px-2">
          <EllipsisIcon className="size-4" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>Plugins</MenubarItem>
            <MenubarItem>Keyboard shortcuts</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`,
  },
  {
    name: "ReadOnlyModeMenubar",
    description: "View-only document menubar where editing menus are disabled and a badge explains the state.",
    code: `
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
          <MenubarTrigger className="data-disabled:opacity-50">Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Undo</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu disabled>
          <MenubarTrigger className="data-disabled:opacity-50">Insert</MenubarTrigger>
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
}`,
  },
  {
    name: "VerticalSidebarMenubar",
    description: "Vertical menubar whose menus open to the side, suited to a narrow tool rail.",
    code: `
const menus = [
  { label: "Projects", icon: FolderIcon, items: ["Northwind redesign", "Billing revamp", "Mobile v3"] },
  { label: "Reports", icon: ChartPieIcon, items: ["Weekly summary", "Burn-down", "Velocity"] },
  { label: "Team", icon: UsersIcon, items: ["Members", "Invites", "Roles"] },
]

export default function VerticalSidebarMenubar() {
  return (
    <Menubar orientation="vertical" className="h-auto w-40 flex-col items-stretch">
      {menus.map((menu) => (
        <MenubarMenu key={menu.label}>
          <MenubarTrigger className="gap-2 py-1.5">
            <menu.icon className="size-4" />
            {menu.label}
            <ChevronRightIcon className="ms-auto size-3.5 text-muted-foreground" />
          </MenubarTrigger>
          <MenubarContent side="right" align="start" sideOffset={6} alignOffset={0}>
            <MenubarGroup>
              <MenubarLabel>{menu.label}</MenubarLabel>
              {menu.items.map((item) => (
                <MenubarItem key={item}>{item}</MenubarItem>
              ))}
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  )
}`,
  },
  {
    name: "DesktopWindowMenubar",
    description: "Desktop app window chrome with traffic-light controls and a menubar in the title bar.",
    code: `
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
            <MenubarTrigger className="font-semibold">Ledger</MenubarTrigger>
            <MenubarContent>
              <MenubarGroup>
                <MenubarItem>About Ledger</MenubarItem>
                <MenubarItem>
                  Settings... <MenubarShortcut>⌘,</MenubarShortcut>
                </MenubarItem>
              </MenubarGroup>
              <MenubarSeparator />
              <MenubarGroup>
                <MenubarItem>
                  Quit Ledger <MenubarShortcut>⌘Q</MenubarShortcut>
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
            <p className="font-medium tabular-nums">{["$8,420", "$5,113", "$3,307"][i]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "KanbanBoardMenubar",
    description: "Kanban board menubar with card actions and controlled label filter checkboxes that filter the cards.",
    code: `
const cards = [
  { title: "Refresh onboarding emails", label: "Design" },
  { title: "Fix webhook retries", label: "Backend" },
  { title: "Audit color contrast", label: "Design" },
  { title: "Add CSV import", label: "Frontend" },
]

const labels = ["Design", "Backend", "Frontend"]

export default function KanbanBoardMenubar() {
  const [visible, setVisible] = React.useState<string[]>(labels)

  const toggle = (label: string, checked: boolean) =>
    setVisible((prev) => (checked ? [...prev, label] : prev.filter((l) => l !== label)))

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Board</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <PlusIcon /> Add column
              </MenubarItem>
              <MenubarItem>
                <ArchiveIcon /> Archived cards
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Filter</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarLabel inset>Labels</MenubarLabel>
              {labels.map((label) => (
                <MenubarCheckboxItem
                  key={label}
                  checked={visible.includes(label)}
                  onCheckedChange={(checked) => toggle(label, checked)}
                  closeOnClick={false}
                >
                  {label}
                </MenubarCheckboxItem>
              ))}
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset onClick={() => setVisible(labels)}>
                Reset filters
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex flex-col gap-2 border bg-muted/40 p-2">
        <p className="text-xs font-medium text-muted-foreground">In progress</p>
        {cards
          .filter((card) => visible.includes(card.label))
          .map((card) => (
            <div key={card.title} className="flex items-center justify-between gap-2 border bg-background p-2 text-xs">
              <span className="truncate">{card.title}</span>
              <Badge variant="outline">{card.label}</Badge>
            </div>
          ))}
        {visible.length === 0 && <p className="p-2 text-center text-xs text-muted-foreground">No cards match the filters.</p>}
      </div>
    </div>
  )
}`,
  },
  {
    name: "CalendarAppMenubar",
    description: "Calendar app menubar with a day/week/month view radio and color-coded calendar toggles.",
    code: `
const calendars = [
  { id: "work", label: "Work", color: "bg-sky-500" },
  { id: "personal", label: "Personal", color: "bg-emerald-500" },
  { id: "holidays", label: "Holidays", color: "bg-amber-500" },
]

export default function CalendarAppMenubar() {
  const [view, setView] = React.useState("week")
  const [shown, setShown] = React.useState<Record<string, boolean>>({ work: true, personal: true, holidays: false })

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={view} onValueChange={setView}>
              <MenubarRadioItem value="day">
                Day <MenubarShortcut>D</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem value="week">
                Week <MenubarShortcut>W</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem value="month">
                Month <MenubarShortcut>M</MenubarShortcut>
              </MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>
                Go to today <MenubarShortcut>T</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Calendars</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              {calendars.map((cal) => (
                <MenubarCheckboxItem
                  key={cal.id}
                  checked={shown[cal.id]}
                  onCheckedChange={(checked) => setShown((s) => ({ ...s, [cal.id]: checked }))}
                >
                  <span className={cn("size-2 rounded-full", cal.color)} />
                  {cal.label}
                </MenubarCheckboxItem>
              ))}
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>New calendar...</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex items-center justify-between border px-3 py-2 text-xs">
        <span className="font-medium capitalize">{view} view</span>
        <span className="flex gap-1">
          {calendars
            .filter((cal) => shown[cal.id])
            .map((cal) => (
              <span key={cal.id} className={cn("size-2 rounded-full", cal.color)} />
            ))}
        </span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "FileManagerSortMenubar",
    description: "File manager menubar with sort field and direction radios plus a hidden-files toggle driving the file list.",
    code: `
const files = [
  { name: "budget-2026.xlsx", size: 48, modified: 3 },
  { name: "brand-guide.pdf", size: 2210, modified: 12 },
  { name: ".env.local", size: 1, modified: 1, hidden: true },
  { name: "invoices", size: 940, modified: 6 },
  { name: "roadmap.md", size: 6, modified: 9 },
]

export default function FileManagerSortMenubar() {
  const [sortBy, setSortBy] = React.useState("name")
  const [direction, setDirection] = React.useState("asc")
  const [showHidden, setShowHidden] = React.useState(false)

  const list = files
    .filter((f) => showHidden || !f.hidden)
    .sort((a, b) => {
      const result =
        sortBy === "name" ? a.name.localeCompare(b.name) : sortBy === "size" ? a.size - b.size : a.modified - b.modified
      return direction === "asc" ? result : -result
    })

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <FolderPlusIcon /> New folder <MenubarShortcut>⇧⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <UploadIcon /> Upload files
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent className="w-48">
            <MenubarGroup>
              <MenubarLabel inset>Sort by</MenubarLabel>
              <MenubarRadioGroup value={sortBy} onValueChange={setSortBy}>
                <MenubarRadioItem value="name">Name</MenubarRadioItem>
                <MenubarRadioItem value="modified">Date modified</MenubarRadioItem>
                <MenubarRadioItem value="size">Size</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarRadioGroup value={direction} onValueChange={setDirection}>
              <MenubarRadioItem value="asc">Ascending</MenubarRadioItem>
              <MenubarRadioItem value="desc">Descending</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarCheckboxItem checked={showHidden} onCheckedChange={setShowHidden}>
                Show hidden files <MenubarShortcut>⇧⌘.</MenubarShortcut>
              </MenubarCheckboxItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <ul className="divide-y border text-xs">
        {list.map((file) => (
          <li key={file.name} className="flex items-center gap-2 px-3 py-2">
            {file.name.includes(".") && !file.name.startsWith(".") ? (
              <FileIcon className="size-4 text-muted-foreground" />
            ) : (
              <FolderIcon className="size-4 text-muted-foreground" />
            )}
            <span className="flex-1 truncate">{file.name}</span>
            <span className="text-muted-foreground tabular-nums">{file.size} KB</span>
          </li>
        ))}
      </ul>
    </div>
  )
}`,
  },
  {
    name: "DatabaseConsoleMenubar",
    description: "Database console menubar with query actions and an export submenu offering several formats.",
    code: `
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
                <ListTreeIcon /> Explain plan <MenubarShortcut>⇧⌘E</MenubarShortcut>
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
        {"SELECT plan, COUNT(*)\\nFROM subscriptions\\nGROUP BY plan;"}
      </pre>
    </div>
  )
}`,
  },
  {
    name: "VideoTimelineMenubar",
    description: "Video editor menubar with clip, marker and playback speed menus above a timeline strip.",
    code: `
export default function VideoTimelineMenubar() {
  const [speed, setSpeed] = React.useState("1")

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Clip</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <ScissorsIcon /> Split at playhead <MenubarShortcut>S</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <CopyIcon /> Duplicate clip
              </MenubarItem>
              <MenubarItem>
                <UnlinkIcon /> Detach audio
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Marker</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <BookmarkIcon /> Add marker <MenubarShortcut>M</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>Next marker</MenubarItem>
              <MenubarItem>Clear all markers</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Playback</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarLabel inset>Speed</MenubarLabel>
              <MenubarRadioGroup value={speed} onValueChange={setSpeed}>
                {["0.5", "1", "1.5", "2"].map((s) => (
                  <MenubarRadioItem key={s} value={s}>
                    {s}×
                  </MenubarRadioItem>
                ))}
              </MenubarRadioGroup>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <span className="ms-auto pe-1 text-[11px] text-muted-foreground tabular-nums">{speed}× · 00:42</span>
      </Menubar>
      <div className="relative flex h-10 gap-0.5 border bg-muted/40 p-1">
        <div className="w-1/3 bg-sky-500/70" />
        <div className="w-1/4 bg-violet-500/70" />
        <div className="flex-1 bg-emerald-500/70" />
        <div className="absolute inset-y-0 start-[42%] w-px bg-foreground" />
      </div>
    </div>
  )
}`,
  },
  {
    name: "ChatConversationMenubar",
    description: "Chat conversation menubar with a mute duration radio submenu, pin toggle and leave action.",
    code: `
export default function ChatConversationMenubar() {
  const [mute, setMute] = React.useState("off")
  const [pinned, setPinned] = React.useState(false)

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center gap-2 border-b p-2">
        <Avatar className="size-7">
          <AvatarFallback>DS</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">#design-systems</p>
          <p className="text-[11px] text-muted-foreground">
            {mute === "off" ? "Notifications on" : "Muted " + mute}
            {pinned && " · Pinned"}
          </p>
        </div>
        <Menubar className="border-0 p-0">
          <MenubarMenu>
            <MenubarTrigger>Conversation</MenubarTrigger>
            <MenubarContent align="end" alignOffset={0}>
              <MenubarGroup>
                <MenubarSub>
                  <MenubarSubTrigger>
                    <BellOffIcon /> Mute
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarRadioGroup value={mute} onValueChange={setMute}>
                      <MenubarRadioItem value="off">Don&apos;t mute</MenubarRadioItem>
                      <MenubarRadioItem value="for 1 hour">For 1 hour</MenubarRadioItem>
                      <MenubarRadioItem value="until tomorrow">Until tomorrow</MenubarRadioItem>
                      <MenubarRadioItem value="forever">Until I turn it back on</MenubarRadioItem>
                    </MenubarRadioGroup>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarCheckboxItem checked={pinned} onCheckedChange={setPinned}>
                  Pin to top
                </MenubarCheckboxItem>
                <MenubarItem>
                  <SearchIcon /> Search in conversation
                </MenubarItem>
              </MenubarGroup>
              <MenubarSeparator />
              <MenubarGroup>
                <MenubarItem variant="destructive">
                  <LogOutIcon /> Leave channel
                </MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="space-y-2 p-3 text-xs">
        <p>
          <span className="font-medium">Priya:</span> Tokens are merged, please review the spacing scale.
        </p>
        <p>
          <span className="font-medium">Jonas:</span> On it after standup.
        </p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "WorkspaceAccountMenubar",
    description: "App header menubar with an avatar trigger for account actions and a workspace switcher radio.",
    code: `
const workspaces = [
  { id: "acme", name: "Lumen Studio" },
  { id: "north", name: "Northfield Labs" },
  { id: "orbit", name: "Orbit Collective" },
]

export default function WorkspaceAccountMenubar() {
  const [workspace, setWorkspace] = React.useState("acme")
  const current = workspaces.find((w) => w.id === workspace)

  return (
    <Menubar className="h-10 w-full max-w-md justify-between">
      <MenubarMenu>
        <MenubarTrigger className="gap-2">
          <span className="flex size-5 items-center justify-center bg-primary text-[10px] font-semibold text-primary-foreground">
            {current?.name[0]}
          </span>
          {current?.name}
          <ChevronsUpDownIcon className="size-3 text-muted-foreground" />
        </MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarGroup>
            <MenubarLabel inset>Workspaces</MenubarLabel>
            <MenubarRadioGroup value={workspace} onValueChange={setWorkspace}>
              {workspaces.map((w) => (
                <MenubarRadioItem key={w.id} value={w.id}>
                  {w.name}
                </MenubarRadioItem>
              ))}
            </MenubarRadioGroup>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>Create workspace</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger aria-label="Account" className="p-0.5">
          <Avatar className="size-6">
            <AvatarFallback className="text-[10px]">EK</AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent align="end" alignOffset={0} className="w-52">
          <MenubarGroup>
            <MenubarLabel>
              <p className="font-medium text-foreground">Elena Kovač</p>
              <p className="font-normal text-muted-foreground">elena@lumen.studio</p>
            </MenubarLabel>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>
              <UserIcon /> Profile
            </MenubarItem>
            <MenubarItem>
              <CreditCardIcon /> Billing
            </MenubarItem>
            <MenubarItem>
              <SettingsIcon /> Settings <MenubarShortcut>⌘,</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>
              <LogOutIcon /> Sign out
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`,
  },
  {
    name: "MenubarWithCountBadges",
    description: "Support desk menubar whose items show ticket count badges and a New badge on a feature.",
    code: `
export default function MenubarWithCountBadges() {
  return (
    <div className="w-full max-w-sm">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            Tickets
            <Badge className="ms-1.5 h-4 px-1 text-[10px]">24</Badge>
          </MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarGroup>
              <MenubarItem>
                <InboxIcon /> Unassigned
                <Badge variant="secondary" className="ms-auto">12</Badge>
              </MenubarItem>
              <MenubarItem>
                <UserIcon /> Assigned to me
                <Badge variant="secondary" className="ms-auto">7</Badge>
              </MenubarItem>
              <MenubarItem>
                <ClockIcon /> Awaiting reply
                <Badge variant="secondary" className="ms-auto">5</Badge>
              </MenubarItem>
              <MenubarItem>
                <CircleAlertIcon /> SLA breached
                <Badge variant="destructive" className="ms-auto">2</Badge>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Automation</MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarGroup>
              <MenubarItem>
                <WorkflowIcon /> Triggers
              </MenubarItem>
              <MenubarItem>
                <BotIcon /> Auto-replies
                <Badge variant="outline" className="ms-auto">New</Badge>
              </MenubarItem>
              <MenubarItem>
                <TimerIcon /> SLA policies
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}`,
  },
  {
    name: "OpenRecentMenubar",
    description: "File menu with an Open Recent submenu listing recent documents and a clear action that empties it.",
    code: `
const initialRecent = ["Q3 board deck.key", "Hiring plan.docx", "Pricing model.xlsx", "Launch checklist.md"]

export default function OpenRecentMenubar() {
  const [recent, setRecent] = React.useState(initialRecent)

  return (
    <div className="w-full max-w-xs">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent className="w-48">
            <MenubarGroup>
              <MenubarItem>
                New <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Open... <MenubarShortcut>⌘O</MenubarShortcut>
              </MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>Open recent</MenubarSubTrigger>
                <MenubarSubContent className="w-52">
                  {recent.length > 0 ? (
                    <MenubarGroup>
                      {recent.map((file) => (
                        <MenubarItem key={file}>
                          <FileTextIcon /> {file}
                        </MenubarItem>
                      ))}
                    </MenubarGroup>
                  ) : (
                    <MenubarGroup>
                      <MenubarItem disabled>No recent files</MenubarItem>
                    </MenubarGroup>
                  )}
                  <MenubarSeparator />
                  <MenubarGroup>
                    <MenubarItem disabled={recent.length === 0} onClick={() => setRecent([])}>
                      Clear menu
                    </MenubarItem>
                    <MenubarItem disabled={recent.length > 0} onClick={() => setRecent(initialRecent)}>
                      Restore list
                    </MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                Close window <MenubarShortcut>⇧⌘W</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}`,
  },
  {
    name: "ZoomLevelMenubar",
    description: "View menu with zoom in, zoom out and reset items that update a live zoom readout in the menubar.",
    code: `
export default function ZoomLevelMenubar() {
  const [zoom, setZoom] = React.useState(100)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent className="w-48">
            <MenubarGroup>
              <MenubarItem closeOnClick={false} disabled={zoom >= 200} onClick={() => setZoom((z) => Math.min(200, z + 25))}>
                <ZoomInIcon /> Zoom in <MenubarShortcut>⌘+</MenubarShortcut>
              </MenubarItem>
              <MenubarItem closeOnClick={false} disabled={zoom <= 25} onClick={() => setZoom((z) => Math.max(25, z - 25))}>
                <ZoomOutIcon /> Zoom out <MenubarShortcut>⌘-</MenubarShortcut>
              </MenubarItem>
              <MenubarItem onClick={() => setZoom(100)}>
                <ScanIcon /> Actual size <MenubarShortcut>⌘0</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Layout</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Fit to width</MenubarItem>
              <MenubarItem>Fit page</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <span className="ms-auto pe-1 font-mono text-[11px] text-muted-foreground">{zoom}%</span>
      </Menubar>
      <div className="flex h-32 items-center justify-center overflow-hidden border bg-muted/40">
        <div className="size-12 bg-gradient-to-br from-indigo-500 to-cyan-400" style={{ transform: "scale(" + zoom / 100 + ")" }} />
      </div>
    </div>
  )
}`,
  },
  {
    name: "UndoHistoryMenubar",
    description: "Edit menu wired to an undo stack, disabling undo and redo when there is nothing to step through.",
    code: `
const steps = ["Created artboard", "Added header", "Changed fill to indigo", "Grouped layers"]

export default function UndoHistoryMenubar() {
  const [position, setPosition] = React.useState(steps.length)

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarGroup>
              <MenubarItem disabled={position === 0} onClick={() => setPosition((p) => p - 1)}>
                <Undo2Icon />
                <span className="truncate">Undo {position > 0 ? steps[position - 1] : ""}</span>
                <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled={position === steps.length} onClick={() => setPosition((p) => p + 1)}>
                <Redo2Icon />
                <span className="truncate">Redo {position < steps.length ? steps[position] : ""}</span>
                <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <ol className="border text-xs">
        {steps.map((step, i) => (
          <li key={step} className={cn("flex items-center gap-2 px-3 py-1.5", i >= position && "text-muted-foreground line-through")}>
            <span className="w-4 text-muted-foreground tabular-nums">{i + 1}</span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  )
}`,
  },
  {
    name: "PresentationMenubar",
    description: "Slides app menubar with Slide and Arrange menus and a Present item that toggles presenting mode.",
    code: `
export default function PresentationMenubar() {
  const [presenting, setPresenting] = React.useState(false)

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Slide</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <PlusIcon /> New slide <MenubarShortcut>⌘M</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <CopyIcon /> Duplicate slide
              </MenubarItem>
              <MenubarItem>
                <EyeOffIcon /> Skip slide
              </MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>
                  <LayoutTemplateIcon /> Apply layout
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>Title only</MenubarItem>
                    <MenubarItem>Title and body</MenubarItem>
                    <MenubarItem>Two columns</MenubarItem>
                    <MenubarItem>Section header</MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Arrange</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <BringToFrontIcon /> Bring to front
              </MenubarItem>
              <MenubarItem>
                <SendToBackIcon /> Send to back
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Present</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem onClick={() => setPresenting((p) => !p)}>
                {presenting ? <SquareIcon /> : <PresentationIcon />}
                {presenting ? "Stop presenting" : "From beginning"}
                <MenubarShortcut>⌘↵</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled={presenting}>Presenter view</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div
        className={cn(
          "flex aspect-video items-center justify-center border text-sm font-medium",
          presenting ? "bg-foreground text-background" : "bg-muted/40"
        )}
      >
        {presenting ? "Presenting · Slide 1 of 14" : "Q4 Product Review"}
      </div>
    </div>
  )
}`,
  },
  {
    name: "TerminalAppMenubar",
    description: "Terminal emulator menubar with a profile radio group that restyles a dark terminal preview.",
    code: `
const profiles: Record<string, string> = {
  midnight: "bg-zinc-950 text-zinc-100",
  forest: "bg-emerald-950 text-emerald-100",
  dusk: "bg-indigo-950 text-indigo-100",
}

export default function TerminalAppMenubar() {
  const [profile, setProfile] = React.useState("midnight")

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Shell</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                New tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Split pane <MenubarShortcut>⌘D</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Export text as... <MenubarShortcut>⌘S</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Profile</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={profile} onValueChange={setProfile}>
              <MenubarRadioItem value="midnight">Midnight</MenubarRadioItem>
              <MenubarRadioItem value="forest">Forest</MenubarRadioItem>
              <MenubarRadioItem value="dusk">Dusk</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Window</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Select next tab</MenubarItem>
              <MenubarItem>Select previous tab</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className={cn("p-3 font-mono text-[11px] leading-relaxed", profiles[profile])}>
        <p>~/projects/harbor $ pnpm test</p>
        <p className="opacity-70">✓ 128 tests passed in 4.2s</p>
        <p>~/projects/harbor $ _</p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "IssueTrackerMenubar",
    description: "Issue tracker menubar with priority radio and assignee submenus showing avatar initials.",
    code: `
const people = [
  { id: "mc", name: "Maya Chen" },
  { id: "or", name: "Omar Reyes" },
  { id: "lb", name: "Lena Brandt" },
]

export default function IssueTrackerMenubar() {
  const [priority, setPriority] = React.useState("high")
  const [assignee, setAssignee] = React.useState("or")
  const person = people.find((p) => p.id === assignee)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Issue</MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarSub>
                <MenubarSubTrigger>
                  <SignalIcon /> Priority
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarRadioGroup value={priority} onValueChange={setPriority}>
                    <MenubarRadioItem value="urgent">Urgent</MenubarRadioItem>
                    <MenubarRadioItem value="high">High</MenubarRadioItem>
                    <MenubarRadioItem value="medium">Medium</MenubarRadioItem>
                    <MenubarRadioItem value="low">Low</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>
                  <UserPlusIcon /> Assignee
                </MenubarSubTrigger>
                <MenubarSubContent className="w-44">
                  <MenubarRadioGroup value={assignee} onValueChange={setAssignee}>
                    {people.map((p) => (
                      <MenubarRadioItem key={p.id} value={p.id}>
                        <Avatar className="size-5">
                          <AvatarFallback className="text-[9px]">{p.id.toUpperCase()}</AvatarFallback>
                        </Avatar>
                        {p.name}
                      </MenubarRadioItem>
                    ))}
                  </MenubarRadioGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                <LinkIcon /> Copy issue link <MenubarShortcut>⌘L</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex items-center gap-2 border p-3 text-xs">
        <span className="font-mono text-muted-foreground">ENG-412</span>
        <span className="flex-1 truncate">Checkout fails on saved cards</span>
        <Badge variant={priority === "urgent" ? "destructive" : "secondary"} className="capitalize">
          {priority}
        </Badge>
        <Avatar className="size-5">
          <AvatarFallback className="text-[9px]">{person?.id.toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}`,
  },
  {
    name: "StoreAdminMenubar",
    description: "E-commerce admin menubar covering orders, products and customers with status submenus.",
    code: `
export default function StoreAdminMenubar() {
  return (
    <div className="w-full max-w-md">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <ShoppingBagIcon className="me-1.5 size-3.5" /> Orders
          </MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarItem>
                <PlusIcon /> Create draft order
              </MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>
                  <ListFilterIcon /> View by status
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>Unfulfilled</MenubarItem>
                    <MenubarItem>Awaiting payment</MenubarItem>
                    <MenubarItem>Refund requested</MenubarItem>
                    <MenubarItem>Completed</MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>
                <TruckIcon /> Print shipping labels
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <PackageIcon className="me-1.5 size-3.5" /> Products
          </MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarItem>
                <PlusIcon /> Add product
              </MenubarItem>
              <MenubarItem>
                <BoxesIcon /> Inventory
              </MenubarItem>
              <MenubarItem>
                <TicketPercentIcon /> Discounts
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <UsersIcon className="me-1.5 size-3.5" /> Customers
          </MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarItem>
                <UserPlusIcon /> Add customer
              </MenubarItem>
              <MenubarItem>
                <TagsIcon /> Segments
              </MenubarItem>
              <MenubarItem>
                <DownloadIcon /> Export list
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}`,
  },
  {
    name: "NotesFormatMenubar",
    description: "Notes app menubar with a block style radio, font size submenu and checklist toggle applied to a note.",
    code: `
export default function NotesFormatMenubar() {
  const [block, setBlock] = React.useState("body")
  const [size, setSize] = React.useState("md")
  const [checklist, setChecklist] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Format</MenubarTrigger>
          <MenubarContent className="w-48">
            <MenubarRadioGroup value={block} onValueChange={setBlock}>
              <MenubarRadioItem value="title">
                Title <MenubarShortcut>⇧⌘T</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem value="heading">
                Heading <MenubarShortcut>⇧⌘H</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem value="body">
                Body <MenubarShortcut>⇧⌘B</MenubarShortcut>
              </MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarCheckboxItem checked={checklist} onCheckedChange={setChecklist}>
                Checklist <MenubarShortcut>⇧⌘L</MenubarShortcut>
              </MenubarCheckboxItem>
              <MenubarSub>
                <MenubarSubTrigger inset>Font size</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarRadioGroup value={size} onValueChange={setSize}>
                    <MenubarRadioItem value="sm">Small</MenubarRadioItem>
                    <MenubarRadioItem value="md">Medium</MenubarRadioItem>
                    <MenubarRadioItem value="lg">Large</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="border p-3">
        <p
          className={cn(
            "flex items-center gap-2",
            block === "title" && "text-lg font-semibold",
            block === "heading" && "font-semibold",
            size === "sm" && "text-xs",
            size === "lg" && "text-base"
          )}
        >
          {checklist && <SquareIcon className="size-3.5 shrink-0 text-muted-foreground" />}
          Pick up film from the lab on Friday
        </p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "DesignArrangeMenubar",
    description: "Design tool Object menu with alignment submenu icons and lock/hide checkbox items for the selected layer.",
    code: `
export default function DesignArrangeMenubar() {
  const [locked, setLocked] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Object</MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarItem>
                <GroupIcon /> Group selection <MenubarShortcut>⌘G</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <FrameIcon /> Frame selection <MenubarShortcut>⌥⌘G</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarSub>
                <MenubarSubTrigger>
                  <AlignCenterHorizontalIcon /> Align
                </MenubarSubTrigger>
                <MenubarSubContent className="w-44">
                  <MenubarGroup>
                    <MenubarItem>
                      <AlignStartVerticalIcon /> Left <MenubarShortcut>⌥A</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      <AlignCenterVerticalIcon /> Center <MenubarShortcut>⌥H</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      <AlignEndVerticalIcon /> Right <MenubarShortcut>⌥D</MenubarShortcut>
                    </MenubarItem>
                  </MenubarGroup>
                  <MenubarSeparator />
                  <MenubarGroup>
                    <MenubarItem>
                      <AlignStartHorizontalIcon /> Top <MenubarShortcut>⌥W</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      <AlignEndHorizontalIcon /> Bottom <MenubarShortcut>⌥S</MenubarShortcut>
                    </MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarCheckboxItem checked={locked} onCheckedChange={setLocked}>
                Lock layer <MenubarShortcut>⇧⌘L</MenubarShortcut>
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked={hidden} onCheckedChange={setHidden}>
                Hide layer <MenubarShortcut>⇧⌘H</MenubarShortcut>
              </MenubarCheckboxItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex items-center gap-2 border px-3 py-2 text-xs">
        <SquareIcon className="size-3.5 text-muted-foreground" />
        <span className="flex-1">Hero card</span>
        {locked && <LockIcon className="size-3.5 text-muted-foreground" />}
        {hidden && <EyeOffIcon className="size-3.5 text-muted-foreground" />}
      </div>
    </div>
  )
}`,
  },
  {
    name: "BookmarkFoldersMenubar",
    description: "Bookmarks menubar with nested folder submenus two levels deep.",
    code: `
export default function BookmarkFoldersMenubar() {
  return (
    <div className="w-full max-w-xs">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Bookmarks</MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarItem>
                <BookmarkPlusIcon /> Bookmark this page <MenubarShortcut>⌘D</MenubarShortcut>
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
}`,
  },
  {
    name: "LanguageRegionMenubar",
    description: "Locale menubar with language and date format radios and a sample date formatted by the selection.",
    code: `
const languages = [
  { value: "en-US", label: "English (US)" },
  { value: "de-DE", label: "Deutsch" },
  { value: "fr-FR", label: "Français" },
  { value: "ja-JP", label: "日本語" },
]

export default function LanguageRegionMenubar() {
  const [locale, setLocale] = React.useState("en-US")
  const [style, setStyle] = React.useState<"short" | "long">("long")

  const sample = new Intl.DateTimeFormat(locale, { dateStyle: style }).format(new Date(2026, 2, 14))

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <LanguagesIcon className="me-1.5 size-3.5" /> Language
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={locale} onValueChange={setLocale}>
              {languages.map((lang) => (
                <MenubarRadioItem key={lang.value} value={lang.value}>
                  {lang.label}
                </MenubarRadioItem>
              ))}
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <CalendarIcon className="me-1.5 size-3.5" /> Dates
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={style} onValueChange={setStyle}>
              <MenubarRadioItem value="short">Short</MenubarRadioItem>
              <MenubarRadioItem value="long">Long</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <p className="border px-3 py-2 text-xs">
        <span className="text-muted-foreground">Preview: </span>
        {sample}
      </p>
    </div>
  )
}`,
  },
  {
    name: "NotificationChannelsMenubar",
    description: "Notifications menubar with closeOnClick disabled so several channel checkboxes can be toggled in one go.",
    code: `
const channels = [
  { id: "email", label: "Email", icon: MailIcon },
  { id: "push", label: "Push", icon: BellIcon },
  { id: "sms", label: "SMS", icon: MessageSquareIcon },
  { id: "slack", label: "Team chat", icon: HashIcon },
]

export default function NotificationChannelsMenubar() {
  const [enabled, setEnabled] = React.useState<Record<string, boolean>>({ email: true, push: true, sms: false, slack: false })
  const active = channels.filter((c) => enabled[c.id]).map((c) => c.label)

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Notifications</MenubarTrigger>
          <MenubarContent className="w-48">
            <MenubarGroup>
              <MenubarLabel inset>Deliver via</MenubarLabel>
              {channels.map((c) => (
                <MenubarCheckboxItem
                  key={c.id}
                  closeOnClick={false}
                  checked={enabled[c.id]}
                  onCheckedChange={(checked) => setEnabled((s) => ({ ...s, [c.id]: checked }))}
                >
                  <c.icon /> {c.label}
                </MenubarCheckboxItem>
              ))}
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Schedule</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Pause for 1 hour</MenubarItem>
              <MenubarItem>Quiet hours...</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <p className="text-xs text-muted-foreground">
        {active.length ? "Sending to " + active.join(", ") : "All channels are off"}
      </p>
    </div>
  )
}`,
  },
  {
    name: "ExportProgressMenubar",
    description: "Export menu that shows a spinner in the trigger while a simulated export runs, then a completed state.",
    code: `
export default function ExportProgressMenubar() {
  const [status, setStatus] = React.useState<"idle" | "running" | "done">("idle")

  const run = (format: string) => {
    setStatus("running")
    window.setTimeout(() => setStatus("done"), 1600)
    return format
  }

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Report</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Refresh data</MenubarItem>
              <MenubarItem>Schedule email</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu disabled={status === "running"}>
          <MenubarTrigger className="gap-1.5">
            {status === "running" ? <Spinner className="size-3" /> : <DownloadIcon className="size-3.5" />}
            {status === "running" ? "Exporting..." : "Export"}
          </MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem onClick={() => run("pdf")}>
                <FileTextIcon /> PDF report
              </MenubarItem>
              <MenubarItem onClick={() => run("csv")}>
                <FileSpreadsheetIcon /> CSV data
              </MenubarItem>
              <MenubarItem onClick={() => run("png")}>
                <FileImageIcon /> Chart images
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      {status === "done" && (
        <p className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
          <CircleCheckIcon className="size-3.5" /> Export ready to download
        </p>
      )}
    </div>
  )
}`,
  },
  {
    name: "MenubarSizeScale",
    description: "The same menubar in small, default and large sizes using className overrides.",
    code: `
const sizes = [
  { label: "Small", bar: "h-7", trigger: "text-[11px] px-1" },
  { label: "Default", bar: "", trigger: "" },
  { label: "Large", bar: "h-10 p-1.5", trigger: "text-sm px-2.5 py-1" },
]

export default function MenubarSizeScale() {
  return (
    <div className="flex flex-col items-start gap-3">
      {sizes.map((size) => (
        <div key={size.label} className="flex items-center gap-3">
          <span className="w-14 text-xs text-muted-foreground">{size.label}</span>
          <Menubar className={size.bar}>
            {["File", "Edit", "View"].map((menu) => (
              <MenubarMenu key={menu}>
                <MenubarTrigger className={size.trigger}>{menu}</MenubarTrigger>
                <MenubarContent>
                  <MenubarGroup>
                    <MenubarItem>{menu} option one</MenubarItem>
                    <MenubarItem>{menu} option two</MenubarItem>
                  </MenubarGroup>
                </MenubarContent>
              </MenubarMenu>
            ))}
          </Menubar>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "AppHeaderMenubar",
    description: "Full-width app header with a logo, menubar and trailing share and save buttons.",
    code: `
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
}`,
  },
  {
    name: "GitBranchMenubar",
    description: "Source control menubar with a branch switcher radio, pull and push actions and a current-branch indicator.",
    code: `
const branches = ["main", "feat/billing-portal", "fix/rate-limit", "chore/deps"]

export default function GitBranchMenubar() {
  const [branch, setBranch] = React.useState("feat/billing-portal")

  return (
    <Menubar className="w-full max-w-md">
      <MenubarMenu>
        <MenubarTrigger>Repository</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarGroup>
            <MenubarItem>
              <ArrowDownToLineIcon /> Pull <MenubarShortcut>⇧⌘P</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <ArrowUpFromLineIcon /> Push <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <RefreshCwIcon /> Fetch origin
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>
              <ArchiveIcon /> Stash changes
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Branch</MenubarTrigger>
        <MenubarContent className="w-56">
          <MenubarGroup>
            <MenubarLabel inset>Switch to</MenubarLabel>
            <MenubarRadioGroup value={branch} onValueChange={setBranch}>
              {branches.map((b) => (
                <MenubarRadioItem key={b} value={b} className="font-mono">
                  {b}
                </MenubarRadioItem>
              ))}
            </MenubarRadioGroup>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem inset>New branch... <MenubarShortcut>⇧⌘N</MenubarShortcut></MenubarItem>
            <MenubarItem inset disabled={branch === "main"}>Merge into main</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <span className="ms-auto flex min-w-0 items-center gap-1 pe-1 font-mono text-[11px] text-muted-foreground">
        <GitBranchIcon className="size-3 shrink-0" />
        <span className="truncate">{branch}</span>
      </span>
    </Menubar>
  )
}`,
  },
  {
    name: "DebuggerMenubar",
    description: "Debugger menubar using Kbd keys for shortcuts, breakpoint toggles and a disabled step menu while stopped.",
    code: `
export default function DebuggerMenubar() {
  const [running, setRunning] = React.useState(false)
  const [pauseOnExceptions, setPauseOnExceptions] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Debug</MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarGroup>
              <MenubarItem onClick={() => setRunning((r) => !r)}>
                {running ? <SquareIcon /> : <PlayIcon />}
                {running ? "Stop" : "Start"}
                <Kbd className="ms-auto">{running ? "⇧F5" : "F5"}</Kbd>
              </MenubarItem>
              <MenubarItem disabled={!running}>
                <RotateCcwIcon /> Restart
                <KbdGroup className="ms-auto">
                  <Kbd>⇧</Kbd>
                  <Kbd>⌘</Kbd>
                  <Kbd>F5</Kbd>
                </KbdGroup>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarCheckboxItem checked={pauseOnExceptions} onCheckedChange={setPauseOnExceptions}>
                Pause on exceptions
              </MenubarCheckboxItem>
              <MenubarItem inset>Remove all breakpoints</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu disabled={!running}>
          <MenubarTrigger className="data-disabled:opacity-50">Step</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                Step over <Kbd className="ms-auto">F10</Kbd>
              </MenubarItem>
              <MenubarItem>
                Step into <Kbd className="ms-auto">F11</Kbd>
              </MenubarItem>
              <MenubarItem>
                Step out <Kbd className="ms-auto">⇧F11</Kbd>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <span className={cn("size-2 rounded-full", running ? "bg-emerald-500" : "bg-muted-foreground/40")} />
        {running ? "Debugging api-server" : "Not running"}
      </p>
    </div>
  )
}`,
  },
  {
    name: "FormBuilderInsertMenubar",
    description: "Form builder Insert menu whose field-type items append new fields to the form preview.",
    code: `
const fieldTypes = [
  { type: "Short text", icon: TypeIcon },
  { type: "Email", icon: AtSignIcon },
  { type: "Date", icon: CalendarIcon },
  { type: "Checkbox", icon: SquareCheckIcon },
  { type: "File upload", icon: PaperclipIcon },
]

export default function FormBuilderInsertMenubar() {
  const [fields, setFields] = React.useState(["Short text", "Email"])

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Insert</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarLabel>Field type</MenubarLabel>
              {fieldTypes.map((f) => (
                <MenubarItem key={f.type} onClick={() => setFields((prev) => [...prev, f.type])}>
                  <f.icon /> {f.type}
                </MenubarItem>
              ))}
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Form</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Preview</MenubarItem>
              <MenubarItem variant="destructive" disabled={fields.length === 0} onClick={() => setFields([])}>
                Remove all fields
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex flex-col gap-1.5 border p-2">
        {fields.length === 0 && <p className="py-4 text-center text-xs text-muted-foreground">Use Insert to add a field.</p>}
        {fields.map((field, i) => (
          <div key={i} className="flex items-center gap-2 border border-dashed px-2 py-1.5 text-xs">
            <GripVerticalIcon className="size-3.5 text-muted-foreground" />
            {field}
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "InvoiceActionsMenubar",
    description: "Billing invoice menubar whose actions update the invoice status badge, including a destructive void.",
    code: `
export default function InvoiceActionsMenubar() {
  const [status, setStatus] = React.useState<"Draft" | "Sent" | "Paid" | "Void">("Draft")

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b p-3">
        <div>
          <p className="text-sm font-medium">INV-2026-0187</p>
          <p className="text-xs text-muted-foreground">Fernwood Bakery · $2,340.00</p>
        </div>
        <Badge variant={status === "Void" ? "destructive" : status === "Paid" ? "default" : "secondary"}>{status}</Badge>
      </div>
      <Menubar className="border-0">
        <MenubarMenu>
          <MenubarTrigger>Invoice</MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarItem disabled={status !== "Draft"} onClick={() => setStatus("Sent")}>
                <SendIcon /> Send to customer
              </MenubarItem>
              <MenubarItem disabled={status !== "Sent"} onClick={() => setStatus("Paid")}>
                <BadgeCheckIcon /> Mark as paid
              </MenubarItem>
              <MenubarItem>
                <CopyIcon /> Duplicate
              </MenubarItem>
              <MenubarItem>
                <DownloadIcon /> Download PDF
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem variant="destructive" disabled={status === "Void" || status === "Paid"} onClick={() => setStatus("Void")}>
                <BanIcon /> Void invoice
              </MenubarItem>
              <MenubarItem disabled={status === "Draft"} onClick={() => setStatus("Draft")}>
                <RotateCcwIcon /> Reset demo
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Payments</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Record payment</MenubarItem>
              <MenubarItem>Set up reminders</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}`,
  },
  {
    name: "WindowTilingMenubar",
    description: "Window menu with a tiling layout radio that rearranges a grid of panes.",
    code: `
const layouts: Record<string, string> = {
  single: "grid-cols-1",
  split: "grid-cols-2",
  quad: "grid-cols-2 grid-rows-2",
}

export default function WindowTilingMenubar() {
  const [layout, setLayout] = React.useState("split")
  const panes = layout === "single" ? 1 : layout === "split" ? 2 : 4

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Window</MenubarTrigger>
          <MenubarContent className="w-48">
            <MenubarGroup>
              <MenubarLabel inset>Tiling</MenubarLabel>
              <MenubarRadioGroup value={layout} onValueChange={setLayout}>
                <MenubarRadioItem value="single">
                  <SquareIcon /> Single
                </MenubarRadioItem>
                <MenubarRadioItem value="split">
                  <Columns2Icon /> Split
                </MenubarRadioItem>
                <MenubarRadioItem value="quad">
                  <Grid2x2Icon /> Quad
                </MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className={cn("grid h-36 gap-1 border p-1", layouts[layout])}>
        {Array.from({ length: panes }, (_, i) => (
          <div key={i} className="flex items-center justify-center bg-muted text-[11px] text-muted-foreground">
            Pane {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "AccessibilityOptionsMenubar",
    description: "Accessibility menubar with reduce motion, high contrast and text size options applied to sample text.",
    code: `
export default function AccessibilityOptionsMenubar() {
  const [contrast, setContrast] = React.useState(false)
  const [motion, setMotion] = React.useState(false)
  const [textSize, setTextSize] = React.useState("100")

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <AccessibilityIcon className="me-1.5 size-3.5" /> Accessibility
          </MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarCheckboxItem checked={contrast} onCheckedChange={setContrast}>
                High contrast
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked={motion} onCheckedChange={setMotion}>
                Reduce motion
              </MenubarCheckboxItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarLabel inset>Text size</MenubarLabel>
              <MenubarRadioGroup value={textSize} onValueChange={setTextSize}>
                <MenubarRadioItem value="100">100%</MenubarRadioItem>
                <MenubarRadioItem value="125">125%</MenubarRadioItem>
                <MenubarRadioItem value="150">150%</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div
        className={cn(
          "border p-3",
          contrast && "border-foreground bg-foreground text-background",
          textSize === "100" && "text-sm",
          textSize === "125" && "text-base",
          textSize === "150" && "text-lg"
        )}
      >
        <p className={cn("font-medium", !motion && "animate-pulse")}>Your order has shipped</p>
        <p className={cn(contrast ? "" : "text-muted-foreground", "text-[0.85em]")}>Arrives Thursday between 9am and 1pm.</p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "MapLayersMenubar",
    description: "Map app menubar with a base map radio and overlay layer checkboxes that restyle a map preview.",
    code: `
export default function MapLayersMenubar() {
  const [base, setBase] = React.useState("streets")
  const [traffic, setTraffic] = React.useState(true)
  const [transit, setTransit] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <LayersIcon className="me-1.5 size-3.5" /> Layers
          </MenubarTrigger>
          <MenubarContent className="w-48">
            <MenubarGroup>
              <MenubarLabel inset>Base map</MenubarLabel>
              <MenubarRadioGroup value={base} onValueChange={setBase}>
                <MenubarRadioItem value="streets">Streets</MenubarRadioItem>
                <MenubarRadioItem value="satellite">Satellite</MenubarRadioItem>
                <MenubarRadioItem value="terrain">Terrain</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarLabel inset>Overlays</MenubarLabel>
              <MenubarCheckboxItem checked={traffic} onCheckedChange={setTraffic}>
                Traffic
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked={transit} onCheckedChange={setTransit}>
                Transit lines
              </MenubarCheckboxItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <NavigationIcon className="me-1.5 size-3.5" /> Directions
          </MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>From my location</MenubarItem>
              <MenubarItem>Saved places</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div
        className={cn(
          "relative h-36 overflow-hidden border",
          base === "streets" && "bg-slate-100 dark:bg-slate-800",
          base === "satellite" && "bg-gradient-to-br from-emerald-900 to-stone-700",
          base === "terrain" && "bg-gradient-to-br from-lime-100 to-amber-200 dark:from-lime-900 dark:to-amber-900"
        )}
      >
        <div className="absolute inset-x-0 top-1/2 h-1.5 bg-white/80 dark:bg-white/30" />
        <div className="absolute inset-y-0 start-1/3 w-1.5 bg-white/80 dark:bg-white/30" />
        {traffic && <div className="absolute inset-x-6 top-1/2 h-1.5 bg-gradient-to-r from-emerald-500 via-amber-400 to-red-500" />}
        {transit && <div className="absolute inset-y-4 start-2/3 w-1 bg-violet-500" />}
        <MapPinIcon className="absolute start-1/3 top-1/2 size-5 -translate-x-1/2 -translate-y-full text-red-500" />
      </div>
    </div>
  )
}`,
  },
  {
    name: "PodcastRecordingMenubar",
    description: "Recording studio menubar with input device radio, monitoring toggle and a record action with live indicator.",
    code: `
export default function PodcastRecordingMenubar() {
  const [recording, setRecording] = React.useState(false)
  const [device, setDevice] = React.useState("usb")
  const [monitor, setMonitor] = React.useState(true)

  return (
    <Menubar className="w-full max-w-sm">
      <MenubarMenu>
        <MenubarTrigger>Record</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarGroup>
            <MenubarItem onClick={() => setRecording((r) => !r)}>
              {recording ? <SquareIcon /> : <CircleIcon className="fill-red-500 text-red-500" />}
              {recording ? "Stop recording" : "Start recording"}
              <MenubarShortcut>R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled={!recording}>
              <PauseIcon /> Pause
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarCheckboxItem checked={monitor} onCheckedChange={setMonitor}>
              Monitor input
            </MenubarCheckboxItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Input</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarRadioGroup value={device} onValueChange={setDevice}>
            <MenubarRadioItem value="usb">
              <MicIcon /> USB condenser mic
            </MenubarRadioItem>
            <MenubarRadioItem value="built-in">
              <LaptopIcon /> Built-in microphone
            </MenubarRadioItem>
            <MenubarRadioItem value="headset">
              <HeadphonesIcon /> Wireless headset
            </MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <span className="ms-auto flex items-center gap-1.5 pe-1 text-[11px] text-muted-foreground">
        <span className={cn("size-2 rounded-full", recording ? "animate-pulse bg-red-500" : "bg-muted-foreground/40")} />
        {recording ? "REC 00:12:48" : "Ready"}
      </span>
    </Menubar>
  )
}`,
  },
  {
    name: "AnalyticsRangeMenubar",
    description: "Analytics dashboard menubar with a date range radio and compare toggle that update a KPI tile.",
    code: `
const data: Record<string, { visitors: string; change: number }> = {
  "7d": { visitors: "12,480", change: 4.2 },
  "30d": { visitors: "51,930", change: -1.8 },
  "90d": { visitors: "148,212", change: 12.6 },
}

export default function AnalyticsRangeMenubar() {
  const [range, setRange] = React.useState("30d")
  const [compare, setCompare] = React.useState(true)
  const current = data[range]!

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <CalendarRangeIcon className="me-1.5 size-3.5" /> Range
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={range} onValueChange={setRange}>
              <MenubarRadioItem value="7d">Last 7 days</MenubarRadioItem>
              <MenubarRadioItem value="30d">Last 30 days</MenubarRadioItem>
              <MenubarRadioItem value="90d">Last 90 days</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarCheckboxItem checked={compare} onCheckedChange={setCompare}>
                Compare to previous period
              </MenubarCheckboxItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Export</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Download CSV</MenubarItem>
              <MenubarItem>Email report</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="border p-3">
        <p className="text-xs text-muted-foreground">Unique visitors</p>
        <p className="text-2xl font-semibold tabular-nums">{current.visitors}</p>
        {compare && (
          <p className={cn("flex items-center gap-1 text-xs", current.change >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400")}>
            {current.change >= 0 ? <TrendingUpIcon className="size-3.5" /> : <TrendingDownIcon className="size-3.5" />}
            {Math.abs(current.change)}% vs previous period
          </p>
        )}
      </div>
    </div>
  )
}`,
  },
  {
    name: "ControlledOpenMenubar",
    description: "Menubar whose Help menu open state is controlled from an external button.",
    code: `
export default function ControlledOpenMenubar() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu open={open} onOpenChange={setOpen}>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <BookOpenIcon /> Documentation
              </MenubarItem>
              <MenubarItem>
                <KeyboardIcon /> Keyboard shortcuts <MenubarShortcut>⌘/</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <LifeBuoyIcon /> Contact support
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
          <CircleHelpIcon data-icon="inline-start" />
          Need help?
        </Button>
        <span className="text-xs text-muted-foreground">Help menu is {open ? "open" : "closed"}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "TableBulkActionsMenubar",
    description: "Admin table toolbar menubar whose bulk actions are enabled only when rows are selected.",
    code: `
const users = [
  { id: 1, name: "Hana Ito", role: "Admin" },
  { id: 2, name: "Diego Mora", role: "Editor" },
  { id: 3, name: "Ines Duarte", role: "Viewer" },
]

export default function TableBulkActionsMenubar() {
  const [selected, setSelected] = React.useState<number[]>([2])

  const toggle = (id: number) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center gap-2 border-b p-1.5">
        <Menubar className="border-0 p-0">
          <MenubarMenu disabled={selected.length === 0}>
            <MenubarTrigger className="data-disabled:opacity-50">Bulk actions</MenubarTrigger>
            <MenubarContent>
              <MenubarGroup>
                <MenubarSub>
                  <MenubarSubTrigger>
                    <ShieldIcon /> Change role
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarGroup>
                      <MenubarItem>Admin</MenubarItem>
                      <MenubarItem>Editor</MenubarItem>
                      <MenubarItem>Viewer</MenubarItem>
                    </MenubarGroup>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarItem>
                  <MailIcon /> Resend invite
                </MenubarItem>
              </MenubarGroup>
              <MenubarSeparator />
              <MenubarGroup>
                <MenubarItem variant="destructive" onClick={() => setSelected([])}>
                  <UserMinusIcon /> Remove {selected.length} user{selected.length === 1 ? "" : "s"}
                </MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <span className="ms-auto pe-1 text-xs text-muted-foreground">{selected.length} selected</span>
      </div>
      <ul className="divide-y text-xs">
        {users.map((user) => (
          <li key={user.id} className="flex items-center gap-2 px-3 py-2">
            <Checkbox checked={selected.includes(user.id)} onCheckedChange={() => toggle(user.id)} aria-label={"Select " + user.name} />
            <span className="flex-1">{user.name}</span>
            <span className="text-muted-foreground">{user.role}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}`,
  },
  {
    name: "CheckoutStepsMenubar",
    description: "Checkout flow menubar with a Cart menu summarizing items and a Shipping speed radio that updates the total.",
    code: `
const speeds: Record<string, { label: string; price: number }> = {
  standard: { label: "Standard (5-7 days)", price: 0 },
  express: { label: "Express (2 days)", price: 12 },
  overnight: { label: "Overnight", price: 29 },
}

export default function CheckoutStepsMenubar() {
  const [speed, setSpeed] = React.useState("standard")
  const subtotal = 148

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <ShoppingCartIcon className="me-1.5 size-3.5" /> Cart (2)
          </MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarGroup>
              <MenubarItem>
                Linen throw blanket <span className="ms-auto tabular-nums text-muted-foreground">$96</span>
              </MenubarItem>
              <MenubarItem>
                Stoneware mug set <span className="ms-auto tabular-nums text-muted-foreground">$52</span>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>Edit cart</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <TruckIcon className="me-1.5 size-3.5" /> Shipping
          </MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarRadioGroup value={speed} onValueChange={setSpeed}>
              {Object.entries(speeds).map(([value, s]) => (
                <MenubarRadioItem key={value} value={value}>
                  {s.label}
                  <span className="ms-auto tabular-nums text-muted-foreground">{s.price ? "$" + s.price : "Free"}</span>
                </MenubarRadioItem>
              ))}
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex items-center justify-between border p-3 text-sm">
        <span className="text-muted-foreground">Total</span>
        <span className="font-semibold tabular-nums">{"$" + (subtotal + speeds[speed]!.price) + ".00"}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "OnboardingChecklistMenubar",
    description: "Onboarding menubar whose Getting started menu tracks completed setup steps with checkbox items and progress.",
    code: `
const steps = ["Verify email", "Invite teammates", "Connect calendar", "Create first project"]

export default function OnboardingChecklistMenubar() {
  const [done, setDone] = React.useState<string[]>(["Verify email"])

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="gap-1.5">
            <RocketIcon className="size-3.5" /> Getting started
            <span className="text-muted-foreground tabular-nums">
              {done.length}/{steps.length}
            </span>
          </MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarGroup>
              <MenubarLabel inset>Setup checklist</MenubarLabel>
              {steps.map((step) => (
                <MenubarCheckboxItem
                  key={step}
                  closeOnClick={false}
                  checked={done.includes(step)}
                  onCheckedChange={(checked) =>
                    setDone((prev) => (checked ? [...prev, step] : prev.filter((s) => s !== step)))
                  }
                  className={cn(done.includes(step) && "text-muted-foreground line-through")}
                >
                  {step}
                </MenubarCheckboxItem>
              ))}
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>Dismiss checklist</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Progress value={(done.length / steps.length) * 100} />
    </div>
  )
}`,
  },
]

export default examples
