import type { Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "TimezoneSelect",
    description: "Timezone picker grouped by region with UTC offsets beside each city.",
    code: `
const regions = [
  {
    label: "Americas",
    zones: [
      { label: "Los Angeles", value: "america-la", offset: "UTC-8" },
      { label: "Chicago", value: "america-chicago", offset: "UTC-6" },
      { label: "New York", value: "america-ny", offset: "UTC-5" },
      { label: "Sao Paulo", value: "america-sp", offset: "UTC-3" },
    ],
  },
  {
    label: "Europe",
    zones: [
      { label: "London", value: "europe-london", offset: "UTC+0" },
      { label: "Berlin", value: "europe-berlin", offset: "UTC+1" },
      { label: "Athens", value: "europe-athens", offset: "UTC+2" },
    ],
  },
  {
    label: "Asia Pacific",
    zones: [
      { label: "Dubai", value: "asia-dubai", offset: "UTC+4" },
      { label: "Singapore", value: "asia-singapore", offset: "UTC+8" },
      { label: "Tokyo", value: "asia-tokyo", offset: "UTC+9" },
      { label: "Sydney", value: "australia-sydney", offset: "UTC+10" },
    ],
  },
]

const items = regions.flatMap((region) => region.zones)

export default function TimezoneSelect() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="timezone">Timezone</FieldLabel>
      <Select items={items} defaultValue="europe-berlin">
        <SelectTrigger id="timezone" className="w-full">
          <GlobeIcon className="text-muted-foreground" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {regions.map((region, index) => (
            <SelectGroup key={region.label}>
              {index > 0 && <SelectSeparator />}
              <SelectLabel>{region.label}</SelectLabel>
              {region.zones.map((zone) => (
                <SelectItem key={zone.value} value={zone.value}>
                  {zone.label}
                  <span className="ms-auto text-muted-foreground tabular-nums">
                    {zone.offset}
                  </span>
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
      <FieldDescription>Used for scheduled reports and reminders.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "CompactFilterBar",
    description: "Small-size selects composed into a dense filter bar above a task list.",
    code: `
const statuses = [
  { label: "Any status", value: "any" },
  { label: "Open", value: "open" },
  { label: "In review", value: "review" },
  { label: "Closed", value: "closed" },
]

const owners = [
  { label: "Anyone", value: "anyone" },
  { label: "Me", value: "me" },
  { label: "Unassigned", value: "unassigned" },
]

const ranges = [
  { label: "This week", value: "week" },
  { label: "This month", value: "month" },
  { label: "This quarter", value: "quarter" },
]

export default function CompactFilterBar() {
  return (
    <div className="flex w-full max-w-md flex-wrap items-center gap-2 border bg-muted/30 p-2">
      <ListFilterIcon className="size-4 text-muted-foreground" />
      <Select items={statuses} defaultValue="any">
        <SelectTrigger size="sm" aria-label="Status">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {statuses.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select items={owners} defaultValue="me">
        <SelectTrigger size="sm" aria-label="Owner">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {owners.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select items={ranges} defaultValue="month">
        <SelectTrigger size="sm" aria-label="Date range">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {ranges.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button variant="ghost" size="sm" className="ms-auto">
        Reset
      </Button>
    </div>
  )
}`,
  },
  {
    name: "DisabledPlanSelect",
    description: "A disabled select locked behind a plan upgrade, with an explanatory badge.",
    code: `
const retention = [
  { label: "30 days", value: "30" },
  { label: "90 days", value: "90" },
  { label: "1 year", value: "365" },
]

export default function DisabledPlanSelect() {
  return (
    <Field className="w-full max-w-xs">
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor="retention">Log retention</FieldLabel>
        <Badge variant="secondary">
          <LockIcon />
          Pro
        </Badge>
      </div>
      <Select items={retention} defaultValue="30" disabled>
        <SelectTrigger id="retention" className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {retention.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldDescription>
        Upgrade to Pro to keep logs for up to a year.
      </FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "RequiredInvalidSelect",
    description: "Required select that shows an invalid state and error message until a value is chosen.",
    code: `
const departments = [
  { label: "Engineering", value: "engineering" },
  { label: "Design", value: "design" },
  { label: "Marketing", value: "marketing" },
  { label: "Finance", value: "finance" },
]

export default function RequiredInvalidSelect() {
  const [value, setValue] = React.useState<string | null>(null)
  const [touched, setTouched] = React.useState(false)
  const invalid = touched && !value

  return (
    <form
      className="flex w-full max-w-xs flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        setTouched(true)
      }}
    >
      <Field data-invalid={invalid}>
        <FieldLabel htmlFor="department">Department</FieldLabel>
        <Select items={departments} value={value} onValueChange={setValue} required>
          <SelectTrigger id="department" className="w-full" aria-invalid={invalid}>
            <SelectValue placeholder="Choose a department" />
          </SelectTrigger>
          <SelectContent>
            {departments.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {invalid && <FieldError>Please select a department to continue.</FieldError>}
      </Field>
      <Button type="submit">Continue</Button>
    </form>
  )
}`,
  },
  {
    name: "ThemePreviewSelect",
    description: "Controlled appearance select that updates a live preview swatch.",
    code: `
const themes = [
  { label: "Light", value: "light", icon: SunIcon },
  { label: "Dark", value: "dark", icon: MoonIcon },
  { label: "System", value: "system", icon: MonitorIcon },
]

export default function ThemePreviewSelect() {
  const [theme, setTheme] = React.useState<string | null>("dark")

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div
        className={cn(
          "flex h-24 flex-col gap-2 border p-3",
          theme === "light" && "bg-white",
          theme === "dark" && "bg-neutral-900",
          theme === "system" && "bg-linear-to-r from-white to-neutral-900"
        )}
      >
        <div className="h-2 w-1/2 bg-neutral-400/60" />
        <div className="h-2 w-3/4 bg-neutral-400/40" />
        <div className="mt-auto h-5 w-16 bg-neutral-500/70" />
      </div>
      <Select items={themes} value={theme} onValueChange={setTheme}>
        <SelectTrigger className="w-full" aria-label="Theme">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {themes.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <item.icon />
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}`,
  },
  {
    name: "MultipleSkillsSelect",
    description: "Multi-select with a formatted trigger summarising how many skills are chosen.",
    code: `
const skills = [
  { label: "TypeScript", value: "typescript" },
  { label: "React", value: "react" },
  { label: "Node.js", value: "node" },
  { label: "PostgreSQL", value: "postgres" },
  { label: "Figma", value: "figma" },
  { label: "Rust", value: "rust" },
]

const labelFor = (value: string) =>
  skills.find((skill) => skill.value === value)?.label ?? value

export default function MultipleSkillsSelect() {
  const [value, setValue] = React.useState<string[]>(["typescript", "react"])

  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="skills">Skills</FieldLabel>
      <Select items={skills} multiple value={value} onValueChange={setValue}>
        <SelectTrigger id="skills" className="w-full">
          <SelectValue>
            {(selected: string[]) =>
              selected.length === 0
                ? "Select skills"
                : selected.length <= 2
                  ? selected.map(labelFor).join(", ")
                  : selected.length + " skills selected"
            }
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {skills.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldDescription>Pick everything you use at least weekly.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "IssueStatusSelect",
    description: "Issue status select with colored status dots in the trigger and options.",
    code: `
const statuses = [
  { label: "Backlog", value: "backlog", color: "bg-neutral-400" },
  { label: "Todo", value: "todo", color: "bg-sky-500" },
  { label: "In progress", value: "progress", color: "bg-amber-500" },
  { label: "Done", value: "done", color: "bg-emerald-500" },
  { label: "Canceled", value: "canceled", color: "bg-red-500" },
]

export default function IssueStatusSelect() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-4 border p-3">
      <div className="flex min-w-0 flex-col">
        <span className="text-xs text-muted-foreground">DES-482</span>
        <span className="truncate text-sm font-medium">Redesign onboarding checklist</span>
      </div>
      <Select items={statuses} defaultValue="progress">
        <SelectTrigger size="sm" aria-label="Status">
          <SelectValue>
            {(value: string) => {
              const status = statuses.find((item) => item.value === value)
              return (
                <>
                  <span className={cn("size-2 rounded-full", status?.color)} />
                  {status?.label}
                </>
              )
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {statuses.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <span className={cn("size-2 rounded-full", item.color)} />
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}`,
  },
  {
    name: "PrioritySelectIcons",
    description: "Priority select using signal icons to communicate urgency levels.",
    code: `
const priorities = [
  { label: "No priority", value: "none", icon: MinusIcon, tone: "text-muted-foreground" },
  { label: "Low", value: "low", icon: SignalLowIcon, tone: "text-sky-500" },
  { label: "Medium", value: "medium", icon: SignalMediumIcon, tone: "text-amber-500" },
  { label: "High", value: "high", icon: SignalHighIcon, tone: "text-orange-500" },
  { label: "Urgent", value: "urgent", icon: SirenIcon, tone: "text-red-500" },
]

export default function PrioritySelectIcons() {
  return (
    <Field className="w-full max-w-56">
      <FieldLabel htmlFor="priority">Priority</FieldLabel>
      <Select items={priorities} defaultValue="high">
        <SelectTrigger id="priority" className="w-full">
          <SelectValue>
            {(value: string) => {
              const priority = priorities.find((item) => item.value === value)
              if (!priority) return null
              return (
                <>
                  <priority.icon className={priority.tone} />
                  {priority.label}
                </>
              )
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {priorities.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <item.icon className={item.tone} />
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  )
}`,
  },
  {
    name: "AssigneeAvatarSelect",
    description: "Assignee picker showing avatar initials and email for each teammate.",
    code: `
const people = [
  { label: "Maya Chen", value: "maya", email: "maya@northwind.dev", initials: "MC" },
  { label: "Jonas Weber", value: "jonas", email: "jonas@northwind.dev", initials: "JW" },
  { label: "Priya Nair", value: "priya", email: "priya@northwind.dev", initials: "PN" },
  { label: "Diego Alvarez", value: "diego", email: "diego@northwind.dev", initials: "DA" },
]

export default function AssigneeAvatarSelect() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="assignee">Assignee</FieldLabel>
      <Select items={people} defaultValue="priya">
        <SelectTrigger id="assignee" className="h-10 w-full">
          <SelectValue>
            {(value: string) => {
              const person = people.find((item) => item.value === value)
              if (!person) return null
              return (
                <>
                  <Avatar size="sm">
                    <AvatarFallback>{person.initials}</AvatarFallback>
                  </Avatar>
                  {person.label}
                </>
              )
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {people.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <Avatar size="sm">
                <AvatarFallback>{item.initials}</AvatarFallback>
              </Avatar>
              <span className="flex flex-col">
                <span>{item.label}</span>
                <span className="text-muted-foreground">{item.email}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  )
}`,
  },
  {
    name: "PaymentMethodSelect",
    description: "Saved payment method select at checkout with card brand chips and expiry dates.",
    code: `
const methods = [
  { label: "Visa ending 4242", value: "visa", brand: "VISA", expires: "08/27" },
  { label: "Mastercard ending 1881", value: "mc", brand: "MC", expires: "02/26" },
  { label: "Amex ending 0005", value: "amex", brand: "AMEX", expires: "11/28" },
]

export default function PaymentMethodSelect() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Pay with</span>
        <Button variant="link" size="xs">
          <PlusIcon data-icon="inline-start" />
          Add card
        </Button>
      </div>
      <Select items={methods} defaultValue="visa">
        <SelectTrigger className="h-10 w-full" aria-label="Payment method">
          <CreditCardIcon className="text-muted-foreground" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {methods.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <span className="flex h-5 w-9 items-center justify-center border bg-muted text-[9px] font-semibold">
                {item.brand}
              </span>
              {item.label}
              <span className="ms-auto ps-4 text-muted-foreground">{item.expires}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button className="w-full">Pay $128.00</Button>
    </div>
  )
}`,
  },
  {
    name: "ShippingSpeedSelect",
    description: "Shipping option select with delivery estimates and prices that update the order total.",
    code: `
const options = [
  { label: "Standard", value: "standard", eta: "5-7 business days", price: 0 },
  { label: "Express", value: "express", eta: "2-3 business days", price: 9 },
  { label: "Overnight", value: "overnight", eta: "Next business day", price: 24 },
]

const subtotal = 86

export default function ShippingSpeedSelect() {
  const [speed, setSpeed] = React.useState<string | null>("standard")
  const shipping = options.find((option) => option.value === speed)?.price ?? 0

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4 text-sm">
      <Field>
        <FieldLabel htmlFor="shipping">Shipping</FieldLabel>
        <Select items={options} value={speed} onValueChange={setSpeed}>
          <SelectTrigger id="shipping" className="w-full">
            <TruckIcon className="text-muted-foreground" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {options.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                <span className="flex flex-col">
                  <span>{item.label}</span>
                  <span className="text-muted-foreground">{item.eta}</span>
                </span>
                <span className="ms-auto ps-4">
                  {item.price === 0 ? "Free" : "$" + item.price}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <div className="flex justify-between text-muted-foreground">
        <span>Subtotal</span>
        <span>{"$" + subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-muted-foreground">
        <span>Shipping</span>
        <span>{shipping === 0 ? "Free" : "$" + shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between border-t pt-3 font-medium">
        <span>Total</span>
        <span>{"$" + (subtotal + shipping).toFixed(2)}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ProductSortSelect",
    description: "Sort-by select in a product listing toolbar that reorders the visible results.",
    code: `
const sorts = [
  { label: "Featured", value: "featured" },
  { label: "Price: low to high", value: "price-asc" },
  { label: "Price: high to low", value: "price-desc" },
  { label: "Name: A to Z", value: "name" },
]

const products = [
  { name: "Canvas tote", price: 32, rank: 2 },
  { name: "Wool beanie", price: 24, rank: 1 },
  { name: "Trail bottle", price: 18, rank: 3 },
]

export default function ProductSortSelect() {
  const [sort, setSort] = React.useState<string | null>("featured")
  const sorted = [...products].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price
    if (sort === "price-desc") return b.price - a.price
    if (sort === "name") return a.name.localeCompare(b.name)
    return a.rank - b.rank
  })

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{products.length} products</span>
        <Select items={sorts} value={sort} onValueChange={setSort}>
          <SelectTrigger size="sm" aria-label="Sort by">
            <ArrowUpDownIcon className="text-muted-foreground" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end" alignItemWithTrigger={false}>
            {sorts.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <ul className="divide-y border">
        {sorted.map((product) => (
          <li key={product.name} className="flex justify-between p-3 text-sm">
            <span>{product.name}</span>
            <span className="text-muted-foreground">{"$" + product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}`,
  },
  {
    name: "AnalyticsRangeSelect",
    description: "Dashboard date-range select that swaps the headline KPI for the chosen period.",
    code: `
const ranges = [
  { label: "Last 24 hours", value: "24h", visitors: "1,284", change: "+4.1%" },
  { label: "Last 7 days", value: "7d", visitors: "9,870", change: "+12.6%" },
  { label: "Last 30 days", value: "30d", visitors: "41,302", change: "-2.3%" },
  { label: "Last 12 months", value: "12m", visitors: "502,118", change: "+38.0%" },
]

export default function AnalyticsRangeSelect() {
  const [range, setRange] = React.useState<string | null>("7d")
  const current = ranges.find((item) => item.value === range) ?? ranges[1]!

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardDescription>Unique visitors</CardDescription>
        <CardTitle className="text-2xl tabular-nums">{current.visitors}</CardTitle>
        <CardAction>
          <Select items={ranges} value={range} onValueChange={setRange}>
            <SelectTrigger size="sm" aria-label="Date range">
              <CalendarIcon className="text-muted-foreground" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end" alignItemWithTrigger={false}>
              {ranges.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Badge variant={current.change.startsWith("-") ? "destructive" : "secondary"}>
          {current.change} vs previous period
        </Badge>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "LanguageSelect",
    description: "Interface language select listing each language in its native name.",
    code: `
const languages = [
  { label: "English", value: "en", native: "English" },
  { label: "Spanish", value: "es", native: "Espanol" },
  { label: "French", value: "fr", native: "Francais" },
  { label: "German", value: "de", native: "Deutsch" },
  { label: "Japanese", value: "ja", native: "日本語" },
  { label: "Korean", value: "ko", native: "한국어" },
]

export default function LanguageSelect() {
  return (
    <Field orientation="horizontal" className="w-full max-w-sm justify-between">
      <FieldContent>
        <FieldLabel htmlFor="language">Language</FieldLabel>
        <FieldDescription>Applies to menus and emails.</FieldDescription>
      </FieldContent>
      <Select items={languages} defaultValue="en">
        <SelectTrigger id="language" className="w-36">
          <LanguagesIcon className="text-muted-foreground" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
              <span className="ms-auto ps-3 text-muted-foreground">{item.native}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  )
}`,
  },
  {
    name: "CurrencyConverterSelect",
    description: "Currency select that reformats a price amount with the chosen currency and rate.",
    code: `
const currencies = [
  { label: "USD", value: "USD", name: "US Dollar", symbol: "$", rate: 1 },
  { label: "EUR", value: "EUR", name: "Euro", symbol: "€", rate: 0.92 },
  { label: "GBP", value: "GBP", name: "British Pound", symbol: "£", rate: 0.79 },
  { label: "JPY", value: "JPY", name: "Japanese Yen", symbol: "¥", rate: 151.4 },
]

export default function CurrencyConverterSelect() {
  const [code, setCode] = React.useState<string | null>("USD")
  const currency = currencies.find((item) => item.value === code) ?? currencies[0]!
  const amount = 49 * currency.rate

  return (
    <div className="flex w-full max-w-xs items-center justify-between gap-3 border p-4">
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">Team plan, monthly</span>
        <span className="text-2xl font-semibold tabular-nums">
          {currency.symbol}
          {currency.value === "JPY" ? Math.round(amount) : amount.toFixed(2)}
        </span>
      </div>
      <Select items={currencies} value={code} onValueChange={setCode}>
        <SelectTrigger size="sm" aria-label="Currency">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {currencies.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <span className="w-4 text-center text-muted-foreground">{item.symbol}</span>
              {item.label}
              <span className="text-muted-foreground">{item.name}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}`,
  },
  {
    name: "FontFamilySelect",
    description: "Typography select where each option previews itself in its own font family.",
    code: `
const fonts = [
  { label: "Sans serif", value: "sans", className: "font-sans" },
  { label: "Serif", value: "serif", className: "font-serif" },
  { label: "Monospace", value: "mono", className: "font-mono" },
]

export default function FontFamilySelect() {
  const [font, setFont] = React.useState<string | null>("serif")
  const current = fonts.find((item) => item.value === font) ?? fonts[0]!

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Select items={fonts} value={font} onValueChange={setFont}>
        <SelectTrigger className="w-full" aria-label="Font family">
          <TypeIcon className="text-muted-foreground" />
          <SelectValue className={current.className} />
        </SelectTrigger>
        <SelectContent>
          {fonts.map((item) => (
            <SelectItem key={item.value} value={item.value} className={item.className}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className={cn("border bg-muted/30 p-4 text-sm leading-relaxed", current.className)}>
        The quiet harbour town woke slowly, its lanterns fading as the first ferries
        pushed out into the grey morning.
      </p>
    </div>
  )
}`,
  },
  {
    name: "TeamRoleSelect",
    description: "Inline small role selects for each member in a team management list.",
    code: `
const roles = [
  { label: "Owner", value: "owner" },
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
]

const members = [
  { name: "Lena Ortiz", email: "lena@fieldnote.app", role: "owner" },
  { name: "Sam Okafor", email: "sam@fieldnote.app", role: "admin" },
  { name: "Iris Novak", email: "iris@fieldnote.app", role: "editor" },
  { name: "Theo Laurent", email: "theo@fieldnote.app", role: "viewer" },
]

export default function TeamRoleSelect() {
  return (
    <div className="w-full max-w-md divide-y border">
      {members.map((member) => (
        <div key={member.email} className="flex items-center gap-3 p-3">
          <Avatar>
            <AvatarFallback>
              {member.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-1 flex-col text-sm">
            <span className="font-medium">{member.name}</span>
            <span className="truncate text-xs text-muted-foreground">{member.email}</span>
          </div>
          <Select items={roles} defaultValue={member.role} disabled={member.role === "owner"}>
            <SelectTrigger size="sm" className="w-24" aria-label={"Role for " + member.name}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {roles
                .filter((role) => role.value !== "owner")
                .map((role) => (
                  <SelectItem key={role.value} value={role.value}>
                    {role.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "NotificationSettingsSelects",
    description: "Settings panel rows pairing notification channels with frequency selects.",
    code: `
const frequencies = [
  { label: "Instantly", value: "instant" },
  { label: "Hourly digest", value: "hourly" },
  { label: "Daily digest", value: "daily" },
  { label: "Never", value: "never" },
]

const channels = [
  { title: "Mentions", description: "When someone @mentions you", value: "instant" },
  { title: "Comments", description: "Replies on threads you follow", value: "hourly" },
  { title: "Product updates", description: "New features and changelog", value: "never" },
]

export default function NotificationSettingsSelects() {
  return (
    <FieldGroup className="w-full max-w-md">
      {channels.map((channel) => (
        <Field key={channel.title} orientation="horizontal">
          <FieldContent>
            <FieldTitle>{channel.title}</FieldTitle>
            <FieldDescription>{channel.description}</FieldDescription>
          </FieldContent>
          <Select items={frequencies} defaultValue={channel.value}>
            <SelectTrigger size="sm" className="w-32" aria-label={channel.title + " frequency"}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {frequencies.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      ))}
    </FieldGroup>
  )
}`,
  },
  {
    name: "BillingCycleSelect",
    description: "Billing cycle select on a plan card that recalculates price and savings.",
    code: `
const cycles = [
  { label: "Monthly", value: "monthly", price: 20, note: "Billed every month" },
  { label: "Quarterly", value: "quarterly", price: 18, note: "Save 10%" },
  { label: "Yearly", value: "yearly", price: 16, note: "Save 20%" },
]

export default function BillingCycleSelect() {
  const [cycle, setCycle] = React.useState<string | null>("yearly")
  const current = cycles.find((item) => item.value === cycle) ?? cycles[0]!

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Studio plan</CardTitle>
        <CardDescription>For small creative teams.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-semibold">{"$" + current.price}</span>
          <span className="text-sm text-muted-foreground">per seat / month</span>
        </div>
        <Select items={cycles} value={cycle} onValueChange={setCycle}>
          <SelectTrigger className="w-full" aria-label="Billing cycle">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {cycles.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
                <span className="ms-auto ps-4 text-muted-foreground">{item.note}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Upgrade</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "DataRegionSelect",
    description: "Data residency select with unavailable regions disabled and marked coming soon.",
    code: `
const regions = [
  { label: "US East (Virginia)", value: "us-east", available: true },
  { label: "US West (Oregon)", value: "us-west", available: true },
  { label: "EU Central (Frankfurt)", value: "eu-central", available: true },
  { label: "AP South (Mumbai)", value: "ap-south", available: false },
  { label: "SA East (Sao Paulo)", value: "sa-east", available: false },
]

export default function DataRegionSelect() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="region">Data region</FieldLabel>
      <Select items={regions} defaultValue="eu-central">
        <SelectTrigger id="region" className="w-full">
          <ServerIcon className="text-muted-foreground" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {regions.map((item) => (
            <SelectItem key={item.value} value={item.value} disabled={!item.available}>
              {item.label}
              {!item.available && (
                <Badge variant="outline" className="ms-auto">
                  Soon
                </Badge>
              )}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldDescription>Region cannot be changed after the project is created.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "MeetingTimeSelect",
    description: "Long scrollable list of half-hour time slots for booking a meeting.",
    code: `
const slots = Array.from({ length: 48 }, (_, index) => {
  const hours = Math.floor(index / 2)
  const minutes = index % 2 === 0 ? "00" : "30"
  const period = hours < 12 ? "AM" : "PM"
  const display = (hours % 12 === 0 ? 12 : hours % 12) + ":" + minutes + " " + period
  return { label: display, value: String(hours).padStart(2, "0") + ":" + minutes }
})

export default function MeetingTimeSelect() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex flex-col">
        <span className="text-sm font-medium">Design review</span>
        <span className="text-xs text-muted-foreground">Thursday, March 12 - 45 min</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Field>
          <FieldLabel htmlFor="start-time">Start</FieldLabel>
          <Select items={slots} defaultValue="10:00">
            <SelectTrigger id="start-time" className="w-full">
              <ClockIcon className="text-muted-foreground" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {slots.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="end-time">End</FieldLabel>
          <Select items={slots} defaultValue="10:30">
            <SelectTrigger id="end-time" className="w-full">
              <ClockIcon className="text-muted-foreground" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {slots.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>
    </div>
  )
}`,
  },
  {
    name: "CascadingLocationSelect",
    description: "Dependent selects where the city options change based on the chosen country.",
    code: `
const countries = [
  { label: "Canada", value: "ca" },
  { label: "Japan", value: "jp" },
  { label: "Portugal", value: "pt" },
]

const cities: Record<string, { label: string; value: string }[]> = {
  ca: [
    { label: "Toronto", value: "toronto" },
    { label: "Vancouver", value: "vancouver" },
    { label: "Montreal", value: "montreal" },
  ],
  jp: [
    { label: "Tokyo", value: "tokyo" },
    { label: "Osaka", value: "osaka" },
    { label: "Kyoto", value: "kyoto" },
  ],
  pt: [
    { label: "Lisbon", value: "lisbon" },
    { label: "Porto", value: "porto" },
  ],
}

export default function CascadingLocationSelect() {
  const [country, setCountry] = React.useState<string | null>("jp")
  const [city, setCity] = React.useState<string | null>("kyoto")
  const cityItems = country ? cities[country] ?? [] : []

  return (
    <FieldGroup className="w-full max-w-xs">
      <Field>
        <FieldLabel htmlFor="country">Country</FieldLabel>
        <Select
          items={countries}
          value={country}
          onValueChange={(next) => {
            setCountry(next)
            setCity(null)
          }}
        >
          <SelectTrigger id="country" className="w-full">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field>
        <FieldLabel htmlFor="city">City</FieldLabel>
        <Select items={cityItems} value={city} onValueChange={setCity} disabled={!country}>
          <SelectTrigger id="city" className="w-full">
            <SelectValue placeholder="Select a city" />
          </SelectTrigger>
          <SelectContent>
            {cityItems.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
    </FieldGroup>
  )
}`,
  },
  {
    name: "PlaceholderSelect",
    description: "Uncontrolled select that starts empty and shows a muted placeholder prompt.",
    code: `
const reasons = [
  { label: "Too expensive", value: "price" },
  { label: "Missing features I need", value: "features" },
  { label: "Switching to another tool", value: "switching" },
  { label: "Just taking a break", value: "break" },
  { label: "Other", value: "other" },
]

export default function PlaceholderSelect() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium">Sorry to see you go</h3>
        <p className="text-xs text-muted-foreground">
          Tell us why you&apos;re canceling so we can improve.
        </p>
      </div>
      <Select items={reasons}>
        <SelectTrigger className="w-full" aria-label="Cancellation reason">
          <SelectValue placeholder="Select a reason" />
        </SelectTrigger>
        <SelectContent>
          {reasons.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button variant="destructive">Cancel subscription</Button>
    </div>
  )
}`,
  },
  {
    name: "FormDataSelect",
    description: "Select with a name attribute submitted through native form data.",
    code: `
const sizes = [
  { label: "1-10 employees", value: "1-10" },
  { label: "11-50 employees", value: "11-50" },
  { label: "51-200 employees", value: "51-200" },
  { label: "201+ employees", value: "201+" },
]

export default function FormDataSelect() {
  const [submitted, setSubmitted] = React.useState<string | null>(null)

  return (
    <form
      className="flex w-full max-w-xs flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        setSubmitted(String(data.get("companySize") ?? ""))
      }}
    >
      <Field>
        <FieldLabel htmlFor="company-size">Company size</FieldLabel>
        <Select items={sizes} name="companySize" defaultValue="11-50">
          <SelectTrigger id="company-size" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Button type="submit">Save</Button>
      {submitted !== null && (
        <p className="bg-muted p-2 font-mono text-xs">companySize = {submitted}</p>
      )}
    </form>
  )
}`,
  },
  {
    name: "ReadOnlySelect",
    description: "Read-only select showing a value set by an administrator that members cannot change.",
    code: `
const policies = [
  { label: "Require SSO", value: "sso" },
  { label: "Password or SSO", value: "any" },
]

export default function ReadOnlySelect() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="auth-policy">Sign-in method</FieldLabel>
      <Select items={policies} defaultValue="sso" readOnly>
        <SelectTrigger id="auth-policy" className="w-full bg-muted/50">
          <ShieldCheckIcon className="text-muted-foreground" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {policies.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldDescription className="flex items-center gap-1">
        <LockIcon className="size-3" />
        Managed by your organization admin.
      </FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "WorkspaceSwitcherSelect",
    description: "Sidebar-footer workspace switcher that opens upward with gradient workspace marks.",
    code: `
const workspaces = [
  { label: "Acme Studio", value: "acme", plan: "Pro", gradient: "from-violet-500 to-fuchsia-500" },
  { label: "Lumen Labs", value: "lumen", plan: "Free", gradient: "from-sky-500 to-cyan-400" },
  { label: "Harbor & Co", value: "harbor", plan: "Team", gradient: "from-amber-500 to-orange-500" },
]

export default function WorkspaceSwitcherSelect() {
  return (
    <div className="flex h-56 w-full max-w-60 flex-col justify-end border bg-muted/30 p-2">
      <Select items={workspaces} defaultValue="acme">
        <SelectTrigger className="h-12 w-full" aria-label="Workspace">
          <SelectValue>
            {(value: string) => {
              const workspace = workspaces.find((item) => item.value === value)
              if (!workspace) return null
              return (
                <>
                  <span className={cn("size-7 shrink-0 bg-linear-to-br", workspace.gradient)} />
                  <span className="flex flex-col text-start">
                    <span className="font-medium">{workspace.label}</span>
                    <span className="text-muted-foreground">{workspace.plan} plan</span>
                  </span>
                </>
              )
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent side="top" alignItemWithTrigger={false}>
          <SelectGroup>
            <SelectLabel>Workspaces</SelectLabel>
            {workspaces.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                <span className={cn("size-5 bg-linear-to-br", item.gradient)} />
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}`,
  },
  {
    name: "ChartMetricSelect",
    description: "Metric select driving a small inline SVG bar chart on an analytics card.",
    code: `
const metrics = [
  { label: "Revenue", value: "revenue", data: [12, 18, 15, 22, 28, 24, 31] },
  { label: "Orders", value: "orders", data: [30, 26, 34, 29, 38, 41, 36] },
  { label: "Refunds", value: "refunds", data: [6, 4, 7, 3, 5, 2, 4] },
]

const days = ["M", "T", "W", "T", "F", "S", "S"]

export default function ChartMetricSelect() {
  const [metric, setMetric] = React.useState<string | null>("revenue")
  const current = metrics.find((item) => item.value === metric) ?? metrics[0]!
  const max = Math.max(...current.data)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">This week</span>
        <Select items={metrics} value={metric} onValueChange={setMetric}>
          <SelectTrigger size="sm" aria-label="Metric">
            <ChartColumnIcon className="text-muted-foreground" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {metrics.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex h-28 items-end gap-2">
        {current.data.map((point, index) => (
          <div key={index} className="flex flex-1 flex-col items-center gap-1">
            <div
              className="w-full bg-primary/80 transition-all"
              style={{ height: (point / max) * 96 }}
            />
            <span className="text-[10px] text-muted-foreground">{days[index]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "FileTypeFilterSelect",
    description: "File manager type filter with file-type icons that narrows the file list.",
    code: `
const types = [
  { label: "All files", value: "all", icon: FilesIcon },
  { label: "Documents", value: "doc", icon: FileTextIcon },
  { label: "Images", value: "image", icon: FileImageIcon },
  { label: "Spreadsheets", value: "sheet", icon: FileSpreadsheetIcon },
  { label: "Archives", value: "zip", icon: FileArchiveIcon },
]

const files = [
  { name: "Brand guidelines.pdf", type: "doc", size: "4.2 MB" },
  { name: "Hero banner.png", type: "image", size: "1.8 MB" },
  { name: "Q3 forecast.xlsx", type: "sheet", size: "320 KB" },
  { name: "Assets export.zip", type: "zip", size: "86 MB" },
  { name: "Meeting notes.docx", type: "doc", size: "44 KB" },
]

export default function FileTypeFilterSelect() {
  const [type, setType] = React.useState<string | null>("all")
  const visible = files.filter((file) => type === "all" || file.type === type)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Select items={types} value={type} onValueChange={setType}>
        <SelectTrigger className="w-44" aria-label="File type">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {types.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <item.icon className="text-muted-foreground" />
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <ul className="divide-y border text-sm">
        {visible.map((file) => (
          <li key={file.name} className="flex items-center justify-between gap-2 px-3 py-2">
            <span className="truncate">{file.name}</span>
            <span className="shrink-0 text-xs text-muted-foreground">{file.size}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}`,
  },
  {
    name: "CalendarViewSelect",
    description: "Calendar header with navigation buttons and a select to switch day, week or month view.",
    code: `
const views = [
  { label: "Day", value: "day" },
  { label: "Week", value: "week" },
  { label: "Month", value: "month" },
  { label: "Agenda", value: "agenda" },
]

export default function CalendarViewSelect() {
  return (
    <div className="flex w-full max-w-md items-center gap-2 border p-2">
      <ButtonGroup>
        <Button variant="outline" size="icon-sm" aria-label="Previous">
          <ChevronLeftIcon />
        </Button>
        <Button variant="outline" size="sm">
          Today
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="Next">
          <ChevronRightIcon />
        </Button>
      </ButtonGroup>
      <span className="flex-1 truncate text-sm font-medium">March 2026</span>
      <Select items={views} defaultValue="week">
        <SelectTrigger size="sm" className="w-24" aria-label="Calendar view">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {views.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}`,
  },
  {
    name: "ChatModelSelect",
    description: "Chat composer with a compact model select beside the send button.",
    code: `
const models = [
  { label: "Swift", value: "swift", hint: "Fast answers" },
  { label: "Balanced", value: "balanced", hint: "Everyday tasks" },
  { label: "Deep", value: "deep", hint: "Complex reasoning" },
]

export default function ChatModelSelect() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2 border p-2">
      <textarea
        className="min-h-16 resize-none bg-transparent p-1 text-sm outline-none placeholder:text-muted-foreground"
        placeholder="Ask about your project..."
        aria-label="Message"
      />
      <div className="flex items-center justify-between">
        <Select items={models} defaultValue="balanced">
          <SelectTrigger size="sm" className="border-transparent" aria-label="Model">
            <SparklesIcon className="text-muted-foreground" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent side="top" alignItemWithTrigger={false} align="start">
            {models.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                <span className="flex flex-col">
                  <span>{item.label}</span>
                  <span className="text-muted-foreground">{item.hint}</span>
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button size="icon-sm" aria-label="Send">
          <ArrowUpIcon />
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "EventRepeatSelect",
    description: "Event editor where the repeat select reveals an end-date note for recurring events.",
    code: `
const repeats = [
  { label: "Does not repeat", value: "none" },
  { label: "Every day", value: "daily" },
  { label: "Every weekday", value: "weekdays" },
  { label: "Every week", value: "weekly" },
  { label: "Every month", value: "monthly" },
]

export default function EventRepeatSelect() {
  const [repeat, setRepeat] = React.useState<string | null>("weekly")

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center gap-2 text-sm font-medium">
        <span className="size-2.5 bg-emerald-500" />
        Team standup
      </div>
      <Select items={repeats} value={repeat} onValueChange={setRepeat}>
        <SelectTrigger className="w-full" aria-label="Repeat">
          <RepeatIcon className="text-muted-foreground" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {repeats.map((item, index) => (
            <React.Fragment key={item.value}>
              {index === 1 && <SelectSeparator />}
              <SelectItem value={item.value}>{item.label}</SelectItem>
            </React.Fragment>
          ))}
        </SelectContent>
      </Select>
      {repeat !== "none" && (
        <p className="text-xs text-muted-foreground">
          Repeats until you end the series. You can edit single occurrences later.
        </p>
      )}
    </div>
  )
}`,
  },
  {
    name: "AsyncLoadingSelect",
    description: "Select that is disabled with a spinner while its options load, then becomes interactive.",
    code: `
type Repo = { label: string; value: string }

export default function AsyncLoadingSelect() {
  const [repos, setRepos] = React.useState<Repo[] | null>(null)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setRepos([
        { label: "web-app", value: "web-app" },
        { label: "mobile-client", value: "mobile-client" },
        { label: "billing-service", value: "billing-service" },
        { label: "design-tokens", value: "design-tokens" },
      ])
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const loading = repos === null

  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="repository">Repository</FieldLabel>
      <Select items={repos ?? []} disabled={loading}>
        <SelectTrigger id="repository" className="w-full">
          {loading ? <Spinner /> : <FolderGitIcon className="text-muted-foreground" />}
          <SelectValue placeholder={loading ? "Loading repositories..." : "Select a repository"} />
        </SelectTrigger>
        <SelectContent>
          {(repos ?? []).map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldDescription>Connect a repository to enable preview deployments.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "RowsPerPageSelect",
    description: "Table footer pagination with a rows-per-page select and page navigation.",
    code: `
const pageSizes = [
  { label: "10", value: "10" },
  { label: "25", value: "25" },
  { label: "50", value: "50" },
  { label: "100", value: "100" },
]

const total = 248

export default function RowsPerPageSelect() {
  const [size, setSize] = React.useState<string | null>("25")
  const [page, setPage] = React.useState(1)
  const perPage = Number(size ?? 25)
  const pages = Math.ceil(total / perPage)

  return (
    <div className="flex w-full max-w-md flex-wrap items-center justify-between gap-3 border-t pt-3 text-xs">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">Rows per page</span>
        <Select
          items={pageSizes}
          value={size}
          onValueChange={(next) => {
            setSize(next)
            setPage(1)
          }}
        >
          <SelectTrigger size="sm" className="w-16" aria-label="Rows per page">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {pageSizes.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground tabular-nums">
          Page {page} of {pages}
        </span>
        <Button
          variant="outline"
          size="icon-sm"
          aria-label="Previous page"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          variant="outline"
          size="icon-sm"
          aria-label="Next page"
          disabled={page === pages}
          onClick={() => setPage(page + 1)}
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "WeightUnitSelect",
    description: "Numeric input joined with a unit select in a button group for package weight.",
    code: `
const units = [
  { label: "kg", value: "kg" },
  { label: "lb", value: "lb" },
  { label: "oz", value: "oz" },
]

export default function WeightUnitSelect() {
  return (
    <Field className="w-full max-w-60">
      <FieldLabel htmlFor="weight">Package weight</FieldLabel>
      <ButtonGroup className="w-full">
        <Input id="weight" type="number" defaultValue="2.4" step="0.1" className="flex-1" />
        <Select items={units} defaultValue="kg">
          <SelectTrigger className="w-20" aria-label="Unit">
            <SelectValue />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={false} align="end">
            {units.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </ButtonGroup>
      <FieldDescription>Include packaging for accurate rates.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "PhoneCountryCodeSelect",
    description: "Phone number field with a country dialing code select in front of the input.",
    code: `
const codes = [
  { label: "+1", value: "us", country: "United States" },
  { label: "+44", value: "uk", country: "United Kingdom" },
  { label: "+49", value: "de", country: "Germany" },
  { label: "+61", value: "au", country: "Australia" },
  { label: "+81", value: "jp", country: "Japan" },
]

export default function PhoneCountryCodeSelect() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="phone">Phone number</FieldLabel>
      <ButtonGroup className="w-full">
        <Select items={codes} defaultValue="uk">
          <SelectTrigger className="w-20" aria-label="Country code">
            <SelectValue />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={false} align="start" className="min-w-52">
            {codes.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                <span className="w-8 tabular-nums">{item.label}</span>
                <span className="text-muted-foreground">{item.country}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input id="phone" type="tel" placeholder="7700 900123" className="flex-1" />
      </ButtonGroup>
      <FieldDescription>We&apos;ll text a code to verify this number.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "ExportFormatSelect",
    description: "Export dialog body with a format select and a button that shows a loading state.",
    code: `
const formats = [
  { label: "CSV", value: "csv", hint: "Spreadsheet friendly" },
  { label: "JSON", value: "json", hint: "For developers" },
  { label: "PDF", value: "pdf", hint: "Print-ready report" },
]

export default function ExportFormatSelect() {
  const [format, setFormat] = React.useState<string | null>("csv")
  const [exporting, setExporting] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">Export transactions</span>
        <span className="text-xs text-muted-foreground">1,204 rows from Jan 1 to Mar 31</span>
      </div>
      <Select items={formats} value={format} onValueChange={setFormat} disabled={exporting}>
        <SelectTrigger className="w-full" aria-label="Format">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {formats.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
              <span className="text-muted-foreground">{item.hint}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        disabled={exporting}
        onClick={() => {
          setExporting(true)
          setTimeout(() => setExporting(false), 1500)
        }}
      >
        {exporting ? <Spinner data-icon="inline-start" /> : <DownloadIcon data-icon="inline-start" />}
        {exporting ? "Exporting..." : "Download " + (format ?? "").toUpperCase()}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "VisibilitySelect",
    description: "Document visibility select with icons and descriptions for each access level.",
    code: `
const levels = [
  { label: "Private", value: "private", icon: LockIcon, hint: "Only you can open it" },
  { label: "Team", value: "team", icon: UsersIcon, hint: "Everyone in Lumen Labs" },
  { label: "Public link", value: "public", icon: GlobeIcon, hint: "Anyone with the link" },
]

export default function VisibilitySelect() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-3 border p-3">
      <div className="flex min-w-0 flex-col">
        <span className="truncate text-sm font-medium">Launch plan v2</span>
        <span className="text-xs text-muted-foreground">Edited 5 minutes ago</span>
      </div>
      <Select items={levels} defaultValue="team">
        <SelectTrigger size="sm" aria-label="Visibility">
          <SelectValue>
            {(value: string) => {
              const level = levels.find((item) => item.value === value)
              if (!level) return null
              return (
                <>
                  <level.icon className="text-muted-foreground" />
                  {level.label}
                </>
              )
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent align="end" alignItemWithTrigger={false} className="min-w-56">
          {levels.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <item.icon />
              <span className="flex flex-col">
                <span>{item.label}</span>
                <span className="text-muted-foreground">{item.hint}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}`,
  },
  {
    name: "ClearableSelect",
    description: "Controlled select with a clear button that resets the value back to the placeholder.",
    code: `
const projects = [
  { label: "Website refresh", value: "website" },
  { label: "Mobile app v3", value: "mobile" },
  { label: "Internal tools", value: "internal" },
]

export default function ClearableSelect() {
  const [project, setProject] = React.useState<string | null>("mobile")

  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="project">Project</FieldLabel>
      <div className="flex gap-1">
        <Select items={projects} value={project} onValueChange={setProject}>
          <SelectTrigger id="project" className="flex-1">
            <SelectValue placeholder="No project" />
          </SelectTrigger>
          <SelectContent>
            {projects.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Clear project"
          disabled={!project}
          onClick={() => setProject(null)}
        >
          <XIcon />
        </Button>
      </div>
      <FieldDescription>Leave empty to file this task in your inbox.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "WarehouseSelect",
    description: "Inventory location select with a leading map pin and stock counts per warehouse.",
    code: `
const warehouses = [
  { label: "Rotterdam DC", value: "rtm", stock: 1240 },
  { label: "Leeds Hub", value: "lds", stock: 312 },
  { label: "Lyon Depot", value: "lyn", stock: 0 },
  { label: "Gdansk Port", value: "gdn", stock: 87 },
]

export default function WarehouseSelect() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="warehouse">Fulfil from</FieldLabel>
      <Select items={warehouses} defaultValue="rtm">
        <SelectTrigger id="warehouse" className="w-full">
          <MapPinIcon className="text-muted-foreground" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {warehouses.map((item) => (
            <SelectItem key={item.value} value={item.value} disabled={item.stock === 0}>
              {item.label}
              <span
                className={cn(
                  "ms-auto ps-4 tabular-nums",
                  item.stock < 100 ? "text-amber-600 dark:text-amber-400" : "text-muted-foreground"
                )}
              >
                {item.stock === 0 ? "Out of stock" : item.stock + " units"}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  )
}`,
  },
  {
    name: "ApparelSizeSelect",
    description: "Product size select with sold-out sizes disabled and a low-stock hint below.",
    code: `
const sizes = [
  { label: "XS", value: "xs", left: 0 },
  { label: "S", value: "s", left: 8 },
  { label: "M", value: "m", left: 2 },
  { label: "L", value: "l", left: 14 },
  { label: "XL", value: "xl", left: 0 },
]

export default function ApparelSizeSelect() {
  const [size, setSize] = React.useState<string | null>(null)
  const current = sizes.find((item) => item.value === size)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium">Merino crew sweater</span>
        <span className="text-sm">$89</span>
      </div>
      <Select items={sizes} value={size} onValueChange={setSize}>
        <SelectTrigger className="w-full" aria-label="Size">
          <SelectValue placeholder="Select size" />
        </SelectTrigger>
        <SelectContent>
          {sizes.map((item) => (
            <SelectItem key={item.value} value={item.value} disabled={item.left === 0}>
              {item.label}
              {item.left === 0 && <span className="text-muted-foreground">Sold out</span>}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {current && current.left <= 3 && (
        <p className="text-xs text-amber-600 dark:text-amber-400">
          Only {current.left} left in {current.label}
        </p>
      )}
      <Button disabled={!size}>
        <ShoppingBagIcon data-icon="inline-start" />
        Add to bag
      </Button>
    </div>
  )
}`,
  },
  {
    name: "ColorSwatchSelect",
    description: "Product color select with round swatches in the trigger and option list.",
    code: `
const colors = [
  { label: "Graphite", value: "graphite", swatch: "bg-neutral-700" },
  { label: "Sand", value: "sand", swatch: "bg-amber-200" },
  { label: "Sage", value: "sage", swatch: "bg-emerald-300" },
  { label: "Ocean", value: "ocean", swatch: "bg-sky-600" },
  { label: "Clay", value: "clay", swatch: "bg-orange-400" },
]

export default function ColorSwatchSelect() {
  return (
    <Field className="w-full max-w-56">
      <FieldLabel htmlFor="color">Color</FieldLabel>
      <Select items={colors} defaultValue="sage">
        <SelectTrigger id="color" className="w-full">
          <SelectValue>
            {(value: string) => {
              const color = colors.find((item) => item.value === value)
              return (
                <>
                  <span className={cn("size-3.5 rounded-full ring-1 ring-foreground/10", color?.swatch)} />
                  {color?.label}
                </>
              )
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {colors.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <span className={cn("size-3.5 rounded-full ring-1 ring-foreground/10", item.swatch)} />
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  )
}`,
  },
  {
    name: "OnboardingProfileSelects",
    description: "Onboarding step card with several full-width selects describing the new user.",
    code: `
const roles = [
  { label: "Founder", value: "founder" },
  { label: "Engineer", value: "engineer" },
  { label: "Designer", value: "designer" },
  { label: "Product manager", value: "pm" },
]

const industries = [
  { label: "Software", value: "software" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Education", value: "education" },
  { label: "Retail", value: "retail" },
]

const sources = [
  { label: "Search engine", value: "search" },
  { label: "A friend or colleague", value: "referral" },
  { label: "Podcast", value: "podcast" },
  { label: "Social media", value: "social" },
]

const questions = [
  { id: "role", label: "What is your role?", items: roles },
  { id: "industry", label: "Which industry are you in?", items: industries },
  { id: "source", label: "How did you hear about us?", items: sources },
]

export default function OnboardingProfileSelects() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardDescription>Step 2 of 3</CardDescription>
        <CardTitle>Tell us about yourself</CardTitle>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          {questions.map((question) => (
            <Field key={question.id}>
              <FieldLabel htmlFor={question.id}>{question.label}</FieldLabel>
              <Select items={question.items}>
                <SelectTrigger id={question.id} className="w-full">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {question.items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="ghost">Back</Button>
        <Button>Continue</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "ObjectValueSelect",
    description: "Select whose values are objects, using itemToStringLabel and isItemEqualToValue.",
    code: `
type Reviewer = { id: number; name: string; team: string }

const reviewers: Reviewer[] = [
  { id: 1, name: "Ava Lindqvist", team: "Platform" },
  { id: 2, name: "Kofi Mensah", team: "Payments" },
  { id: 3, name: "Rina Takahashi", team: "Growth" },
]

export default function ObjectValueSelect() {
  const [reviewer, setReviewer] = React.useState<Reviewer | null>({
    id: 2,
    name: "Kofi Mensah",
    team: "Payments",
  })

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Field>
        <FieldLabel htmlFor="reviewer">Reviewer</FieldLabel>
        <Select
          value={reviewer}
          onValueChange={setReviewer}
          itemToStringLabel={(item: Reviewer) => item.name}
          isItemEqualToValue={(item: Reviewer, value: Reviewer) => item.id === value.id}
        >
          <SelectTrigger id="reviewer" className="w-full">
            <SelectValue placeholder="Request a review" />
          </SelectTrigger>
          <SelectContent>
            {reviewers.map((item) => (
              <SelectItem key={item.id} value={item}>
                {item.name}
                <span className="text-muted-foreground">{item.team}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <pre className="bg-muted p-2 font-mono text-[11px]">
        {JSON.stringify(reviewer, null, 2)}
      </pre>
    </div>
  )
}`,
  },
  {
    name: "MultipleTagsBadgesSelect",
    description: "Multi-select for labels where chosen values appear as removable badges below.",
    code: `
const labels = [
  { label: "Bug", value: "bug" },
  { label: "Feature", value: "feature" },
  { label: "Docs", value: "docs" },
  { label: "Performance", value: "perf" },
  { label: "Security", value: "security" },
  { label: "Good first issue", value: "first" },
]

const nameOf = (value: string) => labels.find((item) => item.value === value)?.label ?? value

export default function MultipleTagsBadgesSelect() {
  const [selected, setSelected] = React.useState<string[]>(["bug", "perf"])

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Select items={labels} multiple value={selected} onValueChange={setSelected}>
        <SelectTrigger className="w-full" aria-label="Labels">
          <TagIcon className="text-muted-foreground" />
          <SelectValue>
            {(value: string[]) => (value.length ? "Edit labels" : "Add labels")}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {labels.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex min-h-6 flex-wrap gap-1">
        {selected.map((value) => (
          <Badge key={value} variant="secondary" className="gap-1 pe-1">
            {nameOf(value)}
            <button
              type="button"
              aria-label={"Remove " + nameOf(value)}
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setSelected(selected.filter((item) => item !== value))}
            >
              <XIcon className="size-3" />
            </button>
          </Badge>
        ))}
        {selected.length === 0 && (
          <span className="text-xs text-muted-foreground">No labels yet</span>
        )}
      </div>
    </div>
  )
}`,
  },
  {
    name: "DeployEnvironmentSelect",
    description: "Deploy environment select that shows a warning when production is chosen.",
    code: `
const environments = [
  { label: "Development", value: "dev", tone: "bg-sky-500" },
  { label: "Staging", value: "staging", tone: "bg-amber-500" },
  { label: "Production", value: "prod", tone: "bg-red-500" },
]

export default function DeployEnvironmentSelect() {
  const [env, setEnv] = React.useState<string | null>("staging")

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center gap-2 text-sm">
        <GitBranchIcon className="size-4 text-muted-foreground" />
        <span className="font-mono">release/2.8.0</span>
      </div>
      <Select items={environments} value={env} onValueChange={setEnv}>
        <SelectTrigger className="w-full" aria-label="Environment">
          <SelectValue>
            {(value: string) => {
              const item = environments.find((option) => option.value === value)
              return (
                <>
                  <span className={cn("size-2", item?.tone)} />
                  {item?.label}
                </>
              )
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {environments.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <span className={cn("size-2", item.tone)} />
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {env === "prod" && (
        <p className="flex items-start gap-1.5 text-xs text-destructive">
          <TriangleAlertIcon className="mt-px size-3.5 shrink-0" />
          This deploys to live customers. Make sure staging checks passed.
        </p>
      )}
      <Button variant={env === "prod" ? "destructive" : "default"}>
        <RocketIcon data-icon="inline-start" />
        Deploy
      </Button>
    </div>
  )
}`,
  },
  {
    name: "ReminderSelectWithBadge",
    description: "Task reminder select with a destructive option separated at the bottom of the list.",
    code: `
const reminders = [
  { label: "At time of due date", value: "0" },
  { label: "15 minutes before", value: "15" },
  { label: "1 hour before", value: "60" },
  { label: "1 day before", value: "1440" },
  { label: "No reminder", value: "none" },
]

export default function ReminderSelectWithBadge() {
  const [reminder, setReminder] = React.useState<string | null>("60")

  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-3">
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-sm font-medium">Send contract to Harbor &amp; Co</span>
        <span className="text-xs text-muted-foreground">Due Friday, 4:00 PM</span>
      </div>
      <Select items={reminders} value={reminder} onValueChange={setReminder}>
        <SelectTrigger size="sm" aria-label="Reminder">
          {reminder === "none" ? (
            <BellOffIcon className="text-muted-foreground" />
          ) : (
            <BellIcon className="text-muted-foreground" />
          )}
          <SelectValue className="hidden sm:flex" />
        </SelectTrigger>
        <SelectContent align="end" alignItemWithTrigger={false} className="min-w-48">
          {reminders.slice(0, 4).map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
          <SelectSeparator />
          <SelectItem value="none" className="text-destructive">
            No reminder
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}`,
  },
  {
    name: "RecordItemsSelect",
    description: "Select using a record object for items to map stored keys to display labels.",
    code: `
const intervals = {
  "1m": "Every minute",
  "5m": "Every 5 minutes",
  "15m": "Every 15 minutes",
  "1h": "Every hour",
}

export default function RecordItemsSelect() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <ActivityIcon className="size-4 text-emerald-500" />
        <span className="text-sm font-medium">api.fieldnote.app/health</span>
      </div>
      <Field orientation="horizontal" className="justify-between">
        <FieldLabel htmlFor="interval">Check interval</FieldLabel>
        <Select items={intervals} defaultValue="5m">
          <SelectTrigger id="interval" className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(intervals).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
    </div>
  )
}`,
  },
]

export default examples
