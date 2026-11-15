import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "NotificationChannelMatrix",
    description: "Per-category notification settings with separate email and push switches.",
    code: `
const categories = [
  { id: "mentions", label: "Mentions", hint: "When someone @mentions you", email: true, push: true },
  { id: "comments", label: "Comments", hint: "Replies on your threads", email: false, push: true },
  { id: "invites", label: "Invites", hint: "Workspace and project invites", email: true, push: false },
  { id: "digest", label: "Weekly digest", hint: "Summary every Monday", email: true, push: false },
]

export default function NotificationChannelMatrix() {
  return (
    <div className="w-full max-w-md border">
      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-6 border-b bg-muted/50 px-4 py-2 text-xs font-medium text-muted-foreground">
        <span>Activity</span>
        <span className="flex items-center gap-1"><MailIcon className="size-3.5" />Email</span>
        <span className="flex items-center gap-1"><BellIcon className="size-3.5" />Push</span>
      </div>
      {categories.map((item) => (
        <div key={item.id} className="grid grid-cols-[1fr_auto_auto] items-center gap-x-6 border-b px-4 py-3 last:border-b-0">
          <div className="min-w-0">
            <p className="text-sm font-medium">{item.label}</p>
            <p className="truncate text-xs text-muted-foreground">{item.hint}</p>
          </div>
          <div className="flex w-12 justify-center">
            <Switch size="sm" defaultChecked={item.email} aria-label={item.label + " email"} />
          </div>
          <div className="flex w-12 justify-center">
            <Switch size="sm" defaultChecked={item.push} aria-label={item.label + " push"} />
          </div>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ControlledSwitchStatus",
    description: "A controlled switch whose state is reflected in a live status line.",
    code: `
export default function ControlledSwitchStatus() {
  const [enabled, setEnabled] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="vacation-mode">Vacation mode</Label>
        <Switch id="vacation-mode" checked={enabled} onCheckedChange={setEnabled} />
      </div>
      <p className="text-xs text-muted-foreground" aria-live="polite">
        {enabled
          ? "Your store is paused. Customers can browse but can't check out."
          : "Your store is open and accepting orders."}
      </p>
      <Button variant="outline" size="sm" onClick={() => setEnabled((v) => !v)}>
        Toggle from outside
      </Button>
    </div>
  )
}`,
  },
  {
    name: "SwitchSizes",
    description: "Default and small switch sizes side by side in on and off states.",
    code: `
export default function SwitchSizes() {
  return (
    <div className="grid w-full max-w-xs grid-cols-2 gap-4 border p-4">
      <div className="flex flex-col gap-3">
        <span className="text-xs font-medium text-muted-foreground">Default</span>
        <div className="flex items-center gap-2">
          <Switch id="size-default-off" />
          <Label htmlFor="size-default-off">Off</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="size-default-on" defaultChecked />
          <Label htmlFor="size-default-on">On</Label>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-xs font-medium text-muted-foreground">Small</span>
        <div className="flex items-center gap-2">
          <Switch id="size-sm-off" size="sm" />
          <Label htmlFor="size-sm-off" className="text-xs">Off</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="size-sm-on" size="sm" defaultChecked />
          <Label htmlFor="size-sm-on" className="text-xs">On</Label>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "PlanLockedSwitches",
    description: "Disabled switches for features locked behind a higher plan, with an upgrade prompt.",
    code: `
const features = [
  { id: "sso", label: "Single sign-on (SAML)", locked: true },
  { id: "audit", label: "Audit log export", locked: true },
  { id: "guests", label: "Guest access", locked: false },
]

export default function PlanLockedSwitches() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Security</CardTitle>
        <CardDescription>Some controls require the Business plan.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-center justify-between gap-4">
            <Label htmlFor={feature.id} className={cn(feature.locked && "text-muted-foreground")}>
              {feature.locked && <LockIcon className="size-3.5" />}
              {feature.label}
            </Label>
            <Switch id={feature.id} disabled={feature.locked} defaultChecked={!feature.locked} />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button size="sm" className="w-full">
          <SparklesIcon data-icon="inline-start" />
          Upgrade to Business
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "RequiredConsentSwitch",
    description: "A required consent switch that shows an invalid state and error when submitted off.",
    code: `
export default function RequiredConsentSwitch() {
  const [accepted, setAccepted] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const invalid = submitted && !accepted

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-4 border p-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <Field orientation="horizontal" data-invalid={invalid}>
        <FieldContent>
          <FieldLabel htmlFor="dpa">Accept data processing agreement</FieldLabel>
          <FieldDescription>Required before inviting teammates.</FieldDescription>
          {invalid && <FieldError>You need to accept the agreement to continue.</FieldError>}
        </FieldContent>
        <Switch id="dpa" checked={accepted} onCheckedChange={setAccepted} aria-invalid={invalid} />
      </Field>
      <Button type="submit" size="sm">
        {submitted && accepted ? "Agreement accepted" : "Continue"}
      </Button>
    </form>
  )
}`,
  },
  {
    name: "ThemeSwitchWithIcons",
    description: "Dark mode switch flanked by sun and moon icons that highlight the active side.",
    code: `
export default function ThemeSwitchWithIcons() {
  const [dark, setDark] = React.useState(false)

  return (
    <div className="flex items-center gap-3 border px-4 py-3">
      <SunIcon className={cn("size-4", dark ? "text-muted-foreground" : "text-foreground")} />
      <Switch checked={dark} onCheckedChange={setDark} aria-label="Dark mode" />
      <MoonIcon className={cn("size-4", dark ? "text-foreground" : "text-muted-foreground")} />
      <span className="ms-2 w-10 text-xs text-muted-foreground">{dark ? "Dark" : "Light"}</span>
    </div>
  )
}`,
  },
  {
    name: "QuickSettingsTiles",
    description: "Phone-style quick settings tiles where each tile hosts a switch.",
    code: `
const tiles = [
  { id: "wifi", label: "Wi-Fi", icon: WifiIcon, on: true, detail: "Home_5G" },
  { id: "bluetooth", label: "Bluetooth", icon: BluetoothIcon, on: true, detail: "2 devices" },
  { id: "airplane", label: "Airplane", icon: PlaneIcon, on: false, detail: "Off" },
  { id: "hotspot", label: "Hotspot", icon: RadioTowerIcon, on: false, detail: "Off" },
]

export default function QuickSettingsTiles() {
  const [state, setState] = React.useState(() =>
    Object.fromEntries(tiles.map((tile) => [tile.id, tile.on]))
  )

  return (
    <div className="grid w-full max-w-xs grid-cols-2 gap-2">
      {tiles.map((tile) => (
        <label
          key={tile.id}
          className={cn(
            "flex cursor-pointer flex-col gap-3 border p-3 transition-colors",
            state[tile.id] ? "bg-primary/5 border-primary/40" : "bg-background"
          )}
        >
          <div className="flex items-center justify-between">
            <tile.icon className="size-4" />
            <Switch
              size="sm"
              checked={state[tile.id]}
              onCheckedChange={(checked) => setState((s) => ({ ...s, [tile.id]: checked }))}
            />
          </div>
          <div>
            <p className="text-sm font-medium">{tile.label}</p>
            <p className="text-xs text-muted-foreground">{state[tile.id] ? tile.detail.replace("Off", "On") : "Off"}</p>
          </div>
        </label>
      ))}
    </div>
  )
}`,
  },
  {
    name: "FeatureFlagList",
    description: "Admin feature flag list with environment badges and rollout notes.",
    code: `
const flags = [
  { key: "new-checkout", env: "Production", note: "100% rollout", on: true },
  { key: "ai-summaries", env: "Staging", note: "Internal testers", on: true },
  { key: "dark-dashboard", env: "Production", note: "Paused after bug report", on: false },
  { key: "bulk-export-v2", env: "Development", note: "Behind QA review", on: false },
]

export default function FeatureFlagList() {
  return (
    <div className="w-full max-w-md divide-y border">
      {flags.map((flag) => (
        <div key={flag.key} className="flex items-center gap-3 px-4 py-3">
          <FlagIcon className="size-4 shrink-0 text-muted-foreground" />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <code className="font-mono text-xs font-medium">{flag.key}</code>
              <Badge variant={flag.env === "Production" ? "default" : "secondary"}>{flag.env}</Badge>
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">{flag.note}</p>
          </div>
          <Switch defaultChecked={flag.on} aria-label={"Toggle " + flag.key} />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "BillingCycleSwitch",
    description: "Monthly versus yearly billing switch that updates plan prices.",
    code: `
const plans = [
  { name: "Starter", monthly: 12 },
  { name: "Team", monthly: 29 },
]

export default function BillingCycleSwitch() {
  const [yearly, setYearly] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-center justify-center gap-3 text-sm">
        <span className={cn(!yearly ? "font-medium" : "text-muted-foreground")}>Monthly</span>
        <Switch checked={yearly} onCheckedChange={setYearly} aria-label="Bill yearly" />
        <span className={cn(yearly ? "font-medium" : "text-muted-foreground")}>Yearly</span>
        <Badge variant="secondary">Save 20%</Badge>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {plans.map((plan) => {
          const price = yearly ? Math.round(plan.monthly * 0.8) : plan.monthly
          return (
            <div key={plan.name} className="border p-4">
              <p className="text-sm font-medium">{plan.name}</p>
              <p className="mt-2 text-2xl font-semibold">
                {"$" + price}
                <span className="text-xs font-normal text-muted-foreground"> /mo</span>
              </p>
              <p className="text-xs text-muted-foreground">{yearly ? "Billed " + "$" + price * 12 + " yearly" : "Billed monthly"}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}`,
  },
  {
    name: "MasterSwitchWithChildren",
    description: "A master switch that enables or disables a group of dependent switches.",
    code: `
const children = [
  { id: "sound", label: "Play sound" },
  { id: "badge", label: "Show badge count" },
  { id: "preview", label: "Show message preview" },
]

export default function MasterSwitchWithChildren() {
  const [master, setMaster] = React.useState(true)

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between gap-4 border-b p-4">
        <div>
          <Label htmlFor="allow-notifications">Allow notifications</Label>
          <p className="text-xs text-muted-foreground">Turn off to silence everything.</p>
        </div>
        <Switch id="allow-notifications" checked={master} onCheckedChange={setMaster} />
      </div>
      <div className={cn("flex flex-col gap-3 p-4 ps-8", !master && "opacity-60")}>
        {children.map((child) => (
          <div key={child.id} className="flex items-center justify-between gap-4">
            <Label htmlFor={child.id} className="font-normal">{child.label}</Label>
            <Switch id={child.id} size="sm" defaultChecked disabled={!master} />
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "AsyncSavingSwitch",
    description: "A switch that shows a spinner and disables itself while the change is saved.",
    code: `
export default function AsyncSavingSwitch() {
  const [checked, setChecked] = React.useState(false)
  const [saving, setSaving] = React.useState(false)
  const [savedAt, setSavedAt] = React.useState<string | null>(null)

  function handleChange(next: boolean) {
    setSaving(true)
    setTimeout(() => {
      setChecked(next)
      setSaving(false)
      setSavedAt(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    }, 1200)
  }

  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-4 border p-4">
      <div>
        <Label htmlFor="public-profile">Public profile</Label>
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          {saving ? (
            <>
              <Spinner className="size-3" /> Saving...
            </>
          ) : savedAt ? (
            <>
              <CheckIcon className="size-3" /> Saved at {savedAt}
            </>
          ) : (
            "Anyone with the link can view your profile."
          )}
        </p>
      </div>
      <Switch id="public-profile" checked={checked} onCheckedChange={handleChange} disabled={saving} />
    </div>
  )
}`,
  },
  {
    name: "ConfirmTurnOffTwoFactor",
    description: "Turning off two-factor authentication asks for confirmation in an alert dialog.",
    code: `
export default function ConfirmTurnOffTwoFactor() {
  const [enabled, setEnabled] = React.useState(true)
  const [confirmOpen, setConfirmOpen] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-4">
      <ShieldCheckIcon className={cn("size-5 shrink-0", enabled ? "text-primary" : "text-muted-foreground")} />
      <div className="flex-1">
        <Label htmlFor="two-factor">Two-factor authentication</Label>
        <p className="text-xs text-muted-foreground">{enabled ? "Authenticator app is active." : "Your account is less secure."}</p>
      </div>
      <Switch
        id="two-factor"
        checked={enabled}
        onCheckedChange={(next) => (next ? setEnabled(true) : setConfirmOpen(true))}
      />
      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Turn off two-factor?</AlertDialogTitle>
            <AlertDialogDescription>
              Anyone with your password will be able to sign in. You can turn it back on at any time.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep it on</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onClick={() => {
                setEnabled(false)
                setConfirmOpen(false)
              }}
            >
              Turn off
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}`,
  },
  {
    name: "AutoReplySwitch",
    description: "An out-of-office switch that reveals an auto-reply message editor when enabled.",
    code: `
export default function AutoReplySwitch() {
  const [enabled, setEnabled] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <Label htmlFor="auto-reply">Out of office reply</Label>
          <p className="text-xs text-muted-foreground">Sent once per sender.</p>
        </div>
        <Switch id="auto-reply" checked={enabled} onCheckedChange={setEnabled} />
      </div>
      {enabled && (
        <Textarea
          aria-label="Auto-reply message"
          defaultValue="Thanks for your note! I'm away until Monday, Dec 2 with limited access to email. For urgent issues, reach Priya Raman."
          className="min-h-24"
        />
      )}
    </div>
  )
}`,
  },
  {
    name: "CookiePreferences",
    description: "Cookie consent preferences with an always-on, disabled essential category.",
    code: `
const groups = [
  { id: "essential", label: "Essential", description: "Required for sign-in and security.", locked: true },
  { id: "analytics", label: "Analytics", description: "Helps us understand how the site is used.", locked: false },
  { id: "marketing", label: "Marketing", description: "Personalized offers on other sites.", locked: false },
]

export default function CookiePreferences() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><CookieIcon className="size-4" />Cookie preferences</CardTitle>
        <CardDescription>Choose which cookies we can use.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup className="gap-4">
          {groups.map((group) => (
            <Field key={group.id} orientation="horizontal">
              <FieldContent>
                <FieldLabel htmlFor={"cookie-" + group.id}>
                  {group.label}
                  {group.locked && <Badge variant="outline">Always on</Badge>}
                </FieldLabel>
                <FieldDescription>{group.description}</FieldDescription>
              </FieldContent>
              <Switch id={"cookie-" + group.id} defaultChecked={group.locked} disabled={group.locked} />
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm" className="flex-1">Reject all</Button>
        <Button size="sm" className="flex-1">Save choices</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "SmartHomeDevices",
    description: "Smart home device cards with per-room power switches and live status.",
    code: `
const devices = [
  { id: "lamp", name: "Floor lamp", room: "Living room", icon: LampIcon, on: true },
  { id: "fan", name: "Ceiling fan", room: "Bedroom", icon: FanIcon, on: false },
  { id: "tv", name: "Television", room: "Living room", icon: TvIcon, on: false },
  { id: "heater", name: "Space heater", room: "Office", icon: HeaterIcon, on: true },
]

export default function SmartHomeDevices() {
  const [power, setPower] = React.useState(() =>
    Object.fromEntries(devices.map((device) => [device.id, device.on]))
  )
  const activeCount = Object.values(power).filter(Boolean).length

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <p className="text-xs text-muted-foreground">{activeCount} of {devices.length} devices on</p>
      {devices.map((device) => (
        <div key={device.id} className="flex items-center gap-3 border p-3">
          <div className={cn("flex size-9 items-center justify-center", power[device.id] ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground")}>
            <device.icon className="size-4" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">{device.name}</p>
            <p className="text-xs text-muted-foreground">{device.room}</p>
          </div>
          <Switch
            checked={power[device.id]}
            onCheckedChange={(checked) => setPower((p) => ({ ...p, [device.id]: checked }))}
            aria-label={device.name}
          />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "AdminManagedReadOnly",
    description: "Read-only switches whose values are enforced by an organization policy.",
    code: `
export default function AdminManagedReadOnly() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <Alert>
        <BuildingIcon />
        <AlertTitle>Managed by Northwind IT</AlertTitle>
        <AlertDescription>These settings are set by your organization.</AlertDescription>
      </Alert>
      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="disk-encryption">Disk encryption</Label>
        <Switch id="disk-encryption" defaultChecked readOnly />
      </div>
      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="usb-storage">Allow USB storage</Label>
        <Switch id="usb-storage" readOnly />
      </div>
    </div>
  )
}`,
  },
  {
    name: "WeeklyAvailability",
    description: "Weekly availability editor where each day's switch enables its hour inputs.",
    code: `
const days = [
  { day: "Monday", on: true },
  { day: "Tuesday", on: true },
  { day: "Wednesday", on: true },
  { day: "Thursday", on: true },
  { day: "Friday", on: false },
]

export default function WeeklyAvailability() {
  const [open, setOpen] = React.useState(() =>
    Object.fromEntries(days.map((d) => [d.day, d.on]))
  )

  return (
    <div className="w-full max-w-md divide-y border">
      {days.map(({ day }) => (
        <div key={day} className="flex flex-wrap items-center gap-3 px-4 py-2.5">
          <Switch
            size="sm"
            id={"day-" + day}
            checked={open[day]}
            onCheckedChange={(checked) => setOpen((o) => ({ ...o, [day]: checked }))}
          />
          <Label htmlFor={"day-" + day} className="w-20">{day}</Label>
          {open[day] ? (
            <div className="ms-auto flex items-center gap-1.5">
              <Input type="time" defaultValue="09:00" className="h-7 w-24" aria-label={day + " start"} />
              <span className="text-xs text-muted-foreground">to</span>
              <Input type="time" defaultValue="17:00" className="h-7 w-24" aria-label={day + " end"} />
            </div>
          ) : (
            <span className="ms-auto text-xs text-muted-foreground">Unavailable</span>
          )}
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ChatConversationOptions",
    description: "Conversation options panel for a chat app with mute, pin, and read receipts.",
    code: `
const options = [
  { id: "mute", label: "Mute conversation", icon: BellOffIcon, on: false },
  { id: "pin", label: "Pin to top", icon: PinIcon, on: true },
  { id: "receipts", label: "Send read receipts", icon: CheckCheckIcon, on: true },
]

export default function ChatConversationOptions() {
  return (
    <div className="w-full max-w-xs border">
      <div className="flex items-center gap-3 border-b p-4">
        <Avatar>
          <AvatarFallback>DS</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Design Squad</p>
          <p className="text-xs text-muted-foreground">8 members</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-2">
        {options.map((option) => (
          <label key={option.id} className="flex cursor-pointer items-center gap-3 px-2 py-2 hover:bg-muted/50">
            <option.icon className="size-4 text-muted-foreground" />
            <span className="flex-1 text-sm">{option.label}</span>
            <Switch size="sm" defaultChecked={option.on} />
          </label>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "ShareLinkSwitch",
    description: "File sharing switch that reveals a copyable public link when enabled.",
    code: `
export default function ShareLinkSwitch() {
  const [shared, setShared] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-3">
        <FileTextIcon className="size-5 text-muted-foreground" />
        <div className="flex-1">
          <p className="text-sm font-medium">Q3-roadmap.pdf</p>
          <p className="text-xs text-muted-foreground">2.4 MB</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="share-link" className="flex items-center gap-2">
          <Link2Icon className="size-4" />Anyone with the link
        </Label>
        <Switch id="share-link" checked={shared} onCheckedChange={(v) => { setShared(v); setCopied(false) }} />
      </div>
      {shared && (
        <InputGroup>
          <InputGroupInput readOnly value="https://files.example.com/s/k39xQ" aria-label="Share link" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton onClick={() => setCopied(true)} aria-label="Copy link">
              {copied ? <CheckIcon /> : <CopyIcon />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      )}
    </div>
  )
}`,
  },
  {
    name: "WebhookEventSubscriptions",
    description: "Developer settings listing webhook events, each with a subscribe switch.",
    code: `
const events = [
  { name: "order.created", on: true },
  { name: "order.refunded", on: true },
  { name: "customer.updated", on: false },
  { name: "invoice.payment_failed", on: true },
  { name: "subscription.canceled", on: false },
]

export default function WebhookEventSubscriptions() {
  const [state, setState] = React.useState(() =>
    Object.fromEntries(events.map((e) => [e.name, e.on]))
  )
  const count = Object.values(state).filter(Boolean).length

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-2">
          <WebhookIcon className="size-4" />
          <span className="text-sm font-medium">Events</span>
        </div>
        <Badge variant="secondary">{count} subscribed</Badge>
      </div>
      {events.map((event) => (
        <div key={event.name} className="flex items-center justify-between border-b px-4 py-2.5 last:border-b-0">
          <code className="font-mono text-xs">{event.name}</code>
          <Switch
            size="sm"
            checked={state[event.name]}
            onCheckedChange={(checked) => setState((s) => ({ ...s, [event.name]: checked }))}
            aria-label={event.name}
          />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "AccessibilityPreview",
    description: "Accessibility switches that immediately restyle a live text preview.",
    code: `
export default function AccessibilityPreview() {
  const [largeText, setLargeText] = React.useState(false)
  const [highContrast, setHighContrast] = React.useState(false)
  const [underlineLinks, setUnderlineLinks] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className={cn("border p-3", highContrast ? "bg-foreground text-background" : "bg-muted/50")}>
        <p className={cn("font-medium", largeText ? "text-lg" : "text-sm")}>Your order has shipped</p>
        <p className={cn(largeText ? "text-base" : "text-xs", !highContrast && "text-muted-foreground")}>
          Track it from the <span className={cn("font-medium", underlineLinks && "underline underline-offset-2")}>orders page</span>.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="a11y-large">Larger text</Label>
        <Switch id="a11y-large" checked={largeText} onCheckedChange={setLargeText} />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="a11y-contrast">High contrast</Label>
        <Switch id="a11y-contrast" checked={highContrast} onCheckedChange={setHighContrast} />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="a11y-links">Underline links</Label>
        <Switch id="a11y-links" checked={underlineLinks} onCheckedChange={setUnderlineLinks} />
      </div>
    </div>
  )
}`,
  },
  {
    name: "CheckoutAddOns",
    description: "Checkout add-on switches for gift wrap and shipping protection that update the total.",
    code: `
const addOns = [
  { id: "gift", label: "Gift wrap", description: "Recycled paper and a handwritten note", price: 4 },
  { id: "protection", label: "Shipping protection", description: "Covers loss, theft, and damage", price: 2.5 },
]

export default function CheckoutAddOns() {
  const [selected, setSelected] = React.useState<Record<string, boolean>>({ protection: true })
  const subtotal = 86
  const total = addOns.reduce((sum, a) => sum + (selected[a.id] ? a.price : 0), subtotal)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      {addOns.map((addOn) => (
        <Field key={addOn.id} orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor={"addon-" + addOn.id}>
              {addOn.label} <span className="text-muted-foreground">+{"$" + addOn.price.toFixed(2)}</span>
            </FieldLabel>
            <FieldDescription>{addOn.description}</FieldDescription>
          </FieldContent>
          <Switch
            id={"addon-" + addOn.id}
            checked={!!selected[addOn.id]}
            onCheckedChange={(checked) => setSelected((s) => ({ ...s, [addOn.id]: checked }))}
          />
        </Field>
      ))}
      <Separator />
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Total</span>
        <span className="font-semibold">{"$" + total.toFixed(2)}</span>
      </div>
      <Button className="w-full">Pay now</Button>
    </div>
  )
}`,
  },
  {
    name: "MaintenanceModeSwitch",
    description: "Maintenance mode switch that surfaces a warning banner when the site is offline.",
    code: `
export default function MaintenanceModeSwitch() {
  const [maintenance, setMaintenance] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {maintenance && (
        <Alert variant="warning">
          <ConstructionIcon />
          <AlertTitle>Site is in maintenance mode</AlertTitle>
          <AlertDescription>Visitors see a &quot;back soon&quot; page.</AlertDescription>
        </Alert>
      )}
      <div className="flex items-center justify-between gap-4 border p-4">
        <div>
          <Label htmlFor="maintenance">Maintenance mode</Label>
          <p className="text-xs text-muted-foreground">Only admins can access the storefront.</p>
        </div>
        <Switch id="maintenance" checked={maintenance} onCheckedChange={setMaintenance} />
      </div>
    </div>
  )
}`,
  },
  {
    name: "SwitchWithHelpTooltip",
    description: "Switch labels paired with info tooltips that explain each setting.",
    code: `
const settings = [
  { id: "smart-compose", label: "Smart compose", help: "Suggests sentence endings as you type.", on: true },
  { id: "nudges", label: "Follow-up nudges", help: "Reminds you about emails without a reply after 3 days.", on: false },
]

export default function SwitchWithHelpTooltip() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-xs flex-col gap-4 border p-4">
        {settings.map((setting) => (
          <div key={setting.id} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-1.5">
              <Label htmlFor={setting.id}>{setting.label}</Label>
              <Tooltip>
                <TooltipTrigger render={<button type="button" className="text-muted-foreground hover:text-foreground" aria-label={"About " + setting.label} />}>
                  <InfoIcon className="size-3.5" />
                </TooltipTrigger>
                <TooltipContent className="max-w-56">{setting.help}</TooltipContent>
              </Tooltip>
            </div>
            <Switch id={setting.id} defaultChecked={setting.on} />
          </div>
        ))}
      </div>
    </TooltipProvider>
  )
}`,
  },
  {
    name: "LocationSharingDuration",
    description: "Location sharing switch that enables a duration picker when turned on.",
    code: `
export default function LocationSharingDuration() {
  const [sharing, setSharing] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center gap-3">
        <MapPinIcon className="size-4 text-muted-foreground" />
        <Label htmlFor="share-location" className="flex-1">Share live location</Label>
        <Switch id="share-location" checked={sharing} onCheckedChange={setSharing} />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="share-duration" className={cn("text-xs", !sharing && "text-muted-foreground")}>Share for</Label>
        <NativeSelect id="share-duration" disabled={!sharing} defaultValue="1h">
          <NativeSelectOption value="15m">15 minutes</NativeSelectOption>
          <NativeSelectOption value="1h">1 hour</NativeSelectOption>
          <NativeSelectOption value="8h">Until end of day</NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  )
}`,
  },
  {
    name: "FormDataSwitches",
    description: "Uncontrolled switches with name attributes submitted as form data.",
    code: `
export default function FormDataSwitches() {
  const [result, setResult] = React.useState<string | null>(null)

  return (
    <form
      className="flex w-full max-w-xs flex-col gap-3 border p-4"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        setResult(JSON.stringify({ newsletter: data.get("newsletter") === "on", beta: data.get("beta") === "on" }))
      }}
    >
      <div className="flex items-center justify-between">
        <Label htmlFor="form-newsletter">Product newsletter</Label>
        <Switch id="form-newsletter" name="newsletter" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="form-beta">Join beta program</Label>
        <Switch id="form-beta" name="beta" />
      </div>
      <Button type="submit" size="sm">Save preferences</Button>
      {result && <pre className="overflow-x-auto bg-muted p-2 font-mono text-xs">{result}</pre>}
    </form>
  )
}`,
  },
  {
    name: "KeyboardShortcutToggles",
    description: "Editor settings with switches for keyboard shortcuts shown alongside their keys.",
    code: `
const shortcuts = [
  { id: "vim", label: "Vim key bindings", keys: ["Esc"], on: false },
  { id: "command", label: "Command palette", keys: ["Ctrl", "K"], on: true },
  { id: "zen", label: "Focus mode", keys: ["Ctrl", "."], on: true },
]

export default function KeyboardShortcutToggles() {
  return (
    <div className="w-full max-w-sm divide-y border">
      {shortcuts.map((shortcut) => (
        <div key={shortcut.id} className="flex items-center gap-3 px-4 py-3">
          <Label htmlFor={"kbd-" + shortcut.id} className="flex-1">{shortcut.label}</Label>
          <KbdGroup>
            {shortcut.keys.map((key) => (
              <Kbd key={key}>{key}</Kbd>
            ))}
          </KbdGroup>
          <Switch id={"kbd-" + shortcut.id} size="sm" defaultChecked={shortcut.on} />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "CloudSyncSwitch",
    description: "Cloud sync switch showing storage usage and last sync time when enabled.",
    code: `
export default function CloudSyncSwitch() {
  const [sync, setSync] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center gap-3">
        {sync ? <CloudIcon className="size-5" /> : <CloudOffIcon className="size-5 text-muted-foreground" />}
        <div className="flex-1">
          <Label htmlFor="cloud-sync">Sync photos to cloud</Label>
          <p className="text-xs text-muted-foreground">{sync ? "Last synced 4 minutes ago" : "Photos stay on this device"}</p>
        </div>
        <Switch id="cloud-sync" checked={sync} onCheckedChange={setSync} />
      </div>
      <div className={cn("flex flex-col gap-1.5", !sync && "opacity-50")}>
        <div className="flex justify-between text-xs">
          <span>Storage</span>
          <span className="text-muted-foreground">38.2 of 50 GB</span>
        </div>
        <Progress value={76} aria-label="Storage used" />
      </div>
    </div>
  )
}`,
  },
  {
    name: "ConnectedIntegrations",
    description: "Integrations list where each switch connects or disconnects an app.",
    code: `
const apps = [
  { id: "calendar", name: "Calendly Lite", category: "Scheduling", initials: "CL", on: true },
  { id: "chat", name: "Chatterbox", category: "Messaging", initials: "CB", on: true },
  { id: "crm", name: "Pipewise CRM", category: "Sales", initials: "PW", on: false },
]

export default function ConnectedIntegrations() {
  const [connected, setConnected] = React.useState(() =>
    Object.fromEntries(apps.map((a) => [a.id, a.on]))
  )

  return (
    <ItemGroup className="w-full max-w-sm gap-2">
      {apps.map((app) => (
        <Item key={app.id} variant="outline">
          <ItemMedia>
            <Avatar>
              <AvatarFallback>{app.initials}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{app.name}</ItemTitle>
            <ItemDescription>{connected[app.id] ? "Connected" : app.category}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Switch
              checked={connected[app.id]}
              onCheckedChange={(checked) => setConnected((c) => ({ ...c, [app.id]: checked }))}
              aria-label={"Connect " + app.name}
            />
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}`,
  },
  {
    name: "VideoCallPreflight",
    description: "Video call pre-join screen with camera and microphone switches.",
    code: `
export default function VideoCallPreflight() {
  const [camera, setCamera] = React.useState(true)
  const [mic, setMic] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-3">
      <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-muted to-muted/40">
        {camera ? (
          <Avatar size="lg">
            <AvatarFallback>JO</AvatarFallback>
          </Avatar>
        ) : (
          <VideoOffIcon className="size-6 text-muted-foreground" />
        )}
        {!mic && (
          <span className="absolute bottom-2 start-2 flex items-center gap-1 bg-background/80 px-1.5 py-0.5 text-xs">
            <MicOffIcon className="size-3" /> Muted
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="flex items-center justify-between gap-2 border px-3 py-2 text-sm">
          <span className="flex items-center gap-2"><VideoIcon className="size-4" />Camera</span>
          <Switch size="sm" checked={camera} onCheckedChange={setCamera} />
        </label>
        <label className="flex items-center justify-between gap-2 border px-3 py-2 text-sm">
          <span className="flex items-center gap-2"><MicIcon className="size-4" />Mic</span>
          <Switch size="sm" checked={mic} onCheckedChange={setMic} />
        </label>
      </div>
      <Button className="w-full">Join meeting</Button>
    </div>
  )
}`,
  },
  {
    name: "ServiceStatusSwitches",
    description: "Service controls with custom checked colors that signal running or stopped status.",
    code: `
const services = [
  { id: "api", name: "API gateway", region: "us-east-1", on: true },
  { id: "worker", name: "Queue worker", region: "eu-west-2", on: false },
  { id: "cron", name: "Scheduler", region: "us-east-1", on: true },
]

export default function ServiceStatusSwitches() {
  const [running, setRunning] = React.useState(() =>
    Object.fromEntries(services.map((s) => [s.id, s.on]))
  )

  return (
    <div className="w-full max-w-sm divide-y border">
      {services.map((service) => (
        <div key={service.id} className="flex items-center gap-3 px-4 py-3">
          <span className={cn("size-2 rounded-full", running[service.id] ? "bg-emerald-500" : "bg-muted-foreground/40")} />
          <div className="flex-1">
            <p className="text-sm font-medium">{service.name}</p>
            <p className="font-mono text-xs text-muted-foreground">{service.region}</p>
          </div>
          <span className="text-xs text-muted-foreground">{running[service.id] ? "Running" : "Stopped"}</span>
          <Switch
            className="data-checked:bg-emerald-600"
            checked={running[service.id]}
            onCheckedChange={(checked) => setRunning((r) => ({ ...r, [service.id]: checked }))}
            aria-label={service.name}
          />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "OnboardingPreferencesStep",
    description: "An onboarding step collecting workspace preferences with switches and progress.",
    code: `
const prefs = [
  { id: "tips", label: "Show product tips", description: "Short hints as you explore.", on: true },
  { id: "sample", label: "Add sample project", description: "A pre-filled board to play with.", on: true },
  { id: "invite", label: "Invite teammates later", description: "We'll remind you in 3 days.", on: false },
]

export default function OnboardingPreferencesStep() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <p className="text-xs text-muted-foreground">Step 2 of 3</p>
        <Progress value={66} aria-label="Onboarding progress" />
        <CardTitle className="pt-2">Set up your workspace</CardTitle>
        <CardDescription>You can change these anytime in settings.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup className="gap-4">
          {prefs.map((pref) => (
            <Field key={pref.id} orientation="horizontal">
              <FieldContent>
                <FieldLabel htmlFor={"onboard-" + pref.id}>{pref.label}</FieldLabel>
                <FieldDescription>{pref.description}</FieldDescription>
              </FieldContent>
              <Switch id={"onboard-" + pref.id} defaultChecked={pref.on} />
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="ghost" size="sm">Back</Button>
        <Button size="sm">
          Continue
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "ScheduledPublishSwitch",
    description: "A blog post publish panel where a switch reveals schedule date and time fields.",
    code: `
export default function ScheduledPublishSwitch() {
  const [scheduled, setScheduled] = React.useState(true)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="schedule-post" className="flex items-center gap-2">
          <CalendarClockIcon className="size-4" />Schedule for later
        </Label>
        <Switch id="schedule-post" checked={scheduled} onCheckedChange={setScheduled} />
      </div>
      {scheduled && (
        <div className="grid grid-cols-2 gap-2">
          <Input type="date" defaultValue="2026-12-01" aria-label="Publish date" />
          <Input type="time" defaultValue="08:30" aria-label="Publish time" />
        </div>
      )}
      <Button size="sm">{scheduled ? "Schedule post" : "Publish now"}</Button>
    </div>
  )
}`,
  },
  {
    name: "BulkEnableSwitches",
    description: "A list of switches with enable all and disable all bulk actions and a count.",
    code: `
const channels = ["#general", "#design", "#engineering", "#random", "#support"]

export default function BulkEnableSwitches() {
  const [enabled, setEnabled] = React.useState<string[]>(["#general", "#design"])
  const setAll = (on: boolean) => setEnabled(on ? channels : [])

  return (
    <div className="w-full max-w-xs border">
      <div className="flex items-center justify-between border-b px-3 py-2">
        <span className="text-xs text-muted-foreground">{enabled.length} of {channels.length} channels</span>
        <div className="flex gap-1">
          <Button variant="ghost" size="xs" onClick={() => setAll(true)}>All</Button>
          <Button variant="ghost" size="xs" onClick={() => setAll(false)}>None</Button>
        </div>
      </div>
      {channels.map((channel) => (
        <label key={channel} className="flex cursor-pointer items-center justify-between px-3 py-2 hover:bg-muted/50">
          <span className="flex items-center gap-2 text-sm"><HashIcon className="size-3.5 text-muted-foreground" />{channel.slice(1)}</span>
          <Switch
            size="sm"
            checked={enabled.includes(channel)}
            onCheckedChange={(checked) =>
              setEnabled((list) => (checked ? [...list, channel] : list.filter((c) => c !== channel)))
            }
          />
        </label>
      ))}
    </div>
  )
}`,
  },
  {
    name: "SearchableSettingsList",
    description: "A settings list filtered by a search input, with an empty state when nothing matches.",
    code: `
const allSettings = [
  { id: "spell", label: "Spell check", on: true },
  { id: "autosave", label: "Autosave drafts", on: true },
  { id: "wordwrap", label: "Word wrap", on: false },
  { id: "minimap", label: "Show minimap", on: false },
  { id: "linenumbers", label: "Line numbers", on: true },
  { id: "format", label: "Format on save", on: true },
]

export default function SearchableSettingsList() {
  const [query, setQuery] = React.useState("")
  const filtered = allSettings.filter((s) => s.label.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <InputGroup>
        <InputGroupAddon><SearchIcon /></InputGroupAddon>
        <InputGroupInput placeholder="Search settings" value={query} onChange={(e) => setQuery(e.target.value)} />
      </InputGroup>
      <div className="divide-y border">
        {filtered.map((setting) => (
          <div key={setting.id} className="flex items-center justify-between px-3 py-2.5">
            <Label htmlFor={"search-" + setting.id}>{setting.label}</Label>
            <Switch id={"search-" + setting.id} size="sm" defaultChecked={setting.on} />
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="px-3 py-6 text-center text-xs text-muted-foreground">No settings match &quot;{query}&quot;</p>
        )}
      </div>
    </div>
  )
}`,
  },
  {
    name: "ParentalControls",
    description: "Parental controls for a child profile with content and screen time switches.",
    code: `
export default function ParentalControls() {
  const [screenLimit, setScreenLimit] = React.useState(true)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>LM</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Leo&apos;s profile</CardTitle>
            <CardDescription>Age 9</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="pc-filter">Filter mature content</Label>
          <Switch id="pc-filter" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="pc-purchases">Require approval for purchases</Label>
          <Switch id="pc-purchases" defaultChecked />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="pc-limit">Daily screen time limit</Label>
            <Switch id="pc-limit" checked={screenLimit} onCheckedChange={setScreenLimit} />
          </div>
          {screenLimit && (
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <ClockIcon className="size-3" /> 2 hours on school days, 3 hours on weekends
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "ProductVisibilityList",
    description: "Store admin product list where switches publish or unpublish each product.",
    code: `
const products = [
  { id: "p1", name: "Linen throw blanket", sku: "HM-1042", live: true },
  { id: "p2", name: "Stoneware mug set", sku: "KT-2210", live: true },
  { id: "p3", name: "Walnut serving board", sku: "KT-2234", live: false },
]

export default function ProductVisibilityList() {
  const [live, setLive] = React.useState(() =>
    Object.fromEntries(products.map((p) => [p.id, p.live]))
  )

  return (
    <div className="w-full max-w-md divide-y border">
      {products.map((product) => (
        <div key={product.id} className="flex items-center gap-3 px-4 py-3">
          <div className="flex size-9 shrink-0 items-center justify-center bg-muted">
            <PackageIcon className="size-4 text-muted-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{product.name}</p>
            <p className="font-mono text-xs text-muted-foreground">{product.sku}</p>
          </div>
          <Badge variant={live[product.id] ? "default" : "outline"}>{live[product.id] ? "Live" : "Draft"}</Badge>
          <Switch
            checked={live[product.id]}
            onCheckedChange={(checked) => setLive((l) => ({ ...l, [product.id]: checked }))}
            aria-label={"Publish " + product.name}
          />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "AppPermissions",
    description: "Mobile app permission switches with icons and last-used timestamps.",
    code: `
const permissions = [
  { id: "camera", label: "Camera", icon: CameraIcon, used: "Used today", on: true },
  { id: "microphone", label: "Microphone", icon: MicIcon, used: "Used 3 days ago", on: true },
  { id: "location", label: "Location", icon: NavigationIcon, used: "Never used", on: false },
  { id: "contacts", label: "Contacts", icon: ContactIcon, used: "Never used", on: false },
]

export default function AppPermissions() {
  return (
    <div className="w-full max-w-xs border">
      <div className="border-b px-4 py-3">
        <p className="text-sm font-medium">Trailmate permissions</p>
        <p className="text-xs text-muted-foreground">Control what this app can access.</p>
      </div>
      {permissions.map((permission) => (
        <div key={permission.id} className="flex items-center gap-3 px-4 py-2.5">
          <permission.icon className="size-4 text-muted-foreground" />
          <div className="flex-1">
            <Label htmlFor={"perm-" + permission.id}>{permission.label}</Label>
            <p className="text-xs text-muted-foreground">{permission.used}</p>
          </div>
          <Switch id={"perm-" + permission.id} defaultChecked={permission.on} />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ViewOptionsPopover",
    description: "A popover of view options with switches for a board layout.",
    code: `
export default function ViewOptionsPopover() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <SlidersHorizontalIcon data-icon="inline-start" />
        View options
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <PopoverHeader>
          <PopoverTitle>Board view</PopoverTitle>
          <PopoverDescription>Choose what each card shows.</PopoverDescription>
        </PopoverHeader>
        <div className="flex flex-col gap-3 pt-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="view-assignee" className="font-normal">Assignee</Label>
            <Switch id="view-assignee" size="sm" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="view-due" className="font-normal">Due date</Label>
            <Switch id="view-due" size="sm" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="view-labels" className="font-normal">Labels</Label>
            <Switch id="view-labels" size="sm" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="view-empty" className="font-normal">Show empty columns</Label>
            <Switch id="view-empty" size="sm" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "ExperimentalLabs",
    description: "Experimental labs features with beta badges and feedback links.",
    code: `
const labs = [
  { id: "canvas", title: "Infinite canvas", description: "Pan and zoom freely across your notes.", stage: "Beta" },
  { id: "voice", title: "Voice notes", description: "Record and transcribe audio inline.", stage: "Alpha" },
]

export default function ExperimentalLabs() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {labs.map((lab) => (
        <div key={lab.id} className="flex flex-col gap-2 border border-dashed p-4">
          <div className="flex items-center gap-2">
            <FlaskConicalIcon className="size-4" />
            <Label htmlFor={"labs-" + lab.id} className="flex-1">
              {lab.title}
              <Badge variant={lab.stage === "Alpha" ? "destructive" : "secondary"}>{lab.stage}</Badge>
            </Label>
            <Switch id={"labs-" + lab.id} />
          </div>
          <p className="text-xs text-muted-foreground">{lab.description}</p>
          <a href="#" className="text-xs underline underline-offset-2">Send feedback</a>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "EmailDigestFieldSet",
    description: "A fieldset of grouped switches for email digest content with a legend.",
    code: `
export default function EmailDigestFieldSet() {
  return (
    <FieldSet className="w-full max-w-sm border p-4">
      <FieldLegend>Daily digest includes</FieldLegend>
      <FieldDescription>Sent at 7:00 AM in your time zone.</FieldDescription>
      <FieldGroup className="gap-3">
        <Field orientation="horizontal">
          <FieldLabel htmlFor="digest-tasks" className="font-normal">Tasks due today</FieldLabel>
          <Switch id="digest-tasks" defaultChecked />
        </Field>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="digest-overdue" className="font-normal">Overdue tasks</FieldLabel>
          <Switch id="digest-overdue" defaultChecked />
        </Field>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="digest-activity" className="font-normal">Team activity</FieldLabel>
          <Switch id="digest-activity" />
        </Field>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="digest-calendar" className="font-normal">Calendar events</FieldLabel>
          <Switch id="digest-calendar" />
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}`,
  },
  {
    name: "SettingsSheetSwitches",
    description: "A side sheet with notification switches and a save footer.",
    code: `
export default function SettingsSheetSwitches() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <SettingsIcon data-icon="inline-start" />
        Open settings
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>Decide how Orbit keeps you in the loop.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="sheet-desktop">Desktop alerts</Label>
            <Switch id="sheet-desktop" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sheet-mobile">Mobile push</Label>
            <Switch id="sheet-mobile" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sheet-quiet">Quiet hours (10 PM - 7 AM)</Label>
            <Switch id="sheet-quiet" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose render={<Button />}>Save</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "TeamMemberAdminAccess",
    description: "Team member list where switches grant or revoke admin access, with the owner locked.",
    code: `
const members = [
  { name: "Ava Thompson", email: "ava@orbit.dev", role: "Owner" },
  { name: "Marcus Lee", email: "marcus@orbit.dev", role: "Admin" },
  { name: "Sofia Alvarez", email: "sofia@orbit.dev", role: "Member" },
]

export default function TeamMemberAdminAccess() {
  return (
    <div className="w-full max-w-md divide-y border">
      <div className="flex justify-between px-4 py-2 text-xs font-medium text-muted-foreground">
        <span>Member</span>
        <span>Admin</span>
      </div>
      {members.map((member) => (
        <div key={member.email} className="flex items-center gap-3 px-4 py-3">
          <Avatar size="sm">
            <AvatarFallback>{member.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{member.name}</p>
            <p className="truncate text-xs text-muted-foreground">{member.email}</p>
          </div>
          <Switch
            defaultChecked={member.role !== "Member"}
            disabled={member.role === "Owner"}
            aria-label={"Admin access for " + member.name}
          />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "PrivacyToggleWithCountdown",
    description: "Incognito switch that auto-disables after a countdown and shows remaining time.",
    code: `
export default function PrivacyToggleWithCountdown() {
  const [seconds, setSeconds] = React.useState(0)
  const active = seconds > 0

  React.useEffect(() => {
    if (!active) return
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(timer)
  }, [active, seconds])

  return (
    <div className="flex w-full max-w-xs items-center gap-3 border p-4">
      <EyeOffIcon className={cn("size-5", active ? "text-foreground" : "text-muted-foreground")} />
      <div className="flex-1">
        <Label htmlFor="incognito">Pause watch history</Label>
        <p className="text-xs tabular-nums text-muted-foreground">
          {active ? "Resumes in " + seconds + "s" : "History is being recorded"}
        </p>
      </div>
      <Switch id="incognito" checked={active} onCheckedChange={(checked) => setSeconds(checked ? 30 : 0)} />
    </div>
  )
}`,
  },
  {
    name: "SegmentedSwitchCards",
    description: "Selectable cards that use the whole surface as the switch label for delivery options.",
    code: `
const options = [
  { id: "express", title: "Express delivery", description: "Arrives tomorrow before 12 PM", icon: TruckIcon, on: false },
  { id: "eco", title: "Eco packaging", description: "Plastic-free, compostable materials", icon: LeafIcon, on: true },
]

export default function SegmentedSwitchCards() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {options.map((option) => (
        <label
          key={option.id}
          htmlFor={"card-" + option.id}
          className="flex cursor-pointer items-start gap-3 border p-4 transition-colors hover:bg-muted/40 has-data-checked:border-primary has-data-checked:bg-primary/5"
        >
          <option.icon className="mt-0.5 size-4" />
          <div className="flex-1">
            <p className="text-sm font-medium">{option.title}</p>
            <p className="text-xs text-muted-foreground">{option.description}</p>
          </div>
          <Switch id={"card-" + option.id} defaultChecked={option.on} />
        </label>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ApiKeyScopes",
    description: "API key creation form with read and write scope switches per resource.",
    code: `
const resources = ["Orders", "Customers", "Products"]

export default function ApiKeyScopes() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="key-name">Key name</Label>
        <Input id="key-name" defaultValue="Warehouse sync" />
      </div>
      <div className="border">
        <div className="grid grid-cols-[1fr_3rem_3rem] items-center gap-2 border-b bg-muted/50 px-3 py-2 text-xs font-medium text-muted-foreground">
          <span>Resource</span>
          <span className="text-center">Read</span>
          <span className="text-center">Write</span>
        </div>
        {resources.map((resource, index) => (
          <div key={resource} className="grid grid-cols-[1fr_3rem_3rem] items-center gap-2 border-b px-3 py-2 last:border-b-0">
            <span className="text-sm">{resource}</span>
            <div className="flex justify-center"><Switch size="sm" defaultChecked aria-label={resource + " read"} /></div>
            <div className="flex justify-center"><Switch size="sm" defaultChecked={index === 0} aria-label={resource + " write"} /></div>
          </div>
        ))}
      </div>
      <Button size="sm">
        <KeyRoundIcon data-icon="inline-start" />
        Create key
      </Button>
    </div>
  )
}`,
  },
  {
    name: "UnsavedChangesSwitches",
    description: "Settings with switches that track unsaved changes and offer reset or save.",
    code: `
const initial = { autoplay: true, captions: false, hd: true }
type Prefs = typeof initial

const labels: Record<keyof Prefs, string> = {
  autoplay: "Autoplay next episode",
  captions: "Always show captions",
  hd: "Stream in HD",
}

export default function UnsavedChangesSwitches() {
  const [saved, setSaved] = React.useState<Prefs>(initial)
  const [draft, setDraft] = React.useState<Prefs>(initial)
  const dirty = (Object.keys(draft) as (keyof Prefs)[]).some((k) => draft[k] !== saved[k])

  return (
    <div className="w-full max-w-sm border">
      <div className="flex flex-col gap-3 p-4">
        {(Object.keys(labels) as (keyof Prefs)[]).map((key) => (
          <div key={key} className="flex items-center justify-between">
            <Label htmlFor={"pref-" + key}>
              {labels[key]}
              {draft[key] !== saved[key] && <span className="size-1.5 rounded-full bg-primary" />}
            </Label>
            <Switch id={"pref-" + key} checked={draft[key]} onCheckedChange={(v) => setDraft((d) => ({ ...d, [key]: v }))} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t bg-muted/40 px-4 py-2">
        <span className="text-xs text-muted-foreground">{dirty ? "Unsaved changes" : "All changes saved"}</span>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" disabled={!dirty} onClick={() => setDraft(saved)}>Reset</Button>
          <Button size="sm" disabled={!dirty} onClick={() => setSaved(draft)}>Save</Button>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "TabbedSettingsSwitches",
    description: "Tabbed settings panel with switches grouped under General and Privacy tabs.",
    code: `
export default function TabbedSettingsSwitches() {
  return (
    <Tabs defaultValue="general" className="w-full max-w-sm">
      <TabsList className="w-full">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="privacy">Privacy</TabsTrigger>
      </TabsList>
      <TabsContent value="general" className="flex flex-col gap-3 border p-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="tab-startup">Open on startup</Label>
          <Switch id="tab-startup" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="tab-updates">Install updates automatically</Label>
          <Switch id="tab-updates" defaultChecked />
        </div>
      </TabsContent>
      <TabsContent value="privacy" className="flex flex-col gap-3 border p-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="tab-telemetry">Share usage data</Label>
          <Switch id="tab-telemetry" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="tab-crash">Send crash reports</Label>
          <Switch id="tab-crash" defaultChecked />
        </div>
      </TabsContent>
    </Tabs>
  )
}`,
  },
]

export default examples
