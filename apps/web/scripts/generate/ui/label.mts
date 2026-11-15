import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "RequiredFieldLabel",
    description: "Label with a required asterisk paired with a required email input.",
    code: `
export default function RequiredFieldLabel() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="work-email">
        Work email
        <span className="text-destructive" aria-hidden="true">*</span>
      </Label>
      <Input id="work-email" type="email" placeholder="you@company.com" required />
    </div>
  )
}`,
  },
  {
    name: "OptionalHintLabel",
    description: "Label marked as optional with muted helper text beside it.",
    code: `
export default function OptionalHintLabel() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="company">
        Company
        <span className="font-normal text-muted-foreground">(optional)</span>
      </Label>
      <Input id="company" placeholder="Brightline Labs" />
    </div>
  )
}`,
  },
  {
    name: "LabelWithTooltipInfo",
    description: "Label followed by an info tooltip that explains what the field is used for.",
    code: `
export default function LabelWithTooltipInfo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <div className="flex items-center gap-1">
        <Label htmlFor="tax-id">Tax ID</Label>
        <Tooltip>
          <TooltipTrigger render={<Button variant="ghost" size="icon-xs" aria-label="About tax ID" />}>
            <InfoIcon />
          </TooltipTrigger>
          <TooltipContent>Shown on invoices sent to your customers.</TooltipContent>
        </Tooltip>
      </div>
      <Input id="tax-id" placeholder="EU 123 456 789" />
    </div>
  )
}`,
  },
  {
    name: "LabelWithLeadingIcon",
    description: "Labels with leading icons for a compact contact details form.",
    code: `
const fields = [
  { id: "contact-email", label: "Email", icon: MailIcon, placeholder: "noah@harborline.co" },
  { id: "contact-phone", label: "Phone", icon: PhoneIcon, placeholder: "(555) 019-3381" },
  { id: "contact-site", label: "Website", icon: GlobeIcon, placeholder: "harborline.co" },
]

export default function LabelWithLeadingIcon() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {fields.map((field) => (
        <div key={field.id} className="grid gap-2">
          <Label htmlFor={field.id}>
            <field.icon className="size-3.5 text-muted-foreground" />
            {field.label}
          </Label>
          <Input id={field.id} placeholder={field.placeholder} />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "LabelWithCharacterCount",
    description: "Bio label row with a live character counter aligned to the right.",
    code: `
export default function LabelWithCharacterCount() {
  const [bio, setBio] = React.useState("Product designer who loves type and tiny details.")
  const max = 160

  return (
    <div className="grid w-full max-w-sm gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="bio">Bio</Label>
        <span className={cn("text-xs tabular-nums text-muted-foreground", bio.length > max && "text-destructive")}>
          {bio.length}/{max}
        </span>
      </div>
      <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} className="min-h-20" />
    </div>
  )
}`,
  },
  {
    name: "LabelWithForgotLink",
    description: "Password label with a forgot-password link aligned on the same row.",
    code: `
export default function LabelWithForgotLink() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="login-password">Password</Label>
        <a href="#" className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
          Forgot password?
        </a>
      </div>
      <Input id="login-password" type="password" defaultValue="hunter-2-tide" />
    </div>
  )
}`,
  },
  {
    name: "SwitchSettingRow",
    description: "Settings row where a label and description sit beside a switch.",
    code: `
export default function SwitchSettingRow() {
  return (
    <div className="flex w-full max-w-md items-center justify-between gap-6 border p-4">
      <div className="grid gap-1.5">
        <Label htmlFor="weekly-digest" className="text-sm font-medium">Weekly digest</Label>
        <p id="weekly-digest-desc" className="text-xs text-muted-foreground">
          A Monday summary of comments and mentions across your projects.
        </p>
      </div>
      <Switch id="weekly-digest" defaultChecked aria-describedby="weekly-digest-desc" />
    </div>
  )
}`,
  },
  {
    name: "NotificationCheckboxList",
    description: "List of checkboxes with labels for choosing which notifications to receive.",
    code: `
const options = [
  { id: "n-mentions", label: "Mentions and replies", checked: true },
  { id: "n-assign", label: "Tasks assigned to me", checked: true },
  { id: "n-status", label: "Status changes on followed issues", checked: false },
  { id: "n-billing", label: "Billing and invoices", checked: false },
]

export default function NotificationCheckboxList() {
  return (
    <fieldset className="flex w-full max-w-sm flex-col gap-3">
      <legend className="mb-2 text-sm font-medium">Email me about</legend>
      {options.map((option) => (
        <div key={option.id} className="flex items-center gap-2">
          <Checkbox id={option.id} defaultChecked={option.checked} />
          <Label htmlFor={option.id}>{option.label}</Label>
        </div>
      ))}
    </fieldset>
  )
}`,
  },
  {
    name: "PlanCardRadioLabels",
    description: "Pricing plans where each label wraps a radio item as a selectable card.",
    code: `
const plans = [
  { value: "starter", name: "Starter", price: "$0", detail: "3 projects, 1 seat" },
  { value: "team", name: "Team", price: "$24", detail: "Unlimited projects, 10 seats" },
  { value: "scale", name: "Scale", price: "$79", detail: "SSO, audit log, 50 seats" },
]

export default function PlanCardRadioLabels() {
  return (
    <RadioGroup defaultValue="team" className="w-full max-w-sm gap-2">
      {plans.map((plan) => (
        <Label
          key={plan.value}
          htmlFor={"plan-" + plan.value}
          className="items-start gap-3 border p-3 has-data-checked:border-primary has-data-checked:bg-primary/5"
        >
          <RadioGroupItem id={"plan-" + plan.value} value={plan.value} className="mt-0.5" />
          <div className="flex flex-1 flex-col gap-1">
            <span className="text-sm font-medium">{plan.name}</span>
            <span className="text-muted-foreground">{plan.detail}</span>
          </div>
          <span className="text-sm font-semibold">
            {plan.price}
            <span className="text-xs font-normal text-muted-foreground">/mo</span>
          </span>
        </Label>
      ))}
    </RadioGroup>
  )
}`,
  },
  {
    name: "PeerDisabledLabel",
    description: "Labels that automatically dim via peer-disabled when their checkbox is disabled.",
    code: `
export default function PeerDisabledLabel() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="export-csv" defaultChecked />
        <Label htmlFor="export-csv">Export as CSV</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="export-pdf" disabled />
        <Label htmlFor="export-pdf">Export as PDF (Pro plan)</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="export-xlsx" disabled defaultChecked />
        <Label htmlFor="export-xlsx">Export as Excel (Pro plan)</Label>
      </div>
    </div>
  )
}`,
  },
  {
    name: "GroupDisabledLabel",
    description: "A wrapper with data-disabled dims its label through the group-data selector.",
    code: `
export default function GroupDisabledLabel() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="group grid gap-2" data-disabled="true">
        <Label htmlFor="sso-domain">SSO domain</Label>
        <Input id="sso-domain" placeholder="acme-corp.com" disabled />
        <p className="text-xs text-muted-foreground">Available on the Enterprise plan.</p>
      </div>
      <div className="group grid gap-2" data-disabled="false">
        <Label htmlFor="team-name">Team name</Label>
        <Input id="team-name" defaultValue="Platform Squad" />
      </div>
    </div>
  )
}`,
  },
  {
    name: "InvalidFieldLabel",
    description: "Label turned destructive along with its input and an error message.",
    code: `
export default function InvalidFieldLabel() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="username" className="text-destructive">Username</Label>
      <Input id="username" defaultValue="admin" aria-invalid aria-describedby="username-error" />
      <p id="username-error" className="flex items-center gap-1 text-xs text-destructive">
        <CircleAlertIcon className="size-3.5" />
        That username is reserved. Try another.
      </p>
    </div>
  )
}`,
  },
  {
    name: "HorizontalFormLabels",
    description: "Horizontal form layout with labels in a left column on wider screens.",
    code: `
const rows = [
  { id: "h-name", label: "Full name", value: "Iris Navarro" },
  { id: "h-role", label: "Job title", value: "Staff Engineer" },
  { id: "h-loc", label: "Location", value: "Lisbon, Portugal" },
]

export default function HorizontalFormLabels() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      {rows.map((row) => (
        <div key={row.id} className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:items-center">
          <Label htmlFor={row.id} className="text-muted-foreground sm:justify-end">{row.label}</Label>
          <Input id={row.id} defaultValue={row.value} />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "LabelWithBetaBadge",
    description: "Switch label carrying a Beta badge for an experimental feature.",
    code: `
export default function LabelWithBetaBadge() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-4 border p-3">
      <Label htmlFor="ai-summaries">
        <SparklesIcon className="size-3.5" />
        AI meeting summaries
        <Badge variant="secondary">Beta</Badge>
      </Label>
      <Switch id="ai-summaries" />
    </div>
  )
}`,
  },
  {
    name: "ShortcutSettingLabels",
    description: "Keyboard shortcut settings with labels next to their key combinations.",
    code: `
const shortcuts = [
  { id: "sc-search", label: "Open command menu", keys: ["⌘", "K"] },
  { id: "sc-new", label: "New document", keys: ["⌘", "N"] },
  { id: "sc-side", label: "Toggle sidebar", keys: ["⌘", "B"] },
]

export default function ShortcutSettingLabels() {
  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      {shortcuts.map((shortcut) => (
        <div key={shortcut.id} className="flex items-center justify-between gap-3 p-3">
          <div className="flex items-center gap-2">
            <Checkbox id={shortcut.id} defaultChecked />
            <Label htmlFor={shortcut.id}>{shortcut.label}</Label>
          </div>
          <KbdGroup>
            {shortcut.keys.map((key) => (
              <Kbd key={key}>{key}</Kbd>
            ))}
          </KbdGroup>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "FileDropzoneLabel",
    description: "A dashed label acting as a clickable dropzone for a hidden file input.",
    code: `
export default function FileDropzoneLabel() {
  return (
    <Label
      htmlFor="invoice-upload"
      className="flex w-full max-w-sm cursor-pointer flex-col gap-2 border border-dashed p-6 text-center transition-colors hover:bg-muted/50"
    >
      <UploadCloudIcon className="size-6 text-muted-foreground" />
      <span className="text-sm font-medium">Upload invoices</span>
      <span className="text-muted-foreground">PDF or PNG, up to 10 MB each</span>
      <input id="invoice-upload" type="file" multiple className="sr-only" />
    </Label>
  )
}`,
  },
  {
    name: "ColorSwatchLabels",
    description: "Theme accent picker where labels wrap visually hidden radios as color swatches.",
    code: `
const colors = [
  { value: "indigo", className: "bg-indigo-500" },
  { value: "emerald", className: "bg-emerald-500" },
  { value: "amber", className: "bg-amber-500" },
  { value: "rose", className: "bg-rose-500" },
  { value: "slate", className: "bg-slate-500" },
]

export default function ColorSwatchLabels() {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-medium">Accent color</span>
      <RadioGroup defaultValue="indigo" className="flex gap-2">
        {colors.map((color) => (
          <Label
            key={color.value}
            htmlFor={"color-" + color.value}
            className="cursor-pointer p-0.5 ring-offset-2 ring-offset-background has-data-checked:ring-2 has-data-checked:ring-foreground"
          >
            <RadioGroupItem id={"color-" + color.value} value={color.value} className="sr-only" />
            <span className={cn("block size-7", color.className)} />
            <span className="sr-only">{color.value}</span>
          </Label>
        ))}
      </RadioGroup>
    </div>
  )
}`,
  },
  {
    name: "SliderValueLabel",
    description: "Slider label row that shows the current value on the right.",
    code: `
export default function SliderValueLabel() {
  const [value, setValue] = React.useState(64)

  return (
    <div className="grid w-full max-w-sm gap-3">
      <div className="flex items-center justify-between">
        <Label htmlFor="volume">
          <Volume2Icon className="size-3.5" />
          Notification volume
        </Label>
        <span className="text-xs tabular-nums text-muted-foreground">{value}%</span>
      </div>
      <Slider
        id="volume"
        value={value}
        onValueChange={(v) => setValue(Array.isArray(v) ? v[0]! : v)}
        max={100}
      />
    </div>
  )
}`,
  },
  {
    name: "AvatarUploadLabel",
    description: "Profile photo picker where the avatar itself is the label for a file input.",
    code: `
export default function AvatarUploadLabel() {
  return (
    <div className="flex items-center gap-4">
      <Label htmlFor="avatar-file" className="group relative cursor-pointer">
        <Avatar size="lg" className="size-16">
          <AvatarFallback className="bg-gradient-to-br from-sky-400 to-indigo-500 text-lg text-white">RK</AvatarFallback>
        </Avatar>
        <span className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100">
          <CameraIcon className="size-5" />
        </span>
        <input id="avatar-file" type="file" accept="image/*" className="sr-only" />
      </Label>
      <div className="grid gap-1">
        <span className="text-sm font-medium">Rafael Kim</span>
        <span className="text-xs text-muted-foreground">Click the photo to change it</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "TermsConsentLabel",
    description: "Consent checkbox whose label contains inline links to the terms and privacy policy.",
    code: `
export default function TermsConsentLabel() {
  return (
    <div className="flex w-full max-w-sm items-start gap-2">
      <Checkbox id="consent" className="mt-0.5" />
      <Label htmlFor="consent" className="block leading-relaxed">
        I agree to the{" "}
        <a href="#" className="underline underline-offset-4">Terms of Service</a> and{" "}
        <a href="#" className="underline underline-offset-4">Privacy Policy</a>, and I&apos;m at least 16 years old.
      </Label>
    </div>
  )
}`,
  },
  {
    name: "FloatingLabelInput",
    description: "Floating label that sits inside the input and moves up on focus or when filled.",
    code: `
export default function FloatingLabelInput() {
  return (
    <div className="relative w-full max-w-sm">
      <input
        id="floating-email"
        type="email"
        placeholder=" "
        className="peer h-12 w-full border border-input bg-transparent px-3 pt-4 text-sm outline-none focus:border-ring focus:ring-1 focus:ring-ring/50 dark:bg-input/30"
      />
      <Label
        htmlFor="floating-email"
        className="pointer-events-none absolute start-3 top-1.5 text-[11px] text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-1.5 peer-focus:text-[11px]"
      >
        Email address
      </Label>
    </div>
  )
}`,
  },
  {
    name: "InsetLabelInput",
    description: "Label sitting inside the bordered box above the input text.",
    code: `
export default function InsetLabelInput() {
  return (
    <div className="flex w-full max-w-sm flex-col border border-input px-3 py-2 focus-within:border-ring focus-within:ring-1 focus-within:ring-ring/50 dark:bg-input/30">
      <Label htmlFor="inset-card" className="text-[11px] text-muted-foreground">Name on card</Label>
      <input
        id="inset-card"
        defaultValue="Elena Petrova"
        className="mt-1 bg-transparent text-sm outline-none"
      />
    </div>
  )
}`,
  },
  {
    name: "UrlFieldLabel",
    description: "Label for an input group with a fixed URL prefix and an availability check.",
    code: `
export default function UrlFieldLabel() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="store-url">Store address</Label>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>shopwell.app/</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput id="store-url" defaultValue="ember-candles" />
        <InputGroupAddon align="inline-end">
          <CircleCheckIcon className="text-emerald-600 dark:text-emerald-400" />
        </InputGroupAddon>
      </InputGroup>
      <p className="text-xs text-muted-foreground">This address is available.</p>
    </div>
  )
}`,
  },
  {
    name: "ReadOnlyLockedLabel",
    description: "Label with a lock icon for a read-only field managed by an administrator.",
    code: `
export default function ReadOnlyLockedLabel() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="org-id" className="justify-between">
        <span>Organization ID</span>
        <span className="flex items-center gap-1 font-normal text-muted-foreground">
          <LockIcon className="size-3" />
          Managed by admin
        </span>
      </Label>
      <Input id="org-id" readOnly value="org_8F3kQ2xLm" className="bg-muted font-mono" />
    </div>
  )
}`,
  },
  {
    name: "UnitSuffixLabels",
    description: "Shipping package fields with measurement units shown in each label.",
    code: `
const dims = [
  { id: "pkg-weight", label: "Weight", unit: "kg", value: "2.4" },
  { id: "pkg-length", label: "Length", unit: "cm", value: "40" },
  { id: "pkg-width", label: "Width", unit: "cm", value: "30" },
]

export default function UnitSuffixLabels() {
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-3">
      {dims.map((dim) => (
        <div key={dim.id} className="grid gap-2">
          <Label htmlFor={dim.id}>
            {dim.label}
            <span className="font-normal text-muted-foreground">({dim.unit})</span>
          </Label>
          <Input id={dim.id} type="number" defaultValue={dim.value} />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "FilterChipLabels",
    description: "Filter chips built from labels wrapping visually hidden checkboxes.",
    code: `
const tags = ["Remote", "Full-time", "Contract", "Senior", "Design", "Engineering"]

export default function FilterChipLabels() {
  return (
    <div className="flex w-full max-w-sm flex-wrap gap-2">
      {tags.map((tag, i) => (
        <Label
          key={tag}
          htmlFor={"chip-" + i}
          className="cursor-pointer border px-3 py-1.5 transition-colors hover:bg-muted has-data-checked:border-primary has-data-checked:bg-primary has-data-checked:text-primary-foreground"
        >
          <Checkbox id={"chip-" + i} defaultChecked={i < 2} className="sr-only" />
          {tag}
        </Label>
      ))}
    </div>
  )
}`,
  },
  {
    name: "NativeSelectLabel",
    description: "Label wired to a native select for choosing a billing country.",
    code: `
export default function NativeSelectLabel() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="country">Billing country</Label>
      <NativeSelect id="country" defaultValue="ca" className="w-full">
        <NativeSelectOption value="us">United States</NativeSelectOption>
        <NativeSelectOption value="ca">Canada</NativeSelectOption>
        <NativeSelectOption value="gb">United Kingdom</NativeSelectOption>
        <NativeSelectOption value="de">Germany</NativeSelectOption>
      </NativeSelect>
    </div>
  )
}`,
  },
  {
    name: "DateRangeLabels",
    description: "Check-in and check-out date inputs with paired labels for a booking form.",
    code: `
export default function DateRangeLabels() {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-3">
      <div className="grid gap-2">
        <Label htmlFor="check-in">
          <CalendarIcon className="size-3.5" />
          Check-in
        </Label>
        <Input id="check-in" type="date" defaultValue="2026-12-18" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="check-out">
          <CalendarIcon className="size-3.5" />
          Check-out
        </Label>
        <Input id="check-out" type="date" defaultValue="2026-12-22" />
      </div>
    </div>
  )
}`,
  },
  {
    name: "ShippingAddressLabels",
    description: "Compact shipping address grid with labels for each address part.",
    code: `
export default function ShippingAddressLabels() {
  return (
    <div className="grid w-full max-w-md grid-cols-6 gap-3">
      <div className="col-span-6 grid gap-2">
        <Label htmlFor="addr-street">Street address</Label>
        <Input id="addr-street" defaultValue="218 Willow Bend Rd" />
      </div>
      <div className="col-span-3 grid gap-2">
        <Label htmlFor="addr-city">City</Label>
        <Input id="addr-city" defaultValue="Portland" />
      </div>
      <div className="col-span-1 grid gap-2">
        <Label htmlFor="addr-state">State</Label>
        <Input id="addr-state" defaultValue="OR" />
      </div>
      <div className="col-span-2 grid gap-2">
        <Label htmlFor="addr-zip">ZIP</Label>
        <Input id="addr-zip" defaultValue="97205" />
      </div>
    </div>
  )
}`,
  },
  {
    name: "AutosaveStatusLabel",
    description: "Label row that shows a saving or saved indicator while the user edits.",
    code: `
export default function AutosaveStatusLabel() {
  const [title, setTitle] = React.useState("Q4 roadmap review")
  const [saving, setSaving] = React.useState(false)
  const timer = React.useRef<number | undefined>(undefined)

  function handleChange(value: string) {
    setTitle(value)
    setSaving(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setSaving(false), 800)
  }

  return (
    <div className="grid w-full max-w-sm gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="doc-title">Document title</Label>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          {saving ? <Spinner className="size-3" /> : <CheckIcon className="size-3" />}
          {saving ? "Saving..." : "Saved"}
        </span>
      </div>
      <Input id="doc-title" value={title} onChange={(e) => handleChange(e.target.value)} />
    </div>
  )
}`,
  },
  {
    name: "LabelWithResetAction",
    description: "Label row with a reset-to-default button for a configurable value.",
    code: `
export default function LabelWithResetAction() {
  const [value, setValue] = React.useState("45")
  const isDefault = value === "30"

  return (
    <div className="grid w-full max-w-xs gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="session-timeout">Session timeout (minutes)</Label>
        <Button variant="ghost" size="xs" disabled={isDefault} onClick={() => setValue("30")}>
          <RotateCcwIcon data-icon="inline-start" />
          Reset
        </Button>
      </div>
      <Input id="session-timeout" type="number" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}`,
  },
  {
    name: "PasswordStrengthLabel",
    description: "New password label that reports strength as the user types.",
    code: `
function strength(pw: string) {
  let score = 0
  if (pw.length >= 8) score++
  if (/[A-Z]/.test(pw)) score++
  if (/[0-9]/.test(pw)) score++
  if (/[^A-Za-z0-9]/.test(pw)) score++
  return score
}

const levels = ["Too short", "Weak", "Fair", "Good", "Strong"]

export default function PasswordStrengthLabel() {
  const [pw, setPw] = React.useState("Lantern7")
  const score = strength(pw)

  return (
    <div className="grid w-full max-w-sm gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="new-password">New password</Label>
        <span className={cn("text-xs font-medium", score >= 3 ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400")}>
          {levels[score]}
        </span>
      </div>
      <Input id="new-password" type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
      <div className="grid grid-cols-4 gap-1">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={cn("h-1", i < score ? "bg-foreground" : "bg-muted")} />
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "CheckoutAddOnLabels",
    description: "Checkout add-ons where each label wraps a checkbox, description, and price.",
    code: `
const addOns = [
  { id: "addon-wrap", title: "Gift wrapping", desc: "Recycled paper and a handwritten note", price: "$4.00" },
  { id: "addon-insure", title: "Shipping protection", desc: "Covers loss, theft, and damage", price: "$2.49" },
  { id: "addon-express", title: "Express delivery", desc: "Arrives in 1-2 business days", price: "$9.00" },
]

export default function CheckoutAddOnLabels() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {addOns.map((addOn, i) => (
        <Label
          key={addOn.id}
          htmlFor={addOn.id}
          className="items-start gap-3 border p-3 hover:bg-muted/40 has-data-checked:border-primary"
        >
          <Checkbox id={addOn.id} defaultChecked={i === 1} className="mt-0.5" />
          <span className="flex flex-1 flex-col gap-1">
            <span className="font-medium">{addOn.title}</span>
            <span className="text-muted-foreground">{addOn.desc}</span>
          </span>
          <span className="font-medium tabular-nums">{addOn.price}</span>
        </Label>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ShippingMethodRadioLabels",
    description: "Radio list of shipping methods with labels, delivery estimates, and prices.",
    code: `
const methods = [
  { value: "standard", label: "Standard", eta: "Dec 2 - Dec 5", price: "Free" },
  { value: "priority", label: "Priority", eta: "Nov 28 - Nov 30", price: "$7.50" },
  { value: "overnight", label: "Overnight", eta: "Tomorrow by 10am", price: "$24.00" },
]

export default function ShippingMethodRadioLabels() {
  return (
    <RadioGroup defaultValue="standard" className="w-full max-w-sm gap-0 divide-y border">
      {methods.map((method) => (
        <div key={method.value} className="flex items-center gap-3 p-3">
          <RadioGroupItem id={"ship-" + method.value} value={method.value} />
          <Label htmlFor={"ship-" + method.value} className="flex-1 justify-between">
            <span className="grid gap-1">
              <span className="font-medium">{method.label}</span>
              <span className="text-muted-foreground">{method.eta}</span>
            </span>
            <span className="font-medium">{method.price}</span>
          </Label>
        </div>
      ))}
    </RadioGroup>
  )
}`,
  },
  {
    name: "VisuallyHiddenSearchLabel",
    description: "Search field with a screen-reader-only label and a visible icon.",
    code: `
export default function VisuallyHiddenSearchLabel() {
  return (
    <div className="relative w-full max-w-sm">
      <Label htmlFor="site-search" className="sr-only">Search files</Label>
      <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input id="site-search" type="search" placeholder="Search files and folders" className="ps-8" />
    </div>
  )
}`,
  },
  {
    name: "QuantityStepperLabel",
    description: "Label for a quantity stepper with increment and decrement buttons.",
    code: `
export default function QuantityStepperLabel() {
  const [qty, setQty] = React.useState(2)

  return (
    <div className="grid w-fit gap-2">
      <Label htmlFor="seat-qty">Seats</Label>
      <div className="flex">
        <Button variant="outline" size="icon" aria-label="Remove seat" onClick={() => setQty((q) => Math.max(1, q - 1))}>
          <MinusIcon />
        </Button>
        <Input
          id="seat-qty"
          type="number"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value) || 1)}
          className="w-16 border-x-0 text-center"
        />
        <Button variant="outline" size="icon" aria-label="Add seat" onClick={() => setQty((q) => q + 1)}>
          <PlusIcon />
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">{"$" + qty * 12}/month billed annually</p>
    </div>
  )
}`,
  },
  {
    name: "TableRowSelectLabels",
    description: "Admin table rows where each checkbox has a hidden label naming the row.",
    code: `
const users = [
  { id: "u1", name: "Grace Holloway", role: "Owner" },
  { id: "u2", name: "Marcus Bell", role: "Editor" },
  { id: "u3", name: "Tomoko Arai", role: "Viewer" },
]

export default function TableRowSelectLabels() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8">
              <Label htmlFor="select-all" className="sr-only">Select all members</Label>
              <Checkbox id="select-all" />
            </TableHead>
            <TableHead>Member</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Label htmlFor={"row-" + user.id} className="sr-only">Select {user.name}</Label>
                <Checkbox id={"row-" + user.id} />
              </TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell className="text-muted-foreground">{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "CopyableKeyLabel",
    description: "Label for a read-only webhook secret with a copy button inside the input group.",
    code: `
export default function CopyableKeyLabel() {
  const [copied, setCopied] = React.useState(false)
  const secret = "whk_demo_8vR1"

  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="webhook-secret">Signing secret</Label>
      <InputGroup>
        <InputGroupInput id="webhook-secret" readOnly value={secret} className="font-mono" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-xs"
            aria-label="Copy secret"
            onClick={() => {
              void navigator.clipboard?.writeText(secret)
              setCopied(true)
            }}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`,
  },
  {
    name: "PrivacySwitchGroup",
    description: "Privacy switches where a master toggle disables and dims dependent labels.",
    code: `
const items = [
  { id: "p-status", label: "Show online status" },
  { id: "p-read", label: "Send read receipts" },
  { id: "p-typing", label: "Show typing indicator" },
]

export default function PrivacySwitchGroup() {
  const [visible, setVisible] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="p-master" className="text-sm font-medium">Activity visible to others</Label>
        <Switch id="p-master" checked={visible} onCheckedChange={setVisible} />
      </div>
      <Separator />
      <div className="group flex flex-col gap-3 ps-2" data-disabled={!visible}>
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <Label htmlFor={item.id}>{item.label}</Label>
            <Switch id={item.id} size="sm" defaultChecked disabled={!visible} />
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "TimeSlotLabels",
    description: "Booking time slots rendered as labels wrapping hidden radio items.",
    code: `
const times = ["9:00", "9:30", "10:00", "11:30", "13:00", "14:30", "15:00", "16:30"]
const taken = new Set(["10:00", "14:30"])

export default function TimeSlotLabels() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <span className="text-xs font-medium">Thursday, Dec 4</span>
      <RadioGroup defaultValue="11:30" className="grid grid-cols-4 gap-2">
        {times.map((time) => (
          <Label
            key={time}
            htmlFor={"slot-" + time}
            className={cn(
              "justify-center border py-2 tabular-nums hover:bg-muted has-data-checked:border-primary has-data-checked:bg-primary has-data-checked:text-primary-foreground",
              taken.has(time) && "pointer-events-none line-through opacity-40"
            )}
          >
            <RadioGroupItem id={"slot-" + time} value={time} disabled={taken.has(time)} className="sr-only" />
            {time}
          </Label>
        ))}
      </RadioGroup>
    </div>
  )
}`,
  },
  {
    name: "RatingScaleLabels",
    description: "Feedback rating from 1 to 5 using labels as tappable scale buttons with end captions.",
    code: `
export default function RatingScaleLabels() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <span className="text-sm font-medium">How likely are you to recommend Pinecone Notes?</span>
      <RadioGroup className="grid grid-cols-5 gap-1.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <Label
            key={n}
            htmlFor={"rate-" + n}
            className="h-10 justify-center border text-sm hover:bg-muted has-data-checked:border-primary has-data-checked:bg-primary/10"
          >
            <RadioGroupItem id={"rate-" + n} value={String(n)} className="sr-only" />
            {n}
          </Label>
        ))}
      </RadioGroup>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Not likely</span>
        <span>Very likely</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "TagCountLabel",
    description: "Tags field label showing how many tags are added out of a limit.",
    code: `
export default function TagCountLabel() {
  const [tags, setTags] = React.useState(["onboarding", "billing", "urgent"])
  const [draft, setDraft] = React.useState("")

  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="ticket-tags" className="justify-between">
        <span>Tags</span>
        <span className="font-normal text-muted-foreground">{tags.length}/5</span>
      </Label>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
            <button type="button" aria-label={"Remove " + tag} onClick={() => setTags(tags.filter((t) => t !== tag))}>
              <XIcon />
            </button>
          </Badge>
        ))}
      </div>
      <Input
        id="ticket-tags"
        value={draft}
        disabled={tags.length >= 5}
        placeholder="Type a tag and press Enter"
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && draft.trim()) {
            setTags([...tags, draft.trim()])
            setDraft("")
          }
        }}
      />
    </div>
  )
}`,
  },
  {
    name: "TruncatedPathLabel",
    description: "File rename field whose long folder path label truncates inside a narrow panel.",
    code: `
export default function TruncatedPathLabel() {
  return (
    <div className="grid w-full max-w-[16rem] gap-2 border p-3">
      <Label htmlFor="rename-file" className="min-w-0">
        <FolderIcon className="size-3.5 shrink-0 text-muted-foreground" />
        <span className="truncate text-muted-foreground" title="Shared / Marketing / 2026 Campaigns / Spring Launch / Assets">
          Shared / Marketing / 2026 Campaigns / Spring Launch / Assets
        </span>
      </Label>
      <Input id="rename-file" defaultValue="hero-banner-final-v3.fig" />
      <div className="flex justify-end gap-2">
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button size="sm">Rename</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "AssigneeCheckboxLabels",
    description: "Assign teammates with checkbox labels that include avatars and roles.",
    code: `
const people = [
  { id: "as-1", name: "Dana Whitfield", role: "Design", initials: "DW" },
  { id: "as-2", name: "Kofi Mensah", role: "Frontend", initials: "KM" },
  { id: "as-3", name: "Ines Duarte", role: "QA", initials: "ID" },
]

export default function AssigneeCheckboxLabels() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1 border p-2">
      <span className="px-2 py-1 text-xs font-medium text-muted-foreground">Assign to</span>
      {people.map((person, i) => (
        <Label key={person.id} htmlFor={person.id} className="gap-3 p-2 hover:bg-muted">
          <Checkbox id={person.id} defaultChecked={i === 0} />
          <Avatar size="sm">
            <AvatarFallback>{person.initials}</AvatarFallback>
          </Avatar>
          <span className="flex-1">{person.name}</span>
          <span className="text-muted-foreground">{person.role}</span>
        </Label>
      ))}
    </div>
  )
}`,
  },
  {
    name: "SelectAllIndeterminateLabel",
    description: "Select-all checkbox label that becomes indeterminate when only some items are checked.",
    code: `
const files = ["contract-draft.pdf", "brand-guide.pdf", "invoice-1182.pdf"]

export default function SelectAllIndeterminateLabel() {
  const [selected, setSelected] = React.useState<string[]>(["brand-guide.pdf"])
  const all = selected.length === files.length
  const some = selected.length > 0 && !all

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center gap-2 border-b pb-3">
        <Checkbox
          id="files-all"
          checked={all}
          indeterminate={some}
          onCheckedChange={(checked) => setSelected(checked ? files : [])}
        />
        <Label htmlFor="files-all" className="font-medium">
          Select all
          <span className="font-normal text-muted-foreground">({selected.length} of {files.length})</span>
        </Label>
      </div>
      {files.map((file) => (
        <div key={file} className="flex items-center gap-2 ps-4">
          <Checkbox
            id={"file-" + file}
            checked={selected.includes(file)}
            onCheckedChange={(checked) =>
              setSelected(checked ? [...selected, file] : selected.filter((f) => f !== file))
            }
          />
          <Label htmlFor={"file-" + file}>
            <FileTextIcon className="size-3.5 text-muted-foreground" />
            {file}
          </Label>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "DependentFieldLabel",
    description: "A switch that enables a dependent field, with the label dimming while it's off.",
    code: `
export default function DependentFieldLabel() {
  const [enabled, setEnabled] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center gap-2">
        <Switch id="auto-reply" checked={enabled} onCheckedChange={setEnabled} />
        <Label htmlFor="auto-reply">Send an out-of-office reply</Label>
      </div>
      <div className="group grid gap-2" data-disabled={!enabled}>
        <Label htmlFor="auto-reply-msg">Reply message</Label>
        <Textarea
          id="auto-reply-msg"
          disabled={!enabled}
          defaultValue="Thanks for your note. I'm away until Jan 6 and will reply when I'm back."
          className="min-h-20"
        />
      </div>
    </div>
  )
}`,
  },
  {
    name: "WrappingLabelImplicit",
    description: "Labels that wrap their inputs directly, so no htmlFor or id is needed.",
    code: `
export default function WrappingLabelImplicit() {
  return (
    <form className="flex w-full max-w-sm flex-col gap-4">
      <Label className="flex-col items-start gap-2">
        Display name
        <Input defaultValue="Wren Abbott" />
      </Label>
      <Label className="flex-col items-start gap-2">
        Pronouns
        <Input placeholder="they/them" />
      </Label>
      <Label className="gap-2">
        <Checkbox defaultChecked />
        Show pronouns on my profile
      </Label>
    </form>
  )
}`,
  },
  {
    name: "AmountLabelWithBalance",
    description: "Transfer amount label showing the available balance and a max button.",
    code: `
export default function AmountLabelWithBalance() {
  const [amount, setAmount] = React.useState("")

  return (
    <div className="grid w-full max-w-sm gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="amount">Amount</Label>
        <span className="text-xs text-muted-foreground">
          Available: <span className="font-medium text-foreground">$3,218.40</span>
        </span>
      </div>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          id="amount"
          inputMode="decimal"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="xs" onClick={() => setAmount("3218.40")}>Max</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`,
  },
]

export default examples
