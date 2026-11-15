import { type Example } from "./_lib.mjs"

// Every example owns its own toast manager and mounts a <Toaster> bound to it,
// so it works standalone (the app does not mount a global Base UI Toaster) and
// several previews on one page never render each other's toasts.

const examples: Example[] = [
  {
    name: "ProfileSavedToast",
    description: "A profile settings form that confirms a save with a titled success toast.",
    code: `
const notify = createToastManager()

export default function ProfileSavedToast() {
  const [name, setName] = React.useState("Maya Okafor")

  function save(event: React.FormEvent<React.ComponentRef<"form">>) {
    event.preventDefault()
    notify.add({
      type: "success",
      title: "Profile updated",
      description: "Your display name is now " + name + ".",
    })
  }

  return (
    <Toaster toastManager={notify}>
      <form onSubmit={save} className="flex w-full max-w-sm flex-col gap-4 border p-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="display-name">Display name</Label>
          <Input id="display-name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <Button type="submit" className="self-end">
          Save changes
        </Button>
      </form>
    </Toaster>
  )
}`,
  },
  {
    name: "UndoArchiveToast",
    description: "Archiving an inbox thread shows a toast with an Undo action that restores it.",
    code: `
const notify = createToastManager()

const initialThreads = [
  { id: "t1", from: "Priya Raman", subject: "Q3 roadmap review notes" },
  { id: "t2", from: "Jonas Weber", subject: "Invoice #4821 is ready" },
  { id: "t3", from: "Lena Ortiz", subject: "Design crit moved to Thursday" },
]

export default function UndoArchiveToast() {
  const [threads, setThreads] = React.useState(initialThreads)

  function archive(id: string) {
    const index = threads.findIndex((t) => t.id === id)
    const thread = threads[index]
    if (!thread) return
    setThreads((prev) => prev.filter((t) => t.id !== id))
    const toastId = notify.add({
      title: "Conversation archived",
      description: thread.subject,
      actionProps: {
        children: "Undo",
        onClick: () => {
          setThreads((prev) => {
            const next = [...prev]
            next.splice(index, 0, thread)
            return next
          })
          notify.close(toastId)
        },
      },
    })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="w-full max-w-sm border">
        {threads.length === 0 ? (
          <p className="p-6 text-center text-sm text-muted-foreground">Inbox zero. Nice work.</p>
        ) : (
          threads.map((t) => (
            <div key={t.id} className="flex items-center gap-3 border-b px-3 py-2.5 last:border-b-0">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{t.from}</p>
                <p className="truncate text-xs text-muted-foreground">{t.subject}</p>
              </div>
              <Button variant="ghost" size="icon-sm" aria-label="Archive" onClick={() => archive(t.id)}>
                <ArchiveIcon />
              </Button>
            </div>
          ))
        )}
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "PromiseUploadToast",
    description: "Uses toast.promise to show loading, then success, while a file uploads.",
    code: `
const notify = createToastManager()

function fakeUpload() {
  return new Promise<string>((resolve) => setTimeout(() => resolve("brand-guidelines.pdf"), 2000))
}

export default function PromiseUploadToast() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col items-center gap-3 border border-dashed p-6 text-center">
        <UploadCloudIcon className="size-8 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">brand-guidelines.pdf - 4.2 MB</p>
        <Button
          onClick={() =>
            notify.promise(fakeUpload(), {
              loading: { title: "Uploading...", description: "Sending file to Shared Drive" },
              success: (file: string) => ({ title: "Upload complete", description: file + " is ready to share." }),
              error: "Upload failed",
            })
          }
        >
          Upload file
        </Button>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "PaymentFailedPromiseToast",
    description: "A checkout button whose promise rejects, turning the loading toast into an error.",
    code: `
const notify = createToastManager()

function chargeCard() {
  return new Promise<void>((_, reject) =>
    setTimeout(() => reject(new Error("Your card was declined (insufficient funds).")), 1800)
  )
}

export default function PaymentFailedPromiseToast() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Order total</span>
          <span className="font-semibold">$128.40</span>
        </div>
        <div className="flex items-center gap-2 border bg-muted/40 px-3 py-2 text-sm">
          <CreditCardIcon className="size-4 text-muted-foreground" />
          Visa ending in 4242
        </div>
        <Button
          onClick={() =>
            notify
              .promise(chargeCard(), {
                loading: "Processing payment...",
                success: "Payment received",
                error: (err: Error) => ({ title: "Payment failed", description: err.message, priority: "high" }),
              })
              .catch(() => {})
          }
        >
          Pay now
        </Button>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "LoadingToSuccessUpdate",
    description: "Starts a persistent loading toast and updates the same toast to success when work finishes.",
    code: `
const notify = createToastManager()

export default function LoadingToSuccessUpdate() {
  const [busy, setBusy] = React.useState(false)

  function sync() {
    setBusy(true)
    const id = notify.add({ type: "loading", title: "Syncing contacts", description: "Fetching 1,284 records...", timeout: 0 })
    setTimeout(() => {
      notify.update(id, { type: "success", title: "Contacts synced", description: "42 new, 7 updated.", timeout: 4000 })
      setBusy(false)
    }, 2200)
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs items-center gap-3 border p-4">
        <div className="flex size-9 items-center justify-center bg-muted">
          <ContactIcon className="size-4" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">Address book</p>
          <p className="text-xs text-muted-foreground">Last synced 3 days ago</p>
        </div>
        <Button size="sm" variant="outline" onClick={sync} disabled={busy}>
          <RefreshCwIcon className={cn(busy && "animate-spin")} data-icon="inline-start" />
          Sync
        </Button>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "PersistentToastDismissAll",
    description: "Toasts with timeout 0 stay open until a Dismiss all button closes every one.",
    code: `
const notify = createToastManager()

const alerts = [
  "Disk usage on db-primary is above 85%",
  "SSL certificate for status page expires in 6 days",
  "3 background jobs failed in the last hour",
]

export default function PersistentToastDismissAll() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button
          variant="outline"
          onClick={() =>
            alerts.forEach((text) => notify.add({ type: "warning", title: "Needs attention", description: text, timeout: 0 }))
          }
        >
          <BellRingIcon data-icon="inline-start" />
          Show alerts
        </Button>
        <Button variant="ghost" onClick={() => notify.close()}>
          Dismiss all
        </Button>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "ToastDurationPicker",
    description: "Lets you choose how long the toast stays visible before auto-dismissing.",
    code: `
const notify = createToastManager()

const durations = [
  { label: "2s", value: 2000 },
  { label: "5s", value: 5000 },
  { label: "10s", value: 10000 },
  { label: "Sticky", value: 0 },
]

export default function ToastDurationPicker() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <p className="text-sm font-medium">Auto-dismiss after</p>
        <div className="grid grid-cols-4 gap-2">
          {durations.map((d) => (
            <Button
              key={d.label}
              variant="outline"
              size="sm"
              onClick={() =>
                notify.add({
                  title: "Reminder set",
                  description: d.value ? "This message closes in " + d.value / 1000 + " seconds." : "This message stays until you close it.",
                  timeout: d.value,
                })
              }
            >
              {d.label}
            </Button>
          ))}
        </div>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "ToastStackLimit",
    description: "A Toaster with limit={3} so only the three newest toasts stay visible.",
    code: `
const notify = createToastManager()

export default function ToastStackLimit() {
  const count = React.useRef(0)

  return (
    <Toaster toastManager={notify} limit={3}>
      <div className="flex w-full max-w-xs flex-col items-center gap-2 border p-4 text-center">
        <p className="text-sm text-muted-foreground">Click a few times. Older toasts are hidden once more than three are open.</p>
        <Button
          onClick={() => {
            count.current += 1
            notify.add({ title: "New order #" + (1040 + count.current), description: "Paid via Apple Pay" })
          }}
        >
          <ShoppingBagIcon data-icon="inline-start" />
          Simulate order
        </Button>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "CopyApiKeyToast",
    description: "Copies a masked API key to the clipboard and confirms with a toast.",
    code: `
const notify = createToastManager()
const apiKey = "key_demo_1e8d"

export default function CopyApiKeyToast() {
  function copy() {
    void navigator.clipboard?.writeText(apiKey)
    notify.add({ type: "success", title: "Copied to clipboard", description: "Keep this key secret.", timeout: 2500 })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
        <Label>Secret key</Label>
        <div className="flex items-center gap-2">
          <code className="flex h-8 min-w-0 flex-1 items-center truncate border bg-muted/40 px-2.5 font-mono text-xs">
            key_demo_••••••••1e8d
          </code>
          <Button variant="outline" size="icon" aria-label="Copy API key" onClick={copy}>
            <CopyIcon />
          </Button>
        </div>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "ConnectionStatusToast",
    description: "Reuses a fixed toast id so going offline and back online updates a single toast in place.",
    code: `
const notify = createToastManager()

export default function ConnectionStatusToast() {
  const [online, setOnline] = React.useState(true)

  function change(next: boolean) {
    setOnline(next)
    notify.add(
      next
        ? { id: "connection", type: "success", title: "Back online", description: "Changes are syncing again.", timeout: 3000 }
        : { id: "connection", type: "warning", title: "You are offline", description: "Edits will be saved locally.", timeout: 0 }
    )
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs items-center justify-between gap-4 border p-4">
        <div className="flex items-center gap-2">
          {online ? <WifiIcon className="size-4" /> : <WifiOffIcon className="size-4 text-muted-foreground" />}
          <Label htmlFor="net">Network connection</Label>
        </div>
        <Switch id="net" checked={online} onCheckedChange={change} />
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "AddToCartToast",
    description: "A product card that confirms add-to-cart with a View cart action.",
    code: `
const notify = createToastManager()

export default function AddToCartToast() {
  const [cart, setCart] = React.useState(0)

  return (
    <Toaster toastManager={notify}>
      <div className="w-full max-w-xs border">
        <div className="aspect-[4/3] bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900" />
        <div className="flex flex-col gap-3 p-4">
          <div>
            <p className="text-sm font-medium">Ceramic pour-over set</p>
            <p className="text-sm text-muted-foreground">$64.00</p>
          </div>
          <Button
            onClick={() => {
              setCart((c) => c + 1)
              notify.add({
                type: "success",
                title: "Added to cart",
                description: "Ceramic pour-over set x1",
                actionProps: { children: "View cart (" + (cart + 1) + ")" },
              })
            }}
          >
            <ShoppingCartIcon data-icon="inline-start" />
            Add to cart
          </Button>
        </div>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "FileDeleteUndoToast",
    description: "A file manager where deletions are reversible from the toast for eight seconds.",
    code: `
const notify = createToastManager()

const initialFiles = [
  { name: "Q3-forecast.xlsx", size: "182 KB" },
  { name: "offsite-agenda.docx", size: "48 KB" },
  { name: "logo-final-v4.svg", size: "12 KB" },
]

export default function FileDeleteUndoToast() {
  const [files, setFiles] = React.useState(initialFiles)

  function remove(name: string) {
    const removed = files.find((f) => f.name === name)
    if (!removed) return
    setFiles((prev) => prev.filter((f) => f.name !== name))
    const id = notify.add({
      title: "Moved to trash",
      description: removed.name,
      timeout: 8000,
      actionProps: {
        children: "Undo",
        onClick: () => {
          setFiles((prev) => [...prev, removed])
          notify.close(id)
        },
      },
    })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="w-full max-w-sm border">
        <div className="border-b bg-muted/50 px-3 py-2 text-xs font-medium text-muted-foreground">Project files</div>
        {files.map((f) => (
          <div key={f.name} className="flex items-center gap-3 border-b px-3 py-2 last:border-b-0">
            <FileIcon className="size-4 text-muted-foreground" />
            <span className="min-w-0 flex-1 truncate text-sm">{f.name}</span>
            <span className="text-xs text-muted-foreground">{f.size}</span>
            <Button variant="ghost" size="icon-sm" aria-label={"Delete " + f.name} onClick={() => remove(f.name)}>
              <Trash2Icon />
            </Button>
          </div>
        ))}
        {files.length === 0 && <p className="p-4 text-center text-sm text-muted-foreground">No files</p>}
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "FormValidationErrorToast",
    description: "Submitting an incomplete form raises a high-priority error toast listing missing fields.",
    code: `
const notify = createToastManager()

export default function FormValidationErrorToast() {
  function submit(event: React.FormEvent<React.ComponentRef<"form">>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const missing = ["company", "email"].filter((key) => !String(data.get(key) ?? "").trim())
    if (missing.length) {
      notify.add({
        type: "error",
        priority: "high",
        title: "Please complete the form",
        description: "Missing: " + missing.join(", "),
      })
      return
    }
    notify.add({ type: "success", title: "Request sent", description: "Our team will reply within one business day." })
  }

  return (
    <Toaster toastManager={notify}>
      <form onSubmit={submit} className="flex w-full max-w-sm flex-col gap-3 border p-4">
        <p className="text-sm font-medium">Request a demo</p>
        <Input name="company" placeholder="Company name" />
        <Input name="email" type="email" placeholder="Work email" />
        <Button type="submit">Submit</Button>
      </form>
    </Toaster>
  )
}`,
  },
  {
    name: "TeamInviteToast",
    description: "Sending a workspace invite confirms the recipient and role in the toast.",
    code: `
const notify = createToastManager()

export default function TeamInviteToast() {
  const [email, setEmail] = React.useState("")

  function invite() {
    if (!email.includes("@")) {
      notify.add({ type: "error", title: "Enter a valid email address" })
      return
    }
    notify.add({ type: "success", title: "Invite sent", description: email + " was invited as an Editor." })
    setEmail("")
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
        <p className="text-sm font-medium">Invite to Northwind Studio</p>
        <div className="flex gap-2">
          <Input type="email" placeholder="teammate@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button onClick={invite}>
            <SendIcon data-icon="inline-start" />
            Invite
          </Button>
        </div>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "EventCreatedToast",
    description: "Scheduling a meeting shows a toast with the date and an action to open it.",
    code: `
const notify = createToastManager()

const slots = ["09:30", "11:00", "14:15", "16:45"]

export default function EventCreatedToast() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          <CalendarDaysIcon className="size-4" />
          Thursday, Oct 23
        </div>
        <div className="grid grid-cols-2 gap-2">
          {slots.map((time) => (
            <Button
              key={time}
              variant="outline"
              size="sm"
              onClick={() =>
                notify.add({
                  title: "Meeting scheduled",
                  description: "Design sync - Thu, Oct 23 at " + time,
                  actionProps: { children: "Open" },
                })
              }
            >
              {time}
            </Button>
          ))}
        </div>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "ChatMessageToast",
    description: "A custom toast list that renders incoming chat messages with an avatar and sender name.",
    code: `
const notify = createToastManager()

const messages = [
  { from: "Ava Lindqvist", text: "Can you review the onboarding copy before 3pm?" },
  { from: "Marco Bellini", text: "Pushed the fix for the checkout bug." },
  { from: "Sana Iqbal", text: "Lunch at the usual place?" },
]

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).join("")
}

function MessageToasts() {
  const { toasts } = useToastManager()
  return toasts.map((t) => (
    <Toast key={t.id} toast={t}>
      <ToastContent className="items-start">
        <Avatar size="sm">
          <AvatarFallback>{initials(String(t.title ?? ""))}</AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <ToastTitle />
          <ToastDescription className="line-clamp-2" />
        </div>
        <ToastClose />
      </ToastContent>
    </Toast>
  ))
}

export default function ChatMessageToast() {
  const index = React.useRef(0)

  return (
    <ToastProvider toastManager={notify}>
      <Button
        variant="outline"
        onClick={() => {
          const m = messages[index.current % messages.length]!
          index.current += 1
          notify.add({ title: m.from, description: m.text })
        }}
      >
        <MessageCircleIcon data-icon="inline-start" />
        Receive message
      </Button>
      <ToastPortal>
        <ToastViewport>
          <MessageToasts />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  )
}`,
  },
  {
    name: "DownloadProgressToast",
    description: "One toast whose description and progress bar update as an export downloads.",
    code: `
const notify = createToastManager()

export default function DownloadProgressToast() {
  function start() {
    let pct = 0
    const id = notify.add({ type: "loading", title: "Exporting report", description: "0% complete", timeout: 0 })
    const timer = setInterval(() => {
      pct += 20
      if (pct >= 100) {
        clearInterval(timer)
        notify.update(id, { type: "success", title: "Export ready", description: "sales-q3.csv downloaded", timeout: 4000 })
        return
      }
      notify.update(id, { description: pct + "% complete" })
    }, 600)
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs items-center justify-between gap-3 border p-4">
        <div>
          <p className="text-sm font-medium">Q3 sales report</p>
          <p className="text-xs text-muted-foreground">CSV - approx. 2.1 MB</p>
        </div>
        <Button size="sm" onClick={start}>
          <DownloadIcon data-icon="inline-start" />
          Export
        </Button>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "ActiveToastCounter",
    description: "Reads useToastManager to display how many notifications are currently open.",
    code: `
const notify = createToastManager()

function Counter() {
  const { toasts } = useToastManager()
  const open = toasts.filter((t) => t.transitionStatus !== "ending").length
  return (
    <div className="flex items-center gap-2 text-sm">
      <BellIcon className="size-4" />
      <span>Open notifications</span>
      <Badge variant={open ? "default" : "secondary"}>{open}</Badge>
    </div>
  )
}

export default function ActiveToastCounter() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <Counter />
        <div className="flex gap-2">
          <Button size="sm" className="flex-1" onClick={() => notify.add({ title: "Build #812 passed", description: "main - 3m 12s" })}>
            Notify
          </Button>
          <Button size="sm" variant="outline" className="flex-1" onClick={() => notify.close()}>
            Clear
          </Button>
        </div>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "KeyboardShortcutToast",
    description: "Pressing a keyboard shortcut (or the button) shows a toast that teaches the shortcut.",
    code: `
const notify = createToastManager()

export default function KeyboardShortcutToast() {
  const save = React.useCallback(() => {
    notify.add({
      id: "saved",
      title: "Document saved",
      description: (
        <span className="inline-flex items-center gap-1">
          Tip: press <Kbd>Ctrl</Kbd>+<Kbd>S</Kbd> anytime
        </span>
      ),
      timeout: 2500,
    })
  }, [])

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") {
        e.preventDefault()
        save()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [save])

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col items-center gap-3 border p-4 text-center">
        <p className="text-sm text-muted-foreground">Press the shortcut or use the button.</p>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>S</Kbd>
        </KbdGroup>
        <Button variant="outline" size="sm" onClick={save}>
          <SaveIcon data-icon="inline-start" />
          Save
        </Button>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "PlanUpgradeToast",
    description: "A pricing card upgrade flow that resolves a promise into a celebratory success toast.",
    code: `
const notify = createToastManager()

export default function PlanUpgradeToast() {
  const [plan, setPlan] = React.useState("Starter")

  function upgrade() {
    const request = new Promise<void>((resolve) => setTimeout(resolve, 1500))
    void notify.promise(request, {
      loading: "Upgrading your workspace...",
      success: { title: "Welcome to Pro", description: "Unlimited projects and priority support are now on." },
      error: "Upgrade failed",
    })
    void request.then(() => setPlan("Pro"))
  }

  return (
    <Toaster toastManager={notify}>
      <Card className="w-full max-w-xs">
        <CardHeader>
          <CardTitle>Current plan: {plan}</CardTitle>
          <CardDescription>Pro is $24 per seat, billed monthly.</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full" onClick={upgrade} disabled={plan === "Pro"}>
            <SparklesIcon data-icon="inline-start" />
            {plan === "Pro" ? "You are on Pro" : "Upgrade to Pro"}
          </Button>
        </CardFooter>
      </Card>
    </Toaster>
  )
}`,
  },
  {
    name: "SessionExpiringToast",
    description: "A persistent warning toast whose action extends the session and updates the toast.",
    code: `
const notify = createToastManager()

export default function SessionExpiringToast() {
  function warn() {
    const id = notify.add({
      type: "warning",
      title: "Session expiring",
      description: "You will be signed out in 2 minutes.",
      timeout: 0,
      actionProps: {
        children: "Stay signed in",
        onClick: () =>
          notify.update(id, {
            type: "success",
            title: "Session extended",
            description: "You are good for another 30 minutes.",
            actionProps: undefined,
            timeout: 3000,
          }),
      },
    })
  }

  return (
    <Toaster toastManager={notify}>
      <Button variant="outline" onClick={warn}>
        <TimerIcon data-icon="inline-start" />
        Simulate idle timeout
      </Button>
    </Toaster>
  )
}`,
  },
  {
    name: "CookieConsentToast",
    description: "A sticky consent toast with accept action that cannot be swiped away by timeout.",
    code: `
const notify = createToastManager()

export default function CookieConsentToast() {
  const [choice, setChoice] = React.useState<string | null>(null)

  function ask() {
    const id = notify.add({
      title: "We use cookies",
      description: "Only to remember your preferences. No ads, ever.",
      timeout: 0,
      onClose: () => setChoice((c) => c ?? "dismissed"),
      actionProps: {
        children: "Accept",
        onClick: () => {
          setChoice("accepted")
          notify.close(id)
        },
      },
    })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col items-center gap-2 border p-4 text-center">
        <CookieIcon className="size-6 text-muted-foreground" />
        <p className="text-sm">
          Consent status: <span className="font-medium">{choice ?? "not asked"}</span>
        </p>
        <Button size="sm" onClick={ask}>
          Show banner
        </Button>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "DeploymentPipelineToast",
    description: "A single toast walks through build, deploy and live stages of a deployment.",
    code: `
const notify = createToastManager()

const stages = [
  { title: "Building", description: "Installing dependencies..." },
  { title: "Deploying", description: "Uploading to edge network..." },
]

export default function DeploymentPipelineToast() {
  function deploy() {
    const id = notify.add({ type: "loading", ...stages[0], timeout: 0 })
    setTimeout(() => notify.update(id, stages[1]!), 1500)
    setTimeout(
      () =>
        notify.update(id, {
          type: "success",
          title: "Live on production",
          description: "acme-web deployed in 42s",
          timeout: 5000,
          actionProps: { children: "Visit" },
        }),
      3000
    )
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-sm items-center gap-3 border p-4">
        <RocketIcon className="size-5 text-muted-foreground" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium">acme-web</p>
          <p className="truncate font-mono text-xs text-muted-foreground">main @ 4f9c2ab</p>
        </div>
        <Button size="sm" onClick={deploy}>
          Deploy
        </Button>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "SnoozeReminderToast",
    description: "A reminder toast with a Snooze action that brings it back a few seconds later.",
    code: `
const notify = createToastManager()

function remind() {
  const id = notify.add({
    type: "info",
    title: "Stand-up in 5 minutes",
    description: "Platform team - Room 4B",
    timeout: 0,
    actionProps: {
      children: "Snooze 5s",
      onClick: () => {
        notify.close(id)
        setTimeout(remind, 5000)
      },
    },
  })
}

export default function SnoozeReminderToast() {
  return (
    <Toaster toastManager={notify}>
      <Button variant="outline" onClick={remind}>
        <AlarmClockIcon data-icon="inline-start" />
        Trigger reminder
      </Button>
    </Toaster>
  )
}`,
  },
  {
    name: "BulkActionToast",
    description: "Selecting rows and running a bulk action reports how many items were affected.",
    code: `
const notify = createToastManager()

const tickets = [
  { id: "SUP-201", title: "Cannot reset password" },
  { id: "SUP-202", title: "Invoice shows wrong VAT" },
  { id: "SUP-203", title: "Export stuck at 90%" },
  { id: "SUP-204", title: "Feature request: dark mode" },
]

export default function BulkActionToast() {
  const [selected, setSelected] = React.useState<string[]>([])

  function resolve() {
    notify.add({
      type: "success",
      title: selected.length + (selected.length === 1 ? " ticket resolved" : " tickets resolved"),
      description: selected.join(", "),
    })
    setSelected([])
  }

  return (
    <Toaster toastManager={notify}>
      <div className="w-full max-w-sm border">
        {tickets.map((t) => (
          <label key={t.id} className="flex items-center gap-3 border-b px-3 py-2 text-sm last:border-b-0">
            <Checkbox
              checked={selected.includes(t.id)}
              onCheckedChange={(checked) =>
                setSelected((prev) => (checked ? [...prev, t.id] : prev.filter((x) => x !== t.id)))
              }
            />
            <span className="font-mono text-xs text-muted-foreground">{t.id}</span>
            <span className="truncate">{t.title}</span>
          </label>
        ))}
        <div className="flex justify-end bg-muted/40 p-2">
          <Button size="sm" disabled={!selected.length} onClick={resolve}>
            Resolve selected
          </Button>
        </div>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "AccentBorderToasts",
    description: "Custom-rendered toasts with a colored leading border that reflects the toast type.",
    code: `
const notify = createToastManager()

const accents: Record<string, string> = {
  success: "border-s-emerald-500",
  warning: "border-s-amber-500",
  error: "border-s-destructive",
}

function AccentToasts() {
  const { toasts } = useToastManager()
  return toasts.map((t) => (
    <Toast key={t.id} toast={t} className={cn("border-s-4", accents[t.type ?? ""] ?? "border-s-primary")}>
      <ToastContent>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <ToastTitle />
          <ToastDescription />
        </div>
        <ToastClose />
      </ToastContent>
    </Toast>
  ))
}

export default function AccentBorderToasts() {
  return (
    <ToastProvider toastManager={notify}>
      <div className="flex flex-wrap justify-center gap-2">
        <Button variant="outline" size="sm" onClick={() => notify.add({ type: "success", title: "Backup complete", description: "Snapshot 2025-10-21 stored." })}>
          Success
        </Button>
        <Button variant="outline" size="sm" onClick={() => notify.add({ type: "warning", title: "Quota at 90%", description: "Consider upgrading storage." })}>
          Warning
        </Button>
        <Button variant="outline" size="sm" onClick={() => notify.add({ type: "error", title: "Webhook failed", description: "Endpoint returned 502." })}>
          Error
        </Button>
      </div>
      <ToastPortal>
        <ToastViewport>
          <AccentToasts />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  )
}`,
  },
  {
    name: "TopCenterToastViewport",
    description: "Composes the toast parts manually to place the viewport at the top center of the screen.",
    code: `
const notify = createToastManager()

function TopToasts() {
  const { toasts } = useToastManager()
  return toasts.map((t) => (
    <Toast key={t.id} toast={t} className="top-0 bottom-auto origin-top data-starting-style:[transform:translateY(-150%)]">
      <ToastContent>
        <InfoIcon className="size-4 shrink-0" />
        <ToastDescription className="flex-1 text-foreground" />
        <ToastClose />
      </ToastContent>
    </Toast>
  ))
}

export default function TopCenterToastViewport() {
  return (
    <ToastProvider toastManager={notify}>
      <Button variant="outline" onClick={() => notify.add({ description: "A new version of the app is available." })}>
        <ArrowUpIcon data-icon="inline-start" />
        Show at top
      </Button>
      <ToastPortal>
        <ToastViewport className="top-4 bottom-auto sm:start-1/2 sm:end-auto sm:-translate-x-1/2">
          <TopToasts />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  )
}`,
  },
  {
    name: "ToastActivityLog",
    description: "Uses onClose callbacks to record dismissed notifications in an on-page activity log.",
    code: `
const notify = createToastManager()

const events = ["Ticket SUP-88 assigned to you", "Refund of $42.00 approved", "New review: 5 stars"]

export default function ToastActivityLog() {
  const [log, setLog] = React.useState<string[]>([])
  const next = React.useRef(0)

  function push() {
    const text = events[next.current % events.length]!
    next.current += 1
    notify.add({
      title: text,
      timeout: 3000,
      onClose: () => setLog((prev) => [text, ...prev].slice(0, 4)),
    })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <Button size="sm" onClick={push}>
          Push notification
        </Button>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium text-muted-foreground">Recently dismissed</p>
          {log.length === 0 ? (
            <p className="text-xs text-muted-foreground">Nothing yet</p>
          ) : (
            log.map((item, i) => (
              <p key={i} className="flex items-center gap-1.5 text-xs">
                <HistoryIcon className="size-3 text-muted-foreground" />
                {item}
              </p>
            ))
          )}
        </div>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "DeduplicatedToast",
    description: "Repeated clicks refresh one toast with a running count instead of stacking duplicates.",
    code: `
const notify = createToastManager()

export default function DeduplicatedToast() {
  const [likes, setLikes] = React.useState(0)

  function like() {
    const next = likes + 1
    setLikes(next)
    notify.add({
      id: "likes",
      title: "Liked",
      description: "You liked this post " + next + (next === 1 ? " time" : " times") + ".",
      timeout: 2000,
    })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <p className="text-sm">&quot;Shipping the new editor today. Thanks to everyone who tested it!&quot;</p>
        <Button variant="outline" size="sm" className="self-start" onClick={like}>
          <HeartIcon data-icon="inline-start" className={cn(likes > 0 && "fill-current text-rose-500")} />
          {likes}
        </Button>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "AchievementUnlockedToast",
    description: "A custom-rendered toast with a gradient badge for gamified achievements.",
    code: `
const notify = createToastManager()

function AchievementToasts() {
  const { toasts } = useToastManager()
  return toasts.map((t) => (
    <Toast key={t.id} toast={t}>
      <ToastContent>
        <div className="flex size-10 shrink-0 items-center justify-center bg-gradient-to-br from-amber-400 to-orange-600 text-white">
          <TrophyIcon className="size-5" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">Achievement unlocked</span>
          <ToastTitle />
          <ToastDescription className="text-xs" />
        </div>
      </ToastContent>
    </Toast>
  ))
}

export default function AchievementUnlockedToast() {
  return (
    <ToastProvider toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <div className="flex justify-between text-sm">
          <span>Daily streak</span>
          <span className="font-medium">6 / 7 days</span>
        </div>
        <Progress value={86} />
        <Button size="sm" onClick={() => notify.add({ title: "Week warrior", description: "Practiced 7 days in a row. +50 XP" })}>
          Complete today&apos;s lesson
        </Button>
      </div>
      <ToastPortal>
        <ToastViewport>
          <AchievementToasts />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  )
}`,
  },
  {
    name: "RetryOnErrorToast",
    description: "A failing request shows an error toast whose Retry action re-runs it until it succeeds.",
    code: `
const notify = createToastManager()

export default function RetryOnErrorToast() {
  const attempts = React.useRef(0)

  function run() {
    attempts.current += 1
    const ok = attempts.current >= 2
    const request = new Promise<void>((resolve, reject) => setTimeout(() => (ok ? resolve() : reject(new Error("timeout"))), 1200))
    notify
      .promise(request, {
        loading: "Connecting to Corvia test account...",
        success: { title: "Connected", description: "Payments are ready to accept." },
        error: {
          title: "Connection timed out",
          description: "Attempt " + attempts.current + " failed.",
          actionProps: { children: "Retry", onClick: run },
        },
      })
      .catch(() => {})
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs items-center gap-3 border p-4">
        <PlugIcon className="size-5 text-muted-foreground" />
        <p className="flex-1 text-sm font-medium">Payment provider</p>
        <Button size="sm" onClick={() => { attempts.current = 0; run() }}>
          Connect
        </Button>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "ShareLinkToast",
    description: "Share buttons for several channels, each confirming the share destination in a toast.",
    code: `
const notify = createToastManager()

const channels = [
  { label: "Copy link", icon: LinkIcon, message: "Link copied to clipboard" },
  { label: "Email", icon: MailIcon, message: "Email draft opened" },
  { label: "Embed", icon: CodeIcon, message: "Embed code copied" },
]

export default function ShareLinkToast() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <p className="text-sm font-medium">Share &quot;Spring lookbook&quot;</p>
        <div className="grid grid-cols-3 gap-2">
          {channels.map((c) => (
            <Button
              key={c.label}
              variant="outline"
              className="h-auto flex-col gap-1.5 py-3 text-xs"
              onClick={() => notify.add({ type: "success", description: c.message, timeout: 2500 })}
            >
              <c.icon />
              {c.label}
            </Button>
          ))}
        </div>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "PasswordChangedToast",
    description: "A security form that confirms a password change and offers to sign out other devices.",
    code: `
const notify = createToastManager()

export default function PasswordChangedToast() {
  function submit(event: React.FormEvent<React.ComponentRef<"form">>) {
    event.preventDefault()
    event.currentTarget.reset()
    const id = notify.add({
      type: "success",
      title: "Password changed",
      description: "You are still signed in on 2 other devices.",
      timeout: 8000,
      actionProps: {
        children: "Sign out others",
        onClick: () => notify.update(id, { title: "Other sessions ended", description: "Only this device is signed in.", actionProps: undefined }),
      },
    })
  }

  return (
    <Toaster toastManager={notify}>
      <form onSubmit={submit} className="flex w-full max-w-sm flex-col gap-3 border p-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          <LockIcon className="size-4" />
          Change password
        </div>
        <Input type="password" placeholder="Current password" required />
        <Input type="password" placeholder="New password" required minLength={8} />
        <Button type="submit">Update password</Button>
      </form>
    </Toaster>
  )
}`,
  },
  {
    name: "OrderShippedToast",
    description: "An order timeline where advancing the status announces each step with a toast.",
    code: `
const notify = createToastManager()

const steps = ["Order placed", "Packed", "Shipped", "Out for delivery", "Delivered"]

export default function OrderShippedToast() {
  const [step, setStep] = React.useState(0)

  function advance() {
    const next = Math.min(step + 1, steps.length - 1)
    setStep(next)
    notify.add({
      id: "order",
      type: next === steps.length - 1 ? "success" : "info",
      title: "Order #A-3391: " + steps[next],
      description: next === 2 ? "Tracking number 1Z 999 AA1 01 2345 6784" : undefined,
      actionProps: next === 2 ? { children: "Track" } : undefined,
    })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <ol className="flex flex-col gap-1.5">
          {steps.map((s, i) => (
            <li key={s} className={cn("flex items-center gap-2 text-sm", i > step && "text-muted-foreground")}>
              {i <= step ? <CircleCheckIcon className="size-4" /> : <CircleIcon className="size-4" />}
              {s}
            </li>
          ))}
        </ol>
        <Button size="sm" onClick={advance} disabled={step === steps.length - 1}>
          <TruckIcon data-icon="inline-start" />
          Advance status
        </Button>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "CsvImportResultToast",
    description: "A CSV import whose promise result count is interpolated into the success toast.",
    code: `
const notify = createToastManager()

function importRows() {
  return new Promise<{ imported: number; skipped: number }>((resolve) =>
    setTimeout(() => resolve({ imported: 318, skipped: 4 }), 1600)
  )
}

export default function CsvImportResultToast() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <div className="flex items-center gap-2">
          <FileSpreadsheetIcon className="size-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">customers.csv</p>
            <p className="text-xs text-muted-foreground">322 rows detected</p>
          </div>
        </div>
        <Button
          size="sm"
          onClick={() =>
            notify.promise(importRows(), {
              loading: { title: "Importing customers", description: "Matching columns..." },
              success: (r: { imported: number; skipped: number }) => ({
                title: r.imported + " customers imported",
                description: r.skipped + " duplicate rows were skipped.",
              }),
              error: "Import failed",
            })
          }
        >
          Start import
        </Button>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "PriorityAnnouncementToast",
    description: "Contrasts polite low-priority toasts with urgent high-priority ones for screen readers.",
    code: `
const notify = createToastManager()

export default function PriorityAnnouncementToast() {
  return (
    <Toaster toastManager={notify}>
      <div className="grid w-full max-w-sm grid-cols-2 gap-3">
        <div className="flex flex-col gap-2 border p-3">
          <Badge variant="secondary">priority: low</Badge>
          <p className="text-xs text-muted-foreground">Announced politely after the current speech.</p>
          <Button size="sm" variant="outline" onClick={() => notify.add({ title: "Comment added", description: "Jules replied on Homepage v2.", priority: "low" })}>
            Polite
          </Button>
        </div>
        <div className="flex flex-col gap-2 border p-3">
          <Badge variant="destructive">priority: high</Badge>
          <p className="text-xs text-muted-foreground">Interrupts assistive tech immediately.</p>
          <Button size="sm" variant="destructive" onClick={() => notify.add({ type: "error", title: "Payment method expired", description: "Update it to avoid service interruption.", priority: "high" })}>
            Urgent
          </Button>
        </div>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "FollowUserToast",
    description: "A profile card follow button with an Unfollow action in the confirmation toast.",
    code: `
const notify = createToastManager()

export default function FollowUserToast() {
  const [following, setFollowing] = React.useState(false)

  function follow() {
    setFollowing(true)
    const id = notify.add({
      title: "Following Theo Nakamura",
      description: "You will see their posts in your feed.",
      actionProps: {
        children: "Unfollow",
        onClick: () => {
          setFollowing(false)
          notify.close(id)
        },
      },
    })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs items-center gap-3 border p-4">
        <Avatar>
          <AvatarFallback>TN</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium">Theo Nakamura</p>
          <p className="truncate text-xs text-muted-foreground">Motion designer - 2.4k followers</p>
        </div>
        <Button size="sm" variant={following ? "outline" : "default"} onClick={following ? () => setFollowing(false) : follow}>
          {following ? "Following" : "Follow"}
        </Button>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "AutosaveDraftToast",
    description: "A debounced editor that shows a quiet Draft saved toast after you stop typing.",
    code: `
const notify = createToastManager()

export default function AutosaveDraftToast() {
  const [text, setText] = React.useState("")

  React.useEffect(() => {
    if (!text) return
    const handle = setTimeout(() => {
      notify.add({ id: "autosave", description: "Draft saved - " + text.trim().split(/\\s+/).length + " words", timeout: 1800 })
    }, 800)
    return () => clearTimeout(handle)
  }, [text])

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
        <Label htmlFor="release-notes">Release notes</Label>
        <Textarea id="release-notes" rows={4} placeholder="Start typing. Your draft saves automatically." value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "RemoveMemberToast",
    description: "Removing a team member from a row menu confirms with a destructive-styled toast.",
    code: `
const notify = createToastManager()

const initialMembers = [
  { name: "Rina Patel", role: "Admin" },
  { name: "Oskar Lund", role: "Editor" },
  { name: "Mei Tanaka", role: "Viewer" },
]

export default function RemoveMemberToast() {
  const [members, setMembers] = React.useState(initialMembers)

  return (
    <Toaster toastManager={notify}>
      <div className="w-full max-w-sm border">
        {members.map((m) => (
          <div key={m.name} className="flex items-center gap-3 border-b px-3 py-2 last:border-b-0">
            <Avatar size="sm">
              <AvatarFallback>{m.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
            </Avatar>
            <span className="flex-1 text-sm">{m.name}</span>
            <Badge variant="outline">{m.role}</Badge>
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Member actions" />}>
                <EllipsisIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  variant="destructive"
                  onClick={() => {
                    setMembers((prev) => prev.filter((x) => x.name !== m.name))
                    notify.add({ type: "error", title: m.name + " removed", description: "They lost access to all projects." })
                  }}
                >
                  <UserMinusIcon />
                  Remove
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "FocusTimerToast",
    description: "A short focus timer that fires a persistent toast with a restart action when it ends.",
    code: `
const notify = createToastManager()

export default function FocusTimerToast() {
  const [left, setLeft] = React.useState<number | null>(null)

  const start = React.useCallback(() => setLeft(5), [])

  React.useEffect(() => {
    if (left === null) return
    const id = setTimeout(() => {
      if (left > 1) {
        setLeft(left - 1)
        return
      }
      setLeft(null)
      notify.add({
        type: "success",
        title: "Focus session complete",
        description: "Take a 5 minute break.",
        timeout: 0,
        actionProps: { children: "Restart", onClick: () => { notify.close(); start() } },
      })
    }, 1000)
    return () => clearTimeout(id)
  }, [left, start])

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col items-center gap-3 border p-6">
        <span className="font-mono text-4xl tabular-nums">00:0{left ?? 5}</span>
        <Button onClick={start} disabled={left !== null}>
          <PlayIcon data-icon="inline-start" />
          {left !== null ? "Focusing..." : "Start 5s demo"}
        </Button>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "RichContentToast",
    description: "A toast description built from JSX with a badge, emphasis and a monospace reference.",
    code: `
const notify = createToastManager()

export default function RichContentToast() {
  return (
    <Toaster toastManager={notify}>
      <Button
        variant="outline"
        onClick={() =>
          notify.add({
            title: "Pull request merged",
            description: (
              <span className="flex flex-wrap items-center gap-1.5">
                <Badge variant="secondary">#1287</Badge>
                <span>
                  <strong className="font-medium text-foreground">Add audit log export</strong> into
                </span>
                <code className="bg-muted px-1 font-mono text-xs">main</code>
              </span>
            ),
          })
        }
      >
        <GitMergeIcon data-icon="inline-start" />
        Merge pull request
      </Button>
    </Toaster>
  )
}`,
  },
  {
    name: "PriceAlertDataToast",
    description: "Passes custom data with each toast and renders it as a price change with direction.",
    code: `
const notify = createToastManager<{ symbol: string; price: number; change: number }>()

function PriceToasts() {
  const { toasts } = useToastManager<{ symbol: string; price: number; change: number }>()
  return toasts.map((t) => {
    const d = t.data
    const up = (d?.change ?? 0) >= 0
    return (
      <Toast key={t.id} toast={t}>
        <ToastContent>
          <div className={cn("flex size-9 shrink-0 items-center justify-center", up ? "bg-emerald-500/15 text-emerald-600" : "bg-destructive/15 text-destructive")}>
            {up ? <TrendingUpIcon className="size-4" /> : <TrendingDownIcon className="size-4" />}
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="text-sm font-medium">{d?.symbol} hit your alert</span>
            <span className="text-xs text-muted-foreground tabular-nums">
              {"$" + d?.price.toFixed(2)} ({up ? "+" : ""}{d?.change.toFixed(1)}%)
            </span>
          </div>
          <ToastClose />
        </ToastContent>
      </Toast>
    )
  })
}

export default function PriceAlertDataToast() {
  return (
    <ToastProvider toastManager={notify}>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={() => notify.add({ data: { symbol: "NOVA", price: 184.2, change: 4.3 } })}>
          Rise alert
        </Button>
        <Button variant="outline" size="sm" onClick={() => notify.add({ data: { symbol: "KITE", price: 22.75, change: -6.1 } })}>
          Drop alert
        </Button>
      </div>
      <ToastPortal>
        <ToastViewport>
          <PriceToasts />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  )
}`,
  },
  {
    name: "ConfirmDialogThenToast",
    description: "A confirmation dialog that reports the outcome with a toast after the dialog closes.",
    code: `
const notify = createToastManager()

export default function ConfirmDialogThenToast() {
  return (
    <Toaster toastManager={notify}>
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>
          <ArchiveRestoreIcon data-icon="inline-start" />
          Restore project
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Restore &quot;Helios&quot;?</DialogTitle>
            <DialogDescription>The project and its 14 boards will reappear for all members.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
            <DialogClose
              render={<Button />}
              onClick={() => notify.add({ type: "success", title: "Project restored", description: "Helios is back in your sidebar." })}
            >
              Restore
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Toaster>
  )
}`,
  },
  {
    name: "DropdownActionsToast",
    description: "A document overflow menu where each command is acknowledged with a toast.",
    code: `
const notify = createToastManager()

export default function DropdownActionsToast() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs items-center gap-3 border p-3">
        <FileTextIcon className="size-5 text-muted-foreground" />
        <span className="flex-1 truncate text-sm">Partnership proposal.docx</span>
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label="More actions" />}>
            <MoreVerticalIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => notify.add({ description: "A copy was created in My files." })}>
              <CopyIcon />
              Duplicate
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => notify.add({ type: "success", description: "Pinned to the top of the folder." })}>
              <PinIcon />
              Pin
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => notify.add({ type: "info", description: "Version history opened in a new tab." })}>
              <HistoryIcon />
              Version history
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "OnboardingProgressToast",
    description: "An onboarding checklist that celebrates each completed step with progress in the toast.",
    code: `
const notify = createToastManager()

const tasks = ["Create your workspace", "Invite a teammate", "Connect a calendar", "Publish first page"]

export default function OnboardingProgressToast() {
  const [done, setDone] = React.useState<string[]>([])

  function complete(task: string) {
    if (done.includes(task)) return
    const next = [...done, task]
    setDone(next)
    notify.add({
      id: "onboarding",
      type: next.length === tasks.length ? "success" : undefined,
      title: next.length === tasks.length ? "You are all set!" : task + " - done",
      description: next.length + " of " + tasks.length + " steps complete",
    })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-2 border p-4">
        <Progress value={(done.length / tasks.length) * 100} />
        {tasks.map((task) => (
          <Button
            key={task}
            variant="ghost"
            className={cn("justify-start", done.includes(task) && "text-muted-foreground line-through")}
            onClick={() => complete(task)}
          >
            {done.includes(task) ? <CircleCheckIcon data-icon="inline-start" /> : <CircleIcon data-icon="inline-start" />}
            {task}
          </Button>
        ))}
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "WebhookTestToast",
    description: "Sends a test webhook and reports status code and latency in the resulting toast.",
    code: `
const notify = createToastManager()

export default function WebhookTestToast() {
  const [url, setUrl] = React.useState("https://hooks.example.dev/orders")

  function test() {
    const ms = 80 + Math.round(Math.random() * 200)
    const ok = url.startsWith("https://")
    const request = new Promise<number>((resolve, reject) => setTimeout(() => (ok ? resolve(ms) : reject(new Error())), 900))
    notify
      .promise(request, {
        loading: "Sending test event...",
        success: (latency: number) => ({ title: "200 OK", description: "order.created delivered in " + latency + "ms" }),
        error: { title: "Delivery failed", description: "Webhook URLs must use HTTPS." },
      })
      .catch(() => {})
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
        <Label htmlFor="hook-url">Endpoint URL</Label>
        <div className="flex gap-2">
          <Input id="hook-url" value={url} onChange={(e) => setUrl(e.target.value)} className="font-mono text-xs" />
          <Button variant="outline" onClick={test}>
            <ZapIcon data-icon="inline-start" />
            Test
          </Button>
        </div>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "ProviderDefaultTimeoutToast",
    description: "Sets a provider-wide default timeout so every toast in this area closes after 1.5 seconds.",
    code: `
const notify = createToastManager()

export default function ProviderDefaultTimeoutToast() {
  return (
    <Toaster toastManager={notify} timeout={1500}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <div className="flex items-center gap-2 text-sm">
          <ClockIcon className="size-4 text-muted-foreground" />
          Provider timeout: <Badge variant="secondary">1500ms</Badge>
        </div>
        <Button size="sm" variant="outline" onClick={() => notify.add({ title: "Quick heads-up", description: "This disappears fast." })}>
          Show brief toast
        </Button>
      </div>
    </Toaster>
  )
}`,
  },
  {
    name: "LiveSupportQueueToast",
    description: "Joining a support queue keeps one toast open and counts down your position in line.",
    code: `
const notify = createToastManager()

export default function LiveSupportQueueToast() {
  const [joined, setJoined] = React.useState(false)

  function join() {
    setJoined(true)
    let position = 3
    const id = notify.add({ type: "loading", title: "Waiting for an agent", description: "You are #3 in line", timeout: 0 })
    const timer = setInterval(() => {
      position -= 1
      if (position === 0) {
        clearInterval(timer)
        notify.update(id, { type: "success", title: "Hana from Support joined", description: "Say hello!", timeout: 5000 })
        setJoined(false)
        return
      }
      notify.update(id, { description: "You are #" + position + " in line" })
    }, 1200)
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <div className="flex items-center gap-2">
          <HeadsetIcon className="size-5" />
          <div>
            <p className="text-sm font-medium">Live chat support</p>
            <p className="text-xs text-muted-foreground">Average wait: 2 minutes</p>
          </div>
        </div>
        <Button size="sm" onClick={join} disabled={joined}>
          {joined ? "In queue..." : "Start chat"}
        </Button>
      </div>
    </Toaster>
  )
}`,
  },
]

export default examples
