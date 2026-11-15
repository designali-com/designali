import type { Example } from "./_lib.mjs"

/** Height animation for CollapsibleContent (Base UI exposes the measured height). */
const panel =
  "h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0"
/** Chevron rotation when the trigger is rendered as a Button. */
const chev = "ml-auto transition-transform group-data-panel-open/button:rotate-180"
const chevRight = "transition-transform group-data-panel-open/button:rotate-90"

const examples: Example[] = [
  {
    name: "BillingFaqList",
    description: "Independent collapsible questions in a billing FAQ, each opening on its own.",
    code: `
const faqs = [
  {
    q: "When will I be charged?",
    a: "Your card is charged on the first day of each billing cycle. Annual plans renew on the anniversary of your sign-up date.",
  },
  {
    q: "Can I switch plans mid-cycle?",
    a: "Yes. Upgrades take effect immediately and are prorated. Downgrades apply at the start of your next cycle.",
  },
  {
    q: "Do you offer refunds?",
    a: "We refund annual plans within 14 days of purchase. Monthly plans can be cancelled at any time.",
  },
]

export default function BillingFaqList() {
  return (
    <div className="w-full max-w-md divide-y border">
      {faqs.map((faq) => (
        <Collapsible key={faq.q}>
          <CollapsibleTrigger
            render={
              <Button variant="ghost" className="h-auto w-full justify-between px-4 py-3 text-left whitespace-normal">
                {faq.q}
                <PlusIcon className="transition-transform group-data-panel-open/button:rotate-45" />
              </Button>
            }
          />
          <CollapsibleContent className="${panel}">
            <p className="px-4 pb-4 text-sm text-muted-foreground">{faq.a}</p>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}`,
  },
  {
    name: "CheckoutOrderSummary",
    description: "Mobile checkout order summary that shows the total in the trigger and reveals line items.",
    code: `
const items = [
  { name: "Linen overshirt", qty: 1, price: 89 },
  { name: "Merino crew socks", qty: 3, price: 14 },
  { name: "Canvas tote", qty: 1, price: 32 },
]

export default function CheckoutOrderSummary() {
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0)
  const shipping = 6
  return (
    <Collapsible className="w-full max-w-sm border bg-muted/40">
      <CollapsibleTrigger
        render={
          <Button variant="ghost" className="h-12 w-full justify-between px-4">
            <span className="flex items-center gap-2">
              <ShoppingBagIcon />
              Show order summary
              <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
            </span>
            <span className="text-sm font-semibold">\${subtotal + shipping}.00</span>
          </Button>
        }
      />
      <CollapsibleContent className="${panel}">
        <div className="flex flex-col gap-3 border-t px-4 py-4 text-sm">
          {items.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div className="relative flex size-10 items-center justify-center border bg-background">
                <PackageIcon className="size-4 text-muted-foreground" />
                <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-foreground text-[10px] text-background">
                  {item.qty}
                </span>
              </div>
              <span className="flex-1">{item.name}</span>
              <span>\${item.qty * item.price}.00</span>
            </div>
          ))}
          <Separator />
          <div className="flex justify-between text-muted-foreground">
            <span>Subtotal</span>
            <span>\${subtotal}.00</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Shipping</span>
            <span>\${shipping}.00</span>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}`,
  },
  {
    name: "ReadMoreDescription",
    description: "Controlled show more / show less toggle for a long product description.",
    code: `
export default function ReadMoreDescription() {
  const [open, setOpen] = React.useState(false)
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-sm space-y-2">
      <h3 className="text-base font-semibold">Halden desk lamp</h3>
      <p className="text-sm text-muted-foreground">
        A warm, dimmable desk lamp machined from a single block of aluminium, with a weighted base that stays put.
      </p>
      <CollapsibleContent className="${panel}">
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            The head pivots 270 degrees and the arm locks at any angle. Three colour temperatures let you move from focused work to evening reading without swapping bulbs.
          </p>
          <p>Includes a braided USB-C cable and a two-year warranty.</p>
        </div>
      </CollapsibleContent>
      <CollapsibleTrigger render={<Button variant="link" className="h-auto px-0" />}>
        {open ? "Show less" : "Show more"}
      </CollapsibleTrigger>
    </Collapsible>
  )
}`,
  },
  {
    name: "AdvancedNotificationOptions",
    description: "Notification settings card hiding advanced switches inside a collapsible section.",
    code: `
const advanced = [
  { id: "digest", label: "Daily digest", hint: "One summary email at 8:00 AM" },
  { id: "mentions", label: "Only mentions", hint: "Mute everything except direct mentions" },
  { id: "quiet", label: "Quiet hours", hint: "Pause push notifications from 10 PM to 7 AM" },
]

export default function AdvancedNotificationOptions() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Choose how you hear about activity.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="email-notif">Email notifications</Label>
          <Switch id="email-notif" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="push-notif">Push notifications</Label>
          <Switch id="push-notif" />
        </div>
        <Collapsible>
          <CollapsibleTrigger render={<Button variant="outline" size="sm" className="w-full" />}>
            <Settings2Icon data-icon="inline-start" />
            Advanced options
            <ChevronDownIcon className="${chev}" />
          </CollapsibleTrigger>
          <CollapsibleContent className="${panel}">
            <div className="flex flex-col gap-4 pt-4">
              {advanced.map((option) => (
                <div key={option.id} className="flex items-start justify-between gap-4">
                  <div className="grid gap-0.5">
                    <Label htmlFor={option.id}>{option.label}</Label>
                    <p className="text-xs text-muted-foreground">{option.hint}</p>
                  </div>
                  <Switch id={option.id} size="sm" />
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "SidebarNavSections",
    description: "App sidebar navigation with collapsible sections and active link styling.",
    code: `
const sections = [
  {
    title: "Workspace",
    icon: LayoutDashboardIcon,
    links: ["Overview", "Inbox", "Calendar"],
    open: true,
  },
  {
    title: "Projects",
    icon: FolderKanbanIcon,
    links: ["Website refresh", "Mobile app", "Brand guidelines"],
    open: true,
  },
  { title: "Reports", icon: ChartBarIcon, links: ["Revenue", "Retention"], open: false },
]

export default function SidebarNavSections() {
  return (
    <nav className="flex w-full max-w-60 flex-col gap-1 border bg-background p-2">
      {sections.map((section) => (
        <Collapsible key={section.title} defaultOpen={section.open}>
          <CollapsibleTrigger
            render={
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <section.icon />
                {section.title}
                <ChevronRightIcon className="ml-auto ${chevRight}" />
              </Button>
            }
          />
          <CollapsibleContent className="${panel}">
            <ul className="ml-4 flex flex-col border-l py-1 pl-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className={cn(
                      "block px-2 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground",
                      link === "Mobile app" && "bg-muted font-medium text-foreground"
                    )}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </nav>
  )
}`,
  },
  {
    name: "ChangelogReleases",
    description: "Changelog where only the latest release is expanded and older releases collapse.",
    code: `
const releases = [
  {
    version: "v3.2.0",
    date: "Nov 12",
    changes: [
      { type: "New", text: "Bulk edit for invoices" },
      { type: "Fix", text: "CSV export kept timezone offsets" },
    ],
  },
  {
    version: "v3.1.4",
    date: "Oct 28",
    changes: [{ type: "Fix", text: "Sidebar no longer jumps on resize" }],
  },
  {
    version: "v3.1.0",
    date: "Oct 09",
    changes: [
      { type: "New", text: "Saved filters on every table" },
      { type: "Improved", text: "Faster dashboard load times" },
    ],
  },
]

export default function ChangelogReleases() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      {releases.map((release, index) => (
        <Collapsible key={release.version} defaultOpen={index === 0} className="border">
          <CollapsibleTrigger
            render={
              <Button variant="ghost" className="w-full justify-start px-3">
                <span className="font-mono">{release.version}</span>
                {index === 0 && <Badge>Latest</Badge>}
                <span className="ml-auto text-xs text-muted-foreground">{release.date}</span>
                <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
              </Button>
            }
          />
          <CollapsibleContent className="${panel}">
            <ul className="flex flex-col gap-2 border-t px-3 py-3 text-sm">
              {release.changes.map((change) => (
                <li key={change.text} className="flex items-center gap-2">
                  <Badge variant={change.type === "Fix" ? "secondary" : "outline"}>{change.type}</Badge>
                  {change.text}
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ErrorStackTrace",
    description: "Destructive alert with a collapsible stack trace for debugging details.",
    code: `
const trace = [
  "TypeError: Cannot read properties of undefined (reading 'amount')",
  "    at formatInvoice (invoice.ts:42:18)",
  "    at InvoiceRow (invoice-row.tsx:17:9)",
  "    at renderWithHooks (react-dom.js:1622:22)",
]

export default function ErrorStackTrace() {
  return (
    <Alert variant="error" className="w-full max-w-md">
      <CircleAlertIcon />
      <AlertTitle>Failed to render invoices</AlertTitle>
      <AlertDescription>
        <p>Something went wrong while loading this page. Our team has been notified.</p>
        <Collapsible className="mt-2 w-full">
          <CollapsibleTrigger render={<Button variant="link" size="xs" className="h-auto px-0 text-destructive" />}>
            <ChevronRightIcon className="${chevRight}" />
            Technical details
          </CollapsibleTrigger>
          <CollapsibleContent className="${panel}">
            <pre className="mt-2 overflow-x-auto bg-muted p-3 font-mono text-[11px] leading-relaxed text-foreground">
              {trace.join("\\n")}
            </pre>
          </CollapsibleContent>
        </Collapsible>
      </AlertDescription>
    </Alert>
  )
}`,
  },
  {
    name: "LockedSectionDisabled",
    description: "Disabled collapsible for a feature gated behind an upgrade.",
    code: `
export default function LockedSectionDisabled() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Collapsible className="border" defaultOpen>
        <CollapsibleTrigger
          render={
            <Button variant="ghost" className="w-full justify-start">
              <UsersIcon />
              Team members
              <ChevronDownIcon className="${chev}" />
            </Button>
          }
        />
        <CollapsibleContent className="${panel}">
          <p className="border-t px-4 py-3 text-sm text-muted-foreground">5 of 10 seats in use.</p>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible disabled className="border border-dashed">
        <CollapsibleTrigger
          render={
            <Button variant="ghost" className="w-full justify-start">
              <LockIcon />
              Audit log
              <Badge variant="secondary" className="ml-auto">
                Business
              </Badge>
            </Button>
          }
        />
        <CollapsibleContent>
          <p className="px-4 py-3 text-sm">Hidden content</p>
        </CollapsibleContent>
      </Collapsible>
      <p className="text-xs text-muted-foreground">
        Upgrade to the Business plan to review every change made in your workspace.
      </p>
    </div>
  )
}`,
  },
  {
    name: "PlanFeaturesDefaultOpen",
    description: "Pricing plan card with the feature list open by default via defaultOpen.",
    code: `
const features = [
  "Unlimited projects",
  "Up to 25 collaborators",
  "Version history for 90 days",
  "Priority email support",
  "Custom domains",
]

export default function PlanFeaturesDefaultOpen() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardDescription>Team</CardDescription>
        <CardTitle className="text-3xl">
          $24<span className="text-sm font-normal text-muted-foreground"> / seat / mo</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Collapsible defaultOpen>
          <CollapsibleTrigger
            render={
              <Button variant="ghost" size="sm" className="w-full justify-between px-0">
                What&apos;s included
                <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
              </Button>
            }
          />
          <CollapsibleContent className="${panel}">
            <ul className="flex flex-col gap-2 pt-2 text-sm">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckIcon className="size-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Start free trial</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "CompareAllFeatures",
    description: "Plan comparison grid that reveals a longer feature matrix on demand.",
    code: `
const rows = [
  { feature: "Projects", free: "3", pro: "Unlimited" },
  { feature: "Storage", free: "2 GB", pro: "100 GB" },
  { feature: "Guests", free: false, pro: true },
  { feature: "SSO", free: false, pro: true },
  { feature: "API access", free: false, pro: true },
  { feature: "Audit log", free: false, pro: true },
]

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "string") return <span>{value}</span>
  return value ? <CheckIcon className="size-4" /> : <MinusIcon className="size-4 text-muted-foreground" />
}

export default function CompareAllFeatures() {
  const [open, setOpen] = React.useState(false)
  const renderRow = (row: (typeof rows)[number]) => (
    <div key={row.feature} className="grid grid-cols-3 items-center border-t px-3 py-2 text-sm">
      <span className="text-muted-foreground">{row.feature}</span>
      <Cell value={row.free} />
      <Cell value={row.pro} />
    </div>
  )
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-md border">
      <div className="grid grid-cols-3 px-3 py-2 text-xs font-medium">
        <span>Feature</span>
        <span>Free</span>
        <span>Pro</span>
      </div>
      {rows.slice(0, 2).map(renderRow)}
      <CollapsibleContent className="${panel}">{rows.slice(2).map(renderRow)}</CollapsibleContent>
      <CollapsibleTrigger render={<Button variant="ghost" className="w-full border-t" />}>
        {open ? "Hide comparison" : "Compare all features"}
        <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
      </CollapsibleTrigger>
    </Collapsible>
  )
}`,
  },
  {
    name: "CommentReplies",
    description: "Discussion comment that expands a thread of replies.",
    code: `
const replies = [
  { name: "Priya Nair", time: "2h", text: "Agreed, the new spacing reads much better on mobile." },
  { name: "Tomás Ruiz", time: "1h", text: "Can we keep the old icon for the export action?" },
  { name: "Lena Ford", time: "45m", text: "Updated the file with both icon options." },
]

export default function CommentReplies() {
  return (
    <div className="w-full max-w-md">
      <div className="flex gap-3">
        <Avatar>
          <AvatarFallback>JO</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <p className="text-sm">
            <span className="font-medium">Jonah Okafor</span>{" "}
            <span className="text-xs text-muted-foreground">3h</span>
          </p>
          <p className="text-sm">I tightened the card spacing on the pricing page. Thoughts before I ship?</p>
          <Collapsible>
            <CollapsibleTrigger render={<Button variant="link" size="xs" className="h-auto px-0" />}>
              <MessageSquareIcon />
              {replies.length} replies
            </CollapsibleTrigger>
            <CollapsibleContent className="${panel}">
              <div className="mt-3 flex flex-col gap-3 border-l pl-3">
                {replies.map((reply) => (
                  <div key={reply.name} className="flex gap-2">
                    <Avatar size="sm">
                      <AvatarFallback>{reply.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <span className="font-medium">{reply.name}</span>{" "}
                      <span className="text-xs text-muted-foreground">{reply.time}</span>
                      <p>{reply.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "CodeSnippetExpand",
    description: "Code block preview that fades out and expands to show the full snippet.",
    code: `
const lines = [
  "import { createClient } from './client'",
  "",
  "const client = createClient({",
  "  apiKey: process.env.ACME_KEY,",
  "  region: 'eu-west',",
  "})",
  "",
  "const invoices = await client.invoices.list({",
  "  status: 'open',",
  "  limit: 20,",
  "})",
  "",
  "console.log(invoices.data.length)",
]

export default function CodeSnippetExpand() {
  const [open, setOpen] = React.useState(false)
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-md border bg-muted/40">
      <div className="flex items-center justify-between border-b px-3 py-2 text-xs">
        <span className="font-mono">list-invoices.ts</span>
        <Button variant="ghost" size="icon-xs" aria-label="Copy code">
          <CopyIcon />
        </Button>
      </div>
      <div className="relative">
        <pre className="overflow-x-auto px-3 pt-3 font-mono text-xs leading-5">{lines.slice(0, 4).join("\\n")}</pre>
        <CollapsibleContent className="${panel}">
          <pre className="overflow-x-auto px-3 font-mono text-xs leading-5">{lines.slice(4).join("\\n")}</pre>
        </CollapsibleContent>
        {!open && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background to-transparent" />
        )}
      </div>
      <CollapsibleTrigger render={<Button variant="ghost" size="sm" className="w-full" />}>
        {open ? "Collapse" : "Expand " + lines.length + " lines"}
      </CollapsibleTrigger>
    </Collapsible>
  )
}`,
  },
  {
    name: "ShopFilterFacets",
    description: "Storefront filter sidebar with collapsible facet groups of checkboxes.",
    code: `
const facets = [
  { title: "Category", options: ["Jackets", "Knitwear", "Trousers", "Accessories"] },
  { title: "Size", options: ["XS", "S", "M", "L", "XL"] },
  { title: "Material", options: ["Wool", "Cotton", "Linen"] },
]

export default function ShopFilterFacets() {
  return (
    <aside className="w-full max-w-60 divide-y border">
      {facets.map((facet, index) => (
        <Collapsible key={facet.title} defaultOpen={index < 2}>
          <CollapsibleTrigger
            render={
              <Button variant="ghost" className="w-full justify-between px-3 font-semibold">
                {facet.title}
                <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
              </Button>
            }
          />
          <CollapsibleContent className="${panel}">
            <div className="flex flex-col gap-2 px-3 pb-3">
              {facet.options.map((option) => {
                const id = facet.title + "-" + option
                return (
                  <div key={option} className="flex items-center gap-2">
                    <Checkbox id={id} />
                    <Label htmlFor={id} className="font-normal">
                      {option}
                    </Label>
                  </div>
                )
              })}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </aside>
  )
}`,
  },
  {
    name: "TaskSubtasks",
    description: "Project task row with progress that expands to a checklist of subtasks.",
    code: `
const initial = [
  { id: "copy", label: "Write onboarding copy", done: true },
  { id: "illus", label: "Draft empty-state illustrations", done: true },
  { id: "qa", label: "QA on small screens", done: false },
  { id: "ship", label: "Ship behind feature flag", done: false },
]

export default function TaskSubtasks() {
  const [tasks, setTasks] = React.useState(initial)
  const done = tasks.filter((task) => task.done).length
  return (
    <Collapsible defaultOpen className="w-full max-w-sm border">
      <div className="flex items-center gap-3 p-3">
        <CollapsibleTrigger
          render={
            <Button variant="ghost" size="icon-sm" aria-label="Toggle subtasks">
              <ChevronRightIcon className="${chevRight}" />
            </Button>
          }
        />
        <div className="flex-1 space-y-1.5">
          <p className="text-sm font-medium">Redesign onboarding flow</p>
          <Progress value={(done / tasks.length) * 100} />
        </div>
        <span className="text-xs text-muted-foreground">
          {done}/{tasks.length}
        </span>
      </div>
      <CollapsibleContent className="${panel}">
        <ul className="flex flex-col gap-2 border-t px-4 py-3">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center gap-2">
              <Checkbox
                id={task.id}
                checked={task.done}
                onCheckedChange={(checked) =>
                  setTasks((prev) => prev.map((t) => (t.id === task.id ? { ...t, done: checked } : t)))
                }
              />
              <Label htmlFor={task.id} className={cn("font-normal", task.done && "text-muted-foreground line-through")}>
                {task.label}
              </Label>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}`,
  },
  {
    name: "BillingAddressToggle",
    description: "Checkout form where unchecking a box reveals a separate billing address form.",
    code: `
export default function BillingAddressToggle() {
  const [same, setSame] = React.useState(true)
  return (
    <Collapsible open={!same} onOpenChange={(open) => setSame(!open)} className="w-full max-w-sm space-y-4">
      <div className="flex items-center gap-2">
        <Checkbox id="same-address" checked={same} onCheckedChange={(checked) => setSame(checked)} />
        <Label htmlFor="same-address">Billing address is the same as shipping</Label>
      </div>
      <CollapsibleContent className="${panel}">
        <FieldGroup className="gap-3 p-px">
          <Field>
            <FieldLabel htmlFor="billing-street">Street address</FieldLabel>
            <Input id="billing-street" placeholder="221 Harbor Lane" />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="billing-city">City</FieldLabel>
              <Input id="billing-city" placeholder="Portsmouth" />
            </Field>
            <Field>
              <FieldLabel htmlFor="billing-zip">Postal code</FieldLabel>
              <Input id="billing-zip" placeholder="03801" />
            </Field>
          </div>
        </FieldGroup>
      </CollapsibleContent>
    </Collapsible>
  )
}`,
  },
  {
    name: "PromoCodeReveal",
    description: "Cart summary with a collapsible link that reveals a promo code input.",
    code: `
export default function PromoCodeReveal() {
  const [code, setCode] = React.useState("")
  const [applied, setApplied] = React.useState<string | null>(null)
  return (
    <div className="w-full max-w-xs space-y-3 border p-4 text-sm">
      <div className="flex justify-between">
        <span className="text-muted-foreground">Subtotal</span>
        <span>$148.00</span>
      </div>
      {applied && (
        <div className="flex justify-between text-primary">
          <span>Discount ({applied})</span>
          <span>-$14.80</span>
        </div>
      )}
      <Collapsible>
        <CollapsibleTrigger render={<Button variant="link" size="xs" className="h-auto px-0" />}>
          <TicketPercentIcon />
          Have a promo code?
        </CollapsibleTrigger>
        <CollapsibleContent className="${panel}">
          <form
            className="flex gap-2 p-px pt-2"
            onSubmit={(event) => {
              event.preventDefault()
              if (code) setApplied(code.toUpperCase())
            }}
          >
            <Input value={code} onChange={(event) => setCode(event.target.value)} placeholder="AUTUMN10" />
            <Button type="submit" variant="secondary">
              Apply
            </Button>
          </form>
        </CollapsibleContent>
      </Collapsible>
      <Separator />
      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>{applied ? "$133.20" : "$148.00"}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "AuditLogEntryDiff",
    description: "Audit log entries that expand to show the before and after values of a change.",
    code: `
const entries = [
  {
    actor: "Maya Chen",
    action: "updated billing email",
    time: "Today, 09:41",
    before: "finance@northwind.test",
    after: "billing@northwind.test",
  },
  {
    actor: "Arjun Patel",
    action: "changed member role",
    time: "Yesterday, 17:02",
    before: "role: viewer",
    after: "role: admin",
  },
]

export default function AuditLogEntryDiff() {
  return (
    <div className="w-full max-w-md divide-y border">
      {entries.map((entry) => (
        <Collapsible key={entry.time}>
          <CollapsibleTrigger
            render={
              <Button variant="ghost" className="h-auto w-full justify-start gap-3 px-3 py-2.5 text-left whitespace-normal">
                <HistoryIcon className="text-muted-foreground" />
                <span className="flex-1">
                  <span className="font-semibold">{entry.actor}</span>{" "}
                  <span className="font-normal">{entry.action}</span>
                  <span className="block text-xs font-normal text-muted-foreground">{entry.time}</span>
                </span>
                <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
              </Button>
            }
          />
          <CollapsibleContent className="${panel}">
            <div className="grid gap-1 px-3 pb-3 font-mono text-xs">
              <p className="bg-destructive/10 px-2 py-1 text-destructive">- {entry.before}</p>
              <p className="bg-primary/10 px-2 py-1">+ {entry.after}</p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}`,
  },
  {
    name: "InvoiceLineItems",
    description: "Invoice list rows that expand to reveal individual line items.",
    code: `
const invoices = [
  {
    id: "INV-2041",
    customer: "Bluefin Studio",
    status: "Paid",
    lines: [
      { label: "Design retainer, October", amount: 3200 },
      { label: "Stock illustrations", amount: 180 },
    ],
  },
  {
    id: "INV-2042",
    customer: "Kettle & Co.",
    status: "Overdue",
    lines: [
      { label: "Website audit", amount: 950 },
      { label: "Analytics setup", amount: 400 },
      { label: "Hosting, 12 months", amount: 240 },
    ],
  },
]

export default function InvoiceLineItems() {
  return (
    <div className="w-full max-w-md border">
      {invoices.map((invoice) => {
        const total = invoice.lines.reduce((sum, line) => sum + line.amount, 0)
        return (
          <Collapsible key={invoice.id} className="border-b last:border-b-0">
            <div className="flex items-center gap-2 px-2 py-2 text-sm">
              <CollapsibleTrigger
                render={
                  <Button variant="ghost" size="icon-sm" aria-label={"Toggle " + invoice.id}>
                    <ChevronRightIcon className="${chevRight}" />
                  </Button>
                }
              />
              <span className="font-mono text-xs">{invoice.id}</span>
              <span className="flex-1 truncate">{invoice.customer}</span>
              <Badge variant={invoice.status === "Paid" ? "secondary" : "destructive"}>{invoice.status}</Badge>
              <span className="w-16 text-right font-medium">\${total.toLocaleString()}</span>
            </div>
            <CollapsibleContent className="${panel}">
              <div className="space-y-1 bg-muted/50 px-11 py-2 text-xs">
                {invoice.lines.map((line) => (
                  <div key={line.label} className="flex justify-between">
                    <span className="text-muted-foreground">{line.label}</span>
                    <span>\${line.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        )
      })}
    </div>
  )
}`,
  },
  {
    name: "TeamHierarchy",
    description: "Recursive org chart where each manager collapses to hide their reports.",
    code: `
type Person = { name: string; role: string; reports?: Person[] }

const org: Person = {
  name: "Ava Lindqvist",
  role: "VP Engineering",
  reports: [
    {
      name: "Noah Kim",
      role: "Platform Lead",
      reports: [
        { name: "Sara Haddad", role: "Backend Engineer" },
        { name: "Leo Brandt", role: "SRE" },
      ],
    },
    {
      name: "Mira Costa",
      role: "Product Lead",
      reports: [{ name: "Ian Wells", role: "Frontend Engineer" }],
    },
  ],
}

function PersonRow({ person }: { person: Person }) {
  const label = (
    <>
      <Avatar size="sm">
        <AvatarFallback>{person.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
      </Avatar>
      <span className="text-left">
        <span className="block text-xs font-medium">{person.name}</span>
        <span className="block text-[11px] font-normal text-muted-foreground">{person.role}</span>
      </span>
    </>
  )
  if (!person.reports) {
    return <div className="flex items-center gap-2 py-1.5 pl-7">{label}</div>
  }
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger
        render={
          <Button variant="ghost" className="h-auto w-full justify-start gap-2 px-1 py-1.5">
            <ChevronRightIcon className="${chevRight}" />
            {label}
            <Badge variant="outline" className="ml-auto">
              {person.reports.length}
            </Badge>
          </Button>
        }
      />
      <CollapsibleContent className="${panel}">
        <div className="ml-3 border-l pl-3">
          {person.reports.map((report) => (
            <PersonRow key={report.name} person={report} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default function TeamHierarchy() {
  return (
    <div className="w-full max-w-xs border p-2">
      <PersonRow person={org} />
    </div>
  )
}`,
  },
  {
    name: "AssistantReasoningTrace",
    description: "Chat assistant message with a collapsible reasoning and tool-call trace.",
    code: `
const steps = [
  { icon: SearchIcon, text: "Searched workspace for \\"Q3 churn\\"" },
  { icon: FileTextIcon, text: "Read retention-report-q3.pdf" },
  { icon: CalculatorIcon, text: "Compared churn against Q2 baseline" },
]

export default function AssistantReasoningTrace() {
  return (
    <div className="flex w-full max-w-md gap-3">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-sky-500 text-white">
        <SparklesIcon className="size-4" />
      </div>
      <div className="flex-1 space-y-2">
        <Collapsible>
          <CollapsibleTrigger render={<Button variant="ghost" size="xs" className="-ml-2 text-muted-foreground" />}>
            <BrainIcon />
            Thought for 6 seconds
            <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="${panel}">
            <ol className="mt-1 flex flex-col gap-2 border-l pl-3 text-xs text-muted-foreground">
              {steps.map((step) => (
                <li key={step.text} className="flex items-center gap-2">
                  <step.icon className="size-3.5" />
                  {step.text}
                </li>
              ))}
            </ol>
          </CollapsibleContent>
        </Collapsible>
        <p className="text-sm">
          Churn in Q3 was 3.1%, down from 4.4% in Q2. Most of the improvement came from annual plans after the new onboarding emails launched.
        </p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "CookiePreferences",
    description: "Cookie consent banner with a customise section that expands category toggles.",
    code: `
const categories = [
  { id: "necessary", label: "Strictly necessary", locked: true },
  { id: "analytics", label: "Analytics", locked: false },
  { id: "marketing", label: "Marketing", locked: false },
]

export default function CookiePreferences() {
  return (
    <Collapsible className="w-full max-w-md space-y-3 border bg-background p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <CookieIcon className="mt-0.5 size-5 shrink-0" />
        <p className="text-sm text-muted-foreground">
          We use cookies to keep you signed in and to understand how the product is used.
        </p>
      </div>
      <CollapsibleContent className="${panel}">
        <div className="flex flex-col gap-3 border-t pt-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
              <Label htmlFor={"cookie-" + category.id}>{category.label}</Label>
              <Switch id={"cookie-" + category.id} defaultChecked={category.locked} disabled={category.locked} />
            </div>
          ))}
        </div>
      </CollapsibleContent>
      <div className="flex flex-wrap justify-end gap-2">
        <CollapsibleTrigger render={<Button variant="ghost" size="sm" />}>Customise</CollapsibleTrigger>
        <Button variant="outline" size="sm">
          Reject all
        </Button>
        <Button size="sm">Accept all</Button>
      </div>
    </Collapsible>
  )
}`,
  },
  {
    name: "OnboardingChecklist",
    description: "Onboarding checklist where only one step is expanded at a time using controlled state.",
    code: `
const steps = [
  { id: "profile", title: "Complete your profile", body: "Add a photo and job title so teammates recognise you.", cta: "Edit profile", done: true },
  { id: "invite", title: "Invite your team", body: "Workspaces with three or more members ship twice as fast.", cta: "Send invites", done: false },
  { id: "connect", title: "Connect a calendar", body: "Sync meetings so focus time is blocked automatically.", cta: "Connect", done: false },
]

export default function OnboardingChecklist() {
  const [openId, setOpenId] = React.useState<string | null>("invite")
  return (
    <Card className="w-full max-w-sm gap-2">
      <CardHeader>
        <CardTitle>Get started</CardTitle>
        <CardDescription>1 of 3 steps complete</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        {steps.map((step) => (
          <Collapsible
            key={step.id}
            open={openId === step.id}
            onOpenChange={(open) => setOpenId(open ? step.id : null)}
            className="data-open:bg-muted/50"
          >
            <CollapsibleTrigger
              render={
                <Button variant="ghost" className="w-full justify-start">
                  {step.done ? <CircleCheckIcon className="text-primary" /> : <CircleIcon className="text-muted-foreground" />}
                  <span className={cn(step.done && "text-muted-foreground line-through")}>{step.title}</span>
                </Button>
              }
            />
            <CollapsibleContent className="${panel}">
              <div className="space-y-3 px-4 pb-3 pl-10 text-sm text-muted-foreground">
                <p>{step.body}</p>
                <Button size="xs" variant={step.done ? "outline" : "default"}>
                  {step.cta}
                </Button>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "DeploymentBuildLogs",
    description: "Deployment status card with collapsible build log output.",
    code: `
const logs = [
  { time: "12:04:01", text: "Cloning repository (main @ 4f2a9c1)" },
  { time: "12:04:07", text: "Installing dependencies" },
  { time: "12:04:39", text: "Running build" },
  { time: "12:05:12", text: "Generated 128 static pages" },
  { time: "12:05:18", text: "Deployment ready" },
]

export default function DeploymentBuildLogs() {
  return (
    <Card className="w-full max-w-md" size="sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-500" />
          Production
        </CardTitle>
        <CardDescription>marketing-site · deployed 2 minutes ago</CardDescription>
        <CardAction>
          <Badge variant="secondary">Ready</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Collapsible>
          <CollapsibleTrigger render={<Button variant="outline" size="sm" className="w-full justify-start" />}>
            <TerminalIcon />
            Build logs
            <span className="text-muted-foreground">· 1m 17s</span>
            <ChevronDownIcon className="${chev}" />
          </CollapsibleTrigger>
          <CollapsibleContent className="${panel}">
            <div className="mt-2 bg-muted p-3 font-mono text-[11px] leading-5">
              {logs.map((log) => (
                <div key={log.time} className="flex gap-3">
                  <span className="text-muted-foreground">{log.time}</span>
                  <span>{log.text}</span>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "KeyboardShortcutGroups",
    description: "Keyboard shortcut reference with collapsible groups and key caps.",
    code: `
const groups = [
  {
    title: "Navigation",
    items: [
      { label: "Go to inbox", keys: ["G", "I"] },
      { label: "Go to projects", keys: ["G", "P"] },
      { label: "Search", keys: ["⌘", "K"] },
    ],
  },
  {
    title: "Editing",
    items: [
      { label: "Bold", keys: ["⌘", "B"] },
      { label: "Insert link", keys: ["⌘", "L"] },
      { label: "Undo", keys: ["⌘", "Z"] },
    ],
  },
]

export default function KeyboardShortcutGroups() {
  return (
    <div className="w-full max-w-sm space-y-2">
      {groups.map((group) => (
        <Collapsible key={group.title} defaultOpen className="border">
          <CollapsibleTrigger
            render={
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <KeyboardIcon />
                {group.title}
                <ChevronDownIcon className="${chev}" />
              </Button>
            }
          />
          <CollapsibleContent className="${panel}">
            <ul className="divide-y border-t">
              {group.items.map((item) => (
                <li key={item.label} className="flex items-center justify-between px-3 py-2 text-sm">
                  {item.label}
                  <KbdGroup>
                    {item.keys.map((key) => (
                      <Kbd key={key}>{key}</Kbd>
                    ))}
                  </KbdGroup>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}`,
  },
  {
    name: "WeatherHourlyForecast",
    description: "Daily weather rows that expand into an hourly forecast strip.",
    code: `
const days = [
  {
    day: "Today",
    icon: SunIcon,
    high: 21,
    low: 12,
    hours: [
      { t: "9 AM", v: 14 },
      { t: "12 PM", v: 19 },
      { t: "3 PM", v: 21 },
      { t: "6 PM", v: 17 },
    ],
  },
  {
    day: "Tuesday",
    icon: CloudRainIcon,
    high: 16,
    low: 10,
    hours: [
      { t: "9 AM", v: 11 },
      { t: "12 PM", v: 14 },
      { t: "3 PM", v: 16 },
      { t: "6 PM", v: 13 },
    ],
  },
]

export default function WeatherHourlyForecast() {
  return (
    <div className="w-full max-w-sm divide-y border">
      {days.map((day, index) => (
        <Collapsible key={day.day} defaultOpen={index === 0}>
          <CollapsibleTrigger
            render={
              <Button variant="ghost" className="h-12 w-full justify-start px-3">
                <day.icon className="size-5" />
                <span className="w-20 text-left">{day.day}</span>
                <span className="ml-auto text-sm">
                  {day.high}° <span className="text-muted-foreground">/ {day.low}°</span>
                </span>
                <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
              </Button>
            }
          />
          <CollapsibleContent className="${panel}">
            <div className="grid grid-cols-4 gap-2 px-3 pb-3">
              {day.hours.map((hour) => (
                <div key={hour.t} className="flex flex-col items-center gap-1 bg-muted py-2 text-xs">
                  <span className="text-muted-foreground">{hour.t}</span>
                  <span className="font-medium">{hour.v}°</span>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}`,
  },
  {
    name: "AgendaMoreEvents",
    description: "Calendar agenda day that hides extra events behind a '+N more' trigger.",
    code: `
const events = [
  { time: "09:00", title: "Design standup", color: "bg-sky-500" },
  { time: "10:30", title: "Customer interview: Halvorsen Labs", color: "bg-violet-500" },
  { time: "13:00", title: "Lunch with Dana", color: "bg-amber-500" },
  { time: "15:00", title: "Sprint planning", color: "bg-emerald-500" },
  { time: "17:30", title: "Gym", color: "bg-rose-500" },
]

export default function AgendaMoreEvents() {
  const [open, setOpen] = React.useState(false)
  const renderEvent = (event: (typeof events)[number]) => (
    <div key={event.time} className="flex items-center gap-3 py-1.5 text-sm">
      <span className={cn("h-8 w-1", event.color)} />
      <span className="w-12 text-xs text-muted-foreground">{event.time}</span>
      <span className="truncate">{event.title}</span>
    </div>
  )
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-xs border p-3">
      <div className="mb-2 flex items-baseline gap-2">
        <span className="text-2xl font-semibold">14</span>
        <span className="text-sm text-muted-foreground">Thursday</span>
      </div>
      {events.slice(0, 2).map(renderEvent)}
      <CollapsibleContent className="${panel}">{events.slice(2).map(renderEvent)}</CollapsibleContent>
      <CollapsibleTrigger render={<Button variant="ghost" size="xs" className="mt-1" />}>
        {open ? "Show less" : "+" + (events.length - 2) + " more"}
      </CollapsibleTrigger>
    </Collapsible>
  )
}`,
  },
  {
    name: "ApiEndpointReference",
    description: "API reference rows that expand to list request parameters.",
    code: `
const endpoints = [
  {
    method: "GET",
    path: "/v1/invoices",
    summary: "List invoices",
    params: [
      { name: "status", type: "string", desc: "Filter by open, paid or void" },
      { name: "limit", type: "integer", desc: "Between 1 and 100" },
    ],
  },
  {
    method: "POST",
    path: "/v1/invoices",
    summary: "Create an invoice",
    params: [
      { name: "customer", type: "string", desc: "Customer ID" },
      { name: "due_date", type: "date", desc: "ISO 8601 date" },
    ],
  },
]

export default function ApiEndpointReference() {
  return (
    <div className="w-full max-w-md space-y-2">
      {endpoints.map((endpoint) => (
        <Collapsible key={endpoint.method + endpoint.path} className="border">
          <CollapsibleTrigger
            render={
              <Button variant="ghost" className="w-full justify-start px-3 font-mono">
                <Badge variant={endpoint.method === "GET" ? "secondary" : "default"} className="w-12">
                  {endpoint.method}
                </Badge>
                {endpoint.path}
                <span className="ml-auto hidden font-sans text-xs font-normal text-muted-foreground sm:inline">
                  {endpoint.summary}
                </span>
                <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
              </Button>
            }
          />
          <CollapsibleContent className="${panel}">
            <div className="border-t px-3 py-2">
              <p className="mb-2 text-xs font-medium text-muted-foreground uppercase">Parameters</p>
              {endpoint.params.map((param) => (
                <div key={param.name} className="flex flex-wrap items-baseline gap-2 py-1 text-xs">
                  <code className="font-semibold">{param.name}</code>
                  <span className="text-muted-foreground">{param.type}</span>
                  <span className="w-full text-muted-foreground sm:w-auto sm:flex-1 sm:text-right">{param.desc}</span>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}`,
  },
  {
    name: "FieldHelpExplainer",
    description: "Form field with an inline 'Why do we need this?' collapsible explanation.",
    code: `
export default function FieldHelpExplainer() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="tax-id">Tax ID</FieldLabel>
      <Input id="tax-id" placeholder="GB 123 4567 89" />
      <Collapsible>
        <CollapsibleTrigger render={<Button variant="link" size="xs" className="h-auto px-0 text-muted-foreground" />}>
          <CircleHelpIcon />
          Why do we need this?
        </CollapsibleTrigger>
        <CollapsibleContent className="${panel}">
          <FieldDescription className="mt-1 border-l-2 pl-3">
            Businesses in the EU and UK can be invoiced without VAT when a valid tax ID is on file. We never share it outside of your invoices.
          </FieldDescription>
        </CollapsibleContent>
      </Collapsible>
    </Field>
  )
}`,
  },
  {
    name: "ExpandAllSections",
    description: "Group of controlled collapsibles with expand all and collapse all buttons.",
    code: `
const sections = [
  { id: "overview", title: "Overview", body: "Kickoff is scheduled for March 3 with the full product team." },
  { id: "scope", title: "Scope", body: "Covers the checkout, account and order history screens." },
  { id: "risks", title: "Risks", body: "Payment provider migration may slip by one sprint." },
]

export default function ExpandAllSections() {
  const [open, setOpen] = React.useState<string[]>(["overview"])
  const allOpen = open.length === sections.length
  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Project brief</h3>
        <Button variant="ghost" size="xs" onClick={() => setOpen(allOpen ? [] : sections.map((s) => s.id))}>
          {allOpen ? <ChevronsDownUpIcon /> : <ChevronsUpDownIcon />}
          {allOpen ? "Collapse all" : "Expand all"}
        </Button>
      </div>
      <div className="divide-y border">
        {sections.map((section) => (
          <Collapsible
            key={section.id}
            open={open.includes(section.id)}
            onOpenChange={(next) =>
              setOpen((prev) => (next ? [...prev, section.id] : prev.filter((id) => id !== section.id)))
            }
          >
            <CollapsibleTrigger
              render={
                <Button variant="ghost" className="w-full justify-start">
                  <ChevronRightIcon className="${chevRight}" />
                  {section.title}
                </Button>
              }
            />
            <CollapsibleContent className="${panel}">
              <p className="px-4 pb-3 pl-10 text-sm text-muted-foreground">{section.body}</p>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "SearchResultGroups",
    description: "Grouped search results where each group reveals more matches on demand.",
    code: `
const groups = [
  {
    label: "Documents",
    icon: FileTextIcon,
    results: ["Q4 roadmap", "Hiring plan 2027", "Brand voice guide", "Offsite agenda", "Security policy"],
  },
  {
    label: "People",
    icon: UserIcon,
    results: ["Rosa Delgado", "Rohan Mehta", "Ruth Adeyemi", "Rafael Sousa"],
  },
]

export default function SearchResultGroups() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput defaultValue="ro" aria-label="Search" />
      </InputGroup>
      {groups.map((group) => (
        <Collapsible key={group.label}>
          <p className="mb-1 text-xs font-medium text-muted-foreground">{group.label}</p>
          <ul>
            {group.results.slice(0, 2).map((result) => (
              <li key={result} className="flex items-center gap-2 px-2 py-1.5 text-sm hover:bg-muted">
                <group.icon className="size-4 text-muted-foreground" />
                {result}
              </li>
            ))}
          </ul>
          <CollapsibleContent className="${panel}">
            <ul>
              {group.results.slice(2).map((result) => (
                <li key={result} className="flex items-center gap-2 px-2 py-1.5 text-sm hover:bg-muted">
                  <group.icon className="size-4 text-muted-foreground" />
                  {result}
                </li>
              ))}
            </ul>
          </CollapsibleContent>
          <CollapsibleTrigger render={<Button variant="link" size="xs" className="group/more px-2" />}>
            <span className="group-data-panel-open/more:hidden">Show {group.results.length - 2} more</span>
            <span className="hidden group-data-panel-open/more:inline">Show fewer</span>
          </CollapsibleTrigger>
        </Collapsible>
      ))}
    </div>
  )
}`,
  },
  {
    name: "BankTransactionDetails",
    description: "Banking transaction list where tapping a transaction reveals its reference details.",
    code: `
const transactions = [
  { id: "t1", merchant: "Corner Bakery", category: "Food", amount: -8.4, date: "Nov 14", ref: "POS 4471 · Card ending 2290" },
  { id: "t2", merchant: "Salary · Fernway Ltd", category: "Income", amount: 4250, date: "Nov 13", ref: "BACS · Ref NOV-PAYROLL" },
  { id: "t3", merchant: "City Transit", category: "Transport", amount: -32, date: "Nov 12", ref: "Monthly pass · Auto top-up" },
]

export default function BankTransactionDetails() {
  return (
    <div className="w-full max-w-sm divide-y border">
      {transactions.map((tx) => (
        <Collapsible key={tx.id}>
          <CollapsibleTrigger
            render={
              <Button variant="ghost" className="h-auto w-full justify-start gap-3 px-3 py-2.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-muted">
                  {tx.amount > 0 ? <ArrowDownLeftIcon /> : <ArrowUpRightIcon />}
                </span>
                <span className="flex-1 text-left">
                  <span className="block text-sm">{tx.merchant}</span>
                  <span className="block text-xs font-normal text-muted-foreground">
                    {tx.category} · {tx.date}
                  </span>
                </span>
                <span className={cn("text-sm", tx.amount > 0 && "text-emerald-600 dark:text-emerald-400")}>
                  {tx.amount > 0 ? "+" : "-"}\${Math.abs(tx.amount).toFixed(2)}
                </span>
              </Button>
            }
          />
          <CollapsibleContent className="${panel}">
            <div className="flex items-center justify-between gap-2 bg-muted/50 px-3 py-2 text-xs">
              <span className="text-muted-foreground">{tx.ref}</span>
              <Button variant="outline" size="xs">
                <ReceiptIcon />
                Receipt
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}`,
  },
  {
    name: "RoleScopesEditor",
    description: "Role permission editor with collapsible scope groups and select-all counts.",
    code: `
const groups = [
  { id: "projects", label: "Projects", scopes: ["View", "Create", "Archive", "Delete"] },
  { id: "billing", label: "Billing", scopes: ["View invoices", "Update payment method"] },
]

export default function RoleScopesEditor() {
  const [granted, setGranted] = React.useState<string[]>(["projects:View", "projects:Create"])
  const toggle = (key: string, on: boolean) =>
    setGranted((prev) => (on ? [...prev, key] : prev.filter((k) => k !== key)))
  return (
    <div className="w-full max-w-sm space-y-2">
      <p className="text-sm font-semibold">Editor role</p>
      {groups.map((group) => {
        const count = group.scopes.filter((scope) => granted.includes(group.id + ":" + scope)).length
        return (
          <Collapsible key={group.id} defaultOpen={group.id === "projects"} className="border">
            <CollapsibleTrigger
              render={
                <Button variant="ghost" className="w-full justify-start">
                  <ShieldIcon />
                  {group.label}
                  <span className="ml-auto text-xs text-muted-foreground">
                    {count}/{group.scopes.length}
                  </span>
                  <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
                </Button>
              }
            />
            <CollapsibleContent className="${panel}">
              <div className="grid grid-cols-2 gap-2 border-t p-3">
                {group.scopes.map((scope) => {
                  const key = group.id + ":" + scope
                  return (
                    <div key={key} className="flex items-center gap-2">
                      <Checkbox id={key} checked={granted.includes(key)} onCheckedChange={(on) => toggle(key, on)} />
                      <Label htmlFor={key} className="font-normal">
                        {scope}
                      </Label>
                    </div>
                  )
                })}
              </div>
            </CollapsibleContent>
          </Collapsible>
        )
      })}
    </div>
  )
}`,
  },
  {
    name: "UploadQueueWidget",
    description: "Minimisable upload queue widget with per-file progress.",
    code: `
const files = [
  { name: "brand-kit.zip", size: "48 MB", progress: 100 },
  { name: "launch-video.mp4", size: "212 MB", progress: 64 },
  { name: "press-release.docx", size: "1.2 MB", progress: 12 },
]

export default function UploadQueueWidget() {
  const done = files.filter((f) => f.progress === 100).length
  return (
    <Collapsible defaultOpen className="w-full max-w-xs border bg-background shadow-md">
      <div className="flex items-center gap-2 bg-muted px-3 py-2">
        <UploadIcon className="size-4" />
        <span className="flex-1 text-sm font-medium">
          Uploading {files.length - done} of {files.length}
        </span>
        <CollapsibleTrigger
          render={
            <Button variant="ghost" size="icon-xs" aria-label="Minimise uploads">
              <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
            </Button>
          }
        />
        <Button variant="ghost" size="icon-xs" aria-label="Close">
          <XIcon />
        </Button>
      </div>
      <CollapsibleContent className="${panel}">
        <ul className="divide-y">
          {files.map((file) => (
            <li key={file.name} className="flex items-center gap-3 px-3 py-2.5">
              <FileIcon className="size-4 text-muted-foreground" />
              <div className="min-w-0 flex-1 space-y-1">
                <p className="truncate text-xs font-medium">{file.name}</p>
                <Progress value={file.progress} />
              </div>
              {file.progress === 100 ? (
                <CircleCheckIcon className="size-4 text-emerald-600" />
              ) : (
                <span className="text-[11px] text-muted-foreground">{file.progress}%</span>
              )}
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}`,
  },
  {
    name: "PlayerUpNextQueue",
    description: "Music player with a collapsible 'Up next' queue.",
    code: `
const queue = [
  { title: "Low Tide", artist: "Marisol Vey", length: "3:42" },
  { title: "Paper Lanterns", artist: "The Quiet Hours", length: "4:05" },
  { title: "Northbound", artist: "Elm & Ash", length: "2:58" },
]

export default function PlayerUpNextQueue() {
  return (
    <Collapsible className="w-full max-w-xs border">
      <div className="flex items-center gap-3 p-3">
        <div className="size-12 shrink-0 bg-gradient-to-br from-orange-400 to-pink-600" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">Glass Harbor</p>
          <p className="truncate text-xs text-muted-foreground">Marisol Vey</p>
        </div>
        <Button size="icon" aria-label="Pause">
          <PauseIcon />
        </Button>
      </div>
      <CollapsibleTrigger render={<Button variant="ghost" size="sm" className="w-full border-t" />}>
        <ListMusicIcon />
        Up next · {queue.length}
        <ChevronUpIcon className="${chev}" />
      </CollapsibleTrigger>
      <CollapsibleContent className="${panel}">
        <ol className="divide-y border-t">
          {queue.map((song, index) => (
            <li key={song.title} className="flex items-center gap-3 px-3 py-2 text-sm">
              <span className="w-4 text-xs text-muted-foreground">{index + 1}</span>
              <span className="flex-1 truncate">
                {song.title} <span className="text-muted-foreground">· {song.artist}</span>
              </span>
              <span className="text-xs text-muted-foreground">{song.length}</span>
            </li>
          ))}
        </ol>
      </CollapsibleContent>
    </Collapsible>
  )
}`,
  },
  {
    name: "StackedNotificationGroup",
    description: "Notification stack that collapses repeated alerts from the same source.",
    code: `
const alerts = [
  { title: "Payment received", body: "Orchard Supply paid INV-3310 ($1,240).", time: "2m" },
  { title: "Payment received", body: "Bright Lane paid INV-3308 ($980).", time: "18m" },
  { title: "Payment received", body: "Marlow & Finch paid INV-3301 ($2,115).", time: "1h" },
]

export default function StackedNotificationGroup() {
  return (
    <Collapsible className="w-full max-w-sm">
      <div className="relative border bg-background p-3 shadow-sm">
        <div className="flex items-start gap-3">
          <span className="flex size-8 items-center justify-center bg-emerald-500/15 text-emerald-600">
            <BanknoteIcon className="size-4" />
          </span>
          <div className="flex-1 text-sm">
            <p className="font-medium">{alerts[0]!.title}</p>
            <p className="text-muted-foreground">{alerts[0]!.body}</p>
          </div>
          <span className="text-xs text-muted-foreground">{alerts[0]!.time}</span>
        </div>
        <CollapsibleTrigger render={<Button variant="secondary" size="xs" className="mt-2 ml-11" />}>
          <span className="group-data-panel-open/button:hidden">{alerts.length - 1} more from Billing</span>
          <span className="hidden group-data-panel-open/button:inline">Show less</span>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="${panel}">
        <div className="flex flex-col gap-1 pt-1">
          {alerts.slice(1).map((alert) => (
            <div key={alert.body} className="flex items-start gap-3 border bg-background p-3 pl-14 text-sm">
              <p className="flex-1 text-muted-foreground">{alert.body}</p>
              <span className="text-xs text-muted-foreground">{alert.time}</span>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}`,
  },
  {
    name: "RecipeSections",
    description: "Recipe card with ingredients open and method steps collapsed.",
    code: `
const ingredients = ["2 cups arborio rice", "1 litre vegetable stock", "200 g chestnut mushrooms", "1 shallot, diced", "40 g parmesan"]
const steps = [
  "Soften the shallot in butter over a low heat.",
  "Toast the rice for two minutes, then add stock a ladle at a time.",
  "Fold in the seared mushrooms and parmesan, rest for two minutes.",
]

export default function RecipeSections() {
  return (
    <Card className="w-full max-w-sm gap-3">
      <CardHeader>
        <CardTitle>Mushroom risotto</CardTitle>
        <CardDescription className="flex gap-3">
          <span className="flex items-center gap-1">
            <ClockIcon className="size-3.5" /> 35 min
          </span>
          <span className="flex items-center gap-1">
            <UsersIcon className="size-3.5" /> Serves 4
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Collapsible defaultOpen>
          <CollapsibleTrigger render={<Button variant="outline" size="sm" className="w-full justify-start" />}>
            <CarrotIcon />
            Ingredients
            <ChevronDownIcon className="${chev}" />
          </CollapsibleTrigger>
          <CollapsibleContent className="${panel}">
            <ul className="list-disc space-y-1 py-2 pl-8 text-sm">
              {ingredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger render={<Button variant="outline" size="sm" className="w-full justify-start" />}>
            <CookingPotIcon />
            Method
            <ChevronDownIcon className="${chev}" />
          </CollapsibleTrigger>
          <CollapsibleContent className="${panel}">
            <ol className="list-decimal space-y-1 py-2 pl-8 text-sm">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "HorizontalToolbarOverflow",
    description: "Editor toolbar whose secondary tools slide open horizontally using the panel width variable.",
    code: `
const extra = [
  { label: "Strikethrough", icon: StrikethroughIcon },
  { label: "Code", icon: CodeIcon },
  { label: "Highlight", icon: HighlighterIcon },
  { label: "Subscript", icon: SubscriptIcon },
]

export default function HorizontalToolbarOverflow() {
  return (
    <Collapsible className="flex w-fit items-center gap-1 border p-1">
      <Button variant="ghost" size="icon-sm" aria-label="Bold">
        <BoldIcon />
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Italic">
        <ItalicIcon />
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Underline">
        <UnderlineIcon />
      </Button>
      <CollapsibleContent className="w-(--collapsible-panel-width) overflow-hidden transition-[width] duration-200 ease-out data-ending-style:w-0 data-starting-style:w-0">
        <div className="flex w-max items-center gap-1">
          {extra.map((tool) => (
            <Button key={tool.label} variant="ghost" size="icon-sm" aria-label={tool.label}>
              <tool.icon />
            </Button>
          ))}
        </div>
      </CollapsibleContent>
      <Separator orientation="vertical" className="mx-1 h-5" />
      <CollapsibleTrigger
        render={
          <Button variant="ghost" size="icon-sm" aria-label="More formatting">
            <ChevronRightIcon className="transition-transform group-data-panel-open/button:rotate-180" />
          </Button>
        }
      />
    </Collapsible>
  )
}`,
  },
  {
    name: "HiddenUntilFoundTerms",
    description: "Terms section using hiddenUntilFound so the browser's find-in-page can reveal collapsed text.",
    code: `
const clauses = [
  { title: "1. Acceptable use", body: "You agree not to resell access, probe for vulnerabilities, or upload unlawful content." },
  { title: "2. Data retention", body: "Deleted projects are kept for 30 days before permanent removal from backups." },
  { title: "3. Termination", body: "Either party may terminate with 30 days written notice; prepaid fees are refunded pro rata." },
]

export default function HiddenUntilFoundTerms() {
  return (
    <div className="w-full max-w-md space-y-2">
      <p className="flex items-center gap-2 text-xs text-muted-foreground">
        <SearchIcon className="size-3.5" />
        Try searching the page for &quot;backups&quot; to auto-open a clause.
      </p>
      <div className="divide-y border">
        {clauses.map((clause) => (
          <Collapsible key={clause.title}>
            <CollapsibleTrigger
              render={
                <Button variant="ghost" className="w-full justify-between">
                  {clause.title}
                  <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
                </Button>
              }
            />
            <CollapsibleContent hiddenUntilFound className="${panel} [&[hidden]:not([hidden='until-found'])]:hidden">
              <p className="px-4 pb-3 text-sm text-muted-foreground">{clause.body}</p>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "ProfileCardDetails",
    description: "Team member profile card that expands to show contact and work details.",
    code: `
const details = [
  { icon: MailIcon, label: "elena.varga@northwind.test" },
  { icon: PhoneIcon, label: "+44 20 7946 0321" },
  { icon: MapPinIcon, label: "Lisbon · GMT+0" },
  { icon: BriefcaseIcon, label: "Joined March 2023" },
]

export default function ProfileCardDetails() {
  return (
    <Card className="w-full max-w-xs" size="sm">
      <Collapsible>
        <CardHeader className="flex items-center gap-3">
          <Avatar size="lg">
            <AvatarFallback className="bg-gradient-to-br from-teal-400 to-blue-600 text-white">EV</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle>Elena Varga</CardTitle>
            <CardDescription>Staff Product Designer</CardDescription>
          </div>
          <CollapsibleTrigger
            render={
              <Button variant="outline" size="icon-sm" aria-label="Toggle details">
                <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
              </Button>
            }
          />
        </CardHeader>
        <CollapsibleContent className="${panel}">
          <CardContent>
            <ul className="mt-3 space-y-2 border-t pt-3 text-sm">
              {details.map((detail) => (
                <li key={detail.label} className="flex items-center gap-2 text-muted-foreground">
                  <detail.icon className="size-4" />
                  <span className="truncate">{detail.label}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}`,
  },
  {
    name: "KpiRegionBreakdown",
    description: "Dashboard KPI card that expands into a per-region revenue breakdown.",
    code: `
const regions = [
  { name: "North America", value: 48200, share: 52 },
  { name: "Europe", value: 29100, share: 31 },
  { name: "Asia Pacific", value: 15700, share: 17 },
]

export default function KpiRegionBreakdown() {
  return (
    <Card className="w-full max-w-xs" size="sm">
      <CardHeader>
        <CardDescription>Monthly revenue</CardDescription>
        <CardTitle className="text-2xl">$93,000</CardTitle>
        <CardAction>
          <Badge variant="secondary">
            <TrendingUpIcon />
            8.2%
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Collapsible>
          <CollapsibleTrigger render={<Button variant="ghost" size="xs" className="-ml-2" />}>
            By region
            <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="${panel}">
            <div className="space-y-3 pt-2">
              {regions.map((region) => (
                <div key={region.name} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>{region.name}</span>
                    <span className="text-muted-foreground">\${region.value.toLocaleString()}</span>
                  </div>
                  <div className="h-1.5 bg-muted">
                    <div className="h-full bg-primary" style={{ width: region.share + "%" }} />
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "EnvironmentVariables",
    description: "Project settings section listing masked environment variables inside a collapsible.",
    code: `
const vars = [
  { key: "DATABASE_URL", value: "postgres://app:••••@db.internal:5432/app" },
  { key: "PAYMENTS_SECRET", value: "key_demo_••••••••••••3f9a" },
  { key: "NEXT_PUBLIC_REGION", value: "eu-central" },
]

export default function EnvironmentVariables() {
  return (
    <Collapsible defaultOpen className="w-full max-w-md border">
      <div className="flex items-center gap-2 px-3 py-2">
        <CollapsibleTrigger
          render={
            <Button variant="ghost" size="sm" className="-ml-1 flex-1 justify-start">
              <ChevronRightIcon className="${chevRight}" />
              Environment variables
              <Badge variant="outline">{vars.length}</Badge>
            </Button>
          }
        />
        <Button size="xs" variant="outline">
          <PlusIcon />
          Add
        </Button>
      </div>
      <CollapsibleContent className="${panel}">
        <div className="divide-y border-t">
          {vars.map((v) => (
            <div key={v.key} className="flex items-center gap-2 px-3 py-2">
              <code className="w-32 shrink-0 truncate text-xs font-semibold sm:w-40">{v.key}</code>
              <code className="flex-1 truncate text-xs text-muted-foreground">{v.value}</code>
              <Button variant="ghost" size="icon-xs" aria-label={"Reveal " + v.key}>
                <EyeIcon />
              </Button>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}`,
  },
  {
    name: "ShipmentTrackingHistory",
    description: "Package tracking timeline showing the latest scan with earlier events collapsed.",
    code: `
const events = [
  { status: "Out for delivery", place: "Leeds depot", time: "Today, 07:12" },
  { status: "Arrived at depot", place: "Leeds", time: "Yesterday, 22:40" },
  { status: "In transit", place: "Birmingham hub", time: "Yesterday, 14:05" },
  { status: "Picked up", place: "Bristol", time: "Nov 12, 18:30" },
]

function Event({ event, first }: { event: (typeof events)[number]; first?: boolean }) {
  return (
    <li className="relative border-l pb-4 pl-5 last:pb-0">
      <span
        className={cn(
          "absolute top-1 -left-[5px] size-2.5 rounded-full border-2 border-background",
          first ? "bg-primary" : "bg-muted-foreground"
        )}
      />
      <p className={cn("text-sm", first && "font-medium")}>{event.status}</p>
      <p className="text-xs text-muted-foreground">
        {event.place} · {event.time}
      </p>
    </li>
  )
}

export default function ShipmentTrackingHistory() {
  return (
    <Collapsible className="w-full max-w-xs space-y-3 border p-4">
      <div className="flex items-center gap-2">
        <TruckIcon className="size-4" />
        <span className="text-sm font-semibold">Arriving today</span>
        <span className="ml-auto font-mono text-xs text-muted-foreground">#TRK88213</span>
      </div>
      <ul className="ml-1">
        <Event event={events[0]!} first />
      </ul>
      <CollapsibleContent className="${panel}">
        <ul className="ml-1 pt-1">
          {events.slice(1).map((event) => (
            <Event key={event.time} event={event} />
          ))}
        </ul>
      </CollapsibleContent>
      <CollapsibleTrigger render={<Button variant="outline" size="xs" className="w-full" />}>
        <span className="group-data-panel-open/button:hidden">Show full history</span>
        <span className="hidden group-data-panel-open/button:inline">Hide history</span>
      </CollapsibleTrigger>
    </Collapsible>
  )
}`,
  },
  {
    name: "PastInvoicesHistory",
    description: "Billing page showing the current invoice with past invoices tucked into a collapsible.",
    code: `
const past = [
  { month: "October 2026", amount: "$49.00" },
  { month: "September 2026", amount: "$49.00" },
  { month: "August 2026", amount: "$29.00" },
]

export default function PastInvoicesHistory() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="flex items-center justify-between border p-3">
        <div>
          <p className="text-sm font-medium">November 2026</p>
          <p className="text-xs text-muted-foreground">Due Dec 1 · Visa ending 4242</p>
        </div>
        <span className="text-sm font-semibold">$49.00</span>
      </div>
      <Collapsible>
        <CollapsibleTrigger render={<Button variant="ghost" size="sm" className="w-full justify-start" />}>
          <ArchiveIcon />
          Past invoices
          <ChevronDownIcon className="${chev}" />
        </CollapsibleTrigger>
        <CollapsibleContent className="${panel}">
          <ul className="divide-y border">
            {past.map((invoice) => (
              <li key={invoice.month} className="flex items-center gap-2 px-3 py-2 text-sm">
                <span className="flex-1">{invoice.month}</span>
                <span className="text-muted-foreground">{invoice.amount}</span>
                <Button variant="ghost" size="icon-xs" aria-label={"Download " + invoice.month}>
                  <DownloadIcon />
                </Button>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}`,
  },
  {
    name: "MeetingAgendaNotes",
    description: "Meeting agenda where each item can be checked off and expanded for notes.",
    code: `
const agenda = [
  { id: "a1", title: "Review last sprint", owner: "KM", minutes: 10, notes: "Velocity up 12%. Two carry-over tickets." },
  { id: "a2", title: "Pricing page experiment", owner: "DR", minutes: 15, notes: "Variant B lifted trials by 6%. Decide on rollout." },
  { id: "a3", title: "Hiring update", owner: "SL", minutes: 5, notes: "Two final-round candidates next week." },
]

export default function MeetingAgendaNotes() {
  return (
    <div className="w-full max-w-md border">
      <div className="flex items-center justify-between border-b px-3 py-2">
        <span className="text-sm font-semibold">Weekly product sync</span>
        <span className="text-xs text-muted-foreground">30 min</span>
      </div>
      {agenda.map((item) => (
        <Collapsible key={item.id} className="border-b last:border-b-0">
          <div className="flex items-center gap-2 px-3 py-1.5">
            <Checkbox id={item.id} aria-label={"Mark " + item.title + " done"} />
            <CollapsibleTrigger
              render={
                <Button variant="ghost" size="sm" className="flex-1 justify-start">
                  {item.title}
                  <span className="ml-auto text-xs font-normal text-muted-foreground">{item.minutes}m</span>
                  <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
                </Button>
              }
            />
            <Avatar size="sm">
              <AvatarFallback>{item.owner}</AvatarFallback>
            </Avatar>
          </div>
          <CollapsibleContent className="${panel}">
            <p className="mx-3 mb-3 ml-9 bg-muted px-3 py-2 text-xs text-muted-foreground">{item.notes}</p>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}`,
  },
  {
    name: "DangerZoneSettings",
    description: "Settings danger zone kept collapsed so destructive actions are not exposed by default.",
    code: `
export default function DangerZoneSettings() {
  return (
    <Collapsible className="w-full max-w-md border border-destructive/40">
      <CollapsibleTrigger
        render={
          <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
            <TriangleAlertIcon />
            Danger zone
            <ChevronDownIcon className="${chev}" />
          </Button>
        }
      />
      <CollapsibleContent className="${panel}">
        <div className="divide-y border-t border-destructive/40">
          <div className="flex items-center justify-between gap-4 p-4">
            <div>
              <p className="text-sm font-medium">Transfer ownership</p>
              <p className="text-xs text-muted-foreground">Hand this workspace to another admin.</p>
            </div>
            <Button variant="outline" size="sm">
              Transfer
            </Button>
          </div>
          <div className="flex items-center justify-between gap-4 p-4">
            <div>
              <p className="text-sm font-medium">Delete workspace</p>
              <p className="text-xs text-muted-foreground">Permanently remove all projects and data.</p>
            </div>
            <Button variant="destructive" size="sm">
              <Trash2Icon data-icon="inline-start" />
              Delete
            </Button>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}`,
  },
  {
    name: "VersionHistoryDays",
    description: "Document version history grouped by day with collapsible day groups.",
    code: `
const days = [
  {
    label: "Today",
    versions: [
      { time: "4:12 PM", author: "Nadia Brooks", current: true },
      { time: "11:03 AM", author: "Owen Hale", current: false },
    ],
  },
  {
    label: "November 13",
    versions: [
      { time: "6:47 PM", author: "Nadia Brooks", current: false },
      { time: "2:20 PM", author: "Priya Shah", current: false },
      { time: "9:15 AM", author: "Owen Hale", current: false },
    ],
  },
]

export default function VersionHistoryDays() {
  return (
    <div className="w-full max-w-xs space-y-1 border p-2">
      <p className="px-2 py-1 text-sm font-semibold">Version history</p>
      {days.map((day, index) => (
        <Collapsible key={day.label} defaultOpen={index === 0}>
          <CollapsibleTrigger
            render={
              <Button variant="ghost" size="xs" className="w-full justify-start text-muted-foreground">
                <ChevronRightIcon className="${chevRight}" />
                {day.label}
              </Button>
            }
          />
          <CollapsibleContent className="${panel}">
            <ul className="flex flex-col">
              {day.versions.map((version) => (
                <li key={version.time}>
                  <button
                    type="button"
                    className={cn(
                      "flex w-full flex-col items-start px-6 py-1.5 text-left hover:bg-muted",
                      version.current && "bg-muted"
                    )}
                  >
                    <span className="flex items-center gap-2 text-sm">
                      {version.time}
                      {version.current && <Badge variant="secondary">Current</Badge>}
                    </span>
                    <span className="text-xs text-muted-foreground">{version.author}</span>
                  </button>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}`,
  },
]

export default examples
