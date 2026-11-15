import type { Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "ButtonVariantsLoading",
    description: "Spinner inside each button variant to show a pending action.",
    code: `
const variants = ["default", "secondary", "outline", "ghost", "destructive"] as const

export default function ButtonVariantsLoading() {
  return (
    <div className="flex max-w-md flex-wrap items-center justify-center gap-2">
      {variants.map((variant) => (
        <Button key={variant} variant={variant} disabled>
          <Spinner data-icon="inline-start" />
          <span className="capitalize">{variant}</span>
        </Button>
      ))}
    </div>
  )
}`,
  },
  {
    name: "SpinnerColors",
    description: "Spinners tinted with semantic and accent text colors.",
    code: `
const colors = [
  { label: "Foreground", className: "" },
  { label: "Muted", className: "text-muted-foreground" },
  { label: "Primary", className: "text-primary" },
  { label: "Success", className: "text-emerald-600 dark:text-emerald-400" },
  { label: "Warning", className: "text-amber-600 dark:text-amber-400" },
  { label: "Danger", className: "text-destructive" },
]

export default function SpinnerColors() {
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-4">
      {colors.map((color) => (
        <div key={color.label} className="flex flex-col items-center gap-2 border py-4">
          <Spinner className={cn("size-5", color.className)} />
          <span className="text-xs text-muted-foreground">{color.label}</span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "SpinnerStrokeWidths",
    description: "Spinners with thin, regular, and bold stroke widths.",
    code: `
const strokes = [1, 1.5, 2, 3]

export default function SpinnerStrokeWidths() {
  return (
    <div className="flex items-end gap-8">
      {strokes.map((stroke) => (
        <div key={stroke} className="flex flex-col items-center gap-2">
          <Spinner className="size-8" strokeWidth={stroke} />
          <span className="font-mono text-xs text-muted-foreground">{stroke}px</span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "SpinnerSpeeds",
    description: "Spinners with slow, default, and fast rotation via animation duration.",
    code: `
const speeds = [
  { label: "Slow", duration: "2s" },
  { label: "Default", duration: "1s" },
  { label: "Fast", duration: "0.5s" },
]

export default function SpinnerSpeeds() {
  return (
    <div className="flex items-center gap-10">
      {speeds.map((speed) => (
        <div key={speed.label} className="flex flex-col items-center gap-2">
          <Spinner className="size-6" style={{ animationDuration: speed.duration }} />
          <span className="text-xs text-muted-foreground">
            {speed.label} &middot; {speed.duration}
          </span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "BadgeStatusSpinners",
    description: "Status badges with inline spinners for in-progress background states.",
    code: `
export default function BadgeStatusSpinners() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge>
        <Spinner />
        Deploying
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        Syncing
      </Badge>
      <Badge variant="outline">
        <Spinner />
        Indexing 2,140 files
      </Badge>
      <Badge variant="destructive">
        <Spinner />
        Rolling back
      </Badge>
    </div>
  )
}`,
  },
  {
    name: "SearchInputSpinner",
    description: "Search field that shows a trailing spinner while results are fetched.",
    code: `
export default function SearchInputSpinner() {
  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search customers" defaultValue="harbor" />
      <InputGroupAddon align="inline-end">
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
  )
}`,
  },
  {
    name: "UsernameAvailabilityCheck",
    description: "Username input that shows a spinner while checking availability, then a result.",
    code: `
const taken = ["admin", "maya", "support"]

export default function UsernameAvailabilityCheck() {
  const [value, setValue] = React.useState("maya.chen")
  const [checking, setChecking] = React.useState(false)
  const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined)

  const handleChange = (next: string) => {
    setValue(next)
    clearTimeout(timer.current)
    setChecking(Boolean(next))
    timer.current = setTimeout(() => setChecking(false), 700)
  }

  const available = !taken.includes(value.toLowerCase())

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput id="username" value={value} onChange={(e) => handleChange(e.target.value)} />
        <InputGroupAddon align="inline-end">
          {checking ? (
            <Spinner />
          ) : value ? (
            available ? (
              <CheckIcon className="text-emerald-600 dark:text-emerald-400" />
            ) : (
              <XIcon className="text-destructive" />
            )
          ) : null}
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>
        {checking ? "Checking availability..." : value && !available ? "That username is taken." : "Try typing admin to see a conflict."}
      </FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "EmptyStateLoading",
    description: "Empty state used as a loading placeholder with a spinner as its media.",
    code: `
export default function EmptyStateLoading() {
  return (
    <Empty className="w-full max-w-sm border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>Loading your projects</EmptyTitle>
        <EmptyDescription>Fetching the latest activity from 12 workspaces.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
      </EmptyContent>
    </Empty>
  )
}`,
  },
  {
    name: "CardLoadingOverlay",
    description: "Card whose content is dimmed under a centered spinner overlay while refreshing.",
    code: `
export default function CardLoadingOverlay() {
  return (
    <Card className="relative w-full max-w-sm">
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
        <CardDescription>Last 30 days</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <span className="text-3xl font-semibold tabular-nums">$48,210</span>
        <span className="text-xs text-muted-foreground">+12.4% from previous period</span>
      </CardContent>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background/70 backdrop-blur-[1px]">
        <Spinner className="size-6" />
        <span className="text-xs text-muted-foreground">Refreshing data</span>
      </div>
    </Card>
  )
}`,
  },
  {
    name: "TableRowStatusSpinner",
    description: "Invoices table where pending rows show a spinner in the status column.",
    code: `
const invoices = [
  { id: "INV-2051", client: "Northwind Studio", amount: "$1,240.00", status: "Paid" },
  { id: "INV-2052", client: "Pine Hollow", amount: "$860.00", status: "Processing" },
  { id: "INV-2053", client: "Orbit Labs", amount: "$3,100.00", status: "Processing" },
  { id: "INV-2054", client: "Fernwood", amount: "$420.00", status: "Paid" },
]

export default function TableRowStatusSpinner() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-mono text-xs">{invoice.id}</TableCell>
              <TableCell>{invoice.client}</TableCell>
              <TableCell>
                {invoice.status === "Processing" ? (
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Spinner className="size-3" />
                    Processing
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <CheckIcon className="size-3 text-emerald-600 dark:text-emerald-400" />
                    Paid
                  </span>
                )}
              </TableCell>
              <TableCell className="text-right tabular-nums">{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "FileUploadQueue",
    description: "Upload queue where in-progress files show a spinner beside done and failed files.",
    code: `
const files = [
  { name: "brand-guidelines.pdf", size: "4.2 MB", state: "done" },
  { name: "hero-video.mp4", size: "86.1 MB", state: "uploading" },
  { name: "pricing-table.xlsx", size: "312 KB", state: "uploading" },
  { name: "logo-final.sketch", size: "18.4 MB", state: "failed" },
]

export default function FileUploadQueue() {
  return (
    <ItemGroup className="w-full max-w-sm border">
      {files.map((file) => (
        <Item key={file.name} size="sm">
          <ItemMedia variant="icon">
            <FileIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="truncate">{file.name}</ItemTitle>
            <ItemDescription>
              {file.state === "failed" ? "Upload failed" : file.size}
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            {file.state === "uploading" && <Spinner className="text-muted-foreground" />}
            {file.state === "done" && <CircleCheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />}
            {file.state === "failed" && (
              <Button variant="ghost" size="icon-xs" aria-label="Retry upload">
                <RotateCwIcon />
              </Button>
            )}
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}`,
  },
  {
    name: "DeploymentPipelineSteps",
    description: "CI pipeline steps where the running step shows a spinner between completed and queued steps.",
    code: `
const steps = [
  { label: "Install dependencies", time: "18s", state: "done" },
  { label: "Run tests", time: "1m 42s", state: "done" },
  { label: "Build production bundle", time: "running", state: "running" },
  { label: "Upload assets", time: "queued", state: "queued" },
  { label: "Promote to production", time: "queued", state: "queued" },
]

export default function DeploymentPipelineSteps() {
  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <span className="text-sm font-medium">Deploy #482</span>
        <Badge variant="secondary">
          <Spinner />
          In progress
        </Badge>
      </div>
      <ol className="flex flex-col gap-3 p-4">
        {steps.map((step) => (
          <li key={step.label} className="flex items-center gap-3 text-sm">
            {step.state === "done" && <CircleCheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />}
            {step.state === "running" && <Spinner className="text-primary" />}
            {step.state === "queued" && <CircleIcon className="size-4 text-muted-foreground/50" />}
            <span className={cn("flex-1", step.state === "queued" && "text-muted-foreground")}>{step.label}</span>
            <span className="font-mono text-xs text-muted-foreground">{step.time}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}`,
  },
  {
    name: "AssistantThinkingMessage",
    description: "Chat thread where the assistant's pending reply shows a spinner and thinking label.",
    code: `
export default function AssistantThinkingMessage() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="ml-auto max-w-[80%] bg-primary px-3 py-2 text-sm text-primary-foreground">
        Can you summarize last week&apos;s support tickets?
      </div>
      <div className="flex items-start gap-2">
        <Avatar className="size-7">
          <AvatarFallback className="text-[10px]">AI</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-2 border bg-muted/40 px-3 py-2 text-sm text-muted-foreground">
          <Spinner className="size-3.5" />
          Reading 214 tickets...
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "LoadMoreButton",
    description: "Load more button that shows a spinner while the next page of items is fetched.",
    code: `
const names = ["Amara Osei", "Theo Lindqvist", "Priya Raman", "Jonah Weller", "Lucia Ferro", "Kenji Arata"]

export default function LoadMoreButton() {
  const [count, setCount] = React.useState(3)
  const [loading, setLoading] = React.useState(false)

  const loadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setCount((c) => Math.min(names.length, c + 3))
      setLoading(false)
    }, 1200)
  }

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <div className="divide-y border">
        {names.slice(0, count).map((name) => (
          <div key={name} className="px-3 py-2 text-sm">
            {name}
          </div>
        ))}
      </div>
      <Button variant="outline" onClick={loadMore} disabled={loading || count >= names.length}>
        {loading && <Spinner data-icon="inline-start" />}
        {loading ? "Loading..." : count >= names.length ? "All members loaded" : "Load more"}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "SubmittingFormSpinner",
    description: "Sign-in form that disables its fields and shows a spinner in the submit button.",
    code: `
export default function SubmittingFormSpinner() {
  const [pending, setPending] = React.useState(false)

  return (
    <form
      className="w-full max-w-sm border p-4"
      onSubmit={(e) => {
        e.preventDefault()
        setPending(true)
        setTimeout(() => setPending(false), 1800)
      }}
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="login-email">Email</FieldLabel>
          <Input id="login-email" type="email" defaultValue="ines@quillpost.io" disabled={pending} />
        </Field>
        <Field>
          <FieldLabel htmlFor="login-password">Password</FieldLabel>
          <Input id="login-password" type="password" defaultValue="hunter22" disabled={pending} />
        </Field>
        <Button type="submit" disabled={pending}>
          {pending && <Spinner data-icon="inline-start" />}
          {pending ? "Signing in..." : "Sign in"}
        </Button>
      </FieldGroup>
    </form>
  )
}`,
  },
  {
    name: "InlineCalculatingText",
    description: "Order summary lines with small inline spinners for values still being calculated.",
    code: `
export default function InlineCalculatingText() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2 border p-4 text-sm">
      <div className="flex justify-between">
        <span className="text-muted-foreground">Subtotal</span>
        <span className="tabular-nums">$132.00</span>
      </div>
      <div className="flex justify-between">
        <span className="text-muted-foreground">Shipping</span>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Spinner className="size-3" />
          Calculating
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-muted-foreground">Tax</span>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Spinner className="size-3" />
          Calculating
        </span>
      </div>
      <Separator className="my-1" />
      <div className="flex justify-between font-medium">
        <span>Total</span>
        <span className="text-muted-foreground">--</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "FullPageLoader",
    description: "Centered app boot loader with a large spinner, product mark, and status line.",
    code: `
export default function FullPageLoader() {
  return (
    <div className="flex h-64 w-full max-w-md flex-col items-center justify-center gap-4 border bg-muted/30">
      <div className="flex items-center gap-2">
        <div className="size-6 bg-gradient-to-br from-indigo-500 to-cyan-400" />
        <span className="text-sm font-semibold tracking-tight">Lanternly</span>
      </div>
      <Spinner className="size-8 text-muted-foreground" strokeWidth={1.5} />
      <span className="text-xs text-muted-foreground">Preparing your workspace</span>
    </div>
  )
}`,
  },
  {
    name: "ImportWithProgress",
    description: "Contact import panel pairing a spinner with a progress bar and record counts.",
    code: `
export default function ImportWithProgress() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <Spinner className="text-primary" />
        <span className="text-sm font-medium">Importing contacts</span>
        <span className="ml-auto text-xs tabular-nums text-muted-foreground">64%</span>
      </div>
      <Progress value={64} />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>3,212 of 5,018 rows</span>
        <span>About 40s left</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ExportingNotice",
    description: "Floating notice with a spinner for a report export and a cancel action.",
    code: `
export default function ExportingNotice() {
  return (
    <div className="flex w-full max-w-sm items-center gap-3 border bg-popover p-3 text-popover-foreground shadow-lg">
      <div className="flex size-8 shrink-0 items-center justify-center bg-muted">
        <Spinner />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium">Exporting Q3 report</div>
        <div className="truncate text-xs text-muted-foreground">We&apos;ll email you a CSV when it&apos;s ready.</div>
      </div>
      <Button variant="ghost" size="sm">
        Cancel
      </Button>
    </div>
  )
}`,
  },
  {
    name: "AutosaveIndicator",
    description: "Note editor whose header shows a spinner while saving and a check once saved.",
    code: `
export default function AutosaveIndicator() {
  const [text, setText] = React.useState("Agenda: review onboarding drop-off, finalize Q4 hiring plan.")
  const [saving, setSaving] = React.useState(false)
  const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined)

  const handleChange = (next: string) => {
    setText(next)
    setSaving(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setSaving(false), 900)
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Weekly sync notes</span>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          {saving ? <Spinner className="size-3" /> : <CloudCheckIcon className="size-3.5" />}
          {saving ? "Saving..." : "Saved"}
        </span>
      </div>
      <Textarea value={text} onChange={(e) => handleChange(e.target.value)} rows={4} />
    </div>
  )
}`,
  },
  {
    name: "RefreshIconButton",
    description: "Icon-only refresh button that swaps its icon for a spinner while refreshing.",
    code: `
export default function RefreshIconButton() {
  const [loading, setLoading] = React.useState(false)
  const [updated, setUpdated] = React.useState("2 minutes ago")

  return (
    <div className="flex items-center gap-2 border py-1 ps-3 pe-1">
      <span className="text-xs text-muted-foreground">Updated {updated}</span>
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Refresh"
        disabled={loading}
        onClick={() => {
          setLoading(true)
          setTimeout(() => {
            setLoading(false)
            setUpdated("just now")
          }, 1000)
        }}
      >
        {loading ? <Spinner /> : <RefreshCwIcon />}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "PaymentProcessingCard",
    description: "Checkout processing screen with a spinner, amount, and a do-not-close warning.",
    code: `
export default function PaymentProcessingCard() {
  return (
    <Card className="w-full max-w-xs text-center">
      <CardContent className="flex flex-col items-center gap-4 py-4">
        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
          <Spinner className="size-7 text-primary" />
        </div>
        <div>
          <div className="text-2xl font-semibold tabular-nums">$249.00</div>
          <div className="text-sm text-muted-foreground">Processing payment</div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <CreditCardIcon className="size-3.5" />
          Visa ending in 4821
        </div>
        <p className="text-xs text-muted-foreground">Please don&apos;t close or refresh this window.</p>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "IntegrationConnectingItems",
    description: "Integrations list where connecting services show a spinner in place of a button.",
    code: `
const apps = [
  { name: "Calendar", description: "Sync events and availability", icon: CalendarIcon, state: "connected" },
  { name: "Mailbox", description: "Log customer emails", icon: MailIcon, state: "connecting" },
  { name: "Storage", description: "Attach files from your drive", icon: FolderIcon, state: "idle" },
]

export default function IntegrationConnectingItems() {
  return (
    <ItemGroup className="w-full max-w-sm gap-2">
      {apps.map((app) => (
        <Item key={app.name} variant="outline">
          <ItemMedia variant="icon">
            <app.icon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{app.name}</ItemTitle>
            <ItemDescription>{app.description}</ItemDescription>
          </ItemContent>
          <ItemActions>
            {app.state === "connecting" ? (
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Spinner className="size-3.5" />
                Connecting
              </span>
            ) : app.state === "connected" ? (
              <Badge variant="secondary">Connected</Badge>
            ) : (
              <Button size="sm" variant="outline">
                Connect
              </Button>
            )}
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}`,
  },
  {
    name: "SidebarCountsLoading",
    description: "Mail sidebar navigation where unread counts still loading show a small spinner.",
    code: `
const folders = [
  { label: "Inbox", icon: InboxIcon, count: null },
  { label: "Starred", icon: StarIcon, count: 4 },
  { label: "Sent", icon: SendIcon, count: 0 },
  { label: "Archive", icon: ArchiveIcon, count: null },
]

export default function SidebarCountsLoading() {
  return (
    <nav className="flex w-full max-w-[220px] flex-col gap-0.5 border p-2">
      {folders.map((folder, i) => (
        <a
          key={folder.label}
          href="#"
          className={cn(
            "flex items-center gap-2 px-2 py-1.5 text-sm hover:bg-muted",
            i === 0 && "bg-muted font-medium"
          )}
        >
          <folder.icon className="size-4 text-muted-foreground" />
          <span className="flex-1">{folder.label}</span>
          {folder.count === null ? (
            <Spinner className="size-3 text-muted-foreground" />
          ) : folder.count > 0 ? (
            <span className="text-xs tabular-nums text-muted-foreground">{folder.count}</span>
          ) : null}
        </a>
      ))}
    </nav>
  )
}`,
  },
  {
    name: "SplitButtonLoading",
    description: "Button group whose primary action is publishing with a spinner while the menu stays disabled.",
    code: `
export default function SplitButtonLoading() {
  return (
    <ButtonGroup>
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Publishing
      </Button>
      <ButtonGroupSeparator />
      <Button size="icon" aria-label="More publish options" disabled>
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  )
}`,
  },
  {
    name: "ReconnectingAlert",
    description: "Alert banner announcing a lost connection with a reconnecting spinner.",
    code: `
export default function ReconnectingAlert() {
  return (
    <Alert className="w-full max-w-md">
      <Spinner />
      <AlertTitle>Reconnecting to server</AlertTitle>
      <AlertDescription>
        Your changes are kept locally and will sync once the connection is restored.
      </AlertDescription>
    </Alert>
  )
}`,
  },
  {
    name: "SpinnerScale",
    description: "Labelled scale of spinner sizes from extra small to extra large.",
    code: `
const sizes = [
  { label: "xs", className: "size-3" },
  { label: "sm", className: "size-4" },
  { label: "md", className: "size-6" },
  { label: "lg", className: "size-8" },
  { label: "xl", className: "size-12" },
]

export default function SpinnerScale() {
  return (
    <div className="flex items-end gap-6">
      {sizes.map((size) => (
        <div key={size.label} className="flex flex-col items-center gap-3">
          <Spinner className={size.className} />
          <code className="font-mono text-xs text-muted-foreground">{size.label}</code>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "TabsPanelLoading",
    description: "Tabs that show a spinner in the panel while the newly selected tab loads.",
    code: `
const content: Record<string, string> = {
  overview: "14 open issues, 3 merged pull requests this week.",
  activity: "Mira commented on #482 and closed #479.",
  settings: "Branch protection is enabled for main.",
}

export default function TabsPanelLoading() {
  const [tab, setTab] = React.useState("overview")
  const [loading, setLoading] = React.useState(false)

  return (
    <Tabs
      value={tab}
      onValueChange={(value) => {
        setTab(value as string)
        setLoading(true)
        setTimeout(() => setLoading(false), 800)
      }}
      className="w-full max-w-sm"
    >
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <div className="flex h-24 items-center justify-center border p-4 text-sm">
        {loading ? <Spinner className="size-5 text-muted-foreground" /> : content[tab]}
      </div>
    </Tabs>
  )
}`,
  },
  {
    name: "AvatarUploadSpinner",
    description: "Profile avatar with a spinner overlay while a new photo is uploading.",
    code: `
export default function AvatarUploadSpinner() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Avatar className="size-16">
          <AvatarFallback className="text-lg">RN</AvatarFallback>
        </Avatar>
        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-background/60">
          <Spinner className="size-6" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">Rosa Navarro</span>
        <span className="text-xs text-muted-foreground">Uploading new photo...</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "KpiCardsPartialLoading",
    description: "Dashboard KPI tiles where metrics still loading show a spinner instead of a value.",
    code: `
const stats = [
  { label: "Active users", value: "12,483", icon: UsersIcon },
  { label: "Conversion", value: null, icon: TrendingUpIcon },
  { label: "MRR", value: "$84.2k", icon: DollarSignIcon },
  { label: "Churn", value: null, icon: TrendingDownIcon },
]

export default function KpiCardsPartialLoading() {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-2">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-2 border p-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            {stat.label}
            <stat.icon className="size-3.5" />
          </div>
          <div className="flex h-7 items-center">
            {stat.value ? (
              <span className="text-xl font-semibold tabular-nums">{stat.value}</span>
            ) : (
              <Spinner className="text-muted-foreground" />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "CommandSearchLoading",
    description: "Command-palette style search panel showing a spinner row while results load.",
    code: `
export default function CommandSearchLoading() {
  return (
    <div className="w-full max-w-sm border bg-popover text-popover-foreground shadow-md">
      <div className="flex items-center gap-2 border-b px-3 py-2">
        <SearchIcon className="size-4 text-muted-foreground" />
        <span className="flex-1 text-sm">onboarding checklist</span>
        <Kbd>Esc</Kbd>
      </div>
      <div className="flex items-center gap-2 px-3 py-6 text-sm text-muted-foreground">
        <Spinner />
        Searching 1,284 documents...
      </div>
    </div>
  )
}`,
  },
  {
    name: "PlaceOrderButton",
    description: "Checkout summary whose place-order button shows a spinner after it is clicked.",
    code: `
export default function PlaceOrderButton() {
  const [placing, setPlacing] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex justify-between text-sm">
        <span>Ceramic pour-over set</span>
        <span className="tabular-nums">$64.00</span>
      </div>
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <Separator />
      <div className="flex justify-between font-medium">
        <span>Total</span>
        <span className="tabular-nums">$64.00</span>
      </div>
      <Button
        size="lg"
        disabled={placing}
        onClick={() => {
          setPlacing(true)
          setTimeout(() => setPlacing(false), 2000)
        }}
      >
        {placing ? <Spinner data-icon="inline-start" /> : <LockIcon data-icon="inline-start" />}
        {placing ? "Placing order..." : "Place order"}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "GeneratingResponseCard",
    description: "AI writing assistant card with a generating spinner and a stop button.",
    code: `
export default function GeneratingResponseCard() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <SparklesIcon className="size-3.5" />
        Draft a friendly reply declining the meeting
      </div>
      <p className="text-sm leading-relaxed">
        Hi Daniel, thanks so much for the invite. Unfortunately I&apos;m fully booked on Thursday, but
      </p>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-xs text-muted-foreground">
          <Spinner className="size-3.5" />
          Generating
        </span>
        <Button variant="outline" size="xs">
          <SquareIcon data-icon="inline-start" className="fill-current" />
          Stop
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "SwitchApplyingSetting",
    description: "Settings toggle that shows a spinner while the change is being applied.",
    code: `
export default function SwitchApplyingSetting() {
  const [enabled, setEnabled] = React.useState(false)
  const [applying, setApplying] = React.useState(false)

  return (
    <Field orientation="horizontal" className="w-full max-w-sm border p-4">
      <FieldContent>
        <FieldLabel htmlFor="two-factor">Require two-factor authentication</FieldLabel>
        <FieldDescription>
          {applying ? "Updating 42 member accounts..." : "Applies to everyone in the workspace."}
        </FieldDescription>
      </FieldContent>
      <div className="flex items-center gap-2">
        {applying && <Spinner className="text-muted-foreground" />}
        <Switch
          id="two-factor"
          checked={enabled}
          disabled={applying}
          onCheckedChange={(checked) => {
            setApplying(true)
            setTimeout(() => {
              setEnabled(checked)
              setApplying(false)
            }, 1200)
          }}
        />
      </div>
    </Field>
  )
}`,
  },
  {
    name: "BackgroundJobsList",
    description: "Background jobs monitor with running jobs spinning next to finished ones.",
    code: `
const jobs = [
  { name: "Nightly backup", detail: "Started 2m ago", running: true },
  { name: "Thumbnail generation", detail: "418 of 1,200", running: true },
  { name: "Search reindex", detail: "Finished in 3m 12s", running: false },
  { name: "Email digest", detail: "Finished in 48s", running: false },
]

export default function BackgroundJobsList() {
  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b px-4 py-2.5">
        <span className="text-sm font-medium">Jobs</span>
        <span className="text-xs text-muted-foreground">2 running</span>
      </div>
      <ul className="divide-y">
        {jobs.map((job) => (
          <li key={job.name} className="flex items-center gap-3 px-4 py-2.5">
            {job.running ? (
              <Spinner className="text-primary" />
            ) : (
              <CheckIcon className="size-4 text-muted-foreground" />
            )}
            <span className="flex-1 text-sm">{job.name}</span>
            <span className="text-xs tabular-nums text-muted-foreground">{job.detail}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}`,
  },
  {
    name: "CalendarSyncItem",
    description: "Account item for calendar sync showing a spinner and last-synced time while syncing.",
    code: `
export default function CalendarSyncItem() {
  return (
    <Item variant="muted" className="w-full max-w-sm">
      <ItemMedia variant="icon">
        <CalendarSyncIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Work calendar</ItemTitle>
        <ItemDescription>Last synced 14 minutes ago</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm" disabled>
          <Spinner data-icon="inline-start" />
          Syncing
        </Button>
      </ItemActions>
    </Item>
  )
}`,
  },
  {
    name: "ContainedSpinners",
    description: "Spinners framed in a bordered circle, a filled square, and a soft tinted tile.",
    code: `
export default function ContainedSpinners() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex size-12 items-center justify-center rounded-full border">
        <Spinner className="size-5" />
      </div>
      <div className="flex size-12 items-center justify-center bg-muted">
        <Spinner className="size-5 text-muted-foreground" />
      </div>
      <div className="flex size-12 items-center justify-center bg-primary/10">
        <Spinner className="size-5 text-primary" />
      </div>
      <div className="flex size-12 items-center justify-center bg-primary text-primary-foreground">
        <Spinner className="size-5" />
      </div>
    </div>
  )
}`,
  },
  {
    name: "LayeredOrbitSpinner",
    description: "Concentric spinners rotating at different speeds and directions for a hero loader.",
    code: `
export default function LayeredOrbitSpinner() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative flex size-20 items-center justify-center">
        <Spinner className="absolute size-20 text-muted-foreground/40" strokeWidth={1} style={{ animationDuration: "3s" }} />
        <Spinner
          className="absolute size-14 text-muted-foreground"
          strokeWidth={1.5}
          style={{ animationDuration: "1.6s", animationDirection: "reverse" }}
        />
        <Spinner className="absolute size-8 text-primary" />
      </div>
      <span className="text-xs text-muted-foreground">Calibrating sensors</span>
    </div>
  )
}`,
  },
  {
    name: "LinkButtonNavigating",
    description: "Link-style buttons with a spinner while navigating to another page.",
    code: `
export default function LinkButtonNavigating() {
  return (
    <div className="flex flex-col items-start gap-2">
      <Button variant="link" className="px-0" nativeButton={false} render={<a href="#" />}>
        <Spinner data-icon="inline-start" />
        Opening API reference
      </Button>
      <Button variant="link" className="px-0 text-muted-foreground" nativeButton={false} render={<a href="#" />}>
        View changelog
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  )
}`,
  },
  {
    name: "RotatingStatusMessages",
    description: "Spinner paired with status messages that cycle while a long task runs.",
    code: `
const messages = [
  "Analyzing your spreadsheet",
  "Detecting column types",
  "Matching duplicate rows",
  "Building preview",
]

export default function RotatingStatusMessages() {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % messages.length), 1600)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex w-full max-w-xs items-center gap-3 border px-4 py-3">
      <Spinner className="text-primary" />
      <span key={index} className="animate-in text-sm fade-in slide-in-from-bottom-1">
        {messages[index]}...
      </span>
      <span className="ml-auto text-xs tabular-nums text-muted-foreground">
        {index + 1}/{messages.length}
      </span>
    </div>
  )
}`,
  },
  {
    name: "DeletingConfirmation",
    description: "Destructive confirmation card with a deleting spinner on the danger button.",
    code: `
export default function DeletingConfirmation() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Delete project &quot;Atlas&quot;?</CardTitle>
        <CardDescription>
          This removes 38 environments and all deployment history. This can&apos;t be undone.
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline" disabled>
          Cancel
        </Button>
        <Button variant="destructive" disabled>
          <Spinner data-icon="inline-start" />
          Deleting...
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "GalleryTilesLoading",
    description: "Media grid where thumbnails still processing show a spinner over a gradient tile.",
    code: `
const tiles = [
  { hue: 210, ready: true },
  { hue: 160, ready: false },
  { hue: 30, ready: true },
  { hue: 280, ready: false },
  { hue: 350, ready: false },
  { hue: 90, ready: true },
]

export default function GalleryTilesLoading() {
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-1.5">
      {tiles.map((tile, i) => (
        <div
          key={i}
          className="relative aspect-square"
          style={{
            background: "linear-gradient(135deg, hsl(" + tile.hue + " 70% 65%), hsl(" + (tile.hue + 40) + " 60% 45%))",
            opacity: tile.ready ? 1 : 0.35,
          }}
        >
          {!tile.ready && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner className="size-5 text-foreground" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "BuildLogTerminal",
    description: "Terminal-style build log whose last line shows a spinner for the active step.",
    code: `
const lines = [
  { text: "Resolved 1,248 packages", ok: true },
  { text: "Compiled 342 modules in 8.2s", ok: true },
  { text: "Linted 0 errors, 2 warnings", ok: true },
  { text: "Generating static pages (18/64)", ok: false },
]

export default function BuildLogTerminal() {
  return (
    <div className="w-full max-w-md bg-zinc-950 p-4 font-mono text-xs text-zinc-300">
      <div className="mb-2 text-zinc-500">$ pnpm build</div>
      {lines.map((line) => (
        <div key={line.text} className="flex items-center gap-2 py-0.5">
          {line.ok ? (
            <CheckIcon className="size-3 text-emerald-400" />
          ) : (
            <Spinner className="size-3 text-sky-400" />
          )}
          <span className={cn(!line.ok && "text-zinc-100")}>{line.text}</span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "InfiniteScrollFooter",
    description: "Scrollable activity feed ending in a spinner footer for the next page.",
    code: `
const events = [
  "Lena merged feature/billing-portal",
  "Omar opened issue #812",
  "CI passed on main",
  "Sana requested review on #809",
  "Release v2.14.0 published",
]

export default function InfiniteScrollFooter() {
  return (
    <ScrollArea className="h-56 w-full max-w-sm border">
      <ul className="divide-y">
        {events.map((event) => (
          <li key={event} className="px-4 py-3 text-sm">
            {event}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center gap-2 border-t py-3 text-xs text-muted-foreground">
        <Spinner className="size-3.5" />
        Loading older activity
      </div>
    </ScrollArea>
  )
}`,
  },
  {
    name: "AccessibleLabelledSpinner",
    description: "Spinner with a context-specific aria-label and a live region announcing the status.",
    code: `
export default function AccessibleLabelledSpinner() {
  return (
    <div className="flex w-full max-w-xs items-center gap-3 border p-4" aria-live="polite">
      <Spinner aria-label="Loading invoices" className="size-5" />
      <div className="flex flex-col">
        <span className="text-sm font-medium">Loading invoices</span>
        <span className="text-xs text-muted-foreground">Screen readers announce this status politely.</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "SkeletonWithSpinner",
    description: "Profile card skeleton with a spinner badge indicating an active fetch.",
    code: `
export default function SkeletonWithSpinner() {
  return (
    <div className="relative flex w-full max-w-sm items-center gap-3 border p-4">
      <Skeleton className="size-10 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-3.5 w-2/3" />
        <Skeleton className="h-3 w-1/2" />
      </div>
      <span className="absolute top-2 right-2 flex items-center gap-1 text-[10px] text-muted-foreground">
        <Spinner className="size-3" />
        Fetching
      </span>
    </div>
  )
}`,
  },
  {
    name: "SendMessageButton",
    description: "Chat composer whose send button turns into a spinner while the message sends.",
    code: `
export default function SendMessageButton() {
  const [value, setValue] = React.useState("Running 10 minutes late, start without me")
  const [sending, setSending] = React.useState(false)

  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupInput
        aria-label="Message"
        value={value}
        disabled={sending}
        onChange={(e) => setValue(e.target.value)}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          size="icon-xs"
          variant="default"
          aria-label="Send message"
          disabled={sending || !value}
          onClick={() => {
            setSending(true)
            setTimeout(() => {
              setSending(false)
              setValue("")
            }, 1000)
          }}
        >
          {sending ? <Spinner /> : <SendIcon />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}`,
  },
  {
    name: "VerifyingDomainStatus",
    description: "Domain DNS verification rows with a spinner on the record still propagating.",
    code: `
const records = [
  { type: "TXT", host: "_verify", state: "verified" },
  { type: "CNAME", host: "www", state: "checking" },
  { type: "MX", host: "@", state: "checking" },
]

export default function VerifyingDomainStatus() {
  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <GlobeIcon className="size-4" />
        <span className="text-sm font-medium">mail.fernwood.app</span>
      </div>
      {records.map((record) => (
        <div key={record.type} className="flex items-center gap-3 px-4 py-2.5 text-sm">
          <Badge variant="outline" className="w-14 justify-center font-mono">
            {record.type}
          </Badge>
          <span className="flex-1 font-mono text-xs">{record.host}</span>
          {record.state === "verified" ? (
            <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
              <CheckIcon className="size-3.5" />
              Verified
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Spinner className="size-3" />
              Propagating
            </span>
          )}
        </div>
      ))}
    </div>
  )
}`,
  },
]

export default examples
