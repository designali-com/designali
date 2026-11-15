import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "ProfileSettingsFields",
    description: "Profile settings form with display name, prefixed username, and a bio with helper text.",
    code: `
export default function ProfileSettingsFields() {
  return (
    <form className="w-full max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="profile-name">Display name</FieldLabel>
          <Input id="profile-name" defaultValue="Maya Lindqvist" />
        </Field>
        <Field>
          <FieldLabel htmlFor="profile-username">Username</FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>fieldnote.app/</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput id="profile-username" defaultValue="maya" />
          </InputGroup>
          <FieldDescription>Your public profile URL. You can change it once every 30 days.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="profile-bio">Bio</FieldLabel>
          <Textarea id="profile-bio" rows={3} placeholder="Product designer based in Malmö..." className="resize-none" />
          <FieldDescription>Shown on your profile and in comments.</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Button type="submit">Save profile</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}`,
  },
  {
    name: "PasswordRequirementsField",
    description: "Password field with a live checklist of requirements that tick off as the user types.",
    code: `
const rules = [
  { label: "At least 8 characters", test: (v: string) => v.length >= 8 },
  { label: "One uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "One number", test: (v: string) => /\\d/.test(v) },
  { label: "One symbol", test: (v: string) => /[^A-Za-z0-9]/.test(v) },
]

export default function PasswordRequirementsField() {
  const [value, setValue] = React.useState("Harbor7")

  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="new-password">New password</FieldLabel>
      <Input id="new-password" type="password" value={value} onChange={(e) => setValue(e.target.value)} />
      <ul className="flex flex-col gap-1 text-xs">
        {rules.map((rule) => {
          const ok = rule.test(value)
          return (
            <li key={rule.label} className={cn("flex items-center gap-1.5", ok ? "text-emerald-600" : "text-muted-foreground")}>
              {ok ? <CircleCheckIcon className="size-3.5" /> : <CircleIcon className="size-3.5" />}
              {rule.label}
            </li>
          )
        })}
      </ul>
    </Field>
  )
}`,
  },
  {
    name: "ResponsiveOrientationFields",
    description: "Fields using the responsive orientation so labels sit beside inputs in wide containers and stack when narrow.",
    code: `
export default function ResponsiveOrientationFields() {
  return (
    <FieldGroup className="w-full max-w-lg">
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="resp-company">Company name</FieldLabel>
          <FieldDescription>Appears on invoices.</FieldDescription>
        </FieldContent>
        <Input id="resp-company" defaultValue="Bramble & Oak Ltd" className="@md/field-group:w-56" />
      </Field>
      <FieldSeparator />
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="resp-vat">VAT number</FieldLabel>
          <FieldDescription>Required for EU businesses.</FieldDescription>
        </FieldContent>
        <Input id="resp-vat" placeholder="GB123456789" className="@md/field-group:w-56" />
      </Field>
      <FieldSeparator />
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="resp-email">Billing email</FieldLabel>
          <FieldDescription>Receipts are sent here.</FieldDescription>
        </FieldContent>
        <Input id="resp-email" type="email" defaultValue="accounts@brambleoak.co" className="@md/field-group:w-56" />
      </Field>
    </FieldGroup>
  )
}`,
  },
  {
    name: "BillingIntervalChoiceCards",
    description: "Radio choice cards for monthly versus yearly billing with prices and a savings badge.",
    code: `
export default function BillingIntervalChoiceCards() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Billing interval</FieldLegend>
      <RadioGroup defaultValue="yearly">
        <FieldLabel htmlFor="interval-monthly">
          <Field orientation="horizontal">
            <RadioGroupItem value="monthly" id="interval-monthly" />
            <FieldContent>
              <FieldTitle>Monthly</FieldTitle>
              <FieldDescription>$18 per seat, billed every month</FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="interval-yearly">
          <Field orientation="horizontal">
            <RadioGroupItem value="yearly" id="interval-yearly" />
            <FieldContent>
              <FieldTitle>
                Yearly <Badge variant="secondary">Save 20%</Badge>
              </FieldTitle>
              <FieldDescription>$172 per seat, billed once a year</FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
      </RadioGroup>
    </FieldSet>
  )
}`,
  },
  {
    name: "AddOnCheckboxCards",
    description: "Checkbox choice cards for optional add-ons with a running monthly total.",
    code: `
const addons = [
  { id: "backups", title: "Daily backups", hint: "30-day retention", price: 8 },
  { id: "sso", title: "Single sign-on", hint: "SAML and SCIM", price: 25 },
  { id: "support", title: "Priority support", hint: "4-hour response time", price: 40 },
]

export default function AddOnCheckboxCards() {
  const [selected, setSelected] = React.useState<string[]>(["backups"])
  const total = addons.filter((a) => selected.includes(a.id)).reduce((sum, a) => sum + a.price, 0)

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Add-ons</FieldLegend>
      <FieldDescription>Extend your workspace. Cancel any time.</FieldDescription>
      <FieldGroup className="gap-2">
        {addons.map((a) => (
          <FieldLabel key={a.id} htmlFor={"addon-" + a.id}>
            <Field orientation="horizontal">
              <Checkbox
                id={"addon-" + a.id}
                checked={selected.includes(a.id)}
                onCheckedChange={(checked) =>
                  setSelected((prev) => (checked ? [...prev, a.id] : prev.filter((x) => x !== a.id)))
                }
              />
              <FieldContent>
                <FieldTitle>{a.title}</FieldTitle>
                <FieldDescription>{a.hint}</FieldDescription>
              </FieldContent>
              <span className="text-xs font-medium tabular-nums">+{"$"}{a.price}</span>
            </Field>
          </FieldLabel>
        ))}
      </FieldGroup>
      <p className="text-end text-xs text-muted-foreground">
        Add-ons total: <span className="font-medium text-foreground">{"$"}{total}/mo</span>
      </p>
    </FieldSet>
  )
}`,
  },
  {
    name: "NotificationChannelsFieldSet",
    description: "Nested fieldsets grouping email and push notification checkboxes under separate legends.",
    code: `
const groups = [
  { legend: "Email", items: ["Weekly digest", "New comments", "Billing receipts"] },
  { legend: "Push", items: ["Direct messages", "Mentions", "Deploy failures"] },
]

export default function NotificationChannelsFieldSet() {
  return (
    <FieldGroup className="w-full max-w-sm">
      {groups.map((group, gi) => (
        <React.Fragment key={group.legend}>
          {gi > 0 && <FieldSeparator />}
          <FieldSet>
            <FieldLegend variant="label">{group.legend} notifications</FieldLegend>
            <FieldGroup data-slot="checkbox-group">
              {group.items.map((item, ii) => {
                const id = group.legend.toLowerCase() + "-" + ii
                return (
                  <Field key={item} orientation="horizontal">
                    <Checkbox id={id} defaultChecked={ii !== 2} />
                    <FieldLabel htmlFor={id} className="font-normal">
                      {item}
                    </FieldLabel>
                  </Field>
                )
              })}
            </FieldGroup>
          </FieldSet>
        </React.Fragment>
      ))}
    </FieldGroup>
  )
}`,
  },
  {
    name: "ShippingAddressFields",
    description: "Checkout shipping address with a two-column grid, native country select, and postal code.",
    code: `
export default function ShippingAddressFields() {
  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend>Shipping address</FieldLegend>
      <FieldGroup className="gap-4">
        <div className="grid grid-cols-2 gap-3">
          <Field>
            <FieldLabel htmlFor="ship-first">First name</FieldLabel>
            <Input id="ship-first" autoComplete="given-name" defaultValue="Leah" />
          </Field>
          <Field>
            <FieldLabel htmlFor="ship-last">Last name</FieldLabel>
            <Input id="ship-last" autoComplete="family-name" defaultValue="Okonkwo" />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="ship-street">Street address</FieldLabel>
          <Input id="ship-street" autoComplete="street-address" placeholder="221 Willow Lane, Apt 4" />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field>
            <FieldLabel htmlFor="ship-country">Country</FieldLabel>
            <NativeSelect id="ship-country" defaultValue="ca">
              <NativeSelectOption value="ca">Canada</NativeSelectOption>
              <NativeSelectOption value="us">United States</NativeSelectOption>
              <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
              <NativeSelectOption value="ie">Ireland</NativeSelectOption>
            </NativeSelect>
          </Field>
          <Field>
            <FieldLabel htmlFor="ship-postal">Postal code</FieldLabel>
            <Input id="ship-postal" autoComplete="postal-code" placeholder="M5V 2T6" />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  )
}`,
  },
  {
    name: "PriceRangeField",
    description: "Two-thumb price range slider paired with read-only min and max inputs for a product filter.",
    code: `
export default function PriceRangeField() {
  const [range, setRange] = React.useState([40, 260])

  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">Price range</FieldLegend>
      <Slider value={range} onValueChange={(v) => setRange(v as number[])} min={0} max={500} step={10} aria-label="Price range" />
      <div className="grid grid-cols-2 gap-3">
        <Field>
          <FieldLabel htmlFor="price-min" className="text-muted-foreground">
            Min
          </FieldLabel>
          <InputGroup>
            <InputGroupAddon>$</InputGroupAddon>
            <InputGroupInput id="price-min" readOnly value={range[0]} />
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="price-max" className="text-muted-foreground">
            Max
          </FieldLabel>
          <InputGroup>
            <InputGroupAddon>$</InputGroupAddon>
            <InputGroupInput id="price-max" readOnly value={range[1]} />
          </InputGroup>
        </Field>
      </div>
    </FieldSet>
  )
}`,
  },
  {
    name: "VerificationCodeField",
    description: "One-time code field with grouped OTP slots, a description, and a resend countdown.",
    code: `
export default function VerificationCodeField() {
  const [seconds, setSeconds] = React.useState(24)

  React.useEffect(() => {
    if (seconds <= 0) return
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(t)
  }, [seconds])

  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="otp-code">Verification code</FieldLabel>
      <FieldDescription>We sent a 6-digit code to +1 ••• ••• 4821.</FieldDescription>
      <InputOTP id="otp-code" maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Button variant="link" size="xs" className="w-fit px-0" disabled={seconds > 0} onClick={() => setSeconds(30)}>
        {seconds > 0 ? "Resend code in " + seconds + "s" : "Resend code"}
      </Button>
    </Field>
  )
}`,
  },
  {
    name: "FileDropzoneField",
    description: "Upload field styled as a dashed dropzone that lists the chosen file name and size.",
    code: `
export default function FileDropzoneField() {
  const [file, setFile] = React.useState<{ name: string; size: number } | null>(null)

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="upload-receipt">Receipt</FieldLabel>
      <label
        htmlFor="upload-receipt"
        className="flex cursor-pointer flex-col items-center gap-2 border border-dashed p-6 text-center hover:bg-muted/50"
      >
        <UploadCloudIcon className="size-6 text-muted-foreground" />
        <span className="text-xs font-medium">{file ? file.name : "Click to upload or drag a file here"}</span>
        <span className="text-xs text-muted-foreground">
          {file ? (file.size / 1024).toFixed(1) + " KB" : "PDF, PNG or JPG up to 10 MB"}
        </span>
      </label>
      <input
        id="upload-receipt"
        type="file"
        accept=".pdf,.png,.jpg"
        className="sr-only"
        onChange={(e) => {
          const f = e.target.files?.[0]
          setFile(f ? { name: f.name, size: f.size } : null)
        }}
      />
      <FieldDescription>Attach the receipt for expenses over $75.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "SkillTagsField",
    description: "Tag entry field where pressing Enter adds removable badges, with a maximum count.",
    code: `
export default function SkillTagsField() {
  const [tags, setTags] = React.useState(["Figma", "Prototyping", "User research"])
  const [draft, setDraft] = React.useState("")
  const full = tags.length >= 5

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="skill-input">Skills</FieldLabel>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="gap-1 pe-1">
            {tag}
            <button type="button" aria-label={"Remove " + tag} onClick={() => setTags(tags.filter((t) => t !== tag))}>
              <XIcon />
            </button>
          </Badge>
        ))}
      </div>
      <Input
        id="skill-input"
        value={draft}
        disabled={full}
        placeholder={full ? "Maximum reached" : "Type a skill and press Enter"}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && draft.trim()) {
            e.preventDefault()
            if (!tags.includes(draft.trim())) setTags([...tags, draft.trim()])
            setDraft("")
          }
        }}
      />
      <FieldDescription>{tags.length}/5 skills added.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "DisabledLockedField",
    description: "Disabled field with explanation of why it is locked and a link to request changes.",
    code: `
export default function DisabledLockedField() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <Field data-disabled="true">
        <FieldLabel htmlFor="locked-domain">
          <LockIcon className="size-3.5" />
          Workspace domain
        </FieldLabel>
        <Input id="locked-domain" defaultValue="northwind.fieldnote.app" disabled />
        <FieldDescription>
          Domains are managed by your organization admin. <a href="#">Request a change</a>
        </FieldDescription>
      </Field>
    </FieldGroup>
  )
}`,
  },
  {
    name: "ReadOnlyApiKeyField",
    description: "Read-only API key field with masked value and inline reveal and copy buttons.",
    code: `
export default function ReadOnlyApiKeyField() {
  const [show, setShow] = React.useState(false)
  const [copied, setCopied] = React.useState(false)
  const key = "pub_demo_93mV"

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="api-key">Publishable key</FieldLabel>
      <InputGroup>
        <InputGroupInput id="api-key" readOnly value={show ? key : "pub_demo_••••••••••••••"} className="font-mono" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label={show ? "Hide key" : "Show key"} onClick={() => setShow(!show)}>
            {show ? <EyeOffIcon /> : <EyeIcon />}
          </InputGroupButton>
          <InputGroupButton size="icon-xs" aria-label="Copy key" onClick={() => setCopied(true)}>
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
    name: "CharacterLimitTextarea",
    description: "Textarea with a live character counter that flips the field into an error state past the limit.",
    code: `
const LIMIT = 140

export default function CharacterLimitTextarea() {
  const [text, setText] = React.useState("Shipping a calmer, faster dashboard this week. Huge thanks to everyone who tested the beta!")
  const over = text.length > LIMIT

  return (
    <Field data-invalid={over} className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor="status-update">Status update</FieldLabel>
        <span className={cn("text-xs tabular-nums", over ? "text-destructive" : "text-muted-foreground")}>
          {text.length}/{LIMIT}
        </span>
      </div>
      <Textarea id="status-update" rows={3} value={text} aria-invalid={over} onChange={(e) => setText(e.target.value)} className="resize-none" />
      {over ? (
        <FieldError>Trim {text.length - LIMIT} characters to post.</FieldError>
      ) : (
        <FieldDescription>Posted to your team&apos;s activity feed.</FieldDescription>
      )}
    </Field>
  )
}`,
  },
  {
    name: "DateOfBirthFieldSet",
    description: "Date of birth fieldset with label-style legend and three native selects for day, month, and year.",
    code: `
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default function DateOfBirthFieldSet() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Date of birth</FieldLegend>
      <div className="grid grid-cols-[1fr_2fr_1.4fr] gap-2">
        <Field>
          <FieldLabel htmlFor="dob-day" className="sr-only">
            Day
          </FieldLabel>
          <NativeSelect id="dob-day" defaultValue="14">
            {Array.from({ length: 31 }, (_, i) => (
              <NativeSelectOption key={i} value={String(i + 1)}>
                {i + 1}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </Field>
        <Field>
          <FieldLabel htmlFor="dob-month" className="sr-only">
            Month
          </FieldLabel>
          <NativeSelect id="dob-month" defaultValue="March">
            {months.map((m) => (
              <NativeSelectOption key={m} value={m}>
                {m}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </Field>
        <Field>
          <FieldLabel htmlFor="dob-year" className="sr-only">
            Year
          </FieldLabel>
          <NativeSelect id="dob-year" defaultValue="1994">
            {Array.from({ length: 60 }, (_, i) => 2008 - i).map((y) => (
              <NativeSelectOption key={y} value={String(y)}>
                {y}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </Field>
      </div>
      <FieldDescription>You must be at least 18 to open an account.</FieldDescription>
    </FieldSet>
  )
}`,
  },
  {
    name: "SignInWithSeparator",
    description: "Sign-in form using a labeled field separator between social login and email fields.",
    code: `
export default function SignInWithSeparator() {
  return (
    <form className="w-full max-w-xs">
      <FieldGroup>
        <Field>
          <Button variant="outline" type="button">
            <KeyRoundIcon data-icon="inline-start" />
            Continue with passkey
          </Button>
        </Field>
        <FieldSeparator>Or continue with email</FieldSeparator>
        <Field>
          <FieldLabel htmlFor="signin-email">Email</FieldLabel>
          <Input id="signin-email" type="email" placeholder="you@studio.com" />
        </Field>
        <Field>
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="signin-password">Password</FieldLabel>
            <a href="#" className="text-xs text-muted-foreground underline-offset-4 hover:underline">
              Forgot?
            </a>
          </div>
          <Input id="signin-password" type="password" />
        </Field>
        <Field>
          <Button type="submit">Sign in</Button>
          <FieldDescription className="text-center">
            No account? <a href="#">Create one</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}`,
  },
  {
    name: "PhoneNumberField",
    description: "Phone number field combining a country code native select with a number input.",
    code: `
const codes = [
  { value: "+1", label: "🇺🇸 +1" },
  { value: "+44", label: "🇬🇧 +44" },
  { value: "+49", label: "🇩🇪 +49" },
  { value: "+61", label: "🇦🇺 +61" },
]

export default function PhoneNumberField() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="phone-number">Mobile number</FieldLabel>
      <div className="flex gap-2">
        <NativeSelect aria-label="Country code" defaultValue="+44" className="w-24">
          {codes.map((c) => (
            <NativeSelectOption key={c.value} value={c.value}>
              {c.label}
            </NativeSelectOption>
          ))}
        </NativeSelect>
        <Input id="phone-number" type="tel" inputMode="tel" placeholder="7700 900123" className="flex-1" />
      </div>
      <FieldDescription>Used for two-factor sign-in only.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "MultipleErrorsField",
    description: "Field rendering several validation errors from an errors array as a bulleted list.",
    code: `
const errors = [
  { message: "Username must be at least 4 characters." },
  { message: "Only lowercase letters, numbers, and dashes are allowed." },
  { message: "Username must be at least 4 characters." },
]

export default function MultipleErrorsField() {
  return (
    <Field data-invalid="true" className="w-full max-w-xs">
      <FieldLabel htmlFor="handle-errors">Handle</FieldLabel>
      <Input id="handle-errors" defaultValue="J_" aria-invalid="true" />
      <FieldError errors={errors} />
    </Field>
  )
}`,
  },
  {
    name: "ValidateOnSubmitForm",
    description: "Contact form that validates required fields on submit and shows per-field errors.",
    code: `
export default function ValidateOnSubmitForm() {
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [sent, setSent] = React.useState(false)

  return (
    <form
      onSubmit={(e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const next: Record<string, string> = {}
    if (!String(data.get("name")).trim()) next.name = "Please tell us your name."
    if (!/^\\S+@\\S+\\.\\S+$/.test(String(data.get("email")))) next.email = "Enter a valid email."
    if (String(data.get("message")).trim().length < 10) next.message = "Message needs at least 10 characters."
    setErrors(next)
    setSent(Object.keys(next).length === 0)
      }} noValidate className="w-full max-w-sm">
      <FieldGroup>
        <Field data-invalid={!!errors.name}>
          <FieldLabel htmlFor="contact-name">Name</FieldLabel>
          <Input id="contact-name" name="name" aria-invalid={!!errors.name} />
          <FieldError>{errors.name}</FieldError>
        </Field>
        <Field data-invalid={!!errors.email}>
          <FieldLabel htmlFor="contact-email">Email</FieldLabel>
          <Input id="contact-email" name="email" type="email" aria-invalid={!!errors.email} />
          <FieldError>{errors.email}</FieldError>
        </Field>
        <Field data-invalid={!!errors.message}>
          <FieldLabel htmlFor="contact-message">Message</FieldLabel>
          <Textarea id="contact-message" name="message" rows={3} aria-invalid={!!errors.message} className="resize-none" />
          <FieldError>{errors.message}</FieldError>
        </Field>
        <Field orientation="horizontal">
          <Button type="submit">Send message</Button>
          {sent && <span className="text-xs text-emerald-600">Thanks! We&apos;ll reply within a day.</span>}
        </Field>
      </FieldGroup>
    </form>
  )
}`,
  },
  {
    name: "NpsScoreField",
    description: "Net promoter score question using a toggle group of 0–10 with anchor labels.",
    code: `
export default function NpsScoreField() {
  const [score, setScore] = React.useState<string[]>([])

  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend variant="label">How likely are you to recommend Fieldnote to a friend?</FieldLegend>
      <ToggleGroup
        variant="outline"
        size="sm"
        value={score}
        onValueChange={(v) => setScore(v as string[])}
        className="w-full"
        aria-label="Score from 0 to 10"
      >
        {Array.from({ length: 11 }, (_, i) => (
          <ToggleGroupItem key={i} value={String(i)} className="flex-1 px-0">
            {i}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Not likely</span>
        <span>Extremely likely</span>
      </div>
      {score[0] && <FieldDescription>Thanks — you picked {score[0]}.</FieldDescription>}
    </FieldSet>
  )
}`,
  },
  {
    name: "PrivacySwitchesWithLocked",
    description: "Cookie consent switches where the essential category is checked and disabled.",
    code: `
const categories = [
  { id: "essential", title: "Essential", hint: "Required for sign-in and security.", locked: true },
  { id: "analytics", title: "Analytics", hint: "Help us understand how the app is used.", locked: false },
  { id: "marketing", title: "Marketing", hint: "Personalized offers on partner sites.", locked: false },
]

export default function PrivacySwitchesWithLocked() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Cookie preferences</FieldLegend>
      <FieldGroup className="gap-4">
        {categories.map((c) => (
          <Field key={c.id} orientation="horizontal" data-disabled={c.locked}>
            <FieldContent>
              <FieldLabel htmlFor={"cookie-" + c.id}>
                {c.title}
                {c.locked && <Badge variant="outline">Always on</Badge>}
              </FieldLabel>
              <FieldDescription>{c.hint}</FieldDescription>
            </FieldContent>
            <Switch id={"cookie-" + c.id} defaultChecked={c.locked} disabled={c.locked} />
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  )
}`,
  },
  {
    name: "TransferAmountField",
    description: "Money transfer amount with currency prefix and suffix plus a computed fee description.",
    code: `
export default function TransferAmountField() {
  const [amount, setAmount] = React.useState("250")
  const value = Number(amount) || 0
  const fee = Math.max(0.5, value * 0.004)

  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="transfer-amount">You send</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>€</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          id="transfer-amount"
          inputMode="decimal"
          value={amount}
          onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
          className="text-base font-semibold tabular-nums"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupText>EUR</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>
        Fee €{fee.toFixed(2)} · Recipient gets €{Math.max(0, value - fee).toFixed(2)}
      </FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "TeamInviteRows",
    description: "Dynamic invite form with email and role per row, add another, and remove row buttons.",
    code: `
export default function TeamInviteRows() {
  const [rows, setRows] = React.useState([{ id: 1 }, { id: 2 }])

  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend>Invite teammates</FieldLegend>
      <FieldDescription>They&apos;ll get an email with a link to join Orbit Analytics.</FieldDescription>
      <FieldGroup className="gap-2">
        {rows.map((row, index) => (
          <Field key={row.id} orientation="horizontal">
            <FieldLabel htmlFor={"invite-" + row.id} className="sr-only">
              Email {index + 1}
            </FieldLabel>
            <Input id={"invite-" + row.id} type="email" placeholder="name@company.com" className="flex-1" />
            <NativeSelect aria-label={"Role " + (index + 1)} defaultValue="member" className="w-28">
              <NativeSelectOption value="admin">Admin</NativeSelectOption>
              <NativeSelectOption value="member">Member</NativeSelectOption>
              <NativeSelectOption value="viewer">Viewer</NativeSelectOption>
            </NativeSelect>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label="Remove row"
              disabled={rows.length === 1}
              onClick={() => setRows(rows.filter((r) => r.id !== row.id))}
            >
              <XIcon />
            </Button>
          </Field>
        ))}
      </FieldGroup>
      <Field orientation="horizontal">
        <Button type="button" variant="outline" size="sm" onClick={() => setRows([...rows, { id: Date.now() }])}>
          <PlusIcon data-icon="inline-start" />
          Add another
        </Button>
        <Button type="submit" size="sm">
          Send invites
        </Button>
      </Field>
    </FieldSet>
  )
}`,
  },
  {
    name: "TermsAgreementField",
    description: "Terms checkbox with linked policies that shows an error when submitted unchecked.",
    code: `
export default function TermsAgreementField() {
  const [agreed, setAgreed] = React.useState(false)
  const [tried, setTried] = React.useState(false)
  const invalid = tried && !agreed

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        setTried(true)
      }}
    >
      <Field orientation="horizontal" data-invalid={invalid}>
        <Checkbox id="terms-agree" checked={agreed} aria-invalid={invalid} onCheckedChange={setAgreed} />
        <FieldContent>
          <FieldLabel htmlFor="terms-agree">I agree to the terms</FieldLabel>
          <FieldDescription>
            By creating an account you accept our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </FieldDescription>
          {invalid && <FieldError>You need to accept the terms to continue.</FieldError>}
        </FieldContent>
      </Field>
      <Button type="submit">{tried && agreed ? "Account created" : "Create account"}</Button>
    </form>
  )
}`,
  },
  {
    name: "ThemePreviewChoiceCards",
    description: "Appearance picker with radio cards that include miniature theme previews.",
    code: `
const themes = [
  { value: "light", label: "Light", bg: "bg-white", bar: "bg-zinc-200", line: "bg-zinc-300" },
  { value: "dark", label: "Dark", bg: "bg-zinc-900", bar: "bg-zinc-700", line: "bg-zinc-600" },
  { value: "system", label: "System", bg: "bg-gradient-to-r from-white to-zinc-900", bar: "bg-zinc-400", line: "bg-zinc-500" },
]

export default function ThemePreviewChoiceCards() {
  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend>Appearance</FieldLegend>
      <FieldDescription>Choose how the interface looks on this device.</FieldDescription>
      <RadioGroup defaultValue="system" className="grid grid-cols-3 gap-2">
        {themes.map((t) => (
          <FieldLabel key={t.value} htmlFor={"theme-" + t.value}>
            <Field className="gap-2">
              <div className={cn("flex h-14 flex-col gap-1 border p-1.5", t.bg)}>
                <span className={cn("h-1.5 w-2/3", t.bar)} />
                <span className={cn("h-1 w-full", t.line)} />
                <span className={cn("h-1 w-4/5", t.line)} />
              </div>
              <div className="flex items-center justify-between">
                <FieldTitle>{t.label}</FieldTitle>
                <RadioGroupItem value={t.value} id={"theme-" + t.value} />
              </div>
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}`,
  },
  {
    name: "QuantityStepperField",
    description: "Ticket quantity field with decrement and increment buttons and min/max bounds.",
    code: `
export default function QuantityStepperField() {
  const [qty, setQty] = React.useState(2)
  const max = 6

  return (
    <Field orientation="horizontal" className="w-full max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="ticket-qty">General admission</FieldLabel>
        <FieldDescription>$45 each · Max {max} per order</FieldDescription>
      </FieldContent>
      <ButtonGroup>
        <Button variant="outline" size="icon-sm" aria-label="Decrease" disabled={qty <= 0} onClick={() => setQty(qty - 1)}>
          <MinusIcon />
        </Button>
        <Input
          id="ticket-qty"
          inputMode="numeric"
          value={qty}
          onChange={(e) => setQty(Math.min(max, Math.max(0, Number(e.target.value) || 0)))}
          className="h-7 w-10 text-center tabular-nums"
        />
        <Button variant="outline" size="icon-sm" aria-label="Increase" disabled={qty >= max} onClick={() => setQty(qty + 1)}>
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </Field>
  )
}`,
  },
  {
    name: "BrandColorField",
    description: "Brand color field syncing a native color swatch input with a hex text input.",
    code: `
export default function BrandColorField() {
  const [color, setColor] = React.useState("#6d28d9")
  const valid = /^#[0-9a-fA-F]{6}$/.test(color)

  return (
    <Field data-invalid={!valid} className="w-full max-w-xs">
      <FieldLabel htmlFor="brand-hex">Brand color</FieldLabel>
      <div className="flex gap-2">
        <input
          type="color"
          aria-label="Pick brand color"
          value={valid ? color : "#000000"}
          onChange={(e) => setColor(e.target.value)}
          className="h-8 w-10 cursor-pointer border bg-transparent p-0.5"
        />
        <Input id="brand-hex" value={color} aria-invalid={!valid} onChange={(e) => setColor(e.target.value)} className="font-mono uppercase" />
      </div>
      {valid ? (
        <FieldDescription>Used for buttons, links, and email headers.</FieldDescription>
      ) : (
        <FieldError>Use a 6-digit hex value like #1A2B3C.</FieldError>
      )}
    </Field>
  )
}`,
  },
  {
    name: "MeetingTimeRangeFields",
    description: "Start and end time inputs that validate the end time comes after the start.",
    code: `
export default function MeetingTimeRangeFields() {
  const [start, setStart] = React.useState("10:00")
  const [end, setEnd] = React.useState("09:30")
  const invalid = end <= start

  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">Meeting time</FieldLegend>
      <div className="grid grid-cols-2 gap-3">
        <Field>
          <FieldLabel htmlFor="meet-start">Starts</FieldLabel>
          <Input id="meet-start" type="time" value={start} onChange={(e) => setStart(e.target.value)} />
        </Field>
        <Field data-invalid={invalid}>
          <FieldLabel htmlFor="meet-end">Ends</FieldLabel>
          <Input id="meet-end" type="time" value={end} aria-invalid={invalid} onChange={(e) => setEnd(e.target.value)} />
        </Field>
      </div>
      {invalid ? <FieldError>End time must be after the start time.</FieldError> : <FieldDescription>All times in Berlin (CET).</FieldDescription>}
    </FieldSet>
  )
}`,
  },
  {
    name: "WebhookEventsSelectAll",
    description: "Webhook event checklist with a select-all checkbox that shows an indeterminate state.",
    code: `
const events = ["invoice.paid", "invoice.failed", "customer.created", "subscription.canceled"]

export default function WebhookEventsSelectAll() {
  const [selected, setSelected] = React.useState(["invoice.paid", "invoice.failed"])
  const all = selected.length === events.length
  const some = selected.length > 0 && !all

  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">Events to send</FieldLegend>
      <Field orientation="horizontal">
        <Checkbox id="events-all" checked={all} indeterminate={some} onCheckedChange={(checked) => setSelected(checked ? events : [])} />
        <FieldLabel htmlFor="events-all">Select all events</FieldLabel>
      </Field>
      <FieldGroup data-slot="checkbox-group" className="border-s ps-4">
        {events.map((ev) => (
          <Field key={ev} orientation="horizontal">
            <Checkbox
              id={"ev-" + ev}
              checked={selected.includes(ev)}
              onCheckedChange={(checked) => setSelected((prev) => (checked ? [...prev, ev] : prev.filter((x) => x !== ev)))}
            />
            <FieldLabel htmlFor={"ev-" + ev} className="font-mono font-normal">
              {ev}
            </FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  )
}`,
  },
  {
    name: "AutoSlugField",
    description: "Article title field that auto-generates a URL slug until the slug is edited manually.",
    code: `
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

export default function AutoSlugField() {
  const [title, setTitle] = React.useState("Designing for slow networks")
  const [slug, setSlug] = React.useState<string | null>(null)
  const value = slug ?? slugify(title)

  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="post-title">Title</FieldLabel>
        <Input id="post-title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Field>
      <Field>
        <FieldLabel htmlFor="post-slug">URL slug</FieldLabel>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>/blog/</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput id="post-slug" value={value} onChange={(e) => setSlug(slugify(e.target.value))} />
          {slug !== null && (
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs" aria-label="Reset slug" onClick={() => setSlug(null)}>
                <RotateCcwIcon />
              </InputGroupButton>
            </InputGroupAddon>
          )}
        </InputGroup>
        <FieldDescription>{slug === null ? "Generated from the title." : "Custom slug. Reset to follow the title."}</FieldDescription>
      </Field>
    </FieldGroup>
  )
}`,
  },
  {
    name: "CouponCodeField",
    description: "Promo code field with an apply button that shows success or error feedback.",
    code: `
export default function CouponCodeField() {
  const [code, setCode] = React.useState("")
  const [result, setResult] = React.useState<"idle" | "ok" | "bad">("idle")

  return (
    <Field data-invalid={result === "bad"} className="w-full max-w-xs">
      <FieldLabel htmlFor="promo-code">Promo code</FieldLabel>
      <div className="flex gap-2">
        <Input
          id="promo-code"
          value={code}
          placeholder="SPRING25"
          aria-invalid={result === "bad"}
          onChange={(e) => {
            setCode(e.target.value.toUpperCase())
            setResult("idle")
          }}
          className="font-mono"
        />
        <Button variant="outline" disabled={!code} onClick={() => setResult(code === "SPRING25" ? "ok" : "bad")}>
          Apply
        </Button>
      </div>
      {result === "ok" && (
        <FieldDescription className="flex items-center gap-1 text-emerald-600">
          <BadgePercentIcon className="size-3.5" />
          25% off applied to your order.
        </FieldDescription>
      )}
      {result === "bad" && <FieldError>That code is invalid or has expired.</FieldError>}
      {result === "idle" && <FieldDescription>Try SPRING25.</FieldDescription>}
    </Field>
  )
}`,
  },
  {
    name: "StorageTierSlider",
    description: "Storage plan field with a stepped slider, tick labels, and price that updates per tier.",
    code: `
const tiers = [
  { gb: 50, price: 0 },
  { gb: 200, price: 3 },
  { gb: 1000, price: 9 },
  { gb: 2000, price: 15 },
]

export default function StorageTierSlider() {
  const [index, setIndex] = React.useState([1])
  const tier = tiers[index[0]!]!

  return (
    <Field className="w-full max-w-sm">
      <div className="flex items-baseline justify-between">
        <FieldLabel htmlFor="storage-tier">Cloud storage</FieldLabel>
        <span className="text-sm font-semibold">{tier.price ? "$" + tier.price + "/mo" : "Free"}</span>
      </div>
      <Slider id="storage-tier" value={index} onValueChange={(v) => setIndex(v as number[])} min={0} max={3} step={1} />
      <div className="flex justify-between text-xs text-muted-foreground">
        {tiers.map((t, i) => (
          <span key={t.gb} className={cn(i === index[0] && "font-medium text-foreground")}>
            {t.gb >= 1000 ? t.gb / 1000 + " TB" : t.gb + " GB"}
          </span>
        ))}
      </div>
    </Field>
  )
}`,
  },
  {
    name: "RecurringScheduleFieldSet",
    description: "Recurrence settings with a frequency select and weekday toggle group shown for weekly schedules.",
    code: `
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export default function RecurringScheduleFieldSet() {
  const [freq, setFreq] = React.useState("weekly")
  const [picked, setPicked] = React.useState<string[]>(["Mon", "Wed", "Fri"])

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Repeat</FieldLegend>
      <FieldGroup className="gap-4">
        <Field>
          <FieldLabel htmlFor="repeat-freq">Frequency</FieldLabel>
          <NativeSelect id="repeat-freq" value={freq} onChange={(e) => setFreq(e.target.value)}>
            <NativeSelectOption value="daily">Every day</NativeSelectOption>
            <NativeSelectOption value="weekly">Every week</NativeSelectOption>
            <NativeSelectOption value="monthly">Every month</NativeSelectOption>
          </NativeSelect>
        </Field>
        {freq === "weekly" && (
          <Field>
            <FieldLabel>On these days</FieldLabel>
            <ToggleGroup multiple variant="outline" size="sm" value={picked} onValueChange={(v) => setPicked(v as string[])}>
              {days.map((d) => (
                <ToggleGroupItem key={d} value={d} aria-label={d} className="w-9">
                  {d.slice(0, 2)}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
            <FieldDescription>{picked.length ? "Repeats on " + picked.join(", ") : "Pick at least one day."}</FieldDescription>
          </Field>
        )}
      </FieldGroup>
    </FieldSet>
  )
}`,
  },
  {
    name: "InlineLabelColumnForm",
    description: "Dense admin form with horizontal fields and fixed-width labels aligned in a column.",
    code: `
export default function InlineLabelColumnForm() {
  return (
    <FieldGroup className="w-full max-w-md gap-3">
      <Field orientation="horizontal">
        <FieldLabel htmlFor="sku-code" className="w-24 flex-none text-muted-foreground">
          SKU
        </FieldLabel>
        <Input id="sku-code" defaultValue="TEE-ORG-M-BLK" className="font-mono" />
      </Field>
      <Field orientation="horizontal">
        <FieldLabel htmlFor="sku-stock" className="w-24 flex-none text-muted-foreground">
          Stock
        </FieldLabel>
        <Input id="sku-stock" type="number" defaultValue={128} />
      </Field>
      <Field orientation="horizontal">
        <FieldLabel htmlFor="sku-weight" className="w-24 flex-none text-muted-foreground">
          Weight
        </FieldLabel>
        <InputGroup>
          <InputGroupInput id="sku-weight" defaultValue="0.24" />
          <InputGroupAddon align="inline-end">kg</InputGroupAddon>
        </InputGroup>
      </Field>
      <Field orientation="horizontal">
        <FieldLabel htmlFor="sku-active" className="w-24 flex-none text-muted-foreground">
          Visible
        </FieldLabel>
        <Switch id="sku-active" defaultChecked />
      </Field>
    </FieldGroup>
  )
}`,
  },
  {
    name: "RequiredAndOptionalLabels",
    description: "Form labels that mark required fields with an asterisk and optional ones with muted text.",
    code: `
export default function RequiredAndOptionalLabels() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <Field>
        <FieldLabel htmlFor="ro-company">
          Company <span className="text-destructive" aria-hidden="true">*</span>
        </FieldLabel>
        <Input id="ro-company" required aria-required="true" placeholder="Kestrel Labs" />
      </Field>
      <Field>
        <FieldLabel htmlFor="ro-team-size">
          Team size <span className="text-destructive" aria-hidden="true">*</span>
        </FieldLabel>
        <NativeSelect id="ro-team-size" required defaultValue="">
          <NativeSelectOption value="" disabled>
            Select a range
          </NativeSelectOption>
          <NativeSelectOption value="1-10">1–10</NativeSelectOption>
          <NativeSelectOption value="11-50">11–50</NativeSelectOption>
          <NativeSelectOption value="51+">51+</NativeSelectOption>
        </NativeSelect>
      </Field>
      <Field>
        <FieldLabel htmlFor="ro-referral">
          How did you hear about us? <span className="font-normal text-muted-foreground">(optional)</span>
        </FieldLabel>
        <Input id="ro-referral" placeholder="Podcast, friend, search..." />
      </Field>
      <FieldDescription>
        <span className="text-destructive">*</span> Required fields
      </FieldDescription>
    </FieldGroup>
  )
}`,
  },
  {
    name: "JobApplicationSections",
    description: "Multi-section job application separated by field separators with contact, role, and links.",
    code: `
export default function JobApplicationSections() {
  return (
    <form className="w-full max-w-md">
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Contact</FieldLegend>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="job-name">Full name</FieldLabel>
              <Input id="job-name" placeholder="Rafael Ortiz" />
            </Field>
            <Field>
              <FieldLabel htmlFor="job-email">Email</FieldLabel>
              <Input id="job-email" type="email" placeholder="rafael@mail.com" />
            </Field>
          </div>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLegend>Role</FieldLegend>
          <Field>
            <FieldLabel htmlFor="job-role">Position</FieldLabel>
            <NativeSelect id="job-role" defaultValue="fe">
              <NativeSelectOption value="fe">Frontend Engineer</NativeSelectOption>
              <NativeSelectOption value="pd">Product Designer</NativeSelectOption>
              <NativeSelectOption value="pm">Product Manager</NativeSelectOption>
            </NativeSelect>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="job-remote" defaultChecked />
            <FieldLabel htmlFor="job-remote" className="font-normal">
              Open to fully remote
            </FieldLabel>
          </Field>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLegend>Links</FieldLegend>
          <Field>
            <FieldLabel htmlFor="job-portfolio">Portfolio</FieldLabel>
            <Input id="job-portfolio" type="url" placeholder="https://" />
            <FieldDescription>A site, case study, or repository.</FieldDescription>
          </Field>
        </FieldSet>
        <Button type="submit" className="w-fit">
          Submit application
        </Button>
      </FieldGroup>
    </form>
  )
}`,
  },
  {
    name: "ProfileVisibilityRadio",
    description: "Visibility radio choice cards with icons for public, team-only, and private profiles.",
    code: `
const options = [
  { value: "public", title: "Public", hint: "Anyone on the internet can see your profile.", icon: GlobeIcon },
  { value: "team", title: "Team only", hint: "Only members of your workspaces.", icon: UsersIcon },
  { value: "private", title: "Private", hint: "Only you. Your name still shows on comments.", icon: LockIcon },
]

export default function ProfileVisibilityRadio() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Profile visibility</FieldLegend>
      <RadioGroup defaultValue="team" className="gap-2">
        {options.map((o) => (
          <FieldLabel key={o.value} htmlFor={"vis-" + o.value}>
            <Field orientation="horizontal">
              <o.icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <FieldContent>
                <FieldTitle>{o.title}</FieldTitle>
                <FieldDescription>{o.hint}</FieldDescription>
              </FieldContent>
              <RadioGroupItem value={o.value} id={"vis-" + o.value} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}`,
  },
  {
    name: "TwoFactorMethodField",
    description: "Two-factor setup where the selected method reveals the matching follow-up field.",
    code: `
export default function TwoFactorMethodField() {
  const [method, setMethod] = React.useState("app")

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Two-factor authentication</FieldLegend>
      <FieldDescription>Add a second step when signing in.</FieldDescription>
      <RadioGroup value={method} onValueChange={(v) => setMethod(v as string)}>
        <Field orientation="horizontal">
          <RadioGroupItem value="app" id="tfa-app" />
          <FieldLabel htmlFor="tfa-app" className="font-normal">
            <SmartphoneIcon className="size-3.5" />
            Authenticator app
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="sms" id="tfa-sms" />
          <FieldLabel htmlFor="tfa-sms" className="font-normal">
            <MessageSquareIcon className="size-3.5" />
            Text message
          </FieldLabel>
        </Field>
      </RadioGroup>
      {method === "app" ? (
        <Field>
          <FieldLabel htmlFor="tfa-code">Enter the 6-digit code from your app</FieldLabel>
          <Input id="tfa-code" inputMode="numeric" maxLength={6} placeholder="000000" className="w-32 font-mono tracking-widest" />
        </Field>
      ) : (
        <Field>
          <FieldLabel htmlFor="tfa-phone">Phone number</FieldLabel>
          <Input id="tfa-phone" type="tel" placeholder="+1 555 010 2030" />
          <FieldDescription>Standard message rates may apply.</FieldDescription>
        </Field>
      )}
    </FieldSet>
  )
}`,
  },
  {
    name: "LoadingSubmitFields",
    description: "Newsletter signup that disables its fields and shows a spinner while submitting.",
    code: `
export default function LoadingSubmitFields() {
  const [state, setState] = React.useState<"idle" | "loading" | "done">("idle")

  return (
    <form
      className="w-full max-w-sm"
      onSubmit={(e) => {
        e.preventDefault()
        setState("loading")
        setTimeout(() => setState("done"), 1500)
      }}
    >
      <FieldSet disabled={state !== "idle"}>
        <FieldLegend>Get the monthly field notes</FieldLegend>
        <FieldDescription>Design essays and product updates. No spam.</FieldDescription>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="news-email" className="sr-only">
            Email
          </FieldLabel>
          <Input id="news-email" type="email" required placeholder="you@example.com" />
          <Button type="submit" className="w-28">
            {state === "loading" && <Spinner data-icon="inline-start" />}
            {state === "done" ? "Subscribed" : state === "loading" ? "Joining" : "Subscribe"}
          </Button>
        </Field>
      </FieldSet>
    </form>
  )
}`,
  },
  {
    name: "DeleteAccountConfirmField",
    description: "Danger zone field requiring the user to type the workspace name before deleting.",
    code: `
const NAME = "orbit-analytics"

export default function DeleteAccountConfirmField() {
  const [value, setValue] = React.useState("")

  return (
    <div className="w-full max-w-sm border border-destructive/40 p-4">
      <FieldSet>
        <FieldLegend className="text-destructive">Delete workspace</FieldLegend>
        <FieldDescription>This permanently removes all projects, files, and billing history.</FieldDescription>
        <Field>
          <FieldLabel htmlFor="confirm-delete" className="font-normal">
            Type <code className="bg-muted px-1 font-mono">{NAME}</code> to confirm
          </FieldLabel>
          <Input id="confirm-delete" value={value} onChange={(e) => setValue(e.target.value)} autoComplete="off" />
        </Field>
        <Button variant="destructive" disabled={value !== NAME} className="w-fit">
          <Trash2Icon data-icon="inline-start" />
          Delete forever
        </Button>
      </FieldSet>
    </div>
  )
}`,
  },
  {
    name: "AiPromptTextareaField",
    description: "Prompt field built with an input group textarea and a block-end toolbar for tone and send.",
    code: `
export default function AiPromptTextareaField() {
  return (
    <Field className="w-full max-w-md">
      <FieldLabel htmlFor="ai-prompt">Describe the email you want to write</FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          id="ai-prompt"
          rows={3}
          placeholder="Follow up with Dana about the Q3 proposal and ask for a call next week..."
        />
        <InputGroupAddon align="block-end" className="justify-between border-t">
          <InputGroupText>
            <SparklesIcon />
            Tone: Friendly
          </InputGroupText>
          <InputGroupButton variant="default" size="icon-xs" aria-label="Generate">
            <ArrowUpIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Drafts are private until you send them.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "AccessibilityPreferencesFields",
    description: "Accessibility settings mixing a font size slider, a reduced motion switch, and a contrast radio.",
    code: `
export default function AccessibilityPreferencesFields() {
  const [size, setSize] = React.useState([16])

  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <div className="flex items-center justify-between">
          <FieldLabel htmlFor="a11y-size">Text size</FieldLabel>
          <span className="text-xs tabular-nums text-muted-foreground">{size[0]}px</span>
        </div>
        <Slider id="a11y-size" value={size} onValueChange={(v) => setSize(v as number[])} min={12} max={24} step={1} />
        <p style={{ fontSize: size[0] }} className="leading-snug">
          The quick brown fox jumps.
        </p>
      </Field>
      <FieldSeparator />
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="a11y-motion">Reduce motion</FieldLabel>
          <FieldDescription>Minimize animations and parallax.</FieldDescription>
        </FieldContent>
        <Switch id="a11y-motion" size="sm" />
      </Field>
      <FieldSeparator />
      <FieldSet>
        <FieldLegend variant="label">Contrast</FieldLegend>
        <RadioGroup defaultValue="standard" className="flex gap-4">
          {["standard", "high"].map((c) => (
            <Field key={c} orientation="horizontal" className="w-auto">
              <RadioGroupItem value={c} id={"contrast-" + c} />
              <FieldLabel htmlFor={"contrast-" + c} className="font-normal capitalize">
                {c}
              </FieldLabel>
            </Field>
          ))}
        </RadioGroup>
      </FieldSet>
    </FieldGroup>
  )
}`,
  },
  {
    name: "CompactSmallFields",
    description: "Compact filter bar using small native selects and inputs with visually hidden labels.",
    code: `
export default function CompactSmallFields() {
  return (
    <FieldGroup className="w-full max-w-md flex-row flex-wrap items-end gap-2 border p-2">
      <Field className="w-auto flex-1">
        <FieldLabel htmlFor="flt-search" className="sr-only">
          Search orders
        </FieldLabel>
        <InputGroup className="h-7">
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput id="flt-search" placeholder="Order # or customer" />
        </InputGroup>
      </Field>
      <Field className="w-auto">
        <FieldLabel htmlFor="flt-status" className="sr-only">
          Status
        </FieldLabel>
        <NativeSelect id="flt-status" size="sm" defaultValue="all">
          <NativeSelectOption value="all">All statuses</NativeSelectOption>
          <NativeSelectOption value="paid">Paid</NativeSelectOption>
          <NativeSelectOption value="pending">Pending</NativeSelectOption>
          <NativeSelectOption value="refunded">Refunded</NativeSelectOption>
        </NativeSelect>
      </Field>
      <Field className="w-auto">
        <FieldLabel htmlFor="flt-channel" className="sr-only">
          Channel
        </FieldLabel>
        <NativeSelect id="flt-channel" size="sm" defaultValue="any">
          <NativeSelectOption value="any">Any channel</NativeSelectOption>
          <NativeSelectOption value="web">Web store</NativeSelectOption>
          <NativeSelectOption value="pos">In person</NativeSelectOption>
        </NativeSelect>
      </Field>
      <Button size="sm" variant="ghost">
        Reset
      </Button>
    </FieldGroup>
  )
}`,
  },
  {
    name: "EventTicketTiersFieldSet",
    description: "Event registration fieldset listing ticket tiers with per-tier quantity selects and a total.",
    code: `
const tiers = [
  { id: "early", name: "Early bird", price: 59, left: 12 },
  { id: "regular", name: "Regular", price: 89, left: 140 },
  { id: "vip", name: "VIP + workshop", price: 199, left: 0 },
]

export default function EventTicketTiersFieldSet() {
  const [qty, setQty] = React.useState<Record<string, number>>({ early: 1, regular: 0, vip: 0 })
  const total = tiers.reduce((sum, t) => sum + t.price * (qty[t.id] ?? 0), 0)

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Tickets</FieldLegend>
      <FieldDescription>Design Systems Summit · Lisbon · March 12</FieldDescription>
      <FieldGroup className="gap-3">
        {tiers.map((t) => (
          <Field key={t.id} orientation="horizontal" data-disabled={t.left === 0}>
            <FieldContent>
              <FieldLabel htmlFor={"tier-" + t.id}>{t.name}</FieldLabel>
              <FieldDescription>
                {"$"}{t.price} · {t.left === 0 ? "Sold out" : t.left + " left"}
              </FieldDescription>
            </FieldContent>
            <NativeSelect
              id={"tier-" + t.id}
              size="sm"
              disabled={t.left === 0}
              value={String(qty[t.id])}
              onChange={(e) => setQty({ ...qty, [t.id]: Number(e.target.value) })}
              className="w-16"
            >
              {[0, 1, 2, 3, 4].map((n) => (
                <NativeSelectOption key={n} value={String(n)}>
                  {n}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          </Field>
        ))}
      </FieldGroup>
      <FieldSeparator />
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">Total</span>
        <span className="text-sm font-semibold">{"$"}{total}</span>
      </div>
    </FieldSet>
  )
}`,
  },
  {
    name: "ExpenseCategorySelectField",
    description: "Expense form pairing a Select for category with an amount and a required receipt note when over limit.",
    code: `
const categories = [
  { label: "Choose a category", value: null },
  { label: "Travel", value: "travel" },
  { label: "Meals", value: "meals" },
  { label: "Software", value: "software" },
  { label: "Equipment", value: "equipment" },
]

export default function ExpenseCategorySelectField() {
  const [amount, setAmount] = React.useState("120")
  const needsNote = Number(amount) > 100

  return (
    <FieldGroup className="w-full max-w-xs gap-4">
      <Field>
        <FieldLabel htmlFor="exp-category">Category</FieldLabel>
        <Select items={categories}>
          <SelectTrigger id="exp-category" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categories.map((c) => (
                <SelectItem key={c.label} value={c.value}>
                  {c.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
      <Field>
        <FieldLabel htmlFor="exp-amount">Amount</FieldLabel>
        <InputGroup>
          <InputGroupAddon>$</InputGroupAddon>
          <InputGroupInput id="exp-amount" inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </InputGroup>
      </Field>
      {needsNote && (
        <Field>
          <FieldLabel htmlFor="exp-note">Business justification</FieldLabel>
          <Textarea id="exp-note" rows={2} className="resize-none" placeholder="Client dinner with Brightside team" />
          <FieldDescription>Required for expenses over $100.</FieldDescription>
        </Field>
      )}
    </FieldGroup>
  )
}`,
  },
  {
    name: "ConditionalOtherOptionField",
    description: "Radio question whose Other choice reveals a text input for a custom answer.",
    code: `
const reasons = ["Too expensive", "Missing features", "Switching to another tool", "other"]

export default function ConditionalOtherOptionField() {
  const [reason, setReason] = React.useState("Missing features")

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Why are you canceling?</FieldLegend>
      <FieldDescription>Your answer helps us improve.</FieldDescription>
      <RadioGroup value={reason} onValueChange={(v) => setReason(v as string)}>
        {reasons.map((r, i) => (
          <Field key={r} orientation="horizontal">
            <RadioGroupItem value={r} id={"cancel-" + i} />
            <FieldLabel htmlFor={"cancel-" + i} className="font-normal">
              {r === "other" ? "Something else" : r}
            </FieldLabel>
          </Field>
        ))}
      </RadioGroup>
      {reason === "other" && (
        <Field>
          <FieldLabel htmlFor="cancel-other" className="sr-only">
            Tell us more
          </FieldLabel>
          <Input id="cancel-other" autoFocus placeholder="Tell us more..." />
        </Field>
      )}
    </FieldSet>
  )
}`,
  },
  {
    name: "WorkingHoursSwitchRows",
    description: "Weekly working hours where each day has a switch and time inputs that disable when off.",
    code: `
const initial = [
  { day: "Monday", on: true },
  { day: "Tuesday", on: true },
  { day: "Wednesday", on: true },
  { day: "Saturday", on: false },
]

export default function WorkingHoursSwitchRows() {
  const [days, setDays] = React.useState(initial)

  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend>Working hours</FieldLegend>
      <FieldGroup className="gap-3">
        {days.map((d, i) => (
          <Field key={d.day} orientation="horizontal">
            <Switch
              id={"wh-" + d.day}
              size="sm"
              checked={d.on}
              onCheckedChange={(checked) => setDays(days.map((x, j) => (j === i ? { ...x, on: checked } : x)))}
            />
            <FieldLabel htmlFor={"wh-" + d.day} className="w-20 flex-none">
              {d.day}
            </FieldLabel>
            <Input type="time" aria-label={d.day + " start"} defaultValue="09:00" disabled={!d.on} className="h-7" />
            <span className="text-xs text-muted-foreground">to</span>
            <Input type="time" aria-label={d.day + " end"} defaultValue="17:30" disabled={!d.on} className="h-7" />
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  )
}`,
  },
]

export default examples
