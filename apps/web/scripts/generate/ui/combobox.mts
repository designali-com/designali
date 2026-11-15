import type { Example } from "./_lib.mjs"

/** Standard list renderer for string items. */
const stringList = `<ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>`

const examples: Example[] = [
  {
    name: "AssigneePicker",
    description: "Assign a task to a teammate with avatar initials and email in each option.",
    code: `
type Member = { id: string; name: string; email: string; initials: string }

const members: Member[] = [
  { id: "1", name: "Maya Chen", email: "maya@northwind.test", initials: "MC" },
  { id: "2", name: "Arjun Patel", email: "arjun@northwind.test", initials: "AP" },
  { id: "3", name: "Sofia Martins", email: "sofia@northwind.test", initials: "SM" },
  { id: "4", name: "Kwame Asante", email: "kwame@northwind.test", initials: "KA" },
  { id: "5", name: "Lina Berg", email: "lina@northwind.test", initials: "LB" },
]

export default function AssigneePicker() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={members} itemToStringLabel={(member: Member) => member.name}>
        <ComboboxInput placeholder="Assign to..." className="w-full" />
        <ComboboxContent>
          <ComboboxEmpty>No teammates found.</ComboboxEmpty>
          <ComboboxList>
            {(member: Member) => (
              <ComboboxItem key={member.id} value={member}>
                <Avatar size="sm">
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div className="flex min-w-0 flex-col">
                  <span className="truncate">{member.name}</span>
                  <span className="truncate text-[11px] text-muted-foreground">{member.email}</span>
                </div>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}`,
  },
  {
    name: "ControlledRegionReadout",
    description: "Controlled combobox whose selected value is mirrored below with a reset action.",
    code: `
const regions = ["Frankfurt (eu-central-1)", "Dublin (eu-west-1)", "Virginia (us-east-1)", "Oregon (us-west-2)", "Singapore (ap-southeast-1)"]

export default function ControlledRegionReadout() {
  const [value, setValue] = React.useState<string | null>(regions[0]!)
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Combobox items={regions} value={value} onValueChange={setValue}>
        <ComboboxInput placeholder="Choose a region" className="w-full" />
        <ComboboxContent>
          <ComboboxEmpty>No regions found.</ComboboxEmpty>
          ${stringList}
        </ComboboxContent>
      </Combobox>
      <div className="flex items-center justify-between border bg-muted/40 px-3 py-2 text-xs">
        <span>
          Deploying to: <span className="font-medium">{value ?? "none"}</span>
        </span>
        <Button variant="ghost" size="xs" onClick={() => setValue(null)} disabled={!value}>
          Reset
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "DisabledCombobox",
    description: "Disabled combobox in a settings field managed by a workspace admin.",
    code: `
const plans = ["Starter", "Team", "Business", "Enterprise"]

export default function DisabledCombobox() {
  return (
    <Field className="w-full max-w-xs" data-disabled>
      <FieldLabel>Billing plan</FieldLabel>
      <Combobox items={plans} defaultValue="Business" disabled>
        <ComboboxInput disabled className="w-full" />
        <ComboboxContent>
          ${stringList}
        </ComboboxContent>
      </Combobox>
      <FieldDescription className="flex items-center gap-1">
        <LockIcon className="size-3" />
        Only workspace owners can change the plan.
      </FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "JobTitleField",
    description: "Profile form field pairing a combobox with a label and helper description.",
    code: `
const titles = ["Product Designer", "Product Manager", "Frontend Engineer", "Backend Engineer", "Data Analyst", "Engineering Manager", "Customer Success Lead"]

export default function JobTitleField() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <Field>
        <FieldLabel htmlFor="full-name">Full name</FieldLabel>
        <Input id="full-name" defaultValue="Hana Okada" />
      </Field>
      <Field>
        <FieldLabel htmlFor="job-title">Job title</FieldLabel>
        <Combobox items={titles}>
          <ComboboxInput id="job-title" placeholder="Search titles" className="w-full" />
          <ComboboxContent>
            <ComboboxEmpty>No matching titles.</ComboboxEmpty>
            ${stringList}
          </ComboboxContent>
        </Combobox>
        <FieldDescription>Shown on your profile and in mentions.</FieldDescription>
      </Field>
    </FieldGroup>
  )
}`,
  },
  {
    name: "RequiredFieldValidation",
    description: "Form that marks the combobox invalid with an error message when submitted empty.",
    code: `
const departments = ["Engineering", "Design", "Marketing", "Sales", "Operations", "Finance"]

export default function RequiredFieldValidation() {
  const [value, setValue] = React.useState<string | null>(null)
  const [submitted, setSubmitted] = React.useState(false)
  const invalid = submitted && !value
  return (
    <form
      className="flex w-full max-w-xs flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <Field data-invalid={invalid || undefined}>
        <FieldLabel htmlFor="department">Department</FieldLabel>
        <Combobox items={departments} value={value} onValueChange={setValue}>
          <ComboboxInput id="department" placeholder="Select department" aria-invalid={invalid} className="w-full" />
          <ComboboxContent>
            <ComboboxEmpty>No departments found.</ComboboxEmpty>
            ${stringList}
          </ComboboxContent>
        </Combobox>
        {invalid && <FieldError>Please choose a department.</FieldError>}
      </Field>
      <Button type="submit">{submitted && value ? "Saved" : "Continue"}</Button>
    </form>
  )
}`,
  },
  {
    name: "CustomerSearchAddon",
    description: "Customer search combobox with a leading search icon addon and clear button.",
    code: `
const customers = ["Bluefin Studio", "Kettle & Co.", "Orchard Supply", "Marlow & Finch", "Bright Lane Dental", "Halvorsen Labs"]

export default function CustomerSearchAddon() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={customers}>
        <ComboboxInput placeholder="Search customers" showTrigger={false} showClear className="w-full">
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No customers match.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                <Building2Icon className="text-muted-foreground" />
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}`,
  },
  {
    name: "MoveToProjectButton",
    description: "Select-style combobox opened from a button, with the search input inside the popup.",
    code: `
const projects = ["Website refresh", "Mobile app v2", "Brand guidelines", "Customer portal", "Internal tools"]

export default function MoveToProjectButton() {
  return (
    <Combobox items={projects} defaultValue="Mobile app v2">
      <ComboboxTrigger render={<Button variant="outline" className="w-56 justify-between font-normal" />}>
        <span className="flex items-center gap-2 truncate">
          <FolderIcon className="text-muted-foreground" />
          <ComboboxValue placeholder="Move to project" />
        </span>
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput showTrigger={false} placeholder="Search projects" />
        <ComboboxEmpty>No projects found.</ComboboxEmpty>
        ${stringList}
      </ComboboxContent>
    </Combobox>
  )
}`,
  },
  {
    name: "TopicTagsMaxThree",
    description: "Multi-select chips limited to three topics with a remaining-count hint.",
    code: `
const topics = ["Design systems", "Accessibility", "Motion", "Typography", "Research", "Prototyping", "Illustration"]
const MAX = 3

export default function TopicTagsMaxThree() {
  const anchor = useComboboxAnchor()
  const [value, setValue] = React.useState<string[]>(["Accessibility"])
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel>Topics you write about</FieldLabel>
      <Combobox multiple items={topics} value={value} onValueChange={(next) => setValue(next.slice(0, MAX))}>
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: string[]) => (
              <React.Fragment>
                {values.map((topic) => (
                  <ComboboxChip key={topic}>{topic}</ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder={values.length < MAX ? "Add topic" : ""} disabled={values.length >= MAX} />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No topics found.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item} disabled={value.length >= MAX && !value.includes(item)}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldDescription>{MAX - value.length} of {MAX} remaining</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "IssueLabelChips",
    description: "Issue label multi-select whose chips and options carry colour dots.",
    code: `
type IssueLabel = { name: string; color: string }

const labels: IssueLabel[] = [
  { name: "bug", color: "bg-red-500" },
  { name: "feature", color: "bg-emerald-500" },
  { name: "design", color: "bg-violet-500" },
  { name: "docs", color: "bg-sky-500" },
  { name: "performance", color: "bg-amber-500" },
]

export default function IssueLabelChips() {
  const anchor = useComboboxAnchor()
  return (
    <div className="w-full max-w-xs">
      <Combobox
        multiple
        items={labels}
        defaultValue={[labels[0]!, labels[2]!]}
        itemToStringLabel={(label: IssueLabel) => label.name}
        isItemEqualToValue={(a, b) => a.name === b.name}
      >
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: IssueLabel[]) => (
              <React.Fragment>
                {values.map((label) => (
                  <ComboboxChip key={label.name}>
                    <span className={cn("size-2 rounded-full", label.color)} />
                    {label.name}
                  </ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="Add label" />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No labels found.</ComboboxEmpty>
          <ComboboxList>
            {(label: IssueLabel) => (
              <ComboboxItem key={label.name} value={label}>
                <span className={cn("size-2.5 rounded-full", label.color)} />
                {label.name}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}`,
  },
  {
    name: "EmailRecipientsField",
    description: "Compose window To field where recipients become chips with initials.",
    code: `
type Contact = { name: string; email: string }

const contacts: Contact[] = [
  { name: "Grace Liu", email: "grace@fernway.test" },
  { name: "Omar Haddad", email: "omar@fernway.test" },
  { name: "Ines Moreau", email: "ines@fernway.test" },
  { name: "Theo Walsh", email: "theo@fernway.test" },
]

const initialsOf = (name: string) => name.split(" ").map((part) => part[0]).join("")

export default function EmailRecipientsField() {
  const anchor = useComboboxAnchor()
  return (
    <div className="w-full max-w-md border">
      <div className="flex items-center gap-2 border-b px-3 py-2">
        <span className="text-xs text-muted-foreground">To</span>
        <Combobox
          multiple
          items={contacts}
          defaultValue={[contacts[0]!]}
          itemToStringLabel={(contact: Contact) => contact.name}
          isItemEqualToValue={(a, b) => a.email === b.email}
        >
          <ComboboxChips ref={anchor} className="flex-1 border-0 px-0 focus-within:ring-0 dark:bg-transparent">
            <ComboboxValue>
              {(values: Contact[]) => (
                <React.Fragment>
                  {values.map((contact) => (
                    <ComboboxChip key={contact.email}>
                      <span className="flex size-4 items-center justify-center rounded-full bg-foreground text-[8px] text-background">
                        {initialsOf(contact.name)}
                      </span>
                      {contact.name}
                    </ComboboxChip>
                  ))}
                  <ComboboxChipsInput />
                </React.Fragment>
              )}
            </ComboboxValue>
          </ComboboxChips>
          <ComboboxContent anchor={anchor}>
            <ComboboxEmpty>No contacts found.</ComboboxEmpty>
            <ComboboxList>
              {(contact: Contact) => (
                <ComboboxItem key={contact.email} value={contact}>
                  <div className="flex flex-col">
                    <span>{contact.name}</span>
                    <span className="text-[11px] text-muted-foreground">{contact.email}</span>
                  </div>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
      <div className="px-3 py-2 text-sm text-muted-foreground">Subject: Q4 planning notes</div>
    </div>
  )
}`,
  },
  {
    name: "ServerRegionLatency",
    description: "Grouped server regions by continent with latency shown on each option.",
    code: `
type Region = { id: string; city: string; ms: number }

const groups: { label: string; items: Region[] }[] = [
  {
    label: "Europe",
    items: [
      { id: "fra", city: "Frankfurt", ms: 18 },
      { id: "ams", city: "Amsterdam", ms: 22 },
      { id: "lhr", city: "London", ms: 27 },
    ],
  },
  {
    label: "North America",
    items: [
      { id: "iad", city: "Virginia", ms: 94 },
      { id: "sfo", city: "San Francisco", ms: 148 },
    ],
  },
  {
    label: "Asia Pacific",
    items: [
      { id: "sin", city: "Singapore", ms: 182 },
      { id: "syd", city: "Sydney", ms: 274 },
    ],
  },
]

export default function ServerRegionLatency() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={groups} itemToStringLabel={(region: Region) => region.city}>
        <ComboboxInput placeholder="Pick a region" className="w-full" />
        <ComboboxContent>
          <ComboboxEmpty>No regions found.</ComboboxEmpty>
          <ComboboxList>
            {(group: (typeof groups)[number]) => (
              <ComboboxGroup key={group.label} items={group.items}>
                <ComboboxLabel>{group.label}</ComboboxLabel>
                <ComboboxCollection>
                  {(region: Region) => (
                    <ComboboxItem key={region.id} value={region}>
                      <ServerIcon className="text-muted-foreground" />
                      {region.city}
                      <span
                        className={cn(
                          "ml-auto text-[11px] tabular-nums",
                          region.ms < 50 ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"
                        )}
                      >
                        {region.ms} ms
                      </span>
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}`,
  },
  {
    name: "PlanTierDisabledItems",
    description: "Machine size picker where tiers above the current plan are disabled.",
    code: `
type Machine = { id: string; label: string; spec: string; locked: boolean }

const machines: Machine[] = [
  { id: "s", label: "Small", spec: "1 vCPU · 2 GB", locked: false },
  { id: "m", label: "Medium", spec: "2 vCPU · 4 GB", locked: false },
  { id: "l", label: "Large", spec: "4 vCPU · 16 GB", locked: true },
  { id: "xl", label: "X-Large", spec: "8 vCPU · 32 GB", locked: true },
]

export default function PlanTierDisabledItems() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={machines} defaultValue={machines[0]} itemToStringLabel={(machine: Machine) => machine.label}>
        <ComboboxInput placeholder="Machine size" className="w-full" />
        <ComboboxContent>
          <ComboboxList>
            {(machine: Machine) => (
              <ComboboxItem key={machine.id} value={machine} disabled={machine.locked}>
                <CpuIcon className="text-muted-foreground" />
                <span className="flex-1">{machine.label}</span>
                <span className="text-[11px] text-muted-foreground">{machine.spec}</span>
                {machine.locked && (
                  <Badge variant="outline" className="h-4 px-1 text-[10px]">
                    Pro
                  </Badge>
                )}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}`,
  },
  {
    name: "AsyncUserSearch",
    description: "Server-style async search with a loading spinner and filtering disabled on the client.",
    code: `
const directory = ["Abigail Stone", "Adrian Park", "Beatriz Lopes", "Callum Reid", "Dalia Rahman", "Elliot Grant", "Farah Noor", "Gideon Hale"]

export default function AsyncUserSearch() {
  const [query, setQuery] = React.useState("")
  const [results, setResults] = React.useState<string[]>([])
  const [loading, setLoading] = React.useState(false)

  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current)
  }, [])

  const search = (next: string) => {
    setQuery(next)
    if (timer.current) clearTimeout(timer.current)
    if (!next) {
      setResults([])
      setLoading(false)
      return
    }
    setLoading(true)
    timer.current = setTimeout(() => {
      setResults(directory.filter((name) => name.toLowerCase().includes(next.toLowerCase())))
      setLoading(false)
    }, 500)
  }

  return (
    <div className="w-full max-w-xs">
      <Combobox items={results} filter={null} inputValue={query} onInputValueChange={search}>
        <ComboboxInput placeholder="Search the directory" className="w-full" showTrigger={false}>
          <InputGroupAddon align="inline-end">{loading ? <Spinner /> : <UsersIcon />}</InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>
            {loading ? "Searching..." : query ? "No people match " + JSON.stringify(query) : "Start typing a name"}
          </ComboboxEmpty>
          ${stringList}
        </ComboboxContent>
      </Combobox>
    </div>
  )
}`,
  },
  {
    name: "CreatableTagInput",
    description: "Multi-select tag input that offers to create a new tag when nothing matches.",
    code: `
type Tag = { value: string; creatable?: boolean }

export default function CreatableTagInput() {
  const anchor = useComboboxAnchor()
  const [tags, setTags] = React.useState<Tag[]>([{ value: "urgent" }, { value: "q4" }, { value: "customer" }])
  const [selected, setSelected] = React.useState<Tag[]>([])
  const [query, setQuery] = React.useState("")

  const trimmed = query.trim()
  const exists = tags.some((tag) => tag.value.toLowerCase() === trimmed.toLowerCase())
  const items = trimmed && !exists ? [...tags, { value: trimmed, creatable: true }] : tags

  return (
    <div className="w-full max-w-xs">
      <Combobox
        multiple
        items={items}
        value={selected}
        inputValue={query}
        onInputValueChange={setQuery}
        itemToStringLabel={(tag: Tag) => tag.value}
        isItemEqualToValue={(a, b) => a.value === b.value}
        onValueChange={(next) => {
          const created = next.find((tag) => tag.creatable)
          if (created) {
            const tag = { value: created.value }
            setTags((prev) => [...prev, tag])
            setSelected([...next.filter((t) => !t.creatable), tag])
          } else {
            setSelected(next)
          }
          setQuery("")
        }}
      >
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: Tag[]) => (
              <React.Fragment>
                {values.map((tag) => (
                  <ComboboxChip key={tag.value}>#{tag.value}</ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="Add or create tags" />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxList>
            {(tag: Tag) => (
              <ComboboxItem key={tag.value + (tag.creatable ? "-new" : "")} value={tag}>
                {tag.creatable ? (
                  <>
                    <PlusIcon />
                    Create &quot;{tag.value}&quot;
                  </>
                ) : (
                  <>
                    <HashIcon className="text-muted-foreground" />
                    {tag.value}
                  </>
                )}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}`,
  },
  {
    name: "LargeCatalogLimit",
    description: "Large SKU catalogue that caps visible matches with the limit prop.",
    code: `
const colors = ["Black", "White", "Navy", "Olive", "Sand", "Rust"]
const sizes = ["XS", "S", "M", "L", "XL"]
const skus = colors.flatMap((color) => sizes.map((size) => "TEE-" + color.toUpperCase() + "-" + size))

export default function LargeCatalogLimit() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="sku">SKU</FieldLabel>
      <Combobox items={skus} limit={6}>
        <ComboboxInput id="sku" placeholder="Search 30 SKUs" className="w-full font-mono" />
        <ComboboxContent>
          <ComboboxEmpty>No SKUs match.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item} className="font-mono">
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
          <div className="border-t px-2 py-1.5 text-[11px] text-muted-foreground">Showing up to 6 results. Keep typing to narrow.</div>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}`,
  },
  {
    name: "ProductQuickAdd",
    description: "Point-of-sale product search with prices that adds the chosen item to a cart list.",
    code: `
type Product = { sku: string; name: string; price: number; stock: number }

const products: Product[] = [
  { sku: "A1", name: "Flat white", price: 3.6, stock: 40 },
  { sku: "A2", name: "Oat latte", price: 4.2, stock: 32 },
  { sku: "B1", name: "Almond croissant", price: 3.9, stock: 6 },
  { sku: "B2", name: "Banana bread", price: 3.2, stock: 0 },
  { sku: "C1", name: "Sparkling water", price: 2.1, stock: 18 },
]

export default function ProductQuickAdd() {
  const [cart, setCart] = React.useState<Product[]>([])
  return (
    <div className="w-full max-w-xs space-y-3 border p-3">
      <Combobox
        items={products}
        value={null}
        itemToStringLabel={(product: Product) => product.name}
        onValueChange={(product) => product && setCart((prev) => [...prev, product])}
      >
        <ComboboxInput placeholder="Add item to order" className="w-full" showTrigger={false}>
          <InputGroupAddon>
            <ScanBarcodeIcon />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No products found.</ComboboxEmpty>
          <ComboboxList>
            {(product: Product) => (
              <ComboboxItem key={product.sku} value={product} disabled={product.stock === 0}>
                <span className="flex-1">{product.name}</span>
                <span className="text-[11px] text-muted-foreground">
                  {product.stock === 0 ? "Sold out" : "$" + product.price.toFixed(2)}
                </span>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <ul className="space-y-1 text-sm">
        {cart.length === 0 && <li className="text-xs text-muted-foreground">No items yet.</li>}
        {cart.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>{item.name}</span>
            <span>\${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between border-t pt-2 text-sm font-semibold">
        <span>Total</span>
        <span>\${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "FontFamilyPicker",
    description: "Typography control where each font option previews itself in its own typeface.",
    code: `
type Font = { name: string; stack: string; category: string }

const fonts: Font[] = [
  { name: "System Sans", stack: "ui-sans-serif, system-ui, sans-serif", category: "Sans" },
  { name: "Georgia", stack: "Georgia, serif", category: "Serif" },
  { name: "Palatino", stack: "Palatino, 'Book Antiqua', serif", category: "Serif" },
  { name: "Courier", stack: "'Courier New', monospace", category: "Mono" },
  { name: "Trebuchet", stack: "'Trebuchet MS', sans-serif", category: "Sans" },
]

export default function FontFamilyPicker() {
  const [font, setFont] = React.useState<Font | null>(fonts[1]!)
  return (
    <div className="w-full max-w-xs space-y-3">
      <Combobox items={fonts} value={font} onValueChange={setFont} itemToStringLabel={(f: Font) => f.name}>
        <ComboboxInput placeholder="Font family" className="w-full">
          <InputGroupAddon>
            <TypeIcon />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No fonts found.</ComboboxEmpty>
          <ComboboxList>
            {(f: Font) => (
              <ComboboxItem key={f.name} value={f}>
                <span className="flex-1 text-sm" style={{ fontFamily: f.stack }}>
                  {f.name}
                </span>
                <span className="text-[11px] text-muted-foreground">{f.category}</span>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <p className="border p-3 text-lg" style={{ fontFamily: font?.stack }}>
        The quick brown fox jumps over the lazy dog.
      </p>
    </div>
  )
}`,
  },
  {
    name: "BrandColorToken",
    description: "Theme editor combobox for choosing a colour token with swatches.",
    code: `
type Token = { name: string; className: string }

const tokens: Token[] = [
  { name: "slate-900", className: "bg-slate-900" },
  { name: "indigo-600", className: "bg-indigo-600" },
  { name: "emerald-500", className: "bg-emerald-500" },
  { name: "amber-400", className: "bg-amber-400" },
  { name: "rose-500", className: "bg-rose-500" },
  { name: "sky-400", className: "bg-sky-400" },
]

export default function BrandColorToken() {
  const [token, setToken] = React.useState<Token | null>(tokens[1]!)
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="accent">Accent colour</FieldLabel>
      <Combobox items={tokens} value={token} onValueChange={setToken} itemToStringLabel={(t: Token) => t.name}>
        <ComboboxInput id="accent" className="w-full font-mono">
          <InputGroupAddon>
            <span className={cn("size-4 border", token?.className ?? "bg-transparent")} />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No tokens found.</ComboboxEmpty>
          <ComboboxList>
            {(t: Token) => (
              <ComboboxItem key={t.name} value={t} className="font-mono">
                <span className={cn("size-4 border", t.className)} />
                {t.name}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}`,
  },
  {
    name: "NativeFormSubmission",
    description: "Combobox with a name attribute submitted through a native form and read from FormData.",
    code: `
const cities = ["Amsterdam", "Barcelona", "Copenhagen", "Lisbon", "Prague", "Vienna"]

export default function NativeFormSubmission() {
  const [result, setResult] = React.useState<string | null>(null)
  return (
    <form
      className="flex w-full max-w-xs flex-col gap-3"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        setResult(String(data.get("city") || "(empty)"))
      }}
    >
      <Field>
        <FieldLabel htmlFor="city">Office location</FieldLabel>
        <Combobox items={cities} name="city" defaultValue="Lisbon">
          <ComboboxInput id="city" className="w-full" />
          <ComboboxContent>
            <ComboboxEmpty>No cities found.</ComboboxEmpty>
            ${stringList}
          </ComboboxContent>
        </Combobox>
      </Field>
      <Button type="submit" variant="secondary">
        Submit
      </Button>
      {result && (
        <code className="bg-muted px-2 py-1.5 text-xs">
          city = {result}
        </code>
      )}
    </form>
  )
}`,
  },
  {
    name: "CountryStateCascade",
    description: "Dependent comboboxes where the state list depends on the selected country.",
    code: `
const regions: Record<string, string[]> = {
  "United States": ["California", "New York", "Texas", "Washington"],
  Canada: ["British Columbia", "Ontario", "Quebec"],
  Australia: ["New South Wales", "Queensland", "Victoria"],
}
const countries = Object.keys(regions)

export default function CountryStateCascade() {
  const [country, setCountry] = React.useState<string | null>(null)
  const [state, setState] = React.useState<string | null>(null)
  const states = country ? regions[country]! : []
  return (
    <FieldGroup className="w-full max-w-xs gap-3">
      <Field>
        <FieldLabel>Country</FieldLabel>
        <Combobox
          items={countries}
          value={country}
          onValueChange={(next) => {
            setCountry(next)
            setState(null)
          }}
        >
          <ComboboxInput placeholder="Select country" className="w-full" />
          <ComboboxContent>
            ${stringList}
          </ComboboxContent>
        </Combobox>
      </Field>
      <Field>
        <FieldLabel>State / province</FieldLabel>
        <Combobox key={country ?? "none"} items={states} value={state} onValueChange={setState} disabled={!country}>
          <ComboboxInput placeholder={country ? "Select region" : "Choose a country first"} disabled={!country} className="w-full" />
          <ComboboxContent>
            <ComboboxEmpty>No regions found.</ComboboxEmpty>
            ${stringList}
          </ComboboxContent>
        </Combobox>
      </Field>
    </FieldGroup>
  )
}`,
  },
  {
    name: "GitBranchSwitcher",
    description: "Branch switcher opened from a compact button with a default-branch badge.",
    code: `
type Branch = { name: string; updated: string; isDefault?: boolean }

const branches: Branch[] = [
  { name: "main", updated: "2h ago", isDefault: true },
  { name: "feat/billing-portal", updated: "20m ago" },
  { name: "fix/date-picker-tz", updated: "1d ago" },
  { name: "chore/upgrade-deps", updated: "3d ago" },
]

export default function GitBranchSwitcher() {
  return (
    <Combobox items={branches} defaultValue={branches[1]} itemToStringLabel={(branch: Branch) => branch.name}>
      <ComboboxTrigger render={<Button variant="outline" size="sm" className="w-56 justify-between font-mono" />}>
        <span className="flex min-w-0 items-center gap-1.5">
          <GitBranchIcon />
          <span className="truncate">
            <ComboboxValue />
          </span>
        </span>
      </ComboboxTrigger>
      <ComboboxContent className="w-64">
        <ComboboxInput showTrigger={false} placeholder="Find a branch" />
        <ComboboxEmpty>No branches found.</ComboboxEmpty>
        <ComboboxList>
          {(branch: Branch) => (
            <ComboboxItem key={branch.name} value={branch}>
              <span className="flex-1 truncate font-mono">{branch.name}</span>
              {branch.isDefault ? (
                <Badge variant="secondary" className="h-4 px-1 text-[10px]">
                  default
                </Badge>
              ) : (
                <span className="text-[11px] text-muted-foreground">{branch.updated}</span>
              )}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`,
  },
  {
    name: "WorkspaceSwitcher",
    description: "Workspace switcher with gradient monograms and a create-workspace footer action.",
    code: `
type Workspace = { id: string; name: string; plan: string; gradient: string }

const workspaces: Workspace[] = [
  { id: "w1", name: "Northwind", plan: "Business", gradient: "from-sky-500 to-indigo-600" },
  { id: "w2", name: "Fernway Studio", plan: "Team", gradient: "from-emerald-400 to-teal-600" },
  { id: "w3", name: "Side projects", plan: "Free", gradient: "from-amber-400 to-rose-500" },
]

function Monogram({ workspace }: { workspace: Workspace }) {
  return (
    <span className={cn("flex size-5 shrink-0 items-center justify-center bg-gradient-to-br text-[10px] font-bold text-white", workspace.gradient)}>
      {workspace.name[0]}
    </span>
  )
}

export default function WorkspaceSwitcher() {
  const [current, setCurrent] = React.useState<Workspace | null>(workspaces[0]!)
  return (
    <Combobox items={workspaces} value={current} onValueChange={setCurrent} itemToStringLabel={(w: Workspace) => w.name}>
      <ComboboxTrigger render={<Button variant="ghost" className="w-56 justify-between px-2" />}>
        <span className="flex items-center gap-2">
          {current && <Monogram workspace={current} />}
          <span className="truncate font-semibold">{current?.name ?? "Select workspace"}</span>
        </span>
      </ComboboxTrigger>
      <ComboboxContent className="w-60">
        <ComboboxInput showTrigger={false} placeholder="Switch workspace" />
        <ComboboxEmpty>No workspaces found.</ComboboxEmpty>
        <ComboboxList>
          {(w: Workspace) => (
            <ComboboxItem key={w.id} value={w}>
              <Monogram workspace={w} />
              <span className="flex-1">{w.name}</span>
              <span className="text-[11px] text-muted-foreground">{w.plan}</span>
            </ComboboxItem>
          )}
        </ComboboxList>
        <div className="border-t p-1">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <PlusIcon />
            Create workspace
          </Button>
        </div>
      </ComboboxContent>
    </Combobox>
  )
}`,
  },
  {
    name: "IssueStatusPicker",
    description: "Issue tracker status picker with status icons in the trigger and options.",
    code: `
const statuses = [
  { value: "backlog", label: "Backlog", icon: CircleDashedIcon, color: "text-muted-foreground" },
  { value: "todo", label: "Todo", icon: CircleIcon, color: "text-foreground" },
  { value: "progress", label: "In progress", icon: CircleDotIcon, color: "text-amber-500" },
  { value: "done", label: "Done", icon: CircleCheckIcon, color: "text-emerald-500" },
  { value: "canceled", label: "Canceled", icon: CircleXIcon, color: "text-muted-foreground" },
]

type Status = (typeof statuses)[number]

export default function IssueStatusPicker() {
  const [status, setStatus] = React.useState<Status | null>(statuses[2]!)
  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-3">
      <span className="font-mono text-xs text-muted-foreground">ENG-412</span>
      <span className="flex-1 truncate text-sm">Retry failed webhook deliveries</span>
      <Combobox items={statuses} value={status} onValueChange={setStatus} itemToStringLabel={(s: Status) => s.label}>
        <ComboboxTrigger render={<Button variant="outline" size="xs" />}>
          {status && <status.icon className={status.color} />}
          {status?.label ?? "Status"}
        </ComboboxTrigger>
        <ComboboxContent className="w-44">
          <ComboboxInput showTrigger={false} placeholder="Change status" />
          <ComboboxList>
            {(s: Status) => (
              <ComboboxItem key={s.value} value={s}>
                <s.icon className={s.color} />
                {s.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}`,
  },
  {
    name: "PriorityIconOnly",
    description: "Icon-only priority combobox used inline in a compact list of issues.",
    code: `
const priorities = [
  { value: "urgent", label: "Urgent", icon: CircleAlertIcon },
  { value: "high", label: "High", icon: SignalHighIcon },
  { value: "medium", label: "Medium", icon: SignalMediumIcon },
  { value: "low", label: "Low", icon: SignalLowIcon },
]

type Priority = (typeof priorities)[number]

const issues = [
  { id: "DES-88", title: "Empty state for search", priority: priorities[1]! },
  { id: "DES-91", title: "Dark mode chart colours", priority: priorities[2]! },
  { id: "DES-93", title: "Broken focus ring on tabs", priority: priorities[0]! },
]

function PriorityCell({ initial }: { initial: Priority }) {
  const [value, setValue] = React.useState<Priority | null>(initial)
  return (
    <Combobox items={priorities} value={value} onValueChange={setValue} itemToStringLabel={(p: Priority) => p.label}>
      <ComboboxTrigger
        render={<Button variant="ghost" size="icon-sm" aria-label={"Priority: " + (value?.label ?? "none")} className="[&>svg:last-child]:hidden" />}
      >
        {value ? <value.icon /> : <MinusIcon />}
      </ComboboxTrigger>
      <ComboboxContent className="w-40">
        <ComboboxList>
          {(p: Priority) => (
            <ComboboxItem key={p.value} value={p}>
              <p.icon />
              {p.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export default function PriorityIconOnly() {
  return (
    <ul className="w-full max-w-sm divide-y border">
      {issues.map((issue) => (
        <li key={issue.id} className="flex items-center gap-2 px-2 py-1">
          <PriorityCell initial={issue.priority} />
          <span className="font-mono text-xs text-muted-foreground">{issue.id}</span>
          <span className="truncate text-sm">{issue.title}</span>
        </li>
      ))}
    </ul>
  )
}`,
  },
  {
    name: "FlightRouteSearch",
    description: "Flight search with origin and destination airport comboboxes and a swap button.",
    code: `
type Airport = { code: string; city: string }

const airports: Airport[] = [
  { code: "LHR", city: "London Heathrow" },
  { code: "CDG", city: "Paris Charles de Gaulle" },
  { code: "JFK", city: "New York JFK" },
  { code: "LIS", city: "Lisbon" },
  { code: "HND", city: "Tokyo Haneda" },
  { code: "SIN", city: "Singapore Changi" },
]

function AirportField({ label, icon, value, onChange }: { label: string; icon: React.ReactNode; value: Airport | null; onChange: (a: Airport | null) => void }) {
  return (
    <Combobox items={airports} value={value} onValueChange={onChange} itemToStringLabel={(a: Airport) => a.code + " · " + a.city}>
      <ComboboxInput placeholder={label} aria-label={label} className="w-full" showTrigger={false}>
        <InputGroupAddon>{icon}</InputGroupAddon>
      </ComboboxInput>
      <ComboboxContent>
        <ComboboxEmpty>No airports found.</ComboboxEmpty>
        <ComboboxList>
          {(a: Airport) => (
            <ComboboxItem key={a.code} value={a}>
              <span className="w-9 font-mono font-semibold">{a.code}</span>
              {a.city}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export default function FlightRouteSearch() {
  const [from, setFrom] = React.useState<Airport | null>(airports[3]!)
  const [to, setTo] = React.useState<Airport | null>(null)
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <AirportField label="From" icon={<PlaneTakeoffIcon />} value={from} onChange={setFrom} />
      <div className="flex justify-center">
        <Button
          variant="outline"
          size="icon-sm"
          aria-label="Swap airports"
          onClick={() => {
            setFrom(to)
            setTo(from)
          }}
        >
          <ArrowUpDownIcon />
        </Button>
      </div>
      <AirportField label="To" icon={<PlaneLandingIcon />} value={to} onChange={setTo} />
      <Button className="mt-1" disabled={!from || !to}>
        Search flights
      </Button>
    </div>
  )
}`,
  },
  {
    name: "IconPickerSearch",
    description: "Icon picker that searches by icon name and previews the selected glyph.",
    code: `
const icons = [
  { name: "Heart", icon: HeartIcon },
  { name: "Star", icon: StarIcon },
  { name: "Bell", icon: BellIcon },
  { name: "Camera", icon: CameraIcon },
  { name: "Zap", icon: ZapIcon },
  { name: "Rocket", icon: RocketIcon },
  { name: "Leaf", icon: LeafIcon },
  { name: "Gift", icon: GiftIcon },
]

type IconOption = (typeof icons)[number]

export default function IconPickerSearch() {
  const [value, setValue] = React.useState<IconOption | null>(icons[5]!)
  return (
    <div className="flex w-full max-w-xs items-center gap-3">
      <div className="flex size-10 shrink-0 items-center justify-center border bg-muted">
        {value ? <value.icon className="size-5" /> : <ShapesIcon className="size-5 text-muted-foreground" />}
      </div>
      <Combobox items={icons} value={value} onValueChange={setValue} itemToStringLabel={(o: IconOption) => o.name}>
        <ComboboxInput placeholder="Search icons" className="w-full" />
        <ComboboxContent>
          <ComboboxEmpty>No icons found.</ComboboxEmpty>
          <ComboboxList>
            {(o: IconOption) => (
              <ComboboxItem key={o.name} value={o}>
                <o.icon />
                {o.name}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}`,
  },
  {
    name: "DashboardDatePresets",
    description: "Analytics dashboard date range presets chosen through a button-triggered combobox.",
    code: `
const presets = ["Today", "Yesterday", "Last 7 days", "Last 30 days", "This quarter", "Year to date"]
const visitors: Record<string, string> = {
  Today: "1,204",
  Yesterday: "1,388",
  "Last 7 days": "9,870",
  "Last 30 days": "41,312",
  "This quarter": "96,540",
  "Year to date": "402,118",
}

export default function DashboardDatePresets() {
  const [range, setRange] = React.useState<string | null>("Last 7 days")
  return (
    <Card className="w-full max-w-xs" size="sm">
      <CardHeader>
        <CardDescription>Unique visitors</CardDescription>
        <CardTitle className="text-2xl">{range ? visitors[range] : "-"}</CardTitle>
        <CardAction>
          <Combobox items={presets} value={range} onValueChange={setRange}>
            <ComboboxTrigger render={<Button variant="outline" size="xs" />}>
              <CalendarIcon />
              <ComboboxValue />
            </ComboboxTrigger>
            <ComboboxContent className="w-40" align="end">
              ${stringList}
            </ComboboxContent>
          </Combobox>
        </CardAction>
      </CardHeader>
    </Card>
  )
}`,
  },
  {
    name: "SkillsWithSuggestions",
    description: "Onboarding skills chips with one-click suggestion buttons that add to the selection.",
    code: `
const skills = ["React", "TypeScript", "Figma", "SQL", "Python", "Node.js", "Copywriting", "User research", "GraphQL", "Swift"]
const suggested = ["TypeScript", "Figma", "SQL"]

export default function SkillsWithSuggestions() {
  const anchor = useComboboxAnchor()
  const [value, setValue] = React.useState<string[]>(["React"])
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel>What are you good at?</FieldLabel>
      <Combobox multiple items={skills} value={value} onValueChange={setValue}>
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: string[]) => (
              <React.Fragment>
                {values.map((skill) => (
                  <ComboboxChip key={skill}>{skill}</ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="Search skills" />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No skills found.</ComboboxEmpty>
          ${stringList}
        </ComboboxContent>
      </Combobox>
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="text-xs text-muted-foreground">Suggested:</span>
        {suggested
          .filter((skill) => !value.includes(skill))
          .map((skill) => (
            <Button key={skill} variant="outline" size="xs" onClick={() => setValue((prev) => [...prev, skill])}>
              <PlusIcon />
              {skill}
            </Button>
          ))}
      </div>
    </Field>
  )
}`,
  },
  {
    name: "ReadOnlyCombobox",
    description: "Read-only combobox showing a value that can be viewed but not changed.",
    code: `
const owners = ["Rhea Kapoor", "Daniel Osei", "Freya Lund"]

export default function ReadOnlyCombobox() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="owner">Account owner</FieldLabel>
      <Combobox items={owners} defaultValue="Daniel Osei" readOnly>
        <ComboboxInput id="owner" readOnly showTrigger={false} className="w-full bg-muted/50">
          <InputGroupAddon align="inline-end">
            <LockIcon />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          ${stringList}
        </ComboboxContent>
      </Combobox>
      <FieldDescription>Set by your organisation&apos;s directory sync.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "EmptyStateInvite",
    description: "Combobox with a rich empty state that offers to invite the person being searched for.",
    code: `
const teammates = ["Ada Morgan", "Bilal Khan", "Chloe Dubois", "Diego Alvarez"]

export default function EmptyStateInvite() {
  const [query, setQuery] = React.useState("")
  return (
    <div className="w-full max-w-xs">
      <Combobox items={teammates} inputValue={query} onInputValueChange={setQuery}>
        <ComboboxInput placeholder="Add a reviewer (try 'zoe')" className="w-full" />
        <ComboboxContent>
          <ComboboxEmpty className="flex-col items-center gap-2 py-4">
            <UserSearchIcon className="size-5" />
            <span>Nobody named &quot;{query}&quot; in this workspace.</span>
            <Button size="xs" variant="outline">
              <UserPlusIcon />
              Invite by email
            </Button>
          </ComboboxEmpty>
          ${stringList}
        </ComboboxContent>
      </Combobox>
    </div>
  )
}`,
  },
  {
    name: "ShareDialogInvite",
    description: "Share card combining a people multi-select, a role picker and an invite button.",
    code: `
const people = ["Amara Obi", "Ben Carter", "Chen Wei", "Dara Flynn", "Eva Novak", "Felix Grün"]
const roles = ["Can view", "Can comment", "Can edit"]

export default function ShareDialogInvite() {
  const anchor = useComboboxAnchor()
  const [invitees, setInvitees] = React.useState<string[]>([])
  return (
    <Card className="w-full max-w-md" size="sm">
      <CardHeader>
        <CardTitle>Share &quot;Q4 launch plan&quot;</CardTitle>
        <CardDescription>Invite people to collaborate on this doc.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 sm:flex-row">
        <Combobox multiple items={people} value={invitees} onValueChange={setInvitees}>
          <ComboboxChips ref={anchor} className="flex-1">
            <ComboboxValue>
              {(values: string[]) => (
                <React.Fragment>
                  {values.map((person) => (
                    <ComboboxChip key={person}>{person}</ComboboxChip>
                  ))}
                  <ComboboxChipsInput placeholder={values.length ? "" : "Add people"} />
                </React.Fragment>
              )}
            </ComboboxValue>
          </ComboboxChips>
          <ComboboxContent anchor={anchor}>
            <ComboboxEmpty>No people found.</ComboboxEmpty>
            ${stringList}
          </ComboboxContent>
        </Combobox>
        <Combobox items={roles} defaultValue="Can edit">
          <ComboboxTrigger render={<Button variant="outline" className="sm:w-32 justify-between font-normal" />}>
            <ComboboxValue />
          </ComboboxTrigger>
          <ComboboxContent className="w-36" align="end">
            ${stringList}
          </ComboboxContent>
        </Combobox>
      </CardContent>
      <CardFooter className="justify-end">
        <Button disabled={invitees.length === 0}>
          <SendIcon data-icon="inline-start" />
          Invite {invitees.length > 0 && invitees.length}
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "KeyboardHintFooter",
    description: "Command-style combobox popup with a footer of keyboard navigation hints.",
    code: `
const pages = ["Dashboard", "Customers", "Invoices", "Subscriptions", "Reports", "Settings", "API keys"]

export default function KeyboardHintFooter() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={pages} autoHighlight>
        <ComboboxInput placeholder="Go to page..." className="w-full" showTrigger={false}>
          <InputGroupAddon align="inline-end">
            <Kbd>⌘K</Kbd>
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No pages found.</ComboboxEmpty>
          ${stringList}
          <div className="flex items-center gap-3 border-t px-2 py-1.5 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Kbd>↑</Kbd>
              <Kbd>↓</Kbd>
              navigate
            </span>
            <span className="flex items-center gap-1">
              <Kbd>↵</Kbd>
              open
            </span>
            <span className="flex items-center gap-1">
              <Kbd>esc</Kbd>
              close
            </span>
          </div>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}`,
  },
  {
    name: "AdminTableRoleFilter",
    description: "Admin users table filtered live by a clearable role combobox.",
    code: `
const users = [
  { name: "Lucía Herrera", email: "lucia@acmecorp.test", role: "Owner" },
  { name: "Kenji Sato", email: "kenji@acmecorp.test", role: "Admin" },
  { name: "Nora Quinn", email: "nora@acmecorp.test", role: "Member" },
  { name: "Ravi Iyer", email: "ravi@acmecorp.test", role: "Member" },
  { name: "Tess Moller", email: "tess@acmecorp.test", role: "Guest" },
]
const roles = ["Owner", "Admin", "Member", "Guest"]

export default function AdminTableRoleFilter() {
  const [role, setRole] = React.useState<string | null>(null)
  const rows = role ? users.filter((user) => user.role === role) : users
  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-semibold">Members · {rows.length}</span>
        <Combobox items={roles} value={role} onValueChange={setRole}>
          <ComboboxInput placeholder="All roles" showClear className="w-36" />
          <ComboboxContent>
            ${stringList}
          </ComboboxContent>
        </Combobox>
      </div>
      <div className="border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((user) => (
              <TableRow key={user.email}>
                <TableCell>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-xs text-muted-foreground">{user.email}</div>
                </TableCell>
                <TableCell className="text-right">
                  <Badge variant={user.role === "Owner" ? "default" : "outline"}>{user.role}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}`,
  },
  {
    name: "HelpCenterCategoryCounts",
    description: "Help centre category combobox with article counts aligned to the right.",
    code: `
type Category = { name: string; count: number; icon: typeof BookOpenIcon }

const categories: Category[] = [
  { name: "Getting started", count: 12, icon: RocketIcon },
  { name: "Billing & payments", count: 18, icon: CreditCardIcon },
  { name: "Integrations", count: 24, icon: PlugIcon },
  { name: "Security & privacy", count: 9, icon: ShieldCheckIcon },
  { name: "Troubleshooting", count: 31, icon: WrenchIcon },
]

export default function HelpCenterCategoryCounts() {
  return (
    <div className="w-full max-w-xs space-y-2">
      <p className="flex items-center gap-2 text-sm font-semibold">
        <BookOpenIcon className="size-4" />
        Browse articles
      </p>
      <Combobox items={categories} itemToStringLabel={(c: Category) => c.name}>
        <ComboboxInput placeholder="Choose a category" className="w-full" />
        <ComboboxContent>
          <ComboboxEmpty>No categories found.</ComboboxEmpty>
          <ComboboxList>
            {(c: Category) => (
              <ComboboxItem key={c.name} value={c}>
                <c.icon className="text-muted-foreground" />
                <span className="flex-1">{c.name}</span>
                <Badge variant="secondary" className="h-4 px-1.5 text-[10px] tabular-nums">
                  {c.count}
                </Badge>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}`,
  },
  {
    name: "MultiSelectCountTrigger",
    description: "Multi-select filter that summarises the selection as a count instead of chips.",
    code: `
const statuses = ["Draft", "Scheduled", "Published", "Archived", "Needs review"]

export default function MultiSelectCountTrigger() {
  const [value, setValue] = React.useState<string[]>(["Draft", "Needs review"])
  return (
    <div className="flex items-center gap-2">
      <Combobox multiple items={statuses} value={value} onValueChange={setValue}>
        <ComboboxTrigger render={<Button variant="outline" size="sm" className="border-dashed" />}>
          <ListFilterIcon />
          Status
          {value.length > 0 && (
            <>
              <Separator orientation="vertical" className="mx-1 h-4" />
              <Badge variant="secondary" className="px-1">
                {value.length} selected
              </Badge>
            </>
          )}
        </ComboboxTrigger>
        <ComboboxContent className="w-48">
          <ComboboxInput showTrigger={false} placeholder="Filter status" />
          <ComboboxEmpty>No statuses.</ComboboxEmpty>
          ${stringList}
          {value.length > 0 && (
            <div className="border-t p-1">
              <Button variant="ghost" size="xs" className="w-full" onClick={() => setValue([])}>
                Clear filters
              </Button>
            </div>
          )}
        </ComboboxContent>
      </Combobox>
    </div>
  )
}`,
  },
  {
    name: "HighlightedThemePreview",
    description: "Theme picker that previews whichever option is highlighted before it is chosen.",
    code: `
type Theme = { name: string; bg: string; fg: string; accent: string }

const themes: Theme[] = [
  { name: "Paper", bg: "bg-stone-50", fg: "text-stone-900", accent: "bg-stone-900" },
  { name: "Midnight", bg: "bg-slate-950", fg: "text-slate-100", accent: "bg-indigo-400" },
  { name: "Forest", bg: "bg-emerald-950", fg: "text-emerald-50", accent: "bg-lime-400" },
  { name: "Sunset", bg: "bg-orange-100", fg: "text-orange-950", accent: "bg-rose-500" },
]

export default function HighlightedThemePreview() {
  const [value, setValue] = React.useState<Theme | null>(themes[0]!)
  const [preview, setPreview] = React.useState<Theme | undefined>(undefined)
  const shown = preview ?? value ?? themes[0]!
  return (
    <div className="w-full max-w-xs space-y-3">
      <div className={cn("space-y-2 border p-4 transition-colors", shown.bg, shown.fg)}>
        <p className="text-sm font-semibold">{shown.name}</p>
        <p className="text-xs opacity-80">Your editor will look like this.</p>
        <span className={cn("block h-1.5 w-16", shown.accent)} />
      </div>
      <Combobox
        items={themes}
        value={value}
        onValueChange={setValue}
        onItemHighlighted={(item) => setPreview(item)}
        onOpenChange={(open) => !open && setPreview(undefined)}
        itemToStringLabel={(t: Theme) => t.name}
      >
        <ComboboxInput placeholder="Choose theme" className="w-full" />
        <ComboboxContent>
          <ComboboxList>
            {(t: Theme) => (
              <ComboboxItem key={t.name} value={t}>
                <span className={cn("size-4 border", t.bg)} />
                {t.name}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}`,
  },
  {
    name: "GroupedScopesMulti",
    description: "API token scope multi-select with chips and options grouped by resource.",
    code: `
const groups = [
  { label: "Invoices", items: ["invoices:read", "invoices:write"] },
  { label: "Customers", items: ["customers:read", "customers:write", "customers:delete"] },
  { label: "Webhooks", items: ["webhooks:read", "webhooks:manage"] },
]

export default function GroupedScopesMulti() {
  const anchor = useComboboxAnchor()
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel>Token scopes</FieldLabel>
      <Combobox multiple items={groups} defaultValue={["invoices:read", "customers:read"]}>
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: string[]) => (
              <React.Fragment>
                {values.map((scope) => (
                  <ComboboxChip key={scope} className="font-mono">
                    {scope}
                  </ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="Add scope" />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No scopes found.</ComboboxEmpty>
          <ComboboxList>
            {(group: (typeof groups)[number]) => (
              <ComboboxGroup key={group.label} items={group.items}>
                <ComboboxLabel>{group.label}</ComboboxLabel>
                <ComboboxCollection>
                  {(scope: string) => (
                    <ComboboxItem key={scope} value={scope} className="font-mono">
                      <KeyRoundIcon className="text-muted-foreground" />
                      {scope}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldDescription>Grant only what this integration needs.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "AddressAutocomplete",
    description: "Shipping address autocomplete with street and locality lines in each suggestion.",
    code: `
type Address = { id: string; street: string; locality: string }

const addresses: Address[] = [
  { id: "1", street: "14 Harbour View Road", locality: "Brighton, BN2 1TL" },
  { id: "2", street: "14 Harrow Lane", locality: "Leeds, LS6 2QD" },
  { id: "3", street: "140 Harcourt Street", locality: "Dublin, D02 XY45" },
  { id: "4", street: "14A Hartfield Close", locality: "Bristol, BS7 9PE" },
]

export default function AddressAutocomplete() {
  const [address, setAddress] = React.useState<Address | null>(null)
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="address">Delivery address</FieldLabel>
      <Combobox
        items={addresses}
        value={address}
        onValueChange={setAddress}
        itemToStringLabel={(a: Address) => a.street + ", " + a.locality}
      >
        <ComboboxInput id="address" placeholder="Start typing your address" showTrigger={false} showClear className="w-full">
          <InputGroupAddon>
            <MapPinIcon />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No addresses found. Enter it manually.</ComboboxEmpty>
          <ComboboxList>
            {(a: Address) => (
              <ComboboxItem key={a.id} value={a}>
                <MapPinIcon className="text-muted-foreground" />
                <div className="flex flex-col">
                  <span>{a.street}</span>
                  <span className="text-[11px] text-muted-foreground">{a.locality}</span>
                </div>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      {address && <FieldDescription>Estimated delivery: Tuesday, 18 November</FieldDescription>}
    </Field>
  )
}`,
  },
  {
    name: "RecentContactsGroup",
    description: "Payment recipient picker with a recent group above all contacts.",
    code: `
const groups = [
  { label: "Recent", items: ["Hamid Rahimi", "Julia Novak"] },
  { label: "All contacts", items: ["Aiko Tanaka", "Bruno Silva", "Hamid Rahimi", "Julia Novak", "Marta Kowalski", "Sean O'Neill"] },
]

export default function RecentContactsGroup() {
  return (
    <div className="w-full max-w-xs space-y-3 border p-4">
      <p className="text-sm font-semibold">Send money</p>
      <Combobox items={groups}>
        <ComboboxInput placeholder="Recipient name" className="w-full" />
        <ComboboxContent>
          <ComboboxEmpty>No contacts found.</ComboboxEmpty>
          <ComboboxList>
            {(group: (typeof groups)[number], index: number) => (
              <ComboboxGroup key={group.label} items={group.items}>
                <ComboboxLabel className="flex items-center gap-1.5">
                  {index === 0 ? <ClockIcon className="size-3" /> : <UsersIcon className="size-3" />}
                  {group.label}
                </ComboboxLabel>
                <ComboboxCollection>
                  {(name: string) => (
                    <ComboboxItem key={group.label + name} value={name}>
                      <Avatar size="sm">
                        <AvatarFallback>{name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
                      </Avatar>
                      {name}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
                {index === 0 && <ComboboxSeparator className="my-1" />}
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" inputMode="decimal" aria-label="Amount" />
      </InputGroup>
      <Button className="w-full">Continue</Button>
    </div>
  )
}`,
  },
  {
    name: "QuickJumpAutoHighlight",
    description: "Quick-jump input that auto-highlights the first match so Enter selects instantly.",
    code: `
const channels = ["#general", "#design-crit", "#eng-platform", "#launch-q4", "#random", "#support-escalations"]

export default function QuickJumpAutoHighlight() {
  const [active, setActive] = React.useState("#general")
  return (
    <div className="w-full max-w-xs space-y-3">
      <Combobox items={channels} autoHighlight value={null} onValueChange={(next) => next && setActive(next)}>
        <ComboboxInput placeholder="Jump to channel" className="w-full" showTrigger={false}>
          <InputGroupAddon>
            <HashIcon />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No channels found.</ComboboxEmpty>
          ${stringList}
        </ComboboxContent>
      </Combobox>
      <div className="flex items-center gap-2 border bg-muted/40 px-3 py-2 text-sm">
        <MessageSquareIcon className="size-4 text-muted-foreground" />
        Viewing <span className="font-medium">{active}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "CodeLanguageToolbar",
    description: "Compact combobox embedded in a code editor toolbar to set the syntax language.",
    code: `
const languages = ["TypeScript", "JavaScript", "Python", "Go", "Rust", "SQL", "Bash", "JSON"]

export default function CodeLanguageToolbar() {
  const [lang, setLang] = React.useState<string | null>("TypeScript")
  return (
    <div className="w-full max-w-md border">
      <div className="flex items-center gap-2 border-b bg-muted/40 px-2 py-1">
        <span className="flex-1 font-mono text-xs text-muted-foreground">snippet-01</span>
        <Combobox items={languages} value={lang} onValueChange={setLang}>
          <ComboboxInput className="h-6 w-32 text-xs" aria-label="Language" />
          <ComboboxContent>
            <ComboboxEmpty>Unknown language.</ComboboxEmpty>
            ${stringList}
          </ComboboxContent>
        </Combobox>
        <Button variant="ghost" size="icon-xs" aria-label="Copy">
          <CopyIcon />
        </Button>
      </div>
      <pre className="overflow-x-auto p-3 font-mono text-xs leading-5">
        {lang === "Python" ? "def greet(name):\\n    return f'Hello, {name}'" : "export const greet = (name: string) =>\\n  'Hello, ' + name"}
      </pre>
    </div>
  )
}`,
  },
  {
    name: "CurrencyAmountInput",
    description: "Payment amount input paired with a compact currency combobox showing symbols.",
    code: `
type Currency = { code: string; symbol: string; name: string }

const currencies: Currency[] = [
  { code: "USD", symbol: "$", name: "US dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British pound" },
  { code: "JPY", symbol: "¥", name: "Japanese yen" },
  { code: "CHF", symbol: "Fr", name: "Swiss franc" },
]

export default function CurrencyAmountInput() {
  const [currency, setCurrency] = React.useState<Currency | null>(currencies[1]!)
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="amount">Amount</FieldLabel>
      <div className="flex gap-2">
        <InputGroup className="flex-1">
          <InputGroupAddon>
            <InputGroupText>{currency?.symbol ?? "?"}</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput id="amount" defaultValue="250.00" inputMode="decimal" />
        </InputGroup>
        <Combobox items={currencies} value={currency} onValueChange={setCurrency} itemToStringLabel={(c: Currency) => c.code}>
          <ComboboxInput className="w-24" aria-label="Currency" />
          <ComboboxContent className="w-48" align="end">
            <ComboboxEmpty>No currencies.</ComboboxEmpty>
            <ComboboxList>
              {(c: Currency) => (
                <ComboboxItem key={c.code} value={c}>
                  <span className="w-5 text-center text-muted-foreground">{c.symbol}</span>
                  <span className="font-medium">{c.code}</span>
                  <span className="truncate text-muted-foreground">{c.name}</span>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
      <FieldDescription>Converted at today&apos;s mid-market rate.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "LanguageNativeNames",
    description: "Interface language selector listing native names alongside English names.",
    code: `
type Language = { code: string; english: string; native: string }

const languages: Language[] = [
  { code: "en", english: "English", native: "English" },
  { code: "es", english: "Spanish", native: "Español" },
  { code: "de", english: "German", native: "Deutsch" },
  { code: "ja", english: "Japanese", native: "日本語" },
  { code: "pt", english: "Portuguese", native: "Português" },
  { code: "ar", english: "Arabic", native: "العربية" },
]

export default function LanguageNativeNames() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="language">Language</FieldLabel>
      <Combobox
        items={languages}
        defaultValue={languages[0]}
        itemToStringLabel={(l: Language) => l.native}
        itemToStringValue={(l: Language) => l.code}
        filter={(l: Language, query: string) =>
          (l.english + " " + l.native).toLowerCase().includes(query.toLowerCase())
        }
      >
        <ComboboxInput id="language" className="w-full">
          <InputGroupAddon>
            <LanguagesIcon />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No languages found.</ComboboxEmpty>
          <ComboboxList>
            {(l: Language) => (
              <ComboboxItem key={l.code} value={l}>
                <span className="flex-1">{l.native}</span>
                <span className="text-[11px] text-muted-foreground">{l.english}</span>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldDescription>Search by English or native name.</FieldDescription>
    </Field>
  )
}`,
  },
]

export default examples
