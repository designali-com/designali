import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "UserAccountMenu",
    description: "Avatar trigger opening an account menu with profile header, settings links, and sign out.",
    code: `
export default function UserAccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" className="h-auto gap-2 px-2 py-1.5" />}>
        <Avatar size="sm">
          <AvatarFallback>NR</AvatarFallback>
        </Avatar>
        <span className="text-xs font-medium">Nadia Romero</span>
        <ChevronsUpDownIcon className="text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex items-center gap-2 text-foreground">
            <Avatar>
              <AvatarFallback>NR</AvatarFallback>
            </Avatar>
            <div className="grid leading-tight">
              <span className="font-medium">Nadia Romero</span>
              <span className="text-muted-foreground">nadia@northwind.dev</span>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon />
            Settings
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "TableRowActions",
    description: "Icon-only kebab trigger on table rows with edit, duplicate, archive, and destructive delete actions.",
    code: `
const invoices = [
  { id: "INV-2041", customer: "Harbor Studio", amount: "$1,240.00" },
  { id: "INV-2042", customer: "Pinecrest Labs", amount: "$860.50" },
  { id: "INV-2043", customer: "Atlas & Finch", amount: "$3,120.00" },
]

export default function TableRowActions() {
  return (
    <div className="w-full max-w-md divide-y border">
      {invoices.map((invoice) => (
        <div key={invoice.id} className="flex items-center gap-3 px-3 py-2 text-xs">
          <span className="font-mono text-muted-foreground">{invoice.id}</span>
          <span className="flex-1 truncate font-medium">{invoice.customer}</span>
          <span className="tabular-nums">{invoice.amount}</span>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label={"Actions for " + invoice.id} />}>
              <MoreHorizontalIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem>
                <PencilIcon />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CopyIcon />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon />
                Archive
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "FileItemMenuWithMoveSubmenu",
    description: "File manager entry whose menu includes a Move to submenu listing destination folders.",
    code: `
const folders = ["Design reviews", "Client handoff", "Archive 2025", "Shared with me"]

export default function FileItemMenuWithMoveSubmenu() {
  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-3">
      <div className="flex size-9 items-center justify-center bg-muted">
        <FileTextIcon className="size-4 text-muted-foreground" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium">Q3-brand-guidelines.pdf</p>
        <p className="text-xs text-muted-foreground">4.2 MB · Edited 2h ago</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label="File actions" />}>
          <MoreVerticalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuItem>
            <ExternalLinkIcon />
            Open
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PencilIcon />
            Rename
            <DropdownMenuShortcut>F2</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <FolderInputIcon />
              Move to
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-44">
              {folders.map((folder) => (
                <DropdownMenuItem key={folder}>
                  <FolderIcon />
                  {folder}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <FolderPlusIcon />
                New folder...
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <DownloadIcon />
            Download
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <Trash2Icon />
            Move to trash
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}`,
  },
  {
    name: "SortOrderRadioMenu",
    description: "Controlled radio group menu for sorting a list, with the trigger reflecting the active sort.",
    code: `
const options = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "name", label: "Name A–Z" },
  { value: "size", label: "Largest size" },
]

export default function SortOrderRadioMenu() {
  const [sort, setSort] = React.useState("newest")
  const current = options.find((option) => option.value === sort)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        <ArrowUpDownIcon data-icon="inline-start" />
        Sort: {current?.label}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
          <DropdownMenuLabel>Sort by</DropdownMenuLabel>
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "TableColumnVisibility",
    description: "Checkbox menu toggling which columns a data table shows, with a live header preview.",
    code: `
const columns = ["Name", "Email", "Role", "Last active", "Status"]

export default function TableColumnVisibility() {
  const [visible, setVisible] = React.useState(["Name", "Email", "Status"])

  const toggle = (column: string, checked: boolean) =>
    setVisible((prev) =>
      checked ? columns.filter((c) => prev.includes(c) || c === column) : prev.filter((c) => c !== column)
    )

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
            <Columns3Icon data-icon="inline-start" />
            Columns
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
              {columns.map((column) => (
                <DropdownMenuCheckboxItem
                  key={column}
                  checked={visible.includes(column)}
                  disabled={column === "Name"}
                  onCheckedChange={(checked) => toggle(column, checked)}
                >
                  {column}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex border bg-muted/50 text-xs font-medium text-muted-foreground">
        {visible.map((column) => (
          <div key={column} className="flex-1 truncate border-e px-2 py-2 last:border-e-0">
            {column}
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "ThemeSwitcherMenu",
    description: "Icon button menu for choosing light, dark, or system theme with radio items.",
    code: `
const themes = [
  { value: "light", label: "Light", icon: SunIcon },
  { value: "dark", label: "Dark", icon: MoonIcon },
  { value: "system", label: "System", icon: MonitorIcon },
]

export default function ThemeSwitcherMenu() {
  const [theme, setTheme] = React.useState("system")
  const Active = themes.find((t) => t.value === theme)?.icon ?? MonitorIcon

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="icon" aria-label="Change theme" />}>
        <Active />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36">
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {themes.map((t) => (
            <DropdownMenuRadioItem key={t.value} value={t.value}>
              <t.icon />
              {t.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "WorkspaceSwitcherMenu",
    description: "Workspace switcher listing teams with initials, plan labels, and a create workspace action.",
    code: `
const workspaces = [
  { id: "acme", name: "Lumen Collective", plan: "Pro", color: "bg-violet-500" },
  { id: "orbit", name: "Orbit Analytics", plan: "Team", color: "bg-emerald-500" },
  { id: "side", name: "Weekend Projects", plan: "Free", color: "bg-amber-500" },
]

export default function WorkspaceSwitcherMenu() {
  const [active, setActive] = React.useState("acme")
  const current = workspaces.find((w) => w.id === active)!

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className="w-60 justify-start gap-2 px-2" />}>
        <span className={cn("flex size-6 items-center justify-center text-[10px] font-semibold text-white", current.color)}>
          {current.name.slice(0, 2).toUpperCase()}
        </span>
        <span className="flex-1 truncate text-start">{current.name}</span>
        <ChevronsUpDownIcon className="text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
          {workspaces.map((w, index) => (
            <DropdownMenuItem key={w.id} onClick={() => setActive(w.id)}>
              <span className={cn("flex size-5 items-center justify-center text-[9px] font-semibold text-white", w.color)}>
                {w.name.slice(0, 2).toUpperCase()}
              </span>
              <span className="flex-1">{w.name}</span>
              {w.id === active ? <CheckIcon /> : <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <PlusIcon />
          Create workspace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "NotificationPreferencesMenu",
    description: "Checkbox items for notification channels plus a mute-all item that disables the rest.",
    code: `
export default function NotificationPreferencesMenu() {
  const [muted, setMuted] = React.useState(false)
  const [prefs, setPrefs] = React.useState({ mentions: true, comments: true, updates: false })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        {muted ? <BellOffIcon data-icon="inline-start" /> : <BellIcon data-icon="inline-start" />}
        Notifications
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Notify me about</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={prefs.mentions}
            disabled={muted}
            onCheckedChange={(checked) => setPrefs({ ...prefs, mentions: checked })}
          >
            Mentions
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={prefs.comments}
            disabled={muted}
            onCheckedChange={(checked) => setPrefs({ ...prefs, comments: checked })}
          >
            Replies to my comments
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={prefs.updates}
            disabled={muted}
            onCheckedChange={(checked) => setPrefs({ ...prefs, updates: checked })}
          >
            Product updates
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={muted} onCheckedChange={setMuted}>
          Mute all for 8 hours
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "ShareDocumentMenu",
    description: "Share menu with copy link feedback and a nested Export as submenu.",
    code: `
export default function ShareDocumentMenu() {
  const [copied, setCopied] = React.useState(false)

  return (
    <DropdownMenu onOpenChange={(open) => !open && setCopied(false)}>
      <DropdownMenuTrigger render={<Button />}>
        <Share2Icon data-icon="inline-start" />
        Share
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem closeOnClick={false} onClick={() => setCopied(true)}>
          {copied ? <CheckIcon /> : <LinkIcon />}
          {copied ? "Link copied" : "Copy link"}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MailIcon />
          Send by email
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CodeIcon />
          Embed
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <FileDownIcon />
            Export as
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>PDF document</DropdownMenuItem>
            <DropdownMenuItem>Markdown</DropdownMenuItem>
            <DropdownMenuItem>HTML page</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "IssueStatusPicker",
    description: "Issue tracker status picker with colored status dots and keyboard number shortcuts.",
    code: `
const statuses = [
  { value: "backlog", label: "Backlog", dot: "border-muted-foreground border-dashed" },
  { value: "todo", label: "Todo", dot: "border-muted-foreground" },
  { value: "progress", label: "In progress", dot: "border-amber-500 bg-amber-500/40" },
  { value: "review", label: "In review", dot: "border-sky-500 bg-sky-500/40" },
  { value: "done", label: "Done", dot: "border-emerald-500 bg-emerald-500" },
]

export default function IssueStatusPicker() {
  const [status, setStatus] = React.useState("progress")
  const current = statuses.find((s) => s.value === status)!

  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-3 text-xs">
      <span className="font-mono text-muted-foreground">DSG-318</span>
      <span className="flex-1 truncate font-medium">Polish empty states on billing page</span>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
          <span className={cn("size-2.5 rounded-full border-2", current.dot)} />
          {current.label}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuRadioGroup value={status} onValueChange={setStatus}>
            {statuses.map((s, index) => (
              <DropdownMenuRadioItem key={s.value} value={s.value}>
                <span className={cn("size-2.5 rounded-full border-2", s.dot)} />
                {s.label}
                <DropdownMenuShortcut className="me-4">{index + 1}</DropdownMenuShortcut>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}`,
  },
  {
    name: "AssigneeMultiSelectMenu",
    description: "Multi-select assignee menu with avatar initials and a stacked avatar trigger.",
    code: `
const people = ["Priya Natarajan", "Owen Clarke", "Sofia Marin", "Kenji Watanabe", "Lena Hoffmann"]

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")

export default function AssigneeMultiSelectMenu() {
  const [selected, setSelected] = React.useState(["Priya Natarajan", "Sofia Marin"])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className="gap-2" />}>
        {selected.length ? (
          <AvatarGroup>
            {selected.slice(0, 3).map((name) => (
              <Avatar key={name} size="sm">
                <AvatarFallback>{initialsOf(name)}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
        ) : (
          <UserPlusIcon />
        )}
        {selected.length ? selected.length + " assigned" : "Assign"}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Assignees</DropdownMenuLabel>
          {people.map((name) => (
            <DropdownMenuCheckboxItem
              key={name}
              checked={selected.includes(name)}
              onCheckedChange={(checked) =>
                setSelected((prev) => (checked ? [...prev, name] : prev.filter((n) => n !== name)))
              }
            >
              <Avatar size="sm">
                <AvatarFallback>{initialsOf(name)}</AvatarFallback>
              </Avatar>
              {name}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "EditorInsertBlockMenu",
    description: "Insert block menu for a document editor with icon tiles and helper descriptions.",
    code: `
const blocks = [
  { label: "Heading", hint: "Big section title", icon: Heading1Icon },
  { label: "Bulleted list", hint: "Simple unordered list", icon: ListIcon },
  { label: "To-do list", hint: "Track tasks with checkboxes", icon: ListChecksIcon },
  { label: "Code block", hint: "Syntax highlighted snippet", icon: CodeIcon },
  { label: "Table", hint: "Rows and columns of data", icon: TableIcon },
  { label: "Callout", hint: "Make text stand out", icon: MegaphoneIcon },
]

export default function EditorInsertBlockMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
        <PlusIcon data-icon="inline-start" />
        Insert
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Basic blocks</DropdownMenuLabel>
          {blocks.map((block) => (
            <DropdownMenuItem key={block.label} className="gap-3">
              <span className="flex size-8 items-center justify-center border bg-background">
                <block.icon />
              </span>
              <span className="grid">
                <span className="font-medium">{block.label}</span>
                <span className="text-muted-foreground">{block.hint}</span>
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "SplitDeployButton",
    description: "Split button pairing a primary deploy action with a chevron menu of alternate deploy targets.",
    code: `
export default function SplitDeployButton() {
  return (
    <ButtonGroup>
      <Button>
        <RocketIcon data-icon="inline-start" />
        Deploy to production
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button size="icon" aria-label="More deploy options" />}>
          <ChevronDownIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Deploy target</DropdownMenuLabel>
            <DropdownMenuItem>
              <GlobeIcon />
              Production
              <DropdownMenuShortcut>⌘↵</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FlaskConicalIcon />
              Staging
            </DropdownMenuItem>
            <DropdownMenuItem>
              <GitBranchIcon />
              Preview branch
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <RotateCcwIcon />
            Roll back last deploy
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}`,
  },
  {
    name: "ExportWithLoadingState",
    description: "Export menu whose items stay open and show a spinner while a file is being prepared.",
    code: `
const formats = [
  { id: "csv", label: "CSV", hint: "Spreadsheet friendly" },
  { id: "xlsx", label: "Excel", hint: "With formatting" },
  { id: "json", label: "JSON", hint: "For developers" },
]

export default function ExportWithLoadingState() {
  const [busy, setBusy] = React.useState<string | null>(null)
  const [done, setDone] = React.useState<string | null>(null)

  const run = (id: string) => {
    setBusy(id)
    setDone(null)
    setTimeout(() => {
      setBusy(null)
      setDone(id)
    }, 1200)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        <DownloadIcon data-icon="inline-start" />
        Export
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Export 1,284 rows</DropdownMenuLabel>
          {formats.map((f) => (
            <DropdownMenuItem key={f.id} closeOnClick={false} disabled={busy !== null} onClick={() => run(f.id)}>
              <span className="grid flex-1">
                <span className="font-medium">{f.label}</span>
                <span className="text-muted-foreground">{f.hint}</span>
              </span>
              {busy === f.id && <Spinner />}
              {done === f.id && <CheckIcon className="text-emerald-600" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "PlanGatedMenuItems",
    description: "Menu where premium actions are disabled with lock icons and an upgrade badge.",
    code: `
export default function PlanGatedMenuItems() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        <SparklesIcon data-icon="inline-start" />
        AI actions
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Free</DropdownMenuLabel>
          <DropdownMenuItem>
            <TextIcon />
            Fix spelling and grammar
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ScissorsIcon />
            Make shorter
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex items-center justify-between">
            Pro
            <Badge variant="secondary">Upgrade</Badge>
          </DropdownMenuLabel>
          <DropdownMenuItem disabled>
            <LanguagesIcon />
            Translate document
            <LockIcon className="ms-auto" />
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <FileTextIcon />
            Summarize thread
            <LockIcon className="ms-auto" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "ConfirmDestructiveItem",
    description: "Delete item that stays open and asks for a second click before confirming the action.",
    code: `
export default function ConfirmDestructiveItem() {
  const [armed, setArmed] = React.useState(false)
  const [deleted, setDeleted] = React.useState(false)

  if (deleted) {
    return (
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        Project deleted.
        <Button variant="link" size="xs" onClick={() => setDeleted(false)}>
          Undo
        </Button>
      </div>
    )
  }

  return (
    <DropdownMenu onOpenChange={(open) => !open && setArmed(false)}>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Project options
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuItem>
          <PencilIcon />
          Rename project
        </DropdownMenuItem>
        <DropdownMenuItem>
          <UsersIcon />
          Transfer ownership
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          closeOnClick={armed}
          onClick={() => (armed ? setDeleted(true) : setArmed(true))}
        >
          <Trash2Icon />
          {armed ? "Click again to confirm" : "Delete project"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "ControlledOpenState",
    description: "Menu whose open state is controlled externally, with the last chosen action logged below.",
    code: `
export default function ControlledOpenState() {
  const [open, setOpen] = React.useState(false)
  const [last, setLast] = React.useState("Nothing yet")

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger render={<Button variant="outline" />}>
            Quick actions
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44">
            {["New note", "New reminder", "New checklist"].map((action) => (
              <DropdownMenuItem key={action} onClick={() => setLast(action)}>
                {action}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Open from outside
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Menu is {open ? "open" : "closed"} · Last action: {last}
      </p>
    </div>
  )
}`,
  },
  {
    name: "HoverOpenNavMenu",
    description: "Marketing nav where product and resource menus open on hover with a short delay.",
    code: `
const products = [
  { label: "Analytics", hint: "Dashboards and reports", icon: ChartLineIcon },
  { label: "Automations", hint: "Workflows without code", icon: WorkflowIcon },
  { label: "Integrations", hint: "Connect your stack", icon: PlugIcon },
]

export default function HoverOpenNavMenu() {
  return (
    <nav className="flex items-center gap-1 border px-2 py-1">
      <span className="me-2 text-xs font-semibold">Quanta</span>
      <DropdownMenu>
        <DropdownMenuTrigger openOnHover delay={80} render={<Button variant="ghost" size="sm" />}>
          Product
          <ChevronDownIcon data-icon="inline-end" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-60">
          {products.map((p) => (
            <DropdownMenuItem key={p.label} className="items-start">
              <p.icon className="mt-0.5" />
              <span className="grid">
                <span className="font-medium">{p.label}</span>
                <span className="text-muted-foreground">{p.hint}</span>
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger openOnHover delay={80} render={<Button variant="ghost" size="sm" />}>
          Resources
          <ChevronDownIcon data-icon="inline-end" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44">
          <DropdownMenuItem>Documentation</DropdownMenuItem>
          <DropdownMenuItem>Changelog</DropdownMenuItem>
          <DropdownMenuItem>Community forum</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" size="sm">
        Pricing
      </Button>
    </nav>
  )
}`,
  },
  {
    name: "ChatMessageActions",
    description: "Chat bubble with a hover-revealed menu containing quick reactions, reply, pin, and delete.",
    code: `
const reactions = ["👍", "❤️", "😂", "🎉", "👀"]

export default function ChatMessageActions() {
  const [reaction, setReaction] = React.useState<string | null>(null)

  return (
    <div className="group flex w-full max-w-sm items-start gap-2">
      <Avatar size="sm">
        <AvatarFallback>TM</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-medium">Tomás Medina</span>
          <span className="text-muted-foreground">10:42</span>
        </div>
        <p className="mt-1 bg-muted px-3 py-2 text-xs">The new onboarding flow is live on staging. Can someone run through it before lunch?</p>
        {reaction && <span className="mt-1 inline-flex border px-1.5 text-xs">{reaction} 1</span>}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="ghost" size="icon-xs" aria-label="Message actions" className="opacity-0 group-hover:opacity-100 data-popup-open:opacity-100" />}
        >
          <MoreHorizontalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <div className="flex justify-between px-1 py-1">
            {reactions.map((emoji) => (
              <DropdownMenuItem key={emoji} className="size-8 justify-center p-0 text-base" onClick={() => setReaction(emoji)}>
                {emoji}
              </DropdownMenuItem>
            ))}
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <ReplyIcon />
            Reply in thread
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            Copy text
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PinIcon />
            Pin to channel
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <Trash2Icon />
            Delete message
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}`,
  },
  {
    name: "CalendarEventRsvpMenu",
    description: "Calendar event card with RSVP radio choices and edit actions in one menu.",
    code: `
const rsvpLabels: Record<string, string> = { yes: "Going", maybe: "Maybe", no: "Declined" }

export default function CalendarEventRsvpMenu() {
  const [rsvp, setRsvp] = React.useState("maybe")

  return (
    <div className="flex w-full max-w-xs border-s-4 border-s-sky-500 bg-muted/40 p-3">
      <div className="flex-1">
        <p className="text-xs font-medium">Design critique</p>
        <p className="text-xs text-muted-foreground">Thu, 14:00 – 15:00 · Room Juniper</p>
        <Badge variant="outline" className="mt-2">
          {rsvpLabels[rsvp]}
        </Badge>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Event options" />}>
          <MoreVerticalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuRadioGroup value={rsvp} onValueChange={setRsvp}>
            <DropdownMenuLabel>Your response</DropdownMenuLabel>
            <DropdownMenuRadioItem value="yes">Yes, I&apos;ll attend</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="maybe">Maybe</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="no">Decline</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <PencilIcon />
            Edit event
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CalendarPlusIcon />
            Duplicate
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}`,
  },
  {
    name: "NotificationInboxMenu",
    description: "Bell icon with unread count opening an inbox of notifications and a mark-all-read action.",
    code: `
const initial = [
  { id: 1, who: "Aria Bennett", text: "commented on Pricing v3", time: "2m", unread: true },
  { id: 2, who: "Marcus Lee", text: "assigned you DSG-412", time: "1h", unread: true },
  { id: 3, who: "Billing", text: "Invoice #8812 is ready", time: "Yesterday", unread: false },
]

export default function NotificationInboxMenu() {
  const [items, setItems] = React.useState(initial)
  const unread = items.filter((i) => i.unread).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="icon" aria-label="Notifications" className="relative" />}>
        <BellIcon />
        {unread > 0 && (
          <span className="absolute -end-1 -top-1 flex size-4 items-center justify-center bg-destructive text-[10px] text-white">
            {unread}
          </span>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex items-center justify-between">
            Notifications
            <span>{unread} unread</span>
          </DropdownMenuLabel>
          {items.map((item) => (
            <DropdownMenuItem
              key={item.id}
              className="items-start"
              onClick={() => setItems((prev) => prev.map((p) => (p.id === item.id ? { ...p, unread: false } : p)))}
            >
              <span className={cn("mt-1.5 size-1.5 shrink-0 rounded-full", item.unread ? "bg-sky-500" : "bg-transparent")} />
              <span className="flex-1">
                <span className="font-medium">{item.who}</span> {item.text}
              </span>
              <span className="text-muted-foreground">{item.time}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          closeOnClick={false}
          disabled={unread === 0}
          onClick={() => setItems((prev) => prev.map((p) => ({ ...p, unread: false })))}
        >
          <CheckCheckIcon />
          Mark all as read
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "DashboardViewOptions",
    description: "View options combining a layout radio group, density submenu, and widget visibility checkboxes.",
    code: `
export default function DashboardViewOptions() {
  const [layout, setLayout] = React.useState("grid")
  const [density, setDensity] = React.useState("comfortable")
  const [showSparklines, setShowSparklines] = React.useState(true)
  const [showTargets, setShowTargets] = React.useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
        <SlidersHorizontalIcon data-icon="inline-start" />
        View
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuRadioGroup value={layout} onValueChange={setLayout}>
          <DropdownMenuLabel>Layout</DropdownMenuLabel>
          <DropdownMenuRadioItem value="grid">
            <LayoutGridIcon />
            Grid
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="list">
            <ListIcon />
            List
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Rows3Icon />
            Density
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={density} onValueChange={setDensity}>
              <DropdownMenuRadioItem value="compact">Compact</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="comfortable">Comfortable</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="spacious">Spacious</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Widgets</DropdownMenuLabel>
          <DropdownMenuCheckboxItem checked={showSparklines} onCheckedChange={setShowSparklines}>
            Sparklines
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showTargets} onCheckedChange={setShowTargets}>
            Goal targets
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "DateRangePresetMenu",
    description: "Analytics date range presets in a radio menu with a custom range option.",
    code: `
const presets = [
  { value: "today", label: "Today" },
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "qtd", label: "Quarter to date" },
  { value: "ytd", label: "Year to date" },
]

export default function DateRangePresetMenu() {
  const [range, setRange] = React.useState("30d")
  const label = presets.find((p) => p.value === range)?.label ?? "Custom range"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className="w-48 justify-start" />}>
        <CalendarIcon data-icon="inline-start" />
        <span className="flex-1 text-start">{label}</span>
        <ChevronDownIcon className="text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuRadioGroup value={range} onValueChange={setRange}>
          {presets.map((p) => (
            <DropdownMenuRadioItem key={p.value} value={p.value}>
              {p.label}
            </DropdownMenuRadioItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="custom">
            <CalendarRangeIcon />
            Custom range...
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "LabelFilterWithCounts",
    description: "Filter menu with per-label counts, a selected count badge on the trigger, and a clear action.",
    code: `
const labels = [
  { name: "Bug", count: 24, color: "bg-red-500" },
  { name: "Feature", count: 41, color: "bg-violet-500" },
  { name: "Docs", count: 9, color: "bg-sky-500" },
  { name: "Performance", count: 6, color: "bg-amber-500" },
]

export default function LabelFilterWithCounts() {
  const [selected, setSelected] = React.useState<string[]>(["Bug"])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="sm" className="border-dashed" />}>
        <ListFilterIcon data-icon="inline-start" />
        Labels
        {selected.length > 0 && <Badge variant="secondary">{selected.length}</Badge>}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          {labels.map((label) => (
            <DropdownMenuCheckboxItem
              key={label.name}
              checked={selected.includes(label.name)}
              onCheckedChange={(checked) =>
                setSelected((prev) => (checked ? [...prev, label.name] : prev.filter((n) => n !== label.name)))
              }
            >
              <span className={cn("size-2 rounded-full", label.color)} />
              {label.name}
              <span className="ms-auto tabular-nums text-muted-foreground">{label.count}</span>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled={selected.length === 0} onClick={() => setSelected([])} className="justify-center">
          Clear filters
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "ProjectCardMenu",
    description: "Project card with progress and a corner menu for favorite, settings, and leave actions.",
    code: `
export default function ProjectCardMenu() {
  const [favorite, setFavorite] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="size-8 bg-gradient-to-br from-fuchsia-500 to-orange-400" />
          <div>
            <p className="flex items-center gap-1 text-xs font-medium">
              Mobile checkout
              {favorite && <StarIcon className="size-3 fill-amber-400 text-amber-400" />}
            </p>
            <p className="text-xs text-muted-foreground">12 tasks · 4 members</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="ghost" size="icon-xs" aria-label="Project menu" />}>
            <MoreHorizontalIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem onClick={() => setFavorite(!favorite)}>
              <StarIcon />
              {favorite ? "Remove favorite" : "Add to favorites"}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon />
              Project settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserPlusIcon />
              Invite members
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOutIcon />
              Leave project
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="h-1.5 bg-muted">
        <div className="h-full w-2/3 bg-primary" />
      </div>
      <p className="text-xs text-muted-foreground">68% complete · Due Nov 28</p>
    </div>
  )
}`,
  },
  {
    name: "BreadcrumbOverflowMenu",
    description: "Breadcrumb trail that collapses middle folders into an ellipsis dropdown.",
    code: `
const hidden = ["Clients", "Northwind", "2026 campaigns"]

export default function BreadcrumbOverflowMenu() {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-muted-foreground">
      <a href="#" className="hover:text-foreground">
        Drive
      </a>
      <ChevronRightIcon className="size-3.5" />
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="icon-xs" aria-label="Show hidden folders" />}>
          <EllipsisIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44">
          {hidden.map((folder) => (
            <DropdownMenuItem key={folder} nativeButton={false} render={<a href="#" />}>
              <FolderIcon />
              {folder}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <ChevronRightIcon className="size-3.5" />
      <a href="#" className="hover:text-foreground">
        Spring launch
      </a>
      <ChevronRightIcon className="size-3.5" />
      <span className="font-medium text-foreground">Hero assets</span>
    </nav>
  )
}`,
  },
  {
    name: "MobileHamburgerMenu",
    description: "Compact mobile header whose hamburger opens navigation links rendered as anchors.",
    code: `
const links = [
  { label: "Dashboard", icon: LayoutDashboardIcon, active: true },
  { label: "Orders", icon: ShoppingBagIcon, active: false },
  { label: "Customers", icon: UsersIcon, active: false },
  { label: "Reports", icon: ChartBarIcon, active: false },
]

export default function MobileHamburgerMenu() {
  return (
    <header className="flex w-full max-w-xs items-center justify-between border px-3 py-2">
      <span className="text-xs font-semibold">Fernway Admin</span>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Open navigation" />}>
          <MenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {links.map((link) => (
            <DropdownMenuItem
              key={link.label}
              nativeButton={false}
              render={<a href="#" aria-current={link.active ? "page" : undefined} />}
              className={cn(link.active && "font-medium")}
            >
              <link.icon />
              {link.label}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem nativeButton={false} render={<a href="#" />}>
            <LifeBuoyIcon />
            Help center
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}`,
  },
  {
    name: "CanvasZoomMenu",
    description: "Design tool zoom control with zoom steps, fit options, and shortcut hints.",
    code: `
const levels = [50, 100, 150, 200]

export default function CanvasZoomMenu() {
  const [zoom, setZoom] = React.useState(100)

  return (
    <div className="flex items-center gap-1 border p-1">
      <Button variant="ghost" size="icon-xs" aria-label="Zoom out" onClick={() => setZoom((z) => Math.max(10, z - 10))}>
        <MinusIcon />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="xs" className="w-16 tabular-nums" />}>
          {zoom}%
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-44">
          <DropdownMenuItem closeOnClick={false} onClick={() => setZoom((z) => z + 10)}>
            Zoom in
            <DropdownMenuShortcut>⌘+</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem closeOnClick={false} onClick={() => setZoom((z) => Math.max(10, z - 10))}>
            Zoom out
            <DropdownMenuShortcut>⌘-</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setZoom(84)}>
            Zoom to fit
            <DropdownMenuShortcut>⇧1</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={String(zoom)} onValueChange={(value) => setZoom(Number(value))}>
            {levels.map((level) => (
              <DropdownMenuRadioItem key={level} value={String(level)}>
                {level}%
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" size="icon-xs" aria-label="Zoom in" onClick={() => setZoom((z) => z + 10)}>
        <PlusIcon />
      </Button>
    </div>
  )
}`,
  },
  {
    name: "MenuSidePlacement",
    description: "Four triggers demonstrating the content opening on the top, right, bottom, and left sides.",
    code: `
const sides = ["top", "right", "bottom", "left"] as const

export default function MenuSidePlacement() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {sides.map((side) => (
        <DropdownMenu key={side}>
          <DropdownMenuTrigger render={<Button variant="outline" className="capitalize" />}>
            {side}
          </DropdownMenuTrigger>
          <DropdownMenuContent side={side} sideOffset={8} className="w-36">
            <DropdownMenuItem>Rename</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem>Archive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  )
}`,
  },
  {
    name: "EmailMoveToNestedMenu",
    description: "Email toolbar menu with two levels of nested submenus for labels and folders.",
    code: `
export default function EmailMoveToNestedMenu() {
  return (
    <div className="flex items-center gap-1 border p-1">
      <Button variant="ghost" size="icon-sm" aria-label="Archive">
        <ArchiveIcon />
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Delete">
        <Trash2Icon />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="sm" />}>
          <FolderInputIcon data-icon="inline-start" />
          Move
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44">
          <DropdownMenuItem>
            <InboxIcon />
            Inbox
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <FolderIcon />
              Projects
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-40">
              <DropdownMenuItem>Harbor redesign</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Clients</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-36">
                  <DropdownMenuItem>Willow & Co</DropdownMenuItem>
                  <DropdownMenuItem>Brightside</DropdownMenuItem>
                  <DropdownMenuItem>Kestrel Labs</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuItem>Internal</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <ReceiptIcon />
            Receipts
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <ShieldAlertIcon />
            Report spam
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}`,
  },
  {
    name: "RepositoryCloneMenu",
    description: "Code button for a repository with protocol choice, copyable clone URL, and download options.",
    code: `
const urls: Record<string, string> = {
  https: "https://git.example.dev/lumen/web-app.git",
  ssh: "git@git.example.dev:lumen/web-app.git",
}

export default function RepositoryCloneMenu() {
  const [protocol, setProtocol] = React.useState("https")
  const [copied, setCopied] = React.useState(false)

  return (
    <DropdownMenu onOpenChange={() => setCopied(false)}>
      <DropdownMenuTrigger render={<Button />}>
        <CodeIcon data-icon="inline-start" />
        Code
        <ChevronDownIcon data-icon="inline-end" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuRadioGroup value={protocol} onValueChange={setProtocol}>
          <DropdownMenuLabel>Clone with</DropdownMenuLabel>
          <DropdownMenuRadioItem value="https" closeOnClick={false}>
            HTTPS
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ssh" closeOnClick={false}>
            SSH
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuItem closeOnClick={false} onClick={() => setCopied(true)} className="mx-1 my-1 border bg-muted/50 font-mono">
          <span className="flex-1 truncate">{urls[protocol]}</span>
          {copied ? <CheckIcon /> : <CopyIcon />}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <MonitorIcon />
          Open with desktop app
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileArchiveIcon />
          Download ZIP
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "ProductSizePicker",
    description: "Checkout size selector with out-of-stock sizes disabled and low stock hints.",
    code: `
const sizes = [
  { value: "xs", label: "XS", stock: 0 },
  { value: "s", label: "S", stock: 12 },
  { value: "m", label: "M", stock: 3 },
  { value: "l", label: "L", stock: 8 },
  { value: "xl", label: "XL", stock: 0 },
]

export default function ProductSizePicker() {
  const [size, setSize] = React.useState("")

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center gap-3">
        <span className="size-12 bg-gradient-to-br from-slate-300 to-slate-500" />
        <div>
          <p className="text-xs font-medium">Merino crew sweater</p>
          <p className="text-xs text-muted-foreground">$89.00 · Charcoal</p>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" className="w-full justify-between" />}>
          {size ? "Size " + size.toUpperCase() : "Select a size"}
          <ChevronDownIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value={size} onValueChange={setSize}>
            {sizes.map((s) => (
              <DropdownMenuRadioItem key={s.value} value={s.value} disabled={s.stock === 0}>
                <span className="w-6 font-medium">{s.label}</span>
                <span className="text-muted-foreground">
                  {s.stock === 0 ? "Sold out" : s.stock < 5 ? "Only " + s.stock + " left" : "In stock"}
                </span>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button disabled={!size}>Add to bag</Button>
    </div>
  )
}`,
  },
  {
    name: "OrderStatusActions",
    description: "Admin order row where menu actions update the fulfillment status badge.",
    code: `
const statusVariant: Record<string, "secondary" | "default" | "destructive" | "outline"> = {
  Pending: "outline",
  Shipped: "secondary",
  Delivered: "default",
  Refunded: "destructive",
}

export default function OrderStatusActions() {
  const [status, setStatus] = React.useState("Pending")

  return (
    <div className="flex w-full max-w-md items-center gap-3 border p-3 text-xs">
      <div className="flex-1">
        <p className="font-medium">#10482 · Elena Vasquez</p>
        <p className="text-muted-foreground">3 items · $214.30</p>
      </div>
      <Badge variant={statusVariant[status]}>{status}</Badge>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
          Actions
          <ChevronDownIcon data-icon="inline-end" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Fulfillment</DropdownMenuLabel>
            <DropdownMenuItem disabled={status !== "Pending"} onClick={() => setStatus("Shipped")}>
              <TruckIcon />
              Mark as shipped
            </DropdownMenuItem>
            <DropdownMenuItem disabled={status !== "Shipped"} onClick={() => setStatus("Delivered")}>
              <PackageCheckIcon />
              Mark as delivered
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PrinterIcon />
              Print packing slip
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" disabled={status === "Refunded"} onClick={() => setStatus("Refunded")}>
            <RotateCcwIcon />
            Refund order
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}`,
  },
  {
    name: "ScrollableCountryMenu",
    description: "Long grouped list of countries constrained to a scrollable max height.",
    code: `
const regions = [
  { name: "Europe", countries: ["Austria", "Belgium", "Denmark", "Finland", "Ireland", "Portugal"] },
  { name: "Americas", countries: ["Argentina", "Brazil", "Canada", "Chile", "Mexico"] },
  { name: "Asia Pacific", countries: ["Australia", "Japan", "New Zealand", "Singapore", "South Korea"] },
]

export default function ScrollableCountryMenu() {
  const [country, setCountry] = React.useState("Portugal")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className="w-48 justify-between" />}>
        <span className="flex items-center gap-2">
          <MapPinIcon />
          {country}
        </span>
        <ChevronDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-64">
        <DropdownMenuRadioGroup value={country} onValueChange={setCountry}>
          {regions.map((region, index) => (
            <DropdownMenuGroup key={region.name}>
              {index > 0 && <DropdownMenuSeparator />}
              <DropdownMenuLabel>{region.name}</DropdownMenuLabel>
              {region.countries.map((c) => (
                <DropdownMenuRadioItem key={c} value={c}>
                  {c}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuGroup>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "TextColorSwatchMenu",
    description: "Editor toolbar menu presenting a grid of color swatches as menu items.",
    code: `
const colors = [
  { name: "Default", className: "bg-foreground" },
  { name: "Gray", className: "bg-zinc-400" },
  { name: "Red", className: "bg-red-500" },
  { name: "Orange", className: "bg-orange-500" },
  { name: "Amber", className: "bg-amber-400" },
  { name: "Green", className: "bg-emerald-500" },
  { name: "Teal", className: "bg-teal-500" },
  { name: "Blue", className: "bg-blue-500" },
  { name: "Violet", className: "bg-violet-500" },
  { name: "Pink", className: "bg-pink-500" },
]

export default function TextColorSwatchMenu() {
  const [color, setColor] = React.useState(colors[0]!)

  return (
    <div className="flex items-center gap-1 border p-1">
      <Button variant="ghost" size="icon-sm" aria-label="Bold">
        <BoldIcon />
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Italic">
        <ItalicIcon />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="sm" aria-label="Text color" />}>
          <span className="flex flex-col items-center">
            <BaselineIcon />
            <span className={cn("-mt-0.5 h-0.5 w-3.5", color.className)} />
          </span>
          <ChevronDownIcon className="size-3" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 p-1">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Text color</DropdownMenuLabel>
            <div className="grid grid-cols-5 gap-1">
              {colors.map((c) => (
                <DropdownMenuItem
                  key={c.name}
                  aria-label={c.name}
                  onClick={() => setColor(c)}
                  className="justify-center p-1.5"
                >
                  <span className={cn("size-5 ring-offset-1 ring-offset-popover", c.className, c.name === color.name && "ring-2 ring-ring")} />
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}`,
  },
  {
    name: "KpiMetricSwitcher",
    description: "Dashboard KPI card where a metric menu swaps the headline number and trend.",
    code: `
const metrics = [
  { id: "revenue", label: "Revenue", value: "$48,210", trend: "+12.4%" },
  { id: "orders", label: "Orders", value: "1,932", trend: "+4.1%" },
  { id: "aov", label: "Avg. order value", value: "$24.95", trend: "-1.8%" },
  { id: "refunds", label: "Refund rate", value: "2.3%", trend: "-0.4%" },
]

export default function KpiMetricSwitcher() {
  const [metric, setMetric] = React.useState("revenue")
  const current = metrics.find((m) => m.id === metric)!
  const positive = current.trend.startsWith("+")

  return (
    <div className="flex w-full max-w-xs flex-col gap-2 border p-4">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="xs" className="-ms-2 w-fit text-muted-foreground" />}>
          {current.label}
          <ChevronDownIcon data-icon="inline-end" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44">
          <DropdownMenuRadioGroup value={metric} onValueChange={setMetric}>
            {metrics.map((m) => (
              <DropdownMenuRadioItem key={m.id} value={m.id}>
                {m.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <p className="text-2xl font-semibold tabular-nums">{current.value}</p>
      <p className={cn("flex items-center gap-1 text-xs", positive ? "text-emerald-600" : "text-destructive")}>
        {positive ? <TrendingUpIcon className="size-3.5" /> : <TrendingDownIcon className="size-3.5" />}
        {current.trend} vs last month
      </p>
    </div>
  )
}`,
  },
  {
    name: "ColumnHeaderMenu",
    description: "Data table column headers with extra-small triggers for sorting, pinning, and hiding columns.",
    code: `
export default function ColumnHeaderMenu() {
  const [sort, setSort] = React.useState<Record<string, string>>({ Plan: "none", MRR: "desc" })

  return (
    <div className="flex w-full max-w-sm border bg-muted/40 text-xs">
      {["Plan", "MRR"].map((column) => (
        <div key={column} className="flex flex-1 items-center justify-between border-e px-2 py-1 last:border-e-0">
          <span className="font-medium">{column}</span>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="ghost" size="icon-xs" aria-label={column + " column options"} />}>
              {sort[column] === "asc" ? <ArrowUpIcon /> : sort[column] === "desc" ? <ArrowDownIcon /> : <ChevronsUpDownIcon />}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuRadioGroup value={sort[column]} onValueChange={(value) => setSort({ ...sort, [column]: value })}>
                <DropdownMenuRadioItem value="asc">
                  <ArrowUpIcon />
                  Ascending
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="desc">
                  <ArrowDownIcon />
                  Descending
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="none">
                  <XIcon />
                  Unsorted
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PinIcon />
                Pin column
              </DropdownMenuItem>
              <DropdownMenuItem>
                <EyeOffIcon />
                Hide column
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ActiveSessionsMenu",
    description: "Security settings list of signed-in devices, each with a menu to rename or revoke the session.",
    code: `
const initialSessions = [
  { id: "a", device: "MacBook Pro · Safari", place: "Lisbon, PT", current: true, icon: LaptopIcon },
  { id: "b", device: "Pixel 9 · Chrome", place: "Porto, PT", current: false, icon: SmartphoneIcon },
  { id: "c", device: "iPad Air · App", place: "Madrid, ES", current: false, icon: TabletIcon },
]

export default function ActiveSessionsMenu() {
  const [sessions, setSessions] = React.useState(initialSessions)

  return (
    <div className="w-full max-w-sm divide-y border">
      {sessions.map((s) => (
        <div key={s.id} className="flex items-center gap-3 p-3 text-xs">
          <s.icon className="size-4 text-muted-foreground" />
          <div className="flex-1">
            <p className="font-medium">{s.device}</p>
            <p className="text-muted-foreground">
              {s.place} · {s.current ? "This device" : "Active 3 days ago"}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Session options" />}>
              <MoreHorizontalIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem>
                <InfoIcon />
                View details
              </DropdownMenuItem>
              <DropdownMenuItem
                variant="destructive"
                disabled={s.current}
                onClick={() => setSessions((prev) => prev.filter((p) => p.id !== s.id))}
              >
                <LogOutIcon />
                Sign out device
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "MemberRoleMenu",
    description: "Team member row with a role dropdown, descriptions per role, and a remove member action.",
    code: `
const roles = [
  { value: "admin", label: "Admin", hint: "Manage billing and members" },
  { value: "editor", label: "Editor", hint: "Create and edit content" },
  { value: "viewer", label: "Viewer", hint: "Read-only access" },
]

export default function MemberRoleMenu() {
  const [role, setRole] = React.useState("editor")

  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-3">
      <Avatar>
        <AvatarFallback>JO</AvatarFallback>
      </Avatar>
      <div className="flex-1 text-xs">
        <p className="font-medium">Jonah Okafor</p>
        <p className="text-muted-foreground">jonah@fieldnote.app</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="sm" className="capitalize" />}>
          {role}
          <ChevronDownIcon data-icon="inline-end" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuRadioGroup value={role} onValueChange={setRole}>
            <DropdownMenuRadioItem value="owner" disabled>
              <span className="grid">
                <span className="font-medium">Owner</span>
                <span className="text-muted-foreground">Only one owner per team</span>
              </span>
            </DropdownMenuRadioItem>
            {roles.map((r) => (
              <DropdownMenuRadioItem key={r.value} value={r.value}>
                <span className="grid">
                  <span className="font-medium">{r.label}</span>
                  <span className="text-muted-foreground">{r.hint}</span>
                </span>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <UserMinusIcon />
            Remove from team
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}`,
  },
  {
    name: "AppLauncherGridMenu",
    description: "App launcher that lays out menu items as a three-column grid of icon tiles.",
    code: `
const apps = [
  { name: "Mail", icon: MailIcon, color: "text-sky-500" },
  { name: "Calendar", icon: CalendarIcon, color: "text-rose-500" },
  { name: "Drive", icon: HardDriveIcon, color: "text-amber-500" },
  { name: "Docs", icon: FileTextIcon, color: "text-blue-500" },
  { name: "Sheets", icon: SheetIcon, color: "text-emerald-500" },
  { name: "Chat", icon: MessageSquareIcon, color: "text-violet-500" },
]

export default function AppLauncherGridMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" size="icon" aria-label="Apps" />}>
        <GripIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 p-2">
        <div className="grid grid-cols-3 gap-1">
          {apps.map((app) => (
            <DropdownMenuItem key={app.name} className="flex-col gap-1.5 py-3">
              <app.icon className={cn("size-6!", app.color)} />
              {app.name}
            </DropdownMenuItem>
          ))}
        </div>
        <DropdownMenuSeparator className="my-2" />
        <DropdownMenuItem className="justify-center">See all apps</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "VersionHistoryMenu",
    description: "Document version history menu listing saved versions with authors and a restore submenu.",
    code: `
const versions = [
  { id: "v12", label: "Current version", who: "You", when: "Just now" },
  { id: "v11", label: "Added pricing table", who: "Ines Duarte", when: "Today, 09:12" },
  { id: "v10", label: "Reworked intro", who: "Caleb Ford", when: "Yesterday, 17:40" },
]

export default function VersionHistoryMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
        <HistoryIcon data-icon="inline-start" />
        History
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Version history</DropdownMenuLabel>
          {versions.map((v, index) =>
            index === 0 ? (
              <DropdownMenuItem key={v.id} disabled>
                <span className="grid">
                  <span className="font-medium">{v.label}</span>
                  <span className="text-muted-foreground">
                    {v.who} · {v.when}
                  </span>
                </span>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuSub key={v.id}>
                <DropdownMenuSubTrigger>
                  <span className="grid">
                    <span className="font-medium">{v.label}</span>
                    <span className="text-muted-foreground">
                      {v.who} · {v.when}
                    </span>
                  </span>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <EyeIcon />
                    Preview
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <RotateCcwIcon />
                    Restore this version
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CopyIcon />
                    Make a copy
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            )
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "TrackAddToPlaylistMenu",
    description: "Music track row with an add-to-playlist submenu that marks playlists containing the track.",
    code: `
const playlists = ["Morning focus", "Late night drives", "Workout mix", "Rainy Sundays"]

export default function TrackAddToPlaylistMenu() {
  const [added, setAdded] = React.useState<string[]>(["Late night drives"])

  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-2">
      <span className="flex size-10 items-center justify-center bg-gradient-to-br from-indigo-500 to-cyan-400">
        <MusicIcon className="size-4 text-white" />
      </span>
      <div className="min-w-0 flex-1 text-xs">
        <p className="truncate font-medium">Paper Lanterns</p>
        <p className="truncate text-muted-foreground">The Quiet Harbors · 3:41</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Track options" />}>
          <MoreHorizontalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>
            <ListPlusIcon />
            Add to queue
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <PlusIcon />
              Add to playlist
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-48">
              {playlists.map((p) => (
                <DropdownMenuCheckboxItem
                  key={p}
                  checked={added.includes(p)}
                  onCheckedChange={(checked) => setAdded((prev) => (checked ? [...prev, p] : prev.filter((x) => x !== p)))}
                >
                  {p}
                </DropdownMenuCheckboxItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusIcon />
                New playlist
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <HeartIcon />
            Save to liked songs
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Share2Icon />
            Share
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}`,
  },
  {
    name: "ChatModelPickerMenu",
    description: "Chat composer with a model picker menu showing speed and capability badges.",
    code: `
const models = [
  { id: "swift", name: "Swift 2", hint: "Fast answers for everyday tasks", badge: "Fast" },
  { id: "atlas", name: "Atlas 4", hint: "Balanced reasoning and speed", badge: "Default" },
  { id: "summit", name: "Summit 4 Pro", hint: "Deep analysis and long documents", badge: "Pro" },
]

export default function ChatModelPickerMenu() {
  const [model, setModel] = React.useState("atlas")
  const current = models.find((m) => m.id === model)!

  return (
    <div className="flex w-full max-w-md flex-col gap-2 border p-2">
      <textarea
        placeholder="Ask anything..."
        rows={2}
        className="resize-none bg-transparent px-1 text-xs outline-none placeholder:text-muted-foreground"
      />
      <div className="flex items-center justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="ghost" size="xs" />}>
            <SparklesIcon data-icon="inline-start" />
            {current.name}
            <ChevronDownIcon data-icon="inline-end" />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" className="w-64">
            <DropdownMenuRadioGroup value={model} onValueChange={setModel}>
              <DropdownMenuLabel>Choose a model</DropdownMenuLabel>
              {models.map((m) => (
                <DropdownMenuRadioItem key={m.id} value={m.id} disabled={m.id === "summit"}>
                  <span className="grid flex-1">
                    <span className="flex items-center gap-2 font-medium">
                      {m.name}
                      <Badge variant={m.id === "summit" ? "outline" : "secondary"}>{m.badge}</Badge>
                    </span>
                    <span className="text-muted-foreground">{m.hint}</span>
                  </span>
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size="icon-sm" aria-label="Send">
          <ArrowUpIcon />
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "PresenceStatusMenu",
    description: "Presence menu for online, away, and do-not-disturb with a clear-after submenu.",
    code: `
const statuses = [
  { value: "online", label: "Online", dot: "bg-emerald-500" },
  { value: "away", label: "Away", dot: "bg-amber-400" },
  { value: "dnd", label: "Do not disturb", dot: "bg-red-500" },
  { value: "invisible", label: "Appear offline", dot: "bg-zinc-400" },
]

export default function PresenceStatusMenu() {
  const [status, setStatus] = React.useState("online")
  const [clearAfter, setClearAfter] = React.useState("never")
  const current = statuses.find((s) => s.value === status)!

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className="gap-2" />}>
        <span className="relative">
          <Avatar size="sm">
            <AvatarFallback>YK</AvatarFallback>
          </Avatar>
          <span className={cn("absolute -end-0.5 -bottom-0.5 size-2.5 rounded-full ring-2 ring-background", current.dot)} />
        </span>
        {current.label}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuRadioGroup value={status} onValueChange={setStatus}>
          <DropdownMenuLabel>Set status</DropdownMenuLabel>
          {statuses.map((s) => (
            <DropdownMenuRadioItem key={s.value} value={s.value}>
              <span className={cn("size-2 rounded-full", s.dot)} />
              {s.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <ClockIcon />
            Clear after
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-36">
            <DropdownMenuRadioGroup value={clearAfter} onValueChange={setClearAfter}>
              <DropdownMenuRadioItem value="30m">30 minutes</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="1h">1 hour</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="today">Today</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="never">Never</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "InsetLabelsMenu",
    description: "Menu using inset items and labels so plain entries align with icon and checkbox rows.",
    code: `
export default function InsetLabelsMenu() {
  const [wrap, setWrap] = React.useState(true)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" />}>View</DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel inset>Editor</DropdownMenuLabel>
          <DropdownMenuCheckboxItem inset checked={wrap} onCheckedChange={setWrap}>
            Word wrap
          </DropdownMenuCheckboxItem>
          <DropdownMenuItem inset>Toggle minimap</DropdownMenuItem>
          <DropdownMenuItem>
            <TerminalIcon />
            Show terminal
            <DropdownMenuShortcut>⌃\`</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel inset>Appearance</DropdownMenuLabel>
          <DropdownMenuItem inset>Zoom in</DropdownMenuItem>
          <DropdownMenuItem inset>Zoom out</DropdownMenuItem>
          <DropdownMenuItem inset>Reset zoom</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "DisabledTriggerMenu",
    description: "Bulk actions menu whose trigger stays disabled until at least one row is selected.",
    code: `
const tasks = ["Write release notes", "Update onboarding emails", "Audit color contrast"]

export default function DisabledTriggerMenu() {
  const [selected, setSelected] = React.useState<string[]>([])

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{selected.length} selected</span>
        <DropdownMenu disabled={selected.length === 0}>
          <DropdownMenuTrigger render={<Button variant="outline" size="sm" disabled={selected.length === 0} />}>
            Bulk actions
            <ChevronDownIcon data-icon="inline-end" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem onClick={() => setSelected([])}>
              <CircleCheckIcon />
              Mark complete
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CalendarIcon />
              Change due date
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive" onClick={() => setSelected([])}>
              <Trash2Icon />
              Delete {selected.length}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="divide-y border">
        {tasks.map((task) => (
          <label key={task} className="flex items-center gap-2 px-3 py-2 text-xs">
            <Checkbox
              checked={selected.includes(task)}
              onCheckedChange={(checked) =>
                setSelected((prev) => (checked ? [...prev, task] : prev.filter((t) => t !== task)))
              }
            />
            {task}
          </label>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "ApiKeyActionsMenu",
    description: "API key list with masked secrets and a menu to reveal, copy, rotate, or revoke a key.",
    code: `
export default function ApiKeyActionsMenu() {
  const [revealed, setRevealed] = React.useState(false)
  const [rotated, setRotated] = React.useState(false)
  const secret = rotated ? "key_demo_44e0" : "key_demo_03a2"

  return (
    <div className="flex w-full max-w-md items-center gap-3 border p-3 text-xs">
      <KeyRoundIcon className="size-4 text-muted-foreground" />
      <div className="min-w-0 flex-1">
        <p className="font-medium">Production server</p>
        <p className="truncate font-mono text-muted-foreground">
          {revealed ? secret : "key_demo_••••••••" + secret.slice(-4)}
        </p>
      </div>
      <Badge variant="outline">{rotated ? "Rotated" : "Active"}</Badge>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Key actions" />}>
          <MoreVerticalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuItem onClick={() => setRevealed(!revealed)}>
            {revealed ? <EyeOffIcon /> : <EyeIcon />}
            {revealed ? "Hide key" : "Reveal key"}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            Copy to clipboard
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setRotated(true)}>
            <RefreshCwIcon />
            Rotate key
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <BanIcon />
            Revoke key
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}`,
  },
]

export default examples
