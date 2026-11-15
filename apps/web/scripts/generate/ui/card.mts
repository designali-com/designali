import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "RevenueStatCard",
    description: "KPI card with a headline metric, trend badge in the card action and comparison footer.",
    code: `
export default function RevenueStatCard() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardDescription>Monthly recurring revenue</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums">$48,290</CardTitle>
        <CardAction>
          <Badge variant="outline" className="text-emerald-600 dark:text-emerald-400">
            <TrendingUpIcon data-icon="inline-start" />
            +12.4%
          </Badge>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1">
        <span className="flex items-center gap-1 font-medium">
          Up $5,340 from last month <TrendingUpIcon className="size-3.5" />
        </span>
        <span className="text-muted-foreground">142 new subscriptions, 9 churned</span>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "KpiStatGrid",
    description: "Grid of small-size cards summarizing four dashboard metrics with icons and deltas.",
    code: `
const stats = [
  { label: "Active users", value: "12,480", delta: "+8.1%", up: true, icon: UsersIcon },
  { label: "Conversion", value: "3.42%", delta: "+0.4%", up: true, icon: TargetIcon },
  { label: "Avg. session", value: "4m 12s", delta: "-6.0%", up: false, icon: TimerIcon },
  { label: "Refunds", value: "$1,204", delta: "-2.3%", up: true, icon: ReceiptIcon },
]

export default function KpiStatGrid() {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-3">
      {stats.map((s) => (
        <Card key={s.label} size="sm">
          <CardHeader>
            <CardDescription className="flex items-center gap-1.5">
              <s.icon className="size-3.5" />
              {s.label}
            </CardDescription>
            <CardTitle className="text-lg font-semibold tabular-nums">{s.value}</CardTitle>
          </CardHeader>
          <CardContent>
            <span className={cn("text-xs font-medium", s.up ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400")}>
              {s.delta}
            </span>
            <span className="text-xs text-muted-foreground"> vs last week</span>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}`,
  },
  {
    name: "PricingPlanCard",
    description: "Pricing card with a monthly or yearly toggle, feature checklist and upgrade button.",
    code: `
const features = ["Unlimited projects", "Up to 25 editors", "Version history (90 days)", "Priority email support", "SSO with Google and Okta"]

export default function PricingPlanCard() {
  const [yearly, setYearly] = React.useState(true)
  const price = yearly ? 24 : 29

  return (
    <Card className="w-full max-w-xs ring-2 ring-primary">
      <CardHeader>
        <CardTitle>Team</CardTitle>
        <CardDescription>For growing product teams.</CardDescription>
        <CardAction>
          <Badge>Most popular</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-end gap-1">
          <span className="text-3xl font-semibold tabular-nums">{"$" + price}</span>
          <span className="pb-1 text-muted-foreground">per editor / month</span>
        </div>
        <label className="flex items-center gap-2 text-xs">
          <Switch checked={yearly} onCheckedChange={setYearly} />
          Billed yearly <span className="text-emerald-600 dark:text-emerald-400">save 17%</span>
        </label>
        <ul className="grid gap-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <CheckIcon className="size-3.5 text-primary" />
              {f}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Upgrade to Team</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "UsageBillingCard",
    description: "Usage-based billing card with metered progress bars and a projected invoice total.",
    code: `
const meters = [
  { label: "API requests", used: 812000, limit: 1000000, unit: "" },
  { label: "Storage", used: 42, limit: 50, unit: " GB" },
  { label: "Build minutes", used: 1350, limit: 3000, unit: " min" },
]

export default function UsageBillingCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Current usage</CardTitle>
        <CardDescription>Billing period resets in 9 days.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            View invoices
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-4">
        {meters.map((m) => {
          const pct = Math.round((m.used / m.limit) * 100)
          return (
            <div key={m.label} className="grid gap-1.5">
              <div className="flex justify-between text-xs">
                <span>{m.label}</span>
                <span className={cn("tabular-nums text-muted-foreground", pct >= 80 && "text-amber-600 dark:text-amber-400")}>
                  {m.used.toLocaleString()}
                  {m.unit} / {m.limit.toLocaleString()}
                  {m.unit}
                </span>
              </div>
              <Progress value={pct} aria-label={m.label} />
            </div>
          )
        })}
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-muted-foreground">Projected invoice</span>
        <span className="text-sm font-semibold tabular-nums">$186.40</span>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "CreatorProfileCard",
    description: "Profile card with a gradient banner, avatar, bio, follower stats and follow toggle.",
    code: `
const stats = [
  { label: "Posts", value: "214" },
  { label: "Followers", value: "18.2k" },
  { label: "Following", value: "391" },
]

export default function CreatorProfileCard() {
  const [following, setFollowing] = React.useState(false)

  return (
    <Card className="w-full max-w-xs pt-0">
      <div className="h-20 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400" />
      <CardHeader className="-mt-10">
        <Avatar className="size-16 ring-4 ring-card">
          <AvatarFallback className="text-base">LM</AvatarFallback>
        </Avatar>
        <CardTitle className="mt-2 text-base">Lena Moreau</CardTitle>
        <CardDescription>Type designer in Lyon. Making variable fonts and sharing process notes.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-3 divide-x border-y py-3 text-center">
        {stats.map((s) => (
          <div key={s.label} className="grid">
            <span className="text-sm font-semibold">{s.value}</span>
            <span className="text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </CardContent>
      <CardFooter className="gap-2 border-t-0 pt-0">
        <Button className="flex-1" variant={following ? "outline" : "default"} onClick={() => setFollowing(!following)}>
          {following ? "Following" : "Follow"}
        </Button>
        <Button variant="outline" size="icon" aria-label="Message">
          <MessageCircleIcon />
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "TeamMembersCard",
    description: "Workspace members card listing people with role selects and an invite action.",
    code: `
const members = [
  { name: "Amara Okafor", email: "amara@lumen.studio", role: "owner" },
  { name: "Theo Lindqvist", email: "theo@lumen.studio", role: "admin" },
  { name: "Sofia Marin", email: "sofia@lumen.studio", role: "editor" },
  { name: "Kenji Watanabe", email: "kenji@lumen.studio", role: "viewer" },
]

export default function TeamMembersCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Team members</CardTitle>
        <CardDescription>Invite people and manage their access.</CardDescription>
        <CardAction>
          <Button size="sm">
            <UserPlusIcon data-icon="inline-start" />
            Invite
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-3">
        {members.map((m) => (
          <div key={m.email} className="flex items-center gap-3">
            <Avatar className="size-8">
              <AvatarFallback>{m.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
            </Avatar>
            <div className="grid min-w-0 flex-1">
              <span className="truncate font-medium">{m.name}</span>
              <span className="truncate text-muted-foreground">{m.email}</span>
            </div>
            <NativeSelect size="sm" defaultValue={m.role} disabled={m.role === "owner"} aria-label={"Role for " + m.name}>
              <NativeSelectOption value="owner">Owner</NativeSelectOption>
              <NativeSelectOption value="admin">Admin</NativeSelectOption>
              <NativeSelectOption value="editor">Editor</NativeSelectOption>
              <NativeSelectOption value="viewer">Viewer</NativeSelectOption>
            </NativeSelect>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "NotificationSettingsCard",
    description: "Settings card with labelled switches for notification channels and a save footer.",
    code: `
const channels = [
  { id: "mentions", label: "Mentions", description: "When someone @mentions you in a comment.", on: true },
  { id: "digest", label: "Weekly digest", description: "A Monday summary of project activity.", on: true },
  { id: "billing", label: "Billing alerts", description: "Failed payments and upcoming renewals.", on: false },
  { id: "product", label: "Product updates", description: "New features and occasional tips.", on: false },
]

export default function NotificationSettingsCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="border-b">
        <CardTitle>Email notifications</CardTitle>
        <CardDescription>Choose what lands in your inbox.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {channels.map((c) => (
          <Field key={c.id} orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor={c.id}>{c.label}</FieldLabel>
              <FieldDescription>{c.description}</FieldDescription>
            </FieldContent>
            <Switch id={c.id} defaultChecked={c.on} />
          </Field>
        ))}
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="ghost" size="sm">
          Reset
        </Button>
        <Button size="sm">Save preferences</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "DangerZoneCard",
    description: "Destructive card that requires typing the workspace name before deletion is enabled.",
    code: `
const workspace = "acme-marketing"

export default function DangerZoneCard() {
  const [value, setValue] = React.useState("")

  return (
    <Card className="w-full max-w-sm ring-destructive/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-destructive">
          <TriangleAlertIcon className="size-4" />
          Delete workspace
        </CardTitle>
        <CardDescription>
          This permanently removes 38 projects, 1,204 files and all member access. This can&apos;t be undone.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Field>
          <FieldLabel htmlFor="confirm-name">
            Type <code className="bg-muted px-1 font-mono">{workspace}</code> to confirm
          </FieldLabel>
          <Input id="confirm-name" value={value} onChange={(e) => setValue(e.target.value)} autoComplete="off" />
        </Field>
      </CardContent>
      <CardFooter className="justify-end bg-destructive/5">
        <Button variant="destructive" disabled={value !== workspace}>
          <Trash2Icon data-icon="inline-start" />
          Delete forever
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "ProductCard",
    description: "E-commerce product card with a gradient media area, rating, color swatches and add-to-cart.",
    code: `
const colors = [
  { name: "Sand", className: "bg-amber-200" },
  { name: "Sage", className: "bg-emerald-300" },
  { name: "Slate", className: "bg-slate-500" },
]

export default function ProductCard() {
  const [color, setColor] = React.useState("Sand")

  return (
    <Card className="w-full max-w-64 pt-0">
      <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-amber-100 to-orange-200 dark:from-amber-900/40 dark:to-orange-900/40">
        <ShirtIcon className="size-20 text-amber-900/40 dark:text-amber-100/40" strokeWidth={1} />
        <Badge className="absolute start-3 top-3">-20%</Badge>
        <Button variant="secondary" size="icon-sm" aria-label="Save to wishlist" className="absolute end-3 top-3">
          <HeartIcon />
        </Button>
      </div>
      <CardHeader>
        <CardTitle>Everyday Linen Shirt</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <StarIcon className="size-3 fill-amber-400 text-amber-400" /> 4.7 · 312 reviews
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div className="flex items-baseline gap-1.5">
          <span className="text-base font-semibold">$56</span>
          <span className="text-muted-foreground line-through">$70</span>
        </div>
        <div className="flex gap-1.5">
          {colors.map((c) => (
            <button
              key={c.name}
              type="button"
              aria-label={c.name}
              aria-pressed={color === c.name}
              onClick={() => setColor(c.name)}
              className={cn("size-5 ring-offset-2 ring-offset-card", c.className, color === c.name && "ring-2 ring-foreground")}
            />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <ShoppingBagIcon data-icon="inline-start" />
          Add to bag
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "OrderSummaryCard",
    description: "Checkout order summary card with line items, discount code, totals and pay button.",
    code: `
const items = [
  { name: "Ceramic pour-over set", qty: 1, price: 64 },
  { name: "Single-origin beans, 250g", qty: 2, price: 18 },
  { name: "Gooseneck kettle", qty: 1, price: 89 },
]

export default function OrderSummaryCard() {
  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0)
  const discount = 18.9
  const shipping = 0
  const total = subtotal - discount + shipping

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Order summary</CardTitle>
        <CardAction>
          <span className="text-muted-foreground">{items.length} items</span>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-3">
        {items.map((i) => (
          <div key={i.name} className="flex justify-between gap-4">
            <span>
              {i.name} <span className="text-muted-foreground">× {i.qty}</span>
            </span>
            <span className="tabular-nums">{"$" + (i.qty * i.price).toFixed(2)}</span>
          </div>
        ))}
        <Separator />
        <InputGroup>
          <InputGroupInput placeholder="Discount code" defaultValue="WELCOME10" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton>Apply</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <div className="grid gap-1.5 text-muted-foreground">
          <div className="flex justify-between"><span>Subtotal</span><span className="tabular-nums">{"$" + subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between text-emerald-600 dark:text-emerald-400"><span>Discount</span><span className="tabular-nums">{"-$" + discount.toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-3">
        <div className="flex justify-between text-sm font-semibold">
          <span>Total</span>
          <span className="tabular-nums">{"$" + total.toFixed(2)}</span>
        </div>
        <Button>
          <LockIcon data-icon="inline-start" />
          Pay securely
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "PaymentMethodCard",
    description: "Billing card showing a stylized credit card visual with default badge and edit actions.",
    code: `
export default function PaymentMethodCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Payment method</CardTitle>
        <CardDescription>Charged on the 1st of every month.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Replace
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="relative flex aspect-[1.6] max-w-64 flex-col justify-between overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-950 p-4 text-white">
          <div className="absolute -end-10 -top-10 size-32 rounded-full bg-white/10" />
          <div className="flex items-center justify-between">
            <NfcIcon className="size-5 opacity-80" />
            <span className="text-xs font-semibold tracking-widest">NOVA</span>
          </div>
          <div className="grid gap-2">
            <span className="font-mono text-sm tracking-widest">•••• •••• •••• 4821</span>
            <div className="flex justify-between text-[10px] uppercase opacity-80">
              <span>Daniel Kovac</span>
              <span>09/28</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="flex items-center gap-1.5">
          <ShieldCheckIcon className="size-3.5 text-emerald-500" />
          Default · verified
        </span>
        <Button variant="link" size="sm" className="px-0">
          Billing history
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "UpcomingEventCard",
    description: "Event card with a date block, location and time details, attendee avatars and RSVP.",
    code: `
const attendees = ["RS", "MJ", "AK", "TB"]

export default function UpcomingEventCard() {
  const [going, setGoing] = React.useState(false)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="grid-cols-[auto_1fr] gap-x-3">
        <div className="row-span-2 flex size-12 flex-col items-center justify-center border bg-muted/50">
          <span className="text-[10px] font-medium text-rose-500 uppercase">Mar</span>
          <span className="text-lg leading-none font-semibold">14</span>
        </div>
        <CardTitle>Spring product meetup</CardTitle>
        <CardDescription>Hosted by the Northside Design Guild</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2 text-muted-foreground">
        <span className="flex items-center gap-2"><ClockIcon className="size-3.5" /> 6:30 PM - 9:00 PM</span>
        <span className="flex items-center gap-2"><MapPinIcon className="size-3.5" /> The Foundry, 22 Mill Lane</span>
        <div className="flex items-center gap-2 pt-1">
          <AvatarGroup>
            {attendees.map((a) => (
              <Avatar key={a} size="sm">
                <AvatarFallback>{a}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
          <span>+42 going</span>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1" variant={going ? "secondary" : "default"} onClick={() => setGoing(!going)}>
          {going ? <CheckIcon data-icon="inline-start" /> : null}
          {going ? "You're going" : "RSVP"}
        </Button>
        <Button variant="outline" size="icon" aria-label="Share event">
          <Share2Icon />
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "TaskChecklistCard",
    description: "To-do card with checkable tasks, a completion count in the header and an add-task input.",
    code: `
const initial = [
  { id: 1, label: "Review onboarding copy", done: true },
  { id: 2, label: "Export icons for Android", done: false },
  { id: 3, label: "QA checkout on Safari", done: false },
  { id: 4, label: "Write release notes", done: false },
]

export default function TaskChecklistCard() {
  const [tasks, setTasks] = React.useState(initial)
  const [draft, setDraft] = React.useState("")
  const done = tasks.filter((t) => t.done).length

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Today</CardTitle>
        <CardDescription>
          {done} of {tasks.length} completed
        </CardDescription>
        <CardAction>
          <Progress value={(done / tasks.length) * 100} className="w-20" aria-label="Completion" />
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-2.5">
        {tasks.map((t) => (
          <label key={t.id} className="flex items-center gap-2.5">
            <Checkbox
              checked={t.done}
              onCheckedChange={(checked) => setTasks(tasks.map((x) => (x.id === t.id ? { ...x, done: checked === true } : x)))}
            />
            <span className={cn(t.done && "text-muted-foreground line-through")}>{t.label}</span>
          </label>
        ))}
      </CardContent>
      <CardFooter>
        <form
          className="flex w-full gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            if (!draft.trim()) return
            setTasks([...tasks, { id: tasks.length + 1, label: draft.trim(), done: false }])
            setDraft("")
          }}
        >
          <Input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Add a task" />
          <Button type="submit" size="icon" variant="outline" aria-label="Add task">
            <PlusIcon />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "ActivityFeedCard",
    description: "Activity timeline card with icon markers, actors and relative timestamps.",
    code: `
const activity = [
  { icon: GitPullRequestIcon, tone: "text-violet-500", who: "Iris Chen", what: "opened PR #482 Add usage alerts", when: "4m" },
  { icon: MessageSquareIcon, tone: "text-sky-500", who: "Marco Bianchi", what: "commented on Billing page redesign", when: "38m" },
  { icon: CircleCheckIcon, tone: "text-emerald-500", who: "Deploy bot", what: "shipped v2.14.0 to production", when: "2h" },
  { icon: UserPlusIcon, tone: "text-amber-500", who: "Hana Sato", what: "joined the Platform team", when: "1d" },
]

export default function ActivityFeedCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Recent activity</CardTitle>
        <CardAction>
          <Button variant="ghost" size="xs">View all</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ol className="relative grid gap-4 before:absolute before:inset-y-2 before:start-3 before:w-px before:bg-border">
          {activity.map((a) => (
            <li key={a.what} className="relative flex gap-3">
              <span className="z-10 flex size-6 shrink-0 items-center justify-center border bg-card">
                <a.icon className={cn("size-3.5", a.tone)} />
              </span>
              <p className="flex-1 pt-0.5">
                <span className="font-medium">{a.who}</span> <span className="text-muted-foreground">{a.what}</span>
              </p>
              <span className="pt-0.5 text-muted-foreground tabular-nums">{a.when}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "FileUploadCard",
    description: "Upload card with a dashed dropzone and in-progress and completed file rows.",
    code: `
const files = [
  { name: "brand-guidelines.pdf", size: "4.2 MB", progress: 100 },
  { name: "hero-video.mp4", size: "86.1 MB", progress: 64 },
]

export default function FileUploadCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Upload assets</CardTitle>
        <CardDescription>PDF, PNG, SVG or MP4 up to 200 MB.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <label className="flex cursor-pointer flex-col items-center gap-2 border border-dashed bg-muted/30 px-4 py-6 text-center hover:bg-muted/60">
          <UploadCloudIcon className="size-6 text-muted-foreground" />
          <span className="font-medium">Drop files here or click to browse</span>
          <input type="file" multiple className="sr-only" />
        </label>
        {files.map((f) => (
          <div key={f.name} className="flex items-center gap-3 border p-2">
            <FileIcon className="size-4 shrink-0 text-muted-foreground" />
            <div className="grid min-w-0 flex-1 gap-1">
              <div className="flex justify-between gap-2">
                <span className="truncate">{f.name}</span>
                <span className="shrink-0 text-muted-foreground">{f.progress === 100 ? f.size : f.progress + "%"}</span>
              </div>
              {f.progress < 100 ? <Progress value={f.progress} aria-label={"Uploading " + f.name} /> : null}
            </div>
            {f.progress === 100 ? (
              <CircleCheckIcon className="size-4 text-emerald-500" />
            ) : (
              <Button variant="ghost" size="icon-xs" aria-label="Cancel upload">
                <XIcon />
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "StorageUsageCard",
    description: "Storage card with a segmented usage bar broken down by file type and an upgrade link.",
    code: `
const segments = [
  { label: "Documents", gb: 18.4, className: "bg-sky-500" },
  { label: "Photos", gb: 31.2, className: "bg-violet-500" },
  { label: "Videos", gb: 22.7, className: "bg-amber-500" },
  { label: "Other", gb: 6.1, className: "bg-zinc-400" },
]
const total = 100

export default function StorageUsageCard() {
  const used = segments.reduce((s, x) => s + x.gb, 0)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HardDriveIcon className="size-4 text-muted-foreground" />
          Storage
        </CardTitle>
        <CardDescription>
          {used.toFixed(1)} GB of {total} GB used
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex h-2 w-full overflow-hidden bg-muted">
          {segments.map((s) => (
            <div key={s.label} className={s.className} style={{ width: (s.gb / total) * 100 + "%" }} />
          ))}
        </div>
        <ul className="grid grid-cols-2 gap-2">
          {segments.map((s) => (
            <li key={s.label} className="flex items-center gap-2">
              <span className={cn("size-2", s.className)} />
              <span className="flex-1">{s.label}</span>
              <span className="text-muted-foreground tabular-nums">{s.gb} GB</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-muted-foreground">{(total - used).toFixed(1)} GB free</span>
        <Button size="sm" variant="outline">
          Get 2 TB
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "SupportChatCard",
    description: "Support chat card with an agent header, message bubbles and a composer footer.",
    code: `
const initial = [
  { from: "agent", text: "Hi Noor! I see your export failed last night. Want me to re-run it?" },
  { from: "me", text: "Yes please, the Q3 report for the finance workspace." },
  { from: "agent", text: "Done. It should land in your inbox within 5 minutes." },
]

export default function SupportChatCard() {
  const [messages, setMessages] = React.useState(initial)
  const [draft, setDraft] = React.useState("")

  return (
    <Card className="w-full max-w-sm gap-0 pb-0">
      <CardHeader className="border-b">
        <div className="flex items-center gap-2.5">
          <Avatar className="size-8">
            <AvatarFallback>EV</AvatarFallback>
            <AvatarBadge className="bg-emerald-500" />
          </Avatar>
          <div className="grid">
            <CardTitle>Elliot Vance</CardTitle>
            <CardDescription>Support · usually replies in 2 min</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex max-h-56 flex-col gap-2 overflow-y-auto py-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={cn(
              "max-w-[80%] px-3 py-2",
              m.from === "me" ? "self-end bg-primary text-primary-foreground" : "self-start bg-muted"
            )}
          >
            {m.text}
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <form
          className="flex w-full gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            if (!draft.trim()) return
            setMessages([...messages, { from: "me", text: draft.trim() }])
            setDraft("")
          }}
        >
          <Input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Write a message..." />
          <Button type="submit" size="icon" aria-label="Send">
            <SendIcon />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "IntegrationCard",
    description: "App integration card with a glyph tile, connection status badge and enable switch.",
    code: `
export default function IntegrationCard() {
  const [connected, setConnected] = React.useState(true)

  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="grid-cols-[auto_1fr_auto] gap-x-3">
        <div className="row-span-2 flex size-10 items-center justify-center bg-gradient-to-br from-indigo-500 to-sky-500 text-white">
          <WebhookIcon className="size-5" />
        </div>
        <CardTitle>Relaybox</CardTitle>
        <CardDescription>Sync form submissions to your CRM.</CardDescription>
        <CardAction className="col-start-3">
          <Switch checked={connected} onCheckedChange={setConnected} aria-label="Enable Relaybox" />
        </CardAction>
      </CardHeader>
      <CardFooter className="justify-between">
        <Badge variant={connected ? "secondary" : "outline"} className="gap-1.5">
          <span className={cn("size-1.5 rounded-full", connected ? "bg-emerald-500" : "bg-muted-foreground")} />
          {connected ? "Connected" : "Disconnected"}
        </Badge>
        <Button variant="ghost" size="sm" disabled={!connected}>
          <Settings2Icon data-icon="inline-start" />
          Configure
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "OnboardingChecklistCard",
    description: "Getting-started card with numbered steps, completion states and an overall progress bar.",
    code: `
const steps = [
  { title: "Create your workspace", done: true },
  { title: "Invite your teammates", done: true },
  { title: "Connect a data source", done: false, cta: "Connect" },
  { title: "Publish your first dashboard", done: false, cta: "Start" },
]

export default function OnboardingChecklistCard() {
  const done = steps.filter((s) => s.done).length
  const next = steps.findIndex((s) => !s.done)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Get started</CardTitle>
        <CardDescription>
          {done} of {steps.length} steps complete
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-xs" aria-label="Dismiss">
            <XIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-3">
        <Progress value={(done / steps.length) * 100} aria-label="Onboarding progress" />
        <ol className="grid gap-1">
          {steps.map((s, i) => (
            <li key={s.title} className={cn("flex items-center gap-3 p-2", i === next && "bg-muted/60")}>
              {s.done ? (
                <CircleCheckIcon className="size-5 text-emerald-500" />
              ) : (
                <span className="flex size-5 items-center justify-center rounded-full border text-[10px]">{i + 1}</span>
              )}
              <span className={cn("flex-1", s.done && "text-muted-foreground line-through")}>{s.title}</span>
              {i === next ? <Button size="xs">{s.cta}</Button> : null}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "EmptyProjectsCard",
    description: "Card whose content is an empty state prompting the user to create a first project.",
    code: `
export default function EmptyProjectsCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="border-b">
        <CardTitle>Projects</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" disabled>
            <FilterIcon data-icon="inline-start" />
            Filter
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Empty className="py-6">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FolderOpenIcon />
            </EmptyMedia>
            <EmptyTitle>No projects yet</EmptyTitle>
            <EmptyDescription>Projects group your boards, docs and files. Create one or import from a template.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent className="flex-row justify-center gap-2">
            <Button size="sm">
              <PlusIcon data-icon="inline-start" />
              New project
            </Button>
            <Button size="sm" variant="outline">
              Browse templates
            </Button>
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "LoadingSkeletonCard",
    description: "Loading state card that swaps skeleton placeholders for content when data arrives.",
    code: `
export default function LoadingSkeletonCard() {
  const [loading, setLoading] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Card>
        <CardHeader>
          {loading ? (
            <>
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-48" />
            </>
          ) : (
            <>
              <CardTitle>Weekly report</CardTitle>
              <CardDescription>Nov 10 - Nov 16 · Growth team</CardDescription>
            </>
          )}
          <CardAction>{loading ? <Skeleton className="size-8" /> : <Badge variant="secondary">Ready</Badge>}</CardAction>
        </CardHeader>
        <CardContent className="grid gap-2">
          {loading ? (
            <>
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-2/3" />
            </>
          ) : (
            <>
              <div className="flex h-24 items-end gap-1.5 bg-muted/40 p-2">
                {[40, 65, 50, 80, 72, 90, 60].map((h, i) => (
                  <div key={i} className="flex-1 bg-primary/80" style={{ height: h + "%" }} />
                ))}
              </div>
              <p className="text-muted-foreground">Signups grew 18% week over week, driven by the referral launch.</p>
            </>
          )}
        </CardContent>
      </Card>
      <Button variant="outline" size="sm" className="self-center" onClick={() => setLoading(!loading)}>
        {loading ? "Finish loading" : "Show loading state"}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "ErrorStateCard",
    description: "Widget card in an error state with a message, error code and retry button that shows a spinner.",
    code: `
export default function ErrorStateCard() {
  const [retrying, setRetrying] = React.useState(false)

  return (
    <Card className="w-full max-w-sm ring-destructive/30">
      <CardHeader>
        <CardTitle>Conversion funnel</CardTitle>
        <CardDescription>Last 30 days</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2 py-6 text-center">
        <span className="flex size-10 items-center justify-center bg-destructive/10 text-destructive">
          <CloudOffIcon className="size-5" />
        </span>
        <span className="font-medium">Couldn&apos;t load this chart</span>
        <span className="text-muted-foreground">The analytics service timed out. Your data is safe.</span>
        <code className="bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">ERR_TIMEOUT · req_8f2c91</code>
      </CardContent>
      <CardFooter className="justify-center gap-2">
        <Button
          size="sm"
          disabled={retrying}
          onClick={() => {
            setRetrying(true)
            setTimeout(() => setRetrying(false), 1500)
          }}
        >
          {retrying ? <Spinner data-icon="inline-start" /> : <RefreshCwIcon data-icon="inline-start" />}
          {retrying ? "Retrying..." : "Try again"}
        </Button>
        <Button size="sm" variant="ghost">
          Status page
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "SelectablePlanCards",
    description: "Radio group where each option is a selectable card with a highlighted checked state.",
    code: `
const plans = [
  { value: "starter", name: "Starter", price: "$0", note: "1 project, community support" },
  { value: "pro", name: "Pro", price: "$18", note: "Unlimited projects, analytics" },
  { value: "business", name: "Business", price: "$49", note: "SAML SSO, audit logs, SLA" },
]

export default function SelectablePlanCards() {
  const [plan, setPlan] = React.useState("pro")

  return (
    <RadioGroup value={plan} onValueChange={(v) => setPlan(v as string)} className="grid w-full max-w-sm gap-2">
      {plans.map((p) => (
        <label key={p.value}>
          <Card
            size="sm"
            className={cn(
              "cursor-pointer transition-shadow hover:ring-foreground/30",
              plan === p.value && "bg-muted/40 ring-2 ring-primary hover:ring-primary"
            )}
          >
            <CardHeader className="grid-cols-[auto_1fr_auto] items-center gap-x-3">
              <RadioGroupItem value={p.value} className="row-span-2" />
              <CardTitle>{p.name}</CardTitle>
              <CardDescription>{p.note}</CardDescription>
              <CardAction className="col-start-3 self-center">
                <span className="text-sm font-semibold">{p.price}</span>
                <span className="text-muted-foreground">/mo</span>
              </CardAction>
            </CardHeader>
          </Card>
        </label>
      ))}
    </RadioGroup>
  )
}`,
  },
  {
    name: "ArticleLinkCard",
    description: "Whole-card link to a blog article with a gradient cover, tags, author and hover state.",
    code: `
export default function ArticleLinkCard() {
  return (
    <a href="#" className="group block w-full max-w-sm outline-none">
      <Card className="pt-0 transition-shadow group-hover:ring-foreground/30 group-focus-visible:ring-2 group-focus-visible:ring-ring">
        <div className="relative aspect-[2/1] overflow-hidden bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600">
          <svg viewBox="0 0 200 100" className="absolute inset-0 size-full opacity-30" aria-hidden="true">
            <path d="M0 70 Q50 30 100 60 T200 40 V100 H0Z" fill="white" />
            <path d="M0 85 Q60 55 120 80 T200 70 V100 H0Z" fill="white" />
          </svg>
        </div>
        <CardHeader>
          <div className="flex gap-1.5">
            <Badge variant="secondary">Engineering</Badge>
            <Badge variant="outline">8 min read</Badge>
          </div>
          <CardTitle className="mt-1 text-base group-hover:underline">How we cut cold starts by 70% with edge caching</CardTitle>
          <CardDescription>A look at the request path, the cache keys we chose and what broke along the way.</CardDescription>
        </CardHeader>
        <CardFooter className="gap-2">
          <Avatar size="sm">
            <AvatarFallback>RP</AvatarFallback>
          </Avatar>
          <span className="flex-1">Ravi Patel · Nov 12</span>
          <ArrowUpRightIcon className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </CardFooter>
      </Card>
    </a>
  )
}`,
  },
  {
    name: "TestimonialCard",
    description: "Customer testimonial card with star rating, quote and author attribution.",
    code: `
export default function TestimonialCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex gap-0.5" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="size-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="text-sm leading-relaxed">
          &ldquo;We replaced three tools with this in a week. Our designers and engineers finally look at the same source of truth, and handoff
          meetings basically disappeared.&rdquo;
        </blockquote>
      </CardContent>
      <CardFooter className="gap-3 border-t-0">
        <Avatar>
          <AvatarFallback>JO</AvatarFallback>
        </Avatar>
        <div className="grid">
          <span className="font-medium">Jasmine Osei</span>
          <span className="text-muted-foreground">Head of Design, Fernway</span>
        </div>
        <QuoteIcon className="ms-auto size-6 text-muted-foreground/40" />
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "WeatherForecastCard",
    description: "Weather widget card with current conditions and a five-day forecast row.",
    code: `
const forecast = [
  { day: "Tue", icon: SunIcon, high: 21, low: 12 },
  { day: "Wed", icon: CloudSunIcon, high: 19, low: 11 },
  { day: "Thu", icon: CloudRainIcon, high: 15, low: 9 },
  { day: "Fri", icon: CloudIcon, high: 16, low: 10 },
  { day: "Sat", icon: SunIcon, high: 22, low: 13 },
]

export default function WeatherForecastCard() {
  return (
    <Card className="w-full max-w-xs bg-gradient-to-b from-sky-500/10 to-transparent">
      <CardHeader>
        <CardDescription className="flex items-center gap-1">
          <MapPinIcon className="size-3" />
          Porto, Portugal
        </CardDescription>
        <CardTitle className="text-4xl font-light tabular-nums">18°</CardTitle>
        <CardAction>
          <CloudSunIcon className="size-12 text-amber-500" strokeWidth={1.25} />
        </CardAction>
      </CardHeader>
      <CardContent className="flex gap-3 text-muted-foreground">
        <span className="flex items-center gap-1"><WindIcon className="size-3.5" /> 14 km/h</span>
        <span className="flex items-center gap-1"><DropletsIcon className="size-3.5" /> 62%</span>
      </CardContent>
      <CardFooter className="grid grid-cols-5 gap-1 text-center">
        {forecast.map((f) => (
          <div key={f.day} className="grid justify-items-center gap-1">
            <span className="text-muted-foreground">{f.day}</span>
            <f.icon className="size-4" />
            <span className="tabular-nums">
              {f.high}° <span className="text-muted-foreground">{f.low}°</span>
            </span>
          </div>
        ))}
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "NowPlayingCard",
    description: "Music player card with gradient artwork, seek slider and transport controls.",
    code: `
export default function NowPlayingCard() {
  const [playing, setPlaying] = React.useState(true)
  const [position, setPosition] = React.useState([84])

  const time = (s: number) => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0")

  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="grid-cols-[auto_1fr_auto] gap-x-3">
        <div className="row-span-2 size-12 bg-gradient-to-br from-rose-500 via-purple-500 to-indigo-600" />
        <CardTitle>Low Tide Lights</CardTitle>
        <CardDescription>The Paper Harbors</CardDescription>
        <CardAction className="col-start-3">
          <Button variant="ghost" size="icon-sm" aria-label="Like">
            <HeartIcon className="fill-rose-500 text-rose-500" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-2">
        <Slider value={position} onValueChange={(v) => setPosition(v as number[])} max={214} aria-label="Seek" />
        <div className="flex justify-between text-[10px] text-muted-foreground tabular-nums">
          <span>{time(position[0] ?? 0)}</span>
          <span>3:34</span>
        </div>
      </CardContent>
      <CardFooter className="justify-center gap-2">
        <Button variant="ghost" size="icon-sm" aria-label="Shuffle"><ShuffleIcon /></Button>
        <Button variant="ghost" size="icon" aria-label="Previous"><SkipBackIcon /></Button>
        <Button size="icon-lg" aria-label={playing ? "Pause" : "Play"} onClick={() => setPlaying(!playing)}>
          {playing ? <PauseIcon /> : <PlayIcon />}
        </Button>
        <Button variant="ghost" size="icon" aria-label="Next"><SkipForwardIcon /></Button>
        <Button variant="ghost" size="icon-sm" aria-label="Repeat"><RepeatIcon /></Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "ServiceStatusCard",
    description: "Status page card with per-service uptime bars over 30 days and an incident note.",
    code: `
const services = [
  { name: "API", uptime: "99.98%", incidents: [12] },
  { name: "Dashboard", uptime: "100%", incidents: [] as number[] },
  { name: "Webhooks", uptime: "99.71%", incidents: [4, 5, 22] },
]

export default function ServiceStatusCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>System status</CardTitle>
        <CardDescription>Last 30 days</CardDescription>
        <CardAction>
          <Badge variant="secondary" className="gap-1.5">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
            Operational
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-4">
        {services.map((s) => (
          <div key={s.name} className="grid gap-1.5">
            <div className="flex justify-between">
              <span className="font-medium">{s.name}</span>
              <span className="text-muted-foreground tabular-nums">{s.uptime}</span>
            </div>
            <div className="flex gap-px">
              {Array.from({ length: 30 }).map((_, i) => (
                <span
                  key={i}
                  title={s.incidents.includes(i) ? "Degraded" : "Operational"}
                  className={cn("h-6 flex-1", s.incidents.includes(i) ? "bg-amber-500" : "bg-emerald-500/70")}
                />
              ))}
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="gap-2 text-muted-foreground">
        <InfoIcon className="size-3.5 shrink-0" />
        Webhook delays on Nov 4-5 were resolved within 40 minutes.
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "DeploymentCard",
    description: "Deployment card with branch and commit metadata, status badge and an actions dropdown.",
    code: `
export default function DeploymentCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-500" />
          checkout-web
        </CardTitle>
        <CardDescription>Production · deployed 12 minutes ago</CardDescription>
        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Deployment actions" />}>
              <EllipsisIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <ExternalLinkIcon />
                Visit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ScrollTextIcon />
                View logs
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <RotateCcwIcon />
                Roll back
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-2 text-muted-foreground">
        <span className="flex items-center gap-2">
          <GitBranchIcon className="size-3.5" /> main
        </span>
        <span className="flex items-center gap-2">
          <GitCommitHorizontalIcon className="size-3.5" />
          <code className="font-mono text-foreground">a91f3c2</code> fix: round tax totals per line item
        </span>
      </CardContent>
      <CardFooter className="justify-between">
        <Badge variant="outline">Ready · 48s build</Badge>
        <Button variant="outline" size="sm" nativeButton={false} render={<a href="#" />}>
          Open
          <ArrowUpRightIcon data-icon="inline-end" />
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "ApiKeyCard",
    description: "Developer card with a masked API key that can be revealed and copied, plus a regenerate action.",
    code: `
const key = "key_demo_35ae"

export default function ApiKeyCard() {
  const [visible, setVisible] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Secret key</CardTitle>
        <CardDescription>Use this key on your server only. Never expose it in client code.</CardDescription>
      </CardHeader>
      <CardContent>
        <InputGroup>
          <InputGroupInput readOnly value={visible ? key : "key_demo_" + "•".repeat(18)} className="font-mono" aria-label="API key" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="icon-xs" aria-label={visible ? "Hide key" : "Reveal key"} onClick={() => setVisible(!visible)}>
              {visible ? <EyeOffIcon /> : <EyeIcon />}
            </InputGroupButton>
            <InputGroupButton
              size="icon-xs"
              aria-label="Copy key"
              onClick={() => {
                void navigator.clipboard?.writeText(key)
                setCopied(true)
                setTimeout(() => setCopied(false), 1500)
              }}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-muted-foreground">Created Oct 2 · last used 3h ago</span>
        <Button variant="outline" size="sm">
          <RefreshCwIcon data-icon="inline-start" />
          Roll key
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "InviteTeamCard",
    description: "Invite card that collects emails as removable chips with a role picker and send button.",
    code: `
export default function InviteTeamCard() {
  const [emails, setEmails] = React.useState(["hugo@fernway.co", "mina@fernway.co"])
  const [draft, setDraft] = React.useState("")

  const add = () => {
    const value = draft.trim()
    if (value.includes("@") && !emails.includes(value)) setEmails([...emails, value])
    setDraft("")
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Invite your team</CardTitle>
        <CardDescription>They&apos;ll get an email with a link to join Fernway.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="flex flex-wrap gap-1.5 border p-2">
          {emails.map((e) => (
            <Badge key={e} variant="secondary" className="gap-1 pe-1">
              {e}
              <button type="button" aria-label={"Remove " + e} onClick={() => setEmails(emails.filter((x) => x !== e))}>
                <XIcon className="size-3" />
              </button>
            </Badge>
          ))}
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === ",") {
                e.preventDefault()
                add()
              }
            }}
            placeholder="Add email and press Enter"
            className="min-w-32 flex-1 bg-transparent text-xs outline-none placeholder:text-muted-foreground"
            aria-label="Email address"
          />
        </div>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="invite-role" className="flex-1">
            Invite as
          </FieldLabel>
          <NativeSelect id="invite-role" size="sm" defaultValue="member">
            <NativeSelectOption value="admin">Admin</NativeSelectOption>
            <NativeSelectOption value="member">Member</NativeSelectOption>
            <NativeSelectOption value="guest">Guest</NativeSelectOption>
          </NativeSelect>
        </Field>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="link" size="sm" className="px-0">
          <LinkIcon data-icon="inline-start" />
          Copy invite link
        </Button>
        <Button size="sm" disabled={emails.length === 0}>
          Send {emails.length} {emails.length === 1 ? "invite" : "invites"}
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "FeedbackCard",
    description: "Feedback card with an emoji-style rating toggle group, comment box and thank-you state.",
    code: `
const ratings = [
  { value: "1", icon: AngryIcon, label: "Terrible" },
  { value: "2", icon: FrownIcon, label: "Bad" },
  { value: "3", icon: MehIcon, label: "Okay" },
  { value: "4", icon: SmileIcon, label: "Good" },
  { value: "5", icon: LaughIcon, label: "Great" },
]

export default function FeedbackCard() {
  const [rating, setRating] = React.useState<string[]>([])
  const [sent, setSent] = React.useState(false)

  if (sent) {
    return (
      <Card className="w-full max-w-sm">
        <CardContent className="flex flex-col items-center gap-2 py-6 text-center">
          <HeartHandshakeIcon className="size-8 text-primary" />
          <CardTitle>Thanks for the feedback!</CardTitle>
          <CardDescription>We read every response.</CardDescription>
          <Button variant="ghost" size="sm" onClick={() => { setSent(false); setRating([]) }}>
            Send another
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>How was your export experience?</CardTitle>
        <CardDescription>Takes 10 seconds. Helps a lot.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <ToggleGroup value={rating} onValueChange={(v) => setRating(v as string[])} variant="outline" className="w-full">
          {ratings.map((r) => (
            <ToggleGroupItem key={r.value} value={r.value} aria-label={r.label} className="flex-1">
              <r.icon />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <Textarea placeholder="What could be better? (optional)" className="min-h-20" />
      </CardContent>
      <CardFooter className="justify-end">
        <Button size="sm" disabled={rating.length === 0} onClick={() => setSent(true)}>
          Submit
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "CourseProgressCard",
    description: "Learning card with module progress, a next-lesson row and a continue button.",
    code: `
const modules = [
  { title: "Foundations of color", lessons: 6, done: 6 },
  { title: "Typography systems", lessons: 8, done: 5 },
  { title: "Layout and grids", lessons: 7, done: 0 },
]

export default function CourseProgressCard() {
  const total = modules.reduce((s, m) => s + m.lessons, 0)
  const done = modules.reduce((s, m) => s + m.done, 0)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardDescription className="flex items-center gap-1.5">
          <GraduationCapIcon className="size-3.5" />
          Visual Design Essentials
        </CardDescription>
        <CardTitle className="text-base">{Math.round((done / total) * 100)}% complete</CardTitle>
        <CardAction>
          <Badge variant="outline">
            {done}/{total} lessons
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-3">
        {modules.map((m) => (
          <div key={m.title} className="grid gap-1">
            <div className="flex justify-between">
              <span className={cn(m.done === m.lessons && "text-muted-foreground")}>{m.title}</span>
              {m.done === m.lessons ? <CircleCheckIcon className="size-3.5 text-emerald-500" /> : <span className="text-muted-foreground">{m.done}/{m.lessons}</span>}
            </div>
            <Progress value={(m.done / m.lessons) * 100} aria-label={m.title} />
          </div>
        ))}
      </CardContent>
      <CardFooter className="justify-between gap-3">
        <div className="grid min-w-0">
          <span className="text-muted-foreground">Up next</span>
          <span className="truncate font-medium">2.6 Pairing serif and sans</span>
        </div>
        <Button size="sm">
          <PlayIcon data-icon="inline-start" />
          Continue
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "WalletBalanceCard",
    description: "Finance card with an account balance, inline SVG sparkline and send and receive actions.",
    code: `
const points = [32, 40, 36, 52, 48, 60, 58, 72, 66, 80, 78, 92]

export default function WalletBalanceCard() {
  const [hidden, setHidden] = React.useState(false)
  const max = Math.max(...points)
  const path = points.map((p, i) => (i === 0 ? "M" : "L") + (i * 100) / (points.length - 1) + " " + (40 - (p / max) * 36)).join(" ")

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardDescription>Main account · EUR</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums">{hidden ? "€ ••••••" : "€ 12,840.55"}</CardTitle>
        <CardAction>
          <Button variant="ghost" size="icon-sm" aria-label={hidden ? "Show balance" : "Hide balance"} onClick={() => setHidden(!hidden)}>
            {hidden ? <EyeIcon /> : <EyeOffIcon />}
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-1">
        <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="h-14 w-full text-emerald-500" aria-hidden="true">
          <path d={path + " L100 40 L0 40 Z"} className="fill-current opacity-10" />
          <path d={path} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
        <span className="text-emerald-600 dark:text-emerald-400">+€1,920.10 this month</span>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-2">
        <Button>
          <ArrowUpRightIcon data-icon="inline-start" />
          Send
        </Button>
        <Button variant="outline">
          <ArrowDownLeftIcon data-icon="inline-start" />
          Receive
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "TodayScheduleCard",
    description: "Agenda card listing today's meetings with a live 'now' marker and join button.",
    code: `
const meetings = [
  { time: "09:00", end: "09:15", title: "Daily standup", room: "Zoom", past: true },
  { time: "10:30", end: "11:30", title: "Pricing page critique", room: "Room Atlas", now: true },
  { time: "13:00", end: "13:30", title: "1:1 with Grace", room: "Zoom" },
  { time: "15:00", end: "16:00", title: "Roadmap review", room: "Room Nova" },
]

export default function TodayScheduleCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Today</CardTitle>
        <CardDescription>Thursday, November 20</CardDescription>
        <CardAction>
          <Button variant="outline" size="icon-sm" aria-label="New event">
            <PlusIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-1">
        {meetings.map((m) => (
          <div
            key={m.title}
            className={cn("flex items-center gap-3 border-s-2 border-transparent p-2", m.now && "border-primary bg-muted/60", m.past && "opacity-50")}
          >
            <div className="grid w-10 text-muted-foreground tabular-nums">
              <span className="text-foreground">{m.time}</span>
              <span>{m.end}</span>
            </div>
            <div className="grid min-w-0 flex-1">
              <span className="truncate font-medium">{m.title}</span>
              <span className="text-muted-foreground">{m.room}</span>
            </div>
            {m.now ? (
              <Button size="xs">
                <VideoIcon data-icon="inline-start" />
                Join
              </Button>
            ) : null}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "ShipmentTrackingCard",
    description: "Order tracking card with a vertical progress stepper for shipment milestones.",
    code: `
const steps = [
  { label: "Order placed", detail: "Nov 14, 09:12", done: true },
  { label: "Packed", detail: "Nov 14, 16:40", done: true },
  { label: "In transit", detail: "Arrived at Rotterdam hub", done: true, current: true },
  { label: "Out for delivery", detail: "Expected Nov 18" },
  { label: "Delivered", detail: "" },
]

export default function ShipmentTrackingCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PackageIcon className="size-4 text-muted-foreground" />
          Order #10482
        </CardTitle>
        <CardDescription>Tracking NL 4482 9910 22</CardDescription>
        <CardAction>
          <Badge variant="secondary">In transit</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ol className="grid">
          {steps.map((s, i) => (
            <li key={s.label} className="relative flex gap-3 pb-4 last:pb-0">
              {i < steps.length - 1 ? (
                <span className={cn("absolute start-[7px] top-4 h-full w-px", s.done && !s.current ? "bg-primary" : "bg-border")} />
              ) : null}
              <span
                className={cn(
                  "z-10 mt-0.5 flex size-[15px] shrink-0 items-center justify-center rounded-full border",
                  s.done ? "border-primary bg-primary text-primary-foreground" : "bg-card",
                  s.current && "ring-4 ring-primary/20"
                )}
              >
                {s.done ? <CheckIcon className="size-2.5" /> : null}
              </span>
              <div className="grid">
                <span className={cn("font-medium", !s.done && "text-muted-foreground")}>{s.label}</span>
                {s.detail ? <span className="text-muted-foreground">{s.detail}</span> : null}
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "JobPostingCard",
    description: "Job listing card with company glyph, tags, salary range and save and apply actions.",
    code: `
export default function JobPostingCard() {
  const [saved, setSaved] = React.useState(false)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="grid-cols-[auto_1fr_auto] gap-x-3">
        <div className="row-span-2 flex size-10 items-center justify-center bg-foreground text-sm font-bold text-background">Q</div>
        <CardTitle>Senior Frontend Engineer</CardTitle>
        <CardDescription>Quillstack · Berlin or remote (EU)</CardDescription>
        <CardAction className="col-start-3">
          <Button variant="ghost" size="icon-sm" aria-label={saved ? "Unsave job" : "Save job"} aria-pressed={saved} onClick={() => setSaved(!saved)}>
            <BookmarkIcon className={cn(saved && "fill-current")} />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="secondary">Full-time</Badge>
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="outline">Visa support</Badge>
        </div>
        <p className="text-muted-foreground">
          Own our editor surface end to end, from collaborative cursors to performance budgets on low-end devices.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="grid">
          <span className="font-medium">€85k - €105k</span>
          <span className="text-muted-foreground">Posted 3 days ago</span>
        </div>
        <Button size="sm">Apply now</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "PropertyListingCard",
    description: "Real-estate listing card with a gradient photo placeholder, price, specs and favorite toggle.",
    code: `
const specs = [
  { icon: BedDoubleIcon, label: "3 beds" },
  { icon: BathIcon, label: "2 baths" },
  { icon: RulerIcon, label: "118 m²" },
]

export default function PropertyListingCard() {
  const [fav, setFav] = React.useState(false)

  return (
    <Card className="w-full max-w-xs pt-0">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-stone-300 via-amber-200 to-emerald-300 dark:from-stone-700 dark:via-amber-900 dark:to-emerald-900">
        <HouseIcon className="absolute inset-0 m-auto size-16 text-white/70" strokeWidth={1} />
        <Badge className="absolute start-3 top-3">New listing</Badge>
        <Button
          size="icon-sm"
          variant="secondary"
          aria-label="Favorite"
          aria-pressed={fav}
          onClick={() => setFav(!fav)}
          className="absolute end-3 top-3"
        >
          <HeartIcon className={cn(fav && "fill-rose-500 text-rose-500")} />
        </Button>
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">€640,000</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPinIcon className="size-3" />
          14 Linden Court, Eastgate
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-between">
        {specs.map((s) => (
          <span key={s.label} className="flex items-center gap-1.5 text-muted-foreground">
            <s.icon className="size-3.5" />
            {s.label}
          </span>
        ))}
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "TabbedAnalyticsCard",
    description: "Analytics card with tabs in the header action that switch the metric and bar chart below.",
    code: `
const data = {
  visitors: { total: "24.8k", bars: [30, 45, 38, 60, 52, 70, 64] },
  signups: { total: "1,284", bars: [20, 28, 35, 30, 42, 55, 48] },
  revenue: { total: "$18.4k", bars: [40, 35, 50, 48, 62, 58, 75] },
}
const days = ["M", "T", "W", "T", "F", "S", "S"]

export default function TabbedAnalyticsCard() {
  const [metric, setMetric] = React.useState<keyof typeof data>("visitors")
  const current = data[metric]

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardDescription>This week</CardDescription>
        <CardTitle className="text-xl font-semibold tabular-nums">{current.total}</CardTitle>
        <CardAction>
          <Tabs value={metric} onValueChange={(v) => setMetric(v as keyof typeof data)}>
            <TabsList>
              <TabsTrigger value="visitors">Visitors</TabsTrigger>
              <TabsTrigger value="signups">Signups</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex h-32 items-end gap-2">
          {current.bars.map((h, i) => (
            <div key={i} className="flex h-full flex-1 flex-col justify-end gap-1 text-center">
              <div className="bg-primary/80 transition-all duration-300" style={{ height: h + "%" }} />
              <span className="text-[10px] text-muted-foreground">{days[i]}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "ExpandableInvoiceCard",
    description: "Invoice card that uses a collapsible section to reveal line-item details on demand.",
    code: `
const lines = [
  { label: "Pro plan · 12 seats", amount: "$216.00" },
  { label: "Extra storage · 200 GB", amount: "$20.00" },
  { label: "VAT (21%)", amount: "$49.56" },
]

export default function ExpandableInvoiceCard() {
  const [open, setOpen] = React.useState(false)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Invoice INV-2026-0118</CardTitle>
        <CardDescription>Issued Nov 1 · due Nov 15</CardDescription>
        <CardAction>
          <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">Paid</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Collapsible open={open} onOpenChange={setOpen}>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold tabular-nums">$285.56</span>
            <CollapsibleTrigger render={<Button variant="ghost" size="sm" />}>
              {open ? "Hide details" : "Show details"}
              <ChevronDownIcon data-icon="inline-end" className={cn("transition-transform", open && "rotate-180")} />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="mt-3 grid gap-2 border-t pt-3">
            {lines.map((l) => (
              <div key={l.label} className="flex justify-between text-muted-foreground">
                <span>{l.label}</span>
                <span className="tabular-nums">{l.amount}</span>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <DownloadIcon data-icon="inline-start" />
          PDF
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <MailIcon data-icon="inline-start" />
          Email
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "CardSizeComparison",
    description: "Side-by-side comparison of the default and small card sizes with identical content.",
    code: `
const sizes = ["default", "sm"] as const;

export default function CardSizeComparison() {
  return (
    <div className="grid w-full max-w-lg gap-3 sm:grid-cols-2">
      {sizes.map((size) => (
        <Card key={size} size={size}>
          <CardHeader>
            <CardTitle>Backup schedule</CardTitle>
            <CardDescription>Nightly at 02:00 UTC</CardDescription>
            <CardAction>
              <Badge variant="outline">{size}</Badge>
            </CardAction>
          </CardHeader>
          <CardContent className="text-muted-foreground">Last backup completed 6 hours ago, 4.1 GB.</CardContent>
          <CardFooter>
            <Button size="sm" variant="outline" className="w-full">
              Run now
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}`,
  },
  {
    name: "HorizontalPodcastCard",
    description: "Horizontal card layout with a gradient media column beside the header, content and footer.",
    code: `
export default function HorizontalPodcastCard() {
  return (
    <Card className="w-full max-w-md flex-row gap-0 py-0">
      <div className="flex w-28 shrink-0 items-center justify-center bg-gradient-to-b from-orange-400 to-rose-600 sm:w-36">
        <MicIcon className="size-10 text-white/80" strokeWidth={1.5} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3 py-4">
        <CardHeader>
          <CardDescription>Episode 87 · 42 min</CardDescription>
          <CardTitle className="line-clamp-2">Designing for the second time a user opens your app</CardTitle>
        </CardHeader>
        <CardContent className="line-clamp-2 text-muted-foreground">
          Adaeze and Tom talk retention loops, empty states that teach, and why the first week matters more than the first minute.
        </CardContent>
        <div className="flex items-center gap-2 px-(--card-spacing)">
          <Button size="sm">
            <PlayIcon data-icon="inline-start" />
            Play
          </Button>
          <Button size="icon-sm" variant="ghost" aria-label="Add to queue">
            <ListPlusIcon />
          </Button>
        </div>
      </div>
    </Card>
  )
}`,
  },
  {
    name: "TwoFactorSecurityCard",
    description: "Security settings card showing two-factor methods with status badges and setup actions.",
    code: `
const methods = [
  { icon: SmartphoneIcon, name: "Authenticator app", detail: "Added Sep 3", enabled: true },
  { icon: KeyRoundIcon, name: "Security key", detail: "Use a hardware key like a USB token", enabled: false },
  { icon: MessageSquareIcon, name: "SMS backup", detail: "+44 •••• ••• 482", enabled: true },
]

export default function TwoFactorSecurityCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheckIcon className="size-4 text-emerald-500" />
          Two-factor authentication
        </CardTitle>
        <CardDescription>Your account is protected with 2 methods.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
        {methods.map((m) => (
          <div key={m.name} className="flex items-center gap-3 border p-3">
            <m.icon className="size-4 shrink-0 text-muted-foreground" />
            <div className="grid min-w-0 flex-1">
              <span className="font-medium">{m.name}</span>
              <span className="truncate text-muted-foreground">{m.detail}</span>
            </div>
            {m.enabled ? (
              <Badge variant="secondary">On</Badge>
            ) : (
              <Button size="xs" variant="outline">
                Set up
              </Button>
            )}
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="link" size="sm" className="px-0">
          View recovery codes
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "LockedPremiumCard",
    description: "Disabled premium card that blurs its content behind a lock overlay with an upgrade prompt.",
    code: `
export default function LockedPremiumCard() {
  return (
    <Card className="relative w-full max-w-sm" aria-disabled="true">
      <CardHeader>
        <CardTitle>Cohort retention</CardTitle>
        <CardDescription>Weekly cohorts · last 8 weeks</CardDescription>
      </CardHeader>
      <CardContent className="pointer-events-none grid grid-cols-8 gap-1 blur-[3px] select-none" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="aspect-square bg-primary" style={{ opacity: Math.max(0.1, 1 - (i % 8) * 0.12 - Math.floor(i / 8) * 0.05) }} />
        ))}
      </CardContent>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background/60 p-6 text-center backdrop-blur-[1px]">
        <span className="flex size-9 items-center justify-center border bg-card">
          <LockIcon className="size-4" />
        </span>
        <span className="text-sm font-medium">Available on Growth</span>
        <span className="text-xs text-muted-foreground">See where users drop off and which cohorts stick around.</span>
        <Button size="sm" className="mt-1">
          <SparklesIcon data-icon="inline-start" />
          Upgrade
        </Button>
      </div>
    </Card>
  )
}`,
  },
  {
    name: "KanbanTaskCard",
    description: "Compact board card for a task with labels, priority, due date, comments and assignees.",
    code: `
export default function KanbanTaskCard() {
  return (
    <div className="w-full max-w-72 bg-muted/50 p-2">
      <div className="flex items-center justify-between px-1 pb-2 text-xs font-medium">
        <span>In review</span>
        <span className="text-muted-foreground">3</span>
      </div>
      <Card size="sm" className="cursor-grab transition-shadow hover:ring-foreground/25 active:cursor-grabbing">
        <CardHeader>
          <div className="flex gap-1">
            <Badge variant="secondary" className="bg-violet-500/15 text-violet-700 dark:text-violet-300">Design</Badge>
            <Badge variant="secondary" className="bg-sky-500/15 text-sky-700 dark:text-sky-300">Web</Badge>
          </div>
          <CardTitle className="mt-1">Redesign empty states for the inbox</CardTitle>
          <CardAction>
            <Button variant="ghost" size="icon-xs" aria-label="Task options">
              <EllipsisIcon />
            </Button>
          </CardAction>
        </CardHeader>
        <CardFooter className="justify-between text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
              <SignalHighIcon className="size-3.5" /> High
            </span>
            <span className="flex items-center gap-1">
              <CalendarIcon className="size-3.5" /> Nov 21
            </span>
            <span className="flex items-center gap-1">
              <MessageSquareIcon className="size-3.5" /> 4
            </span>
          </div>
          <AvatarGroup>
            <Avatar size="sm">
              <AvatarFallback>EK</AvatarFallback>
            </Avatar>
            <Avatar size="sm">
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </CardFooter>
      </Card>
    </div>
  )
}`,
  },
]

export default examples
