import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "AccountPasswordTabs",
    description: "Card with account and password tabs, each holding its own small form.",
    code: `
export default function AccountPasswordTabs() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-sm">
      <TabsList className="w-full">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Update how your name appears to teammates.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="tabs-name">Display name</Label>
              <Input id="tabs-name" defaultValue="Nora Lindqvist" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="tabs-handle">Handle</Label>
              <Input id="tabs-handle" defaultValue="@nora" />
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>You&apos;ll be signed out on other devices.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="tabs-current">Current password</Label>
              <Input id="tabs-current" type="password" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="tabs-new">New password</Label>
              <Input id="tabs-new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Update password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "InboxLineTabsWithCounts",
    description: "Line-variant inbox tabs with message counts in badges.",
    code: `
const folders = [
  { value: "all", label: "All", count: 128, items: ["Quarterly review moved to Friday", "Design crit notes", "Invoice #2041 paid"] },
  { value: "unread", label: "Unread", count: 6, items: ["Design crit notes", "Can you check the launch copy?"] },
  { value: "archived", label: "Archived", count: 940, items: ["Offsite logistics", "Welcome to the team"] },
]

export default function InboxLineTabsWithCounts() {
  return (
    <Tabs defaultValue="unread" className="w-full max-w-sm">
      <TabsList variant="line">
        {folders.map((folder) => (
          <TabsTrigger key={folder.value} value={folder.value}>
            {folder.label}
            <Badge variant="secondary" className="px-1 tabular-nums">{folder.count}</Badge>
          </TabsTrigger>
        ))}
      </TabsList>
      {folders.map((folder) => (
        <TabsContent key={folder.value} value={folder.value} className="divide-y border">
          {folder.items.map((item) => (
            <div key={item} className="flex items-center gap-2 px-3 py-2.5 text-xs">
              <MailIcon className="size-3.5 text-muted-foreground" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "VerticalSettingsTabs",
    description: "Vertical tabs used as a settings navigation with panels beside them.",
    code: `
const sections = [
  { value: "general", label: "General", icon: SettingsIcon, text: "Workspace name, URL and default language." },
  { value: "members", label: "Members", icon: UsersIcon, text: "Invite people and manage their roles." },
  { value: "billing", label: "Billing", icon: CreditCardIcon, text: "Plan, invoices and payment methods." },
  { value: "security", label: "Security", icon: ShieldIcon, text: "SSO, two-factor and session policies." },
]

export default function VerticalSettingsTabs() {
  return (
    <Tabs defaultValue="general" orientation="vertical" className="w-full max-w-md gap-4">
      <TabsList className="w-36 shrink-0">
        {sections.map((s) => (
          <TabsTrigger key={s.value} value={s.value}>
            <s.icon data-icon="inline-start" />
            {s.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {sections.map((s) => (
        <TabsContent key={s.value} value={s.value} className="border p-4">
          <h3 className="text-sm font-medium">{s.label}</h3>
          <p className="mt-1 text-muted-foreground">{s.text}</p>
          <Button variant="outline" size="sm" className="mt-4">Manage {s.label.toLowerCase()}</Button>
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "IconLabelTabs",
    description: "Tabs whose triggers combine a leading icon with a label.",
    code: `
export default function IconLabelTabs() {
  return (
    <Tabs defaultValue="photos" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="photos"><ImageIcon data-icon="inline-start" />Photos</TabsTrigger>
        <TabsTrigger value="videos"><VideoIcon data-icon="inline-start" />Videos</TabsTrigger>
        <TabsTrigger value="audio"><MusicIcon data-icon="inline-start" />Audio</TabsTrigger>
      </TabsList>
      <TabsContent value="photos" className="grid grid-cols-3 gap-2">
        {["from-sky-400 to-indigo-500", "from-amber-300 to-rose-500", "from-emerald-300 to-teal-600"].map((g) => (
          <div key={g} className={cn("aspect-square bg-gradient-to-br", g)} />
        ))}
      </TabsContent>
      <TabsContent value="videos" className="text-muted-foreground">14 clips, 2.3 GB total.</TabsContent>
      <TabsContent value="audio" className="text-muted-foreground">No audio uploaded yet.</TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "IconOnlyViewSwitcher",
    description: "Icon-only tabs that switch a project list between grid, list and board views.",
    code: `
const projects = ["Atlas", "Beacon", "Cinder", "Drift"]

export default function IconOnlyViewSwitcher() {
  return (
    <Tabs defaultValue="grid" className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Projects</span>
        <TabsList>
          <TabsTrigger value="grid" aria-label="Grid view"><LayoutGridIcon /></TabsTrigger>
          <TabsTrigger value="list" aria-label="List view"><ListIcon /></TabsTrigger>
          <TabsTrigger value="board" aria-label="Board view"><KanbanIcon /></TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="grid" className="grid grid-cols-2 gap-2">
        {projects.map((p) => <div key={p} className="border p-3 font-medium">{p}</div>)}
      </TabsContent>
      <TabsContent value="list" className="divide-y border">
        {projects.map((p) => <div key={p} className="px-3 py-2">{p}</div>)}
      </TabsContent>
      <TabsContent value="board" className="grid grid-cols-3 gap-2">
        {["To do", "Doing", "Done"].map((col, i) => (
          <div key={col} className="bg-muted p-2">
            <p className="mb-2 font-medium">{col}</p>
            <div className="border bg-background p-2">{projects[i]}</div>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "DisabledPlanTab",
    description: "A tab disabled behind a plan upgrade, shown with a lock icon.",
    code: `
export default function DisabledPlanTab() {
  return (
    <Tabs defaultValue="basic" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="basic">Basic</TabsTrigger>
        <TabsTrigger value="funnels">Funnels</TabsTrigger>
        <TabsTrigger value="cohorts" disabled>
          <LockIcon data-icon="inline-start" />
          Cohorts
        </TabsTrigger>
      </TabsList>
      <TabsContent value="basic" className="border p-3">Page views, visitors and bounce rate.</TabsContent>
      <TabsContent value="funnels" className="border p-3">Signup → Activation → Paid conversion.</TabsContent>
      <p className="text-muted-foreground">
        Cohort analysis is available on the Growth plan.{" "}
        <Button variant="link" size="xs" className="h-auto p-0">Upgrade</Button>
      </p>
    </Tabs>
  )
}`,
  },
  {
    name: "OnboardingStepTabs",
    description: "Controlled tabs driven by Back and Continue buttons for a three-step onboarding.",
    code: `
const steps = [
  { value: "profile", label: "Profile", text: "Tell us your name and role so we can tailor your workspace." },
  { value: "team", label: "Team", text: "Invite up to five teammates now, or skip and do it later." },
  { value: "finish", label: "Finish", text: "You're all set. We created a starter project for you." },
]

export default function OnboardingStepTabs() {
  const [step, setStep] = React.useState("profile")
  const index = steps.findIndex((s) => s.value === step)

  return (
    <Tabs value={step} onValueChange={(v) => setStep(v as string)} className="w-full max-w-sm border p-4">
      <TabsList className="w-full">
        {steps.map((s, i) => (
          <TabsTrigger key={s.value} value={s.value}>
            <span className="tabular-nums text-muted-foreground">{i + 1}.</span>
            {s.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {steps.map((s) => (
        <TabsContent key={s.value} value={s.value} className="min-h-12 py-2 text-muted-foreground">
          {s.text}
        </TabsContent>
      ))}
      <div className="flex justify-between">
        <Button variant="ghost" size="sm" disabled={index === 0} onClick={() => setStep(steps[index - 1]!.value)}>
          Back
        </Button>
        <Button size="sm" disabled={index === steps.length - 1} onClick={() => setStep(steps[index + 1]!.value)}>
          Continue
        </Button>
      </div>
    </Tabs>
  )
}`,
  },
  {
    name: "BillingCycleTabs",
    description: "Monthly and yearly tabs that change the displayed plan price.",
    code: `
const plans = [
  { name: "Starter", monthly: 9, yearly: 90 },
  { name: "Team", monthly: 29, yearly: 290 },
]

export default function BillingCycleTabs() {
  return (
    <Tabs defaultValue="monthly" className="w-full max-w-sm items-center">
      <TabsList>
        <TabsTrigger value="monthly">Monthly</TabsTrigger>
        <TabsTrigger value="yearly">
          Yearly
          <Badge variant="secondary">-17%</Badge>
        </TabsTrigger>
      </TabsList>
      {(["monthly", "yearly"] as const).map((cycle) => (
        <TabsContent key={cycle} value={cycle} className="grid w-full grid-cols-2 gap-3">
          {plans.map((plan) => (
            <div key={plan.name} className="border p-4">
              <p className="font-medium">{plan.name}</p>
              <p className="mt-2 text-2xl font-semibold tabular-nums">\${plan[cycle]}</p>
              <p className="text-muted-foreground">per {cycle === "monthly" ? "month" : "year"}</p>
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "PackageManagerTabs",
    description: "Install command tabs for different package managers with a copy button.",
    code: `
const commands = {
  npm: "npm install @acme/charts",
  pnpm: "pnpm add @acme/charts",
  yarn: "yarn add @acme/charts",
  bun: "bun add @acme/charts",
}

export default function PackageManagerTabs() {
  const [copied, setCopied] = React.useState(false)
  const [manager, setManager] = React.useState<keyof typeof commands>("npm")

  return (
    <Tabs
      value={manager}
      onValueChange={(v) => { setManager(v as keyof typeof commands); setCopied(false) }}
      className="w-full max-w-md gap-0 border"
    >
      <div className="flex items-center justify-between border-b bg-muted/40 pe-1">
        <TabsList variant="line" className="h-9">
          {Object.keys(commands).map((key) => (
            <TabsTrigger key={key} value={key} className="font-mono">{key}</TabsTrigger>
          ))}
        </TabsList>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Copy command"
          onClick={() => { void navigator.clipboard?.writeText(commands[manager]); setCopied(true) }}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </Button>
      </div>
      {Object.entries(commands).map(([key, cmd]) => (
        <TabsContent key={key} value={key} className="px-3 py-3 font-mono">
          <span className="text-muted-foreground">$ </span>{cmd}
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "SegmentedFullWidthTabs",
    description: "Full-width segmented tabs for choosing a transport mode on a trip planner.",
    code: `
const modes = [
  { value: "drive", label: "Drive", icon: CarIcon, eta: "24 min", detail: "Via Harbor Rd, light traffic" },
  { value: "transit", label: "Transit", icon: TrainFrontIcon, eta: "31 min", detail: "Line 4, then 6 min walk" },
  { value: "bike", label: "Bike", icon: BikeIcon, eta: "38 min", detail: "Mostly protected bike lanes" },
  { value: "walk", label: "Walk", icon: FootprintsIcon, eta: "1 h 12 min", detail: "Flat route along the river" },
]

export default function SegmentedFullWidthTabs() {
  return (
    <Tabs defaultValue="transit" className="w-full max-w-md">
      <TabsList className="h-10 w-full">
        {modes.map((m) => (
          <TabsTrigger key={m.value} value={m.value}>
            <m.icon data-icon="inline-start" />
            <span className="hidden sm:inline">{m.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {modes.map((m) => (
        <TabsContent key={m.value} value={m.value} className="flex items-baseline justify-between border p-3">
          <span className="text-lg font-semibold">{m.eta}</span>
          <span className="text-muted-foreground">{m.detail}</span>
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "ProductDetailTabs",
    description: "Product page tabs for description, specifications and reviews.",
    code: `
const specs = [
  ["Weight", "1.2 kg"],
  ["Capacity", "22 L"],
  ["Material", "Recycled nylon"],
  ["Warranty", "Lifetime"],
]

export default function ProductDetailTabs() {
  return (
    <Tabs defaultValue="specs" className="w-full max-w-md">
      <TabsList variant="line">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="specs">Specifications</TabsTrigger>
        <TabsTrigger value="reviews">Reviews (86)</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="text-muted-foreground">
        The Trailhead 22 is a lightweight daypack with a padded laptop sleeve and weatherproof zips.
      </TabsContent>
      <TabsContent value="specs">
        <dl className="divide-y border">
          {specs.map(([k, v]) => (
            <div key={k} className="flex justify-between px-3 py-2">
              <dt className="text-muted-foreground">{k}</dt>
              <dd className="font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      </TabsContent>
      <TabsContent value="reviews" className="flex items-center gap-2">
        <div className="flex">
          {[0, 1, 2, 3, 4].map((i) => (
            <StarIcon key={i} className={cn("size-4", i < 4 ? "fill-foreground" : "text-muted-foreground")} />
          ))}
        </div>
        <span className="text-muted-foreground">4.6 average from 86 reviews</span>
      </TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "DashboardRangeTabs",
    description: "Time-range tabs that swap the KPI values on an analytics dashboard card.",
    code: `
const ranges = {
  "24h": { visitors: "1,284", revenue: "$3,920", change: "+4.1%" },
  "7d": { visitors: "9,610", revenue: "$27,450", change: "+12.6%" },
  "30d": { visitors: "41,022", revenue: "$118,300", change: "-2.3%" },
}

export default function DashboardRangeTabs() {
  return (
    <Card className="w-full max-w-sm">
      <Tabs defaultValue="7d">
        <CardHeader>
          <CardTitle>Store performance</CardTitle>
          <CardAction>
            <TabsList>
              {Object.keys(ranges).map((r) => <TabsTrigger key={r} value={r}>{r}</TabsTrigger>)}
            </TabsList>
          </CardAction>
        </CardHeader>
        <CardContent>
          {Object.entries(ranges).map(([key, data]) => (
            <TabsContent key={key} value={key} className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-muted-foreground">Visitors</p>
                <p className="text-xl font-semibold tabular-nums">{data.visitors}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Revenue</p>
                <p className="text-xl font-semibold tabular-nums">{data.revenue}</p>
                <p className={cn(data.change.startsWith("-") ? "text-destructive" : "text-emerald-600")}>{data.change}</p>
              </div>
            </TabsContent>
          ))}
        </CardContent>
      </Tabs>
    </Card>
  )
}`,
  },
  {
    name: "FileManagerTabs",
    description: "File manager tabs for recent, shared and starred files.",
    code: `
const files = {
  recent: [
    { name: "Q3 forecast.xlsx", meta: "Edited 2 min ago", icon: FileSpreadsheetIcon },
    { name: "Brand guide.pdf", meta: "Edited 1 h ago", icon: FileTextIcon },
  ],
  shared: [
    { name: "Hiring plan.docx", meta: "Shared by Ivo Marsh", icon: FileTextIcon },
    { name: "Launch assets", meta: "Shared by Dana Ruiz", icon: FolderIcon },
  ],
  starred: [{ name: "Roadmap 2027.fig", meta: "Starred yesterday", icon: FileImageIcon }],
}

export default function FileManagerTabs() {
  return (
    <Tabs defaultValue="recent" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="recent"><ClockIcon data-icon="inline-start" />Recent</TabsTrigger>
        <TabsTrigger value="shared"><UsersIcon data-icon="inline-start" />Shared</TabsTrigger>
        <TabsTrigger value="starred"><StarIcon data-icon="inline-start" />Starred</TabsTrigger>
      </TabsList>
      {Object.entries(files).map(([key, list]) => (
        <TabsContent key={key} value={key} className="divide-y border">
          {list.map((f) => (
            <div key={f.name} className="flex items-center gap-3 px-3 py-2.5">
              <f.icon className="size-4 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{f.name}</p>
                <p className="text-muted-foreground">{f.meta}</p>
              </div>
              <Button variant="ghost" size="icon-xs" aria-label="More"><EllipsisIcon /></Button>
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "ChatSidebarTabs",
    description: "Chat sidebar tabs separating direct messages, channels and mentions.",
    code: `
const dms = [
  { name: "Priya Anand", last: "Sounds good, ship it!", online: true },
  { name: "Tomas Berg", last: "Can we sync at 3?", online: false },
  { name: "Lea Fournier", last: "Uploaded the new mocks", online: true },
]

export default function ChatSidebarTabs() {
  return (
    <Tabs defaultValue="direct" className="w-full max-w-xs border p-2">
      <TabsList variant="line" className="w-full">
        <TabsTrigger value="direct">Direct</TabsTrigger>
        <TabsTrigger value="channels">Channels</TabsTrigger>
        <TabsTrigger value="mentions">Mentions</TabsTrigger>
      </TabsList>
      <TabsContent value="direct" className="flex flex-col">
        {dms.map((dm) => (
          <button key={dm.name} type="button" className="flex items-center gap-2 px-1 py-2 text-start hover:bg-muted">
            <Avatar size="sm">
              <AvatarFallback>{dm.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
              {dm.online && <AvatarBadge className="bg-emerald-500" />}
            </Avatar>
            <div className="min-w-0">
              <p className="font-medium">{dm.name}</p>
              <p className="truncate text-muted-foreground">{dm.last}</p>
            </div>
          </button>
        ))}
      </TabsContent>
      <TabsContent value="channels" className="flex flex-col gap-1 px-1 py-1">
        {["general", "design", "releases"].map((c) => (
          <span key={c} className="flex items-center gap-1.5"><HashIcon className="size-3.5 text-muted-foreground" />{c}</span>
        ))}
      </TabsContent>
      <TabsContent value="mentions" className="px-1 py-2 text-muted-foreground">No new mentions.</TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "NotificationFeedTabs",
    description: "Notification tabs where tabs with unread items show a dot indicator.",
    code: `
const feeds = [
  { value: "all", label: "All", unread: true, items: ["Mira approved your expense report", "Build #882 failed on main"] },
  { value: "mentions", label: "Mentions", unread: true, items: ["Jon mentioned you in Launch plan"] },
  { value: "system", label: "System", unread: false, items: ["Maintenance window scheduled for Sunday"] },
]

export default function NotificationFeedTabs() {
  return (
    <Tabs defaultValue="all" className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <TabsList>
          {feeds.map((f) => (
            <TabsTrigger key={f.value} value={f.value}>
              {f.label}
              {f.unread && <span className="size-1.5 rounded-full bg-primary" aria-label="unread" />}
            </TabsTrigger>
          ))}
        </TabsList>
        <Button variant="ghost" size="xs">Mark all read</Button>
      </div>
      {feeds.map((f) => (
        <TabsContent key={f.value} value={f.value} className="flex flex-col gap-2">
          {f.items.map((item) => (
            <div key={item} className="flex gap-2 border p-2.5">
              <BellIcon className="mt-0.5 size-3.5 text-muted-foreground" />
              <span>{item}</span>
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "ProfilePageTabs",
    description: "Profile header followed by line tabs for posts, replies and likes.",
    code: `
export default function ProfilePageTabs() {
  return (
    <div className="w-full max-w-sm border">
      <div className="h-16 bg-gradient-to-r from-violet-500 to-fuchsia-400" />
      <div className="flex items-end gap-3 px-4 -mt-6">
        <Avatar size="lg" className="ring-4 ring-background">
          <AvatarFallback>KO</AvatarFallback>
        </Avatar>
        <div className="pb-1">
          <p className="text-sm font-medium">Kai Okafor</p>
          <p className="text-xs text-muted-foreground">@kaio · 2,481 followers</p>
        </div>
      </div>
      <Tabs defaultValue="posts" className="mt-3">
        <TabsList variant="line" className="w-full border-b px-2">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="replies">Replies</TabsTrigger>
          <TabsTrigger value="likes">Likes</TabsTrigger>
        </TabsList>
        <TabsContent value="posts" className="px-4 pb-4">Shipped dark mode for the mobile app today.</TabsContent>
        <TabsContent value="replies" className="px-4 pb-4 text-muted-foreground">Kai hasn&apos;t replied to anyone yet.</TabsContent>
        <TabsContent value="likes" className="px-4 pb-4 text-muted-foreground">Likes are private.</TabsContent>
      </Tabs>
    </div>
  )
}`,
  },
  {
    name: "CheckoutDeliveryTabs",
    description: "Checkout tabs to choose between home delivery and store pickup.",
    code: `
export default function CheckoutDeliveryTabs() {
  return (
    <Tabs defaultValue="delivery" className="w-full max-w-sm">
      <TabsList className="w-full">
        <TabsTrigger value="delivery"><TruckIcon data-icon="inline-start" />Delivery</TabsTrigger>
        <TabsTrigger value="pickup"><StoreIcon data-icon="inline-start" />Pickup</TabsTrigger>
      </TabsList>
      <TabsContent value="delivery" className="flex flex-col gap-3 border p-3">
        <div className="grid gap-1.5">
          <Label htmlFor="co-street">Street address</Label>
          <Input id="co-street" placeholder="12 Orchard Lane" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Input placeholder="City" aria-label="City" />
          <Input placeholder="Postcode" aria-label="Postcode" />
        </div>
        <p className="text-muted-foreground">Arrives Tue, Nov 18 · $4.90</p>
      </TabsContent>
      <TabsContent value="pickup" className="flex items-start gap-3 border p-3">
        <MapPinIcon className="mt-0.5 size-4" />
        <div>
          <p className="font-medium">Northgate store</p>
          <p className="text-muted-foreground">Ready in 2 hours · Free</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "PaymentMethodTabs",
    description: "Payment method tabs for card, bank transfer and wallet.",
    code: `
export default function PaymentMethodTabs() {
  return (
    <Tabs defaultValue="card" className="w-full max-w-sm border p-4">
      <p className="text-sm font-medium">Payment method</p>
      <TabsList className="w-full">
        <TabsTrigger value="card"><CreditCardIcon data-icon="inline-start" />Card</TabsTrigger>
        <TabsTrigger value="bank"><LandmarkIcon data-icon="inline-start" />Bank</TabsTrigger>
        <TabsTrigger value="wallet"><WalletIcon data-icon="inline-start" />Wallet</TabsTrigger>
      </TabsList>
      <TabsContent value="card" className="flex flex-col gap-2">
        <Input placeholder="Card number" inputMode="numeric" aria-label="Card number" />
        <div className="grid grid-cols-2 gap-2">
          <Input placeholder="MM / YY" aria-label="Expiry" />
          <Input placeholder="CVC" aria-label="CVC" />
        </div>
      </TabsContent>
      <TabsContent value="bank" className="text-muted-foreground">
        Transfer to IBAN DE00 1234 5678 9000 using reference <span className="font-mono text-foreground">ORD-5531</span>.
      </TabsContent>
      <TabsContent value="wallet" className="text-muted-foreground">
        You&apos;ll be redirected to confirm the payment in your wallet app.
      </TabsContent>
      <Button className="w-full">Pay $64.00</Button>
    </Tabs>
  )
}`,
  },
  {
    name: "CalendarViewTabs",
    description: "Compact day, week and month tabs in a calendar toolbar.",
    code: `
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export default function CalendarViewTabs() {
  return (
    <Tabs defaultValue="week" className="w-full max-w-md">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon-sm" aria-label="Previous"><ChevronLeftIcon /></Button>
          <Button variant="outline" size="icon-sm" aria-label="Next"><ChevronRightIcon /></Button>
          <span className="ms-1 text-sm font-medium">Nov 17 – 23</span>
        </div>
        <TabsList>
          <TabsTrigger value="day">Day</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="day" className="border p-3">Mon 17 · 3 events · first at 09:30</TabsContent>
      <TabsContent value="week" className="grid grid-cols-7 border">
        {days.map((d, i) => (
          <div key={d} className="border-e p-1.5 text-center last:border-e-0">
            <p className="text-muted-foreground">{d}</p>
            <p className="font-medium">{17 + i}</p>
            {i % 2 === 0 && <div className="mt-1 h-1.5 bg-primary/60" />}
          </div>
        ))}
      </TabsContent>
      <TabsContent value="month" className="border p-3">November · 21 events</TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "AdminUserStatusTabs",
    description: "Admin table filtered by user status tabs.",
    code: `
const users = [
  { name: "Ada Brooks", email: "ada@northwind.dev", status: "active" },
  { name: "Ben Ito", email: "ben@northwind.dev", status: "active" },
  { name: "Cleo Park", email: "cleo@northwind.dev", status: "invited" },
  { name: "Dev Raman", email: "dev@northwind.dev", status: "suspended" },
]

export default function AdminUserStatusTabs() {
  const [status, setStatus] = React.useState("active")
  const rows = users.filter((u) => u.status === status)

  return (
    <Tabs value={status} onValueChange={(v) => setStatus(v as string)} className="w-full max-w-md">
      <TabsList>
        {["active", "invited", "suspended"].map((s) => (
          <TabsTrigger key={s} value={s} className="capitalize">
            {s}
            <span className="text-muted-foreground tabular-nums">{users.filter((u) => u.status === s).length}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={status}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((u) => (
              <TableRow key={u.email}>
                <TableCell className="font-medium">{u.name}</TableCell>
                <TableCell className="text-muted-foreground">{u.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "CloseableEditorTabs",
    description: "Editor file tabs that can be closed, falling back to a neighbouring tab.",
    code: `
const initial = ["index.ts", "router.ts", "styles.css", "README.md"]

export default function CloseableEditorTabs() {
  const [files, setFiles] = React.useState(initial)
  const [active, setActive] = React.useState("router.ts")

  function close(name: string) {
    const next = files.filter((f) => f !== name)
    setFiles(next)
    if (active === name && next.length) setActive(next[Math.max(0, files.indexOf(name) - 1)]!)
  }

  if (!files.length) {
    return (
      <div className="flex w-full max-w-md flex-col items-center gap-2 border p-6 text-xs text-muted-foreground">
        All files closed.
        <Button size="xs" variant="outline" onClick={() => { setFiles(initial); setActive(initial[0]!) }}>Reopen files</Button>
      </div>
    )
  }

  return (
    <Tabs value={active} onValueChange={(v) => setActive(v as string)} className="w-full max-w-md gap-0 border">
      <TabsList className="h-8 w-full justify-start overflow-x-auto p-0">
        {files.map((f) => (
          <div key={f} className="group flex h-full items-center border-e">
            <TabsTrigger value={f} className="flex-none px-2.5 font-mono">
              <FileCodeIcon data-icon="inline-start" />
              {f}
            </TabsTrigger>
            <button
              type="button"
              aria-label={"Close " + f}
              onClick={() => close(f)}
              className="me-1 p-0.5 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <XIcon className="size-3" />
            </button>
          </div>
        ))}
      </TabsList>
      {files.map((f) => (
        <TabsContent key={f} value={f} className="p-3 font-mono text-muted-foreground">
          {"// " + f + " — 42 lines"}
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "AddableDashboardTabs",
    description: "Saved dashboard views as tabs with a button that adds a new view.",
    code: `
export default function AddableDashboardTabs() {
  const [views, setViews] = React.useState(["Overview", "Marketing"])
  const [active, setActive] = React.useState("Overview")

  function addView() {
    const name = "View " + (views.length + 1)
    setViews([...views, name])
    setActive(name)
  }

  return (
    <Tabs value={active} onValueChange={(v) => setActive(v as string)} className="w-full max-w-md">
      <div className="flex items-center gap-1">
        <TabsList variant="line">
          {views.map((v) => <TabsTrigger key={v} value={v}>{v}</TabsTrigger>)}
        </TabsList>
        <Button variant="ghost" size="icon-sm" aria-label="Add view" onClick={addView} disabled={views.length >= 5}>
          <PlusIcon />
        </Button>
      </div>
      {views.map((v) => (
        <TabsContent key={v} value={v} className="flex h-24 items-center justify-center border border-dashed text-muted-foreground">
          {v} widgets appear here
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "VerticalLineDocsTabs",
    description: "Vertical line-variant tabs for API reference sections.",
    code: `
const endpoints = [
  { value: "list", label: "List invoices", method: "GET", path: "/v1/invoices" },
  { value: "create", label: "Create invoice", method: "POST", path: "/v1/invoices" },
  { value: "void", label: "Void invoice", method: "POST", path: "/v1/invoices/:id/void" },
]

export default function VerticalLineDocsTabs() {
  return (
    <Tabs defaultValue="list" orientation="vertical" className="w-full max-w-md gap-4">
      <TabsList variant="line" className="w-36 shrink-0 items-stretch">
        {endpoints.map((e) => <TabsTrigger key={e.value} value={e.value}>{e.label}</TabsTrigger>)}
      </TabsList>
      {endpoints.map((e) => (
        <TabsContent key={e.value} value={e.value} className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-mono">
            <Badge variant={e.method === "GET" ? "secondary" : "default"}>{e.method}</Badge>
            <span className="truncate">{e.path}</span>
          </div>
          <p className="text-muted-foreground">Requires a secret key with the invoices:write scope for writes.</p>
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "KeyboardShortcutTabs",
    description: "Tabs with number-key shortcuts shown as Kbd hints and handled globally.",
    code: `
const panes = ["Console", "Network", "Storage"]

export default function KeyboardShortcutTabs() {
  const [active, setActive] = React.useState("Console")

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!e.altKey) return
      const i = Number(e.key) - 1
      if (panes[i]) setActive(panes[i]!)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <Tabs value={active} onValueChange={(v) => setActive(v as string)} className="w-full max-w-sm">
      <TabsList>
        {panes.map((p, i) => (
          <TabsTrigger key={p} value={p}>
            {p}
            <Kbd>{i + 1}</Kbd>
          </TabsTrigger>
        ))}
      </TabsList>
      {panes.map((p) => (
        <TabsContent key={p} value={p} className="border p-3 font-mono text-muted-foreground">
          {p.toLowerCase()} panel ready
        </TabsContent>
      ))}
      <p className="text-muted-foreground">Press Alt + 1–3 to switch panels.</p>
    </Tabs>
  )
}`,
  },
  {
    name: "LazyLoadingTabs",
    description: "Switching tabs shows a short skeleton loading state before content appears.",
    code: `
const content: Record<string, string[]> = {
  open: ["Fix checkout rounding", "Add CSV export", "Audit log filters"],
  merged: ["Upgrade router", "Drop legacy auth"],
  closed: ["Experimental grid layout"],
}

export default function LazyLoadingTabs() {
  const [tab, setTab] = React.useState("open")
  const [loading, setLoading] = React.useState(false)

  function change(value: string) {
    setTab(value)
    setLoading(true)
    setTimeout(() => setLoading(false), 700)
  }

  return (
    <Tabs value={tab} onValueChange={(v) => change(v as string)} className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="open"><GitPullRequestIcon data-icon="inline-start" />Open</TabsTrigger>
        <TabsTrigger value="merged"><GitMergeIcon data-icon="inline-start" />Merged</TabsTrigger>
        <TabsTrigger value="closed"><CircleXIcon data-icon="inline-start" />Closed</TabsTrigger>
      </TabsList>
      <TabsContent value={tab} className="flex flex-col gap-2 border p-3">
        {loading
          ? [0, 1, 2].map((i) => <Skeleton key={i} className="h-4 w-full" />)
          : content[tab]!.map((pr) => <p key={pr}>{pr}</p>)}
      </TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "EmptyStateTabs",
    description: "Tabs where one panel shows an empty state with a call to action.",
    code: `
export default function EmptyStateTabs() {
  return (
    <Tabs defaultValue="drafts" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="published">Published</TabsTrigger>
        <TabsTrigger value="drafts">Drafts</TabsTrigger>
        <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
      </TabsList>
      <TabsContent value="published" className="border p-3">How we cut build times by 60%</TabsContent>
      <TabsContent value="drafts">
        <Empty className="border">
          <EmptyHeader>
            <EmptyMedia variant="icon"><FilePenIcon /></EmptyMedia>
            <EmptyTitle>No drafts</EmptyTitle>
            <EmptyDescription>Start writing and your drafts will be saved here.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm">New post</Button>
          </EmptyContent>
        </Empty>
      </TabsContent>
      <TabsContent value="scheduled" className="border p-3">Release notes v4.2 · Nov 20, 09:00</TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "NestedTabs",
    description: "Outer environment tabs with nested line tabs for each environment's details.",
    code: `
export default function NestedTabs() {
  return (
    <Tabs defaultValue="production" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="production">Production</TabsTrigger>
        <TabsTrigger value="staging">Staging</TabsTrigger>
      </TabsList>
      {["production", "staging"].map((env) => (
        <TabsContent key={env} value={env} className="border p-3">
          <Tabs defaultValue="logs">
            <TabsList variant="line">
              <TabsTrigger value="logs">Logs</TabsTrigger>
              <TabsTrigger value="env">Variables</TabsTrigger>
              <TabsTrigger value="domains">Domains</TabsTrigger>
            </TabsList>
            <TabsContent value="logs" className="font-mono text-muted-foreground">[{env}] GET /api/health 200 12ms</TabsContent>
            <TabsContent value="env" className="font-mono text-muted-foreground">DATABASE_URL, REDIS_URL, SENTRY_DSN</TabsContent>
            <TabsContent value="domains" className="text-muted-foreground">{env === "production" ? "app.lumen.dev" : "staging.lumen.dev"}</TabsContent>
          </Tabs>
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "ChartMetricTabs",
    description: "Large metric tabs above a bar chart, each trigger showing its total.",
    code: `
const metrics = {
  revenue: { label: "Revenue", total: "$48.2k", bars: [40, 55, 48, 70, 62, 80, 74] },
  orders: { label: "Orders", total: "1,204", bars: [60, 50, 65, 58, 72, 68, 90] },
  refunds: { label: "Refunds", total: "23", bars: [10, 20, 8, 15, 12, 6, 9] },
}

export default function ChartMetricTabs() {
  return (
    <Tabs defaultValue="revenue" className="w-full max-w-md gap-0 border">
      <TabsList className="h-auto w-full p-0">
        {Object.entries(metrics).map(([key, m]) => (
          <TabsTrigger key={key} value={key} className="h-auto flex-col items-start gap-0 border-e px-3 py-2 last:border-e-0">
            <span className="text-muted-foreground">{m.label}</span>
            <span className="text-base font-semibold tabular-nums">{m.total}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(metrics).map(([key, m]) => (
        <TabsContent key={key} value={key} className="flex h-32 items-end gap-2 p-3">
          {m.bars.map((h, i) => (
            <div key={i} className="flex-1 bg-primary/80" style={{ height: h + "%" }} />
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "OrderStatusTabs",
    description: "Order management tabs with a destructive badge on the tab needing attention.",
    code: `
const orders = {
  pending: [{ id: "#4821", customer: "Lina Vos", total: "$82.00" }, { id: "#4822", customer: "Omar Haddad", total: "$19.50" }],
  shipped: [{ id: "#4810", customer: "Sam Reyes", total: "$240.00" }],
  issues: [{ id: "#4799", customer: "Ivy Chen", total: "$56.10" }],
}

export default function OrderStatusTabs() {
  return (
    <Tabs defaultValue="pending" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="pending">Pending <Badge variant="secondary">{orders.pending.length}</Badge></TabsTrigger>
        <TabsTrigger value="shipped">Shipped</TabsTrigger>
        <TabsTrigger value="issues">Issues <Badge variant="destructive">{orders.issues.length}</Badge></TabsTrigger>
      </TabsList>
      {Object.entries(orders).map(([key, list]) => (
        <TabsContent key={key} value={key} className="divide-y border">
          {list.map((o) => (
            <div key={o.id} className="flex items-center justify-between px-3 py-2">
              <span><span className="font-mono">{o.id}</span> · {o.customer}</span>
              <span className="font-medium tabular-nums">{o.total}</span>
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "LinkNavigationTabs",
    description: "Tabs rendered as anchor links for page-level section navigation.",
    code: `
const links = [
  { value: "overview", label: "Overview" },
  { value: "deployments", label: "Deployments" },
  { value: "analytics", label: "Analytics" },
  { value: "settings", label: "Settings" },
]

export default function LinkNavigationTabs() {
  return (
    <Tabs defaultValue="deployments" className="w-full max-w-md">
      <TabsList variant="line" className="w-full justify-start border-b">
        {links.map((l) => (
          <TabsTrigger
            key={l.value}
            value={l.value}
            nativeButton={false}
            render={<a href={"#" + l.value} />}
            className="flex-none"
          >
            {l.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <p className="text-muted-foreground">Each tab is a real link, so it can be opened in a new tab.</p>
    </Tabs>
  )
}`,
  },
  {
    name: "ScrollableCategoryTabs",
    description: "Many category tabs inside a horizontally scrollable list.",
    code: `
const categories = ["All", "Pizza", "Sushi", "Burgers", "Salads", "Tacos", "Ramen", "Desserts", "Drinks"]

export default function ScrollableCategoryTabs() {
  return (
    <Tabs defaultValue="All" className="w-full max-w-sm">
      <div className="overflow-x-auto">
        <TabsList variant="line" className="w-max">
          {categories.map((c) => (
            <TabsTrigger key={c} value={c} className="flex-none">{c}</TabsTrigger>
          ))}
        </TabsList>
      </div>
      {categories.map((c) => (
        <TabsContent key={c} value={c} className="border p-3 text-muted-foreground">
          Showing {c === "All" ? "every restaurant" : c.toLowerCase() + " places"} near you.
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "ApiResponseTabs",
    description: "HTTP response inspector tabs for preview, headers and raw body.",
    code: `
const body = { id: "cus_81Kq", name: "Hollis & Co", balance: 1250, currency: "eur" }
const headers = [["content-type", "application/json"], ["x-request-id", "req_7f2a91"], ["cache-control", "no-store"]]

export default function ApiResponseTabs() {
  return (
    <Tabs defaultValue="preview" className="w-full max-w-md gap-0 border">
      <div className="flex items-center justify-between border-b px-2">
        <TabsList variant="line" className="h-9">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="headers">Headers</TabsTrigger>
          <TabsTrigger value="raw">Raw</TabsTrigger>
        </TabsList>
        <span className="flex items-center gap-1.5 text-emerald-600"><span className="size-1.5 rounded-full bg-emerald-500" />200 OK · 84 ms</span>
      </div>
      <TabsContent value="preview" className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 p-3">
        {Object.entries(body).map(([k, v]) => (
          <React.Fragment key={k}>
            <span className="text-muted-foreground">{k}</span>
            <span className="font-medium">{String(v)}</span>
          </React.Fragment>
        ))}
      </TabsContent>
      <TabsContent value="headers" className="p-3 font-mono">
        {headers.map(([k, v]) => <p key={k}><span className="text-muted-foreground">{k}:</span> {v}</p>)}
      </TabsContent>
      <TabsContent value="raw" className="overflow-x-auto p-3">
        <pre className="font-mono">{JSON.stringify(body, null, 2)}</pre>
      </TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "WritePreviewTabs",
    description: "Write and preview tabs for a markdown comment editor.",
    code: `
export default function WritePreviewTabs() {
  const [text, setText] = React.useState("Looks great! Two notes:\\n- rename the env var\\n- add a test for empty carts")

  return (
    <Tabs defaultValue="write" className="w-full max-w-md gap-0 border">
      <TabsList variant="line" className="h-9 border-b px-2">
        <TabsTrigger value="write">Write</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="write" className="p-2">
        <Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-24" aria-label="Comment" />
      </TabsContent>
      <TabsContent value="preview" className="min-h-28 p-3">
        {text.split("\\n").map((line, i) =>
          line.startsWith("- ") ? (
            <li key={i} className="ms-4 list-disc">{line.slice(2)}</li>
          ) : (
            <p key={i}>{line}</p>
          )
        )}
      </TabsContent>
      <div className="flex justify-end border-t p-2">
        <Button size="sm">Comment</Button>
      </div>
    </Tabs>
  )
}`,
  },
  {
    name: "IntegrationsTabs",
    description: "Connected and available integrations split into tabs with toggles.",
    code: `
const connected = [
  { name: "Slack", desc: "Post deploy updates to #releases" },
  { name: "GitHub", desc: "Sync pull request status" },
]
const available = [
  { name: "Linear", desc: "Create issues from feedback" },
  { name: "PagerDuty", desc: "Escalate failed health checks" },
]

export default function IntegrationsTabs() {
  return (
    <Tabs defaultValue="connected" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="connected">Connected</TabsTrigger>
        <TabsTrigger value="available">Available</TabsTrigger>
      </TabsList>
      <TabsContent value="connected" className="divide-y border">
        {connected.map((i) => (
          <div key={i.name} className="flex items-center justify-between gap-3 px-3 py-2.5">
            <div>
              <p className="font-medium">{i.name}</p>
              <p className="text-muted-foreground">{i.desc}</p>
            </div>
            <Switch defaultChecked aria-label={"Enable " + i.name} />
          </div>
        ))}
      </TabsContent>
      <TabsContent value="available" className="divide-y border">
        {available.map((i) => (
          <div key={i.name} className="flex items-center justify-between gap-3 px-3 py-2.5">
            <div>
              <p className="font-medium">{i.name}</p>
              <p className="text-muted-foreground">{i.desc}</p>
            </div>
            <Button size="xs" variant="outline">Connect</Button>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "TeamMembersTabs",
    description: "Team management tabs for members and pending invitations.",
    code: `
const members = [
  { name: "Rhea Kapoor", role: "Owner" },
  { name: "Felix Navarro", role: "Admin" },
  { name: "June Abara", role: "Member" },
]
const invites = ["oscar@fieldnotes.io", "wren@fieldnotes.io"]

export default function TeamMembersTabs() {
  return (
    <Tabs defaultValue="members" className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="invites">Invites <Badge variant="secondary">{invites.length}</Badge></TabsTrigger>
        </TabsList>
        <Button size="sm"><UserPlusIcon data-icon="inline-start" />Invite</Button>
      </div>
      <TabsContent value="members" className="flex flex-col gap-2">
        {members.map((m) => (
          <div key={m.name} className="flex items-center gap-3">
            <Avatar size="sm"><AvatarFallback>{m.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback></Avatar>
            <span className="flex-1 font-medium">{m.name}</span>
            <Badge variant="outline">{m.role}</Badge>
          </div>
        ))}
      </TabsContent>
      <TabsContent value="invites" className="flex flex-col gap-2">
        {invites.map((email) => (
          <div key={email} className="flex items-center justify-between">
            <span className="text-muted-foreground">{email}</span>
            <Button variant="ghost" size="xs">Revoke</Button>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "SecuritySettingsTabs",
    description: "Security tabs covering two-factor auth and active sessions.",
    code: `
const sessions = [
  { device: "MacBook Pro · Safari", place: "Lisbon", current: true, icon: LaptopIcon },
  { device: "Pixel 9 · App", place: "Porto", current: false, icon: SmartphoneIcon },
]

export default function SecuritySettingsTabs() {
  return (
    <Tabs defaultValue="2fa" className="w-full max-w-sm">
      <TabsList variant="line">
        <TabsTrigger value="2fa"><ShieldCheckIcon data-icon="inline-start" />Two-factor</TabsTrigger>
        <TabsTrigger value="sessions"><MonitorSmartphoneIcon data-icon="inline-start" />Sessions</TabsTrigger>
      </TabsList>
      <TabsContent value="2fa" className="flex items-center justify-between gap-3 border p-3">
        <div>
          <p className="font-medium">Authenticator app</p>
          <p className="text-muted-foreground">Enabled on Oct 2, 2026</p>
        </div>
        <Badge variant="secondary">On</Badge>
      </TabsContent>
      <TabsContent value="sessions" className="divide-y border">
        {sessions.map((s) => (
          <div key={s.device} className="flex items-center gap-3 px-3 py-2.5">
            <s.icon className="size-4 text-muted-foreground" />
            <div className="flex-1">
              <p className="font-medium">{s.device}</p>
              <p className="text-muted-foreground">{s.place}{s.current ? " · This device" : ""}</p>
            </div>
            {!s.current && <Button variant="destructive" size="xs">Sign out</Button>}
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "ThemePreviewTabs",
    description: "Appearance tabs that preview light, dark and system themes as mini mockups.",
    code: `
function Mock({ dark }: { dark: boolean }) {
  return (
    <div className={cn("flex h-24 gap-2 border p-2", dark ? "bg-zinc-900" : "bg-white")}>
      <div className={cn("w-1/4", dark ? "bg-zinc-800" : "bg-zinc-100")} />
      <div className="flex flex-1 flex-col gap-1.5">
        <div className={cn("h-2 w-2/3", dark ? "bg-zinc-700" : "bg-zinc-200")} />
        <div className={cn("h-2 w-1/2", dark ? "bg-zinc-700" : "bg-zinc-200")} />
        <div className="mt-auto h-4 w-12 bg-indigo-500" />
      </div>
    </div>
  )
}

export default function ThemePreviewTabs() {
  return (
    <Tabs defaultValue="system" className="w-full max-w-xs">
      <TabsList className="w-full">
        <TabsTrigger value="light"><SunIcon data-icon="inline-start" />Light</TabsTrigger>
        <TabsTrigger value="dark"><MoonIcon data-icon="inline-start" />Dark</TabsTrigger>
        <TabsTrigger value="system"><MonitorIcon data-icon="inline-start" />System</TabsTrigger>
      </TabsList>
      <TabsContent value="light"><Mock dark={false} /></TabsContent>
      <TabsContent value="dark"><Mock dark /></TabsContent>
      <TabsContent value="system" className="grid grid-cols-2 gap-2">
        <Mock dark={false} />
        <Mock dark />
      </TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "LeaderboardPeriodTabs",
    description: "Leaderboard with weekly, monthly and all-time ranking tabs.",
    code: `
const boards = {
  week: [["Mateo Silva", 1840], ["Hana Mori", 1710], ["Aziz Karimi", 1505]],
  month: [["Hana Mori", 7420], ["Grace Liu", 6990], ["Mateo Silva", 6610]],
  all: [["Grace Liu", 88210], ["Aziz Karimi", 80150], ["Hana Mori", 79020]],
} as const

export default function LeaderboardPeriodTabs() {
  return (
    <Tabs defaultValue="week" className="w-full max-w-xs">
      <TabsList className="w-full">
        <TabsTrigger value="week">Week</TabsTrigger>
        <TabsTrigger value="month">Month</TabsTrigger>
        <TabsTrigger value="all">All time</TabsTrigger>
      </TabsList>
      {Object.entries(boards).map(([key, rows]) => (
        <TabsContent key={key} value={key} className="flex flex-col gap-1">
          {rows.map(([name, xp], i) => (
            <div key={name} className="flex items-center gap-3 border px-3 py-2">
              <span className={cn("w-4 font-semibold tabular-nums", i === 0 && "text-amber-500")}>{i + 1}</span>
              <span className="flex-1">{name}</span>
              <span className="tabular-nums text-muted-foreground">{xp.toLocaleString()} XP</span>
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "CourseProgressTabs",
    description: "Learning tabs separating in-progress and completed courses with progress bars.",
    code: `
const courses = [
  { title: "Intro to TypeScript", done: 72 },
  { title: "Design systems 101", done: 35 },
  { title: "Accessible forms", done: 100 },
  { title: "Git fundamentals", done: 100 },
]

export default function CourseProgressTabs() {
  return (
    <Tabs defaultValue="progress" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="progress">In progress</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>
      <TabsContent value="progress" className="flex flex-col gap-3">
        {courses.filter((c) => c.done < 100).map((c) => (
          <div key={c.title} className="flex flex-col gap-1.5">
            <div className="flex justify-between">
              <span className="font-medium">{c.title}</span>
              <span className="tabular-nums text-muted-foreground">{c.done}%</span>
            </div>
            <Progress value={c.done} />
          </div>
        ))}
      </TabsContent>
      <TabsContent value="completed" className="flex flex-col gap-2">
        {courses.filter((c) => c.done === 100).map((c) => (
          <div key={c.title} className="flex items-center gap-2">
            <CircleCheckIcon className="size-4 text-emerald-600" />
            {c.title}
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "MobileBottomTabBar",
    description: "Mobile app layout with a bottom tab bar of stacked icon and label triggers.",
    code: `
const tabs = [
  { value: "home", label: "Home", icon: HouseIcon },
  { value: "search", label: "Search", icon: SearchIcon },
  { value: "orders", label: "Orders", icon: ShoppingBagIcon },
  { value: "profile", label: "Profile", icon: UserIcon },
]

export default function MobileBottomTabBar() {
  return (
    <Tabs defaultValue="home" className="h-80 w-full max-w-[280px] gap-0 border">
      {tabs.map((t) => (
        <TabsContent key={t.value} value={t.value} className="flex items-center justify-center text-sm text-muted-foreground">
          {t.label} screen
        </TabsContent>
      ))}
      <TabsList className="order-last h-14 w-full border-t">
        {tabs.map((t) => (
          <TabsTrigger key={t.value} value={t.value} className="h-full flex-col gap-0.5 text-[10px]">
            <t.icon className="size-5" />
            {t.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}`,
  },
  {
    name: "UnsavedChangesTabs",
    description: "Settings tabs that flag a tab with a dot when its form has unsaved edits.",
    code: `
export default function UnsavedChangesTabs() {
  const [store, setStore] = React.useState("Kettle & Crumb")
  const [email, setEmail] = React.useState("hello@kettlecrumb.shop")
  const storeDirty = store !== "Kettle & Crumb"
  const emailDirty = email !== "hello@kettlecrumb.shop"

  return (
    <Tabs defaultValue="store" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="store">Store {storeDirty && <span className="size-1.5 rounded-full bg-amber-500" />}</TabsTrigger>
        <TabsTrigger value="contact">Contact {emailDirty && <span className="size-1.5 rounded-full bg-amber-500" />}</TabsTrigger>
      </TabsList>
      <TabsContent value="store" keepMounted className="grid gap-1.5">
        <Label htmlFor="uc-store">Store name</Label>
        <Input id="uc-store" value={store} onChange={(e) => setStore(e.target.value)} />
      </TabsContent>
      <TabsContent value="contact" keepMounted className="grid gap-1.5">
        <Label htmlFor="uc-email">Support email</Label>
        <Input id="uc-email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </TabsContent>
      <div className="flex justify-end gap-2">
        <Button variant="ghost" size="sm" disabled={!storeDirty && !emailDirty} onClick={() => { setStore("Kettle & Crumb"); setEmail("hello@kettlecrumb.shop") }}>
          Discard
        </Button>
        <Button size="sm" disabled={!storeDirty && !emailDirty}>Save</Button>
      </div>
    </Tabs>
  )
}`,
  },
  {
    name: "KeepMountedFormTabs",
    description: "Multi-section form whose panels stay mounted so typed values survive tab switches.",
    code: `
export default function KeepMountedFormTabs() {
  return (
    <form className="w-full max-w-sm border p-4" onSubmit={(e) => e.preventDefault()}>
      <Tabs defaultValue="event">
        <TabsList className="w-full">
          <TabsTrigger value="event">Event</TabsTrigger>
          <TabsTrigger value="venue">Venue</TabsTrigger>
          <TabsTrigger value="tickets">Tickets</TabsTrigger>
        </TabsList>
        <TabsContent value="event" keepMounted className="flex flex-col gap-2">
          <Input name="title" placeholder="Event title" aria-label="Event title" />
          <Input name="date" type="date" aria-label="Date" />
        </TabsContent>
        <TabsContent value="venue" keepMounted className="flex flex-col gap-2">
          <Input name="venue" placeholder="Venue name" aria-label="Venue name" />
          <Input name="capacity" type="number" placeholder="Capacity" aria-label="Capacity" />
        </TabsContent>
        <TabsContent value="tickets" keepMounted className="flex flex-col gap-2">
          <Input name="price" placeholder="Price (USD)" aria-label="Ticket price" />
          <p className="text-muted-foreground">Values in other tabs are kept while you switch.</p>
        </TabsContent>
      </Tabs>
      <Button type="submit" size="sm" className="mt-4 w-full">Publish event</Button>
    </form>
  )
}`,
  },
  {
    name: "VerticalIconRailTabs",
    description: "Narrow vertical icon rail of tabs beside a tool panel, like a design app sidebar.",
    code: `
const tools = [
  { value: "layers", label: "Layers", icon: LayersIcon },
  { value: "assets", label: "Assets", icon: ShapesIcon },
  { value: "comments", label: "Comments", icon: MessageSquareIcon },
  { value: "history", label: "History", icon: HistoryIcon },
]

export default function VerticalIconRailTabs() {
  return (
    <Tabs defaultValue="layers" orientation="vertical" className="h-56 w-full max-w-xs gap-0 border">
      <TabsList className="h-full justify-start border-e">
        {tools.map((t) => (
          <TabsTrigger key={t.value} value={t.value} aria-label={t.label} className="size-8 flex-none justify-center p-0">
            <t.icon />
          </TabsTrigger>
        ))}
      </TabsList>
      {tools.map((t) => (
        <TabsContent key={t.value} value={t.value} className="p-3">
          <p className="mb-2 font-medium">{t.label}</p>
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "ComparePlanTabs",
    description: "Plan tabs that list the features included in each tier.",
    code: `
const plans = {
  starter: { price: "$0", features: ["3 projects", "1 GB storage", "Community support"] },
  team: { price: "$24", features: ["Unlimited projects", "100 GB storage", "Priority support", "SSO"] },
  enterprise: { price: "Custom", features: ["Everything in Team", "Audit logs", "Dedicated manager", "99.99% SLA"] },
}

export default function ComparePlanTabs() {
  return (
    <Tabs defaultValue="team" className="w-full max-w-sm">
      <TabsList className="w-full">
        <TabsTrigger value="starter">Starter</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
        <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
      </TabsList>
      {Object.entries(plans).map(([key, plan]) => (
        <TabsContent key={key} value={key} className="flex flex-col gap-3 border p-4">
          <p className="text-2xl font-semibold">{plan.price}<span className="text-xs font-normal text-muted-foreground">{plan.price.startsWith("$") ? " / seat / month" : ""}</span></p>
          <ul className="flex flex-col gap-1.5">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-2"><CheckIcon className="size-3.5" />{f}</li>
            ))}
          </ul>
          <Button size="sm" variant={key === "team" ? "default" : "outline"}>Choose {key}</Button>
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "ActivityTimelineTabs",
    description: "Ticket tabs showing a comment timeline and a separate history log.",
    code: `
const events = [
  { who: "Elif Demir", what: "changed priority to High", when: "10:42" },
  { who: "Noah Park", what: "assigned the ticket to Elif", when: "09:15" },
  { who: "System", what: "created ticket from email", when: "08:58" },
]

export default function ActivityTimelineTabs() {
  return (
    <Tabs defaultValue="history" className="w-full max-w-sm">
      <TabsList variant="line">
        <TabsTrigger value="comments"><MessageCircleIcon data-icon="inline-start" />Comments</TabsTrigger>
        <TabsTrigger value="history"><HistoryIcon data-icon="inline-start" />History</TabsTrigger>
      </TabsList>
      <TabsContent value="comments" className="border p-3">
        <p className="font-medium">Elif Demir</p>
        <p className="text-muted-foreground">Reproduced on Safari 18, looking into it now.</p>
      </TabsContent>
      <TabsContent value="history">
        <ol className="relative ms-1.5 border-s">
          {events.map((e) => (
            <li key={e.when} className="ms-4 pb-3 last:pb-0">
              <span className="absolute -start-1 mt-1 size-2 rounded-full bg-muted-foreground" />
              <p><span className="font-medium">{e.who}</span> {e.what}</p>
              <p className="text-muted-foreground">{e.when}</p>
            </li>
          ))}
        </ol>
      </TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "WeatherForecastTabs",
    description: "Weather widget with today, tomorrow and 5-day forecast tabs.",
    code: `
const hourly = [
  { h: "09", t: 12, icon: CloudSunIcon },
  { h: "12", t: 16, icon: SunIcon },
  { h: "15", t: 17, icon: SunIcon },
  { h: "18", t: 13, icon: CloudIcon },
]
const daily = [["Mon", 17, 9], ["Tue", 14, 8], ["Wed", 11, 6], ["Thu", 13, 7], ["Fri", 15, 9]] as const

export default function WeatherForecastTabs() {
  return (
    <Tabs defaultValue="today" className="w-full max-w-xs border p-3">
      <TabsList className="w-full">
        <TabsTrigger value="today">Today</TabsTrigger>
        <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
        <TabsTrigger value="week">5 days</TabsTrigger>
      </TabsList>
      <TabsContent value="today" className="grid grid-cols-4 text-center">
        {hourly.map((slot) => (
          <div key={slot.h} className="flex flex-col items-center gap-1">
            <span className="text-muted-foreground">{slot.h}:00</span>
            <slot.icon className="size-5" />
            <span className="font-medium">{slot.t}°</span>
          </div>
        ))}
      </TabsContent>
      <TabsContent value="tomorrow" className="flex items-center gap-3">
        <CloudRainIcon className="size-8" />
        <div>
          <p className="text-lg font-semibold">14° / 8°</p>
          <p className="text-muted-foreground">Showers in the afternoon</p>
        </div>
      </TabsContent>
      <TabsContent value="week" className="flex flex-col gap-1">
        {daily.map(([d, hi, lo]) => (
          <div key={d} className="flex justify-between">
            <span>{d}</span>
            <span className="tabular-nums"><span className="font-medium">{hi}°</span> <span className="text-muted-foreground">{lo}°</span></span>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}`,
  },
  {
    name: "ConferenceScheduleTabs",
    description: "Conference agenda with a tab per day listing talks and rooms.",
    code: `
const agenda = {
  day1: [["09:00", "Opening keynote", "Main hall"], ["10:30", "Scaling Postgres", "Room B"]],
  day2: [["09:30", "Design tokens at scale", "Room A"], ["14:00", "Edge rendering", "Main hall"]],
  day3: [["10:00", "Hiring for craft", "Room C"], ["16:00", "Closing panel", "Main hall"]],
}

export default function ConferenceScheduleTabs() {
  return (
    <Tabs defaultValue="day1" className="w-full max-w-sm">
      <TabsList className="h-auto w-full">
        {["day1", "day2", "day3"].map((d, i) => (
          <TabsTrigger key={d} value={d} className="flex-col gap-0 py-1">
            <span>Day {i + 1}</span>
            <span className="text-[10px] text-muted-foreground">Mar {12 + i}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(agenda).map(([key, talks]) => (
        <TabsContent key={key} value={key} className="divide-y border">
          {talks.map(([time, title, room]) => (
            <div key={title} className="flex gap-3 px-3 py-2.5">
              <span className="w-10 font-mono text-muted-foreground">{time}</span>
              <div>
                <p className="font-medium">{title}</p>
                <p className="text-muted-foreground">{room}</p>
              </div>
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "TabsSizeScale",
    description: "Small, default and large tab list sizes stacked for comparison.",
    code: `
const sizes = [
  { label: "Small", list: "group-data-horizontal/tabs:h-6", trigger: "text-[11px] px-1" },
  { label: "Default", list: "", trigger: "" },
  { label: "Large", list: "group-data-horizontal/tabs:h-10", trigger: "text-sm px-3" },
]

export default function TabsSizeScale() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {sizes.map((s) => (
        <div key={s.label} className="flex items-center justify-between gap-4">
          <span className="w-14 text-xs text-muted-foreground">{s.label}</span>
          <Tabs defaultValue="code" className="flex-1">
            <TabsList className={cn("w-full", s.list)}>
              <TabsTrigger value="code" className={s.trigger}>Code</TabsTrigger>
              <TabsTrigger value="issues" className={s.trigger}>Issues</TabsTrigger>
              <TabsTrigger value="wiki" className={s.trigger}>Wiki</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      ))}
    </div>
  )
}`,
  },
]

export default examples
