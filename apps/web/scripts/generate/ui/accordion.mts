import { type Example } from "./_lib.mjs"

/** Default trailing chevron used by most examples. */
const CHEV = `<ChevronDownIcon data-slot="accordion-trigger-icon" className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180" />`

const examples: Example[] = [
  {
    name: "AccordionBasicFaq",
    description: "A simple single-open FAQ with a rotating chevron on each trigger.",
    code: `
const faqs = [
  {
    value: "refund",
    question: "Can I get a refund?",
    answer: "Yes. If you cancel within 14 days of purchase we refund the full amount, no questions asked.",
  },
  {
    value: "seats",
    question: "How are seats counted?",
    answer: "Every member with edit access uses a seat. Viewers and guests are always free.",
  },
  {
    value: "export",
    question: "Can I export my data?",
    answer: "You can export every project as JSON or CSV from Settings at any time, even after cancelling.",
  },
]

export default function AccordionBasicFaq() {
  return (
    <Accordion defaultValue={["refund"]} className="w-full max-w-md">
      {faqs.map((faq) => (
        <AccordionItem key={faq.value} value={faq.value}>
          <AccordionTrigger>
            {faq.question}
            ${CHEV}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionMultipleOpen",
    description: "Accordion with the multiple prop so several sections stay expanded at once.",
    code: `
const sections = [
  { value: "overview", title: "Overview", body: "Quarterly roadmap for the Atlas mobile app, covering offline sync and the redesigned inbox." },
  { value: "goals", title: "Goals", body: "Cut cold-start time to under 1.5s and lift weekly retention from 41% to 48%." },
  { value: "risks", title: "Risks", body: "The sync engine rewrite depends on two engineers who are also on call this quarter." },
  { value: "owners", title: "Owners", body: "Product: Lena Ortiz. Engineering: Marcus Hale. Design: Ivy Tran." },
]

export default function AccordionMultipleOpen() {
  return (
    <div className="w-full max-w-md space-y-2">
      <p className="text-xs text-muted-foreground">Open as many sections as you like.</p>
      <Accordion multiple defaultValue={["overview", "goals"]} className="border px-3">
        {sections.map((section) => (
          <AccordionItem key={section.value} value={section.value}>
            <AccordionTrigger>
              {section.title}
              ${CHEV}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{section.body}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}`,
  },
  {
    name: "AccordionExpandCollapseAll",
    description: "Controlled multiple accordion with Expand all and Collapse all buttons.",
    code: `
const topics = [
  { value: "install", title: "Installing the CLI", body: "Run the installer for your platform, then restart your terminal so the binary is on your PATH." },
  { value: "auth", title: "Authenticating", body: "Run the login command and paste the one-time code shown in your browser." },
  { value: "deploy", title: "Your first deploy", body: "From your project folder, run deploy. The CLI detects the framework and uploads a build." },
  { value: "rollback", title: "Rolling back", body: "Open Deployments, pick a previous build and choose Promote to production." },
]

export default function AccordionExpandCollapseAll() {
  const [open, setOpen] = React.useState<string[]>(["install"])
  const allOpen = open.length === topics.length

  return (
    <div className="w-full max-w-md space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Getting started</p>
        <div className="flex gap-1">
          <Button size="xs" variant="outline" disabled={allOpen} onClick={() => setOpen(topics.map((t) => t.value))}>
            Expand all
          </Button>
          <Button size="xs" variant="ghost" disabled={open.length === 0} onClick={() => setOpen([])}>
            Collapse all
          </Button>
        </div>
      </div>
      <Accordion multiple value={open} onValueChange={(value) => setOpen(value as string[])} className="border px-3">
        {topics.map((topic) => (
          <AccordionItem key={topic.value} value={topic.value}>
            <AccordionTrigger>
              {topic.title}
              ${CHEV}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{topic.body}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="text-xs text-muted-foreground">
        {open.length} of {topics.length} sections open
      </p>
    </div>
  )
}`,
  },
  {
    name: "AccordionDisabledItems",
    description: "Plan-gated feature list where locked items are disabled with a Pro badge.",
    code: `
const features = [
  { value: "reports", title: "Scheduled reports", locked: false, body: "Send a PDF summary of your dashboards every Monday at 9:00." },
  { value: "alerts", title: "Threshold alerts", locked: false, body: "Get notified when a metric crosses a value you define." },
  { value: "sso", title: "Single sign-on", locked: true, body: "" },
  { value: "audit", title: "Audit log", locked: true, body: "" },
]

export default function AccordionDisabledItems() {
  return (
    <div className="w-full max-w-md space-y-3">
      <Accordion defaultValue={["reports"]} className="border px-3">
        {features.map((feature) => (
          <AccordionItem key={feature.value} value={feature.value} disabled={feature.locked}>
            <AccordionTrigger className="items-center">
              <span className="flex items-center gap-2">
                {feature.locked && <LockIcon className="size-3.5 text-muted-foreground" />}
                {feature.title}
                {feature.locked && <Badge variant="outline">Pro</Badge>}
              </span>
              ${CHEV}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{feature.body}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button size="sm" className="w-full">
        <SparklesIcon data-icon="inline-start" />
        Upgrade to unlock
      </Button>
    </div>
  )
}`,
  },
  {
    name: "AccordionWithLeadingIcons",
    description: "Store policy accordion with a leading icon for every section.",
    code: `
const policies = [
  { value: "shipping", icon: TruckIcon, title: "Shipping", body: "Orders ship within 2 business days. Standard delivery takes 3 to 5 days." },
  { value: "returns", icon: RotateCcwIcon, title: "Returns", body: "Return unworn items within 30 days for a full refund. Return labels are free." },
  { value: "warranty", icon: ShieldCheckIcon, title: "Warranty", body: "Every product is covered by a 2 year warranty against manufacturing defects." },
  { value: "support", icon: HeadphonesIcon, title: "Support", body: "Our team answers within 4 hours, seven days a week." },
]

export default function AccordionWithLeadingIcons() {
  return (
    <Accordion defaultValue={["shipping"]} className="w-full max-w-md border px-3">
      {policies.map((policy) => (
        <AccordionItem key={policy.value} value={policy.value}>
          <AccordionTrigger className="items-center">
            <span className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center bg-muted">
                <policy.icon className="size-3.5" />
              </span>
              {policy.title}
            </span>
            ${CHEV}
          </AccordionTrigger>
          <AccordionContent className="ps-9.5 text-muted-foreground">{policy.body}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionCheckoutOrderSummary",
    description: "Collapsible order summary used on a mobile checkout, showing the total on the trigger.",
    code: `
const lines = [
  { name: "Linen overshirt", meta: "Sand / M", qty: 1, price: 89 },
  { name: "Merino crew socks", meta: "Charcoal", qty: 3, price: 14 },
  { name: "Canvas tote", meta: "Natural", qty: 1, price: 24 },
]

export default function AccordionCheckoutOrderSummary() {
  const subtotal = lines.reduce((sum, line) => sum + line.qty * line.price, 0)
  const shipping = 6
  const total = subtotal + shipping

  return (
    <Accordion className="w-full max-w-sm border bg-muted/40 px-3">
      <AccordionItem value="summary">
        <AccordionTrigger className="items-center py-3">
          <span className="flex items-center gap-2">
            <ShoppingBagIcon className="size-4" />
            Show order summary
          </span>
          <span className="ms-auto me-2 text-sm font-semibold">\${total.toFixed(2)}</span>
          <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-3 border-t pt-3">
            {lines.map((line) => (
              <li key={line.name} className="flex items-center gap-3">
                <span className="relative flex size-10 shrink-0 items-center justify-center border bg-background text-[10px] text-muted-foreground">
                  {line.name.slice(0, 2).toUpperCase()}
                  <span className="absolute -top-1.5 -end-1.5 flex size-4 items-center justify-center bg-foreground text-[9px] text-background">
                    {line.qty}
                  </span>
                </span>
                <span className="flex-1">
                  <span className="block font-medium">{line.name}</span>
                  <span className="text-muted-foreground">{line.meta}</span>
                </span>
                <span>\${(line.qty * line.price).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-3 space-y-1 border-t pt-3">
            <div className="flex justify-between text-muted-foreground">
              <dt>Subtotal</dt>
              <dd>\${subtotal.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <dt>Shipping</dt>
              <dd>\${shipping.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between text-sm font-semibold">
              <dt>Total</dt>
              <dd>\${total.toFixed(2)}</dd>
            </div>
          </dl>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionSettingsToggles",
    description: "Settings page grouped into accordion sections that contain switches.",
    code: `
const groups = [
  {
    value: "notifications",
    title: "Notifications",
    hint: "Email and push",
    options: [
      { id: "mentions", label: "Mentions and replies", on: true },
      { id: "digest", label: "Weekly digest", on: false },
      { id: "push", label: "Push notifications", on: true },
    ],
  },
  {
    value: "privacy",
    title: "Privacy",
    hint: "Visibility and data",
    options: [
      { id: "profile", label: "Public profile", on: false },
      { id: "status", label: "Show online status", on: true },
    ],
  },
  {
    value: "appearance",
    title: "Appearance",
    hint: "Motion and density",
    options: [
      { id: "motion", label: "Reduce motion", on: false },
      { id: "compact", label: "Compact mode", on: true },
    ],
  },
]

export default function AccordionSettingsToggles() {
  return (
    <Accordion defaultValue={["notifications"]} className="w-full max-w-md border px-3">
      {groups.map((group) => (
        <AccordionItem key={group.value} value={group.value}>
          <AccordionTrigger className="items-center">
            <span className="flex flex-col">
              <span className="text-sm">{group.title}</span>
              <span className="font-normal text-muted-foreground">{group.hint}</span>
            </span>
            ${CHEV}
          </AccordionTrigger>
          <AccordionContent className="space-y-3">
            {group.options.map((option) => (
              <div key={option.id} className="flex items-center justify-between gap-4">
                <Label htmlFor={option.id} className="font-normal">
                  {option.label}
                </Label>
                <Switch id={option.id} defaultChecked={option.on} />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionNestedDocs",
    description: "Documentation outline with a nested accordion inside each chapter.",
    code: `
const chapters = [
  {
    value: "guides",
    title: "Guides",
    sections: [
      { value: "routing", title: "Routing", body: "Files inside the routes folder map directly to URLs." },
      { value: "data", title: "Data fetching", body: "Load data on the server and stream it to the page as it resolves." },
    ],
  },
  {
    value: "reference",
    title: "API reference",
    sections: [
      { value: "config", title: "Config file", body: "All options live in a single typed config file at the project root." },
      { value: "cli", title: "CLI commands", body: "dev, build, start and lint cover the full local workflow." },
    ],
  },
]

export default function AccordionNestedDocs() {
  return (
    <Accordion defaultValue={["guides"]} className="w-full max-w-md border px-3">
      {chapters.map((chapter) => (
        <AccordionItem key={chapter.value} value={chapter.value}>
          <AccordionTrigger className="text-sm">
            {chapter.title}
            ${CHEV}
          </AccordionTrigger>
          <AccordionContent>
            <Accordion defaultValue={chapter.sections.slice(0, 1).map((section) => section.value)} className="border-s ps-3">
              {chapter.sections.map((section) => (
                <AccordionItem key={section.value} value={section.value}>
                  <AccordionTrigger className="py-2 font-normal">
                    {section.title}
                    <PlusIcon data-slot="accordion-trigger-icon" className="transition-transform group-aria-expanded/accordion-trigger:rotate-45" />
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{section.body}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionFileExplorer",
    description: "File manager sidebar where folders expand as accordion items with file rows.",
    code: `
const folders = [
  { value: "brand", name: "Brand assets", files: ["logo-primary.svg", "logo-mono.svg", "palette.pdf"] },
  { value: "contracts", name: "Contracts", files: ["msa-northwind.pdf", "nda-template.docx"] },
  { value: "research", name: "User research", files: ["interview-notes.md", "survey-results.csv", "personas.fig"] },
]

export default function AccordionFileExplorer() {
  return (
    <div className="w-full max-w-xs border">
      <div className="flex items-center justify-between border-b px-3 py-2">
        <span className="text-xs font-medium">Files</span>
        <Button size="icon-xs" variant="ghost" aria-label="New folder">
          <FolderPlusIcon />
        </Button>
      </div>
      <Accordion multiple defaultValue={["brand"]} className="p-1">
        {folders.map((folder) => (
          <AccordionItem key={folder.value} value={folder.value} className="border-none">
            <AccordionTrigger className="items-center gap-1.5 px-2 py-1.5 font-normal hover:bg-muted hover:no-underline">
              <ChevronRightIcon className="size-3.5 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-90" />
              <FolderIcon className="size-4 text-muted-foreground group-aria-expanded/accordion-trigger:hidden" />
              <FolderOpenIcon className="hidden size-4 text-muted-foreground group-aria-expanded/accordion-trigger:block" />
              <span className="flex-1">{folder.name}</span>
              <span className="text-muted-foreground">{folder.files.length}</span>
            </AccordionTrigger>
            <AccordionContent className="pb-1">
              {folder.files.map((file) => (
                <button
                  key={file}
                  type="button"
                  className="flex w-full items-center gap-1.5 py-1.5 ps-9 pe-2 text-start hover:bg-muted"
                >
                  <FileIcon className="size-3.5 text-muted-foreground" />
                  <span className="truncate">{file}</span>
                </button>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}`,
  },
  {
    name: "AccordionOnboardingChecklist",
    description: "Onboarding checklist where each step expands to show its task and completion state.",
    code: `
const steps = [
  { value: "profile", title: "Complete your profile", done: true, body: "Add a photo and job title so teammates recognise you." },
  { value: "invite", title: "Invite your team", done: true, body: "Workspaces with three or more members get the most out of shared boards." },
  { value: "connect", title: "Connect your calendar", done: false, body: "Sync meetings so action items land on the right board automatically." },
  { value: "board", title: "Create your first board", done: false, body: "Start from a template or a blank board and add a few cards." },
]

export default function AccordionOnboardingChecklist() {
  const done = steps.filter((step) => step.done).length

  return (
    <div className="w-full max-w-md border">
      <div className="space-y-2 border-b p-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium">Set up your workspace</span>
          <span className="text-muted-foreground">
            {done}/{steps.length} done
          </span>
        </div>
        <Progress value={(done / steps.length) * 100} />
      </div>
      <Accordion defaultValue={["connect"]} className="px-3">
        {steps.map((step) => (
          <AccordionItem key={step.value} value={step.value}>
            <AccordionTrigger className="items-center">
              <span className="flex items-center gap-2">
                {step.done ? (
                  <CircleCheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <CircleIcon className="size-4 text-muted-foreground" />
                )}
                <span className={cn(step.done && "text-muted-foreground line-through")}>{step.title}</span>
              </span>
              ${CHEV}
            </AccordionTrigger>
            <AccordionContent className="space-y-2 ps-6">
              <p className="text-muted-foreground">{step.body}</p>
              {!step.done && (
                <Button size="xs">
                  Start
                  <ArrowRightIcon data-icon="inline-end" />
                </Button>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}`,
  },
  {
    name: "AccordionPricingPlans",
    description: "Pricing plans in an accordion, each trigger showing the monthly price and the panel listing features.",
    code: `
const plans = [
  { value: "starter", name: "Starter", price: 0, features: ["3 projects", "1 GB storage", "Community support"] },
  { value: "team", name: "Team", price: 24, popular: true, features: ["Unlimited projects", "50 GB storage", "Shared workspaces", "Priority support"] },
  { value: "scale", name: "Scale", price: 79, features: ["Everything in Team", "SAML single sign-on", "Audit log", "99.9% uptime SLA"] },
]

export default function AccordionPricingPlans() {
  return (
    <Accordion defaultValue={["team"]} className="w-full max-w-sm space-y-2">
      {plans.map((plan) => (
        <AccordionItem key={plan.value} value={plan.value} className="border px-3 not-last:border-b data-open:border-foreground">
          <AccordionTrigger className="items-center py-3">
            <span className="flex items-center gap-2 text-sm">
              {plan.name}
              {plan.popular && <Badge>Popular</Badge>}
            </span>
            <span className="ms-auto me-2">
              <span className="text-sm font-semibold">\${plan.price}</span>
              <span className="font-normal text-muted-foreground">/mo</span>
            </span>
            <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="space-y-3">
            <ul className="space-y-1.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckIcon className="size-3.5 text-muted-foreground" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button size="sm" className="w-full" variant={plan.popular ? "default" : "outline"}>
              Choose {plan.name}
            </Button>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionChangelog",
    description: "Product changelog where each release expands to show tagged changes.",
    code: `
const releases = [
  {
    value: "3.4.0",
    date: "Nov 12, 2026",
    changes: [
      { type: "New", text: "Bulk edit for tasks across boards" },
      { type: "Improved", text: "Search results now load 40% faster" },
      { type: "Fixed", text: "Due dates shifting across time zones" },
    ],
  },
  {
    value: "3.3.2",
    date: "Oct 28, 2026",
    changes: [
      { type: "Fixed", text: "Attachments failing on files over 20 MB" },
      { type: "Fixed", text: "Sidebar flicker when switching workspaces" },
    ],
  },
  {
    value: "3.3.0",
    date: "Oct 14, 2026",
    changes: [
      { type: "New", text: "Timeline view with drag to reschedule" },
      { type: "Improved", text: "Keyboard navigation in the command menu" },
    ],
  },
]

const tone: Record<string, "default" | "secondary" | "outline"> = {
  New: "default",
  Improved: "secondary",
  Fixed: "outline",
}

export default function AccordionChangelog() {
  return (
    <Accordion defaultValue={["3.4.0"]} className="w-full max-w-md border px-3">
      {releases.map((release, index) => (
        <AccordionItem key={release.value} value={release.value}>
          <AccordionTrigger className="items-center">
            <span className="flex items-center gap-2">
              <span className="font-mono text-sm">v{release.value}</span>
              {index === 0 && <Badge variant="secondary">Latest</Badge>}
            </span>
            <span className="ms-auto me-2 font-normal text-muted-foreground">{release.date}</span>
            <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              {release.changes.map((change) => (
                <li key={change.text} className="flex items-start gap-2">
                  <Badge variant={tone[change.type]} className="w-16">
                    {change.type}
                  </Badge>
                  <span>{change.text}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionOrderHistory",
    description: "Customer order history with status badges on each trigger and line items inside.",
    code: `
const orders = [
  { value: "48213", date: "Nov 9", status: "Shipped", total: 132.5, items: ["Ceramic pour-over set", "Filter papers x100"] },
  { value: "47990", date: "Oct 30", status: "Delivered", total: 58.0, items: ["Oak serving board"] },
  { value: "47512", date: "Oct 2", status: "Refunded", total: 24.0, items: ["Stoneware mug (Sage)"] },
]

const statusVariant: Record<string, "default" | "secondary" | "destructive"> = {
  Shipped: "default",
  Delivered: "secondary",
  Refunded: "destructive",
}

export default function AccordionOrderHistory() {
  return (
    <Accordion className="w-full max-w-md border px-3">
      {orders.map((order) => (
        <AccordionItem key={order.value} value={order.value}>
          <AccordionTrigger className="items-center">
            <span className="flex flex-col">
              <span className="text-sm">Order #{order.value}</span>
              <span className="font-normal text-muted-foreground">Placed {order.date}</span>
            </span>
            <Badge variant={statusVariant[order.status]} className="ms-auto me-2">
              {order.status}
            </Badge>
            <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="space-y-3">
            <ul className="space-y-1 text-muted-foreground">
              {order.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <PackageIcon className="size-3.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t pt-3">
              <span className="font-medium">Total \${order.total.toFixed(2)}</span>
              <div className="flex gap-1">
                <Button size="xs" variant="outline">
                  Invoice
                </Button>
                <Button size="xs">Buy again</Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionProductDetails",
    description: "Product page details with description, a size guide table, and care instructions.",
    code: `
const sizes = [
  { size: "S", chest: "92", length: "70" },
  { size: "M", chest: "100", length: "72" },
  { size: "L", chest: "108", length: "74" },
]

export default function AccordionProductDetails() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <div>
        <p className="text-sm font-semibold">Heavyweight cotton tee</p>
        <p className="text-xs text-muted-foreground">$42.00 &middot; Washed black</p>
      </div>
      <Accordion multiple defaultValue={["details"]} className="border-y">
        <AccordionItem value="details">
          <AccordionTrigger className="uppercase tracking-wide">
            Details
            ${CHEV}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            A boxy, dropped-shoulder tee in 280 gsm organic cotton. Garment dyed for a soft, lived-in feel.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="size">
          <AccordionTrigger className="uppercase tracking-wide">
            Size guide
            ${CHEV}
          </AccordionTrigger>
          <AccordionContent>
            <table className="w-full text-start">
              <thead className="text-muted-foreground">
                <tr className="border-b">
                  <th className="py-1 text-start font-normal">Size</th>
                  <th className="py-1 text-start font-normal">Chest (cm)</th>
                  <th className="py-1 text-start font-normal">Length (cm)</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((row) => (
                  <tr key={row.size} className="border-b last:border-0">
                    <td className="py-1 font-medium">{row.size}</td>
                    <td className="py-1">{row.chest}</td>
                    <td className="py-1">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="care">
          <AccordionTrigger className="uppercase tracking-wide">
            Care
            ${CHEV}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-1.5 text-muted-foreground">
              <li className="flex items-center gap-2"><WashingMachineIcon className="size-3.5" />Machine wash cold, inside out</li>
              <li className="flex items-center gap-2"><WindIcon className="size-3.5" />Line dry in the shade</li>
              <li className="flex items-center gap-2"><BanIcon className="size-3.5" />Do not bleach</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}`,
  },
  {
    name: "AccordionFilterSidebar",
    description: "Shop filter sidebar with checkbox groups and a selected count on each trigger.",
    code: `
const filters = [
  { value: "category", title: "Category", options: ["Jackets", "Knitwear", "Shirts", "Trousers"] },
  { value: "size", title: "Size", options: ["XS", "S", "M", "L", "XL"] },
  { value: "color", title: "Colour", options: ["Black", "Navy", "Olive", "Stone"] },
]

export default function AccordionFilterSidebar() {
  const [selected, setSelected] = React.useState<Record<string, string[]>>({ category: ["Knitwear"], size: [], color: [] })

  const toggle = (group: string, option: string, checked: boolean) =>
    setSelected((prev) => ({
      ...prev,
      [group]: checked ? [...(prev[group] ?? []), option] : (prev[group] ?? []).filter((o) => o !== option),
    }))

  return (
    <div className="w-full max-w-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Filters</span>
        <Button size="xs" variant="link" onClick={() => setSelected({ category: [], size: [], color: [] })}>
          Clear all
        </Button>
      </div>
      <Accordion multiple defaultValue={["category", "size"]} className="border-y">
        {filters.map((filter) => (
          <AccordionItem key={filter.value} value={filter.value}>
            <AccordionTrigger className="items-center">
              <span className="flex items-center gap-2">
                {filter.title}
                {(selected[filter.value]?.length ?? 0) > 0 && <Badge variant="secondary">{selected[filter.value]?.length}</Badge>}
              </span>
              ${CHEV}
            </AccordionTrigger>
            <AccordionContent className="space-y-2">
              {filter.options.map((option) => {
                const id = filter.value + "-" + option
                return (
                  <div key={option} className="flex items-center gap-2">
                    <Checkbox
                      id={id}
                      checked={selected[filter.value]?.includes(option) ?? false}
                      onCheckedChange={(checked) => toggle(filter.value, option, checked)}
                    />
                    <Label htmlFor={id} className="font-normal">
                      {option}
                    </Label>
                  </div>
                )
              })}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}`,
  },
  {
    name: "AccordionNotificationChannels",
    description: "Notification preferences where each channel expands to a radio group of frequencies.",
    code: `
const channels = [
  { value: "email", icon: MailIcon, title: "Email", current: "daily" },
  { value: "slack", icon: MessageSquareIcon, title: "Chat app", current: "instant" },
  { value: "mobile", icon: SmartphoneIcon, title: "Mobile push", current: "off" },
]

const frequencies = [
  { value: "instant", label: "Instantly" },
  { value: "daily", label: "Daily summary" },
  { value: "off", label: "Off" },
]

export default function AccordionNotificationChannels() {
  const [prefs, setPrefs] = React.useState<Record<string, string>>(
    Object.fromEntries(channels.map((c) => [c.value, c.current]))
  )

  return (
    <Accordion defaultValue={["email"]} className="w-full max-w-sm border px-3">
      {channels.map((channel) => (
        <AccordionItem key={channel.value} value={channel.value}>
          <AccordionTrigger className="items-center">
            <span className="flex items-center gap-2">
              <channel.icon className="size-4 text-muted-foreground" />
              {channel.title}
            </span>
            <span className="ms-auto me-2 font-normal text-muted-foreground">
              {frequencies.find((f) => f.value === prefs[channel.value])?.label}
            </span>
            <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup
              value={prefs[channel.value]}
              onValueChange={(value) => setPrefs((prev) => ({ ...prev, [channel.value]: value as string }))}
              className="gap-2 ps-6"
            >
              {frequencies.map((frequency) => {
                const id = channel.value + "-" + frequency.value
                return (
                  <div key={frequency.value} className="flex items-center gap-2">
                    <RadioGroupItem id={id} value={frequency.value} />
                    <Label htmlFor={id} className="font-normal">
                      {frequency.label}
                    </Label>
                  </div>
                )
              })}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionApiEndpoints",
    description: "API reference with HTTP method badges and a parameter table in each endpoint panel.",
    code: `
const endpoints = [
  {
    value: "list",
    method: "GET",
    path: "/v1/invoices",
    summary: "List invoices for the current account.",
    params: [
      { name: "limit", type: "integer", note: "1 to 100, default 20" },
      { name: "status", type: "string", note: "draft, open or paid" },
    ],
  },
  {
    value: "create",
    method: "POST",
    path: "/v1/invoices",
    summary: "Create a draft invoice for a customer.",
    params: [
      { name: "customer", type: "string", note: "Required customer ID" },
      { name: "due_date", type: "date", note: "ISO 8601 date" },
    ],
  },
  {
    value: "delete",
    method: "DELETE",
    path: "/v1/invoices/:id",
    summary: "Delete a draft invoice. Finalised invoices cannot be deleted.",
    params: [{ name: "id", type: "string", note: "Invoice ID in the path" }],
  },
]

const methodClass: Record<string, string> = {
  GET: "bg-sky-500/15 text-sky-700 dark:text-sky-300",
  POST: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  DELETE: "bg-destructive/15 text-destructive",
}

export default function AccordionApiEndpoints() {
  return (
    <Accordion defaultValue={["list"]} className="w-full max-w-md border px-3">
      {endpoints.map((endpoint) => (
        <AccordionItem key={endpoint.value} value={endpoint.value}>
          <AccordionTrigger className="items-center font-mono">
            <span className="flex min-w-0 items-center gap-2">
              <span className={cn("w-14 shrink-0 py-0.5 text-center text-[10px] font-semibold", methodClass[endpoint.method])}>
                {endpoint.method}
              </span>
              <span className="truncate">{endpoint.path}</span>
            </span>
            ${CHEV}
          </AccordionTrigger>
          <AccordionContent className="space-y-2">
            <p className="text-muted-foreground">{endpoint.summary}</p>
            <div className="border">
              {endpoint.params.map((param) => (
                <div key={param.name} className="grid grid-cols-[1fr_auto] gap-x-2 border-b px-2 py-1.5 last:border-0">
                  <code className="font-mono">{param.name}</code>
                  <span className="text-muted-foreground">{param.type}</span>
                  <span className="col-span-2 text-muted-foreground">{param.note}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionTroubleshooting",
    description: "Troubleshooting guide with numbered steps and keyboard shortcuts inside each fix.",
    code: `
const issues = [
  {
    value: "frozen",
    title: "The editor stops responding",
    steps: [
      { text: "Save your work with", keys: ["Ctrl", "S"] },
      { text: "Reload the window with", keys: ["Ctrl", "Shift", "R"] },
      { text: "If it persists, disable extensions from Settings." },
    ],
  },
  {
    value: "sync",
    title: "Changes are not syncing",
    steps: [
      { text: "Check the status dot in the bottom bar is green." },
      { text: "Open the command menu with", keys: ["Ctrl", "K"] },
      { text: "Run Force sync and wait for the confirmation." },
    ],
  },
]

export default function AccordionTroubleshooting() {
  return (
    <Accordion defaultValue={["frozen"]} className="w-full max-w-md border px-3">
      {issues.map((issue) => (
        <AccordionItem key={issue.value} value={issue.value}>
          <AccordionTrigger className="items-center">
            <span className="flex items-center gap-2">
              <WrenchIcon className="size-3.5 text-muted-foreground" />
              {issue.title}
            </span>
            ${CHEV}
          </AccordionTrigger>
          <AccordionContent>
            <ol className="space-y-2">
              {issue.steps.map((step, index) => (
                <li key={step.text} className="flex items-start gap-2">
                  <span className="flex size-5 shrink-0 items-center justify-center border text-[10px]">{index + 1}</span>
                  <span className="flex flex-wrap items-center gap-1 pt-0.5">
                    {step.text}
                    {step.keys && (
                      <KbdGroup>
                        {step.keys.map((key) => (
                          <Kbd key={key}>{key}</Kbd>
                        ))}
                      </KbdGroup>
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionTeamDirectory",
    description: "Team directory where departments expand into member rows with avatars and roles.",
    code: `
const teams = [
  {
    value: "design",
    name: "Design",
    members: [
      { name: "Ivy Tran", role: "Design lead" },
      { name: "Noah Becker", role: "Product designer" },
      { name: "Sana Malik", role: "Brand designer" },
    ],
  },
  {
    value: "engineering",
    name: "Engineering",
    members: [
      { name: "Marcus Hale", role: "Staff engineer" },
      { name: "Elena Ruiz", role: "Frontend engineer" },
    ],
  },
]

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")

export default function AccordionTeamDirectory() {
  return (
    <Accordion defaultValue={["design"]} className="w-full max-w-sm border px-3">
      {teams.map((team) => (
        <AccordionItem key={team.value} value={team.value}>
          <AccordionTrigger className="items-center">
            <span className="text-sm">{team.name}</span>
            <AvatarGroup className="ms-auto me-2">
              {team.members.map((member) => (
                <Avatar key={member.name} size="sm">
                  <AvatarFallback>{initials(member.name)}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
            <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="space-y-2.5">
            {team.members.map((member) => (
              <div key={member.name} className="flex items-center gap-2.5">
                <Avatar>
                  <AvatarFallback>{initials(member.name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium">{member.name}</p>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
                <Button size="icon-xs" variant="ghost" aria-label={"Message " + member.name}>
                  <MessageCircleIcon />
                </Button>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionBillingInvoices",
    description: "Billing history grouped by month with invoice breakdowns and a download action.",
    code: `
const invoices = [
  { value: "nov", month: "November 2026", status: "Due Dec 1", amount: 312, lines: [{ label: "Team plan, 12 seats", amount: 288 }, { label: "Extra storage, 200 GB", amount: 24 }] },
  { value: "oct", month: "October 2026", status: "Paid", amount: 288, lines: [{ label: "Team plan, 12 seats", amount: 288 }] },
  { value: "sep", month: "September 2026", status: "Paid", amount: 264, lines: [{ label: "Team plan, 11 seats", amount: 264 }] },
]

export default function AccordionBillingInvoices() {
  return (
    <div className="w-full max-w-md space-y-2">
      <p className="text-sm font-medium">Billing history</p>
      <Accordion className="border px-3">
        {invoices.map((invoice) => (
          <AccordionItem key={invoice.value} value={invoice.value}>
            <AccordionTrigger className="items-center">
              <span className="flex items-center gap-2">
                <ReceiptIcon className="size-4 text-muted-foreground" />
                {invoice.month}
              </span>
              <span className="ms-auto me-2 flex items-center gap-2">
                <span className="font-normal text-muted-foreground">{invoice.status}</span>
                <span>\${invoice.amount}.00</span>
              </span>
              <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="space-y-2">
              {invoice.lines.map((line) => (
                <div key={line.label} className="flex justify-between text-muted-foreground">
                  <span>{line.label}</span>
                  <span>\${line.amount}.00</span>
                </div>
              ))}
              <Button size="xs" variant="outline">
                <DownloadIcon data-icon="inline-start" />
                Download PDF
              </Button>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}`,
  },
  {
    name: "AccordionSeparatedCards",
    description: "Accordion items styled as separate boxed cards that tint when open.",
    code: `
const questions = [
  { value: "trial", q: "Do I need a card to start the trial?", a: "No. The 14 day trial starts without any payment details." },
  { value: "switch", q: "Can I switch plans later?", a: "Upgrade or downgrade any time. We prorate the difference on your next invoice." },
  { value: "discount", q: "Do you offer nonprofit pricing?", a: "Registered nonprofits get 50% off any paid plan. Contact us with your registration number." },
]

export default function AccordionSeparatedCards() {
  return (
    <Accordion defaultValue={["switch"]} className="w-full max-w-md gap-2">
      {questions.map((item) => (
        <AccordionItem key={item.value} value={item.value} className="border px-4 not-last:border-b data-open:bg-muted/50">
          <AccordionTrigger className="py-3 text-sm hover:no-underline">
            {item.q}
            ${CHEV}
          </AccordionTrigger>
          <AccordionContent className="pb-3 text-muted-foreground">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionPlusMinusIcon",
    description: "Accordion that swaps a plus icon for a minus icon when an item is open.",
    code: `
const items = [
  { value: "where", q: "Where do you ship?", a: "We ship to 38 countries across Europe, North America and Oceania." },
  { value: "duties", q: "Are duties included?", a: "Yes, all prices include duties and taxes at checkout, so there are no surprise fees." },
  { value: "track", q: "How do I track my parcel?", a: "A tracking link is emailed as soon as your order leaves the warehouse." },
]

export default function AccordionPlusMinusIcon() {
  return (
    <Accordion defaultValue={["duties"]} className="w-full max-w-md">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger className="items-center py-4 text-sm hover:no-underline">
            {item.q}
            <span className="ms-auto flex size-6 shrink-0 items-center justify-center border">
              <PlusIcon className="size-3.5 group-aria-expanded/accordion-trigger:hidden" />
              <MinusIcon className="hidden size-3.5 group-aria-expanded/accordion-trigger:block" />
            </span>
          </AccordionTrigger>
          <AccordionContent className="pe-10 pb-4 text-muted-foreground">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionLeadingChevron",
    description: "Tree-style accordion with the chevron on the left that rotates ninety degrees.",
    code: `
const groups = [
  { value: "inbox", title: "Inbox rules", body: "Move newsletters to Reading and archive receipts older than 30 days." },
  { value: "labels", title: "Labels", body: "Create up to 50 labels. Nested labels inherit the parent colour." },
  { value: "filters", title: "Saved filters", body: "Saved filters appear in the sidebar and update in real time." },
]

export default function AccordionLeadingChevron() {
  return (
    <Accordion defaultValue={["labels"]} className="w-full max-w-sm">
      {groups.map((group) => (
        <AccordionItem key={group.value} value={group.value} className="border-none">
          <AccordionTrigger className="justify-start gap-2 hover:no-underline">
            <ChevronRightIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-90" />
            {group.title}
          </AccordionTrigger>
          <AccordionContent className="ms-2 border-s ps-4 text-muted-foreground">{group.body}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionKnowledgeBaseSearch",
    description: "Help center accordion filtered by a search input, with an empty state when nothing matches.",
    code: `
const articles = [
  { value: "reset", q: "How do I reset my password?", a: "Choose Forgot password on the sign-in page and follow the emailed link within 30 minutes." },
  { value: "2fa", q: "How do I turn on two-factor authentication?", a: "Go to Settings, Security, then Two-factor and scan the QR code with your authenticator app." },
  { value: "email", q: "Can I change my login email?", a: "Yes. Update it under Settings, Account. We send a confirmation to both addresses." },
  { value: "delete", q: "How do I delete my account?", a: "Settings, Account, Delete account. Your data is removed permanently after 30 days." },
]

export default function AccordionKnowledgeBaseSearch() {
  const [query, setQuery] = React.useState("")
  const results = articles.filter((article) => article.q.toLowerCase().includes(query.trim().toLowerCase()))

  return (
    <div className="w-full max-w-md space-y-3">
      <div className="relative">
        <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search account help" className="ps-8" />
      </div>
      {results.length > 0 ? (
        <Accordion className="border px-3">
          {results.map((article) => (
            <AccordionItem key={article.value} value={article.value}>
              <AccordionTrigger>
                {article.q}
                ${CHEV}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{article.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="flex flex-col items-center gap-1 border border-dashed py-8 text-center">
          <SearchXIcon className="size-5 text-muted-foreground" />
          <p className="text-xs font-medium">No articles match &ldquo;{query}&rdquo;</p>
          <p className="text-xs text-muted-foreground">Try a different keyword or contact support.</p>
        </div>
      )}
    </div>
  )
}`,
  },
  {
    name: "AccordionCourseCurriculum",
    description: "Course curriculum with modules that list lessons, durations and completion ticks.",
    code: `
const modules = [
  {
    value: "m1",
    title: "Foundations of typography",
    lessons: [
      { title: "Anatomy of a typeface", minutes: 8, done: true },
      { title: "Pairing fonts", minutes: 12, done: true },
      { title: "Measure and rhythm", minutes: 10, done: false },
    ],
  },
  {
    value: "m2",
    title: "Layout and grids",
    lessons: [
      { title: "Column grids", minutes: 14, done: false },
      { title: "Baseline grids", minutes: 9, done: false },
    ],
  },
]

export default function AccordionCourseCurriculum() {
  return (
    <Accordion multiple defaultValue={["m1"]} className="w-full max-w-md border">
      {modules.map((module, index) => {
        const done = module.lessons.filter((lesson) => lesson.done).length
        const minutes = module.lessons.reduce((sum, lesson) => sum + lesson.minutes, 0)
        return (
          <AccordionItem key={module.value} value={module.value}>
            <AccordionTrigger className="items-center bg-muted/50 px-3 hover:no-underline">
              <span className="flex flex-col">
                <span className="text-muted-foreground">Module {index + 1}</span>
                <span className="text-sm">{module.title}</span>
              </span>
              <span className="ms-auto me-2 font-normal text-muted-foreground">
                {done}/{module.lessons.length} &middot; {minutes} min
              </span>
              <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              {module.lessons.map((lesson) => (
                <div key={lesson.title} className="flex items-center gap-2 border-t px-3 py-2">
                  {lesson.done ? (
                    <CircleCheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <CirclePlayIcon className="size-4 text-muted-foreground" />
                  )}
                  <span className="flex-1">{lesson.title}</span>
                  <span className="text-muted-foreground">{lesson.minutes}:00</span>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionJobOpenings",
    description: "Careers page listing open roles that expand into a summary and an apply button.",
    code: `
const roles = [
  { value: "pd", title: "Senior Product Designer", team: "Design", location: "Remote, Europe", type: "Full-time", summary: "Own the end-to-end experience of our invoicing product, from discovery to polished UI." },
  { value: "fe", title: "Frontend Engineer", team: "Engineering", location: "Lisbon", type: "Full-time", summary: "Build fast, accessible interfaces in React and help shape our component library." },
  { value: "cs", title: "Customer Success Lead", team: "Operations", location: "Remote, US", type: "Contract", summary: "Guide new customers through onboarding and turn their feedback into product insight." },
]

export default function AccordionJobOpenings() {
  return (
    <Accordion className="w-full max-w-md border-y">
      {roles.map((role) => (
        <AccordionItem key={role.value} value={role.value}>
          <AccordionTrigger className="items-center py-3 hover:no-underline">
            <span className="flex flex-col gap-0.5">
              <span className="text-sm">{role.title}</span>
              <span className="flex items-center gap-1 font-normal text-muted-foreground">
                <MapPinIcon className="size-3" />
                {role.location} &middot; {role.team}
              </span>
            </span>
            ${CHEV}
          </AccordionTrigger>
          <AccordionContent className="space-y-3">
            <Badge variant="outline">{role.type}</Badge>
            <p className="text-muted-foreground">{role.summary}</p>
            <Button size="sm">
              Apply for this role
              <ArrowUpRightIcon data-icon="inline-end" />
            </Button>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionEventAgenda",
    description: "Conference agenda grouped by day, with timed sessions and speakers in each panel.",
    code: `
const days = [
  {
    value: "day1",
    label: "Day 1",
    date: "Thu, Mar 12",
    sessions: [
      { time: "09:30", title: "Opening keynote", speaker: "Harper Nguyen" },
      { time: "11:00", title: "Designing for trust", speaker: "Omar Siddiqui" },
      { time: "14:00", title: "Workshop: motion systems", speaker: "Clara Jensen" },
    ],
  },
  {
    value: "day2",
    label: "Day 2",
    date: "Fri, Mar 13",
    sessions: [
      { time: "10:00", title: "Scaling a design system", speaker: "Theo Laurent" },
      { time: "15:30", title: "Closing panel", speaker: "Various speakers" },
    ],
  },
]

export default function AccordionEventAgenda() {
  return (
    <Accordion defaultValue={["day1"]} className="w-full max-w-md border px-3">
      {days.map((day) => (
        <AccordionItem key={day.value} value={day.value}>
          <AccordionTrigger className="items-center">
            <span className="flex items-center gap-2">
              <CalendarDaysIcon className="size-4 text-muted-foreground" />
              <span className="text-sm">{day.label}</span>
              <span className="font-normal text-muted-foreground">{day.date}</span>
            </span>
            ${CHEV}
          </AccordionTrigger>
          <AccordionContent>
            <ol className="relative space-y-3 border-s ps-4">
              {day.sessions.map((session) => (
                <li key={session.title} className="relative">
                  <span className="absolute -start-[1.3rem] top-1 size-2 bg-foreground" />
                  <p className="font-mono text-muted-foreground">{session.time}</p>
                  <p className="font-medium">{session.title}</p>
                  <p className="text-muted-foreground">{session.speaker}</p>
                </li>
              ))}
            </ol>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionRolePermissions",
    description: "Admin role editor where each resource expands to permission checkboxes with a granted count.",
    code: `
const resources = [
  { value: "projects", title: "Projects", actions: ["View", "Create", "Edit", "Delete"] },
  { value: "billing", title: "Billing", actions: ["View invoices", "Update payment method"] },
  { value: "members", title: "Members", actions: ["Invite", "Change roles", "Remove"] },
]

export default function AccordionRolePermissions() {
  const [granted, setGranted] = React.useState<Record<string, string[]>>({
    projects: ["View", "Create", "Edit"],
    billing: ["View invoices"],
    members: [],
  })

  const toggle = (resource: string, action: string, checked: boolean) =>
    setGranted((prev) => ({
      ...prev,
      [resource]: checked ? [...(prev[resource] ?? []), action] : (prev[resource] ?? []).filter((a) => a !== action),
    }))

  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex items-center gap-2">
        <ShieldIcon className="size-4" />
        <span className="text-sm font-medium">Editor role</span>
      </div>
      <Accordion defaultValue={["projects"]} className="border px-3">
        {resources.map((resource) => (
          <AccordionItem key={resource.value} value={resource.value}>
            <AccordionTrigger className="items-center">
              {resource.title}
              <span className="ms-auto me-2 font-normal text-muted-foreground">
                {granted[resource.value]?.length ?? 0}/{resource.actions.length}
              </span>
              <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-2 gap-2">
              {resource.actions.map((action) => {
                const id = resource.value + "-" + action
                return (
                  <div key={action} className="flex items-center gap-2">
                    <Checkbox
                      id={id}
                      checked={granted[resource.value]?.includes(action) ?? false}
                      onCheckedChange={(checked) => toggle(resource.value, action, checked)}
                    />
                    <Label htmlFor={id} className="font-normal">
                      {action}
                    </Label>
                  </div>
                )
              })}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}`,
  },
  {
    name: "AccordionDeploymentLogs",
    description: "Deployment pipeline where each build step expands to show its log output and status.",
    code: `
const steps = [
  { value: "install", title: "Install dependencies", status: "success", duration: "18s", log: ["Resolving packages", "Added 1,204 packages", "Done in 17.8s"] },
  { value: "build", title: "Build", status: "success", duration: "1m 04s", log: ["Compiling 312 modules", "Generated static pages (48/48)", "Build completed"] },
  { value: "test", title: "Run tests", status: "failed", duration: "42s", log: ["PASS  billing/total.test.ts", "FAIL  auth/session.test.ts", "1 failed, 86 passed"] },
  { value: "deploy", title: "Deploy", status: "skipped", duration: "-", log: ["Skipped because a previous step failed"] },
]

export default function AccordionDeploymentLogs() {
  return (
    <Accordion defaultValue={["test"]} className="w-full max-w-md border">
      {steps.map((step) => (
        <AccordionItem key={step.value} value={step.value}>
          <AccordionTrigger className="items-center px-3 hover:no-underline hover:bg-muted/50">
            <span className="flex items-center gap-2">
              {step.status === "success" && <CircleCheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />}
              {step.status === "failed" && <CircleXIcon className="size-4 text-destructive" />}
              {step.status === "skipped" && <CircleDashedIcon className="size-4 text-muted-foreground" />}
              {step.title}
            </span>
            <span className="ms-auto me-2 font-mono font-normal text-muted-foreground">{step.duration}</span>
            <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="px-3">
            <pre className="overflow-x-auto bg-muted p-2 font-mono text-[11px] leading-relaxed">
              {step.log.map((line, index) => (
                <div key={line} className={cn(line.startsWith("FAIL") && "text-destructive")}>
                  <span className="me-3 text-muted-foreground select-none">{index + 1}</span>
                  {line}
                </div>
              ))}
            </pre>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionCodeReviewFiles",
    description: "Pull request file list where each changed file expands to a small diff with added and removed counts.",
    code: `
const files = [
  {
    value: "price",
    path: "src/billing/price.ts",
    added: 4,
    removed: 2,
    diff: [
      { type: "remove", text: "const tax = subtotal * 0.2" },
      { type: "add", text: "const tax = subtotal * rateFor(region)" },
      { type: "context", text: "return subtotal + tax" },
    ],
  },
  {
    value: "region",
    path: "src/billing/region.ts",
    added: 12,
    removed: 0,
    diff: [
      { type: "add", text: "export function rateFor(region: Region) {" },
      { type: "add", text: "  return RATES[region] ?? 0" },
      { type: "add", text: "}" },
    ],
  },
]

export default function AccordionCodeReviewFiles() {
  return (
    <Accordion multiple defaultValue={["price"]} className="w-full max-w-md gap-2">
      {files.map((file) => (
        <AccordionItem key={file.value} value={file.value} className="border not-last:border-b">
          <AccordionTrigger className="items-center bg-muted/50 px-3 font-mono hover:no-underline">
            <span className="flex min-w-0 items-center gap-2">
              <FileCodeIcon className="size-3.5 shrink-0 text-muted-foreground" />
              <span className="truncate">{file.path}</span>
            </span>
            <span className="ms-auto me-2 flex gap-1.5">
              <span className="text-emerald-600 dark:text-emerald-400">+{file.added}</span>
              <span className="text-destructive">-{file.removed}</span>
            </span>
            <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="pb-0">
            <pre className="overflow-x-auto font-mono text-[11px]">
              {file.diff.map((line) => (
                <div
                  key={line.text}
                  className={cn(
                    "px-3 py-0.5",
                    line.type === "add" && "bg-emerald-500/10",
                    line.type === "remove" && "bg-destructive/10"
                  )}
                >
                  <span className="me-2 text-muted-foreground select-none">
                    {line.type === "add" ? "+" : line.type === "remove" ? "-" : " "}
                  </span>
                  {line.text}
                </div>
              ))}
            </pre>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionHiddenUntilFound",
    description: "Accordion using hiddenUntilFound so the browser's find-in-page can reveal collapsed answers.",
    code: `
const terms = [
  { value: "cancellation", title: "Cancellation", body: "You may cancel at any time. Access continues until the end of the current billing period." },
  { value: "liability", title: "Limitation of liability", body: "Our total liability is limited to the fees you paid in the twelve months before the claim." },
  { value: "governing", title: "Governing law", body: "These terms are governed by the laws of the jurisdiction where Fernhill Software is registered." },
]

export default function AccordionHiddenUntilFound() {
  return (
    <div className="w-full max-w-md space-y-2">
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        Collapsed text stays searchable. Try
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>F</Kbd>
        </KbdGroup>
        and search for &ldquo;jurisdiction&rdquo;.
      </p>
      <Accordion hiddenUntilFound className="border px-3">
        {terms.map((term) => (
          <AccordionItem key={term.value} value={term.value}>
            <AccordionTrigger>
              {term.title}
              ${CHEV}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{term.body}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}`,
  },
  {
    name: "AccordionCheckoutSteps",
    description: "Step-by-step checkout built on a controlled accordion that keeps form values mounted between steps.",
    code: `
const steps = [
  { value: "contact", title: "Contact" },
  { value: "shipping", title: "Shipping address" },
  { value: "payment", title: "Payment" },
]

export default function AccordionCheckoutSteps() {
  const [open, setOpen] = React.useState<string[]>(["contact"])
  const [completed, setCompleted] = React.useState<string[]>([])

  const next = (current: string) => {
    const index = steps.findIndex((s) => s.value === current)
    setCompleted((prev) => (prev.includes(current) ? prev : [...prev, current]))
    const following = steps[index + 1]
    setOpen(following ? [following.value] : [])
  }

  return (
    <Accordion keepMounted value={open} onValueChange={(value) => setOpen(value as string[])} className="w-full max-w-sm border px-3">
      {steps.map((step, index) => (
        <AccordionItem key={step.value} value={step.value}>
          <AccordionTrigger className="items-center text-sm">
            <span className="flex items-center gap-2">
              <span
                className={cn(
                  "flex size-5 items-center justify-center border text-[10px]",
                  completed.includes(step.value) && "border-foreground bg-foreground text-background"
                )}
              >
                {completed.includes(step.value) ? <CheckIcon className="size-3" /> : index + 1}
              </span>
              {step.title}
            </span>
            ${CHEV}
          </AccordionTrigger>
          <AccordionContent className="space-y-2">
            {step.value === "contact" && (
              <Input type="email" placeholder="you@example.com" aria-label="Email" />
            )}
            {step.value === "shipping" && (
              <>
                <Input placeholder="Street address" aria-label="Street address" />
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="City" aria-label="City" />
                  <Input placeholder="Postcode" aria-label="Postcode" />
                </div>
              </>
            )}
            {step.value === "payment" && (
              <Input placeholder="Card number" inputMode="numeric" aria-label="Card number" />
            )}
            <Button size="sm" className="w-full" onClick={() => next(step.value)}>
              {index === steps.length - 1 ? "Place order" : "Continue"}
            </Button>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionHelpfulFeedback",
    description: "Help article accordion with a Was this helpful prompt that records a vote per answer.",
    code: `
const answers = [
  { value: "late", q: "My payout is late. What should I do?", a: "Payouts can take up to 3 business days after the scheduled date. Check your bank details under Settings, Payouts." },
  { value: "fees", q: "What fees are deducted?", a: "We deduct a 2.9% processing fee plus 30 cents per transaction before each payout." },
  { value: "currency", q: "Can I be paid in another currency?", a: "You can add up to three payout currencies. Conversion uses the mid-market rate on the payout date." },
]

export default function AccordionHelpfulFeedback() {
  const [votes, setVotes] = React.useState<Record<string, "up" | "down">>({})

  return (
    <Accordion defaultValue={["late"]} className="w-full max-w-md border px-3">
      {answers.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>
            {item.q}
            ${CHEV}
          </AccordionTrigger>
          <AccordionContent className="space-y-3">
            <p className="text-muted-foreground">{item.a}</p>
            <div className="flex items-center gap-2 border-t pt-2">
              {votes[item.value] ? (
                <span className="text-muted-foreground">Thanks for your feedback.</span>
              ) : (
                <>
                  <span className="text-muted-foreground">Was this helpful?</span>
                  <Button size="icon-xs" variant="outline" aria-label="Yes" onClick={() => setVotes((v) => ({ ...v, [item.value]: "up" }))}>
                    <ThumbsUpIcon />
                  </Button>
                  <Button size="icon-xs" variant="outline" aria-label="No" onClick={() => setVotes((v) => ({ ...v, [item.value]: "down" }))}>
                    <ThumbsDownIcon />
                  </Button>
                </>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionLazyLoadingPanel",
    description: "Panels that fetch their content on first open and show skeletons while loading.",
    code: `
const sections = [
  { value: "activity", title: "Recent activity", rows: ["Ava Moreno commented on Q4 plan", "Jonah Pike moved Launch checklist to Done", "Rhea Kapoor joined the workspace"] },
  { value: "files", title: "Shared files", rows: ["brand-guidelines.pdf", "pricing-model.xlsx"] },
]

export default function AccordionLazyLoadingPanel() {
  const [loaded, setLoaded] = React.useState<string[]>([])

  const load = (value: string, open: boolean) => {
    if (!open || loaded.includes(value)) return
    setTimeout(() => setLoaded((prev) => [...prev, value]), 1200)
  }

  return (
    <Accordion className="w-full max-w-md border px-3">
      {sections.map((section) => (
        <AccordionItem key={section.value} value={section.value} onOpenChange={(open) => load(section.value, open)}>
          <AccordionTrigger>
            {section.title}
            ${CHEV}
          </AccordionTrigger>
          <AccordionContent>
            {loaded.includes(section.value) ? (
              <ul className="space-y-2">
                {section.rows.map((row) => (
                  <li key={row} className="text-muted-foreground">
                    {row}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="space-y-2" aria-busy="true">
                <Skeleton className="h-3 w-4/5" />
                <Skeleton className="h-3 w-3/5" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionProjectGroupsEmpty",
    description: "Project groups where an empty group shows an inline empty state with a create action.",
    code: `
const groups = [
  { value: "active", title: "Active", projects: ["Website relaunch", "Mobile onboarding", "Partner portal"] },
  { value: "paused", title: "Paused", projects: ["Loyalty programme"] },
  { value: "archived", title: "Archived", projects: [] as string[] },
]

export default function AccordionProjectGroupsEmpty() {
  return (
    <Accordion multiple defaultValue={["active", "archived"]} className="w-full max-w-sm border px-3">
      {groups.map((group) => (
        <AccordionItem key={group.value} value={group.value}>
          <AccordionTrigger className="items-center">
            <span className="flex items-center gap-2">
              {group.title}
              <Badge variant="secondary">{group.projects.length}</Badge>
            </span>
            ${CHEV}
          </AccordionTrigger>
          <AccordionContent>
            {group.projects.length > 0 ? (
              <ul className="space-y-1">
                {group.projects.map((project) => (
                  <li key={project} className="flex items-center gap-2 py-1">
                    <span className="size-2 bg-foreground/60" />
                    {project}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center gap-2 border border-dashed py-5 text-center">
                <ArchiveIcon className="size-4 text-muted-foreground" />
                <p className="text-muted-foreground">No archived projects yet.</p>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionPropertiesInspector",
    description: "Dense design-tool inspector panel with compact sections of numeric inputs.",
    code: `
export default function AccordionPropertiesInspector() {
  return (
    <div className="w-full max-w-60 border bg-background">
      <div className="border-b px-2 py-1.5 text-[11px] font-medium">Rectangle 12</div>
      <Accordion multiple defaultValue={["layout", "fill"]}>
        <AccordionItem value="layout">
          <AccordionTrigger className="px-2 py-1.5 text-[11px] uppercase tracking-wide text-muted-foreground hover:no-underline">
            Layout
            <ChevronDownIcon data-slot="accordion-trigger-icon" className="size-3! transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 gap-1.5 px-2">
            {["X", "Y", "W", "H"].map((axis, i) => (
              <label key={axis} className="flex items-center border">
                <span className="w-5 text-center text-[10px] text-muted-foreground">{axis}</span>
                <input defaultValue={[120, 48, 320, 180][i]} className="h-6 w-full min-w-0 bg-transparent text-[11px] outline-none" />
              </label>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="fill">
          <AccordionTrigger className="px-2 py-1.5 text-[11px] uppercase tracking-wide text-muted-foreground hover:no-underline">
            Fill
            <ChevronDownIcon data-slot="accordion-trigger-icon" className="size-3! transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="flex items-center gap-1.5 px-2">
            <span className="size-5 border bg-linear-to-br from-violet-500 to-sky-400" />
            <span className="flex-1 font-mono text-[11px]">Gradient</span>
            <span className="text-[11px] text-muted-foreground">100%</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="effects">
          <AccordionTrigger className="px-2 py-1.5 text-[11px] uppercase tracking-wide text-muted-foreground hover:no-underline">
            Effects
            <ChevronDownIcon data-slot="accordion-trigger-icon" className="size-3! transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="px-2 text-[11px] text-muted-foreground">Drop shadow &middot; 0 4 12 / 16%</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}`,
  },
  {
    name: "AccordionLandingFaqLarge",
    description: "Large marketing-style FAQ with numbered items and generous typography.",
    code: `
const faqs = [
  { value: "1", q: "What makes Tideline different?", a: "Tideline turns customer calls into searchable insight in minutes, without manual tagging." },
  { value: "2", q: "Is my data used to train models?", a: "Never. Your recordings and transcripts stay in your workspace and are deleted on request." },
  { value: "3", q: "How long does setup take?", a: "Most teams connect their calendar and record the first call within ten minutes." },
]

export default function AccordionLandingFaqLarge() {
  return (
    <div className="w-full max-w-lg space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">Questions, answered</h2>
      <Accordion defaultValue={["1"]} className="border-t">
        {faqs.map((faq) => (
          <AccordionItem key={faq.value} value={faq.value} className="border-b">
            <AccordionTrigger className="items-center gap-4 py-5 text-base hover:no-underline">
              <span className="font-mono text-xs text-muted-foreground">0{faq.value}</span>
              <span className="flex-1">{faq.q}</span>
              <ArrowDownIcon className="size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="ps-9 pe-8 pb-5 text-sm text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}`,
  },
  {
    name: "AccordionIncidentHistory",
    description: "Status page incident history with severity dots and a timeline of updates per incident.",
    code: `
const incidents = [
  {
    value: "i1",
    title: "Elevated API error rates",
    date: "Nov 14",
    severity: "major",
    updates: [
      { time: "14:52", label: "Resolved", text: "Error rates are back to normal." },
      { time: "14:20", label: "Monitoring", text: "A fix has been deployed to all regions." },
      { time: "13:58", label: "Investigating", text: "We are seeing 5xx errors on the EU cluster." },
    ],
  },
  {
    value: "i2",
    title: "Delayed webhook delivery",
    date: "Nov 3",
    severity: "minor",
    updates: [
      { time: "09:40", label: "Resolved", text: "The delivery backlog has been cleared." },
      { time: "09:05", label: "Identified", text: "A queue worker stalled after a config change." },
    ],
  },
]

export default function AccordionIncidentHistory() {
  return (
    <Accordion defaultValue={["i1"]} className="w-full max-w-md border px-3">
      {incidents.map((incident) => (
        <AccordionItem key={incident.value} value={incident.value}>
          <AccordionTrigger className="items-center">
            <span className="flex items-center gap-2">
              <span className={cn("size-2 rounded-full", incident.severity === "major" ? "bg-orange-500" : "bg-amber-400")} />
              {incident.title}
            </span>
            <span className="ms-auto me-2 font-normal text-muted-foreground">{incident.date}</span>
            <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
          </AccordionTrigger>
          <AccordionContent className="space-y-2.5 ps-4">
            {incident.updates.map((update) => (
              <div key={update.time}>
                <p>
                  <span className="font-medium">{update.label}</span>
                  <span className="text-muted-foreground"> &middot; {update.time} UTC</span>
                </p>
                <p className="text-muted-foreground">{update.text}</p>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionChatThreads",
    description: "Chat sidebar where threads collapse to a preview and expand to show replies.",
    code: `
const threads = [
  {
    value: "t1",
    author: "Maya Chen",
    topic: "Launch copy review",
    unread: 2,
    replies: [
      { author: "Leo Park", text: "Headline works. Can we shorten the subhead?" },
      { author: "Maya Chen", text: "Updated. Take a look at v3 in the doc." },
    ],
  },
  {
    value: "t2",
    author: "Dev Patel",
    topic: "Staging is down",
    unread: 0,
    replies: [{ author: "Ana Silva", text: "Restarted the worker, should be back now." }],
  },
]

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")

export default function AccordionChatThreads() {
  return (
    <Accordion defaultValue={["t1"]} className="w-full max-w-sm border">
      {threads.map((thread) => (
        <AccordionItem key={thread.value} value={thread.value}>
          <AccordionTrigger className="items-center gap-2.5 px-3 hover:no-underline hover:bg-muted/50">
            <Avatar>
              <AvatarFallback>{initials(thread.author)}</AvatarFallback>
            </Avatar>
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="truncate"># {thread.topic}</span>
              <span className="font-normal text-muted-foreground">
                {thread.replies.length} {thread.replies.length === 1 ? "reply" : "replies"}
              </span>
            </span>
            {thread.unread > 0 && <Badge>{thread.unread}</Badge>}
          </AccordionTrigger>
          <AccordionContent className="space-y-2 px-3">
            {thread.replies.map((reply) => (
              <div key={reply.text} className="flex gap-2 border-s ps-3">
                <div>
                  <p className="font-medium">{reply.author}</p>
                  <p className="text-muted-foreground">{reply.text}</p>
                </div>
              </div>
            ))}
            <Button size="xs" variant="ghost">
              <ReplyIcon data-icon="inline-start" />
              Reply in thread
            </Button>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionKeyboardShortcuts",
    description: "Keyboard shortcuts reference grouped by area, each panel listing actions and key combos.",
    code: `
const groups = [
  {
    value: "general",
    title: "General",
    shortcuts: [
      { action: "Open command menu", keys: ["Ctrl", "K"] },
      { action: "Search", keys: ["/"] },
      { action: "Show shortcuts", keys: ["?"] },
    ],
  },
  {
    value: "editing",
    title: "Editing",
    shortcuts: [
      { action: "Bold", keys: ["Ctrl", "B"] },
      { action: "Insert link", keys: ["Ctrl", "L"] },
      { action: "Undo", keys: ["Ctrl", "Z"] },
    ],
  },
  {
    value: "navigation",
    title: "Navigation",
    shortcuts: [
      { action: "Go to inbox", keys: ["G", "I"] },
      { action: "Next item", keys: ["J"] },
    ],
  },
]

export default function AccordionKeyboardShortcuts() {
  return (
    <Accordion multiple defaultValue={["general"]} className="w-full max-w-sm border px-3">
      {groups.map((group) => (
        <AccordionItem key={group.value} value={group.value}>
          <AccordionTrigger className="items-center">
            <span className="flex items-center gap-2">
              <KeyboardIcon className="size-4 text-muted-foreground" />
              {group.title}
            </span>
            ${CHEV}
          </AccordionTrigger>
          <AccordionContent className="space-y-1.5">
            {group.shortcuts.map((shortcut) => (
              <div key={shortcut.action} className="flex items-center justify-between">
                <span className="text-muted-foreground">{shortcut.action}</span>
                <KbdGroup>
                  {shortcut.keys.map((key) => (
                    <Kbd key={key}>{key}</Kbd>
                  ))}
                </KbdGroup>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionSecurityCheckup",
    description: "Security checkup where each item shows a pass or warning status and a fix action.",
    code: `
const checks = [
  { value: "password", title: "Strong password", ok: true, body: "Your password was changed 2 months ago and is not found in known breaches." },
  { value: "2fa", title: "Two-factor authentication", ok: false, body: "Add an authenticator app so a stolen password alone cannot unlock your account.", action: "Enable 2FA" },
  { value: "sessions", title: "Active sessions", ok: false, body: "You are signed in on 4 devices, including one you have not used in 90 days.", action: "Review sessions" },
  { value: "recovery", title: "Recovery email", ok: true, body: "Recovery codes will be sent to r***@hollow.example." },
]

export default function AccordionSecurityCheckup() {
  const issues = checks.filter((check) => !check.ok).length

  return (
    <div className="w-full max-w-md border">
      <div className="flex items-center gap-3 border-b p-3">
        <ShieldAlertIcon className="size-5 text-amber-600 dark:text-amber-400" />
        <div>
          <p className="text-sm font-medium">{issues} recommendations</p>
          <p className="text-xs text-muted-foreground">Fix these to keep your account safe.</p>
        </div>
      </div>
      <Accordion defaultValue={["2fa"]} className="px-3">
        {checks.map((check) => (
          <AccordionItem key={check.value} value={check.value}>
            <AccordionTrigger className="items-center">
              <span className="flex items-center gap-2">
                {check.ok ? (
                  <CircleCheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <TriangleAlertIcon className="size-4 text-amber-600 dark:text-amber-400" />
                )}
                {check.title}
              </span>
              ${CHEV}
            </AccordionTrigger>
            <AccordionContent className="space-y-2 ps-6">
              <p className="text-muted-foreground">{check.body}</p>
              {check.action && <Button size="xs">{check.action}</Button>}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}`,
  },
  {
    name: "AccordionActiveAccentBorder",
    description: "Accordion where the open item is highlighted with a solid accent bar on its leading edge.",
    code: `
const steps = [
  { value: "research", title: "Research", body: "Interview eight customers and summarise the top three pains." },
  { value: "concept", title: "Concept", body: "Sketch two directions and review them with engineering for feasibility." },
  { value: "build", title: "Build", body: "Ship behind a flag to 10% of workspaces and watch activation." },
]

export default function AccordionActiveAccentBorder() {
  return (
    <Accordion defaultValue={["concept"]} className="w-full max-w-sm">
      {steps.map((step) => (
        <AccordionItem
          key={step.value}
          value={step.value}
          className="border-s-2 border-b-0 border-s-border ps-4 transition-colors data-open:border-s-foreground not-last:border-b-0"
        >
          <AccordionTrigger className="text-sm text-muted-foreground hover:no-underline aria-expanded:text-foreground">
            {step.title}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{step.body}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}`,
  },
  {
    name: "AccordionInDashboardCard",
    description: "Dashboard card whose metrics expand to reveal a breakdown with mini bar charts.",
    code: `
const metrics = [
  { value: "revenue", label: "Revenue", total: "$48,210", delta: "+12.4%", breakdown: [{ name: "Subscriptions", pct: 72 }, { name: "Add-ons", pct: 20 }, { name: "Services", pct: 8 }] },
  { value: "signups", label: "New signups", total: "1,382", delta: "+4.1%", breakdown: [{ name: "Organic", pct: 54 }, { name: "Referral", pct: 31 }, { name: "Paid", pct: 15 }] },
]

export default function AccordionInDashboardCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>This month</CardTitle>
        <CardDescription>Nov 1 to Nov 15</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion defaultValue={["revenue"]}>
          {metrics.map((metric) => (
            <AccordionItem key={metric.value} value={metric.value}>
              <AccordionTrigger className="items-center hover:no-underline">
                <span className="flex flex-col">
                  <span className="font-normal text-muted-foreground">{metric.label}</span>
                  <span className="text-lg font-semibold">{metric.total}</span>
                </span>
                <Badge variant="secondary" className="ms-auto me-2">
                  <TrendingUpIcon />
                  {metric.delta}
                </Badge>
                <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="space-y-2">
                {metric.breakdown.map((row) => (
                  <div key={row.name} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{row.name}</span>
                      <span>{row.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-muted">
                      <div className="h-full bg-foreground" style={{ width: row.pct + "%" }} />
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "AccordionFullyDisabled",
    description: "Accordion disabled as a whole while a sync is running, with a spinner and status message.",
    code: `
const sections = [
  { value: "contacts", title: "Contacts", count: "2,481" },
  { value: "deals", title: "Deals", count: "318" },
  { value: "notes", title: "Notes", count: "1,067" },
]

export default function AccordionFullyDisabled() {
  const [syncing, setSyncing] = React.useState(true)

  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-xs text-muted-foreground">
          {syncing ? <Spinner className="size-3.5" /> : <CircleCheckIcon className="size-3.5" />}
          {syncing ? "Importing from your CRM..." : "Import complete"}
        </span>
        <Button size="xs" variant="outline" onClick={() => setSyncing((s) => !s)}>
          {syncing ? "Finish import" : "Run again"}
        </Button>
      </div>
      <Accordion disabled={syncing} className="border px-3">
        {sections.map((section) => (
          <AccordionItem key={section.value} value={section.value}>
            <AccordionTrigger className="items-center">
              {section.title}
              <span className="ms-auto me-2 font-normal text-muted-foreground">{section.count}</span>
              <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {section.count} records imported. Duplicates were merged by email address.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}`,
  },
]

export default examples
