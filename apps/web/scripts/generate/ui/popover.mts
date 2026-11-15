import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "ShareLinkPopover",
    description: "Share popover with a read-only link field and a copy button that confirms success.",
    code: `
export default function ShareLinkPopover() {
  const [copied, setCopied] = React.useState(false)
  const url = "https://app.example.com/d/roadmap-q1"

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <Share2Icon data-icon="inline-start" />
        Share
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <PopoverHeader>
          <PopoverTitle>Share this doc</PopoverTitle>
          <PopoverDescription>Anyone in Lumen Labs with the link can view.</PopoverDescription>
        </PopoverHeader>
        <div className="flex gap-2">
          <Input readOnly value={url} aria-label="Share link" className="h-8 flex-1" />
          <Button
            size="icon"
            variant="outline"
            aria-label="Copy link"
            onClick={() => {
              void navigator.clipboard?.writeText(url)
              setCopied(true)
              window.setTimeout(() => setCopied(false), 1500)
            }}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "NotificationsPopover",
    description: "Bell button with an unread badge that opens a notifications list and mark-all-read action.",
    code: `
const initial = [
  { id: 1, title: "Priya commented on Pricing v2", time: "2m", unread: true },
  { id: 2, title: "Deploy to production succeeded", time: "18m", unread: true },
  { id: 3, title: "Marco invited you to Atlas", time: "1h", unread: false },
]

export default function NotificationsPopover() {
  const [items, setItems] = React.useState(initial)
  const unread = items.filter((item) => item.unread).length

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="icon" aria-label="Notifications" className="relative" />}>
        <BellIcon />
        {unread > 0 && (
          <span className="absolute -end-1 -top-1 flex size-4 items-center justify-center bg-primary text-[10px] text-primary-foreground">
            {unread}
          </span>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-80 gap-0 p-0" align="end">
        <div className="flex items-center justify-between border-b p-2.5">
          <PopoverTitle>Notifications</PopoverTitle>
          <Button
            variant="link"
            size="xs"
            disabled={unread === 0}
            onClick={() => setItems((prev) => prev.map((item) => ({ ...item, unread: false })))}
          >
            Mark all read
          </Button>
        </div>
        <ul className="flex flex-col divide-y">
          {items.map((item) => (
            <li key={item.id} className="flex items-start gap-2 p-2.5">
              <span className={cn("mt-1 size-1.5 shrink-0 rounded-full", item.unread ? "bg-primary" : "bg-transparent")} />
              <span className="flex-1 text-xs">{item.title}</span>
              <span className="text-[11px] text-muted-foreground">{item.time}</span>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "AccountPopover",
    description: "Avatar trigger that opens an account card with plan details and quick links.",
    code: `
export default function AccountPopover() {
  return (
    <Popover>
      <PopoverTrigger
        render={<Button variant="ghost" size="icon" className="rounded-full" aria-label="Open account" />}
      >
        <Avatar>
          <AvatarFallback>EK</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="end">
        <div className="flex items-center gap-2.5">
          <Avatar size="lg">
            <AvatarFallback>EK</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col">
            <PopoverTitle>Elif Kaya</PopoverTitle>
            <PopoverDescription className="truncate">elif@harborline.io</PopoverDescription>
          </div>
        </div>
        <div className="flex items-center justify-between border p-2 text-xs">
          <span>Team plan</span>
          <Badge variant="secondary">8 / 10 seats</Badge>
        </div>
        <Separator />
        <div className="flex flex-col">
          <Button variant="ghost" size="sm" className="justify-start">
            <UserIcon data-icon="inline-start" /> Profile
          </Button>
          <Button variant="ghost" size="sm" className="justify-start">
            <SettingsIcon data-icon="inline-start" /> Settings
          </Button>
          <Button variant="ghost" size="sm" className="justify-start text-destructive">
            <LogOutIcon data-icon="inline-start" /> Sign out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "DatePickerPopover",
    description: "Date picker field that opens a calendar in a popover and closes on selection.",
    code: `
export default function DatePickerPopover() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<undefined | Date>()

  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <Label htmlFor="due-date">Due date</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              id="due-date"
              variant="outline"
              className={cn("w-full justify-start font-normal", !date && "text-muted-foreground")}
            />
          }
        >
          <CalendarIcon data-icon="inline-start" />
          {date ? date.toLocaleDateString("en-US", { dateStyle: "medium" }) : "Pick a date"}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(value) => {
              setDate(value)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}`,
  },
  {
    name: "DateRangePopover",
    description: "Report date range picker with preset shortcuts and a two-click range calendar.",
    imports: { "react-day-picker": ["type DateRange"] },
    code: `
const presets = [
  { label: "Last 7 days", days: 7 },
  { label: "Last 30 days", days: 30 },
  { label: "Last 90 days", days: 90 },
]

const today = new Date(2026, 10, 15)

function daysAgo(days: number) {
  const d = new Date(today)
  d.setDate(d.getDate() - days + 1)
  return d
}

const fmt = (d?: Date) => (d ? d.toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "...")

export default function DateRangePopover() {
  const [range, setRange] = React.useState<DateRange | undefined>({ from: daysAgo(7), to: today })

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" className="font-normal" />}>
        <CalendarRangeIcon data-icon="inline-start" />
        {fmt(range?.from)} - {fmt(range?.to)}
      </PopoverTrigger>
      <PopoverContent className="w-auto flex-row gap-0 p-0" align="start">
        <div className="flex flex-col gap-1 border-e p-2">
          {presets.map((preset) => (
            <Button
              key={preset.label}
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => setRange({ from: daysAgo(preset.days), to: today })}
            >
              {preset.label}
            </Button>
          ))}
        </div>
        <Calendar mode="range" defaultMonth={range?.from} selected={range} onSelect={setRange} />
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "ColorSwatchPopover",
    description: "Label color picker with a swatch grid and a hex value readout.",
    code: `
const swatches = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#14b8a6", "#3b82f6", "#6366f1", "#a855f7", "#ec4899", "#64748b"]

export default function ColorSwatchPopover() {
  const [color, setColor] = React.useState("#3b82f6")

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <span className="size-3.5 border" style={{ backgroundColor: color }} />
        Label color
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <PopoverTitle>Choose a color</PopoverTitle>
        <div className="grid grid-cols-5 gap-1.5">
          {swatches.map((swatch) => (
            <button
              key={swatch}
              type="button"
              aria-label={swatch}
              aria-pressed={swatch === color}
              onClick={() => setColor(swatch)}
              className="flex aspect-square items-center justify-center ring-offset-2 ring-offset-popover outline-none focus-visible:ring-2 focus-visible:ring-ring aria-pressed:ring-2 aria-pressed:ring-foreground"
              style={{ backgroundColor: swatch }}
            >
              {swatch === color && <CheckIcon className="size-3.5 text-white" />}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between border p-1.5 font-mono text-[11px]">
          <span className="text-muted-foreground">HEX</span>
          <span>{color.toUpperCase()}</span>
        </div>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "EmojiReactionPopover",
    description: "Chat message with an add-reaction popover that appends emoji counts to the message.",
    code: `
const emojis = ["👍", "❤️", "😂", "🎉", "😮", "😢", "🔥", "👀"]

export default function EmojiReactionPopover() {
  const [reactions, setReactions] = React.useState<Record<string, number>>({ "🎉": 2 })
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-3">
      <div className="flex gap-2">
        <Avatar size="sm">
          <AvatarFallback>JO</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-medium">Jonah Okafor</span>
          <p className="text-xs text-muted-foreground">The new onboarding flow is live for everyone!</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-1 ps-8">
        {Object.entries(reactions).map(([emoji, count]) => (
          <Badge key={emoji} variant="outline">
            {emoji} {count}
          </Badge>
        ))}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger render={<Button variant="ghost" size="icon-xs" aria-label="Add reaction" />}>
            <SmilePlusIcon />
          </PopoverTrigger>
          <PopoverContent className="w-auto p-1.5" side="top" align="start">
            <div className="grid grid-cols-4 gap-0.5">
              {emojis.map((emoji) => (
                <Button
                  key={emoji}
                  variant="ghost"
                  size="icon"
                  className="text-base"
                  onClick={() => {
                    setReactions((prev) => ({ ...prev, [emoji]: (prev[emoji] ?? 0) + 1 }))
                    setOpen(false)
                  }}
                >
                  {emoji}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}`,
  },
  {
    name: "StatusFilterPopover",
    description: "Table filter popover with status checkboxes, counts, and a clear action.",
    code: `
const statuses = [
  { value: "active", label: "Active", count: 128 },
  { value: "trial", label: "Trial", count: 42 },
  { value: "past_due", label: "Past due", count: 9 },
  { value: "canceled", label: "Canceled", count: 31 },
]

export default function StatusFilterPopover() {
  const [selected, setSelected] = React.useState<string[]>(["active"])

  const toggle = (value: string, checked: boolean) =>
    setSelected((prev) => (checked ? [...prev, value] : prev.filter((v) => v !== value)))

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" className="border-dashed" />}>
        <ListFilterIcon data-icon="inline-start" />
        Status
        {selected.length > 0 && (
          <Badge variant="secondary" className="ms-1">
            {selected.length}
          </Badge>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-56" align="start">
        <PopoverTitle>Filter by status</PopoverTitle>
        <div className="flex flex-col gap-2">
          {statuses.map((status) => (
            <Label key={status.value} className="flex items-center gap-2 font-normal">
              <Checkbox
                checked={selected.includes(status.value)}
                onCheckedChange={(checked) => toggle(status.value, checked === true)}
              />
              <span className="flex-1">{status.label}</span>
              <span className="text-[11px] text-muted-foreground tabular-nums">{status.count}</span>
            </Label>
          ))}
        </div>
        <Separator />
        <Button variant="ghost" size="sm" disabled={!selected.length} onClick={() => setSelected([])}>
          Clear filters
        </Button>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "SortOrderPopover",
    description: "Sort popover with a radio group for the field and a toggle for ascending or descending.",
    code: `
const fields = [
  { value: "updated", label: "Last updated" },
  { value: "created", label: "Date created" },
  { value: "name", label: "Name" },
  { value: "size", label: "File size" },
]

export default function SortOrderPopover() {
  const [field, setField] = React.useState("updated")
  const [direction, setDirection] = React.useState("desc")
  const label = fields.find((f) => f.value === field)?.label

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <ArrowUpDownIcon data-icon="inline-start" />
        {label}
      </PopoverTrigger>
      <PopoverContent className="w-56" align="start">
        <PopoverTitle>Sort by</PopoverTitle>
        <RadioGroup value={field} onValueChange={(value) => setField(String(value))}>
          {fields.map((f) => (
            <Label key={f.value} className="flex items-center gap-2 font-normal">
              <RadioGroupItem value={f.value} />
              {f.label}
            </Label>
          ))}
        </RadioGroup>
        <Separator />
        <ToggleGroup
          variant="outline"
          size="sm"
          spacing={0}
          className="w-full"
          value={[direction]}
          onValueChange={(value) => value.length && setDirection(String(value[0]))}
        >
          <ToggleGroupItem value="asc" className="flex-1">
            <ArrowUpIcon /> Asc
          </ToggleGroupItem>
          <ToggleGroupItem value="desc" className="flex-1">
            <ArrowDownIcon /> Desc
          </ToggleGroupItem>
        </ToggleGroup>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "ControlledRenamePopover",
    description: "Controlled popover that renames a project and closes itself after saving.",
    code: `
export default function ControlledRenamePopover() {
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState("Atlas Redesign")
  const [draft, setDraft] = React.useState(name)

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">{name}</span>
      <Popover
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (next) setDraft(name)
        }}
      >
        <PopoverTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Rename project" />}>
          <PencilIcon />
        </PopoverTrigger>
        <PopoverContent className="w-64" align="start">
          <form
            className="flex flex-col gap-2.5"
            onSubmit={(event) => {
              event.preventDefault()
              if (!draft.trim()) return
              setName(draft.trim())
              setOpen(false)
            }}
          >
            <Label htmlFor="project-name">Project name</Label>
            <Input id="project-name" value={draft} onChange={(event) => setDraft(event.target.value)} autoFocus />
            <div className="flex justify-end gap-2">
              <Button type="button" variant="ghost" size="sm" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" size="sm" disabled={!draft.trim()}>
                Save
              </Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  )
}`,
  },
  {
    name: "FeedbackPopover",
    description: "Feedback widget with a mood picker and message field that switches to a thank-you state.",
    code: `
const moods = [
  { value: "sad", icon: FrownIcon },
  { value: "neutral", icon: MehIcon },
  { value: "happy", icon: SmileIcon },
]

export default function FeedbackPopover() {
  const [mood, setMood] = React.useState<string | null>(null)
  const [sent, setSent] = React.useState(false)

  return (
    <Popover onOpenChangeComplete={(open) => !open && (setSent(false), setMood(null))}>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <MessageSquareIcon data-icon="inline-start" />
        Feedback
      </PopoverTrigger>
      <PopoverContent className="w-72">
        {sent ? (
          <div className="flex flex-col items-center gap-1.5 py-4 text-center">
            <CircleCheckIcon className="size-6 text-emerald-600 dark:text-emerald-400" />
            <PopoverTitle>Thanks for the feedback!</PopoverTitle>
            <PopoverDescription>We read every message.</PopoverDescription>
          </div>
        ) : (
          <>
            <PopoverHeader>
              <PopoverTitle>How is the new editor?</PopoverTitle>
            </PopoverHeader>
            <div className="flex gap-1">
              {moods.map((m) => (
                <Button
                  key={m.value}
                  variant={mood === m.value ? "secondary" : "ghost"}
                  size="icon"
                  aria-label={m.value}
                  aria-pressed={mood === m.value}
                  onClick={() => setMood(m.value)}
                >
                  <m.icon />
                </Button>
              ))}
            </div>
            <Textarea placeholder="Tell us more (optional)" className="min-h-20" />
            <Button size="sm" disabled={!mood} onClick={() => setSent(true)}>
              Send feedback
            </Button>
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "InviteMembersPopover",
    description: "Invite popover with an email field, role select, and a list of pending invites.",
    code: `
const roles = [
  { label: "Viewer", value: "viewer" },
  { label: "Editor", value: "editor" },
  { label: "Admin", value: "admin" },
]

export default function InviteMembersPopover() {
  const [email, setEmail] = React.useState("")
  const [role, setRole] = React.useState("editor")
  const [invites, setInvites] = React.useState([{ email: "sora@finchwork.io", role: "viewer" }])
  const valid = /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email)

  return (
    <Popover>
      <PopoverTrigger render={<Button />}>
        <UserPlusIcon data-icon="inline-start" />
        Invite
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <PopoverHeader>
          <PopoverTitle>Invite to Finchwork</PopoverTitle>
          <PopoverDescription>Invites expire after 7 days.</PopoverDescription>
        </PopoverHeader>
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-8 flex-1"
          />
          <Select items={roles} value={role} onValueChange={(value) => setRole(String(value))}>
            <SelectTrigger size="sm" className="w-24" aria-label="Role">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {roles.map((r) => (
                <SelectItem key={r.value} value={r.value}>
                  {r.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          size="sm"
          disabled={!valid}
          onClick={() => {
            setInvites((prev) => [...prev, { email, role }])
            setEmail("")
          }}
        >
          Send invite
        </Button>
        <Separator />
        <ul className="flex flex-col gap-1.5">
          {invites.map((invite) => (
            <li key={invite.email} className="flex items-center justify-between text-xs">
              <span className="truncate">{invite.email}</span>
              <Badge variant="outline" className="capitalize">
                {invite.role}
              </Badge>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "KeyboardShortcutsPopover",
    description: "Help popover listing editor keyboard shortcuts with key caps.",
    code: `
const shortcuts = [
  { label: "Command menu", keys: ["⌘", "K"] },
  { label: "New document", keys: ["⌘", "N"] },
  { label: "Search", keys: ["/"] },
  { label: "Toggle sidebar", keys: ["⌘", "B"] },
  { label: "Duplicate", keys: ["⌘", "D"] },
]

export default function KeyboardShortcutsPopover() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="icon" aria-label="Keyboard shortcuts" />}>
        <KeyboardIcon />
      </PopoverTrigger>
      <PopoverContent className="w-64" side="top">
        <PopoverTitle>Keyboard shortcuts</PopoverTitle>
        <ul className="flex flex-col gap-2">
          {shortcuts.map((shortcut) => (
            <li key={shortcut.label} className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{shortcut.label}</span>
              <KbdGroup>
                {shortcut.keys.map((key) => (
                  <Kbd key={key}>{key}</Kbd>
                ))}
              </KbdGroup>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "FieldHelpPopover",
    description: "Form field with an inline help icon that opens an explanation and docs link.",
    code: `
export default function FieldHelpPopover() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <div className="flex items-center gap-1">
        <Label htmlFor="webhook-secret">Signing secret</Label>
        <Popover>
          <PopoverTrigger render={<Button variant="ghost" size="icon-xs" aria-label="What is a signing secret?" />}>
            <CircleHelpIcon />
          </PopoverTrigger>
          <PopoverContent className="w-64" side="right" align="start">
            <PopoverHeader>
              <PopoverTitle>Signing secret</PopoverTitle>
              <PopoverDescription>
                We sign every webhook payload with this secret so your server can verify the request came from us.
              </PopoverDescription>
            </PopoverHeader>
            <a href="#" className="flex items-center gap-1 text-xs font-medium hover:underline">
              Read the verification guide <ExternalLinkIcon className="size-3" />
            </a>
          </PopoverContent>
        </Popover>
      </div>
      <Input id="webhook-secret" type="password" defaultValue="whk_demo_2b1c" />
    </div>
  )
}`,
  },
  {
    name: "PlanFeaturesPopover",
    description: "Pricing card with a 'What's included' popover listing the plan's features.",
    code: `
const features = ["Unlimited projects", "10 GB file storage", "Version history (90 days)", "Priority email support", "SAML single sign-on"]

export default function PlanFeaturesPopover() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium">Growth</span>
        <span className="text-lg font-semibold">
          $24<span className="text-xs font-normal text-muted-foreground">/seat/mo</span>
        </span>
      </div>
      <p className="text-xs text-muted-foreground">For teams scaling their workflows.</p>
      <div className="flex items-center gap-2">
        <Button size="sm" className="flex-1">
          Choose Growth
        </Button>
        <Popover>
          <PopoverTrigger render={<Button variant="link" size="sm" />}>What&apos;s included</PopoverTrigger>
          <PopoverContent className="w-60" side="top">
            <PopoverTitle>Growth includes</PopoverTitle>
            <ul className="flex flex-col gap-1.5">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-xs">
                  <CheckIcon className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ConfirmDeletePopover",
    description: "Inline delete confirmation that requires typing the item name before deleting.",
    code: `
const NAME = "staging-db"

export default function ConfirmDeletePopover() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [deleted, setDeleted] = React.useState(false)

  if (deleted) {
    return (
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Trash2Icon className="size-3.5" /> {NAME} was deleted.
      </p>
    )
  }

  return (
    <div className="flex w-full max-w-sm items-center justify-between border p-3">
      <div className="flex items-center gap-2 text-xs">
        <DatabaseIcon className="size-4 text-muted-foreground" />
        <span className="font-mono">{NAME}</span>
      </div>
      <Popover
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          setValue("")
        }}
      >
        <PopoverTrigger render={<Button variant="destructive" size="sm" />}>Delete</PopoverTrigger>
        <PopoverContent className="w-64" align="end">
          <PopoverHeader>
            <PopoverTitle>Delete database?</PopoverTitle>
            <PopoverDescription>
              Type <span className="font-mono text-foreground">{NAME}</span> to confirm. This cannot be undone.
            </PopoverDescription>
          </PopoverHeader>
          <Input value={value} onChange={(event) => setValue(event.target.value)} aria-label="Confirm name" className="h-8" />
          <Button variant="destructive" size="sm" disabled={value !== NAME} onClick={() => setDeleted(true)}>
            Delete permanently
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  )
}`,
  },
  {
    name: "PopoverSides",
    description: "Four triggers showing popovers placed on the top, right, bottom, and left sides.",
    code: `
const sides = [
  { side: "top", icon: ArrowUpIcon },
  { side: "right", icon: ArrowRightIcon },
  { side: "bottom", icon: ArrowDownIcon },
  { side: "left", icon: ArrowLeftIcon },
] as const

export default function PopoverSides() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {sides.map(({ side, ...item }) => (
        <Popover key={side}>
          <PopoverTrigger render={<Button variant="outline" size="sm" className="capitalize" />}>
            <item.icon data-icon="inline-start" />
            {side}
          </PopoverTrigger>
          <PopoverContent side={side} className="w-40">
            <PopoverTitle className="capitalize">{side}</PopoverTitle>
            <PopoverDescription>Positioned on the {side} side of the trigger.</PopoverDescription>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}`,
  },
  {
    name: "NotificationSettingsPopover",
    description: "Quick notification preferences with switches for each delivery channel.",
    code: `
const channels = [
  { id: "email", label: "Email", description: "Daily digest at 9 AM", icon: MailIcon },
  { id: "push", label: "Push", description: "Mentions and replies", icon: SmartphoneIcon },
  { id: "slack", label: "Chat app", description: "Alerts in #ops-alerts", icon: HashIcon },
]

export default function NotificationSettingsPopover() {
  const [enabled, setEnabled] = React.useState<Record<string, boolean>>({ email: true, push: true, slack: false })

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <BellRingIcon data-icon="inline-start" />
        Alerts
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <PopoverHeader>
          <PopoverTitle>Notify me via</PopoverTitle>
          <PopoverDescription>Changes apply to this project only.</PopoverDescription>
        </PopoverHeader>
        <div className="flex flex-col gap-3">
          {channels.map((channel) => (
            <div key={channel.id} className="flex items-center gap-2.5">
              <channel.icon className="size-4 text-muted-foreground" />
              <div className="flex flex-1 flex-col">
                <Label htmlFor={"notify-" + channel.id}>{channel.label}</Label>
                <span className="text-[11px] text-muted-foreground">{channel.description}</span>
              </div>
              <Switch
                id={"notify-" + channel.id}
                checked={enabled[channel.id]}
                onCheckedChange={(checked) => setEnabled((prev) => ({ ...prev, [channel.id]: checked }))}
              />
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "AppearancePopover",
    description: "Appearance settings with theme choice and an interface density toggle.",
    code: `
export default function AppearancePopover() {
  const [theme, setTheme] = React.useState("system")
  const [density, setDensity] = React.useState("comfortable")

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="icon" aria-label="Appearance" />}>
        <PaletteIcon />
      </PopoverTrigger>
      <PopoverContent className="w-64" align="end">
        <PopoverTitle>Appearance</PopoverTitle>
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] text-muted-foreground">Theme</span>
          <ToggleGroup
            variant="outline"
            size="sm"
            spacing={0}
            className="w-full"
            value={[theme]}
            onValueChange={(value) => value.length && setTheme(String(value[0]))}
          >
            <ToggleGroupItem value="light" className="flex-1">
              <SunIcon /> Light
            </ToggleGroupItem>
            <ToggleGroupItem value="dark" className="flex-1">
              <MoonIcon /> Dark
            </ToggleGroupItem>
            <ToggleGroupItem value="system" className="flex-1">
              <MonitorIcon /> Auto
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] text-muted-foreground">Density</span>
          <RadioGroup value={density} onValueChange={(value) => setDensity(String(value))} className="flex gap-4">
            {["compact", "comfortable"].map((d) => (
              <Label key={d} className="flex items-center gap-1.5 font-normal capitalize">
                <RadioGroupItem value={d} />
                {d}
              </Label>
            ))}
          </RadioGroup>
        </div>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "ReaderSettingsPopover",
    description: "Article reader settings popover with font size and line height sliders and a live preview.",
    code: `
export default function ReaderSettingsPopover() {
  const [size, setSize] = React.useState(15)
  const [leading, setLeading] = React.useState(1.6)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">Field Notes · 6 min read</span>
        <Popover>
          <PopoverTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Reading settings" />}>
            <TypeIcon />
          </PopoverTrigger>
          <PopoverContent className="w-60" align="end">
            <PopoverTitle>Reading settings</PopoverTitle>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs">
                <span>Font size</span>
                <span className="text-muted-foreground tabular-nums">{size}px</span>
              </div>
              <Slider min={12} max={22} value={[size]} onValueChange={(v) => setSize(Array.isArray(v) ? v[0]! : v)} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs">
                <span>Line height</span>
                <span className="text-muted-foreground tabular-nums">{leading.toFixed(1)}</span>
              </div>
              <Slider
                min={1.2}
                max={2}
                step={0.1}
                value={[leading]}
                onValueChange={(v) => setLeading(Array.isArray(v) ? v[0]! : v)}
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <p style={{ fontSize: size, lineHeight: leading }}>
        The tide came in slowly that morning, folding the harbor into a single sheet of grey light.
      </p>
    </div>
  )
}`,
  },
  {
    name: "VolumePopover",
    description: "Media player volume control with a vertical slider in a popover above the button.",
    code: `
export default function VolumePopover() {
  const [volume, setVolume] = React.useState(64)
  const Icon = volume === 0 ? VolumeXIcon : volume < 50 ? Volume1Icon : Volume2Icon

  return (
    <div className="flex w-full max-w-xs items-center gap-2 border p-2">
      <Button size="icon-sm" aria-label="Play">
        <PlayIcon />
      </Button>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-xs font-medium">Ep. 42 · Building in public</span>
        <span className="text-[11px] text-muted-foreground">12:08 / 48:30</span>
      </div>
      <Popover>
        <PopoverTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Volume" />}>
          <Icon />
        </PopoverTrigger>
        <PopoverContent side="top" className="w-12 items-center p-2">
          <Slider
            orientation="vertical"
            className="h-28"
            value={[volume]}
            onValueChange={(v) => setVolume(Array.isArray(v) ? v[0]! : v)}
            aria-label="Volume"
          />
          <span className="text-[10px] text-muted-foreground tabular-nums">{volume}</span>
        </PopoverContent>
      </Popover>
    </div>
  )
}`,
  },
  {
    name: "LinkEditorPopover",
    description: "Rich text editor link popover with URL, display text, and new-tab option.",
    code: `
export default function LinkEditorPopover() {
  const [open, setOpen] = React.useState(false)
  const [href, setHref] = React.useState("")
  const [link, setLink] = React.useState<string | null>(null)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border">
      <div className="flex items-center gap-1 border-b p-1">
        <Button variant="ghost" size="icon-sm" aria-label="Bold">
          <BoldIcon />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Italic">
          <ItalicIcon />
        </Button>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            render={<Button variant={link ? "secondary" : "ghost"} size="icon-sm" aria-label="Insert link" />}
          >
            <LinkIcon />
          </PopoverTrigger>
          <PopoverContent className="w-72" align="start">
            <form
              className="flex flex-col gap-2.5"
              onSubmit={(event) => {
                event.preventDefault()
                setLink(href)
                setOpen(false)
              }}
            >
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="link-url">URL</Label>
                <Input id="link-url" type="url" placeholder="https://" value={href} onChange={(e) => setHref(e.target.value)} className="h-8" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="link-text">Text</Label>
                <Input id="link-text" defaultValue="release notes" className="h-8" />
              </div>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox defaultChecked /> Open in new tab
              </Label>
              <div className="flex justify-between">
                <Button type="button" variant="ghost" size="sm" disabled={!link} onClick={() => (setLink(null), setHref(""), setOpen(false))}>
                  Remove
                </Button>
                <Button type="submit" size="sm" disabled={!href}>
                  Apply
                </Button>
              </div>
            </form>
          </PopoverContent>
        </Popover>
      </div>
      <p className="px-3 pb-3 text-xs">
        Read the <span className={cn(link && "text-primary underline")}>release notes</span> before upgrading.
      </p>
    </div>
  )
}`,
  },
  {
    name: "TagPickerPopover",
    description: "Tag picker with search, multi-select checkmarks, and a create-tag option.",
    code: `
export default function TagPickerPopover() {
  const [tags, setTags] = React.useState(["design", "frontend", "bug", "research", "copy", "urgent"])
  const [selected, setSelected] = React.useState<string[]>(["frontend"])
  const [query, setQuery] = React.useState("")
  const filtered = tags.filter((t) => t.includes(query.toLowerCase()))
  const canCreate = query.trim() !== "" && !tags.includes(query.trim().toLowerCase())

  const toggle = (tag: string) =>
    setSelected((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))

  return (
    <div className="flex w-full max-w-xs flex-wrap items-center gap-1.5">
      {selected.map((tag) => (
        <Badge key={tag} variant="secondary">
          {tag}
        </Badge>
      ))}
      <Popover>
        <PopoverTrigger render={<Button variant="outline" size="xs" />}>
          <TagIcon data-icon="inline-start" /> Add tag
        </PopoverTrigger>
        <PopoverContent className="w-56 gap-1.5 p-1.5" align="start">
          <Input placeholder="Search or create..." value={query} onChange={(e) => setQuery(e.target.value)} className="h-7" />
          <div className="flex max-h-40 flex-col overflow-y-auto">
            {filtered.map((tag) => (
              <Button key={tag} variant="ghost" size="sm" className="justify-between" onClick={() => toggle(tag)}>
                {tag}
                {selected.includes(tag) && <CheckIcon />}
              </Button>
            ))}
            {canCreate && (
              <Button
                variant="ghost"
                size="sm"
                className="justify-start"
                onClick={() => {
                  const tag = query.trim().toLowerCase()
                  setTags((prev) => [...prev, tag])
                  setSelected((prev) => [...prev, tag])
                  setQuery("")
                }}
              >
                <PlusIcon data-icon="inline-start" /> Create &quot;{query.trim()}&quot;
              </Button>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}`,
  },
  {
    name: "AssigneePickerPopover",
    description: "Task assignee picker with a searchable list of teammates and an unassign option.",
    code: `
const team = [
  { name: "Maya Chen", role: "Design" },
  { name: "Dario Mendes", role: "Engineering" },
  { name: "Hana Sato", role: "Engineering" },
  { name: "Owen Brandt", role: "Product" },
]

const initials = (name: string) => name.split(" ").map((p) => p[0]).join("")

export default function AssigneePickerPopover() {
  const [assignee, setAssignee] = React.useState<string | null>("Hana Sato")
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const results = team.filter((m) => m.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="flex w-full max-w-xs items-center justify-between border p-3">
      <span className="text-xs text-muted-foreground">Assignee</span>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger render={<Button variant="ghost" size="sm" />}>
          {assignee ? (
            <>
              <Avatar size="sm">
                <AvatarFallback>{initials(assignee)}</AvatarFallback>
              </Avatar>
              {assignee}
            </>
          ) : (
            <>
              <UserRoundIcon data-icon="inline-start" /> Unassigned
            </>
          )}
        </PopoverTrigger>
        <PopoverContent className="w-60 gap-1.5 p-1.5" align="end">
          <InputGroup className="h-7">
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput placeholder="Find teammate" value={query} onChange={(e) => setQuery(e.target.value)} />
          </InputGroup>
          <div className="flex flex-col">
            {results.map((member) => (
              <button
                key={member.name}
                type="button"
                onClick={() => (setAssignee(member.name), setOpen(false))}
                className="flex items-center gap-2 px-2 py-1.5 text-start text-xs hover:bg-muted"
              >
                <Avatar size="sm">
                  <AvatarFallback>{initials(member.name)}</AvatarFallback>
                </Avatar>
                <span className="flex-1">{member.name}</span>
                <span className="text-[11px] text-muted-foreground">{member.role}</span>
              </button>
            ))}
            {results.length === 0 && <p className="p-2 text-xs text-muted-foreground">No one found.</p>}
          </div>
          <Separator />
          <Button variant="ghost" size="sm" className="justify-start" onClick={() => (setAssignee(null), setOpen(false))}>
            <UserXIcon data-icon="inline-start" /> Unassign
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  )
}`,
  },
  {
    name: "IssueStatusPopover",
    description: "Issue status selector with colored status icons and the current status checked.",
    code: `
const statuses = [
  { value: "backlog", label: "Backlog", icon: CircleDashedIcon, className: "text-muted-foreground" },
  { value: "todo", label: "Todo", icon: CircleIcon, className: "text-foreground" },
  { value: "progress", label: "In progress", icon: CircleDotIcon, className: "text-amber-500" },
  { value: "review", label: "In review", icon: CircleEllipsisIcon, className: "text-sky-500" },
  { value: "done", label: "Done", icon: CircleCheckIcon, className: "text-emerald-500" },
]

export default function IssueStatusPopover() {
  const [status, setStatus] = React.useState("progress")
  const [open, setOpen] = React.useState(false)
  const current = statuses.find((s) => s.value === status)!

  return (
    <div className="flex w-full max-w-sm items-center gap-2 border p-3">
      <span className="font-mono text-xs text-muted-foreground">ENG-318</span>
      <span className="flex-1 truncate text-xs">Retry failed invoice webhooks</span>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger render={<Button variant="outline" size="sm" />}>
          <current.icon data-icon="inline-start" className={current.className} />
          {current.label}
        </PopoverTrigger>
        <PopoverContent className="w-48 gap-0 p-1" align="end">
          {statuses.map((s) => (
            <Button
              key={s.value}
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => (setStatus(s.value), setOpen(false))}
            >
              <s.icon data-icon="inline-start" className={s.className} />
              <span className="flex-1 text-start">{s.label}</span>
              {s.value === status && <CheckIcon />}
            </Button>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  )
}`,
  },
  {
    name: "CartPreviewPopover",
    description: "Storefront cart button that previews line items, subtotal, and a checkout action.",
    code: `
const initial = [
  { id: "tote", name: "Linen Tote", qty: 1, price: 38, tone: "from-amber-200 to-orange-300" },
  { id: "mug", name: "Clay Mug", qty: 2, price: 22, tone: "from-sky-200 to-indigo-300" },
]

export default function CartPreviewPopover() {
  const [items, setItems] = React.useState(initial)
  const count = items.reduce((sum, item) => sum + item.qty, 0)
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0)

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <ShoppingBagIcon data-icon="inline-start" />
        Cart
        <Badge className="ms-1">{count}</Badge>
      </PopoverTrigger>
      <PopoverContent className="w-72" align="end">
        <PopoverTitle>Your cart</PopoverTitle>
        {items.length === 0 ? (
          <p className="py-4 text-center text-xs text-muted-foreground">Your cart is empty.</p>
        ) : (
          <ul className="flex flex-col gap-2.5">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-2.5">
                <div className={cn("size-10 shrink-0 bg-gradient-to-br", item.tone)} />
                <div className="flex flex-1 flex-col">
                  <span className="text-xs font-medium">{item.name}</span>
                  <span className="text-[11px] text-muted-foreground">
                    Qty {item.qty} · \${item.price * item.qty}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label={"Remove " + item.name}
                  onClick={() => setItems((prev) => prev.filter((i) => i.id !== item.id))}
                >
                  <XIcon />
                </Button>
              </li>
            ))}
          </ul>
        )}
        <Separator />
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium tabular-nums">\${subtotal.toFixed(2)}</span>
        </div>
        <Button size="sm" disabled={!items.length}>
          Checkout
        </Button>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "CalendarEventPopover",
    description: "Week view event chip that opens event details with time, location, and attendees.",
    code: `
const attendees = ["Rhea Kapoor", "Leo Varga", "Aiko Mori", "Sam Whitfield"]

export default function CalendarEventPopover() {
  return (
    <div className="grid w-full max-w-sm grid-cols-[3rem_1fr] border text-[11px]">
      {["9 AM", "10 AM", "11 AM"].map((hour) => (
        <React.Fragment key={hour}>
          <span className="border-e border-b p-1 text-muted-foreground">{hour}</span>
          <div className="relative h-12 border-b">
            {hour === "10 AM" && (
              <Popover>
                <PopoverTrigger
                  render={
                    <button
                      type="button"
                      className="absolute inset-x-1 top-1 bottom-1 border-s-2 border-primary bg-primary/10 px-2 text-start text-xs font-medium"
                    />
                  }
                >
                  Design review
                </PopoverTrigger>
                <PopoverContent side="right" align="start" className="w-64">
                  <PopoverHeader>
                    <PopoverTitle>Design review</PopoverTitle>
                    <PopoverDescription>Tuesday, Nov 17 · 10:00 - 10:45 AM</PopoverDescription>
                  </PopoverHeader>
                  <div className="flex flex-col gap-1.5 text-xs">
                    <span className="flex items-center gap-2">
                      <MapPinIcon className="size-3.5 text-muted-foreground" /> Room 4B · Juniper
                    </span>
                    <span className="flex items-center gap-2">
                      <VideoIcon className="size-3.5 text-muted-foreground" /> meet.example.com/drv-421
                    </span>
                  </div>
                  <AvatarGroup>
                    {attendees.map((name) => (
                      <Avatar key={name} size="sm">
                        <AvatarFallback>{name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
                      </Avatar>
                    ))}
                  </AvatarGroup>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      Join
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Reschedule
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}`,
  },
  {
    name: "MapPinPopover",
    description: "Store locator map built from SVG with pins that open location details.",
    code: `
const stores = [
  { id: "north", name: "North Pier", x: 28, y: 30, hours: "8 AM - 8 PM", open: true },
  { id: "market", name: "Market Square", x: 62, y: 52, hours: "9 AM - 6 PM", open: true },
  { id: "hill", name: "Cedar Hill", x: 44, y: 78, hours: "Closed today", open: false },
]

export default function MapPinPopover() {
  return (
    <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden border bg-muted/40">
      <svg className="absolute inset-0 size-full text-border" aria-hidden>
        <defs>
          <pattern id="map-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#map-grid)" />
        <path d="M0 120 C80 90 160 170 400 110" stroke="currentColor" strokeWidth="10" fill="none" />
      </svg>
      {stores.map((store) => (
        <Popover key={store.id}>
          <PopoverTrigger
            render={
              <button
                type="button"
                aria-label={store.name}
                className="absolute -translate-x-1/2 -translate-y-full text-primary"
                style={{ left: store.x + "%", top: store.y + "%" }}
              />
            }
          >
            <MapPinIcon className="size-6 fill-background" />
          </PopoverTrigger>
          <PopoverContent side="top" className="w-52">
            <PopoverHeader>
              <PopoverTitle>{store.name}</PopoverTitle>
              <PopoverDescription>{store.hours}</PopoverDescription>
            </PopoverHeader>
            <Badge variant={store.open ? "secondary" : "outline"}>{store.open ? "Open now" : "Closed"}</Badge>
            <Button size="sm" variant="outline">
              <NavigationIcon data-icon="inline-start" /> Directions
            </Button>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ChartDataPointPopover",
    description: "Bar chart where each bar opens a popover with that month's metrics.",
    code: `
const data = [
  { month: "Jun", signups: 320, churn: 2.1 },
  { month: "Jul", signups: 410, churn: 1.8 },
  { month: "Aug", signups: 380, churn: 2.4 },
  { month: "Sep", signups: 520, churn: 1.6 },
  { month: "Oct", signups: 610, churn: 1.4 },
  { month: "Nov", signups: 470, churn: 1.9 },
]

const max = Math.max(...data.map((d) => d.signups))

export default function ChartDataPointPopover() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
      <span className="text-sm font-medium">Monthly signups</span>
      <div className="flex h-36 items-end gap-2">
        {data.map((d) => (
          <Popover key={d.month}>
            <PopoverTrigger
              render={
                <button
                  type="button"
                  aria-label={d.month + " details"}
                  className="flex-1 bg-primary/70 transition-colors hover:bg-primary data-popup-open:bg-primary"
                  style={{ height: (d.signups / max) * 100 + "%" }}
                />
              }
            />
            <PopoverContent side="top" className="w-40">
              <PopoverTitle>{d.month} 2026</PopoverTitle>
              <div className="flex flex-col gap-1 text-xs">
                <span className="flex justify-between">
                  <span className="text-muted-foreground">Signups</span>
                  <span className="tabular-nums">{d.signups}</span>
                </span>
                <span className="flex justify-between">
                  <span className="text-muted-foreground">Churn</span>
                  <span className="tabular-nums">{d.churn}%</span>
                </span>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
      <div className="flex gap-2 text-[11px] text-muted-foreground">
        {data.map((d) => (
          <span key={d.month} className="flex-1 text-center">
            {d.month}
          </span>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "FileDetailsPopover",
    description: "File manager row with an info popover showing size, owner, dates, and sharing.",
    code: `
const details = [
  { label: "Type", value: "PDF document" },
  { label: "Size", value: "4.2 MB" },
  { label: "Owner", value: "Noor Haddad" },
  { label: "Modified", value: "Nov 12, 2026" },
  { label: "Location", value: "Marketing / Launch" },
]

export default function FileDetailsPopover() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2 border p-2.5">
      <FileTextIcon className="size-5 text-muted-foreground" />
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-xs font-medium">brand-guidelines.pdf</span>
        <span className="text-[11px] text-muted-foreground">Edited 3 days ago</span>
      </div>
      <Popover>
        <PopoverTrigger render={<Button variant="ghost" size="icon-sm" aria-label="File details" />}>
          <InfoIcon />
        </PopoverTrigger>
        <PopoverContent className="w-64" align="end">
          <PopoverTitle>File details</PopoverTitle>
          <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-xs">
            {details.map((d) => (
              <React.Fragment key={d.label}>
                <dt className="text-muted-foreground">{d.label}</dt>
                <dd className="truncate text-end">{d.value}</dd>
              </React.Fragment>
            ))}
          </dl>
          <Separator />
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <UsersIcon className="size-3.5" /> Shared with 6 people
            </span>
            <Button variant="link" size="xs">
              Manage
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}`,
  },
  {
    name: "TimePickerPopover",
    description: "Time picker with scrollable hour and minute columns plus an AM/PM toggle.",
    code: `
const hours = Array.from({ length: 12 }, (_, i) => i + 1)
const minutes = ["00", "15", "30", "45"]

export default function TimePickerPopover() {
  const [hour, setHour] = React.useState(9)
  const [minute, setMinute] = React.useState("30")
  const [period, setPeriod] = React.useState("AM")

  return (
    <div className="flex w-full max-w-[12rem] flex-col gap-1.5">
      <Label>Start time</Label>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" className="justify-start font-normal tabular-nums" />}>
          <ClockIcon data-icon="inline-start" />
          {hour}:{minute} {period}
        </PopoverTrigger>
        <PopoverContent className="w-auto flex-row gap-1 p-1.5" align="start">
          <div className="flex h-44 flex-col overflow-y-auto">
            {hours.map((h) => (
              <Button key={h} size="sm" variant={h === hour ? "default" : "ghost"} className="tabular-nums" onClick={() => setHour(h)}>
                {String(h).padStart(2, "0")}
              </Button>
            ))}
          </div>
          <div className="flex flex-col">
            {minutes.map((m) => (
              <Button key={m} size="sm" variant={m === minute ? "default" : "ghost"} className="tabular-nums" onClick={() => setMinute(m)}>
                {m}
              </Button>
            ))}
          </div>
          <div className="flex flex-col">
            {["AM", "PM"].map((p) => (
              <Button key={p} size="sm" variant={p === period ? "default" : "ghost"} onClick={() => setPeriod(p)}>
                {p}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}`,
  },
  {
    name: "TimezonePopover",
    description: "Timezone selector listing zones with their current local time.",
    code: `
const zones = [
  { id: "America/Los_Angeles", label: "Pacific Time" },
  { id: "America/New_York", label: "Eastern Time" },
  { id: "Europe/London", label: "London" },
  { id: "Europe/Berlin", label: "Central Europe" },
  { id: "Asia/Kolkata", label: "India" },
  { id: "Asia/Tokyo", label: "Tokyo" },
]

const now = new Date(Date.UTC(2026, 10, 15, 16, 0))
const timeIn = (zone: string) => now.toLocaleTimeString("en-US", { timeZone: zone, hour: "numeric", minute: "2-digit" })

export default function TimezonePopover() {
  const [zone, setZone] = React.useState(zones[1]!.id)
  const current = zones.find((z) => z.id === zone)!

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <GlobeIcon data-icon="inline-start" />
        {current.label}
      </PopoverTrigger>
      <PopoverContent className="w-64" align="start">
        <PopoverHeader>
          <PopoverTitle>Timezone</PopoverTitle>
          <PopoverDescription>Meeting times are shown in this zone.</PopoverDescription>
        </PopoverHeader>
        <RadioGroup value={zone} onValueChange={(value) => setZone(String(value))} className="gap-0">
          {zones.map((z) => (
            <Label key={z.id} className="flex items-center gap-2 px-1 py-1.5 font-normal hover:bg-muted">
              <RadioGroupItem value={z.id} />
              <span className="flex-1">{z.label}</span>
              <span className="text-[11px] text-muted-foreground tabular-nums">{timeIn(z.id)}</span>
            </Label>
          ))}
        </RadioGroup>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "WorkspaceSwitcherPopover",
    description: "Sidebar workspace switcher listing workspaces with plans and a create action.",
    code: `
const workspaces = [
  { id: "acme", name: "Northwind Studio", plan: "Business", tone: "from-indigo-400 to-sky-400" },
  { id: "side", name: "Weekend Builds", plan: "Free", tone: "from-amber-400 to-rose-400" },
  { id: "client", name: "Harborline Co-op", plan: "Pro", tone: "from-emerald-400 to-teal-400" },
]

export default function WorkspaceSwitcherPopover() {
  const [active, setActive] = React.useState("acme")
  const [open, setOpen] = React.useState(false)
  const current = workspaces.find((w) => w.id === active)!

  return (
    <div className="w-full max-w-[15rem]">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger render={<Button variant="outline" className="h-auto w-full justify-start gap-2 p-2" />}>
          <span className={cn("size-7 shrink-0 bg-gradient-to-br", current.tone)} />
          <span className="flex min-w-0 flex-1 flex-col items-start">
            <span className="w-full truncate text-start text-xs font-medium">{current.name}</span>
            <span className="text-[11px] font-normal text-muted-foreground">{current.plan}</span>
          </span>
          <ChevronsUpDownIcon data-icon="inline-end" />
        </PopoverTrigger>
        <PopoverContent className="w-(--anchor-width) min-w-60 gap-1 p-1" align="start">
          <span className="px-2 pt-1 text-[11px] text-muted-foreground">Workspaces</span>
          {workspaces.map((w) => (
            <Button
              key={w.id}
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => (setActive(w.id), setOpen(false))}
            >
              <span className={cn("size-4 shrink-0 bg-gradient-to-br", w.tone)} />
              <span className="flex-1 truncate text-start">{w.name}</span>
              {w.id === active && <CheckIcon />}
            </Button>
          ))}
          <Separator />
          <Button variant="ghost" size="sm" className="justify-start">
            <PlusIcon data-icon="inline-start" /> New workspace
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  )
}`,
  },
  {
    name: "StorageUsagePopover",
    description: "Storage meter button that opens a usage breakdown by file type with an upgrade link.",
    code: `
const breakdown = [
  { label: "Videos", gb: 41.2, color: "bg-violet-500" },
  { label: "Images", gb: 18.6, color: "bg-sky-500" },
  { label: "Documents", gb: 7.9, color: "bg-emerald-500" },
  { label: "Other", gb: 3.1, color: "bg-amber-500" },
]
const LIMIT = 100
const used = breakdown.reduce((sum, b) => sum + b.gb, 0)

export default function StorageUsagePopover() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <HardDriveIcon data-icon="inline-start" />
        {used.toFixed(1)} / {LIMIT} GB
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <PopoverHeader>
          <PopoverTitle>Storage</PopoverTitle>
          <PopoverDescription>{(LIMIT - used).toFixed(1)} GB left on your plan.</PopoverDescription>
        </PopoverHeader>
        <div className="flex h-2 w-full overflow-hidden bg-muted">
          {breakdown.map((b) => (
            <span key={b.label} className={b.color} style={{ width: (b.gb / LIMIT) * 100 + "%" }} />
          ))}
        </div>
        <ul className="flex flex-col gap-1.5">
          {breakdown.map((b) => (
            <li key={b.label} className="flex items-center gap-2 text-xs">
              <span className={cn("size-2", b.color)} />
              <span className="flex-1">{b.label}</span>
              <span className="text-muted-foreground tabular-nums">{b.gb} GB</span>
            </li>
          ))}
        </ul>
        <Button size="sm" variant="secondary">
          Get more storage
        </Button>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "PasswordRequirementsPopover",
    description: "Password field with a popover checklist that updates live as rules are met.",
    code: `
const rules = [
  { label: "At least 12 characters", test: (v: string) => v.length >= 12 },
  { label: "One uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "One number", test: (v: string) => /[0-9]/.test(v) },
  { label: "One symbol", test: (v: string) => /[^A-Za-z0-9]/.test(v) },
]

export default function PasswordRequirementsPopover() {
  const [value, setValue] = React.useState("")
  const passed = rules.filter((r) => r.test(value)).length

  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <Label htmlFor="new-password">New password</Label>
        <Popover>
          <PopoverTrigger render={<Button variant="link" size="xs" />}>
            {passed}/{rules.length} requirements
          </PopoverTrigger>
          <PopoverContent className="w-60" side="right" align="start">
            <PopoverTitle>Password must have</PopoverTitle>
            <ul className="flex flex-col gap-1.5">
              {rules.map((rule) => {
                const ok = rule.test(value)
                return (
                  <li key={rule.label} className={cn("flex items-center gap-2 text-xs", ok ? "text-foreground" : "text-muted-foreground")}>
                    {ok ? <CircleCheckIcon className="size-3.5 text-emerald-600 dark:text-emerald-400" /> : <CircleIcon className="size-3.5" />}
                    {rule.label}
                  </li>
                )
              })}
            </ul>
          </PopoverContent>
        </Popover>
      </div>
      <Input
        id="new-password"
        type="password"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        aria-invalid={value !== "" && passed < rules.length}
      />
    </div>
  )
}`,
  },
  {
    name: "ScheduleSendPopover",
    description: "Chat composer with a split send button whose popover offers scheduled send times.",
    code: `
const options = [
  { label: "Later today", detail: "6:00 PM" },
  { label: "Tomorrow morning", detail: "Mon 9:00 AM" },
  { label: "Next week", detail: "Mon, Nov 23 9:00 AM" },
]

export default function ScheduleSendPopover() {
  const [scheduled, setScheduled] = React.useState<string | null>(null)
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-2">
      <Textarea placeholder="Message #design-crit" className="min-h-16 resize-none border-0 shadow-none focus-visible:ring-0" />
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-muted-foreground">{scheduled ? "Scheduled for " + scheduled : "Press Enter to send"}</span>
        <ButtonGroup>
          <Button size="sm">
            <SendIcon data-icon="inline-start" /> Send
          </Button>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger render={<Button size="icon-sm" aria-label="Schedule send" />}>
              <ChevronDownIcon />
            </PopoverTrigger>
            <PopoverContent className="w-60 gap-1 p-1" side="top" align="end">
              <span className="px-2 pt-1 text-[11px] text-muted-foreground">Schedule message</span>
              {options.map((option) => (
                <Button
                  key={option.label}
                  variant="ghost"
                  size="sm"
                  className="justify-between"
                  onClick={() => (setScheduled(option.detail), setOpen(false))}
                >
                  {option.label}
                  <span className="text-muted-foreground">{option.detail}</span>
                </Button>
              ))}
              <Separator />
              <Button variant="ghost" size="sm" className="justify-start">
                <CalendarClockIcon data-icon="inline-start" /> Custom time
              </Button>
            </PopoverContent>
          </Popover>
        </ButtonGroup>
      </div>
    </div>
  )
}`,
  },
  {
    name: "MentionCardPopover",
    description: "Chat message where an @mention opens a profile card with status and message action.",
    code: `
export default function MentionCardPopover() {
  return (
    <div className="flex w-full max-w-sm gap-2 border p-3">
      <Avatar size="sm">
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <p className="text-xs leading-relaxed">
        <span className="font-medium">Lucia Romero</span>
        <br />
        Can{" "}
        <Popover>
          <PopoverTrigger
            render={<button type="button" className="bg-primary/10 px-0.5 font-medium text-primary hover:bg-primary/20" />}
          >
            @tomas
          </PopoverTrigger>
          <PopoverContent className="w-64" align="start">
            <div className="flex items-center gap-2.5">
              <Avatar size="lg">
                <AvatarFallback>TL</AvatarFallback>
                <AvatarBadge className="bg-emerald-500" />
              </Avatar>
              <div className="flex flex-col">
                <PopoverTitle>Tomas Lind</PopoverTitle>
                <PopoverDescription>Staff Engineer · Platform</PopoverDescription>
              </div>
            </div>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <ClockIcon className="size-3.5" /> 4:12 PM local time
            </p>
            <Button size="sm" variant="outline">
              <MessageCircleIcon data-icon="inline-start" /> Message
            </Button>
          </PopoverContent>
        </Popover>{" "}
        take a look at the flaky deploy step before Friday?
      </p>
    </div>
  )
}`,
  },
  {
    name: "ColumnVisibilityPopover",
    description: "Data table toolbar popover that toggles which columns are visible in the table.",
    code: `
const columns = [
  { id: "email", label: "Email" },
  { id: "role", label: "Role" },
  { id: "lastSeen", label: "Last seen" },
]

const rows = [
  { name: "Ines Duarte", email: "ines@quill.dev", role: "Owner", lastSeen: "Now" },
  { name: "Kofi Mensah", email: "kofi@quill.dev", role: "Member", lastSeen: "2h ago" },
  { name: "Aiko Mori", email: "aiko@quill.dev", role: "Member", lastSeen: "Yesterday" },
]

export default function ColumnVisibilityPopover() {
  const [visible, setVisible] = React.useState<string[]>(["email", "role"])

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex justify-end">
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>
            <Columns3Icon data-icon="inline-start" /> Columns
          </PopoverTrigger>
          <PopoverContent className="w-48" align="end">
            <PopoverTitle>Toggle columns</PopoverTitle>
            {columns.map((column) => (
              <Label key={column.id} className="flex items-center gap-2 font-normal">
                <Checkbox
                  checked={visible.includes(column.id)}
                  onCheckedChange={(checked) =>
                    setVisible((prev) => (checked ? [...prev, column.id] : prev.filter((c) => c !== column.id)))
                  }
                />
                {column.label}
              </Label>
            ))}
          </PopoverContent>
        </Popover>
      </div>
      <div className="border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              {columns.filter((c) => visible.includes(c.id)).map((c) => (
                <TableHead key={c.id}>{c.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="font-medium">{row.name}</TableCell>
                {columns.filter((c) => visible.includes(c.id)).map((c) => (
                  <TableCell key={c.id} className="text-muted-foreground">
                    {row[c.id as keyof typeof row]}
                  </TableCell>
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
    name: "ExportDataPopover",
    description: "Export popover with format choice, options, and a loading state while the file is prepared.",
    code: `
export default function ExportDataPopover() {
  const [format, setFormat] = React.useState("csv")
  const [status, setStatus] = React.useState<"idle" | "loading" | "done">("idle")

  return (
    <Popover onOpenChangeComplete={(open) => !open && setStatus("idle")}>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <DownloadIcon data-icon="inline-start" /> Export
      </PopoverTrigger>
      <PopoverContent className="w-64" align="end">
        <PopoverHeader>
          <PopoverTitle>Export 1,284 orders</PopoverTitle>
          <PopoverDescription>Filters from the current view are applied.</PopoverDescription>
        </PopoverHeader>
        <RadioGroup value={format} onValueChange={(value) => setFormat(String(value))} className="grid grid-cols-3 gap-1.5">
          {["csv", "xlsx", "json"].map((f) => (
            <Label
              key={f}
              className="flex items-center justify-center gap-1.5 border p-2 font-normal uppercase has-data-checked:border-primary has-data-checked:bg-primary/5"
            >
              <RadioGroupItem value={f} className="sr-only" />
              {f}
            </Label>
          ))}
        </RadioGroup>
        <Label className="flex items-center gap-2 font-normal">
          <Checkbox defaultChecked /> Include column headers
        </Label>
        <Button
          size="sm"
          disabled={status === "loading"}
          onClick={() => {
            setStatus("loading")
            window.setTimeout(() => setStatus("done"), 1200)
          }}
        >
          {status === "loading" ? (
            <>
              <Spinner data-icon="inline-start" /> Preparing...
            </>
          ) : status === "done" ? (
            <>
              <CheckIcon data-icon="inline-start" /> Ready, downloading
            </>
          ) : (
            "Export as " + format.toUpperCase()
          )}
        </Button>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "ProductTourPopover",
    description: "Controlled onboarding tour that moves one popover between toolbar targets step by step.",
    code: `
const steps = [
  { target: "search", title: "Search everything", body: "Find docs, people, and tasks from one place." },
  { target: "create", title: "Create quickly", body: "Start a doc, task, or board in a click." },
  { target: "inbox", title: "Stay in the loop", body: "Mentions and assignments land in your inbox." },
]

const targets = [
  { id: "search", icon: SearchIcon, label: "Search" },
  { id: "create", icon: PlusIcon, label: "Create" },
  { id: "inbox", icon: InboxIcon, label: "Inbox" },
]

export default function ProductTourPopover() {
  const [step, setStep] = React.useState<number | null>(0)

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-3">
      <div className="flex gap-2 border p-2">
        {targets.map((t, i) => (
          <Popover key={t.id} open={step === i} onOpenChange={(open) => !open && setStep(null)}>
            <PopoverTrigger render={<Button variant={step === i ? "secondary" : "ghost"} size="icon" aria-label={t.label} />}>
              <t.icon />
            </PopoverTrigger>
            <PopoverContent className="w-60" sideOffset={8}>
              <PopoverHeader>
                <span className="text-[11px] text-muted-foreground">
                  Step {i + 1} of {steps.length}
                </span>
                <PopoverTitle>{steps[i]!.title}</PopoverTitle>
                <PopoverDescription>{steps[i]!.body}</PopoverDescription>
              </PopoverHeader>
              <div className="flex justify-between">
                <Button variant="ghost" size="sm" onClick={() => setStep(null)}>
                  Skip
                </Button>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm" disabled={i === 0} onClick={() => setStep(i - 1)}>
                    Back
                  </Button>
                  <Button size="sm" onClick={() => setStep(i === steps.length - 1 ? null : i + 1)}>
                    {i === steps.length - 1 ? "Done" : "Next"}
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
      {step === null && (
        <Button variant="link" size="sm" onClick={() => setStep(0)}>
          Restart tour
        </Button>
      )}
    </div>
  )
}`,
  },
  {
    name: "UpgradeLockedFeaturePopover",
    description: "Locked premium setting whose lock icon opens an upgrade prompt instead of the control.",
    code: `
export default function UpgradeLockedFeaturePopover() {
  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      <div className="flex items-center justify-between p-3">
        <div className="flex flex-col">
          <span className="text-xs font-medium">Two-factor authentication</span>
          <span className="text-[11px] text-muted-foreground">Required for all members</span>
        </div>
        <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between p-3">
        <div className="flex flex-col">
          <span className="text-xs font-medium">SAML single sign-on</span>
          <span className="text-[11px] text-muted-foreground">Connect your identity provider</span>
        </div>
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="xs" />}>
            <LockIcon data-icon="inline-start" /> Business
          </PopoverTrigger>
          <PopoverContent className="w-64" align="end">
            <div className="flex size-8 items-center justify-center bg-gradient-to-br from-violet-500 to-indigo-500 text-white">
              <SparklesIcon className="size-4" />
            </div>
            <PopoverHeader>
              <PopoverTitle>Available on Business</PopoverTitle>
              <PopoverDescription>
                Upgrade to enforce SSO, provision users automatically, and get audit logs.
              </PopoverDescription>
            </PopoverHeader>
            <div className="flex gap-2">
              <Button size="sm" className="flex-1">
                Upgrade
              </Button>
              <Button size="sm" variant="ghost" className="flex-1">
                Compare plans
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}`,
  },
  {
    name: "NestedFilterPopover",
    description: "Filter builder popover that opens a nested popover to pick the date condition.",
    code: `
const ranges = ["Today", "Last 7 days", "This month", "This quarter"]

export default function NestedFilterPopover() {
  const [range, setRange] = React.useState("Last 7 days")
  const [innerOpen, setInnerOpen] = React.useState(false)

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <FilterIcon data-icon="inline-start" /> Filters
      </PopoverTrigger>
      <PopoverContent className="w-72" align="start">
        <PopoverTitle>Show tasks where</PopoverTitle>
        <div className="flex items-center gap-2 text-xs">
          <span className="w-16 text-muted-foreground">Created</span>
          <Popover open={innerOpen} onOpenChange={setInnerOpen}>
            <PopoverTrigger render={<Button variant="outline" size="sm" className="flex-1 justify-between" />}>
              {range}
              <ChevronRightIcon data-icon="inline-end" />
            </PopoverTrigger>
            <PopoverContent side="right" align="start" className="w-40 gap-0 p-1">
              {ranges.map((r) => (
                <Button key={r} variant="ghost" size="sm" className="justify-between" onClick={() => (setRange(r), setInnerOpen(false))}>
                  {r}
                  {r === range && <CheckIcon />}
                </Button>
              ))}
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="w-16 text-muted-foreground">Owner</span>
          <Badge variant="secondary">Me</Badge>
        </div>
        <Separator />
        <Button size="sm">Apply filters</Button>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "HoverOpenPopover",
    description: "Popover that opens on hover with a delay to preview a linked repository.",
    code: `
export default function HoverOpenPopover() {
  return (
    <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
      The fix landed in{" "}
      <Popover>
        <PopoverTrigger
          openOnHover
          delay={250}
          render={<a href="#" className="font-medium text-foreground underline underline-offset-2" />}
        >
          northwind/ledger
        </PopoverTrigger>
        <PopoverContent className="w-64" align="start">
          <div className="flex items-center gap-2">
            <FolderGit2Icon className="size-4" />
            <PopoverTitle>northwind/ledger</PopoverTitle>
          </div>
          <PopoverDescription>Double-entry accounting service for invoices and payouts.</PopoverDescription>
          <div className="flex gap-3 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <StarIcon className="size-3" /> 1.2k
            </span>
            <span className="flex items-center gap-1">
              <GitForkIcon className="size-3" /> 86
            </span>
            <span className="flex items-center gap-1">
              <span className="size-2 rounded-full bg-sky-500" /> TypeScript
            </span>
          </div>
        </PopoverContent>
      </Popover>{" "}
      yesterday and ships with the next release.
    </p>
  )
}`,
  },
  {
    name: "CommentPinPopover",
    description: "Design canvas comment pin that opens a thread with replies and a reply box.",
    code: `
const thread = [
  { author: "Maya Chen", body: "Can this headline be one line on mobile?", time: "10:24" },
  { author: "Leo Varga", body: "Trimmed it to 32 characters, check now.", time: "10:31" },
]

export default function CommentPinPopover() {
  const [replies, setReplies] = React.useState(thread)
  const [draft, setDraft] = React.useState("")

  return (
    <div className="relative aspect-video w-full max-w-sm border bg-gradient-to-br from-muted to-background">
      <div className="absolute inset-x-6 top-6 flex flex-col gap-2">
        <div className="h-3 w-3/4 bg-foreground/15" />
        <div className="h-2 w-1/2 bg-foreground/10" />
      </div>
      <Popover>
        <PopoverTrigger
          render={
            <button
              type="button"
              aria-label="Open comment thread"
              className="absolute top-4 left-[70%] flex size-7 items-center justify-center rounded-full rounded-bl-none bg-primary text-[10px] font-semibold text-primary-foreground shadow"
            />
          }
        >
          MC
        </PopoverTrigger>
        <PopoverContent side="right" align="start" className="w-64">
          <div className="flex flex-col gap-2.5">
            {replies.map((reply, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="text-xs font-medium">
                  {reply.author} <span className="font-normal text-muted-foreground">{reply.time}</span>
                </span>
                <p className="text-xs text-muted-foreground">{reply.body}</p>
              </div>
            ))}
          </div>
          <form
            className="flex gap-1.5"
            onSubmit={(event) => {
              event.preventDefault()
              if (!draft.trim()) return
              setReplies((prev) => [...prev, { author: "You", body: draft.trim(), time: "now" }])
              setDraft("")
            }}
          >
            <Input placeholder="Reply" value={draft} onChange={(e) => setDraft(e.target.value)} className="h-7 flex-1" />
            <Button type="submit" size="icon-sm" aria-label="Send reply" disabled={!draft.trim()}>
              <ArrowUpIcon />
            </Button>
          </form>
          <Button variant="ghost" size="xs" className="self-start">
            <CheckIcon data-icon="inline-start" /> Resolve
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  )
}`,
  },
  {
    name: "AvatarStackPopover",
    description: "Overflowing avatar stack where the +N count opens the full member list.",
    code: `
const members = [
  { name: "Rhea Kapoor", role: "Owner" },
  { name: "Dario Mendes", role: "Editor" },
  { name: "Hana Sato", role: "Editor" },
  { name: "Owen Brandt", role: "Viewer" },
  { name: "Grace Liu", role: "Viewer" },
  { name: "Ben Adler", role: "Viewer" },
  { name: "Farah Idris", role: "Editor" },
]

const initials = (name: string) => name.split(" ").map((p) => p[0]).join("")

export default function AvatarStackPopover() {
  const shown = members.slice(0, 3)
  const rest = members.length - shown.length

  return (
    <div className="flex items-center gap-2">
      <AvatarGroup>
        {shown.map((m) => (
          <Avatar key={m.name}>
            <AvatarFallback>{initials(m.name)}</AvatarFallback>
          </Avatar>
        ))}
        <Popover>
          <PopoverTrigger
            render={<button type="button" aria-label={"Show all " + members.length + " members"} className="rounded-full" />}
          >
            <AvatarGroupCount className="hover:bg-accent">+{rest}</AvatarGroupCount>
          </PopoverTrigger>
          <PopoverContent className="w-60" align="start">
            <PopoverTitle>{members.length} members</PopoverTitle>
            <ul className="flex max-h-48 flex-col gap-2 overflow-y-auto">
              {members.map((m) => (
                <li key={m.name} className="flex items-center gap-2 text-xs">
                  <Avatar size="sm">
                    <AvatarFallback>{initials(m.name)}</AvatarFallback>
                  </Avatar>
                  <span className="flex-1">{m.name}</span>
                  <span className="text-[11px] text-muted-foreground">{m.role}</span>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      </AvatarGroup>
    </div>
  )
}`,
  },
  {
    name: "CouponCodePopover",
    description: "Checkout summary with a promo code popover that validates codes and shows errors.",
    code: `
const CODES: Record<string, number> = { WELCOME10: 10, FALL25: 25 }
const SUBTOTAL = 148

export default function CouponCodePopover() {
  const [open, setOpen] = React.useState(false)
  const [code, setCode] = React.useState("")
  const [error, setError] = React.useState<string | null>(null)
  const [applied, setApplied] = React.useState<string | null>(null)
  const discount = applied ? (SUBTOTAL * CODES[applied]!) / 100 : 0

  return (
    <div className="flex w-full max-w-xs flex-col gap-2 border p-4 text-xs">
      <div className="flex justify-between">
        <span className="text-muted-foreground">Subtotal</span>
        <span className="tabular-nums">\${SUBTOTAL.toFixed(2)}</span>
      </div>
      <div className="flex items-center justify-between">
        {applied ? (
          <Badge variant="secondary">
            <TicketPercentIcon /> {applied}
          </Badge>
        ) : (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger render={<Button variant="link" size="xs" className="px-0" />}>Add promo code</PopoverTrigger>
            <PopoverContent className="w-64" align="start">
              <form
                className="flex flex-col gap-2"
                onSubmit={(event) => {
                  event.preventDefault()
                  const normalized = code.trim().toUpperCase()
                  if (!CODES[normalized]) {
                    setError("That code is invalid or has expired.")
                    return
                  }
                  setApplied(normalized)
                  setError(null)
                  setOpen(false)
                }}
              >
                <Field data-invalid={!!error}>
                  <FieldLabel htmlFor="promo">Promo code</FieldLabel>
                  <Input
                    id="promo"
                    placeholder="WELCOME10"
                    value={code}
                    aria-invalid={!!error}
                    onChange={(event) => (setCode(event.target.value), setError(null))}
                    className="h-8 uppercase"
                  />
                  {error && <FieldError>{error}</FieldError>}
                </Field>
                <Button type="submit" size="sm" disabled={!code.trim()}>
                  Apply
                </Button>
              </form>
            </PopoverContent>
          </Popover>
        )}
        {applied && <span className="text-emerald-600 tabular-nums dark:text-emerald-400">-\${discount.toFixed(2)}</span>}
      </div>
      <Separator />
      <div className="flex justify-between text-sm font-medium">
        <span>Total</span>
        <span className="tabular-nums">\${(SUBTOTAL - discount).toFixed(2)}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "GuestCountPopover",
    description: "Booking guest selector with steppers for adults, children, and pets and min/max limits.",
    code: `
const groups = [
  { id: "adults", label: "Adults", hint: "Ages 13+", min: 1, max: 8 },
  { id: "children", label: "Children", hint: "Ages 2-12", min: 0, max: 6 },
  { id: "pets", label: "Pets", hint: "Service animals welcome", min: 0, max: 2 },
] as const

type GroupId = (typeof groups)[number]["id"]

export default function GuestCountPopover() {
  const [counts, setCounts] = React.useState<Record<GroupId, number>>({ adults: 2, children: 0, pets: 0 })
  const total = counts.adults + counts.children

  const change = (id: GroupId, delta: number, min: number, max: number) =>
    setCounts((prev) => ({ ...prev, [id]: Math.min(max, Math.max(min, prev[id] + delta)) }))

  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <Label>Guests</Label>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" className="justify-start font-normal" />}>
          <UsersIcon data-icon="inline-start" />
          {total} {total === 1 ? "guest" : "guests"}
          {counts.pets > 0 && ", " + counts.pets + (counts.pets === 1 ? " pet" : " pets")}
        </PopoverTrigger>
        <PopoverContent className="w-72" align="start">
          {groups.map((g) => (
            <div key={g.id} className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-medium">{g.label}</span>
                <span className="text-[11px] text-muted-foreground">{g.hint}</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="rounded-full"
                  aria-label={"Fewer " + g.label.toLowerCase()}
                  disabled={counts[g.id] <= g.min}
                  onClick={() => change(g.id, -1, g.min, g.max)}
                >
                  <MinusIcon />
                </Button>
                <span className="w-4 text-center text-xs tabular-nums">{counts[g.id]}</span>
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="rounded-full"
                  aria-label={"More " + g.label.toLowerCase()}
                  disabled={counts[g.id] >= g.max}
                  onClick={() => change(g.id, 1, g.min, g.max)}
                >
                  <PlusIcon />
                </Button>
              </div>
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  )
}`,
  },
]

export default examples
