import type { Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "ProfileCardSeparator",
    description: "Profile card using a separator between the identity header and follower stats.",
    code: `
const stats = [
  { label: "Posts", value: "128" },
  { label: "Followers", value: "4.2k" },
  { label: "Following", value: "312" },
]

export default function ProfileCardSeparator() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 border p-4">
      <div className="flex items-center gap-3">
        <Avatar size="lg">
          <AvatarFallback>NR</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">Nadia Reyes</span>
          <span className="text-xs text-muted-foreground">Illustrator in Valencia</span>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-3 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span className="text-sm font-semibold">{stat.value}</span>
            <span className="text-xs text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "KpiStatsVerticalSeparators",
    description: "Row of dashboard KPIs divided by vertical separators.",
    code: `
const kpis = [
  { label: "MRR", value: "$48.2k", delta: "+6.4%" },
  { label: "Active users", value: "3,912", delta: "+2.1%" },
  { label: "Churn", value: "1.8%", delta: "-0.3%" },
]

export default function KpiStatsVerticalSeparators() {
  return (
    <div className="flex w-full max-w-md items-stretch border p-4">
      {kpis.map((kpi, index) => (
        <React.Fragment key={kpi.label}>
          {index > 0 && <Separator orientation="vertical" className="mx-4" />}
          <div className="flex flex-1 flex-col gap-1">
            <span className="text-xs text-muted-foreground">{kpi.label}</span>
            <span className="text-lg font-semibold tabular-nums">{kpi.value}</span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400">{kpi.delta}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}`,
  },
  {
    name: "OrContinueWithDivider",
    description: "Sign-in form with a labeled 'or continue with' divider between email and social options.",
    code: `
export default function OrContinueWithDivider() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <Input type="email" placeholder="you@fieldnote.app" aria-label="Email" />
      <Button className="w-full">Continue with email</Button>
      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground uppercase">or continue with</span>
        <Separator className="flex-1" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline">
          <FingerprintIcon data-icon="inline-start" />
          SSO
        </Button>
        <Button variant="outline">
          <KeyRoundIcon data-icon="inline-start" />
          Passkey
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "DashedReceiptSeparator",
    description: "Order receipt with dashed separators setting apart line items, fees and total.",
    code: `
const lines = [
  { label: "Oat flat white", amount: 4.5 },
  { label: "Almond croissant", amount: 3.75 },
  { label: "Sparkling water", amount: 2.25 },
]

const dashed =
  "bg-transparent bg-[repeating-linear-gradient(90deg,var(--border)_0_6px,transparent_6px_12px)]"

export default function DashedReceiptSeparator() {
  const subtotal = lines.reduce((sum, line) => sum + line.amount, 0)
  const tax = subtotal * 0.08

  return (
    <div className="flex w-full max-w-60 flex-col gap-3 border bg-muted/20 p-4 font-mono text-xs">
      <div className="text-center">
        <div className="text-sm font-semibold">CORNER BEANS</div>
        <div className="text-muted-foreground">Order #2041 - Table 6</div>
      </div>
      <Separator className={dashed} />
      {lines.map((line) => (
        <div key={line.label} className="flex justify-between">
          <span>{line.label}</span>
          <span>{line.amount.toFixed(2)}</span>
        </div>
      ))}
      <Separator className={dashed} />
      <div className="flex justify-between text-muted-foreground">
        <span>Tax</span>
        <span>{tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>{(subtotal + tax).toFixed(2)}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "EditorToolbarGroups",
    description: "Rich text toolbar where vertical separators split formatting, list and insert groups.",
    code: `
const groups = [
  [
    { label: "Bold", icon: BoldIcon },
    { label: "Italic", icon: ItalicIcon },
    { label: "Underline", icon: UnderlineIcon },
  ],
  [
    { label: "Bulleted list", icon: ListIcon },
    { label: "Numbered list", icon: ListOrderedIcon },
  ],
  [
    { label: "Link", icon: LinkIcon },
    { label: "Code", icon: CodeIcon },
  ],
]

export default function EditorToolbarGroups() {
  return (
    <div className="flex h-10 items-center gap-1 border p-1">
      {groups.map((group, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Separator orientation="vertical" className="mx-1 my-1" />}
          {group.map((tool) => (
            <Button key={tool.label} variant="ghost" size="icon-sm" aria-label={tool.label}>
              <tool.icon />
            </Button>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ArticleMetaInline",
    description: "Article byline metadata separated by short vertical separators.",
    code: `
export default function ArticleMetaInline() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <h3 className="text-lg font-semibold leading-tight">
        Designing calmer notification systems
      </h3>
      <div className="flex h-4 flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <span>Owen Hartley</span>
        <Separator orientation="vertical" />
        <span>May 4, 2026</span>
        <Separator orientation="vertical" />
        <span>6 min read</span>
        <Separator orientation="vertical" />
        <Badge variant="secondary">Product</Badge>
      </div>
    </div>
  )
}`,
  },
  {
    name: "SiteFooterSeparators",
    description: "Compact site footer with a top separator and inline legal links divided vertically.",
    code: `
const links = ["Privacy", "Terms", "Cookies", "Status"]

export default function SiteFooterSeparators() {
  return (
    <footer className="flex w-full max-w-md flex-col gap-4">
      <Separator />
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>&copy; 2026 Fieldnote Labs</span>
        <nav className="flex h-3.5 items-center gap-3">
          {links.map((link, index) => (
            <React.Fragment key={link}>
              {index > 0 && <Separator orientation="vertical" />}
              <a href="#" className="hover:text-foreground">
                {link}
              </a>
            </React.Fragment>
          ))}
        </nav>
      </div>
    </footer>
  )
}`,
  },
  {
    name: "LabeledSectionDivider",
    description: "Form section heading with a left-aligned label and a separator extending to the edge.",
    code: `
export default function LabeledSectionDivider() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="project-name">Project name</Label>
        <Input id="project-name" defaultValue="Northwind portal" />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Advanced
        </span>
        <Separator className="flex-1" />
      </div>
      <div className="flex items-center justify-between text-sm">
        <Label htmlFor="preview">Preview deployments</Label>
        <Switch id="preview" defaultChecked />
      </div>
      <div className="flex items-center justify-between text-sm">
        <Label htmlFor="protect">Password protection</Label>
        <Switch id="protect" />
      </div>
    </div>
  )
}`,
  },
  {
    name: "ChatDateDivider",
    description: "Chat transcript with a centered date label separating messages by day.",
    code: `
export default function ChatDateDivider() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 text-sm">
      <div className="max-w-[75%] self-start bg-muted px-3 py-2">
        Sending the revised floor plan tonight.
      </div>
      <div className="flex items-center gap-3 py-1">
        <Separator className="flex-1" />
        <span className="text-[11px] text-muted-foreground">Today</span>
        <Separator className="flex-1" />
      </div>
      <div className="max-w-[75%] self-start bg-muted px-3 py-2">
        Got it, the kitchen layout looks great.
      </div>
      <div className="max-w-[75%] self-end bg-primary px-3 py-2 text-primary-foreground">
        Thanks! Can we lock it in by Friday?
      </div>
    </div>
  )
}`,
  },
  {
    name: "UnreadMessagesDivider",
    description: "Destructive-colored separator marking where new unread messages begin.",
    code: `
const messages = [
  { author: "Kai", text: "Pushed the hotfix to staging.", unread: false },
  { author: "Mira", text: "Looks good on my end.", unread: false },
  { author: "Kai", text: "Production deploy starts in 10.", unread: true },
  { author: "Leo", text: "Heads up, the migration takes a minute.", unread: true },
]

export default function UnreadMessagesDivider() {
  const firstUnread = messages.findIndex((message) => message.unread)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
      {messages.map((message, index) => (
        <React.Fragment key={index}>
          {index === firstUnread && (
            <div className="flex items-center gap-2 py-1">
              <Separator className="flex-1 bg-destructive" />
              <span className="text-[11px] font-medium text-destructive">New messages</span>
            </div>
          )}
          <div className="flex gap-2">
            <span className="w-10 shrink-0 font-medium">{message.author}</span>
            <span className="text-muted-foreground">{message.text}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}`,
  },
  {
    name: "VerticalTimeline",
    description: "Activity timeline whose connecting line is a vertical separator between event dots.",
    code: `
const events = [
  { title: "Order placed", time: "Mar 2, 09:14", done: true },
  { title: "Payment confirmed", time: "Mar 2, 09:15", done: true },
  { title: "Shipped from Rotterdam", time: "Mar 3, 16:40", done: true },
  { title: "Out for delivery", time: "Expected Mar 5", done: false },
]

export default function VerticalTimeline() {
  return (
    <ol className="flex w-full max-w-xs flex-col">
      {events.map((event, index) => (
        <li key={event.title} className="flex gap-3">
          <div className="flex flex-col items-center">
            <span
              className={cn(
                "mt-1 size-2.5 shrink-0 rounded-full",
                event.done ? "bg-primary" : "border bg-background"
              )}
            />
            {index < events.length - 1 && (
              <Separator orientation="vertical" className={cn("my-1", event.done && "bg-primary/40")} />
            )}
          </div>
          <div className="flex flex-col pb-5 text-sm">
            <span className={cn("font-medium", !event.done && "text-muted-foreground")}>
              {event.title}
            </span>
            <span className="text-xs text-muted-foreground">{event.time}</span>
          </div>
        </li>
      ))}
    </ol>
  )
}`,
  },
  {
    name: "SettingsRowsSeparated",
    description: "Settings list with separators between each toggle row.",
    code: `
const settings = [
  { id: "digest", title: "Weekly digest", description: "A summary every Monday morning", on: true },
  { id: "mentions", title: "Mentions", description: "When someone tags you", on: true },
  { id: "marketing", title: "Product news", description: "Launches and tips", on: false },
]

export default function SettingsRowsSeparated() {
  return (
    <div className="w-full max-w-sm border">
      {settings.map((setting, index) => (
        <React.Fragment key={setting.id}>
          {index > 0 && <Separator />}
          <div className="flex items-center justify-between gap-4 p-3">
            <div className="flex flex-col">
              <Label htmlFor={setting.id}>{setting.title}</Label>
              <span className="text-xs text-muted-foreground">{setting.description}</span>
            </div>
            <Switch id={setting.id} defaultChecked={setting.on} />
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}`,
  },
  {
    name: "PricingCardSeparator",
    description: "Pricing card where a separator divides the price block from the feature list.",
    code: `
const features = ["Unlimited projects", "10 GB storage", "Version history", "Priority support"]

export default function PricingCardSeparator() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 border p-5">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">Studio</span>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-semibold">$18</span>
          <span className="text-sm text-muted-foreground">/ month</span>
        </div>
        <span className="text-xs text-muted-foreground">For freelancers and small teams.</span>
      </div>
      <Button className="w-full">Start free trial</Button>
      <Separator />
      <ul className="flex flex-col gap-2 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <CheckIcon className="size-4 text-primary" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}`,
  },
  {
    name: "GradientFadeSeparator",
    description: "Decorative separator that fades out at both ends using a gradient.",
    code: `
export default function GradientFadeSeparator() {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6 text-center">
      <div className="flex flex-col gap-1">
        <span className="text-xs tracking-widest text-muted-foreground uppercase">Chapter two</span>
        <h3 className="text-xl font-semibold">The long way home</h3>
      </div>
      <Separator className="bg-transparent bg-linear-to-r from-transparent via-foreground/40 to-transparent" />
      <p className="text-sm text-muted-foreground">
        By the time the train reached the coast, the storm had already passed and the
        harbour lights were coming on one by one.
      </p>
    </div>
  )
}`,
  },
  {
    name: "AccentHeadingSeparator",
    description: "Short, thick accent separator placed under a section heading.",
    code: `
export default function AccentHeadingSeparator() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <h3 className="text-lg font-semibold">Our principles</h3>
      <Separator className="data-horizontal:h-1 data-horizontal:w-12 bg-primary" />
      <p className="text-sm text-muted-foreground">
        We build tools that respect attention, keep data portable, and stay out of
        the way once the work begins.
      </p>
    </div>
  )
}`,
  },
  {
    name: "StepperConnectors",
    description: "Checkout stepper where separators connect steps and fill in as steps complete.",
    code: `
const steps = ["Cart", "Shipping", "Payment", "Review"]

export default function StepperConnectors() {
  const [current, setCurrent] = React.useState(2)

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            {index > 0 && (
              <Separator className={cn("mx-2 flex-1", index <= current && "bg-primary")} />
            )}
            <div className="flex flex-col items-center gap-1">
              <span
                className={cn(
                  "flex size-6 items-center justify-center rounded-full border text-[11px]",
                  index < current && "border-primary bg-primary text-primary-foreground",
                  index === current && "border-primary text-primary"
                )}
              >
                {index < current ? <CheckIcon className="size-3" /> : index + 1}
              </span>
              <span className="text-[11px] text-muted-foreground">{step}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-between">
        <Button variant="outline" size="sm" disabled={current === 0} onClick={() => setCurrent(current - 1)}>
          Back
        </Button>
        <Button size="sm" disabled={current === steps.length - 1} onClick={() => setCurrent(current + 1)}>
          Next
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "NotificationListSeparated",
    description: "Notification feed with icon rows separated by full-width separators.",
    code: `
const notifications = [
  { icon: MessageSquareIcon, text: "Ines replied to your comment on Pricing page", time: "2m" },
  { icon: UserPlusIcon, text: "Marco joined the Design workspace", time: "1h" },
  { icon: CircleCheckIcon, text: "Invoice #1042 was paid", time: "3h" },
]

export default function NotificationListSeparated() {
  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between p-3">
        <span className="text-sm font-medium">Notifications</span>
        <Button variant="link" size="xs">
          Mark all read
        </Button>
      </div>
      <Separator />
      {notifications.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Separator />}
          <div className="flex items-start gap-3 p-3 text-sm">
            <item.icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span className="flex-1">{item.text}</span>
            <span className="text-xs text-muted-foreground">{item.time}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}`,
  },
  {
    name: "SidebarNavGroups",
    description: "Sidebar navigation where separators divide primary, workspace and account links.",
    code: `
const sections = [
  [
    { label: "Inbox", icon: InboxIcon },
    { label: "My tasks", icon: CircleCheckIcon },
  ],
  [
    { label: "Projects", icon: FolderIcon },
    { label: "Reports", icon: ChartPieIcon },
    { label: "Team", icon: UsersIcon },
  ],
  [
    { label: "Settings", icon: SettingsIcon },
    { label: "Log out", icon: LogOutIcon },
  ],
]

export default function SidebarNavGroups() {
  return (
    <nav className="flex w-full max-w-52 flex-col border p-2">
      {sections.map((links, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Separator className="my-2" />}
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-2 px-2 py-1.5 text-sm hover:bg-muted"
            >
              <link.icon className="size-4 text-muted-foreground" />
              {link.label}
            </a>
          ))}
        </React.Fragment>
      ))}
    </nav>
  )
}`,
  },
  {
    name: "CardFooterActionsSeparator",
    description: "Card with a separator between its body content and footer actions.",
    code: `
export default function CardFooterActionsSeparator() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Delete project</CardTitle>
        <CardDescription>
          Removing Orbit CRM deletes 14 environments and all deployment history.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        This action can&apos;t be undone. Team members will lose access immediately.
      </CardContent>
      <Separator />
      <CardFooter className="justify-end gap-2">
        <Button variant="ghost">Cancel</Button>
        <Button variant="destructive">Delete project</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "BeforeAfterComparison",
    description: "Two comparison columns split by a vertical separator.",
    code: `
const before = ["Manual CSV uploads", "Weekly reconciliation", "3 tools to switch between"]
const after = ["Live bank sync", "Daily auto-matching", "One shared ledger"]

export default function BeforeAfterComparison() {
  return (
    <div className="flex w-full max-w-md border p-4 text-sm">
      <div className="flex flex-1 flex-col gap-2">
        <span className="text-xs font-medium text-muted-foreground uppercase">Before</span>
        {before.map((item) => (
          <span key={item} className="flex items-center gap-2 text-muted-foreground">
            <XIcon className="size-3.5" />
            {item}
          </span>
        ))}
      </div>
      <Separator orientation="vertical" className="mx-4" />
      <div className="flex flex-1 flex-col gap-2">
        <span className="text-xs font-medium text-muted-foreground uppercase">After</span>
        {after.map((item) => (
          <span key={item} className="flex items-center gap-2">
            <CheckIcon className="size-3.5 text-primary" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "ContactDetailsInline",
    description: "Contact details row with icons separated by vertical separators, wrapping on small screens.",
    code: `
const details = [
  { icon: MailIcon, text: "hello@larkstudio.co" },
  { icon: PhoneIcon, text: "+44 20 7946 0958" },
  { icon: MapPinIcon, text: "Bristol, UK" },
]

export default function ContactDetailsInline() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <span className="text-sm font-medium">Lark Studio</span>
      <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:h-4 sm:flex-row sm:items-center sm:gap-3">
        {details.map((detail, index) => (
          <React.Fragment key={detail.text}>
            {index > 0 && <Separator orientation="vertical" className="hidden sm:block" />}
            <span className="flex items-center gap-1.5">
              <detail.icon className="size-3.5" />
              {detail.text}
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "SplitButtonSeparator",
    description: "Custom split button where a vertical separator divides the primary action from a menu toggle.",
    code: `
export default function SplitButtonSeparator() {
  return (
    <div className="inline-flex h-8 items-stretch bg-primary text-primary-foreground">
      <button type="button" className="flex items-center gap-1.5 px-3 text-xs font-medium hover:bg-primary-foreground/10">
        <GitMergeIcon className="size-3.5" />
        Merge pull request
      </button>
      <Separator orientation="vertical" className="my-1.5 bg-primary-foreground/30" />
      <button
        type="button"
        aria-label="More merge options"
        className="flex items-center px-2 hover:bg-primary-foreground/10"
      >
        <ChevronDownIcon className="size-3.5" />
      </button>
    </div>
  )
}`,
  },
  {
    name: "ActionListDangerZone",
    description: "Action menu panel with a separator isolating destructive actions at the bottom.",
    code: `
const actions = [
  { label: "Rename", icon: PencilIcon },
  { label: "Duplicate", icon: CopyIcon },
  { label: "Move to folder", icon: FolderInputIcon },
  { label: "Share", icon: Share2Icon },
]

export default function ActionListDangerZone() {
  return (
    <div className="flex w-full max-w-52 flex-col border p-1 text-sm">
      {actions.map((action) => (
        <button
          key={action.label}
          type="button"
          className="flex items-center gap-2 px-2 py-1.5 text-start hover:bg-muted"
        >
          <action.icon className="size-4 text-muted-foreground" />
          {action.label}
        </button>
      ))}
      <Separator className="my-1" />
      <button
        type="button"
        className="flex items-center gap-2 px-2 py-1.5 text-start text-destructive hover:bg-destructive/10"
      >
        <Trash2Icon className="size-4" />
        Delete
      </button>
    </div>
  )
}`,
  },
  {
    name: "ResponsiveOrientationSeparator",
    description: "Separator that is horizontal on narrow screens and vertical from the sm breakpoint.",
    code: `
export default function ResponsiveOrientationSeparator() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 border p-4 sm:flex-row">
      <div className="flex flex-1 flex-col gap-1">
        <span className="text-xs text-muted-foreground">Billing contact</span>
        <span className="text-sm font-medium">Hana Kobayashi</span>
        <span className="text-xs text-muted-foreground">hana@orbitcrm.io</span>
      </div>
      <Separator className="sm:hidden" />
      <Separator orientation="vertical" className="hidden sm:block" />
      <div className="flex flex-1 flex-col gap-1">
        <span className="text-xs text-muted-foreground">Next invoice</span>
        <span className="text-sm font-medium">$1,240.00</span>
        <span className="text-xs text-muted-foreground">Due April 1</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "BoardingPassStub",
    description: "Boarding pass ticket with a dashed vertical separator and cut-out notches at the tear line.",
    code: `
export default function BoardingPassStub() {
  return (
    <div className="flex w-full max-w-sm overflow-hidden border bg-card">
      <div className="flex flex-1 flex-col gap-3 p-4">
        <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
          Boarding pass
        </span>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-semibold">LIS</span>
          <PlaneIcon className="size-4 text-muted-foreground" />
          <span className="text-2xl font-semibold">CPH</span>
        </div>
        <div className="flex gap-4 text-xs">
          <span className="flex flex-col">
            <span className="text-muted-foreground">Gate</span>B14
          </span>
          <span className="flex flex-col">
            <span className="text-muted-foreground">Boards</span>07:40
          </span>
        </div>
      </div>
      <div className="relative flex">
        <span className="absolute -top-2 -start-2 size-4 rounded-full border bg-background" />
        <Separator
          orientation="vertical"
          className="bg-transparent bg-[repeating-linear-gradient(180deg,var(--border)_0_5px,transparent_5px_10px)]"
        />
        <span className="absolute -bottom-2 -start-2 size-4 rounded-full border bg-background" />
      </div>
      <div className="flex w-20 flex-col items-center justify-center gap-1 p-3 text-xs">
        <span className="text-muted-foreground">Seat</span>
        <span className="text-xl font-semibold">14C</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ShortcutSectionsSeparated",
    description: "Keyboard shortcut cheat sheet with separators between shortcut sections.",
    code: `
const sections = [
  {
    title: "General",
    items: [
      { label: "Command menu", keys: ["⌘", "K"] },
      { label: "Search", keys: ["/"] },
    ],
  },
  {
    title: "Navigation",
    items: [
      { label: "Go to inbox", keys: ["G", "I"] },
      { label: "Go to projects", keys: ["G", "P"] },
    ],
  },
]

export default function ShortcutSectionsSeparated() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4 text-sm">
      {sections.map((section, index) => (
        <React.Fragment key={section.title}>
          {index > 0 && <Separator />}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-muted-foreground">{section.title}</span>
            {section.items.map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span>{item.label}</span>
                <KbdGroup>
                  {item.keys.map((key) => (
                    <Kbd key={key}>{key}</Kbd>
                  ))}
                </KbdGroup>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}`,
  },
  {
    name: "IconCenteredDivider",
    description: "Ornamental divider with an icon centered between two separators.",
    code: `
export default function IconCenteredDivider() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 text-center">
      <p className="text-sm italic text-muted-foreground">
        &ldquo;The best tool is the one your team actually opens every morning.&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <SparkleIcon className="size-4 text-muted-foreground" />
        <Separator className="flex-1" />
      </div>
      <span className="text-xs text-muted-foreground">Rosa Delgado, Head of Ops at Lumen Labs</span>
    </div>
  )
}`,
  },
  {
    name: "CommentThreadLine",
    description: "Threaded comments where a vertical separator draws the reply line under the parent avatar.",
    code: `
const replies = [
  { name: "Elif Demir", initials: "ED", text: "Agreed, the contrast on hover is too low." },
  { name: "Tom Becker", initials: "TB", text: "I'll bump it to the 600 shade and re-check." },
]

export default function CommentThreadLine() {
  return (
    <div className="flex w-full max-w-sm gap-3 text-sm">
      <div className="flex flex-col items-center">
        <Avatar size="sm">
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <Separator orientation="vertical" className="my-2" />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex flex-col gap-0.5">
          <span className="font-medium">Julia Santos</span>
          <span className="text-muted-foreground">Should the secondary buttons darken on hover?</span>
        </div>
        {replies.map((reply) => (
          <div key={reply.name} className="flex gap-2">
            <Avatar size="sm">
              <AvatarFallback>{reply.initials}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <span className="font-medium">{reply.name}</span>
              <span className="text-muted-foreground">{reply.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "FileDetailsPanel",
    description: "File manager details panel with separators between preview, metadata and sharing sections.",
    code: `
const meta = [
  { label: "Type", value: "Figma file" },
  { label: "Size", value: "12.4 MB" },
  { label: "Modified", value: "Yesterday, 18:02" },
  { label: "Owner", value: "Ada Kowalski" },
]

export default function FileDetailsPanel() {
  return (
    <div className="flex w-full max-w-60 flex-col gap-3 border p-3">
      <div className="flex aspect-video items-center justify-center bg-linear-to-br from-violet-500/30 to-sky-500/30">
        <FileIcon className="size-8 text-muted-foreground" />
      </div>
      <span className="truncate text-sm font-medium">Onboarding flow v4.fig</span>
      <Separator />
      <dl className="grid grid-cols-2 gap-y-1.5 text-xs">
        {meta.map((item) => (
          <React.Fragment key={item.label}>
            <dt className="text-muted-foreground">{item.label}</dt>
            <dd className="truncate text-end">{item.value}</dd>
          </React.Fragment>
        ))}
      </dl>
      <Separator />
      <Button variant="outline" size="sm">
        <Share2Icon data-icon="inline-start" />
        Share
      </Button>
    </div>
  )
}`,
  },
  {
    name: "AgendaTimeColumn",
    description: "Day agenda where a vertical separator divides the time column from event details.",
    code: `
const events = [
  { time: "09:00", end: "09:30", title: "Standup", place: "Huddle room", tone: "bg-sky-500" },
  { time: "11:00", end: "12:00", title: "Client review: Harbor & Co", place: "Video call", tone: "bg-amber-500" },
  { time: "14:30", end: "15:00", title: "1:1 with Priya", place: "Cafe corner", tone: "bg-emerald-500" },
]

export default function AgendaTimeColumn() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      <span className="mb-2 text-sm font-medium">Tuesday, March 10</span>
      {events.map((event) => (
        <div key={event.time} className="flex gap-3 py-2">
          <div className="flex w-12 shrink-0 flex-col text-xs tabular-nums">
            <span>{event.time}</span>
            <span className="text-muted-foreground">{event.end}</span>
          </div>
          <Separator orientation="vertical" className={cn("w-0.5", event.tone)} />
          <div className="flex min-w-0 flex-col text-sm">
            <span className="truncate font-medium">{event.title}</span>
            <span className="text-xs text-muted-foreground">{event.place}</span>
          </div>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "EditorStatusBar",
    description: "Code editor status bar with vertical separators between branch, diagnostics and cursor info.",
    code: `
export default function EditorStatusBar() {
  return (
    <div className="flex h-6 w-full max-w-md items-center gap-2 overflow-hidden border bg-muted/40 px-2 font-mono text-[11px] text-muted-foreground">
      <span className="flex items-center gap-1">
        <GitBranchIcon className="size-3" />
        main
      </span>
      <Separator orientation="vertical" className="my-1" />
      <span className="flex items-center gap-1">
        <CircleXIcon className="size-3 text-destructive" />0
        <TriangleAlertIcon className="ms-1 size-3 text-amber-500" />2
      </span>
      <span className="ms-auto">Ln 42, Col 18</span>
      <Separator orientation="vertical" className="my-1 hidden sm:block" />
      <span className="hidden sm:inline">UTF-8</span>
      <Separator orientation="vertical" className="my-1" />
      <span>TSX</span>
    </div>
  )
}`,
  },
  {
    name: "InvoiceHeaderParties",
    description: "Invoice header with billed-from and billed-to blocks divided by a vertical separator.",
    code: `
export default function InvoiceHeaderParties() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 border p-4 text-xs">
      <div className="flex items-baseline justify-between">
        <span className="text-base font-semibold">Invoice</span>
        <span className="font-mono text-muted-foreground">INV-2026-0318</span>
      </div>
      <Separator />
      <div className="flex">
        <div className="flex flex-1 flex-col gap-0.5">
          <span className="mb-1 text-muted-foreground">From</span>
          <span className="font-medium">Lark Studio Ltd</span>
          <span className="text-muted-foreground">12 Quay Street, Bristol</span>
        </div>
        <Separator orientation="vertical" className="mx-4" />
        <div className="flex flex-1 flex-col gap-0.5">
          <span className="mb-1 text-muted-foreground">Billed to</span>
          <span className="font-medium">Orbit CRM GmbH</span>
          <span className="text-muted-foreground">Torstrasse 88, Berlin</span>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "SeparatorWeights",
    description: "Reference sheet of separator thicknesses and tones for a design system.",
    code: `
const variants = [
  { label: "Hairline", className: "" },
  { label: "Medium", className: "data-horizontal:h-0.5" },
  { label: "Heavy", className: "data-horizontal:h-1 bg-foreground" },
  { label: "Subtle", className: "bg-border/50" },
  { label: "Brand", className: "data-horizontal:h-0.5 bg-primary" },
]

export default function SeparatorWeights() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {variants.map((variant) => (
        <div key={variant.label} className="flex items-center gap-4">
          <span className="w-16 shrink-0 text-xs text-muted-foreground">{variant.label}</span>
          <Separator className={variant.className} />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ProductCardSections",
    description: "Product card broken into title, options and purchase sections with separators.",
    code: `
const sizes = ["S", "M", "L", "XL"]

export default function ProductCardSections() {
  const [size, setSize] = React.useState("M")

  return (
    <div className="flex w-full max-w-xs flex-col border">
      <div className="aspect-4/3 bg-linear-to-br from-amber-200/60 to-rose-300/60" />
      <div className="flex items-start justify-between gap-2 p-4">
        <div className="flex flex-col">
          <span className="text-sm font-medium">Linen overshirt</span>
          <span className="text-xs text-muted-foreground">Washed olive</span>
        </div>
        <span className="text-sm font-semibold">$74</span>
      </div>
      <Separator />
      <div className="flex gap-1 p-4">
        {sizes.map((option) => (
          <Button
            key={option}
            size="sm"
            variant={option === size ? "default" : "outline"}
            onClick={() => setSize(option)}
            className="flex-1"
          >
            {option}
          </Button>
        ))}
      </div>
      <Separator />
      <div className="p-4">
        <Button className="w-full">Add to cart</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "TeamMembersInsetSeparators",
    description: "Member list with inset separators that start after the avatar column.",
    code: `
const members = [
  { name: "Ruth Achebe", role: "Engineering lead", initials: "RA" },
  { name: "Mateo Silva", role: "Product designer", initials: "MS" },
  { name: "Yuna Park", role: "Data analyst", initials: "YP" },
  { name: "Felix Brandt", role: "Support", initials: "FB" },
]

export default function TeamMembersInsetSeparators() {
  return (
    <div className="flex w-full max-w-xs flex-col">
      {members.map((member, index) => (
        <React.Fragment key={member.name}>
          {index > 0 && <Separator className="ms-11 data-horizontal:w-auto" />}
          <div className="flex items-center gap-3 py-2.5">
            <Avatar>
              <AvatarFallback>{member.initials}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-sm">
              <span className="font-medium">{member.name}</span>
              <span className="text-xs text-muted-foreground">{member.role}</span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}`,
  },
  {
    name: "SettingsSideNavSplit",
    description: "Settings layout with a vertical separator between the side navigation and content pane.",
    code: `
const items = ["General", "Members", "Billing", "Security"]

export default function SettingsSideNavSplit() {
  const [active, setActive] = React.useState("Billing")

  return (
    <div className="flex h-48 w-full max-w-md border">
      <nav className="flex w-28 shrink-0 flex-col gap-0.5 p-2">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setActive(item)}
            className={cn(
              "px-2 py-1.5 text-start text-xs",
              item === active ? "bg-muted font-medium" : "text-muted-foreground hover:bg-muted/50"
            )}
          >
            {item}
          </button>
        ))}
      </nav>
      <Separator orientation="vertical" />
      <div className="flex flex-1 flex-col gap-1 p-4">
        <span className="text-sm font-medium">{active}</span>
        <span className="text-xs text-muted-foreground">
          Manage {active.toLowerCase()} preferences for the Fieldnote workspace.
        </span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "AuthorBioSeparator",
    description: "End-of-article author bio introduced by a separator.",
    code: `
export default function AuthorBioSeparator() {
  return (
    <div className="flex w-full max-w-md flex-col gap-5">
      <p className="text-sm text-muted-foreground">
        ...and that is why we now ship every interface change behind a quiet beta flag
        first. Thanks for reading.
      </p>
      <Separator />
      <div className="flex items-start gap-3">
        <Avatar size="lg">
          <AvatarFallback>CW</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 flex-col gap-1">
          <span className="text-sm font-medium">Clara Whitfield</span>
          <span className="text-xs text-muted-foreground">
            Design engineer writing about interfaces, motion and calm software.
          </span>
        </div>
        <Button variant="outline" size="sm">
          Follow
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ChangelogEntries",
    description: "Changelog with version entries separated by horizontal separators.",
    code: `
const releases = [
  { version: "2.8.0", date: "Mar 12", notes: ["Bulk edit for tasks", "Faster search indexing"] },
  { version: "2.7.2", date: "Feb 27", notes: ["Fixed calendar sync drift"] },
  { version: "2.7.0", date: "Feb 18", notes: ["Dark mode for embeds", "New CSV importer"] },
]

export default function ChangelogEntries() {
  return (
    <div className="flex w-full max-w-sm flex-col">
      {releases.map((release, index) => (
        <React.Fragment key={release.version}>
          {index > 0 && <Separator />}
          <div className="flex gap-4 py-3">
            <div className="flex w-14 shrink-0 flex-col text-xs">
              <Badge variant={index === 0 ? "default" : "secondary"}>{release.version}</Badge>
              <span className="mt-1 text-muted-foreground">{release.date}</span>
            </div>
            <ul className="flex flex-col gap-1 text-sm">
              {release.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}`,
  },
  {
    name: "WeatherForecastColumns",
    description: "Five-day forecast with vertical separators between day columns.",
    code: `
const days = [
  { day: "Mon", icon: SunIcon, high: 22, low: 13 },
  { day: "Tue", icon: CloudSunIcon, high: 20, low: 12 },
  { day: "Wed", icon: CloudRainIcon, high: 16, low: 10 },
  { day: "Thu", icon: CloudIcon, high: 18, low: 11 },
  { day: "Fri", icon: SunIcon, high: 23, low: 14 },
]

export default function WeatherForecastColumns() {
  return (
    <div className="flex w-full max-w-md border py-3">
      {days.map((day, index) => (
        <React.Fragment key={day.day}>
          {index > 0 && <Separator orientation="vertical" />}
          <div className="flex flex-1 flex-col items-center gap-1.5 text-xs">
            <span className="text-muted-foreground">{day.day}</span>
            <day.icon className="size-5" />
            <span className="font-medium">{day.high}&deg;</span>
            <span className="text-muted-foreground">{day.low}&deg;</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}`,
  },
  {
    name: "CartItemsSeparated",
    description: "Shopping cart with quantity controls, separators between items, and a subtotal.",
    code: `
const initial = [
  { id: "mug", name: "Stoneware mug", price: 18, qty: 2, tone: "from-stone-300 to-stone-500" },
  { id: "kettle", name: "Pour-over kettle", price: 46, qty: 1, tone: "from-zinc-400 to-zinc-700" },
]

export default function CartItemsSeparated() {
  const [items, setItems] = React.useState(initial)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  const update = (id: string, delta: number) =>
    setItems(items.map((item) => (item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item)))

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          {index > 0 && <Separator />}
          <div className="flex items-center gap-3">
            <div className={cn("size-12 shrink-0 bg-linear-to-br", item.tone)} />
            <div className="flex flex-1 flex-col text-sm">
              <span className="font-medium">{item.name}</span>
              <span className="text-xs text-muted-foreground">{"$" + item.price}</span>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="outline" size="icon-xs" aria-label="Decrease" onClick={() => update(item.id, -1)}>
                <MinusIcon />
              </Button>
              <span className="w-5 text-center text-sm tabular-nums">{item.qty}</span>
              <Button variant="outline" size="icon-xs" aria-label="Increase" onClick={() => update(item.id, 1)}>
                <PlusIcon />
              </Button>
            </div>
          </div>
        </React.Fragment>
      ))}
      <Separator className="data-horizontal:h-0.5" />
      <div className="flex justify-between text-sm font-medium">
        <span>Subtotal</span>
        <span>{"$" + subtotal.toFixed(2)}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "BlockquoteAccentRule",
    description: "Pull quote using a vertical primary separator as its accent rule.",
    code: `
export default function BlockquoteAccentRule() {
  return (
    <figure className="flex w-full max-w-md gap-4">
      <Separator orientation="vertical" className="w-1 bg-primary" />
      <div className="flex flex-col gap-2 py-1">
        <blockquote className="text-base leading-snug font-medium">
          We cut our weekly reporting from four hours to fifteen minutes, and nobody
          misses the spreadsheets.
        </blockquote>
        <figcaption className="text-xs text-muted-foreground">
          Daniel Osei, Finance Lead at Kestrel Freight
        </figcaption>
      </div>
    </figure>
  )
}`,
  },
  {
    name: "UnderlineTabsBaseline",
    description: "Custom tab bar where a separator forms the baseline under an active-tab indicator.",
    code: `
const tabs = ["Overview", "Activity", "Settings"]

export default function UnderlineTabsBaseline() {
  const [active, setActive] = React.useState("Activity")

  return (
    <div className="flex w-full max-w-sm flex-col">
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={cn(
              "relative pb-2 text-sm",
              tab === active ? "font-medium" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab}
            {tab === active && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-foreground" />}
          </button>
        ))}
      </div>
      <Separator />
      <p className="pt-3 text-sm text-muted-foreground">Showing {active.toLowerCase()} for Orbit CRM.</p>
    </div>
  )
}`,
  },
  {
    name: "OrgChartConnectors",
    description: "Small org chart using vertical and horizontal separators as connector lines.",
    code: `
const reports = [
  { name: "Ivo Petrov", role: "Platform", initials: "IP" },
  { name: "Leah Moss", role: "Payments", initials: "LM" },
  { name: "Arjun Rao", role: "Growth", initials: "AR" },
]

export default function OrgChartConnectors() {
  return (
    <div className="flex w-full max-w-md flex-col items-center">
      <div className="flex items-center gap-2 border px-3 py-2">
        <Avatar size="sm">
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-xs">
          <span className="font-medium">Selin Muller</span>
          <span className="text-muted-foreground">VP Engineering</span>
        </div>
      </div>
      <Separator orientation="vertical" className="h-4" />
      <Separator className="w-2/3" />
      <div className="grid w-full grid-cols-3">
        {reports.map((report) => (
          <div key={report.name} className="flex flex-col items-center">
            <Separator orientation="vertical" className="h-4" />
            <div className="flex flex-col items-center gap-1 border p-2 text-center text-xs">
              <Avatar size="sm">
                <AvatarFallback>{report.initials}</AvatarFallback>
              </Avatar>
              <span className="font-medium">{report.name}</span>
              <span className="text-muted-foreground">{report.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "FeedEndDivider",
    description: "End-of-feed marker that pairs separators with an all-caught-up message.",
    code: `
const posts = [
  { title: "Sprint 14 retro notes", meta: "Posted by Ana - 2h" },
  { title: "New brand colors are live", meta: "Posted by Ravi - 5h" },
]

export default function FeedEndDivider() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {posts.map((post) => (
        <div key={post.title} className="flex flex-col border p-3">
          <span className="text-sm font-medium">{post.title}</span>
          <span className="text-xs text-muted-foreground">{post.meta}</span>
        </div>
      ))}
      <div className="flex items-center gap-3 py-2">
        <Separator className="flex-1" />
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <CircleCheckIcon className="size-3.5" />
          You&apos;re all caught up
        </span>
        <Separator className="flex-1" />
      </div>
    </div>
  )
}`,
  },
  {
    name: "PageHeaderDivider",
    description: "Page header with title, description and actions above a full-width separator.",
    code: `
export default function PageHeaderDivider() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Customers</h2>
          <p className="text-xs text-muted-foreground">1,482 accounts across 3 regions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <DownloadIcon data-icon="inline-start" />
            Export
          </Button>
          <Button size="sm">
            <PlusIcon data-icon="inline-start" />
            Add customer
          </Button>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((index) => (
          <div key={index} className="h-12 bg-muted" />
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "RatingBreakdownSplit",
    description: "Review summary with the overall score and star distribution split by a vertical separator.",
    code: `
const distribution = [
  { stars: 5, share: 68 },
  { stars: 4, share: 21 },
  { stars: 3, share: 7 },
  { stars: 2, share: 3 },
  { stars: 1, share: 1 },
]

export default function RatingBreakdownSplit() {
  return (
    <div className="flex w-full max-w-sm border p-4">
      <div className="flex w-24 shrink-0 flex-col items-center justify-center gap-1">
        <span className="text-3xl font-semibold">4.6</span>
        <div className="flex">
          {[0, 1, 2, 3, 4].map((index) => (
            <StarIcon
              key={index}
              className={cn("size-3", index < 4 ? "fill-amber-400 text-amber-400" : "text-muted-foreground")}
            />
          ))}
        </div>
        <span className="text-[11px] text-muted-foreground">2,318 reviews</span>
      </div>
      <Separator orientation="vertical" className="mx-4" />
      <div className="flex flex-1 flex-col gap-1.5">
        {distribution.map((row) => (
          <div key={row.stars} className="flex items-center gap-2 text-xs">
            <span className="w-2 text-muted-foreground">{row.stars}</span>
            <div className="h-1.5 flex-1 bg-muted">
              <div className="h-full bg-amber-400" style={{ width: row.share + "%" }} />
            </div>
            <span className="w-7 text-end text-muted-foreground tabular-nums">{row.share}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "UsageMeterSections",
    description: "Plan usage panel with separators between each metered resource.",
    code: `
const meters = [
  { label: "Seats", used: 8, limit: 10 },
  { label: "Storage", used: 34, limit: 50, unit: "GB" },
  { label: "API calls", used: 92, limit: 100, unit: "k" },
]

export default function UsageMeterSections() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <span className="text-sm font-medium">Usage this month</span>
      {meters.map((meter) => {
        const pct = Math.round((meter.used / meter.limit) * 100)
        return (
          <React.Fragment key={meter.label}>
            <Separator />
            <div className="flex flex-col gap-1.5 text-xs">
              <div className="flex justify-between">
                <span>{meter.label}</span>
                <span className="text-muted-foreground tabular-nums">
                  {meter.used}
                  {meter.unit} / {meter.limit}
                  {meter.unit}
                </span>
              </div>
              <Progress value={pct} />
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}`,
  },
]

export default examples
