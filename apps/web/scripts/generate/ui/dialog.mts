import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "InviteTeammatesDialog",
    description: "Invite dialog that collects teammate emails and a workspace role.",
    code: `
export default function InviteTeammatesDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>
        <UserPlusIcon data-icon="inline-start" />
        Invite teammates
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite to Northwind Studio</DialogTitle>
          <DialogDescription>
            Invitations expire after 7 days. Separate multiple emails with commas.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="invite-emails">Email addresses</FieldLabel>
            <Textarea
              id="invite-emails"
              placeholder="lena@northwind.dev, omar@northwind.dev"
              className="min-h-20"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="invite-role">Role</FieldLabel>
            <NativeSelect id="invite-role" defaultValue="member" className="w-full">
              <NativeSelectOption value="admin">Admin</NativeSelectOption>
              <NativeSelectOption value="member">Member</NativeSelectOption>
              <NativeSelectOption value="viewer">Viewer</NativeSelectOption>
            </NativeSelect>
            <FieldDescription>Members can create and edit projects.</FieldDescription>
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <DialogClose render={<Button />}>Send invites</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "TypeToConfirmDeleteDialog",
    description: "Destructive dialog that only enables deletion after the project name is typed.",
    code: `
const projectName = "atlas-marketing-site"

export default function TypeToConfirmDeleteDialog() {
  const [value, setValue] = React.useState("")
  const matches = value === projectName

  return (
    <Dialog onOpenChange={(open) => !open && setValue("")}>
      <DialogTrigger render={<Button variant="destructive" />}>
        <Trash2Icon data-icon="inline-start" />
        Delete project
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete project</DialogTitle>
          <DialogDescription>
            This permanently removes deployments, domains and environment variables for{" "}
            <span className="font-medium text-foreground">{projectName}</span>.
          </DialogDescription>
        </DialogHeader>
        <Field>
          <FieldLabel htmlFor="confirm-project">
            Type <span className="font-mono">{projectName}</span> to confirm
          </FieldLabel>
          <Input
            id="confirm-project"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            autoComplete="off"
          />
        </Field>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <DialogClose render={<Button variant="destructive" disabled={!matches} />}>
            I understand, delete
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "KeyboardShortcutsDialog",
    description: "Reference dialog listing grouped keyboard shortcuts with Kbd keys.",
    code: `
const groups = [
  {
    title: "Navigation",
    items: [
      { label: "Open command menu", keys: ["⌘", "K"] },
      { label: "Go to inbox", keys: ["G", "I"] },
      { label: "Go to projects", keys: ["G", "P"] },
    ],
  },
  {
    title: "Editing",
    items: [
      { label: "New issue", keys: ["C"] },
      { label: "Assign to me", keys: ["I"] },
      { label: "Change status", keys: ["S"] },
    ],
  },
]

export default function KeyboardShortcutsDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <KeyboardIcon data-icon="inline-start" />
        Shortcuts
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Keyboard shortcuts</DialogTitle>
          <DialogDescription>Move faster without leaving the keyboard.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          {groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-2">
              <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                {group.title}
              </p>
              {group.items.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-4">
                  <span>{item.label}</span>
                  <KbdGroup>
                    {item.keys.map((key) => (
                      <Kbd key={key}>{key}</Kbd>
                    ))}
                  </KbdGroup>
                </div>
              ))}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "ShareDocumentDialog",
    description: "Share dialog with a copyable link and per-person access levels.",
    code: `
const people = [
  { name: "Priya Raman", email: "priya@lumen.app", access: "owner" },
  { name: "Jonas Weber", email: "jonas@lumen.app", access: "edit" },
  { name: "Ada Okafor", email: "ada@lumen.app", access: "view" },
]

export default function ShareDocumentDialog() {
  const [copied, setCopied] = React.useState(false)

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <Share2Icon data-icon="inline-start" />
        Share
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share &quot;Q3 Roadmap&quot;</DialogTitle>
          <DialogDescription>Anyone with the link can view this document.</DialogDescription>
        </DialogHeader>
        <InputGroup>
          <InputGroupInput readOnly value="https://lumen.app/d/q3-roadmap" aria-label="Share link" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton onClick={() => setCopied(true)}>
              {copied ? <CheckIcon /> : <CopyIcon />}
              {copied ? "Copied" : "Copy"}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <Separator />
        <div className="flex flex-col gap-3">
          <p className="font-medium">People with access</p>
          {people.map((person) => (
            <div key={person.email} className="flex items-center gap-3">
              <Avatar size="sm">
                <AvatarFallback>
                  {person.name.split(" ").map((part) => part[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{person.name}</p>
                <p className="truncate text-muted-foreground">{person.email}</p>
              </div>
              {person.access === "owner" ? (
                <span className="text-muted-foreground">Owner</span>
              ) : (
                <NativeSelect size="sm" defaultValue={person.access} aria-label={"Access for " + person.name}>
                  <NativeSelectOption value="edit">Can edit</NativeSelectOption>
                  <NativeSelectOption value="view">Can view</NativeSelectOption>
                </NativeSelect>
              )}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "UpgradePlanDialog",
    description: "Plan picker dialog with selectable pricing cards and a billing summary.",
    code: `
const plans = [
  { id: "starter", name: "Starter", price: 0, detail: "3 projects, community support" },
  { id: "pro", name: "Pro", price: 24, detail: "Unlimited projects, 50 GB storage" },
  { id: "team", name: "Team", price: 59, detail: "SSO, audit log, priority support" },
]

export default function UpgradePlanDialog() {
  const [plan, setPlan] = React.useState("pro")
  const selected = plans.find((item) => item.id === plan) ?? plans[1]!

  return (
    <Dialog>
      <DialogTrigger render={<Button />}>
        <SparklesIcon data-icon="inline-start" />
        Upgrade
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Choose your plan</DialogTitle>
          <DialogDescription>You can change or cancel at any time.</DialogDescription>
        </DialogHeader>
        <RadioGroup value={plan} onValueChange={(value) => setPlan(String(value))} className="gap-2">
          {plans.map((item) => (
            <FieldLabel key={item.id} htmlFor={"plan-" + item.id}>
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>
                    {item.name}
                    {item.id === "pro" && <Badge variant="secondary">Popular</Badge>}
                  </FieldTitle>
                  <FieldDescription>{item.detail}</FieldDescription>
                </FieldContent>
                <span className="font-medium tabular-nums">{"$" + item.price}/mo</span>
                <RadioGroupItem value={item.id} id={"plan-" + item.id} />
              </Field>
            </FieldLabel>
          ))}
        </RadioGroup>
        <DialogFooter className="items-center sm:justify-between">
          <p className="text-muted-foreground">
            Billed monthly: <span className="font-medium text-foreground">{"$" + selected.price}</span>
          </p>
          <DialogClose render={<Button disabled={plan === "starter"} />}>
            Continue to checkout
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "ControlledOpenStateDialog",
    description: "Dialog whose open state is controlled externally and tracked outside the popup.",
    code: `
export default function ControlledOpenStateDialog() {
  const [open, setOpen] = React.useState(false)
  const [opens, setOpens] = React.useState(0)

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3 border p-4">
      <p className="text-muted-foreground">
        Dialog is <span className="font-medium text-foreground">{open ? "open" : "closed"}</span> · opened{" "}
        {opens} {opens === 1 ? "time" : "times"}
      </p>
      <Button
        onClick={() => {
          setOpen(true)
          setOpens((count) => count + 1)
        }}
      >
        Open from outside
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled dialog</DialogTitle>
            <DialogDescription>
              The parent owns the open state, so any button or event can open or close it.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close programmatically
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}`,
  },
  {
    name: "CreateApiKeyDialog",
    description: "Two-state dialog that configures key scopes and then reveals the generated secret.",
    code: `
const scopes = [
  { id: "read", label: "Read", description: "List and fetch resources" },
  { id: "write", label: "Write", description: "Create and update resources" },
  { id: "billing", label: "Billing", description: "View invoices and usage" },
]

export default function CreateApiKeyDialog() {
  const [created, setCreated] = React.useState(false)

  return (
    <Dialog onOpenChange={(open) => !open && setCreated(false)}>
      <DialogTrigger render={<Button variant="outline" />}>
        <KeyRoundIcon data-icon="inline-start" />
        Create API key
      </DialogTrigger>
      <DialogContent>
        {created ? (
          <>
            <DialogHeader>
              <DialogTitle>Save your key</DialogTitle>
              <DialogDescription>
                This is the only time the secret is shown. Store it somewhere safe.
              </DialogDescription>
            </DialogHeader>
            <div className="border bg-muted p-3 font-mono break-all">
              key_demo_4zYk
            </div>
            <DialogFooter>
              <DialogClose render={<Button />}>Done</DialogClose>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>New API key</DialogTitle>
              <DialogDescription>Keys inherit the permissions you choose below.</DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="key-name">Name</FieldLabel>
                <Input id="key-name" defaultValue="Production server" />
              </Field>
              <FieldSet>
                <FieldLegend variant="label">Scopes</FieldLegend>
                {scopes.map((scope) => (
                  <Field key={scope.id} orientation="horizontal">
                    <Checkbox id={"scope-" + scope.id} defaultChecked={scope.id === "read"} />
                    <FieldContent>
                      <FieldLabel htmlFor={"scope-" + scope.id}>{scope.label}</FieldLabel>
                      <FieldDescription>{scope.description}</FieldDescription>
                    </FieldContent>
                  </Field>
                ))}
              </FieldSet>
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
              <Button onClick={() => setCreated(true)}>Create key</Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "OnboardingStepsDialog",
    description: "Multi-step onboarding dialog with progress, back and next navigation.",
    code: `
const steps = [
  {
    icon: LayoutDashboardIcon,
    title: "Build your dashboard",
    body: "Drag widgets onto the canvas to track the metrics your team cares about.",
  },
  {
    icon: UsersIcon,
    title: "Bring your team",
    body: "Invite collaborators and assign owners to every report.",
  },
  {
    icon: BellRingIcon,
    title: "Stay in the loop",
    body: "Set alerts so you hear about spikes before your customers do.",
  },
]

export default function OnboardingStepsDialog() {
  const [step, setStep] = React.useState(0)
  const current = steps[step]!
  const last = step === steps.length - 1

  return (
    <Dialog onOpenChange={(open) => open && setStep(0)}>
      <DialogTrigger render={<Button />}>Take the tour</DialogTrigger>
      <DialogContent showCloseButton={false}>
        <div className="flex size-10 items-center justify-center bg-muted">
          <current.icon className="size-5" />
        </div>
        <DialogHeader>
          <p className="text-muted-foreground">
            Step {step + 1} of {steps.length}
          </p>
          <DialogTitle>{current.title}</DialogTitle>
          <DialogDescription>{current.body}</DialogDescription>
        </DialogHeader>
        <Progress value={((step + 1) / steps.length) * 100} />
        <DialogFooter className="sm:justify-between">
          <DialogClose render={<Button variant="ghost" />}>Skip</DialogClose>
          <div className="flex gap-2">
            <Button variant="outline" disabled={step === 0} onClick={() => setStep(step - 1)}>
              Back
            </Button>
            {last ? (
              <DialogClose render={<Button />}>Get started</DialogClose>
            ) : (
              <Button onClick={() => setStep(step + 1)}>Next</Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "ProductFeedbackDialog",
    description: "Feedback dialog with a sentiment toggle group and an optional comment.",
    code: `
const moods = [
  { value: "bad", label: "Not great", icon: FrownIcon },
  { value: "ok", label: "Okay", icon: MehIcon },
  { value: "good", label: "Love it", icon: SmileIcon },
]

export default function ProductFeedbackDialog() {
  const [mood, setMood] = React.useState<string[]>([])

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <MessageSquareIcon data-icon="inline-start" />
        Give feedback
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>How was the new editor?</DialogTitle>
          <DialogDescription>Your answer goes straight to the product team.</DialogDescription>
        </DialogHeader>
        <ToggleGroup
          variant="outline"
          value={mood}
          onValueChange={(value) => setMood(value.map(String))}
          className="w-full"
        >
          {moods.map((item) => (
            <ToggleGroupItem key={item.value} value={item.value} className="h-16 flex-1 flex-col gap-1">
              <item.icon />
              {item.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <Field>
          <FieldLabel htmlFor="feedback-comment">Anything else? (optional)</FieldLabel>
          <Textarea id="feedback-comment" placeholder="Tell us what worked or what got in the way." />
        </Field>
        <DialogFooter>
          <DialogClose render={<Button disabled={mood.length === 0} />}>Send feedback</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "RenameFileValidationDialog",
    description: "Rename dialog that validates the file name and shows an inline error.",
    code: `
export default function RenameFileValidationDialog() {
  const [name, setName] = React.useState("brand-guidelines-v2.pdf")
  const error = !name.trim()
    ? "File name can't be empty."
    : /[\\\\/:*?"<>|]/.test(name)
      ? "Names can't contain special characters."
      : ""

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <PencilIcon data-icon="inline-start" />
        Rename
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename file</DialogTitle>
        </DialogHeader>
        <Field data-invalid={!!error}>
          <FieldLabel htmlFor="file-name">Name</FieldLabel>
          <Input
            id="file-name"
            value={name}
            aria-invalid={!!error}
            onChange={(event) => setName(event.target.value)}
          />
          {error ? <FieldError>{error}</FieldError> : <FieldDescription>Saved to /Marketing/Brand</FieldDescription>}
        </Field>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <DialogClose render={<Button disabled={!!error} />}>Rename</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "QuickSearchDialog",
    description: "Search dialog that filters recent pages as you type, with an empty state.",
    code: `
const pages = [
  { title: "Billing settings", section: "Settings", icon: CreditCardIcon },
  { title: "Team members", section: "Settings", icon: UsersIcon },
  { title: "Revenue overview", section: "Reports", icon: ChartLineIcon },
  { title: "Churn analysis", section: "Reports", icon: ChartPieIcon },
  { title: "Onboarding checklist", section: "Docs", icon: FileTextIcon },
]

export default function QuickSearchDialog() {
  const [query, setQuery] = React.useState("")
  const results = pages.filter((page) => page.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <Dialog onOpenChange={(open) => !open && setQuery("")}>
      <DialogTrigger
        render={<Button variant="outline" className="w-full max-w-xs justify-between text-muted-foreground" />}
      >
        <span className="flex items-center gap-2">
          <SearchIcon />
          Search pages...
        </span>
        <Kbd>⌘K</Kbd>
      </DialogTrigger>
      <DialogContent className="gap-0 p-0" showCloseButton={false}>
        <DialogTitle className="sr-only">Search</DialogTitle>
        <div className="flex items-center gap-2 border-b px-3">
          <SearchIcon className="size-4 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Type to search..."
            className="h-11 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="max-h-64 overflow-y-auto p-1">
          {results.length === 0 ? (
            <p className="p-6 text-center text-muted-foreground">No pages match &quot;{query}&quot;.</p>
          ) : (
            results.map((page) => (
              <DialogClose
                key={page.title}
                render={<button type="button" />}
                className="flex w-full items-center gap-3 px-3 py-2 text-start hover:bg-muted"
              >
                <page.icon className="size-4 text-muted-foreground" />
                <span className="flex-1">{page.title}</span>
                <span className="text-muted-foreground">{page.section}</span>
              </DialogClose>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "GalleryPreviewDialog",
    description: "Thumbnail grid where each tile opens a large gradient preview with metadata.",
    code: `
const artworks = [
  { id: "dawn", title: "Dawn Over Harbor", gradient: "from-amber-300 via-rose-400 to-violet-500", size: "4000 × 3000" },
  { id: "tide", title: "Low Tide", gradient: "from-sky-300 via-cyan-400 to-emerald-500", size: "3600 × 2400" },
  { id: "dusk", title: "Dusk Ridge", gradient: "from-indigo-500 via-purple-500 to-pink-500", size: "5120 × 2880" },
  { id: "moss", title: "Moss Garden", gradient: "from-lime-300 via-green-500 to-teal-600", size: "3000 × 3000" },
]

export default function GalleryPreviewDialog() {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-2">
      {artworks.map((art) => (
        <Dialog key={art.id}>
          <DialogTrigger
            className={cn("aspect-square bg-gradient-to-br outline-none focus-visible:ring-2 focus-visible:ring-ring", art.gradient)}
            aria-label={"Preview " + art.title}
          />
          <DialogContent className="sm:max-w-lg">
            <div className={cn("aspect-[4/3] w-full bg-gradient-to-br", art.gradient)} />
            <DialogHeader>
              <DialogTitle>{art.title}</DialogTitle>
              <DialogDescription>
                {art.size} px · Uploaded by Mira Solberg
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">
                <HeartIcon data-icon="inline-start" />
                Favorite
              </Button>
              <Button>
                <DownloadIcon data-icon="inline-start" />
                Download
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}`,
  },
  {
    name: "CookiePreferencesDialog",
    description: "Consent dialog with per-category switches and accept or save actions.",
    code: `
const categories = [
  { id: "necessary", title: "Strictly necessary", description: "Required for sign-in and security.", locked: true },
  { id: "analytics", title: "Analytics", description: "Helps us understand how pages are used.", locked: false },
  { id: "marketing", title: "Marketing", description: "Personalizes offers on other sites.", locked: false },
]

export default function CookiePreferencesDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="link" />}>
        <CookieIcon data-icon="inline-start" />
        Cookie settings
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cookie preferences</DialogTitle>
          <DialogDescription>Choose which cookies Fernway can store on this device.</DialogDescription>
        </DialogHeader>
        <FieldGroup className="gap-3">
          {categories.map((category) => (
            <Field key={category.id} orientation="horizontal" className="border p-3">
              <FieldContent>
                <FieldLabel htmlFor={"cookie-" + category.id}>{category.title}</FieldLabel>
                <FieldDescription>{category.description}</FieldDescription>
              </FieldContent>
              <Switch
                id={"cookie-" + category.id}
                defaultChecked={category.locked}
                disabled={category.locked}
              />
            </Field>
          ))}
        </FieldGroup>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Save preferences</DialogClose>
          <DialogClose render={<Button />}>Accept all</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "ScheduleCallDialog",
    description: "Booking dialog for choosing a day and an available time slot.",
    code: `
const days = ["Mon 18", "Tue 19", "Wed 20", "Thu 21"]
const slots = ["9:00", "9:30", "10:30", "13:00", "14:30", "16:00"]

export default function ScheduleCallDialog() {
  const [day, setDay] = React.useState(days[1])
  const [slot, setSlot] = React.useState<string | null>(null)

  return (
    <Dialog>
      <DialogTrigger render={<Button />}>
        <CalendarClockIcon data-icon="inline-start" />
        Book a demo
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book a 30-minute demo</DialogTitle>
          <DialogDescription>Times shown in Central European Time.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-2">
          {days.map((item) => (
            <Button
              key={item}
              variant={item === day ? "default" : "outline"}
              onClick={() => {
                setDay(item)
                setSlot(null)
              }}
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {slots.map((item) => (
            <Button
              key={item}
              size="sm"
              variant={item === slot ? "secondary" : "ghost"}
              className="border"
              onClick={() => setSlot(item)}
            >
              {item}
            </Button>
          ))}
        </div>
        <DialogFooter className="items-center sm:justify-between">
          <p className="text-muted-foreground">{slot ? day + " at " + slot : "Pick a time"}</p>
          <DialogClose render={<Button disabled={!slot} />}>Confirm booking</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "AddPaymentMethodDialog",
    description: "Billing dialog for adding a card with number, expiry and CVC fields.",
    code: `
export default function AddPaymentMethodDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <PlusIcon data-icon="inline-start" />
        Add payment method
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add card</DialogTitle>
          <DialogDescription>Your card will be charged on the 1st of each month.</DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-4" onSubmit={(event) => event.preventDefault()}>
          <Field>
            <FieldLabel htmlFor="card-name">Name on card</FieldLabel>
            <Input id="card-name" placeholder="Elena Vasquez" />
          </Field>
          <Field>
            <FieldLabel htmlFor="card-number">Card number</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <CreditCardIcon />
              </InputGroupAddon>
              <InputGroupInput id="card-number" inputMode="numeric" placeholder="4242 4242 4242 4242" />
            </InputGroup>
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="card-expiry">Expiry</FieldLabel>
              <Input id="card-expiry" placeholder="MM / YY" />
            </Field>
            <Field>
              <FieldLabel htmlFor="card-cvc">CVC</FieldLabel>
              <Input id="card-cvc" placeholder="123" inputMode="numeric" />
            </Field>
          </div>
          <Field orientation="horizontal">
            <Checkbox id="card-default" defaultChecked />
            <FieldLabel htmlFor="card-default">Set as default payment method</FieldLabel>
          </Field>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
            <Button type="submit">
              <LockIcon data-icon="inline-start" />
              Save card
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "ReportBugDialog",
    description: "Bug report dialog with a severity radio group, details and diagnostics opt-in.",
    code: `
export default function ReportBugDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="ghost" />}>
        <BugIcon data-icon="inline-start" />
        Report a bug
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Report a bug</DialogTitle>
          <DialogDescription>We read every report. Thanks for helping us improve.</DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <FieldSet>
            <FieldLegend variant="label">Severity</FieldLegend>
            <RadioGroup defaultValue="medium" className="grid grid-cols-3 gap-2">
              {["low", "medium", "blocking"].map((level) => (
                <Field key={level} orientation="horizontal" className="border p-2">
                  <RadioGroupItem value={level} id={"sev-" + level} />
                  <FieldLabel htmlFor={"sev-" + level} className="capitalize">
                    {level}
                  </FieldLabel>
                </Field>
              ))}
            </RadioGroup>
          </FieldSet>
          <Field>
            <FieldLabel htmlFor="bug-steps">What happened?</FieldLabel>
            <Textarea id="bug-steps" placeholder="Steps to reproduce, what you expected, what you saw..." />
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="bug-logs" defaultChecked />
            <FieldContent>
              <FieldLabel htmlFor="bug-logs">Attach diagnostic logs</FieldLabel>
              <FieldDescription>Browser version and the last 50 console messages.</FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <DialogClose render={<Button />}>Submit report</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "ExportDataLoadingDialog",
    description: "Export dialog with format options and a loading state while the file is prepared.",
    code: `
export default function ExportDataLoadingDialog() {
  const [open, setOpen] = React.useState(false)
  const [exporting, setExporting] = React.useState(false)

  function handleExport() {
    setExporting(true)
    window.setTimeout(() => {
      setExporting(false)
      setOpen(false)
    }, 1600)
  }

  return (
    <Dialog open={open} onOpenChange={(next) => !exporting && setOpen(next)}>
      <DialogTrigger render={<Button variant="outline" />}>
        <DownloadIcon data-icon="inline-start" />
        Export
      </DialogTrigger>
      <DialogContent showCloseButton={!exporting}>
        <DialogHeader>
          <DialogTitle>Export transactions</DialogTitle>
          <DialogDescription>2,418 rows from Jan 1 – Mar 31, 2026.</DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <FieldSet disabled={exporting}>
            <FieldLegend variant="label">Format</FieldLegend>
            <RadioGroup defaultValue="csv">
              {[
                { value: "csv", label: "CSV", hint: "Spreadsheets and BI tools" },
                { value: "json", label: "JSON", hint: "Developers and scripts" },
                { value: "pdf", label: "PDF", hint: "Printable statement" },
              ].map((format) => (
                <Field key={format.value} orientation="horizontal">
                  <RadioGroupItem value={format.value} id={"fmt-" + format.value} />
                  <FieldLabel htmlFor={"fmt-" + format.value}>
                    {format.label}
                    <span className="font-normal text-muted-foreground">{format.hint}</span>
                  </FieldLabel>
                </Field>
              ))}
            </RadioGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="export-archived">Include archived accounts</FieldLabel>
            <Switch id="export-archived" disabled={exporting} />
          </Field>
        </FieldGroup>
        <DialogFooter>
          <Button onClick={handleExport} disabled={exporting}>
            {exporting ? <Spinner data-icon="inline-start" /> : <DownloadIcon data-icon="inline-start" />}
            {exporting ? "Preparing file..." : "Export"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "SessionTimeoutDialog",
    description: "Idle warning dialog with a live countdown and stay signed in action.",
    code: `
export default function SessionTimeoutDialog() {
  const [open, setOpen] = React.useState(false)
  const [seconds, setSeconds] = React.useState(60)

  React.useEffect(() => {
    if (!open) return
    const timer = window.setInterval(() => {
      setSeconds((value) => Math.max(0, value - 1))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [open])

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (next) setSeconds(60)
      }}
      disablePointerDismissal
    >
      <DialogTrigger render={<Button variant="outline" />}>
        <TimerIcon data-icon="inline-start" />
        Simulate idle session
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Are you still there?</DialogTitle>
          <DialogDescription>
            For your security, you&apos;ll be signed out of Ledgerly soon.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-1 border bg-muted/50 py-4">
          <span className="font-heading text-3xl font-semibold tabular-nums">
            0:{String(seconds).padStart(2, "0")}
          </span>
          <span className="text-muted-foreground">until automatic sign out</span>
        </div>
        <Progress value={(seconds / 60) * 100} />
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Sign out now</DialogClose>
          <DialogClose render={<Button />}>Stay signed in</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "ChangelogDialog",
    description: "What's new dialog with a scrollable list of tagged release notes.",
    code: `
const releases = [
  { version: "2.8.0", date: "Nov 12", tag: "New", title: "Shared views", body: "Save filters and share them with your whole workspace." },
  { version: "2.7.3", date: "Nov 4", tag: "Improved", title: "Faster search", body: "Results now appear 3× faster on large workspaces." },
  { version: "2.7.1", date: "Oct 28", tag: "Fixed", title: "Timezone offsets", body: "Due dates no longer shift for teams east of UTC." },
  { version: "2.7.0", date: "Oct 20", tag: "New", title: "Recurring tasks", body: "Repeat tasks daily, weekly or on custom schedules." },
]

export default function ChangelogDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <GiftIcon data-icon="inline-start" />
        What&apos;s new
        <Badge className="ms-1">4</Badge>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>What&apos;s new in Trellis</DialogTitle>
          <DialogDescription>Updates from the last 30 days.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="-mx-4 h-64 px-4">
          <ol className="flex flex-col gap-4 border-s ps-4">
            {releases.map((release) => (
              <li key={release.version} className="relative flex flex-col gap-1">
                <span className="absolute -start-[21px] top-1 size-2.5 rounded-full bg-primary" />
                <div className="flex items-center gap-2">
                  <Badge variant={release.tag === "Fixed" ? "outline" : "secondary"}>{release.tag}</Badge>
                  <span className="text-muted-foreground">
                    v{release.version} · {release.date}
                  </span>
                </div>
                <p className="font-medium">{release.title}</p>
                <p className="text-muted-foreground">{release.body}</p>
              </li>
            ))}
          </ol>
        </ScrollArea>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "TermsAcceptanceDialog",
    description: "Policy dialog that requires an acknowledgement checkbox before accepting.",
    code: `
const sections = [
  { title: "1. Your account", body: "You are responsible for activity under your account and for keeping your credentials secure." },
  { title: "2. Acceptable use", body: "Don't use the service to send spam, scrape other users, or interfere with the platform's operation." },
  { title: "3. Data retention", body: "We keep project data for 30 days after deletion so you can restore it, then remove it permanently." },
  { title: "4. Billing", body: "Paid plans renew automatically. You can cancel anytime and keep access until the end of the period." },
  { title: "5. Changes", body: "We'll notify you by email at least 14 days before material changes to these terms take effect." },
]

export default function TermsAcceptanceDialog() {
  const [agreed, setAgreed] = React.useState(false)

  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Review updated terms</DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Updated Terms of Service</DialogTitle>
          <DialogDescription>Effective December 1, 2026.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-48 border bg-muted/30 p-3">
          <div className="flex flex-col gap-3">
            {sections.map((section) => (
              <div key={section.title}>
                <p className="font-medium">{section.title}</p>
                <p className="text-muted-foreground">{section.body}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
        <Field orientation="horizontal">
          <Checkbox id="terms-agree" checked={agreed} onCheckedChange={(checked) => setAgreed(checked === true)} />
          <FieldLabel htmlFor="terms-agree">I have read and agree to the updated terms</FieldLabel>
        </Field>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Remind me later</DialogClose>
          <DialogClose render={<Button disabled={!agreed} />}>Accept</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "TwoFactorSetupDialog",
    description: "Security dialog showing a generated QR pattern and a one-time code input.",
    code: `
const pattern = Array.from({ length: 121 }, (_, index) => (index * 37 + (index % 7) * 11) % 3 === 0)

export default function TwoFactorSetupDialog() {
  const [code, setCode] = React.useState("")

  return (
    <Dialog onOpenChange={(open) => !open && setCode("")}>
      <DialogTrigger render={<Button variant="outline" />}>
        <ShieldCheckIcon data-icon="inline-start" />
        Enable two-factor
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Set up authenticator app</DialogTitle>
          <DialogDescription>Scan the code, then enter the 6-digit code it shows.</DialogDescription>
        </DialogHeader>
        <div className="mx-auto grid size-36 grid-cols-11 gap-px border bg-background p-2" aria-hidden="true">
          {pattern.map((filled, index) => (
            <span key={index} className={filled ? "bg-foreground" : "bg-transparent"} />
          ))}
        </div>
        <p className="text-center font-mono text-muted-foreground">JBSW Y3DP EHPK 3PXP</p>
        <div className="flex justify-center">
          <InputOTP maxLength={6} value={code} onChange={setCode}>
            <InputOTPGroup>
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <DialogClose render={<Button disabled={code.length < 6} />}>Verify and enable</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "AvatarColorPickerDialog",
    description: "Profile dialog for choosing an avatar color with a live initials preview.",
    code: `
const swatches = [
  { id: "violet", className: "bg-violet-500" },
  { id: "sky", className: "bg-sky-500" },
  { id: "emerald", className: "bg-emerald-500" },
  { id: "amber", className: "bg-amber-500" },
  { id: "rose", className: "bg-rose-500" },
  { id: "slate", className: "bg-slate-600" },
]

export default function AvatarColorPickerDialog() {
  const [color, setColor] = React.useState(swatches[0]!)
  const [name, setName] = React.useState("Noah Lindqvist")
  const letters = name.split(" ").filter(Boolean).map((part) => part[0]).join("").slice(0, 2).toUpperCase()

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <span className={cn("flex size-5 items-center justify-center text-[9px] text-white", color.className)}>
          {letters}
        </span>
        Edit avatar
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Profile picture</DialogTitle>
          <DialogDescription>Pick a color for your initials avatar.</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <Avatar size="lg" className="size-20">
            <AvatarFallback className={cn("text-xl text-white", color.className)}>{letters || "?"}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex justify-center gap-2">
          {swatches.map((swatch) => (
            <button
              key={swatch.id}
              type="button"
              aria-label={swatch.id}
              aria-pressed={swatch.id === color.id}
              onClick={() => setColor(swatch)}
              className={cn(
                "size-7 rounded-full ring-offset-2 ring-offset-background outline-none focus-visible:ring-2 focus-visible:ring-ring",
                swatch.className,
                swatch.id === color.id && "ring-2 ring-foreground"
              )}
            />
          ))}
        </div>
        <Field>
          <FieldLabel htmlFor="display-name">Display name</FieldLabel>
          <Input id="display-name" value={name} onChange={(event) => setName(event.target.value)} />
        </Field>
        <DialogFooter>
          <DialogClose render={<Button />}>Save</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "TransferOwnershipDialog",
    description: "High-risk dialog that picks a new owner and re-confirms with a password.",
    code: `
const members = [
  { value: "kai", label: "Kai Moreno — Admin" },
  { value: "ines", label: "Inês Duarte — Admin" },
  { value: "tom", label: "Tomasz Nowak — Member" },
]

export default function TransferOwnershipDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <ArrowRightLeftIcon data-icon="inline-start" />
        Transfer ownership
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Transfer workspace ownership</DialogTitle>
          <DialogDescription>You&apos;ll become an admin and lose access to billing.</DialogDescription>
        </DialogHeader>
        <Alert variant="warning">
          <TriangleAlertIcon />
          <AlertTitle>This can&apos;t be undone by you</AlertTitle>
          <AlertDescription>Only the new owner can transfer ownership back.</AlertDescription>
        </Alert>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="new-owner">New owner</FieldLabel>
            <NativeSelect id="new-owner" defaultValue="" className="w-full">
              <NativeSelectOption value="" disabled>
                Select a member
              </NativeSelectOption>
              {members.map((member) => (
                <NativeSelectOption key={member.value} value={member.value}>
                  {member.label}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          </Field>
          <Field>
            <FieldLabel htmlFor="owner-password">Confirm your password</FieldLabel>
            <Input id="owner-password" type="password" autoComplete="current-password" />
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <DialogClose render={<Button variant="destructive" />}>Transfer</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "NestedConfirmDialog",
    description: "Settings dialog that opens a nested confirmation dialog on top of itself.",
    code: `
export default function NestedConfirmDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <SettingsIcon data-icon="inline-start" />
        Integration settings
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Slack integration</DialogTitle>
          <DialogDescription>Connected to #product-updates by Hana Ito.</DialogDescription>
        </DialogHeader>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="slack-digest">Send daily digest</FieldLabel>
          <Switch id="slack-digest" defaultChecked />
        </Field>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="slack-mentions">Notify on mentions</FieldLabel>
          <Switch id="slack-mentions" />
        </Field>
        <DialogFooter className="sm:justify-between">
          <Dialog>
            <DialogTrigger render={<Button variant="destructive" />}>Disconnect</DialogTrigger>
            <DialogContent showCloseButton={false} className="sm:max-w-xs">
              <DialogHeader>
                <DialogTitle>Disconnect Slack?</DialogTitle>
                <DialogDescription>Notifications to #product-updates will stop immediately.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>Keep</DialogClose>
                <DialogClose render={<Button variant="destructive" />}>Disconnect</DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <DialogClose render={<Button />}>Done</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "FullscreenMobileComposeDialog",
    description: "Compose dialog that fills the screen on mobile and becomes a modal on larger screens.",
    code: `
export default function FullscreenMobileComposeDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>
        <PenSquareIcon data-icon="inline-start" />
        New message
      </DialogTrigger>
      <DialogContent className="flex h-dvh max-w-none flex-col ring-0 sm:h-auto sm:max-w-lg sm:ring-1">
        <DialogHeader>
          <DialogTitle>New message</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col border-y">
          <label className="flex items-center gap-2 border-b py-2">
            <span className="w-10 text-muted-foreground">To</span>
            <input className="flex-1 bg-transparent outline-none" defaultValue="design-team@orbitlabs.io" />
          </label>
          <label className="flex items-center gap-2 py-2">
            <span className="w-10 text-muted-foreground">Subject</span>
            <input className="flex-1 bg-transparent outline-none" placeholder="Weekly review notes" />
          </label>
        </div>
        <Textarea
          className="min-h-40 flex-1 resize-none border-0 px-0 shadow-none focus-visible:ring-0"
          placeholder="Write your message..."
          aria-label="Message"
        />
        <DialogFooter className="flex-row items-center justify-between sm:justify-between">
          <div className="flex gap-1">
            <Button variant="ghost" size="icon-sm" aria-label="Attach file">
              <PaperclipIcon />
            </Button>
            <Button variant="ghost" size="icon-sm" aria-label="Insert link">
              <LinkIcon />
            </Button>
          </div>
          <DialogClose render={<Button />}>
            <SendIcon data-icon="inline-start" />
            Send
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "SettingsSidebarDialog",
    description: "Wide settings dialog with a section sidebar and swappable content pane.",
    code: `
const sections = [
  { id: "general", label: "General", icon: SlidersHorizontalIcon },
  { id: "notifications", label: "Notifications", icon: BellIcon },
  { id: "security", label: "Security", icon: ShieldIcon },
]

export default function SettingsSidebarDialog() {
  const [active, setActive] = React.useState("general")

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <SettingsIcon data-icon="inline-start" />
        Settings
      </DialogTrigger>
      <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-2xl">
        <DialogTitle className="sr-only">Settings</DialogTitle>
        <div className="flex min-h-80 flex-col sm:flex-row">
          <nav className="flex gap-1 border-b bg-muted/40 p-2 sm:w-44 sm:flex-col sm:border-e sm:border-b-0">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={active === section.id ? "secondary" : "ghost"}
                className="justify-start"
                onClick={() => setActive(section.id)}
              >
                <section.icon data-icon="inline-start" />
                {section.label}
              </Button>
            ))}
          </nav>
          <div className="flex flex-1 flex-col gap-4 p-4">
            {active === "general" && (
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="ws-name">Workspace name</FieldLabel>
                  <Input id="ws-name" defaultValue="Harbor Analytics" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="ws-url">Workspace URL</FieldLabel>
                  <Input id="ws-url" defaultValue="harbor" />
                </Field>
              </FieldGroup>
            )}
            {active === "notifications" && (
              <FieldGroup>
                {["Weekly summary", "New comments", "Failed payments"].map((label) => (
                  <Field key={label} orientation="horizontal">
                    <FieldLabel htmlFor={label}>{label}</FieldLabel>
                    <Switch id={label} defaultChecked={label !== "New comments"} />
                  </Field>
                ))}
              </FieldGroup>
            )}
            {active === "security" && (
              <FieldGroup>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldLabel htmlFor="sso">Require SSO</FieldLabel>
                    <FieldDescription>Members must sign in with Okta.</FieldDescription>
                  </FieldContent>
                  <Switch id="sso" />
                </Field>
                <Button variant="outline" className="self-start">
                  Sign out all sessions
                </Button>
              </FieldGroup>
            )}
            <DialogFooter className="mt-auto">
              <DialogClose render={<Button />}>Save changes</DialogClose>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "AsyncSaveDialog",
    description: "Form dialog that shows a spinner while saving and closes on success.",
    code: `
export default function AsyncSaveDialog() {
  const [open, setOpen] = React.useState(false)
  const [saving, setSaving] = React.useState(false)
  const [saved, setSaved] = React.useState(false)

  function handleSave() {
    setSaving(true)
    window.setTimeout(() => {
      setSaving(false)
      setSaved(true)
      setOpen(false)
    }, 1400)
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Dialog open={open} onOpenChange={(next) => !saving && setOpen(next)}>
        <DialogTrigger render={<Button variant="outline" />} onClick={() => setSaved(false)}>
          Edit store details
        </DialogTrigger>
        <DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              handleSave()
            }}
            className="flex flex-col gap-4">
            <DialogHeader>
              <DialogTitle>Store details</DialogTitle>
              <DialogDescription>Shown on receipts and order emails.</DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="store-name">Store name</FieldLabel>
                <Input id="store-name" defaultValue="Juniper & Co." disabled={saving} />
              </Field>
              <Field>
                <FieldLabel htmlFor="store-email">Support email</FieldLabel>
                <Input id="store-email" type="email" defaultValue="hello@juniperco.shop" disabled={saving} />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <Button type="submit" disabled={saving}>
                {saving && <Spinner data-icon="inline-start" />}
                {saving ? "Saving..." : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      {saved && (
        <p className="flex items-center gap-1 text-muted-foreground">
          <CircleCheckIcon className="size-3.5" />
          Store details updated
        </p>
      )}
    </div>
  )
}`,
  },
  {
    name: "UnsavedChangesGuardDialog",
    description: "Editor dialog that intercepts closing when there are unsaved changes.",
    code: `
const initial = "Launch the spring collection with a two-week early access window for members."

export default function UnsavedChangesGuardDialog() {
  const [open, setOpen] = React.useState(false)
  const [text, setText] = React.useState(initial)
  const [confirming, setConfirming] = React.useState(false)
  const dirty = text !== initial

  function discard() {
    setText(initial)
    setConfirming(false)
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next && dirty) {
          setConfirming(true)
          return
        }
        setOpen(next)
      }}
    >
      <DialogTrigger render={<Button variant="outline" />}>Edit summary</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Campaign summary</DialogTitle>
          <DialogDescription>{dirty ? "You have unsaved changes." : "No changes yet."}</DialogDescription>
        </DialogHeader>
        <Textarea value={text} onChange={(event) => setText(event.target.value)} className="min-h-28" />
        {confirming ? (
          <Alert>
            <CircleAlertIcon />
            <AlertTitle>Discard your changes?</AlertTitle>
            <AlertDescription>
              <div className="mt-2 flex gap-2">
                <Button size="sm" variant="destructive" onClick={discard}>
                  Discard
                </Button>
                <Button size="sm" variant="outline" onClick={() => setConfirming(false)}>
                  Keep editing
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        ) : (
          <DialogFooter>
            <Button disabled={!dirty} onClick={() => setOpen(false)}>
              Save
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "ProductQuickViewDialog",
    description: "Storefront quick view dialog with color and size selection and add to bag.",
    code: `
const sizes = ["XS", "S", "M", "L", "XL"]

export default function ProductQuickViewDialog() {
  const [size, setSize] = React.useState<string[]>(["M"])

  return (
    <div className="flex w-full max-w-48 flex-col gap-2">
      <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-400 dark:from-stone-700 dark:to-stone-900" />
      <div className="flex items-center justify-between">
        <span className="font-medium">Merino Crew</span>
        <span className="text-muted-foreground">$89</span>
      </div>
      <Dialog>
        <DialogTrigger render={<Button variant="outline" size="sm" />}>
          <EyeIcon data-icon="inline-start" />
          Quick view
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-400 dark:from-stone-700 dark:to-stone-900" />
            <div className="flex flex-col gap-3">
              <DialogHeader>
                <DialogTitle className="text-base">Merino Crew Sweater</DialogTitle>
                <DialogDescription>Fine-gauge knit in undyed merino wool.</DialogDescription>
              </DialogHeader>
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((star) => (
                  <StarIcon key={star} className={cn("size-3.5", star < 4 ? "fill-current" : "text-muted-foreground")} />
                ))}
                <span className="ms-1 text-muted-foreground">128 reviews</span>
              </div>
              <p className="font-heading text-lg font-semibold">$89.00</p>
              <ToggleGroup
                variant="outline"
                size="sm"
                spacing={1}
                value={size}
                onValueChange={(value) => value.length && setSize(value.map(String))}
              >
                {sizes.map((item) => (
                  <ToggleGroupItem key={item} value={item} disabled={item === "XS"}>
                    {item}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
              <DialogClose render={<Button className="mt-auto" />}>
                <ShoppingBagIcon data-icon="inline-start" />
                Add to bag · {size[0]}
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}`,
  },
  {
    name: "OrderReceiptDialog",
    description: "Order details dialog with line items, totals and a download receipt action.",
    code: `
const items = [
  { name: "Ceramic pour-over set", qty: 1, price: 64 },
  { name: "Single-origin beans, 250g", qty: 2, price: 18.5 },
  { name: "Paper filters (100)", qty: 1, price: 6 },
]

export default function OrderReceiptDialog() {
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0)
  const shipping = 5
  const format = (value: number) => "$" + value.toFixed(2)

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="link" />}>View order #10482</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center gap-2">
            <DialogTitle>Order #10482</DialogTitle>
            <Badge variant="secondary">Shipped</Badge>
          </div>
          <DialogDescription>Placed Nov 9, 2026 · Delivered to Rotterdam, NL</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col divide-y border-y">
          {items.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-4 py-2">
              <span>
                {item.name} <span className="text-muted-foreground">× {item.qty}</span>
              </span>
              <span className="tabular-nums">{format(item.qty * item.price)}</span>
            </div>
          ))}
        </div>
        <dl className="grid grid-cols-2 gap-1 tabular-nums">
          <dt className="text-muted-foreground">Subtotal</dt>
          <dd className="text-end">{format(subtotal)}</dd>
          <dt className="text-muted-foreground">Shipping</dt>
          <dd className="text-end">{format(shipping)}</dd>
          <dt className="font-medium">Total</dt>
          <dd className="text-end font-medium">{format(subtotal + shipping)}</dd>
        </dl>
        <DialogFooter>
          <Button variant="outline">
            <ReceiptIcon data-icon="inline-start" />
            Download receipt
          </Button>
          <Button>
            <TruckIcon data-icon="inline-start" />
            Track package
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "CalendarEventRsvpDialog",
    description: "Calendar event dialog with time, location, attendees and an RSVP choice.",
    code: `
const attendees = ["Rhea Kapoor", "Luca Bianchi", "Sam Oduya", "Mei Tanaka", "Felix Grün"]

export default function CalendarEventRsvpDialog() {
  const [rsvp, setRsvp] = React.useState<string[]>([])

  return (
    <Dialog>
      <DialogTrigger
        render={<button type="button" />}
        className="flex w-full max-w-60 flex-col border-s-4 border-primary bg-muted/60 px-3 py-2 text-start hover:bg-muted"
      >
        <span className="font-medium">Design critique</span>
        <span className="text-muted-foreground">2:00 – 3:00 PM · Room Juniper</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Design critique</DialogTitle>
          <DialogDescription>Weekly review of in-flight product work.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2">
            <ClockIcon className="size-4 text-muted-foreground" />
            Thursday, Nov 19 · 2:00 – 3:00 PM
          </p>
          <p className="flex items-center gap-2">
            <MapPinIcon className="size-4 text-muted-foreground" />
            Room Juniper, 4th floor
          </p>
          <p className="flex items-center gap-2">
            <VideoIcon className="size-4 text-muted-foreground" />
            meet.orbit.dev/crit-weekly
          </p>
        </div>
        <div className="flex items-center gap-2">
          <AvatarGroup>
            {attendees.slice(0, 4).map((person) => (
              <Avatar key={person} size="sm">
                <AvatarFallback>{person.split(" ").map((part) => part[0]).join("")}</AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount>+{attendees.length - 4}</AvatarGroupCount>
          </AvatarGroup>
          <span className="text-muted-foreground">{attendees.length} guests</span>
        </div>
        <Separator />
        <div className="flex items-center justify-between gap-2">
          <span className="font-medium">Going?</span>
          <ToggleGroup variant="outline" size="sm" value={rsvp} onValueChange={(value) => setRsvp(value.map(String))}>
            <ToggleGroupItem value="yes">Yes</ToggleGroupItem>
            <ToggleGroupItem value="maybe">Maybe</ToggleGroupItem>
            <ToggleGroupItem value="no">No</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "NotificationChannelsDialog",
    description: "Notification matrix dialog with per-event checkboxes for email, push and SMS.",
    code: `
const events = ["New comment", "Mention", "Task assigned", "Weekly report"]
const channels = ["Email", "Push", "SMS"]

export default function NotificationChannelsDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <BellIcon data-icon="inline-start" />
        Notification channels
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Where should we reach you?</DialogTitle>
          <DialogDescription>Choose channels for each type of activity.</DialogDescription>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event</TableHead>
              {channels.map((channel) => (
                <TableHead key={channel} className="text-center">
                  {channel}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event, row) => (
              <TableRow key={event}>
                <TableCell>{event}</TableCell>
                {channels.map((channel, col) => (
                  <TableCell key={channel} className="text-center">
                    <Checkbox
                      aria-label={event + " via " + channel}
                      defaultChecked={col === 0 || (col === 1 && row < 2)}
                      disabled={channel === "SMS" && row === 3}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <DialogFooter>
          <DialogClose render={<Button />}>Save preferences</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "UploadFilesDialog",
    description: "File upload dialog with a dropzone and per-file progress rows.",
    code: `
const files = [
  { name: "hero-banner.fig", size: "4.2 MB", progress: 100 },
  { name: "pitch-deck-final.pdf", size: "12.8 MB", progress: 64 },
  { name: "brand-voice.docx", size: "860 KB", progress: 18 },
]

export default function UploadFilesDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>
        <UploadIcon data-icon="inline-start" />
        Upload files
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload to Shared Drive</DialogTitle>
          <DialogDescription>Max 100 MB per file.</DialogDescription>
        </DialogHeader>
        <label className="flex cursor-pointer flex-col items-center gap-2 border border-dashed bg-muted/30 px-4 py-8 text-center hover:bg-muted/60">
          <CloudUploadIcon className="size-6 text-muted-foreground" />
          <span className="font-medium">Drop files here or click to browse</span>
          <span className="text-muted-foreground">PDF, DOCX, FIG, PNG up to 100 MB</span>
          <input type="file" multiple className="sr-only" />
        </label>
        <div className="flex flex-col gap-3">
          {files.map((file) => (
            <div key={file.name} className="flex items-center gap-3">
              <FileIcon className="size-4 shrink-0 text-muted-foreground" />
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex justify-between gap-2">
                  <span className="truncate">{file.name}</span>
                  <span className="shrink-0 text-muted-foreground">
                    {file.progress === 100 ? file.size : file.progress + "%"}
                  </span>
                </div>
                <Progress value={file.progress} />
              </div>
              {file.progress === 100 ? (
                <CircleCheckIcon className="size-4 shrink-0" />
              ) : (
                <Button variant="ghost" size="icon-xs" aria-label={"Cancel " + file.name}>
                  <XIcon />
                </Button>
              )}
            </div>
          ))}
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "IntegrationsDirectoryDialog",
    description: "Integrations dialog where each app can be connected or disconnected in place.",
    code: `
const apps = [
  { id: "calendar", name: "Calendar Sync", description: "Two-way event sync", icon: CalendarIcon },
  { id: "storage", name: "Cloud Storage", description: "Attach files from your drive", icon: HardDriveIcon },
  { id: "chat", name: "Team Chat", description: "Post updates to channels", icon: MessagesSquareIcon },
  { id: "git", name: "Git Provider", description: "Link commits to tasks", icon: GitBranchIcon },
]

export default function IntegrationsDirectoryDialog() {
  const [connected, setConnected] = React.useState<string[]>(["calendar"])

  function toggle(id: string) {
    setConnected((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]))
  }

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <BlocksIcon data-icon="inline-start" />
        Integrations
        <Badge variant="secondary" className="ms-1">
          {connected.length}
        </Badge>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Integrations</DialogTitle>
          <DialogDescription>Connect the tools your team already uses.</DialogDescription>
        </DialogHeader>
        <ItemGroup className="gap-2">
          {apps.map((app) => {
            const isOn = connected.includes(app.id)
            return (
              <Item key={app.id} variant="outline" size="sm">
                <ItemMedia variant="icon">
                  <app.icon />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{app.name}</ItemTitle>
                  <ItemDescription>{app.description}</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button size="sm" variant={isOn ? "outline" : "default"} onClick={() => toggle(app.id)}>
                    {isOn ? "Disconnect" : "Connect"}
                  </Button>
                </ItemActions>
              </Item>
            )
          })}
        </ItemGroup>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "LanguageRegionDialog",
    description: "Locale dialog for language, timezone and date format preferences with a preview.",
    code: `
const formats = [
  { value: "mdy", label: "11/15/2026" },
  { value: "dmy", label: "15/11/2026" },
  { value: "iso", label: "2026-11-15" },
]

export default function LanguageRegionDialog() {
  const [format, setFormat] = React.useState("dmy")

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="ghost" />}>
        <GlobeIcon data-icon="inline-start" />
        English (UK)
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Language & region</DialogTitle>
          <DialogDescription>Applies to the interface and exported reports.</DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="locale-lang">Language</FieldLabel>
            <NativeSelect id="locale-lang" defaultValue="en-GB" className="w-full">
              <NativeSelectOption value="en-US">English (US)</NativeSelectOption>
              <NativeSelectOption value="en-GB">English (UK)</NativeSelectOption>
              <NativeSelectOption value="de">Deutsch</NativeSelectOption>
              <NativeSelectOption value="es">Español</NativeSelectOption>
            </NativeSelect>
          </Field>
          <Field>
            <FieldLabel htmlFor="locale-tz">Time zone</FieldLabel>
            <NativeSelect id="locale-tz" defaultValue="lon" className="w-full">
              <NativeSelectOption value="lon">(GMT+0) London</NativeSelectOption>
              <NativeSelectOption value="ber">(GMT+1) Berlin</NativeSelectOption>
              <NativeSelectOption value="nyc">(GMT-5) New York</NativeSelectOption>
            </NativeSelect>
          </Field>
          <FieldSet>
            <FieldLegend variant="label">Date format</FieldLegend>
            <RadioGroup value={format} onValueChange={(value) => setFormat(String(value))} className="flex flex-wrap gap-4">
              {formats.map((item) => (
                <Field key={item.value} orientation="horizontal" className="w-auto">
                  <RadioGroupItem value={item.value} id={"date-" + item.value} />
                  <FieldLabel htmlFor={"date-" + item.value} className="font-mono">
                    {item.label}
                  </FieldLabel>
                </Field>
              ))}
            </RadioGroup>
          </FieldSet>
        </FieldGroup>
        <DialogFooter>
          <DialogClose render={<Button />}>Apply</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "CancelSubscriptionFlowDialog",
    description: "Two-step cancellation dialog that collects a reason and offers a retention discount.",
    code: `
const reasons = ["Too expensive", "Missing features", "Switching to another tool", "Just taking a break"]

export default function CancelSubscriptionFlowDialog() {
  const [step, setStep] = React.useState<"reason" | "offer">("reason")
  const [reason, setReason] = React.useState("")

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          setStep("reason")
          setReason("")
        }
      }}
    >
      <DialogTrigger render={<Button variant="ghost" className="text-destructive" />}>Cancel subscription</DialogTrigger>
      <DialogContent>
        {step === "reason" ? (
          <>
            <DialogHeader>
              <DialogTitle>Why are you leaving?</DialogTitle>
              <DialogDescription>Your feedback shapes what we build next.</DialogDescription>
            </DialogHeader>
            <RadioGroup value={reason} onValueChange={(value) => setReason(String(value))}>
              {reasons.map((item, index) => (
                <Field key={item} orientation="horizontal">
                  <RadioGroupItem value={item} id={"reason-" + index} />
                  <FieldLabel htmlFor={"reason-" + index}>{item}</FieldLabel>
                </Field>
              ))}
            </RadioGroup>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>Never mind</DialogClose>
              <Button disabled={!reason} onClick={() => setStep("offer")}>
                Continue
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <div className="flex size-10 items-center justify-center bg-muted">
              <BadgePercentIcon className="size-5" />
            </div>
            <DialogHeader>
              <DialogTitle>Before you go: 40% off for 3 months</DialogTitle>
              <DialogDescription>
                Stay on Pro for $14/mo instead of $24/mo. You can still cancel later.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose render={<Button variant="destructive" />}>Cancel anyway</DialogClose>
              <DialogClose render={<Button />}>Claim offer</DialogClose>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "WaitlistSignupDialog",
    description: "Waitlist dialog that swaps to a success state after submitting an email.",
    code: `
export default function WaitlistSignupDialog() {
  const [email, setEmail] = React.useState("")
  const [joined, setJoined] = React.useState(false)
  const valid = /.+@.+[.].+/.test(email)

  return (
    <Dialog>
      <DialogTrigger render={<Button />}>
        Join the beta
        <ArrowRightIcon data-icon="inline-end" />
      </DialogTrigger>
      <DialogContent>
        {joined ? (
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-muted">
              <PartyPopperIcon className="size-6" />
            </div>
            <DialogTitle>You&apos;re #1,284 on the list</DialogTitle>
            <DialogDescription>We&apos;ll email {email} when your invite is ready.</DialogDescription>
            <DialogClose render={<Button variant="outline" />}>Close</DialogClose>
          </div>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={(event) => {
              event.preventDefault()
              if (valid) setJoined(true)
            }}
          >
            <DialogHeader>
              <DialogTitle>Get early access to Halcyon</DialogTitle>
              <DialogDescription>We&apos;re letting in a new group every Friday.</DialogDescription>
            </DialogHeader>
            <Field>
              <FieldLabel htmlFor="waitlist-email">Work email</FieldLabel>
              <Input
                id="waitlist-email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Field>
            <Button type="submit" disabled={!valid}>
              Request invite
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "CreateFolderDialog",
    description: "File manager dialog for naming a new folder and picking a label color.",
    code: `
const colors = [
  { id: "gray", className: "text-muted-foreground" },
  { id: "blue", className: "text-blue-500" },
  { id: "green", className: "text-emerald-500" },
  { id: "amber", className: "text-amber-500" },
  { id: "red", className: "text-red-500" },
]

export default function CreateFolderDialog() {
  const [color, setColor] = React.useState("blue")
  const [name, setName] = React.useState("")
  const active = colors.find((item) => item.id === color) ?? colors[0]!

  return (
    <Dialog onOpenChange={(open) => !open && setName("")}>
      <DialogTrigger render={<Button variant="outline" />}>
        <FolderPlusIcon data-icon="inline-start" />
        New folder
      </DialogTrigger>
      <DialogContent className="sm:max-w-xs">
        <DialogHeader>
          <DialogTitle>New folder</DialogTitle>
          <DialogDescription>Inside Projects / 2026</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-3">
          <FolderIcon className={cn("size-10 shrink-0 fill-current", active.className)} />
          <Input
            autoFocus
            placeholder="Untitled folder"
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-label="Folder name"
          />
        </div>
        <div className="flex gap-2" role="radiogroup" aria-label="Folder color">
          {colors.map((item) => (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={item.id === color}
              aria-label={item.id}
              onClick={() => setColor(item.id)}
              className={cn(
                "flex size-7 items-center justify-center border",
                item.id === color && "border-foreground"
              )}
            >
              <CircleIcon className={cn("size-3.5 fill-current", item.className)} />
            </button>
          ))}
        </div>
        <DialogFooter>
          <DialogClose render={<Button disabled={!name.trim()} />}>Create</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "MoveToFolderDialog",
    description: "Move dialog with a selectable folder tree and a destination summary.",
    code: `
const folders = [
  { id: "root", name: "My Drive", depth: 0 },
  { id: "clients", name: "Clients", depth: 1 },
  { id: "acme", name: "Bluefin Retail", depth: 2 },
  { id: "kestrel", name: "Kestrel Health", depth: 2 },
  { id: "internal", name: "Internal", depth: 1 },
  { id: "hiring", name: "Hiring", depth: 2 },
  { id: "archive", name: "Archive", depth: 1 },
]

export default function MoveToFolderDialog() {
  const [target, setTarget] = React.useState("kestrel")
  const selected = folders.find((folder) => folder.id === target)

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <FolderInputIcon data-icon="inline-start" />
        Move 3 items
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Move 3 items</DialogTitle>
          <DialogDescription>Choose a destination folder.</DialogDescription>
        </DialogHeader>
        <div className="flex max-h-60 flex-col overflow-y-auto border p-1" role="listbox" aria-label="Folders">
          {folders.map((folder) => (
            <button
              key={folder.id}
              type="button"
              role="option"
              aria-selected={folder.id === target}
              onClick={() => setTarget(folder.id)}
              style={{ paddingInlineStart: 8 + folder.depth * 16 }}
              className={cn(
                "flex items-center gap-2 py-1.5 pe-2 text-start hover:bg-muted",
                folder.id === target && "bg-muted font-medium"
              )}
            >
              {folder.id === target ? <FolderOpenIcon className="size-4" /> : <FolderIcon className="size-4 text-muted-foreground" />}
              {folder.name}
            </button>
          ))}
        </div>
        <DialogFooter className="items-center sm:justify-between">
          <span className="truncate text-muted-foreground">To: {selected?.name}</span>
          <DialogClose render={<Button />}>Move here</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "EmptyInboxDialog",
    description: "Notifications dialog that renders an empty state with a follow-up action.",
    code: `
export default function EmptyInboxDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" size="icon" aria-label="Notifications" />}>
        <BellIcon />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Notifications</DialogTitle>
        </DialogHeader>
        <Empty className="border">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <InboxIcon />
            </EmptyMedia>
            <EmptyTitle>You&apos;re all caught up</EmptyTitle>
            <EmptyDescription>New mentions, assignments and replies will show up here.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline" size="sm">
              <SettingsIcon data-icon="inline-start" />
              Notification settings
            </Button>
          </EmptyContent>
        </Empty>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "TabbedEmbedDialog",
    description: "Embed dialog with tabs for link, iframe snippet and email sharing.",
    code: `
export default function TabbedEmbedDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <CodeIcon data-icon="inline-start" />
        Embed chart
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share &quot;Monthly active users&quot;</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="link">
          <TabsList className="w-full">
            <TabsTrigger value="link">Link</TabsTrigger>
            <TabsTrigger value="embed">Embed</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
          </TabsList>
          <TabsContent value="link" className="flex flex-col gap-3 pt-3">
            <Input readOnly value="https://charts.metricly.io/s/mau-q4" aria-label="Public link" />
            <Field orientation="horizontal">
              <FieldLabel htmlFor="embed-public">Anyone with the link can view</FieldLabel>
              <Switch id="embed-public" defaultChecked />
            </Field>
          </TabsContent>
          <TabsContent value="embed" className="flex flex-col gap-3 pt-3">
            <pre className="overflow-x-auto border bg-muted p-3 font-mono text-[11px]">
              {'<iframe src="https://charts.metricly.io/e/mau-q4" width="600" height="400"></iframe>'}
            </pre>
            <Button variant="outline" size="sm" className="self-start">
              <CopyIcon data-icon="inline-start" />
              Copy snippet
            </Button>
          </TabsContent>
          <TabsContent value="email" className="flex flex-col gap-3 pt-3">
            <Input type="email" placeholder="colleague@company.com" aria-label="Recipient" />
            <Textarea placeholder="Add a note (optional)" aria-label="Note" />
            <Button className="self-end">Send</Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "PaymentSuccessDialog",
    description: "Centered success dialog confirming a payment with summary and next steps.",
    code: `
export default function PaymentSuccessDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Pay $240.00</DialogTrigger>
      <DialogContent showCloseButton={false} className="sm:max-w-xs">
        <div className="flex flex-col items-center gap-3 pt-2 text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
            <CircleCheckBigIcon className="size-6" />
          </div>
          <DialogHeader className="items-center text-center">
            <DialogTitle>Payment received</DialogTitle>
            <DialogDescription>Invoice INV-2026-0311 is now paid in full.</DialogDescription>
          </DialogHeader>
        </div>
        <div className="flex flex-col gap-1 border bg-muted/40 p-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Amount</span>
            <span className="font-medium">$240.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Card</span>
            <span>Visa •••• 4417</span>
          </div>
        </div>
        <DialogFooter className="sm:flex-col">
          <DialogClose render={<Button className="w-full" />}>Back to invoices</DialogClose>
          <Button variant="ghost" className="w-full">
            <DownloadIcon data-icon="inline-start" />
            Download receipt
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "TableRowDetailsDialog",
    description: "Admin table where each row opens a shared controlled dialog with that record.",
    code: `
const customers = [
  { id: "cus_8F2", name: "Marta Kowal", plan: "Team", mrr: 590, status: "Active", since: "Mar 2024" },
  { id: "cus_3K9", name: "Dev Patel", plan: "Pro", mrr: 24, status: "Past due", since: "Jan 2026" },
  { id: "cus_1Q4", name: "Yara Haddad", plan: "Pro", mrr: 48, status: "Active", since: "Aug 2025" },
]

type Customer = (typeof customers)[number]

export default function TableRowDetailsDialog() {
  const [selected, setSelected] = React.useState<Customer | null>(null)

  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead className="text-end">MRR</TableHead>
            <TableHead className="w-10" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="font-medium">{customer.name}</TableCell>
              <TableCell>{customer.plan}</TableCell>
              <TableCell className="text-end tabular-nums">{"$" + customer.mrr}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon-xs" aria-label={"View " + customer.name} onClick={() => setSelected(customer)}>
                  <ChevronRightIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent>
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2">
                  <DialogTitle>{selected.name}</DialogTitle>
                  <Badge variant={selected.status === "Active" ? "secondary" : "destructive"}>{selected.status}</Badge>
                </div>
                <DialogDescription className="font-mono">{selected.id}</DialogDescription>
              </DialogHeader>
              <dl className="grid grid-cols-2 gap-2">
                <dt className="text-muted-foreground">Plan</dt>
                <dd>{selected.plan}</dd>
                <dt className="text-muted-foreground">Monthly revenue</dt>
                <dd>{"$" + selected.mrr}</dd>
                <dt className="text-muted-foreground">Customer since</dt>
                <dd>{selected.since}</dd>
              </dl>
              <DialogFooter>
                <Button variant="outline">Issue refund</Button>
                <Button>Open in billing</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}`,
  },
  {
    name: "NewGroupChatDialog",
    description: "Chat dialog for searching people, selecting members and naming a group.",
    code: `
const people = [
  "Aiko Mori",
  "Benedikt Hahn",
  "Carla Ruiz",
  "Daniel Osei",
  "Elif Yılmaz",
  "Farah Siddiqui",
]

export default function NewGroupChatDialog() {
  const [query, setQuery] = React.useState("")
  const [selected, setSelected] = React.useState<string[]>(["Carla Ruiz"])
  const visible = people.filter((person) => person.toLowerCase().includes(query.toLowerCase()))

  function toggle(person: string) {
    setSelected((current) => (current.includes(person) ? current.filter((item) => item !== person) : [...current, person]))
  }

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <MessageCirclePlusIcon data-icon="inline-start" />
        New group
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New group chat</DialogTitle>
          <DialogDescription>{selected.length} selected</DialogDescription>
        </DialogHeader>
        {selected.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {selected.map((person) => (
              <Badge key={person} variant="secondary" className="gap-1">
                {person}
                <button type="button" aria-label={"Remove " + person} onClick={() => toggle(person)}>
                  <XIcon className="size-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}
        <InputGroup>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search people" value={query} onChange={(event) => setQuery(event.target.value)} />
        </InputGroup>
        <div className="flex max-h-48 flex-col overflow-y-auto">
          {visible.map((person) => (
            <label key={person} className="flex cursor-pointer items-center gap-3 px-1 py-1.5 hover:bg-muted">
              <Avatar size="sm">
                <AvatarFallback>{person.split(" ").map((part) => part[0]).join("")}</AvatarFallback>
              </Avatar>
              <span className="flex-1">{person}</span>
              <Checkbox checked={selected.includes(person)} onCheckedChange={() => toggle(person)} />
            </label>
          ))}
        </div>
        <DialogFooter>
          <DialogClose render={<Button disabled={selected.length < 2} />}>Create group</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "RedeemCouponDialog",
    description: "Checkout dialog that validates a promo code and shows invalid or applied states.",
    code: `
const validCodes: Record<string, string> = { WELCOME10: "10% off your first order", FREESHIP: "Free standard shipping" }

export default function RedeemCouponDialog() {
  const [code, setCode] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "invalid" | "applied">("idle")

  function apply() {
    setStatus(validCodes[code.trim().toUpperCase()] ? "applied" : "invalid")
  }

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          setCode("")
          setStatus("idle")
        }
      }}
    >
      <DialogTrigger render={<Button variant="link" />}>
        <TicketPercentIcon data-icon="inline-start" />
        Have a promo code?
      </DialogTrigger>
      <DialogContent className="sm:max-w-xs">
        <DialogHeader>
          <DialogTitle>Redeem a code</DialogTitle>
          <DialogDescription>Try WELCOME10 or FREESHIP.</DialogDescription>
        </DialogHeader>
        <Field data-invalid={status === "invalid"}>
          <FieldLabel htmlFor="promo-code">Promo code</FieldLabel>
          <div className="flex gap-2">
            <Input
              id="promo-code"
              className="uppercase"
              value={code}
              aria-invalid={status === "invalid"}
              onChange={(event) => {
                setCode(event.target.value)
                setStatus("idle")
              }}
            />
            <Button variant="secondary" onClick={apply} disabled={!code}>
              Apply
            </Button>
          </div>
          {status === "invalid" && <FieldError>That code is expired or doesn&apos;t exist.</FieldError>}
          {status === "applied" && (
            <FieldDescription className="flex items-center gap-1 text-foreground">
              <CircleCheckIcon className="size-3.5" />
              {validCodes[code.trim().toUpperCase()]}
            </FieldDescription>
          )}
        </Field>
        <DialogFooter>
          <DialogClose render={<Button disabled={status !== "applied"} />}>Done</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "AnnouncementBannerDialog",
    description: "Edge-to-edge announcement dialog with a gradient hero header and feature list.",
    code: `
const features = [
  { icon: ZapIcon, text: "Automations that run on any event" },
  { icon: BotIcon, text: "An assistant that drafts replies for you" },
  { icon: ChartColumnIcon, text: "Live dashboards with no setup" },
]

export default function AnnouncementBannerDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <MegaphoneIcon data-icon="inline-start" />
        See announcement
      </DialogTrigger>
      <DialogContent className="gap-0 overflow-hidden p-0">
        <div className="relative flex h-32 items-end bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-4">
          <Badge className="bg-white/20 text-white backdrop-blur">Launch week</Badge>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <DialogHeader>
            <DialogTitle className="text-base">Meet Relay 3.0</DialogTitle>
            <DialogDescription>Everything your support team asked for this year, in one release.</DialogDescription>
          </DialogHeader>
          <ul className="flex flex-col gap-2">
            {features.map((feature) => (
              <li key={feature.text} className="flex items-center gap-2">
                <feature.icon className="size-4 text-muted-foreground" />
                {feature.text}
              </li>
            ))}
          </ul>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>Maybe later</DialogClose>
            <DialogClose render={<Button />}>Try it now</DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}`,
  },
  {
    name: "LeaveMeetingDialog",
    description: "Video call dialog offering to leave quietly or end the meeting for everyone.",
    code: `
export default function LeaveMeetingDialog() {
  return (
    <div className="flex items-center gap-2 border bg-muted/40 p-2">
      <Button variant="outline" size="icon" aria-label="Mute">
        <MicIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Turn off camera">
        <VideoIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Share screen">
        <MonitorUpIcon />
      </Button>
      <Dialog>
        <DialogTrigger render={<Button variant="destructive" size="icon" aria-label="Leave call" />}>
          <PhoneOffIcon />
        </DialogTrigger>
        <DialogContent className="sm:max-w-xs">
          <DialogHeader>
            <DialogTitle>Leave &quot;Sprint planning&quot;?</DialogTitle>
            <DialogDescription>You&apos;re the host. 6 people are still in the call.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <DialogClose render={<Button variant="outline" className="justify-start" />}>
              <LogOutIcon data-icon="inline-start" />
              Leave and keep meeting running
            </DialogClose>
            <DialogClose render={<Button variant="destructive" className="justify-start" />}>
              <PhoneOffIcon data-icon="inline-start" />
              End meeting for everyone
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}`,
  },
]

export default examples
