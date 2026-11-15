import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "SaasProductNav",
    description: "SaaS marketing navigation with an icon feature grid under Product and plain Pricing and Docs links.",
    code: `
const features = [
  { title: "Analytics", description: "Dashboards that update in real time.", icon: ChartLineIcon },
  { title: "Automations", description: "Trigger workflows from any event.", icon: WorkflowIcon },
  { title: "Security", description: "SSO, audit logs and roles.", icon: ShieldCheckIcon },
  { title: "Integrations", description: "Connect the tools you already use.", icon: BlocksIcon },
]

export default function SaasProductNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-72 gap-1 sm:w-[28rem] sm:grid-cols-2">
              {features.map((f) => (
                <li key={f.title}>
                  <NavigationMenuLink href="#" className="items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center border bg-muted">
                      <f.icon />
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="font-medium">{f.title}</span>
                      <span className="text-muted-foreground">{f.description}</span>
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "FeaturedCardMegaMenu",
    description: "Mega menu pairing a gradient featured card with a list of links.",
    code: `
const links = [
  { title: "Customer portal", description: "Let clients self-serve invoices." },
  { title: "Usage billing", description: "Meter and charge per API call." },
  { title: "Tax engine", description: "Automatic rates in 40+ regions." },
]

export default function FeaturedCardMegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-72 gap-1 sm:w-[30rem] sm:grid-cols-[11rem_1fr]">
              <NavigationMenuLink
                href="#"
                className="flex-col items-start justify-end gap-1 bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-4 text-white hover:bg-gradient-to-br hover:opacity-95 focus:bg-gradient-to-br"
              >
                <ZapIcon className="size-5" />
                <span className="text-sm font-semibold">Tallyo Billing</span>
                <span className="text-white/80">Everything you need to charge customers, in one API.</span>
              </NavigationMenuLink>
              <ul className="flex flex-col gap-1">
                {links.map((link) => (
                  <li key={link.title}>
                    <NavigationMenuLink href="#" className="flex-col items-start gap-0.5">
                      <span className="font-medium">{link.title}</span>
                      <span className="text-muted-foreground">{link.description}</span>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Customers
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "DocumentationNav",
    description: "Documentation site navigation with Guides and API reference menus of described links.",
    code: `
const guides = [
  { title: "Quickstart", description: "Send your first request in five minutes." },
  { title: "Authentication", description: "API keys, OAuth and scoped tokens." },
  { title: "Webhooks", description: "Receive and verify event payloads." },
  { title: "Rate limits", description: "Quotas, headers and retry strategy." },
]

const reference = ["Customers", "Payments", "Subscriptions", "Invoices", "Events", "Files"]

export default function DocumentationNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Guides</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-72 flex-col gap-1">
              {guides.map((g) => (
                <li key={g.title}>
                  <NavigationMenuLink href="#" className="flex-col items-start gap-0.5">
                    <span className="font-medium">{g.title}</span>
                    <span className="text-muted-foreground">{g.description}</span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>API reference</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-64 grid-cols-2 gap-1">
              {reference.map((r) => (
                <li key={r}>
                  <NavigationMenuLink href="#" className="font-mono">
                    <BracesIcon className="text-muted-foreground" />
                    {r.toLowerCase()}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Changelog
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "StoreCategoriesNav",
    description: "Online store navigation with column-based category lists and a seasonal promo tile.",
    code: `
const columns = [
  { heading: "Clothing", links: ["Jackets", "Knitwear", "Shirts", "Trousers"] },
  { heading: "Shoes", links: ["Sneakers", "Boots", "Sandals"] },
]

export default function StoreCategoriesNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-72 grid-cols-2 gap-3 p-2 sm:w-[30rem] sm:grid-cols-3">
              {columns.map((col) => (
                <div key={col.heading} className="flex flex-col gap-0.5">
                  <p className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{col.heading}</p>
                  {col.links.map((link) => (
                    <NavigationMenuLink key={link} href="#" className="py-1.5">
                      {link}
                    </NavigationMenuLink>
                  ))}
                </div>
              ))}
              <NavigationMenuLink
                href="#"
                className="col-span-2 flex-col items-start justify-end gap-1 bg-gradient-to-br from-orange-200 to-rose-300 p-3 text-rose-950 sm:col-span-1"
              >
                <span className="text-[11px] font-semibold uppercase">Autumn edit</span>
                <span className="text-sm font-semibold">Up to 30% off coats</span>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Men
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={cn(navigationMenuTriggerStyle(), "text-red-600 dark:text-red-400")}>
            Sale
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "DeveloperSdksNav",
    description: "Developer platform menu listing SDKs with language badges and version numbers.",
    code: `
const sdks = [
  { name: "Node.js", version: "v6.2.0", tag: "TS" },
  { name: "Python", version: "v4.8.1", tag: "PY" },
  { name: "Go", version: "v2.3.0", tag: "GO" },
  { name: "Ruby", version: "v3.1.4", tag: "RB" },
]

export default function DeveloperSdksNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-72 flex-col gap-1">
              <p className="px-2 pt-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">SDKs</p>
              <ul className="grid grid-cols-2 gap-1">
                {sdks.map((sdk) => (
                  <li key={sdk.name}>
                    <NavigationMenuLink href="#">
                      <Badge variant="outline" className="w-7 justify-center font-mono">
                        {sdk.tag}
                      </Badge>
                      <span className="flex flex-col">
                        <span className="font-medium">{sdk.name}</span>
                        <span className="font-mono text-[10px] text-muted-foreground">{sdk.version}</span>
                      </span>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
              <Separator className="my-1" />
              <NavigationMenuLink href="#">
                <TerminalIcon /> CLI reference
                <ArrowRightIcon className="ms-auto text-muted-foreground" />
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Status
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "ActiveLinkNav",
    description: "Flat link navigation tracking the active page in state via the Link active prop.",
    code: `
const pages = ["Overview", "Activity", "Settings", "Billing"]

export default function ActiveLinkNav() {
  const [active, setActive] = React.useState("Overview")

  return (
    <div className="flex flex-col items-center gap-3">
      <NavigationMenu>
        <NavigationMenuList>
          {pages.map((page) => (
            <NavigationMenuItem key={page}>
              <NavigationMenuLink
                href="#"
                active={active === page}
                onClick={(e) => {
                  e.preventDefault()
                  setActive(page)
                }}
                className={navigationMenuTriggerStyle()}
              >
                {page}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <p className="text-xs text-muted-foreground">Current page: {active}</p>
    </div>
  )
}`,
  },
  {
    name: "VerticalNavigation",
    description: "Vertical navigation menu whose submenus open to the side of a narrow rail.",
    code: `
export default function VerticalNavigation() {
  return (
    <NavigationMenu orientation="vertical" className="w-44 max-w-none items-stretch border p-1">
      <NavigationMenuList className="w-full flex-col items-stretch">
        <NavigationMenuItem>
          <NavigationMenuLink href="#" active className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}>
            <HouseIcon /> Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="w-full justify-start">
            <FolderIcon className="me-2 size-4" /> Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-48 flex-col gap-1">
              {["Atlas rebrand", "Checkout v2", "Help center"].map((p) => (
                <li key={p}>
                  <NavigationMenuLink href="#">{p}</NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}>
            <InboxIcon /> Inbox
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "IconOnlyNav",
    description: "Compact icon-only navigation links with accessible labels and tooltips via title.",
    code: `
const links = [
  { label: "Dashboard", icon: LayoutDashboardIcon },
  { label: "Messages", icon: MessageSquareIcon },
  { label: "Calendar", icon: CalendarIcon },
  { label: "Files", icon: FolderIcon },
  { label: "Settings", icon: SettingsIcon },
]

export default function IconOnlyNav() {
  return (
    <NavigationMenu className="border p-1">
      <NavigationMenuList className="gap-1">
        {links.map((link, i) => (
          <NavigationMenuItem key={link.label}>
            <NavigationMenuLink
              href="#"
              aria-label={link.label}
              title={link.label}
              active={i === 0}
              className={cn(navigationMenuTriggerStyle(), "size-9 px-0")}
            >
              <link.icon />
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "ControlledValueNav",
    description: "Navigation menu with a controlled value showing which submenu is open and buttons to open them.",
    code: `
export default function ControlledValueNav() {
  const [value, setValue] = React.useState<string | null>(null)

  return (
    <div className="flex flex-col items-center gap-3">
      <NavigationMenu value={value} onValueChange={(next) => setValue(next as string | null)}>
        <NavigationMenuList>
          <NavigationMenuItem value="solutions">
            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex w-56 flex-col gap-1">
                {["For startups", "For agencies", "For enterprise"].map((s) => (
                  <li key={s}>
                    <NavigationMenuLink href="#">{s}</NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem value="company">
            <NavigationMenuTrigger>Company</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex w-48 flex-col gap-1">
                {["About", "Careers", "Contact"].map((s) => (
                  <li key={s}>
                    <NavigationMenuLink href="#">{s}</NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" onClick={() => setValue("solutions")}>
          Open Solutions
        </Button>
        <Button size="sm" variant="ghost" onClick={() => setValue(null)}>
          Close
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">Open menu: {value ?? "none"}</p>
    </div>
  )
}`,
  },
  {
    name: "DashboardProjectsNav",
    description: "In-app dashboard header navigation with a Projects menu showing project status dots and a create link.",
    code: `
const projects = [
  { name: "Marketing site", status: "bg-emerald-500", env: "Production" },
  { name: "Mobile API", status: "bg-amber-500", env: "Deploying" },
  { name: "Data pipeline", status: "bg-red-500", env: "Failed" },
]

export default function DashboardProjectsNav() {
  return (
    <div className="flex w-full max-w-md items-center gap-2 border px-2 py-1">
      <span className="flex size-6 items-center justify-center bg-foreground text-[11px] font-bold text-background">K</span>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" active className={navigationMenuTriggerStyle()}>
              Overview
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex w-64 flex-col gap-1">
                {projects.map((p) => (
                  <NavigationMenuLink key={p.name} href="#">
                    <span className={cn("size-2 rounded-full", p.status)} />
                    <span className="flex-1 font-medium">{p.name}</span>
                    <span className="text-muted-foreground">{p.env}</span>
                  </NavigationMenuLink>
                ))}
                <Separator className="my-1" />
                <NavigationMenuLink href="#">
                  <PlusIcon /> New project
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
              Team
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}`,
  },
  {
    name: "PricingPlansNav",
    description: "Pricing menu previewing plan tiers with monthly prices and a highlighted popular plan.",
    code: `
const plans = [
  { name: "Starter", price: "$0", note: "For side projects" },
  { name: "Team", price: "$24", note: "Per seat, billed yearly", popular: true },
  { name: "Scale", price: "$79", note: "Advanced controls" },
]

export default function PricingPlansNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-72 flex-col gap-1">
              {plans.map((plan) => (
                <NavigationMenuLink key={plan.name} href="#" className={cn("justify-between", plan.popular && "bg-muted/60")}>
                  <span className="flex flex-col">
                    <span className="flex items-center gap-1.5 font-medium">
                      {plan.name}
                      {plan.popular && <Badge variant="secondary">Popular</Badge>}
                    </span>
                    <span className="text-muted-foreground">{plan.note}</span>
                  </span>
                  <span className="text-sm font-semibold tabular-nums">
                    {plan.price}
                    <span className="text-xs font-normal text-muted-foreground">/mo</span>
                  </span>
                </NavigationMenuLink>
              ))}
              <NavigationMenuLink href="#" className="justify-center text-muted-foreground">
                Compare all features <ArrowRightIcon />
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Enterprise
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "CourseCatalogNav",
    description: "Learning platform navigation with course topics, lesson counts and a level filter row.",
    code: `
const topics = [
  { title: "Product design", lessons: 42, icon: PenToolIcon },
  { title: "Frontend engineering", lessons: 68, icon: CodeIcon },
  { title: "Data analysis", lessons: 35, icon: ChartBarIcon },
  { title: "Leadership", lessons: 21, icon: UsersIcon },
]

export default function CourseCatalogNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-72 flex-col gap-1">
              {topics.map((t) => (
                <NavigationMenuLink key={t.title} href="#">
                  <t.icon className="text-muted-foreground" />
                  <span className="flex-1 font-medium">{t.title}</span>
                  <span className="text-muted-foreground tabular-nums">{t.lessons} lessons</span>
                </NavigationMenuLink>
              ))}
              <div className="flex gap-1 border-t px-2 pt-2">
                {["Beginner", "Intermediate", "Advanced"].map((level) => (
                  <Badge key={level} variant="outline">
                    {level}
                  </Badge>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Paths
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            For teams
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "RealEstateNav",
    description: "Property listings navigation with Buy and Rent menus listing popular neighborhoods.",
    code: `
const areas = ["Harbor District", "Old Town", "Riverside", "Maple Heights", "Westgate", "Cedar Park"]

export default function RealEstateNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {["Buy", "Rent"].map((mode) => (
          <NavigationMenuItem key={mode}>
            <NavigationMenuTrigger>{mode}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex w-64 flex-col gap-1">
                <NavigationMenuLink href="#" className="font-medium">
                  <SearchIcon /> {mode === "Buy" ? "Homes for sale" : "Homes for rent"}
                </NavigationMenuLink>
                <p className="px-2 pt-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Popular areas</p>
                <ul className="grid grid-cols-2">
                  {areas.map((area) => (
                    <li key={area}>
                      <NavigationMenuLink href="#" className="py-1.5">
                        <MapPinIcon className="size-3.5 text-muted-foreground" />
                        {area}
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Sell
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "RestaurantMenuNav",
    description: "Restaurant site navigation with a menu dropdown of meal services and a reservation button.",
    code: `
const services = [
  { title: "Breakfast", hours: "7:00 - 11:00", icon: CoffeeIcon },
  { title: "Lunch", hours: "12:00 - 15:00", icon: SaladIcon },
  { title: "Dinner", hours: "18:00 - 22:30", icon: UtensilsCrossedIcon },
  { title: "Wine list", hours: "All day", icon: WineIcon },
]

export default function RestaurantMenuNav() {
  return (
    <div className="flex w-full max-w-md items-center justify-between gap-2">
      <span className="font-serif text-base italic">Olive &amp; Ash</span>
      <div className="flex items-center gap-1">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex w-56 flex-col gap-1">
                  {services.map((s) => (
                    <li key={s.title}>
                      <NavigationMenuLink href="#">
                        <s.icon className="text-muted-foreground" />
                        <span className="flex-1 font-medium">{s.title}</span>
                        <span className="text-muted-foreground tabular-nums">{s.hours}</span>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                Visit
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button size="sm">Reserve</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "DestinationTilesNav",
    description: "Travel booking navigation with gradient destination tiles in a grid.",
    code: `
const destinations = [
  { city: "Lisbon", stays: "1,240 stays", gradient: "from-amber-300 to-orange-500" },
  { city: "Kyoto", stays: "860 stays", gradient: "from-rose-300 to-pink-600" },
  { city: "Reykjavik", stays: "410 stays", gradient: "from-sky-300 to-indigo-600" },
  { city: "Cape Town", stays: "720 stays", gradient: "from-emerald-300 to-teal-600" },
]

export default function DestinationTilesNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-72 grid-cols-2 gap-1 sm:w-96">
              {destinations.map((d) => (
                <li key={d.city}>
                  <NavigationMenuLink href="#" className="flex-col items-stretch gap-1.5">
                    <span className={cn("h-16 bg-gradient-to-br", d.gradient)} />
                    <span className="font-medium">{d.city}</span>
                    <span className="text-muted-foreground">{d.stays}</span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Deals
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Trips
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "BankingNav",
    description: "Banking navigation splitting Personal and Business products into icon lists.",
    code: `
const products = {
  Personal: [
    { title: "Checking", icon: WalletIcon },
    { title: "Savings", icon: PiggyBankIcon },
    { title: "Credit cards", icon: CreditCardIcon },
    { title: "Mortgages", icon: HouseIcon },
  ],
  Business: [
    { title: "Business accounts", icon: BuildingIcon },
    { title: "Payroll", icon: UsersIcon },
    { title: "Merchant services", icon: StoreIcon },
    { title: "Lending", icon: LandmarkIcon },
  ],
}

export default function BankingNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.entries(products).map(([segment, items]) => (
          <NavigationMenuItem key={segment}>
            <NavigationMenuTrigger>{segment}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-72 grid-cols-2 gap-1">
                {items.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink href="#">
                      <item.icon className="text-muted-foreground" />
                      {item.title}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            <LockIcon /> Log in
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "ClinicDoctorsNav",
    description: "Healthcare clinic navigation with a Find a doctor menu of specialists shown with avatar initials.",
    code: `
const doctors = [
  { name: "Dr. Amara Osei", specialty: "Cardiology" },
  { name: "Dr. Tomas Lindqvist", specialty: "Dermatology" },
  { name: "Dr. Rina Patel", specialty: "Pediatrics" },
]

export default function ClinicDoctorsNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Find a doctor</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-64 flex-col gap-1">
              {doctors.map((d) => (
                <NavigationMenuLink key={d.name} href="#">
                  <Avatar className="size-8">
                    <AvatarFallback>{d.name.split(" ").slice(1).map((n) => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <span className="flex flex-col">
                    <span className="font-medium">{d.name}</span>
                    <span className="text-muted-foreground">{d.specialty}</span>
                  </span>
                </NavigationMenuLink>
              ))}
              <Separator className="my-1" />
              <NavigationMenuLink href="#">
                <StethoscopeIcon /> Browse all specialties
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Locations
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "ConferenceScheduleNav",
    description: "Conference site navigation with a Schedule menu listing sessions grouped by day.",
    code: `
const days = [
  {
    day: "Day 1 · Mar 12",
    sessions: [
      { time: "09:30", title: "Opening keynote" },
      { time: "11:00", title: "Design tokens at scale" },
    ],
  },
  {
    day: "Day 2 · Mar 13",
    sessions: [
      { time: "10:00", title: "Edge rendering in practice" },
      { time: "14:30", title: "Closing panel" },
    ],
  },
]

export default function ConferenceScheduleNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Schedule</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-72 gap-2 sm:w-[28rem] sm:grid-cols-2">
              {days.map((d) => (
                <div key={d.day} className="flex flex-col gap-0.5">
                  <p className="px-2 py-1 text-[11px] font-semibold text-muted-foreground">{d.day}</p>
                  {d.sessions.map((s) => (
                    <NavigationMenuLink key={s.title} href="#">
                      <span className="w-10 font-mono text-muted-foreground">{s.time}</span>
                      <span className="font-medium">{s.title}</span>
                    </NavigationMenuLink>
                  ))}
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Speakers
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={cn(navigationMenuTriggerStyle(), "bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary/90")}>
            <TicketIcon /> Tickets
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "AgencyWorkNav",
    description: "Creative agency navigation with case study tiles and a services list side by side.",
    code: `
const work = [
  { client: "Pinecone Coffee", type: "Brand identity", gradient: "from-stone-400 to-amber-700" },
  { client: "Volta Bikes", type: "E-commerce", gradient: "from-lime-300 to-emerald-600" },
]

const services = ["Brand strategy", "Web design", "Motion", "Product design"]

export default function AgencyWorkNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Work</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-72 gap-1 sm:w-[30rem] sm:grid-cols-[1fr_10rem]">
              <ul className="grid grid-cols-2 gap-1">
                {work.map((w) => (
                  <li key={w.client}>
                    <NavigationMenuLink href="#" className="flex-col items-stretch gap-1">
                      <span className={cn("aspect-[4/3] bg-gradient-to-br", w.gradient)} />
                      <span className="font-medium">{w.client}</span>
                      <span className="text-muted-foreground">{w.type}</span>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-0.5 border-t pt-1 sm:border-s sm:border-t-0 sm:ps-1 sm:pt-0">
                {services.map((s) => (
                  <li key={s}>
                    <NavigationMenuLink href="#">{s}</NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Studio
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "NewsSectionsNav",
    description: "News publication navigation with section links and a latest headlines column with timestamps.",
    code: `
const sections = ["World", "Business", "Science", "Culture", "Sport"]
const headlines = [
  { title: "City council approves new tram line", time: "12 min ago" },
  { title: "Researchers map deep-sea coral reef", time: "48 min ago" },
  { title: "Local bakery wins national award", time: "2 h ago" },
]

export default function NewsSectionsNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sections</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-72 gap-2 sm:w-[30rem] sm:grid-cols-[8rem_1fr]">
              <ul className="flex flex-wrap gap-0.5 sm:flex-col">
                {sections.map((s) => (
                  <li key={s}>
                    <NavigationMenuLink href="#" className="font-medium">
                      {s}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-0.5">
                <p className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-red-600 dark:text-red-400">Latest</p>
                {headlines.map((h) => (
                  <NavigationMenuLink key={h.title} href="#" className="flex-col items-start gap-0.5">
                    <span className="font-medium">{h.title}</span>
                    <span className="text-muted-foreground">{h.time}</span>
                  </NavigationMenuLink>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Opinion
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Subscribe
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "SupportCenterNav",
    description: "Help center navigation with support topics and a live system status footer.",
    code: `
const topics = [
  { title: "Getting started", icon: RocketIcon },
  { title: "Account & billing", icon: CreditCardIcon },
  { title: "Troubleshooting", icon: WrenchIcon },
  { title: "Privacy & security", icon: ShieldIcon },
]

export default function SupportCenterNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Support</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-64 flex-col">
              <ul className="flex flex-col gap-1">
                {topics.map((t) => (
                  <li key={t.title}>
                    <NavigationMenuLink href="#">
                      <t.icon className="text-muted-foreground" />
                      {t.title}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
              <NavigationMenuLink href="#" className="mt-1 border-t pt-2.5">
                <span className="size-2 rounded-full bg-emerald-500" />
                All systems operational
                <ExternalLinkIcon className="ms-auto text-muted-foreground" />
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Community
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "IntegrationsDirectoryNav",
    description: "Integrations menu showing a grid of monogram tiles for connected apps and a browse-all link.",
    code: `
const apps = [
  { name: "Ledgerly", color: "bg-emerald-500" },
  { name: "Chatterbox", color: "bg-violet-500" },
  { name: "Taskflow", color: "bg-sky-500" },
  { name: "Mailroom", color: "bg-rose-500" },
  { name: "Drivebox", color: "bg-amber-500" },
  { name: "Formly", color: "bg-teal-500" },
]

export default function IntegrationsDirectoryNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Integrations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-72 flex-col gap-1">
              <ul className="grid grid-cols-3 gap-1">
                {apps.map((app) => (
                  <li key={app.name}>
                    <NavigationMenuLink href="#" className="flex-col gap-1.5 py-3">
                      <span className={cn("flex size-8 items-center justify-center text-xs font-bold text-white", app.color)}>
                        {app.name[0]}
                      </span>
                      {app.name}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
              <NavigationMenuLink href="#" className="justify-between border-t">
                Browse 120+ integrations <ArrowRightIcon />
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Marketplace
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "NewFeatureBadgesNav",
    description: "Product navigation that flags newly launched features with New and Beta badges.",
    code: `
const items = [
  { title: "Docs", description: "Collaborative pages and wikis" },
  { title: "Whiteboards", description: "Infinite canvas for planning", badge: "New" },
  { title: "Forms", description: "Collect answers into tables" },
  { title: "AI assistant", description: "Summaries and drafts", badge: "Beta" },
]

export default function NewFeatureBadgesNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Features
            <span className="ms-1.5 size-1.5 rounded-full bg-primary" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-72 flex-col gap-1">
              {items.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink href="#" className="flex-col items-start gap-0.5">
                    <span className="flex items-center gap-1.5 font-medium">
                      {item.title}
                      {item.badge && <Badge variant={item.badge === "New" ? "default" : "outline"}>{item.badge}</Badge>}
                    </span>
                    <span className="text-muted-foreground">{item.description}</span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Templates
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "HeaderWithAuthButtons",
    description: "Marketing site header combining the navigation menu with sign in and get started buttons.",
    code: `
export default function HeaderWithAuthButtons() {
  return (
    <header className="flex w-full max-w-lg items-center justify-between gap-2 border-b pb-2">
      <div className="flex items-center gap-2">
        <span className="flex size-7 items-center justify-center bg-gradient-to-br from-sky-500 to-indigo-600 text-white">
          <WavesIcon className="size-4" />
        </span>
        <NavigationMenu className="hidden sm:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex w-52 flex-col gap-1">
                  {["Inbox", "Automations", "Reports"].map((p) => (
                    <li key={p}>
                      <NavigationMenuLink href="#">{p}</NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center gap-1.5">
        <Button variant="ghost" size="sm">
          Sign in
        </Button>
        <Button size="sm">Get started</Button>
      </div>
    </header>
  )
}`,
  },
  {
    name: "EndAlignedAccountNav",
    description: "Right-aligned account navigation using align end so the popup lines up with the trigger's edge.",
    code: `
export default function EndAlignedAccountNav() {
  return (
    <div className="flex w-full max-w-md justify-end border-b pb-2">
      <NavigationMenu align="end">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
              <BellIcon /> Alerts
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="gap-2">
              <Avatar className="size-6">
                <AvatarFallback className="text-[10px]">NB</AvatarFallback>
              </Avatar>
              Nadia
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex w-56 flex-col gap-1">
                <div className="px-2 py-1.5">
                  <p className="text-xs font-medium">Nadia Bakr</p>
                  <p className="text-xs text-muted-foreground">nadia@fieldnote.app</p>
                </div>
                <Separator />
                <NavigationMenuLink href="#">
                  <UserIcon /> Profile
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <SettingsIcon /> Preferences
                </NavigationMenuLink>
                <NavigationMenuLink href="#" className="text-destructive">
                  <LogOutIcon /> Sign out
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}`,
  },
  {
    name: "CenterAlignedNav",
    description: "Navigation menu using align center so each popup is centered beneath its trigger.",
    code: `
const menus = {
  Explore: ["Trending", "Collections", "Creators"],
  Create: ["New gallery", "Upload artwork", "Start a challenge"],
}

export default function CenterAlignedNav() {
  return (
    <NavigationMenu align="center">
      <NavigationMenuList>
        {Object.entries(menus).map(([label, links]) => (
          <NavigationMenuItem key={label}>
            <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex w-48 flex-col gap-1 text-center">
                {links.map((link) => (
                  <li key={link}>
                    <NavigationMenuLink href="#" className="justify-center">
                      {link}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "DisabledTriggerNav",
    description: "Navigation with a disabled trigger for an upcoming section labelled as coming soon.",
    code: `
export default function DisabledTriggerNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-52 flex-col gap-1">
              {["Invoice generator", "Expense tracker", "Tax estimator"].map((t) => (
                <li key={t}>
                  <NavigationMenuLink href="#">{t}</NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger disabled>
            Marketplace
            <Badge variant="outline" className="ms-1.5">Soon</Badge>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <p className="w-48 p-2 text-xs">Coming in spring.</p>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Guides
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "FooterRowMegaMenu",
    description: "Solutions mega menu with a footer row offering a demo link and a contact sales link.",
    code: `
const solutions = [
  { title: "Retail", description: "Unify in-store and online sales.", icon: StoreIcon },
  { title: "Hospitality", description: "Bookings, tabs and tips.", icon: HotelIcon },
  { title: "Healthcare", description: "Compliant patient billing.", icon: HeartPulseIcon },
  { title: "Education", description: "Tuition plans and grants.", icon: GraduationCapIcon },
]

export default function FooterRowMegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent className="p-0">
            <div className="w-72 sm:w-[28rem]">
              <ul className="grid gap-1 p-1 sm:grid-cols-2">
                {solutions.map((s) => (
                  <li key={s.title}>
                    <NavigationMenuLink href="#" className="items-start gap-3">
                      <s.icon className="mt-0.5 text-muted-foreground" />
                      <span className="flex flex-col gap-0.5">
                        <span className="font-medium">{s.title}</span>
                        <span className="text-muted-foreground">{s.description}</span>
                      </span>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
              <div className="flex border-t bg-muted/50">
                <NavigationMenuLink href="#" className="flex-1 justify-center">
                  <CirclePlayIcon /> Watch demo
                </NavigationMenuLink>
                <NavigationMenuLink href="#" className="flex-1 justify-center">
                  <PhoneIcon /> Contact sales
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "SearchShortcutNav",
    description: "Docs header with navigation links and a search button showing its keyboard shortcut.",
    code: `
export default function SearchShortcutNav() {
  return (
    <div className="flex w-full max-w-lg items-center gap-2 border-b pb-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex w-52 flex-col gap-1">
                {["Introduction", "Installation", "Theming", "CLI"].map((d) => (
                  <li key={d}>
                    <NavigationMenuLink href="#">{d}</NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden sm:block">
            <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
              Examples
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button variant="outline" size="sm" className="ms-auto w-36 justify-start text-muted-foreground sm:w-48">
        <SearchIcon data-icon="inline-start" />
        Search docs
        <KbdGroup className="ms-auto">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
    </div>
  )
}`,
  },
  {
    name: "CommunityNav",
    description: "Community menu with forum, events and a contributors row of stacked avatar initials.",
    code: `
const contributors = ["AK", "BM", "CS", "DL", "EF"]

export default function CommunityNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Community</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-64 flex-col gap-1">
              <NavigationMenuLink href="#">
                <MessagesSquareIcon /> Discussion forum
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <CalendarDaysIcon /> Meetups & events
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <AwardIcon /> Champions program
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="mt-1 justify-between border-t pt-2.5">
                <span className="flex -space-x-1.5">
                  {contributors.map((c) => (
                    <Avatar key={c} className="size-6 ring-2 ring-popover">
                      <AvatarFallback className="text-[9px]">{c}</AvatarFallback>
                    </Avatar>
                  ))}
                </span>
                <span className="text-muted-foreground">2.4k contributors</span>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "FitnessProgramsNav",
    description: "Fitness app navigation with workout programs showing duration and intensity.",
    code: `
const programs = [
  { title: "Strength foundations", weeks: 6, intensity: 2, icon: DumbbellIcon },
  { title: "Morning yoga flow", weeks: 4, intensity: 1, icon: SunriseIcon },
  { title: "Couch to 10K", weeks: 10, intensity: 3, icon: FootprintsIcon },
]

export default function FitnessProgramsNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-72 flex-col gap-1">
              {programs.map((p) => (
                <li key={p.title}>
                  <NavigationMenuLink href="#" className="gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center bg-orange-500/10 text-orange-600 dark:text-orange-400">
                      <p.icon />
                    </span>
                    <span className="flex flex-1 flex-col">
                      <span className="font-medium">{p.title}</span>
                      <span className="text-muted-foreground">{p.weeks} weeks</span>
                    </span>
                    <span className="flex gap-0.5" aria-label={"Intensity " + p.intensity + " of 3"}>
                      {[1, 2, 3].map((n) => (
                        <span key={n} className={cn("h-3 w-1", n <= p.intensity ? "bg-orange-500" : "bg-muted")} />
                      ))}
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Coaches
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "NonprofitGetInvolvedNav",
    description: "Nonprofit navigation with a Get involved menu and a prominent donate link.",
    code: `
const ways = [
  { title: "Volunteer", description: "Join a weekend river cleanup.", icon: HandHelpingIcon },
  { title: "Fundraise", description: "Start a page for your birthday.", icon: GiftIcon },
  { title: "Partner with us", description: "Corporate matching programs.", icon: HandshakeIcon },
]

export default function NonprofitGetInvolvedNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Get involved</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-64 flex-col gap-1">
              {ways.map((w) => (
                <li key={w.title}>
                  <NavigationMenuLink href="#" className="items-start gap-3">
                    <w.icon className="mt-0.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="flex flex-col gap-0.5">
                      <span className="font-medium">{w.title}</span>
                      <span className="text-muted-foreground">{w.description}</span>
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Our impact
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={cn(navigationMenuTriggerStyle(), "bg-emerald-600 text-white hover:bg-emerald-700 focus:bg-emerald-700")}
          >
            <HeartIcon /> Donate
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "UniversityNav",
    description: "University site navigation with Admissions and Academics menus organized under headings.",
    code: `
const menus = [
  {
    label: "Admissions",
    groups: [
      { heading: "Apply", links: ["Undergraduate", "Graduate", "Transfer"] },
      { heading: "Afford", links: ["Tuition & fees", "Scholarships"] },
    ],
  },
  {
    label: "Academics",
    groups: [
      { heading: "Schools", links: ["Engineering", "Arts & Sciences", "Business"] },
      { heading: "Resources", links: ["Library", "Academic calendar"] },
    ],
  },
]

export default function UniversityNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menus.map((menu) => (
          <NavigationMenuItem key={menu.label}>
            <NavigationMenuTrigger>{menu.label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-72 grid-cols-2 gap-2 sm:w-80">
                {menu.groups.map((g) => (
                  <div key={g.heading} className="flex flex-col gap-0.5">
                    <p className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{g.heading}</p>
                    {g.links.map((link) => (
                      <NavigationMenuLink key={link} href="#" className="py-1.5">
                        {link}
                      </NavigationMenuLink>
                    ))}
                  </div>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Visit
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "MarketsTickerNav",
    description: "Investing app navigation with a Markets menu of indices showing colored percentage changes.",
    code: `
const markets = [
  { name: "Global 100", value: "4,812.30", change: 0.84 },
  { name: "Tech Leaders", value: "17,204.11", change: -0.42 },
  { name: "Green Energy", value: "1,093.57", change: 2.15 },
  { name: "Bond Index", value: "102.48", change: -0.05 },
]

export default function MarketsTickerNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Markets</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-64 flex-col gap-1">
              {markets.map((m) => (
                <li key={m.name}>
                  <NavigationMenuLink href="#">
                    <span className="flex-1 font-medium">{m.name}</span>
                    <span className="tabular-nums text-muted-foreground">{m.value}</span>
                    <span
                      className={cn(
                        "flex w-16 items-center justify-end gap-0.5 tabular-nums",
                        m.change >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
                      )}
                    >
                      {m.change >= 0 ? <ArrowUpRightIcon className="size-3" /> : <ArrowDownRightIcon className="size-3" />}
                      {Math.abs(m.change).toFixed(2)}%
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Portfolio
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Watchlist
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "RoleBasedSolutionsNav",
    description: "HR platform navigation organizing solutions by audience role with short value statements.",
    code: `
const roles = [
  { role: "HR teams", value: "Automate onboarding and reviews", icon: ClipboardListIcon },
  { role: "Managers", value: "Approve time off in one click", icon: UserCheckIcon },
  { role: "Employees", value: "Payslips and benefits in one place", icon: IdCardIcon },
  { role: "Finance", value: "Sync payroll with your ledger", icon: CalculatorIcon },
]

export default function RoleBasedSolutionsNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>For your team</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-72 gap-1 sm:w-[28rem] sm:grid-cols-2">
              {roles.map((r) => (
                <li key={r.role}>
                  <NavigationMenuLink href="#" className="flex-col items-start gap-1 border border-transparent p-3 hover:border-border">
                    <r.icon className="text-muted-foreground" />
                    <span className="font-medium">{r.role}</span>
                    <span className="text-muted-foreground">{r.value}</span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Customers
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "SecurityPlatformNav",
    description: "Security product navigation with platform capabilities and compliance badges in the footer.",
    code: `
const capabilities = [
  { title: "Threat detection", icon: RadarIcon },
  { title: "Access control", icon: KeyRoundIcon },
  { title: "Secrets vault", icon: VaultIcon },
  { title: "Audit trail", icon: ScrollTextIcon },
]

export default function SecurityPlatformNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-72 flex-col gap-1">
              <ul className="grid grid-cols-2 gap-1">
                {capabilities.map((c) => (
                  <li key={c.title}>
                    <NavigationMenuLink href="#">
                      <c.icon className="text-muted-foreground" />
                      {c.title}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-1 border-t px-2 pt-2">
                <ShieldCheckIcon className="size-3.5 text-muted-foreground" />
                {["SOC 2", "ISO 27001", "GDPR"].map((b) => (
                  <Badge key={b} variant="secondary">
                    {b}
                  </Badge>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Trust center
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "CustomerStoriesNav",
    description: "Customers menu featuring short testimonial quotes with avatar initials and a link to all stories.",
    code: `
const stories = [
  { quote: "We closed our books four days faster.", name: "Leah Morgan", company: "Brightline Freight" },
  { quote: "Support tickets dropped by a third.", name: "Kenji Watanabe", company: "Sola Health" },
]

export default function CustomerStoriesNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Customers</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-72 flex-col gap-1">
              {stories.map((s) => (
                <NavigationMenuLink key={s.name} href="#" className="flex-col items-start gap-2 p-3">
                  <QuoteIcon className="text-muted-foreground" />
                  <span className="text-sm">{s.quote}</span>
                  <span className="flex items-center gap-2">
                    <Avatar className="size-6">
                      <AvatarFallback className="text-[10px]">
                        {s.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-muted-foreground">
                      {s.name}, {s.company}
                    </span>
                  </span>
                </NavigationMenuLink>
              ))}
              <NavigationMenuLink href="#" className="justify-center border-t">
                Read all customer stories <ArrowRightIcon />
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "SettingsSectionNav",
    description: "In-app settings navigation with stateful active links and a content panel that follows the selection.",
    code: `
const sections = [
  { id: "general", label: "General", icon: SlidersHorizontalIcon, body: "Workspace name, URL and default language." },
  { id: "members", label: "Members", icon: UsersIcon, body: "Invite people and manage their roles." },
  { id: "billing", label: "Billing", icon: CreditCardIcon, body: "Plan, payment method and invoices." },
]

export default function SettingsSectionNav() {
  const [active, setActive] = React.useState("general")
  const current = sections.find((s) => s.id === active)

  return (
    <div className="w-full max-w-sm border">
      <NavigationMenu className="max-w-none border-b px-1">
        <NavigationMenuList>
          {sections.map((s) => (
            <NavigationMenuItem key={s.id}>
              <NavigationMenuLink
                href="#"
                active={active === s.id}
                onClick={(e) => {
                  e.preventDefault()
                  setActive(s.id)
                }}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "border-b-2 border-transparent bg-transparent hover:bg-transparent focus:bg-transparent data-active:border-foreground data-active:bg-transparent"
                )}
              >
                <s.icon /> {s.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="p-4">
        <p className="text-sm font-medium">{current?.label}</p>
        <p className="text-xs text-muted-foreground">{current?.body}</p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "LocaleSwitcherNav",
    description: "Language switcher inside a navigation menu with a controlled selected locale and check marks.",
    code: `
const locales = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "nl", label: "Nederlands" },
]

export default function LocaleSwitcherNav() {
  const [locale, setLocale] = React.useState("en")

  return (
    <NavigationMenu align="end">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Help
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <GlobeIcon className="me-1.5 size-3.5" />
            {locale.toUpperCase()}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-44 flex-col gap-1">
              {locales.map((l) => (
                <li key={l.code}>
                  <NavigationMenuLink
                    href="#"
                    active={locale === l.code}
                    onClick={(e) => {
                      e.preventDefault()
                      setLocale(l.code)
                    }}
                  >
                    <span className="flex-1">{l.label}</span>
                    {locale === l.code && <CheckIcon />}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "ChangelogNav",
    description: "What's new menu listing recent releases with version badges and dates.",
    code: `
const releases = [
  { version: "3.8", title: "Recurring invoices", date: "Nov 4" },
  { version: "3.7", title: "Dark mode for reports", date: "Oct 21" },
  { version: "3.6", title: "Bulk CSV import", date: "Oct 2" },
]

export default function ChangelogNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Product
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>What&apos;s new</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-64 flex-col gap-1">
              {releases.map((r, i) => (
                <NavigationMenuLink key={r.version} href="#">
                  <Badge variant={i === 0 ? "default" : "secondary"} className="font-mono">
                    v{r.version}
                  </Badge>
                  <span className="flex-1 truncate font-medium">{r.title}</span>
                  <span className="text-muted-foreground">{r.date}</span>
                </NavigationMenuLink>
              ))}
              <NavigationMenuLink href="#" className="border-t text-muted-foreground">
                <RssIcon /> Subscribe to updates
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "PillStyleNav",
    description: "Segmented pill-style navigation where the active link is raised on a muted track.",
    code: `
const tabs = ["All", "Design", "Engineering", "Sales"]

export default function PillStyleNav() {
  const [active, setActive] = React.useState("Design")

  return (
    <NavigationMenu className="bg-muted p-1">
      <NavigationMenuList className="gap-1">
        {tabs.map((tab) => (
          <NavigationMenuItem key={tab}>
            <NavigationMenuLink
              href="#"
              active={active === tab}
              onClick={(e) => {
                e.preventDefault()
                setActive(tab)
              }}
              className={cn(
                navigationMenuTriggerStyle(),
                "h-7 bg-transparent px-3 text-muted-foreground hover:bg-background/60 data-active:bg-background data-active:text-foreground data-active:shadow-sm"
              )}
            >
              {tab}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "InstantOpenNav",
    description: "Navigation menu with zero open delay and a longer close delay, compared side by side with defaults.",
    code: `
function DemoMenu({ label }: { label: string }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="flex w-44 flex-col gap-1">
          {["Overview", "Features", "FAQ"].map((link) => (
            <li key={link}>
              <NavigationMenuLink href="#">{link}</NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export default function InstantOpenNav() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[11px] text-muted-foreground">delay 0 · closeDelay 400</span>
        <NavigationMenu delay={0} closeDelay={400}>
          <NavigationMenuList>
            <DemoMenu label="Instant" />
            <DemoMenu label="Sticky" />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-[11px] text-muted-foreground">Default timing</span>
        <NavigationMenu>
          <NavigationMenuList>
            <DemoMenu label="Default" />
            <DemoMenu label="Menu" />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}`,
  },
  {
    name: "NavWithKeepOpenLinks",
    description: "Filter-style navigation where links use closeOnClick false so several can be chosen while the menu stays open.",
    code: `
const tags = ["Remote", "Full-time", "Contract", "Senior", "Design", "Engineering"]

export default function NavWithKeepOpenLinks() {
  const [selected, setSelected] = React.useState<string[]>(["Remote"])

  return (
    <div className="flex flex-col items-center gap-3">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Job filters
              {selected.length > 0 && <Badge className="ms-1.5 h-4 px-1 text-[10px]">{selected.length}</Badge>}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-60 grid-cols-2 gap-1">
                {tags.map((tag) => {
                  const on = selected.includes(tag)
                  return (
                    <li key={tag}>
                      <NavigationMenuLink
                        href="#"
                        closeOnClick={false}
                        active={on}
                        onClick={(e) => {
                          e.preventDefault()
                          setSelected((prev) => (on ? prev.filter((t) => t !== tag) : [...prev, tag]))
                        }}
                      >
                        {on ? <SquareCheckIcon /> : <SquareIcon className="text-muted-foreground" />}
                        {tag}
                      </NavigationMenuLink>
                    </li>
                  )
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <p className="text-xs text-muted-foreground">{selected.length ? selected.join(" · ") : "No filters"}</p>
    </div>
  )
}`,
  },
  {
    name: "FileBrowserNav",
    description: "File manager navigation with a Locations menu of drives showing storage usage bars.",
    code: `
const drives = [
  { name: "My files", used: 62, total: "100 GB", icon: HardDriveIcon },
  { name: "Shared with me", used: 18, total: "Team", icon: UsersIcon },
  { name: "Archive", used: 91, total: "50 GB", icon: ArchiveIcon },
]

export default function FileBrowserNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <FolderOpenIcon className="me-1.5 size-3.5" /> Locations
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-64 flex-col gap-1">
              {drives.map((d) => (
                <li key={d.name}>
                  <NavigationMenuLink href="#" className="items-start gap-3">
                    <d.icon className="mt-0.5 text-muted-foreground" />
                    <span className="flex flex-1 flex-col gap-1">
                      <span className="flex justify-between">
                        <span className="font-medium">{d.name}</span>
                        <span className="text-muted-foreground">{d.total}</span>
                      </span>
                      <span className="h-1 w-full bg-muted">
                        <span
                          className={cn("block h-full", d.used > 85 ? "bg-red-500" : "bg-primary")}
                          style={{ width: d.used + "%" }}
                        />
                      </span>
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            <ClockIcon /> Recent
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            <Trash2Icon /> Trash
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "CheckoutBreadcrumbNav",
    description: "Checkout step navigation built from links with completed, current and upcoming states.",
    code: `
const steps = ["Cart", "Shipping", "Payment", "Review"]

export default function CheckoutBreadcrumbNav() {
  const [current, setCurrent] = React.useState(1)

  return (
    <div className="flex flex-col items-center gap-3">
      <NavigationMenu>
        <NavigationMenuList className="gap-1">
          {steps.map((step, i) => (
            <NavigationMenuItem key={step} className="flex items-center gap-1">
              {i > 0 && <ChevronRightIcon className="size-3 text-muted-foreground" />}
              <NavigationMenuLink
                href="#"
                active={i === current}
                aria-disabled={i > current}
                onClick={(e) => {
                  e.preventDefault()
                  if (i <= current) setCurrent(i)
                }}
                className={cn(
                  "px-2 py-1",
                  i < current && "text-foreground",
                  i > current && "pointer-events-none text-muted-foreground opacity-60",
                  i === current && "font-semibold"
                )}
              >
                {i < current ? <CircleCheckIcon className="text-emerald-600 dark:text-emerald-400" /> : <span className="tabular-nums">{i + 1}.</span>}
                {step}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Button size="sm" disabled={current === steps.length - 1} onClick={() => setCurrent((c) => c + 1)}>
        Continue to {steps[Math.min(current + 1, steps.length - 1)]}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "ResponsiveOverflowNav",
    description: "Navigation that shows all links on wider screens and collapses extras into a More menu on narrow ones.",
    code: `
const primary = ["Home", "Explore"]
const secondary = ["Library", "Following", "Saved", "History"]

export default function ResponsiveOverflowNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {primary.map((link, i) => (
          <NavigationMenuItem key={link}>
            <NavigationMenuLink href="#" active={i === 0} className={navigationMenuTriggerStyle()}>
              {link}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        {secondary.slice(0, 2).map((link) => (
          <NavigationMenuItem key={link} className="hidden sm:block">
            <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
              {link}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuTrigger>More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-40 flex-col gap-1">
              {secondary.map((link, i) => (
                <li key={link} className={cn(i < 2 && "sm:hidden")}>
                  <NavigationMenuLink href="#">{link}</NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "EmptyStateMenuNav",
    description: "Navigation menu whose Saved items panel shows an empty state with a call to action.",
    code: `
export default function EmptyStateMenuNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Browse
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <BookmarkIcon className="me-1.5 size-3.5" /> Saved
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-60 flex-col items-center gap-2 px-4 py-6 text-center">
              <span className="flex size-10 items-center justify-center bg-muted">
                <BookmarkIcon className="size-5 text-muted-foreground" />
              </span>
              <p className="text-sm font-medium">No saved items yet</p>
              <p className="text-xs text-muted-foreground">Bookmark listings to compare them later.</p>
              <NavigationMenuLink href="#" className="mt-1 border px-3">
                Start browsing <ArrowRightIcon />
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "LoadingContentNav",
    description: "Navigation menu that shows skeleton placeholders while its Recent projects list loads on open.",
    code: `
const recent = ["Q1 roadmap", "Partner portal", "Pricing experiment"]

export default function LoadingContentNav() {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <NavigationMenu
      onValueChange={(value) => {
        if (value && !loaded) window.setTimeout(() => setLoaded(true), 1200)
      }}
    >
      <NavigationMenuList>
        <NavigationMenuItem value="recent">
          <NavigationMenuTrigger>Recent</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-56 flex-col gap-1">
              {loaded
                ? recent.map((r) => (
                    <li key={r}>
                      <NavigationMenuLink href="#">
                        <FileTextIcon className="text-muted-foreground" />
                        {r}
                      </NavigationMenuLink>
                    </li>
                  ))
                : recent.map((r) => (
                    <li key={r} className="flex items-center gap-2 p-2">
                      <Skeleton className="size-4" />
                      <Skeleton className="h-3 flex-1" />
                    </li>
                  ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Starred
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
  {
    name: "BorderedToolbarNav",
    description: "Bordered toolbar-style navigation with separators between grouped links and a menu.",
    code: `
export default function BorderedToolbarNav() {
  return (
    <NavigationMenu className="border">
      <NavigationMenuList className="divide-x">
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            <ListIcon /> List
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" active className={navigationMenuTriggerStyle()}>
            <KanbanIcon /> Board
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <EyeIcon className="me-1.5 size-3.5" /> Views
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-48 flex-col gap-1">
              {[
                { label: "Timeline", icon: GanttChartIcon },
                { label: "Calendar", icon: CalendarIcon },
                { label: "Table", icon: TableIcon },
              ].map((v) => (
                <li key={v.label}>
                  <NavigationMenuLink href="#">
                    <v.icon /> {v.label}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
  },
]

export default examples
