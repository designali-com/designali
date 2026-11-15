import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "NotificationsFeed",
    description: "Notification panel with a scrollable feed of avatar-led updates.",
    code: `
const notifications = [
  { name: "Maya Chen", action: "commented on", target: "Q3 roadmap", time: "2m" },
  { name: "Leo Park", action: "assigned you", target: "Billing audit", time: "14m" },
  { name: "Ines Duarte", action: "mentioned you in", target: "Design crit", time: "1h" },
  { name: "Tomas Reyes", action: "approved", target: "PR #482", time: "2h" },
  { name: "Aiko Tanaka", action: "shared", target: "Brand guidelines", time: "3h" },
  { name: "Omar Haddad", action: "invited you to", target: "Growth team", time: "5h" },
  { name: "Sofia Rossi", action: "completed", target: "Onboarding flow", time: "Yesterday" },
  { name: "Ben Okafor", action: "requested review on", target: "API docs", time: "Yesterday" },
]

export default function NotificationsFeed() {
  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <span className="text-sm font-medium">Notifications</span>
        <Button size="xs" variant="ghost">Mark all read</Button>
      </div>
      <ScrollArea className="h-72">
        <div className="flex flex-col divide-y">
          {notifications.map((n, i) => (
            <div key={i} className="flex items-start gap-3 px-4 py-3">
              <Avatar className="size-8">
                <AvatarFallback>{n.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
              </Avatar>
              <p className="flex-1 text-xs">
                <span className="font-medium">{n.name}</span> {n.action}{" "}
                <span className="font-medium">{n.target}</span>
                <span className="block text-muted-foreground">{n.time}</span>
              </p>
              {i < 3 && <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" />}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "HorizontalCategoryChips",
    description: "Horizontally scrolling row of filter chips with a horizontal scrollbar.",
    code: `
const categories = ["All", "Design", "Engineering", "Marketing", "Sales", "Support", "Finance", "Legal", "People", "Operations", "Research"]

export default function HorizontalCategoryChips() {
  const [active, setActive] = React.useState("All")

  return (
    <ScrollArea className="w-full max-w-sm whitespace-nowrap">
      <div className="flex w-max gap-2 pb-3">
        {categories.map((c) => (
          <Button key={c} size="sm" variant={active === c ? "default" : "outline"} onClick={() => setActive(c)}>
            {c}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}`,
  },
  {
    name: "ChatAutoScroll",
    description: "Chat thread that scrolls to the newest message when one is sent.",
    code: `
const seed = [
  { me: false, text: "Morning! Is the staging deploy done?" },
  { me: true, text: "Yep, finished ten minutes ago." },
  { me: false, text: "Great, I'll start the QA pass." },
  { me: true, text: "Ping me if anything looks off." },
  { me: false, text: "Checkout flow looks good so far." },
  { me: false, text: "Found a typo on the receipt page." },
]

export default function ChatAutoScroll() {
  const [messages, setMessages] = React.useState(seed)
  const [draft, setDraft] = React.useState("")
  const endRef = React.useRef<null | HTMLDivElement>(null)

  React.useEffect(() => {
    const viewport = endRef.current?.closest("[data-slot=scroll-area-viewport]") as HTMLElement | null | undefined
    viewport?.scrollTo({ top: viewport.scrollHeight, behavior: "smooth" })
  }, [messages])

  const send = (event: React.FormEvent) => {
    event.preventDefault()
    if (!draft.trim()) return
    setMessages((prev) => [...prev, { me: true, text: draft.trim() }])
    setDraft("")
  }

  return (
    <div className="flex w-full max-w-sm flex-col border">
      <ScrollArea className="h-64">
        <div className="flex flex-col gap-2 p-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn("max-w-[80%] px-3 py-2 text-xs", m.me ? "self-end bg-primary text-primary-foreground" : "self-start bg-muted")}
            >
              {m.text}
            </div>
          ))}
          <div ref={endRef} />
        </div>
      </ScrollArea>
      <form onSubmit={send} className="flex gap-2 border-t p-2">
        <Input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Type a message" aria-label="Message" />
        <Button type="submit" size="icon" aria-label="Send"><SendIcon /></Button>
      </form>
    </div>
  )
}`,
  },
  {
    name: "ChangelogTimeline",
    description: "Scrollable product changelog presented as a vertical timeline.",
    code: `
const releases = [
  { version: "3.2.0", date: "Nov 12", notes: "Bulk archive, faster search indexing." },
  { version: "3.1.4", date: "Nov 02", notes: "Fixed CSV export timezone offsets." },
  { version: "3.1.0", date: "Oct 21", notes: "New activity feed and saved filters." },
  { version: "3.0.2", date: "Oct 09", notes: "Improved SSO error messages." },
  { version: "3.0.0", date: "Sep 30", notes: "Redesigned navigation and dark mode." },
  { version: "2.9.1", date: "Sep 14", notes: "Webhook retries with backoff." },
]

export default function ChangelogTimeline() {
  return (
    <ScrollArea className="h-72 w-full max-w-sm border">
      <ol className="relative flex flex-col gap-5 p-5 before:absolute before:inset-y-5 before:left-[25px] before:w-px before:bg-border">
        {releases.map((r, i) => (
          <li key={r.version} className="relative flex gap-3 pl-6">
            <span className={cn("absolute top-1 left-[1px] size-2.5 border-2 border-background", i === 0 ? "bg-primary" : "bg-muted-foreground")} />
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-medium">v{r.version}</span>
                {i === 0 && <Badge>Latest</Badge>}
                <span className="text-[11px] text-muted-foreground">{r.date}</span>
              </div>
              <p className="text-xs text-muted-foreground">{r.notes}</p>
            </div>
          </li>
        ))}
      </ol>
    </ScrollArea>
  )
}`,
  },
  {
    name: "TermsAcceptGate",
    description: "Terms of service that must be scrolled to the end before accepting.",
    code: `
const clauses = [
  "Accounts. You are responsible for safeguarding your password and all activity under your account.",
  "Acceptable use. Do not misuse the service, interfere with it, or access it using automated means.",
  "Billing. Paid plans renew automatically until cancelled from the billing settings page.",
  "Content. You retain ownership of the files you upload and grant us a license to host them.",
  "Termination. We may suspend accounts that violate these terms after reasonable notice.",
  "Liability. The service is provided as is, to the extent permitted by applicable law.",
  "Changes. We will notify you by email at least 30 days before material changes take effect.",
]

export default function TermsAcceptGate() {
  const endRef = React.useRef<null | HTMLDivElement>(null)
  const [reachedEnd, setReachedEnd] = React.useState(false)
  const [agreed, setAgreed] = React.useState(false)

  React.useEffect(() => {
    const node = endRef.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) setReachedEnd(true)
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <ScrollArea className="h-56 border">
        <div className="flex flex-col gap-3 p-4 text-xs leading-relaxed">
          <h3 className="text-sm font-semibold">Terms of Service</h3>
          {clauses.map((clause, i) => (
            <p key={i}><span className="font-medium">{i + 1}.</span> {clause}</p>
          ))}
          <div ref={endRef} className="h-px" />
        </div>
      </ScrollArea>
      <Label className="flex items-center gap-2 text-xs">
        <Checkbox checked={agreed} disabled={!reachedEnd} onCheckedChange={(v) => setAgreed(v === true)} />
        I have read and agree to the terms
      </Label>
      <Button disabled={!agreed}>{reachedEnd ? "Continue" : "Scroll to the end to continue"}</Button>
    </div>
  )
}`,
  },
  {
    name: "FilterableCommandList",
    description: "Search input that filters a scrollable list of commands.",
    code: `
const commands = [
  { label: "Create project", icon: FolderPlusIcon },
  { label: "Invite teammate", icon: UserPlusIcon },
  { label: "Open billing", icon: CreditCardIcon },
  { label: "Toggle dark mode", icon: MoonIcon },
  { label: "View shortcuts", icon: KeyboardIcon },
  { label: "Export data", icon: DownloadIcon },
  { label: "Import CSV", icon: UploadIcon },
  { label: "Archive workspace", icon: ArchiveIcon },
  { label: "Contact support", icon: LifeBuoyIcon },
  { label: "Sign out", icon: LogOutIcon },
]

export default function FilterableCommandList() {
  const [query, setQuery] = React.useState("")
  const results = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="w-full max-w-sm border">
      <InputGroup className="border-0 border-b">
        <InputGroupAddon><SearchIcon /></InputGroupAddon>
        <InputGroupInput value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search commands..." />
      </InputGroup>
      <ScrollArea className="h-56">
        <div className="flex flex-col p-1">
          {results.map((c) => (
            <button key={c.label} className="flex items-center gap-2 px-2 py-1.5 text-left text-xs hover:bg-muted">
              <c.icon className="size-3.5 text-muted-foreground" />
              {c.label}
            </button>
          ))}
          {results.length === 0 && (
            <p className="py-8 text-center text-xs text-muted-foreground">No commands match &quot;{query}&quot;</p>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "CodeSnippetBothAxes",
    description: "Code block that scrolls both vertically and horizontally.",
    code: `
const code = [
  "import { createClient } from '@fieldnote/sdk'",
  "",
  "const client = createClient({ apiKey: process.env.FIELDNOTE_API_KEY, region: 'eu-west-1', timeout: 10_000 })",
  "",
  "export async function syncOrders(since: Date) {",
  "  const orders = await client.orders.list({ updatedAfter: since.toISOString(), limit: 100, expand: ['customer', 'items'] })",
  "  for (const order of orders.data) {",
  "    await db.orders.upsert({ where: { id: order.id }, create: order, update: order })",
  "  }",
  "  return orders.data.length",
  "}",
  "",
  "syncOrders(new Date(Date.now() - 86_400_000)).then((count) => console.log('synced', count))",
]

export default function CodeSnippetBothAxes() {
  return (
    <ScrollArea className="h-56 w-full max-w-md border bg-muted/30">
      <pre className="w-max p-4 font-mono text-xs">
        {code.map((line, i) => (
          <div key={i} className="flex gap-4">
            <span className="w-5 text-right text-muted-foreground select-none">{i + 1}</span>
            <span>{line}</span>
          </div>
        ))}
      </pre>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}`,
  },
  {
    name: "WideDataTable",
    description: "Wide data table with a sticky header that scrolls in both directions.",
    code: `
const columns = ["Invoice", "Customer", "Email", "Plan", "Amount", "Status", "Issued", "Due"]
const rows = Array.from({ length: 12 }, (_, i) => [
  "INV-" + (2040 + i),
  ["Kai Moreno", "Rosa Lind", "Omar Aziz", "Lena Fox"][i % 4],
  ["kai", "rosa", "omar", "lena"][i % 4] + "@example.com",
  ["Pro", "Team", "Starter"][i % 3],
  "$" + (49 + i * 12) + ".00",
  ["Paid", "Pending", "Overdue"][i % 3],
  "Oct " + (i + 1),
  "Nov " + (i + 1),
])

export default function WideDataTable() {
  return (
    <ScrollArea className="h-72 w-full max-w-md border">
      <table className="w-max min-w-full text-xs">
        <thead className="sticky top-0 z-10 bg-muted">
          <tr>
            {columns.map((c) => (
              <th key={c} className="px-3 py-2 text-left font-medium whitespace-nowrap">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t">
              {row.map((cell, i) => (
                <td key={i} className="px-3 py-2 whitespace-nowrap">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}`,
  },
  {
    name: "PlaylistTracks",
    description: "Scrollable playlist with track numbers, titles, and durations.",
    code: `
const tracks = [
  ["Glasshouse", "Mira Vale", "3:42"], ["Low Tide", "The Ferns", "4:05"], ["Paper Moons", "Odile", "2:58"],
  ["Northbound", "Kestrel", "3:31"], ["Satellite Heart", "Juno Ray", "3:17"], ["Copper Sky", "Mira Vale", "4:22"],
  ["Night Swim", "Halcyon", "3:49"], ["Static Bloom", "The Ferns", "2:44"], ["Long Weekend", "Odile", "3:08"],
  ["Lantern", "Kestrel", "4:11"],
]

export default function PlaylistTracks() {
  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center gap-3 border-b p-3">
        <div className="size-12 shrink-0 bg-gradient-to-br from-orange-400 via-pink-500 to-violet-600" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">Late Night Focus</p>
          <p className="text-xs text-muted-foreground">{tracks.length} songs - 36 min</p>
        </div>
        <Button size="icon" aria-label="Play"><PlayIcon /></Button>
      </div>
      <ScrollArea className="h-60">
        {tracks.map(([title, artist, length], i) => (
          <div key={title} className="flex items-center gap-3 px-3 py-2 text-xs hover:bg-muted">
            <span className="w-4 text-right text-muted-foreground tabular-nums">{i + 1}</span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium">{title}</p>
              <p className="truncate text-muted-foreground">{artist}</p>
            </div>
            <span className="text-muted-foreground tabular-nums">{length}</span>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "TeamMembersRoles",
    description: "Workspace members list with role selectors inside a scroll area.",
    code: `
const members = [
  ["Ava Lindqvist", "ava@orbit.dev", "Owner"], ["Ben Okafor", "ben@orbit.dev", "Admin"],
  ["Chloe Martin", "chloe@orbit.dev", "Member"], ["Dev Raman", "dev@orbit.dev", "Member"],
  ["Elif Hansen", "elif@orbit.dev", "Admin"], ["Felix Braun", "felix@orbit.dev", "Viewer"],
  ["Gia Santos", "gia@orbit.dev", "Member"], ["Hugo Laurent", "hugo@orbit.dev", "Viewer"],
]

export default function TeamMembersRoles() {
  return (
    <Card className="w-full max-w-md gap-0 py-0">
      <CardHeader className="border-b py-4">
        <CardTitle>Team members</CardTitle>
        <CardDescription>{members.length} people have access to this workspace.</CardDescription>
      </CardHeader>
      <ScrollArea className="h-64">
        <div className="flex flex-col divide-y">
          {members.map(([name, email, role]) => (
            <div key={email} className="flex items-center gap-3 px-4 py-2.5">
              <Avatar className="size-8"><AvatarFallback>{name!.split(" ").map((p) => p[0]).join("")}</AvatarFallback></Avatar>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium">{name}</p>
                <p className="truncate text-xs text-muted-foreground">{email}</p>
              </div>
              <Badge variant={role === "Owner" ? "default" : "outline"}>{role}</Badge>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}`,
  },
  {
    name: "CountryRadioList",
    description: "Scrollable radio list for choosing a shipping country.",
    code: `
const countries = ["Argentina", "Australia", "Austria", "Belgium", "Brazil", "Canada", "Chile", "Denmark", "Finland", "France", "Germany", "Ireland", "Italy", "Japan", "Mexico", "Netherlands", "Norway", "Portugal", "Spain", "Sweden"]

export default function CountryRadioList() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label className="text-xs">Shipping country</Label>
      <ScrollArea className="h-56 border">
        <RadioGroup defaultValue="Portugal" className="gap-0 p-1">
          {countries.map((c) => (
            <Label key={c} className="flex items-center gap-2 px-2 py-1.5 text-xs font-normal hover:bg-muted">
              <RadioGroupItem value={c} />
              {c}
            </Label>
          ))}
        </RadioGroup>
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "EmojiPickerGrid",
    description: "Emoji picker with grouped emoji grids inside a scroll area.",
    code: `
const groups = [
  { label: "Smileys", items: ["😀", "😄", "😁", "😅", "😂", "🙂", "😉", "😊", "😍", "🤩", "😎", "🤔", "😴", "🥳"] },
  { label: "Gestures", items: ["👍", "👎", "👏", "🙌", "🙏", "👋", "✌️", "🤞", "💪", "👀"] },
  { label: "Objects", items: ["🎉", "🔥", "✨", "💡", "📌", "📎", "🧩", "🎯", "🚀", "⏰", "📦", "🔒"] },
  { label: "Nature", items: ["🌱", "🌸", "🌊", "⛰️", "🌙", "☀️", "🌈", "❄️", "🍀", "🌵"] },
]

export default function EmojiPickerGrid() {
  const [picked, setPicked] = React.useState("👍")

  return (
    <div className="w-full max-w-xs border">
      <div className="flex items-center gap-2 border-b px-3 py-2 text-xs">
        <span className="text-lg">{picked}</span>
        <span className="text-muted-foreground">Selected reaction</span>
      </div>
      <ScrollArea className="h-56">
        <div className="flex flex-col gap-3 p-3">
          {groups.map((g) => (
            <div key={g.label} className="flex flex-col gap-1">
              <span className="text-[10px] font-medium text-muted-foreground uppercase">{g.label}</span>
              <div className="grid grid-cols-7 gap-1">
                {g.items.map((e) => (
                  <button
                    key={e}
                    onClick={() => setPicked(e)}
                    aria-label={"React with " + e}
                    className={cn("flex aspect-square items-center justify-center text-lg hover:bg-muted", picked === e && "bg-muted ring-1 ring-ring")}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "ProductShelfHorizontal",
    description: "Horizontally scrolling product shelf with gradient thumbnails.",
    code: `
const products = [
  { name: "Linen Shirt", price: "$68", tone: "from-stone-200 to-stone-400" },
  { name: "Canvas Tote", price: "$32", tone: "from-amber-200 to-orange-400" },
  { name: "Wool Beanie", price: "$24", tone: "from-slate-300 to-slate-600" },
  { name: "Trail Sneaker", price: "$120", tone: "from-emerald-200 to-teal-500" },
  { name: "Rain Shell", price: "$145", tone: "from-sky-200 to-indigo-500" },
  { name: "Desk Lamp", price: "$89", tone: "from-rose-200 to-fuchsia-500" },
]

export default function ProductShelfHorizontal() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium">You might also like</span>
        <a href="#" className="text-xs text-muted-foreground hover:text-foreground">View all</a>
      </div>
      <ScrollArea className="w-full">
        <div className="flex w-max gap-3 pb-3">
          {products.map((p) => (
            <div key={p.name} className="flex w-32 shrink-0 flex-col gap-2">
              <div className={cn("aspect-[4/5] bg-gradient-to-br", p.tone)} />
              <div className="text-xs">
                <p className="truncate font-medium">{p.name}</p>
                <p className="text-muted-foreground">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "KanbanBoardScroll",
    description: "Kanban board that scrolls horizontally, with each column scrolling vertically.",
    code: `
const columns = [
  { title: "Backlog", cards: ["Audit email templates", "Pricing FAQ", "Referral program brief", "Update logo assets", "Localize checkout"] },
  { title: "In progress", cards: ["Billing redesign", "Webhook retries", "Mobile nav polish"] },
  { title: "Review", cards: ["SSO for Teams", "Usage-based invoices"] },
  { title: "Done", cards: ["Dark mode", "CSV export", "Saved filters", "Activity feed"] },
]

export default function KanbanBoardScroll() {
  return (
    <ScrollArea className="w-full max-w-lg border bg-muted/30">
      <div className="flex w-max gap-3 p-3">
        {columns.map((col) => (
          <div key={col.title} className="flex w-44 flex-col border bg-background">
            <div className="flex items-center justify-between border-b px-2 py-1.5 text-xs font-medium">
              {col.title}
              <Badge variant="secondary">{col.cards.length}</Badge>
            </div>
            <ScrollArea className="h-44">
              <div className="flex flex-col gap-2 p-2">
                {col.cards.map((card) => (
                  <div key={card} className="border p-2 text-xs shadow-xs">{card}</div>
                ))}
              </div>
            </ScrollArea>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}`,
  },
  {
    name: "ServerLogConsole",
    description: "Dark monospace server log console with colored log levels.",
    code: `
const levels = ["INFO", "INFO", "WARN", "INFO", "ERROR", "INFO", "DEBUG"]
const messages = [
  "GET /api/orders 200 32ms", "POST /api/checkout 201 118ms", "Slow query on invoices (812ms)",
  "Cache warmed: 1,240 keys", "Payment provider timeout after 10s", "Worker job sync-orders completed", "Retrying webhook evt_93a",
]
const logs = Array.from({ length: 21 }, (_, i) => ({
  time: "12:04:" + String(10 + i).padStart(2, "0"),
  level: levels[i % levels.length]!,
  text: messages[i % messages.length]!,
}))

const tone: Record<string, string> = {
  INFO: "text-sky-400",
  WARN: "text-amber-400",
  ERROR: "text-red-400",
  DEBUG: "text-zinc-500",
}

export default function ServerLogConsole() {
  return (
    <ScrollArea className="h-64 w-full max-w-md border bg-zinc-950 text-zinc-100">
      <div className="flex flex-col gap-0.5 p-3 font-mono text-[11px]">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-zinc-500">{log.time}</span>
            <span className={cn("w-10 shrink-0 font-semibold", tone[log.level])}>{log.level}</span>
            <span className="truncate">{log.text}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}`,
  },
  {
    name: "FileTreeExplorer",
    description: "Project file tree with nested folders in a scrollable sidebar.",
    code: `
const tree = [
  { name: "src", depth: 0, folder: true },
  { name: "app", depth: 1, folder: true },
  { name: "layout.tsx", depth: 2 },
  { name: "page.tsx", depth: 2 },
  { name: "dashboard", depth: 2, folder: true },
  { name: "page.tsx", depth: 3 },
  { name: "loading.tsx", depth: 3 },
  { name: "components", depth: 1, folder: true },
  { name: "header.tsx", depth: 2 },
  { name: "sidebar.tsx", depth: 2 },
  { name: "chart.tsx", depth: 2 },
  { name: "lib", depth: 1, folder: true },
  { name: "db.ts", depth: 2 },
  { name: "auth.ts", depth: 2 },
  { name: "package.json", depth: 0 },
  { name: "tsconfig.json", depth: 0 },
  { name: "README.md", depth: 0 },
]

export default function FileTreeExplorer() {
  return (
    <div className="w-full max-w-xs border">
      <div className="border-b px-3 py-2 text-[10px] font-medium tracking-wide text-muted-foreground uppercase">Explorer</div>
      <ScrollArea className="h-64">
        <div className="flex flex-col py-1 text-xs">
          {tree.map((node, i) => (
            <div key={i} className="flex items-center gap-1.5 py-1 pr-3 hover:bg-muted" style={{ paddingLeft: 12 + node.depth * 14 }}>
              {node.folder ? <FolderIcon className="size-3.5 shrink-0 text-sky-500" /> : <FileIcon className="size-3.5 shrink-0 text-muted-foreground" />}
              <span className="truncate">{node.name}</span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "FadeEdgeIndicators",
    description: "Scroll area that fades its top and bottom edges only when more content exists.",
    code: `
const steps = [
  "Create your workspace", "Invite your team", "Connect your calendar", "Import existing projects",
  "Set up notifications", "Choose a theme", "Install the desktop app", "Enable two-factor auth",
  "Configure billing", "Create your first report", "Share a dashboard", "Explore integrations",
]

export default function FadeEdgeIndicators() {
  return (
    <ScrollArea className="group/scroll h-64 w-full max-w-xs border">
      <div className="pointer-events-none sticky top-0 z-10 -mb-8 h-8 bg-gradient-to-b from-background to-transparent opacity-0 transition-opacity group-data-[overflow-y-start]/scroll:opacity-100" />
      <ol className="flex flex-col gap-1 p-3">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-2 px-2 py-2 text-xs">
            <span className="flex size-5 shrink-0 items-center justify-center bg-muted font-mono text-[10px]">{i + 1}</span>
            {step}
          </li>
        ))}
      </ol>
      <div className="pointer-events-none sticky bottom-0 -mt-8 h-8 bg-gradient-to-t from-background to-transparent opacity-0 transition-opacity group-data-[overflow-y-end]/scroll:opacity-100" />
    </ScrollArea>
  )
}`,
  },
  {
    name: "ScrollToTopButton",
    description: "Long article with a back-to-top button that appears after scrolling.",
    code: `
const sections = ["Getting started", "Workspaces", "Projects", "Permissions", "Integrations", "Billing", "Security", "Exporting data"]

export default function ScrollToTopButton() {
  const topRef = React.useRef<null | HTMLDivElement>(null)
  const [showTop, setShowTop] = React.useState(false)

  React.useEffect(() => {
    const node = topRef.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => setShowTop(!entry?.isIntersecting))
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const scrollTop = () => {
    const viewport = topRef.current?.closest("[data-slot=scroll-area-viewport]") as HTMLElement | null | undefined
    viewport?.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="relative w-full max-w-sm">
      <ScrollArea className="h-72 border">
        <div ref={topRef} className="h-px" />
        <div className="flex flex-col gap-4 p-4">
          {sections.map((s) => (
            <section key={s} className="flex flex-col gap-1">
              <h4 className="text-sm font-medium">{s}</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Learn how {s.toLowerCase()} works in Fieldnote, including defaults, limits, and the settings admins can change.
              </p>
            </section>
          ))}
        </div>
      </ScrollArea>
      {showTop && (
        <Button size="icon-sm" variant="secondary" aria-label="Back to top" onClick={scrollTop} className="absolute right-4 bottom-3 shadow-sm">
          <ArrowUpIcon />
        </Button>
      )}
    </div>
  )
}`,
  },
  {
    name: "ReadingProgressBar",
    description: "Article reader with a progress bar driven by scroll position.",
    code: `
const paragraphs = [
  "Remote teams often struggle with context. Decisions happen in calls, and the reasoning disappears.",
  "Writing things down changes that. A short decision log turns tribal knowledge into something searchable.",
  "Start small: one page per project, updated weekly, with links to the discussions that mattered.",
  "Over time, the log becomes the onboarding guide you never had time to write.",
  "New teammates read the history instead of interrupting the people who lived it.",
  "The habit compounds. Each entry makes the next decision faster and the team more aligned.",
]

export default function ReadingProgressBar() {
  const contentRef = React.useRef<null | HTMLDivElement>(null)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const viewport = contentRef.current?.closest("[data-slot=scroll-area-viewport]") as HTMLElement | null | undefined
    if (!viewport) return
    const onScroll = () => {
      const max = viewport.scrollHeight - viewport.clientHeight
      setProgress(max > 0 ? Math.round((viewport.scrollTop / max) * 100) : 100)
    }
    onScroll()
    viewport.addEventListener("scroll", onScroll, { passive: true })
    return () => viewport.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center gap-2 border-b px-3 py-2">
        <BookOpenIcon className="size-3.5" />
        <span className="flex-1 truncate text-xs font-medium">The case for decision logs</span>
        <span className="text-[11px] text-muted-foreground tabular-nums">{progress}%</span>
      </div>
      <Progress value={progress} className="h-0.5" />
      <ScrollArea className="h-56">
        <div ref={contentRef} className="flex flex-col gap-3 p-4 text-xs leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "TableOfContentsJump",
    description: "Handbook with a table of contents that scrolls to sections inside the scroll area.",
    code: `
const sections = [
  { id: "values", title: "Our values" },
  { id: "hours", title: "Working hours" },
  { id: "leave", title: "Time off" },
  { id: "equipment", title: "Equipment" },
  { id: "expenses", title: "Expenses" },
]

export default function TableOfContentsJump() {
  const [active, setActive] = React.useState("values")

  const jump = (id: string) => {
    const target = document.getElementById("handbook-" + id)
    const viewport = target?.closest("[data-slot=scroll-area-viewport]") as HTMLElement | null | undefined
    if (target && viewport) viewport.scrollTo({ top: target.offsetTop - 8, behavior: "smooth" })
    setActive(id)
  }

  return (
    <div className="flex w-full max-w-md border">
      <nav className="flex w-32 shrink-0 flex-col gap-0.5 border-r p-2 text-xs">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => jump(s.id)}
            className={cn("truncate px-2 py-1 text-left hover:bg-muted", active === s.id && "bg-muted font-medium")}
          >
            {s.title}
          </button>
        ))}
      </nav>
      <ScrollArea className="h-64 flex-1">
        <div className="relative flex flex-col gap-6 p-4">
          {sections.map((s) => (
            <section key={s.id} id={"handbook-" + s.id} className="flex flex-col gap-1">
              <h4 className="text-sm font-medium">{s.title}</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Everything you need to know about {s.title.toLowerCase()} at Orbit Labs, from day one through your first year.
                Reach out to the people team with questions.
              </p>
            </section>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "DayScheduleTimeline",
    description: "Hour-by-hour day schedule with events in a scrollable timeline.",
    code: `
const hours = Array.from({ length: 13 }, (_, i) => i + 7)
const events: Record<number, { title: string; tone: string }> = {
  9: { title: "Standup", tone: "border-sky-500 bg-sky-500/10" },
  11: { title: "Design review", tone: "border-violet-500 bg-violet-500/10" },
  13: { title: "Lunch with Priya", tone: "border-emerald-500 bg-emerald-500/10" },
  15: { title: "Customer call", tone: "border-amber-500 bg-amber-500/10" },
  17: { title: "Gym", tone: "border-rose-500 bg-rose-500/10" },
}

export default function DayScheduleTimeline() {
  return (
    <div className="w-full max-w-xs border">
      <div className="border-b px-3 py-2 text-sm font-medium">Tuesday, Mar 4</div>
      <ScrollArea className="h-72">
        {hours.map((h) => (
          <div key={h} className="flex h-12 border-b last:border-0">
            <span className="w-12 shrink-0 pt-1 pr-2 text-right text-[10px] text-muted-foreground tabular-nums">
              {String(h).padStart(2, "0")}:00
            </span>
            <div className="flex-1 p-1">
              {events[h] && (
                <div className={cn("h-full border-l-2 px-2 py-1 text-xs font-medium", events[h].tone)}>
                  {events[h].title}
                </div>
              )}
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "TimeSlotPicker",
    description: "Booking widget with a scrollable column of selectable time slots.",
    code: `
const slots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00"]
const taken = new Set(["10:00", "13:30", "15:00"])

export default function TimeSlotPicker() {
  const [slot, setSlot] = React.useState<string | null>(null)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-3">
      <div>
        <p className="text-sm font-medium">Book a 30 min intro call</p>
        <p className="text-xs text-muted-foreground">Wednesday, April 9 - CET</p>
      </div>
      <ScrollArea className="h-52">
        <div className="flex flex-col gap-1.5 pr-3">
          {slots.map((s) => (
            <Button
              key={s}
              variant={slot === s ? "default" : "outline"}
              disabled={taken.has(s)}
              onClick={() => setSlot(s)}
              className="w-full tabular-nums"
            >
              {s}
            </Button>
          ))}
        </div>
      </ScrollArea>
      <Button disabled={!slot}>{slot ? "Confirm " + slot : "Select a time"}</Button>
    </div>
  )
}`,
  },
  {
    name: "InboxUnreadList",
    description: "Email inbox list with unread styling inside a scroll area.",
    code: `
const emails = [
  { from: "Parcel", subject: "Your order has shipped", preview: "Track package #PX-4421 on the way", unread: true },
  { from: "Maya Chen", subject: "Roadmap feedback", preview: "Left a few comments on the Q3 doc", unread: true },
  { from: "Fieldnote", subject: "Weekly digest", preview: "12 new notes across 4 projects", unread: false },
  { from: "Leo Park", subject: "Invoice #2041", preview: "Payment received, thanks!", unread: false },
  { from: "Security", subject: "New sign-in", preview: "Firefox on macOS from Lisbon", unread: true },
  { from: "Ines Duarte", subject: "Crit notes", preview: "Summary from today's design crit", unread: false },
  { from: "Calendar", subject: "Offsite next week", preview: "Reminder: travel details inside", unread: false },
]

export default function InboxUnreadList() {
  return (
    <ScrollArea className="h-72 w-full max-w-sm border">
      <div className="flex flex-col divide-y">
        {emails.map((e) => (
          <a key={e.subject} href="#" className="flex flex-col gap-0.5 px-4 py-3 hover:bg-muted/60">
            <div className="flex items-center gap-2 text-xs">
              {e.unread && <span className="size-1.5 rounded-full bg-primary" />}
              <span className={cn("flex-1 truncate", e.unread ? "font-semibold" : "text-muted-foreground")}>{e.from}</span>
            </div>
            <span className={cn("truncate text-xs", e.unread && "font-medium")}>{e.subject}</span>
            <span className="truncate text-xs text-muted-foreground">{e.preview}</span>
          </a>
        ))}
      </div>
    </ScrollArea>
  )
}`,
  },
  {
    name: "CommentThreadPanel",
    description: "Discussion thread with nested replies and a composer under a scroll area.",
    code: `
const comments = [
  { name: "Hana Sato", text: "Can we tighten the hero copy? It feels long on mobile.", reply: false },
  { name: "Victor Lund", text: "Agreed, I'll cut the second sentence.", reply: true },
  { name: "Nadia Alvarez", text: "Also the CTA contrast fails AA in dark mode.", reply: false },
  { name: "Hana Sato", text: "Good catch. Let's use the primary token there.", reply: true },
  { name: "Mateo Cruz", text: "Pushed both fixes to the preview branch.", reply: false },
  { name: "Nadia Alvarez", text: "Looks great now, approving.", reply: true },
]

export default function CommentThreadPanel() {
  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="border-b px-3 py-2 text-sm font-medium">Comments ({comments.length})</div>
      <ScrollArea className="h-64">
        <div className="flex flex-col gap-3 p-3">
          {comments.map((c, i) => (
            <div key={i} className={cn("flex gap-2", c.reply && "ml-8")}>
              <Avatar className="size-6"><AvatarFallback className="text-[10px]">{c.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback></Avatar>
              <div className="flex-1 text-xs">
                <span className="font-medium">{c.name}</span>
                <p className="text-muted-foreground">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="flex gap-2 border-t p-2">
        <Input placeholder="Add a comment" aria-label="Add a comment" />
        <Button>Post</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "BillingHistoryList",
    description: "Billing settings card with a scrollable list of past invoices.",
    code: `
const invoices = Array.from({ length: 10 }, (_, i) => ({
  id: "INV-" + (2050 - i),
  date: ["Nov", "Oct", "Sep", "Aug", "Jul", "Jun", "May", "Apr", "Mar", "Feb"][i] + " 1, 2026",
  amount: i === 4 ? "$0.00" : "$29.00",
  status: i === 0 ? "Due" : "Paid",
}))

export default function BillingHistoryList() {
  return (
    <Card className="w-full max-w-md gap-0 py-0">
      <CardHeader className="border-b py-4">
        <CardTitle>Billing history</CardTitle>
        <CardDescription>Download invoices for your records.</CardDescription>
      </CardHeader>
      <ScrollArea className="h-60">
        <div className="flex flex-col divide-y">
          {invoices.map((inv) => (
            <div key={inv.id} className="flex items-center gap-3 px-4 py-2.5 text-xs">
              <ReceiptIcon className="size-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="font-medium">{inv.id}</p>
                <p className="text-muted-foreground">{inv.date}</p>
              </div>
              <span className="tabular-nums">{inv.amount}</span>
              <Badge variant={inv.status === "Due" ? "default" : "secondary"}>{inv.status}</Badge>
              <Button size="icon-xs" variant="ghost" aria-label={"Download " + inv.id}><DownloadIcon /></Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}`,
  },
  {
    name: "CheckoutOrderSummary",
    description: "Checkout summary where line items scroll while the total stays fixed.",
    code: `
const items = [
  { name: "Linen Shirt", qty: 2, price: 68, tone: "from-stone-200 to-stone-400" },
  { name: "Canvas Tote", qty: 1, price: 32, tone: "from-amber-200 to-orange-400" },
  { name: "Wool Beanie", qty: 1, price: 24, tone: "from-slate-300 to-slate-600" },
  { name: "Trail Sneaker", qty: 1, price: 120, tone: "from-emerald-200 to-teal-500" },
  { name: "Rain Shell", qty: 1, price: 145, tone: "from-sky-200 to-indigo-500" },
  { name: "Merino Socks", qty: 3, price: 14, tone: "from-rose-200 to-pink-400" },
]

export default function CheckoutOrderSummary() {
  const subtotal = items.reduce((sum, i) => sum + i.qty * i.price, 0)

  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="border-b px-4 py-3 text-sm font-medium">Order summary</div>
      <ScrollArea className="h-56">
        <div className="flex flex-col gap-3 p-4">
          {items.map((item) => (
            <div key={item.name} className="flex items-center gap-3 text-xs">
              <div className={cn("relative size-12 shrink-0 bg-gradient-to-br", item.tone)}>
                <span className="absolute -top-1.5 -right-1.5 flex size-4 items-center justify-center rounded-full bg-foreground text-[10px] text-background">
                  {item.qty}
                </span>
              </div>
              <span className="flex-1 truncate font-medium">{item.name}</span>
              <span className="tabular-nums">\${item.qty * item.price}.00</span>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="flex flex-col gap-1 border-t p-4 text-xs">
        <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="tabular-nums">\${subtotal}.00</span></div>
        <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>Free</span></div>
        <div className="flex justify-between text-sm font-semibold"><span>Total</span><span className="tabular-nums">\${subtotal}.00</span></div>
        <Button className="mt-2">Pay now</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "CartItemsQuantity",
    description: "Shopping cart with quantity steppers in a scrollable item list.",
    code: `
const initial = [
  { id: 1, name: "Pour-over Kettle", price: 54, qty: 1 },
  { id: 2, name: "Ceramic Dripper", price: 28, qty: 1 },
  { id: 3, name: "Paper Filters (100)", price: 9, qty: 2 },
  { id: 4, name: "Single Origin - Kenya", price: 19, qty: 1 },
  { id: 5, name: "Burr Grinder", price: 139, qty: 1 },
  { id: 6, name: "Glass Server", price: 32, qty: 1 },
]

export default function CartItemsQuantity() {
  const [items, setItems] = React.useState(initial)
  const update = (id: number, delta: number) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i)).filter((i) => i.qty > 0))

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <span className="text-sm font-medium">Cart</span>
        <Badge variant="secondary">{items.reduce((n, i) => n + i.qty, 0)} items</Badge>
      </div>
      <ScrollArea className="h-60">
        <div className="flex flex-col divide-y">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-2 px-4 py-2.5 text-xs">
              <span className="min-w-0 flex-1 truncate">{item.name}</span>
              <Button size="icon-xs" variant="outline" aria-label="Decrease" onClick={() => update(item.id, -1)}><MinusIcon /></Button>
              <span className="w-5 text-center tabular-nums">{item.qty}</span>
              <Button size="icon-xs" variant="outline" aria-label="Increase" onClick={() => update(item.id, 1)}><PlusIcon /></Button>
              <span className="w-12 text-right tabular-nums">\${item.price * item.qty}</span>
            </div>
          ))}
          {items.length === 0 && <p className="py-10 text-center text-xs text-muted-foreground">Your cart is empty.</p>}
        </div>
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "EmptyOrPopulatedList",
    description: "Scroll area that toggles between an empty state and a populated list.",
    code: `
const files = ["brand-guide.pdf", "q3-forecast.xlsx", "hero-v4.fig", "onboarding.mp4", "contract-signed.pdf", "logo-pack.zip", "team-photo-alt.txt", "launch-plan.md"]

export default function EmptyOrPopulatedList() {
  const [hasFiles, setHasFiles] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Shared files</span>
        <Label className="flex items-center gap-2 text-xs">
          Demo data
          <Switch checked={hasFiles} onCheckedChange={setHasFiles} />
        </Label>
      </div>
      <ScrollArea className="h-60 border">
        {hasFiles ? (
          <div className="flex flex-col divide-y">
            {files.map((f) => (
              <div key={f} className="flex items-center gap-2 px-3 py-2 text-xs">
                <FileIcon className="size-3.5 text-muted-foreground" />
                {f}
              </div>
            ))}
          </div>
        ) : (
          <Empty className="h-60">
            <EmptyHeader>
              <EmptyMedia variant="icon"><FolderOpenIcon /></EmptyMedia>
              <EmptyTitle>No files yet</EmptyTitle>
              <EmptyDescription>Files shared in this channel will appear here.</EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "SkeletonLoadingList",
    description: "Scroll area filled with skeleton rows while results load.",
    code: `
export default function SkeletonLoadingList() {
  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center gap-2 border-b px-3 py-2 text-xs text-muted-foreground">
        <Spinner />
        Loading contacts...
      </div>
      <ScrollArea className="h-64">
        <div className="flex flex-col gap-4 p-3">
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="size-8 shrink-0 rounded-full" />
              <div className="flex flex-1 flex-col gap-1.5">
                <Skeleton className="h-2.5" style={{ width: 50 + ((i * 17) % 40) + "%" }} />
                <Skeleton className="h-2 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "LoadMoreAtBottom",
    description: "Activity list with a load more button that appends results with a loading state.",
    code: `
const actions = ["created a project", "uploaded 3 files", "commented on a task", "closed an issue", "updated the roadmap"]
const people = ["Ava", "Ben", "Chloe", "Dev", "Elif"]

function makeItems(start: number, count: number) {
  return Array.from({ length: count }, (_, i) => {
    const n = start + i
    return { id: n, who: people[n % people.length]!, what: actions[n % actions.length]!, when: n + 1 + "h ago" }
  })
}

export default function LoadMoreAtBottom() {
  const [items, setItems] = React.useState(() => makeItems(0, 6))
  const [loading, setLoading] = React.useState(false)
  const done = items.length >= 18

  const loadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setItems((prev) => [...prev, ...makeItems(prev.length, 6)])
      setLoading(false)
    }, 800)
  }

  return (
    <ScrollArea className="h-72 w-full max-w-sm border">
      <div className="flex flex-col divide-y">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-2 px-3 py-2.5 text-xs">
            <Avatar className="size-6"><AvatarFallback className="text-[10px]">{item.who[0]}</AvatarFallback></Avatar>
            <span className="flex-1"><span className="font-medium">{item.who}</span> {item.what}</span>
            <span className="text-muted-foreground">{item.when}</span>
          </div>
        ))}
        <div className="p-3">
          <Button variant="outline" className="w-full" disabled={loading || done} onClick={loadMore}>
            {loading && <Spinner data-icon="inline-start" />}
            {done ? "You're all caught up" : loading ? "Loading..." : "Load more"}
          </Button>
        </div>
      </div>
    </ScrollArea>
  )
}`,
  },
  {
    name: "StickyAlphabetContacts",
    description: "Contacts directory with sticky alphabetical group headers.",
    code: `
const contacts = [
  "Aiko Tanaka", "Amara Obi", "Ben Okafor", "Bianca Ruiz", "Carlos Mendes", "Chloe Martin",
  "Dev Raman", "Dina Kovac", "Elif Hansen", "Emil Strand", "Farah Nasser", "Felix Braun",
  "Gia Santos", "Hana Sato", "Hugo Laurent",
]

export default function StickyAlphabetContacts() {
  const groups = contacts.reduce<Record<string, string[]>>((acc, name) => {
    const key = name[0]!
    ;(acc[key] ??= []).push(name)
    return acc
  }, {})

  return (
    <ScrollArea className="h-72 w-full max-w-xs border">
      {Object.entries(groups).map(([letter, names]) => (
        <div key={letter}>
          <div className="sticky top-0 z-10 border-b bg-muted px-3 py-1 text-[11px] font-semibold">{letter}</div>
          {names.map((name) => (
            <div key={name} className="flex items-center gap-2 px-3 py-2 text-xs">
              <Avatar className="size-6"><AvatarFallback className="text-[10px]">{name.split(" ").map((p) => p[0]).join("")}</AvatarFallback></Avatar>
              {name}
            </div>
          ))}
        </div>
      ))}
    </ScrollArea>
  )
}`,
  },
  {
    name: "OverflowingTabsBar",
    description: "Tab list with many tabs that scrolls horizontally on narrow screens.",
    code: `
const tabs = ["Overview", "Analytics", "Reports", "Customers", "Invoices", "Integrations", "Webhooks", "Audit log", "Settings"]

export default function OverflowingTabsBar() {
  return (
    <Tabs defaultValue="Overview" className="w-full max-w-md">
      <ScrollArea className="w-full">
        <TabsList className="mb-3 w-max">
          {tabs.map((t) => (
            <TabsTrigger key={t} value={t}>{t}</TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {tabs.map((t) => (
        <TabsContent key={t} value={t} className="border p-4 text-xs text-muted-foreground">
          {t} content for the Orbit Labs workspace.
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "OnboardingStepsHorizontal",
    description: "Horizontal onboarding stepper that scrolls through progress cards.",
    code: `
const steps = [
  { title: "Create account", done: true, icon: UserIcon },
  { title: "Verify email", done: true, icon: MailCheckIcon },
  { title: "Connect bank", done: false, icon: LandmarkIcon },
  { title: "Add team", done: false, icon: UsersIcon },
  { title: "Set budget", done: false, icon: PiggyBankIcon },
  { title: "Go live", done: false, icon: RocketIcon },
]

export default function OnboardingStepsHorizontal() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium">Setup progress</span>
        <span className="text-muted-foreground">2 of {steps.length} complete</span>
      </div>
      <ScrollArea className="w-full">
        <div className="flex w-max gap-2 pb-3">
          {steps.map((step, i) => (
            <div key={step.title} className={cn("flex w-32 flex-col gap-2 border p-3", i === 2 && "border-primary")}>
              <div className="flex items-center justify-between">
                <step.icon className="size-4 text-muted-foreground" />
                {step.done ? <CheckCircle2Icon className="size-4 text-emerald-600" /> : <CircleIcon className="size-4 text-muted-foreground/50" />}
              </div>
              <span className="text-xs font-medium">{step.title}</span>
              <span className="text-[10px] text-muted-foreground">Step {i + 1}</span>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "ColorPaletteSwatches",
    description: "Design token palette with scrollable color ramps.",
    code: `
const ramps = [
  { name: "Slate", shades: ["bg-slate-100", "bg-slate-300", "bg-slate-500", "bg-slate-700", "bg-slate-900"] },
  { name: "Sky", shades: ["bg-sky-100", "bg-sky-300", "bg-sky-500", "bg-sky-700", "bg-sky-900"] },
  { name: "Emerald", shades: ["bg-emerald-100", "bg-emerald-300", "bg-emerald-500", "bg-emerald-700", "bg-emerald-900"] },
  { name: "Amber", shades: ["bg-amber-100", "bg-amber-300", "bg-amber-500", "bg-amber-700", "bg-amber-900"] },
  { name: "Rose", shades: ["bg-rose-100", "bg-rose-300", "bg-rose-500", "bg-rose-700", "bg-rose-900"] },
  { name: "Violet", shades: ["bg-violet-100", "bg-violet-300", "bg-violet-500", "bg-violet-700", "bg-violet-900"] },
  { name: "Fuchsia", shades: ["bg-fuchsia-100", "bg-fuchsia-300", "bg-fuchsia-500", "bg-fuchsia-700", "bg-fuchsia-900"] },
]
const steps = [100, 300, 500, 700, 900]

export default function ColorPaletteSwatches() {
  return (
    <ScrollArea className="h-64 w-full max-w-sm border">
      <div className="flex flex-col gap-3 p-3">
        {ramps.map((ramp) => (
          <div key={ramp.name} className="flex flex-col gap-1">
            <span className="text-xs font-medium">{ramp.name}</span>
            <div className="grid grid-cols-5 gap-1">
              {ramp.shades.map((shade, i) => (
                <div key={shade} className="flex flex-col gap-0.5">
                  <div className={cn("h-8", shade)} />
                  <span className="font-mono text-[10px] text-muted-foreground">{steps[i]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}`,
  },
  {
    name: "PermissionsChecklist",
    description: "Role permissions editor with grouped checkboxes in a scroll area.",
    code: `
const groups = [
  { name: "Projects", perms: ["View projects", "Create projects", "Archive projects"] },
  { name: "Billing", perms: ["View invoices", "Update payment method", "Change plan"] },
  { name: "Members", perms: ["Invite members", "Remove members", "Change roles"] },
  { name: "Integrations", perms: ["Connect apps", "Manage API keys"] },
]

export default function PermissionsChecklist() {
  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="border-b px-4 py-3">
        <p className="text-sm font-medium">Editor role</p>
        <p className="text-xs text-muted-foreground">Choose what editors can do.</p>
      </div>
      <ScrollArea className="h-64">
        <div className="flex flex-col gap-4 p-4">
          {groups.map((g) => (
            <FieldSet key={g.name} className="gap-2">
              <FieldLegend variant="label">{g.name}</FieldLegend>
              {g.perms.map((p, i) => (
                <Field key={p} orientation="horizontal">
                  <Checkbox id={p} defaultChecked={i === 0} />
                  <FieldLabel htmlFor={p} className="font-normal">{p}</FieldLabel>
                </Field>
              ))}
            </FieldSet>
          ))}
        </div>
      </ScrollArea>
      <div className="flex justify-end gap-2 border-t p-3">
        <Button variant="outline">Cancel</Button>
        <Button>Save role</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "KeyboardShortcutsSheet",
    description: "Keyboard shortcut reference with grouped key combinations.",
    code: `
const sections = [
  { title: "General", items: [["Command menu", ["⌘", "K"]], ["Search", ["/"]], ["Settings", ["⌘", ","]]] },
  { title: "Navigation", items: [["Go to inbox", ["G", "I"]], ["Go to projects", ["G", "P"]], ["Next item", ["J"]], ["Previous item", ["K"]]] },
  { title: "Editing", items: [["Bold", ["⌘", "B"]], ["Italic", ["⌘", "I"]], ["Undo", ["⌘", "Z"]], ["Redo", ["⌘", "⇧", "Z"]]] },
] as const

export default function KeyboardShortcutsSheet() {
  return (
    <ScrollArea className="h-72 w-full max-w-sm border">
      <div className="flex flex-col gap-4 p-4">
        {sections.map((s) => (
          <div key={s.title} className="flex flex-col gap-2">
            <span className="text-[11px] font-medium text-muted-foreground uppercase">{s.title}</span>
            {s.items.map(([label, keys]) => (
              <div key={label} className="flex items-center justify-between text-xs">
                <span>{label}</span>
                <KbdGroup>
                  {keys.map((k) => (
                    <Kbd key={k}>{k}</Kbd>
                  ))}
                </KbdGroup>
              </div>
            ))}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}`,
  },
  {
    name: "FaqAccordionScroll",
    description: "Help widget with an FAQ accordion constrained by a scroll area.",
    code: `
const faqs = [
  ["Can I change my plan later?", "Yes, upgrade or downgrade any time from billing settings. Changes are prorated."],
  ["Do you offer refunds?", "We refund annual plans within 30 days of purchase, no questions asked."],
  ["Is my data encrypted?", "All data is encrypted in transit with TLS 1.3 and at rest with AES-256."],
  ["How do I export my data?", "Go to Settings, then Data, and choose CSV or JSON export."],
  ["Can I invite guests?", "Guests can view and comment on shared projects without a paid seat."],
  ["What happens when my trial ends?", "Your workspace switches to the free plan; nothing is deleted."],
]

export default function FaqAccordionScroll() {
  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <CircleHelpIcon className="size-4" />
        <span className="text-sm font-medium">Frequently asked</span>
      </div>
      <ScrollArea className="h-64">
        <Accordion className="px-4">
          {faqs.map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger className="text-xs">{q}</AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "NotificationPreferences",
    description: "Long list of notification toggles inside a settings scroll area.",
    code: `
const prefs = [
  ["Mentions", "When someone @mentions you"], ["Comments", "Replies on your posts"], ["Assignments", "Tasks assigned to you"],
  ["Due dates", "Reminders 24h before due"], ["Status changes", "Tasks you follow change status"], ["Weekly digest", "Summary every Monday"],
  ["Product updates", "New features and improvements"], ["Security alerts", "New sign-ins and password changes"], ["Billing", "Receipts and failed payments"],
]

export default function NotificationPreferences() {
  return (
    <Card className="w-full max-w-sm gap-0 py-0">
      <CardHeader className="border-b py-4">
        <CardTitle>Email notifications</CardTitle>
        <CardDescription>Decide what lands in your inbox.</CardDescription>
      </CardHeader>
      <ScrollArea className="h-64">
        <div className="flex flex-col divide-y">
          {prefs.map(([title, desc], i) => (
            <div key={title} className="flex items-center justify-between gap-3 px-4 py-3">
              <div className="min-w-0">
                <Label htmlFor={"pref-" + i} className="text-xs">{title}</Label>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
              <Switch id={"pref-" + i} defaultChecked={i % 3 !== 2} disabled={title === "Security alerts"} />
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}`,
  },
  {
    name: "SearchResultsHighlight",
    description: "Search results with highlighted matches in a scrollable list.",
    code: `
const docs = [
  "Webhook signing secrets and how to rotate them",
  "Retry policy for failed webhook deliveries",
  "Testing webhooks locally with the CLI",
  "Filtering webhook events by type",
  "Webhook payload reference",
  "Troubleshooting webhook timeouts",
  "Migrating from legacy webhook endpoints",
]

function Highlight({ text, query }: { text: string; query: string }) {
  const i = text.toLowerCase().indexOf(query.toLowerCase())
  if (!query || i < 0) return <>{text}</>
  return (
    <>
      {text.slice(0, i)}
      <mark className="bg-amber-200 text-foreground dark:bg-amber-500/40">{text.slice(i, i + query.length)}</mark>
      {text.slice(i + query.length)}
    </>
  )
}

export default function SearchResultsHighlight() {
  const [query, setQuery] = React.useState("webhook")
  const results = docs.filter((d) => d.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search docs" aria-label="Search docs" />
      <p className="text-xs text-muted-foreground">{results.length} results</p>
      <ScrollArea className="h-56 border">
        <div className="flex flex-col divide-y">
          {results.map((d) => (
            <a key={d} href="#" className="flex items-center gap-2 px-3 py-2.5 text-xs hover:bg-muted/60">
              <FileTextIcon className="size-3.5 shrink-0 text-muted-foreground" />
              <span><Highlight text={d} query={query} /></span>
            </a>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "KpiCardsCarousel",
    description: "Row of KPI cards that scrolls horizontally on small screens.",
    code: `
const kpis = [
  { label: "MRR", value: "$84.2k", delta: "+6.1%", up: true },
  { label: "Active users", value: "12,480", delta: "+3.4%", up: true },
  { label: "Churn", value: "2.1%", delta: "-0.4%", up: true },
  { label: "ARPU", value: "$41", delta: "-1.2%", up: false },
  { label: "Trials", value: "318", delta: "+12%", up: true },
  { label: "Tickets", value: "96", delta: "+8%", up: false },
]

export default function KpiCardsCarousel() {
  return (
    <ScrollArea className="w-full max-w-md">
      <div className="flex w-max gap-3 pb-3">
        {kpis.map((k) => (
          <div key={k.label} className="flex w-36 flex-col gap-1 border p-3">
            <span className="text-xs text-muted-foreground">{k.label}</span>
            <span className="text-xl font-semibold tabular-nums">{k.value}</span>
            <span className={cn("flex items-center gap-1 text-xs", k.up ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400")}>
              {k.up ? <TrendingUpIcon className="size-3.5" /> : <TrendingDownIcon className="size-3.5" />}
              {k.delta}
            </span>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}`,
  },
  {
    name: "MeetingTranscript",
    description: "Meeting transcript with timestamps and speaker labels.",
    code: `
const lines = [
  ["00:12", "Sana", "Thanks everyone for joining. Let's start with the launch status."],
  ["00:31", "Jonas", "Checkout is feature complete. QA found two minor issues."],
  ["01:05", "Priya", "Marketing assets are ready; the landing page goes live Tuesday."],
  ["01:42", "Sana", "Do we have a rollback plan if conversions drop?"],
  ["02:10", "Jonas", "Yes, the flag lets us revert to the old flow instantly."],
  ["02:38", "Luca", "Support has macros prepared for the most likely questions."],
  ["03:04", "Priya", "I'll share the launch email draft by end of day."],
  ["03:30", "Sana", "Great. Let's reconvene Thursday for a go or no-go."],
]

export default function MeetingTranscript() {
  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b px-3 py-2">
        <span className="flex items-center gap-2 text-sm font-medium"><AudioLinesIcon className="size-4" />Launch sync</span>
        <span className="text-xs text-muted-foreground">32 min</span>
      </div>
      <ScrollArea className="h-64">
        <div className="flex flex-col gap-3 p-3">
          {lines.map(([time, speaker, text], i) => (
            <div key={i} className="flex gap-3 text-xs">
              <span className="w-9 shrink-0 font-mono text-[11px] text-muted-foreground">{time}</span>
              <p><span className="font-medium">{speaker}:</span> <span className="text-muted-foreground">{text}</span></p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "ChatHistorySidebar",
    description: "Assistant conversation history grouped by date in a sidebar scroll area.",
    code: `
const history = [
  { group: "Today", chats: ["Refactor billing webhook", "Write onboarding email"] },
  { group: "Yesterday", chats: ["SQL for churn cohort", "Summarize user interviews", "Name ideas for beta"] },
  { group: "Previous 7 days", chats: ["Regex for invoice IDs", "Pricing page copy", "Explain OAuth PKCE", "Plan team offsite"] },
  { group: "Older", chats: ["Migrate to Postgres 16", "Draft privacy policy", "Unit tests for cart"] },
]

export default function ChatHistorySidebar() {
  return (
    <div className="flex w-full max-w-60 flex-col border bg-muted/30">
      <div className="p-2">
        <Button variant="outline" className="w-full justify-start">
          <SquarePenIcon data-icon="inline-start" />
          New chat
        </Button>
      </div>
      <ScrollArea className="h-72">
        <div className="flex flex-col gap-3 p-2">
          {history.map((h) => (
            <div key={h.group} className="flex flex-col gap-0.5">
              <span className="px-2 text-[10px] font-medium text-muted-foreground">{h.group}</span>
              {h.chats.map((c, i) => (
                <a key={c} href="#" className={cn("truncate px-2 py-1.5 text-xs hover:bg-muted", h.group === "Today" && i === 0 && "bg-muted")}>
                  {c}
                </a>
              ))}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "GradientGalleryGrid",
    description: "Scrollable grid of gradient wallpapers with selection.",
    code: `
const gradients = [
  "from-rose-400 to-orange-300", "from-sky-400 to-indigo-500", "from-emerald-300 to-teal-600",
  "from-fuchsia-500 to-purple-700", "from-amber-200 to-yellow-500", "from-slate-500 to-slate-900",
  "from-pink-300 to-rose-500", "from-cyan-300 to-blue-600", "from-lime-300 to-green-600",
  "from-violet-300 to-indigo-700", "from-orange-400 to-red-600", "from-teal-200 to-cyan-500",
]

export default function GradientGalleryGrid() {
  const [picked, setPicked] = React.useState(1)

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <span className="text-sm font-medium">Choose a wallpaper</span>
      <ScrollArea className="h-60 border">
        <div className="grid grid-cols-3 gap-2 p-2">
          {gradients.map((g, i) => (
            <button
              key={g}
              onClick={() => setPicked(i)}
              aria-label={"Wallpaper " + (i + 1)}
              aria-pressed={picked === i}
              className={cn("relative aspect-[3/4] bg-gradient-to-br", g, picked === i && "ring-2 ring-ring ring-offset-2 ring-offset-background")}
            >
              {picked === i && <CheckIcon className="absolute top-1 right-1 size-3.5 text-white" />}
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "BrandedScrollbarThumb",
    description: "Scroll area with a custom-colored, wider scrollbar thumb.",
    code: `
const entries = Array.from({ length: 16 }, (_, i) => ({
  day: "Day " + (i + 1),
  note: ["Ran 5k along the river", "Rest day and stretching", "Intervals: 6 x 400m", "Long ride, 42 km"][i % 4],
}))

export default function BrandedScrollbarThumb() {
  return (
    <ScrollArea className="h-64 w-full max-w-xs border [&_[data-slot=scroll-area-scrollbar]]:w-3 [&_[data-slot=scroll-area-thumb]]:rounded-full [&_[data-slot=scroll-area-thumb]]:bg-primary/60 hover:[&_[data-slot=scroll-area-thumb]]:bg-primary">
      <div className="flex flex-col divide-y pr-2">
        {entries.map((e) => (
          <div key={e.day} className="flex flex-col px-3 py-2 text-xs">
            <span className="font-medium">{e.day}</span>
            <span className="text-muted-foreground">{e.note}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}`,
  },
  {
    name: "LeaderboardRanking",
    description: "Leaderboard with medal ranks and the current user pinned below.",
    code: `
const players = [
  "Nova", "Kestrel", "Juniper", "Atlas", "Wren", "Orion", "Sable", "Indigo", "Marlow", "Quill", "Rhea", "Tobin",
].map((name, i) => ({ name, points: 9800 - i * 430 - (i % 3) * 55 }))

export default function LeaderboardRanking() {
  return (
    <div className="w-full max-w-xs border">
      <div className="flex items-center gap-2 border-b px-3 py-2 text-sm font-medium">
        <TrophyIcon className="size-4 text-amber-500" />
        Weekly leaderboard
      </div>
      <ScrollArea className="h-60">
        {players.map((p, i) => (
          <div key={p.name} className="flex items-center gap-3 px-3 py-2 text-xs">
            <span
              className={cn(
                "flex size-6 items-center justify-center font-semibold tabular-nums",
                i === 0 && "bg-amber-400 text-amber-950",
                i === 1 && "bg-zinc-300 text-zinc-900",
                i === 2 && "bg-orange-300 text-orange-950",
                i > 2 && "text-muted-foreground"
              )}
            >
              {i + 1}
            </span>
            <span className="flex-1 font-medium">{p.name}</span>
            <span className="tabular-nums">{p.points.toLocaleString("en-US")}</span>
          </div>
        ))}
      </ScrollArea>
      <div className="flex items-center gap-3 border-t bg-muted/50 px-3 py-2 text-xs">
        <span className="flex size-6 items-center justify-center font-semibold">27</span>
        <span className="flex-1 font-medium">You</span>
        <span className="tabular-nums">3,120</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "SplitListAndPreview",
    description: "Two independent scroll areas: a list of articles and the selected article body.",
    code: `
const articles = [
  { title: "Designing for empty states", body: "Empty states are the first thing new users see. Treat them as onboarding: explain what belongs here, why it matters, and the single action that fills it." },
  { title: "Microcopy that converts", body: "Buttons should say what happens next. Replace generic labels with verbs tied to the outcome, and keep error messages specific and kind." },
  { title: "Dark mode pitfalls", body: "Pure black backgrounds cause halation. Use near-black surfaces, raise elevation with lighter tones, and re-check every brand color for contrast." },
  { title: "Motion with purpose", body: "Animate to explain change, not to decorate. Short durations, natural easing, and respect for reduced motion keep interfaces feeling fast." },
  { title: "Forms people finish", body: "Ask only what you need, group related fields, validate inline, and keep the primary action visible on small screens." },
]

export default function SplitListAndPreview() {
  const [index, setIndex] = React.useState(0)
  const article = articles[index]!

  return (
    <div className="grid w-full max-w-lg grid-cols-[2fr_3fr] border">
      <ScrollArea className="h-64 border-r">
        <div className="flex flex-col p-1">
          {articles.map((a, i) => (
            <button
              key={a.title}
              onClick={() => setIndex(i)}
              className={cn("px-2 py-2 text-left text-xs hover:bg-muted", index === i && "bg-muted font-medium")}
            >
              {a.title}
            </button>
          ))}
        </div>
      </ScrollArea>
      <ScrollArea className="h-64">
        <article className="flex flex-col gap-2 p-4">
          <h3 className="text-sm font-semibold">{article.title}</h3>
          <p className="text-xs leading-relaxed text-muted-foreground">{article.body}</p>
          <p className="text-xs leading-relaxed text-muted-foreground">{article.body}</p>
        </article>
      </ScrollArea>
    </div>
  )
}`,
  },
  {
    name: "AuditLogTable",
    description: "Admin audit log table with a sticky header inside a scroll area.",
    code: `
const events = [
  ["Ava L.", "Changed role", "Ben O. to Admin", "2m"], ["Ben O.", "Created API key", "ci-deploy", "18m"],
  ["System", "Rotated secret", "webhook signing", "1h"], ["Chloe M.", "Exported data", "customers.csv", "3h"],
  ["Ava L.", "Enabled SSO", "Okta SAML", "5h"], ["Dev R.", "Deleted project", "old-landing", "1d"],
  ["System", "Blocked login", "IP 203.0.113.9", "1d"], ["Elif H.", "Updated billing", "Visa ending 4242", "2d"],
  ["Ben O.", "Invited member", "gia@orbit.dev", "3d"],
]

export default function AuditLogTable() {
  return (
    <ScrollArea className="h-72 w-full max-w-md border">
      <Table>
        <TableHeader className="sticky top-0 z-10 bg-background">
          <TableRow>
            <TableHead>Actor</TableHead>
            <TableHead>Action</TableHead>
            <TableHead className="text-right">When</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map(([actor, action, target, when], i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{actor}</TableCell>
              <TableCell>
                <span className="block">{action}</span>
                <span className="block max-w-40 truncate text-muted-foreground">{target}</span>
              </TableCell>
              <TableCell className="text-right text-muted-foreground">{when}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  )
}`,
  },
  {
    name: "DialogScrollableBody",
    description: "Dialog whose long privacy policy body scrolls between a fixed header and footer.",
    code: `
const sections = [
  ["What we collect", "Account details, usage events, and the content you create in your workspace."],
  ["How we use it", "To provide the service, prevent abuse, and improve features you rely on."],
  ["Who we share with", "Only subprocessors listed on our trust page, under strict agreements."],
  ["Retention", "We keep data while your account is active and delete it 30 days after closure."],
  ["Your rights", "Access, correct, export, or delete your data at any time from settings."],
  ["Contact", "Email privacy@fieldnote.app with any questions about this policy."],
]

export default function DialogScrollableBody() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Read privacy policy</DialogTrigger>
      <DialogContent className="gap-0 p-0 sm:max-w-md">
        <DialogHeader className="border-b p-4">
          <DialogTitle>Privacy policy</DialogTitle>
          <DialogDescription>Last updated November 1, 2026</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-72">
          <div className="flex flex-col gap-4 p-4">
            {sections.map(([title, body]) => (
              <section key={title} className="flex flex-col gap-1">
                <h4 className="text-sm font-medium">{title}</h4>
                <p className="text-xs leading-relaxed text-muted-foreground">{body}</p>
              </section>
            ))}
          </div>
        </ScrollArea>
        <DialogFooter className="border-t p-4">
          <DialogClose render={<Button />}>I understand</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
]

export default examples
