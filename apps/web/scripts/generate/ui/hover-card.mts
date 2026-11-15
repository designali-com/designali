import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "UserMentionHoverCard",
    description: "An @mention inside a comment that reveals the user's profile, bio, and follower stats.",
    code: `
export default function UserMentionHoverCard() {
  return (
    <p className="max-w-sm text-sm text-muted-foreground">
      Great catch! Looping in{" "}
      <HoverCard>
        <HoverCardTrigger href="#" className="font-medium text-foreground underline-offset-4 hover:underline">
          @maya.chen
        </HoverCardTrigger>
        <HoverCardContent className="w-72">
          <div className="flex gap-3">
            <Avatar size="lg">
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Maya Chen</p>
                  <p className="text-muted-foreground">@maya.chen</p>
                </div>
                <Button size="xs">Follow</Button>
              </div>
              <p>Design systems lead at Northwind Studio. Writing about tokens and motion.</p>
              <div className="flex gap-3 text-muted-foreground">
                <span><strong className="text-foreground">1,284</strong> followers</span>
                <span><strong className="text-foreground">312</strong> following</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      since she owns the spacing tokens.
    </p>
  )
}`,
  },
  {
    name: "RepositoryPreviewHoverCard",
    description: "A repository link that previews its description, primary language, stars, and forks.",
    code: `
export default function RepositoryPreviewHoverCard() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <BookMarkedIcon className="size-4 text-muted-foreground" />
      <HoverCard>
        <HoverCardTrigger href="#" className="font-medium hover:underline">
          lumen-labs/orbit-router
        </HoverCardTrigger>
        <HoverCardContent className="flex w-80 flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold">orbit-router</span>
            <Badge variant="outline">Public</Badge>
          </div>
          <p className="text-muted-foreground">
            File-based routing with typed params, nested layouts, and streaming loaders.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="size-2.5 rounded-full bg-blue-500" />
              TypeScript
            </span>
            <span className="flex items-center gap-1">
              <StarIcon className="size-3.5" />
              8.2k
            </span>
            <span className="flex items-center gap-1">
              <GitForkIcon className="size-3.5" />
              416
            </span>
          </div>
          <p className="text-muted-foreground">Updated 2 hours ago</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}`,
  },
  {
    name: "TeamAvatarStackHoverCards",
    description: "An avatar stack where each teammate reveals their role and availability on hover.",
    code: `
const team = [
  { name: "Ava Patel", initials: "AP", role: "Product Manager", status: "Available", online: true },
  { name: "Jonas Weber", initials: "JW", role: "Frontend Engineer", status: "In a meeting until 3 PM", online: false },
  { name: "Lina Okafor", initials: "LO", role: "UX Researcher", status: "Available", online: true },
  { name: "Marco Silva", initials: "MS", role: "Backend Engineer", status: "Out of office", online: false },
]

export default function TeamAvatarStackHoverCards() {
  return (
    <div className="flex flex-col items-center gap-2">
      <AvatarGroup>
        {team.map((member) => (
          <HoverCard key={member.name}>
            <HoverCardTrigger delay={150} render={<span className="cursor-pointer" />}>
              <Avatar>
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
            </HoverCardTrigger>
            <HoverCardContent className="w-56">
              <p className="text-sm font-medium">{member.name}</p>
              <p className="text-muted-foreground">{member.role}</p>
              <div className="mt-2 flex items-center gap-1.5">
                <span className={cn("size-2 rounded-full", member.online ? "bg-emerald-500" : "bg-muted-foreground")} />
                <span>{member.status}</span>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </AvatarGroup>
      <p className="text-xs text-muted-foreground">Checkout redesign squad</p>
    </div>
  )
}`,
  },
  {
    name: "ProductQuickViewHoverCard",
    description: "Line items in an order summary that preview product details, rating, and stock.",
    code: `
const items = [
  { name: "Aero Running Shoe", price: "$129.00", rating: 4.7, stock: "In stock", tone: "from-sky-400 to-indigo-500" },
  { name: "Trail Merino Socks", price: "$24.00", rating: 4.9, stock: "Low stock", tone: "from-amber-300 to-orange-500" },
]

export default function ProductQuickViewHoverCard() {
  return (
    <div className="w-full max-w-sm border p-4">
      <p className="mb-3 text-sm font-medium">Order summary</p>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-sm">
            <HoverCard>
              <HoverCardTrigger href="#" className="hover:underline">
                {item.name}
              </HoverCardTrigger>
              <HoverCardContent side="right" className="flex w-60 flex-col gap-2">
                <div className={cn("aspect-video w-full bg-gradient-to-br", item.tone)} />
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.name}</span>
                  <span>{item.price}</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <StarIcon className="size-3.5 fill-amber-400 text-amber-400" />
                    {item.rating}
                  </span>
                  <Badge variant={item.stock === "Low stock" ? "destructive" : "secondary"}>{item.stock}</Badge>
                </div>
              </HoverCardContent>
            </HoverCard>
            <span className="text-muted-foreground">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "LinkPreviewHoverCard",
    description: "An external link in a document that shows a rich page preview with thumbnail and domain.",
    code: `
export default function LinkPreviewHoverCard() {
  return (
    <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
      For the rollout plan, follow the guide in{" "}
      <HoverCard>
        <HoverCardTrigger href="#" className="text-foreground underline underline-offset-4">
          Shipping feature flags safely
        </HoverCardTrigger>
        <HoverCardContent className="w-72 p-0">
          <div className="h-28 w-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-rose-400" />
          <div className="flex flex-col gap-1 p-3">
            <p className="font-medium">Shipping feature flags safely</p>
            <p className="line-clamp-2 text-muted-foreground">
              A practical checklist for gradual rollouts, kill switches, and cleaning up stale flags.
            </p>
            <span className="mt-1 flex items-center gap-1 text-muted-foreground">
              <GlobeIcon className="size-3" />
              engineering.fernhill.dev
            </span>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      before enabling it for everyone.
    </p>
  )
}`,
  },
  {
    name: "CalendarEventHoverCard",
    description: "Schedule blocks in a day view that reveal event time, location, and attendees.",
    code: `
const events = [
  { title: "Design critique", time: "10:00 – 10:45", room: "Room Atlas", people: ["NK", "RB", "TS"], color: "bg-blue-500/15 border-blue-500" },
  { title: "Sprint planning", time: "13:00 – 14:00", room: "Zoom", people: ["AP", "JW"], color: "bg-emerald-500/15 border-emerald-500" },
  { title: "1:1 with Priya", time: "16:30 – 17:00", room: "Café corner", people: ["PD"], color: "bg-amber-500/15 border-amber-500" },
]

export default function CalendarEventHoverCard() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <p className="text-sm font-medium">Thursday, March 12</p>
      {events.map((event) => (
        <HoverCard key={event.title}>
          <HoverCardTrigger
            render={<div className={cn("cursor-default border-l-2 px-2 py-1.5 text-xs", event.color)} />}
          >
            <p className="font-medium">{event.title}</p>
            <p className="text-muted-foreground">{event.time}</p>
          </HoverCardTrigger>
          <HoverCardContent side="right" align="start" className="flex flex-col gap-2">
            <p className="text-sm font-medium">{event.title}</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <ClockIcon className="size-3.5" />
              {event.time}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPinIcon className="size-3.5" />
              {event.room}
            </div>
            <AvatarGroup>
              {event.people.map((p) => (
                <Avatar key={p} size="sm">
                  <AvatarFallback>{p}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}`,
  },
  {
    name: "GlossaryTermHoverCard",
    description: "Dotted-underline glossary terms in help text that explain jargon in place.",
    code: `
const terms = {
  mrr: { term: "MRR", definition: "Monthly recurring revenue: the predictable revenue from all active subscriptions in a month." },
  churn: { term: "Churn rate", definition: "The percentage of customers who cancel during a period, divided by customers at the start." },
}

export default function GlossaryTermHoverCard() {
  return (
    <p className="max-w-sm text-sm leading-relaxed">
      Your{" "}
      <HoverCard>
        <HoverCardTrigger render={<span className="cursor-help underline decoration-dotted underline-offset-4" />}>
          {terms.mrr.term}
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="font-medium">{terms.mrr.term}</p>
          <p className="text-muted-foreground">{terms.mrr.definition}</p>
        </HoverCardContent>
      </HoverCard>{" "}
      grew 8% this month while{" "}
      <HoverCard>
        <HoverCardTrigger render={<span className="cursor-help underline decoration-dotted underline-offset-4" />}>
          {terms.churn.term.toLowerCase()}
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="font-medium">{terms.churn.term}</p>
          <p className="text-muted-foreground">{terms.churn.definition}</p>
          <a href="#" className="mt-2 inline-flex items-center gap-1 font-medium hover:underline">
            Read the metrics guide
            <ArrowRightIcon className="size-3" />
          </a>
        </HoverCardContent>
      </HoverCard>{" "}
      held steady at 2.1%.
    </p>
  )
}`,
  },
  {
    name: "StockTickerHoverCard",
    description: "A ticker symbol in a news feed that previews price, daily change, and an SVG sparkline.",
    code: `
const points = [32, 30, 34, 33, 38, 36, 41, 40, 44, 47]

export default function StockTickerHoverCard() {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const path = points
    .map((p, i) => (i === 0 ? "M" : "L") + (i * 100) / (points.length - 1) + " " + (40 - ((p - min) / (max - min)) * 36 - 2))
    .join(" ")

  return (
    <p className="max-w-sm text-sm text-muted-foreground">
      Shares of{" "}
      <HoverCard>
        <HoverCardTrigger href="#" className="font-mono font-medium text-foreground hover:underline">
          $NOVA
        </HoverCardTrigger>
        <HoverCardContent className="w-60">
          <div className="flex items-baseline justify-between">
            <span className="font-medium">Novagrid Energy</span>
            <span className="font-mono text-muted-foreground">NOVA</span>
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-lg font-semibold">$47.12</span>
            <span className="flex items-center text-emerald-600 dark:text-emerald-400">
              <TrendingUpIcon className="mr-1 size-3.5" />
              +3.8%
            </span>
          </div>
          <svg viewBox="0 0 100 40" className="mt-2 h-12 w-full text-emerald-500" preserveAspectRatio="none">
            <path d={path} fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>
          <p className="text-muted-foreground">Market open · Vol 2.4M</p>
        </HoverCardContent>
      </HoverCard>{" "}
      rallied after the quarterly report.
    </p>
  )
}`,
  },
  {
    name: "IssueReferenceHoverCard",
    description: "An issue number in a commit message that previews status, labels, and assignee.",
    code: `
export default function IssueReferenceHoverCard() {
  return (
    <div className="w-full max-w-sm border p-3 font-mono text-xs">
      fix(auth): refresh token before expiry, closes{" "}
      <HoverCard>
        <HoverCardTrigger href="#" className="text-blue-600 hover:underline dark:text-blue-400">
          #482
        </HoverCardTrigger>
        <HoverCardContent className="w-72 font-sans">
          <div className="flex items-start gap-2">
            <CircleDotIcon className="mt-0.5 size-4 shrink-0 text-emerald-600" />
            <div className="flex flex-col gap-1.5">
              <p className="font-medium">Session expires while editing a long form</p>
              <p className="text-muted-foreground">#482 opened 3 days ago by tomas.r</p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="destructive">bug</Badge>
                <Badge variant="outline">auth</Badge>
                <Badge variant="secondary">p1</Badge>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Avatar size="sm">
                  <AvatarFallback>EH</AvatarFallback>
                </Avatar>
                Assigned to Elif Hansen
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}`,
  },
  {
    name: "PullRequestChecksHoverCard",
    description: "A pull request row that previews CI checks and diff stats before opening it.",
    code: `
const checks = [
  { name: "Build", ok: true },
  { name: "Unit tests", ok: true },
  { name: "Lint", ok: false },
  { name: "Preview deploy", ok: true },
]

export default function PullRequestChecksHoverCard() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2 border p-3 text-sm">
      <GitPullRequestIcon className="size-4 text-emerald-600" />
      <HoverCard>
        <HoverCardTrigger href="#" className="flex-1 truncate font-medium hover:underline">
          Add bulk export to reports
        </HoverCardTrigger>
        <HoverCardContent align="start" className="flex w-64 flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-medium">#1093 · 3 of 4 checks passed</span>
          </div>
          <ul className="flex flex-col gap-1">
            {checks.map((check) => (
              <li key={check.name} className="flex items-center gap-2">
                {check.ok ? (
                  <CircleCheckIcon className="size-3.5 text-emerald-600" />
                ) : (
                  <CircleXIcon className="size-3.5 text-destructive" />
                )}
                {check.name}
              </li>
            ))}
          </ul>
          <Separator />
          <div className="flex gap-3 font-mono">
            <span className="text-emerald-600">+412</span>
            <span className="text-destructive">−87</span>
            <span className="text-muted-foreground">12 files</span>
          </div>
        </HoverCardContent>
      </HoverCard>
      <Badge variant="outline">Review</Badge>
    </div>
  )
}`,
  },
  {
    name: "FileDetailsHoverCard",
    description: "A file manager list where each file reveals size, owner, and last modified date.",
    code: `
const files = [
  { name: "Q3-forecast.xlsx", icon: FileSpreadsheetIcon, size: "248 KB", owner: "Hana Ito", modified: "Today, 9:14 AM" },
  { name: "brand-guidelines.pdf", icon: FileTextIcon, size: "12.4 MB", owner: "Leo Martins", modified: "Mar 2, 2025" },
  { name: "onboarding-video.mp4", icon: FileVideoIcon, size: "184 MB", owner: "Sara Novak", modified: "Feb 18, 2025" },
]

export default function FileDetailsHoverCard() {
  return (
    <div className="w-full max-w-xs divide-y border">
      {files.map((file) => (
        <HoverCard key={file.name}>
          <HoverCardTrigger
            delay={300}
            render={<div className="flex cursor-default items-center gap-2 px-3 py-2 text-sm hover:bg-muted" />}
          >
            <file.icon className="size-4 text-muted-foreground" />
            <span className="truncate">{file.name}</span>
          </HoverCardTrigger>
          <HoverCardContent side="right" className="w-56">
            <p className="mb-2 truncate font-medium">{file.name}</p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
              <dt className="text-muted-foreground">Size</dt>
              <dd>{file.size}</dd>
              <dt className="text-muted-foreground">Owner</dt>
              <dd>{file.owner}</dd>
              <dt className="text-muted-foreground">Modified</dt>
              <dd>{file.modified}</dd>
            </dl>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}`,
  },
  {
    name: "CustomerTableHoverCard",
    description: "Customer names in an admin table that reveal contact details and plan on hover.",
    code: `
const customers = [
  { name: "Riya Kapoor", email: "riya@brightfold.io", phone: "+1 415 555 0132", plan: "Business", mrr: "$480" },
  { name: "Owen Gallagher", email: "owen@tallpine.co", phone: "+44 20 7946 0012", plan: "Starter", mrr: "$29" },
  { name: "Mei Tanaka", email: "mei@kitecloud.jp", phone: "+81 3 5550 1180", plan: "Pro", mrr: "$99" },
]

export default function CustomerTableHoverCard() {
  return (
    <Table className="w-full max-w-md">
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead>Plan</TableHead>
          <TableHead className="text-right">MRR</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.map((c) => (
          <TableRow key={c.email}>
            <TableCell>
              <HoverCard>
                <HoverCardTrigger href="#" className="font-medium hover:underline">
                  {c.name}
                </HoverCardTrigger>
                <HoverCardContent align="start" className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      <AvatarFallback>{c.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{c.name}</span>
                  </div>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <MailIcon className="size-3.5" />
                    {c.email}
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <PhoneIcon className="size-3.5" />
                    {c.phone}
                  </span>
                </HoverCardContent>
              </HoverCard>
            </TableCell>
            <TableCell>
              <Badge variant="secondary">{c.plan}</Badge>
            </TableCell>
            <TableCell className="text-right">{c.mrr}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`,
  },
  {
    name: "PresenceStatusHoverCard",
    description: "An avatar with a presence badge that shows local time and a custom status message.",
    code: `
export default function PresenceStatusHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger render={<span className="cursor-pointer" />}>
        <Avatar size="lg">
          <AvatarFallback>DR</AvatarFallback>
          <AvatarBadge className="bg-amber-500" />
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent side="top" className="w-60">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-amber-500" />
          <span className="font-medium">Diego Ruiz · Away</span>
        </div>
        <p className="mt-1 text-muted-foreground">🎧 Heads down on the billing migration</p>
        <div className="mt-2 flex items-center gap-1.5 text-muted-foreground">
          <ClockIcon className="size-3.5" />
          6:42 PM local time (Lisbon)
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`,
  },
  {
    name: "ToolbarShortcutHoverCard",
    description: "Editor toolbar buttons that reveal a rich description and keyboard shortcut.",
    code: `
const tools = [
  { label: "Bold", icon: BoldIcon, keys: ["⌘", "B"], hint: "Make the selected text stand out." },
  { label: "Insert link", icon: LinkIcon, keys: ["⌘", "K"], hint: "Attach a URL or link to another page." },
  { label: "Code block", icon: CodeIcon, keys: ["⌘", "⇧", "C"], hint: "Format a snippet with syntax highlighting." },
]

export default function ToolbarShortcutHoverCard() {
  return (
    <div className="flex items-center gap-1 border p-1">
      {tools.map((tool) => (
        <HoverCard key={tool.label}>
          <HoverCardTrigger
            delay={400}
            render={<Button variant="ghost" size="icon-sm" aria-label={tool.label} />}
          >
            <tool.icon />
          </HoverCardTrigger>
          <HoverCardContent side="top" className="w-52">
            <div className="flex items-center justify-between">
              <span className="font-medium">{tool.label}</span>
              <KbdGroup>
                {tool.keys.map((k) => (
                  <Kbd key={k}>{k}</Kbd>
                ))}
              </KbdGroup>
            </div>
            <p className="mt-1 text-muted-foreground">{tool.hint}</p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}`,
  },
  {
    name: "PricingFeatureHoverCard",
    description: "Pricing plan features with info triggers that explain limits in detail.",
    code: `
const features = [
  { name: "Unlimited projects", detail: "Create as many projects as you need. Archived projects never count toward limits." },
  { name: "50 GB storage", detail: "Shared across your workspace. Extra storage is $2 per 10 GB per month." },
  { name: "Audit log", detail: "Track every sign-in, permission change, and export for 365 days." },
]

export default function PricingFeatureHoverCard() {
  return (
    <div className="w-full max-w-xs border p-4">
      <p className="text-sm font-medium">Team plan</p>
      <p className="mb-3 text-2xl font-semibold">$18<span className="text-sm font-normal text-muted-foreground">/seat/mo</span></p>
      <ul className="flex flex-col gap-2 text-sm">
        {features.map((f) => (
          <li key={f.name} className="flex items-center gap-2">
            <CheckIcon className="size-4 text-emerald-600" />
            <span className="flex-1">{f.name}</span>
            <HoverCard>
              <HoverCardTrigger
                delay={100}
                render={<button type="button" aria-label={"About " + f.name} className="text-muted-foreground hover:text-foreground" />}
              >
                <InfoIcon className="size-3.5" />
              </HoverCardTrigger>
              <HoverCardContent side="right" className="w-56">
                {f.detail}
              </HoverCardContent>
            </HoverCard>
          </li>
        ))}
      </ul>
    </div>
  )
}`,
  },
  {
    name: "MetricDefinitionHoverCard",
    description: "A dashboard KPI tile whose label explains how the metric is calculated.",
    code: `
export default function MetricDefinitionHoverCard() {
  return (
    <div className="w-full max-w-xs border p-4">
      <HoverCard>
        <HoverCardTrigger render={<span className="inline-flex cursor-help items-center gap-1 text-sm text-muted-foreground" />}>
          Net revenue retention
          <InfoIcon className="size-3.5" />
        </HoverCardTrigger>
        <HoverCardContent align="start" className="flex w-72 flex-col gap-2">
          <p className="font-medium">How it&apos;s calculated</p>
          <code className="bg-muted px-2 py-1.5 font-mono">
            (Start MRR + expansion − contraction − churn) ÷ Start MRR
          </code>
          <p className="text-muted-foreground">Measured over the trailing 12 months for cohorts that started before March.</p>
        </HoverCardContent>
      </HoverCard>
      <p className="mt-1 text-3xl font-semibold">112%</p>
      <p className="text-xs text-emerald-600">+4 pts vs last quarter</p>
    </div>
  )
}`,
  },
  {
    name: "CitationFootnoteHoverCard",
    description: "Superscript footnote markers in an article that preview the cited source.",
    code: `
const sources = [
  { id: 1, title: "Remote Work and Focus Time", publisher: "Halden Institute Review", year: 2023 },
  { id: 2, title: "Meeting Load in Distributed Teams", publisher: "Journal of Work Design", year: 2022 },
]

export default function CitationFootnoteHoverCard() {
  return (
    <p className="max-w-sm text-sm leading-relaxed">
      Teams with two no-meeting days report 26% more deep work
      {sources.map((s) => (
        <HoverCard key={s.id}>
          <HoverCardTrigger href="#" className="ml-0.5 align-super text-[10px] font-medium text-blue-600 dark:text-blue-400">
            [{s.id}]
          </HoverCardTrigger>
          <HoverCardContent side="top" className="w-64">
            <p className="font-medium">{s.title}</p>
            <p className="text-muted-foreground">
              {s.publisher}, {s.year}
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
      , with no measurable drop in collaboration quality.
    </p>
  )
}`,
  },
  {
    name: "ChannelMentionHoverCard",
    description: "A chat channel mention that previews the topic, member count, and a join action.",
    code: `
export default function ChannelMentionHoverCard() {
  return (
    <div className="flex w-full max-w-sm gap-2 text-sm">
      <Avatar size="sm">
        <AvatarFallback>KB</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">Kofi Boateng <span className="text-xs font-normal text-muted-foreground">11:02</span></p>
        <p>
          Release notes are up, discuss in{" "}
          <HoverCard>
            <HoverCardTrigger href="#" className="bg-blue-500/10 px-1 font-medium text-blue-600 dark:text-blue-400">
              #launch-room
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5 font-medium">
                <HashIcon className="size-3.5" />
                launch-room
              </div>
              <p className="text-muted-foreground">Coordination for the v4.0 launch: timelines, blockers, and go/no-go calls.</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-muted-foreground">
                  <UsersIcon className="size-3.5" />
                  42 members
                </span>
                <Button size="xs">Join channel</Button>
              </div>
            </HoverCardContent>
          </HoverCard>
        </p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "OrderStatusHoverCard",
    description: "Order IDs in a fulfillment list that preview the shipping progress timeline.",
    code: `
const steps = ["Placed", "Packed", "Shipped", "Delivered"]
const orders = [
  { id: "#ORD-2041", customer: "Nadia Haddad", step: 2 },
  { id: "#ORD-2040", customer: "Ben Carter", step: 3 },
  { id: "#ORD-2039", customer: "Yuki Mori", step: 1 },
]

export default function OrderStatusHoverCard() {
  return (
    <div className="w-full max-w-xs divide-y border text-sm">
      {orders.map((order) => (
        <div key={order.id} className="flex items-center justify-between px-3 py-2">
          <HoverCard>
            <HoverCardTrigger href="#" className="font-mono hover:underline">
              {order.id}
            </HoverCardTrigger>
            <HoverCardContent side="right" className="w-56">
              <p className="mb-2 font-medium">{order.customer}</p>
              <ol className="flex flex-col gap-1.5">
                {steps.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    <span
                      className={cn(
                        "flex size-4 items-center justify-center rounded-full border",
                        i <= order.step ? "border-primary bg-primary text-primary-foreground" : "text-muted-foreground"
                      )}
                    >
                      {i <= order.step && <CheckIcon className="size-2.5" />}
                    </span>
                    <span className={i <= order.step ? "" : "text-muted-foreground"}>{step}</span>
                  </li>
                ))}
              </ol>
            </HoverCardContent>
          </HoverCard>
          <Badge variant="outline">{steps[order.step]}</Badge>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "TimezoneLocationHoverCard",
    description: "Teammate locations that reveal local time, UTC offset, and working hours overlap.",
    code: `
const places = [
  { city: "Toronto", offset: "UTC−5", local: "9:20 AM", overlap: "6h overlap" },
  { city: "Berlin", offset: "UTC+1", local: "3:20 PM", overlap: "3h overlap" },
  { city: "Singapore", offset: "UTC+8", local: "10:20 PM", overlap: "No overlap" },
]

export default function TimezoneLocationHoverCard() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {places.map((p) => (
        <HoverCard key={p.city}>
          <HoverCardTrigger render={<Badge variant="outline" className="cursor-default gap-1" />}>
            <MapPinIcon className="size-3" />
            {p.city}
          </HoverCardTrigger>
          <HoverCardContent className="w-48">
            <p className="text-lg font-semibold">{p.local}</p>
            <p className="text-muted-foreground">
              {p.city} · {p.offset}
            </p>
            <p className="mt-2 flex items-center gap-1.5">
              <SunIcon className="size-3.5 text-amber-500" />
              {p.overlap} with you
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}`,
  },
  {
    name: "AlignmentOptionsHoverCard",
    description: "Triggers that demonstrate start, center, and end alignment of the hover card.",
    code: `
const aligns = ["start", "center", "end"] as const

export default function AlignmentOptionsHoverCard() {
  return (
    <div className="flex flex-col items-center gap-2">
      {aligns.map((align) => (
        <HoverCard key={align}>
          <HoverCardTrigger render={<Button variant="outline" className="w-48 capitalize" />}>
            Align {align}
          </HoverCardTrigger>
          <HoverCardContent side="right" align={align} className="w-44">
            <p className="font-medium capitalize">{align}</p>
            <p className="text-muted-foreground">Aligned to the {align} edge of the trigger.</p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ControlledHoverCard",
    description: "A controlled hover card whose open state is mirrored in the UI and can be toggled by a switch.",
    code: `
export default function ControlledHoverCard() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <HoverCard open={open} onOpenChange={setOpen}>
        <HoverCardTrigger href="#" className="text-sm font-medium underline underline-offset-4">
          @release-bot
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="font-medium">Release Bot</p>
          <p className="text-muted-foreground">Posts changelogs to #announcements every Friday at 4 PM.</p>
        </HoverCardContent>
      </HoverCard>
      <div className="flex items-center gap-2 text-xs">
        <Switch id="hc-open" checked={open} onCheckedChange={setOpen} />
        <Label htmlFor="hc-open">Card is {open ? "open" : "closed"}</Label>
      </div>
    </div>
  )
}`,
  },
  {
    name: "DelayPresetsHoverCard",
    description: "Three triggers comparing instant, standard, and deliberate open and close delays.",
    code: `
const presets = [
  { label: "Instant", delay: 0, closeDelay: 0 },
  { label: "Standard", delay: 600, closeDelay: 300 },
  { label: "Deliberate", delay: 1200, closeDelay: 600 },
]

export default function DelayPresetsHoverCard() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {presets.map((p) => (
        <HoverCard key={p.label}>
          <HoverCardTrigger delay={p.delay} closeDelay={p.closeDelay} render={<Button variant="secondary" />}>
            <TimerIcon data-icon="inline-start" />
            {p.label}
          </HoverCardTrigger>
          <HoverCardContent className="w-52">
            <p className="font-medium">{p.label}</p>
            <p className="text-muted-foreground">
              Opens after {p.delay}ms, closes after {p.closeDelay}ms.
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}`,
  },
  {
    name: "CommitHashHoverCard",
    description: "Short commit hashes in a deploy log that preview the commit message and author.",
    code: `
const deploys = [
  { sha: "a3f91c2", message: "Cache pricing table on the edge", author: "Ines Duarte", initials: "ID", when: "12 min ago", env: "Production" },
  { sha: "7be02d4", message: "Bump image optimizer to v3", author: "Rafael Moreno", initials: "RM", when: "1 hr ago", env: "Preview" },
]

export default function CommitHashHoverCard() {
  return (
    <div className="w-full max-w-sm divide-y border text-sm">
      {deploys.map((d) => (
        <div key={d.sha} className="flex items-center gap-3 px-3 py-2">
          <span className="size-2 rounded-full bg-emerald-500" />
          <span className="flex-1">{d.env}</span>
          <HoverCard>
            <HoverCardTrigger href="#" className="bg-muted px-1.5 py-0.5 font-mono text-xs hover:underline">
              {d.sha}
            </HoverCardTrigger>
            <HoverCardContent align="end" className="w-64">
              <p className="font-medium">{d.message}</p>
              <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                <Avatar size="sm">
                  <AvatarFallback>{d.initials}</AvatarFallback>
                </Avatar>
                {d.author} committed {d.when}
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "PackageVersionHoverCard",
    description: "A dependency version badge that previews what changed in the latest release.",
    code: `
export default function PackageVersionHoverCard() {
  return (
    <div className="flex w-full max-w-xs items-center justify-between border p-3 text-sm">
      <div className="flex items-center gap-2">
        <PackageIcon className="size-4 text-muted-foreground" />
        <span className="font-mono">@kestrel/forms</span>
      </div>
      <HoverCard>
        <HoverCardTrigger render={<Badge variant="secondary" className="cursor-default font-mono" />}>
          2.4.0 → 2.5.1
        </HoverCardTrigger>
        <HoverCardContent align="end" className="w-64">
          <p className="mb-1.5 font-medium">What&apos;s new in 2.5</p>
          <ul className="flex list-disc flex-col gap-1 ps-4 text-muted-foreground">
            <li>Async field validators with debounce</li>
            <li>Smaller bundle (−3.2 KB gzip)</li>
            <li>Fixed focus jump on array fields</li>
          </ul>
          <p className="mt-2 text-muted-foreground">No breaking changes</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}`,
  },
  {
    name: "KanbanTaskHoverCard",
    description: "A kanban card that previews assignee, due date, priority, and subtask progress.",
    code: `
export default function KanbanTaskHoverCard() {
  const done = 3
  const total = 5

  return (
    <div className="w-full max-w-[16rem] bg-muted/50 p-2">
      <p className="mb-2 px-1 text-xs font-medium text-muted-foreground">IN PROGRESS · 1</p>
      <HoverCard>
        <HoverCardTrigger render={<div className="cursor-grab border bg-background p-3 text-sm shadow-xs" />}>
          <p className="font-medium">Migrate invoices to new PDF engine</p>
          <p className="mt-1 text-xs text-muted-foreground">FIN-218</p>
        </HoverCardTrigger>
        <HoverCardContent side="right" align="start" className="flex w-60 flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-medium">FIN-218</span>
            <Badge variant="destructive">High</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <AvatarFallback>CL</AvatarFallback>
            </Avatar>
            Chloé Laurent
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarIcon className="size-3.5" />
            Due Friday, Apr 11
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtasks</span>
              <span>
                {done}/{total}
              </span>
            </div>
            <div className="h-1.5 bg-muted">
              <div className="h-full bg-primary" style={{ width: (done / total) * 100 + "%" }} />
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}`,
  },
  {
    name: "InvoiceLineItemsHoverCard",
    description: "Billing history rows where the invoice number previews its line items and total.",
    code: `
const invoices = [
  { id: "INV-0092", date: "Mar 1, 2025", lines: [["Team plan × 8 seats", "$144.00"], ["Extra storage", "$6.00"]], total: "$150.00" },
  { id: "INV-0081", date: "Feb 1, 2025", lines: [["Team plan × 6 seats", "$108.00"]], total: "$108.00" },
]

export default function InvoiceLineItemsHoverCard() {
  return (
    <div className="w-full max-w-sm divide-y border text-sm">
      {invoices.map((inv) => (
        <div key={inv.id} className="flex items-center justify-between px-3 py-2">
          <HoverCard>
            <HoverCardTrigger href="#" className="flex items-center gap-2 hover:underline">
              <ReceiptIcon className="size-4 text-muted-foreground" />
              {inv.id}
            </HoverCardTrigger>
            <HoverCardContent align="start" className="w-64">
              <p className="mb-2 font-medium">
                {inv.id} · {inv.date}
              </p>
              <div className="flex flex-col gap-1">
                {inv.lines.map(([label, amount]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-muted-foreground">{label}</span>
                    <span>{amount}</span>
                  </div>
                ))}
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>{inv.total}</span>
              </div>
            </HoverCardContent>
          </HoverCard>
          <Badge variant="secondary">Paid</Badge>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ColorTokenHoverCard",
    description: "A palette of color swatches that reveal the token name, hex value, and contrast rating.",
    code: `
const swatches = [
  { token: "brand-500", hex: "#6366F1", contrast: "4.6:1 AA" },
  { token: "success-500", hex: "#10B981", contrast: "3.1:1 AA Large" },
  { token: "warning-500", hex: "#F59E0B", contrast: "2.2:1 Fail" },
  { token: "danger-500", hex: "#EF4444", contrast: "3.8:1 AA Large" },
  { token: "slate-700", hex: "#334155", contrast: "10.4:1 AAA" },
]

export default function ColorTokenHoverCard() {
  return (
    <div className="flex gap-2">
      {swatches.map((s) => (
        <HoverCard key={s.token}>
          <HoverCardTrigger
            delay={50}
            render={<button type="button" aria-label={s.token} className="size-10 ring-1 ring-foreground/10" style={{ background: s.hex }} />}
          />
          <HoverCardContent side="top" className="w-44">
            <div className="mb-2 h-10 w-full" style={{ background: s.hex }} />
            <p className="font-mono font-medium">{s.token}</p>
            <p className="font-mono text-muted-foreground">{s.hex}</p>
            <p className="mt-1">On white: {s.contrast}</p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}`,
  },
  {
    name: "CourseLessonHoverCard",
    description: "Course syllabus lessons that preview duration, resources, and completion progress.",
    code: `
const lessons = [
  { title: "Intro to layout grids", minutes: 12, resources: 2, progress: 100 },
  { title: "Responsive breakpoints", minutes: 18, resources: 3, progress: 45 },
  { title: "Fluid typography", minutes: 22, resources: 1, progress: 0 },
]

export default function CourseLessonHoverCard() {
  return (
    <ol className="flex w-full max-w-xs flex-col gap-1 text-sm">
      {lessons.map((lesson, i) => (
        <li key={lesson.title}>
          <HoverCard>
            <HoverCardTrigger href="#" className="flex items-center gap-2 px-2 py-1.5 hover:bg-muted">
              {lesson.progress === 100 ? (
                <CircleCheckIcon className="size-4 text-emerald-600" />
              ) : (
                <PlayCircleIcon className="size-4 text-muted-foreground" />
              )}
              {i + 1}. {lesson.title}
            </HoverCardTrigger>
            <HoverCardContent side="right" className="flex w-52 flex-col gap-2">
              <p className="font-medium">{lesson.title}</p>
              <div className="flex gap-3 text-muted-foreground">
                <span>{lesson.minutes} min</span>
                <span>{lesson.resources} resources</span>
              </div>
              <div className="h-1.5 bg-muted">
                <div className="h-full bg-primary" style={{ width: lesson.progress + "%" }} />
              </div>
              <p className="text-muted-foreground">{lesson.progress}% complete</p>
            </HoverCardContent>
          </HoverCard>
        </li>
      ))}
    </ol>
  )
}`,
  },
  {
    name: "OrgChartHoverCard",
    description: "Org chart nodes that reveal each employee's department, manager, and office.",
    code: `
const reports = [
  { name: "Tariq Aziz", initials: "TA", title: "Eng Manager", dept: "Platform", office: "Austin" },
  { name: "Sofia Rossi", initials: "SR", title: "Design Lead", dept: "Product Design", office: "Milan" },
]

export default function OrgChartHoverCard() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="border bg-muted/50 px-3 py-2 text-center text-sm">
        <p className="font-medium">Helena Brandt</p>
        <p className="text-xs text-muted-foreground">VP Product</p>
      </div>
      <div className="h-4 w-px bg-border" />
      <div className="flex gap-3">
        {reports.map((r) => (
          <HoverCard key={r.name}>
            <HoverCardTrigger render={<div className="flex cursor-default items-center gap-2 border px-3 py-2 text-sm" />}>
              <Avatar size="sm">
                <AvatarFallback>{r.initials}</AvatarFallback>
              </Avatar>
              <span>{r.name}</span>
            </HoverCardTrigger>
            <HoverCardContent className="w-52">
              <p className="font-medium">{r.title}</p>
              <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5">
                <dt className="text-muted-foreground">Department</dt>
                <dd>{r.dept}</dd>
                <dt className="text-muted-foreground">Reports to</dt>
                <dd>Helena Brandt</dd>
                <dt className="text-muted-foreground">Office</dt>
                <dd>{r.office}</dd>
              </dl>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "MapPinHoverCard",
    description: "Pins on an SVG map that preview venue name, rating, and opening hours.",
    code: `
const pins = [
  { name: "Copper Kettle Café", x: "22%", y: "35%", rating: 4.6, hours: "Open until 6 PM" },
  { name: "Riverside Books", x: "58%", y: "60%", rating: 4.8, hours: "Open until 9 PM" },
  { name: "Juniper Gym", x: "76%", y: "25%", rating: 4.2, hours: "Open 24 hours" },
]

export default function MapPinHoverCard() {
  return (
    <div className="relative h-48 w-full max-w-sm overflow-hidden border bg-muted/40">
      <svg className="absolute inset-0 size-full text-border" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M0 70 C30 60 50 80 100 55" fill="none" stroke="currentColor" strokeWidth="6" />
        <path d="M40 0 L45 100" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
      {pins.map((pin) => (
        <HoverCard key={pin.name}>
          <HoverCardTrigger
            render={
              <button
                type="button"
                aria-label={pin.name}
                className="absolute -translate-x-1/2 -translate-y-full text-primary"
                style={{ left: pin.x, top: pin.y }}
              />
            }
          >
            <MapPinIcon className="size-6 fill-background" />
          </HoverCardTrigger>
          <HoverCardContent side="top" className="w-48">
            <p className="font-medium">{pin.name}</p>
            <p className="flex items-center gap-1 text-muted-foreground">
              <StarIcon className="size-3 fill-amber-400 text-amber-400" />
              {pin.rating} · {pin.hours}
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}`,
  },
  {
    name: "AchievementBadgeHoverCard",
    description: "Profile achievement badges that explain how each one was earned and when.",
    code: `
const badges = [
  { name: "First Ship", icon: RocketIcon, earned: "Jan 4, 2025", how: "Deployed your first project to production.", tone: "bg-violet-500/15 text-violet-600" },
  { name: "Bug Hunter", icon: BugIcon, earned: "Feb 19, 2025", how: "Closed 25 bug reports in a single month.", tone: "bg-rose-500/15 text-rose-600" },
  { name: "Mentor", icon: GraduationCapIcon, earned: "Mar 2, 2025", how: "Reviewed 50 pull requests from new teammates.", tone: "bg-emerald-500/15 text-emerald-600" },
]

export default function AchievementBadgeHoverCard() {
  return (
    <div className="flex gap-3">
      {badges.map((b) => (
        <HoverCard key={b.name}>
          <HoverCardTrigger render={<span className={cn("flex size-12 cursor-default items-center justify-center rounded-full", b.tone)} />}>
            <b.icon className="size-5" />
          </HoverCardTrigger>
          <HoverCardContent side="top" className="w-52 text-center">
            <p className="font-medium">{b.name}</p>
            <p className="text-muted-foreground">{b.how}</p>
            <p className="mt-2 text-[10px] tracking-wide text-muted-foreground uppercase">Earned {b.earned}</p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}`,
  },
  {
    name: "StorageBreakdownHoverCard",
    description: "A segmented storage usage bar where each segment reveals its category size and file count.",
    code: `
const segments = [
  { label: "Documents", size: 18.4, files: 2310, color: "bg-blue-500" },
  { label: "Media", size: 31.2, files: 840, color: "bg-violet-500" },
  { label: "Backups", size: 12.0, files: 14, color: "bg-amber-500" },
]
const capacity = 100

export default function StorageBreakdownHoverCard() {
  const used = segments.reduce((sum, s) => sum + s.size, 0)

  return (
    <div className="w-full max-w-sm">
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium">Storage</span>
        <span className="text-muted-foreground">
          {used.toFixed(1)} GB of {capacity} GB
        </span>
      </div>
      <div className="flex h-3 w-full bg-muted">
        {segments.map((s) => (
          <HoverCard key={s.label}>
            <HoverCardTrigger
              delay={0}
              closeDelay={0}
              render={<div className={cn("h-full cursor-default", s.color)} style={{ width: (s.size / capacity) * 100 + "%" }} />}
            />
            <HoverCardContent side="top" className="w-44">
              <div className="flex items-center gap-2 font-medium">
                <span className={cn("size-2", s.color)} />
                {s.label}
              </div>
              <p className="text-muted-foreground">
                {s.size} GB · {s.files.toLocaleString()} files
              </p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "ChartBarHoverCard",
    description: "A simple bar chart where hovering a bar reveals the week's signups and change.",
    code: `
const weeks = [
  { label: "W1", value: 120, change: "+4%" },
  { label: "W2", value: 180, change: "+50%" },
  { label: "W3", value: 150, change: "−17%" },
  { label: "W4", value: 220, change: "+47%" },
  { label: "W5", value: 260, change: "+18%" },
]

export default function ChartBarHoverCard() {
  const max = Math.max(...weeks.map((w) => w.value))

  return (
    <div className="w-full max-w-xs">
      <p className="mb-3 text-sm font-medium">Weekly signups</p>
      <div className="flex h-36 items-end gap-3 border-b">
        {weeks.map((w) => (
          <HoverCard key={w.label}>
            <HoverCardTrigger
              delay={0}
              closeDelay={0}
              render={<div className="flex-1 cursor-default bg-primary/80 hover:bg-primary" style={{ height: (w.value / max) * 100 + "%" }} />}
            />
            <HoverCardContent side="top" className="w-36">
              <p className="text-muted-foreground">Week {w.label.slice(1)}</p>
              <p className="text-base font-semibold">{w.value} signups</p>
              <p className={w.change.startsWith("+") ? "text-emerald-600" : "text-destructive"}>{w.change} WoW</p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
      <div className="mt-1 flex gap-3 text-center text-xs text-muted-foreground">
        {weeks.map((w) => (
          <span key={w.label} className="flex-1">
            {w.label}
          </span>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "RatingDistributionHoverCard",
    description: "An average star rating that reveals the full review distribution on hover.",
    code: `
const distribution = [
  { stars: 5, count: 812 },
  { stars: 4, count: 241 },
  { stars: 3, count: 64 },
  { stars: 2, count: 18 },
  { stars: 1, count: 22 },
]

export default function RatingDistributionHoverCard() {
  const total = distribution.reduce((sum, d) => sum + d.count, 0)

  return (
    <HoverCard>
      <HoverCardTrigger href="#" className="flex items-center gap-1.5 text-sm">
        <span className="flex">
          {[0, 1, 2, 3, 4].map((i) => (
            <StarIcon key={i} className={cn("size-4", i < 4 ? "fill-amber-400 text-amber-400" : "text-muted-foreground")} />
          ))}
        </span>
        <span className="font-medium">4.6</span>
        <span className="text-muted-foreground underline underline-offset-4">({total.toLocaleString()} reviews)</span>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-60 flex-col gap-1.5">
        {distribution.map((d) => (
          <div key={d.stars} className="flex items-center gap-2">
            <span className="w-3">{d.stars}</span>
            <StarIcon className="size-3 fill-amber-400 text-amber-400" />
            <div className="h-1.5 flex-1 bg-muted">
              <div className="h-full bg-amber-400" style={{ width: (d.count / total) * 100 + "%" }} />
            </div>
            <span className="w-8 text-right text-muted-foreground">{Math.round((d.count / total) * 100)}%</span>
          </div>
        ))}
      </HoverCardContent>
    </HoverCard>
  )
}`,
  },
  {
    name: "RegionStatusHoverCard",
    description: "Service region status dots that reveal latency, uptime, and incident info.",
    code: `
const regions = [
  { code: "us-east", name: "US East", status: "operational", latency: "38 ms", uptime: "99.99%" },
  { code: "eu-west", name: "EU West", status: "degraded", latency: "212 ms", uptime: "99.71%" },
  { code: "ap-south", name: "Asia Pacific", status: "operational", latency: "64 ms", uptime: "99.98%" },
]

export default function RegionStatusHoverCard() {
  return (
    <div className="flex w-full max-w-sm flex-wrap justify-center gap-2">
      {regions.map((r) => (
        <HoverCard key={r.code}>
          <HoverCardTrigger render={<div className="flex cursor-default items-center gap-2 border px-3 py-1.5 text-sm" />}>
            <span className={cn("size-2 rounded-full", r.status === "operational" ? "bg-emerald-500" : "bg-amber-500")} />
            {r.name}
          </HoverCardTrigger>
          <HoverCardContent className="w-56">
            <div className="flex items-center justify-between">
              <span className="font-mono font-medium">{r.code}</span>
              <Badge variant={r.status === "operational" ? "secondary" : "destructive"} className="capitalize">
                {r.status}
              </Badge>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div>
                <p className="text-muted-foreground">p95 latency</p>
                <p className="font-medium">{r.latency}</p>
              </div>
              <div>
                <p className="text-muted-foreground">30-day uptime</p>
                <p className="font-medium">{r.uptime}</p>
              </div>
            </div>
            {r.status !== "operational" && (
              <p className="mt-2 flex items-center gap-1.5 text-amber-600">
                <TriangleAlertIcon className="size-3.5" />
                Elevated error rates on uploads
              </p>
            )}
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}`,
  },
  {
    name: "RelativeTimestampHoverCard",
    description: "A relative timestamp that reveals the exact time across several time zones.",
    code: `
const zones = [
  { label: "Your time", value: "Mar 14, 2025 · 2:08 PM" },
  { label: "UTC", value: "Mar 14, 2025 · 6:08 PM" },
  { label: "Tokyo", value: "Mar 15, 2025 · 3:08 AM" },
]

export default function RelativeTimestampHoverCard() {
  return (
    <p className="text-sm text-muted-foreground">
      Last edited by Grace Liu{" "}
      <HoverCard>
        <HoverCardTrigger render={<time dateTime="2025-03-14T18:08:00Z" className="cursor-default underline decoration-dotted underline-offset-4" />}>
          3 hours ago
        </HoverCardTrigger>
        <HoverCardContent className="w-60">
          <div className="flex flex-col gap-1">
            {zones.map((z) => (
              <div key={z.label} className="flex justify-between gap-3">
                <span className="text-muted-foreground">{z.label}</span>
                <span className="font-mono">{z.value}</span>
              </div>
            ))}
          </div>
        </HoverCardContent>
      </HoverCard>
    </p>
  )
}`,
  },
  {
    name: "InboxSenderHoverCard",
    description: "An email inbox where sender names preview their organization and recent threads.",
    code: `
const emails = [
  { from: "Elena Petrova", initials: "EP", org: "Brightwater Legal", subject: "Contract redlines attached", threads: ["NDA follow-up", "Q2 retainer"] },
  { from: "Sam Whitfield", initials: "SW", org: "Ironleaf Supply", subject: "Shipment ETA moved to Monday", threads: ["PO #5521", "Pallet count"] },
]

export default function InboxSenderHoverCard() {
  return (
    <div className="w-full max-w-sm divide-y border text-sm">
      {emails.map((e) => (
        <div key={e.from} className="flex flex-col gap-0.5 px-3 py-2">
          <HoverCard>
            <HoverCardTrigger href="#" className="w-fit font-medium hover:underline">
              {e.from}
            </HoverCardTrigger>
            <HoverCardContent align="start" className="w-64">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>{e.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{e.from}</p>
                  <p className="flex items-center gap-1 text-muted-foreground">
                    <Building2Icon className="size-3" />
                    {e.org}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-muted-foreground">Recent threads</p>
              <ul className="mt-1 flex flex-col gap-0.5">
                {e.threads.map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <MailIcon className="size-3 text-muted-foreground" />
                    {t}
                  </li>
                ))}
              </ul>
            </HoverCardContent>
          </HoverCard>
          <span className="truncate text-muted-foreground">{e.subject}</span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "SocialFollowHoverCard",
    description: "A post author card with a cover banner and a follow button that toggles state.",
    code: `
export default function SocialFollowHoverCard() {
  const [following, setFollowing] = React.useState(false)

  return (
    <div className="w-full max-w-sm border p-3 text-sm">
      <HoverCard>
        <HoverCardTrigger href="#" className="font-medium hover:underline">
          Noor Al-Sayed
        </HoverCardTrigger>
        <HoverCardContent align="start" className="w-72 p-0">
          <div className="h-16 bg-gradient-to-r from-teal-400 to-sky-500" />
          <div className="-mt-6 px-3 pb-3">
            <Avatar size="lg" className="ring-2 ring-popover">
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
            <div className="mt-1 flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold">Noor Al-Sayed</p>
                <p className="text-muted-foreground">Illustrator · Amman</p>
              </div>
              <Button size="xs" variant={following ? "outline" : "default"} onClick={() => setFollowing((f) => !f)}>
                {following ? "Following" : "Follow"}
              </Button>
            </div>
            <p className="mt-2 text-muted-foreground">
              <strong className="text-foreground">{following ? "9,402" : "9,401"}</strong> followers
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
      <p className="mt-1 text-muted-foreground">Sketchbook dump from this weekend&apos;s market. Which one should I ink?</p>
    </div>
  )
}`,
  },
  {
    name: "ContactActionsHoverCard",
    description: "A contact hover card with quick actions to message, call, or schedule a meeting.",
    code: `
export default function ContactActionsHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger href="#" className="flex items-center gap-2 text-sm">
        <Avatar size="sm">
          <AvatarFallback>FO</AvatarFallback>
        </Avatar>
        <span className="font-medium hover:underline">Fatima Osei</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <p className="text-sm font-medium">Fatima Osei</p>
        <p className="text-muted-foreground">Account Executive · EMEA</p>
        <div className="mt-3 grid grid-cols-3 gap-1">
          <Button variant="outline" size="sm">
            <MessageSquareIcon />
            Chat
          </Button>
          <Button variant="outline" size="sm">
            <PhoneIcon />
            Call
          </Button>
          <Button variant="outline" size="sm">
            <CalendarPlusIcon />
            Meet
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`,
  },
  {
    name: "ApiEndpointHoverCard",
    description: "API reference endpoints that preview method, parameters, and rate limits.",
    code: `
const endpoints = [
  { method: "GET", path: "/v1/invoices", params: ["status", "limit", "cursor"], rate: "100 req/min" },
  { method: "POST", path: "/v1/invoices", params: ["customer_id", "items", "due_date"], rate: "30 req/min" },
  { method: "DELETE", path: "/v1/invoices/:id", params: ["id"], rate: "10 req/min" },
]
const tone: Record<string, string> = {
  GET: "text-emerald-600",
  POST: "text-blue-600",
  DELETE: "text-destructive",
}

export default function ApiEndpointHoverCard() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1 font-mono text-xs">
      {endpoints.map((e) => (
        <HoverCard key={e.method + e.path}>
          <HoverCardTrigger href="#" className="flex gap-2 px-2 py-1.5 hover:bg-muted">
            <span className={cn("w-12 font-semibold", tone[e.method])}>{e.method}</span>
            {e.path}
          </HoverCardTrigger>
          <HoverCardContent side="right" className="w-56 font-sans">
            <p className="font-mono font-medium">{e.path}</p>
            <p className="mt-2 text-muted-foreground">Parameters</p>
            <div className="mt-1 flex flex-wrap gap-1">
              {e.params.map((p) => (
                <Badge key={p} variant="outline" className="font-mono">
                  {p}
                </Badge>
              ))}
            </div>
            <p className="mt-2 flex items-center gap-1.5 text-muted-foreground">
              <GaugeIcon className="size-3.5" />
              {e.rate}
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}`,
  },
  {
    name: "RolePermissionsHoverCard",
    description: "Role badges in a members list that reveal exactly which permissions each role grants.",
    code: `
const permissions = ["View projects", "Edit content", "Manage billing", "Invite members"]
const roles: Record<string, boolean[]> = {
  Admin: [true, true, true, true],
  Editor: [true, true, false, true],
  Viewer: [true, false, false, false],
}
const members = [
  { name: "Oliver Grant", role: "Admin" },
  { name: "Zara Malik", role: "Editor" },
  { name: "Luca Bianchi", role: "Viewer" },
]

export default function RolePermissionsHoverCard() {
  return (
    <div className="w-full max-w-xs divide-y border text-sm">
      {members.map((m) => (
        <div key={m.name} className="flex items-center justify-between px-3 py-2">
          <span>{m.name}</span>
          <HoverCard>
            <HoverCardTrigger render={<Badge variant="outline" className="cursor-default" />}>{m.role}</HoverCardTrigger>
            <HoverCardContent align="end" className="w-48">
              <p className="mb-1.5 font-medium">{m.role} can</p>
              <ul className="flex flex-col gap-1">
                {permissions.map((p, i) => (
                  <li key={p} className={cn("flex items-center gap-2", !roles[m.role]![i] && "text-muted-foreground line-through")}>
                    {roles[m.role]![i] ? <CheckIcon className="size-3.5 text-emerald-600" /> : <XIcon className="size-3.5" />}
                    {p}
                  </li>
                ))}
              </ul>
            </HoverCardContent>
          </HoverCard>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "FlightSegmentHoverCard",
    description: "Flight numbers in a trip itinerary that preview departure, arrival, and gate details.",
    code: `
const flights = [
  { code: "SK 1421", from: "CPH", to: "AMS", dep: "07:35", arr: "09:05", gate: "B14", seat: "12A" },
  { code: "SK 2877", from: "AMS", to: "LIS", dep: "10:40", arr: "12:30", gate: "D7", seat: "8C" },
]

export default function FlightSegmentHoverCard() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      {flights.map((f) => (
        <div key={f.code} className="flex items-center justify-between border px-3 py-2 text-sm">
          <span className="flex items-center gap-2">
            <PlaneIcon className="size-4 text-muted-foreground" />
            {f.from} → {f.to}
          </span>
          <HoverCard>
            <HoverCardTrigger href="#" className="font-mono text-xs hover:underline">
              {f.code}
            </HoverCardTrigger>
            <HoverCardContent align="end" className="w-60">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{f.dep}</p>
                  <p className="text-muted-foreground">{f.from}</p>
                </div>
                <PlaneTakeoffIcon className="size-4 text-muted-foreground" />
                <div className="text-right">
                  <p className="text-lg font-semibold">{f.arr}</p>
                  <p className="text-muted-foreground">{f.to}</p>
                </div>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between">
                <span>Gate {f.gate}</span>
                <span>Seat {f.seat}</span>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "WidthVariantsHoverCard",
    description: "Compact, default, and wide hover cards sized for different amounts of content.",
    code: `
export default function WidthVariantsHoverCard() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <HoverCard>
        <HoverCardTrigger render={<Button variant="outline" size="sm" />}>Compact</HoverCardTrigger>
        <HoverCardContent className="w-40 p-2">Autosave is on.</HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger render={<Button variant="outline" size="sm" />}>Default</HoverCardTrigger>
        <HoverCardContent>
          <p className="font-medium">Version history</p>
          <p className="text-muted-foreground">We keep 30 days of versions for every file in this workspace.</p>
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger render={<Button variant="outline" size="sm" />}>Wide</HoverCardTrigger>
        <HoverCardContent className="grid w-80 grid-cols-2 gap-3 p-3">
          <div>
            <p className="font-medium">Drafts</p>
            <p className="text-muted-foreground">Only visible to you until published.</p>
          </div>
          <div>
            <p className="font-medium">Published</p>
            <p className="text-muted-foreground">Visible to everyone with the link.</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}`,
  },
  {
    name: "PayloadHandleHoverCard",
    description: "Several triggers sharing one hover card via a handle, each passing its own payload.",
    code: `
type Tag = { name: string; count: number; description: string }

const handle = PreviewCard.createHandle<Tag>()
const tags: Tag[] = [
  { name: "accessibility", count: 128, description: "Keyboard, screen reader, and contrast improvements." },
  { name: "performance", count: 94, description: "Load time, bundle size, and rendering speed." },
  { name: "onboarding", count: 47, description: "First-run experience and activation flows." },
]

export default function PayloadHandleHoverCard() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {tags.map((tag) => (
        <HoverCardTrigger key={tag.name} handle={handle} payload={tag} render={<Badge variant="secondary" className="cursor-default" />}>
          #{tag.name}
        </HoverCardTrigger>
      ))}
      <HoverCard handle={handle}>
        {({ payload }) => {
          const active = payload as Tag | undefined
          return (
          <HoverCardContent className="w-56">
            {active && (
              <>
                <p className="font-medium">#{active.name}</p>
                <p className="text-muted-foreground">{active.description}</p>
                <p className="mt-2">{active.count} open issues</p>
              </>
            )}
          </HoverCardContent>
          )
        }}
      </HoverCard>
    </div>
  )
}`,
    imports: { "@base-ui/react/preview-card": ["PreviewCard"] },
  },
  {
    name: "DisabledSeatHoverCard",
    description: "A seat map where unavailable seats explain why they cannot be booked.",
    code: `
const seats = [
  { id: "4A", state: "free" },
  { id: "4B", state: "taken", note: "Already booked by another passenger." },
  { id: "4C", state: "free" },
  { id: "5A", state: "blocked", note: "Exit row: passengers must be 15 or older." },
  { id: "5B", state: "free" },
  { id: "5C", state: "taken", note: "Already booked by another passenger." },
]

export default function DisabledSeatHoverCard() {
  return (
    <div className="grid w-fit grid-cols-3 gap-2">
      {seats.map((seat) =>
        seat.state === "free" ? (
          <Button key={seat.id} variant="outline" size="icon">
            {seat.id}
          </Button>
        ) : (
          <HoverCard key={seat.id}>
            <HoverCardTrigger
              delay={100}
              render={<span className="flex size-8 cursor-not-allowed items-center justify-center bg-muted text-xs text-muted-foreground line-through" />}
            >
              {seat.id}
            </HoverCardTrigger>
            <HoverCardContent side="right" className="w-48">
              <p className="flex items-center gap-1.5 font-medium">
                <BanIcon className="size-3.5" />
                Seat {seat.id} unavailable
              </p>
              <p className="text-muted-foreground">{seat.note}</p>
            </HoverCardContent>
          </HoverCard>
        )
      )}
    </div>
  )
}`,
  },
  {
    name: "EmptyProfileHoverCard",
    description: "A hover card for a deactivated or unknown user that shows an empty fallback state.",
    code: `
export default function EmptyProfileHoverCard() {
  return (
    <p className="max-w-sm text-sm text-muted-foreground">
      Originally created by{" "}
      <HoverCard>
        <HoverCardTrigger href="#" className="text-muted-foreground line-through hover:text-foreground">
          @former-contractor
        </HoverCardTrigger>
        <HoverCardContent className="flex w-56 flex-col items-center gap-2 py-4 text-center">
          <span className="flex size-10 items-center justify-center rounded-full bg-muted">
            <UserXIcon className="size-5 text-muted-foreground" />
          </span>
          <p className="font-medium">Account deactivated</p>
          <p className="text-muted-foreground">This user no longer has access to the workspace.</p>
        </HoverCardContent>
      </HoverCard>{" "}
      in 2023.
    </p>
  )
}`,
  },
  {
    name: "LoadingPreviewHoverCard",
    description: "A link preview that shows skeleton placeholders while content loads after opening.",
    code: `
export default function LoadingPreviewHoverCard() {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <HoverCard
      onOpenChange={(open) => {
        if (open) {
          setLoaded(false)
          setTimeout(() => setLoaded(true), 900)
        }
      }}
    >
      <HoverCardTrigger href="#" className="text-sm underline underline-offset-4">
        docs.pinecrest.dev/webhooks
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        {loaded ? (
          <div className="flex flex-col gap-1">
            <p className="font-medium">Webhooks · Pinecrest Docs</p>
            <p className="text-muted-foreground">Receive signed HTTP callbacks whenever a payment, refund, or dispute changes state.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3.5 w-2/3" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  )
}`,
  },
]

export default examples
