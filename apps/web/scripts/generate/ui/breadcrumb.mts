import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "FileManagerBreadcrumb",
    description: "File manager path with folder icons on every level and a file icon on the current item.",
    code: `
const folders = ["My Drive", "Clients", "Northwind Studio"]

export default function FileManagerBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {folders.map((folder) => (
          <Fragment key={folder}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="flex items-center gap-1.5">
                <FolderIcon className="size-3.5" />
                {folder}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage className="flex items-center gap-1.5">
            <FileTextIcon className="size-3.5" />
            Brand guidelines.pdf
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
    imports: { react: ["Fragment"] },
  },
  {
    name: "HomeIconBreadcrumb",
    description: "Breadcrumb that starts with an icon-only home link with an accessible label.",
    code: `
export default function HomeIconBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" aria-label="Home">
            <HomeIcon className="size-3.5" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Library</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Saved playlists</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
  },
  {
    name: "RepositoryPathBreadcrumb",
    description: "Code repository path with owner, repo, branch badge and monospace file segments.",
    code: `
const segments = ["src", "components", "checkout"]

export default function RepositoryPathBreadcrumb() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2 border p-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="font-medium">
              lumen-labs
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="font-medium text-foreground">
              storefront
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Badge variant="outline" className="gap-1 font-mono">
              <GitBranchIcon />
              main
            </Badge>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbList className="font-mono">
          {segments.map((segment) => (
            <Fragment key={segment}>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">{segment}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
            </Fragment>
          ))}
          <BreadcrumbItem>
            <BreadcrumbPage>CartSummary.tsx</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}`,
    imports: { react: ["Fragment"] },
  },
  {
    name: "StoreCategoryBreadcrumb",
    description: "Online store category trail above a product title with a result count.",
    code: `
const trail = ["Shop", "Outdoor", "Footwear"]

export default function StoreCategoryBreadcrumb() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Breadcrumb>
        <BreadcrumbList>
          {trail.map((item) => (
            <Fragment key={item}>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">{item}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </Fragment>
          ))}
          <BreadcrumbItem>
            <BreadcrumbPage>Trail running</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-baseline justify-between gap-2">
        <h2 className="text-lg font-semibold">Trail running shoes</h2>
        <span className="text-xs text-muted-foreground">128 results</span>
      </div>
    </div>
  )
}`,
    imports: { react: ["Fragment"] },
  },
  {
    name: "SettingsPageHeaderBreadcrumb",
    description: "Settings page header with breadcrumb, title, description and a primary action.",
    code: `
export default function SettingsPageHeaderBreadcrumb() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3 border-b pb-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Settings</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Organization</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>API keys</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">API keys</h2>
          <p className="text-xs text-muted-foreground">
            Manage secret keys used by your server integrations.
          </p>
        </div>
        <Button size="sm">
          <PlusIcon data-icon="inline-start" />
          New key
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "AppHeaderBreadcrumb",
    description: "Dashboard top bar with a sidebar toggle, vertical separator and breadcrumb.",
    code: `
export default function AppHeaderBreadcrumb() {
  return (
    <header className="flex h-12 w-full max-w-lg items-center gap-2 border bg-background px-2">
      <Button variant="ghost" size="icon-sm" aria-label="Toggle sidebar">
        <PanelLeftIcon />
      </Button>
      <Separator orientation="vertical" className="h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden sm:inline-flex">
            <BreadcrumbLink href="#">Analytics</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden sm:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Revenue overview</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  )
}`,
  },
  {
    name: "InteractiveFolderBreadcrumb",
    description: "Stateful folder browser where clicking a crumb navigates up and clicking a folder drills down.",
    code: `
const tree: Record<string, string[]> = {
  Documents: ["Invoices", "Contracts"],
  Invoices: ["2025", "2026"],
  Contracts: ["Vendors", "Freelancers"],
  "2025": [],
  "2026": [],
  Vendors: [],
  Freelancers: [],
}

export default function InteractiveFolderBreadcrumb() {
  const [path, setPath] = React.useState(["Documents"])
  const current = path[path.length - 1]!
  const children = tree[current] ?? []

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-3">
      <Breadcrumb>
        <BreadcrumbList>
          {path.map((folder, index) => {
            const isLast = index === path.length - 1
            return (
              <React.Fragment key={folder}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{folder}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      render={<button type="button" />}
                      onClick={() => setPath(path.slice(0, index + 1))}
                    >
                      {folder}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-1">
        {children.length === 0 ? (
          <p className="py-4 text-center text-xs text-muted-foreground">This folder is empty</p>
        ) : (
          children.map((child) => (
            <Button
              key={child}
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => setPath([...path, child])}
            >
              <FolderIcon data-icon="inline-start" />
              {child}
            </Button>
          ))
        )}
      </div>
    </div>
  )
}`,
  },
  {
    name: "CollapsedMenuBreadcrumb",
    description: "Deep path whose middle levels collapse into an ellipsis dropdown menu.",
    code: `
const hidden = ["Workspace", "Marketing", "Campaigns"]

export default function CollapsedMenuBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="ghost" size="icon-xs" aria-label="Show hidden levels">
                  <BreadcrumbEllipsis />
                </Button>
              }
            />
            <DropdownMenuContent align="start">
              <DropdownMenuGroup>
                {hidden.map((item) => (
                  <DropdownMenuItem key={item}>
                    <FolderIcon />
                    {item}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Spring launch</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Email sequence</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
  },
  {
    name: "WorkspaceSwitcherBreadcrumb",
    description: "Breadcrumb whose first item is a workspace switcher with avatar initials and a menu.",
    code: `
const workspaces = [
  { name: "Harbor Labs", initials: "HL" },
  { name: "Quill & Co", initials: "QC" },
  { name: "Orbit Health", initials: "OH" },
]

export default function WorkspaceSwitcherBreadcrumb() {
  const [workspace, setWorkspace] = React.useState(workspaces[0]!)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="ghost" size="sm" className="gap-1.5 px-1.5">
                  <Avatar size="sm">
                    <AvatarFallback>{workspace.initials}</AvatarFallback>
                  </Avatar>
                  {workspace.name}
                  <ChevronsUpDownIcon data-icon="inline-end" />
                </Button>
              }
            />
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
                {workspaces.map((item) => (
                  <DropdownMenuItem key={item.name} onClick={() => setWorkspace(item)}>
                    <Avatar size="sm">
                      <AvatarFallback>{item.initials}</AvatarFallback>
                    </Avatar>
                    {item.name}
                    {item.name === workspace.name && <CheckIcon className="ml-auto" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Projects</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Mobile app</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
  },
  {
    name: "DeploymentBreadcrumb",
    description: "Hosting dashboard path with an environment badge and a monospace deployment id.",
    code: `
export default function DeploymentBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">pulse-api</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="flex items-center gap-1.5">
            Production
            <Badge variant="secondary" className="gap-1">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Live
            </Badge>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="font-mono">dpl_8f3k2a</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
  },
  {
    name: "CheckoutStepsBreadcrumb",
    description: "Checkout progress trail with completed steps, the current step and upcoming disabled steps.",
    code: `
const steps = [
  { label: "Cart", status: "done" },
  { label: "Shipping", status: "done" },
  { label: "Payment", status: "current" },
  { label: "Review", status: "upcoming" },
] as const

export default function CheckoutStepsBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-sm">
        {steps.map((step, index) => (
          <Fragment key={step.label}>
            <BreadcrumbItem>
              {step.status === "done" && (
                <BreadcrumbLink href="#" className="flex items-center gap-1">
                  <CircleCheckIcon className="size-3.5 text-emerald-600" />
                  {step.label}
                </BreadcrumbLink>
              )}
              {step.status === "current" && (
                <BreadcrumbPage className="font-medium">{step.label}</BreadcrumbPage>
              )}
              {step.status === "upcoming" && (
                <span aria-disabled="true" className="text-muted-foreground/50">
                  {step.label}
                </span>
              )}
            </BreadcrumbItem>
            {index < steps.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
    imports: { react: ["Fragment"] },
  },
  {
    name: "SizeScaleBreadcrumb",
    description: "The same path rendered at small, default and large text sizes.",
    code: `
const sizes = [
  { label: "Small", list: "text-[11px] gap-1", icon: "[&>svg]:size-3" },
  { label: "Default", list: "", icon: "" },
  { label: "Large", list: "text-sm gap-2", icon: "[&>svg]:size-4" },
]

export default function SizeScaleBreadcrumb() {
  return (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <div key={size.label} className="flex flex-col gap-1">
          <span className="text-[10px] tracking-wide text-muted-foreground uppercase">
            {size.label}
          </span>
          <Breadcrumb>
            <BreadcrumbList className={size.list}>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Account</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className={size.icon} />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Billing</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className={size.icon} />
              <BreadcrumbItem>
                <BreadcrumbPage>Invoices</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ChipBreadcrumb",
    description: "Breadcrumb items styled as bordered chips with the current page filled.",
    code: `
export default function ChipBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-1">
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="border bg-background px-2 py-1 hover:bg-muted">
            Courses
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="border bg-background px-2 py-1 hover:bg-muted">
            Data design
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="bg-primary px-2 py-1 text-primary-foreground">
            Color scales
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
  },
  {
    name: "TruncatedTooltipBreadcrumb",
    description: "Long crumb labels truncate to a max width and reveal the full name in a tooltip.",
    code: `
const items = [
  "Quarterly planning for the customer success organization",
  "Retention experiments and onboarding improvements",
]

export default function TruncatedTooltipBreadcrumb() {
  return (
    <Breadcrumb className="w-full max-w-sm">
      <BreadcrumbList className="flex-nowrap">
        {items.map((item) => (
          <Fragment key={item}>
            <BreadcrumbItem className="min-w-0">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <BreadcrumbLink href="#" className="block max-w-28 truncate">
                      {item}
                    </BreadcrumbLink>
                  }
                />
                <TooltipContent>{item}</TooltipContent>
              </Tooltip>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbItem className="min-w-0">
          <BreadcrumbPage className="block truncate">Week 3 notes</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
    imports: { react: ["Fragment"] },
  },
  {
    name: "ResponsiveBackBreadcrumb",
    description: "Shows a compact back link on narrow screens and the full path from the small breakpoint up.",
    code: `
export default function ResponsiveBackBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="sm:hidden">
          <BreadcrumbLink href="#" className="flex items-center gap-1">
            <ChevronLeftIcon className="size-3.5" />
            Back to Team
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem className="hidden sm:inline-flex">
          <BreadcrumbLink href="#">Company</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden sm:block" />
        <BreadcrumbItem className="hidden sm:inline-flex">
          <BreadcrumbLink href="#">Team</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden sm:block" />
        <BreadcrumbItem className="hidden sm:inline-flex">
          <BreadcrumbPage>Priya Raman</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
  },
  {
    name: "BackButtonBreadcrumb",
    description: "An outline back button paired with a breadcrumb and page title.",
    code: `
export default function BackButtonBreadcrumb() {
  return (
    <div className="flex w-full max-w-sm items-center gap-3">
      <Button variant="outline" size="icon-sm" aria-label="Go back">
        <ArrowLeftIcon />
      </Button>
      <div className="flex min-w-0 flex-col gap-0.5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Orders</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>#10482</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2 className="truncate text-sm font-semibold">Order for Elena Vasquez</h2>
      </div>
    </div>
  )
}`,
  },
  {
    name: "DocsCopyLinkBreadcrumb",
    description: "Documentation trail with a copy-link button that confirms when the URL is copied.",
    code: `
export default function DocsCopyLinkBreadcrumb() {
  const [copied, setCopied] = React.useState(false)

  return (
    <div className="flex w-full max-w-md items-center justify-between gap-2 border px-3 py-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Guides</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Webhooks</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Button
        variant="ghost"
        size="xs"
        onClick={() => {
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        }}
      >
        {copied ? <CheckIcon data-icon="inline-start" /> : <LinkIcon data-icon="inline-start" />}
        {copied ? "Copied" : "Copy link"}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "MailThreadBreadcrumb",
    description: "Email client trail with an unread count on the folder and a truncated thread subject.",
    code: `
export default function MailThreadBreadcrumb() {
  return (
    <Breadcrumb className="w-full max-w-sm">
      <BreadcrumbList className="flex-nowrap">
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="flex items-center gap-1.5">
            <MailIcon className="size-3.5" />
            Mail
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="flex items-center gap-1.5">
            Inbox
            <Badge variant="secondary">14</Badge>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="min-w-0">
          <BreadcrumbPage className="truncate">
            Re: Venue options for the November offsite
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
  },
  {
    name: "CalendarDateBreadcrumb",
    description: "Calendar drill-down from year to month to week to a single day with prev and next controls.",
    code: `
export default function CalendarDateBreadcrumb() {
  return (
    <div className="flex w-full max-w-md items-center justify-between gap-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="flex items-center gap-1.5">
              <CalendarIcon className="size-3.5" />
              2026
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">November</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Week 47</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Fri 20</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ButtonGroup>
        <Button variant="outline" size="icon-xs" aria-label="Previous day">
          <ChevronLeftIcon />
        </Button>
        <Button variant="outline" size="icon-xs" aria-label="Next day">
          <ChevronRightIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}`,
  },
  {
    name: "UserProfileBreadcrumb",
    description: "Admin console path to a user record with an avatar in the current crumb.",
    code: `
export default function UserProfileBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="flex items-center gap-1.5">
            <UsersIcon className="size-3.5" />
            Users
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="flex items-center gap-1.5">
            <Avatar size="sm" className="size-5">
              <AvatarFallback className="text-[9px]">MO</AvatarFallback>
            </Avatar>
            Mira Okafor
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Permissions</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
  },
  {
    name: "SupportTicketBreadcrumb",
    description: "Help desk trail to a ticket number followed by priority and status badges.",
    code: `
export default function SupportTicketBreadcrumb() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Support</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Billing queue</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-mono">#4821</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Badge variant="destructive">Urgent</Badge>
      <Badge variant="outline">Awaiting reply</Badge>
    </div>
  )
}`,
  },
  {
    name: "SeparatorStylesBreadcrumb",
    description: "Side-by-side comparison of chevron, slash, dot, arrow and double-chevron separators.",
    code: `
const styles = [
  { label: "Chevron", separator: null },
  { label: "Slash", separator: "/" },
  { label: "Dot", separator: "dot" },
  { label: "Arrow", separator: "arrow" },
  { label: "Chevrons", separator: "chevrons" },
]

function Sep({ type }: { type: string | null }) {
  if (type === "/") return <BreadcrumbSeparator>/</BreadcrumbSeparator>
  if (type === "dot") return <BreadcrumbSeparator><DotIcon /></BreadcrumbSeparator>
  if (type === "arrow") return <BreadcrumbSeparator><ArrowRightIcon /></BreadcrumbSeparator>
  if (type === "chevrons") return <BreadcrumbSeparator><ChevronsRightIcon /></BreadcrumbSeparator>
  return <BreadcrumbSeparator />
}

export default function SeparatorStylesBreadcrumb() {
  return (
    <div className="grid gap-3">
      {styles.map((style) => (
        <div key={style.label} className="grid grid-cols-[72px_1fr] items-center gap-2">
          <span className="text-[10px] text-muted-foreground uppercase">{style.label}</span>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <Sep type={style.separator} />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Reports</BreadcrumbLink>
              </BreadcrumbItem>
              <Sep type={style.separator} />
              <BreadcrumbItem>
                <BreadcrumbPage>Q3</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ArrowSegmentBreadcrumb",
    description: "Ribbon-style breadcrumb where each item is an arrow-shaped segment.",
    code: `
const segments = ["Leads", "Qualified", "Proposal"]

export default function ArrowSegmentBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-0">
        {segments.map((segment, index) => (
          <BreadcrumbItem key={segment} className={cn(index > 0 && "-ml-2")}>
            <BreadcrumbLink
              href="#"
              className="bg-muted py-1.5 ps-5 pe-4 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_50%,calc(100%-8px)_100%,0_100%,8px_50%)] first:ps-3 hover:bg-muted/70"
            >
              {segment}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
        <BreadcrumbItem className="-ml-2">
          <BreadcrumbPage className="bg-primary py-1.5 ps-5 pe-4 text-primary-foreground [clip-path:polygon(0_0,calc(100%-8px)_0,100%_50%,calc(100%-8px)_100%,0_100%,8px_50%)]">
            Closed won
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
  },
  {
    name: "CardHeaderBreadcrumb",
    description: "Breadcrumb used inside a card header to show where a report lives.",
    code: `
export default function CardHeaderBreadcrumb() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Reports</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Weekly signups</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <CardTitle>2,418 new accounts</CardTitle>
        <CardDescription>Up 12% compared with the previous week.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex h-16 items-end gap-1">
          {[40, 55, 35, 70, 60, 85, 75].map((value, index) => (
            <div key={index} className="flex-1 bg-primary/80" style={{ height: value + "%" }} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "SiblingSwitcherBreadcrumb",
    description: "Current crumb opens a menu to jump between sibling settings pages.",
    code: `
const pages = ["General", "Billing", "Members", "Security", "Integrations"]

export default function SiblingSwitcherBreadcrumb() {
  const [page, setPage] = React.useState("Billing")

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Settings</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button type="button" className="flex items-center gap-1 text-foreground">
                  {page}
                  <ChevronDownIcon className="size-3.5" />
                </button>
              }
            />
            <DropdownMenuContent align="start" className="w-40">
              <DropdownMenuRadioGroup value={page} onValueChange={setPage}>
                {pages.map((item) => (
                  <DropdownMenuRadioItem key={item} value={item}>
                    {item}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
  },
  {
    name: "HelpCenterBreadcrumb",
    description: "Help center article trail with level icons and a last-updated note.",
    code: `
export default function HelpCenterBreadcrumb() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="flex items-center gap-1.5">
              <LifeBuoyIcon className="size-3.5" />
              Help center
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="flex items-center gap-1.5">
              <CreditCardIcon className="size-3.5" />
              Payments
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Request a refund</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
        <ClockIcon className="size-3" />
        Updated 3 days ago · 4 min read
      </p>
    </div>
  )
}`,
  },
  {
    name: "ScrollableBreadcrumb",
    description: "Very long path that stays on one line and scrolls horizontally inside its container.",
    code: `
const path = ["Company", "Engineering", "Platform", "Observability", "Dashboards", "Alerts", "Paging rules"]

export default function ScrollableBreadcrumb() {
  return (
    <div className="w-full max-w-xs overflow-x-auto border px-3 py-2 [scrollbar-width:thin]">
      <Breadcrumb>
        <BreadcrumbList className="flex-nowrap whitespace-nowrap">
          {path.map((item, index) => (
            <Fragment key={item}>
              <BreadcrumbItem>
                {index === path.length - 1 ? (
                  <BreadcrumbPage>{item}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href="#">{item}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < path.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}`,
    imports: { react: ["Fragment"] },
  },
  {
    name: "StorageBucketBreadcrumb",
    description: "Object storage path with a bucket icon, prefix segments and a copy-path button.",
    code: `
const prefixes = ["uploads", "2026", "11"]

export default function StorageBucketBreadcrumb() {
  return (
    <div className="flex w-full max-w-md items-center gap-2 border bg-muted/40 px-3 py-2">
      <DatabaseIcon className="size-3.5 shrink-0 text-muted-foreground" />
      <Breadcrumb className="min-w-0 flex-1">
        <BreadcrumbList className="font-mono">
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="font-medium text-foreground">
              media-assets
            </BreadcrumbLink>
          </BreadcrumbItem>
          {prefixes.map((prefix) => (
            <Fragment key={prefix}>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">{prefix}</BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          ))}
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>hero-banner.webp</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Button variant="ghost" size="icon-xs" aria-label="Copy path">
        <CopyIcon />
      </Button>
    </div>
  )
}`,
    imports: { react: ["Fragment"] },
  },
  {
    name: "SearchScopeBreadcrumb",
    description: "Search field whose leading addon shows the current scope as a breadcrumb.",
    code: `
export default function SearchScopeBreadcrumb() {
  return (
    <InputGroup className="w-full max-w-md">
      <InputGroupAddon>
        <SearchIcon />
        <Breadcrumb>
          <BreadcrumbList className="flex-nowrap">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>API</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </InputGroupAddon>
      <InputGroupInput placeholder="Search endpoints..." />
      <InputGroupAddon align="inline-end">
        <Kbd>/</Kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}`,
  },
  {
    name: "CourseLessonBreadcrumb",
    description: "Learning platform trail to a lesson with course progress shown underneath.",
    code: `
export default function CourseLessonBreadcrumb() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="flex items-center gap-1.5">
              <GraduationCapIcon className="size-3.5" />
              Product analytics
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Module 3</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Lesson 2: Funnels</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center gap-2">
        <Progress value={42} className="flex-1" />
        <span className="text-[11px] text-muted-foreground">42%</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "LoadingSkeletonBreadcrumb",
    description: "Breadcrumb that shows skeleton placeholders while the path is loading, with a reload toggle.",
    code: `
export default function LoadingSkeletonBreadcrumb() {
  const [loading, setLoading] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-3">
      <Breadcrumb>
        <BreadcrumbList>
          {loading ? (
            <>
              <BreadcrumbItem>
                <Skeleton className="h-3 w-14" />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Skeleton className="h-3 w-20" />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Skeleton className="h-3 w-24" />
              </BreadcrumbItem>
            </>
          ) : (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Clients</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Fernwood Bakery</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Contract renewal</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
      <Button variant="outline" size="xs" onClick={() => setLoading(!loading)}>
        <RefreshCwIcon data-icon="inline-start" />
        {loading ? "Finish loading" : "Reload"}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "RtlBreadcrumb",
    description: "Right-to-left breadcrumb where the default chevron separator flips direction.",
    code: `
export default function RtlBreadcrumb() {
  return (
    <div dir="rtl">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">الرئيسية</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">المتجر</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>سلة المشتريات</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}`,
  },
  {
    name: "VerticalTreeBreadcrumb",
    description: "Stacked breadcrumb that indents each level like a tree, useful in narrow side panels.",
    code: `
const levels = ["Acme Wiki", "Engineering", "Runbooks", "Database failover"]

export default function VerticalTreeBreadcrumb() {
  return (
    <Breadcrumb className="w-full max-w-xs border p-3">
      <BreadcrumbList className="flex-col items-start gap-1">
        {levels.map((level, index) => {
          const isLast = index === levels.length - 1
          return (
            <BreadcrumbItem key={level} style={{ paddingInlineStart: index * 12 }}>
              {index > 0 && <CornerDownRightIcon className="size-3 text-muted-foreground/60" />}
              {isLast ? (
                <BreadcrumbPage className="font-medium">{level}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href="#">{level}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
  },
  {
    name: "UnderlineActiveBreadcrumb",
    description: "Links underline on hover and the current page carries a solid bottom border.",
    code: `
export default function UnderlineActiveBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-sm">
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="underline-offset-4 hover:underline">
            Journal
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="underline-offset-4 hover:underline">
            Travel
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="border-b-2 border-primary pb-0.5 font-medium">
            Three days in Kyoto
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
  },
  {
    name: "InfrastructureStatusBreadcrumb",
    description: "Cluster to node to pod trail where each level shows a health status dot.",
    code: `
const levels = [
  { label: "eu-west-1", status: "bg-emerald-500" },
  { label: "node-pool-b", status: "bg-amber-500" },
]

export default function InfrastructureStatusBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="font-mono">
        {levels.map((level) => (
          <Fragment key={level.label}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="flex items-center gap-1.5">
                <span className={cn("size-1.5 rounded-full", level.status)} />
                {level.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage className="flex items-center gap-1.5">
            <span className="size-1.5 animate-pulse rounded-full bg-destructive" />
            checkout-7d9f
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
    imports: { react: ["Fragment"] },
  },
  {
    name: "DocumentTopBarBreadcrumb",
    description: "Document editor top bar with page breadcrumb, edit timestamp and share and favorite actions.",
    code: `
export default function DocumentTopBarBreadcrumb() {
  const [starred, setStarred] = React.useState(false)

  return (
    <div className="flex w-full max-w-lg items-center justify-between gap-2 border-b px-2 py-1.5">
      <Breadcrumb className="min-w-0">
        <BreadcrumbList className="flex-nowrap">
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="flex items-center gap-1">
              <BookOpenIcon className="size-3.5" />
              Handbook
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="min-w-0">
            <BreadcrumbPage className="truncate">Remote work policy</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex shrink-0 items-center gap-1">
        <span className="hidden text-[11px] text-muted-foreground sm:inline">Edited 2m ago</span>
        <Button variant="ghost" size="xs">
          Share
        </Button>
        <Button
          variant="ghost"
          size="icon-xs"
          aria-label={starred ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={starred}
          onClick={() => setStarred(!starred)}
        >
          <StarIcon className={cn(starred && "fill-amber-400 text-amber-400")} />
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ExpandableEllipsisBreadcrumb",
    description: "Collapses middle levels beyond a maximum and expands them inline when the ellipsis is clicked.",
    code: `
const path = ["Home", "Teams", "Design", "Research", "Interviews", "Round 2", "Session notes"]
const MAX_ITEMS = 3

export default function ExpandableEllipsisBreadcrumb() {
  const [expanded, setExpanded] = React.useState(false)
  const collapsed = !expanded && path.length > MAX_ITEMS
  const visible = collapsed ? [path[0]!, ...path.slice(-2)] : path

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {visible.map((item, index) => {
          const isLast = index === visible.length - 1
          return (
            <React.Fragment key={item}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{item}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href="#">{item}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
              {collapsed && index === 0 && (
                <>
                  <BreadcrumbItem>
                    <button
                      type="button"
                      aria-label="Show full path"
                      className="hover:text-foreground"
                      onClick={() => setExpanded(true)}
                    >
                      <BreadcrumbEllipsis />
                    </button>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              )}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
  },
  {
    name: "WizardStepBreadcrumb",
    description: "Onboarding wizard where breadcrumb links are buttons that jump back to earlier steps.",
    code: `
const steps = ["Workspace", "Invite team", "Connect data", "Finish"]

export default function WizardStepBreadcrumb() {
  const [step, setStep] = React.useState(2)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <Breadcrumb>
        <BreadcrumbList>
          {steps.slice(0, step + 1).map((label, index) => (
            <React.Fragment key={label}>
              <BreadcrumbItem>
                {index === step ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink render={<button type="button" />} onClick={() => setStep(index)}>
                    {label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < step && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold">{steps[step]}</h3>
        <p className="text-xs text-muted-foreground">
          Step {step + 1} of {steps.length}
        </p>
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm" disabled={step === 0} onClick={() => setStep(step - 1)}>
          Back
        </Button>
        <Button size="sm" disabled={step === steps.length - 1} onClick={() => setStep(step + 1)}>
          Continue
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "DialogNestedViewBreadcrumb",
    description: "Settings dialog that uses a breadcrumb in its header to navigate nested views.",
    code: `
export default function DialogNestedViewBreadcrumb() {
  const [view, setView] = React.useState<"notifications" | "email">("notifications")

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <SettingsIcon data-icon="inline-start" />
        Preferences
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<button type="button" />} onClick={() => setView("notifications")}>
                  Notifications
                </BreadcrumbLink>
              </BreadcrumbItem>
              {view === "email" && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Email</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
          <DialogTitle>{view === "email" ? "Email notifications" : "Notifications"}</DialogTitle>
          <DialogDescription>
            {view === "email"
              ? "Choose which updates arrive in your inbox."
              : "Pick a channel to configure."}
          </DialogDescription>
        </DialogHeader>
        {view === "notifications" ? (
          <div className="flex flex-col gap-1">
            <Button variant="ghost" className="justify-between" onClick={() => setView("email")}>
              Email
              <ChevronRightIcon data-icon="inline-end" />
            </Button>
            <Button variant="ghost" className="justify-between" disabled>
              Push
              <ChevronRightIcon data-icon="inline-end" />
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-3 text-xs">
            {["Weekly digest", "Mentions", "Billing alerts"].map((item) => (
              <label key={item} className="flex items-center justify-between">
                {item}
                <Switch defaultChecked />
              </label>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "AnalyticsDrilldownBreadcrumb",
    description: "Revenue drill-down where the breadcrumb tracks region selection and lets you drill back up.",
    code: `
const data: Record<string, { label: string; value: number }[]> = {
  "All regions": [
    { label: "Europe", value: 412 },
    { label: "Americas", value: 538 },
    { label: "Asia Pacific", value: 297 },
  ],
  Europe: [
    { label: "Germany", value: 148 },
    { label: "France", value: 121 },
    { label: "Spain", value: 83 },
  ],
  Americas: [
    { label: "United States", value: 389 },
    { label: "Brazil", value: 92 },
  ],
  "Asia Pacific": [
    { label: "Japan", value: 164 },
    { label: "Australia", value: 133 },
  ],
}

export default function AnalyticsDrilldownBreadcrumb() {
  const [path, setPath] = React.useState(["All regions"])
  const rows = data[path[path.length - 1]!] ?? []
  const max = Math.max(...rows.map((row) => row.value), 1)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <Breadcrumb>
        <BreadcrumbList>
          {path.map((item, index) => (
            <React.Fragment key={item}>
              <BreadcrumbItem>
                {index === path.length - 1 ? (
                  <BreadcrumbPage>{item}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    render={<button type="button" />}
                    onClick={() => setPath(path.slice(0, index + 1))}
                  >
                    {item}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < path.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-2">
        {rows.length === 0 && (
          <p className="text-xs text-muted-foreground">No further breakdown available.</p>
        )}
        {rows.map((row) => (
          <button
            key={row.label}
            type="button"
            disabled={!data[row.label]}
            onClick={() => setPath([...path, row.label])}
            className="flex flex-col gap-1 text-left text-xs enabled:hover:opacity-80 disabled:cursor-default"
          >
            <span className="flex justify-between">
              <span>{row.label}</span>
              <span className="text-muted-foreground">{"$" + row.value + "k"}</span>
            </span>
            <span className="h-1.5 bg-primary" style={{ width: (row.value / max) * 100 + "%" }} />
          </button>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "VersionSelectBreadcrumb",
    description: "API reference breadcrumb with a version selector embedded as one of the levels.",
    code: `
export default function VersionSelectBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">API reference</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Select defaultValue="v3">
            <SelectTrigger size="sm" className="h-6 gap-1 px-2 text-xs" aria-label="API version">
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="start">
              <SelectGroup>
                <SelectItem value="v3">v3 (latest)</SelectItem>
                <SelectItem value="v2">v2</SelectItem>
                <SelectItem value="v1">v1 (legacy)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Payments</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="font-mono">POST /refunds</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
  },
  {
    name: "IconOnlyTooltipBreadcrumb",
    description: "Compact toolbar breadcrumb where parent levels are icons that reveal their names in tooltips.",
    code: `
const levels = [
  { label: "Home", icon: HomeIcon },
  { label: "Projects", icon: FolderKanbanIcon },
  { label: "Website redesign", icon: LayoutTemplateIcon },
]

export default function IconOnlyTooltipBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {levels.map((level) => (
          <Fragment key={level.label}>
            <BreadcrumbItem>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <BreadcrumbLink href="#" aria-label={level.label} className="flex size-6 items-center justify-center hover:bg-muted">
                      <level.icon className="size-3.5" />
                    </BreadcrumbLink>
                  }
                />
                <TooltipContent>{level.label}</TooltipContent>
              </Tooltip>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>Homepage hero</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
    imports: { react: ["Fragment"] },
  },
  {
    name: "RestrictedLevelBreadcrumb",
    description: "Breadcrumb with a permission-locked parent level rendered as disabled text with a lock icon.",
    code: `
export default function RestrictedLevelBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Finance</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <span
            aria-disabled="true"
            title="You don't have access to this folder"
            className="flex cursor-not-allowed items-center gap-1 text-muted-foreground/50"
          >
            <LockIcon className="size-3" />
            Payroll
          </span>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Shared summary</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
  },
  {
    name: "ProjectBoardBreadcrumb",
    description: "Kanban board header with breadcrumb, member avatars and a view switcher.",
    code: `
const members = ["JS", "AK", "LT"]

export default function ProjectBoardBreadcrumb() {
  return (
    <div className="flex w-full max-w-lg flex-wrap items-center justify-between gap-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Roadmap</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Q1 2027</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="flex items-center gap-1.5">
              <KanbanIcon className="size-3.5" />
              Board
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <AvatarGroup>
        {members.map((member) => (
          <Avatar key={member} size="sm">
            <AvatarFallback>{member}</AvatarFallback>
          </Avatar>
        ))}
        <AvatarGroupCount>+4</AvatarGroupCount>
      </AvatarGroup>
    </div>
  )
}`,
  },
  {
    name: "InvoiceDetailBreadcrumb",
    description: "Billing invoice trail with an amount, a paid badge and a download button.",
    code: `
export default function InvoiceDetailBreadcrumb() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3 border p-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Billing</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Invoices</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-mono">INV-2026-0117</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold">$1,240.00</span>
          <Badge variant="secondary">Paid</Badge>
        </div>
        <Button variant="outline" size="sm">
          <DownloadIcon data-icon="inline-start" />
          PDF
        </Button>
      </div>
    </div>
  )
}`,
  },
]

export default examples
