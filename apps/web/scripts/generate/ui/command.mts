import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "InlineAppLauncher",
    description: "An always-visible command menu embedded in a card for launching workspace apps.",
    code: `
export default function InlineAppLauncher() {
  return (
    <Command className="w-full max-w-sm border shadow-sm">
      <CommandInput placeholder="Search apps and actions..." />
      <CommandList>
        <CommandEmpty>No apps match your search.</CommandEmpty>
        <CommandGroup heading="Apps">
          <CommandItem>
            <MailIcon />
            <span>Mail</span>
          </CommandItem>
          <CommandItem>
            <CalendarIcon />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <FileTextIcon />
            <span>Docs</span>
          </CommandItem>
          <CommandItem>
            <KanbanIcon />
            <span>Boards</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Quick actions">
          <CommandItem>
            <PlusIcon />
            <span>New document</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <UserPlusIcon />
            <span>Invite teammate</span>
            <CommandShortcut>⌘I</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "GlobalShortcutPalette",
    description: "A command dialog toggled with the Cmd/Ctrl+K keyboard shortcut from anywhere on the page.",
    code: `
export default function GlobalShortcutPalette() {
  const [open, setOpen] = React.useState(false)
  const [lastAction, setLastAction] = React.useState<string | null>(null)

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((value) => !value)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  const run = (label: string) => {
    setLastAction(label)
    setOpen(false)
  }

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>{" "}
        to open the command palette
      </p>
      <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
        Open palette
      </Button>
      {lastAction ? (
        <p className="text-xs text-muted-foreground">Last action: {lastAction}</p>
      ) : null}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="What do you need?" />
          <CommandList>
            <CommandEmpty>No commands found.</CommandEmpty>
            <CommandGroup heading="General">
              <CommandItem onSelect={() => run("Go to dashboard")}>
                <LayoutDashboardIcon />
                <span>Go to dashboard</span>
                <CommandShortcut>G D</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => run("Open settings")}>
                <SettingsIcon />
                <span>Open settings</span>
                <CommandShortcut>⌘,</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => run("Toggle sidebar")}>
                <PanelLeftIcon />
                <span>Toggle sidebar</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => run("Sign out")}>
                <LogOutIcon />
                <span>Sign out</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}`,
  },
  {
    name: "ProjectSwitcherPopover",
    description: "A popover project switcher that marks the active project and offers a create action.",
    code: `
const projects = [
  { id: "atlas", name: "Atlas Redesign", team: "Design" },
  { id: "orbit", name: "Orbit API", team: "Platform" },
  { id: "harbor", name: "Harbor Mobile", team: "Mobile" },
  { id: "lumen", name: "Lumen Analytics", team: "Data" },
]

export default function ProjectSwitcherPopover() {
  const [open, setOpen] = React.useState(false)
  const [current, setCurrent] = React.useState("orbit")
  const active = projects.find((project) => project.id === current)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger render={<Button variant="outline" className="w-56 justify-between" />}>
        <span className="flex items-center gap-2 truncate">
          <FolderKanbanIcon />
          {active?.name}
        </span>
        <ChevronsUpDownIcon className="opacity-50" />
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0" align="start">
        <Command>
          <CommandInput placeholder="Find project..." />
          <CommandList>
            <CommandEmpty>No project found.</CommandEmpty>
            <CommandGroup heading="Projects">
              {projects.map((project) => (
                <CommandItem
                  key={project.id}
                  value={project.name}
                  data-checked={project.id === current}
                  onSelect={() => {
                    setCurrent(project.id)
                    setOpen(false)
                  }}
                >
                  <div className="flex flex-col">
                    <span>{project.name}</span>
                    <span className="text-[11px] text-muted-foreground">{project.team}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem onSelect={() => setOpen(false)}>
                <PlusIcon />
                <span>Create project</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "TimezoneCombobox",
    description: "A searchable timezone combobox grouped by region with UTC offsets.",
    code: `
const regions = [
  {
    region: "Americas",
    zones: [
      { id: "America/Los_Angeles", label: "Pacific Time", offset: "UTC-08:00" },
      { id: "America/Chicago", label: "Central Time", offset: "UTC-06:00" },
      { id: "America/New_York", label: "Eastern Time", offset: "UTC-05:00" },
      { id: "America/Sao_Paulo", label: "Brasilia Time", offset: "UTC-03:00" },
    ],
  },
  {
    region: "Europe & Africa",
    zones: [
      { id: "Europe/London", label: "Greenwich Mean Time", offset: "UTC+00:00" },
      { id: "Europe/Berlin", label: "Central European Time", offset: "UTC+01:00" },
      { id: "Africa/Nairobi", label: "East Africa Time", offset: "UTC+03:00" },
    ],
  },
  {
    region: "Asia Pacific",
    zones: [
      { id: "Asia/Kolkata", label: "India Standard Time", offset: "UTC+05:30" },
      { id: "Asia/Tokyo", label: "Japan Standard Time", offset: "UTC+09:00" },
      { id: "Australia/Sydney", label: "Australian Eastern Time", offset: "UTC+10:00" },
    ],
  },
]

export default function TimezoneCombobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("Europe/Berlin")
  const selected = regions.flatMap((r) => r.zones).find((zone) => zone.id === value)

  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <Label>Timezone</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger render={<Button variant="outline" className="w-full justify-between" />}>
          <span className="flex items-center gap-2 truncate">
            <GlobeIcon />
            {selected ? selected.label : "Select timezone"}
          </span>
          <span className="text-xs text-muted-foreground">{selected?.offset}</span>
        </PopoverTrigger>
        <PopoverContent className="w-(--anchor-width) p-0" align="start">
          <Command>
            <CommandInput placeholder="Search city or zone..." />
            <CommandList>
              <CommandEmpty>No timezone found.</CommandEmpty>
              {regions.map((region) => (
                <CommandGroup key={region.region} heading={region.region}>
                  {region.zones.map((zone) => (
                    <CommandItem
                      key={zone.id}
                      value={zone.id + " " + zone.label}
                      onSelect={() => {
                        setValue(zone.id)
                        setOpen(false)
                      }}
                    >
                      <span className="truncate">{zone.label}</span>
                      <CommandShortcut className="tracking-normal">{zone.offset}</CommandShortcut>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <p className="text-xs text-muted-foreground">Used for reminders and meeting invites.</p>
    </div>
  )
}`,
  },
  {
    name: "MultiSelectLabels",
    description: "A multi-select label picker that keeps the list open and shows chosen labels as badges.",
    code: `
const labels = [
  { id: "bug", name: "Bug", color: "bg-red-500" },
  { id: "feature", name: "Feature", color: "bg-violet-500" },
  { id: "docs", name: "Documentation", color: "bg-sky-500" },
  { id: "design", name: "Design", color: "bg-pink-500" },
  { id: "perf", name: "Performance", color: "bg-amber-500" },
  { id: "security", name: "Security", color: "bg-emerald-500" },
]

export default function MultiSelectLabels() {
  const [selected, setSelected] = React.useState<string[]>(["bug", "perf"])

  const toggle = (id: string) =>
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    )

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex min-h-6 flex-wrap gap-1">
        {selected.length === 0 ? (
          <span className="text-xs text-muted-foreground">No labels applied</span>
        ) : (
          labels
            .filter((label) => selected.includes(label.id))
            .map((label) => (
              <Badge key={label.id} variant="outline">
                <span className={cn("size-2 rounded-full", label.color)} />
                {label.name}
              </Badge>
            ))
        )}
      </div>
      <Command className="border">
        <CommandInput placeholder="Apply labels..." />
        <CommandList>
          <CommandEmpty>No labels found.</CommandEmpty>
          <CommandGroup heading={selected.length + " selected"}>
            {labels.map((label) => (
              <CommandItem
                key={label.id}
                value={label.name}
                data-checked={selected.includes(label.id)}
                onSelect={() => toggle(label.id)}
              >
                <span className={cn("size-2.5 rounded-full", label.color)} />
                <span>{label.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}`,
  },
  {
    name: "AssigneePicker",
    description: "An assignee picker listing teammates with avatar initials and their current workload.",
    code: `
const people = [
  { name: "Maya Chen", role: "Frontend", open: 3 },
  { name: "Jonah Reyes", role: "Backend", open: 7 },
  { name: "Priya Natarajan", role: "Design", open: 2 },
  { name: "Elliot Brandt", role: "QA", open: 5 },
  { name: "Sofia Laurent", role: "Product", open: 1 },
]

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
}

export default function AssigneePicker() {
  const [assignee, setAssignee] = React.useState<string | null>("Priya Natarajan")

  return (
    <Command className="w-full max-w-xs border">
      <CommandInput placeholder="Assign to..." />
      <CommandList>
        <CommandEmpty>Nobody with that name.</CommandEmpty>
        <CommandGroup>
          <CommandItem data-checked={assignee === null} onSelect={() => setAssignee(null)}>
            <UserXIcon />
            <span>No assignee</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Team">
          {people.map((person) => (
            <CommandItem
              key={person.name}
              data-checked={assignee === person.name}
              onSelect={() => setAssignee(person.name)}
            >
              <Avatar className="size-6">
                <AvatarFallback className="text-[10px]">{initialsOf(person.name)}</AvatarFallback>
              </Avatar>
              <div className="flex min-w-0 flex-col">
                <span className="truncate">{person.name}</span>
                <span className="text-[11px] text-muted-foreground">
                  {person.role} · {person.open} open
                </span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "EmojiReactionSearch",
    description: "A compact emoji search that filters reactions by name and keyword aliases.",
    code: `
const emojis = [
  { char: "👍", name: "Thumbs up", keywords: ["like", "approve", "yes"] },
  { char: "🎉", name: "Party popper", keywords: ["celebrate", "tada", "launch"] },
  { char: "❤️", name: "Red heart", keywords: ["love", "favorite"] },
  { char: "😂", name: "Tears of joy", keywords: ["funny", "lol", "laugh"] },
  { char: "👀", name: "Eyes", keywords: ["look", "review", "watching"] },
  { char: "🚀", name: "Rocket", keywords: ["ship", "deploy", "fast"] },
  { char: "🔥", name: "Fire", keywords: ["hot", "lit", "trending"] },
  { char: "✅", name: "Check mark", keywords: ["done", "complete"] },
]

export default function EmojiReactionSearch() {
  const [picked, setPicked] = React.useState<string[]>([])

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <div className="flex h-8 items-center gap-1 border px-2 text-sm">
        <span className="text-xs text-muted-foreground">Reactions:</span>
        {picked.map((char, index) => (
          <span key={char + index}>{char}</span>
        ))}
      </div>
      <Command className="border">
        <CommandInput placeholder="Search emoji (try “ship”)" />
        <CommandList className="max-h-56">
          <CommandEmpty>No emoji found.</CommandEmpty>
          <CommandGroup heading="Frequently used">
            {emojis.map((emoji) => (
              <CommandItem
                key={emoji.name}
                value={emoji.name}
                keywords={emoji.keywords}
                onSelect={() => setPicked((current) => [...current, emoji.char].slice(-8))}
              >
                <span className="text-base leading-none">{emoji.char}</span>
                <span>{emoji.name}</span>
                <span className="ms-auto truncate text-[11px] text-muted-foreground">
                  :{emoji.keywords[0]}:
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}`,
  },
  {
    name: "RecentFilesSearch",
    description: "A file search menu showing recent files with type icons, folder paths, and edit times.",
    code: `
const files = [
  { name: "Q3 roadmap.pdf", path: "Planning / 2026", edited: "2m ago", icon: FileTextIcon },
  { name: "brand-colors.fig", path: "Design / Brand", edited: "1h ago", icon: PaletteIcon },
  { name: "revenue-model.xlsx", path: "Finance", edited: "Yesterday", icon: SheetIcon },
  { name: "onboarding-flow.mp4", path: "Research / Videos", edited: "Mon", icon: FileVideoIcon },
  { name: "api-schema.json", path: "Engineering / Specs", edited: "Oct 28", icon: FileJsonIcon },
]

export default function RecentFilesSearch() {
  return (
    <Command className="w-full max-w-md border shadow-sm">
      <CommandInput placeholder="Search files by name..." />
      <CommandList>
        <CommandEmpty>No files match.</CommandEmpty>
        <CommandGroup heading="Recent files">
          {files.map((file) => (
            <CommandItem key={file.name} value={file.name + " " + file.path}>
              <div className="flex size-8 items-center justify-center bg-muted">
                <file.icon />
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="truncate font-medium">{file.name}</span>
                <span className="truncate text-[11px] text-muted-foreground">{file.path}</span>
              </div>
              <span className="ms-auto shrink-0 text-[11px] text-muted-foreground">{file.edited}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "AsyncSearchLoading",
    description: "A remote search that shows a spinner row while results load after each keystroke.",
    code: `
const catalog = [
  "Wireless keyboard",
  "Ergonomic mouse",
  "USB-C dock",
  "4K monitor arm",
  "Noise-cancelling headset",
  "Laptop stand",
  "Webcam light",
  "Desk mat",
]

export default function AsyncSearchLoading() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [results, setResults] = React.useState<string[]>(catalog.slice(0, 4))

  const onQueryChange = (value: string) => {
    setQuery(value)
    setLoading(true)
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const q = query.toLowerCase()
      setResults(catalog.filter((item) => item.toLowerCase().includes(q)))
      setLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [query])

  return (
    <Command shouldFilter={false} className="w-full max-w-sm border">
      <CommandInput value={query} onValueChange={onQueryChange} placeholder="Search inventory..." />
      <CommandList>
        {loading ? (
          <div className="flex items-center justify-center gap-2 py-6 text-xs text-muted-foreground">
            <Spinner />
            Searching inventory...
          </div>
        ) : (
          <>
            <CommandEmpty>No products found for “{query}”.</CommandEmpty>
            <CommandGroup heading={results.length + " results"}>
              {results.map((item) => (
                <CommandItem key={item} value={item}>
                  <PackageIcon />
                  <span>{item}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "CreateFromEmptyState",
    description: "An empty state that offers to create a new tag from whatever the user typed.",
    code: `
export default function CreateFromEmptyState() {
  const [query, setQuery] = React.useState("")
  const [tags, setTags] = React.useState(["marketing", "q4-launch", "customer-research"])

  const create = () => {
    const tag = query.trim().toLowerCase().replace(/\\s+/g, "-")
    if (!tag) return
    setTags((current) => [tag, ...current])
    setQuery("")
  }

  return (
    <Command className="w-full max-w-xs border">
      <CommandInput value={query} onValueChange={setQuery} placeholder="Search or create tag..." />
      <CommandList>
        <CommandEmpty className="flex flex-col items-center gap-2 px-4 py-5">
          <TagIcon className="size-5 text-muted-foreground" />
          <span className="text-muted-foreground">No tag called “{query}”.</span>
          <Button size="sm" onClick={create}>
            <PlusIcon data-icon="inline-start" />
            Create “{query}”
          </Button>
        </CommandEmpty>
        <CommandGroup heading="Tags">
          {tags.map((tag) => (
            <CommandItem key={tag} value={tag}>
              <HashIcon />
              <span>{tag}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "PlanGatedCommands",
    description: "A command list where premium actions are disabled and marked with an upgrade badge.",
    code: `
const actions = [
  { label: "Export as CSV", icon: FileSpreadsheetIcon, pro: false },
  { label: "Share public link", icon: LinkIcon, pro: false },
  { label: "Export as PDF report", icon: FileTextIcon, pro: true },
  { label: "Schedule email digest", icon: CalendarClockIcon, pro: true },
  { label: "Sync to data warehouse", icon: DatabaseIcon, pro: true },
]

export default function PlanGatedCommands() {
  return (
    <Command className="w-full max-w-sm border">
      <CommandInput placeholder="Export or share..." />
      <CommandList>
        <CommandEmpty>No matching action.</CommandEmpty>
        <CommandGroup heading="Free plan">
          {actions.map((action) => (
            <CommandItem key={action.label} disabled={action.pro}>
              <action.icon />
              <span>{action.label}</span>
              {action.pro ? (
                <Badge variant="secondary" className="ms-auto">
                  <SparklesIcon />
                  Pro
                </Badge>
              ) : null}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <div className="flex items-center justify-between gap-2 p-2 text-xs">
          <span className="text-muted-foreground">Unlock 3 more actions</span>
          <Button size="xs">Upgrade</Button>
        </div>
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "NestedCommandPages",
    description: "A multi-page palette that drills into a project and goes back with Backspace on an empty input.",
    code: `
const projects = ["Atlas Redesign", "Orbit API", "Harbor Mobile"]

export default function NestedCommandPages() {
  const [pages, setPages] = React.useState<string[]>([])
  const [search, setSearch] = React.useState("")
  const page = pages[pages.length - 1]

  const push = (next: string) => {
    setPages((current) => [...current, next])
    setSearch("")
  }

  return (
    <Command
      className="w-full max-w-sm border"
      onKeyDown={(event) => {
        if (event.key === "Backspace" && !search && pages.length) {
          event.preventDefault()
          setPages((current) => current.slice(0, -1))
        }
      }}
    >
      <div className="flex items-center gap-1 border-b px-2 py-1.5 text-[11px] text-muted-foreground">
        <span>Home</span>
        {pages.map((p) => (
          <React.Fragment key={p}>
            <ChevronRightIcon className="size-3" />
            <span className="text-foreground">{p}</span>
          </React.Fragment>
        ))}
      </div>
      <CommandInput
        value={search}
        onValueChange={setSearch}
        placeholder={page ? "Search in " + page + "..." : "Search..."}
      />
      <CommandList>
        <CommandEmpty>Nothing here.</CommandEmpty>
        {!page ? (
          <CommandGroup heading="Navigate">
            <CommandItem onSelect={() => push("Projects")}>
              <FolderIcon />
              <span>Projects</span>
              <ChevronRightIcon className="ms-auto" />
            </CommandItem>
            <CommandItem onSelect={() => push("Team")}>
              <UsersIcon />
              <span>Team</span>
              <ChevronRightIcon className="ms-auto" />
            </CommandItem>
          </CommandGroup>
        ) : null}
        {page === "Projects" ? (
          <CommandGroup heading="Projects">
            {projects.map((project) => (
              <CommandItem key={project} onSelect={() => push(project)}>
                <FolderKanbanIcon />
                <span>{project}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        ) : null}
        {page === "Team" ? (
          <CommandGroup heading="Team">
            <CommandItem>Invite member</CommandItem>
            <CommandItem>Manage roles</CommandItem>
          </CommandGroup>
        ) : null}
        {page && projects.includes(page) ? (
          <CommandGroup heading="Project actions">
            <CommandItem>
              <PlusIcon />
              <span>New issue</span>
            </CommandItem>
            <CommandItem>
              <SettingsIcon />
              <span>Project settings</span>
            </CommandItem>
            <CommandItem>
              <ArchiveIcon />
              <span>Archive project</span>
            </CommandItem>
          </CommandGroup>
        ) : null}
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "ThemeModeSwitcher",
    description: "A small command group for switching between light, dark, and system appearance.",
    code: `
const modes = [
  { id: "light", label: "Light", icon: SunIcon },
  { id: "dark", label: "Dark", icon: MoonIcon },
  { id: "system", label: "System", icon: MonitorIcon },
]

export default function ThemeModeSwitcher() {
  const [mode, setMode] = React.useState("system")

  return (
    <Command className="w-full max-w-60 border">
      <CommandList>
        <CommandGroup heading="Appearance">
          {modes.map((item) => (
            <CommandItem
              key={item.id}
              data-checked={mode === item.id}
              onSelect={() => setMode(item.id)}
            >
              <item.icon />
              <span>{item.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Accent">
          <CommandItem>
            <PaletteIcon />
            <span>Customize colors...</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "CountryPhoneCodeSelect",
    description: "A country dialing code selector paired with a phone input in a signup form.",
    code: `
const countries = [
  { code: "US", name: "United States", dial: "+1" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "BR", name: "Brazil", dial: "+55" },
  { code: "JP", name: "Japan", dial: "+81" },
  { code: "KE", name: "Kenya", dial: "+254" },
]

export default function CountryPhoneCodeSelect() {
  const [open, setOpen] = React.useState(false)
  const [country, setCountry] = React.useState(countries[0]!)

  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <Label htmlFor="phone-number">Phone number</Label>
      <div className="flex">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger render={<Button variant="outline" className="shrink-0 border-e-0" />}>
            <span className="text-[10px] font-semibold">{country.code}</span>
            {country.dial}
            <ChevronDownIcon className="opacity-50" />
          </PopoverTrigger>
          <PopoverContent className="w-64 p-0" align="start">
            <Command>
              <CommandInput placeholder="Search country..." />
              <CommandList>
                <CommandEmpty>No country found.</CommandEmpty>
                <CommandGroup>
                  {countries.map((item) => (
                    <CommandItem
                      key={item.code}
                      value={item.name + " " + item.dial}
                      data-checked={item.code === country.code}
                      onSelect={() => {
                        setCountry(item)
                        setOpen(false)
                      }}
                    >
                      <span className="flex h-4 w-6 items-center justify-center bg-muted text-[9px] font-semibold">
                        {item.code}
                      </span>
                      <span>{item.name}</span>
                      <span className="text-muted-foreground">{item.dial}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <Input id="phone-number" type="tel" placeholder="555 012 3456" />
      </div>
    </div>
  )
}`,
  },
  {
    name: "EditorSlashCommands",
    description: "A slash-command block inserter for a document editor with descriptions for each block.",
    code: `
const blocks = [
  { group: "Basic blocks", items: [
    { label: "Text", hint: "Start writing with plain text", icon: TypeIcon },
    { label: "Heading 1", hint: "Big section heading", icon: Heading1Icon },
    { label: "Heading 2", hint: "Medium section heading", icon: Heading2Icon },
    { label: "Bulleted list", hint: "Create a simple list", icon: ListIcon },
    { label: "To-do list", hint: "Track tasks with checkboxes", icon: ListTodoIcon },
  ] },
  { group: "Media", items: [
    { label: "Code block", hint: "Capture a code snippet", icon: CodeIcon },
    { label: "Quote", hint: "Highlight a quotation", icon: QuoteIcon },
    { label: "Divider", hint: "Visually separate sections", icon: MinusIcon },
  ] },
]

export default function EditorSlashCommands() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      <p className="px-1 text-sm">
        Meeting notes <span className="text-muted-foreground">/</span>
      </p>
      <Command className="border shadow-md">
        <CommandInput placeholder="Filter blocks..." autoFocus />
        <CommandList className="max-h-64">
          <CommandEmpty>No blocks match.</CommandEmpty>
          {blocks.map((section) => (
            <CommandGroup key={section.group} heading={section.group}>
              {section.items.map((block) => (
                <CommandItem key={block.label} value={block.label}>
                  <div className="flex size-8 items-center justify-center border bg-background">
                    <block.icon />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">{block.label}</span>
                    <span className="text-[11px] text-muted-foreground">{block.hint}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </div>
  )
}`,
  },
  {
    name: "ChatMentionSuggestions",
    description: "A chat composer that shows @mention suggestions above the textarea while typing a name.",
    code: `
const members = [
  { handle: "maya", name: "Maya Chen", status: "online" },
  { handle: "jonah", name: "Jonah Reyes", status: "away" },
  { handle: "priya", name: "Priya Natarajan", status: "online" },
  { handle: "elliot", name: "Elliot Brandt", status: "offline" },
]

export default function ChatMentionSuggestions() {
  const [message, setMessage] = React.useState("Hey @")
  const match = message.match(/@(\\w*)$/)
  const query = match ? match[1]! : null

  const insert = (handle: string) => {
    setMessage((current) => current.replace(/@\\w*$/, "@" + handle + " "))
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      {query !== null ? (
        <Command className="border shadow-md" filter={(value, search) => (value.includes(search) ? 1 : 0)}>
          <CommandList>
            <CommandGroup heading="Mention a teammate">
              {members
                .filter((m) => m.handle.startsWith(query.toLowerCase()))
                .map((member) => (
                  <CommandItem key={member.handle} value={member.handle} onSelect={() => insert(member.handle)}>
                    <Avatar className="size-5">
                      <AvatarFallback className="text-[9px]">{member.name.slice(0, 1)}</AvatarFallback>
                    </Avatar>
                    <span>{member.name}</span>
                    <span className="text-muted-foreground">@{member.handle}</span>
                    <span
                      className={cn(
                        "ms-auto size-2 rounded-full",
                        member.status === "online" && "bg-emerald-500",
                        member.status === "away" && "bg-amber-500",
                        member.status === "offline" && "bg-muted-foreground/40"
                      )}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      ) : null}
      <Textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Message #design-crit"
        className="min-h-20"
      />
    </div>
  )
}`,
  },
  {
    name: "GitBranchSwitcher",
    description: "A branch switcher that marks the current branch and offers to create one when nothing matches.",
    code: `
const branches = [
  { name: "main", meta: "default" },
  { name: "feat/billing-portal", meta: "2 days ago" },
  { name: "fix/session-timeout", meta: "5 hours ago" },
  { name: "chore/upgrade-deps", meta: "last week" },
]

export default function GitBranchSwitcher() {
  const [current, setCurrent] = React.useState("feat/billing-portal")
  const [query, setQuery] = React.useState("")

  return (
    <Command className="w-full max-w-sm border">
      <CommandInput value={query} onValueChange={setQuery} placeholder="Switch branches..." />
      <CommandList>
        <CommandEmpty className="p-1">
          <button
            type="button"
            className="flex w-full items-center gap-2 px-2 py-2 text-start text-xs hover:bg-muted"
            onClick={() => {
              setCurrent(query)
              setQuery("")
            }}
          >
            <GitBranchPlusIcon className="size-4" />
            Create branch <span className="font-mono">{query}</span> from {current}
          </button>
        </CommandEmpty>
        <CommandGroup heading="Branches">
          {branches.map((branch) => (
            <CommandItem
              key={branch.name}
              value={branch.name}
              data-checked={branch.name === current}
              onSelect={() => setCurrent(branch.name)}
            >
              <GitBranchIcon />
              <span className="font-mono">{branch.name}</span>
              <span className="text-[11px] text-muted-foreground">{branch.meta}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "PrefixMatchFilter",
    description: "A command menu with a custom filter that only matches items starting with the query.",
    code: `
const fruits = ["Apple", "Apricot", "Avocado", "Banana", "Blackberry", "Cherry", "Grape", "Pineapple"]

export default function PrefixMatchFilter() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <p className="text-xs text-muted-foreground">
        Typing “ap” matches Apple and Apricot, but not Grape or Pineapple.
      </p>
      <Command
        className="border"
        filter={(value, search) => (value.toLowerCase().startsWith(search.toLowerCase()) ? 1 : 0)}
      >
        <CommandInput placeholder="Search produce..." />
        <CommandList>
          <CommandEmpty>Nothing starts with that.</CommandEmpty>
          <CommandGroup heading="Produce">
            {fruits.map((fruit) => (
              <CommandItem key={fruit} value={fruit}>
                <AppleIcon />
                <span>{fruit}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}`,
  },
  {
    name: "ManualFilteringResultsCount",
    description: "A command menu with built-in filtering disabled, filtering a product catalog manually by name or SKU.",
    code: `
const products = [
  { sku: "TS-1001", name: "Organic cotton tee", stock: 42 },
  { sku: "HD-2040", name: "Fleece zip hoodie", stock: 8 },
  { sku: "CP-3300", name: "Canvas baseball cap", stock: 0 },
  { sku: "BG-4120", name: "Recycled tote bag", stock: 120 },
  { sku: "SK-5005", name: "Merino crew socks", stock: 17 },
]

export default function ManualFilteringResultsCount() {
  const [query, setQuery] = React.useState("")
  const q = query.trim().toLowerCase()
  const results = products.filter(
    (p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)
  )

  return (
    <Command shouldFilter={false} className="w-full max-w-sm border">
      <CommandInput value={query} onValueChange={setQuery} placeholder="Name or SKU..." />
      <div className="border-b px-2 py-1 text-[11px] text-muted-foreground">
        {results.length} of {products.length} products
      </div>
      <CommandList>
        <CommandEmpty>No products match “{query}”.</CommandEmpty>
        {results.map((product) => (
          <CommandItem key={product.sku} value={product.sku}>
            <span className="w-16 font-mono text-[11px] text-muted-foreground">{product.sku}</span>
            <span className="truncate">{product.name}</span>
            <Badge variant={product.stock === 0 ? "destructive" : "outline"} className="ms-auto">
              {product.stock === 0 ? "Sold out" : product.stock + " left"}
            </Badge>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "KeywordAliasSearch",
    description: "Settings navigation whose items also match synonyms, such as “invoice” finding Billing.",
    code: `
const destinations = [
  { label: "Billing", icon: CreditCardIcon, keywords: ["invoice", "payment", "card", "plan"] },
  { label: "Security", icon: ShieldIcon, keywords: ["password", "2fa", "sessions"] },
  { label: "Notifications", icon: BellIcon, keywords: ["email", "alerts", "push"] },
  { label: "API keys", icon: KeyRoundIcon, keywords: ["token", "developer", "secret"] },
  { label: "Members", icon: UsersIcon, keywords: ["team", "invite", "roles"] },
]

export default function KeywordAliasSearch() {
  return (
    <Command className="w-full max-w-xs border">
      <CommandInput placeholder="Try “invoice” or “token”" />
      <CommandList>
        <CommandEmpty>No settings page found.</CommandEmpty>
        <CommandGroup heading="Settings">
          {destinations.map((item) => (
            <CommandItem key={item.label} value={item.label} keywords={item.keywords}>
              <item.icon />
              <span>{item.label}</span>
              <span className="ms-auto truncate text-[11px] text-muted-foreground">
                {item.keywords.slice(0, 2).join(", ")}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "DocsSearchWithPreview",
    description: "A documentation search with a preview pane that follows the highlighted result.",
    code: `
const articles = [
  { title: "Authentication", summary: "Sign users in with email links, passkeys, or SSO providers.", section: "Guides" },
  { title: "Webhooks", summary: "Receive signed HTTP callbacks when events happen in your workspace.", section: "Guides" },
  { title: "Rate limits", summary: "Each API key can make 600 requests per minute before throttling.", section: "Reference" },
  { title: "Pagination", summary: "List endpoints return cursors so you can page through large result sets.", section: "Reference" },
]

export default function DocsSearchWithPreview() {
  const [value, setValue] = React.useState(articles[0]!.title)
  const active = articles.find((a) => a.title.toLowerCase() === value.toLowerCase())

  return (
    <Command value={value} onValueChange={setValue} className="w-full max-w-lg border">
      <CommandInput placeholder="Search documentation..." />
      <div className="grid sm:grid-cols-[1fr_1fr]">
        <CommandList className="border-b sm:border-e sm:border-b-0">
          <CommandEmpty>No articles found.</CommandEmpty>
          <CommandGroup heading="Articles">
            {articles.map((article) => (
              <CommandItem key={article.title} value={article.title}>
                <BookOpenIcon />
                <span>{article.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
        <div className="flex flex-col gap-2 p-3">
          {active ? (
            <>
              <Badge variant="secondary">{active.section}</Badge>
              <p className="text-sm font-medium">{active.title}</p>
              <p className="text-xs text-muted-foreground">{active.summary}</p>
            </>
          ) : (
            <p className="text-xs text-muted-foreground">Highlight a result to preview it.</p>
          )}
        </div>
      </div>
    </Command>
  )
}`,
  },
  {
    name: "BrandColorTokenPicker",
    description: "A design-token picker that lists color tokens with swatches and hex values.",
    code: `
const tokens = [
  { name: "primary", hex: "#4F46E5", className: "bg-indigo-600" },
  { name: "success", hex: "#16A34A", className: "bg-green-600" },
  { name: "warning", hex: "#D97706", className: "bg-amber-600" },
  { name: "danger", hex: "#DC2626", className: "bg-red-600" },
  { name: "info", hex: "#0284C7", className: "bg-sky-600" },
  { name: "neutral", hex: "#52525B", className: "bg-zinc-600" },
]

export default function BrandColorTokenPicker() {
  const [token, setToken] = React.useState("primary")
  const active = tokens.find((t) => t.name === token)

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <div className="flex items-center gap-2 border p-2">
        <span className={cn("size-8", active?.className)} />
        <div className="flex flex-col text-xs">
          <span className="font-medium">color.{token}</span>
          <span className="font-mono text-muted-foreground">{active?.hex}</span>
        </div>
      </div>
      <Command className="border">
        <CommandInput placeholder="Search tokens or hex..." />
        <CommandList>
          <CommandEmpty>No token found.</CommandEmpty>
          <CommandGroup heading="Color tokens">
            {tokens.map((t) => (
              <CommandItem
                key={t.name}
                value={t.name + " " + t.hex}
                data-checked={t.name === token}
                onSelect={() => setToken(t.name)}
              >
                <span className={cn("size-4 ring-1 ring-foreground/10", t.className)} />
                <span>{t.name}</span>
                <span className="font-mono text-[11px] text-muted-foreground">{t.hex}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}`,
  },
  {
    name: "FontFamilyPicker",
    description: "A font picker where each option renders in its own typeface style.",
    code: `
const fonts = [
  { label: "Inter", className: "font-sans", category: "Sans serif" },
  { label: "Source Serif", className: "font-serif", category: "Serif" },
  { label: "JetBrains Mono", className: "font-mono", category: "Monospace" },
  { label: "Display Bold", className: "font-sans font-black tracking-tight", category: "Display" },
  { label: "Light Italic", className: "font-serif font-light italic", category: "Serif" },
]

export default function FontFamilyPicker() {
  const [font, setFont] = React.useState("Inter")
  const active = fonts.find((f) => f.label === font)

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <p className={cn("border p-3 text-lg", active?.className)}>The quick brown fox</p>
      <Command className="border">
        <CommandInput placeholder="Search fonts..." />
        <CommandList>
          <CommandEmpty>No font found.</CommandEmpty>
          <CommandGroup heading="Fonts">
            {fonts.map((f) => (
              <CommandItem
                key={f.label}
                value={f.label}
                keywords={[f.category]}
                data-checked={f.label === font}
                onSelect={() => setFont(f.label)}
              >
                <span className={cn("text-sm", f.className)}>{f.label}</span>
                <span className="text-[11px] text-muted-foreground">{f.category}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}`,
  },
  {
    name: "KeyboardHintFooter",
    description: "A command palette with a footer bar explaining the keyboard controls.",
    code: `
export default function KeyboardHintFooter() {
  return (
    <Command className="w-full max-w-md border shadow-sm">
      <CommandInput placeholder="Jump to..." />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem>
            <HomeIcon />
            <span>Overview</span>
          </CommandItem>
          <CommandItem>
            <BarChart3Icon />
            <span>Reports</span>
          </CommandItem>
          <CommandItem>
            <UsersIcon />
            <span>Customers</span>
          </CommandItem>
          <CommandItem>
            <ReceiptIcon />
            <span>Invoices</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
      <div className="flex flex-wrap items-center gap-3 border-t px-2 py-1.5 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1">
          <Kbd>↑</Kbd>
          <Kbd>↓</Kbd>
          navigate
        </span>
        <span className="flex items-center gap-1">
          <Kbd>↵</Kbd>
          open
        </span>
        <span className="flex items-center gap-1">
          <Kbd>esc</Kbd>
          close
        </span>
      </div>
    </Command>
  )
}`,
  },
  {
    name: "HelpCenterSearch",
    description: "A help center search that groups articles by topic and links to contact support.",
    code: `
const topics = [
  {
    topic: "Account",
    articles: ["Change your email address", "Enable two-step verification", "Delete your account"],
  },
  {
    topic: "Billing",
    articles: ["Update a payment method", "Download past invoices", "Request a refund"],
  },
]

export default function HelpCenterSearch() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex flex-col gap-0.5">
        <h3 className="text-sm font-semibold">How can we help?</h3>
        <p className="text-xs text-muted-foreground">Search 120+ articles from our help center.</p>
      </div>
      <Command className="border">
        <CommandInput placeholder="Describe your issue..." />
        <CommandList>
          <CommandEmpty className="flex flex-col items-center gap-2 py-5">
            <LifeBuoyIcon className="size-5 text-muted-foreground" />
            Can&apos;t find an answer?
            <Button size="sm" variant="outline">
              Contact support
            </Button>
          </CommandEmpty>
          {topics.map((t) => (
            <CommandGroup key={t.topic} heading={t.topic}>
              {t.articles.map((article) => (
                <CommandItem key={article}>
                  <FileQuestionIcon />
                  <span>{article}</span>
                  <ExternalLinkIcon className="ms-auto opacity-50" />
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </div>
  )
}`,
  },
  {
    name: "ContactsDirectory",
    description: "A company directory search showing people with departments and presence status.",
    code: `
const contacts = [
  { name: "Ava Thompson", email: "ava@northwind.dev", dept: "Sales", online: true },
  { name: "Leo Martins", email: "leo@northwind.dev", dept: "Engineering", online: false },
  { name: "Noor Haddad", email: "noor@northwind.dev", dept: "Support", online: true },
  { name: "Kai Okafor", email: "kai@northwind.dev", dept: "Engineering", online: true },
  { name: "Ines Moreau", email: "ines@northwind.dev", dept: "Finance", online: false },
]

export default function ContactsDirectory() {
  const departments = [...new Set(contacts.map((c) => c.dept))]

  return (
    <Command className="w-full max-w-sm border">
      <CommandInput placeholder="Search people or email..." />
      <CommandList>
        <CommandEmpty>No one found.</CommandEmpty>
        {departments.map((dept) => (
          <CommandGroup key={dept} heading={dept}>
            {contacts
              .filter((c) => c.dept === dept)
              .map((contact) => (
                <CommandItem key={contact.email} value={contact.name + " " + contact.email}>
                  <div className="relative">
                    <Avatar className="size-7">
                      <AvatarFallback className="text-[10px]">
                        {contact.name.split(" ").map((p) => p[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    {contact.online ? (
                      <span className="absolute -end-0.5 -bottom-0.5 size-2.5 rounded-full bg-emerald-500 ring-2 ring-popover" />
                    ) : null}
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <span>{contact.name}</span>
                    <span className="truncate text-[11px] text-muted-foreground">{contact.email}</span>
                  </div>
                  <MessageCircleIcon className="ms-auto opacity-60" />
                </CommandItem>
              ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "NaturalLanguageScheduler",
    description: "A scheduling palette that turns the typed text into dynamic “create event” suggestions.",
    code: `
const when = ["today at 3:00 PM", "tomorrow at 10:00 AM", "next Monday at 9:30 AM"]

export default function NaturalLanguageScheduler() {
  const [text, setText] = React.useState("Design review")
  const title = text.trim() || "Untitled event"

  return (
    <Command shouldFilter={false} className="w-full max-w-sm border">
      <CommandInput value={text} onValueChange={setText} placeholder="Name your event..." />
      <CommandList>
        <CommandGroup heading="Create event">
          {when.map((slot) => (
            <CommandItem key={slot} value={slot}>
              <CalendarPlusIcon />
              <span className="truncate">
                <span className="font-medium">{title}</span>{" "}
                <span className="text-muted-foreground">{slot}</span>
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Other">
          <CommandItem value="pick-date">
            <CalendarIcon />
            <span>Pick a custom date...</span>
          </CommandItem>
          <CommandItem value="find-time">
            <UsersIcon />
            <span>Find a time with attendees</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "InlineCalculatorResult",
    description: "A launcher that shows an instant calculator result as the first item for simple math.",
    code: `
function calculate(input: string) {
  const match = input.replace(/\\s/g, "").match(/^(-?\\d+(?:\\.\\d+)?)([+\\-*/x])(-?\\d+(?:\\.\\d+)?)$/)
  if (!match) return null
  const a = Number(match[1])
  const b = Number(match[3])
  switch (match[2]) {
    case "+":
      return a + b
    case "-":
      return a - b
    case "*":
    case "x":
      return a * b
    case "/":
      return b === 0 ? null : a / b
    default:
      return null
  }
}

export default function InlineCalculatorResult() {
  const [query, setQuery] = React.useState("128 * 12")
  const result = calculate(query)

  return (
    <Command className="w-full max-w-sm border">
      <CommandInput value={query} onValueChange={setQuery} placeholder="Search or calculate..." />
      <CommandList>
        {result !== null ? (
          <CommandGroup heading="Calculator">
            <CommandItem value={query} forceMount>
              <CalculatorIcon />
              <span className="text-muted-foreground">{query} =</span>
              <span className="text-sm font-semibold">{Number(result.toFixed(6)).toLocaleString()}</span>
              <CommandShortcut>copy</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        ) : null}
        <CommandEmpty>Type a sum like 42 + 8.</CommandEmpty>
        <CommandGroup heading="Apps">
          <CommandItem>
            <NotebookPenIcon />
            <span>Notes</span>
          </CommandItem>
          <CommandItem>
            <TimerIcon />
            <span>Timer</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "IntegrationsMarketplace",
    description: "An integrations search that shows which apps are connected and which can be installed.",
    code: `
const integrations = [
  { name: "Chatterbox", category: "Messaging", installed: true, color: "from-violet-500 to-fuchsia-500" },
  { name: "Ledgerly", category: "Accounting", installed: false, color: "from-emerald-500 to-teal-500" },
  { name: "Trackwise", category: "Project management", installed: true, color: "from-sky-500 to-blue-600" },
  { name: "Mailroom", category: "Email", installed: false, color: "from-amber-400 to-orange-500" },
  { name: "Vaultline", category: "Storage", installed: false, color: "from-zinc-500 to-zinc-700" },
]

export default function IntegrationsMarketplace() {
  const [installed, setInstalled] = React.useState(
    integrations.filter((i) => i.installed).map((i) => i.name)
  )

  return (
    <Command className="w-full max-w-sm border">
      <CommandInput placeholder="Search integrations..." />
      <CommandList>
        <CommandEmpty>No integrations found.</CommandEmpty>
        <CommandGroup heading="Integrations">
          {integrations.map((app) => {
            const isInstalled = installed.includes(app.name)
            return (
              <CommandItem
                key={app.name}
                value={app.name + " " + app.category}
                onSelect={() =>
                  setInstalled((current) =>
                    isInstalled ? current.filter((n) => n !== app.name) : [...current, app.name]
                  )
                }
              >
                <span className={cn("flex size-7 items-center justify-center bg-linear-to-br text-[11px] font-bold text-white", app.color)}>
                  {app.name[0]}
                </span>
                <div className="flex flex-col">
                  <span>{app.name}</span>
                  <span className="text-[11px] text-muted-foreground">{app.category}</span>
                </div>
                <Badge variant={isInstalled ? "secondary" : "outline"} className="ms-auto">
                  {isInstalled ? "Connected" : "Install"}
                </Badge>
              </CommandItem>
            )
          })}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "AdminUserActions",
    description: "An admin console action menu scoped to a selected user, including a destructive suspend action.",
    code: `
export default function AdminUserActions() {
  return (
    <Command className="w-full max-w-sm border">
      <div className="flex items-center gap-3 border-b p-3">
        <Avatar>
          <AvatarFallback>RK</AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-col">
          <span className="text-sm font-medium">Rina Kowalski</span>
          <span className="truncate text-xs text-muted-foreground">rina@fieldnote.io · Admin</span>
        </div>
        <Badge variant="outline" className="ms-auto">Active</Badge>
      </div>
      <CommandInput placeholder="Run an action on this user..." />
      <CommandList>
        <CommandEmpty>No action found.</CommandEmpty>
        <CommandGroup heading="Account">
          <CommandItem>
            <VenetianMaskIcon />
            <span>Impersonate user</span>
          </CommandItem>
          <CommandItem>
            <KeyRoundIcon />
            <span>Send password reset</span>
          </CommandItem>
          <CommandItem>
            <ShieldCheckIcon />
            <span>Reset two-factor auth</span>
          </CommandItem>
          <CommandItem>
            <HistoryIcon />
            <span>View audit log</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Danger zone">
          <CommandItem className="text-destructive data-selected:text-destructive data-selected:*:[svg]:text-destructive">
            <BanIcon />
            <span>Suspend account</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "IssueStatusPicker",
    description: "An issue status picker with colored status icons and number-key shortcuts.",
    code: `
const statuses = [
  { id: "backlog", label: "Backlog", icon: CircleDashedIcon, color: "text-muted-foreground" },
  { id: "todo", label: "Todo", icon: CircleIcon, color: "text-foreground" },
  { id: "progress", label: "In progress", icon: CircleDotIcon, color: "text-amber-500" },
  { id: "review", label: "In review", icon: CircleEllipsisIcon, color: "text-violet-500" },
  { id: "done", label: "Done", icon: CircleCheckIcon, color: "text-emerald-500" },
]

export default function IssueStatusPicker() {
  const [status, setStatus] = React.useState("progress")
  const active = statuses.find((s) => s.id === status)!

  return (
    <div className="flex w-full max-w-60 flex-col gap-2">
      <div className="flex items-center gap-2 text-xs">
        <span className="font-mono text-muted-foreground">ENG-482</span>
        <active.icon className={cn("size-3.5", active.color)} />
        <span>{active.label}</span>
      </div>
      <Command className="border">
        <CommandInput placeholder="Change status..." />
        <CommandList>
          <CommandEmpty>No status.</CommandEmpty>
          <CommandGroup>
            {statuses.map((s, index) => (
              <CommandItem key={s.id} value={s.label} onSelect={() => setStatus(s.id)}>
                <s.icon className={s.color} />
                <span>{s.label}</span>
                {s.id === status ? <CheckIcon className="size-3.5" /> : null}
                <CommandShortcut>{index + 1}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}`,
  },
  {
    name: "SnoozeUntilPicker",
    description: "An inbox snooze menu that computes the exact reminder time for each option.",
    code: `
function at(daysAhead: number, hour: number) {
  const date = new Date()
  date.setDate(date.getDate() + daysAhead)
  date.setHours(hour, 0, 0, 0)
  return date
}

const formatter = new Intl.DateTimeFormat("en-US", { weekday: "short", hour: "numeric", minute: "2-digit" })

export default function SnoozeUntilPicker() {
  const [snoozed, setSnoozed] = React.useState<string | null>(null)
  const daysToMonday = ((8 - new Date().getDay()) % 7) || 7
  const options = [
    { label: "Later today", date: at(0, 18), icon: SunsetIcon },
    { label: "Tomorrow", date: at(1, 8), icon: SunriseIcon },
    { label: "This weekend", date: at(((6 - new Date().getDay()) + 7) % 7 || 7, 9), icon: CoffeeIcon },
    { label: "Next week", date: at(daysToMonday, 8), icon: CalendarDaysIcon },
  ]

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Command className="border">
        <CommandList>
          <CommandGroup heading="Snooze until">
            {options.map((option) => (
              <CommandItem key={option.label} onSelect={() => setSnoozed(option.label + ", " + formatter.format(option.date))}>
                <option.icon />
                <span>{option.label}</span>
                <CommandShortcut className="tracking-normal">{formatter.format(option.date)}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup>
            <CommandItem>
              <CalendarIcon />
              <span>Pick date &amp; time</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      {snoozed ? (
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <AlarmClockIcon className="size-3.5" />
          Snoozed: {snoozed}
        </p>
      ) : null}
    </div>
  )
}`,
  },
  {
    name: "MobileSearchSheet",
    description: "A bottom sheet on mobile that hosts a full-height command search.",
    code: `
export default function MobileSearchSheet() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="outline" className="w-full max-w-xs justify-start text-muted-foreground" />}>
        <SearchIcon data-icon="inline-start" />
        Search the store...
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[70vh] gap-0 p-0">
        <SheetHeader className="border-b">
          <SheetTitle>Search</SheetTitle>
          <SheetDescription>Find products, orders, and help articles.</SheetDescription>
        </SheetHeader>
        <Command className="flex-1">
          <CommandInput placeholder="Running shoes, order #, returns..." />
          <CommandList className="max-h-none flex-1">
            <CommandEmpty>No results.</CommandEmpty>
            <CommandGroup heading="Trending">
              <CommandItem onSelect={() => setOpen(false)}>
                <TrendingUpIcon />
                <span>Trail running shoes</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <TrendingUpIcon />
                <span>Waterproof jackets</span>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Your orders">
              <CommandItem onSelect={() => setOpen(false)}>
                <PackageIcon />
                <span>Order #48213</span>
                <span className="ms-auto text-[11px] text-muted-foreground">Out for delivery</span>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Help">
              <CommandItem onSelect={() => setOpen(false)}>
                <RotateCcwIcon />
                <span>Start a return</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "NavbarSearchTrigger",
    description: "A fake search field in a site header that opens a docs command dialog with a close button.",
    code: `
export default function NavbarSearchTrigger() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full max-w-md items-center gap-3 border px-3 py-2">
      <span className="text-sm font-semibold">Fieldnote Docs</span>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="ms-auto flex h-8 w-full max-w-48 items-center gap-2 border bg-muted/50 px-2 text-xs text-muted-foreground hover:bg-muted"
      >
        <SearchIcon className="size-3.5" />
        Search docs
        <KbdGroup className="ms-auto">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search documentation"
        description="Search guides, API reference, and changelog"
        showCloseButton
      >
        <Command>
          <CommandInput placeholder="Search documentation..." />
          <CommandList>
            <CommandEmpty>No pages found.</CommandEmpty>
            <CommandGroup heading="Getting started">
              <CommandItem onSelect={() => setOpen(false)}>
                <RocketIcon />
                <span>Quickstart</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <DownloadIcon />
                <span>Installation</span>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="API reference">
              <CommandItem onSelect={() => setOpen(false)}>
                <BracesIcon />
                <span>REST endpoints</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <WebhookIcon />
                <span>Webhook events</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}`,
  },
  {
    name: "ClipboardHistory",
    description: "A clipboard manager listing pinned and recent snippets with their content type.",
    code: `
const clips = [
  { id: 1, text: "support@fieldnote.io", kind: "Email", pinned: true },
  { id: 2, text: "#4F46E5", kind: "Color", pinned: true },
  { id: 3, text: "https://fieldnote.io/changelog/2026-11", kind: "Link", pinned: false },
  { id: 4, text: "pnpm dlx shadcn add command", kind: "Code", pinned: false },
  { id: 5, text: "Thanks for the quick turnaround on this!", kind: "Text", pinned: false },
]

const icons = { Email: AtSignIcon, Color: PipetteIcon, Link: LinkIcon, Code: TerminalIcon, Text: TextIcon }

export default function ClipboardHistory() {
  const [copied, setCopied] = React.useState<number | null>(null)

  return (
    <Command className="w-full max-w-sm border">
      <CommandInput placeholder="Search clipboard history..." />
      <CommandList>
        <CommandEmpty>Nothing copied matches.</CommandEmpty>
        {[true, false].map((pinned) => (
          <CommandGroup key={String(pinned)} heading={pinned ? "Pinned" : "Recent"}>
            {clips
              .filter((clip) => clip.pinned === pinned)
              .map((clip) => {
                const Icon = icons[clip.kind as keyof typeof icons]
                return (
                  <CommandItem key={clip.id} value={clip.text} onSelect={() => setCopied(clip.id)}>
                    <Icon />
                    <span className="truncate">{clip.text}</span>
                    <span className="ms-auto shrink-0 text-[11px] text-muted-foreground">
                      {copied === clip.id ? "Copied" : clip.kind}
                    </span>
                  </CommandItem>
                )
              })}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "TerminalCommandRunner",
    description: "A monospace developer palette that runs CLI tasks and prints the output below.",
    code: `
const tasks = [
  { cmd: "npm run dev", desc: "Start the dev server", out: "ready - started server on 0.0.0.0:3000" },
  { cmd: "npm run test", desc: "Run the unit test suite", out: "Tests: 128 passed, 128 total" },
  { cmd: "npm run lint", desc: "Lint all packages", out: "✔ No ESLint warnings or errors" },
  { cmd: "npm run build", desc: "Create a production build", out: "Compiled successfully in 14.2s" },
]

export default function TerminalCommandRunner() {
  const [output, setOutput] = React.useState<string[]>(["$ waiting for a task..."])

  return (
    <div className="flex w-full max-w-md flex-col border font-mono">
      <Command className="border-b">
        <CommandInput placeholder="> run task" className="font-mono" />
        <CommandList className="max-h-44">
          <CommandEmpty>Unknown task.</CommandEmpty>
          <CommandGroup heading="package.json scripts">
            {tasks.map((task) => (
              <CommandItem
                key={task.cmd}
                value={task.cmd + " " + task.desc}
                onSelect={() => setOutput((lines) => [...lines, "$ " + task.cmd, task.out].slice(-6))}
              >
                <ChevronRightIcon />
                <span>{task.cmd}</span>
                <span className="ms-auto truncate font-sans text-[11px] text-muted-foreground">{task.desc}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
      <div className="flex min-h-24 flex-col gap-0.5 bg-muted/40 p-2 text-[11px]">
        {output.map((line, index) => (
          <span key={index} className={line.startsWith("$") ? "text-muted-foreground" : "text-emerald-600 dark:text-emerald-400"}>
            {line}
          </span>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "SettingsDeepLinkSearch",
    description: "A settings search whose results show the breadcrumb path to each nested setting.",
    code: `
const settings = [
  { label: "Two-factor authentication", path: ["Security", "Sign-in"], icon: ShieldCheckIcon },
  { label: "Active sessions", path: ["Security", "Devices"], icon: MonitorSmartphoneIcon },
  { label: "Weekly summary email", path: ["Notifications", "Email"], icon: MailIcon },
  { label: "Default currency", path: ["Workspace", "Billing"], icon: CoinsIcon },
  { label: "Date format", path: ["Workspace", "Localization"], icon: CalendarIcon },
]

export default function SettingsDeepLinkSearch() {
  return (
    <Command className="w-full max-w-sm border">
      <CommandInput placeholder="Search all settings..." />
      <CommandList>
        <CommandEmpty>No setting found.</CommandEmpty>
        <CommandGroup heading="Settings">
          {settings.map((setting) => (
            <CommandItem key={setting.label} value={setting.label} keywords={setting.path}>
              <setting.icon />
              <div className="flex min-w-0 flex-col">
                <span>{setting.label}</span>
                <span className="flex items-center gap-0.5 text-[11px] text-muted-foreground">
                  {setting.path.map((part, index) => (
                    <React.Fragment key={part}>
                      {index > 0 ? <ChevronRightIcon className="size-3" /> : null}
                      {part}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "LanguagePreference",
    description: "A language selector showing each language in its native name with a checked current choice.",
    code: `
const languages = [
  { code: "en", english: "English", native: "English" },
  { code: "es", english: "Spanish", native: "Español" },
  { code: "fr", english: "French", native: "Français" },
  { code: "de", english: "German", native: "Deutsch" },
  { code: "ja", english: "Japanese", native: "日本語" },
  { code: "ar", english: "Arabic", native: "العربية" },
  { code: "hi", english: "Hindi", native: "हिन्दी" },
]

export default function LanguagePreference() {
  const [lang, setLang] = React.useState("fr")

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <div className="flex items-center gap-2 text-sm">
        <LanguagesIcon className="size-4" />
        Interface language
      </div>
      <Command className="border">
        <CommandInput placeholder="Search languages..." />
        <CommandList className="max-h-56">
          <CommandEmpty>Language not available yet.</CommandEmpty>
          <CommandGroup>
            {languages.map((l) => (
              <CommandItem
                key={l.code}
                value={l.english}
                keywords={[l.native, l.code]}
                data-checked={l.code === lang}
                onSelect={() => setLang(l.code)}
              >
                <span className="w-6 font-mono text-[11px] text-muted-foreground uppercase">{l.code}</span>
                <span>{l.native}</span>
                <span className="text-muted-foreground">{l.english}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}`,
  },
  {
    name: "LoopingPlaylistSearch",
    description: "A playlist search with looping keyboard navigation and a now-playing indicator.",
    code: `
const tracks = [
  { title: "Paper Lanterns", artist: "Mira Sol", length: "3:42" },
  { title: "Low Tide", artist: "The Harbor Lights", length: "4:05" },
  { title: "Glasshouse", artist: "Ondine", length: "2:58" },
  { title: "Night Bus", artist: "Kofi & The Rails", length: "3:21" },
  { title: "Static Bloom", artist: "Mira Sol", length: "5:10" },
]

export default function LoopingPlaylistSearch() {
  const [playing, setPlaying] = React.useState("Low Tide")

  return (
    <Command loop className="w-full max-w-sm border">
      <CommandInput placeholder="Search songs or artists..." />
      <CommandList>
        <CommandEmpty>No tracks found.</CommandEmpty>
        <CommandGroup heading="Road trip mix · 5 songs">
          {tracks.map((track, index) => (
            <CommandItem
              key={track.title}
              value={track.title + " " + track.artist}
              onSelect={() => setPlaying(track.title)}
            >
              <span className="w-4 text-center text-[11px] text-muted-foreground">
                {playing === track.title ? <AudioLinesIcon className="size-3.5 text-primary" /> : index + 1}
              </span>
              <div className="flex min-w-0 flex-col">
                <span className={cn("truncate", playing === track.title && "font-medium")}>{track.title}</span>
                <span className="text-[11px] text-muted-foreground">{track.artist}</span>
              </div>
              <span className="ms-auto text-[11px] text-muted-foreground tabular-nums">{track.length}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "OfflineDisabledSearch",
    description: "A command menu whose input and items are disabled while the app is offline.",
    code: `
export default function OfflineDisabledSearch() {
  const [online, setOnline] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between gap-2 border px-3 py-2 text-xs">
        <span className="flex items-center gap-2">
          {online ? <WifiIcon className="size-4" /> : <WifiOffIcon className="size-4 text-destructive" />}
          {online ? "Connected" : "You are offline"}
        </span>
        <Switch checked={online} onCheckedChange={setOnline} aria-label="Toggle connection" />
      </div>
      <Command className="border">
        <CommandInput disabled={!online} placeholder={online ? "Search workspace..." : "Search unavailable offline"} />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup heading="Cloud">
            <CommandItem disabled={!online}>
              <CloudIcon />
              <span>Search shared drives</span>
            </CommandItem>
            <CommandItem disabled={!online}>
              <UsersIcon />
              <span>Search people</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="On this device">
            <CommandItem>
              <HardDriveIcon />
              <span>Downloaded files</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}`,
  },
  {
    name: "LargeSkuLookup",
    description: "A scrollable lookup over a long list of generated warehouse bin locations.",
    code: `
const aisles = ["A", "B", "C", "D", "E"]
const bins = aisles.flatMap((aisle) =>
  Array.from({ length: 20 }, (_, i) => ({
    id: aisle + "-" + String(i + 1).padStart(2, "0"),
    units: (i * 37 + aisle.charCodeAt(0)) % 140,
  }))
)

export default function LargeSkuLookup() {
  return (
    <Command className="w-full max-w-xs border">
      <CommandInput placeholder="Bin location, e.g. C-14" />
      <CommandList className="max-h-60">
        <CommandEmpty>Bin not found.</CommandEmpty>
        {aisles.map((aisle) => (
          <CommandGroup key={aisle} heading={"Aisle " + aisle}>
            {bins
              .filter((bin) => bin.id.startsWith(aisle))
              .map((bin) => (
                <CommandItem key={bin.id} value={bin.id}>
                  <WarehouseIcon />
                  <span className="font-mono">{bin.id}</span>
                  <span className={cn("ms-auto text-[11px]", bin.units < 15 ? "text-destructive" : "text-muted-foreground")}>
                    {bin.units} units
                  </span>
                </CommandItem>
              ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "ScopedSearchTabs",
    description: "A search palette with scope tabs that switch between all results, docs, and people.",
    code: `
const results = [
  { scope: "docs", label: "Release checklist", icon: FileTextIcon },
  { scope: "docs", label: "Incident runbook", icon: FileTextIcon },
  { scope: "people", label: "Hana Sato", icon: UserIcon },
  { scope: "people", label: "Marcus Bell", icon: UserIcon },
  { scope: "channels", label: "#releases", icon: HashIcon },
  { scope: "channels", label: "#on-call", icon: HashIcon },
]

export default function ScopedSearchTabs() {
  const [scope, setScope] = React.useState("all")
  const visible = results.filter((r) => scope === "all" || r.scope === scope)

  return (
    <Command className="w-full max-w-sm border">
      <CommandInput placeholder="Search everything..." />
      <div className="border-b p-1">
        <ToggleGroup
          value={[scope]}
          onValueChange={(value) => value[0] && setScope(value[0])}
          size="sm"
        >
          <ToggleGroupItem value="all">All</ToggleGroupItem>
          <ToggleGroupItem value="docs">Docs</ToggleGroupItem>
          <ToggleGroupItem value="people">People</ToggleGroupItem>
          <ToggleGroupItem value="channels">Channels</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <CommandList>
        <CommandEmpty>No results in this scope.</CommandEmpty>
        <CommandGroup>
          {visible.map((r) => (
            <CommandItem key={r.label} value={r.label}>
              <r.icon />
              <span>{r.label}</span>
              <span className="ms-auto text-[11px] text-muted-foreground capitalize">{r.scope}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "ClearableRecentSearches",
    description: "Recent searches that can be removed one by one or cleared, above static suggestions.",
    code: `
export default function ClearableRecentSearches() {
  const [recent, setRecent] = React.useState(["invoice 2026-114", "refund policy", "Acme onboarding deck"])

  return (
    <Command className="w-full max-w-sm border">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        {recent.length ? (
          <CommandGroup heading="Recent searches">
            {recent.map((term) => (
              <CommandItem key={term} value={term}>
                <HistoryIcon />
                <span>{term}</span>
                <button
                  type="button"
                  aria-label={"Remove " + term}
                  className="ms-auto p-0.5 text-muted-foreground hover:text-foreground"
                  onClick={(event) => {
                    event.stopPropagation()
                    setRecent((current) => current.filter((t) => t !== term))
                  }}
                >
                  <XIcon className="size-3.5" />
                </button>
              </CommandItem>
            ))}
            <CommandItem value="clear-recent" onSelect={() => setRecent([])} className="text-muted-foreground">
              <Trash2Icon />
              <span>Clear recent searches</span>
            </CommandItem>
          </CommandGroup>
        ) : null}
        <CommandSeparator />
        <CommandGroup heading="Suggested">
          <CommandItem>
            <SparklesIcon />
            <span>What&apos;s new this month</span>
          </CommandItem>
          <CommandItem>
            <StarIcon />
            <span>Starred reports</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "QuickCreateMenu",
    description: "A “create new” menu with item descriptions and single-key shortcuts.",
    code: `
const creatables = [
  { label: "Issue", hint: "Track a bug or task", icon: CircleDotIcon, key: "C" },
  { label: "Document", hint: "Write a spec or note", icon: FilePenIcon, key: "D" },
  { label: "Project", hint: "Group related work", icon: FolderKanbanIcon, key: "P" },
  { label: "Cycle", hint: "Plan a two-week sprint", icon: RefreshCwIcon, key: "Y" },
  { label: "Meeting notes", hint: "Start from a template", icon: NotebookTabsIcon, key: "M" },
]

export default function QuickCreateMenu() {
  return (
    <Command className="w-full max-w-xs border shadow-md">
      <CommandInput placeholder="Create new..." />
      <CommandList>
        <CommandEmpty>Nothing to create.</CommandEmpty>
        <CommandGroup heading="Create">
          {creatables.map((item) => (
            <CommandItem key={item.label} value={item.label} keywords={[item.hint]}>
              <item.icon />
              <div className="flex flex-col">
                <span>{item.label}</span>
                <span className="text-[11px] text-muted-foreground">{item.hint}</span>
              </div>
              <CommandShortcut>
                <Kbd>{item.key}</Kbd>
              </CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
  },
  {
    name: "CheckoutAddressPicker",
    description: "A checkout step for choosing a saved shipping address or adding a new one.",
    code: `
const addresses = [
  { id: "home", label: "Home", line: "48 Willow Lane, Portland, OR 97205" },
  { id: "work", label: "Studio", line: "210 Market St, Suite 4, Portland, OR 97204" },
  { id: "parents", label: "Mom & Dad", line: "9 Orchard Rd, Boise, ID 83702" },
]

export default function CheckoutAddressPicker() {
  const [selected, setSelected] = React.useState("home")

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Ship to</h3>
        <span className="text-xs text-muted-foreground">Step 2 of 3</span>
      </div>
      <Command className="border">
        <CommandInput placeholder="Search saved addresses..." />
        <CommandList>
          <CommandEmpty>No saved address matches.</CommandEmpty>
          <CommandGroup>
            {addresses.map((address) => (
              <CommandItem
                key={address.id}
                value={address.label + " " + address.line}
                data-checked={selected === address.id}
                onSelect={() => setSelected(address.id)}
              >
                <MapPinIcon />
                <div className="flex min-w-0 flex-col">
                  <span className="font-medium">{address.label}</span>
                  <span className="truncate text-[11px] text-muted-foreground">{address.line}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup>
            <CommandItem value="add-address">
              <PlusIcon />
              <span>Add a new address</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      <Button className="w-full">Continue to payment</Button>
    </div>
  )
}`,
  },
  {
    name: "DatabaseTablePicker",
    description: "A SQL client table picker grouped by schema with row counts.",
    code: `
const schemas = [
  { schema: "public", tables: [
    { name: "users", rows: "48.2k" },
    { name: "organizations", rows: "3.1k" },
    { name: "subscriptions", rows: "5.7k" },
  ] },
  { schema: "analytics", tables: [
    { name: "events", rows: "12.4M" },
    { name: "page_views", rows: "8.9M" },
  ] },
  { schema: "billing", tables: [
    { name: "invoices", rows: "61.0k" },
    { name: "payments", rows: "59.3k" },
  ] },
]

export default function DatabaseTablePicker() {
  const [table, setTable] = React.useState("public.users")

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <code className="border bg-muted/40 px-2 py-1.5 text-[11px]">SELECT * FROM {table} LIMIT 50;</code>
      <Command className="border">
        <CommandInput placeholder="Search tables..." />
        <CommandList className="max-h-60">
          <CommandEmpty>No table found.</CommandEmpty>
          {schemas.map((s) => (
            <CommandGroup key={s.schema} heading={s.schema}>
              {s.tables.map((t) => (
                <CommandItem
                  key={t.name}
                  value={s.schema + "." + t.name}
                  data-checked={table === s.schema + "." + t.name}
                  onSelect={() => setTable(s.schema + "." + t.name)}
                >
                  <TableIcon />
                  <span className="font-mono">{t.name}</span>
                  <span className="text-[11px] text-muted-foreground">{t.rows}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </div>
  )
}`,
  },
  {
    name: "AiPromptStarters",
    description: "An assistant composer where picking a prompt starter fills the message box.",
    code: `
const starters = [
  { group: "Write", prompts: ["Draft a launch announcement", "Rewrite this in a friendlier tone"] },
  { group: "Analyze", prompts: ["Summarize this quarter's churn", "Find anomalies in last week's signups"] },
  { group: "Plan", prompts: ["Outline a two-week sprint", "Create an onboarding checklist"] },
]

export default function AiPromptStarters() {
  const [prompt, setPrompt] = React.useState("")

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Command className="border">
        <CommandInput placeholder="Browse prompt starters..." />
        <CommandList className="max-h-52">
          <CommandEmpty>No starters match.</CommandEmpty>
          {starters.map((s) => (
            <CommandGroup key={s.group} heading={s.group}>
              {s.prompts.map((p) => (
                <CommandItem key={p} onSelect={() => setPrompt(p)}>
                  <SparklesIcon />
                  <span>{p}</span>
                  <CornerDownLeftIcon className="ms-auto opacity-50" />
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
      <div className="flex items-end gap-2">
        <Textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="Ask the assistant..."
          className="min-h-16"
        />
        <Button size="icon" aria-label="Send" disabled={!prompt}>
          <ArrowUpIcon />
        </Button>
      </div>
    </div>
  )
}`,
  },
]

export default examples
