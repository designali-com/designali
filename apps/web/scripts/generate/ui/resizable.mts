import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "MailClientLayout",
    description: "Three-pane mail client with folders, a message list, and a reading pane.",
    code: `
const folders = [
  { label: "Inbox", icon: InboxIcon, count: 12 },
  { label: "Starred", icon: StarIcon, count: 3 },
  { label: "Sent", icon: SendIcon, count: 0 },
  { label: "Archive", icon: ArchiveIcon, count: 0 },
  { label: "Trash", icon: Trash2Icon, count: 0 },
]

const messages = [
  { from: "Maya Chen", subject: "Q3 roadmap review", time: "9:41" },
  { from: "Leo Park", subject: "Invoice #2041 paid", time: "8:12" },
  { from: "Ines Duarte", subject: "Design crit notes", time: "Yesterday" },
  { from: "Tomas Reyes", subject: "Offsite logistics", time: "Mon" },
]

export default function MailClientLayout() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-80 w-full max-w-2xl border">
      <ResizablePanel defaultSize="22%" minSize="15%">
        <nav className="flex h-full flex-col gap-0.5 p-2">
          {folders.map((folder, i) => (
            <button
              key={folder.label}
              className={cn(
                "flex items-center gap-2 px-2 py-1.5 text-left text-xs hover:bg-muted",
                i === 0 && "bg-muted font-medium"
              )}
            >
              <folder.icon className="size-3.5 shrink-0" />
              <span className="flex-1 truncate">{folder.label}</span>
              {folder.count > 0 && <span className="text-muted-foreground">{folder.count}</span>}
            </button>
          ))}
        </nav>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="36%" minSize="25%">
        <div className="flex h-full flex-col divide-y">
          {messages.map((message, i) => (
            <div key={message.subject} className={cn("flex flex-col gap-0.5 p-3", i === 0 && "bg-muted/50")}>
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="truncate font-medium">{message.from}</span>
                <span className="shrink-0 text-muted-foreground">{message.time}</span>
              </div>
              <span className="truncate text-xs text-muted-foreground">{message.subject}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="42%" minSize="25%">
        <article className="flex h-full flex-col gap-3 p-4">
          <div>
            <h3 className="text-sm font-semibold">Q3 roadmap review</h3>
            <p className="text-xs text-muted-foreground">Maya Chen to you</p>
          </div>
          <p className="text-xs leading-relaxed">
            Hi team, I&apos;ve attached the draft roadmap for next quarter. Please leave comments on the
            priorities before Thursday so we can lock scope in the planning session.
          </p>
          <div className="mt-auto flex gap-2">
            <Button size="sm">
              <ReplyIcon data-icon="inline-start" />
              Reply
            </Button>
            <Button size="sm" variant="outline">
              <ForwardIcon data-icon="inline-start" />
              Forward
            </Button>
          </div>
        </article>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "CodeEditorWithTerminal",
    description: "IDE layout with a file tree beside a vertically split editor and terminal.",
    code: `
const files = ["app.tsx", "routes.ts", "server.ts", "utils.ts", "styles.css"]

const lines = [
  "import { createServer } from './server'",
  "",
  "const port = Number(process.env.PORT ?? 3000)",
  "const app = createServer()",
  "",
  "app.listen(port)",
]

export default function CodeEditorWithTerminal() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-80 w-full max-w-2xl border font-mono">
      <ResizablePanel defaultSize="25%" minSize="15%">
        <div className="flex h-full flex-col gap-0.5 p-2 text-xs">
          <span className="px-2 py-1 font-sans text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
            Explorer
          </span>
          {files.map((file, i) => (
            <div key={file} className={cn("flex items-center gap-2 px-2 py-1", i === 2 && "bg-muted")}>
              <FileCodeIcon className="size-3.5 shrink-0 text-muted-foreground" />
              <span className="truncate">{file}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="75%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="65%" minSize="30%">
            <div className="h-full overflow-hidden p-3 text-xs">
              {lines.map((line, i) => (
                <div key={i} className="flex gap-3">
                  <span className="w-4 shrink-0 text-right text-muted-foreground">{i + 1}</span>
                  <span className="truncate whitespace-pre">{line}</span>
                </div>
              ))}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="35%" minSize="15%">
            <div className="flex h-full flex-col gap-1 bg-muted/40 p-3 text-xs">
              <span className="text-muted-foreground">$ pnpm dev</span>
              <span>ready - started server on 0.0.0.0:3000</span>
              <span className="text-emerald-600 dark:text-emerald-400">compiled successfully in 412ms</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "CollapsibleSidebarToggle",
    description: "Collapsible sidebar panel controlled through the panel's imperative API.",
    code: `
type PanelHandle = {
  collapse: () => void
  expand: () => void
  getSize: () => { asPercentage: number; inPixels: number }
  isCollapsed: () => boolean
  resize: (size: number | string) => void
}

const links = [
  { label: "Overview", icon: LayoutDashboardIcon },
  { label: "Projects", icon: FolderIcon },
  { label: "Reports", icon: BarChart3Icon },
  { label: "Settings", icon: SettingsIcon },
]

export default function CollapsibleSidebarToggle() {
  const sidebarRef = React.useRef<PanelHandle | null>(null)
  const [collapsed, setCollapsed] = React.useState(false)

  const toggle = () => {
    const panel = sidebarRef.current
    if (!panel) return
    if (panel.isCollapsed()) panel.expand()
    else panel.collapse()
  }

  return (
    <ResizablePanelGroup orientation="horizontal" className="h-72 w-full max-w-lg border">
      <ResizablePanel
        panelRef={sidebarRef}
        defaultSize="30%"
        minSize="20%"
        maxSize="45%"
        collapsible
        onResize={(size) => setCollapsed(size.asPercentage === 0)}
      >
        <nav className="flex h-full flex-col gap-0.5 p-2">
          {links.map((link) => (
            <a key={link.label} href="#" className="flex items-center gap-2 px-2 py-1.5 text-xs hover:bg-muted">
              <link.icon className="size-3.5 shrink-0" />
              <span className="truncate">{link.label}</span>
            </a>
          ))}
        </nav>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="70%">
        <div className="flex h-full flex-col gap-3 p-4">
          <Button size="sm" variant="outline" className="self-start" onClick={toggle}>
            {collapsed ? <PanelLeftOpenIcon data-icon="inline-start" /> : <PanelLeftCloseIcon data-icon="inline-start" />}
            {collapsed ? "Show sidebar" : "Hide sidebar"}
          </Button>
          <p className="text-xs text-muted-foreground">
            Drag the handle past the minimum width or use the button to collapse the navigation.
          </p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "ChatWithContactDetails",
    description: "Messaging view with a resizable contact details panel on the right.",
    code: `
const thread = [
  { me: false, text: "Hey! Did the new build fix the export bug?" },
  { me: true, text: "Yes, CSV exports finish in under two seconds now." },
  { me: false, text: "Amazing. Can you ship it to staging today?" },
  { me: true, text: "Already there. Production goes out at 4pm." },
]

export default function ChatWithContactDetails() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-80 w-full max-w-xl border">
      <ResizablePanel defaultSize="62%" minSize="40%">
        <div className="flex h-full flex-col">
          <div className="flex items-center gap-2 border-b p-3">
            <Avatar className="size-7">
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">Nadia Alvarez</span>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-3">
            {thread.map((message, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] px-3 py-2 text-xs",
                  message.me ? "self-end bg-primary text-primary-foreground" : "self-start bg-muted"
                )}
              >
                {message.text}
              </div>
            ))}
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="38%" minSize="25%" maxSize="50%">
        <div className="flex h-full flex-col items-center gap-2 p-4 text-center">
          <Avatar className="size-14">
            <AvatarFallback className="text-base">NA</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Nadia Alvarez</p>
            <p className="text-xs text-muted-foreground">Product Manager</p>
          </div>
          <Badge variant="secondary">Online</Badge>
          <Separator className="my-2" />
          <div className="flex w-full flex-col gap-1 text-left text-xs">
            <span className="flex items-center gap-2"><MailIcon className="size-3.5" />nadia@orbitlabs.dev</span>
            <span className="flex items-center gap-2"><MapPinIcon className="size-3.5" />Lisbon, PT</span>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "MarkdownEditorPreview",
    description: "Side-by-side markdown editor and live preview that share resizable space.",
    code: `
export default function MarkdownEditorPreview() {
  const [text, setText] = React.useState(
    "# Release 2.4\\n\\nFaster sync and a brand new activity feed.\\n\\n- Offline drafts\\n- Bulk archive\\n- Dark mode polish"
  )
  const lines = text.split("\\n")

  return (
    <ResizablePanelGroup orientation="horizontal" className="h-72 w-full max-w-2xl border">
      <ResizablePanel defaultSize="50%" minSize="30%">
        <Textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          aria-label="Markdown source"
          className="h-full resize-none border-0 font-mono text-xs focus-visible:ring-0"
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%" minSize="30%">
        <div className="flex h-full flex-col gap-1 overflow-auto p-4 text-sm">
          {lines.map((line, i) => {
            if (line.startsWith("# ")) return <h3 key={i} className="text-base font-semibold">{line.slice(2)}</h3>
            if (line.startsWith("- ")) return <li key={i} className="ml-4 list-disc text-xs">{line.slice(2)}</li>
            if (!line.trim()) return <div key={i} className="h-2" />
            return <p key={i} className="text-xs text-muted-foreground">{line}</p>
          })}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "BeforeAfterCompare",
    description: "Before and after comparison where dragging the handle reveals each version.",
    code: `
export default function BeforeAfterCompare() {
  const [split, setSplit] = React.useState(50)

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <ResizablePanelGroup orientation="horizontal" className="h-56 border">
        <ResizablePanel defaultSize="50%" onResize={(size) => setSplit(Math.round(size.asPercentage))}>
          <div className="relative h-full bg-gradient-to-br from-zinc-400 to-zinc-600">
            <Badge variant="secondary" className="absolute top-2 left-2">Before</Badge>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className="w-1 bg-background" />
        <ResizablePanel defaultSize="50%">
          <div className="relative h-full bg-gradient-to-br from-amber-300 via-rose-400 to-violet-500">
            <Badge variant="secondary" className="absolute top-2 right-2">After</Badge>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <p className="text-center text-xs text-muted-foreground">
        Showing {split}% original, {100 - split}% color graded
      </p>
    </div>
  )
}`,
  },
  {
    name: "LivePanelSizeReadout",
    description: "Three panels that report their live percentage and pixel sizes while resizing.",
    code: `
const panels = ["Left", "Center", "Right"]

export default function LivePanelSizeReadout() {
  const [sizes, setSizes] = React.useState<Record<string, { pct: number; px: number }>>({})

  return (
    <ResizablePanelGroup orientation="horizontal" className="h-40 w-full max-w-lg border">
      {panels.map((label, i) => (
        <React.Fragment key={label}>
          {i > 0 && <ResizableHandle withHandle />}
          <ResizablePanel
            id={label}
            minSize="15%"
            onResize={(size) =>
              setSizes((prev) => ({
                ...prev,
                [label]: { pct: Math.round(size.asPercentage), px: Math.round(size.inPixels) },
              }))
            }
          >
            <div className="flex h-full flex-col items-center justify-center gap-1">
              <span className="text-xs font-medium">{label}</span>
              <span className="font-mono text-lg tabular-nums">{sizes[label]?.pct ?? 33}%</span>
              <span className="font-mono text-[10px] text-muted-foreground tabular-nums">
                {sizes[label]?.px ?? 0}px
              </span>
            </div>
          </ResizablePanel>
        </React.Fragment>
      ))}
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "MinMaxConstraints",
    description: "Panels with labelled minimum and maximum size constraints.",
    code: `
export default function MinMaxConstraints() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-44 w-full max-w-lg border">
      <ResizablePanel defaultSize="30%" minSize="20%" maxSize="40%">
        <div className="flex h-full flex-col items-center justify-center gap-1 bg-muted/40 p-3 text-center">
          <span className="text-xs font-medium">Navigation</span>
          <Badge variant="outline">20% - 40%</Badge>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="70%" minSize="60%">
        <div className="flex h-full flex-col items-center justify-center gap-1 p-3 text-center">
          <span className="text-xs font-medium">Workspace</span>
          <Badge variant="outline">min 60%</Badge>
          <p className="max-w-48 text-[11px] text-muted-foreground">
            The handle stops when either panel reaches its limit.
          </p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "LayoutPresetButtons",
    description: "Preset buttons that apply saved layouts through the group's imperative API.",
    code: `
type GroupHandle = {
  getLayout: () => { [panelId: string]: number }
  setLayout: (layout: { [panelId: string]: number }) => { [panelId: string]: number }
}

const presets = [
  { label: "Balanced", icon: Columns3Icon, layout: { files: 25, editor: 50, preview: 25 } },
  { label: "Focus", icon: MaximizeIcon, layout: { files: 10, editor: 80, preview: 10 } },
  { label: "Review", icon: EyeIcon, layout: { files: 15, editor: 35, preview: 50 } },
]

export default function LayoutPresetButtons() {
  const groupRef = React.useRef<GroupHandle | null>(null)
  const [active, setActive] = React.useState("Balanced")

  return (
    <div className="flex w-full max-w-xl flex-col gap-2">
      <div className="flex flex-wrap gap-1">
        {presets.map((preset) => (
          <Button
            key={preset.label}
            size="sm"
            variant={active === preset.label ? "default" : "outline"}
            onClick={() => {
              groupRef.current?.setLayout(preset.layout)
              setActive(preset.label)
            }}
          >
            <preset.icon data-icon="inline-start" />
            {preset.label}
          </Button>
        ))}
      </div>
      <ResizablePanelGroup groupRef={groupRef} orientation="horizontal" className="h-48 border">
        <ResizablePanel id="files" defaultSize="25%" minSize="10%">
          <div className="flex h-full items-center justify-center text-xs text-muted-foreground">Files</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel id="editor" defaultSize="50%" minSize="20%">
          <div className="flex h-full items-center justify-center text-xs font-medium">Editor</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel id="preview" defaultSize="25%" minSize="10%">
          <div className="flex h-full items-center justify-center bg-muted/40 text-xs text-muted-foreground">
            Preview
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}`,
  },
  {
    name: "LockableLayout",
    description: "A switch that locks the layout by disabling the panel group.",
    code: `
export default function LockableLayout() {
  const [locked, setLocked] = React.useState(true)

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center justify-between">
        <Label htmlFor="lock-layout" className="flex items-center gap-2 text-xs">
          {locked ? <LockIcon className="size-3.5" /> : <LockOpenIcon className="size-3.5" />}
          Lock layout
        </Label>
        <Switch id="lock-layout" checked={locked} onCheckedChange={setLocked} />
      </div>
      <ResizablePanelGroup
        orientation="horizontal"
        disabled={locked}
        className={cn("h-40 border", locked && "opacity-80")}
      >
        <ResizablePanel defaultSize="40%">
          <div className="flex h-full items-center justify-center text-xs">Widgets</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="60%">
          <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
            {locked ? "Unlock to resize" : "Drag the handle"}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}`,
  },
  {
    name: "KanbanResizableColumns",
    description: "Kanban board whose status columns can be widened or narrowed.",
    code: `
const columns = [
  { title: "To do", tasks: ["Audit onboarding emails", "Draft pricing FAQ"] },
  { title: "In progress", tasks: ["Billing page redesign", "Webhook retries"] },
  { title: "Done", tasks: ["SSO for Teams plan"] },
]

export default function KanbanResizableColumns() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-64 w-full max-w-2xl border">
      {columns.map((column, i) => (
        <React.Fragment key={column.title}>
          {i > 0 && <ResizableHandle />}
          <ResizablePanel minSize="20%">
            <div className="flex h-full flex-col gap-2 p-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-medium">{column.title}</span>
                <Badge variant="secondary">{column.tasks.length}</Badge>
              </div>
              {column.tasks.map((task) => (
                <div key={task} className="border bg-background p-2 text-xs shadow-xs">
                  {task}
                </div>
              ))}
            </div>
          </ResizablePanel>
        </React.Fragment>
      ))}
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "TableWithInspector",
    description: "Admin users table with a resizable inspector panel for the selected row.",
    code: `
const users = [
  { name: "Ava Lindqvist", role: "Owner", status: "Active" },
  { name: "Ben Okafor", role: "Admin", status: "Active" },
  { name: "Chloe Martin", role: "Member", status: "Invited" },
  { name: "Dev Raman", role: "Member", status: "Suspended" },
]

export default function TableWithInspector() {
  const [selected, setSelected] = React.useState(users[0]!)

  return (
    <ResizablePanelGroup orientation="horizontal" className="h-72 w-full max-w-2xl border">
      <ResizablePanel defaultSize="62%" minSize="45%">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.name}
                data-state={selected.name === user.name ? "selected" : undefined}
                onClick={() => setSelected(user)}
                className="cursor-pointer"
              >
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="38%" minSize="25%">
        <div className="flex h-full flex-col gap-3 p-4">
          <Avatar>
            <AvatarFallback>{selected.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{selected.name}</p>
            <p className="text-xs text-muted-foreground">{selected.role}</p>
          </div>
          <Badge variant={selected.status === "Suspended" ? "destructive" : "secondary"}>{selected.status}</Badge>
          <Button size="sm" variant="outline" className="mt-auto">Edit permissions</Button>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "FileManagerSplit",
    description: "File manager with a folder tree and a resizable grid of files.",
    code: `
const tree = [
  { name: "Documents", depth: 0, open: true },
  { name: "Contracts", depth: 1, open: false },
  { name: "Invoices", depth: 1, open: false },
  { name: "Design", depth: 0, open: false },
  { name: "Photos", depth: 0, open: false },
]

const items = [
  { name: "Q3-report.pdf", icon: FileTextIcon },
  { name: "budget.xlsx", icon: FileSpreadsheetIcon },
  { name: "logo.svg", icon: FileImageIcon },
  { name: "notes.md", icon: FileIcon },
  { name: "archive.zip", icon: FileArchiveIcon },
  { name: "intro.mp4", icon: FileVideoIcon },
]

export default function FileManagerSplit() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-72 w-full max-w-2xl border">
      <ResizablePanel defaultSize="28%" minSize="18%">
        <div className="flex h-full flex-col gap-0.5 p-2 text-xs">
          {tree.map((node) => (
            <div
              key={node.name}
              className="flex items-center gap-1.5 px-1 py-1 hover:bg-muted"
              style={{ paddingLeft: 4 + node.depth * 14 }}
            >
              {node.open ? <FolderOpenIcon className="size-3.5 shrink-0" /> : <FolderIcon className="size-3.5 shrink-0" />}
              <span className="truncate">{node.name}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="72%">
        <div className="grid h-full auto-rows-min grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-2 p-3">
          {items.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-1 border p-2 text-center hover:bg-muted">
              <item.icon className="size-6 text-muted-foreground" />
              <span className="w-full truncate text-[11px]">{item.name}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "QueryAndResultsVertical",
    description: "Vertical SQL console with a query editor above a results table.",
    code: `
const rows = [
  { id: 1042, email: "kai@northwind.io", plan: "Pro" },
  { id: 1043, email: "rosa@lumen.app", plan: "Team" },
  { id: 1044, email: "omar@fieldnote.co", plan: "Free" },
]

export default function QueryAndResultsVertical() {
  return (
    <ResizablePanelGroup orientation="vertical" className="h-80 w-full max-w-xl border">
      <ResizablePanel defaultSize="40%" minSize="20%">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b px-3 py-1.5">
            <span className="text-xs font-medium">query.sql</span>
            <Button size="xs">
              <PlayIcon data-icon="inline-start" />
              Run
            </Button>
          </div>
          <pre className="flex-1 p-3 font-mono text-xs">
            {"SELECT id, email, plan\\nFROM customers\\nWHERE created_at > now() - interval '7 days';"}
          </pre>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="60%" minSize="25%">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>id</TableHead>
              <TableHead>email</TableHead>
              <TableHead>plan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-mono">{row.id}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.plan}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "DesignToolPanels",
    description: "Design tool layout with layers, a canvas, and a properties inspector.",
    code: `
const layers = [
  { name: "Header", icon: FrameIcon },
  { name: "Hero title", icon: TypeIcon },
  { name: "CTA button", icon: SquareIcon },
  { name: "Illustration", icon: ShapesIcon },
]

export default function DesignToolPanels() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-72 w-full max-w-2xl border">
      <ResizablePanel defaultSize="22%" minSize="15%">
        <div className="flex h-full flex-col gap-0.5 p-2 text-xs">
          <span className="px-1 pb-1 text-[10px] font-medium text-muted-foreground uppercase">Layers</span>
          {layers.map((layer, i) => (
            <div key={layer.name} className={cn("flex items-center gap-2 px-1 py-1", i === 2 && "bg-primary/10 text-primary")}>
              <layer.icon className="size-3.5 shrink-0" />
              <span className="truncate">{layer.name}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="56%" minSize="30%">
        <div className="flex h-full items-center justify-center bg-muted/50 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-[size:12px_12px] p-4">
          <div className="flex w-full max-w-40 flex-col gap-2 border bg-background p-3 shadow-sm">
            <div className="h-2 w-2/3 bg-foreground/80" />
            <div className="h-1.5 w-full bg-muted-foreground/30" />
            <div className="h-5 w-16 border-2 border-primary bg-primary/80" />
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="22%" minSize="15%">
        <div className="flex h-full flex-col gap-2 p-2 text-xs">
          <span className="text-[10px] font-medium text-muted-foreground uppercase">Properties</span>
          <div className="grid grid-cols-2 gap-1">
            <Input aria-label="Width" defaultValue="96" className="h-7 text-xs" />
            <Input aria-label="Height" defaultValue="32" className="h-7 text-xs" />
          </div>
          <div className="flex items-center gap-2">
            <span className="size-4 border bg-primary" />
            <span className="font-mono">primary</span>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "DashboardWidgetGrid",
    description: "Dashboard of nested resizable groups forming a 2x2 widget grid.",
    code: `
function Stat({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="flex h-full flex-col justify-between p-3">
      <span className="text-xs text-muted-foreground">{label}</span>
      <div className="flex items-end justify-between gap-2">
        <span className="text-xl font-semibold tabular-nums">{value}</span>
        <span className="text-xs text-emerald-600 dark:text-emerald-400">{delta}</span>
      </div>
    </div>
  )
}

export default function DashboardWidgetGrid() {
  return (
    <ResizablePanelGroup orientation="vertical" className="h-72 w-full max-w-lg border">
      <ResizablePanel defaultSize="50%" minSize="25%">
        <ResizablePanelGroup orientation="horizontal">
          <ResizablePanel defaultSize="50%" minSize="25%">
            <Stat label="Revenue" value="$48.2k" delta="+12%" />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize="50%" minSize="25%">
            <Stat label="Active users" value="3,912" delta="+4%" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%" minSize="25%">
        <ResizablePanelGroup orientation="horizontal">
          <ResizablePanel defaultSize="50%" minSize="25%">
            <Stat label="Churn" value="1.8%" delta="-0.3%" />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize="50%" minSize="25%">
            <Stat label="NPS" value="62" delta="+5" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "MusicPlayerQueue",
    description: "Now-playing panel beside a resizable up-next queue.",
    code: `
const queue = [
  { title: "Glasshouse", artist: "Mira Vale", length: "3:42" },
  { title: "Low Tide", artist: "The Ferns", length: "4:05" },
  { title: "Paper Moons", artist: "Odile", length: "2:58" },
  { title: "Northbound", artist: "Kestrel", length: "3:31" },
]

export default function MusicPlayerQueue() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-64 w-full max-w-xl border">
      <ResizablePanel defaultSize="45%" minSize="35%">
        <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
          <div className="aspect-square w-24 bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500" />
          <div className="text-center">
            <p className="text-sm font-medium">Midnight Arcade</p>
            <p className="text-xs text-muted-foreground">Neon Static</p>
          </div>
          <div className="flex items-center gap-1">
            <Button size="icon-sm" variant="ghost" aria-label="Previous"><SkipBackIcon /></Button>
            <Button size="icon" aria-label="Pause"><PauseIcon /></Button>
            <Button size="icon-sm" variant="ghost" aria-label="Next"><SkipForwardIcon /></Button>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="55%" minSize="30%">
        <div className="flex h-full flex-col">
          <span className="border-b px-3 py-2 text-xs font-medium">Up next</span>
          {queue.map((track, i) => (
            <div key={track.title} className="flex items-center gap-3 px-3 py-2 text-xs hover:bg-muted">
              <span className="w-3 text-muted-foreground tabular-nums">{i + 1}</span>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="truncate font-medium">{track.title}</span>
                <span className="truncate text-muted-foreground">{track.artist}</span>
              </div>
              <span className="text-muted-foreground tabular-nums">{track.length}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "DocsWithTableOfContents",
    description: "Documentation page with navigation, article, and an on-this-page outline.",
    code: `
const nav = ["Introduction", "Installation", "Authentication", "Webhooks", "Rate limits"]
const outline = ["Overview", "Signing secrets", "Retries", "Testing locally"]

export default function DocsWithTableOfContents() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-80 w-full max-w-2xl border">
      <ResizablePanel defaultSize="22%" minSize="15%" maxSize="30%">
        <nav className="flex h-full flex-col gap-0.5 p-2 text-xs">
          {nav.map((item) => (
            <a
              key={item}
              href="#"
              className={cn("truncate px-2 py-1 hover:bg-muted", item === "Webhooks" && "bg-muted font-medium")}
            >
              {item}
            </a>
          ))}
        </nav>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="56%" minSize="40%">
        <article className="flex h-full flex-col gap-2 p-4">
          <span className="text-[11px] text-muted-foreground">Guides / Webhooks</span>
          <h3 className="text-base font-semibold">Receiving webhooks</h3>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Webhooks notify your server when events happen in your workspace. Each request is signed so you can
            verify it came from us before processing the payload.
          </p>
          <pre className="bg-muted p-2 font-mono text-[11px]">POST /hooks/events</pre>
        </article>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="22%" minSize="15%" maxSize="30%">
        <div className="flex h-full flex-col gap-1 p-3 text-xs">
          <span className="font-medium">On this page</span>
          {outline.map((item) => (
            <a key={item} href="#" className="truncate text-muted-foreground hover:text-foreground">
              {item}
            </a>
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "ApiPlaygroundSplit",
    description: "API playground with a request builder and a resizable JSON response panel.",
    code: `
const response = {
  id: "ord_8F2kq",
  status: "fulfilled",
  total: 129.5,
  currency: "EUR",
}

export default function ApiPlaygroundSplit() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-64 w-full max-w-2xl border">
      <ResizablePanel defaultSize="50%" minSize="35%">
        <div className="flex h-full flex-col gap-3 p-3">
          <div className="flex gap-1">
            <Badge>GET</Badge>
            <Input aria-label="Endpoint" defaultValue="/v1/orders/ord_8F2kq" className="h-7 font-mono text-xs" />
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <span className="font-medium">Headers</span>
            <span className="font-mono text-muted-foreground">Authorization: Bearer key_demo_...</span>
            <span className="font-mono text-muted-foreground">Accept: application/json</span>
          </div>
          <Button size="sm" className="mt-auto self-start">
            <SendIcon data-icon="inline-start" />
            Send request
          </Button>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%" minSize="30%">
        <div className="flex h-full flex-col bg-muted/40">
          <div className="flex items-center gap-2 border-b px-3 py-1.5 text-xs">
            <Badge variant="secondary">200 OK</Badge>
            <span className="text-muted-foreground">84 ms</span>
          </div>
          <pre className="flex-1 overflow-auto p-3 font-mono text-[11px]">{JSON.stringify(response, null, 2)}</pre>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "SideBySideDiff",
    description: "Side-by-side code diff with removed and added lines in resizable columns.",
    code: `
const before = [
  { text: "function total(items) {", kind: "same" },
  { text: "  let sum = 0", kind: "removed" },
  { text: "  for (const i of items) sum += i.price", kind: "removed" },
  { text: "  return sum", kind: "removed" },
  { text: "}", kind: "same" },
]

const after = [
  { text: "function total(items) {", kind: "same" },
  { text: "  return items.reduce(", kind: "added" },
  { text: "    (sum, i) => sum + i.price * i.qty, 0", kind: "added" },
  { text: "  )", kind: "added" },
  { text: "}", kind: "same" },
]

function Column({ lines }: { lines: typeof before }) {
  return (
    <div className="h-full py-2 font-mono text-[11px]">
      {lines.map((line, i) => (
        <div
          key={i}
          className={cn(
            "truncate px-3 whitespace-pre",
            line.kind === "removed" && "bg-red-500/10 text-red-700 dark:text-red-300",
            line.kind === "added" && "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
          )}
        >
          {line.kind === "removed" ? "- " : line.kind === "added" ? "+ " : "  "}
          {line.text}
        </div>
      ))}
    </div>
  )
}

export default function SideBySideDiff() {
  return (
    <div className="w-full max-w-2xl border">
      <div className="flex items-center gap-2 border-b px-3 py-2 text-xs">
        <FileDiffIcon className="size-3.5" />
        <span className="font-mono">src/cart/total.ts</span>
        <span className="ml-auto text-emerald-600 dark:text-emerald-400">+3</span>
        <span className="text-red-600 dark:text-red-400">-3</span>
      </div>
      <ResizablePanelGroup orientation="horizontal" className="h-36">
        <ResizablePanel defaultSize="50%" minSize="25%">
          <Column lines={before} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="50%" minSize="25%">
          <Column lines={after} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}`,
  },
  {
    name: "VideoCallWithChat",
    description: "Video call stage with a resizable in-call chat sidebar.",
    code: `
const participants = ["Sana Iqbal", "Jonas Weber", "Priya Nair", "Luca Romano"]

export default function VideoCallWithChat() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-72 w-full max-w-2xl border">
      <ResizablePanel defaultSize="68%" minSize="50%">
        <div className="flex h-full flex-col gap-2 bg-zinc-950 p-2">
          <div className="grid flex-1 grid-cols-2 gap-2">
            {participants.map((name, i) => (
              <div
                key={name}
                className={cn(
                  "relative flex items-center justify-center bg-zinc-800",
                  i === 0 && "ring-2 ring-emerald-500"
                )}
              >
                <Avatar>
                  <AvatarFallback>{name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-1 left-1 truncate text-[10px] text-white/80">{name}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1">
            <Button size="icon-sm" variant="secondary" aria-label="Mute"><MicIcon /></Button>
            <Button size="icon-sm" variant="secondary" aria-label="Camera"><VideoIcon /></Button>
            <Button size="icon-sm" variant="destructive" aria-label="Leave"><PhoneOffIcon /></Button>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="32%" minSize="25%" maxSize="45%">
        <div className="flex h-full flex-col">
          <span className="border-b px-3 py-2 text-xs font-medium">In-call messages</span>
          <div className="flex flex-1 flex-col gap-2 p-3 text-xs">
            <p><span className="font-medium">Jonas:</span> Sharing my screen next</p>
            <p><span className="font-medium">Priya:</span> Link to the doc is in the agenda</p>
          </div>
          <Input aria-label="Message" placeholder="Send a message" className="rounded-none border-x-0 border-b-0 text-xs" />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "CalendarAgendaSplit",
    description: "Mini month calendar beside a resizable daily agenda.",
    code: `
const days = Array.from({ length: 30 }, (_, i) => i + 1)
const events = [
  { time: "09:00", title: "Standup", tone: "bg-sky-500" },
  { time: "11:30", title: "Design review", tone: "bg-violet-500" },
  { time: "14:00", title: "Customer call - Hollow Pine", tone: "bg-amber-500" },
  { time: "16:30", title: "1:1 with Mateo", tone: "bg-emerald-500" },
]

export default function CalendarAgendaSplit() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-72 w-full max-w-2xl border">
      <ResizablePanel defaultSize="42%" minSize="35%">
        <div className="flex h-full flex-col gap-2 p-3">
          <span className="text-xs font-medium">September</span>
          <div className="grid grid-cols-7 gap-0.5 text-center text-[11px]">
            {days.map((day) => (
              <span
                key={day}
                className={cn("py-1 tabular-nums", day === 18 ? "bg-primary text-primary-foreground" : "hover:bg-muted")}
              >
                {day}
              </span>
            ))}
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="58%" minSize="35%">
        <div className="flex h-full flex-col gap-2 p-3">
          <span className="text-xs font-medium">Thursday, Sep 18</span>
          {events.map((event) => (
            <div key={event.title} className="flex items-center gap-2 border p-2 text-xs">
              <span className={cn("h-6 w-1 shrink-0", event.tone)} />
              <span className="w-10 shrink-0 text-muted-foreground tabular-nums">{event.time}</span>
              <span className="truncate">{event.title}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "SupportTicketWorkspace",
    description: "Support desk with a ticket queue and a resizable conversation panel.",
    code: `
const tickets = [
  { id: "#4821", subject: "Cannot reset password", priority: "High" },
  { id: "#4819", subject: "Refund for duplicate charge", priority: "Medium" },
  { id: "#4815", subject: "Export stuck at 90%", priority: "Low" },
]

export default function SupportTicketWorkspace() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-72 w-full max-w-2xl border">
      <ResizablePanel defaultSize="38%" minSize="28%">
        <div className="flex h-full flex-col divide-y">
          {tickets.map((ticket, i) => (
            <div key={ticket.id} className={cn("flex flex-col gap-1 p-3", i === 0 && "bg-muted/60")}>
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono text-muted-foreground">{ticket.id}</span>
                <Badge variant={ticket.priority === "High" ? "destructive" : "outline"}>{ticket.priority}</Badge>
              </div>
              <span className="truncate text-xs font-medium">{ticket.subject}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="62%" minSize="40%">
        <div className="flex h-full flex-col gap-3 p-3">
          <div className="flex items-center gap-2">
            <Avatar className="size-6"><AvatarFallback className="text-[10px]">EH</AvatarFallback></Avatar>
            <span className="text-xs font-medium">Elif Hansen</span>
            <span className="text-[11px] text-muted-foreground">12 min ago</span>
          </div>
          <p className="text-xs">The reset email never arrives. I&apos;ve checked spam and tried twice.</p>
          <Textarea placeholder="Write a reply..." className="mt-auto min-h-16 text-xs" />
          <div className="flex justify-end gap-2">
            <Button size="sm" variant="outline">Add note</Button>
            <Button size="sm">Send reply</Button>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "WideHoverHandle",
    description: "Custom wide handle that highlights on hover and while dragging.",
    code: `
export default function WideHoverHandle() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-44 w-full max-w-md border">
      <ResizablePanel defaultSize="50%">
        <div className="flex h-full items-center justify-center text-xs">Source</div>
      </ResizablePanel>
      <ResizableHandle className="w-2 bg-muted transition-colors data-[separator=active]:bg-primary data-[separator=hover]:bg-primary/40" />
      <ResizablePanel defaultSize="50%">
        <div className="flex h-full items-center justify-center text-xs text-muted-foreground">Target</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "TranslationEditor",
    description: "Source and translation text side by side for a localization workflow.",
    code: `
const strings = [
  { key: "checkout.title", en: "Review your order", es: "Revisa tu pedido" },
  { key: "checkout.pay", en: "Pay now", es: "Pagar ahora" },
  { key: "checkout.coupon", en: "Have a promo code?", es: "" },
]

export default function TranslationEditor() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-60 w-full max-w-2xl border">
      <ResizablePanel defaultSize="50%" minSize="30%">
        <div className="flex h-full flex-col divide-y">
          <span className="px-3 py-2 text-xs font-medium">English (source)</span>
          {strings.map((s) => (
            <div key={s.key} className="flex flex-col gap-0.5 px-3 py-2">
              <span className="font-mono text-[10px] text-muted-foreground">{s.key}</span>
              <span className="text-xs">{s.en}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%" minSize="30%">
        <div className="flex h-full flex-col divide-y">
          <span className="px-3 py-2 text-xs font-medium">Spanish</span>
          {strings.map((s) => (
            <div key={s.key} className="px-3 py-1.5">
              <Input
                aria-label={s.key}
                defaultValue={s.es}
                placeholder="Needs translation"
                aria-invalid={!s.es || undefined}
                className="h-7 text-xs"
              />
            </div>
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "PixelSizedSidebar",
    description: "Sidebar sized in pixels that keeps its width when the group resizes.",
    code: `
export default function PixelSizedSidebar() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-48 w-full max-w-xl border">
      <ResizablePanel defaultSize="180px" minSize="120px" maxSize="260px" groupResizeBehavior="preserve-pixel-size">
        <div className="flex h-full flex-col justify-center gap-1 bg-muted/40 p-3">
          <span className="text-xs font-medium">Sidebar</span>
          <span className="font-mono text-[11px] text-muted-foreground">120px - 260px</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <div className="flex h-full flex-col justify-center gap-1 p-3">
          <span className="text-xs font-medium">Main content</span>
          <span className="text-[11px] text-muted-foreground">Takes the remaining space and absorbs window resizes.</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "LayoutChangeLog",
    description: "Event log that records each committed layout change and whether the user caused it.",
    code: `
export default function LayoutChangeLog() {
  const [log, setLog] = React.useState<string[]>([])

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <ResizablePanelGroup
        orientation="horizontal"
        className="h-32 border"
        onLayoutChanged={(layout, meta) => {
          const entry =
            Object.values(layout)
              .map((v) => Math.round(v) + "%")
              .join(" / ") + (meta.isUserInteraction ? " (drag)" : " (initial)")
          setLog((prev) => [entry, ...prev].slice(0, 4))
        }}
      >
        <ResizablePanel id="a" defaultSize="40%">
          <div className="flex h-full items-center justify-center text-xs">A</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel id="b" defaultSize="60%">
          <div className="flex h-full items-center justify-center text-xs">B</div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="flex flex-col gap-1 border bg-muted/40 p-2 font-mono text-[11px]">
        {log.length === 0 ? (
          <span className="text-muted-foreground">Drag the handle to record changes</span>
        ) : (
          log.map((entry, i) => (
            <span key={i} className={cn(i > 0 && "text-muted-foreground")}>{entry}</span>
          ))
        )}
      </div>
    </div>
  )
}`,
  },
  {
    name: "CollapsibleTerminalDrawer",
    description: "Vertical layout whose bottom terminal panel collapses and expands with a button.",
    code: `
type PanelHandle = {
  collapse: () => void
  expand: () => void
  getSize: () => { asPercentage: number; inPixels: number }
  isCollapsed: () => boolean
  resize: (size: number | string) => void
}

export default function CollapsibleTerminalDrawer() {
  const terminalRef = React.useRef<PanelHandle | null>(null)
  const [open, setOpen] = React.useState(true)

  return (
    <div className="flex w-full max-w-xl flex-col border">
      <ResizablePanelGroup orientation="vertical" className="h-64">
        <ResizablePanel defaultSize="65%" minSize="30%">
          <div className="flex h-full items-center justify-center p-4 font-mono text-xs text-muted-foreground">
            editor.tsx
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          panelRef={terminalRef}
          defaultSize="35%"
          minSize="20%"
          collapsible
          onResize={(size) => setOpen(size.asPercentage > 0)}
        >
          <div className="flex h-full flex-col gap-1 bg-muted/40 p-3 font-mono text-[11px]">
            <span>$ pnpm test</span>
            <span className="text-emerald-600 dark:text-emerald-400">42 passed, 0 failed</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="flex items-center justify-between border-t px-3 py-1">
        <span className="flex items-center gap-1.5 text-xs font-medium">
          <TerminalIcon className="size-3.5" />
          Terminal
        </span>
        <Button
          size="icon-xs"
          variant="ghost"
          aria-label={open ? "Collapse terminal" : "Expand terminal"}
          onClick={() => (open ? terminalRef.current?.collapse() : terminalRef.current?.expand())}
        >
          {open ? <ChevronDownIcon /> : <ChevronUpIcon />}
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "NotesAppThreePane",
    description: "Notes app with notebooks, a note list, and an editor in three panes.",
    code: `
const notebooks = ["Personal", "Work", "Recipes", "Travel"]
const notes = [
  { title: "Lisbon itinerary", preview: "Day 1: Alfama walk, tram 28..." },
  { title: "Packing list", preview: "Adapters, light jacket, sandals" },
  { title: "Restaurants", preview: "Taberna da Rua, Cervejaria..." },
]

export default function NotesAppThreePane() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-72 w-full max-w-2xl border">
      <ResizablePanel defaultSize="20%" minSize="14%">
        <div className="flex h-full flex-col gap-0.5 bg-muted/40 p-2 text-xs">
          {notebooks.map((nb) => (
            <span key={nb} className={cn("flex items-center gap-1.5 px-2 py-1", nb === "Travel" && "bg-background font-medium")}>
              <NotebookIcon className="size-3.5 shrink-0" />
              <span className="truncate">{nb}</span>
            </span>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="32%" minSize="22%">
        <div className="flex h-full flex-col divide-y">
          {notes.map((note, i) => (
            <div key={note.title} className={cn("p-3", i === 0 && "bg-muted/50")}>
              <p className="truncate text-xs font-medium">{note.title}</p>
              <p className="truncate text-[11px] text-muted-foreground">{note.preview}</p>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="48%" minSize="30%">
        <div className="flex h-full flex-col gap-2 p-4">
          <h3 className="text-sm font-semibold">Lisbon itinerary</h3>
          <ul className="flex list-disc flex-col gap-1 pl-4 text-xs">
            <li>Day 1: Alfama walk, tram 28, sunset at Miradouro</li>
            <li>Day 2: Belem and the riverside</li>
            <li>Day 3: Day trip to Sintra</li>
          </ul>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "ProductEditorSplit",
    description: "Commerce admin with a product list and a resizable edit form.",
    code: `
const products = [
  { name: "Linen Shirt", sku: "LS-001", stock: 42, tone: "from-stone-300 to-stone-500" },
  { name: "Canvas Tote", sku: "CT-014", stock: 8, tone: "from-amber-200 to-orange-400" },
  { name: "Wool Beanie", sku: "WB-220", stock: 0, tone: "from-slate-400 to-slate-700" },
]

export default function ProductEditorSplit() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-80 w-full max-w-2xl border">
      <ResizablePanel defaultSize="40%" minSize="30%">
        <div className="flex h-full flex-col divide-y">
          {products.map((p, i) => (
            <div key={p.sku} className={cn("flex items-center gap-2 p-2", i === 0 && "bg-muted/60")}>
              <div className={cn("size-9 shrink-0 bg-gradient-to-br", p.tone)} />
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-xs font-medium">{p.name}</span>
                <span className="font-mono text-[10px] text-muted-foreground">{p.sku}</span>
              </div>
              <Badge variant={p.stock === 0 ? "destructive" : "outline"}>{p.stock === 0 ? "Sold out" : p.stock}</Badge>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="60%" minSize="40%">
        <form className="flex h-full flex-col gap-3 p-4">
          <Field>
            <FieldLabel htmlFor="product-name">Name</FieldLabel>
            <Input id="product-name" defaultValue="Linen Shirt" />
          </Field>
          <div className="grid grid-cols-2 gap-2">
            <Field>
              <FieldLabel htmlFor="product-price">Price</FieldLabel>
              <Input id="product-price" defaultValue="68.00" />
            </Field>
            <Field>
              <FieldLabel htmlFor="product-stock">Stock</FieldLabel>
              <Input id="product-stock" defaultValue="42" />
            </Field>
          </div>
          <Button size="sm" className="mt-auto self-end">Save product</Button>
        </form>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "AnalyticsChartAndBreakdown",
    description: "Vertical split with a bar chart above a channel breakdown list.",
    code: `
const bars = [32, 48, 41, 66, 58, 72, 80]
const channels = [
  { name: "Organic search", value: "42%" },
  { name: "Direct", value: "27%" },
  { name: "Referral", value: "18%" },
  { name: "Social", value: "13%" },
]

export default function AnalyticsChartAndBreakdown() {
  return (
    <ResizablePanelGroup orientation="vertical" className="h-80 w-full max-w-lg border">
      <ResizablePanel defaultSize="55%" minSize="30%">
        <div className="flex h-full flex-col gap-2 p-3">
          <div className="flex items-baseline justify-between">
            <span className="text-xs font-medium">Weekly visitors</span>
            <span className="text-sm font-semibold tabular-nums">18,240</span>
          </div>
          <div className="flex flex-1 items-end gap-1.5">
            {bars.map((value, i) => (
              <div key={i} className="flex-1 bg-primary/80" style={{ height: value + "%" }} />
            ))}
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="45%" minSize="25%">
        <div className="flex h-full flex-col divide-y">
          {channels.map((c) => (
            <div key={c.name} className="flex items-center justify-between px-3 py-2 text-xs">
              <span>{c.name}</span>
              <span className="font-medium tabular-nums">{c.value}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "EmailTemplatePicker",
    description: "Email composer with a resizable list of saved templates.",
    code: `
const templates = [
  { name: "Welcome aboard", body: "Thanks for joining Fieldnote! Here is how to get started..." },
  { name: "Trial ending", body: "Your trial ends in 3 days. Upgrade to keep your projects..." },
  { name: "Payment failed", body: "We could not process your last payment. Please update..." },
]

export default function EmailTemplatePicker() {
  const [body, setBody] = React.useState(templates[0]!.body)

  return (
    <ResizablePanelGroup orientation="horizontal" className="h-72 w-full max-w-2xl border">
      <ResizablePanel defaultSize="32%" minSize="22%">
        <div className="flex h-full flex-col gap-1 p-2">
          <span className="px-1 text-[10px] font-medium text-muted-foreground uppercase">Templates</span>
          {templates.map((t) => (
            <button
              key={t.name}
              onClick={() => setBody(t.body)}
              className={cn("flex items-center gap-2 px-2 py-1.5 text-left text-xs hover:bg-muted", body === t.body && "bg-muted font-medium")}
            >
              <FileTextIcon className="size-3.5 shrink-0" />
              <span className="truncate">{t.name}</span>
            </button>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="68%" minSize="45%">
        <div className="flex h-full flex-col gap-2 p-3">
          <Input aria-label="To" placeholder="To: customer@example.com" className="text-xs" />
          <Textarea
            aria-label="Message"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            className="flex-1 resize-none text-xs"
          />
          <Button size="sm" className="self-end">
            <SendIcon data-icon="inline-start" />
            Send
          </Button>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "SettingsNavLayout",
    description: "Settings page with a resizable section navigation and preferences form.",
    code: `
const sections = [
  { label: "Profile", icon: UserIcon },
  { label: "Notifications", icon: BellIcon },
  { label: "Security", icon: ShieldIcon },
  { label: "Billing", icon: CreditCardIcon },
]

export default function SettingsNavLayout() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-72 w-full max-w-2xl border">
      <ResizablePanel defaultSize="28%" minSize="20%" maxSize="40%">
        <nav className="flex h-full flex-col gap-0.5 p-2">
          {sections.map((s) => (
            <a
              key={s.label}
              href="#"
              className={cn("flex items-center gap-2 px-2 py-1.5 text-xs hover:bg-muted", s.label === "Notifications" && "bg-muted font-medium")}
            >
              <s.icon className="size-3.5 shrink-0" />
              <span className="truncate">{s.label}</span>
            </a>
          ))}
        </nav>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="72%" minSize="50%">
        <div className="flex h-full flex-col gap-4 p-4">
          <div>
            <h3 className="text-sm font-semibold">Notifications</h3>
            <p className="text-xs text-muted-foreground">Choose what we email you about.</p>
          </div>
          {["Product updates", "Weekly digest", "Security alerts"].map((label, i) => (
            <div key={label} className="flex items-center justify-between gap-2">
              <Label htmlFor={"notify-" + i} className="text-xs">{label}</Label>
              <Switch id={"notify-" + i} defaultChecked={i !== 1} />
            </div>
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "MapWithResults",
    description: "Store locator with a results list and a resizable map area.",
    code: `
const stores = [
  { name: "Harbor Street", distance: "0.4 km", open: true },
  { name: "Old Town Market", distance: "1.2 km", open: true },
  { name: "Riverside Mall", distance: "2.8 km", open: false },
]

const pins = [
  { top: "30%", left: "40%" },
  { top: "55%", left: "62%" },
  { top: "70%", left: "28%" },
]

export default function MapWithResults() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-72 w-full max-w-2xl border">
      <ResizablePanel defaultSize="40%" minSize="30%">
        <div className="flex h-full flex-col divide-y">
          {stores.map((store) => (
            <div key={store.name} className="flex flex-col gap-0.5 p-3">
              <span className="truncate text-xs font-medium">{store.name}</span>
              <span className="text-[11px] text-muted-foreground">
                {store.distance} - {store.open ? "Open until 20:00" : "Closed"}
              </span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="60%" minSize="35%">
        <div className="relative h-full bg-emerald-50 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-emerald-950/30">
          {pins.map((pin, i) => (
            <MapPinIcon
              key={i}
              className="absolute size-5 -translate-x-1/2 -translate-y-full fill-primary text-primary-foreground"
              style={pin}
            />
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "KeyboardResizeHint",
    description: "Focusable handle with instructions for resizing via keyboard arrows.",
    code: `
export default function KeyboardResizeHint() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <ResizablePanelGroup orientation="horizontal" className="h-36 border">
        <ResizablePanel defaultSize="50%" minSize="20%">
          <div className="flex h-full items-center justify-center text-xs">Outline</div>
        </ResizablePanel>
        <ResizableHandle withHandle aria-label="Resize outline" className="focus-visible:ring-2" />
        <ResizablePanel defaultSize="50%" minSize="20%">
          <div className="flex h-full items-center justify-center text-xs">Document</div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <p className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
        Tab to the handle, then press
        <KbdGroup>
          <Kbd>&larr;</Kbd>
          <Kbd>&rarr;</Kbd>
        </KbdGroup>
        to resize or
        <Kbd>Enter</Kbd>
        to toggle.
      </p>
    </div>
  )
}`,
  },
  {
    name: "CodePlaygroundPreview",
    description: "Code playground with stacked HTML, CSS, and JS editors beside a live preview.",
    code: `
const editors = [
  { lang: "HTML", code: "<button class='cta'>Buy</button>" },
  { lang: "CSS", code: ".cta { padding: 8px 16px; }" },
  { lang: "JS", code: "cta.onclick = () => checkout()" },
]

export default function CodePlaygroundPreview() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-80 w-full max-w-2xl border">
      <ResizablePanel defaultSize="50%" minSize="30%">
        <ResizablePanelGroup orientation="vertical">
          {editors.map((editor, i) => (
            <React.Fragment key={editor.lang}>
              {i > 0 && <ResizableHandle />}
              <ResizablePanel minSize="15%">
                <div className="flex h-full flex-col">
                  <span className="border-b bg-muted/40 px-2 py-1 text-[10px] font-medium">{editor.lang}</span>
                  <code className="truncate p-2 font-mono text-[11px]">{editor.code}</code>
                </div>
              </ResizablePanel>
            </React.Fragment>
          ))}
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%" minSize="25%">
        <div className="flex h-full items-center justify-center">
          <Button>Buy</Button>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "ResponsivePreviewWidth",
    description: "Resizable preview frame that reports its pixel width and matching breakpoint.",
    code: `
function breakpoint(px: number) {
  if (px >= 640) return "sm"
  if (px >= 480) return "xs"
  return "base"
}

export default function ResponsivePreviewWidth() {
  const [width, setWidth] = React.useState(0)

  return (
    <div className="flex w-full max-w-2xl flex-col gap-2">
      <div className="flex items-center gap-2 text-xs">
        <MonitorSmartphoneIcon className="size-3.5" />
        <span className="font-mono tabular-nums">{width}px</span>
        <Badge variant="outline">{breakpoint(width)}</Badge>
      </div>
      <ResizablePanelGroup orientation="horizontal" className="h-48 border bg-muted/40">
        <ResizablePanel defaultSize="70%" minSize="30%" onResize={(size) => setWidth(Math.round(size.inPixels))}>
          <div className="flex h-full flex-col gap-2 bg-background p-3">
            <div className="h-3 w-24 bg-foreground/80" />
            <div className={cn("grid gap-2", width >= 480 ? "grid-cols-3" : "grid-cols-1")}>
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-10 bg-muted" />
              ))}
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="30%">
          <div className="h-full" />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}`,
  },
  {
    name: "DocumentReviewComments",
    description: "Contract review with a document page beside a resizable comment thread.",
    code: `
const comments = [
  { author: "Hana Sato", text: "Can we cap liability at 12 months of fees?", resolved: false },
  { author: "Victor Lund", text: "Renewal term updated to annual.", resolved: true },
]

export default function DocumentReviewComments() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-80 w-full max-w-2xl border">
      <ResizablePanel defaultSize="64%" minSize="45%">
        <div className="flex h-full items-start justify-center bg-muted/50 p-4">
          <div className="flex w-full max-w-64 flex-col gap-2 bg-background p-4 shadow-sm">
            <span className="text-xs font-semibold">Master Services Agreement</span>
            <div className="h-1.5 w-full bg-muted" />
            <div className="h-1.5 w-5/6 bg-muted" />
            <div className="h-1.5 w-full bg-amber-300/60" />
            <div className="h-1.5 w-2/3 bg-muted" />
            <div className="h-1.5 w-full bg-muted" />
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="36%" minSize="25%">
        <div className="flex h-full flex-col gap-2 p-3">
          <span className="text-xs font-medium">Comments</span>
          {comments.map((c) => (
            <div key={c.author} className={cn("flex flex-col gap-1 border p-2 text-xs", c.resolved && "opacity-60")}>
              <div className="flex items-center gap-1.5">
                <Avatar className="size-5"><AvatarFallback className="text-[9px]">{c.author.split(" ").map((p) => p[0]).join("")}</AvatarFallback></Avatar>
                <span className="truncate font-medium">{c.author}</span>
                {c.resolved && <CheckCircle2Icon className="ml-auto size-3.5 text-emerald-600" />}
              </div>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "AssistantChatWithArtifact",
    description: "AI assistant chat next to a resizable generated artifact panel.",
    code: `
export default function AssistantChatWithArtifact() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-80 w-full max-w-2xl border">
      <ResizablePanel defaultSize="45%" minSize="30%">
        <div className="flex h-full flex-col gap-2 p-3 text-xs">
          <div className="self-end bg-primary px-3 py-2 text-primary-foreground">
            Make a pricing table with three tiers.
          </div>
          <div className="flex gap-2">
            <SparklesIcon className="mt-0.5 size-3.5 shrink-0 text-primary" />
            <p>Here&apos;s a draft with Starter, Pro, and Scale tiers. The Pro column is highlighted.</p>
          </div>
          <InputGroup className="mt-auto">
            <InputGroupInput placeholder="Ask for changes..." className="text-xs" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs" aria-label="Send"><ArrowUpIcon /></InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="55%" minSize="35%">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b px-3 py-1.5 text-xs">
            <span className="font-medium">pricing-table.tsx</span>
            <Button size="xs" variant="outline"><CopyIcon data-icon="inline-start" />Copy</Button>
          </div>
          <div className="grid flex-1 grid-cols-3 gap-2 p-3">
            {["Starter", "Pro", "Scale"].map((tier) => (
              <div key={tier} className={cn("flex flex-col gap-1 border p-2 text-[11px]", tier === "Pro" && "border-primary")}>
                <span className="font-medium">{tier}</span>
                <div className="h-1.5 w-2/3 bg-muted" />
                <div className="h-1.5 w-1/2 bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "CommitHistoryDetails",
    description: "Git history with a commit list beside a resizable commit detail view.",
    code: `
const commits = [
  { hash: "a3f9c21", message: "fix: debounce search input", author: "rk" },
  { hash: "7b21e0d", message: "feat: add bulk archive", author: "mt" },
  { hash: "c04d8aa", message: "chore: bump dependencies", author: "rk" },
  { hash: "19ee7f3", message: "docs: webhook retries", author: "sl" },
]

export default function CommitHistoryDetails() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-64 w-full max-w-2xl border">
      <ResizablePanel defaultSize="50%" minSize="35%">
        <div className="flex h-full flex-col divide-y">
          {commits.map((c, i) => (
            <div key={c.hash} className={cn("flex items-center gap-2 px-3 py-2 text-xs", i === 1 && "bg-muted/60")}>
              <GitCommitHorizontalIcon className="size-3.5 shrink-0 text-muted-foreground" />
              <span className="min-w-0 flex-1 truncate">{c.message}</span>
              <span className="font-mono text-[10px] text-muted-foreground">{c.hash}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%" minSize="30%">
        <div className="flex h-full flex-col gap-2 p-3 text-xs">
          <span className="font-medium">feat: add bulk archive</span>
          <span className="font-mono text-[11px] text-muted-foreground">7b21e0d - Mira Toivonen - 2h ago</span>
          <Separator />
          <div className="flex flex-col gap-1 font-mono text-[11px]">
            <span><span className="text-emerald-600">+48</span> src/inbox/bulk-actions.ts</span>
            <span><span className="text-emerald-600">+12</span> <span className="text-red-600">-3</span> src/inbox/toolbar.tsx</span>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "DualCollapsiblePanels",
    description: "Workspace with collapsible left and right panels toggled from a toolbar.",
    code: `
type PanelHandle = {
  collapse: () => void
  expand: () => void
  getSize: () => { asPercentage: number; inPixels: number }
  isCollapsed: () => boolean
  resize: (size: number | string) => void
}

function toggle(panel: PanelHandle | null) {
  if (!panel) return
  if (panel.isCollapsed()) panel.expand()
  else panel.collapse()
}

export default function DualCollapsiblePanels() {
  const leftRef = React.useRef<PanelHandle | null>(null)
  const rightRef = React.useRef<PanelHandle | null>(null)

  return (
    <div className="flex w-full max-w-2xl flex-col border">
      <div className="flex items-center justify-between border-b px-2 py-1">
        <Button size="icon-sm" variant="ghost" aria-label="Toggle explorer" onClick={() => toggle(leftRef.current)}>
          <PanelLeftIcon />
        </Button>
        <span className="text-xs font-medium">landing-page.fig</span>
        <Button size="icon-sm" variant="ghost" aria-label="Toggle inspector" onClick={() => toggle(rightRef.current)}>
          <PanelRightIcon />
        </Button>
      </div>
      <ResizablePanelGroup orientation="horizontal" className="h-56">
        <ResizablePanel panelRef={leftRef} defaultSize="22%" minSize="15%" collapsible>
          <div className="flex h-full items-center justify-center bg-muted/40 text-xs">Explorer</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize="56%" minSize="30%">
          <div className="flex h-full items-center justify-center text-xs text-muted-foreground">Canvas</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel panelRef={rightRef} defaultSize="22%" minSize="15%" collapsible>
          <div className="flex h-full items-center justify-center bg-muted/40 text-xs">Inspector</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}`,
  },
  {
    name: "IconRailCollapsedSize",
    description: "Sidebar that collapses to an icon rail using a collapsed size.",
    code: `
const items = [
  { label: "Home", icon: HomeIcon },
  { label: "Inbox", icon: InboxIcon },
  { label: "Calendar", icon: CalendarIcon },
  { label: "Team", icon: UsersIcon },
]

export default function IconRailCollapsedSize() {
  const [compact, setCompact] = React.useState(false)

  return (
    <ResizablePanelGroup orientation="horizontal" className="h-64 w-full max-w-lg border">
      <ResizablePanel
        defaultSize="30%"
        minSize="22%"
        maxSize="40%"
        collapsible
        collapsedSize="48px"
        onResize={(size) => setCompact(size.inPixels <= 56)}
      >
        <nav className="flex h-full flex-col gap-1 p-2">
          {items.map((item) => (
            <a
              key={item.label}
              href="#"
              title={item.label}
              className={cn("flex items-center gap-2 px-2 py-1.5 text-xs hover:bg-muted", compact && "justify-center px-0")}
            >
              <item.icon className="size-4 shrink-0" />
              {!compact && <span className="truncate">{item.label}</span>}
            </a>
          ))}
        </nav>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="70%">
        <div className="flex h-full items-center justify-center p-4 text-center text-xs text-muted-foreground">
          Drag the sidebar narrower to snap it into an icon rail.
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "ReadingPaneEmptyState",
    description: "Inbox layout with an empty state shown in the reading pane.",
    code: `
export default function ReadingPaneEmptyState() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-72 w-full max-w-2xl border">
      <ResizablePanel defaultSize="38%" minSize="28%">
        <div className="flex h-full flex-col divide-y">
          {["Weekly sync notes", "Your receipt from Parcel", "New login from Chrome"].map((subject) => (
            <div key={subject} className="p-3 text-xs">
              <span className="block truncate">{subject}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="62%" minSize="40%">
        <Empty className="h-full">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <MailOpenIcon />
            </EmptyMedia>
            <EmptyTitle>No message selected</EmptyTitle>
            <EmptyDescription>Choose a conversation from the list to read it here.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "LoadingSkeletonPanels",
    description: "Resizable layout showing skeleton placeholders while data loads.",
    code: `
export default function LoadingSkeletonPanels() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-64 w-full max-w-xl border">
      <ResizablePanel defaultSize="35%" minSize="25%">
        <div className="flex h-full flex-col gap-3 p-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="size-8 shrink-0" />
              <div className="flex flex-1 flex-col gap-1.5">
                <Skeleton className="h-2.5 w-3/4" />
                <Skeleton className="h-2 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="65%" minSize="40%">
        <div className="flex h-full flex-col gap-3 p-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Spinner />
            Loading conversation...
          </div>
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "TaskListWithDetail",
    description: "Task manager with checkable tasks and a resizable detail panel.",
    code: `
const initial = [
  { id: 1, title: "Prepare launch checklist", done: true, due: "Today" },
  { id: 2, title: "Review onboarding copy", done: false, due: "Tomorrow" },
  { id: 3, title: "QA mobile checkout", done: false, due: "Fri" },
]

export default function TaskListWithDetail() {
  const [tasks, setTasks] = React.useState(initial)
  const [activeId, setActiveId] = React.useState(2)
  const active = tasks.find((t) => t.id === activeId)!

  return (
    <ResizablePanelGroup orientation="horizontal" className="h-64 w-full max-w-2xl border">
      <ResizablePanel defaultSize="55%" minSize="40%">
        <div className="flex h-full flex-col divide-y">
          {tasks.map((task) => (
            <div
              key={task.id}
              onClick={() => setActiveId(task.id)}
              className={cn("flex cursor-pointer items-center gap-2 px-3 py-2 text-xs", task.id === activeId && "bg-muted/60")}
            >
              <Checkbox
                checked={task.done}
                aria-label={task.title}
                onCheckedChange={(checked) =>
                  setTasks((prev) => prev.map((t) => (t.id === task.id ? { ...t, done: checked === true } : t)))
                }
              />
              <span className={cn("min-w-0 flex-1 truncate", task.done && "text-muted-foreground line-through")}>{task.title}</span>
              <span className="text-[11px] text-muted-foreground">{task.due}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="45%" minSize="30%">
        <div className="flex h-full flex-col gap-2 p-3 text-xs">
          <span className="font-medium">{active.title}</span>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <CalendarIcon className="size-3.5" />
            Due {active.due}
          </div>
          <Badge variant={active.done ? "secondary" : "outline"} className="self-start">
            {active.done ? "Completed" : "Open"}
          </Badge>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "SpreadsheetWithFormatPanel",
    description: "Spreadsheet grid with a resizable cell formatting side panel.",
    code: `
const cols = ["A", "B", "C", "D"]
const rows = [
  ["Region", "Q1", "Q2", "Q3"],
  ["North", "12.4", "14.1", "15.8"],
  ["South", "9.8", "10.2", "11.6"],
  ["West", "7.1", "8.4", "9.9"],
]

export default function SpreadsheetWithFormatPanel() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="h-60 w-full max-w-2xl border">
      <ResizablePanel defaultSize="68%" minSize="45%">
        <div className="grid grid-cols-[24px_repeat(4,minmax(0,1fr))] text-[11px]">
          <span className="border-r border-b bg-muted/60" />
          {cols.map((c) => (
            <span key={c} className="border-r border-b bg-muted/60 px-1 text-center text-muted-foreground">{c}</span>
          ))}
          {rows.map((row, r) => (
            <React.Fragment key={r}>
              <span className="border-r border-b bg-muted/60 text-center text-muted-foreground">{r + 1}</span>
              {row.map((cell, c) => (
                <span
                  key={c}
                  className={cn(
                    "truncate border-r border-b px-1 py-1 tabular-nums",
                    r === 0 && "font-medium",
                    r === 1 && c === 3 && "ring-2 ring-primary ring-inset"
                  )}
                >
                  {cell}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="32%" minSize="22%">
        <div className="flex h-full flex-col gap-2 p-3 text-xs">
          <span className="font-medium">Format cell D2</span>
          <ToggleGroup variant="outline" size="sm" multiple defaultValue={["bold"]}>
            <ToggleGroupItem value="bold" aria-label="Bold"><BoldIcon /></ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic"><ItalicIcon /></ToggleGroupItem>
            <ToggleGroupItem value="percent" aria-label="Percent"><PercentIcon /></ToggleGroupItem>
          </ToggleGroup>
          <span className="text-muted-foreground">Number format: 0.0</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
  {
    name: "DisabledHandleSection",
    description: "Layout where one handle is disabled to keep a fixed header region.",
    code: `
export default function DisabledHandleSection() {
  return (
    <ResizablePanelGroup orientation="vertical" className="h-72 w-full max-w-md border">
      <ResizablePanel defaultSize="20%" minSize="20%" maxSize="20%">
        <div className="flex h-full items-center gap-2 bg-muted/40 px-3 text-xs font-medium">
          <LockIcon className="size-3.5" />
          Fixed toolbar
        </div>
      </ResizablePanel>
      <ResizableHandle disabled />
      <ResizablePanel defaultSize="50%" minSize="20%">
        <div className="flex h-full items-center justify-center text-xs">Timeline</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="30%" minSize="15%">
        <div className="flex h-full items-center justify-center text-xs text-muted-foreground">Properties</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`,
  },
]

export default examples
