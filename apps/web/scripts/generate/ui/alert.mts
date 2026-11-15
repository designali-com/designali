import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "AlertSessionExpiring",
    description: "Warning alert with a live countdown and an inline action to extend the session.",
    code: `
export default function AlertSessionExpiring() {
  const [seconds, setSeconds] = React.useState(119)

  React.useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(id)
  }, [])

  const mm = Math.floor(seconds / 60)
  const ss = String(seconds % 60).padStart(2, "0")

  return (
    <Alert variant="warning" className="max-w-md">
      <TimerIcon />
      <AlertTitle>Your session expires in {mm}:{ss}</AlertTitle>
      <AlertDescription>You&apos;ll be signed out to keep your account secure.</AlertDescription>
      <AlertAction>
        <Button size="xs" onClick={() => setSeconds(15 * 60)}>
          Stay signed in
        </Button>
      </AlertAction>
    </Alert>
  )
}`,
  },
  {
    name: "AlertPaymentFailed",
    description: "Error alert for a declined card with update and retry actions below the message.",
    code: `
export default function AlertPaymentFailed() {
  return (
    <Alert variant="error" className="max-w-md">
      <CreditCardIcon />
      <AlertTitle>Payment declined</AlertTitle>
      <AlertDescription>
        <p>We couldn&apos;t charge your Visa ending 4821 for the $48.00 renewal. Your workspace stays active until Nov 22.</p>
        <div className="mt-2 flex gap-1.5">
          <Button size="xs">Update card</Button>
          <Button size="xs" variant="outline">
            Retry payment
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}`,
  },
  {
    name: "AlertDismissible",
    description: "Dismissible info alert with a close button and a way to bring it back.",
    code: `
export default function AlertDismissible() {
  const [open, setOpen] = React.useState(true)

  if (!open) {
    return (
      <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
        <RotateCcwIcon data-icon="inline-start" />
        Show announcement
      </Button>
    )
  }

  return (
    <Alert variant="info" className="max-w-md">
      <MegaphoneIcon />
      <AlertTitle>Dark mode is here</AlertTitle>
      <AlertDescription>Switch themes from the avatar menu, or follow your system setting.</AlertDescription>
      <AlertAction>
        <Button size="icon-xs" variant="ghost" aria-label="Dismiss" onClick={() => setOpen(false)}>
          <XIcon />
        </Button>
      </AlertAction>
    </Alert>
  )
}`,
  },
  {
    name: "AlertStorageUsage",
    description: "Usage warning with a progress bar showing how much storage quota is used.",
    code: `
export default function AlertStorageUsage() {
  const used = 9.2
  const limit = 10

  return (
    <Alert variant="warning" className="max-w-md">
      <HardDriveIcon />
      <AlertTitle>You&apos;re almost out of storage</AlertTitle>
      <AlertDescription className="space-y-2">
        <p>
          {used} GB of {limit} GB used. Uploads will pause when you reach the limit.
        </p>
        <Progress value={(used / limit) * 100} aria-label="Storage used" />
        <Button size="xs" variant="outline">
          Upgrade storage
        </Button>
      </AlertDescription>
    </Alert>
  )
}`,
  },
  {
    name: "AlertFormErrorSummary",
    description: "Error summary alert listing invalid fields above a sign-up form.",
    code: `
const errors = [
  { field: "email", message: "Enter a valid work email" },
  { field: "password", message: "Password must be at least 12 characters" },
]

export default function AlertFormErrorSummary() {
  return (
    <form className="w-full max-w-sm space-y-3" onSubmit={(e) => e.preventDefault()}>
      <Alert variant="error">
        <CircleAlertIcon />
        <AlertTitle>Fix 2 fields to continue</AlertTitle>
        <AlertDescription>
          <ul className="list-disc ps-4">
            {errors.map((error) => (
              <li key={error.field}>
                <a href={"#" + error.field}>{error.message}</a>
              </li>
            ))}
          </ul>
        </AlertDescription>
      </Alert>
      <div className="space-y-1.5">
        <Label htmlFor="email">Work email</Label>
        <Input id="email" defaultValue="lena@" aria-invalid />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" defaultValue="short" aria-invalid />
      </div>
      <Button type="submit" className="w-full">
        Create account
      </Button>
    </form>
  )
}`,
  },
  {
    name: "AlertSaveFeedback",
    description: "Save button with a loading state that reveals a success alert when the save completes.",
    code: `
export default function AlertSaveFeedback() {
  const [state, setState] = React.useState<"idle" | "saving" | "saved">("idle")

  const save = () => {
    setState("saving")
    setTimeout(() => setState("saved"), 1200)
  }

  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor="workspace">Workspace name</Label>
        <Input id="workspace" defaultValue="Northwind Studio" onChange={() => setState("idle")} />
      </div>
      <Button size="sm" onClick={save} disabled={state === "saving"}>
        {state === "saving" && <Spinner data-icon="inline-start" />}
        {state === "saving" ? "Saving..." : "Save changes"}
      </Button>
      {state === "saved" && (
        <Alert variant="success">
          <CircleCheckIcon />
          <AlertTitle>Changes saved</AlertTitle>
          <AlertDescription>Everyone in the workspace will see the new name.</AlertDescription>
        </Alert>
      )}
    </div>
  )
}`,
  },
  {
    name: "AlertScheduledMaintenance",
    description: "Info alert announcing a maintenance window with the time and an add-to-calendar action.",
    code: `
export default function AlertScheduledMaintenance() {
  return (
    <Alert variant="info" className="max-w-md">
      <WrenchIcon />
      <AlertTitle>Scheduled maintenance</AlertTitle>
      <AlertDescription>
        <p>
          Sunday, Nov 23 from <time>02:00</time> to <time>04:00</time> UTC. The dashboard will be read-only; the API stays online.
        </p>
        <Button size="xs" variant="outline" className="mt-2">
          <CalendarPlusIcon data-icon="inline-start" />
          Add to calendar
        </Button>
      </AlertDescription>
    </Alert>
  )
}`,
  },
  {
    name: "AlertTrialEnding",
    description: "Default alert for a trial that is ending, with a days-left badge and an upgrade action.",
    code: `
export default function AlertTrialEnding() {
  return (
    <Alert className="max-w-md">
      <HourglassIcon />
      <AlertTitle className="flex items-center gap-2">
        Your trial ends soon
        <Badge variant="secondary">3 days left</Badge>
      </AlertTitle>
      <AlertDescription>Upgrade to keep your 14 boards, automations and guest access.</AlertDescription>
      <AlertAction>
        <Button size="xs">Upgrade</Button>
      </AlertAction>
    </Alert>
  )
}`,
  },
  {
    name: "AlertDeployChecks",
    description: "A stack of alerts summarising pre-deploy checks with mixed results.",
    code: `
const checks = [
  { variant: "success" as const, icon: CircleCheckIcon, title: "Build passed", body: "Compiled in 48s with no warnings." },
  { variant: "warning" as const, icon: TriangleAlertIcon, title: "Bundle size grew 14%", body: "The checkout route is now 212 kB gzipped." },
  { variant: "error" as const, icon: CircleXIcon, title: "2 tests failing", body: "auth/session.test.ts and billing/tax.test.ts" },
]

export default function AlertDeployChecks() {
  return (
    <div className="w-full max-w-md space-y-2">
      <p className="text-sm font-medium">Pre-deploy checks</p>
      {checks.map((check) => (
        <Alert key={check.title} variant={check.variant}>
          <check.icon />
          <AlertTitle>{check.title}</AlertTitle>
          <AlertDescription>{check.body}</AlertDescription>
        </Alert>
      ))}
    </div>
  )
}`,
  },
  {
    name: "AlertOfflineStatus",
    description: "Connection status alert that switches between offline and back-online states.",
    code: `
export default function AlertOfflineStatus() {
  const [online, setOnline] = React.useState(false)

  return (
    <div className="w-full max-w-md space-y-3">
      <div className="flex items-center gap-2">
        <Switch id="network" checked={online} onCheckedChange={setOnline} />
        <Label htmlFor="network">Simulate network connection</Label>
      </div>
      {online ? (
        <Alert variant="success">
          <WifiIcon />
          <AlertTitle>Back online</AlertTitle>
          <AlertDescription>3 queued changes were synced.</AlertDescription>
        </Alert>
      ) : (
        <Alert variant="warning">
          <WifiOffIcon />
          <AlertTitle>You&apos;re offline</AlertTitle>
          <AlertDescription>Edits are saved on this device and will sync when you reconnect.</AlertDescription>
        </Alert>
      )}
    </div>
  )
}`,
  },
  {
    name: "AlertVerifyEmail",
    description: "Email verification alert with a resend action that enters a cooldown after use.",
    code: `
export default function AlertVerifyEmail() {
  const [cooldown, setCooldown] = React.useState(0)

  React.useEffect(() => {
    if (cooldown === 0) return
    const id = setTimeout(() => setCooldown((c) => c - 1), 1000)
    return () => clearTimeout(id)
  }, [cooldown])

  return (
    <Alert variant="info" className="max-w-md">
      <MailIcon />
      <AlertTitle>Confirm your email address</AlertTitle>
      <AlertDescription>
        We sent a link to <span className="font-medium text-foreground">jonah@fieldnote.example</span>. Check your inbox to unlock sharing.
      </AlertDescription>
      <AlertAction>
        <Button size="xs" variant="outline" disabled={cooldown > 0} onClick={() => setCooldown(30)}>
          {cooldown > 0 ? "Resend in " + cooldown + "s" : "Resend"}
        </Button>
      </AlertAction>
    </Alert>
  )
}`,
  },
  {
    name: "AlertApiDeprecation",
    description: "Developer docs warning about a deprecated endpoint with inline code and a migration link.",
    code: `
export default function AlertApiDeprecation() {
  return (
    <Alert variant="warning" className="max-w-md">
      <TriangleAlertIcon />
      <AlertTitle>
        <code className="bg-muted px-1 font-mono">GET /v1/charges</code> is deprecated
      </AlertTitle>
      <AlertDescription>
        <p>
          It will stop responding on March 1, 2027. Use <code className="bg-muted px-1 font-mono text-foreground">GET /v2/payments</code>{" "}
          instead, which supports cursor pagination.
        </p>
        <p>
          <a href="#">Read the migration guide</a>
        </p>
      </AlertDescription>
    </Alert>
  )
}`,
  },
  {
    name: "AlertNewSignIn",
    description: "Security alert about a new sign-in with device details and confirm or secure actions.",
    code: `
export default function AlertNewSignIn() {
  const [answer, setAnswer] = React.useState<"me" | "secure" | null>(null)

  return (
    <Alert variant={answer === "secure" ? "error" : "default"} className="max-w-md">
      <MonitorSmartphoneIcon />
      <AlertTitle>New sign-in to your account</AlertTitle>
      <AlertDescription>
        <dl className="my-1 grid grid-cols-[auto_1fr] gap-x-3">
          <dt>Device</dt>
          <dd className="text-foreground">Firefox on Windows</dd>
          <dt>Location</dt>
          <dd className="text-foreground">Rotterdam, NL</dd>
          <dt>Time</dt>
          <dd className="text-foreground">Today at 08:14</dd>
        </dl>
        {answer === null ? (
          <div className="mt-2 flex gap-1.5">
            <Button size="xs" variant="outline" onClick={() => setAnswer("me")}>
              This was me
            </Button>
            <Button size="xs" variant="destructive" onClick={() => setAnswer("secure")}>
              Secure account
            </Button>
          </div>
        ) : (
          <p className="mt-2 text-foreground">
            {answer === "me" ? "Thanks, we’ll remember this device." : "We signed out all sessions. Check your email to reset your password."}
          </p>
        )}
      </AlertDescription>
    </Alert>
  )
}`,
  },
  {
    name: "AlertRecoveryCodes",
    description: "Warning alert presenting two-factor recovery codes with a copy action.",
    code: `
const codes = ["4F7K-92QD", "M8TZ-1LXA", "Q3VB-7HNP", "C6RW-0YJE", "T2GS-5KMU", "H9DN-8PFC"]

export default function AlertRecoveryCodes() {
  const [copied, setCopied] = React.useState(false)

  const copy = async () => {
    await navigator.clipboard?.writeText(codes.join("\\n"))
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <Alert variant="warning" className="max-w-md">
      <KeyRoundIcon />
      <AlertTitle>Save your recovery codes</AlertTitle>
      <AlertDescription className="space-y-2">
        <p>Each code works once. Store them somewhere safe, you won&apos;t see them again.</p>
        <div className="grid grid-cols-2 gap-1 border bg-background p-2 font-mono text-foreground sm:grid-cols-3">
          {codes.map((code) => (
            <span key={code}>{code}</span>
          ))}
        </div>
        <Button size="xs" variant="outline" onClick={copy}>
          {copied ? <CheckIcon data-icon="inline-start" /> : <CopyIcon data-icon="inline-start" />}
          {copied ? "Copied" : "Copy codes"}
        </Button>
      </AlertDescription>
    </Alert>
  )
}`,
  },
  {
    name: "AlertImportResult",
    description: "Success alert for a CSV import with expandable details about skipped rows.",
    code: `
const skipped = [
  { row: 14, reason: "Missing email" },
  { row: 87, reason: "Duplicate of row 12" },
  { row: 203, reason: "Invalid phone number" },
]

export default function AlertImportResult() {
  const [showDetails, setShowDetails] = React.useState(false)

  return (
    <Alert variant="success" className="max-w-md">
      <FileCheckIcon />
      <AlertTitle>Imported 1,248 contacts</AlertTitle>
      <AlertDescription>
        <p>{skipped.length} rows were skipped and can be fixed in your spreadsheet.</p>
        <Button size="xs" variant="link" className="h-auto px-0" onClick={() => setShowDetails((s) => !s)} aria-expanded={showDetails}>
          {showDetails ? "Hide details" : "Show skipped rows"}
          <ChevronDownIcon data-icon="inline-end" className={cn("transition-transform", showDetails && "rotate-180")} />
        </Button>
        {showDetails && (
          <ul className="mt-1 border-t pt-1">
            {skipped.map((item) => (
              <li key={item.row} className="flex justify-between">
                <span className="font-mono">Row {item.row}</span>
                <span>{item.reason}</span>
              </li>
            ))}
          </ul>
        )}
      </AlertDescription>
    </Alert>
  )
}`,
  },
  {
    name: "AlertMentionWithAvatar",
    description: "Alert that uses an avatar instead of an icon to surface a teammate mention.",
    code: `
export default function AlertMentionWithAvatar() {
  return (
    <Alert className="max-w-md grid-cols-[auto_1fr] gap-x-2.5">
      <Avatar className="row-span-2">
        <AvatarFallback>PS</AvatarFallback>
      </Avatar>
      <AlertTitle className="col-start-2">Priya Shah mentioned you</AlertTitle>
      <AlertDescription className="col-start-2">
        &ldquo;Can you check the pricing table copy before we publish?&rdquo; in <span className="font-medium text-foreground">Launch plan</span>
      </AlertDescription>
      <AlertAction>
        <Button size="xs" variant="outline">
          Reply
        </Button>
      </AlertAction>
    </Alert>
  )
}`,
  },
  {
    name: "AlertBetaFeature",
    description: "Default alert introducing a beta feature with a badge in the title and a feedback link.",
    code: `
export default function AlertBetaFeature() {
  return (
    <Alert className="max-w-md">
      <FlaskConicalIcon />
      <AlertTitle className="flex items-center gap-2">
        AI summaries
        <Badge variant="outline">Beta</Badge>
      </AlertTitle>
      <AlertDescription>
        Summaries are generated for threads with more than 10 replies. Results may be imperfect.{" "}
        <a href="#">Share feedback</a>
      </AlertDescription>
    </Alert>
  )
}`,
  },
  {
    name: "AlertDangerZoneConfirm",
    description: "Destructive error alert paired with a type-to-confirm input that enables the delete button.",
    code: `
export default function AlertDangerZoneConfirm() {
  const [value, setValue] = React.useState("")
  const name = "acme-marketing"

  return (
    <div className="w-full max-w-sm space-y-3">
      <Alert variant="error">
        <TrashIcon />
        <AlertTitle>Delete this workspace</AlertTitle>
        <AlertDescription>
          All 42 projects, files and member access will be permanently removed. This cannot be undone.
        </AlertDescription>
      </Alert>
      <div className="space-y-1.5">
        <Label htmlFor="confirm" className="font-normal">
          Type <span className="font-mono font-medium">{name}</span> to confirm
        </Label>
        <Input id="confirm" value={value} onChange={(e) => setValue(e.target.value)} autoComplete="off" />
      </div>
      <Button variant="destructive" className="w-full" disabled={value !== name}>
        Delete workspace
      </Button>
    </div>
  )
}`,
  },
  {
    name: "AlertUploadTooLarge",
    description: "Upload error alert naming the rejected file, its size and a retry action.",
    code: `
export default function AlertUploadTooLarge() {
  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex flex-col items-center gap-1 border border-dashed py-6 text-center">
        <UploadIcon className="size-5 text-muted-foreground" />
        <p className="text-xs font-medium">Drop files to upload</p>
        <p className="text-xs text-muted-foreground">PDF, PNG or JPG up to 25 MB</p>
      </div>
      <Alert variant="error">
        <FileXIcon />
        <AlertTitle>Upload failed</AlertTitle>
        <AlertDescription>
          <span className="font-mono text-foreground">site-survey-raw.pdf</span> is 61.4 MB, which is over the 25 MB limit.
        </AlertDescription>
        <AlertAction>
          <Button size="xs" variant="outline">
            Choose another
          </Button>
        </AlertAction>
      </Alert>
    </div>
  )
}`,
  },
  {
    name: "AlertUpdateAvailable",
    description: "Info alert announcing a new app version with highlights and a reload button.",
    code: `
const highlights = ["Faster search across all workspaces", "Bulk edit for tasks", "New keyboard shortcuts panel"]

export default function AlertUpdateAvailable() {
  return (
    <Alert variant="info" className="max-w-md">
      <SparklesIcon />
      <AlertTitle>Version 4.2 is ready</AlertTitle>
      <AlertDescription>
        <ul className="my-1 space-y-0.5">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <CheckIcon className="size-3" />
              {item}
            </li>
          ))}
        </ul>
      </AlertDescription>
      <AlertAction>
        <Button size="xs" onClick={() => window.location.reload()}>
          <RefreshCwIcon data-icon="inline-start" />
          Reload
        </Button>
      </AlertAction>
    </Alert>
  )
}`,
  },
  {
    name: "AlertServiceStatusStrip",
    description: "Compact title-only alerts used as a status strip for each service in a dashboard.",
    code: `
const services = [
  { name: "API", status: "Operational", variant: "success" as const, icon: CircleCheckIcon },
  { name: "Dashboard", status: "Operational", variant: "success" as const, icon: CircleCheckIcon },
  { name: "Webhooks", status: "Degraded performance", variant: "warning" as const, icon: TriangleAlertIcon },
  { name: "Email delivery", status: "Partial outage", variant: "error" as const, icon: CircleXIcon },
]

export default function AlertServiceStatusStrip() {
  return (
    <div className="w-full max-w-sm space-y-1.5">
      {services.map((service) => (
        <Alert key={service.name} variant={service.variant} className="items-center py-1.5 *:[svg]:row-span-1">
          <service.icon className="size-3.5" />
          <AlertTitle className="flex justify-between gap-2">
            {service.name}
            <span className="font-normal text-muted-foreground">{service.status}</span>
          </AlertTitle>
        </Alert>
      ))}
    </div>
  )
}`,
  },
  {
    name: "AlertExpiredCardInCard",
    description: "Billing settings card with an embedded alert about an expired payment method.",
    code: `
export default function AlertExpiredCardInCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Payment method</CardTitle>
        <CardDescription>Used for your Team plan renewal.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Alert variant="error">
          <CalendarXIcon />
          <AlertTitle>Card expired</AlertTitle>
          <AlertDescription>Your next invoice on Dec 1 will fail unless you update it.</AlertDescription>
        </Alert>
        <div className="flex items-center gap-3 border p-2.5">
          <span className="flex h-7 w-10 items-center justify-center bg-muted text-[10px] font-semibold">VISA</span>
          <div className="flex-1 text-xs">
            <p className="font-medium">&bull;&bull;&bull;&bull; 4821</p>
            <p className="text-muted-foreground">Expired 10/26</p>
          </div>
          <Button size="xs">Replace</Button>
        </div>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "AlertAutoHide",
    description: "Floating alert triggered by an action that hides itself after a few seconds with a shrinking timer bar.",
    code: `
export default function AlertAutoHide() {
  const [visible, setVisible] = React.useState(false)
  const [draining, setDraining] = React.useState(false)

  React.useEffect(() => {
    if (!visible) return
    const start = setTimeout(() => setDraining(true), 30)
    const hide = setTimeout(() => {
      setVisible(false)
      setDraining(false)
    }, 4000)
    return () => {
      clearTimeout(start)
      clearTimeout(hide)
    }
  }, [visible])

  return (
    <div className="relative flex h-40 w-full max-w-sm flex-col items-center justify-center border border-dashed">
      <Button size="sm" variant="outline" onClick={() => setVisible(true)}>
        <LinkIcon data-icon="inline-start" />
        Copy invite link
      </Button>
      {visible && (
        <Alert variant="success" className="absolute inset-x-3 bottom-3 w-auto overflow-hidden bg-background shadow-md">
          <CircleCheckIcon />
          <AlertTitle>Invite link copied</AlertTitle>
          <AlertDescription>Anyone with the link can join as a viewer.</AlertDescription>
          <span
            aria-hidden
            className={cn(
              "absolute start-0 bottom-0 h-0.5 w-full origin-left bg-foreground/40 transition-transform duration-[3900ms] ease-linear",
              draining ? "scale-x-0" : "scale-x-100"
            )}
          />
        </Alert>
      )}
    </div>
  )
}`,
  },
  {
    name: "AlertRateLimited",
    description: "Rate-limit error alert with a retry button that stays disabled during the countdown.",
    code: `
export default function AlertRateLimited() {
  const [wait, setWait] = React.useState(20)

  React.useEffect(() => {
    if (wait === 0) return
    const id = setTimeout(() => setWait((w) => w - 1), 1000)
    return () => clearTimeout(id)
  }, [wait])

  return (
    <Alert variant="error" className="max-w-md">
      <GaugeIcon />
      <AlertTitle>Too many requests</AlertTitle>
      <AlertDescription>
        You&apos;ve hit the limit of 60 exports per hour. {wait > 0 ? "Try again in " + wait + " seconds." : "You can try again now."}
      </AlertDescription>
      <AlertAction>
        <Button size="xs" variant="outline" disabled={wait > 0} onClick={() => setWait(20)}>
          Retry
        </Button>
      </AlertAction>
    </Alert>
  )
}`,
  },
  {
    name: "AlertSetupProgress",
    description: "Onboarding alert with a step checklist and progress toward finishing setup.",
    code: `
const steps = [
  { label: "Verify your domain", done: true },
  { label: "Connect a payment provider", done: true },
  { label: "Add a team member", done: false },
  { label: "Publish your store", done: false },
]

export default function AlertSetupProgress() {
  const done = steps.filter((s) => s.done).length

  return (
    <Alert className="max-w-md">
      <RocketIcon />
      <AlertTitle>Finish setting up your store</AlertTitle>
      <AlertDescription className="space-y-2">
        <Progress value={(done / steps.length) * 100} aria-label="Setup progress" />
        <ul className="space-y-1">
          {steps.map((step) => (
            <li key={step.label} className={cn("flex items-center gap-1.5", step.done && "line-through")}>
              {step.done ? <CircleCheckIcon className="size-3.5" /> : <CircleIcon className="size-3.5" />}
              {step.label}
            </li>
          ))}
        </ul>
      </AlertDescription>
      <AlertAction>
        <span className="text-xs text-muted-foreground">
          {done}/{steps.length}
        </span>
      </AlertAction>
    </Alert>
  )
}`,
  },
  {
    name: "AlertChatModeration",
    description: "Chat composer with a warning alert explaining why a message was held for review.",
    code: `
export default function AlertChatModeration() {
  return (
    <div className="w-full max-w-sm border">
      <div className="space-y-2 p-3 text-xs">
        <div className="flex gap-2">
          <Avatar size="sm">
            <AvatarFallback>KO</AvatarFallback>
          </Avatar>
          <p className="bg-muted px-2.5 py-1.5">Does anyone have the venue address for Friday?</p>
        </div>
      </div>
      <div className="space-y-2 border-t p-3">
        <Alert variant="warning">
          <ShieldAlertIcon />
          <AlertTitle>Message held for review</AlertTitle>
          <AlertDescription>It looks like it contains a phone number. Community rules don&apos;t allow sharing personal contact details.</AlertDescription>
        </Alert>
        <div className="flex gap-2">
          <Input defaultValue="Call me on 06 1234 5678" aria-label="Message" />
          <Button size="icon" aria-label="Send" disabled>
            <SendIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "AlertCalendarConflict",
    description: "Scheduling warning about overlapping events with reschedule and keep-both choices.",
    code: `
export default function AlertCalendarConflict() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="border p-3 text-xs">
        <p className="font-medium">Quarterly planning</p>
        <p className="text-muted-foreground">Thu, Nov 20 &middot; 14:00 to 15:30</p>
      </div>
      <Alert variant="warning">
        <CalendarClockIcon />
        <AlertTitle>Conflicts with &ldquo;Design review&rdquo;</AlertTitle>
        <AlertDescription>
          <p>Ivy Tran and 2 others are busy from 14:30 to 15:00.</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <Button size="xs">Find a new time</Button>
            <Button size="xs" variant="ghost">
              Keep both
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  )
}`,
  },
  {
    name: "AlertPermissionDenied",
    description: "Access denied alert with a request-access button that switches to a pending state.",
    code: `
export default function AlertPermissionDenied() {
  const [requested, setRequested] = React.useState(false)

  return (
    <Alert variant={requested ? "info" : "error"} className="max-w-md">
      {requested ? <ClockIcon /> : <LockIcon />}
      <AlertTitle>{requested ? "Request sent" : "You don’t have access to this report"}</AlertTitle>
      <AlertDescription>
        {requested
          ? "We’ll email you when Daniel Okafor responds."
          : "Revenue by region is shared with Finance only. Ask the owner, Daniel Okafor, for access."}
      </AlertDescription>
      {!requested && (
        <AlertAction>
          <Button size="xs" onClick={() => setRequested(true)}>
            Request access
          </Button>
        </AlertAction>
      )}
    </Alert>
  )
}`,
  },
  {
    name: "AlertUnsavedChanges",
    description: "Warning alert that appears only when a form has unsaved edits, with discard and save actions.",
    code: `
const initial = "Weekly product updates for the Atlas team."

export default function AlertUnsavedChanges() {
  const [saved, setSaved] = React.useState(initial)
  const [value, setValue] = React.useState(initial)
  const dirty = value !== saved

  return (
    <div className="w-full max-w-sm space-y-3">
      {dirty && (
        <Alert variant="warning">
          <PencilIcon />
          <AlertTitle>You have unsaved changes</AlertTitle>
          <AlertDescription>
            <div className="mt-1 flex gap-1.5">
              <Button size="xs" onClick={() => setSaved(value)}>
                Save
              </Button>
              <Button size="xs" variant="ghost" onClick={() => setValue(saved)}>
                Discard
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}
      <div className="space-y-1.5">
        <Label htmlFor="channel-desc">Channel description</Label>
        <Textarea id="channel-desc" value={value} onChange={(e) => setValue(e.target.value)} rows={3} />
      </div>
    </div>
  )
}`,
  },
  {
    name: "AlertShortcutTip",
    description: "Tip alert teaching a keyboard shortcut with a don't-show-again checkbox.",
    code: `
export default function AlertShortcutTip() {
  const [hidden, setHidden] = React.useState(false)
  const [remember, setRemember] = React.useState(false)

  if (hidden) {
    return <p className="text-xs text-muted-foreground">{remember ? "Tip hidden for good." : "Tip hidden for this session."}</p>
  }

  return (
    <Alert className="max-w-md">
      <LightbulbIcon />
      <AlertTitle className="flex flex-wrap items-center gap-1">
        Tip: press
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
        to jump anywhere
      </AlertTitle>
      <AlertDescription>
        <div className="mt-1 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <Checkbox id="tip-remember" checked={remember} onCheckedChange={setRemember} />
            <Label htmlFor="tip-remember" className="font-normal text-muted-foreground">
              Don&apos;t show again
            </Label>
          </div>
          <Button size="xs" variant="ghost" onClick={() => setHidden(true)}>
            Got it
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}`,
  },
  {
    name: "AlertPolicyUpdate",
    description: "Default alert with multi-paragraph content and links announcing updated terms.",
    code: `
export default function AlertPolicyUpdate() {
  return (
    <Alert className="max-w-md">
      <ScrollTextIcon />
      <AlertTitle>We&apos;re updating our terms</AlertTitle>
      <AlertDescription>
        <p>
          On January 1, 2027 our Terms of Service and Privacy Policy change to cover new data residency options for EU workspaces.
        </p>
        <p>
          Continuing to use Lumen after that date means you accept the new terms. Review the <a href="#">Terms of Service</a> and the{" "}
          <a href="#">Privacy Policy</a>.
        </p>
      </AlertDescription>
    </Alert>
  )
}`,
  },
  {
    name: "AlertVariantPlayground",
    description: "Interactive preview that cycles one alert through every variant with matching icons.",
    code: `
const variants = [
  { value: "default" as const, icon: BellIcon, title: "Heads up", body: "Your weekly report is ready to view." },
  { value: "info" as const, icon: InfoIcon, title: "New in reports", body: "You can now schedule exports to your inbox." },
  { value: "success" as const, icon: CircleCheckIcon, title: "Report sent", body: "Delivered to 12 recipients." },
  { value: "warning" as const, icon: TriangleAlertIcon, title: "Partial data", body: "Two sources haven’t synced since yesterday." },
  { value: "error" as const, icon: CircleXIcon, title: "Export failed", body: "The report was too large to attach." },
]

export default function AlertVariantPlayground() {
  const [index, setIndex] = React.useState(0)
  const current = variants[index] ?? variants[0]!

  return (
    <div className="w-full max-w-md space-y-3">
      <div className="flex flex-wrap gap-1">
        {variants.map((variant, i) => (
          <Button key={variant.value} size="xs" variant={i === index ? "default" : "outline"} onClick={() => setIndex(i)}>
            {variant.value}
          </Button>
        ))}
      </div>
      <Alert variant={current.value}>
        <current.icon />
        <AlertTitle>{current.title}</AlertTitle>
        <AlertDescription>{current.body}</AlertDescription>
      </Alert>
    </div>
  )
}`,
  },
  {
    name: "AlertShippingDelay",
    description: "Order tracking page with an info alert about a carrier delay and the revised delivery date.",
    code: `
export default function AlertShippingDelay() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="flex items-center justify-between text-xs">
        <div>
          <p className="font-medium">Order #48213</p>
          <p className="text-muted-foreground">Tracking HX-2209-8841</p>
        </div>
        <Badge variant="secondary">In transit</Badge>
      </div>
      <Alert variant="info">
        <TruckIcon />
        <AlertTitle>Your delivery is running late</AlertTitle>
        <AlertDescription>
          Storms in the region slowed the carrier. New estimate: <span className="font-medium text-foreground">Wed, Nov 19</span>{" "}
          <span className="line-through">Mon, Nov 17</span>
        </AlertDescription>
      </Alert>
      <Button size="sm" variant="outline" className="w-full">
        Track package
      </Button>
    </div>
  )
}`,
  },
  {
    name: "AlertLowStock",
    description: "Inventory admin warning that lists low-stock products in a compact table.",
    code: `
const items = [
  { sku: "MUG-SAGE-12", name: "Stoneware mug, sage", left: 4 },
  { sku: "TEE-BLK-M", name: "Heavyweight tee, M", left: 7 },
  { sku: "TOTE-NAT", name: "Canvas tote", left: 2 },
]

export default function AlertLowStock() {
  return (
    <Alert variant="warning" className="max-w-md">
      <PackageIcon />
      <AlertTitle>3 products are running low</AlertTitle>
      <AlertDescription>
        <table className="my-1 w-full">
          <tbody>
            {items.map((item) => (
              <tr key={item.sku} className="border-b last:border-0">
                <td className="py-1 pe-2 font-mono text-[10px]">{item.sku}</td>
                <td className="py-1 text-foreground">{item.name}</td>
                <td className="py-1 text-end font-medium text-foreground">{item.left} left</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button size="xs" variant="outline" className="mt-1">
          Create purchase order
        </Button>
      </AlertDescription>
    </Alert>
  )
}`,
  },
  {
    name: "AlertBackupComplete",
    description: "Success alert for a finished backup with metadata and a link-styled action button.",
    code: `
export default function AlertBackupComplete() {
  return (
    <Alert variant="success" className="max-w-md">
      <DatabaseBackupIcon />
      <AlertTitle>Nightly backup complete</AlertTitle>
      <AlertDescription>
        <p>
          <span className="text-foreground">prod-eu-1</span> &middot; 18.4 GB &middot; finished 03:12 UTC
        </p>
      </AlertDescription>
      <AlertAction>
        <Button size="xs" variant="ghost" nativeButton={false} render={<a href="#" />}>
          View logs
          <ArrowUpRightIcon data-icon="inline-end" />
        </Button>
      </AlertAction>
    </Alert>
  )
}`,
  },
  {
    name: "AlertDnsPending",
    description: "Pending verification alert with a spinner icon and a DNS record to copy.",
    code: `
export default function AlertDnsPending() {
  const [copied, setCopied] = React.useState(false)
  const record = "verify=lmn-7c21f9a4e0"

  return (
    <Alert className="max-w-md">
      <Spinner />
      <AlertTitle>Waiting for DNS verification</AlertTitle>
      <AlertDescription className="space-y-2">
        <p>
          Add this TXT record to <span className="font-medium text-foreground">shop.harbourline.example</span>. Changes can take up to 24 hours.
        </p>
        <div className="flex items-center gap-1 border bg-muted/50 ps-2">
          <code className="flex-1 truncate font-mono text-foreground">{record}</code>
          <Button
            size="icon-xs"
            variant="ghost"
            aria-label="Copy record"
            onClick={() => {
              navigator.clipboard?.writeText(record)
              setCopied(true)
            }}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}`,
  },
  {
    name: "AlertAutosaveStatus",
    description: "Polite status alert above an editor that reflects saving and saved states as you type.",
    code: `
export default function AlertAutosaveStatus() {
  const [status, setStatus] = React.useState<"saved" | "saving">("saved")
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const onChange = () => {
    setStatus("saving")
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setStatus("saved"), 900)
  }

  return (
    <div className="w-full max-w-sm space-y-2">
      <Alert role="status" aria-live="polite" className="border-dashed py-1.5">
        {status === "saving" ? <Spinner className="size-3.5" /> : <CloudCheckIcon className="size-3.5" />}
        <AlertTitle className="font-normal text-muted-foreground">
          {status === "saving" ? "Saving draft..." : "All changes saved to the cloud"}
        </AlertTitle>
      </Alert>
      <Textarea
        rows={4}
        onChange={onChange}
        defaultValue="Hi team, here are the notes from Tuesday's planning session."
        aria-label="Draft"
      />
    </div>
  )
}`,
  },
  {
    name: "AlertPromoGradient",
    description: "Promotional upgrade alert with a soft gradient background and a primary call to action.",
    code: `
export default function AlertPromoGradient() {
  return (
    <Alert className="max-w-md border-primary/20 bg-linear-to-r from-primary/10 via-transparent to-primary/5">
      <GiftIcon className="text-foreground" />
      <AlertTitle>Get 2 months free</AlertTitle>
      <AlertDescription>Switch to yearly billing before Nov 30 and save 17% on every seat.</AlertDescription>
      <AlertAction>
        <Button size="xs">Switch to yearly</Button>
      </AlertAction>
    </Alert>
  )
}`,
  },
  {
    name: "AlertMergeConflict",
    description: "Code review error alert listing conflicting files with resolution actions below.",
    code: `
const files = ["src/routes/checkout.tsx", "src/lib/pricing.ts"]

export default function AlertMergeConflict() {
  return (
    <Alert variant="error" className="max-w-md">
      <GitMergeIcon />
      <AlertTitle>This branch has conflicts that must be resolved</AlertTitle>
      <AlertDescription>
        <ul className="my-1 space-y-0.5 font-mono text-foreground">
          {files.map((file) => (
            <li key={file} className="flex items-center gap-1.5">
              <FileCodeIcon className="size-3" />
              {file}
            </li>
          ))}
        </ul>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Button size="xs">Resolve in editor</Button>
          <Button size="xs" variant="outline">
            Use command line
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}`,
  },
  {
    name: "AlertPasswordRequirements",
    description: "Live password rule checklist inside an alert that turns into success when all rules pass.",
    code: `
const rules = [
  { label: "At least 12 characters", test: (v: string) => v.length >= 12 },
  { label: "One uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "One number", test: (v: string) => /\\d/.test(v) },
  { label: "One symbol", test: (v: string) => /[^A-Za-z0-9]/.test(v) },
]

export default function AlertPasswordRequirements() {
  const [value, setValue] = React.useState("harbour7")
  const passed = rules.filter((rule) => rule.test(value)).length
  const ok = passed === rules.length

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="new-password">New password</Label>
      <Input id="new-password" type="password" value={value} onChange={(e) => setValue(e.target.value)} aria-invalid={!ok} />
      <Alert variant={ok ? "success" : "default"}>
        {ok ? <ShieldCheckIcon /> : <ShieldIcon />}
        <AlertTitle>{ok ? "Strong password" : passed + " of " + rules.length + " requirements met"}</AlertTitle>
        <AlertDescription>
          <ul className="space-y-0.5">
            {rules.map((rule) => {
              const met = rule.test(value)
              return (
                <li key={rule.label} className={cn("flex items-center gap-1.5", met && "text-foreground")}>
                  {met ? <CheckIcon className="size-3" /> : <XIcon className="size-3" />}
                  {rule.label}
                </li>
              )
            })}
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  )
}`,
  },
  {
    name: "AlertExperimentResult",
    description: "Analytics alert reporting a statistically significant A/B test result with key numbers.",
    code: `
const stats = [
  { label: "Control", value: "3.8%" },
  { label: "Variant B", value: "4.6%" },
  { label: "Confidence", value: "97%" },
]

export default function AlertExperimentResult() {
  return (
    <Alert variant="success" className="max-w-md">
      <TrendingUpIcon />
      <AlertTitle>Variant B is winning: +21% checkout conversion</AlertTitle>
      <AlertDescription>
        <div className="my-1.5 grid grid-cols-3 border bg-background">
          {stats.map((stat) => (
            <div key={stat.label} className="border-e p-2 last:border-0">
              <p>{stat.label}</p>
              <p className="text-sm font-semibold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>
        <Button size="xs">Roll out to 100%</Button>
      </AlertDescription>
    </Alert>
  )
}`,
  },
  {
    name: "AlertWebhookFailing",
    description: "Error alert for a failing webhook endpoint with recent delivery attempts and status codes.",
    code: `
const attempts = [
  { time: "14:02:11", code: 503 },
  { time: "13:57:09", code: 503 },
  { time: "13:52:04", code: 504 },
]

export default function AlertWebhookFailing() {
  return (
    <Alert variant="error" className="max-w-md">
      <WebhookIcon />
      <AlertTitle>Endpoint failing for 12 minutes</AlertTitle>
      <AlertDescription>
        <p className="truncate font-mono">https://hooks.parcelpoint.example/orders</p>
        <ul className="my-1.5 border bg-background font-mono">
          {attempts.map((attempt) => (
            <li key={attempt.time} className="flex justify-between border-b px-2 py-1 last:border-0">
              <span>{attempt.time}</span>
              <span className="text-destructive">{attempt.code}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-1.5">
          <Button size="xs" variant="outline">
            <RefreshCwIcon data-icon="inline-start" />
            Retry now
          </Button>
          <Button size="xs" variant="ghost">
            Disable endpoint
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}`,
  },
  {
    name: "AlertImpersonationBanner",
    description: "Support-admin banner alert shown while impersonating a customer, with an exit action.",
    code: `
export default function AlertImpersonationBanner() {
  return (
    <div className="w-full max-w-md border">
      <Alert variant="warning" className="border-x-0 border-t-0">
        <UserRoundCogIcon />
        <AlertTitle>Viewing as Sofia Marquez</AlertTitle>
        <AlertDescription>Actions you take are logged and attributed to you.</AlertDescription>
        <AlertAction>
          <Button size="xs" variant="outline">
            <LogOutIcon data-icon="inline-start" />
            Exit
          </Button>
        </AlertAction>
      </Alert>
      <div className="space-y-2 p-3">
        <div className="h-3 w-1/3 bg-muted" />
        <div className="h-16 bg-muted/60" />
        <div className="grid grid-cols-2 gap-2">
          <div className="h-10 bg-muted/60" />
          <div className="h-10 bg-muted/60" />
        </div>
      </div>
    </div>
  )
}`,
  },
]

export default examples
