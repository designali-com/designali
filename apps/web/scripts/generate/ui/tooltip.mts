import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "IconToolbarTooltips",
    description: "Icon-only editor toolbar where each button names its action in a tooltip.",
    code: `
const actions = [
  { label: "Undo", icon: Undo2Icon },
  { label: "Redo", icon: Redo2Icon },
  { label: "Insert image", icon: ImagePlusIcon },
  { label: "Insert table", icon: TableIcon },
  { label: "Add comment", icon: MessageSquarePlusIcon },
]

export default function IconToolbarTooltips() {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-1 border p-1">
        {actions.map((a) => (
          <Tooltip key={a.label}>
            <TooltipTrigger render={<Button variant="ghost" size="icon-sm" aria-label={a.label} />}>
              <a.icon />
            </TooltipTrigger>
            <TooltipContent>{a.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "ShortcutKbdTooltip",
    description: "Tooltips that pair an action label with its keyboard shortcut using Kbd.",
    code: `
const items = [
  { label: "Search", keys: ["⌘", "K"], icon: SearchIcon },
  { label: "New file", keys: ["⌘", "N"], icon: FilePlusIcon },
  { label: "Save", keys: ["⌘", "S"], icon: SaveIcon },
]

export default function ShortcutKbdTooltip() {
  return (
    <TooltipProvider>
      <div className="flex gap-2">
        {items.map((item) => (
          <Tooltip key={item.label}>
            <TooltipTrigger render={<Button variant="outline" size="icon" aria-label={item.label} />}>
              <item.icon />
            </TooltipTrigger>
            <TooltipContent>
              {item.label}
              <KbdGroup>
                {item.keys.map((k) => (
                  <Kbd key={k}>{k}</Kbd>
                ))}
              </KbdGroup>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "TooltipAlignments",
    description: "Bottom tooltips aligned to the start, center and end of wide triggers.",
    code: `
const aligns = ["start", "center", "end"] as const

export default function TooltipAlignments() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-sm flex-col gap-2">
        {aligns.map((align) => (
          <Tooltip key={align}>
            <TooltipTrigger render={<Button variant="outline" className="w-full capitalize" />}>
              Align {align}
            </TooltipTrigger>
            <TooltipContent side="bottom" align={align}>
              Aligned to the {align} edge
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "DisabledButtonTooltip",
    description: "Explains why a button is disabled by attaching the tooltip to a focusable wrapper.",
    code: `
export default function DisabledButtonTooltip() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline">Save draft</Button>
      <Tooltip>
        <TooltipTrigger render={<span tabIndex={0} className="inline-flex" />}>
          <Button disabled>
            <SendIcon data-icon="inline-start" />
            Publish
          </Button>
        </TooltipTrigger>
        <TooltipContent>Add a cover title before publishing</TooltipContent>
      </Tooltip>
    </div>
  )
}`,
  },
  {
    name: "ControlledTooltip",
    description: "A tooltip whose open state is driven by a switch outside the trigger.",
    code: `
export default function ControlledTooltip() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col items-center gap-6">
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger render={<Button variant="outline" />}>
          <SparklesIcon data-icon="inline-start" />
          Generate summary
        </TooltipTrigger>
        <TooltipContent>Uses 1 AI credit</TooltipContent>
      </Tooltip>
      <label className="flex items-center gap-2 text-xs text-muted-foreground">
        <Switch checked={open} onCheckedChange={setOpen} />
        Show tooltip
      </label>
    </div>
  )
}`,
  },
  {
    name: "TriggerDelayTooltips",
    description: "Three triggers with instant, short and long hover delays set on each trigger.",
    code: `
const delays = [0, 400, 1000]

export default function TriggerDelayTooltips() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {delays.map((delay) => (
        <Tooltip key={delay}>
          <TooltipTrigger delay={delay} render={<Button variant="outline" />}>
            {delay === 0 ? "Instant" : delay + " ms"}
          </TooltipTrigger>
          <TooltipContent>Opened after {delay} ms</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ProviderGroupedTooltips",
    description: "A provider with a delay so moving between adjacent triggers opens tooltips instantly.",
    code: `
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
const hours = [6.5, 8, 7.25, 9, 4.5]

export default function ProviderGroupedTooltips() {
  return (
    <TooltipProvider delay={500}>
      <div className="flex w-full max-w-xs flex-col gap-2">
        <span className="text-sm font-medium">Focus time this week</span>
        <div className="flex h-28 items-end gap-2">
          {days.map((day, i) => (
            <Tooltip key={day}>
              <TooltipTrigger
                render={<button type="button" aria-label={day} className="flex-1 bg-primary/80 hover:bg-primary" style={{ height: hours[i]! * 10 + "%" }} />}
              />
              <TooltipContent>
                {day}: {hours[i]} h
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <div className="flex gap-2 text-center text-[10px] text-muted-foreground">
          {days.map((d) => (
            <span key={d} className="flex-1">{d}</span>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "FieldInfoTooltip",
    description: "Form label with an info icon that explains the field in a tooltip.",
    code: `
export default function FieldInfoTooltip() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <div className="flex items-center gap-1">
        <Label htmlFor="vat">VAT number</Label>
        <Tooltip>
          <TooltipTrigger render={<Button variant="ghost" size="icon-xs" aria-label="About VAT number" />}>
            <InfoIcon />
          </TooltipTrigger>
          <TooltipContent side="right" className="max-w-52">
            Required for EU businesses so invoices can be issued without VAT.
          </TooltipContent>
        </Tooltip>
      </div>
      <Input id="vat" placeholder="DE123456789" />
    </div>
  )
}`,
  },
  {
    name: "AvatarStackTooltips",
    description: "Overlapping avatar stack where each person is named in a tooltip, plus an overflow count.",
    code: `
const people = [
  { name: "Noor Haddad", role: "Owner" },
  { name: "Elias Berg", role: "Editor" },
  { name: "Mina Park", role: "Editor" },
  { name: "Owen Clarke", role: "Viewer" },
]

export default function AvatarStackTooltips() {
  return (
    <TooltipProvider>
      <AvatarGroup>
        {people.map((p) => (
          <Tooltip key={p.name}>
            <TooltipTrigger
              render={
                <Avatar className="ring-2 ring-background">
                  <AvatarFallback>{p.name.split(" ").map((s) => s[0]).join("")}</AvatarFallback>
                </Avatar>
              }
            />
            <TooltipContent>
              {p.name} · {p.role}
            </TooltipContent>
          </Tooltip>
        ))}
        <Tooltip>
          <TooltipTrigger render={<AvatarGroupCount />}>+3</TooltipTrigger>
          <TooltipContent>Ravi, Sofia and Theo</TooltipContent>
        </Tooltip>
      </AvatarGroup>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "TruncatedFileNameTooltip",
    description: "File list rows with truncated names that reveal the full filename on hover.",
    code: `
const files = [
  "2026-Q2-board-meeting-financial-summary-final-v3.pdf",
  "customer-interviews-transcripts-northwind-batch.docx",
  "brand-refresh-moodboard-exploration.fig",
]

export default function TruncatedFileNameTooltip() {
  return (
    <TooltipProvider>
      <ul className="flex w-full max-w-60 flex-col divide-y border text-sm">
        {files.map((f) => (
          <li key={f} className="flex items-center gap-2 px-3 py-2">
            <FileIcon className="size-4 shrink-0 text-muted-foreground" />
            <Tooltip>
              <TooltipTrigger render={<span tabIndex={0} className="min-w-0 truncate" />}>{f}</TooltipTrigger>
              <TooltipContent className="break-all">{f}</TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "CopyFeedbackTooltip",
    description: "Copy button whose tooltip switches to a confirmation after the API key is copied.",
    code: `
export default function CopyFeedbackTooltip() {
  const [copied, setCopied] = React.useState(false)
  const key = "key_demo_9f2c...a71e"

  return (
    <div className="flex w-full max-w-xs items-center gap-2 border px-3 py-1.5">
      <span className="flex-1 truncate font-mono text-xs">{key}</span>
      <Tooltip onOpenChange={(open) => !open && setCopied(false)}>
        <TooltipTrigger
          closeOnClick={false}
          render={<Button variant="ghost" size="icon-sm" aria-label="Copy API key" />}
          onClick={() => {
            void navigator.clipboard?.writeText(key)
            setCopied(true)
          }}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </TooltipTrigger>
        <TooltipContent>{copied ? "Copied!" : "Copy to clipboard"}</TooltipContent>
      </Tooltip>
    </div>
  )
}`,
  },
  {
    name: "ServiceStatusTooltips",
    description: "Uptime bar for a service where each day segment shows its incident status.",
    code: `
const days = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  status: i === 11 ? "outage" : i === 4 || i === 22 ? "degraded" : "ok",
}))
const tone: Record<string, string> = { ok: "bg-emerald-500", degraded: "bg-amber-500", outage: "bg-rose-500" }
const text: Record<string, string> = { ok: "No incidents", degraded: "Degraded performance", outage: "Major outage, 42 min" }

export default function ServiceStatusTooltips() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-sm flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span className="font-medium">API Gateway</span>
          <span className="text-muted-foreground">99.91% uptime</span>
        </div>
        <div className="flex h-8 gap-0.5">
          {days.map((d) => (
            <Tooltip key={d.day}>
              <TooltipTrigger
                render={<button type="button" aria-label={"June " + d.day} className={cn("flex-1 opacity-80 hover:opacity-100", tone[d.status])} />}
              />
              <TooltipContent>
                June {d.day}: {text[d.status]}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "ContributionHeatmapTooltip",
    description: "Contribution heatmap grid with a tooltip for each day's activity count.",
    code: `
const weeks = Array.from({ length: 12 }, (_, w) =>
  Array.from({ length: 7 }, (_, d) => (w * 7 + d * 3) % 9)
)
const shade = (n: number) =>
  n === 0 ? "bg-muted" : n < 3 ? "bg-emerald-200 dark:bg-emerald-900" : n < 6 ? "bg-emerald-400 dark:bg-emerald-700" : "bg-emerald-600 dark:bg-emerald-500"

export default function ContributionHeatmapTooltip() {
  return (
    <TooltipProvider>
      <div className="flex gap-1">
        {weeks.map((week, w) => (
          <div key={w} className="flex flex-col gap-1">
            {week.map((count, d) => (
              <Tooltip key={d}>
                <TooltipTrigger render={<button type="button" aria-label={count + " contributions"} className={cn("size-3.5", shade(count))} />} />
                <TooltipContent>
                  {count === 0 ? "No contributions" : count + " contributions"} · week {w + 1}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        ))}
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "PricingFeatureHelpTooltips",
    description: "Plan feature checklist where each feature has a help tooltip with details.",
    code: `
const features = [
  { name: "Unlimited projects", help: "No cap on active or archived projects." },
  { name: "SSO & SCIM", help: "SAML 2.0 single sign-on with automatic user provisioning." },
  { name: "Audit log", help: "365 days of searchable workspace activity." },
  { name: "Priority support", help: "Replies within 4 business hours." },
]

export default function PricingFeatureHelpTooltips() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <div>
          <p className="text-sm font-medium">Business</p>
          <p className="text-2xl font-semibold">$32<span className="text-sm font-normal text-muted-foreground">/seat</span></p>
        </div>
        <ul className="flex flex-col gap-2 text-sm">
          {features.map((f) => (
            <li key={f.name} className="flex items-center gap-2">
              <CheckIcon className="size-4 text-emerald-600" />
              <span className="flex-1">{f.name}</span>
              <Tooltip>
                <TooltipTrigger render={<button type="button" aria-label={"About " + f.name} className="text-muted-foreground hover:text-foreground" />}>
                  <CircleHelpIcon className="size-3.5" />
                </TooltipTrigger>
                <TooltipContent side="left" className="max-w-48">{f.help}</TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "CollapsedSidebarTooltips",
    description: "Collapsed icon sidebar whose navigation labels appear in right-side tooltips.",
    code: `
const nav = [
  { label: "Home", icon: HouseIcon, active: true },
  { label: "Inbox", icon: InboxIcon, active: false },
  { label: "Projects", icon: FolderKanbanIcon, active: false },
  { label: "Reports", icon: ChartPieIcon, active: false },
  { label: "Settings", icon: SettingsIcon, active: false },
]

export default function CollapsedSidebarTooltips() {
  return (
    <TooltipProvider>
      <nav className="flex h-72 w-14 flex-col items-center gap-1 border bg-muted/30 py-3">
        <div className="mb-2 size-7 bg-gradient-to-br from-indigo-500 to-sky-400" />
        {nav.map((item) => (
          <Tooltip key={item.label}>
            <TooltipTrigger
              render={
                <Button
                  variant={item.active ? "secondary" : "ghost"}
                  size="icon"
                  aria-label={item.label}
                  nativeButton={false}
                  render={<a href="#" />}
                />
              }
            >
              <item.icon />
            </TooltipTrigger>
            <TooltipContent side="right">{item.label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "BetaBadgeTooltip",
    description: "A Beta badge next to a feature title that explains its stability on hover.",
    code: `
export default function BetaBadgeTooltip() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between border p-4">
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Smart scheduling</span>
          <Tooltip>
            <TooltipTrigger render={<Badge variant="outline" tabIndex={0} />}>Beta</TooltipTrigger>
            <TooltipContent className="max-w-56">
              Still being refined. Suggestions may change and feedback is welcome.
            </TooltipContent>
          </Tooltip>
        </div>
        <span className="text-xs text-muted-foreground">Find a slot that works for everyone.</span>
      </div>
      <Switch defaultChecked />
    </div>
  )
}`,
  },
  {
    name: "StorageBreakdownTooltips",
    description: "Segmented storage usage bar where each segment reports its category size.",
    code: `
const segments = [
  { label: "Photos", gb: 42, className: "bg-sky-500" },
  { label: "Videos", gb: 28, className: "bg-violet-500" },
  { label: "Documents", gb: 9, className: "bg-amber-500" },
  { label: "Backups", gb: 14, className: "bg-emerald-500" },
]

export default function StorageBreakdownTooltips() {
  const total = 128
  const used = segments.reduce((n, s) => n + s.gb, 0)

  return (
    <TooltipProvider>
      <div className="flex w-full max-w-sm flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span className="font-medium">Storage</span>
          <span className="text-muted-foreground">{used} GB of {total} GB</span>
        </div>
        <div className="flex h-2.5 w-full bg-muted">
          {segments.map((s) => (
            <Tooltip key={s.label}>
              <TooltipTrigger
                render={<button type="button" aria-label={s.label} className={cn("h-full", s.className)} style={{ width: (s.gb / total) * 100 + "%" }} />}
              />
              <TooltipContent>
                {s.label}: {s.gb} GB
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "RichContentTooltip",
    description: "Tooltip with a title, description and meta line laid out in a column.",
    code: `
export default function RichContentTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        <CalendarClockIcon data-icon="inline-start" />
        Auto-archive
      </TooltipTrigger>
      <TooltipContent className="flex-col items-start gap-1 py-2">
        <span className="font-medium">Auto-archive inactive channels</span>
        <span className="opacity-80">Channels with no messages for 90 days are archived each Sunday.</span>
        <span className="opacity-60">Last run: 3 channels archived</span>
      </TooltipContent>
    </Tooltip>
  )
}`,
  },
  {
    name: "CursorTrackingTooltip",
    description: "Timeline scrubber tooltip that follows the cursor horizontally with trackCursorAxis.",
    code: `
export default function CursorTrackingTooltip() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <span className="text-sm font-medium">Session replay</span>
      <Tooltip trackCursorAxis="x">
        <TooltipTrigger render={<div tabIndex={0} className="relative h-10 w-full cursor-crosshair border bg-muted/40" />}>
          <div className="absolute inset-y-0 start-0 w-2/5 bg-primary/15" />
          <div className="absolute inset-y-3 start-[18%] w-1 bg-amber-500" />
          <div className="absolute inset-y-3 start-[63%] w-1 bg-rose-500" />
        </TooltipTrigger>
        <TooltipContent>Hover to scrub the 04:32 recording</TooltipContent>
      </Tooltip>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>00:00</span>
        <span>04:32</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ExternalLinkTooltip",
    description: "Inline anchors that preview their destination URL in a tooltip.",
    code: `
export default function ExternalLinkTooltip() {
  return (
    <TooltipProvider>
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
        Read the{" "}
        <Tooltip>
          <TooltipTrigger render={<a href="#" className="font-medium text-foreground underline underline-offset-4" />}>
            migration guide
          </TooltipTrigger>
          <TooltipContent>
            <ExternalLinkIcon className="size-3" />
            docs.fieldnote.app/migrate/v4
          </TooltipContent>
        </Tooltip>{" "}
        before upgrading, and check the{" "}
        <Tooltip>
          <TooltipTrigger render={<a href="#" className="font-medium text-foreground underline underline-offset-4" />}>
            changelog
          </TooltipTrigger>
          <TooltipContent>
            <ExternalLinkIcon className="size-3" />
            fieldnote.app/changelog
          </TooltipContent>
        </Tooltip>{" "}
        for breaking changes.
      </p>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "RelativeTimestampTooltip",
    description: "Activity feed with relative times that show the exact timestamp on hover.",
    code: `
const activity = [
  { who: "Iris Novak", what: "merged #482", ago: "3m ago", exact: "Jun 12, 2026, 14:07:33" },
  { who: "Kofi Mensah", what: "commented on #479", ago: "2h ago", exact: "Jun 12, 2026, 12:01:09" },
  { who: "Lea Fontaine", what: "opened #483", ago: "yesterday", exact: "Jun 11, 2026, 17:44:50" },
]

export default function RelativeTimestampTooltip() {
  return (
    <TooltipProvider>
      <ul className="flex w-full max-w-sm flex-col gap-3 text-sm">
        {activity.map((a) => (
          <li key={a.exact} className="flex items-center justify-between gap-2">
            <span>
              <span className="font-medium">{a.who}</span> <span className="text-muted-foreground">{a.what}</span>
            </span>
            <Tooltip>
              <TooltipTrigger render={<time tabIndex={0} className="shrink-0 text-xs text-muted-foreground underline decoration-dotted underline-offset-4" />}>
                {a.ago}
              </TooltipTrigger>
              <TooltipContent>{a.exact}</TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "GlossaryTermTooltips",
    description: "Body copy with dotted-underlined jargon terms defined in tooltips.",
    code: `
const terms: Record<string, string> = {
  MRR: "Monthly recurring revenue: predictable revenue normalized to one month.",
  churn: "The share of customers who cancel within a period.",
  LTV: "Lifetime value: expected revenue from a customer over the relationship.",
}

function Term({ id }: { id: string }) {
  return (
    <Tooltip>
      <TooltipTrigger render={<abbr tabIndex={0} className="cursor-help text-foreground no-underline decoration-dotted underline-offset-4 [text-decoration-line:underline]" />}>
        {id}
      </TooltipTrigger>
      <TooltipContent className="max-w-56">{terms[id]}</TooltipContent>
    </Tooltip>
  )
}

export default function GlossaryTermTooltips() {
  return (
    <TooltipProvider>
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
        Our <Term id="MRR" /> grew 14% this quarter while <Term id="churn" /> held at 2.1%, pushing average{" "}
        <Term id="LTV" /> above $4,800.
      </p>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "InputGroupActionTooltips",
    description: "Search input group with addon buttons that each describe their action.",
    code: `
export default function InputGroupActionTooltips() {
  return (
    <TooltipProvider>
      <InputGroup className="max-w-sm">
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search customers" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger render={<InputGroupButton size="icon-xs" aria-label="Voice search" />}>
              <MicIcon />
            </TooltipTrigger>
            <TooltipContent>Voice search</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<InputGroupButton size="icon-xs" aria-label="Filters" />}>
              <SlidersHorizontalIcon />
            </TooltipTrigger>
            <TooltipContent>Advanced filters</TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "HintsToggleTooltip",
    description: "A Show hints switch that disables all tooltips via the Tooltip disabled prop.",
    code: `
const tools = [
  { label: "Crop", icon: CropIcon },
  { label: "Rotate", icon: RotateCwIcon },
  { label: "Flip", icon: FlipHorizontalIcon },
  { label: "Adjust", icon: SunMediumIcon },
]

export default function HintsToggleTooltip() {
  const [hints, setHints] = React.useState(true)

  return (
    <TooltipProvider>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-1 border p-1">
          {tools.map((t) => (
            <Tooltip key={t.label} disabled={!hints}>
              <TooltipTrigger render={<Button variant="ghost" size="icon" aria-label={t.label} />}>
                <t.icon />
              </TooltipTrigger>
              <TooltipContent>{t.label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
        <label className="flex items-center gap-2 text-xs text-muted-foreground">
          <Switch checked={hints} onCheckedChange={setHints} />
          Show hints
        </label>
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "SemanticColorTooltips",
    description: "Tooltips restyled with className for success, warning and destructive messages.",
    code: `
const styles = [
  { label: "Synced", icon: CloudCheckIcon, text: "All changes saved", className: "bg-emerald-600 text-white [&>svg:last-child]:bg-emerald-600 [&>svg:last-child]:fill-emerald-600" },
  { label: "Pending", icon: CloudUploadIcon, text: "2 changes waiting to sync", className: "bg-amber-500 text-black [&>svg:last-child]:bg-amber-500 [&>svg:last-child]:fill-amber-500" },
  { label: "Offline", icon: CloudOffIcon, text: "Connection lost, retrying", className: "bg-destructive text-white [&>svg:last-child]:bg-destructive [&>svg:last-child]:fill-destructive" },
]

export default function SemanticColorTooltips() {
  return (
    <TooltipProvider>
      <div className="flex gap-2">
        {styles.map((s) => (
          <Tooltip key={s.label}>
            <TooltipTrigger render={<Button variant="outline" size="sm" />}>
              <s.icon data-icon="inline-start" />
              {s.label}
            </TooltipTrigger>
            <TooltipContent className={s.className}>{s.text}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "PasswordRulesTooltip",
    description: "Password field with a live checklist tooltip of the remaining requirements.",
    code: `
export default function PasswordRulesTooltip() {
  const [value, setValue] = React.useState("")
  const rules = [
    { label: "At least 12 characters", ok: value.length >= 12 },
    { label: "One number", ok: /\\d/.test(value) },
    { label: "One symbol", ok: /[^A-Za-z0-9]/.test(value) },
  ]

  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <Label htmlFor="new-password">New password</Label>
      <Tooltip>
        <TooltipTrigger
          render={<Input id="new-password" type="password" value={value} onChange={(e) => setValue(e.target.value)} />}
        />
        <TooltipContent side="right" className="flex-col items-start gap-1 py-2">
          {rules.map((r) => (
            <span key={r.label} className={cn("flex items-center gap-1.5", r.ok && "opacity-60 line-through")}>
              {r.ok ? <CheckIcon className="size-3" /> : <XIcon className="size-3" />}
              {r.label}
            </span>
          ))}
        </TooltipContent>
      </Tooltip>
    </div>
  )
}`,
  },
  {
    name: "KpiDefinitionTooltip",
    description: "Dashboard KPI cards whose titles carry a tooltip with the metric definition.",
    code: `
const kpis = [
  { label: "Activation", value: "62%", help: "Signed-up users who created a first project within 7 days." },
  { label: "Net revenue", value: "$84.1k", help: "Gross revenue minus refunds and chargebacks, this month." },
]

export default function KpiDefinitionTooltip() {
  return (
    <TooltipProvider>
      <div className="grid w-full max-w-md grid-cols-2 gap-3">
        {kpis.map((k) => (
          <div key={k.label} className="flex flex-col gap-1 border p-3">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              {k.label}
              <Tooltip>
                <TooltipTrigger render={<button type="button" aria-label={"Define " + k.label} />}>
                  <InfoIcon className="size-3" />
                </TooltipTrigger>
                <TooltipContent className="max-w-52">{k.help}</TooltipContent>
              </Tooltip>
            </div>
            <span className="text-xl font-semibold">{k.value}</span>
          </div>
        ))}
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "TableHeaderHelpTooltips",
    description: "Data table column headers with help tooltips explaining each computed column.",
    code: `
const columns = [
  { label: "Campaign", help: null },
  { label: "CTR", help: "Clicks divided by impressions." },
  { label: "CPA", help: "Spend divided by conversions." },
]
const rows = [
  ["Spring launch", "3.4%", "$18.20"],
  ["Retargeting", "5.1%", "$9.75"],
]

export default function TableHeaderHelpTooltips() {
  return (
    <TooltipProvider>
      <Table className="max-w-sm">
        <TableHeader>
          <TableRow>
            {columns.map((c) => (
              <TableHead key={c.label}>
                <span className="inline-flex items-center gap-1">
                  {c.label}
                  {c.help ? (
                    <Tooltip>
                      <TooltipTrigger render={<button type="button" aria-label={"About " + c.label} className="text-muted-foreground" />}>
                        <CircleHelpIcon className="size-3" />
                      </TooltipTrigger>
                      <TooltipContent>{c.help}</TooltipContent>
                    </Tooltip>
                  ) : null}
                </span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r[0]}>
              {r.map((cell) => (
                <TableCell key={cell}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "ReactionWhoTooltip",
    description: "Chat reaction chips whose tooltips list the people who reacted.",
    code: `
const reactions = [
  { icon: ThumbsUpIcon, people: ["Ana", "Ben", "Chloe"] },
  { icon: HeartIcon, people: ["Dmitri"] },
  { icon: RocketIcon, people: ["Ana", "Esme", "Farid", "Gus"] },
]

export default function ReactionWhoTooltip() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-sm flex-col gap-2">
        <div className="bg-muted px-3 py-2 text-sm">v2.8 is live in all regions.</div>
        <div className="flex gap-1">
          {reactions.map((r, i) => (
            <Tooltip key={i}>
              <TooltipTrigger render={<Button variant="outline" size="xs" className="rounded-full" />}>
                <r.icon data-icon="inline-start" />
                {r.people.length}
              </TooltipTrigger>
              <TooltipContent>Reacted by {r.people.join(", ")}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "CalendarEventDotTooltips",
    description: "Mini month grid where event dots reveal the event titles for that day.",
    code: `
const events: Record<number, string[]> = {
  3: ["Sprint planning"],
  9: ["Dentist 9:30", "Team lunch"],
  14: ["Board review"],
  21: ["Offsite day 1", "Offsite day 2", "Dinner"],
  27: ["Launch party"],
}

export default function CalendarEventDotTooltips() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-xs flex-col gap-2 border p-3">
        <span className="text-sm font-medium">July 2026</span>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) =>
            events[day] ? (
              <Tooltip key={day}>
                <TooltipTrigger render={<button type="button" className="flex h-8 flex-col items-center justify-center gap-0.5 bg-muted font-medium hover:bg-accent" />}>
                  {day}
                  <span className="size-1 rounded-full bg-primary" />
                </TooltipTrigger>
                <TooltipContent className="flex-col items-start gap-0.5">
                  {events[day]!.map((e) => (
                    <span key={e}>{e}</span>
                  ))}
                </TooltipContent>
              </Tooltip>
            ) : (
              <span key={day} className="flex h-8 items-center justify-center text-muted-foreground">
                {day}
              </span>
            )
          )}
        </div>
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "LockedFeatureTooltip",
    description: "Locked premium actions with a tooltip that names the plan required to unlock them.",
    code: `
export default function LockedFeatureTooltip() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline">
          <DownloadIcon data-icon="inline-start" />
          Export CSV
        </Button>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" aria-disabled className="opacity-60" />}>
            <LockIcon data-icon="inline-start" />
            Export to warehouse
          </TooltipTrigger>
          <TooltipContent>
            <CrownIcon className="size-3" />
            Available on the Scale plan
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "ColorPaletteTooltips",
    description: "Brand palette swatches that show the token name and hex value in a tooltip.",
    code: `
const palette = [
  { name: "ink-900", hex: "#111827", className: "bg-[#111827]" },
  { name: "slate-500", hex: "#64748B", className: "bg-[#64748B]" },
  { name: "coral-400", hex: "#FB7185", className: "bg-[#FB7185]" },
  { name: "mint-300", hex: "#6EE7B7", className: "bg-[#6EE7B7]" },
  { name: "sun-200", hex: "#FDE68A", className: "bg-[#FDE68A]" },
]

export default function ColorPaletteTooltips() {
  return (
    <TooltipProvider>
      <div className="flex">
        {palette.map((c) => (
          <Tooltip key={c.name}>
            <TooltipTrigger render={<button type="button" aria-label={c.name} className={cn("h-16 w-12 transition-transform hover:-translate-y-1", c.className)} />} />
            <TooltipContent side="bottom">
              <span className="font-medium">{c.name}</span>
              <span className="font-mono opacity-70">{c.hex}</span>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "MediaPlayerControlTooltips",
    description: "Audio player controls with tooltips that reflect the current play and mute state.",
    code: `
export default function MediaPlayerControlTooltips() {
  const [playing, setPlaying] = React.useState(false)
  const [muted, setMuted] = React.useState(false)

  return (
    <TooltipProvider>
      <div className="flex w-full max-w-xs items-center gap-2 border p-2">
        <Tooltip>
          <TooltipTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Previous track" />}>
            <SkipBackIcon />
          </TooltipTrigger>
          <TooltipContent>Previous</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            closeOnClick={false}
            onClick={() => setPlaying((p) => !p)}
            render={<Button size="icon-sm" aria-label={playing ? "Pause" : "Play"} />}
          >
            {playing ? <PauseIcon /> : <PlayIcon />}
          </TooltipTrigger>
          <TooltipContent>
            {playing ? "Pause" : "Play"}
            <Kbd>Space</Kbd>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Next track" />}>
            <SkipForwardIcon />
          </TooltipTrigger>
          <TooltipContent>Next</TooltipContent>
        </Tooltip>
        <div className="mx-1 h-1 flex-1 bg-muted">
          <div className="h-full w-1/3 bg-primary" />
        </div>
        <Tooltip>
          <TooltipTrigger
            closeOnClick={false}
            onClick={() => setMuted((m) => !m)}
            render={<Button variant="ghost" size="icon-sm" aria-label={muted ? "Unmute" : "Mute"} />}
          >
            {muted ? <VolumeXIcon /> : <Volume2Icon />}
          </TooltipTrigger>
          <TooltipContent>{muted ? "Unmute" : "Mute"}</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "NotificationBellTooltip",
    description: "Header bell button with an unread badge and a tooltip summarizing unread items.",
    code: `
export default function NotificationBellTooltip() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between border px-3 py-2">
      <span className="text-sm font-medium">Workspace</span>
      <Tooltip>
        <TooltipTrigger render={<Button variant="ghost" size="icon" aria-label="Notifications, 5 unread" className="relative" />}>
          <BellIcon />
          <span className="absolute top-1 end-1 flex size-3.5 items-center justify-center rounded-full bg-destructive text-[9px] text-white">
            5
          </span>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="end">
          5 unread: 3 mentions, 2 approvals
        </TooltipContent>
      </Tooltip>
    </div>
  )
}`,
  },
  {
    name: "ShareActionTooltips",
    description: "Share sheet icon buttons for email, link, message and QR code with tooltips.",
    code: `
const actions = [
  { label: "Send by email", icon: MailIcon },
  { label: "Copy link", icon: Link2Icon },
  { label: "Send as message", icon: MessageCircleIcon },
  { label: "Show QR code", icon: QrCodeIcon },
]

export default function ShareActionTooltips() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <span className="text-sm font-medium">Share &quot;Trip to Lisbon&quot;</span>
        <div className="flex gap-2">
          {actions.map((a) => (
            <Tooltip key={a.label}>
              <TooltipTrigger render={<Button variant="outline" size="icon-lg" className="rounded-full" aria-label={a.label} />}>
                <a.icon />
              </TooltipTrigger>
              <TooltipContent side="bottom">{a.label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "OnboardingStepTooltips",
    description: "Progress dots for an onboarding flow where each dot names its step and status.",
    code: `
const steps = [
  { label: "Create account", done: true },
  { label: "Invite teammates", done: true },
  { label: "Connect calendar", done: false },
  { label: "Book first meeting", done: false },
]

export default function OnboardingStepTooltips() {
  return (
    <TooltipProvider>
      <div className="flex flex-col items-center gap-3">
        <span className="text-sm text-muted-foreground">Step 3 of 4</span>
        <div className="flex items-center gap-2">
          {steps.map((s, i) => (
            <Tooltip key={s.label}>
              <TooltipTrigger
                render={
                  <button
                    type="button"
                    aria-label={s.label}
                    className={cn("h-2 transition-all", s.done ? "w-6 bg-primary" : i === 2 ? "w-10 bg-primary/60" : "w-6 bg-muted")}
                  />
                }
              />
              <TooltipContent>
                {s.done ? <CheckIcon className="size-3" /> : null}
                {s.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "FileRowActionTooltips",
    description: "File manager row with hover action buttons that each have a tooltip.",
    code: `
const files = [
  { name: "Invoice-0423.pdf", size: "184 KB" },
  { name: "Team-photo.png", size: "2.1 MB" },
]

export default function FileRowActionTooltips() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-sm flex-col divide-y border">
        {files.map((f) => (
          <div key={f.name} className="group flex items-center gap-3 px-3 py-2">
            <FileIcon className="size-4 text-muted-foreground" />
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-sm">{f.name}</span>
              <span className="text-xs text-muted-foreground">{f.size}</span>
            </div>
            <div className="flex gap-0.5 opacity-60 group-hover:opacity-100">
              <Tooltip>
                <TooltipTrigger render={<Button variant="ghost" size="icon-xs" aria-label="Download" />}>
                  <DownloadIcon />
                </TooltipTrigger>
                <TooltipContent>Download</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger render={<Button variant="ghost" size="icon-xs" aria-label="Rename" />}>
                  <PencilIcon />
                </TooltipTrigger>
                <TooltipContent>Rename</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger render={<Button variant="ghost" size="icon-xs" aria-label="Move to trash" />}>
                  <Trash2Icon />
                </TooltipTrigger>
                <TooltipContent>Move to trash</TooltipContent>
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "ChatComposerTooltips",
    description: "Chat composer with attachment, emoji and voice buttons plus a send button tooltip with shortcut.",
    code: `
export default function ChatComposerTooltips() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-md flex-col gap-2 border p-2">
        <Textarea placeholder="Message #design-review" className="min-h-14 resize-none border-0 shadow-none focus-visible:ring-0" />
        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Attach file" />}>
              <PaperclipIcon />
            </TooltipTrigger>
            <TooltipContent>Attach file</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Emoji" />}>
              <SmileIcon />
            </TooltipTrigger>
            <TooltipContent>Emoji</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Record voice clip" />}>
              <MicIcon />
            </TooltipTrigger>
            <TooltipContent>Record voice clip</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button size="icon-sm" className="ms-auto" aria-label="Send" />}>
              <SendHorizontalIcon />
            </TooltipTrigger>
            <TooltipContent>
              Send
              <Kbd>Enter</Kbd>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "WrappingLongTooltip",
    description: "Long multi-sentence tooltip content that wraps within a constrained width.",
    code: `
export default function WrappingLongTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        <ShieldAlertIcon data-icon="inline-start" />
        Data retention
      </TooltipTrigger>
      <TooltipContent className="max-w-64 leading-relaxed">
        Messages older than 18 months are permanently deleted on the first day of each month. Files
        attached to those messages are removed as well, unless they are pinned in a channel.
      </TooltipContent>
    </Tooltip>
  )
}`,
  },
  {
    name: "VerifiedBadgeTooltip",
    description: "Profile name with a verified check icon that explains verification on hover.",
    code: `
export default function VerifiedBadgeTooltip() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="lg">
        <AvatarFallback>RV</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold">Rosa Vidal</span>
          <Tooltip>
            <TooltipTrigger render={<button type="button" aria-label="Verified" className="text-sky-500" />}>
              <BadgeCheckIcon className="size-4" />
            </TooltipTrigger>
            <TooltipContent>Identity verified on Mar 4, 2026</TooltipContent>
          </Tooltip>
        </div>
        <span className="text-xs text-muted-foreground">Product designer · Lisbon</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ApiParamTypeTooltips",
    description: "API reference parameter list where each name shows its type and default in a tooltip.",
    code: `
const params = [
  { name: "limit", type: "number", def: "20" },
  { name: "cursor", type: "string | null", def: "null" },
  { name: "expand", type: "string[]", def: "[]" },
]

export default function ApiParamTypeTooltips() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-sm flex-col gap-2 border p-3">
        <span className="font-mono text-xs text-muted-foreground">GET /v1/invoices</span>
        <div className="flex flex-wrap gap-1.5">
          {params.map((p) => (
            <Tooltip key={p.name}>
              <TooltipTrigger render={<code tabIndex={0} className="cursor-help bg-muted px-1.5 py-0.5 font-mono text-xs" />}>
                {p.name}
              </TooltipTrigger>
              <TooltipContent className="font-mono">
                {p.type} = {p.def}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "MapPinTooltips",
    description: "Store locator pins positioned on a gradient map, each naming its location.",
    code: `
const pins = [
  { name: "Harbor Street store", top: "28%", left: "22%" },
  { name: "Old Town kiosk", top: "55%", left: "48%" },
  { name: "Riverside pickup point", top: "38%", left: "76%" },
]

export default function MapPinTooltips() {
  return (
    <TooltipProvider>
      <div className="relative h-44 w-full max-w-sm overflow-hidden border bg-gradient-to-br from-sky-100 via-emerald-50 to-lime-100 dark:from-sky-950 dark:via-emerald-950 dark:to-lime-950">
        <div className="absolute inset-x-0 top-2/3 h-3 -rotate-6 bg-sky-300/60 dark:bg-sky-800/60" />
        {pins.map((p) => (
          <Tooltip key={p.name}>
            <TooltipTrigger
              render={<button type="button" aria-label={p.name} className="absolute -translate-x-1/2 -translate-y-full text-rose-500" style={{ top: p.top, left: p.left }} />}
            >
              <MapPinIcon className="size-6 fill-rose-500/20" />
            </TooltipTrigger>
            <TooltipContent>{p.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "FeatureDiscoveryTooltip",
    description: "Default-open onboarding hint tooltip that can be dismissed with a Got it button.",
    code: `
export default function FeatureDiscoveryTooltip() {
  const [open, setOpen] = React.useState(true)

  return (
    <div className="flex flex-col items-center gap-3 pt-10">
      <Tooltip open={open} onOpenChange={(next) => next && setOpen(next)}>
        <TooltipTrigger render={<Button variant="outline" />}>
          <WandSparklesIcon data-icon="inline-start" />
          Auto layout
        </TooltipTrigger>
        <TooltipContent className="gap-2">
          New: arrange frames in one click
          <Button size="xs" variant="secondary" onClick={() => setOpen(false)}>
            Got it
          </Button>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}`,
  },
  {
    name: "LogicalSideTooltips",
    description: "Tooltips placed with the direction-aware inline-start and inline-end sides.",
    code: `
export default function LogicalSideTooltips() {
  return (
    <TooltipProvider>
      <div className="flex gap-2">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Previous page" />}>
            <ChevronLeftIcon />
          </TooltipTrigger>
          <TooltipContent side="inline-start">Previous page</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Next page" />}>
            <ChevronRightIcon />
          </TooltipTrigger>
          <TooltipContent side="inline-end">Next page</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "StarRatingTooltips",
    description: "Interactive star rating whose stars describe each score in a tooltip.",
    code: `
const labels = ["Terrible", "Poor", "Okay", "Good", "Excellent"]

export default function StarRatingTooltips() {
  const [rating, setRating] = React.useState(4)

  return (
    <TooltipProvider>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium">Rate your stay at Casa Aurora</span>
        <div className="flex">
          {labels.map((label, i) => (
            <Tooltip key={label}>
              <TooltipTrigger
                closeOnClick={false}
                onClick={() => setRating(i + 1)}
                render={<button type="button" aria-label={label} className="p-0.5" />}
              >
                <StarIcon className={cn("size-6", i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground")} />
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
        <span className="text-xs text-muted-foreground">{labels[rating - 1]}</span>
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "ProgressMilestoneTooltip",
    description: "Fundraising progress bar with milestone markers explained in tooltips.",
    code: `
const milestones = [
  { at: 25, label: "$5k: Prototype funded" },
  { at: 60, label: "$12k: First production run" },
  { at: 100, label: "$20k: Retail packaging" },
]

export default function ProgressMilestoneTooltip() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-sm flex-col gap-3">
        <div className="flex justify-between text-sm">
          <span className="font-medium">$13,420 raised</span>
          <span className="text-muted-foreground">of $20,000</span>
        </div>
        <div className="relative">
          <Progress value={67} />
          {milestones.map((m) => (
            <Tooltip key={m.at}>
              <TooltipTrigger
                render={
                  <button
                    type="button"
                    aria-label={m.label}
                    className={cn("absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-background", m.at <= 67 ? "bg-primary" : "bg-muted-foreground")}
                    style={{ left: m.at + "%" }}
                  />
                }
              />
              <TooltipContent>{m.label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "ButtonGroupTooltips",
    description: "Attached button group for zoom controls with tooltips on every segment.",
    code: `
export default function ButtonGroupTooltips() {
  const [zoom, setZoom] = React.useState(100)

  return (
    <TooltipProvider>
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger
            closeOnClick={false}
            onClick={() => setZoom((z) => Math.max(25, z - 25))}
            render={<Button variant="outline" size="icon" aria-label="Zoom out" />}
          >
            <ZoomOutIcon />
          </TooltipTrigger>
          <TooltipContent>Zoom out</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger closeOnClick={false} onClick={() => setZoom(100)} render={<Button variant="outline" className="w-16 tabular-nums" />}>
            {zoom}%
          </TooltipTrigger>
          <TooltipContent>Reset to 100%</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            closeOnClick={false}
            onClick={() => setZoom((z) => Math.min(400, z + 25))}
            render={<Button variant="outline" size="icon" aria-label="Zoom in" />}
          >
            <ZoomInIcon />
          </TooltipTrigger>
          <TooltipContent>Zoom in</TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "CloseDelayTooltip",
    description: "A tooltip with a close delay so users can move the pointer into it to select text.",
    code: `
export default function CloseDelayTooltip() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-muted-foreground">Order</span>
      <Tooltip>
        <TooltipTrigger closeDelay={400} render={<Badge variant="secondary" tabIndex={0} className="font-mono" />}>
          #A-20931
        </TooltipTrigger>
        <TooltipContent className="flex-col items-start gap-0.5 select-text">
          <span className="opacity-70">Tracking number</span>
          <span className="font-mono">1Z 999 AA1 01 2345 6784</span>
        </TooltipContent>
      </Tooltip>
      <span className="text-muted-foreground">shipped today</span>
    </div>
  )
}`,
  },
]

export default examples
