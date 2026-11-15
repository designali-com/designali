import { type Example } from "./_lib.mjs"

const IND = "data-indeterminate:border-primary data-indeterminate:bg-primary data-indeterminate:text-primary-foreground"

const examples: Example[] = [
  {
    name: "SelectAllIndeterminate",
    description: "Parent checkbox that shows an indeterminate state when only some children are selected.",
    code: `
const toppings = ["Mushrooms", "Olives", "Peppers", "Red onion"]

export default function SelectAllIndeterminate() {
  const [selected, setSelected] = React.useState<string[]>(["Olives"])
  const all = selected.length === toppings.length
  const some = selected.length > 0 && !all

  return (
    <FieldSet className="w-full max-w-xs">
      <Field orientation="horizontal">
        <Checkbox
          id="toppings-all"
          checked={all}
          indeterminate={some}
          onCheckedChange={(checked) => setSelected(checked ? toppings : [])}
          className="${IND}"
        />
        <FieldLabel htmlFor="toppings-all">All toppings</FieldLabel>
      </Field>
      <FieldGroup className="gap-3 ps-6">
        {toppings.map((topping) => (
          <Field key={topping} orientation="horizontal">
            <Checkbox
              id={"topping-" + topping}
              checked={selected.includes(topping)}
              onCheckedChange={(checked) =>
                setSelected((list) => (checked ? [...list, topping] : list.filter((t) => t !== topping)))
              }
            />
            <FieldLabel htmlFor={"topping-" + topping} className="font-normal">
              {topping}
            </FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  )
}`,
  },
  {
    name: "NotificationChannelMatrix",
    description: "Notification settings matrix with a checkbox per event and delivery channel.",
    code: `
const channels = ["Email", "Push", "SMS"]
const events = [
  { id: "mentions", label: "Mentions", defaults: ["Email", "Push"] },
  { id: "comments", label: "Comments", defaults: ["Push"] },
  { id: "invoices", label: "Invoices", defaults: ["Email"] },
  { id: "security", label: "Security alerts", defaults: ["Email", "Push", "SMS"] },
]

export default function NotificationChannelMatrix() {
  return (
    <div className="w-full max-w-md border">
      <div className="grid grid-cols-[1fr_repeat(3,3.5rem)] border-b bg-muted/40 px-3 py-2 text-xs font-medium">
        <span>Event</span>
        {channels.map((channel) => (
          <span key={channel} className="text-center">
            {channel}
          </span>
        ))}
      </div>
      {events.map((event) => (
        <div key={event.id} className="grid grid-cols-[1fr_repeat(3,3.5rem)] items-center border-b px-3 py-2.5 last:border-b-0">
          <span className="text-sm">{event.label}</span>
          {channels.map((channel) => (
            <div key={channel} className="flex justify-center">
              <Checkbox
                aria-label={event.label + " via " + channel}
                name={event.id}
                value={channel}
                defaultChecked={event.defaults.includes(channel)}
                disabled={event.id === "security" && channel === "Email"}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "TodoListStrikethrough",
    description: "Todo list where checking an item strikes it through, with an add-task input.",
    code: `
export default function TodoListStrikethrough() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Reply to design feedback", done: true },
    { id: 2, text: "Prepare sprint demo", done: false },
    { id: 3, text: "Book venue for offsite", done: false },
  ])
  const [draft, setDraft] = React.useState("")
  const remaining = todos.filter((t) => !t.done).length

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          if (!draft.trim()) return
          setTodos((list) => [...list, { id: Date.now(), text: draft.trim(), done: false }])
          setDraft("")
        }}
      >
        <Input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Add a task" />
        <Button type="submit" size="icon" aria-label="Add task">
          <PlusIcon />
        </Button>
      </form>
      <ul className="flex flex-col divide-y border">
        {todos.map((todo) => (
          <li key={todo.id}>
            <label className="flex cursor-pointer items-center gap-3 px-3 py-2.5">
              <Checkbox
                checked={todo.done}
                onCheckedChange={(checked) =>
                  setTodos((list) => list.map((t) => (t.id === todo.id ? { ...t, done: checked } : t)))
                }
              />
              <span className={cn("text-sm", todo.done && "text-muted-foreground line-through")}>{todo.text}</span>
            </label>
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted-foreground">{remaining} remaining</p>
    </div>
  )
}`,
  },
  {
    name: "TermsRequiredInvalid",
    description: "Sign-up form where submitting without accepting the terms marks the checkbox invalid.",
    code: `
export default function TermsRequiredInvalid() {
  const [accepted, setAccepted] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const invalid = submitted && !accepted

  return (
    <form
      className="flex w-full max-w-xs flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <Field>
        <FieldLabel htmlFor="signup-email">Work email</FieldLabel>
        <Input id="signup-email" type="email" placeholder="you@company.com" />
      </Field>
      <Field orientation="horizontal" data-invalid={invalid || undefined}>
        <Checkbox
          id="signup-terms"
          checked={accepted}
          onCheckedChange={setAccepted}
          aria-invalid={invalid || undefined}
        />
        <FieldContent>
          <FieldLabel htmlFor="signup-terms">I agree to the Terms of Service</FieldLabel>
          {invalid && <FieldError>You must accept the terms to continue.</FieldError>}
        </FieldContent>
      </Field>
      <Button type="submit">Create account</Button>
      {submitted && accepted && <p className="text-xs text-muted-foreground">Account created. Check your inbox.</p>}
    </form>
  )
}`,
  },
  {
    name: "AddonCardSelection",
    description: "Selectable add-on cards using FieldLabel-wrapped checkboxes with a running total.",
    code: `
const addons = [
  { id: "backup", title: "Daily backups", description: "30-day retention", price: 8 },
  { id: "domain", title: "Custom domain", description: "Includes SSL", price: 4 },
  { id: "support", title: "Priority support", description: "1-hour response", price: 19 },
]

export default function AddonCardSelection() {
  const [picked, setPicked] = React.useState<string[]>(["backup"])
  const total = addons.filter((a) => picked.includes(a.id)).reduce((s, a) => s + a.price, 0)

  return (
    <FieldGroup className="w-full max-w-sm gap-3">
      {addons.map((addon) => (
        <FieldLabel key={addon.id} htmlFor={"addon-" + addon.id}>
          <Field orientation="horizontal">
            <Checkbox
              id={"addon-" + addon.id}
              checked={picked.includes(addon.id)}
              onCheckedChange={(checked) =>
                setPicked((list) => (checked ? [...list, addon.id] : list.filter((id) => id !== addon.id)))
              }
            />
            <FieldContent>
              <FieldTitle>{addon.title}</FieldTitle>
              <FieldDescription>{addon.description}</FieldDescription>
            </FieldContent>
            <span className="text-sm font-medium">+\${addon.price}/mo</span>
          </Field>
        </FieldLabel>
      ))}
      <div className="flex items-center justify-between border-t pt-3 text-sm">
        <span className="text-muted-foreground">Add-ons total</span>
        <span className="font-semibold">\${total}/mo</span>
      </div>
    </FieldGroup>
  )
}`,
  },
  {
    name: "RolePermissionGroups",
    description: "Role editor with grouped permissions, each group having its own indeterminate parent.",
    code: `
const groups = [
  { id: "projects", label: "Projects", perms: ["View", "Create", "Archive"] },
  { id: "billing", label: "Billing", perms: ["View invoices", "Update payment method"] },
  { id: "members", label: "Members", perms: ["Invite", "Remove", "Change roles"] },
]

export default function RolePermissionGroups() {
  const [granted, setGranted] = React.useState<Record<string, string[]>>({
    projects: ["View", "Create"],
    billing: [],
    members: ["Invite"],
  })

  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      {groups.map((group) => {
        const list = granted[group.id] ?? []
        const all = list.length === group.perms.length
        return (
          <div key={group.id} className="flex flex-col gap-2.5 p-3">
            <label className="flex items-center gap-2 text-sm font-medium">
              <Checkbox
                checked={all}
                indeterminate={list.length > 0 && !all}
                onCheckedChange={(checked) => setGranted((g) => ({ ...g, [group.id]: checked ? group.perms : [] }))}
                className="${IND}"
              />
              {group.label}
              <span className="ms-auto text-xs font-normal text-muted-foreground">
                {list.length}/{group.perms.length}
              </span>
            </label>
            <div className="flex flex-col gap-2 ps-6">
              {group.perms.map((perm) => (
                <label key={perm} className="flex items-center gap-2 text-xs">
                  <Checkbox
                    checked={list.includes(perm)}
                    onCheckedChange={(checked) =>
                      setGranted((g) => ({
                        ...g,
                        [group.id]: checked ? [...list, perm] : list.filter((p) => p !== perm),
                      }))
                    }
                  />
                  {perm}
                </label>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}`,
  },
  {
    name: "ProductFilterSidebar",
    description: "Storefront filter panel with brand and size checkboxes, counts, and a clear action.",
    code: `
const filters: Record<string, [string, number][]> = {
  Brand: [["Northpeak", 42], ["Aster", 18], ["Field & Co", 27]],
  Size: [["S", 30], ["M", 54], ["L", 41], ["XL", 0]],
}

export default function ProductFilterSidebar() {
  const [active, setActive] = React.useState<string[]>(["M"])

  const toggle = (value: string, checked: boolean) =>
    setActive((list) => (checked ? [...list, value] : list.filter((v) => v !== value)))

  return (
    <div className="flex w-full max-w-[14rem] flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Filters</span>
        <Button variant="link" size="xs" disabled={active.length === 0} onClick={() => setActive([])}>
          Clear ({active.length})
        </Button>
      </div>
      {Object.entries(filters).map(([group, options]) => (
        <FieldSet key={group}>
          <FieldLegend variant="label">{group}</FieldLegend>
          <FieldGroup className="gap-2.5">
            {options.map(([value, count]) => (
              <Field key={value} orientation="horizontal" data-disabled={count === 0 || undefined}>
                <Checkbox
                  id={"filter-" + value}
                  checked={active.includes(value)}
                  disabled={count === 0}
                  onCheckedChange={(checked) => toggle(value, checked)}
                />
                <FieldLabel htmlFor={"filter-" + value} className="flex-1 font-normal">
                  {value}
                </FieldLabel>
                <span className="text-xs text-muted-foreground">{count}</span>
              </Field>
            ))}
          </FieldGroup>
        </FieldSet>
      ))}
    </div>
  )
}`,
  },
  {
    name: "InboxBulkActions",
    description: "Inbox list with row checkboxes and a contextual bulk-action bar showing the selection count.",
    code: `
const messages = [
  { id: "1", from: "Rina Patel", subject: "Contract draft v2", time: "9:41" },
  { id: "2", from: "Billing", subject: "Your November invoice", time: "8:12" },
  { id: "3", from: "Leo Martin", subject: "Lunch on Thursday?", time: "Yesterday" },
  { id: "4", from: "Status Bot", subject: "Weekly uptime report", time: "Mon" },
]

export default function InboxBulkActions() {
  const [selected, setSelected] = React.useState<string[]>([])
  const all = selected.length === messages.length

  return (
    <div className="w-full max-w-md border">
      <div className="flex h-11 items-center gap-3 border-b bg-muted/40 px-3">
        <Checkbox
          aria-label="Select all messages"
          checked={all}
          indeterminate={selected.length > 0 && !all}
          onCheckedChange={(checked) => setSelected(checked ? messages.map((m) => m.id) : [])}
          className="${IND}"
        />
        {selected.length > 0 ? (
          <>
            <span className="text-xs font-medium">{selected.length} selected</span>
            <div className="ms-auto flex gap-1">
              <Button variant="ghost" size="icon-sm" aria-label="Archive">
                <ArchiveIcon />
              </Button>
              <Button variant="ghost" size="icon-sm" aria-label="Mark as read">
                <MailOpenIcon />
              </Button>
              <Button variant="ghost" size="icon-sm" aria-label="Delete">
                <Trash2Icon />
              </Button>
            </div>
          </>
        ) : (
          <span className="text-xs text-muted-foreground">Inbox</span>
        )}
      </div>
      {messages.map((message) => {
        const checked = selected.includes(message.id)
        return (
          <label
            key={message.id}
            className={cn("flex cursor-pointer items-center gap-3 border-b px-3 py-2.5 last:border-b-0", checked && "bg-muted/60")}
          >
            <Checkbox
              checked={checked}
              onCheckedChange={(value) =>
                setSelected((list) => (value ? [...list, message.id] : list.filter((id) => id !== message.id)))
              }
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{message.from}</p>
              <p className="truncate text-xs text-muted-foreground">{message.subject}</p>
            </div>
            <span className="text-[11px] text-muted-foreground">{message.time}</span>
          </label>
        )
      })}
    </div>
  )
}`,
  },
  {
    name: "ReadOnlyComplianceSummary",
    description: "Read-only checkboxes summarising compliance controls that users can see but not change.",
    code: `
const controls = [
  { label: "Data encrypted at rest", done: true },
  { label: "SSO enforced for all members", done: true },
  { label: "Quarterly access review", done: false },
  { label: "Vendor risk assessment", done: true },
]

export default function ReadOnlyComplianceSummary() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheckIcon className="size-4" />
          Compliance status
        </CardTitle>
        <CardDescription>Managed by your workspace admin.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup className="gap-3">
          {controls.map((control, index) => (
            <Field key={control.label} orientation="horizontal">
              <Checkbox id={"control-" + index} checked={control.done} readOnly />
              <FieldLabel htmlFor={"control-" + index} className={cn("font-normal", !control.done && "text-muted-foreground")}>
                {control.label}
              </FieldLabel>
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "DisabledWithUpgradeTooltip",
    description: "Plan-gated checkboxes that are disabled with a tooltip explaining the upgrade requirement.",
    code: `
const options = [
  { id: "watermark", label: "Remove watermark", pro: true },
  { id: "hd", label: "Export in 4K", pro: true },
  { id: "captions", label: "Burn in captions", pro: false },
]

export default function DisabledWithUpgradeTooltip() {
  return (
    <FieldGroup className="w-full max-w-xs gap-3">
      {options.map((option) => (
        <Field key={option.id} orientation="horizontal" data-disabled={option.pro || undefined}>
          <Checkbox id={"export-" + option.id} disabled={option.pro} defaultChecked={!option.pro} />
          <FieldLabel htmlFor={"export-" + option.id} className="font-normal">
            {option.label}
          </FieldLabel>
          {option.pro && (
            <Tooltip>
              <TooltipTrigger
                render={
                  <Badge variant="outline" className="ms-auto cursor-help">
                    <LockIcon />
                    Pro
                  </Badge>
                }
              />
              <TooltipContent>Available on the Pro plan</TooltipContent>
            </Tooltip>
          )}
        </Field>
      ))}
    </FieldGroup>
  )
}`,
  },
  {
    name: "CheckboxSizeScale",
    description: "Checkbox size scale from compact table density to large touch targets.",
    code: `
const sizes = [
  { label: "Small", className: "size-3.5 [&_svg]:size-3", text: "text-xs" },
  { label: "Default", className: "", text: "text-sm" },
  { label: "Large", className: "size-5 [&_svg]:size-4", text: "text-sm" },
  { label: "Touch", className: "size-6 [&_svg]:size-5", text: "text-base" },
]

export default function CheckboxSizeScale() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      {sizes.map((size) => (
        <label key={size.label} className={cn("flex items-center gap-2", size.text)}>
          <Checkbox defaultChecked className={size.className} />
          {size.label}
        </label>
      ))}
    </div>
  )
}`,
  },
  {
    name: "LabelColorCheckboxes",
    description: "Issue label filters with checkboxes tinted to each label's chart colour.",
    code: `
const labels = [
  { name: "Bug", color: "data-checked:bg-chart-1 data-checked:border-chart-1 border-chart-1" },
  { name: "Feature", color: "data-checked:bg-chart-2 data-checked:border-chart-2 border-chart-2" },
  { name: "Docs", color: "data-checked:bg-chart-3 data-checked:border-chart-3 border-chart-3" },
  { name: "Design", color: "data-checked:bg-chart-4 data-checked:border-chart-4 border-chart-4" },
  { name: "Infra", color: "data-checked:bg-chart-5 data-checked:border-chart-5 border-chart-5" },
]

export default function LabelColorCheckboxes() {
  return (
    <div className="flex w-full max-w-[12rem] flex-col gap-1 border p-2">
      <span className="px-2 py-1 text-xs text-muted-foreground">Filter by label</span>
      {labels.map((label, index) => (
        <label key={label.name} className="flex cursor-pointer items-center gap-2 px-2 py-1.5 text-sm hover:bg-muted">
          <Checkbox defaultChecked={index < 2} className={cn("data-checked:text-background", label.color)} />
          {label.name}
        </label>
      ))}
    </div>
  )
}`,
  },
  {
    name: "InterestChipCheckboxes",
    description: "Onboarding interest picker where each chip is a label wrapping a checkbox.",
    code: `
const topics = ["Product", "Design systems", "AI", "Startups", "Productivity", "Remote work", "Hiring", "Data", "Writing"]

export default function InterestChipCheckboxes() {
  const [picked, setPicked] = React.useState<string[]>(["AI", "Design systems"])

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div>
        <h3 className="text-sm font-semibold">What are you into?</h3>
        <p className="text-xs text-muted-foreground">Pick at least three to personalise your feed.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => {
          const checked = picked.includes(topic)
          return (
            <label
              key={topic}
              className={cn(
                "flex cursor-pointer items-center gap-2 border px-3 py-1.5 text-xs transition-colors",
                checked ? "border-primary bg-primary/5" : "hover:bg-muted"
              )}
            >
              <Checkbox
                checked={checked}
                onCheckedChange={(value) =>
                  setPicked((list) => (value ? [...list, topic] : list.filter((t) => t !== topic)))
                }
              />
              {topic}
            </label>
          )
        })}
      </div>
      <Button disabled={picked.length < 3}>Continue ({picked.length}/3)</Button>
    </div>
  )
}`,
  },
  {
    name: "BillingSameAsShipping",
    description: "Checkout checkbox that hides the billing address form when it matches shipping.",
    code: `
export default function BillingSameAsShipping() {
  const [same, setSame] = React.useState(true)

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Billing address</FieldLegend>
      <Field orientation="horizontal">
        <Checkbox id="billing-same" checked={same} onCheckedChange={setSame} />
        <FieldLabel htmlFor="billing-same" className="font-normal">
          Same as shipping address
        </FieldLabel>
      </Field>
      {same ? (
        <p className="border bg-muted/40 p-3 text-xs text-muted-foreground">
          Nadia Brooks, 48 Larkspur Lane, Portland, OR 97205
        </p>
      ) : (
        <FieldGroup className="gap-3">
          <Field>
            <FieldLabel htmlFor="billing-street">Street</FieldLabel>
            <Input id="billing-street" placeholder="123 Main St" />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="billing-city">City</FieldLabel>
              <Input id="billing-city" />
            </Field>
            <Field>
              <FieldLabel htmlFor="billing-zip">ZIP</FieldLabel>
              <Input id="billing-zip" />
            </Field>
          </div>
        </FieldGroup>
      )}
    </FieldSet>
  )
}`,
  },
  {
    name: "PrivacySettingsItems",
    description: "Privacy settings list built with Item rows and trailing checkboxes.",
    code: `
const settings = [
  { id: "profile", icon: GlobeIcon, title: "Public profile", description: "Anyone can see your name and bio.", on: true },
  { id: "activity", icon: ActivityIcon, title: "Show activity status", description: "Let teammates see when you are online.", on: true },
  { id: "search", icon: SearchIcon, title: "Appear in search", description: "Allow people to find you by email.", on: false },
]

export default function PrivacySettingsItems() {
  return (
    <ItemGroup className="w-full max-w-md gap-2">
      {settings.map((setting) => (
        <Item key={setting.id} variant="outline" render={<label htmlFor={"privacy-" + setting.id} />}>
          <ItemMedia variant="icon">
            <setting.icon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{setting.title}</ItemTitle>
            <ItemDescription>{setting.description}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Checkbox id={"privacy-" + setting.id} defaultChecked={setting.on} />
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}`,
  },
  {
    name: "FileGridSelection",
    description: "File manager grid where checkboxes appear on hover and stay visible once selected.",
    code: `
const files = [
  { name: "Invoice-0412.pdf", icon: FileTextIcon },
  { name: "Moodboard.fig", icon: FileImageIcon },
  { name: "Q4 forecast.xlsx", icon: SheetIcon },
  { name: "Recording.mp3", icon: FileAudioIcon },
  { name: "Readme.md", icon: FileCodeIcon },
  { name: "Assets", icon: FolderIcon },
]

export default function FileGridSelection() {
  const [selected, setSelected] = React.useState<string[]>(["Moodboard.fig"])

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <p className="text-xs text-muted-foreground">
        {selected.length ? selected.length + " selected" : "Hover a file to select it"}
      </p>
      <div className="grid grid-cols-3 gap-2">
        {files.map((file) => {
          const checked = selected.includes(file.name)
          return (
            <label
              key={file.name}
              className={cn(
                "group/file relative flex cursor-pointer flex-col items-center gap-2 border p-3 transition-colors hover:bg-muted/50",
                checked && "border-primary bg-primary/5"
              )}
            >
              <Checkbox
                aria-label={"Select " + file.name}
                checked={checked}
                onCheckedChange={(value) =>
                  setSelected((list) => (value ? [...list, file.name] : list.filter((n) => n !== file.name)))
                }
                className={cn(
                  "absolute start-2 top-2 bg-background transition-opacity",
                  !checked && "opacity-0 group-hover/file:opacity-100 focus-visible:opacity-100"
                )}
              />
              <file.icon className="size-7 text-muted-foreground" />
              <span className="w-full truncate text-center text-[11px]">{file.name}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}`,
  },
  {
    name: "CookieConsentCategories",
    description: "Cookie consent panel with a locked necessary category and optional categories.",
    code: `
const categories = [
  { id: "necessary", title: "Strictly necessary", description: "Required for sign-in and security.", locked: true },
  { id: "analytics", title: "Analytics", description: "Helps us understand how the site is used." },
  { id: "marketing", title: "Marketing", description: "Used to show relevant offers elsewhere." },
]

export default function CookieConsentCategories() {
  const [optional, setOptional] = React.useState<string[]>([])

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CookieIcon className="size-4" />
          Cookie preferences
        </CardTitle>
      </CardHeader>
      <CardContent>
        <FieldGroup className="gap-4">
          {categories.map((category) => (
            <Field key={category.id} orientation="horizontal" data-disabled={category.locked || undefined}>
              <Checkbox
                id={"cookie-" + category.id}
                checked={category.locked || optional.includes(category.id)}
                disabled={category.locked}
                onCheckedChange={(checked) =>
                  setOptional((list) => (checked ? [...list, category.id] : list.filter((id) => id !== category.id)))
                }
              />
              <FieldContent>
                <FieldLabel htmlFor={"cookie-" + category.id}>{category.title}</FieldLabel>
                <FieldDescription>{category.description}</FieldDescription>
              </FieldContent>
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
      <CardFooter className="gap-2 border-t">
        <Button variant="outline" size="sm" className="flex-1">
          Save selection
        </Button>
        <Button size="sm" className="flex-1" onClick={() => setOptional(["analytics", "marketing"])}>
          Accept all
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "PackingChecklistProgress",
    description: "Trip packing checklist that drives a progress bar as items are checked off.",
    code: `
const items = ["Passport", "Phone charger", "Rain jacket", "Hiking boots", "Sunscreen", "Travel adapter"]

export default function PackingChecklistProgress() {
  const [packed, setPacked] = React.useState<string[]>(["Passport", "Phone charger"])
  const percent = Math.round((packed.length / items.length) * 100)

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Lisbon trip · Packing</CardTitle>
        <CardDescription>
          {packed.length} of {items.length} packed
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Progress value={percent} aria-label="Packing progress" />
        <FieldGroup className="gap-2.5">
          {items.map((item) => (
            <Field key={item} orientation="horizontal">
              <Checkbox
                id={"pack-" + item}
                checked={packed.includes(item)}
                onCheckedChange={(checked) =>
                  setPacked((list) => (checked ? [...list, item] : list.filter((i) => i !== item)))
                }
              />
              <FieldLabel htmlFor={"pack-" + item} className="font-normal">
                {item}
              </FieldLabel>
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "ShiftAvailabilityGrid",
    description: "Weekly shift availability grid with a checkbox per day and shift.",
    code: `
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const shifts = ["AM", "PM"]

export default function ShiftAvailabilityGrid() {
  const [slots, setSlots] = React.useState<string[]>(["Mon-AM", "Tue-AM", "Wed-PM", "Sat-AM"])

  return (
    <div className="w-full max-w-sm">
      <p className="mb-2 text-sm font-medium">Your availability</p>
      <div className="grid grid-cols-[2.5rem_repeat(7,1fr)] gap-y-2 border p-3 text-center text-xs">
        <span />
        {days.map((day) => (
          <span key={day} className="text-muted-foreground">
            {day}
          </span>
        ))}
        {shifts.map((shift) => (
          <React.Fragment key={shift}>
            <span className="text-start font-medium">{shift}</span>
            {days.map((day) => {
              const key = day + "-" + shift
              return (
                <div key={key} className="flex justify-center">
                  <Checkbox
                    aria-label={day + " " + shift}
                    checked={slots.includes(key)}
                    onCheckedChange={(checked) =>
                      setSlots((list) => (checked ? [...list, key] : list.filter((s) => s !== key)))
                    }
                  />
                </div>
              )
            })}
          </React.Fragment>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{slots.length} shifts selected this week</p>
    </div>
  )
}`,
  },
  {
    name: "CalendarVisibilityList",
    description: "Calendar sidebar toggling visibility of each calendar with colour-matched checkboxes.",
    code: `
const calendars = [
  { name: "Work", tone: "border-chart-1 data-checked:border-chart-1 data-checked:bg-chart-1" },
  { name: "Personal", tone: "border-chart-2 data-checked:border-chart-2 data-checked:bg-chart-2" },
  { name: "Team offsite", tone: "border-chart-3 data-checked:border-chart-3 data-checked:bg-chart-3" },
  { name: "Holidays", tone: "border-chart-4 data-checked:border-chart-4 data-checked:bg-chart-4" },
]

export default function CalendarVisibilityList() {
  const [visible, setVisible] = React.useState<string[]>(["Work", "Personal", "Holidays"])

  return (
    <div className="flex w-full max-w-[14rem] flex-col gap-1">
      <span className="flex items-center gap-2 px-2 py-1 text-xs font-medium text-muted-foreground">
        <CalendarIcon className="size-3.5" />
        My calendars
      </span>
      {calendars.map((calendar) => (
        <label key={calendar.name} className="group/cal flex cursor-pointer items-center gap-2 px-2 py-1.5 text-sm hover:bg-muted">
          <Checkbox
            checked={visible.includes(calendar.name)}
            onCheckedChange={(checked) =>
              setVisible((list) => (checked ? [...list, calendar.name] : list.filter((n) => n !== calendar.name)))
            }
            className={cn("data-checked:text-background", calendar.tone)}
          />
          <span className="flex-1">{calendar.name}</span>
          {visible.includes(calendar.name) ? (
            <EyeIcon className="size-3.5 text-muted-foreground opacity-0 group-hover/cal:opacity-100" />
          ) : (
            <EyeOffIcon className="size-3.5 text-muted-foreground" />
          )}
        </label>
      ))}
    </div>
  )
}`,
  },
  {
    name: "DeleteAccountConfirm",
    description: "Destructive confirmation where the delete button stays disabled until every acknowledgement is checked.",
    code: `
const acknowledgements = [
  "All projects and files will be permanently deleted.",
  "Active subscriptions will be cancelled without refund.",
  "This action cannot be undone.",
]

export default function DeleteAccountConfirm() {
  const [acked, setAcked] = React.useState<number[]>([])

  return (
    <Card className="w-full max-w-sm ring-destructive/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-destructive">
          <TriangleAlertIcon className="size-4" />
          Delete workspace
        </CardTitle>
        <CardDescription>Confirm you understand what happens next.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup className="gap-3">
          {acknowledgements.map((text, index) => (
            <Field key={text} orientation="horizontal">
              <Checkbox
                id={"ack-" + index}
                checked={acked.includes(index)}
                onCheckedChange={(checked) =>
                  setAcked((list) => (checked ? [...list, index] : list.filter((i) => i !== index)))
                }
              />
              <FieldLabel htmlFor={"ack-" + index} className="font-normal">
                {text}
              </FieldLabel>
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
      <CardFooter className="border-t">
        <Button variant="destructive" className="w-full" disabled={acked.length < acknowledgements.length}>
          <Trash2Icon data-icon="inline-start" />
          Delete workspace
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "MaxSelectionLimit",
    description: "Newsletter topic picker limited to three choices, disabling the rest at the limit.",
    code: `
const topics = ["Engineering", "Design", "Product", "Leadership", "Careers", "Events"]
const LIMIT = 3

export default function MaxSelectionLimit() {
  const [picked, setPicked] = React.useState<string[]>(["Design"])
  const atLimit = picked.length >= LIMIT

  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend>Newsletter topics</FieldLegend>
      <FieldDescription>
        Choose up to {LIMIT}. {LIMIT - picked.length} left.
      </FieldDescription>
      <FieldGroup className="grid grid-cols-2 gap-3">
        {topics.map((topic) => {
          const checked = picked.includes(topic)
          const disabled = atLimit && !checked
          return (
            <Field key={topic} orientation="horizontal" data-disabled={disabled || undefined}>
              <Checkbox
                id={"topic-" + topic}
                checked={checked}
                disabled={disabled}
                onCheckedChange={(value) =>
                  setPicked((list) => (value ? [...list, topic] : list.filter((t) => t !== topic)))
                }
              />
              <FieldLabel htmlFor={"topic-" + topic} className="font-normal">
                {topic}
              </FieldLabel>
            </Field>
          )
        })}
      </FieldGroup>
    </FieldSet>
  )
}`,
  },
  {
    name: "ColumnVisibilityPopover",
    description: "Data table column picker in a Popover whose checkboxes show and hide table columns.",
    code: `
const columns = ["Customer", "Plan", "MRR", "Status"] as const
const rows = [
  { Customer: "Bluebird Co", Plan: "Team", MRR: "$480", Status: "Active" },
  { Customer: "Kestrel Labs", Plan: "Business", MRR: "$1,250", Status: "Trial" },
  { Customer: "Mosaic Inc", Plan: "Starter", MRR: "$0", Status: "Churned" },
]

export default function ColumnVisibilityPopover() {
  const [shown, setShown] = React.useState<string[]>(["Customer", "Plan", "MRR"])

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Popover>
        <PopoverTrigger render={<Button variant="outline" size="sm" className="self-end" />}>
          <Columns3Icon data-icon="inline-start" />
          Columns
        </PopoverTrigger>
        <PopoverContent align="end" className="w-44">
          <div className="flex flex-col gap-2.5">
            {columns.map((column) => (
              <label key={column} className="flex items-center gap-2 text-xs">
                <Checkbox
                  checked={shown.includes(column)}
                  disabled={column === "Customer"}
                  onCheckedChange={(checked) =>
                    setShown((list) => (checked ? [...list, column] : list.filter((c) => c !== column)))
                  }
                />
                {column}
              </label>
            ))}
          </div>
        </PopoverContent>
      </Popover>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.filter((c) => shown.includes(c)).map((c) => (
              <TableHead key={c}>{c}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Customer}>
              {columns.filter((c) => shown.includes(c)).map((c) => (
                <TableCell key={c}>{row[c]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "ShiftClickRangeSelect",
    description: "Photo import list supporting shift-click to select a range of checkboxes.",
    code: `
const photos = Array.from({ length: 7 }, (_, i) => "IMG_" + (2041 + i) + ".heic")

export default function ShiftClickRangeSelect() {
  const [selected, setSelected] = React.useState<number[]>([])
  const lastIndex = React.useRef<number | null>(null)

  const handleClick = (index: number, shiftKey: boolean) => {
    const anchor = lastIndex.current
    setSelected((list) => {
      if (shiftKey && anchor !== null) {
        const [from, to] = anchor < index ? [anchor, index] : [index, anchor]
        const range = Array.from({ length: to - from + 1 }, (_, i) => from + i)
        return Array.from(new Set([...list, ...range]))
      }
      return list.includes(index) ? list.filter((i) => i !== index) : [...list, index]
    })
    lastIndex.current = index
  }

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <p className="text-xs text-muted-foreground">Hold Shift to select a range · {selected.length} selected</p>
      <div className="flex flex-col border">
        {photos.map((photo, index) => (
          <div key={photo} className="flex items-center gap-3 border-b px-3 py-2 last:border-b-0">
            <Checkbox
              aria-label={"Select " + photo}
              checked={selected.includes(index)}
              onClick={(e) => {
                e.preventDefault()
                handleClick(index, e.shiftKey)
              }}
            />
            <ImageIcon className="size-4 text-muted-foreground" />
            <span className="font-mono text-xs">{photo}</span>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "FeatureFlagEnvironments",
    description: "Admin feature flag table with a checkbox per environment and a disabled production column.",
    code: `
const envs = ["Dev", "Staging", "Prod"]
const flags = [
  { key: "new-checkout", on: ["Dev", "Staging"] },
  { key: "ai-summaries", on: ["Dev"] },
  { key: "dark-mode-v2", on: ["Dev", "Staging", "Prod"] },
  { key: "usage-billing", on: [] as string[], locked: true },
]

export default function FeatureFlagEnvironments() {
  return (
    <Table className="w-full max-w-md">
      <TableHeader>
        <TableRow>
          <TableHead>Flag</TableHead>
          {envs.map((env) => (
            <TableHead key={env} className="w-16 text-center">
              {env}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {flags.map((flag) => (
          <TableRow key={flag.key}>
            <TableCell className="font-mono text-xs">
              {flag.key}
              {flag.locked && <LockIcon className="ms-1 inline size-3 text-muted-foreground" />}
            </TableCell>
            {envs.map((env) => (
              <TableCell key={env}>
                <div className="flex justify-center">
                  <Checkbox
                    aria-label={flag.key + " in " + env}
                    defaultChecked={flag.on.includes(env)}
                    disabled={flag.locked}
                  />
                </div>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`,
  },
  {
    name: "ExportFieldsPicker",
    description: "CSV export dialog body with select all / none shortcuts and a two-column field list.",
    code: `
const fields = ["Name", "Email", "Company", "Phone", "Country", "Signup date", "Plan", "Last active"]

export default function ExportFieldsPicker() {
  const [picked, setPicked] = React.useState<string[]>(["Name", "Email", "Plan"])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Fields to export</span>
        <div className="flex gap-1">
          <Button variant="ghost" size="xs" onClick={() => setPicked(fields)}>
            All
          </Button>
          <Button variant="ghost" size="xs" onClick={() => setPicked([])}>
            None
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
        {fields.map((field) => (
          <label key={field} className="flex items-center gap-2 text-xs">
            <Checkbox
              checked={picked.includes(field)}
              onCheckedChange={(checked) =>
                setPicked((list) => (checked ? [...list, field] : list.filter((f) => f !== field)))
              }
            />
            {field}
          </label>
        ))}
      </div>
      <Button size="sm" disabled={picked.length === 0}>
        <DownloadIcon data-icon="inline-start" />
        Export {picked.length} fields
      </Button>
    </div>
  )
}`,
  },
  {
    name: "InvoicePaySelection",
    description: "Outstanding invoices list where checked invoices sum into the payment total.",
    code: `
const invoices = [
  { id: "INV-1042", due: "Overdue 4 days", amount: 1200, overdue: true },
  { id: "INV-1047", due: "Due Nov 20", amount: 640 },
  { id: "INV-1051", due: "Due Dec 2", amount: 2150 },
]

export default function InvoicePaySelection() {
  const [picked, setPicked] = React.useState<string[]>(["INV-1042"])
  const total = invoices.filter((i) => picked.includes(i.id)).reduce((s, i) => s + i.amount, 0)

  return (
    <div className="flex w-full max-w-sm flex-col border">
      {invoices.map((invoice) => (
        <label key={invoice.id} className="flex cursor-pointer items-center gap-3 border-b px-4 py-3">
          <Checkbox
            checked={picked.includes(invoice.id)}
            onCheckedChange={(checked) =>
              setPicked((list) => (checked ? [...list, invoice.id] : list.filter((id) => id !== invoice.id)))
            }
          />
          <div className="flex-1">
            <p className="font-mono text-xs">{invoice.id}</p>
            <p className={cn("text-xs", invoice.overdue ? "text-destructive" : "text-muted-foreground")}>{invoice.due}</p>
          </div>
          <span className="text-sm font-medium tabular-nums">\${invoice.amount.toLocaleString()}</span>
        </label>
      ))}
      <div className="flex items-center justify-between gap-3 bg-muted/40 px-4 py-3">
        <span className="text-sm">
          Total <span className="font-semibold tabular-nums">\${total.toLocaleString()}</span>
        </span>
        <Button size="sm" disabled={total === 0}>
          Pay now
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "MeetingAttendeesPicker",
    description: "Meeting invite attendee list with avatars, required people locked in, and optional guests.",
    code: `
const people = [
  { name: "Ava Lindqvist", role: "Organizer", required: true },
  { name: "Ben Okafor", role: "Engineering" },
  { name: "Chloe Ramos", role: "Design" },
  { name: "Dan Whitaker", role: "Sales" },
]

export default function MeetingAttendeesPicker() {
  const [invited, setInvited] = React.useState<string[]>(["Ben Okafor"])

  return (
    <div className="flex w-full max-w-xs flex-col gap-1">
      <span className="mb-1 text-sm font-medium">Invite to Design review</span>
      {people.map((person) => (
        <label key={person.name} className="flex cursor-pointer items-center gap-3 px-2 py-1.5 hover:bg-muted">
          <Avatar size="sm">
            <AvatarFallback>{person.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm">{person.name}</p>
            <p className="text-[11px] text-muted-foreground">{person.role}</p>
          </div>
          <Checkbox
            checked={person.required || invited.includes(person.name)}
            disabled={person.required}
            onCheckedChange={(checked) =>
              setInvited((list) => (checked ? [...list, person.name] : list.filter((n) => n !== person.name)))
            }
          />
        </label>
      ))}
      <span className="mt-1 text-xs text-muted-foreground">{invited.length + 1} attendees</span>
    </div>
  )
}`,
  },
  {
    name: "RememberDeviceLogin",
    description: "Two-factor verification form with a \"remember this device\" checkbox and helper text.",
    code: `
export default function RememberDeviceLogin() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Two-factor authentication</CardTitle>
        <CardDescription>Enter the 6-digit code from your authenticator app.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <Field>
            <FieldLabel htmlFor="otp-code">Code</FieldLabel>
            <Input id="otp-code" inputMode="numeric" placeholder="000000" className="font-mono tracking-widest" />
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="remember-device" name="remember" defaultChecked />
            <FieldContent>
              <FieldLabel htmlFor="remember-device">Remember this device</FieldLabel>
              <FieldDescription>Skip verification here for 30 days.</FieldDescription>
            </FieldContent>
          </Field>
          <Button type="submit">Verify</Button>
        </form>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "DeployChecklistGate",
    description: "Release checklist with right-aligned checkboxes that unlocks the deploy button when complete.",
    code: `
const steps = [
  { id: "tests", label: "All CI checks passed", hint: "142 tests, 0 failures" },
  { id: "migrations", label: "Database migrations reviewed", hint: "2 pending migrations" },
  { id: "changelog", label: "Changelog updated", hint: "v4.8.0" },
  { id: "oncall", label: "On-call engineer notified", hint: "Priya is on call" },
]

export default function DeployChecklistGate() {
  const [done, setDone] = React.useState<string[]>(["tests"])
  const ready = done.length === steps.length

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <FieldGroup className="gap-0 border">
        {steps.map((step) => (
          <Field key={step.id} orientation="horizontal" className="border-b px-3 py-2.5 last:border-b-0">
            <FieldContent>
              <FieldLabel htmlFor={"deploy-" + step.id}>{step.label}</FieldLabel>
              <FieldDescription>{step.hint}</FieldDescription>
            </FieldContent>
            <Checkbox
              id={"deploy-" + step.id}
              checked={done.includes(step.id)}
              onCheckedChange={(checked) =>
                setDone((list) => (checked ? [...list, step.id] : list.filter((s) => s !== step.id)))
              }
            />
          </Field>
        ))}
      </FieldGroup>
      <Button disabled={!ready}>
        <RocketIcon data-icon="inline-start" />
        {ready ? "Deploy to production" : done.length + "/" + steps.length + " checks complete"}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "SurveyOtherOption",
    description: "Multiple-choice survey question where checking \"Other\" reveals a text input.",
    code: `
const options = ["Search engine", "Friend or colleague", "Podcast", "Social media"]

export default function SurveyOtherOption() {
  const [other, setOther] = React.useState(false)

  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend>How did you hear about us?</FieldLegend>
      <FieldDescription>Select all that apply.</FieldDescription>
      <FieldGroup className="gap-3">
        {options.map((option) => (
          <Field key={option} orientation="horizontal">
            <Checkbox id={"source-" + option} name="source" value={option} />
            <FieldLabel htmlFor={"source-" + option} className="font-normal">
              {option}
            </FieldLabel>
          </Field>
        ))}
        <Field orientation="horizontal">
          <Checkbox id="source-other" checked={other} onCheckedChange={setOther} />
          <FieldLabel htmlFor="source-other" className="font-normal">
            Other
          </FieldLabel>
        </Field>
        {other && <Input autoFocus placeholder="Tell us where" aria-label="Other source" className="ms-6 w-auto" />}
      </FieldGroup>
    </FieldSet>
  )
}`,
  },
  {
    name: "ControlledStateReadout",
    description: "Controlled checkbox driven by external buttons with a live state readout.",
    code: `
export default function ControlledStateReadout() {
  const [checked, setChecked] = React.useState(false)
  const [changes, setChanges] = React.useState(0)

  const update = (value: boolean) => {
    setChecked(value)
    setChanges((c) => c + 1)
  }

  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <Field orientation="horizontal">
        <Checkbox id="controlled-sync" checked={checked} onCheckedChange={update} />
        <FieldLabel htmlFor="controlled-sync">Sync contacts</FieldLabel>
      </Field>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => update(true)} disabled={checked}>
          Check
        </Button>
        <Button size="sm" variant="outline" onClick={() => update(false)} disabled={!checked}>
          Uncheck
        </Button>
        <Button size="sm" variant="ghost" onClick={() => update(!checked)}>
          Toggle
        </Button>
      </div>
      <pre className="bg-muted p-3 font-mono text-xs">
        {JSON.stringify({ checked, changes }, null, 2)}
      </pre>
    </div>
  )
}`,
  },
  {
    name: "NativeFormDataSubmit",
    description: "Uncontrolled checkboxes with name and value submitted through a native form and FormData.",
    code: `
const integrations = [
  { value: "slack", label: "Slack" },
  { value: "github", label: "GitHub" },
  { value: "linear", label: "Linear" },
  { value: "figma", label: "Figma" },
]

export default function NativeFormDataSubmit() {
  const [result, setResult] = React.useState<string[] | null>(null)

  return (
    <form
      className="flex w-full max-w-xs flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        setResult(new FormData(e.currentTarget).getAll("integrations").map(String))
      }}
    >
      <FieldSet>
        <FieldLegend variant="label">Connect integrations</FieldLegend>
        <FieldGroup className="gap-3">
          {integrations.map((item) => (
            <Field key={item.value} orientation="horizontal">
              <Checkbox id={"int-" + item.value} name="integrations" value={item.value} defaultChecked={item.value === "slack"} />
              <FieldLabel htmlFor={"int-" + item.value} className="font-normal">
                {item.label}
              </FieldLabel>
            </Field>
          ))}
        </FieldGroup>
      </FieldSet>
      <Button type="submit" size="sm">
        Save
      </Button>
      {result && (
        <p className="font-mono text-xs text-muted-foreground">integrations = [{result.join(", ")}]</p>
      )}
    </form>
  )
}`,
  },
  {
    name: "AsyncSavingCheckbox",
    description: "Checkbox that saves to the server on change, showing a spinner and disabling while pending.",
    code: `
export default function AsyncSavingCheckbox() {
  const [checked, setChecked] = React.useState(false)
  const [saving, setSaving] = React.useState(false)
  const [savedAt, setSavedAt] = React.useState<string | null>(null)

  const handleChange = (value: boolean) => {
    setChecked(value)
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      setSavedAt(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    }, 1200)
  }

  return (
    <Field orientation="horizontal" className="w-full max-w-xs" data-disabled={saving || undefined}>
      <Checkbox id="weekly-digest" checked={checked} disabled={saving} onCheckedChange={handleChange} />
      <FieldContent>
        <FieldLabel htmlFor="weekly-digest">Weekly digest email</FieldLabel>
        <FieldDescription className="flex items-center gap-1.5">
          {saving ? (
            <>
              <Spinner className="size-3" /> Saving...
            </>
          ) : savedAt ? (
            "Saved at " + savedAt
          ) : (
            "Changes save automatically."
          )}
        </FieldDescription>
      </FieldContent>
    </Field>
  )
}`,
  },
  {
    name: "AccessibilityPreviewToggles",
    description: "Accessibility preferences whose checkboxes immediately restyle a live preview card.",
    code: `
export default function AccessibilityPreviewToggles() {
  const [prefs, setPrefs] = React.useState({ large: false, contrast: false, underline: true })
  const set = (key: keyof typeof prefs) => (value: boolean) => setPrefs((p) => ({ ...p, [key]: value }))

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <FieldGroup className="gap-3">
        <Field orientation="horizontal">
          <Checkbox id="a11y-large" checked={prefs.large} onCheckedChange={set("large")} />
          <FieldLabel htmlFor="a11y-large">Larger text</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="a11y-contrast" checked={prefs.contrast} onCheckedChange={set("contrast")} />
          <FieldLabel htmlFor="a11y-contrast">High contrast</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="a11y-underline" checked={prefs.underline} onCheckedChange={set("underline")} />
          <FieldLabel htmlFor="a11y-underline">Underline links</FieldLabel>
        </Field>
      </FieldGroup>
      <div
        className={cn(
          "border p-4 transition-all",
          prefs.large ? "text-base" : "text-xs",
          prefs.contrast ? "bg-foreground text-background" : "bg-muted/40"
        )}
      >
        <p className="font-medium">Preview</p>
        <p className={cn(!prefs.contrast && "text-muted-foreground")}>
          Your order has shipped.{" "}
          <a href="#" className={cn("font-medium", prefs.underline && "underline")}>
            Track package
          </a>
        </p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "NestedSubtaskTree",
    description: "Task with nested subtasks where completing every subtask auto-completes the parent.",
    code: `
const subtasks = ["Write API spec", "Review with backend", "Add rate limits", "Update docs"]

export default function NestedSubtaskTree() {
  const [done, setDone] = React.useState<string[]>(["Write API spec"])
  const all = done.length === subtasks.length

  return (
    <div className="w-full max-w-xs border p-3">
      <label className="flex items-center gap-2">
        <Checkbox
          checked={all}
          indeterminate={done.length > 0 && !all}
          onCheckedChange={(checked) => setDone(checked ? subtasks : [])}
          className="${IND}"
        />
        <span className={cn("text-sm font-medium", all && "text-muted-foreground line-through")}>Public API v2</span>
        <Badge variant="secondary" className="ms-auto">
          {done.length}/{subtasks.length}
        </Badge>
      </label>
      <div className="ms-2 mt-2 flex flex-col gap-2 border-s ps-4">
        {subtasks.map((task) => (
          <label key={task} className="flex items-center gap-2 text-xs">
            <Checkbox
              checked={done.includes(task)}
              onCheckedChange={(checked) =>
                setDone((list) => (checked ? [...list, task] : list.filter((t) => t !== task)))
              }
            />
            <span className={cn(done.includes(task) && "text-muted-foreground line-through")}>{task}</span>
          </label>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "CompareProductsBar",
    description: "Product list with compare checkboxes capped at three and a sticky compare bar.",
    code: `
const laptops = [
  { name: "Aero 14", price: "$1,199" },
  { name: "Aero 16", price: "$1,499" },
  { name: "Volt Pro", price: "$1,899" },
  { name: "Volt Air", price: "$999" },
]

export default function CompareProductsBar() {
  const [compare, setCompare] = React.useState<string[]>([])

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {laptops.map((laptop) => {
        const checked = compare.includes(laptop.name)
        const disabled = !checked && compare.length >= 3
        return (
          <div key={laptop.name} className="flex items-center gap-3 border p-3">
            <div className="flex size-10 items-center justify-center bg-muted">
              <LaptopIcon className="size-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{laptop.name}</p>
              <p className="text-xs text-muted-foreground">{laptop.price}</p>
            </div>
            <label className={cn("flex items-center gap-2 text-xs", disabled && "opacity-50")}>
              <Checkbox
                checked={checked}
                disabled={disabled}
                onCheckedChange={(value) =>
                  setCompare((list) => (value ? [...list, laptop.name] : list.filter((n) => n !== laptop.name)))
                }
              />
              Compare
            </label>
          </div>
        )
      })}
      {compare.length > 0 && (
        <div className="flex items-center justify-between bg-primary px-3 py-2 text-primary-foreground">
          <span className="text-xs">{compare.length} of 3 selected</span>
          <Button size="xs" variant="secondary" disabled={compare.length < 2}>
            Compare now
          </Button>
        </div>
      )}
    </div>
  )
}`,
  },
  {
    name: "OfflineDownloadTracks",
    description: "Playlist download picker that totals the storage size of checked tracks.",
    code: `
const tracks = [
  { title: "Morning Static", artist: "June Avenue", mb: 8.4 },
  { title: "Glass Rooms", artist: "Mira Sol", mb: 9.1 },
  { title: "Long Way North", artist: "Atlas Choir", mb: 11.6 },
  { title: "Paper Boats", artist: "Harbor Lights", mb: 7.2 },
]

export default function OfflineDownloadTracks() {
  const [picked, setPicked] = React.useState<string[]>(tracks.map((t) => t.title))
  const size = tracks.filter((t) => picked.includes(t.title)).reduce((s, t) => s + t.mb, 0)

  return (
    <div className="flex w-full max-w-sm flex-col border">
      {tracks.map((track, index) => (
        <label key={track.title} className="flex cursor-pointer items-center gap-3 border-b px-3 py-2 hover:bg-muted/50">
          <span className="w-4 text-xs text-muted-foreground tabular-nums">{index + 1}</span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm">{track.title}</p>
            <p className="truncate text-xs text-muted-foreground">{track.artist}</p>
          </div>
          <span className="text-[11px] text-muted-foreground">{track.mb} MB</span>
          <Checkbox
            checked={picked.includes(track.title)}
            onCheckedChange={(checked) =>
              setPicked((list) => (checked ? [...list, track.title] : list.filter((t) => t !== track.title)))
            }
          />
        </label>
      ))}
      <div className="flex items-center justify-between p-3">
        <span className="text-xs text-muted-foreground">{size.toFixed(1)} MB on device</span>
        <Button size="sm" disabled={picked.length === 0}>
          <DownloadIcon data-icon="inline-start" />
          Download {picked.length}
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "MarketingConsentCard",
    description: "Marketing consent card with per-channel checkboxes and legal fine print.",
    code: `
const channels = [
  { id: "email", icon: MailIcon, label: "Email", description: "Product news and monthly tips." },
  { id: "sms", icon: MessageSquareIcon, label: "Text messages", description: "Order updates and flash sales." },
  { id: "phone", icon: PhoneIcon, label: "Phone calls", description: "Occasional account check-ins." },
]

export default function MarketingConsentCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Stay in touch</CardTitle>
        <CardDescription>Choose how Juniper Goods may contact you.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <FieldGroup className="gap-3">
          {channels.map((channel) => (
            <Field key={channel.id} orientation="horizontal">
              <Checkbox id={"consent-" + channel.id} name="consent" value={channel.id} defaultChecked={channel.id === "email"} />
              <FieldContent>
                <FieldLabel htmlFor={"consent-" + channel.id}>
                  <channel.icon className="size-3.5" />
                  {channel.label}
                </FieldLabel>
                <FieldDescription>{channel.description}</FieldDescription>
              </FieldContent>
            </Field>
          ))}
        </FieldGroup>
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          You can withdraw consent at any time from your account settings. Message and data rates may apply.
        </p>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "GroceryListByAisle",
    description: "Shopping list grouped by aisle using FieldSets with per-group completion counts.",
    code: `
const aisles = [
  { name: "Produce", items: ["Spinach", "Lemons", "Avocados"] },
  { name: "Dairy", items: ["Greek yogurt", "Oat milk"] },
  { name: "Pantry", items: ["Basmati rice", "Chickpeas", "Olive oil"] },
]

export default function GroceryListByAisle() {
  const [got, setGot] = React.useState<string[]>(["Lemons", "Oat milk"])

  return (
    <div className="flex w-full max-w-xs flex-col gap-5">
      {aisles.map((aisle) => {
        const count = aisle.items.filter((i) => got.includes(i)).length
        return (
          <FieldSet key={aisle.name}>
            <FieldLegend variant="label" className="flex w-full items-center justify-between">
              {aisle.name}
              <span className="font-normal text-muted-foreground">
                {count}/{aisle.items.length}
              </span>
            </FieldLegend>
            <FieldGroup className="gap-2.5">
              {aisle.items.map((item) => (
                <Field key={item} orientation="horizontal">
                  <Checkbox
                    id={"grocery-" + item}
                    checked={got.includes(item)}
                    onCheckedChange={(checked) =>
                      setGot((list) => (checked ? [...list, item] : list.filter((i) => i !== item)))
                    }
                  />
                  <FieldLabel
                    htmlFor={"grocery-" + item}
                    className={cn("font-normal", got.includes(item) && "text-muted-foreground line-through")}
                  >
                    {item}
                  </FieldLabel>
                </Field>
              ))}
            </FieldGroup>
          </FieldSet>
        )
      })}
    </div>
  )
}`,
  },
  {
    name: "BackupFolderPicker",
    description: "Backup source picker with folder sizes and a storage meter that updates as folders are chosen.",
    code: `
const folders = [
  { name: "Documents", gb: 12.4 },
  { name: "Photos", gb: 48.9 },
  { name: "Projects", gb: 21.3 },
  { name: "Downloads", gb: 9.8 },
  { name: "Music", gb: 6.1 },
]
const QUOTA = 100

export default function BackupFolderPicker() {
  const [picked, setPicked] = React.useState<string[]>(["Documents", "Projects"])
  const used = folders.filter((f) => picked.includes(f.name)).reduce((s, f) => s + f.gb, 0)
  const over = used > QUOTA * 0.8

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex flex-col gap-1 border">
        {folders.map((folder) => (
          <label key={folder.name} className="flex cursor-pointer items-center gap-3 px-3 py-2 hover:bg-muted/50">
            <Checkbox
              checked={picked.includes(folder.name)}
              onCheckedChange={(checked) =>
                setPicked((list) => (checked ? [...list, folder.name] : list.filter((n) => n !== folder.name)))
              }
            />
            <FolderIcon className="size-4 text-muted-foreground" />
            <span className="flex-1 text-sm">{folder.name}</span>
            <span className="text-xs text-muted-foreground tabular-nums">{folder.gb} GB</span>
          </label>
        ))}
      </div>
      <Progress value={(used / QUOTA) * 100} aria-label="Backup storage">
        <ProgressLabel className="text-xs">Cloud storage</ProgressLabel>
        <span className={cn("ms-auto text-xs tabular-nums", over ? "text-destructive" : "text-muted-foreground")}>
          {used.toFixed(1)} / {QUOTA} GB
        </span>
      </Progress>
    </div>
  )
}`,
  },
  {
    name: "ShortcutPreferenceList",
    description: "Editor preference checkboxes each paired with its keyboard shortcut.",
    code: `
const prefs = [
  { id: "wrap", label: "Word wrap", keys: ["Alt", "Z"], on: true },
  { id: "minimap", label: "Show minimap", keys: ["Ctrl", "M"], on: false },
  { id: "lines", label: "Line numbers", keys: ["Ctrl", "L"], on: true },
  { id: "zen", label: "Zen mode", keys: ["Ctrl", "K", "Z"], on: false },
]

export default function ShortcutPreferenceList() {
  return (
    <FieldGroup className="w-full max-w-xs gap-3">
      {prefs.map((pref) => (
        <Field key={pref.id} orientation="horizontal">
          <Checkbox id={"pref-" + pref.id} defaultChecked={pref.on} />
          <FieldLabel htmlFor={"pref-" + pref.id} className="flex-1 font-normal">
            {pref.label}
          </FieldLabel>
          <KbdGroup>
            {pref.keys.map((key) => (
              <Kbd key={key}>{key}</Kbd>
            ))}
          </KbdGroup>
        </Field>
      ))}
    </FieldGroup>
  )
}`,
  },
  {
    name: "ScrollToAcceptAgreement",
    description: "License agreement where the acceptance checkbox unlocks only after scrolling to the end.",
    code: `
const clauses = [
  "1. You may install the software on up to three devices you own.",
  "2. You may not resell, sublicense, or distribute the software.",
  "3. Updates are provided for twelve months from purchase.",
  "4. We collect anonymous crash reports to improve stability.",
  "5. The software is provided as is, without warranty of any kind.",
  "6. This agreement is governed by the laws of your country of residence.",
  "7. Either party may terminate this agreement with written notice.",
]

export default function ScrollToAcceptAgreement() {
  const [reachedEnd, setReachedEnd] = React.useState(false)
  const [accepted, setAccepted] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div
        className="h-36 overflow-y-auto border bg-muted/30 p-3 text-xs leading-relaxed"
        onScroll={(e) => {
          const el = e.currentTarget
          if (el.scrollTop + el.clientHeight >= el.scrollHeight - 4) setReachedEnd(true)
        }}
      >
        <p className="mb-2 font-medium">End user license agreement</p>
        {clauses.map((clause) => (
          <p key={clause} className="mb-2 text-muted-foreground">
            {clause}
          </p>
        ))}
      </div>
      <Field orientation="horizontal" data-disabled={!reachedEnd || undefined}>
        <Checkbox id="eula-accept" disabled={!reachedEnd} checked={accepted} onCheckedChange={setAccepted} />
        <FieldContent>
          <FieldLabel htmlFor="eula-accept">I have read and accept the agreement</FieldLabel>
          {!reachedEnd && <FieldDescription>Scroll to the end to continue.</FieldDescription>}
        </FieldContent>
      </Field>
      <Button disabled={!accepted}>Install</Button>
    </div>
  )
}`,
  },
  {
    name: "AtLeastOneRequired",
    description: "Checkbox group that validates at least one selection and shows a group-level error.",
    code: `
const reasons = ["Too expensive", "Missing features", "Switching to another tool", "No longer needed"]

export default function AtLeastOneRequired() {
  const [picked, setPicked] = React.useState<string[]>([])
  const [touched, setTouched] = React.useState(false)
  const invalid = touched && picked.length === 0

  return (
    <form
      className="flex w-full max-w-xs flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        setTouched(true)
      }}
    >
      <FieldSet data-invalid={invalid || undefined}>
        <FieldLegend>Why are you cancelling?</FieldLegend>
        <FieldDescription>Select at least one reason.</FieldDescription>
        <FieldGroup className="gap-3">
          {reasons.map((reason) => (
            <Field key={reason} orientation="horizontal" data-invalid={invalid || undefined}>
              <Checkbox
                id={"reason-" + reason}
                aria-invalid={invalid || undefined}
                checked={picked.includes(reason)}
                onCheckedChange={(checked) =>
                  setPicked((list) => (checked ? [...list, reason] : list.filter((r) => r !== reason)))
                }
              />
              <FieldLabel htmlFor={"reason-" + reason} className="font-normal">
                {reason}
              </FieldLabel>
            </Field>
          ))}
        </FieldGroup>
        {invalid && <FieldError>Please choose at least one reason.</FieldError>}
      </FieldSet>
      <Button type="submit" variant="destructive">
        Cancel subscription
      </Button>
    </form>
  )
}`,
  },
]

export default examples
