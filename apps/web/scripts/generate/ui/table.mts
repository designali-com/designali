import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "OrderStatusTable",
    description: "Recent orders with status badges, customer names, and right-aligned totals.",
    code: `
const orders = [
  { id: "#3210", customer: "Olivia Martin", date: "Nov 12", status: "Fulfilled", total: 129.0 },
  { id: "#3209", customer: "Jackson Lee", date: "Nov 12", status: "Processing", total: 39.5 },
  { id: "#3208", customer: "Isabella Nguyen", date: "Nov 11", status: "Refunded", total: 299.0 },
  { id: "#3207", customer: "William Kim", date: "Nov 10", status: "Fulfilled", total: 74.25 },
]

const statusVariant: Record<string, "default" | "secondary" | "destructive"> = {
  Fulfilled: "default",
  Processing: "secondary",
  Refunded: "destructive",
}

export default function OrderStatusTable() {
  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell className="text-muted-foreground">{order.date}</TableCell>
              <TableCell><Badge variant={statusVariant[order.status]}>{order.status}</Badge></TableCell>
              <TableCell className="text-right tabular-nums">{"$" + order.total.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "SelectableRowsTable",
    description: "Rows selectable with checkboxes, a select-all header, and a selection count.",
    code: `
const people = [
  { id: "u1", name: "Hannah Brooks", email: "hannah@acme-labs.io", role: "Designer" },
  { id: "u2", name: "Diego Ramos", email: "diego@acme-labs.io", role: "Engineer" },
  { id: "u3", name: "Mei Tanaka", email: "mei@acme-labs.io", role: "Product" },
  { id: "u4", name: "Samuel Okafor", email: "samuel@acme-labs.io", role: "Engineer" },
]

export default function SelectableRowsTable() {
  const [selected, setSelected] = React.useState<string[]>(["u2"])
  const allSelected = selected.length === people.length
  const someSelected = selected.length > 0 && !allSelected

  return (
    <div className="flex w-full max-w-xl flex-col gap-2">
      <p className="text-xs text-muted-foreground">{selected.length} of {people.length} selected</p>
      <div className="border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-8">
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onCheckedChange={(checked) => setSelected(checked ? people.map((p) => p.id) : [])}
                  aria-label="Select all"
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {people.map((person) => {
              const isSelected = selected.includes(person.id)
              return (
                <TableRow key={person.id} data-state={isSelected ? "selected" : undefined}>
                  <TableCell>
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={(checked) =>
                        setSelected((s) => (checked ? [...s, person.id] : s.filter((id) => id !== person.id)))
                      }
                      aria-label={"Select " + person.name}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{person.name}</TableCell>
                  <TableCell className="text-muted-foreground">{person.email}</TableCell>
                  <TableCell>{person.role}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}`,
  },
  {
    name: "SortableColumnsTable",
    description: "Clickable column headers that sort rows ascending or descending.",
    code: `
const rows = [
  { name: "Atlas", stars: 4820, updated: 3, language: "TypeScript" },
  { name: "Beacon", stars: 1290, updated: 12, language: "Go" },
  { name: "Comet", stars: 9310, updated: 1, language: "Rust" },
  { name: "Drift", stars: 560, updated: 30, language: "Python" },
]

type SortKey = "name" | "stars" | "updated"

export default function SortableColumnsTable() {
  const [sort, setSort] = React.useState<{ key: SortKey; dir: "asc" | "desc" }>({ key: "stars", dir: "desc" })
  const sorted = [...rows].sort((a, b) => {
    const av = a[sort.key]
    const bv = b[sort.key]
    const cmp = typeof av === "string" ? av.localeCompare(bv as string) : (av as number) - (bv as number)
    return sort.dir === "asc" ? cmp : -cmp
  })

  function header(key: SortKey, label: string, className?: string) {
    const active = sort.key === key
    const Icon = !active ? ChevronsUpDownIcon : sort.dir === "asc" ? ArrowUpIcon : ArrowDownIcon
    return (
      <TableHead className={className}>
        <Button
          variant="ghost"
          size="xs"
          className="-ms-2"
          onClick={() => setSort({ key, dir: active && sort.dir === "desc" ? "asc" : "desc" })}
        >
          {label}
          <Icon data-icon="inline-end" className={cn(!active && "text-muted-foreground")} />
        </Button>
      </TableHead>
    )
  }

  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            {header("name", "Repository")}
            <TableHead>Language</TableHead>
            {header("stars", "Stars")}
            {header("updated", "Updated")}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((row) => (
            <TableRow key={row.name}>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell className="text-muted-foreground">{row.language}</TableCell>
              <TableCell className="tabular-nums">{row.stars.toLocaleString()}</TableCell>
              <TableCell className="text-muted-foreground">{row.updated}d ago</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "TeamMembersTable",
    description: "Team members with avatar initials, role badges, and last active time.",
    code: `
const members = [
  { name: "Priya Raman", email: "priya@lumen.app", role: "Owner", active: "Now" },
  { name: "Tomás Herrera", email: "tomas@lumen.app", role: "Admin", active: "2h ago" },
  { name: "Grace Liu", email: "grace@lumen.app", role: "Editor", active: "Yesterday" },
  { name: "Noah Fischer", email: "noah@lumen.app", role: "Viewer", active: "5d ago" },
]

export default function TeamMembersTable() {
  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Member</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Last active</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.email}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <AvatarFallback>{member.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-muted-foreground">{member.email}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell><Badge variant={member.role === "Owner" ? "default" : "outline"}>{member.role}</Badge></TableCell>
              <TableCell className="text-right text-muted-foreground">{member.active}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "EmptyStateTable",
    description: "A table with headers and an empty body row that prompts creating the first item.",
    code: `
export default function EmptyStateTable() {
  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="hover:bg-transparent">
            <TableCell colSpan={3} className="h-48 whitespace-normal">
              <Empty className="border-0 p-0">
                <EmptyHeader>
                  <EmptyMedia variant="icon"><FolderOpenIcon /></EmptyMedia>
                  <EmptyTitle>No projects yet</EmptyTitle>
                  <EmptyDescription>Create a project to start tracking work.</EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button size="sm"><PlusIcon data-icon="inline-start" />New project</Button>
                </EmptyContent>
              </Empty>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "LoadingSkeletonTable",
    description: "Skeleton placeholder rows shown while table data is loading.",
    code: `
export default function LoadingSkeletonTable() {
  return (
    <div className="w-full max-w-lg border" aria-busy="true">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead className="text-right">MRR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Skeleton className="size-6 rounded-full" />
                  <Skeleton className="h-3 w-28" />
                </div>
              </TableCell>
              <TableCell><Skeleton className="h-3 w-16" /></TableCell>
              <TableCell><Skeleton className="ms-auto h-3 w-12" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "PaginatedTable",
    description: "Client-side paginated table with previous and next controls and a range label.",
    code: `
const transactions = Array.from({ length: 23 }, (_, i) => ({
  id: "TX-" + (1040 + i),
  merchant: ["Brightside Coffee", "Metro Transit", "Paperleaf Books", "Greenway Market", "Cloudnine Hosting"][i % 5],
  amount: ((i * 37) % 180) + 4.75,
}))

const pageSize = 5

export default function PaginatedTable() {
  const [page, setPage] = React.useState(0)
  const pageCount = Math.ceil(transactions.length / pageSize)
  const rows = transactions.slice(page * pageSize, page * pageSize + pageSize)

  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Merchant</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((tx) => (
            <TableRow key={tx.id}>
              <TableCell className="font-mono">{tx.id}</TableCell>
              <TableCell>{tx.merchant}</TableCell>
              <TableCell className="text-right tabular-nums">{"$" + tx.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between border-t px-3 py-2">
        <span className="text-xs text-muted-foreground">
          {page * pageSize + 1}-{Math.min((page + 1) * pageSize, transactions.length)} of {transactions.length}
        </span>
        <div className="flex gap-1">
          <Button variant="outline" size="icon-sm" disabled={page === 0} onClick={() => setPage((p) => p - 1)} aria-label="Previous page">
            <ChevronLeftIcon />
          </Button>
          <Button variant="outline" size="icon-sm" disabled={page === pageCount - 1} onClick={() => setPage((p) => p + 1)} aria-label="Next page">
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "SearchFilterTable",
    description: "A search input that filters table rows by name with a no-results row.",
    code: `
const contacts = [
  { name: "Amelia Chen", company: "Northwind Studio", city: "Seattle" },
  { name: "Ben Carter", company: "Bluefin Logistics", city: "Austin" },
  { name: "Chloe Dubois", company: "Fernhill Labs", city: "Montreal" },
  { name: "Daniel Park", company: "Oakridge Partners", city: "Denver" },
  { name: "Elena Rossi", company: "Silverline Media", city: "Chicago" },
]

export default function SearchFilterTable() {
  const [query, setQuery] = React.useState("")
  const q = query.trim().toLowerCase()
  const filtered = contacts.filter((c) => (c.name + " " + c.company).toLowerCase().includes(q))

  return (
    <div className="flex w-full max-w-lg flex-col gap-2">
      <InputGroup>
        <InputGroupAddon><SearchIcon /></InputGroupAddon>
        <InputGroupInput placeholder="Search contacts" value={query} onChange={(e) => setQuery(e.target.value)} />
      </InputGroup>
      <div className="border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>City</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((contact) => (
              <TableRow key={contact.name}>
                <TableCell className="font-medium">{contact.name}</TableCell>
                <TableCell>{contact.company}</TableCell>
                <TableCell className="text-muted-foreground">{contact.city}</TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} className="h-20 text-center text-muted-foreground">
                  No contacts match &quot;{query}&quot;
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ExpandableRowsTable",
    description: "Rows that expand to reveal line-item details beneath each order.",
    code: `
const orders = [
  { id: "SO-881", customer: "Harbor Cafe", total: 412.5, items: [["Espresso beans 5kg", 2], ["Oat milk case", 4]] },
  { id: "SO-882", customer: "Pine & Co", total: 96.0, items: [["Paper cups 1k", 1]] },
  { id: "SO-883", customer: "Lantern Bakery", total: 238.2, items: [["Flour 25kg", 3], ["Butter 10kg", 1]] },
] as const

export default function ExpandableRowsTable() {
  const [open, setOpen] = React.useState<string | null>("SO-881")

  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8" />
            <TableHead>Order</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            const expanded = open === order.id
            return (
              <React.Fragment key={order.id}>
                <TableRow>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      aria-expanded={expanded}
                      aria-label={"Toggle " + order.id}
                      onClick={() => setOpen(expanded ? null : order.id)}
                    >
                      <ChevronRightIcon className={cn("transition-transform", expanded && "rotate-90")} />
                    </Button>
                  </TableCell>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell className="text-right tabular-nums">{"$" + order.total.toFixed(2)}</TableCell>
                </TableRow>
                {expanded && (
                  <TableRow className="bg-muted/30 hover:bg-muted/30">
                    <TableCell />
                    <TableCell colSpan={3}>
                      <ul className="flex flex-col gap-1">
                        {order.items.map(([name, qty]) => (
                          <li key={name} className="flex justify-between text-muted-foreground">
                            <span>{name}</span>
                            <span>x{qty}</span>
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "InvoiceLineItemsTable",
    description: "Invoice line items with quantity, unit price, and a footer with subtotal, tax, and total.",
    code: `
const items = [
  { description: "Brand identity workshop", qty: 1, price: 1800 },
  { description: "Logo design revisions", qty: 3, price: 250 },
  { description: "Social media templates", qty: 12, price: 45 },
]

export default function InvoiceLineItemsTable() {
  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0)
  const tax = subtotal * 0.08
  const fmt = (n: number) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2 })

  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Qty</TableHead>
            <TableHead className="text-right">Unit</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.description}>
              <TableCell>{item.description}</TableCell>
              <TableCell className="text-right tabular-nums">{item.qty}</TableCell>
              <TableCell className="text-right tabular-nums">{fmt(item.price)}</TableCell>
              <TableCell className="text-right tabular-nums">{fmt(item.qty * item.price)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} className="text-right text-muted-foreground">Subtotal</TableCell>
            <TableCell className="text-right tabular-nums">{fmt(subtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} className="text-right text-muted-foreground">Tax (8%)</TableCell>
            <TableCell className="text-right tabular-nums">{fmt(tax)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} className="text-right font-semibold">Total due</TableCell>
            <TableCell className="text-right font-semibold tabular-nums">{fmt(subtotal + tax)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "FileManagerTable",
    description: "File manager listing with type icons, sizes, modified dates, and row actions.",
    code: `
const files = [
  { name: "Brand assets", kind: "folder", size: "—", modified: "Nov 14" },
  { name: "pitch-deck-v4.pdf", kind: "pdf", size: "8.2 MB", modified: "Nov 13" },
  { name: "budget-2027.xlsx", kind: "sheet", size: "412 KB", modified: "Nov 9" },
  { name: "intro-clip.mp4", kind: "video", size: "96.4 MB", modified: "Oct 30" },
]

const icons = { folder: FolderIcon, pdf: FileTextIcon, sheet: FileSpreadsheetIcon, video: FileVideoIcon }

export default function FileManagerTable() {
  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Modified</TableHead>
            <TableHead className="w-10"><span className="sr-only">Actions</span></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.map((file) => {
            const Icon = icons[file.kind as keyof typeof icons]
            return (
              <TableRow key={file.name}>
                <TableCell>
                  <span className="flex items-center gap-2 font-medium">
                    <Icon className={cn("size-4", file.kind === "folder" ? "text-primary" : "text-muted-foreground")} />
                    {file.name}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground">{file.size}</TableCell>
                <TableCell className="text-muted-foreground">{file.modified}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger render={<Button variant="ghost" size="icon-xs" aria-label={"Actions for " + file.name} />}>
                      <EllipsisIcon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem><DownloadIcon />Download</DropdownMenuItem>
                      <DropdownMenuItem><PencilIcon />Rename</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem variant="destructive"><Trash2Icon />Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "StickyHeaderScrollTable",
    description: "A fixed-height scrolling table with a sticky header row.",
    code: `
const logs = Array.from({ length: 18 }, (_, i) => ({
  time: "14:" + String(10 + i).padStart(2, "0") + ":0" + (i % 10),
  level: i % 7 === 0 ? "ERROR" : i % 3 === 0 ? "WARN" : "INFO",
  message: ["Request completed", "Cache miss for user profile", "Retrying webhook delivery", "Job queued"][i % 4],
}))

export default function StickyHeaderScrollTable() {
  return (
    <div className="h-72 w-full max-w-lg overflow-y-auto border">
      <Table>
        <TableHeader className="sticky top-0 z-10 bg-background">
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((log, i) => (
            <TableRow key={i}>
              <TableCell className="font-mono text-muted-foreground">{log.time}</TableCell>
              <TableCell>
                <span className={cn("font-mono font-medium", log.level === "ERROR" && "text-destructive", log.level === "WARN" && "text-amber-600 dark:text-amber-400")}>
                  {log.level}
                </span>
              </TableCell>
              <TableCell>{log.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "WideScrollableTable",
    description: "A wide analytics table that scrolls horizontally within its own container.",
    code: `
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const channels = [
  { name: "Organic search", base: 1200 },
  { name: "Paid social", base: 860 },
  { name: "Email", base: 540 },
  { name: "Referral", base: 310 },
]

export default function WideScrollableTable() {
  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="sticky start-0 z-10 bg-background">Channel</TableHead>
            {months.map((m) => (
              <TableHead key={m} className="text-right">{m}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {channels.map((channel) => (
            <TableRow key={channel.name}>
              <TableCell className="sticky start-0 z-10 bg-background font-medium">{channel.name}</TableCell>
              {months.map((m, i) => (
                <TableCell key={m} className="text-right tabular-nums">
                  {(channel.base + ((i * 97) % 400)).toLocaleString()}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "StripedDenseTable",
    description: "A compact, zebra-striped table for dense numeric data.",
    code: `
const rows = [
  { ticker: "ORBT", price: 142.31, change: 1.24, volume: "3.2M" },
  { ticker: "NOVA", price: 58.07, change: -0.82, volume: "1.1M" },
  { ticker: "HLXS", price: 311.9, change: 2.75, volume: "842K" },
  { ticker: "QUIL", price: 12.45, change: -3.1, volume: "6.7M" },
  { ticker: "VRDN", price: 77.6, change: 0.15, volume: "2.4M" },
  { ticker: "ZEPH", price: 203.18, change: -1.02, volume: "990K" },
]

export default function StripedDenseTable() {
  return (
    <div className="w-full max-w-md border">
      <Table className="text-[11px]">
        <TableHeader>
          <TableRow>
            <TableHead className="h-8">Ticker</TableHead>
            <TableHead className="h-8 text-right">Price</TableHead>
            <TableHead className="h-8 text-right">Change</TableHead>
            <TableHead className="h-8 text-right">Volume</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ticker} className="border-0 even:bg-muted/50">
              <TableCell className="py-1 font-mono font-medium">{row.ticker}</TableCell>
              <TableCell className="py-1 text-right tabular-nums">{row.price.toFixed(2)}</TableCell>
              <TableCell className={cn("py-1 text-right tabular-nums", row.change >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-destructive")}>
                {(row.change >= 0 ? "+" : "") + row.change.toFixed(2) + "%"}
              </TableCell>
              <TableCell className="py-1 text-right tabular-nums text-muted-foreground">{row.volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "ProgressColumnTable",
    description: "Project table with an inline progress bar column and due dates.",
    code: `
const projects = [
  { name: "Website redesign", owner: "Leah", progress: 82, due: "Dec 4" },
  { name: "Mobile onboarding", owner: "Ravi", progress: 45, due: "Dec 18" },
  { name: "Billing migration", owner: "Kenji", progress: 20, due: "Jan 9" },
  { name: "Help center", owner: "Ines", progress: 100, due: "Nov 20" },
]

export default function ProgressColumnTable() {
  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead className="w-40">Progress</TableHead>
            <TableHead className="text-right">Due</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.name}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>{project.owner}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 flex-1 bg-muted">
                    <div className="h-full bg-primary" style={{ width: project.progress + "%" }} />
                  </div>
                  <span className="w-8 text-right tabular-nums text-muted-foreground">{project.progress}%</span>
                </div>
              </TableCell>
              <TableCell className="text-right text-muted-foreground">{project.due}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "InlineEditableTable",
    description: "Cells that switch to inputs for inline editing of product prices.",
    code: `
const initialProducts = [
  { sku: "TS-001", name: "Classic tee", price: 24 },
  { sku: "HD-014", name: "Zip hoodie", price: 58 },
  { sku: "CP-207", name: "Canvas cap", price: 19 },
]

export default function InlineEditableTable() {
  const [products, setProducts] = React.useState(initialProducts)
  const [editing, setEditing] = React.useState<string | null>(null)

  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>SKU</TableHead>
            <TableHead>Product</TableHead>
            <TableHead className="w-32 text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.sku}>
              <TableCell className="font-mono text-muted-foreground">{product.sku}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell className="text-right">
                {editing === product.sku ? (
                  <Input
                    autoFocus
                    type="number"
                    className="h-7 text-right"
                    defaultValue={product.price}
                    aria-label={"Price for " + product.name}
                    onBlur={(e) => {
                      const price = Number(e.target.value) || product.price
                      setProducts((list) => list.map((p) => (p.sku === product.sku ? { ...p, price } : p)))
                      setEditing(null)
                    }}
                    onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
                  />
                ) : (
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 tabular-nums hover:underline"
                    onClick={() => setEditing(product.sku)}
                  >
                    {"$" + product.price.toFixed(2)}
                    <PencilIcon className="size-3 text-muted-foreground" />
                  </button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "BulkActionsTable",
    description: "Selecting rows reveals a bulk action bar to archive or delete the selection.",
    code: `
const initialTickets = [
  { id: "T-1201", subject: "Can't reset password", priority: "High" },
  { id: "T-1202", subject: "Invoice shows wrong VAT", priority: "Medium" },
  { id: "T-1203", subject: "Feature request: dark mode", priority: "Low" },
  { id: "T-1204", subject: "Export stuck at 90%", priority: "High" },
]

export default function BulkActionsTable() {
  const [tickets, setTickets] = React.useState(initialTickets)
  const [selected, setSelected] = React.useState<string[]>([])
  const remove = () => {
    setTickets((t) => t.filter((x) => !selected.includes(x.id)))
    setSelected([])
  }

  return (
    <div className="w-full max-w-lg border">
      {selected.length > 0 && (
        <div className="flex items-center justify-between border-b bg-muted/50 px-3 py-2">
          <span className="text-xs font-medium">{selected.length} selected</span>
          <div className="flex gap-1">
            <Button variant="outline" size="xs" onClick={remove}><ArchiveIcon data-icon="inline-start" />Archive</Button>
            <Button variant="destructive" size="xs" onClick={remove}><Trash2Icon data-icon="inline-start" />Delete</Button>
          </div>
        </div>
      )}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8" />
            <TableHead>Ticket</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Priority</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map((ticket) => {
            const isSelected = selected.includes(ticket.id)
            return (
              <TableRow key={ticket.id} data-state={isSelected ? "selected" : undefined}>
                <TableCell>
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={(c) => setSelected((s) => (c ? [...s, ticket.id] : s.filter((id) => id !== ticket.id)))}
                    aria-label={"Select " + ticket.id}
                  />
                </TableCell>
                <TableCell className="font-mono">{ticket.id}</TableCell>
                <TableCell>{ticket.subject}</TableCell>
                <TableCell>{ticket.priority}</TableCell>
              </TableRow>
            )
          })}
          {tickets.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="h-16 text-center text-muted-foreground">Inbox zero. Nice work!</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "PricingComparisonTable",
    description: "Plan comparison table with check and dash marks per feature.",
    code: `
const plans = ["Free", "Pro", "Team"]
const features = [
  { name: "Projects", values: ["3", "Unlimited", "Unlimited"] },
  { name: "Custom domains", values: [false, true, true] },
  { name: "Version history", values: ["7 days", "90 days", "Unlimited"] },
  { name: "SSO", values: [false, false, true] },
  { name: "Priority support", values: [false, true, true] },
]

export default function PricingComparisonTable() {
  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Feature</TableHead>
            {plans.map((plan) => (
              <TableHead key={plan} className={cn("text-center", plan === "Pro" && "bg-muted/50")}>{plan}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature.name}>
              <TableCell className="font-medium">{feature.name}</TableCell>
              {feature.values.map((value, i) => (
                <TableCell key={plans[i]} className={cn("text-center", plans[i] === "Pro" && "bg-muted/50")}>
                  {value === true ? (
                    <CheckIcon className="mx-auto size-4" aria-label="Included" />
                  ) : value === false ? (
                    <MinusIcon className="mx-auto size-4 text-muted-foreground" aria-label="Not included" />
                  ) : (
                    value
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "LeaderboardTable",
    description: "A ranked leaderboard with medal icons for the top three and score trend.",
    code: `
const players = [
  { name: "Kira Volkov", score: 9820, trend: 2 },
  { name: "Mateo Silva", score: 9415, trend: -1 },
  { name: "Aisha Bello", score: 9102, trend: 1 },
  { name: "Lucas Moreau", score: 8760, trend: 0 },
  { name: "Yuna Choi", score: 8544, trend: -2 },
]

export default function LeaderboardTable() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">Rank</TableHead>
            <TableHead>Player</TableHead>
            <TableHead className="text-right">Score</TableHead>
            <TableHead className="w-12 text-right">Trend</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player, i) => (
            <TableRow key={player.name}>
              <TableCell>
                {i < 3 ? (
                  <MedalIcon className={cn("size-4", i === 0 ? "text-amber-500" : i === 1 ? "text-zinc-400" : "text-orange-700")} />
                ) : (
                  <span className="ps-1 text-muted-foreground">{i + 1}</span>
                )}
              </TableCell>
              <TableCell className="font-medium">{player.name}</TableCell>
              <TableCell className="text-right tabular-nums">{player.score.toLocaleString()}</TableCell>
              <TableCell className="text-right">
                {player.trend > 0 ? (
                  <TrendingUpIcon className="ms-auto size-4 text-emerald-600" />
                ) : player.trend < 0 ? (
                  <TrendingDownIcon className="ms-auto size-4 text-destructive" />
                ) : (
                  <MinusIcon className="ms-auto size-4 text-muted-foreground" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "ApiKeysTable",
    description: "API keys table with masked secrets, copy buttons, and revoke actions.",
    code: `
const keys = [
  { name: "Production server", prefix: "key_demo_4f9a", created: "Aug 2", lastUsed: "2 min ago" },
  { name: "CI pipeline", prefix: "key_demo_b21c", created: "Sep 18", lastUsed: "1 day ago" },
  { name: "Local testing", prefix: "key_demo_77de", created: "Oct 30", lastUsed: "Never" },
]

export default function ApiKeysTable() {
  const [copied, setCopied] = React.useState<string | null>(null)

  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Key</TableHead>
            <TableHead>Last used</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {keys.map((key) => (
            <TableRow key={key.prefix}>
              <TableCell>
                <p className="font-medium">{key.name}</p>
                <p className="text-muted-foreground">Created {key.created}</p>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <code className="bg-muted px-1.5 py-0.5 font-mono">{key.prefix}••••••••</code>
                  <Button variant="ghost" size="icon-xs" aria-label={"Copy " + key.name} onClick={() => setCopied(key.prefix)}>
                    {copied === key.prefix ? <CheckIcon /> : <CopyIcon />}
                  </Button>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">{key.lastUsed}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="xs" className="text-destructive">Revoke</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "CardWrappedTable",
    description: "A table inside a card with a title, description, and view-all action.",
    code: `
const payouts = [
  { date: "Nov 14", account: "•••• 4021", amount: 2840.12, status: "In transit" },
  { date: "Nov 7", account: "•••• 4021", amount: 3102.5, status: "Paid" },
  { date: "Oct 31", account: "•••• 4021", amount: 2650.0, status: "Paid" },
]

export default function CardWrappedTable() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Payouts</CardTitle>
        <CardDescription>Transfers to your bank account.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">View all</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Account</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payouts.map((payout) => (
              <TableRow key={payout.date}>
                <TableCell>{payout.date}</TableCell>
                <TableCell className="font-mono text-muted-foreground">{payout.account}</TableCell>
                <TableCell><Badge variant={payout.status === "Paid" ? "secondary" : "outline"}>{payout.status}</Badge></TableCell>
                <TableCell className="text-right tabular-nums">{"$" + payout.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "GroupedRowsTable",
    description: "Rows grouped under section header rows by department.",
    code: `
const groups = [
  { department: "Engineering", people: [["Arjun Mehta", "Staff engineer"], ["Lena Novak", "Frontend engineer"]] },
  { department: "Design", people: [["Sara Kim", "Design lead"]] },
  { department: "Support", people: [["Owen Price", "Support specialist"], ["Maya Patel", "Support manager"]] },
]

export default function GroupedRowsTable() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Title</TableHead>
          </TableRow>
        </TableHeader>
        {groups.map((group) => (
          <TableBody key={group.department} className="[&_tr:last-child]:border-b">
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableCell colSpan={2} className="py-1.5 font-medium text-muted-foreground">
                {group.department} <span className="font-normal">({group.people.length})</span>
              </TableCell>
            </TableRow>
            {group.people.map(([name, title]) => (
              <TableRow key={name}>
                <TableCell className="font-medium">{name}</TableCell>
                <TableCell>{title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        ))}
      </Table>
    </div>
  )
}`,
  },
  {
    name: "ClickableRowsDetailTable",
    description: "Clickable rows that open the selected customer's details below the table.",
    code: `
const customers = [
  { id: "c1", name: "Rosa Delgado", plan: "Pro", seats: 12, since: "2023" },
  { id: "c2", name: "Felix Wagner", plan: "Team", seats: 48, since: "2021" },
  { id: "c3", name: "Nina Patel", plan: "Starter", seats: 3, since: "2025" },
]

export default function ClickableRowsDetailTable() {
  const [activeId, setActiveId] = React.useState("c2")
  const active = customers.find((c) => c.id === activeId)!

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead className="text-right">Seats</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((c) => (
              <TableRow
                key={c.id}
                tabIndex={0}
                data-state={c.id === activeId ? "selected" : undefined}
                className="cursor-pointer"
                onClick={() => setActiveId(c.id)}
                onKeyDown={(e) => e.key === "Enter" && setActiveId(c.id)}
              >
                <TableCell className="font-medium">{c.name}</TableCell>
                <TableCell>{c.plan}</TableCell>
                <TableCell className="text-right tabular-nums">{c.seats}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center gap-3 border p-3">
        <Avatar>
          <AvatarFallback>{active.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
        </Avatar>
        <div className="text-xs">
          <p className="font-medium">{active.name}</p>
          <p className="text-muted-foreground">{active.plan} plan · {active.seats} seats · customer since {active.since}</p>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "StockInventoryTable",
    description: "Inventory table that highlights low-stock and out-of-stock items.",
    code: `
const inventory = [
  { item: "Ceramic planter (M)", sku: "PL-220", stock: 142, reorder: 40 },
  { item: "Hanging macramé", sku: "PL-305", stock: 18, reorder: 25 },
  { item: "Terracotta saucer", sku: "PL-118", stock: 0, reorder: 30 },
  { item: "Plant mister", sku: "AC-042", stock: 64, reorder: 20 },
]

export default function StockInventoryTable() {
  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead className="text-right">In stock</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((row) => {
            const status = row.stock === 0 ? "Out of stock" : row.stock < row.reorder ? "Low" : "OK"
            return (
              <TableRow key={row.sku} className={cn(row.stock === 0 && "bg-destructive/5 hover:bg-destructive/10")}>
                <TableCell className="font-medium">{row.item}</TableCell>
                <TableCell className="font-mono text-muted-foreground">{row.sku}</TableCell>
                <TableCell className="text-right tabular-nums">{row.stock}</TableCell>
                <TableCell>
                  <span className="flex items-center gap-1.5">
                    {status === "OK" ? (
                      <CircleCheckIcon className="size-3.5 text-emerald-600" />
                    ) : (
                      <TriangleAlertIcon className={cn("size-3.5", status === "Low" ? "text-amber-500" : "text-destructive")} />
                    )}
                    {status}
                  </span>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "ScheduleTimetable",
    description: "A weekly class timetable with rooms shown as small blocks in each cell.",
    code: `
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
const slots = [
  { time: "09:00", classes: ["Yoga", "", "Yoga", "", "Pilates"] },
  { time: "12:00", classes: ["", "HIIT", "", "HIIT", ""] },
  { time: "18:00", classes: ["Spin", "Boxing", "Spin", "Boxing", "Spin"] },
]

export default function ScheduleTimetable() {
  return (
    <div className="w-full max-w-xl border">
      <Table className="table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-16" />
            {days.map((day) => (
              <TableHead key={day} className="text-center">{day}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {slots.map((slot) => (
            <TableRow key={slot.time} className="hover:bg-transparent">
              <TableCell className="font-mono text-muted-foreground">{slot.time}</TableCell>
              {slot.classes.map((name, i) => (
                <TableCell key={days[i]} className="p-1">
                  {name ? (
                    <div className="truncate bg-primary/10 px-1.5 py-1 text-center font-medium text-primary">{name}</div>
                  ) : (
                    <div className="h-6" />
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "KeyValueSpecTable",
    description: "A two-column specification table with row headers for a product detail page.",
    code: `
const specs = [
  ["Dimensions", "38 × 26 × 14 cm"],
  ["Weight", "1.2 kg"],
  ["Material", "Recycled ripstop nylon"],
  ["Capacity", "24 liters"],
  ["Laptop sleeve", "Fits up to 16 in"],
  ["Warranty", "Lifetime"],
]

export default function KeyValueSpecTable() {
  return (
    <div className="w-full max-w-sm border">
      <Table>
        <TableCaption className="mb-3">Trailhead Daypack specifications</TableCaption>
        <TableBody>
          {specs.map(([label, value]) => (
            <TableRow key={label}>
              <TableHead scope="row" className="w-36 bg-muted/40 text-muted-foreground">{label}</TableHead>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "ColumnVisibilityTable",
    description: "A dropdown of checkbox items toggles which columns the table shows.",
    code: `
const columns = [
  { key: "email", label: "Email" },
  { key: "country", label: "Country" },
  { key: "plan", label: "Plan" },
] as const

const users = [
  { name: "Ivy Chen", email: "ivy@mapleworks.co", country: "Canada", plan: "Pro" },
  { name: "Jonas Berg", email: "jonas@fjord.studio", country: "Norway", plan: "Free" },
  { name: "Lina Haddad", email: "lina@cedar.dev", country: "Lebanon", plan: "Team" },
]

export default function ColumnVisibilityTable() {
  const [visible, setVisible] = React.useState<Record<string, boolean>>({ email: true, country: true, plan: false })

  return (
    <div className="flex w-full max-w-lg flex-col gap-2">
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
            <Columns3Icon data-icon="inline-start" />
            Columns
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {columns.map((col) => (
              <DropdownMenuCheckboxItem
                key={col.key}
                checked={visible[col.key]}
                onCheckedChange={(checked) => setVisible((v) => ({ ...v, [col.key]: checked }))}
              >
                {col.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              {columns.filter((c) => visible[c.key]).map((c) => (
                <TableHead key={c.key}>{c.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.email}>
                <TableCell className="font-medium">{user.name}</TableCell>
                {columns.filter((c) => visible[c.key]).map((c) => (
                  <TableCell key={c.key} className="text-muted-foreground">{user[c.key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}`,
  },
  {
    name: "StatusFilterTabsTable",
    description: "Tabs above a table filter invoices by status with counts.",
    code: `
const invoices = [
  { id: "INV-2041", client: "Brightpath Tutors", amount: 1200, status: "Paid" },
  { id: "INV-2042", client: "Copperleaf Dental", amount: 860, status: "Overdue" },
  { id: "INV-2043", client: "Northgate Gym", amount: 450, status: "Draft" },
  { id: "INV-2044", client: "Saltwater Surf Co", amount: 2300, status: "Paid" },
  { id: "INV-2045", client: "Juniper Florist", amount: 310, status: "Overdue" },
]

const filters = ["All", "Paid", "Overdue", "Draft"]

export default function StatusFilterTabsTable() {
  const [filter, setFilter] = React.useState("All")
  const rows = filter === "All" ? invoices : invoices.filter((i) => i.status === filter)

  return (
    <div className="flex w-full max-w-lg flex-col gap-2">
      <Tabs value={filter} onValueChange={(v) => setFilter(v as string)}>
        <TabsList>
          {filters.map((f) => (
            <TabsTrigger key={f} value={f}>
              {f}
              <span className="text-muted-foreground">
                {f === "All" ? invoices.length : invoices.filter((i) => i.status === f).length}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Client</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="font-mono">{inv.id}</TableCell>
                <TableCell>{inv.client}</TableCell>
                <TableCell className={cn("text-right tabular-nums", inv.status === "Overdue" && "text-destructive")}>
                  {"$" + inv.amount.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}`,
  },
  {
    name: "BorderedGridTable",
    description: "A fully bordered grid table with vertical cell dividers for a spreadsheet look.",
    code: `
const quarters = ["Q1", "Q2", "Q3", "Q4"]
const regions = [
  { name: "North America", values: [412, 455, 498, 530] },
  { name: "Europe", values: [301, 322, 340, 365] },
  { name: "Asia Pacific", values: [190, 228, 260, 301] },
]

export default function BorderedGridTable() {
  return (
    <div className="w-full max-w-lg border">
      <Table className="[&_td]:border-e [&_td:last-child]:border-e-0 [&_th]:border-e [&_th:last-child]:border-e-0">
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead>Region ($K)</TableHead>
            {quarters.map((q) => (
              <TableHead key={q} className="text-right">{q}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {regions.map((region) => (
            <TableRow key={region.name}>
              <TableCell className="font-medium">{region.name}</TableCell>
              {region.values.map((v, i) => (
                <TableCell key={quarters[i]} className="text-right tabular-nums">{v}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            {quarters.map((q, i) => (
              <TableCell key={q} className="text-right tabular-nums">
                {regions.reduce((s, r) => s + r.values[i]!, 0)}
              </TableCell>
            ))}
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "DeploymentsTable",
    description: "Deployment history with status dots, commit messages, branches, and durations.",
    code: `
const deployments = [
  { id: "dpl_8f2a", status: "Ready", commit: "Fix checkout tax rounding", branch: "main", duration: "48s", ago: "5m" },
  { id: "dpl_7c1d", status: "Building", commit: "Add bulk export endpoint", branch: "feat/export", duration: "—", ago: "1m" },
  { id: "dpl_6b90", status: "Error", commit: "Upgrade image pipeline", branch: "chore/deps", duration: "1m 12s", ago: "2h" },
  { id: "dpl_5a44", status: "Ready", commit: "Copy tweaks on pricing page", branch: "main", duration: "41s", ago: "1d" },
]

const dot: Record<string, string> = {
  Ready: "bg-emerald-500",
  Building: "bg-amber-500 animate-pulse",
  Error: "bg-destructive",
}

export default function DeploymentsTable() {
  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>Commit</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead className="text-right">Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deployments.map((d) => (
            <TableRow key={d.id}>
              <TableCell>
                <span className="flex items-center gap-2">
                  <span className={cn("size-2 rounded-full", dot[d.status])} />
                  {d.status}
                </span>
              </TableCell>
              <TableCell>
                <p className="font-medium">{d.commit}</p>
                <p className="flex items-center gap-1 text-muted-foreground">
                  <GitBranchIcon className="size-3" />{d.branch}
                </p>
              </TableCell>
              <TableCell className="tabular-nums text-muted-foreground">{d.duration}</TableCell>
              <TableCell className="text-right text-muted-foreground">{d.ago}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "CartSummaryTable",
    description: "A shopping cart table with quantity steppers, line totals, and a footer total.",
    code: `
const initialCart = [
  { id: "a", name: "Pour-over kettle", price: 64 },
  { id: "b", name: "Ceramic dripper", price: 28 },
  { id: "c", name: "Paper filters (100)", price: 9 },
]

export default function CartSummaryTable() {
  const [qty, setQty] = React.useState<Record<string, number>>({ a: 1, b: 2, c: 3 })
  const total = initialCart.reduce((s, item) => s + item.price * (qty[item.id] ?? 0), 0)
  const change = (id: string, d: number) => setQty((q) => ({ ...q, [id]: Math.max(0, (q[id] ?? 0) + d) }))

  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead className="text-center">Qty</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {initialCart.map((item) => (
            <TableRow key={item.id} className={cn(qty[item.id] === 0 && "opacity-50")}>
              <TableCell>
                <p className="font-medium">{item.name}</p>
                <p className="text-muted-foreground">{"$" + item.price.toFixed(2)} each</p>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-1">
                  <Button variant="outline" size="icon-xs" aria-label="Decrease" onClick={() => change(item.id, -1)}><MinusIcon /></Button>
                  <span className="w-6 text-center tabular-nums">{qty[item.id]}</span>
                  <Button variant="outline" size="icon-xs" aria-label="Increase" onClick={() => change(item.id, 1)}><PlusIcon /></Button>
                </div>
              </TableCell>
              <TableCell className="text-right tabular-nums">{"$" + (item.price * (qty[item.id] ?? 0)).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell className="text-right tabular-nums">{"$" + total.toFixed(2)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "AuditLogTable",
    description: "An audit log of account events with actor initials, action icons, and IP addresses.",
    code: `
const events = [
  { actor: "Rina Sato", action: "Signed in", icon: LogInIcon, ip: "203.0.113.24", time: "10:42" },
  { actor: "Rina Sato", action: "Changed billing email", icon: MailIcon, ip: "203.0.113.24", time: "10:45" },
  { actor: "Owen Hart", action: "Invited 3 members", icon: UserPlusIcon, ip: "198.51.100.7", time: "11:03" },
  { actor: "Owen Hart", action: "Deleted API key", icon: KeyRoundIcon, ip: "198.51.100.7", time: "11:20" },
]

export default function AuditLogTable() {
  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Actor</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>IP address</TableHead>
            <TableHead className="text-right">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event, i) => (
            <TableRow key={i}>
              <TableCell>
                <span className="flex items-center gap-2">
                  <Avatar size="sm">
                    <AvatarFallback>{event.actor.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  {event.actor}
                </span>
              </TableCell>
              <TableCell>
                <span className="flex items-center gap-1.5">
                  <event.icon className="size-3.5 text-muted-foreground" />
                  {event.action}
                </span>
              </TableCell>
              <TableCell className="font-mono text-muted-foreground">{event.ip}</TableCell>
              <TableCell className="text-right tabular-nums text-muted-foreground">{event.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "ResponsiveStackedTable",
    description: "A table that hides secondary columns on small screens and folds them under the name.",
    code: `
const tasks = [
  { title: "Draft Q1 OKRs", assignee: "Hiro", due: "Dec 2", priority: "High" },
  { title: "Review vendor contract", assignee: "Ana", due: "Dec 5", priority: "Medium" },
  { title: "Plan offsite agenda", assignee: "Kofi", due: "Dec 12", priority: "Low" },
]

export default function ResponsiveStackedTable() {
  return (
    <div className="w-full max-w-lg border @container">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Task</TableHead>
            <TableHead className="hidden @md:table-cell">Assignee</TableHead>
            <TableHead className="hidden @md:table-cell">Due</TableHead>
            <TableHead className="text-right">Priority</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.title}>
              <TableCell>
                <p className="font-medium">{task.title}</p>
                <p className="text-muted-foreground @md:hidden">{task.assignee} · Due {task.due}</p>
              </TableCell>
              <TableCell className="hidden @md:table-cell">{task.assignee}</TableCell>
              <TableCell className="hidden @md:table-cell text-muted-foreground">{task.due}</TableCell>
              <TableCell className="text-right"><Badge variant="outline">{task.priority}</Badge></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "ReorderableRowsTable",
    description: "Rows that can be moved up or down with buttons to set a playlist order.",
    code: `
const initialTracks = [
  { id: "t1", title: "Morning Static", artist: "Lumen Drive", length: "3:42" },
  { id: "t2", title: "Glass Harbor", artist: "Okra Sun", length: "4:10" },
  { id: "t3", title: "Paper Kites", artist: "Velvet Ash", length: "2:58" },
  { id: "t4", title: "Night Cycle", artist: "Lumen Drive", length: "5:01" },
]

export default function ReorderableRowsTable() {
  const [tracks, setTracks] = React.useState(initialTracks)
  const move = (index: number, dir: -1 | 1) =>
    setTracks((list) => {
      const next = [...list]
      const [item] = next.splice(index, 1)
      next.splice(index + dir, 0, item!)
      return next
    })

  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8">#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Length</TableHead>
            <TableHead className="w-16"><span className="sr-only">Reorder</span></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tracks.map((track, i) => (
            <TableRow key={track.id}>
              <TableCell className="tabular-nums text-muted-foreground">{i + 1}</TableCell>
              <TableCell>
                <p className="font-medium">{track.title}</p>
                <p className="text-muted-foreground">{track.artist}</p>
              </TableCell>
              <TableCell className="text-right tabular-nums">{track.length}</TableCell>
              <TableCell>
                <div className="flex justify-end">
                  <Button variant="ghost" size="icon-xs" disabled={i === 0} onClick={() => move(i, -1)} aria-label={"Move " + track.title + " up"}><ArrowUpIcon /></Button>
                  <Button variant="ghost" size="icon-xs" disabled={i === tracks.length - 1} onClick={() => move(i, 1)} aria-label={"Move " + track.title + " down"}><ArrowDownIcon /></Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "HeatmapCellsTable",
    description: "A weekly activity table whose cells are tinted by intensity like a heatmap.",
    code: `
const hours = ["8a", "10a", "12p", "2p", "4p", "6p"]
const week = [
  { day: "Mon", values: [2, 5, 8, 6, 4, 1] },
  { day: "Tue", values: [3, 7, 9, 8, 5, 2] },
  { day: "Wed", values: [1, 4, 6, 9, 7, 3] },
  { day: "Thu", values: [2, 6, 7, 5, 4, 2] },
  { day: "Fri", values: [1, 3, 5, 4, 2, 0] },
]

export default function HeatmapCellsTable() {
  return (
    <div className="w-full max-w-md border">
      <Table className="table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-12" />
            {hours.map((h) => (
              <TableHead key={h} className="px-1 text-center text-muted-foreground">{h}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {week.map((row) => (
            <TableRow key={row.day} className="border-0 hover:bg-transparent">
              <TableCell className="py-0.5 font-medium">{row.day}</TableCell>
              {row.values.map((v, i) => (
                <TableCell key={hours[i]} className="p-0.5">
                  <div
                    className="flex h-7 items-center justify-center bg-primary text-[10px] tabular-nums text-primary-foreground"
                    style={{ opacity: 0.1 + v / 10 }}
                    title={row.day + " " + hours[i] + ": " + v + " sessions"}
                  >
                    {v}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "SubscriptionsActionsTable",
    description: "Subscriptions table with status badges and contextual pause, resume, or cancel actions.",
    code: `
const initialSubs = [
  { id: "s1", customer: "Fieldnote Press", plan: "Annual Pro", renews: "Mar 3, 2027", status: "Active" },
  { id: "s2", customer: "Quarry Hill Farm", plan: "Monthly Basic", renews: "Dec 1, 2026", status: "Paused" },
  { id: "s3", customer: "Tidewater Clinic", plan: "Monthly Pro", renews: "Nov 28, 2026", status: "Active" },
]

export default function SubscriptionsActionsTable() {
  const [subs, setSubs] = React.useState(initialSubs)
  const setStatus = (id: string, status: string) =>
    setSubs((list) => list.map((s) => (s.id === id ? { ...s, status } : s)))

  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subs.map((sub) => (
            <TableRow key={sub.id}>
              <TableCell>
                <p className="font-medium">{sub.customer}</p>
                <p className="text-muted-foreground">Renews {sub.renews}</p>
              </TableCell>
              <TableCell>{sub.plan}</TableCell>
              <TableCell>
                <Badge variant={sub.status === "Active" ? "default" : sub.status === "Canceled" ? "destructive" : "secondary"}>
                  {sub.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                {sub.status === "Canceled" ? (
                  <span className="text-muted-foreground">—</span>
                ) : (
                  <div className="flex justify-end gap-1">
                    <Button variant="outline" size="xs" onClick={() => setStatus(sub.id, sub.status === "Active" ? "Paused" : "Active")}>
                      {sub.status === "Active" ? <PauseIcon data-icon="inline-start" /> : <PlayIcon data-icon="inline-start" />}
                      {sub.status === "Active" ? "Pause" : "Resume"}
                    </Button>
                    <Button variant="ghost" size="xs" className="text-destructive" onClick={() => setStatus(sub.id, "Canceled")}>Cancel</Button>
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "TruncatedCellsTable",
    description: "Long text cells truncated with ellipsis and full text available in a tooltip.",
    code: `
const notes = [
  { id: 1, title: "Kickoff notes", body: "Agreed on a six-week timeline with weekly demos on Thursdays and a soft launch for beta customers.", author: "Imani" },
  { id: 2, title: "Research synthesis", body: "Users struggle to find export settings and expect bulk actions to live in the toolbar, not the overflow menu.", author: "Colin" },
  { id: 3, title: "Retro", body: "Ship smaller PRs, add preview environments for every branch, and rotate on-call more evenly across the team.", author: "Dana" },
]

export default function TruncatedCellsTable() {
  return (
    <TooltipProvider>
      <div className="w-full max-w-lg border">
        <Table className="table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="w-32">Title</TableHead>
              <TableHead>Summary</TableHead>
              <TableHead className="w-20">Author</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notes.map((note) => (
              <TableRow key={note.id}>
                <TableCell className="truncate font-medium">{note.title}</TableCell>
                <TableCell>
                  <Tooltip>
                    <TooltipTrigger render={<span className="block cursor-default truncate text-muted-foreground" />}>
                      {note.body}
                    </TooltipTrigger>
                    <TooltipContent className="max-w-64">{note.body}</TooltipContent>
                  </Tooltip>
                </TableCell>
                <TableCell>{note.author}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "EmailInboxTable",
    description: "An inbox-style table with unread bold rows, star toggles, and labels.",
    code: `
const initialMail = [
  { id: "m1", from: "Clara Jensen", subject: "Contract draft for review", label: "Legal", time: "9:14 AM", unread: true, starred: true },
  { id: "m2", from: "Billing", subject: "Your November receipt", label: "Finance", time: "8:02 AM", unread: true, starred: false },
  { id: "m3", from: "Marco Bellini", subject: "Re: Offsite venue options", label: "Team", time: "Yesterday", unread: false, starred: false },
]

export default function EmailInboxTable() {
  const [mail, setMail] = React.useState(initialMail)
  const toggleStar = (id: string) => setMail((m) => m.map((x) => (x.id === id ? { ...x, starred: !x.starred } : x)))

  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableBody>
          {mail.map((msg) => (
            <TableRow key={msg.id} className={cn(msg.unread ? "font-semibold" : "text-muted-foreground")}>
              <TableCell className="w-8">
                <Button variant="ghost" size="icon-xs" aria-label={msg.starred ? "Unstar" : "Star"} onClick={() => toggleStar(msg.id)}>
                  <StarIcon className={cn(msg.starred && "fill-amber-400 text-amber-400")} />
                </Button>
              </TableCell>
              <TableCell className="w-32">{msg.from}</TableCell>
              <TableCell>
                <span className="flex items-center gap-2">
                  <Badge variant="outline" className="font-normal">{msg.label}</Badge>
                  {msg.subject}
                </span>
              </TableCell>
              <TableCell className="text-right font-normal">{msg.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "BudgetVarianceTable",
    description: "Budget versus actual table with variance coloring and a totals footer.",
    code: `
const lines = [
  { category: "Payroll", budget: 84000, actual: 82450 },
  { category: "Marketing", budget: 12000, actual: 14320 },
  { category: "Software", budget: 6500, actual: 6120 },
  { category: "Travel", budget: 4000, actual: 5210 },
]

const fmt = (n: number) => (n < 0 ? "-" : "") + "$" + Math.abs(n).toLocaleString()

export default function BudgetVarianceTable() {
  const totalBudget = lines.reduce((s, l) => s + l.budget, 0)
  const totalActual = lines.reduce((s, l) => s + l.actual, 0)

  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Budget</TableHead>
            <TableHead className="text-right">Actual</TableHead>
            <TableHead className="text-right">Variance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {lines.map((line) => {
            const variance = line.budget - line.actual
            return (
              <TableRow key={line.category}>
                <TableCell className="font-medium">{line.category}</TableCell>
                <TableCell className="text-right tabular-nums">{fmt(line.budget)}</TableCell>
                <TableCell className="text-right tabular-nums">{fmt(line.actual)}</TableCell>
                <TableCell className={cn("text-right tabular-nums", variance < 0 ? "text-destructive" : "text-emerald-600 dark:text-emerald-400")}>
                  {fmt(variance)}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell className="text-right tabular-nums">{fmt(totalBudget)}</TableCell>
            <TableCell className="text-right tabular-nums">{fmt(totalActual)}</TableCell>
            <TableCell className="text-right tabular-nums">{fmt(totalBudget - totalActual)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "CryptoWatchlistTable",
    description: "A market watchlist with inline SVG sparklines and colored price changes.",
    code: `
const assets = [
  { symbol: "LMN", name: "Lumen", price: 1.284, change: 4.2, points: [4, 5, 4, 6, 7, 6, 8] },
  { symbol: "QRZ", name: "Quartz", price: 0.0912, change: -2.8, points: [8, 7, 7, 6, 5, 6, 4] },
  { symbol: "TDL", name: "Tidal", price: 42.17, change: 0.6, points: [5, 5, 6, 5, 6, 6, 6] },
]

function Sparkline({ points, up }: { points: number[]; up: boolean }) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const d = points
    .map((p, i) => (i === 0 ? "M" : "L") + (i * 60) / (points.length - 1) + " " + (20 - ((p - min) / (max - min || 1)) * 18 - 1))
    .join(" ")
  return (
    <svg viewBox="0 0 60 20" className={cn("h-5 w-16", up ? "text-emerald-500" : "text-destructive")} aria-hidden="true">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export default function CryptoWatchlistTable() {
  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Asset</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">24h</TableHead>
            <TableHead className="text-right">7d</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((a) => (
            <TableRow key={a.symbol}>
              <TableCell>
                <span className="flex items-center gap-2">
                  <span className="flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-primary/30 text-[9px] font-bold text-primary-foreground">
                    {a.symbol[0]}
                  </span>
                  <span>
                    <span className="font-medium">{a.symbol}</span>{" "}
                    <span className="text-muted-foreground">{a.name}</span>
                  </span>
                </span>
              </TableCell>
              <TableCell className="text-right tabular-nums">{"$" + a.price}</TableCell>
              <TableCell className={cn("text-right tabular-nums", a.change >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-destructive")}>
                {(a.change >= 0 ? "+" : "") + a.change + "%"}
              </TableCell>
              <TableCell>
                <div className="flex justify-end"><Sparkline points={a.points} up={a.change >= 0} /></div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "AttendanceCheckTable",
    description: "Class attendance with present, late, and absent toggle groups per student.",
    code: `
const students = ["Aiden Brooks", "Bianca Ortiz", "Caleb Nguyen", "Daria Ivanova"]

export default function AttendanceCheckTable() {
  const [marks, setMarks] = React.useState<Record<string, string>>({ "Aiden Brooks": "present" })
  const present = Object.values(marks).filter((m) => m === "present").length

  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableCaption className="mb-3">
          {present} present · {students.length - Object.keys(marks).length} unmarked
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            <TableHead className="text-right">Attendance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student}>
              <TableCell className="font-medium">{student}</TableCell>
              <TableCell>
                <ToggleGroup
                  size="sm"
                  variant="outline"
                  className="ms-auto"
                  value={marks[student] ? [marks[student]] : []}
                  onValueChange={(value) => setMarks((m) => ({ ...m, [student]: value[0] as string }))}
                >
                  <ToggleGroupItem value="present" aria-label="Present"><CheckIcon /></ToggleGroupItem>
                  <ToggleGroupItem value="late" aria-label="Late"><ClockIcon /></ToggleGroupItem>
                  <ToggleGroupItem value="absent" aria-label="Absent"><XIcon /></ToggleGroupItem>
                </ToggleGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "MultiLevelHeaderTable",
    description: "A table with grouped two-level column headers using colSpan and rowSpan.",
    code: `
const rows = [
  { team: "Platform", openP1: 2, openP2: 7, closedP1: 11, closedP2: 34 },
  { team: "Mobile", openP1: 0, openP2: 4, closedP1: 6, closedP2: 22 },
  { team: "Growth", openP1: 1, openP2: 9, closedP1: 3, closedP2: 17 },
]

export default function MultiLevelHeaderTable() {
  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead rowSpan={2} className="border-e align-bottom">Team</TableHead>
            <TableHead colSpan={2} className="h-8 border-e text-center">Open</TableHead>
            <TableHead colSpan={2} className="h-8 text-center">Closed (30d)</TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="h-8 text-center text-muted-foreground">P1</TableHead>
            <TableHead className="h-8 border-e text-center text-muted-foreground">P2</TableHead>
            <TableHead className="h-8 text-center text-muted-foreground">P1</TableHead>
            <TableHead className="h-8 text-center text-muted-foreground">P2</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.team}>
              <TableCell className="border-e font-medium">{r.team}</TableCell>
              <TableCell className={cn("text-center tabular-nums", r.openP1 > 0 && "font-semibold text-destructive")}>{r.openP1}</TableCell>
              <TableCell className="border-e text-center tabular-nums">{r.openP2}</TableCell>
              <TableCell className="text-center tabular-nums">{r.closedP1}</TableCell>
              <TableCell className="text-center tabular-nums">{r.closedP2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "ShippingRatesTable",
    description: "A radio-selectable shipping rates table used during checkout.",
    code: `
const rates = [
  { id: "ground", carrier: "Parcelway Ground", eta: "5-7 business days", price: 0 },
  { id: "two-day", carrier: "Parcelway 2-Day", eta: "2 business days", price: 12.5 },
  { id: "overnight", carrier: "SwiftAir Overnight", eta: "Next business day", price: 29 },
]

export default function ShippingRatesTable() {
  const [rate, setRate] = React.useState("two-day")

  return (
    <RadioGroup value={rate} onValueChange={(v) => setRate(v as string)} className="w-full max-w-lg gap-0 border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8" />
            <TableHead>Method</TableHead>
            <TableHead>Delivery</TableHead>
            <TableHead className="text-right">Cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rates.map((r) => (
            <TableRow
              key={r.id}
              data-state={rate === r.id ? "selected" : undefined}
              className="cursor-pointer"
              onClick={() => setRate(r.id)}
            >
              <TableCell><RadioGroupItem value={r.id} aria-label={r.carrier} /></TableCell>
              <TableCell className="font-medium">{r.carrier}</TableCell>
              <TableCell className="text-muted-foreground">{r.eta}</TableCell>
              <TableCell className="text-right tabular-nums">{r.price === 0 ? "Free" : "$" + r.price.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </RadioGroup>
  )
}`,
  },
  {
    name: "UptimeStatusTable",
    description: "Service uptime table with a 30-day bar strip and uptime percentage per service.",
    code: `
const services = [
  { name: "Web app", uptime: 99.98, down: [12] },
  { name: "API", uptime: 99.71, down: [4, 5, 21] },
  { name: "Webhooks", uptime: 100, down: [] as number[] },
]

export default function UptimeStatusTable() {
  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Service</TableHead>
            <TableHead>Last 30 days</TableHead>
            <TableHead className="text-right">Uptime</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((s) => (
            <TableRow key={s.name}>
              <TableCell className="font-medium">{s.name}</TableCell>
              <TableCell>
                <div className="flex gap-px" aria-label={s.down.length + " incidents"}>
                  {Array.from({ length: 30 }).map((_, day) => (
                    <span
                      key={day}
                      className={cn("h-5 w-1", s.down.includes(day) ? "bg-amber-500" : "bg-emerald-500/80")}
                    />
                  ))}
                </div>
              </TableCell>
              <TableCell className="text-right tabular-nums">{s.uptime.toFixed(2)}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "ComparisonDiffTable",
    description: "A before-and-after settings comparison highlighting changed values.",
    code: `
const changes = [
  { setting: "Session timeout", before: "30 min", after: "15 min" },
  { setting: "Password length", before: "8", after: "12" },
  { setting: "Allowed domains", before: "orbit.dev", after: "orbit.dev" },
  { setting: "MFA required", before: "Admins only", after: "Everyone" },
]

export default function ComparisonDiffTable() {
  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Setting</TableHead>
            <TableHead>Current</TableHead>
            <TableHead className="w-6" />
            <TableHead>Proposed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {changes.map((c) => {
            const changed = c.before !== c.after
            return (
              <TableRow key={c.setting}>
                <TableCell className="font-medium">{c.setting}</TableCell>
                <TableCell className={cn(changed ? "text-muted-foreground line-through" : "text-muted-foreground")}>{c.before}</TableCell>
                <TableCell><ArrowRightIcon className="size-3 text-muted-foreground" /></TableCell>
                <TableCell>
                  <span className={cn(changed && "bg-emerald-500/15 px-1 font-medium text-emerald-700 dark:text-emerald-300")}>{c.after}</span>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "AddRowFormTable",
    description: "A table with an inline input row at the bottom for adding new entries.",
    code: `
export default function AddRowFormTable() {
  const [guests, setGuests] = React.useState([
    { name: "Imogen Clarke", meal: "Vegetarian" },
    { name: "Rafael Costa", meal: "Fish" },
  ])
  const [name, setName] = React.useState("")
  const [meal, setMeal] = React.useState("Chicken")

  return (
    <form
      className="w-full max-w-md border"
      onSubmit={(e) => {
        e.preventDefault()
        if (!name.trim()) return
        setGuests((g) => [...g, { name: name.trim(), meal }])
        setName("")
      }}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Guest</TableHead>
            <TableHead>Meal</TableHead>
            <TableHead className="w-10" />
          </TableRow>
        </TableHeader>
        <TableBody className="[&_tr:last-child]:border-b">
          {guests.map((g) => (
            <TableRow key={g.name}>
              <TableCell className="font-medium">{g.name}</TableCell>
              <TableCell>{g.meal}</TableCell>
              <TableCell />
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableCell>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Guest name" className="h-7" aria-label="Guest name" />
            </TableCell>
            <TableCell>
              <NativeSelect size="sm" value={meal} onChange={(e) => setMeal(e.target.value)} aria-label="Meal">
                <NativeSelectOption value="Chicken">Chicken</NativeSelectOption>
                <NativeSelectOption value="Fish">Fish</NativeSelectOption>
                <NativeSelectOption value="Vegetarian">Vegetarian</NativeSelectOption>
              </NativeSelect>
            </TableCell>
            <TableCell>
              <Button type="submit" size="icon-sm" aria-label="Add guest"><PlusIcon /></Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </form>
  )
}`,
  },
  {
    name: "CaptionedDataTable",
    description: "An accessible data table with a top caption, scoped headers, and a source note.",
    code: `
const cities = [
  { city: "Lisbon", temp: 17, rain: 112, sun: 6.1 },
  { city: "Oslo", temp: 2, rain: 74, sun: 1.2 },
  { city: "Nairobi", temp: 21, rain: 61, sun: 7.4 },
  { city: "Sapporo", temp: 1, rain: 104, sun: 2.9 },
]

export default function CaptionedDataTable() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableCaption className="caption-top mt-0 border-b px-2 py-2 text-start">
          <span className="font-medium text-foreground">November climate averages</span>
          <span className="block">Source: fictional weather service, 1995-2025</span>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead scope="col">City</TableHead>
            <TableHead scope="col" className="text-right">Temp (°C)</TableHead>
            <TableHead scope="col" className="text-right">Rain (mm)</TableHead>
            <TableHead scope="col" className="text-right">Sun (h/day)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cities.map((c) => (
            <TableRow key={c.city}>
              <TableHead scope="row" className="font-medium">{c.city}</TableHead>
              <TableCell className="text-right tabular-nums">{c.temp}</TableCell>
              <TableCell className="text-right tabular-nums">{c.rain}</TableCell>
              <TableCell className="text-right tabular-nums">{c.sun}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "TaskPriorityTable",
    description: "Task table with completion checkboxes that strike through done tasks and priority icons.",
    code: `
const initialTasks = [
  { id: 1, title: "Send onboarding survey", priority: "high", done: false },
  { id: 2, title: "Update pricing FAQ", priority: "medium", done: true },
  { id: 3, title: "Archive old campaigns", priority: "low", done: false },
  { id: 4, title: "Fix broken footer links", priority: "high", done: false },
]

const priorityIcon = { high: SignalHighIcon, medium: SignalMediumIcon, low: SignalLowIcon }

export default function TaskPriorityTable() {
  const [tasks, setTasks] = React.useState(initialTasks)

  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8"><span className="sr-only">Done</span></TableHead>
            <TableHead>Task</TableHead>
            <TableHead className="text-right">Priority</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => {
            const Icon = priorityIcon[task.priority as keyof typeof priorityIcon]
            return (
              <TableRow key={task.id}>
                <TableCell>
                  <Checkbox
                    checked={task.done}
                    onCheckedChange={(checked) => setTasks((t) => t.map((x) => (x.id === task.id ? { ...x, done: !!checked } : x)))}
                    aria-label={"Complete " + task.title}
                  />
                </TableCell>
                <TableCell className={cn(task.done && "text-muted-foreground line-through")}>{task.title}</TableCell>
                <TableCell className="text-right">
                  <span className="inline-flex items-center gap-1 capitalize text-muted-foreground">
                    <Icon className="size-3.5" />{task.priority}
                  </span>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
]

export default examples
