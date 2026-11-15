import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "ShippingMethodCards",
    description: "Checkout shipping options as selectable cards with price and delivery estimate.",
    code: `
const methods = [
  { value: "standard", label: "Standard", eta: "4-6 business days", price: "Free" },
  { value: "express", label: "Express", eta: "2-3 business days", price: "$9.00" },
  { value: "overnight", label: "Overnight", eta: "Next business day", price: "$24.00" },
]

export default function ShippingMethodCards() {
  return (
    <RadioGroup defaultValue="standard" className="w-full max-w-sm">
      {methods.map((method) => (
        <FieldLabel key={method.value} htmlFor={"ship-" + method.value}>
          <Field orientation="horizontal">
            <RadioGroupItem value={method.value} id={"ship-" + method.value} />
            <FieldContent>
              <FieldTitle>{method.label}</FieldTitle>
              <FieldDescription>{method.eta}</FieldDescription>
            </FieldContent>
            <span className="text-sm font-medium">{method.price}</span>
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  )
}`,
  },
  {
    name: "PaymentMethodPicker",
    description: "Payment method choice with icons for card, bank transfer, and wallet.",
    code: `
const methods = [
  { value: "card", label: "Credit or debit card", hint: "Visa ending in 4242", icon: CreditCardIcon },
  { value: "bank", label: "Bank transfer", hint: "1-2 days to clear", icon: LandmarkIcon },
  { value: "wallet", label: "Store credit", hint: "$32.50 available", icon: WalletIcon },
]

export default function PaymentMethodPicker() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Payment method</FieldLegend>
      <RadioGroup defaultValue="card">
        {methods.map((m) => (
          <FieldLabel key={m.value} htmlFor={"pay-" + m.value}>
            <Field orientation="horizontal">
              <m.icon className="size-4 text-muted-foreground" />
              <FieldContent>
                <FieldTitle>{m.label}</FieldTitle>
                <FieldDescription>{m.hint}</FieldDescription>
              </FieldContent>
              <RadioGroupItem value={m.value} id={"pay-" + m.value} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}`,
  },
  {
    name: "BillingCycleRadio",
    description: "Monthly versus yearly billing selection with a savings badge.",
    code: `
export default function BillingCycleRadio() {
  return (
    <RadioGroup defaultValue="yearly" className="grid w-full max-w-sm grid-cols-2">
      <FieldLabel htmlFor="cycle-monthly">
        <Field orientation="horizontal">
          <RadioGroupItem value="monthly" id="cycle-monthly" />
          <FieldContent>
            <FieldTitle>Monthly</FieldTitle>
            <FieldDescription>$12 / month</FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="cycle-yearly">
        <Field orientation="horizontal">
          <RadioGroupItem value="yearly" id="cycle-yearly" />
          <FieldContent>
            <FieldTitle>
              Yearly
              <Badge variant="secondary">-20%</Badge>
            </FieldTitle>
            <FieldDescription>$115 / year</FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
    </RadioGroup>
  )
}`,
  },
  {
    name: "NotificationFrequencySettings",
    description: "Settings card for choosing how often digest emails are sent.",
    code: `
const options = [
  { value: "instant", label: "As it happens", hint: "One email per notification" },
  { value: "daily", label: "Daily digest", hint: "Every morning at 8:00 AM" },
  { value: "weekly", label: "Weekly digest", hint: "Mondays at 8:00 AM" },
  { value: "off", label: "Off", hint: "Only in-app notifications" },
]

export default function NotificationFrequencySettings() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Email notifications</CardTitle>
        <CardDescription>Choose how often we email you about activity.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="daily" className="gap-4">
          {options.map((o) => (
            <Field key={o.value} orientation="horizontal">
              <RadioGroupItem value={o.value} id={"freq-" + o.value} />
              <FieldContent>
                <FieldLabel htmlFor={"freq-" + o.value}>{o.label}</FieldLabel>
                <FieldDescription>{o.hint}</FieldDescription>
              </FieldContent>
            </Field>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "ThemePreviewRadio",
    description: "Appearance picker with miniature light, dark, and system previews.",
    code: `
const themes = [
  { value: "light", label: "Light", preview: "bg-white", bar: "bg-neutral-200" },
  { value: "dark", label: "Dark", preview: "bg-neutral-900", bar: "bg-neutral-700" },
  { value: "system", label: "System", preview: "bg-gradient-to-r from-white from-50% to-neutral-900 to-50%", bar: "bg-neutral-400" },
]

export default function ThemePreviewRadio() {
  return (
    <RadioGroup defaultValue="system" className="grid w-full max-w-sm grid-cols-3 gap-3">
      {themes.map((theme) => (
        <label key={theme.value} htmlFor={"theme-" + theme.value} className="flex cursor-pointer flex-col gap-2">
          <div className={cn("flex h-16 flex-col gap-1.5 border p-2 ring-offset-2 ring-offset-background", theme.preview)}>
            <span className={cn("h-1.5 w-2/3", theme.bar)} />
            <span className={cn("h-1.5 w-1/2", theme.bar)} />
          </div>
          <span className="flex items-center gap-2 text-sm">
            <RadioGroupItem value={theme.value} id={"theme-" + theme.value} />
            {theme.label}
          </span>
        </label>
      ))}
    </RadioGroup>
  )
}`,
  },
  {
    name: "ApparelSizeTiles",
    description: "Clothing size selector as compact tiles with a sold-out size disabled.",
    code: `
const sizes = [
  { value: "xs", stock: true },
  { value: "s", stock: true },
  { value: "m", stock: true },
  { value: "l", stock: false },
  { value: "xl", stock: true },
]

export default function ApparelSizeTiles() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">Size</span>
        <a href="#" className="text-muted-foreground underline underline-offset-4">Size guide</a>
      </div>
      <RadioGroup defaultValue="m" className="grid grid-cols-5 gap-2">
        {sizes.map((size) => (
          <label
            key={size.value}
            htmlFor={"size-" + size.value}
            className="flex h-11 cursor-pointer items-center justify-center border text-sm font-medium uppercase has-data-checked:border-primary has-data-checked:bg-primary has-data-checked:text-primary-foreground has-disabled:cursor-not-allowed has-disabled:text-muted-foreground has-disabled:line-through has-focus-visible:ring-2 has-focus-visible:ring-ring/50"
          >
            <RadioGroupItem value={size.value} id={"size-" + size.value} disabled={!size.stock} className="sr-only" />
            {size.value}
          </label>
        ))}
      </RadioGroup>
    </div>
  )
}`,
  },
  {
    name: "ComingSoonOptionDisabled",
    description: "Region selector where one option is disabled with a coming-soon badge.",
    code: `
const regions = [
  { value: "us-east", label: "US East (Virginia)", available: true },
  { value: "eu-west", label: "EU West (Dublin)", available: true },
  { value: "ap-south", label: "Asia Pacific (Mumbai)", available: false },
]

export default function ComingSoonOptionDisabled() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Data region</FieldLegend>
      <FieldDescription>Where your workspace data is stored.</FieldDescription>
      <RadioGroup defaultValue="eu-west">
        {regions.map((region) => (
          <Field key={region.value} orientation="horizontal" data-disabled={!region.available || undefined}>
            <RadioGroupItem value={region.value} id={"region-" + region.value} disabled={!region.available} />
            <FieldLabel htmlFor={"region-" + region.value} className="font-normal">
              {region.label}
            </FieldLabel>
            {!region.available && <Badge variant="outline">Coming soon</Badge>}
          </Field>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}`,
  },
  {
    name: "AdminLockedRadioGroup",
    description: "Entire radio group disabled because the setting is managed by an admin.",
    code: `
export default function AdminLockedRadioGroup() {
  return (
    <FieldSet className="w-full max-w-sm" disabled>
      <FieldLegend variant="label" className="flex items-center gap-1.5">
        <LockIcon className="size-3.5" />
        File sharing
      </FieldLegend>
      <RadioGroup defaultValue="org" disabled>
        <Field orientation="horizontal" data-disabled>
          <RadioGroupItem value="anyone" id="share-anyone" />
          <FieldLabel htmlFor="share-anyone" className="font-normal">Anyone with the link</FieldLabel>
        </Field>
        <Field orientation="horizontal" data-disabled>
          <RadioGroupItem value="org" id="share-org" />
          <FieldLabel htmlFor="share-org" className="font-normal">People in Fernwood Labs</FieldLabel>
        </Field>
        <Field orientation="horizontal" data-disabled>
          <RadioGroupItem value="none" id="share-none" />
          <FieldLabel htmlFor="share-none" className="font-normal">Invited people only</FieldLabel>
        </Field>
      </RadioGroup>
      <FieldDescription>This setting is managed by your workspace admin.</FieldDescription>
    </FieldSet>
  )
}`,
  },
  {
    name: "RequiredRadioValidation",
    description: "Required radio group that shows an invalid state when submitted empty.",
    code: `
const sources = ["Search engine", "Friend or colleague", "Podcast", "Social media"]

export default function RequiredRadioValidation() {
  const [value, setValue] = React.useState<string | null>(null)
  const [submitted, setSubmitted] = React.useState(false)
  const invalid = submitted && !value

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <FieldSet data-invalid={invalid || undefined}>
        <FieldLegend variant="label">How did you hear about us?</FieldLegend>
        <RadioGroup value={value} onValueChange={(v) => setValue(v as string)} aria-invalid={invalid || undefined}>
          {sources.map((source) => (
            <Field key={source} orientation="horizontal">
              <RadioGroupItem value={source} id={"src-" + source} aria-invalid={invalid || undefined} />
              <FieldLabel htmlFor={"src-" + source} className="font-normal">{source}</FieldLabel>
            </Field>
          ))}
        </RadioGroup>
        {invalid && <FieldError>Please choose an option to continue.</FieldError>}
      </FieldSet>
      <Button type="submit" className="self-start">
        {submitted && value ? "Thanks!" : "Submit"}
      </Button>
    </form>
  )
}`,
  },
  {
    name: "ControlledDeliverySummary",
    description: "Controlled radio group whose selection updates an order summary line.",
    code: `
const options = [
  { value: "pickup", label: "Store pickup", fee: 0 },
  { value: "courier", label: "Courier", fee: 6.5 },
  { value: "locker", label: "Parcel locker", fee: 2.99 },
]

export default function ControlledDeliverySummary() {
  const [value, setValue] = React.useState("courier")
  const selected = options.find((o) => o.value === value)
  const subtotal = 48

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <RadioGroup value={value} onValueChange={(v) => setValue(v as string)}>
        {options.map((o) => (
          <Field key={o.value} orientation="horizontal">
            <RadioGroupItem value={o.value} id={"del-" + o.value} />
            <FieldLabel htmlFor={"del-" + o.value} className="font-normal">{o.label}</FieldLabel>
            <span className="ms-auto text-sm text-muted-foreground">
              {o.fee === 0 ? "Free" : "$" + o.fee.toFixed(2)}
            </span>
          </Field>
        ))}
      </RadioGroup>
      <Separator />
      <div className="flex justify-between text-sm font-medium">
        <span>Total</span>
        <span className="tabular-nums">{"$" + (subtotal + (selected?.fee ?? 0)).toFixed(2)}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "LikertAgreementScale",
    description: "Horizontal five-point agreement scale for a survey statement.",
    code: `
const scale = [
  { value: "1", label: "Strongly disagree" },
  { value: "2", label: "Disagree" },
  { value: "3", label: "Neutral" },
  { value: "4", label: "Agree" },
  { value: "5", label: "Strongly agree" },
]

export default function LikertAgreementScale() {
  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend variant="label">The onboarding made it easy to get started.</FieldLegend>
      <RadioGroup defaultValue="4" className="grid grid-cols-5 gap-1">
        {scale.map((s) => (
          <label key={s.value} htmlFor={"likert-" + s.value} className="flex cursor-pointer flex-col items-center gap-2 text-center">
            <RadioGroupItem value={s.value} id={"likert-" + s.value} />
            <span className="text-[11px] leading-tight text-muted-foreground">{s.label}</span>
          </label>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}`,
  },
  {
    name: "QuizAnswerFeedback",
    description: "Quiz question that reveals correct or incorrect feedback after checking.",
    code: `
const answers = [
  { value: "a", label: "Kerning" },
  { value: "b", label: "Leading" },
  { value: "c", label: "Tracking" },
]
const correct = "b"

export default function QuizAnswerFeedback() {
  const [value, setValue] = React.useState<string | null>(null)
  const [checked, setChecked] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <p className="text-sm font-medium">What is the vertical space between lines of text called?</p>
      <RadioGroup
        value={value}
        onValueChange={(v) => {
          setValue(v as string)
          setChecked(false)
        }}
      >
        {answers.map((a) => (
          <Field key={a.value} orientation="horizontal">
            <RadioGroupItem
              value={a.value}
              id={"quiz-" + a.value}
              aria-invalid={(checked && value === a.value && a.value !== correct) || undefined}
            />
            <FieldLabel htmlFor={"quiz-" + a.value} className="font-normal">{a.label}</FieldLabel>
            {checked && a.value === correct && <CheckIcon className="ms-auto size-4 text-emerald-600" />}
          </Field>
        ))}
      </RadioGroup>
      {checked && (
        <p className={cn("text-sm", value === correct ? "text-emerald-600 dark:text-emerald-400" : "text-destructive")}>
          {value === correct ? "Correct! Leading comes from strips of lead." : "Not quite. Try again."}
        </p>
      )}
      <Button size="sm" className="self-start" disabled={!value} onClick={() => setChecked(true)}>
        Check answer
      </Button>
    </div>
  )
}`,
  },
  {
    name: "DeliveryTimeSlots",
    description: "Grocery delivery time slot grid with fully booked slots disabled.",
    code: `
const slots = [
  { value: "08", label: "8-10 AM", full: false },
  { value: "10", label: "10-12 PM", full: true },
  { value: "12", label: "12-2 PM", full: false },
  { value: "14", label: "2-4 PM", full: false },
  { value: "16", label: "4-6 PM", full: true },
  { value: "18", label: "6-8 PM", full: false },
]

export default function DeliveryTimeSlots() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <p className="flex items-center gap-2 text-sm font-medium">
        <CalendarIcon className="size-4" />
        Saturday, Nov 22
      </p>
      <RadioGroup defaultValue="12" className="grid grid-cols-3 gap-2">
        {slots.map((slot) => (
          <label
            key={slot.value}
            htmlFor={"slot-" + slot.value}
            className="flex cursor-pointer flex-col items-center gap-0.5 border px-2 py-2.5 text-sm has-data-checked:border-primary has-data-checked:bg-primary/5 has-disabled:cursor-not-allowed has-disabled:opacity-50"
          >
            <RadioGroupItem value={slot.value} id={"slot-" + slot.value} disabled={slot.full} className="sr-only" />
            <span className="font-medium">{slot.label}</span>
            <span className="text-[11px] text-muted-foreground">{slot.full ? "Full" : "$3.99"}</span>
          </label>
        ))}
      </RadioGroup>
    </div>
  )
}`,
  },
  {
    name: "ProductColorSwatches",
    description: "Product color selector using round swatches with the chosen color named.",
    code: `
const colors = [
  { value: "Sand", className: "bg-amber-200 data-checked:bg-amber-200 dark:data-checked:bg-amber-200" },
  { value: "Sage", className: "bg-emerald-300 data-checked:bg-emerald-300 dark:data-checked:bg-emerald-300" },
  { value: "Slate", className: "bg-slate-500 data-checked:bg-slate-500 dark:data-checked:bg-slate-500" },
  { value: "Clay", className: "bg-orange-400 data-checked:bg-orange-400 dark:data-checked:bg-orange-400" },
  { value: "Ink", className: "bg-neutral-900 data-checked:bg-neutral-900 dark:data-checked:bg-neutral-900" },
]

export default function ProductColorSwatches() {
  const [color, setColor] = React.useState("Sage")

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <p className="text-sm">
        Color: <span className="font-medium">{color}</span>
      </p>
      <RadioGroup value={color} onValueChange={(v) => setColor(v as string)} className="flex gap-3" aria-label="Color">
        {colors.map((c) => (
          <RadioGroupItem
            key={c.value}
            value={c.value}
            aria-label={c.value}
            className={cn(
              "size-8 border-0 ring-offset-2 ring-offset-background data-checked:ring-2 data-checked:ring-foreground [&_[data-slot=radio-group-indicator]]:hidden",
              c.className
            )}
          />
        ))}
      </RadioGroup>
    </div>
  )
}`,
  },
  {
    name: "StorageCapacityVariant",
    description: "Device storage capacity options showing price differences.",
    code: `
const options = [
  { value: "128", label: "128 GB", price: "$699" },
  { value: "256", label: "256 GB", price: "$799" },
  { value: "512", label: "512 GB", price: "$999" },
  { value: "1024", label: "1 TB", price: "$1,199" },
]

export default function StorageCapacityVariant() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Storage</FieldLegend>
      <RadioGroup defaultValue="256" className="grid grid-cols-2 gap-2">
        {options.map((o) => (
          <FieldLabel key={o.value} htmlFor={"cap-" + o.value}>
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>{o.label}</FieldTitle>
                <FieldDescription>From {o.price}</FieldDescription>
              </FieldContent>
              <RadioGroupItem value={o.value} id={"cap-" + o.value} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}`,
  },
  {
    name: "SignupAccountType",
    description: "Sign-up step for choosing a personal or business account with icons.",
    code: `
export default function SignupAccountType() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div>
        <p className="text-base font-semibold">How will you use Brightpost?</p>
        <p className="text-sm text-muted-foreground">You can change this later in settings.</p>
      </div>
      <RadioGroup defaultValue="personal" className="grid grid-cols-2 gap-3">
        <FieldLabel htmlFor="acct-personal">
          <Field>
            <UserIcon className="size-5" />
            <FieldContent>
              <FieldTitle>Personal</FieldTitle>
              <FieldDescription>For side projects and newsletters.</FieldDescription>
            </FieldContent>
            <RadioGroupItem value="personal" id="acct-personal" className="sr-only" />
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="acct-business">
          <Field>
            <BriefcaseIcon className="size-5" />
            <FieldContent>
              <FieldTitle>Business</FieldTitle>
              <FieldDescription>For teams, invoices, and billing.</FieldDescription>
            </FieldContent>
            <RadioGroupItem value="business" id="acct-business" className="sr-only" />
          </Field>
        </FieldLabel>
      </RadioGroup>
      <Button>Continue</Button>
    </div>
  )
}`,
  },
  {
    name: "ExportFormatOptions",
    description: "Data export panel for picking CSV, JSON, or spreadsheet output.",
    code: `
const formats = [
  { value: "csv", label: "CSV", hint: "Comma-separated, opens anywhere", icon: FileTextIcon },
  { value: "json", label: "JSON", hint: "Structured, for developers", icon: FileJsonIcon },
  { value: "xlsx", label: "Spreadsheet", hint: "Formatted with headers", icon: FileSpreadsheetIcon },
]

export default function ExportFormatOptions() {
  const [format, setFormat] = React.useState("csv")

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div>
        <p className="text-sm font-medium">Export 1,284 contacts</p>
        <p className="text-xs text-muted-foreground">Choose a file format.</p>
      </div>
      <RadioGroup value={format} onValueChange={(v) => setFormat(v as string)}>
        {formats.map((f) => (
          <FieldLabel key={f.value} htmlFor={"fmt-" + f.value}>
            <Field orientation="horizontal">
              <f.icon className="size-4 text-muted-foreground" />
              <FieldContent>
                <FieldTitle>{f.label}</FieldTitle>
                <FieldDescription>{f.hint}</FieldDescription>
              </FieldContent>
              <RadioGroupItem value={f.value} id={"fmt-" + f.value} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
      <Button>
        <DownloadIcon data-icon="inline-start" />
        Download .{format}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "CancellationReasonOther",
    description: "Cancellation survey where choosing Other reveals a free-text field.",
    code: `
const reasons = [
  { value: "price", label: "It's too expensive" },
  { value: "features", label: "Missing features I need" },
  { value: "switch", label: "Switching to another tool" },
  { value: "other", label: "Other" },
]

export default function CancellationReasonOther() {
  const [reason, setReason] = React.useState("price")

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Why are you cancelling?</FieldLegend>
      <FieldDescription>Your feedback helps us improve.</FieldDescription>
      <RadioGroup value={reason} onValueChange={(v) => setReason(v as string)}>
        {reasons.map((r) => (
          <Field key={r.value} orientation="horizontal">
            <RadioGroupItem value={r.value} id={"cancel-" + r.value} />
            <FieldLabel htmlFor={"cancel-" + r.value} className="font-normal">{r.label}</FieldLabel>
          </Field>
        ))}
      </RadioGroup>
      {reason === "other" && (
        <Textarea aria-label="Tell us more" placeholder="Tell us a little more..." className="min-h-20" />
      )}
      <Button variant="destructive" className="self-start">Cancel subscription</Button>
    </FieldSet>
  )
}`,
  },
  {
    name: "DonationAmountPicker",
    description: "Donation amount presets with a custom amount input option.",
    code: `
const presets = ["10", "25", "50", "100"]

export default function DonationAmountPicker() {
  const [amount, setAmount] = React.useState("25")
  const [custom, setCustom] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <p className="text-sm font-medium">Choose an amount</p>
      <RadioGroup value={amount} onValueChange={(v) => setAmount(v as string)} className="grid grid-cols-4 gap-2">
        {presets.map((p) => (
          <label
            key={p}
            htmlFor={"donate-" + p}
            className="flex h-10 cursor-pointer items-center justify-center border text-sm font-medium has-data-checked:border-primary has-data-checked:bg-primary has-data-checked:text-primary-foreground"
          >
            <RadioGroupItem value={p} id={"donate-" + p} className="sr-only" />
            {"$" + p}
          </label>
        ))}
        <label
          htmlFor="donate-custom"
          className="col-span-4 flex cursor-pointer items-center gap-3 border p-2 has-data-checked:border-primary"
        >
          <RadioGroupItem value="custom" id="donate-custom" />
          <span className="text-sm">Other</span>
          <Input
            aria-label="Custom amount"
            inputMode="decimal"
            placeholder="$ Amount"
            value={custom}
            onFocus={() => setAmount("custom")}
            onChange={(event) => setCustom(event.target.value)}
            className="h-8 flex-1"
          />
        </label>
      </RadioGroup>
      <Button>
        <HeartIcon data-icon="inline-start" />
        Donate {amount === "custom" ? (custom ? "$" + custom : "") : "$" + amount}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "FlightCabinClass",
    description: "Flight booking cabin class selector with fares and perks.",
    code: `
const cabins = [
  { value: "economy", label: "Economy", fare: "$412", perks: "1 carry-on" },
  { value: "premium", label: "Premium economy", fare: "$689", perks: "Extra legroom, 2 bags" },
  { value: "business", label: "Business", fare: "$1,940", perks: "Lie-flat seat, lounge" },
]

export default function FlightCabinClass() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center gap-2 text-sm">
        <PlaneIcon className="size-4" />
        <span className="font-medium">Lisbon to Reykjavik</span>
        <span className="text-muted-foreground">&middot; Dec 4</span>
      </div>
      <RadioGroup defaultValue="economy">
        {cabins.map((c) => (
          <FieldLabel key={c.value} htmlFor={"cabin-" + c.value}>
            <Field orientation="horizontal">
              <RadioGroupItem value={c.value} id={"cabin-" + c.value} />
              <FieldContent>
                <FieldTitle>{c.label}</FieldTitle>
                <FieldDescription>{c.perks}</FieldDescription>
              </FieldContent>
              <span className="text-sm font-semibold">{c.fare}</span>
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </div>
  )
}`,
  },
  {
    name: "RestaurantTipSelector",
    description: "Tip percentage selector that computes the tip amount for a bill.",
    code: `
const tips = ["15", "18", "20", "25"]

export default function RestaurantTipSelector() {
  const [tip, setTip] = React.useState("18")
  const bill = 64.4

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Bill</span>
        <span className="tabular-nums">{"$" + bill.toFixed(2)}</span>
      </div>
      <RadioGroup value={tip} onValueChange={(v) => setTip(v as string)} aria-label="Tip" className="grid grid-cols-4 gap-0 border">
        {tips.map((t) => (
          <label
            key={t}
            htmlFor={"tip-" + t}
            className="flex h-12 cursor-pointer flex-col items-center justify-center border-e text-sm last:border-e-0 has-data-checked:bg-primary has-data-checked:text-primary-foreground"
          >
            <RadioGroupItem value={t} id={"tip-" + t} className="sr-only" />
            <span className="font-medium">{t}%</span>
            <span className="text-[10px] opacity-70">{"$" + ((bill * Number(t)) / 100).toFixed(2)}</span>
          </label>
        ))}
      </RadioGroup>
      <div className="flex justify-between text-sm font-medium">
        <span>Total</span>
        <span className="tabular-nums">{"$" + (bill * (1 + Number(tip) / 100)).toFixed(2)}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "PrimaryOwnerTable",
    description: "Members table with a radio column to pick the workspace primary owner.",
    code: `
const members = [
  { id: "m1", name: "Ava Lindqvist", email: "ava@fernwood.io" },
  { id: "m2", name: "Jonah Mbeki", email: "jonah@fernwood.io" },
  { id: "m3", name: "Rosa Delgado", email: "rosa@fernwood.io" },
]

export default function PrimaryOwnerTable() {
  return (
    <div className="w-full max-w-md border">
      <RadioGroup defaultValue="m1" aria-label="Primary owner">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Owner</TableHead>
              <TableHead>Member</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((m) => (
              <TableRow key={m.id}>
                <TableCell>
                  <RadioGroupItem value={m.id} id={"owner-" + m.id} aria-label={"Make " + m.name + " primary owner"} />
                </TableCell>
                <TableCell>
                  <label htmlFor={"owner-" + m.id} className="flex cursor-pointer items-center gap-2">
                    <Avatar size="sm">
                      <AvatarFallback>{m.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <span>
                      <span className="block font-medium">{m.name}</span>
                      <span className="block text-xs text-muted-foreground">{m.email}</span>
                    </span>
                  </label>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </RadioGroup>
    </div>
  )
}`,
  },
  {
    name: "SavedAddressList",
    description: "Saved shipping addresses with a default selection and edit actions.",
    code: `
const addresses = [
  { id: "home", label: "Home", line: "14 Alder Lane, Portland, OR 97205" },
  { id: "office", label: "Office", line: "220 Market St, Suite 4, Portland, OR 97204" },
]

export default function SavedAddressList() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <RadioGroup defaultValue="home">
        {addresses.map((a) => (
          <FieldLabel key={a.id} htmlFor={"addr-" + a.id}>
            <Field orientation="horizontal">
              <RadioGroupItem value={a.id} id={"addr-" + a.id} />
              <FieldContent>
                <FieldTitle>
                  <MapPinIcon className="size-3.5" />
                  {a.label}
                </FieldTitle>
                <FieldDescription>{a.line}</FieldDescription>
              </FieldContent>
              <Button variant="ghost" size="icon-xs" aria-label={"Edit " + a.label}>
                <PencilIcon />
              </Button>
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
      <Button variant="outline" size="sm" className="self-start">
        <PlusIcon data-icon="inline-start" />
        Add address
      </Button>
    </div>
  )
}`,
  },
  {
    name: "SortOrderPopover",
    description: "Popover with a radio group for choosing a list sort order.",
    code: `
const sorts = [
  { value: "recent", label: "Most recent" },
  { value: "oldest", label: "Oldest first" },
  { value: "name", label: "Name A-Z" },
  { value: "size", label: "File size" },
]

export default function SortOrderPopover() {
  const [sort, setSort] = React.useState("recent")
  const current = sorts.find((s) => s.value === sort)

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <ArrowUpDownIcon data-icon="inline-start" />
        {current?.label}
      </PopoverTrigger>
      <PopoverContent className="w-52">
        <PopoverHeader>
          <PopoverTitle>Sort files by</PopoverTitle>
        </PopoverHeader>
        <RadioGroup value={sort} onValueChange={(v) => setSort(v as string)} className="gap-3">
          {sorts.map((s) => (
            <Field key={s.value} orientation="horizontal">
              <RadioGroupItem value={s.value} id={"sort-" + s.value} />
              <FieldLabel htmlFor={"sort-" + s.value} className="font-normal">{s.label}</FieldLabel>
            </Field>
          ))}
        </RadioGroup>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "ListDensityPreview",
    description: "Density setting with a live preview of list rows at each spacing.",
    code: `
const densities = [
  { value: "compact", label: "Compact", gap: "gap-0.5", row: "py-1" },
  { value: "default", label: "Default", gap: "gap-1", row: "py-2" },
  { value: "relaxed", label: "Relaxed", gap: "gap-2", row: "py-3" },
]
const rows = ["Quarterly planning", "Design review", "Vendor invoices"]

export default function ListDensityPreview() {
  const [density, setDensity] = React.useState("default")
  const current = densities.find((d) => d.value === density) ?? densities[1]!

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <RadioGroup value={density} onValueChange={(v) => setDensity(v as string)} className="flex gap-5">
        {densities.map((d) => (
          <Field key={d.value} orientation="horizontal" className="w-auto">
            <RadioGroupItem value={d.value} id={"density-" + d.value} />
            <FieldLabel htmlFor={"density-" + d.value} className="font-normal">{d.label}</FieldLabel>
          </Field>
        ))}
      </RadioGroup>
      <div className={cn("flex flex-col border p-2", current.gap)}>
        {rows.map((row) => (
          <div key={row} className={cn("flex items-center gap-2 bg-muted/50 px-2 text-sm", current.row)}>
            <InboxIcon className="size-3.5 text-muted-foreground" />
            {row}
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "InterfaceLanguageList",
    description: "Scrollable interface language list with locale codes and native names.",
    code: `
const languages = [
  { value: "en", name: "English", native: "English" },
  { value: "es", name: "Spanish", native: "Español" },
  { value: "fr", name: "French", native: "Français" },
  { value: "de", name: "German", native: "Deutsch" },
  { value: "ja", name: "Japanese", native: "日本語" },
  { value: "pt", name: "Portuguese", native: "Português" },
]

export default function InterfaceLanguageList() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <p className="text-sm font-medium">Interface language</p>
      <RadioGroup defaultValue="en" className="max-h-56 gap-0 overflow-y-auto border">
        {languages.map((lang) => (
          <label
            key={lang.value}
            htmlFor={"lang-" + lang.value}
            className="flex cursor-pointer items-center gap-3 border-b px-3 py-2 last:border-b-0 hover:bg-muted/50"
          >
            <span className="w-7 font-mono text-xs text-muted-foreground uppercase">{lang.value}</span>
            <span className="flex-1 text-sm">
              {lang.native}
              <span className="ms-1.5 text-xs text-muted-foreground">{lang.name}</span>
            </span>
            <RadioGroupItem value={lang.value} id={"lang-" + lang.value} />
          </label>
        ))}
      </RadioGroup>
    </div>
  )
}`,
  },
  {
    name: "PriceRangeFilter",
    description: "Store sidebar filter for price range with result counts.",
    code: `
const ranges = [
  { value: "any", label: "Any price", count: 248 },
  { value: "0-25", label: "Under $25", count: 64 },
  { value: "25-50", label: "$25 to $50", count: 92 },
  { value: "50-100", label: "$50 to $100", count: 71 },
  { value: "100+", label: "$100 and up", count: 21 },
]

export default function PriceRangeFilter() {
  return (
    <div className="flex w-full max-w-60 flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Price</span>
        <Button variant="link" size="xs" className="h-auto p-0">Clear</Button>
      </div>
      <RadioGroup defaultValue="any" className="gap-2.5">
        {ranges.map((r) => (
          <Field key={r.value} orientation="horizontal">
            <RadioGroupItem value={r.value} id={"price-" + r.value} />
            <FieldLabel htmlFor={"price-" + r.value} className="font-normal">{r.label}</FieldLabel>
            <span className="ms-auto text-xs text-muted-foreground tabular-nums">{r.count}</span>
          </Field>
        ))}
      </RadioGroup>
    </div>
  )
}`,
  },
  {
    name: "TwoFactorMethodChoice",
    description: "Two-factor authentication method selection with a recommended option.",
    code: `
const methods = [
  { value: "app", label: "Authenticator app", hint: "Use a code from an app on your phone.", icon: SmartphoneIcon, recommended: true },
  { value: "key", label: "Security key", hint: "Tap a hardware key to sign in.", icon: KeyRoundIcon, recommended: false },
  { value: "sms", label: "Text message", hint: "Receive a code at +1 ••• ••• 0192.", icon: MessageSquareIcon, recommended: false },
]

export default function TwoFactorMethodChoice() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheckIcon className="size-4" />
          Two-factor authentication
        </CardTitle>
        <CardDescription>Pick how you&apos;ll verify it&apos;s you.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="app">
          {methods.map((m) => (
            <FieldLabel key={m.value} htmlFor={"tfa-" + m.value}>
              <Field orientation="horizontal">
                <RadioGroupItem value={m.value} id={"tfa-" + m.value} />
                <FieldContent>
                  <FieldTitle>
                    {m.label}
                    {m.recommended && <Badge variant="secondary">Recommended</Badge>}
                  </FieldTitle>
                  <FieldDescription>{m.hint}</FieldDescription>
                </FieldContent>
                <m.icon className="size-4 text-muted-foreground" />
              </Field>
            </FieldLabel>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "MeetingDurationTiles",
    description: "Booking page duration picker with time tiles in a single row.",
    code: `
const durations = ["15", "30", "45", "60"]

export default function MeetingDurationTiles() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>EK</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Intro call with Elena Kovac</p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <VideoIcon className="size-3" />
            Video meeting
          </p>
        </div>
      </div>
      <RadioGroup defaultValue="30" aria-label="Duration" className="grid grid-cols-4 gap-2">
        {durations.map((d) => (
          <label
            key={d}
            htmlFor={"dur-" + d}
            className="flex h-14 cursor-pointer flex-col items-center justify-center border has-data-checked:border-primary has-data-checked:bg-primary/5 has-focus-visible:ring-2 has-focus-visible:ring-ring/50"
          >
            <RadioGroupItem value={d} id={"dur-" + d} className="sr-only" />
            <span className="text-base font-semibold">{d}</span>
            <span className="text-[11px] text-muted-foreground">min</span>
          </label>
        ))}
      </RadioGroup>
    </div>
  )
}`,
  },
  {
    name: "EventRecurrenceOptions",
    description: "Calendar event repeat options where weekly reveals day toggles.",
    code: `
const days = ["M", "T", "W", "T", "F", "S", "S"]

export default function EventRecurrenceOptions() {
  const [repeat, setRepeat] = React.useState("weekly")

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label" className="flex items-center gap-1.5">
        <RepeatIcon className="size-3.5" />
        Repeat
      </FieldLegend>
      <RadioGroup value={repeat} onValueChange={(v) => setRepeat(v as string)}>
        {["never", "daily", "weekly", "monthly"].map((r) => (
          <Field key={r} orientation="horizontal">
            <RadioGroupItem value={r} id={"rep-" + r} />
            <FieldLabel htmlFor={"rep-" + r} className="font-normal capitalize">{r}</FieldLabel>
          </Field>
        ))}
      </RadioGroup>
      {repeat === "weekly" && (
        <div className="flex gap-1 ps-6">
          {days.map((d, i) => (
            <Button key={i} variant={i === 1 || i === 3 ? "default" : "outline"} size="icon-xs">
              {d}
            </Button>
          ))}
        </div>
      )}
    </FieldSet>
  )
}`,
  },
  {
    name: "AssistantModelSelect",
    description: "AI assistant model choice with speed and depth indicators.",
    code: `
const models = [
  { value: "swift", label: "Swift", hint: "Fast replies for quick questions", speed: 3, depth: 1 },
  { value: "balanced", label: "Balanced", hint: "Good for everyday writing", speed: 2, depth: 2 },
  { value: "deep", label: "Deep think", hint: "Slower, best for analysis", speed: 1, depth: 3 },
]

function Meter({ value }: { value: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3].map((n) => (
        <span key={n} className={cn("h-2 w-1", n <= value ? "bg-foreground" : "bg-muted")} />
      ))}
    </span>
  )
}

export default function AssistantModelSelect() {
  return (
    <RadioGroup defaultValue="balanced" className="w-full max-w-sm">
      {models.map((m) => (
        <FieldLabel key={m.value} htmlFor={"model-" + m.value}>
          <Field orientation="horizontal">
            <RadioGroupItem value={m.value} id={"model-" + m.value} />
            <FieldContent>
              <FieldTitle>{m.label}</FieldTitle>
              <FieldDescription>{m.hint}</FieldDescription>
            </FieldContent>
            <div className="flex flex-col items-end gap-1 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1.5">Speed <Meter value={m.speed} /></span>
              <span className="flex items-center gap-1.5">Depth <Meter value={m.depth} /></span>
            </div>
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  )
}`,
  },
  {
    name: "PizzaOrderBuilder",
    description: "Food order builder with size and crust groups updating the total price.",
    code: `
const sizes = [
  { value: "small", label: "Small 10\\"", price: 11 },
  { value: "medium", label: "Medium 12\\"", price: 14 },
  { value: "large", label: "Large 14\\"", price: 17 },
]
const crusts = [
  { value: "classic", label: "Classic", price: 0 },
  { value: "thin", label: "Thin & crispy", price: 0 },
  { value: "stuffed", label: "Cheese-stuffed", price: 2.5 },
]

export default function PizzaOrderBuilder() {
  const [size, setSize] = React.useState("medium")
  const [crust, setCrust] = React.useState("classic")
  const total =
    (sizes.find((s) => s.value === size)?.price ?? 0) +
    (crusts.find((c) => c.value === crust)?.price ?? 0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <p className="text-base font-semibold">Margherita</p>
      <FieldSet>
        <FieldLegend variant="label">Size</FieldLegend>
        <RadioGroup value={size} onValueChange={(v) => setSize(v as string)}>
          {sizes.map((s) => (
            <Field key={s.value} orientation="horizontal">
              <RadioGroupItem value={s.value} id={"pz-size-" + s.value} />
              <FieldLabel htmlFor={"pz-size-" + s.value} className="font-normal">{s.label}</FieldLabel>
              <span className="ms-auto text-sm text-muted-foreground">{"$" + s.price}</span>
            </Field>
          ))}
        </RadioGroup>
      </FieldSet>
      <FieldSet>
        <FieldLegend variant="label">Crust</FieldLegend>
        <RadioGroup value={crust} onValueChange={(v) => setCrust(v as string)}>
          {crusts.map((c) => (
            <Field key={c.value} orientation="horizontal">
              <RadioGroupItem value={c.value} id={"pz-crust-" + c.value} />
              <FieldLabel htmlFor={"pz-crust-" + c.value} className="font-normal">{c.label}</FieldLabel>
              <span className="ms-auto text-sm text-muted-foreground">{c.price ? "+$" + c.price.toFixed(2) : ""}</span>
            </Field>
          ))}
        </RadioGroup>
      </FieldSet>
      <Button>Add to order &middot; {"$" + total.toFixed(2)}</Button>
    </div>
  )
}`,
  },
  {
    name: "FileConflictResolution",
    description: "File manager dialog body for resolving a name conflict during copy.",
    code: `
export default function FileConflictResolution() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-start gap-3">
        <FileWarningIcon className="mt-0.5 size-5 text-amber-500" />
        <div>
          <p className="text-sm font-medium">&quot;budget-2027.xlsx&quot; already exists</p>
          <p className="text-xs text-muted-foreground">in Finance / Planning</p>
        </div>
      </div>
      <RadioGroup defaultValue="keep" className="gap-3">
        <Field orientation="horizontal">
          <RadioGroupItem value="replace" id="conflict-replace" />
          <FieldContent>
            <FieldLabel htmlFor="conflict-replace">Replace</FieldLabel>
            <FieldDescription>Overwrite the existing file.</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="keep" id="conflict-keep" />
          <FieldContent>
            <FieldLabel htmlFor="conflict-keep">Keep both</FieldLabel>
            <FieldDescription>Save as &quot;budget-2027 (1).xlsx&quot;.</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="skip" id="conflict-skip" />
          <FieldContent>
            <FieldLabel htmlFor="conflict-skip">Skip</FieldLabel>
            <FieldDescription>Don&apos;t copy this file.</FieldDescription>
          </FieldContent>
        </Field>
      </RadioGroup>
      <div className="flex justify-end gap-2">
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button size="sm">Apply</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "TicketPriorityPicker",
    description: "Support ticket priority selector with colored severity dots.",
    code: `
const priorities = [
  { value: "low", label: "Low", dot: "bg-muted-foreground" },
  { value: "medium", label: "Medium", dot: "bg-sky-500" },
  { value: "high", label: "High", dot: "bg-amber-500" },
  { value: "urgent", label: "Urgent", dot: "bg-destructive" },
]

export default function TicketPriorityPicker() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Priority</FieldLegend>
      <RadioGroup defaultValue="medium" className="grid grid-cols-2 gap-2">
        {priorities.map((p) => (
          <FieldLabel key={p.value} htmlFor={"prio-" + p.value}>
            <Field orientation="horizontal">
              <RadioGroupItem value={p.value} id={"prio-" + p.value} />
              <span className={cn("size-2", p.dot)} />
              <span className="text-sm">{p.label}</span>
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
      <FieldDescription>Urgent tickets page the on-call engineer.</FieldDescription>
    </FieldSet>
  )
}`,
  },
  {
    name: "InboxFilterCounts",
    description: "Inbox filter radio list with unread counts in badges.",
    code: `
const filters = [
  { value: "all", label: "All messages", icon: InboxIcon, count: 128 },
  { value: "unread", label: "Unread", icon: MailIcon, count: 12 },
  { value: "mentions", label: "Mentions", icon: AtSignIcon, count: 3 },
  { value: "starred", label: "Starred", icon: StarIcon, count: 0 },
]

export default function InboxFilterCounts() {
  return (
    <RadioGroup defaultValue="unread" aria-label="Inbox filter" className="w-full max-w-60 gap-0.5">
      {filters.map((f) => (
        <label
          key={f.value}
          htmlFor={"inbox-" + f.value}
          className="flex cursor-pointer items-center gap-2.5 px-2 py-1.5 text-sm hover:bg-muted/60 has-data-checked:bg-muted has-data-checked:font-medium"
        >
          <RadioGroupItem value={f.value} id={"inbox-" + f.value} className="sr-only" />
          <f.icon className="size-4 text-muted-foreground" />
          <span className="flex-1">{f.label}</span>
          {f.count > 0 && <Badge variant="secondary">{f.count}</Badge>}
        </label>
      ))}
    </RadioGroup>
  )
}`,
  },
  {
    name: "ProjectTemplateGrid",
    description: "New project template picker in a two-by-two grid of icon cards.",
    code: `
const templates = [
  { value: "blank", label: "Blank", icon: FileIcon },
  { value: "kanban", label: "Kanban board", icon: KanbanIcon },
  { value: "roadmap", label: "Roadmap", icon: MilestoneIcon },
  { value: "docs", label: "Docs wiki", icon: BookOpenIcon },
]

export default function ProjectTemplateGrid() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <p className="text-sm font-medium">Start from a template</p>
      <RadioGroup defaultValue="kanban" className="grid grid-cols-2 gap-2">
        {templates.map((t) => (
          <label
            key={t.value}
            htmlFor={"tpl-" + t.value}
            className="relative flex cursor-pointer flex-col gap-3 border p-3 has-data-checked:border-primary has-data-checked:bg-primary/5"
          >
            <RadioGroupItem value={t.value} id={"tpl-" + t.value} className="absolute end-3 top-3" />
            <t.icon className="size-5 text-muted-foreground" />
            <span className="text-sm font-medium">{t.label}</span>
          </label>
        ))}
      </RadioGroup>
    </div>
  )
}`,
  },
  {
    name: "NestedScheduleOptions",
    description: "Backup schedule where choosing Custom reveals a nested radio group.",
    code: `
export default function NestedScheduleOptions() {
  const [schedule, setSchedule] = React.useState("custom")

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Backup schedule</FieldLegend>
      <RadioGroup value={schedule} onValueChange={(v) => setSchedule(v as string)}>
        <Field orientation="horizontal">
          <RadioGroupItem value="hourly" id="bk-hourly" />
          <FieldLabel htmlFor="bk-hourly" className="font-normal">Every hour</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="nightly" id="bk-nightly" />
          <FieldLabel htmlFor="bk-nightly" className="font-normal">Nightly at 2:00 AM</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="custom" id="bk-custom" />
          <FieldLabel htmlFor="bk-custom" className="font-normal">Custom</FieldLabel>
        </Field>
      </RadioGroup>
      {schedule === "custom" && (
        <div className="ms-1.5 border-s ps-4">
          <RadioGroup defaultValue="weekdays" aria-label="Custom days" className="gap-2">
            <Field orientation="horizontal">
              <RadioGroupItem value="weekdays" id="bk-weekdays" />
              <FieldLabel htmlFor="bk-weekdays" className="font-normal text-muted-foreground">Weekdays only</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="weekends" id="bk-weekends" />
              <FieldLabel htmlFor="bk-weekends" className="font-normal text-muted-foreground">Weekends only</FieldLabel>
            </Field>
          </RadioGroup>
        </div>
      )}
    </FieldSet>
  )
}`,
  },
  {
    name: "ReadOnlyPlanSelection",
    description: "Read-only plan selection shown to members without billing permissions.",
    code: `
const plans = [
  { value: "starter", label: "Starter", price: "$0" },
  { value: "team", label: "Team", price: "$18 / seat" },
  { value: "scale", label: "Scale", price: "$32 / seat" },
]

export default function ReadOnlyPlanSelection() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <RadioGroup defaultValue="team" readOnly>
        {plans.map((p) => (
          <FieldLabel key={p.value} htmlFor={"ro-" + p.value}>
            <Field orientation="horizontal">
              <RadioGroupItem value={p.value} id={"ro-" + p.value} />
              <FieldTitle>{p.label}</FieldTitle>
              <span className="ms-auto text-sm text-muted-foreground">{p.price}</span>
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <InfoIcon className="size-3.5" />
        Only billing admins can change the plan.
      </p>
    </div>
  )
}`,
  },
  {
    name: "NamedRadioFormSubmit",
    description: "Native form submission using the radio group's name to read the value.",
    code: `
export default function NamedRadioFormSubmit() {
  const [result, setResult] = React.useState<string | null>(null)

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        setResult(String(data.get("contact") ?? ""))
      }}
    >
      <FieldSet>
        <FieldLegend variant="label">Preferred contact method</FieldLegend>
        <RadioGroup name="contact" defaultValue="email" required>
          <Field orientation="horizontal">
            <RadioGroupItem value="email" id="contact-email" />
            <FieldLabel htmlFor="contact-email" className="font-normal">Email</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="phone" id="contact-phone" />
            <FieldLabel htmlFor="contact-phone" className="font-normal">Phone call</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="none" id="contact-none" />
            <FieldLabel htmlFor="contact-none" className="font-normal">Don&apos;t contact me</FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
      <div className="flex items-center gap-3">
        <Button type="submit" size="sm">Save preference</Button>
        {result && (
          <span className="font-mono text-xs text-muted-foreground">contact=&quot;{result}&quot;</span>
        )}
      </div>
    </form>
  )
}`,
  },
  {
    name: "WarrantyAddOn",
    description: "Product page protection plan add-on with no-coverage default.",
    code: `
const plans = [
  { value: "none", label: "No protection", hint: "Manufacturer warranty only", price: "" },
  { value: "1y", label: "1-year protection", hint: "Accidental damage included", price: "$29" },
  { value: "3y", label: "3-year protection", hint: "Damage, theft, and battery", price: "$69" },
]

export default function WarrantyAddOn() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label" className="flex items-center gap-1.5">
        <ShieldIcon className="size-3.5" />
        Add protection
      </FieldLegend>
      <RadioGroup defaultValue="none" className="gap-0 border">
        {plans.map((p) => (
          <label
            key={p.value}
            htmlFor={"warr-" + p.value}
            className="flex cursor-pointer items-start gap-3 border-b p-3 last:border-b-0 has-data-checked:bg-muted/40"
          >
            <RadioGroupItem value={p.value} id={"warr-" + p.value} className="mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium">{p.label}</p>
              <p className="text-xs text-muted-foreground">{p.hint}</p>
            </div>
            {p.price && <span className="text-sm font-medium">{p.price}</span>}
          </label>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}`,
  },
  {
    name: "SegmentedViewSwitcher",
    description: "Segmented view switcher for list, grid, and board layouts.",
    code: `
const views = [
  { value: "list", label: "List", icon: ListIcon },
  { value: "grid", label: "Grid", icon: LayoutGridIcon },
  { value: "board", label: "Board", icon: KanbanIcon },
]

export default function SegmentedViewSwitcher() {
  const [view, setView] = React.useState("grid")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <RadioGroup value={view} onValueChange={(v) => setView(v as string)} aria-label="View" className="flex w-fit gap-0 border p-0.5">
        {views.map((v) => (
          <label
            key={v.value}
            htmlFor={"view-" + v.value}
            className="flex cursor-pointer items-center gap-1.5 px-3 py-1.5 text-sm text-muted-foreground has-data-checked:bg-muted has-data-checked:text-foreground has-focus-visible:ring-2 has-focus-visible:ring-ring/50"
          >
            <RadioGroupItem value={v.value} id={"view-" + v.value} className="sr-only" />
            <v.icon className="size-4" />
            {v.label}
          </label>
        ))}
      </RadioGroup>
      <p className="text-xs text-muted-foreground">Showing 42 assets in {view} view.</p>
    </div>
  )
}`,
  },
  {
    name: "CookieConsentLevels",
    description: "Cookie consent banner with essential, analytics, and full tracking levels.",
    code: `
export default function CookieConsentLevels() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 border p-4">
      <div className="flex items-center gap-2">
        <CookieIcon className="size-4" />
        <span className="text-sm font-medium">Cookie preferences</span>
      </div>
      <RadioGroup defaultValue="analytics" className="gap-3">
        <Field orientation="horizontal">
          <RadioGroupItem value="essential" id="cookie-essential" />
          <FieldContent>
            <FieldLabel htmlFor="cookie-essential">Essential only</FieldLabel>
            <FieldDescription>Required for sign-in and checkout.</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="analytics" id="cookie-analytics" />
          <FieldContent>
            <FieldLabel htmlFor="cookie-analytics">Essential + analytics</FieldLabel>
            <FieldDescription>Helps us understand which pages are useful.</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="all" id="cookie-all" />
          <FieldContent>
            <FieldLabel htmlFor="cookie-all">All cookies</FieldLabel>
            <FieldDescription>Includes personalized recommendations.</FieldDescription>
          </FieldContent>
        </Field>
      </RadioGroup>
      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm">Reject all</Button>
        <Button size="sm">Save choices</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "PauseSubscriptionDuration",
    description: "Retention offer to pause a subscription for one, two, or three months.",
    code: `
const options = [
  { value: "1", label: "1 month", resume: "Resumes Dec 15" },
  { value: "2", label: "2 months", resume: "Resumes Jan 15" },
  { value: "3", label: "3 months", resume: "Resumes Feb 15" },
]

export default function PauseSubscriptionDuration() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Need a break instead?</CardTitle>
        <CardDescription>Pause your meal kit deliveries and keep your saved recipes.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="1" className="grid grid-cols-3 gap-2">
          {options.map((o) => (
            <FieldLabel key={o.value} htmlFor={"pause-" + o.value}>
              <Field>
                <RadioGroupItem value={o.value} id={"pause-" + o.value} />
                <FieldContent>
                  <FieldTitle>{o.label}</FieldTitle>
                  <FieldDescription className="text-[11px]">{o.resume}</FieldDescription>
                </FieldContent>
              </Field>
            </FieldLabel>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">
          <CirclePauseIcon data-icon="inline-start" />
          Pause subscription
        </Button>
        <Button variant="link" size="sm">No thanks, cancel</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "ReviewerAssigneePicker",
    description: "Pull request reviewer picker listing teammates with avatars and status.",
    code: `
const people = [
  { value: "dk", name: "Dara Kim", role: "Frontend", status: "Available" },
  { value: "lm", name: "Luca Moretti", role: "Platform", status: "2 reviews pending" },
  { value: "hs", name: "Hana Sato", role: "Design systems", status: "Out until Monday" },
]

export default function ReviewerAssigneePicker() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <p className="text-sm font-medium">Request review from</p>
      <RadioGroup defaultValue="dk" className="gap-0 border">
        {people.map((p) => {
          const away = p.status.startsWith("Out")
          return (
            <label
              key={p.value}
              htmlFor={"rev-" + p.value}
              className="flex cursor-pointer items-center gap-3 border-b p-2.5 last:border-b-0 has-disabled:cursor-not-allowed has-disabled:opacity-50"
            >
              <RadioGroupItem value={p.value} id={"rev-" + p.value} disabled={away} />
              <Avatar size="sm">
                <AvatarFallback>{p.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{p.name}</p>
                <p className="truncate text-xs text-muted-foreground">{p.role} &middot; {p.status}</p>
              </div>
            </label>
          )
        })}
      </RadioGroup>
    </div>
  )
}`,
  },
  {
    name: "VideoQualitySettings",
    description: "Video player settings menu for choosing streaming quality.",
    code: `
const qualities = [
  { value: "auto", label: "Auto", note: "1080p" },
  { value: "2160", label: "2160p", note: "4K" },
  { value: "1080", label: "1080p", note: "HD" },
  { value: "720", label: "720p", note: "" },
  { value: "480", label: "480p", note: "Data saver" },
]

export default function VideoQualitySettings() {
  return (
    <div className="flex w-full max-w-56 flex-col bg-neutral-950 p-2 text-neutral-100">
      <p className="flex items-center gap-2 px-2 pb-2 text-xs font-medium text-neutral-400">
        <SettingsIcon className="size-3.5" />
        Quality
      </p>
      <RadioGroup defaultValue="auto" className="gap-0">
        {qualities.map((q) => (
          <label
            key={q.value}
            htmlFor={"vq-" + q.value}
            className="flex cursor-pointer items-center gap-3 px-2 py-1.5 text-sm hover:bg-white/10"
          >
            <RadioGroupItem
              value={q.value}
              id={"vq-" + q.value}
              className="border-neutral-500 data-checked:border-white data-checked:bg-white dark:bg-transparent dark:data-checked:bg-white [&_[data-slot=radio-group-indicator]_span]:bg-neutral-950"
            />
            <span className="flex-1">{q.label}</span>
            {q.note && <span className="text-[11px] text-neutral-400">{q.note}</span>}
          </label>
        ))}
      </RadioGroup>
    </div>
  )
}`,
  },
  {
    name: "RadioItemSizes",
    description: "Radio items rendered at small, default, and large sizes.",
    code: `
const sizes = [
  { value: "sm", label: "Small", item: "size-3.5 [&_[data-slot=radio-group-indicator]]:size-3.5 [&_[data-slot=radio-group-indicator]_span]:size-1.5", text: "text-xs" },
  { value: "md", label: "Default", item: "", text: "text-sm" },
  { value: "lg", label: "Large", item: "size-5 [&_[data-slot=radio-group-indicator]]:size-5 [&_[data-slot=radio-group-indicator]_span]:size-2.5", text: "text-base" },
]

export default function RadioItemSizes() {
  return (
    <RadioGroup defaultValue="md" className="w-fit gap-4">
      {sizes.map((s) => (
        <Field key={s.value} orientation="horizontal">
          <RadioGroupItem value={s.value} id={"rsize-" + s.value} className={s.item} />
          <FieldLabel htmlFor={"rsize-" + s.value} className={cn("font-normal", s.text)}>
            {s.label}
          </FieldLabel>
        </Field>
      ))}
    </RadioGroup>
  )
}`,
  },
  {
    name: "ResponsiveFieldOrientation",
    description: "Settings row using responsive field orientation so the radio group wraps below on narrow widths.",
    code: `
export default function ResponsiveFieldOrientation() {
  return (
    <FieldGroup className="w-full max-w-md">
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel>Start of week</FieldLabel>
          <FieldDescription>Used in calendars and reports.</FieldDescription>
        </FieldContent>
        <RadioGroup defaultValue="monday" className="flex w-auto gap-4" aria-label="Start of week">
          <Field orientation="horizontal" className="w-auto">
            <RadioGroupItem value="sunday" id="week-sunday" />
            <FieldLabel htmlFor="week-sunday" className="font-normal">Sunday</FieldLabel>
          </Field>
          <Field orientation="horizontal" className="w-auto">
            <RadioGroupItem value="monday" id="week-monday" />
            <FieldLabel htmlFor="week-monday" className="font-normal">Monday</FieldLabel>
          </Field>
        </RadioGroup>
      </Field>
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel>Time format</FieldLabel>
          <FieldDescription>How times appear across the app.</FieldDescription>
        </FieldContent>
        <RadioGroup defaultValue="12h" className="flex w-auto gap-4" aria-label="Time format">
          <Field orientation="horizontal" className="w-auto">
            <RadioGroupItem value="12h" id="time-12h" />
            <FieldLabel htmlFor="time-12h" className="font-normal">1:00 PM</FieldLabel>
          </Field>
          <Field orientation="horizontal" className="w-auto">
            <RadioGroupItem value="24h" id="time-24h" />
            <FieldLabel htmlFor="time-24h" className="font-normal">13:00</FieldLabel>
          </Field>
        </RadioGroup>
      </Field>
    </FieldGroup>
  )
}`,
  },
]

export default examples
