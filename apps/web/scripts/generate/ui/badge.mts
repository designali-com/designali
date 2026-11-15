import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "OrderStatusBadges",
    description: "Order statuses for an e-commerce admin, each with a tinted badge and icon.",
    code: `
const statuses = [
  { label: "Pending", icon: ClockIcon, className: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300" },
  { label: "Paid", icon: CreditCardIcon, className: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300" },
  { label: "Shipped", icon: TruckIcon, className: "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300" },
  { label: "Delivered", icon: PackageCheckIcon, className: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" },
  { label: "Refunded", icon: Undo2Icon, className: "bg-muted text-muted-foreground" },
]

export default function OrderStatusBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {statuses.map((status) => (
        <Badge key={status.label} className={status.className}>
          <status.icon data-icon="inline-start" />
          {status.label}
        </Badge>
      ))}
    </div>
  )
}`,
  },
  {
    name: "StatusDotBadges",
    description: "Outline badges with a colored leading dot for compact status labels.",
    code: `
const items = [
  { label: "Active", dot: "bg-emerald-500" },
  { label: "Paused", dot: "bg-amber-500" },
  { label: "Archived", dot: "bg-muted-foreground" },
  { label: "Error", dot: "bg-red-500" },
]

export default function StatusDotBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((item) => (
        <Badge key={item.label} variant="outline">
          <span className={cn("size-1.5 rounded-full", item.dot)} aria-hidden="true" />
          {item.label}
        </Badge>
      ))}
    </div>
  )
}`,
  },
  {
    name: "NotificationBellCount",
    description: "Icon buttons with an overlapping count badge for unread notifications.",
    code: `
export default function NotificationBellCount() {
  return (
    <div className="flex items-center gap-6">
      <div className="relative">
        <Button variant="outline" size="icon" aria-label="Notifications, 4 unread">
          <BellIcon />
        </Button>
        <Badge className="absolute -end-2 -top-2 h-4 min-w-4 rounded-full px-1 text-[10px] tabular-nums">4</Badge>
      </div>
      <div className="relative">
        <Button variant="outline" size="icon" aria-label="Inbox, 23 unread">
          <InboxIcon />
        </Button>
        <Badge variant="destructive" className="absolute -end-2.5 -top-2 h-4 min-w-4 rounded-full bg-destructive px-1 text-[10px] text-white tabular-nums dark:bg-destructive">23</Badge>
      </div>
      <div className="relative">
        <Button variant="outline" size="icon" aria-label="Cart, has items">
          <ShoppingCartIcon />
        </Button>
        <Badge className="absolute -end-1 -top-1 size-2.5 rounded-full p-0" aria-hidden="true" />
      </div>
    </div>
  )
}`,
  },
  {
    name: "CappedCountBadges",
    description: "Numeric badges that cap large counts at 9+, 99+, and abbreviated thousands.",
    code: `
const counts = [3, 12, 148, 2400]

function format(value: number) {
  if (value >= 1000) return (value / 1000).toFixed(1).replace(".0", "") + "k"
  if (value > 99) return "99+"
  return String(value)
}

export default function CappedCountBadges() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1">
      {counts.map((count, index) => (
        <div key={count} className="flex items-center justify-between px-2 py-1.5 hover:bg-muted">
          <span className="text-sm">{["Mentions", "Direct messages", "Updates", "Followers"][index]}</span>
          <Badge variant="secondary" className="min-w-6 tabular-nums">{format(count)}</Badge>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "RemovableFilterChips",
    description: "Active search filters shown as badges that can be removed one by one or all at once.",
    code: `
const initial = ["Remote", "Full-time", "Senior", "Design", "Europe"]

export default function RemovableFilterChips() {
  const [filters, setFilters] = React.useState(initial)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex flex-wrap gap-1.5">
        {filters.map((filter) => (
          <Badge key={filter} variant="secondary" className="pe-1">
            {filter}
            <button
              type="button"
              aria-label={"Remove " + filter}
              onClick={() => setFilters((current) => current.filter((value) => value !== filter))}
              className="flex size-3.5 items-center justify-center hover:bg-foreground/10"
            >
              <XIcon className="size-3" />
            </button>
          </Badge>
        ))}
        {filters.length === 0 && <span className="text-xs text-muted-foreground">No filters applied</span>}
      </div>
      <div className="flex gap-2">
        <Button size="xs" variant="ghost" onClick={() => setFilters([])} disabled={filters.length === 0}>
          Clear all
        </Button>
        <Button size="xs" variant="ghost" onClick={() => setFilters(initial)}>
          Reset
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "TagInputBadges",
    description: "An input that turns typed keywords into badges when Enter is pressed.",
    code: `
export default function TagInputBadges() {
  const [tags, setTags] = React.useState(["onboarding", "billing"])
  const [draft, setDraft] = React.useState("")

  function addTag() {
    const value = draft.trim().toLowerCase()
    if (value && !tags.includes(value)) setTags([...tags, value])
    setDraft("")
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <label htmlFor="ticket-tags" className="text-sm font-medium">Ticket tags</label>
      <div className="flex flex-wrap items-center gap-1.5 border px-2 py-1.5 focus-within:ring-1 focus-within:ring-ring">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="pe-1">
            #{tag}
            <button type="button" aria-label={"Remove " + tag} onClick={() => setTags(tags.filter((value) => value !== tag))}>
              <XIcon className="size-3" />
            </button>
          </Badge>
        ))}
        <input
          id="ticket-tags"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault()
              addTag()
            }
          }}
          placeholder="Add tag..."
          className="min-w-20 flex-1 bg-transparent text-sm outline-none"
        />
      </div>
      <p className="text-xs text-muted-foreground">Press Enter to add a tag.</p>
    </div>
  )
}`,
  },
  {
    name: "PopularPlanBadge",
    description: "A pricing plan card highlighted with a Most popular badge.",
    code: `
export default function PopularPlanBadge() {
  return (
    <Card className="relative w-full max-w-xs ring-2 ring-primary">
      <Badge className="absolute -top-2.5 start-1/2 -translate-x-1/2 rtl:translate-x-1/2">
        <SparklesIcon data-icon="inline-start" />
        Most popular
      </Badge>
      <CardHeader>
        <CardTitle>Growth</CardTitle>
        <CardDescription>For teams scaling past their first 1,000 customers.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <p>
          <span className="text-3xl font-semibold">$49</span>
          <span className="text-muted-foreground"> / month</span>
        </p>
        <Button className="w-full">Start 14-day trial</Button>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "SidebarNavFeatureBadges",
    description: "Sidebar navigation items annotated with New, Beta, and count badges.",
    code: `
const nav = [
  { label: "Dashboard", icon: LayoutDashboardIcon },
  { label: "Inbox", icon: InboxIcon, badge: "12", variant: "secondary" as const },
  { label: "Automations", icon: WorkflowIcon, badge: "New", variant: "default" as const },
  { label: "AI insights", icon: SparklesIcon, badge: "Beta", variant: "outline" as const },
  { label: "Settings", icon: SettingsIcon },
]

export default function SidebarNavFeatureBadges() {
  return (
    <nav className="flex w-full max-w-56 flex-col gap-0.5 border p-2">
      {nav.map((item, index) => (
        <a
          key={item.label}
          href="#"
          className={cn("flex items-center gap-2 px-2 py-1.5 text-sm hover:bg-muted", index === 0 && "bg-muted font-medium")}
        >
          <item.icon className="size-4 text-muted-foreground" />
          <span className="flex-1">{item.label}</span>
          {item.badge && <Badge variant={item.variant}>{item.badge}</Badge>}
        </a>
      ))}
    </nav>
  )
}`,
  },
  {
    name: "DeploymentStatusList",
    description: "Deployment rows with queued, building, ready, and failed status badges.",
    code: `
const deployments = [
  { branch: "main", commit: "a1f9c2e", status: "Ready", time: "2m ago" },
  { branch: "feat/search", commit: "77be310", status: "Building", time: "Now" },
  { branch: "fix/auth-loop", commit: "c03d8aa", status: "Failed", time: "18m ago" },
  { branch: "chore/deps", commit: "5e2b1f4", status: "Queued", time: "Now" },
]

export default function DeploymentStatusList() {
  return (
    <div className="w-full max-w-md divide-y border">
      {deployments.map((deploy) => (
        <div key={deploy.commit} className="flex items-center gap-3 p-3">
          <GitBranchIcon className="size-4 shrink-0 text-muted-foreground" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{deploy.branch}</p>
            <p className="font-mono text-xs text-muted-foreground">{deploy.commit} · {deploy.time}</p>
          </div>
          {deploy.status === "Ready" && (
            <Badge className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              <CircleCheckIcon data-icon="inline-start" />
              Ready
            </Badge>
          )}
          {deploy.status === "Building" && (
            <Badge variant="secondary">
              <Spinner data-icon="inline-start" />
              Building
            </Badge>
          )}
          {deploy.status === "Failed" && (
            <Badge variant="destructive">
              <CircleXIcon data-icon="inline-start" />
              Failed
            </Badge>
          )}
          {deploy.status === "Queued" && (
            <Badge variant="outline">
              <ClockIcon data-icon="inline-start" />
              Queued
            </Badge>
          )}
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "IssuePriorityBadges",
    description: "Issue tracker priority levels from urgent to low with signal icons.",
    code: `
const priorities = [
  { label: "Urgent", icon: SirenIcon, className: "bg-red-600 text-white" },
  { label: "High", icon: SignalHighIcon, className: "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300" },
  { label: "Medium", icon: SignalMediumIcon, className: "bg-yellow-50 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300" },
  { label: "Low", icon: SignalLowIcon, className: "bg-muted text-muted-foreground" },
]

export default function IssuePriorityBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {priorities.map((priority) => (
        <Badge key={priority.label} className={priority.className}>
          <priority.icon data-icon="inline-start" />
          {priority.label}
        </Badge>
      ))}
    </div>
  )
}`,
  },
  {
    name: "PackageVersionBadges",
    description: "Monospace version badges marking latest, deprecated, and pre-release builds.",
    code: `
const versions = [
  { version: "v3.2.0", tag: "latest", note: "Released Oct 2" },
  { version: "v3.3.0-rc.1", tag: "next", note: "Release candidate" },
  { version: "v2.9.4", tag: "deprecated", note: "Security fixes only" },
]

export default function PackageVersionBadges() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {versions.map((item) => (
        <div key={item.version} className="flex items-center gap-2 border p-2.5">
          <Badge variant="outline" className="font-mono">{item.version}</Badge>
          <span className="flex-1 text-xs text-muted-foreground">{item.note}</span>
          <Badge variant={item.tag === "latest" ? "default" : item.tag === "deprecated" ? "destructive" : "secondary"}>
            {item.tag}
          </Badge>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "KpiTrendBadges",
    description: "Dashboard metric tiles with up and down trend badges for period change.",
    code: `
const metrics = [
  { label: "Revenue", value: "$48.2k", change: 12.4 },
  { label: "Churn", value: "2.1%", change: -0.6 },
  { label: "Signups", value: "1,284", change: -4.3 },
]

export default function KpiTrendBadges() {
  return (
    <div className="grid w-full max-w-md grid-cols-1 gap-2 sm:grid-cols-3">
      {metrics.map((metric) => {
        const up = metric.change > 0
        const good = metric.label === "Churn" ? !up : up
        return (
          <div key={metric.label} className="flex flex-col gap-1 border p-3">
            <span className="text-xs text-muted-foreground">{metric.label}</span>
            <span className="text-lg font-semibold">{metric.value}</span>
            <Badge
              className={cn(
                good
                  ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                  : "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300"
              )}
            >
              {up ? <TrendingUpIcon data-icon="inline-start" /> : <TrendingDownIcon data-icon="inline-start" />}
              {(up ? "+" : "") + metric.change + "%"}
            </Badge>
          </div>
        )
      })}
    </div>
  )
}`,
  },
  {
    name: "ProductCardDealBadges",
    description: "A product card with discount, low stock, and free shipping badges.",
    code: `
export default function ProductCardDealBadges() {
  return (
    <Card className="w-full max-w-xs pt-0">
      <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-muted to-muted/40">
        <HeadphonesIcon className="size-16 text-muted-foreground" />
        <div className="absolute start-2 top-2 flex flex-col items-start gap-1">
          <Badge variant="destructive" className="bg-destructive text-white dark:bg-destructive">-25%</Badge>
          <Badge variant="secondary">Only 3 left</Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle>Aurora Wireless Headphones</CardTitle>
        <div className="flex items-baseline gap-2">
          <span className="text-base font-semibold">$149</span>
          <span className="text-xs text-muted-foreground line-through">$199</span>
        </div>
      </CardHeader>
      <CardContent>
        <Badge variant="outline">
          <TruckIcon data-icon="inline-start" />
          Free shipping
        </Badge>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "IssueLabelSet",
    description: "Repository issue labels with tinted backgrounds and a matching color swatch.",
    code: `
const labels = [
  { name: "bug", color: "#d73a4a" },
  { name: "enhancement", color: "#2563eb" },
  { name: "good first issue", color: "#16a34a" },
  { name: "needs triage", color: "#ca8a04" },
  { name: "docs", color: "#7c3aed" },
]

export default function IssueLabelSet() {
  return (
    <div className="flex max-w-sm flex-wrap justify-center gap-1.5">
      {labels.map((label) => (
        <Badge
          key={label.name}
          variant="outline"
          className="rounded-full"
          style={{ borderColor: label.color + "66", backgroundColor: label.color + "1a", color: label.color }}
        >
          {label.name}
        </Badge>
      ))}
    </div>
  )
}`,
  },
  {
    name: "SelectableCategoryBadges",
    description: "Badges rendered as toggle buttons to filter a list by category.",
    code: `
const categories = ["All", "Design", "Engineering", "Marketing", "Sales", "Support"]

export default function SelectableCategoryBadges() {
  const [active, setActive] = React.useState("All")

  return (
    <div className="flex max-w-sm flex-wrap justify-center gap-1.5" role="group" aria-label="Filter by category">
      {categories.map((category) => (
        <Badge
          key={category}
          variant={active === category ? "default" : "outline"}
          className="h-7 cursor-pointer px-3"
          render={<button type="button" aria-pressed={active === category} onClick={() => setActive(category)} />}
        >
          {category}
        </Badge>
      ))}
    </div>
  )
}`,
  },
  {
    name: "SubscriptionTableStatus",
    description: "A subscriptions table whose status column uses badge variants.",
    code: `
const rows = [
  { customer: "Juniper Foods", plan: "Business", status: "Active" },
  { customer: "Halcyon Travel", plan: "Starter", status: "Trialing" },
  { customer: "Marrow & Co", plan: "Business", status: "Past due" },
  { customer: "Tidewater Inc", plan: "Enterprise", status: "Canceled" },
]

const variants = {
  Active: "default",
  Trialing: "secondary",
  "Past due": "destructive",
  Canceled: "outline",
} as const

export default function SubscriptionTableStatus() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.customer}>
              <TableCell className="font-medium">{row.customer}</TableCell>
              <TableCell className="text-muted-foreground">{row.plan}</TableCell>
              <TableCell className="text-right">
                <Badge variant={variants[row.status as keyof typeof variants]}>{row.status}</Badge>
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
    name: "MemberRoleBadges",
    description: "Workspace members with Owner, Admin, Member, and Guest role badges.",
    code: `
const members = [
  { name: "Lucia Ferrer", initials: "LF", role: "Owner" },
  { name: "Ahmed Saleh", initials: "AS", role: "Admin" },
  { name: "Bea Grant", initials: "BG", role: "Member" },
  { name: "Contractor", initials: "CT", role: "Guest" },
]

const roleClass: Record<string, string> = {
  Owner: "",
  Admin: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  Member: "bg-secondary text-secondary-foreground",
  Guest: "border-dashed border-border bg-transparent text-muted-foreground",
}

export default function MemberRoleBadges() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      {members.map((member) => (
        <div key={member.name} className="flex items-center gap-3">
          <Avatar size="sm">
            <AvatarFallback>{member.initials}</AvatarFallback>
          </Avatar>
          <span className="flex-1 text-sm">{member.name}</span>
          <Badge className={roleClass[member.role]}>
            {member.role === "Owner" && <CrownIcon data-icon="inline-start" />}
            {member.role}
          </Badge>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "VerifiedNameBadge",
    description: "Inline verified and staff badges displayed next to a profile name.",
    code: `
export default function VerifiedNameBadge() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold">Ophelia Brandt</span>
        <Badge className="bg-sky-500 text-white">
          <BadgeCheckIcon data-icon="inline-start" />
          Verified
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold">Cyril Mendez</span>
        <Badge variant="outline">
          <ShieldCheckIcon data-icon="inline-start" />
          Staff
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold">Tilda Rowe</span>
        <Badge variant="secondary" className="size-5 p-0" aria-label="Verified">
          <BadgeCheckIcon />
        </Badge>
      </div>
    </div>
  )
}`,
  },
  {
    name: "BadgeSizeScale",
    description: "Small, default, and large badge sizes created with className overrides.",
    code: `
const sizes = [
  { label: "Small", className: "h-4 px-1.5 text-[10px]" },
  { label: "Default", className: "" },
  { label: "Large", className: "h-6 px-2.5 text-sm [&>svg]:size-3.5!" },
  { label: "Extra large", className: "h-7 px-3 text-sm [&>svg]:size-4!" },
]

export default function BadgeSizeScale() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {sizes.map((size) => (
        <Badge key={size.label} className={size.className}>
          <ZapIcon data-icon="inline-start" />
          {size.label}
        </Badge>
      ))}
    </div>
  )
}`,
  },
  {
    name: "PillShapeBadges",
    description: "Fully rounded pill badges across every variant.",
    code: `
const variants = ["default", "secondary", "destructive", "outline", "ghost", "link"] as const

export default function PillShapeBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {variants.map((variant) => (
        <Badge key={variant} variant={variant} className="rounded-full px-2.5 capitalize">
          {variant}
        </Badge>
      ))}
    </div>
  )
}`,
  },
  {
    name: "InvoiceStatusList",
    description: "An invoices list with paid, overdue, draft, and scheduled status badges.",
    code: `
const invoices = [
  { id: "INV-1042", client: "Northlake Dental", amount: "$2,400.00", status: "Paid" },
  { id: "INV-1043", client: "Fern & Finch", amount: "$860.00", status: "Overdue" },
  { id: "INV-1044", client: "Orbit Fitness", amount: "$1,125.50", status: "Scheduled" },
  { id: "INV-1045", client: "Quill Press", amount: "$340.00", status: "Draft" },
]

export default function InvoiceStatusList() {
  return (
    <div className="w-full max-w-md divide-y border">
      {invoices.map((invoice) => (
        <div key={invoice.id} className="flex items-center gap-3 p-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{invoice.client}</p>
            <p className="font-mono text-xs text-muted-foreground">{invoice.id}</p>
          </div>
          <span className="text-sm tabular-nums">{invoice.amount}</span>
          <Badge
            variant={invoice.status === "Overdue" ? "destructive" : invoice.status === "Draft" ? "outline" : "secondary"}
            className={cn("w-20", invoice.status === "Paid" && "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300")}
          >
            {invoice.status}
          </Badge>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "PlanTierBadges",
    description: "Free, Pro, Team, and Enterprise tier badges with escalating emphasis.",
    code: `
export default function PlanTierBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge variant="outline">Free</Badge>
      <Badge>
        <ZapIcon data-icon="inline-start" />
        Pro
      </Badge>
      <Badge className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white">
        <UsersIcon data-icon="inline-start" />
        Team
      </Badge>
      <Badge className="bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-white">
        <GemIcon data-icon="inline-start" />
        Enterprise
      </Badge>
    </div>
  )
}`,
  },
  {
    name: "IntegrationConnectionBadges",
    description: "Integration settings rows whose badge reflects a switch-controlled connection.",
    code: `
const apps = [
  { id: "chat", name: "Team chat", description: "Post alerts to a channel", icon: MessageSquareIcon },
  { id: "calendar", name: "Calendar sync", description: "Mirror due dates", icon: CalendarIcon },
  { id: "storage", name: "Cloud storage", description: "Attach shared files", icon: CloudIcon },
]

export default function IntegrationConnectionBadges() {
  const [connected, setConnected] = React.useState<Record<string, boolean>>({ chat: true })

  return (
    <div className="w-full max-w-md divide-y border">
      {apps.map((app) => {
        const on = !!connected[app.id]
        return (
          <div key={app.id} className="flex items-center gap-3 p-3">
            <app.icon className="size-5 shrink-0 text-muted-foreground" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{app.name}</span>
                <Badge variant={on ? "secondary" : "outline"} className={cn(on && "text-emerald-700 dark:text-emerald-400")}>
                  {on ? "Connected" : "Not connected"}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{app.description}</p>
            </div>
            <Switch
              checked={on}
              onCheckedChange={(value) => setConnected((current) => ({ ...current, [app.id]: value }))}
              aria-label={"Toggle " + app.name}
            />
          </div>
        )
      })}
    </div>
  )
}`,
  },
  {
    name: "ChangelogTypeBadges",
    description: "Changelog entries tagged as Added, Improved, Fixed, or Removed.",
    code: `
const entries = [
  { type: "Added", text: "Bulk export for invoices and receipts." },
  { type: "Improved", text: "Search results now load 40% faster." },
  { type: "Fixed", text: "Timezone offset on recurring events." },
  { type: "Removed", text: "Legacy v1 webhooks endpoint." },
]

const styles: Record<string, string> = {
  Added: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  Improved: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  Fixed: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  Removed: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
}

export default function ChangelogTypeBadges() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">Version 4.8</span>
        <span className="text-xs text-muted-foreground">November 3</span>
      </div>
      {entries.map((entry) => (
        <div key={entry.text} className="flex items-start gap-3">
          <Badge className={cn("w-18", styles[entry.type])}>{entry.type}</Badge>
          <p className="text-sm text-muted-foreground">{entry.text}</p>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ServiceUptimeStatus",
    description: "A status page listing services with operational, degraded, and outage badges.",
    code: `
const services = [
  { name: "API", status: "Operational" },
  { name: "Dashboard", status: "Operational" },
  { name: "Webhooks", status: "Degraded" },
  { name: "Email delivery", status: "Outage" },
]

const config: Record<string, { className: string; icon: typeof CircleCheckIcon }> = {
  Operational: { className: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300", icon: CircleCheckIcon },
  Degraded: { className: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300", icon: TriangleAlertIcon },
  Outage: { className: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300", icon: CircleXIcon },
}

export default function ServiceUptimeStatus() {
  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b p-3">
        <span className="text-sm font-semibold">System status</span>
        <Badge variant="outline">Partial outage</Badge>
      </div>
      {services.map((service) => {
        const item = config[service.status]!
        return (
          <div key={service.name} className="flex items-center justify-between p-3">
            <span className="text-sm">{service.name}</span>
            <Badge className={item.className}>
              <item.icon data-icon="inline-start" />
              {service.status}
            </Badge>
          </div>
        )
      })}
    </div>
  )
}`,
  },
  {
    name: "TabsWithCountBadges",
    description: "Tabs whose triggers show item counts in badges.",
    code: `
const tabs = [
  { value: "open", label: "Open", count: 14 },
  { value: "review", label: "In review", count: 3 },
  { value: "closed", label: "Closed", count: 128 },
]

export default function TabsWithCountBadges() {
  return (
    <Tabs defaultValue="open" className="w-full max-w-md">
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
            <Badge variant="secondary" className="h-4 px-1.5 text-[10px] tabular-nums">{tab.count}</Badge>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="border p-4 text-sm text-muted-foreground">
          {tab.count} {tab.label.toLowerCase()} pull requests.
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "ConversationUnreadBadges",
    description: "A chat conversation list with unread count badges and a muted indicator.",
    code: `
const chats = [
  { name: "Product squad", preview: "Ines: shipping the beta today", unread: 5, muted: false },
  { name: "Ravi Chandra", preview: "Sounds good, see you then", unread: 1, muted: false },
  { name: "Random", preview: "Lunch spot recommendations?", unread: 42, muted: true },
  { name: "Ola Nilsen", preview: "Thanks for the notes!", unread: 0, muted: false },
]

export default function ConversationUnreadBadges() {
  return (
    <div className="w-full max-w-sm divide-y border">
      {chats.map((chat) => (
        <div key={chat.name} className="flex items-center gap-3 p-3">
          <div className="min-w-0 flex-1">
            <p className={cn("truncate text-sm", chat.unread > 0 && !chat.muted ? "font-semibold" : "font-medium")}>{chat.name}</p>
            <p className="truncate text-xs text-muted-foreground">{chat.preview}</p>
          </div>
          {chat.unread > 0 && (
            <Badge variant={chat.muted ? "secondary" : "default"} className="h-5 min-w-5 rounded-full px-1.5 tabular-nums">
              {chat.unread > 9 ? "9+" : chat.unread}
            </Badge>
          )}
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "LiveRecordingBadges",
    description: "Pulsing Live and Recording badges for streams and meetings.",
    code: `
export default function LiveRecordingBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge className="bg-red-600 font-semibold tracking-wide text-white uppercase">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex size-1.5 rounded-full bg-white" />
        </span>
        Live
      </Badge>
      <Badge variant="outline">
        <span className="size-1.5 animate-pulse rounded-full bg-red-500" />
        Recording · 12:04
      </Badge>
      <Badge variant="secondary">
        <EyeIcon data-icon="inline-start" />
        1,204 watching
      </Badge>
    </div>
  )
}`,
  },
  {
    name: "BetaFeatureSettings",
    description: "Settings rows that flag experimental features with Beta and Alpha badges.",
    code: `
const features = [
  { id: "ai", label: "AI summaries", stage: "Beta", description: "Summarize long threads automatically." },
  { id: "canvas", label: "Infinite canvas", stage: "Alpha", description: "Arrange notes on a freeform board." },
  { id: "offline", label: "Offline mode", stage: "Beta", description: "Keep working without a connection." },
]

export default function BetaFeatureSettings() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      {features.map((feature) => (
        <div key={feature.id} className="flex items-start justify-between gap-4">
          <div>
            <label htmlFor={feature.id} className="flex items-center gap-2 text-sm font-medium">
              {feature.label}
              <Badge variant={feature.stage === "Alpha" ? "destructive" : "secondary"} className="h-4 px-1.5 text-[10px] uppercase">
                {feature.stage}
              </Badge>
            </label>
            <p className="text-xs text-muted-foreground">{feature.description}</p>
          </div>
          <Switch id={feature.id} defaultChecked={feature.id === "ai"} />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "SkillTagsOverflow",
    description: "Profile skill tags that collapse into a +N badge and expand on click.",
    code: `
const skills = ["Figma", "TypeScript", "Design systems", "Accessibility", "Prototyping", "User research", "Motion", "Copywriting"]

export default function SkillTagsOverflow() {
  const [expanded, setExpanded] = React.useState(false)
  const shown = expanded ? skills : skills.slice(0, 4)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <p className="text-sm font-medium">Skills</p>
      <div className="flex flex-wrap gap-1.5">
        {shown.map((skill) => (
          <Badge key={skill} variant="secondary">{skill}</Badge>
        ))}
        <Badge
          variant="outline"
          className="cursor-pointer"
          render={<button type="button" aria-expanded={expanded} onClick={() => setExpanded((value) => !value)} />}
        >
          {expanded ? "Show less" : "+" + (skills.length - 4) + " more"}
        </Badge>
      </div>
    </div>
  )
}`,
  },
  {
    name: "EnvironmentBadges",
    description: "Environment labels for production, staging, preview, and local deployments.",
    code: `
const envs = [
  { name: "Production", url: "app.quillstack.io", className: "bg-red-600 text-white" },
  { name: "Staging", url: "staging.quillstack.io", className: "bg-amber-400 text-amber-950" },
  { name: "Preview", url: "pr-812.quillstack.dev", className: "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300" },
  { name: "Local", url: "localhost:3000", className: "bg-muted text-muted-foreground" },
]

export default function EnvironmentBadges() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {envs.map((env) => (
        <div key={env.name} className="flex items-center gap-3 border p-2.5">
          <Badge className={cn("w-20 font-semibold uppercase", env.className)}>{env.name}</Badge>
          <span className="truncate font-mono text-xs text-muted-foreground">{env.url}</span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "FormErrorCountBadges",
    description: "Form section badges that switch to an aria-invalid error state when fields are missing.",
    code: `
const sections = [
  { name: "Company details", errors: 0 },
  { name: "Billing address", errors: 2 },
  { name: "Tax information", errors: 1 },
]

export default function FormErrorCountBadges() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      {sections.map((section) => (
        <div key={section.name} className="flex items-center justify-between border p-3">
          <span className="text-sm">{section.name}</span>
          {section.errors > 0 ? (
            <Badge variant="destructive" aria-invalid="true">
              <CircleAlertIcon data-icon="inline-start" />
              {section.errors} {section.errors === 1 ? "issue" : "issues"}
            </Badge>
          ) : (
            <Badge variant="outline">
              <CheckIcon data-icon="inline-start" />
              Complete
            </Badge>
          )}
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "TopicLinkBadges",
    description: "Clickable topic badges rendered as links beneath a blog article.",
    code: `
const topics = ["react", "performance", "server-components", "caching", "web-vitals"]

export default function TopicLinkBadges() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Related topics</p>
      <div className="flex flex-wrap gap-1.5">
        {topics.map((topic) => (
          <Badge key={topic} variant="outline" render={<a href={"#" + topic} />}>
            <HashIcon data-icon="inline-start" />
            {topic}
          </Badge>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "FileTypeBadges",
    description: "File manager rows with color-coded file extension badges.",
    code: `
const files = [
  { name: "Quarterly report", ext: "PDF", size: "2.4 MB", className: "bg-red-600 text-white" },
  { name: "Hero banner", ext: "PNG", size: "880 KB", className: "bg-sky-600 text-white" },
  { name: "Customer list", ext: "CSV", size: "64 KB", className: "bg-emerald-600 text-white" },
  { name: "Brand assets", ext: "ZIP", size: "31 MB", className: "bg-zinc-700 text-white" },
]

export default function FileTypeBadges() {
  return (
    <div className="w-full max-w-sm divide-y border">
      {files.map((file) => (
        <div key={file.name} className="flex items-center gap-3 p-3">
          <Badge className={cn("w-10 font-mono text-[10px] font-bold", file.className)}>{file.ext}</Badge>
          <span className="flex-1 truncate text-sm">{file.name}</span>
          <span className="text-xs text-muted-foreground">{file.size}</span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "AgendaEventTypeBadges",
    description: "A daily agenda where each event is labeled with its type badge.",
    code: `
const events = [
  { time: "09:00", title: "Design standup", type: "Meeting", className: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300" },
  { time: "11:30", title: "Focus: billing flows", type: "Focus", className: "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300" },
  { time: "13:00", title: "Lunch with Amina", type: "Personal", className: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" },
  { time: "16:00", title: "Contract renewal", type: "Deadline", className: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300" },
]

export default function AgendaEventTypeBadges() {
  return (
    <div className="w-full max-w-sm border">
      <div className="border-b p-3 text-sm font-semibold">Tuesday, March 18</div>
      {events.map((event) => (
        <div key={event.time} className="flex items-center gap-3 px-3 py-2.5">
          <span className="w-10 font-mono text-xs text-muted-foreground">{event.time}</span>
          <span className="flex-1 truncate text-sm">{event.title}</span>
          <Badge className={event.className}>{event.type}</Badge>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "OnboardingStepBadges",
    description: "An onboarding checklist with Done, In progress, and Up next step badges.",
    code: `
const steps = [
  { title: "Create your workspace", state: "Done" },
  { title: "Invite teammates", state: "Done" },
  { title: "Connect a data source", state: "In progress" },
  { title: "Publish your first report", state: "Up next" },
]

export default function OnboardingStepBadges() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Get started</CardTitle>
        <CardDescription>2 of 4 steps complete</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-center gap-3">
            <span className="flex size-5 items-center justify-center border text-[10px] text-muted-foreground">{index + 1}</span>
            <span className={cn("flex-1 text-sm", step.state === "Done" && "text-muted-foreground line-through")}>{step.title}</span>
            <Badge variant={step.state === "Done" ? "secondary" : step.state === "In progress" ? "default" : "outline"}>
              {step.state === "Done" && <CheckIcon data-icon="inline-start" />}
              {step.state}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "ApiMethodBadges",
    description: "API reference endpoints labeled with HTTP method badges.",
    code: `
const endpoints = [
  { method: "GET", path: "/v1/customers", className: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" },
  { method: "POST", path: "/v1/customers", className: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300" },
  { method: "PATCH", path: "/v1/customers/:id", className: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300" },
  { method: "DELETE", path: "/v1/customers/:id", className: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300" },
]

export default function ApiMethodBadges() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      {endpoints.map((endpoint) => (
        <a key={endpoint.method} href="#" className="flex items-center gap-3 px-2 py-1.5 hover:bg-muted">
          <Badge className={cn("w-14 font-mono text-[10px] font-bold", endpoint.className)}>{endpoint.method}</Badge>
          <span className="truncate font-mono text-xs">{endpoint.path}</span>
        </a>
      ))}
    </div>
  )
}`,
  },
  {
    name: "CopyableIdBadge",
    description: "A badge button that copies a resource ID and briefly confirms with a check.",
    code: `
export default function CopyableIdBadge() {
  const [copied, setCopied] = React.useState(false)
  const id = "cus_8Fq2LmZ1xT"

  function copy() {
    navigator.clipboard?.writeText(id)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-muted-foreground">Customer ID</span>
      <Badge
        variant="outline"
        className="cursor-pointer font-mono"
        render={<button type="button" onClick={copy} aria-label="Copy customer ID" />}
      >
        {id}
        {copied ? <CheckIcon data-icon="inline-end" className="text-emerald-600" /> : <CopyIcon data-icon="inline-end" />}
      </Badge>
    </div>
  )
}`,
  },
  {
    name: "ExpiryCountdownBadges",
    description: "Trial and coupon badges that escalate from neutral to warning to expired.",
    code: `
const items = [
  { label: "Pro trial", days: 12 },
  { label: "SPRING25 coupon", days: 2 },
  { label: "API key key_demo_...4f", days: 0 },
]

export default function ExpiryCountdownBadges() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      {items.map((item) => (
        <div key={item.label} className="flex items-center justify-between border p-3">
          <span className="truncate text-sm">{item.label}</span>
          {item.days === 0 ? (
            <Badge variant="destructive">Expired</Badge>
          ) : item.days <= 3 ? (
            <Badge className="bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
              <HourglassIcon data-icon="inline-start" />
              {item.days} days left
            </Badge>
          ) : (
            <Badge variant="secondary">
              <CalendarIcon data-icon="inline-start" />
              {item.days} days left
            </Badge>
          )}
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ArticleMetaBadges",
    description: "Article metadata using ghost and link badge variants for category and read time.",
    code: `
export default function ArticleMetaBadges() {
  return (
    <article className="flex w-full max-w-sm flex-col gap-2 border p-4">
      <div className="flex flex-wrap items-center gap-1">
        <Badge variant="link" className="px-0" render={<a href="#" />}>Engineering</Badge>
        <span className="text-muted-foreground">·</span>
        <Badge variant="ghost">
          <ClockIcon data-icon="inline-start" />
          7 min read
        </Badge>
        <Badge variant="ghost">
          <CalendarIcon data-icon="inline-start" />
          Feb 21
        </Badge>
      </div>
      <h3 className="text-base font-semibold">How we cut cold starts by 60%</h3>
      <p className="text-sm text-muted-foreground">
        Lazy module loading, smarter bundling, and a few surprises from profiling production traffic.
      </p>
    </article>
  )
}`,
  },
  {
    name: "AssigneeChipBadges",
    description: "Badges that embed a tiny initials avatar to represent assigned people.",
    code: `
const people = [
  { name: "Vera Holm", initials: "VH" },
  { name: "Diego Santos", initials: "DS" },
  { name: "Aiko Mori", initials: "AM" },
]

export default function AssigneeChipBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {people.map((person) => (
        <Badge key={person.name} variant="outline" className="h-6 rounded-full ps-0.5 pe-2">
          <span className="flex size-5 items-center justify-center rounded-full bg-muted text-[9px] font-semibold">
            {person.initials}
          </span>
          {person.name}
        </Badge>
      ))}
    </div>
  )
}`,
  },
  {
    name: "InlineHeadingCountBadges",
    description: "Badges placed inline with section headings and buttons to show totals.",
    code: `
export default function InlineHeadingCountBadges() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-base font-semibold">
          Pending approvals
          <Badge variant="secondary" className="tabular-nums">8</Badge>
        </h3>
        <Button size="sm" variant="outline">
          Review all
          <Badge className="h-4 px-1 text-[10px]">8</Badge>
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm">
          <FilterIcon data-icon="inline-start" />
          Filters
          <Badge variant="secondary" className="h-4 px-1 text-[10px]">3</Badge>
        </Button>
        <Button size="sm" variant="ghost">
          Archived
          <Badge variant="outline" className="h-4 px-1 text-[10px]">42</Badge>
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "PasswordStrengthBadge",
    description: "A password field with a live badge rating strength as weak, fair, or strong.",
    code: `
function score(value: string) {
  let points = 0
  if (value.length >= 8) points++
  if (/[A-Z]/.test(value) && /[a-z]/.test(value)) points++
  if (/[0-9]/.test(value)) points++
  if (/[^A-Za-z0-9]/.test(value)) points++
  return points
}

export default function PasswordStrengthBadge() {
  const [password, setPassword] = React.useState("")
  const points = score(password)
  const level = points <= 1 ? "Weak" : points <= 2 ? "Fair" : points === 3 ? "Good" : "Strong"

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <div className="flex items-center justify-between">
        <label htmlFor="new-password" className="text-sm font-medium">New password</label>
        {password && (
          <Badge
            variant={level === "Weak" ? "destructive" : "secondary"}
            className={cn(
              level === "Fair" && "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
              (level === "Good" || level === "Strong") && "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
            )}
          >
            {level}
          </Badge>
        )}
      </div>
      <Input id="new-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="At least 8 characters" />
    </div>
  )
}`,
  },
  {
    name: "AmenityIconBadges",
    description: "Square icon-only badges listing amenities on a rental listing card.",
    code: `
const amenities = [
  { label: "Wi-Fi", icon: WifiIcon },
  { label: "Parking", icon: CarIcon },
  { label: "Coffee", icon: CoffeeIcon },
  { label: "Pets allowed", icon: PawPrintIcon },
  { label: "Air conditioning", icon: SnowflakeIcon },
]

export default function AmenityIconBadges() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div>
        <p className="text-sm font-semibold">Harborview Loft</p>
        <p className="text-xs text-muted-foreground">2 guests · 1 bedroom · $128 / night</p>
      </div>
      <div className="flex gap-1.5">
        {amenities.map((amenity) => (
          <Badge key={amenity.label} variant="secondary" className="size-7 p-0 [&>svg]:size-3.5!" title={amenity.label} aria-label={amenity.label}>
            <amenity.icon />
          </Badge>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "ShippingProgressBadges",
    description: "A shipment tracking card with a status badge and step badges along the route.",
    code: `
const steps = ["Ordered", "Packed", "In transit", "Delivered"]
const current = 2

export default function ShippingProgressBadges() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Order #48213</CardTitle>
        <CardDescription>Estimated delivery Friday, Apr 11</CardDescription>
        <CardAction>
          <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            <TruckIcon data-icon="inline-start" />
            On the way
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-1">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-1">
            <Badge variant={index < current ? "secondary" : index === current ? "default" : "outline"}>
              {index < current && <CheckIcon data-icon="inline-start" />}
              {step}
            </Badge>
            {index < steps.length - 1 && <ChevronRightIcon className="size-3 text-muted-foreground" />}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}`,
  },
]

export default examples
