import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "TextAlignmentToggleGroup",
    description: "Single-select outline group for left, center, right and justified text alignment.",
    code: `
export default function TextAlignmentToggleGroup() {
  return (
    <ToggleGroup variant="outline" spacing={0} defaultValue={["left"]}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRightIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Justify">
        <AlignJustifyIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}`,
  },
  {
    name: "TextFormattingToggleGroup",
    description: "Multi-select formatting group whose pressed marks are applied to a live text preview.",
    code: `
export default function TextFormattingToggleGroup() {
  const [marks, setMarks] = React.useState<string[]>(["bold"])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <ToggleGroup multiple variant="outline" spacing={0} value={marks} onValueChange={setMarks}>
        <ToggleGroupItem value="bold" aria-label="Bold">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <UnderlineIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="strike" aria-label="Strikethrough">
          <StrikethroughIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <p
        className={cn(
          "border bg-muted/30 p-3 text-sm",
          marks.includes("bold") && "font-semibold",
          marks.includes("italic") && "italic",
          marks.includes("underline") && "underline",
          marks.includes("strike") && "line-through"
        )}
      >
        The quarterly review moves to Thursday at 10:00.
      </p>
    </div>
  )
}`,
  },
  {
    name: "ToggleGroupSizeScale",
    description: "The same view switcher rendered in the sm, default and lg sizes.",
    code: `
const sizes = ["sm", "default", "lg"] as const

export default function ToggleGroupSizeScale() {
  return (
    <div className="flex flex-col items-center gap-3">
      {sizes.map((size) => (
        <div key={size} className="flex items-center gap-3">
          <span className="w-14 text-end text-xs text-muted-foreground">{size}</span>
          <ToggleGroup variant="outline" size={size} defaultValue={["day"]}>
            <ToggleGroupItem value="day">Day</ToggleGroupItem>
            <ToggleGroupItem value="week">Week</ToggleGroupItem>
            <ToggleGroupItem value="month">Month</ToggleGroupItem>
          </ToggleGroup>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ToggleGroupSpacingVariants",
    description: "Compares attached items (spacing 0) with the default gap and a wide gap.",
    code: `
const spacings = [0, 2, 4]

export default function ToggleGroupSpacingVariants() {
  return (
    <div className="flex flex-col items-center gap-4">
      {spacings.map((spacing) => (
        <div key={spacing} className="flex flex-col items-center gap-1.5">
          <ToggleGroup variant="outline" spacing={spacing} defaultValue={["b"]}>
            <ToggleGroupItem value="a">Draft</ToggleGroupItem>
            <ToggleGroupItem value="b">Review</ToggleGroupItem>
            <ToggleGroupItem value="c">Published</ToggleGroupItem>
          </ToggleGroup>
          <span className="text-xs text-muted-foreground">spacing={spacing}</span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ProjectViewModeSwitcher",
    description: "Controlled grid, list and board switcher that swaps the layout of a project list.",
    code: `
const projects = ["Atlas redesign", "Billing v2", "Mobile onboarding", "Search revamp"]

export default function ProjectViewModeSwitcher() {
  const [view, setView] = React.useState("grid")

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Projects</span>
        <ToggleGroup
          variant="outline"
          size="sm"
          spacing={0}
          value={[view]}
          onValueChange={(next) => next[0] && setView(next[0])}
        >
          <ToggleGroupItem value="grid" aria-label="Grid view">
            <LayoutGridIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List view">
            <ListIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className={cn("gap-2", view === "grid" ? "grid grid-cols-2" : "flex flex-col")}>
        {projects.map((project) => (
          <div
            key={project}
            className={cn("flex border bg-card text-xs", view === "grid" ? "h-20 items-end p-3" : "items-center gap-2 px-3 py-2")}
          >
            <FolderIcon className="size-3.5 text-muted-foreground" />
            <span className={cn(view === "grid" && "ms-1.5")}>{project}</span>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "BillingCycleToggleGroup",
    description: "Monthly versus yearly billing switch that updates the plan price and savings badge.",
    code: `
export default function BillingCycleToggleGroup() {
  const [cycle, setCycle] = React.useState("yearly")
  const price = cycle === "yearly" ? 16 : 20

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-4 border p-5">
      <ToggleGroup
        variant="outline"
        spacing={0}
        value={[cycle]}
        onValueChange={(next) => next[0] && setCycle(next[0])}
      >
        <ToggleGroupItem value="monthly">Monthly</ToggleGroupItem>
        <ToggleGroupItem value="yearly">
          Yearly
          <Badge variant="secondary" className="ms-1">-20%</Badge>
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="text-center">
        <p className="text-xs text-muted-foreground">Team plan</p>
        <p className="text-3xl font-semibold">
          \${price}
          <span className="text-sm font-normal text-muted-foreground">/seat/mo</span>
        </p>
        <p className="text-xs text-muted-foreground">
          {cycle === "yearly" ? "Billed $192 per seat annually" : "Billed monthly, cancel anytime"}
        </p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ThemeModeToggleGroup",
    description: "Light, dark and system appearance picker with icon and label items.",
    code: `
export default function ThemeModeToggleGroup() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium">Appearance</span>
      <ToggleGroup variant="outline" defaultValue={["system"]}>
        <ToggleGroupItem value="light">
          <SunIcon data-icon="inline-start" />
          Light
        </ToggleGroupItem>
        <ToggleGroupItem value="dark">
          <MoonIcon data-icon="inline-start" />
          Dark
        </ToggleGroupItem>
        <ToggleGroupItem value="system">
          <MonitorIcon data-icon="inline-start" />
          System
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}`,
  },
  {
    name: "DateRangePresetToggleGroup",
    description: "Analytics card whose revenue figure changes with the selected date range preset.",
    code: `
const ranges: Record<string, { revenue: string; delta: string }> = {
  "7d": { revenue: "$12,480", delta: "+4.2%" },
  "30d": { revenue: "$51,920", delta: "+11.8%" },
  "90d": { revenue: "$148,300", delta: "+9.1%" },
  "12m": { revenue: "$602,450", delta: "+23.6%" },
}

export default function DateRangePresetToggleGroup() {
  const [range, setRange] = React.useState("30d")
  const data = ranges[range]!

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium">Revenue</span>
        <ToggleGroup
          size="sm"
          spacing={0}
          variant="outline"
          value={[range]}
          onValueChange={(next) => next[0] && setRange(next[0])}
        >
          {Object.keys(ranges).map((key) => (
            <ToggleGroupItem key={key} value={key}>
              {key}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-semibold">{data.revenue}</span>
        <span className="pb-1 text-xs text-emerald-600 dark:text-emerald-400">{data.delta}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "DisabledToggleGroup",
    description: "A whole group disabled while a document is locked by another editor.",
    code: `
export default function DisabledToggleGroup() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <ToggleGroup disabled variant="outline" spacing={0} defaultValue={["edit"]}>
        <ToggleGroupItem value="view">
          <EyeIcon data-icon="inline-start" />
          View
        </ToggleGroupItem>
        <ToggleGroupItem value="edit">
          <PencilIcon data-icon="inline-start" />
          Edit
        </ToggleGroupItem>
        <ToggleGroupItem value="suggest">
          <MessageSquareIcon data-icon="inline-start" />
          Suggest
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <LockIcon className="size-3" />
        Locked while Priya Raman is editing.
      </p>
    </div>
  )
}`,
  },
  {
    name: "DisabledItemToggleGroup",
    description: "Export quality picker where the 4K option is disabled behind a Pro badge.",
    code: `
export default function DisabledItemToggleGroup() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium">Export quality</span>
      <ToggleGroup variant="outline" defaultValue={["1080p"]}>
        <ToggleGroupItem value="720p">720p</ToggleGroupItem>
        <ToggleGroupItem value="1080p">1080p</ToggleGroupItem>
        <ToggleGroupItem value="4k" disabled>
          4K
          <Badge className="ms-1">Pro</Badge>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}`,
  },
  {
    name: "VerticalSettingsToggleGroup",
    description: "Vertical toggle group used as a settings section navigator next to its panel.",
    code: `
const sections = [
  { value: "profile", label: "Profile", icon: UserIcon, text: "Name, avatar initials and public bio." },
  { value: "security", label: "Security", icon: ShieldIcon, text: "Password, passkeys and active sessions." },
  { value: "billing", label: "Billing", icon: CreditCardIcon, text: "Plan, invoices and payment methods." },
]

export default function VerticalSettingsToggleGroup() {
  const [section, setSection] = React.useState("profile")
  const active = sections.find((s) => s.value === section)!

  return (
    <div className="flex w-full max-w-md gap-4 border p-3">
      <ToggleGroup
        orientation="vertical"
        spacing={1}
        value={[section]}
        onValueChange={(next) => next[0] && setSection(next[0])}
        className="w-32 shrink-0"
      >
        {sections.map((s) => (
          <ToggleGroupItem key={s.value} value={s.value} className="justify-start">
            <s.icon data-icon="inline-start" />
            {s.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex flex-col gap-1 border-s ps-4">
        <span className="text-sm font-medium">{active.label}</span>
        <span className="text-xs text-muted-foreground">{active.text}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "TagFilterToggleGroup",
    description: "Multi-select tag filters that narrow down a list of help articles.",
    code: `
const articles = [
  { title: "Connecting a custom domain", tag: "setup" },
  { title: "Rotating API keys", tag: "security" },
  { title: "Understanding invoices", tag: "billing" },
  { title: "Enabling two-factor login", tag: "security" },
  { title: "Inviting your team", tag: "setup" },
]

export default function TagFilterToggleGroup() {
  const [tags, setTags] = React.useState<string[]>(["setup", "security"])
  const visible = articles.filter((a) => tags.length === 0 || tags.includes(a.tag))

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <ToggleGroup multiple variant="outline" size="sm" value={tags} onValueChange={setTags}>
        <ToggleGroupItem value="setup">Setup</ToggleGroupItem>
        <ToggleGroupItem value="security">Security</ToggleGroupItem>
        <ToggleGroupItem value="billing">Billing</ToggleGroupItem>
      </ToggleGroup>
      <ul className="flex flex-col divide-y border text-sm">
        {visible.map((a) => (
          <li key={a.title} className="flex items-center justify-between px-3 py-2">
            {a.title}
            <span className="text-xs text-muted-foreground capitalize">{a.tag}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}`,
  },
  {
    name: "RecurringWeekdayPicker",
    description: "Weekday picker for a recurring meeting with a readable summary of the chosen days.",
    code: `
const days = [
  { value: "mon", label: "M", name: "Mon" },
  { value: "tue", label: "T", name: "Tue" },
  { value: "wed", label: "W", name: "Wed" },
  { value: "thu", label: "T", name: "Thu" },
  { value: "fri", label: "F", name: "Fri" },
  { value: "sat", label: "S", name: "Sat" },
  { value: "sun", label: "S", name: "Sun" },
]

export default function RecurringWeekdayPicker() {
  const [selected, setSelected] = React.useState<string[]>(["mon", "wed", "fri"])
  const names = days.filter((d) => selected.includes(d.value)).map((d) => d.name)

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium">Repeat on</span>
      <ToggleGroup multiple variant="outline" spacing={1} value={selected} onValueChange={setSelected}>
        {days.map((d) => (
          <ToggleGroupItem key={d.value} value={d.value} aria-label={d.name} className="rounded-full">
            {d.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <span className="text-xs text-muted-foreground">
        {names.length ? "Weekly on " + names.join(", ") : "Pick at least one day"}
      </span>
    </div>
  )
}`,
  },
  {
    name: "ApparelSizeSelector",
    description: "Product size selector with sold-out sizes disabled and struck through.",
    code: `
const sizes = [
  { value: "xs", soldOut: false },
  { value: "s", soldOut: false },
  { value: "m", soldOut: false },
  { value: "l", soldOut: true },
  { value: "xl", soldOut: false },
  { value: "xxl", soldOut: true },
]

export default function ApparelSizeSelector() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Size</span>
        <a href="#" className="text-xs text-muted-foreground underline underline-offset-4">Size guide</a>
      </div>
      <ToggleGroup variant="outline" spacing={1} defaultValue={["m"]} className="flex-wrap">
        {sizes.map((s) => (
          <ToggleGroupItem
            key={s.value}
            value={s.value}
            disabled={s.soldOut}
            className={cn("w-11 uppercase", s.soldOut && "line-through")}
          >
            {s.value}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}`,
  },
  {
    name: "ProductColorSwatches",
    description: "Color swatch toggle group showing the chosen finish name for a product.",
    code: `
const colors = [
  { value: "graphite", label: "Graphite", className: "bg-zinc-700" },
  { value: "sand", label: "Sand", className: "bg-amber-200" },
  { value: "sage", label: "Sage", className: "bg-emerald-300" },
  { value: "ocean", label: "Ocean", className: "bg-sky-500" },
]

export default function ProductColorSwatches() {
  const [color, setColor] = React.useState("sage")

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm">
        Color: <span className="font-medium">{colors.find((c) => c.value === color)?.label}</span>
      </span>
      <ToggleGroup spacing={2} value={[color]} onValueChange={(next) => next[0] && setColor(next[0])}>
        {colors.map((c) => (
          <ToggleGroupItem
            key={c.value}
            value={c.value}
            aria-label={c.label}
            className="size-9 rounded-full p-1 data-pressed:ring-2 data-pressed:ring-ring"
          >
            <span className={cn("size-full rounded-full border", c.className)} />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}`,
  },
  {
    name: "NpsScoreToggleGroup",
    description: "Net promoter survey with a 0-10 attached score scale and labelled extremes.",
    code: `
const scores = Array.from({ length: 11 }, (_, i) => String(i))

export default function NpsScoreToggleGroup() {
  const [score, setScore] = React.useState<string[]>([])

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <span className="text-sm font-medium">How likely are you to recommend Fieldnote to a friend?</span>
      <ToggleGroup variant="outline" spacing={0} size="sm" value={score} onValueChange={setScore} className="w-full">
        {scores.map((s) => (
          <ToggleGroupItem key={s} value={s} className="min-w-0 flex-1 px-0">
            {s}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Not likely</span>
        <span>{score[0] ? "You picked " + score[0] : "No answer yet"}</span>
        <span>Very likely</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ResponsivePreviewToggleGroup",
    description: "Desktop, tablet and mobile toggles that resize an embedded page preview frame.",
    code: `
const widths: Record<string, string> = { desktop: "w-full", tablet: "w-2/3", mobile: "w-1/3" }

export default function ResponsivePreviewToggleGroup() {
  const [device, setDevice] = React.useState("desktop")

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3">
      <ToggleGroup
        variant="outline"
        spacing={0}
        value={[device]}
        onValueChange={(next) => next[0] && setDevice(next[0])}
      >
        <ToggleGroupItem value="desktop" aria-label="Desktop">
          <MonitorIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="tablet" aria-label="Tablet">
          <TabletIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="mobile" aria-label="Mobile">
          <SmartphoneIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="flex h-36 w-full justify-center bg-muted/40 p-2">
        <div className={cn("flex flex-col gap-1.5 border bg-background p-2 transition-all", widths[device])}>
          <div className="h-2 w-1/2 bg-muted" />
          <div className="h-12 bg-gradient-to-br from-indigo-200 to-sky-200 dark:from-indigo-900 dark:to-sky-900" />
          <div className="h-2 bg-muted" />
          <div className="h-2 w-3/4 bg-muted" />
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ChartTypeToggleGroup",
    description: "Switches a small SVG chart between bar and line rendering.",
    code: `
const values = [32, 48, 40, 64, 56, 72, 60]

export default function ChartTypeToggleGroup() {
  const [type, setType] = React.useState("bar")
  const points = values.map((v, i) => i * 40 + 20 + "," + (100 - v)).join(" ")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Weekly sign-ups</span>
        <ToggleGroup
          size="sm"
          variant="outline"
          spacing={0}
          value={[type]}
          onValueChange={(next) => next[0] && setType(next[0])}
        >
          <ToggleGroupItem value="bar" aria-label="Bar chart">
            <ChartColumnIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="line" aria-label="Line chart">
            <ChartLineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <svg viewBox="0 0 280 100" className="h-28 w-full text-primary">
        {type === "bar" ? (
          values.map((v, i) => (
            <rect key={i} x={i * 40 + 8} y={100 - v} width="24" height={v} className="fill-current" />
          ))
        ) : (
          <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2.5" />
        )}
      </svg>
    </div>
  )
}`,
  },
  {
    name: "MapLayerToggleGroup",
    description: "Multi-select overlay toggles for a map, listing the active layers below.",
    code: `
export default function MapLayerToggleGroup() {
  const [layers, setLayers] = React.useState<string[]>(["traffic"])

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="relative h-36 overflow-hidden border bg-gradient-to-br from-emerald-100 via-sky-100 to-amber-50 dark:from-emerald-950 dark:via-sky-950 dark:to-amber-950">
        <ToggleGroup
          multiple
          size="sm"
          spacing={1}
          value={layers}
          onValueChange={setLayers}
          className="absolute top-2 start-2 bg-background/90 p-1 shadow-sm"
        >
          <ToggleGroupItem value="traffic" aria-label="Traffic">
            <CarIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="transit" aria-label="Transit">
            <TrainFrontIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="bike" aria-label="Bike lanes">
            <BikeIcon />
          </ToggleGroupItem>
        </ToggleGroup>
        <MapPinIcon className="absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 text-rose-500" />
      </div>
      <span className="text-xs text-muted-foreground">
        Layers: {layers.length ? layers.join(", ") : "none"}
      </span>
    </div>
  )
}`,
  },
  {
    name: "NotificationChannelMatrix",
    description: "Settings table where each event row has a multi-select group of delivery channels.",
    code: `
const events = [
  { name: "Mentions", defaults: ["email", "push"] },
  { name: "New comments", defaults: ["push"] },
  { name: "Weekly digest", defaults: ["email"] },
  { name: "Security alerts", defaults: ["email", "push", "sms"] },
]

export default function NotificationChannelMatrix() {
  return (
    <div className="flex w-full max-w-md flex-col divide-y border">
      {events.map((event) => (
        <div key={event.name} className="flex items-center justify-between gap-3 px-3 py-2">
          <span className="text-sm">{event.name}</span>
          <ToggleGroup multiple size="sm" variant="outline" spacing={0} defaultValue={event.defaults}>
            <ToggleGroupItem value="email" aria-label="Email">
              <MailIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="push" aria-label="Push">
              <BellIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="sms" aria-label="SMS">
              <MessageSquareTextIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "MemberPermissionToggleGroup",
    description: "Share dialog member rows with a view, comment or edit permission group each.",
    code: `
const members = [
  { name: "Lena Ortiz", email: "lena@fieldnote.app", role: "edit" },
  { name: "Tomás Reyes", email: "tomas@fieldnote.app", role: "comment" },
  { name: "Hana Sato", email: "hana@fieldnote.app", role: "view" },
]

export default function MemberPermissionToggleGroup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      {members.map((m) => (
        <div key={m.email} className="flex items-center gap-3">
          <Avatar size="sm">
            <AvatarFallback>{m.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="truncate text-sm font-medium">{m.name}</span>
            <span className="truncate text-xs text-muted-foreground">{m.email}</span>
          </div>
          <ToggleGroup size="sm" variant="outline" spacing={0} defaultValue={[m.role]}>
            <ToggleGroupItem value="view">View</ToggleGroupItem>
            <ToggleGroupItem value="comment">Comment</ToggleGroupItem>
            <ToggleGroupItem value="edit">Edit</ToggleGroupItem>
          </ToggleGroup>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "SortDirectionToggleGroup",
    description: "Sort field and direction groups that reorder a small leaderboard.",
    code: `
const rows = [
  { name: "Orbit", score: 82, date: 3 },
  { name: "Juniper", score: 95, date: 1 },
  { name: "Kestrel", score: 71, date: 2 },
]

export default function SortDirectionToggleGroup() {
  const [field, setField] = React.useState<"score" | "date">("score")
  const [dir, setDir] = React.useState("desc")
  const sorted = [...rows].sort((a, b) => (dir === "asc" ? a[field] - b[field] : b[field] - a[field]))

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <ToggleGroup size="sm" value={[field]} onValueChange={(next) => next[0] && setField(next[0] as "score" | "date")}>
          <ToggleGroupItem value="score">Score</ToggleGroupItem>
          <ToggleGroupItem value="date">Newest</ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup size="sm" variant="outline" spacing={0} value={[dir]} onValueChange={(next) => next[0] && setDir(next[0])}>
          <ToggleGroupItem value="asc" aria-label="Ascending">
            <ArrowUpIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="desc" aria-label="Descending">
            <ArrowDownIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <ol className="flex flex-col divide-y border text-sm">
        {sorted.map((r) => (
          <li key={r.name} className="flex justify-between px-3 py-2">
            {r.name}
            <span className="tabular-nums text-muted-foreground">{r.score}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}`,
  },
  {
    name: "IssueStatusFilterWithCounts",
    description: "Issue tracker status filter whose items carry count badges.",
    code: `
const statuses = [
  { value: "open", label: "Open", count: 24, icon: CircleDotIcon },
  { value: "progress", label: "In progress", count: 7, icon: CircleDashedIcon },
  { value: "closed", label: "Closed", count: 138, icon: CircleCheckIcon },
]

export default function IssueStatusFilterWithCounts() {
  return (
    <ToggleGroup variant="outline" spacing={0} defaultValue={["open"]} className="flex-wrap">
      {statuses.map((s) => (
        <ToggleGroupItem key={s.value} value={s.value}>
          <s.icon data-icon="inline-start" />
          {s.label}
          <Badge variant="secondary" className="ms-1 tabular-nums">{s.count}</Badge>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}`,
  },
  {
    name: "ReaderFontSizeToggleGroup",
    description: "Reading settings with small, medium and large text sizes applied to an article excerpt.",
    code: `
const sizes: Record<string, string> = { sm: "text-xs", md: "text-sm", lg: "text-base" }

export default function ReaderFontSizeToggleGroup() {
  const [size, setSize] = React.useState("md")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Text size</span>
        <ToggleGroup size="sm" value={[size]} onValueChange={(next) => next[0] && setSize(next[0])}>
          <ToggleGroupItem value="sm" className="text-[10px]">A</ToggleGroupItem>
          <ToggleGroupItem value="md" className="text-xs">A</ToggleGroupItem>
          <ToggleGroupItem value="lg" className="text-sm">A</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <p className={cn("leading-relaxed text-muted-foreground", sizes[size])}>
        The tide came in faster than the map suggested, and by noon the old causeway was a ribbon of
        silver water.
      </p>
    </div>
  )
}`,
  },
  {
    name: "PackageManagerToggleGroup",
    description: "Install snippet whose command changes with the selected package manager.",
    code: `
const commands: Record<string, string> = {
  npm: "npm install @acme/charts",
  pnpm: "pnpm add @acme/charts",
  yarn: "yarn add @acme/charts",
  bun: "bun add @acme/charts",
}

export default function PackageManagerToggleGroup() {
  const [pm, setPm] = React.useState("pnpm")

  return (
    <div className="flex w-full max-w-sm flex-col border">
      <ToggleGroup
        size="sm"
        spacing={0}
        value={[pm]}
        onValueChange={(next) => next[0] && setPm(next[0])}
        className="border-b p-1"
      >
        {Object.keys(commands).map((key) => (
          <ToggleGroupItem key={key} value={key} className="font-mono">
            {key}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex items-center gap-2 bg-muted/40 px-3 py-3 font-mono text-xs">
        <TerminalIcon className="size-3.5 text-muted-foreground" />
        {commands[pm]}
      </div>
    </div>
  )
}`,
  },
  {
    name: "PlaybackSpeedToggleGroup",
    description: "Podcast player playback speed selector with the current rate in the header.",
    code: `
const speeds = ["0.75", "1", "1.25", "1.5", "2"]

export default function PlaybackSpeedToggleGroup() {
  const [speed, setSpeed] = React.useState("1")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center bg-gradient-to-br from-violet-500 to-indigo-500 text-white">
          <HeadphonesIcon className="size-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium">Ep. 42 - Shipping calm software</span>
          <span className="text-xs text-muted-foreground">Playing at {speed}x</span>
        </div>
      </div>
      <ToggleGroup size="sm" variant="outline" spacing={1} value={[speed]} onValueChange={(next) => next[0] && setSpeed(next[0])}>
        {speeds.map((s) => (
          <ToggleGroupItem key={s} value={s} className="tabular-nums">
            {s}x
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}`,
  },
  {
    name: "TravelModeToggleGroup",
    description: "Directions panel where the travel mode determines the estimated arrival time.",
    code: `
const modes = [
  { value: "car", icon: CarIcon, eta: "18 min", distance: "9.4 km" },
  { value: "transit", icon: BusIcon, eta: "31 min", distance: "2 transfers" },
  { value: "bike", icon: BikeIcon, eta: "27 min", distance: "8.1 km" },
  { value: "walk", icon: FootprintsIcon, eta: "1 h 42 min", distance: "7.8 km" },
]

export default function TravelModeToggleGroup() {
  const [mode, setMode] = React.useState("transit")
  const active = modes.find((m) => m.value === mode)!

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <ToggleGroup spacing={1} value={[mode]} onValueChange={(next) => next[0] && setMode(next[0])}>
        {modes.map((m) => (
          <ToggleGroupItem key={m.value} value={m.value} aria-label={m.value} className="capitalize">
            <m.icon />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex items-baseline justify-between">
        <span className="text-xl font-semibold">{active.eta}</span>
        <span className="text-xs text-muted-foreground">{active.distance}</span>
      </div>
      <span className="text-xs text-muted-foreground">Harbor St to Lindell Market</span>
    </div>
  )
}`,
  },
  {
    name: "DeliverySlotToggleGroup",
    description: "Grocery checkout delivery slot grid with sold-out windows disabled.",
    code: `
const slots = [
  { time: "8-10 AM", full: false },
  { time: "10-12 PM", full: true },
  { time: "12-2 PM", full: false },
  { time: "2-4 PM", full: false },
  { time: "4-6 PM", full: true },
  { time: "6-8 PM", full: false },
]

export default function DeliverySlotToggleGroup() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <span className="text-sm font-medium">Delivery window - Tomorrow</span>
      <ToggleGroup variant="outline" spacing={2} defaultValue={["2-4 PM"]} className="grid w-full grid-cols-3">
        {slots.map((s) => (
          <ToggleGroupItem key={s.time} value={s.time} disabled={s.full} className="h-auto flex-col py-2">
            <span>{s.time}</span>
            <span className="text-[10px] font-normal text-muted-foreground">{s.full ? "Full" : "$2.99"}</span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}`,
  },
  {
    name: "PaymentMethodToggleGroup",
    description: "Checkout payment method picker with tall icon-over-label items.",
    code: `
const methods = [
  { value: "card", label: "Card", icon: CreditCardIcon },
  { value: "bank", label: "Bank", icon: LandmarkIcon },
  { value: "wallet", label: "Wallet", icon: WalletIcon },
]

export default function PaymentMethodToggleGroup() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <span className="text-sm font-medium">Payment method</span>
      <ToggleGroup variant="outline" spacing={2} defaultValue={["card"]} className="grid w-full grid-cols-3">
        {methods.map((m) => (
          <ToggleGroupItem key={m.value} value={m.value} className="h-16 flex-col gap-1.5">
            <m.icon className="size-5" />
            {m.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}`,
  },
  {
    name: "TemperatureUnitToggleGroup",
    description: "Weather card that converts its forecast between Celsius and Fahrenheit.",
    code: `
const forecast = [
  { day: "Mon", c: 18 },
  { day: "Tue", c: 21 },
  { day: "Wed", c: 16 },
  { day: "Thu", c: 23 },
]

export default function TemperatureUnitToggleGroup() {
  const [unit, setUnit] = React.useState("c")
  const fmt = (c: number) => (unit === "c" ? c : Math.round(c * 1.8 + 32)) + "°"

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CloudSunIcon className="size-6 text-amber-500" />
          <span className="text-2xl font-semibold">{fmt(19)}</span>
        </div>
        <ToggleGroup size="sm" variant="outline" spacing={0} value={[unit]} onValueChange={(next) => next[0] && setUnit(next[0])}>
          <ToggleGroupItem value="c">°C</ToggleGroupItem>
          <ToggleGroupItem value="f">°F</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="grid grid-cols-4 text-center text-xs">
        {forecast.map((f) => (
          <div key={f.day} className="flex flex-col gap-1">
            <span className="text-muted-foreground">{f.day}</span>
            <span className="font-medium">{fmt(f.c)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "CurrencyToggleGroup",
    description: "Pricing currency switch that reformats the displayed plan price.",
    code: `
const rates: Record<string, { symbol: string; rate: number }> = {
  usd: { symbol: "$", rate: 1 },
  eur: { symbol: "€", rate: 0.92 },
  gbp: { symbol: "£", rate: 0.79 },
}

export default function CurrencyToggleGroup() {
  const [currency, setCurrency] = React.useState("usd")
  const { symbol, rate } = rates[currency]!

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3 border p-5">
      <ToggleGroup size="sm" spacing={0} variant="outline" value={[currency]} onValueChange={(next) => next[0] && setCurrency(next[0])}>
        {Object.keys(rates).map((c) => (
          <ToggleGroupItem key={c} value={c} className="uppercase">
            {c}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <span className="text-3xl font-semibold tabular-nums">
        {symbol}
        {(49 * rate).toFixed(2)}
      </span>
      <span className="text-xs text-muted-foreground">Studio plan, per month</span>
    </div>
  )
}`,
  },
  {
    name: "CalendarViewToggleGroup",
    description: "Calendar header with navigation buttons and a day, week or month view group.",
    code: `
export default function CalendarViewToggleGroup() {
  return (
    <div className="flex w-full max-w-md items-center justify-between gap-2 border p-2">
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon-sm" aria-label="Previous">
          <ChevronLeftIcon />
        </Button>
        <span className="text-sm font-medium">June 2026</span>
        <Button variant="ghost" size="icon-sm" aria-label="Next">
          <ChevronRightIcon />
        </Button>
      </div>
      <ToggleGroup size="sm" variant="outline" spacing={0} defaultValue={["week"]}>
        <ToggleGroupItem value="day">Day</ToggleGroupItem>
        <ToggleGroupItem value="week">Week</ToggleGroupItem>
        <ToggleGroupItem value="month">Month</ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}`,
  },
  {
    name: "MessageReactionToggleGroup",
    description: "Chat message with multi-select reaction toggles that update their counts.",
    code: `
const reactions = [
  { value: "like", icon: ThumbsUpIcon, base: 4 },
  { value: "love", icon: HeartIcon, base: 2 },
  { value: "laugh", icon: LaughIcon, base: 1 },
  { value: "party", icon: PartyPopperIcon, base: 3 },
]

export default function MessageReactionToggleGroup() {
  const [mine, setMine] = React.useState<string[]>(["love"])

  return (
    <div className="flex w-full max-w-sm gap-3">
      <Avatar>
        <AvatarFallback>JK</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <div className="bg-muted px-3 py-2 text-sm">The staging deploy is green, ship it whenever you&apos;re ready!</div>
        <ToggleGroup multiple size="sm" variant="outline" spacing={1} value={mine} onValueChange={setMine}>
          {reactions.map((r) => (
            <ToggleGroupItem key={r.value} value={r.value} aria-label={r.value} className="rounded-full tabular-nums">
              <r.icon data-icon="inline-start" />
              {r.base + (mine.includes(r.value) ? 1 : 0)}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  )
}`,
  },
  {
    name: "TableDensityToggleGroup",
    description: "Compact, default and relaxed density toggle that changes table row padding.",
    code: `
const padding: Record<string, string> = { compact: "py-1", default: "py-2", relaxed: "py-3.5" }
const invoices = [
  { id: "INV-1042", amount: "$1,240.00" },
  { id: "INV-1043", amount: "$318.50" },
  { id: "INV-1044", amount: "$2,905.00" },
]

export default function TableDensityToggleGroup() {
  const [density, setDensity] = React.useState("default")

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <ToggleGroup size="sm" variant="outline" spacing={0} value={[density]} onValueChange={(next) => next[0] && setDensity(next[0])} className="self-end">
        <ToggleGroupItem value="compact" aria-label="Compact">
          <Rows4Icon />
        </ToggleGroupItem>
        <ToggleGroupItem value="default" aria-label="Default">
          <Rows3Icon />
        </ToggleGroupItem>
        <ToggleGroupItem value="relaxed" aria-label="Relaxed">
          <Rows2Icon />
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="divide-y border text-sm">
        {invoices.map((inv) => (
          <div key={inv.id} className={cn("flex justify-between px-3 transition-all", padding[density])}>
            <span className="font-mono text-xs">{inv.id}</span>
            <span className="tabular-nums">{inv.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "DietaryPreferenceToggleGroup",
    description: "Onboarding step for a meal app with wrapping multi-select dietary preferences.",
    code: `
const options = [
  { value: "vegetarian", label: "Vegetarian", icon: LeafIcon },
  { value: "vegan", label: "Vegan", icon: SproutIcon },
  { value: "gluten", label: "Gluten free", icon: WheatOffIcon },
  { value: "dairy", label: "Dairy free", icon: MilkOffIcon },
  { value: "fish", label: "Pescatarian", icon: FishIcon },
]

export default function DietaryPreferenceToggleGroup() {
  const [prefs, setPrefs] = React.useState<string[]>(["vegetarian"])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div>
        <p className="text-sm font-medium">Any dietary preferences?</p>
        <p className="text-xs text-muted-foreground">We&apos;ll tailor weekly recipes to match.</p>
      </div>
      <ToggleGroup multiple variant="outline" spacing={2} value={prefs} onValueChange={setPrefs} className="flex-wrap">
        {options.map((o) => (
          <ToggleGroupItem key={o.value} value={o.value} className="rounded-full">
            <o.icon data-icon="inline-start" />
            {o.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <Button size="sm" className="self-start">Continue ({prefs.length} selected)</Button>
    </div>
  )
}`,
  },
  {
    name: "RequiredToggleGroupField",
    description: "Form field that marks the toggle group invalid until a team size is chosen.",
    code: `
export default function RequiredToggleGroupField() {
  const [size, setSize] = React.useState<string[]>([])
  const [submitted, setSubmitted] = React.useState(false)
  const invalid = submitted && size.length === 0

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <Field data-invalid={invalid || undefined}>
        <FieldLabel>Team size</FieldLabel>
        <ToggleGroup variant="outline" spacing={0} value={size} onValueChange={setSize}>
          {["1-10", "11-50", "51-200", "200+"].map((s) => (
            <ToggleGroupItem key={s} value={s} aria-invalid={invalid || undefined}>
              {s}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        {invalid ? <FieldError>Choose a team size to continue.</FieldError> : null}
      </Field>
      <Button type="submit" size="sm" className="self-start">Continue</Button>
    </form>
  )
}`,
  },
  {
    name: "ToggleGroupWithTooltips",
    description: "Icon-only list style toggles where each item explains itself in a tooltip with a shortcut.",
    code: `
const items = [
  { value: "bullet", label: "Bulleted list", keys: "⌘⇧8", icon: ListIcon },
  { value: "number", label: "Numbered list", keys: "⌘⇧7", icon: ListOrderedIcon },
  { value: "check", label: "Checklist", keys: "⌘⇧9", icon: ListChecksIcon },
]

export default function ToggleGroupWithTooltips() {
  return (
    <TooltipProvider>
      <ToggleGroup variant="outline" spacing={0} defaultValue={["bullet"]}>
        {items.map((item) => (
          <Tooltip key={item.value}>
            <TooltipTrigger render={<ToggleGroupItem value={item.value} aria-label={item.label} />}>
              <item.icon />
            </TooltipTrigger>
            <TooltipContent>
              {item.label}
              <Kbd>{item.keys}</Kbd>
            </TooltipContent>
          </Tooltip>
        ))}
      </ToggleGroup>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "EditorToolbarToggleGroups",
    description: "Rich text toolbar combining a heading group, a marks group and an alignment group with separators.",
    code: `
export default function EditorToolbarToggleGroups() {
  return (
    <div className="flex w-full max-w-md flex-wrap items-center gap-1 border p-1">
      <ToggleGroup size="sm" defaultValue={["p"]}>
        <ToggleGroupItem value="h1" aria-label="Heading 1">
          <Heading1Icon />
        </ToggleGroupItem>
        <ToggleGroupItem value="h2" aria-label="Heading 2">
          <Heading2Icon />
        </ToggleGroupItem>
        <ToggleGroupItem value="p" aria-label="Paragraph">
          <PilcrowIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <Separator orientation="vertical" className="mx-1 h-5" />
      <ToggleGroup multiple size="sm">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="code" aria-label="Inline code">
          <CodeIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="link" aria-label="Link">
          <LinkIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <Separator orientation="vertical" className="mx-1 h-5" />
      <ToggleGroup size="sm" defaultValue={["left"]}>
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenterIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}`,
  },
  {
    name: "GalleryColumnsToggleGroup",
    description: "One, two or three column layout switcher for a gradient photo gallery.",
    code: `
const tiles = [
  "from-rose-300 to-orange-200",
  "from-sky-300 to-indigo-200",
  "from-emerald-300 to-lime-200",
  "from-violet-300 to-fuchsia-200",
  "from-amber-300 to-yellow-200",
  "from-teal-300 to-cyan-200",
]
const cols: Record<string, string> = { "1": "grid-cols-1", "2": "grid-cols-2", "3": "grid-cols-3" }

export default function GalleryColumnsToggleGroup() {
  const [columns, setColumns] = React.useState("3")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <ToggleGroup size="sm" variant="outline" spacing={0} value={[columns]} onValueChange={(next) => next[0] && setColumns(next[0])} className="self-end">
        <ToggleGroupItem value="1" aria-label="One column">
          <SquareIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="2" aria-label="Two columns">
          <Columns2Icon />
        </ToggleGroupItem>
        <ToggleGroupItem value="3" aria-label="Three columns">
          <Columns3Icon />
        </ToggleGroupItem>
      </ToggleGroup>
      <div className={cn("grid max-h-56 gap-1.5 overflow-y-auto", cols[columns])}>
        {tiles.map((t) => (
          <div key={t} className={cn("aspect-video bg-gradient-to-br", t)} />
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "TaskPriorityToggleGroup",
    description: "New task form with a priority group using colored status dots.",
    code: `
const priorities = [
  { value: "low", label: "Low", dot: "bg-slate-400" },
  { value: "medium", label: "Medium", dot: "bg-sky-500" },
  { value: "high", label: "High", dot: "bg-amber-500" },
  { value: "urgent", label: "Urgent", dot: "bg-rose-500" },
]

export default function TaskPriorityToggleGroup() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <Input placeholder="Task title" defaultValue="Migrate billing webhooks" />
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-medium text-muted-foreground">Priority</span>
        <ToggleGroup variant="outline" spacing={0} size="sm" defaultValue={["high"]} className="flex-wrap">
          {priorities.map((p) => (
            <ToggleGroupItem key={p.value} value={p.value}>
              <span className={cn("size-2 rounded-full", p.dot)} />
              {p.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  )
}`,
  },
  {
    name: "SelectAllToggleGroup",
    description: "Controlled multi-select group with select all and clear actions.",
    code: `
const regions = ["NA", "EU", "APAC", "LATAM", "MEA"]

export default function SelectAllToggleGroup() {
  const [selected, setSelected] = React.useState<string[]>(["EU"])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Regions ({selected.length}/{regions.length})</span>
        <div className="flex gap-1">
          <Button variant="ghost" size="xs" onClick={() => setSelected(regions)}>
            Select all
          </Button>
          <Button variant="ghost" size="xs" onClick={() => setSelected([])} disabled={!selected.length}>
            Clear
          </Button>
        </div>
      </div>
      <ToggleGroup multiple variant="outline" spacing={1} value={selected} onValueChange={setSelected} className="flex-wrap">
        {regions.map((r) => (
          <ToggleGroupItem key={r} value={r}>
            {r}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}`,
  },
  {
    name: "LimitedSelectionToggleGroup",
    description: "Interest picker that caps selection at three and disables the remaining items.",
    code: `
const topics = ["Design", "Engineering", "Product", "Marketing", "Data", "Sales", "Support"]
const MAX = 3

export default function LimitedSelectionToggleGroup() {
  const [picked, setPicked] = React.useState<string[]>(["Design"])

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Pick up to {MAX} topics</span>
        <span className="text-xs text-muted-foreground tabular-nums">
          {picked.length}/{MAX}
        </span>
      </div>
      <ToggleGroup
        multiple
        variant="outline"
        spacing={2}
        value={picked}
        onValueChange={(next) => next.length <= MAX && setPicked(next)}
        className="flex-wrap"
      >
        {topics.map((t) => (
          <ToggleGroupItem key={t} value={t} disabled={picked.length >= MAX && !picked.includes(t)}>
            {t}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}`,
  },
  {
    name: "FileTypeFilterToggleGroup",
    description: "File manager filter for documents, images, videos and audio with a filtered file list.",
    code: `
const files = [
  { name: "Q3-report.pdf", type: "doc", size: "2.4 MB" },
  { name: "hero-banner.png", type: "image", size: "840 KB" },
  { name: "onboarding.mp4", type: "video", size: "48 MB" },
  { name: "brand-sting.wav", type: "audio", size: "3.1 MB" },
  { name: "roadmap.docx", type: "doc", size: "112 KB" },
]

export default function FileTypeFilterToggleGroup() {
  const [types, setTypes] = React.useState<string[]>(["doc", "image"])
  const shown = files.filter((f) => types.includes(f.type))

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <ToggleGroup multiple size="sm" variant="outline" spacing={0} value={types} onValueChange={setTypes}>
        <ToggleGroupItem value="doc" aria-label="Documents">
          <FileTextIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="image" aria-label="Images">
          <ImageIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="video" aria-label="Videos">
          <FileVideoIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="audio" aria-label="Audio">
          <FileAudioIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="flex flex-col divide-y border text-sm">
        {shown.length ? (
          shown.map((f) => (
            <div key={f.name} className="flex justify-between px-3 py-2">
              <span className="truncate">{f.name}</span>
              <span className="text-xs text-muted-foreground">{f.size}</span>
            </div>
          ))
        ) : (
          <p className="px-3 py-6 text-center text-xs text-muted-foreground">No file types selected.</p>
        )}
      </div>
    </div>
  )
}`,
  },
  {
    name: "CabinClassToggleGroup",
    description: "Full-width vertical cabin class picker with descriptions and fares for a flight booking.",
    code: `
const cabins = [
  { value: "economy", label: "Economy", detail: "Carry-on included", price: "$412" },
  { value: "premium", label: "Premium economy", detail: "Extra legroom, priority boarding", price: "$689" },
  { value: "business", label: "Business", detail: "Lie-flat seat, lounge access", price: "$1,940" },
]

export default function CabinClassToggleGroup() {
  return (
    <ToggleGroup
      orientation="vertical"
      variant="outline"
      spacing={2}
      defaultValue={["premium"]}
      className="w-full max-w-sm"
    >
      {cabins.map((c) => (
        <ToggleGroupItem key={c.value} value={c.value} className="h-auto justify-between px-3 py-2.5 text-start">
          <span className="flex flex-col">
            <span className="text-sm">{c.label}</span>
            <span className="font-normal text-muted-foreground">{c.detail}</span>
          </span>
          <span className="text-sm">{c.price}</span>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}`,
  },
  {
    name: "CodeDiffViewToggleGroup",
    description: "Pull request toolbar toggling between unified and split diff views.",
    code: `
export default function CodeDiffViewToggleGroup() {
  const [view, setView] = React.useState("unified")

  return (
    <div className="flex w-full max-w-md flex-col border">
      <div className="flex items-center justify-between gap-2 border-b px-3 py-2">
        <span className="truncate font-mono text-xs">src/billing/invoice.ts</span>
        <ToggleGroup size="sm" spacing={0} variant="outline" value={[view]} onValueChange={(next) => next[0] && setView(next[0])}>
          <ToggleGroupItem value="unified">Unified</ToggleGroupItem>
          <ToggleGroupItem value="split">Split</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className={cn("grid font-mono text-[11px]", view === "split" ? "grid-cols-2 divide-x" : "grid-cols-1")}>
        <div className="bg-rose-500/10 px-3 py-1.5 text-rose-700 dark:text-rose-300">- const total = sum(items)</div>
        <div className="bg-emerald-500/10 px-3 py-1.5 text-emerald-700 dark:text-emerald-300">+ const total = sum(items) + tax</div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "PollVoteToggleGroup",
    description: "Team poll where the single-select vote reveals a result bar per option.",
    code: `
const options = [
  { value: "tue", label: "Tuesday offsite", votes: 6 },
  { value: "wed", label: "Wednesday offsite", votes: 9 },
  { value: "fri", label: "Friday offsite", votes: 4 },
]

export default function PollVoteToggleGroup() {
  const [vote, setVote] = React.useState<string[]>([])
  const total = options.reduce((n, o) => n + o.votes, 0) + (vote.length ? 1 : 0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <span className="text-sm font-medium">When should we hold the Q3 offsite?</span>
      <ToggleGroup orientation="vertical" variant="outline" spacing={1} value={vote} onValueChange={setVote} className="w-full">
        {options.map((o) => {
          const count = o.votes + (vote[0] === o.value ? 1 : 0)
          return (
            <ToggleGroupItem key={o.value} value={o.value} className="relative h-9 justify-between overflow-hidden">
              {vote.length ? (
                <span className="absolute inset-y-0 start-0 bg-primary/10" style={{ width: (count / total) * 100 + "%" }} />
              ) : null}
              <span className="relative">{o.label}</span>
              {vote.length ? <span className="relative tabular-nums">{Math.round((count / total) * 100)}%</span> : null}
            </ToggleGroupItem>
          )
        })}
      </ToggleGroup>
    </div>
  )
}`,
  },
  {
    name: "CardToolbarToggleGroup",
    description: "Dashboard card header with a metric toggle group inside a Card component.",
    code: `
const metrics: Record<string, { value: string; label: string }> = {
  visitors: { value: "48.2k", label: "Unique visitors this week" },
  sessions: { value: "71.9k", label: "Sessions this week" },
  bounce: { value: "38%", label: "Average bounce rate" },
}

export default function CardToolbarToggleGroup() {
  const [metric, setMetric] = React.useState("visitors")

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Traffic</CardTitle>
        <CardDescription>{metrics[metric]!.label}</CardDescription>
        <CardAction>
          <ToggleGroup size="sm" value={[metric]} onValueChange={(next) => next[0] && setMetric(next[0])}>
            <ToggleGroupItem value="visitors" aria-label="Visitors">
              <UsersIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="sessions" aria-label="Sessions">
              <ActivityIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="bounce" aria-label="Bounce rate">
              <UndoIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </CardAction>
      </CardHeader>
      <CardContent>
        <span className="text-3xl font-semibold">{metrics[metric]!.value}</span>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "DrawingToolToggleGroup",
    description: "Vertical icon toolbar for a whiteboard app with tool name feedback.",
    code: `
const tools = [
  { value: "select", label: "Select", icon: MousePointer2Icon },
  { value: "pen", label: "Pen", icon: PenToolIcon },
  { value: "shape", label: "Rectangle", icon: SquareIcon },
  { value: "text", label: "Text", icon: TypeIcon },
  { value: "eraser", label: "Eraser", icon: EraserIcon },
]

export default function DrawingToolToggleGroup() {
  const [tool, setTool] = React.useState("pen")

  return (
    <div className="flex w-full max-w-sm gap-3">
      <ToggleGroup
        orientation="vertical"
        spacing={0}
        variant="outline"
        value={[tool]}
        onValueChange={(next) => next[0] && setTool(next[0])}
      >
        {tools.map((t) => (
          <ToggleGroupItem key={t.value} value={t.value} aria-label={t.label}>
            <t.icon />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex flex-1 items-center justify-center border border-dashed bg-muted/30 text-xs text-muted-foreground">
        {tools.find((t) => t.value === tool)?.label} tool active
      </div>
    </div>
  )
}`,
  },
]

export default examples
