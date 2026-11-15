import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "EmailValidationInput",
    description: "An email field that validates on blur and shows an inline error with aria-invalid.",
    code: `
export default function EmailValidationInput() {
  const [value, setValue] = React.useState("maya@northwind")
  const [touched, setTouched] = React.useState(true)
  const invalid = touched && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)

  return (
    <Field data-invalid={invalid} className="w-full max-w-sm">
      <FieldLabel htmlFor="email-validation">Work email</FieldLabel>
      <Input
        id="email-validation"
        type="email"
        value={value}
        aria-invalid={invalid}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setTouched(true)}
      />
      {invalid ? (
        <FieldError>Enter a valid email address, like name@company.com.</FieldError>
      ) : (
        <FieldDescription>We&apos;ll send the invite to this address.</FieldDescription>
      )}
    </Field>
  )
}`,
  },
  {
    name: "InputStatesShowcase",
    description: "Default, read-only, disabled, and invalid inputs side by side.",
    code: `
export default function InputStatesShowcase() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="state-default">Default</FieldLabel>
        <Input id="state-default" placeholder="Project name" />
      </Field>
      <Field>
        <FieldLabel htmlFor="state-readonly">Read-only</FieldLabel>
        <Input id="state-readonly" readOnly defaultValue="proj_8f2k19" className="bg-muted/50 font-mono" />
      </Field>
      <Field data-disabled>
        <FieldLabel htmlFor="state-disabled">Disabled</FieldLabel>
        <Input id="state-disabled" disabled defaultValue="Managed by your organization" />
      </Field>
      <Field data-invalid>
        <FieldLabel htmlFor="state-invalid">Invalid</FieldLabel>
        <Input id="state-invalid" aria-invalid defaultValue="my project!" />
        <FieldError>Only letters, numbers, and dashes are allowed.</FieldError>
      </Field>
    </FieldGroup>
  )
}`,
  },
  {
    name: "InputSizeScale",
    description: "Small, default, medium, and large input heights matched to button sizes.",
    code: `
const sizes = [
  { label: "Small", input: "h-7", button: "sm" as const },
  { label: "Default", input: "h-8", button: "default" as const },
  { label: "Medium", input: "h-9 text-sm md:text-sm", button: "md" as const },
  { label: "Large", input: "h-12 px-4 text-base md:text-base", button: "lg" as const },
]

export default function InputSizeScale() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {sizes.map((s) => (
        <div key={s.label} className="flex gap-2">
          <Input aria-label={s.label + " input"} placeholder={s.label} className={s.input} />
          <Button size={s.button}>Go</Button>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "FileUploadInput",
    description: "A native file input for uploading a CSV, with accepted types listed and the chosen file shown.",
    code: `
export default function FileUploadInput() {
  const [file, setFile] = React.useState<string | null>(null)

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="csv-upload">Import contacts</FieldLabel>
      <Input id="csv-upload" type="file" accept=".csv,text/csv" onChange={(e) => setFile(e.target.files?.[0]?.name ?? null)} />
      <FieldDescription>
        {file ? "Ready to import " + file : "CSV up to 10 MB. First row must contain column headers."}
      </FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "SearchShortcutInput",
    description: "A search input with a leading icon and a keyboard shortcut hint.",
    code: `
export default function SearchShortcutInput() {
  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search docs, issues, people..." />
      <InputGroupAddon align="inline-end">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </InputGroupAddon>
    </InputGroup>
  )
}`,
  },
  {
    name: "PasswordVisibilityInput",
    description: "A password field with a button that toggles between hidden and visible text.",
    code: `
export default function PasswordVisibilityInput() {
  const [visible, setVisible] = React.useState(false)

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="password-toggle">Password</FieldLabel>
      <InputGroup>
        <InputGroupInput id="password-toggle" type={visible ? "text" : "password"} defaultValue="correct-horse-battery" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label={visible ? "Hide password" : "Show password"} onClick={() => setVisible((v) => !v)}>
            {visible ? <EyeOffIcon /> : <EyeIcon />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}`,
  },
  {
    name: "CharacterLimitInput",
    description: "A headline input with a live character counter that turns red near the limit.",
    code: `
const LIMIT = 60

export default function CharacterLimitInput() {
  const [value, setValue] = React.useState("Spring sale: 20% off all annual plans")
  const remaining = LIMIT - value.length

  return (
    <Field className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor="headline">Banner headline</FieldLabel>
        <span className={cn("text-xs tabular-nums", remaining <= 10 ? "text-destructive" : "text-muted-foreground")}>
          {remaining} left
        </span>
      </div>
      <Input id="headline" maxLength={LIMIT} value={value} onChange={(e) => setValue(e.target.value)} />
    </Field>
  )
}`,
  },
  {
    name: "CurrencyAmountInput",
    description: "A price input with a currency symbol prefix and currency code suffix.",
    code: `
export default function CurrencyAmountInput() {
  return (
    <Field className="w-full max-w-[14rem]">
      <FieldLabel htmlFor="amount">Monthly price</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput id="amount" type="number" inputMode="decimal" min={0} step="0.01" defaultValue="49.00" className="tabular-nums" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}`,
  },
  {
    name: "CopyApiKeyInput",
    description: "A read-only API key with a copy button that confirms when copied.",
    code: `
export default function CopyApiKeyInput() {
  const [copied, setCopied] = React.useState(false)
  const key = "pub_demo_mYb2"

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="api-key">Publishable key</FieldLabel>
      <InputGroup>
        <InputGroupInput id="api-key" readOnly value={key} className="font-mono" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-xs"
            aria-label="Copy key"
            onClick={() => {
              navigator.clipboard?.writeText(key)
              setCopied(true)
              setTimeout(() => setCopied(false), 1500)
            }}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Safe to use in client-side code.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "NewsletterSignupInput",
    description: "An inline newsletter signup with an email input, subscribe button, and success state.",
    code: `
export default function NewsletterSignupInput() {
  const [done, setDone] = React.useState(false)

  return (
    <div className="w-full max-w-sm border p-4">
      <p className="text-sm font-medium">The Friday Digest</p>
      <p className="mb-3 text-xs text-muted-foreground">One email a week with product updates and tips.</p>
      {done ? (
        <p className="flex items-center gap-2 text-xs text-emerald-600">
          <CircleCheckIcon className="size-4" />
          You&apos;re subscribed. Check your inbox to confirm.
        </p>
      ) : (
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            setDone(true)
          }}
        >
          <Input type="email" required placeholder="you@example.com" aria-label="Email address" />
          <Button type="submit">Subscribe</Button>
        </form>
      )}
    </div>
  )
}`,
  },
  {
    name: "SignInFormInputs",
    description: "A sign-in card with email and password inputs and a forgot password link.",
    code: `
export default function SignInFormInputs() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Welcome back</CardTitle>
        <CardDescription>Sign in to your Fieldnote workspace.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="signin-email">Email</FieldLabel>
            <Input id="signin-email" type="email" autoComplete="email" placeholder="you@company.com" />
          </Field>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="signin-password">Password</FieldLabel>
              <a href="#" className="text-xs text-muted-foreground hover:underline">
                Forgot password?
              </a>
            </div>
            <Input id="signin-password" type="password" autoComplete="current-password" />
          </Field>
          <Button className="w-full">Sign in</Button>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "ShippingAddressInputs",
    description: "A checkout shipping address form laid out in a responsive grid of inputs.",
    code: `
export default function ShippingAddressInputs() {
  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend>Shipping address</FieldLegend>
      <div className="grid grid-cols-2 gap-3">
        <Field className="col-span-2">
          <FieldLabel htmlFor="ship-name">Full name</FieldLabel>
          <Input id="ship-name" autoComplete="name" placeholder="Jordan Ellis" />
        </Field>
        <Field className="col-span-2">
          <FieldLabel htmlFor="ship-street">Street address</FieldLabel>
          <Input id="ship-street" autoComplete="address-line1" placeholder="221 Larkspur Ave, Apt 4" />
        </Field>
        <Field>
          <FieldLabel htmlFor="ship-city">City</FieldLabel>
          <Input id="ship-city" autoComplete="address-level2" placeholder="Portland" />
        </Field>
        <Field>
          <FieldLabel htmlFor="ship-zip">ZIP code</FieldLabel>
          <Input id="ship-zip" autoComplete="postal-code" inputMode="numeric" placeholder="97205" />
        </Field>
      </div>
    </FieldSet>
  )
}`,
  },
  {
    name: "CardPaymentInputs",
    description: "Card number, expiry, and CVC inputs that auto-format as the user types.",
    code: `
function formatCard(v: string) {
  return v.replace(/\\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim()
}
function formatExpiry(v: string) {
  const d = v.replace(/\\D/g, "").slice(0, 4)
  return d.length > 2 ? d.slice(0, 2) + "/" + d.slice(2) : d
}

export default function CardPaymentInputs() {
  const [card, setCard] = React.useState("4242 4242 4242 4242")
  const [expiry, setExpiry] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Field>
        <FieldLabel htmlFor="card-number">Card number</FieldLabel>
        <InputGroup>
          <InputGroupAddon>
            <CreditCardIcon />
          </InputGroupAddon>
          <InputGroupInput
            id="card-number"
            inputMode="numeric"
            autoComplete="cc-number"
            value={card}
            onChange={(e) => setCard(formatCard(e.target.value))}
            className="font-mono"
          />
        </InputGroup>
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field>
          <FieldLabel htmlFor="card-exp">Expiry</FieldLabel>
          <Input id="card-exp" placeholder="MM/YY" inputMode="numeric" autoComplete="cc-exp" value={expiry} onChange={(e) => setExpiry(formatExpiry(e.target.value))} />
        </Field>
        <Field>
          <FieldLabel htmlFor="card-cvc">CVC</FieldLabel>
          <Input id="card-cvc" placeholder="123" inputMode="numeric" maxLength={4} autoComplete="cc-csc" />
        </Field>
      </div>
    </div>
  )
}`,
  },
  {
    name: "PhoneCountryInput",
    description: "A phone number input with a country code selector and formatted digits.",
    code: `
const countries = [
  { code: "US", dial: "+1" },
  { code: "GB", dial: "+44" },
  { code: "DE", dial: "+49" },
  { code: "IN", dial: "+91" },
]

export default function PhoneCountryInput() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="phone">Mobile number</FieldLabel>
      <div className="flex gap-2">
        <NativeSelect aria-label="Country code" defaultValue="+1" className="w-24">
          {countries.map((c) => (
            <NativeSelectOption key={c.code} value={c.dial}>
              {c.code} {c.dial}
            </NativeSelectOption>
          ))}
        </NativeSelect>
        <Input id="phone" type="tel" autoComplete="tel-national" placeholder="(555) 014-2290" />
      </div>
      <FieldDescription>Used for two-factor codes only.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "DateTimeInputs",
    description: "Native date and time inputs for scheduling a post.",
    code: `
export default function DateTimeInputs() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Schedule post</FieldLegend>
      <div className="grid grid-cols-2 gap-3">
        <Field>
          <FieldLabel htmlFor="post-date">Date</FieldLabel>
          <Input id="post-date" type="date" defaultValue="2025-04-18" />
        </Field>
        <Field>
          <FieldLabel htmlFor="post-time">Time</FieldLabel>
          <Input id="post-time" type="time" defaultValue="09:30" />
        </Field>
      </div>
      <FieldDescription>Times are shown in Pacific Time (PT).</FieldDescription>
    </FieldSet>
  )
}`,
  },
  {
    name: "QuantityStepperInput",
    description: "A numeric quantity input flanked by decrement and increment buttons with bounds.",
    code: `
export default function QuantityStepperInput() {
  const [qty, setQty] = React.useState(2)
  const clamp = (n: number) => Math.min(10, Math.max(1, n))

  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="qty">Seats</FieldLabel>
      <div className="flex">
        <Button variant="outline" size="icon" aria-label="Decrease" disabled={qty <= 1} onClick={() => setQty((q) => clamp(q - 1))}>
          <MinusIcon />
        </Button>
        <Input
          id="qty"
          type="number"
          min={1}
          max={10}
          value={qty}
          onChange={(e) => setQty(clamp(Number(e.target.value) || 1))}
          className="w-14 border-x-0 text-center tabular-nums [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
        />
        <Button variant="outline" size="icon" aria-label="Increase" disabled={qty >= 10} onClick={() => setQty((q) => clamp(q + 1))}>
          <PlusIcon />
        </Button>
      </div>
      <FieldDescription>Up to 10 seats on the Team plan.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "PriceRangeFilterInputs",
    description: "Min and max price inputs for a product filter that flag an invalid range.",
    code: `
export default function PriceRangeFilterInputs() {
  const [min, setMin] = React.useState("40")
  const [max, setMax] = React.useState("25")
  const invalid = min !== "" && max !== "" && Number(min) > Number(max)

  return (
    <Field data-invalid={invalid} className="w-full max-w-xs">
      <FieldLabel>Price range</FieldLabel>
      <div className="flex items-center gap-2">
        <Input aria-label="Minimum price" type="number" placeholder="Min" value={min} aria-invalid={invalid} onChange={(e) => setMin(e.target.value)} />
        <span className="text-muted-foreground">–</span>
        <Input aria-label="Maximum price" type="number" placeholder="Max" value={max} aria-invalid={invalid} onChange={(e) => setMax(e.target.value)} />
      </div>
      {invalid && <FieldError>Minimum can&apos;t be higher than maximum.</FieldError>}
    </Field>
  )
}`,
  },
  {
    name: "TagEntryInput",
    description: "An input that turns typed keywords into removable badges when Enter or comma is pressed.",
    code: `
export default function TagEntryInput() {
  const [tags, setTags] = React.useState(["design", "roadmap"])
  const [draft, setDraft] = React.useState("")

  const commit = () => {
    const t = draft.trim().toLowerCase()
    if (t && !tags.includes(t)) setTags([...tags, t])
    setDraft("")
  }

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="tag-input">Topics</FieldLabel>
      <div className="flex min-h-8 flex-wrap items-center gap-1 border border-input px-1.5 py-1 focus-within:border-ring focus-within:ring-1 focus-within:ring-ring/50">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="gap-1">
            {tag}
            <button type="button" aria-label={"Remove " + tag} onClick={() => setTags(tags.filter((t) => t !== tag))}>
              <XIcon className="size-3" />
            </button>
          </Badge>
        ))}
        <Input
          id="tag-input"
          value={draft}
          placeholder={tags.length ? "" : "Add a topic"}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === ",") {
              e.preventDefault()
              commit()
            } else if (e.key === "Backspace" && !draft) {
              setTags(tags.slice(0, -1))
            }
          }}
          className="h-6 min-w-20 flex-1 border-0 px-1 focus-visible:ring-0 dark:bg-transparent"
        />
      </div>
      <FieldDescription>Press Enter or comma to add.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "ClearableSearchInput",
    description: "A controlled search input that shows a clear button only when it has a value.",
    code: `
export default function ClearableSearchInput() {
  const [query, setQuery] = React.useState("quarterly report")

  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput aria-label="Search files" placeholder="Search files" value={query} onChange={(e) => setQuery(e.target.value)} />
      {query && (
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="Clear search" onClick={() => setQuery("")}>
            <XIcon />
          </InputGroupButton>
        </InputGroupAddon>
      )}
    </InputGroup>
  )
}`,
  },
  {
    name: "UsernameAvailabilityInput",
    description: "A username input that shows a spinner while checking and then an available or taken state.",
    code: `
const taken = ["admin", "maya", "support"]

export default function UsernameAvailabilityInput() {
  const [value, setValue] = React.useState("maya")
  const [status, setStatus] = React.useState<"idle" | "checking" | "available" | "taken">("taken")

  React.useEffect(() => {
    if (!value) return
    const start = setTimeout(() => setStatus("checking"), 0)
    const done = setTimeout(() => setStatus(taken.includes(value.toLowerCase()) ? "taken" : "available"), 700)
    return () => {
      clearTimeout(start)
      clearTimeout(done)
    }
  }, [value])

  return (
    <Field data-invalid={status === "taken"} className="w-full max-w-sm">
      <FieldLabel htmlFor="username-check">Username</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <AtSignIcon />
        </InputGroupAddon>
        <InputGroupInput id="username-check" value={value} aria-invalid={status === "taken"} onChange={(e) => setValue(e.target.value.replace(/\\s/g, ""))} />
        <InputGroupAddon align="inline-end">
          {status === "checking" && <Spinner />}
          {status === "available" && <CircleCheckIcon className="text-emerald-600" />}
          {status === "taken" && <CircleXIcon className="text-destructive" />}
        </InputGroupAddon>
      </InputGroup>
      {status === "taken" ? (
        <FieldError>@{value} is already taken.</FieldError>
      ) : (
        <FieldDescription>Letters, numbers, and underscores only.</FieldDescription>
      )}
    </Field>
  )
}`,
  },
  {
    name: "InlineEditTitleInput",
    description: "A document title that switches into an input on click and saves on Enter or blur.",
    code: `
export default function InlineEditTitleInput() {
  const [title, setTitle] = React.useState("Q2 hiring plan")
  const [editing, setEditing] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <FileTextIcon className="size-4 shrink-0 text-muted-foreground" />
      {editing ? (
        <Input
          autoFocus
          aria-label="Document title"
          defaultValue={title}
          className="h-7 text-sm font-medium md:text-sm"
          onFocus={(e) => e.target.select()}
          onBlur={(e) => {
            setTitle(e.target.value.trim() || title)
            setEditing(false)
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.currentTarget.blur()
            if (e.key === "Escape") setEditing(false)
          }}
        />
      ) : (
        <button type="button" className="flex h-7 items-center gap-2 px-1 text-sm font-medium hover:bg-muted" onClick={() => setEditing(true)}>
          {title}
          <PencilIcon className="size-3 text-muted-foreground" />
        </button>
      )}
    </div>
  )
}`,
  },
  {
    name: "HorizontalSettingsInputs",
    description: "Settings rows with labels and descriptions on the left and inputs on the right.",
    code: `
export default function HorizontalSettingsInputs() {
  return (
    <FieldGroup className="w-full max-w-md">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="ws-name">Workspace name</FieldLabel>
          <FieldDescription>Shown in emails and the sidebar.</FieldDescription>
        </FieldContent>
        <Input id="ws-name" defaultValue="Harbor Labs" className="w-40" />
      </Field>
      <FieldSeparator />
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="ws-timeout">Session timeout</FieldLabel>
          <FieldDescription>Minutes of inactivity before sign-out.</FieldDescription>
        </FieldContent>
        <Input id="ws-timeout" type="number" defaultValue={30} className="w-40" />
      </Field>
    </FieldGroup>
  )
}`,
  },
  {
    name: "ValidationFeedbackInputs",
    description: "Inputs showing neutral, success, warning, and error feedback with matching messages.",
    code: `
export default function ValidationFeedbackInputs() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="fb-success">Subdomain</FieldLabel>
        <Input id="fb-success" defaultValue="harbor" className="border-emerald-600 focus-visible:border-emerald-600 focus-visible:ring-emerald-600/30" />
        <FieldDescription className="flex items-center gap-1 text-emerald-600">
          <CircleCheckIcon className="size-3.5" />
          harbor.fieldnote.app is available
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="fb-warning">Display name</FieldLabel>
        <Input id="fb-warning" defaultValue="HARBOR LABS" className="border-amber-500 focus-visible:border-amber-500 focus-visible:ring-amber-500/30" />
        <FieldDescription className="flex items-center gap-1 text-amber-600">
          <TriangleAlertIcon className="size-3.5" />
          All caps can look like shouting in notifications.
        </FieldDescription>
      </Field>
      <Field data-invalid>
        <FieldLabel htmlFor="fb-error">Billing email</FieldLabel>
        <Input id="fb-error" aria-invalid defaultValue="billing@" />
        <FieldError>Enter a complete email address.</FieldError>
      </Field>
    </FieldGroup>
  )
}`,
  },
  {
    name: "FloatingLabelInput",
    description: "Inputs with labels that float above the value when focused or filled.",
    code: `
const fields = [
  { id: "fl-first", label: "First name", value: "Talia" },
  { id: "fl-last", label: "Last name", value: "" },
]

export default function FloatingLabelInput() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {fields.map((f) => (
        <div key={f.id} className="relative">
          <Input id={f.id} placeholder=" " defaultValue={f.value} className="peer h-11 pt-4" />
          <label
            htmlFor={f.id}
            className="pointer-events-none absolute start-2.5 top-1.5 text-[10px] text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-foreground"
          >
            {f.label}
          </label>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ChatComposerInput",
    description: "A chat message composer with attach and emoji actions and a send button.",
    code: `
export default function ChatComposerInput() {
  const [message, setMessage] = React.useState("")

  return (
    <InputGroup className="h-10 w-full max-w-md">
      <InputGroupAddon>
        <InputGroupButton size="icon-xs" aria-label="Attach file">
          <PaperclipIcon />
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupInput aria-label="Message" placeholder="Message #design-crit" value={message} onChange={(e) => setMessage(e.target.value)} />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" aria-label="Insert emoji">
          <SmileIcon />
        </InputGroupButton>
        <InputGroupButton size="icon-xs" variant="default" aria-label="Send" disabled={!message.trim()} onClick={() => setMessage("")}>
          <SendIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}`,
  },
  {
    name: "LiveFilterListInput",
    description: "A filter input that narrows a list of team members as you type, with an empty state.",
    code: `
const people = ["Ada Morales", "Bram de Vries", "Chen Wei", "Dalia Haddad", "Eitan Cohen", "Freya Lind"]

export default function LiveFilterListInput() {
  const [q, setQ] = React.useState("")
  const results = people.filter((p) => p.toLowerCase().includes(q.toLowerCase()))

  return (
    <div className="w-full max-w-xs border">
      <div className="border-b p-2">
        <Input aria-label="Filter members" placeholder="Filter members..." value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <ul className="max-h-48 overflow-auto p-1 text-sm">
        {results.map((p) => (
          <li key={p} className="flex items-center gap-2 px-2 py-1.5 hover:bg-muted">
            <Avatar size="sm">
              <AvatarFallback>{p.split(" ").map((s) => s[0]).join("").slice(0, 2)}</AvatarFallback>
            </Avatar>
            {p}
          </li>
        ))}
        {results.length === 0 && <li className="px-2 py-6 text-center text-xs text-muted-foreground">No members match &ldquo;{q}&rdquo;</li>}
      </ul>
    </div>
  )
}`,
  },
  {
    name: "ColorHexInput",
    description: "A native color picker synced with a hex text input for a brand color setting.",
    code: `
export default function ColorHexInput() {
  const [color, setColor] = React.useState("#6366f1")
  const valid = /^#[0-9a-f]{6}$/i.test(color)

  return (
    <Field data-invalid={!valid} className="w-full max-w-[16rem]">
      <FieldLabel htmlFor="brand-hex">Brand color</FieldLabel>
      <div className="flex gap-2">
        <Input
          type="color"
          aria-label="Pick color"
          value={valid ? color : "#000000"}
          onChange={(e) => setColor(e.target.value)}
          className="w-10 shrink-0 cursor-pointer p-0.5"
        />
        <Input id="brand-hex" value={color} aria-invalid={!valid} onChange={(e) => setColor(e.target.value)} className="font-mono uppercase" />
      </div>
      {!valid && <FieldError>Use a 6-digit hex value, like #1E40AF.</FieldError>}
    </Field>
  )
}`,
  },
  {
    name: "WorkspaceSlugInput",
    description: "A workspace URL input with a domain prefix that sanitizes the slug as you type.",
    code: `
export default function WorkspaceSlugInput() {
  const [slug, setSlug] = React.useState("harbor-labs")

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="slug">Workspace URL</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>fieldnote.app/</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          id="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+/, ""))}
          className="ps-0.5"
        />
      </InputGroup>
      <FieldDescription>Lowercase letters, numbers, and dashes.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "TeamInviteInput",
    description: "An invite form with email input and role select that builds a pending invite list.",
    code: `
export default function TeamInviteInput() {
  const [email, setEmail] = React.useState("")
  const [role, setRole] = React.useState("Member")
  const [invites, setInvites] = React.useState([{ email: "kai@harborlabs.io", role: "Admin" }])

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          if (!email) return
          setInvites([...invites, { email, role }])
          setEmail("")
        }}
      >
        <Input type="email" required aria-label="Email to invite" placeholder="teammate@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <NativeSelect aria-label="Role" value={role} onChange={(e) => setRole(e.target.value)} className="w-28">
          <NativeSelectOption>Member</NativeSelectOption>
          <NativeSelectOption>Admin</NativeSelectOption>
          <NativeSelectOption>Viewer</NativeSelectOption>
        </NativeSelect>
        <Button type="submit">Invite</Button>
      </form>
      <ul className="divide-y border text-xs">
        {invites.map((i) => (
          <li key={i.email} className="flex items-center justify-between px-3 py-2">
            <span>{i.email}</span>
            <Badge variant="outline">{i.role} · Pending</Badge>
          </li>
        ))}
      </ul>
    </div>
  )
}`,
  },
  {
    name: "PasswordStrengthInput",
    description: "A new password input with a strength meter and a checklist of requirements.",
    code: `
const rules = [
  { label: "At least 10 characters", test: (v: string) => v.length >= 10 },
  { label: "One uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "One number", test: (v: string) => /\\d/.test(v) },
  { label: "One symbol", test: (v: string) => /[^A-Za-z0-9]/.test(v) },
]
const colors = ["bg-destructive", "bg-destructive", "bg-amber-500", "bg-lime-500", "bg-emerald-600"]

export default function PasswordStrengthInput() {
  const [value, setValue] = React.useState("Harbor2025")
  const score = rules.filter((r) => r.test(value)).length

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="new-password">New password</FieldLabel>
      <Input id="new-password" type="password" autoComplete="new-password" value={value} onChange={(e) => setValue(e.target.value)} />
      <div className="flex gap-1">
        {rules.map((r, i) => (
          <div key={r.label} className={cn("h-1 flex-1", i < score ? colors[score] : "bg-muted")} />
        ))}
      </div>
      <ul className="flex flex-col gap-1 text-xs">
        {rules.map((r) => (
          <li key={r.label} className={cn("flex items-center gap-1.5", r.test(value) ? "text-foreground" : "text-muted-foreground")}>
            {r.test(value) ? <CheckIcon className="size-3.5 text-emerald-600" /> : <CircleIcon className="size-3.5" />}
            {r.label}
          </li>
        ))}
      </ul>
    </Field>
  )
}`,
  },
  {
    name: "DimensionUnitInputs",
    description: "Width and height inputs with unit suffixes and an aspect ratio lock toggle.",
    code: `
export default function DimensionUnitInputs() {
  const [w, setW] = React.useState(1200)
  const [h, setH] = React.useState(630)
  const [locked, setLocked] = React.useState(true)
  const ratio = 1200 / 630

  return (
    <div className="flex w-full max-w-xs items-end gap-2">
      <Field>
        <FieldLabel htmlFor="dim-w">Width</FieldLabel>
        <InputGroup>
          <InputGroupInput
            id="dim-w"
            type="number"
            value={w}
            onChange={(e) => {
              const v = Number(e.target.value)
              setW(v)
              if (locked) setH(Math.round(v / ratio))
            }}
          />
          <InputGroupAddon align="inline-end">
            <InputGroupText>px</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Button variant={locked ? "secondary" : "ghost"} size="icon" aria-label="Lock aspect ratio" aria-pressed={locked} onClick={() => setLocked((l) => !l)}>
        {locked ? <LockIcon /> : <LockOpenIcon />}
      </Button>
      <Field>
        <FieldLabel htmlFor="dim-h">Height</FieldLabel>
        <InputGroup>
          <InputGroupInput
            id="dim-h"
            type="number"
            value={h}
            onChange={(e) => {
              const v = Number(e.target.value)
              setH(v)
              if (locked) setW(Math.round(v * ratio))
            }}
          />
          <InputGroupAddon align="inline-end">
            <InputGroupText>px</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </div>
  )
}`,
  },
  {
    name: "CouponCodeInput",
    description: "A checkout promo code input that applies a code and shows success or error feedback.",
    code: `
const codes: Record<string, string> = { SPRING20: "20% off your first year", WELCOME: "$10 off" }

export default function CouponCodeInput() {
  const [code, setCode] = React.useState("")
  const [result, setResult] = React.useState<{ ok: boolean; text: string } | null>(null)

  return (
    <Field data-invalid={result?.ok === false} className="w-full max-w-sm">
      <FieldLabel htmlFor="coupon">Promo code</FieldLabel>
      <div className="flex gap-2">
        <Input
          id="coupon"
          placeholder="SPRING20"
          value={code}
          aria-invalid={result?.ok === false}
          onChange={(e) => {
            setCode(e.target.value.toUpperCase())
            setResult(null)
          }}
          className="font-mono uppercase"
        />
        <Button
          variant="outline"
          disabled={!code}
          onClick={() => setResult(codes[code] ? { ok: true, text: codes[code] } : { ok: false, text: "This code is invalid or expired." })}
        >
          Apply
        </Button>
      </div>
      {result?.ok && (
        <FieldDescription className="flex items-center gap-1 text-emerald-600">
          <TicketIcon className="size-3.5" />
          {result.text} applied
        </FieldDescription>
      )}
      {result?.ok === false && <FieldError>{result.text}</FieldError>}
    </Field>
  )
}`,
  },
  {
    name: "LockedPlanInput",
    description: "A disabled input locked behind a paid plan, with a lock icon and upgrade prompt.",
    code: `
export default function LockedPlanInput() {
  return (
    <Field data-disabled className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor="custom-domain">Custom domain</FieldLabel>
        <Badge variant="secondary">Pro</Badge>
      </div>
      <InputGroup>
        <InputGroupAddon>
          <LockIcon />
        </InputGroupAddon>
        <InputGroupInput id="custom-domain" disabled placeholder="docs.yourcompany.com" />
      </InputGroup>
      <FieldDescription>
        Upgrade to Pro to serve your help center from your own domain.{" "}
        <a href="#" className="font-medium text-foreground underline underline-offset-4">
          See plans
        </a>
      </FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "CommandSearchInput",
    description: "A command palette style input that filters actions and highlights the matched text.",
    code: `
const actions = [
  { label: "Create new project", icon: FolderPlusIcon },
  { label: "Invite teammate", icon: UserPlusIcon },
  { label: "Open billing settings", icon: CreditCardIcon },
  { label: "Toggle dark mode", icon: MoonIcon },
]

export default function CommandSearchInput() {
  const [q, setQ] = React.useState("in")
  const matches = actions.filter((a) => a.label.toLowerCase().includes(q.toLowerCase()))

  return (
    <div className="w-full max-w-sm border bg-popover shadow-md">
      <div className="flex items-center gap-2 border-b px-3">
        <CommandIcon className="size-4 text-muted-foreground" />
        <Input
          autoFocus
          aria-label="Type a command"
          placeholder="Type a command..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="h-10 border-0 px-0 focus-visible:ring-0 dark:bg-transparent"
        />
      </div>
      <ul className="p-1 text-sm">
        {matches.map((a) => {
          const i = a.label.toLowerCase().indexOf(q.toLowerCase())
          return (
            <li key={a.label} className="flex items-center gap-2 px-2 py-1.5 hover:bg-muted">
              <a.icon className="size-4 text-muted-foreground" />
              <span>
                {a.label.slice(0, i)}
                <mark className="bg-transparent font-semibold text-foreground">{a.label.slice(i, i + q.length)}</mark>
                {a.label.slice(i + q.length)}
              </span>
            </li>
          )
        })}
        {!matches.length && <li className="px-2 py-4 text-center text-xs text-muted-foreground">No commands found.</li>}
      </ul>
    </div>
  )
}`,
  },
  {
    name: "ProfileSettingsCardInputs",
    description: "A profile settings card with name, job title, and email inputs and a save action that tracks changes.",
    code: `
export default function ProfileSettingsCardInputs() {
  const initial = { name: "Lena Fischer", title: "Product Designer" }
  const [form, setForm] = React.useState(initial)
  const dirty = form.name !== initial.name || form.title !== initial.title

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>This is how others see you across the workspace.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="pf-name">Full name</FieldLabel>
            <Input id="pf-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </Field>
          <Field>
            <FieldLabel htmlFor="pf-title">Job title</FieldLabel>
            <Input id="pf-title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </Field>
          <Field data-disabled>
            <FieldLabel htmlFor="pf-email">Email</FieldLabel>
            <Input id="pf-email" disabled value="lena@harborlabs.io" />
            <FieldDescription>Managed by your identity provider.</FieldDescription>
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="ghost" disabled={!dirty} onClick={() => setForm(initial)}>
          Reset
        </Button>
        <Button disabled={!dirty}>Save changes</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "BusinessHoursInputs",
    description: "Start and end time inputs per weekday that flag when closing time is before opening.",
    code: `
const initial = [
  { day: "Mon", open: "09:00", close: "17:00" },
  { day: "Tue", open: "09:00", close: "17:00" },
  { day: "Sat", open: "11:00", close: "10:00" },
]

export default function BusinessHoursInputs() {
  const [hours, setHours] = React.useState(initial)
  const update = (i: number, key: "open" | "close", value: string) =>
    setHours(hours.map((h, idx) => (idx === i ? { ...h, [key]: value } : h)))

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {hours.map((h, i) => {
        const invalid = h.close <= h.open
        return (
          <div key={h.day} className="flex items-center gap-2 text-sm">
            <span className="w-10 font-medium">{h.day}</span>
            <Input type="time" aria-label={h.day + " opens"} value={h.open} onChange={(e) => update(i, "open", e.target.value)} />
            <span className="text-muted-foreground">to</span>
            <Input type="time" aria-label={h.day + " closes"} value={h.close} aria-invalid={invalid} onChange={(e) => update(i, "close", e.target.value)} />
          </div>
        )
      })}
      {hours.some((h) => h.close <= h.open) && <p className="text-xs text-destructive">Closing time must be after opening time.</p>}
    </div>
  )
}`,
  },
  {
    name: "RequiredFieldsFormInputs",
    description: "A short form with required markers that reveals errors for empty fields on submit.",
    code: `
export default function RequiredFieldsFormInputs() {
  const [submitted, setSubmitted] = React.useState(false)
  const [values, setValues] = React.useState({ company: "", vat: "" })
  const companyError = submitted && !values.company

  return (
    <form
      noValidate
      className="w-full max-w-sm"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <FieldGroup>
        <Field data-invalid={companyError}>
          <FieldLabel htmlFor="req-company">
            Company name <span className="text-destructive">*</span>
          </FieldLabel>
          <Input id="req-company" required aria-invalid={companyError} value={values.company} onChange={(e) => setValues({ ...values, company: e.target.value })} />
          {companyError && <FieldError>Company name is required.</FieldError>}
        </Field>
        <Field>
          <FieldLabel htmlFor="req-vat">
            VAT number <span className="font-normal text-muted-foreground">(optional)</span>
          </FieldLabel>
          <Input id="req-vat" value={values.vat} onChange={(e) => setValues({ ...values, vat: e.target.value })} />
        </Field>
        <Button type="submit">Continue to payment</Button>
      </FieldGroup>
    </form>
  )
}`,
  },
  {
    name: "RecentSearchesInput",
    description: "A search input that reveals recent searches below it while focused and empty.",
    code: `
const recent = ["invoice template", "brand assets 2025", "onboarding checklist"]

export default function RecentSearchesInput() {
  const [focused, setFocused] = React.useState(false)
  const [q, setQ] = React.useState("")

  return (
    <div className="relative w-full max-w-sm">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput
          aria-label="Search"
          placeholder="Search your drive"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 120)}
        />
      </InputGroup>
      {focused && !q && (
        <div className="absolute inset-x-0 top-full z-10 mt-1 border bg-popover p-1 text-sm shadow-md">
          <p className="px-2 py-1 text-xs text-muted-foreground">Recent</p>
          {recent.map((r) => (
            <button key={r} type="button" className="flex w-full items-center gap-2 px-2 py-1.5 text-start hover:bg-muted" onClick={() => setQ(r)}>
              <HistoryIcon className="size-3.5 text-muted-foreground" />
              {r}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}`,
  },
  {
    name: "WebhookTestInput",
    description: "A webhook URL input with a test button that shows a loading state and response status.",
    code: `
export default function WebhookTestInput() {
  const [url, setUrl] = React.useState("https://hooks.harborlabs.io/billing")
  const [state, setState] = React.useState<"idle" | "sending" | "ok">("idle")

  return (
    <Field className="w-full max-w-md">
      <FieldLabel htmlFor="webhook">Endpoint URL</FieldLabel>
      <div className="flex gap-2">
        <Input id="webhook" type="url" value={url} onChange={(e) => setUrl(e.target.value)} className="font-mono" />
        <Button
          variant="outline"
          disabled={state === "sending"}
          onClick={() => {
            setState("sending")
            setTimeout(() => setState("ok"), 1000)
          }}
        >
          {state === "sending" ? <Spinner data-icon="inline-start" /> : <ZapIcon data-icon="inline-start" />}
          Send test
        </Button>
      </div>
      {state === "ok" && (
        <FieldDescription className="flex items-center gap-2">
          <Badge variant="secondary" className="font-mono">200 OK</Badge>
          Delivered in 142 ms
        </FieldDescription>
      )}
    </Field>
  )
}`,
  },
  {
    name: "BudgetAllocationInputs",
    description: "Department budget inputs that total live and flag when the allocation exceeds the cap.",
    code: `
const CAP = 50000

export default function BudgetAllocationInputs() {
  const [budget, setBudget] = React.useState({ Marketing: 22000, Engineering: 24000, Events: 7000 })
  const total = Object.values(budget).reduce((a, b) => a + b, 0)
  const over = total > CAP

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      {Object.entries(budget).map(([dept, value]) => (
        <div key={dept} className="flex items-center justify-between gap-3 text-sm">
          <label htmlFor={"budget-" + dept}>{dept}</label>
          <InputGroup className="w-32">
            <InputGroupAddon>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput
              id={"budget-" + dept}
              type="number"
              step={500}
              value={value}
              aria-invalid={over}
              onChange={(e) => setBudget({ ...budget, [dept]: Number(e.target.value) })}
              className="text-right tabular-nums"
            />
          </InputGroup>
        </div>
      ))}
      <Separator />
      <div className={cn("flex justify-between text-sm font-medium", over && "text-destructive")}>
        <span>Total</span>
        <span className="tabular-nums">
          {"$" + total.toLocaleString()} / {"$" + CAP.toLocaleString()}
        </span>
      </div>
      {over && <p className="text-xs text-destructive">Reduce by {"$" + (total - CAP).toLocaleString()} to stay within the cap.</p>}
    </div>
  )
}`,
  },
  {
    name: "DateOfBirthInputs",
    description: "Separate day, month, and year inputs that auto-advance focus as each part is filled.",
    code: `
const parts = [
  { key: "dd", label: "Day", placeholder: "DD", max: 2, width: "w-12" },
  { key: "mm", label: "Month", placeholder: "MM", max: 2, width: "w-12" },
  { key: "yyyy", label: "Year", placeholder: "YYYY", max: 4, width: "w-20" },
]

export default function DateOfBirthInputs() {
  const refs = React.useRef<(HTMLInputElement | null)[]>([])

  return (
    <FieldSet className="w-fit">
      <FieldLegend variant="label">Date of birth</FieldLegend>
      <div className="flex items-end gap-2">
        {parts.map((p, i) => (
          <Field key={p.key} className="w-auto">
            <FieldLabel htmlFor={"dob-" + p.key} className="text-muted-foreground">
              {p.label}
            </FieldLabel>
            <Input
              id={"dob-" + p.key}
              ref={(el) => {
                refs.current[i] = el
              }}
              inputMode="numeric"
              placeholder={p.placeholder}
              maxLength={p.max}
              className={cn("text-center tabular-nums", p.width)}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/\\D/g, "")
                if (e.target.value.length === p.max) refs.current[i + 1]?.focus()
              }}
            />
          </Field>
        ))}
      </div>
      <FieldDescription>You must be 18 or older to open an account.</FieldDescription>
    </FieldSet>
  )
}`,
  },
  {
    name: "AiPromptInput",
    description: "An AI assistant prompt input with a sparkle icon, enter hint, and submit button.",
    code: `
export default function AiPromptInput() {
  const [prompt, setPrompt] = React.useState("")

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <InputGroup className="h-11">
        <InputGroupAddon>
          <SparklesIcon className="text-violet-500" />
        </InputGroupAddon>
        <InputGroupInput aria-label="Ask the assistant" placeholder="Summarize last week's support tickets..." value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        <InputGroupAddon align="inline-end">
          <Kbd>↵</Kbd>
          <InputGroupButton size="icon-sm" variant="default" aria-label="Submit prompt" disabled={!prompt.trim()}>
            <ArrowUpIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <div className="flex flex-wrap gap-1">
        {["Draft a reply", "Find duplicates", "Weekly summary"].map((s) => (
          <Button key={s} variant="outline" size="xs" onClick={() => setPrompt(s)}>
            {s}
          </Button>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "UnderlineMinimalInput",
    description: "Minimal underline-only inputs for a distraction-free signup form.",
    code: `
export default function UnderlineMinimalInput() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <div className="flex flex-col gap-1">
        <Label htmlFor="ul-name" className="text-xs text-muted-foreground">
          What should we call you?
        </Label>
        <Input
          id="ul-name"
          placeholder="Your name"
          className="h-10 border-0 border-b px-0 text-base focus-visible:border-foreground focus-visible:ring-0 md:text-base dark:bg-transparent"
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="ul-email" className="text-xs text-muted-foreground">
          Where can we reach you?
        </Label>
        <Input
          id="ul-email"
          type="email"
          placeholder="you@example.com"
          className="h-10 border-0 border-b px-0 text-base focus-visible:border-foreground focus-visible:ring-0 md:text-base dark:bg-transparent"
        />
      </div>
    </div>
  )
}`,
  },
  {
    name: "FileRenameInput",
    description: "A file rename input that keeps the extension fixed and selects only the base name.",
    code: `
export default function FileRenameInput() {
  const [name, setName] = React.useState("invoice-march-final")

  return (
    <div className="flex w-full max-w-sm items-center gap-2 border p-2">
      <FileIcon className="size-5 shrink-0 text-muted-foreground" />
      <InputGroup className="flex-1">
        <InputGroupInput aria-label="File name" value={name} autoFocus onFocus={(e) => e.target.select()} onChange={(e) => setName(e.target.value.replace(/[\\\\/:*?"<>|]/g, ""))} />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.pdf</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <Button size="sm" disabled={!name.trim()}>
        Rename
      </Button>
    </div>
  )
}`,
  },
  {
    name: "ScopedSearchInput",
    description: "A search input with scope toggles inside the field for all, files, or people.",
    code: `
const scopes = ["All", "Files", "People"]

export default function ScopedSearchInput() {
  const [scope, setScope] = React.useState("All")

  return (
    <InputGroup className="w-full max-w-md">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput aria-label="Search" placeholder={"Search " + (scope === "All" ? "everything" : scope.toLowerCase())} />
      <InputGroupAddon align="inline-end" className="gap-0.5">
        {scopes.map((s) => (
          <InputGroupButton key={s} variant={scope === s ? "secondary" : "ghost"} aria-pressed={scope === s} onClick={() => setScope(s)}>
            {s}
          </InputGroupButton>
        ))}
      </InputGroupAddon>
    </InputGroup>
  )
}`,
  },
  {
    name: "PercentageSliderInput",
    description: "A discount percentage input synced with a range slider and a percent suffix.",
    code: `
export default function PercentageSliderInput() {
  const [pct, setPct] = React.useState(15)

  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="discount">Discount</FieldLabel>
      <div className="flex items-center gap-3">
        <Slider value={[pct]} max={100} step={1} onValueChange={(v) => setPct(Array.isArray(v) ? v[0]! : v)} aria-label="Discount slider" className="flex-1" />
        <InputGroup className="w-20">
          <InputGroupInput
            id="discount"
            type="number"
            min={0}
            max={100}
            value={pct}
            onChange={(e) => setPct(Math.min(100, Math.max(0, Number(e.target.value))))}
            className="text-right tabular-nums"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupText>%</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <FieldDescription>Customers pay {"$" + ((99 * (100 - pct)) / 100).toFixed(2)} instead of $99.00.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "DeleteConfirmationInput",
    description: "A danger-zone confirmation that enables delete only after the project name is typed exactly.",
    code: `
const PROJECT = "harbor-website"

export default function DeleteConfirmationInput() {
  const [value, setValue] = React.useState("")

  return (
    <div className="w-full max-w-sm border border-destructive/40 p-4">
      <p className="text-sm font-medium text-destructive">Delete project</p>
      <p className="mt-1 text-xs text-muted-foreground">
        This permanently removes all deployments and domains. Type <span className="font-mono font-medium text-foreground">{PROJECT}</span> to confirm.
      </p>
      <Input aria-label="Project name" value={value} onChange={(e) => setValue(e.target.value)} placeholder={PROJECT} className="mt-3 font-mono" autoComplete="off" />
      <Button variant="destructive" className="mt-3 w-full" disabled={value !== PROJECT}>
        <Trash2Icon data-icon="inline-start" />
        Delete this project
      </Button>
    </div>
  )
}`,
  },
]

export default examples
