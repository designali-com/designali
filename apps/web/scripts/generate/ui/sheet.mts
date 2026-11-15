import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "ShoppingCartSheet",
    description: "Right-side cart sheet with editable quantities, a running subtotal, and a checkout action.",
    code: `
const initialItems = [
  { id: "mug", name: "Stoneware mug", variant: "Sand / 350ml", price: 18, qty: 2 },
  { id: "tote", name: "Canvas tote", variant: "Natural", price: 24, qty: 1 },
  { id: "candle", name: "Cedar candle", variant: "8oz", price: 32, qty: 1 },
]

export default function ShoppingCartSheet() {
  const [items, setItems] = React.useState(initialItems)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const count = items.reduce((sum, item) => sum + item.qty, 0)

  function update(id: string, delta: number) {
    setItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    )
  }

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <ShoppingCartIcon data-icon="inline-start" />
        Cart ({count})
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your cart</SheetTitle>
          <SheetDescription>{count} items ready for checkout.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className="size-14 shrink-0 bg-gradient-to-br from-muted to-muted-foreground/20" />
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex justify-between gap-2">
                  <span className="font-medium">{item.name}</span>
                  <span>\${item.price * item.qty}</span>
                </div>
                <span className="text-muted-foreground">{item.variant}</span>
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="icon-xs" aria-label="Decrease" onClick={() => update(item.id, -1)}>
                    <MinusIcon />
                  </Button>
                  <span className="w-6 text-center tabular-nums">{item.qty}</span>
                  <Button variant="outline" size="icon-xs" aria-label="Increase" onClick={() => update(item.id, 1)}>
                    <PlusIcon />
                  </Button>
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <p className="py-10 text-center text-muted-foreground">Your cart is empty.</p>
          )}
        </div>
        <SheetFooter className="border-t">
          <div className="flex justify-between font-medium">
            <span>Subtotal</span>
            <span>\${subtotal}.00</span>
          </div>
          <p className="text-muted-foreground">Shipping and taxes calculated at checkout.</p>
          <Button disabled={items.length === 0}>Checkout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "MobileNavigationSheet",
    description: "Left-side navigation drawer for small screens with grouped links and an account footer.",
    code: `
const links = [
  { label: "Dashboard", icon: HomeIcon, active: true },
  { label: "Inbox", icon: InboxIcon, badge: "12" },
  { label: "Projects", icon: FolderIcon },
  { label: "Calendar", icon: CalendarIcon },
  { label: "Reports", icon: ChartBarIcon },
]

export default function MobileNavigationSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" size="icon" aria-label="Open menu" />}>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle>Northwind Studio</SheetTitle>
          <SheetDescription>Workspace navigation</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-0.5 px-2">
          {links.map((link) => (
            <SheetClose
              key={link.label}
              render={<Button variant={link.active ? "secondary" : "ghost"} className="justify-start" />}
            >
              <link.icon data-icon="inline-start" />
              <span className="flex-1 text-start">{link.label}</span>
              {link.badge && <Badge variant="outline">{link.badge}</Badge>}
            </SheetClose>
          ))}
        </nav>
        <SheetFooter className="border-t">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <AvatarFallback>LP</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium">Lena Park</span>
              <span className="text-muted-foreground">lena@northwind.studio</span>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "ProductFiltersSheet",
    description: "Filter panel sheet with category checkboxes, a sort radio group, and a live active-filter count.",
    code: `
const categories = ["Jackets", "Knitwear", "Shirts", "Trousers", "Accessories"]
const sorts = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
]

export default function ProductFiltersSheet() {
  const [selected, setSelected] = React.useState<string[]>(["Knitwear"])

  function toggle(category: string, checked: boolean) {
    setSelected((prev) => (checked ? [...prev, category] : prev.filter((c) => c !== category)))
  }

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <FilterIcon data-icon="inline-start" />
        Filters
        {selected.length > 0 && <Badge>{selected.length}</Badge>}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter products</SheetTitle>
          <SheetDescription>Narrow down 248 results.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-4">
          <div className="flex flex-col gap-3">
            <span className="font-medium">Category</span>
            {categories.map((category) => (
              <Label key={category} className="gap-2 font-normal">
                <Checkbox
                  checked={selected.includes(category)}
                  onCheckedChange={(checked) => toggle(category, checked)}
                />
                {category}
              </Label>
            ))}
          </div>
          <Separator />
          <div className="flex flex-col gap-3">
            <span className="font-medium">Sort by</span>
            <RadioGroup defaultValue="featured">
              {sorts.map((sort) => (
                <Label key={sort.value} className="gap-2 font-normal">
                  <RadioGroupItem value={sort.value} />
                  {sort.label}
                </Label>
              ))}
            </RadioGroup>
          </div>
        </div>
        <SheetFooter className="flex-row border-t">
          <Button variant="ghost" className="flex-1" onClick={() => setSelected([])}>
            Clear all
          </Button>
          <SheetClose render={<Button className="flex-1" />}>Show results</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "NotificationsSheet",
    description: "Notification center sheet with unread indicators and a mark-all-as-read action.",
    code: `
const initial = [
  { id: 1, who: "Omar Haddad", what: "commented on Q3 roadmap", when: "2m ago", unread: true },
  { id: 2, who: "Priya Nair", what: "assigned you to Billing revamp", when: "1h ago", unread: true },
  { id: 3, who: "Deploy bot", what: "finished deploying web@4.12.0", when: "3h ago", unread: false },
  { id: 4, who: "Jonas Weber", what: "requested your review", when: "Yesterday", unread: false },
]

export default function NotificationsSheet() {
  const [items, setItems] = React.useState(initial)
  const unread = items.filter((item) => item.unread).length

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" size="icon" aria-label="Notifications" className="relative" />}>
        <BellIcon />
        {unread > 0 && <span className="absolute top-1.5 end-1.5 size-2 bg-destructive" />}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>You have {unread} unread notifications.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col overflow-y-auto">
          {items.map((item) => (
            <div key={item.id} className={cn("flex gap-3 border-b px-4 py-3", item.unread && "bg-muted/50")}>
              <Avatar size="sm">
                <AvatarFallback>{item.who.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
              </Avatar>
              <div className="flex flex-1 flex-col">
                <span>
                  <span className="font-medium">{item.who}</span> {item.what}
                </span>
                <span className="text-muted-foreground">{item.when}</span>
              </div>
              {item.unread && <span className="mt-1.5 size-2 shrink-0 bg-primary" />}
            </div>
          ))}
        </div>
        <SheetFooter className="border-t">
          <Button
            variant="outline"
            disabled={unread === 0}
            onClick={() => setItems((prev) => prev.map((item) => ({ ...item, unread: false })))}
          >
            <CheckCheckIcon data-icon="inline-start" />
            Mark all as read
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "ShareBottomSheet",
    description: "Bottom sheet share menu with a grid of share targets and a copyable link.",
    code: `
const targets = [
  { label: "Email", icon: MailIcon },
  { label: "Message", icon: MessageCircleIcon },
  { label: "Copy link", icon: LinkIcon },
  { label: "Embed", icon: CodeIcon },
  { label: "QR code", icon: QrCodeIcon },
  { label: "More", icon: MoreHorizontalIcon },
]

export default function ShareBottomSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <Share2Icon data-icon="inline-start" />
        Share
      </SheetTrigger>
      <SheetContent side="bottom" className="mx-auto max-w-md">
        <SheetHeader>
          <SheetTitle>Share &quot;Spring lookbook&quot;</SheetTitle>
          <SheetDescription>Anyone with the link can view.</SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-3 gap-2 px-4 sm:grid-cols-6">
          {targets.map((target) => (
            <SheetClose
              key={target.label}
              render={<Button variant="ghost" className="h-auto flex-col gap-2 py-3" />}
            >
              <span className="flex size-10 items-center justify-center border bg-muted">
                <target.icon />
              </span>
              <span className="text-xs">{target.label}</span>
            </SheetClose>
          ))}
        </div>
        <SheetFooter>
          <div className="flex gap-2">
            <Input readOnly value="https://lookbook.example/s/8fk2" className="flex-1" />
            <Button variant="outline" size="icon" aria-label="Copy link">
              <CopyIcon />
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "ReleaseNotesTopSheet",
    description: "Top sheet announcing a product release with highlighted changes.",
    code: `
const changes = [
  { tag: "New", text: "Recurring invoices with custom schedules" },
  { tag: "Improved", text: "Dashboard loads 40% faster on large teams" },
  { tag: "Fixed", text: "CSV exports now respect your timezone" },
]

export default function ReleaseNotesTopSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <SparklesIcon data-icon="inline-start" />
        What&apos;s new
      </SheetTrigger>
      <SheetContent side="top">
        <div className="mx-auto w-full max-w-2xl">
          <SheetHeader>
            <Badge variant="secondary" className="mb-1">Version 2.8</Badge>
            <SheetTitle>Released this week</SheetTitle>
            <SheetDescription>Here&apos;s what changed since your last visit.</SheetDescription>
          </SheetHeader>
          <ul className="flex flex-col gap-2 px-4">
            {changes.map((change) => (
              <li key={change.text} className="flex items-center gap-2">
                <Badge variant="outline" className="w-20">{change.tag}</Badge>
                {change.text}
              </li>
            ))}
          </ul>
          <SheetFooter className="flex-row justify-end">
            <Button variant="link" nativeButton={false} render={<a href="#" />}>
              Read the changelog
            </Button>
            <SheetClose render={<Button />}>Got it</SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "ControlledSheet",
    description: "Sheet whose open state is controlled from outside, with programmatic open and close.",
    code: `
export default function ControlledSheet() {
  const [open, setOpen] = React.useState(false)
  const [opened, setOpened] = React.useState(0)

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2">
        <Button
          onClick={() => {
            setOpen(true)
            setOpened((n) => n + 1)
          }}
        >
          Open programmatically
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        State: <span className="font-medium text-foreground">{open ? "open" : "closed"}</span> · opened {opened} times
      </p>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Controlled sheet</SheetTitle>
            <SheetDescription>
              This sheet&apos;s visibility lives in parent state, so other parts of the page can open or close it.
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Button onClick={() => setOpen(false)}>Close from state</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}`,
  },
  {
    name: "InviteMembersSheet",
    description: "Team invite sheet with email entry, role selection, and the current member list.",
    code: `
const members = [
  { name: "Ava Lindqvist", email: "ava@corelab.io", role: "Owner" },
  { name: "Mateo Ruiz", email: "mateo@corelab.io", role: "Admin" },
  { name: "Hana Sato", email: "hana@corelab.io", role: "Member" },
]

export default function InviteMembersSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button />}>
        <UserPlusIcon data-icon="inline-start" />
        Invite
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Invite teammates</SheetTitle>
          <SheetDescription>They&apos;ll get an email to join Corelab.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <Field>
            <FieldLabel htmlFor="invite-email">Email address</FieldLabel>
            <Input id="invite-email" type="email" placeholder="name@corelab.io" />
          </Field>
          <Field>
            <FieldLabel htmlFor="invite-role">Role</FieldLabel>
            <NativeSelect id="invite-role" defaultValue="member" className="w-full">
              <NativeSelectOption value="admin">Admin</NativeSelectOption>
              <NativeSelectOption value="member">Member</NativeSelectOption>
              <NativeSelectOption value="viewer">Viewer</NativeSelectOption>
            </NativeSelect>
          </Field>
          <Button>Send invite</Button>
          <Separator />
          <span className="font-medium">Current members</span>
          <div className="flex flex-col gap-3">
            {members.map((member) => (
              <div key={member.email} className="flex items-center gap-2">
                <Avatar size="sm">
                  <AvatarFallback>{member.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-col">
                  <span className="font-medium">{member.name}</span>
                  <span className="text-muted-foreground">{member.email}</span>
                </div>
                <Badge variant="outline">{member.role}</Badge>
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "TaskDetailSheet",
    description: "Project task detail sheet with status, assignee, due date, and a checklist of subtasks.",
    code: `
const initialSubtasks = [
  { id: "a", label: "Draft API contract", done: true },
  { id: "b", label: "Review with platform team", done: true },
  { id: "c", label: "Add rate limiting", done: false },
  { id: "d", label: "Write migration guide", done: false },
]

export default function TaskDetailSheet() {
  const [subtasks, setSubtasks] = React.useState(initialSubtasks)
  const done = subtasks.filter((s) => s.done).length

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Open task ENG-482</SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <span className="text-muted-foreground">ENG-482</span>
          <SheetTitle>Public webhooks API</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <dl className="grid grid-cols-[96px_1fr] gap-y-2">
            <dt className="text-muted-foreground">Status</dt>
            <dd><Badge variant="secondary">In progress</Badge></dd>
            <dt className="text-muted-foreground">Assignee</dt>
            <dd className="flex items-center gap-1.5">
              <Avatar size="sm"><AvatarFallback>RK</AvatarFallback></Avatar>
              Rui Kato
            </dd>
            <dt className="text-muted-foreground">Due</dt>
            <dd className="flex items-center gap-1.5"><CalendarIcon className="size-3.5" />Mar 14</dd>
          </dl>
          <Separator />
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">Subtasks</span>
              <span className="text-muted-foreground">{done}/{subtasks.length}</span>
            </div>
            <Progress value={(done / subtasks.length) * 100} />
            {subtasks.map((s) => (
              <Label key={s.id} className={cn("gap-2 font-normal", s.done && "text-muted-foreground line-through")}>
                <Checkbox
                  checked={s.done}
                  onCheckedChange={(checked) =>
                    setSubtasks((prev) => prev.map((p) => (p.id === s.id ? { ...p, done: checked } : p)))
                  }
                />
                {s.label}
              </Label>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "OrderDetailsAdminSheet",
    description: "Admin order sheet with customer info, line items, totals, and fulfillment actions.",
    code: `
const lines = [
  { name: "Trail runner shoe", qty: 1, price: 129 },
  { name: "Merino socks (3 pack)", qty: 2, price: 24 },
]

export default function OrderDetailsAdminSheet() {
  const subtotal = lines.reduce((s, l) => s + l.qty * l.price, 0)
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <PackageIcon data-icon="inline-start" />
        Order #10482
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <div className="flex items-center gap-2">
            <SheetTitle>Order #10482</SheetTitle>
            <Badge variant="secondary">Paid</Badge>
          </div>
          <SheetDescription>Placed Feb 21, 2026 at 9:14 AM</SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4">
          <div className="flex flex-col gap-1 border p-3">
            <span className="font-medium">Noor Abbasi</span>
            <span className="text-muted-foreground">noor.abbasi@mail.example</span>
            <span className="text-muted-foreground">21 Harbor Lane, Portland, OR 97201</span>
          </div>
          <div className="flex flex-col gap-2">
            {lines.map((line) => (
              <div key={line.name} className="flex justify-between">
                <span>{line.qty} × {line.name}</span>
                <span className="tabular-nums">\${line.qty * line.price}.00</span>
              </div>
            ))}
            <Separator />
            <div className="flex justify-between text-muted-foreground"><span>Shipping</span><span>$8.00</span></div>
            <div className="flex justify-between font-medium"><span>Total</span><span>\${subtotal + 8}.00</span></div>
          </div>
        </div>
        <SheetFooter className="flex-row border-t">
          <Button variant="destructive" className="flex-1">Refund</Button>
          <Button className="flex-1">
            <TruckIcon data-icon="inline-start" />
            Fulfill order
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "SupportChatSheet",
    description: "Live support chat sheet with message bubbles and a composer that appends messages.",
    code: `
export default function SupportChatSheet() {
  const [messages, setMessages] = React.useState([
    { from: "agent", text: "Hi! I'm Mira from support. How can I help today?" },
    { from: "me", text: "My invoice shows the wrong billing address." },
    { from: "agent", text: "I can fix that. Which address should we use?" },
  ])
  const [draft, setDraft] = React.useState("")

  function send(event: React.FormEvent) {
    event.preventDefault()
    if (!draft.trim()) return
    setMessages((prev) => [...prev, { from: "me", text: draft.trim() }])
    setDraft("")
  }

  return (
    <Sheet>
      <SheetTrigger render={<Button />}>
        <MessageCircleIcon data-icon="inline-start" />
        Chat with us
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b">
          <div className="flex items-center gap-2">
            <Avatar size="sm"><AvatarFallback>MS</AvatarFallback></Avatar>
            <div>
              <SheetTitle>Mira · Support</SheetTitle>
              <SheetDescription>Typically replies in 2 minutes</SheetDescription>
            </div>
          </div>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn(
                "max-w-[80%] px-3 py-2",
                m.from === "me" ? "self-end bg-primary text-primary-foreground" : "self-start bg-muted"
              )}
            >
              {m.text}
            </div>
          ))}
        </div>
        <form onSubmit={send} className="flex gap-2 border-t p-4">
          <Input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Type a message…" />
          <Button type="submit" size="icon" aria-label="Send">
            <SendIcon />
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "FileDetailsSheet",
    description: "File manager details sheet with preview, metadata, sharing list, and version history.",
    code: `
const versions = [
  { label: "v3 · current", by: "Elif Demir", when: "Today, 10:42" },
  { label: "v2", by: "Sam Okafor", when: "Mar 2" },
  { label: "v1", by: "Elif Demir", when: "Feb 27" },
]

export default function FileDetailsSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <FileTextIcon data-icon="inline-start" />
        brand-guidelines.pdf
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>brand-guidelines.pdf</SheetTitle>
          <SheetDescription>PDF document · 4.2 MB</SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4">
          <div className="flex aspect-video items-center justify-center border bg-gradient-to-br from-muted to-background">
            <FileTextIcon className="size-10 text-muted-foreground" />
          </div>
          <dl className="grid grid-cols-2 gap-y-1.5">
            <dt className="text-muted-foreground">Owner</dt><dd>Elif Demir</dd>
            <dt className="text-muted-foreground">Location</dt><dd>Marketing / Brand</dd>
            <dt className="text-muted-foreground">Modified</dt><dd>Today, 10:42</dd>
          </dl>
          <Separator />
          <div className="flex flex-col gap-2">
            <span className="font-medium">Version history</span>
            {versions.map((v) => (
              <div key={v.label} className="flex items-center gap-2">
                <HistoryIcon className="size-3.5 text-muted-foreground" />
                <span className="flex-1">{v.label}</span>
                <span className="text-muted-foreground">{v.by} · {v.when}</span>
              </div>
            ))}
          </div>
        </div>
        <SheetFooter className="flex-row border-t">
          <Button variant="outline" className="flex-1">
            <DownloadIcon data-icon="inline-start" />
            Download
          </Button>
          <Button className="flex-1">
            <Share2Icon data-icon="inline-start" />
            Share
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "CalendarEventSheet",
    description: "Calendar event sheet with time, location, attendee RSVP list, and response buttons.",
    code: `
const attendees = [
  { name: "Clara Moss", status: "Going" },
  { name: "Idris Bello", status: "Maybe" },
  { name: "Yuki Tan", status: "Going" },
  { name: "Felix Gray", status: "Pending" },
]

export default function CalendarEventSheet() {
  const [rsvp, setRsvp] = React.useState<string | null>(null)
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <CalendarIcon data-icon="inline-start" />
        Design critique
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="mb-1 h-1 w-10 bg-primary" />
          <SheetTitle>Design critique</SheetTitle>
          <SheetDescription>Weekly · hosted by Clara Moss</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-3 px-4">
          <div className="flex items-center gap-2"><ClockIcon className="size-4 text-muted-foreground" />Thu, Mar 12 · 2:00 – 3:00 PM</div>
          <div className="flex items-center gap-2"><MapPinIcon className="size-4 text-muted-foreground" />Studio B, 3rd floor</div>
          <div className="flex items-center gap-2"><VideoIcon className="size-4 text-muted-foreground" />meet.example/crit-weekly</div>
          <Separator />
          <span className="font-medium">{attendees.length} guests</span>
          {attendees.map((a) => (
            <div key={a.name} className="flex items-center gap-2">
              <Avatar size="sm"><AvatarFallback>{a.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback></Avatar>
              <span className="flex-1">{a.name}</span>
              <span className="text-muted-foreground">{a.status}</span>
            </div>
          ))}
        </div>
        <SheetFooter className="border-t">
          <span className="text-muted-foreground">Going?</span>
          <div className="grid grid-cols-3 gap-2">
            {["Yes", "Maybe", "No"].map((option) => (
              <Button key={option} variant={rsvp === option ? "default" : "outline"} onClick={() => setRsvp(option)}>
                {option}
              </Button>
            ))}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "NotificationPreferencesSheet",
    description: "Settings sheet with grouped notification switches for email and push channels.",
    code: `
const groups = [
  {
    title: "Email",
    items: [
      { id: "digest", label: "Weekly digest", hint: "A summary every Monday", on: true },
      { id: "mentions", label: "Mentions", hint: "When someone @mentions you", on: true },
    ],
  },
  {
    title: "Push",
    items: [
      { id: "comments", label: "Comments", hint: "Replies on your threads", on: false },
      { id: "deploys", label: "Deploy status", hint: "Failures and rollbacks", on: true },
    ],
  },
]

export default function NotificationPreferencesSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <SettingsIcon data-icon="inline-start" />
        Notification settings
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>Choose how you want to be notified.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-6 px-4">
          {groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <span className="text-muted-foreground uppercase">{group.title}</span>
              {group.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4">
                  <Label htmlFor={item.id} className="flex flex-col items-start gap-0.5">
                    <span>{item.label}</span>
                    <span className="font-normal text-muted-foreground">{item.hint}</span>
                  </Label>
                  <Switch id={item.id} defaultChecked={item.on} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <SheetFooter>
          <SheetClose render={<Button />}>Save preferences</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "AppearanceSheet",
    description: "Left-side appearance sheet with theme cards, density options, and a reduced-motion toggle.",
    code: `
const themes = [
  { value: "light", label: "Light", icon: SunIcon },
  { value: "dark", label: "Dark", icon: MoonIcon },
  { value: "system", label: "System", icon: MonitorIcon },
]

export default function AppearanceSheet() {
  const [theme, setTheme] = React.useState("system")
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <PaletteIcon data-icon="inline-start" />
        Appearance
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Appearance</SheetTitle>
          <SheetDescription>Customize how the app looks on this device.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-6 px-4">
          <div className="grid grid-cols-3 gap-2">
            {themes.map((t) => (
              <Button
                key={t.value}
                variant="outline"
                aria-pressed={theme === t.value}
                className={cn("h-auto flex-col gap-2 py-3", theme === t.value && "border-primary ring-1 ring-primary")}
                onClick={() => setTheme(t.value)}
              >
                <t.icon />
                {t.label}
              </Button>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-medium">Density</span>
            <RadioGroup defaultValue="comfortable">
              <Label className="gap-2 font-normal"><RadioGroupItem value="comfortable" />Comfortable</Label>
              <Label className="gap-2 font-normal"><RadioGroupItem value="compact" />Compact</Label>
            </RadioGroup>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="reduce-motion">Reduce motion</Label>
            <Switch id="reduce-motion" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "CheckoutPaymentSheet",
    description: "Checkout payment sheet with selectable saved methods and a new-card form.",
    code: `
const methods = [
  { value: "visa", label: "Visa ending 4242", hint: "Expires 08/28" },
  { value: "mc", label: "Mastercard ending 1881", hint: "Expires 02/27" },
  { value: "new", label: "Add a new card", hint: "Credit or debit" },
]

export default function CheckoutPaymentSheet() {
  const [method, setMethod] = React.useState("visa")
  return (
    <Sheet>
      <SheetTrigger render={<Button />}>
        <CreditCardIcon data-icon="inline-start" />
        Pay $86.00
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Payment method</SheetTitle>
          <SheetDescription>Your order total is $86.00.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <RadioGroup value={method} onValueChange={(value) => setMethod(value as string)}>
            {methods.map((m) => (
              <Label key={m.value} className="items-start gap-3 border p-3 font-normal has-data-checked:border-primary">
                <RadioGroupItem value={m.value} />
                <span className="flex flex-col gap-0.5">
                  <span className="font-medium">{m.label}</span>
                  <span className="text-muted-foreground">{m.hint}</span>
                </span>
              </Label>
            ))}
          </RadioGroup>
          {method === "new" && (
            <div className="grid grid-cols-2 gap-3">
              <Field className="col-span-2">
                <FieldLabel htmlFor="card-number">Card number</FieldLabel>
                <Input id="card-number" placeholder="1234 5678 9012 3456" inputMode="numeric" />
              </Field>
              <Field>
                <FieldLabel htmlFor="card-exp">Expiry</FieldLabel>
                <Input id="card-exp" placeholder="MM/YY" />
              </Field>
              <Field>
                <FieldLabel htmlFor="card-cvc">CVC</FieldLabel>
                <Input id="card-cvc" placeholder="123" />
              </Field>
            </div>
          )}
        </div>
        <SheetFooter>
          <Button>
            <LockIcon data-icon="inline-start" />
            Pay securely
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "AdminUserProfileSheet",
    description: "Admin user profile sheet with account stats, plan details, and a destructive suspend action.",
    code: `
const stats = [
  { label: "Projects", value: "14" },
  { label: "Seats", value: "6" },
  { label: "MRR", value: "$420" },
]

export default function AdminUserProfileSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>View user</SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center gap-2 border-b p-6 text-center">
          <Avatar size="lg"><AvatarFallback>TB</AvatarFallback></Avatar>
          <SheetTitle>Tomas Berg</SheetTitle>
          <SheetDescription>tomas@fjordworks.example · joined Jan 2024</SheetDescription>
          <div className="flex gap-1">
            <Badge>Pro plan</Badge>
            <Badge variant="outline">2FA enabled</Badge>
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x border-b">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center py-3">
              <span className="text-base font-semibold">{s.value}</span>
              <span className="text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1 p-4">
          <Button variant="ghost" className="justify-start"><MailIcon data-icon="inline-start" />Send email</Button>
          <Button variant="ghost" className="justify-start"><KeyIcon data-icon="inline-start" />Reset password</Button>
          <Button variant="ghost" className="justify-start"><UserIcon data-icon="inline-start" />Impersonate</Button>
        </div>
        <SheetFooter>
          <Button variant="destructive">
            <BanIcon data-icon="inline-start" />
            Suspend account
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "TermsAcceptanceSheet",
    description: "Sheet without a close button that requires accepting updated terms before continuing.",
    code: `
export default function TermsAcceptanceSheet() {
  const [open, setOpen] = React.useState(false)
  const [agreed, setAgreed] = React.useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="outline" />}>Review updated terms</SheetTrigger>
      <SheetContent side="bottom" showCloseButton={false} className="mx-auto max-w-lg">
        <SheetHeader>
          <SheetTitle>We&apos;ve updated our terms</SheetTitle>
          <SheetDescription>Effective April 1, 2026. Please review the key changes.</SheetDescription>
        </SheetHeader>
        <ul className="flex list-disc flex-col gap-1 ps-8 pe-4">
          <li>Data retention for deleted projects is now 30 days.</li>
          <li>Usage-based add-ons are billed at the end of each cycle.</li>
          <li>Disputes are handled under the laws of your billing region.</li>
        </ul>
        <SheetFooter>
          <Label className="gap-2 font-normal">
            <Checkbox checked={agreed} onCheckedChange={setAgreed} />
            I have read and agree to the updated terms
          </Label>
          <Button disabled={!agreed} onClick={() => setOpen(false)}>
            Continue
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "ChangelogScrollSheet",
    description: "Sheet with a fixed header and footer around a long scrollable changelog.",
    code: `
const entries = Array.from({ length: 12 }, (_, i) => ({
  version: "3." + (12 - i) + ".0",
  date: "Week " + (48 - i),
  notes: [
    "Improved sync reliability for offline edits",
    "New keyboard shortcuts in the editor",
    "Fixed a crash when importing large spreadsheets",
  ].slice(0, (i % 3) + 1),
}))

export default function ChangelogScrollSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <ScrollTextIcon data-icon="inline-start" />
        Changelog
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b">
          <SheetTitle>Changelog</SheetTitle>
          <SheetDescription>Every release from the past quarter.</SheetDescription>
        </SheetHeader>
        <ScrollArea className="min-h-0 flex-1">
          <div className="flex flex-col gap-5 p-4">
            {entries.map((entry) => (
              <div key={entry.version} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">v{entry.version}</Badge>
                  <span className="text-muted-foreground">{entry.date}</span>
                </div>
                <ul className="list-disc ps-5">
                  {entry.notes.map((note) => <li key={note}>{note}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </ScrollArea>
        <SheetFooter className="border-t">
          <Button variant="outline">
            <RssIcon data-icon="inline-start" />
            Subscribe to updates
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "InvoicesWideSheet",
    description: "Wider sheet that overrides the default max width to show a billing invoices table.",
    code: `
const invoices = [
  { id: "INV-2041", date: "Mar 1, 2026", amount: "$249.00", status: "Paid" },
  { id: "INV-1987", date: "Feb 1, 2026", amount: "$249.00", status: "Paid" },
  { id: "INV-1932", date: "Jan 1, 2026", amount: "$199.00", status: "Refunded" },
  { id: "INV-1874", date: "Dec 1, 2025", amount: "$199.00", status: "Paid" },
]

export default function InvoicesWideSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <ReceiptIcon data-icon="inline-start" />
        Billing history
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-xl">
        <SheetHeader>
          <SheetTitle>Billing history</SheetTitle>
          <SheetDescription>Invoices for Fernhill Labs, billed monthly.</SheetDescription>
        </SheetHeader>
        <div className="px-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-end">Amount</TableHead>
                <TableHead><span className="sr-only">Download</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell className="font-medium">{inv.id}</TableCell>
                  <TableCell>{inv.date}</TableCell>
                  <TableCell>
                    <Badge variant={inv.status === "Paid" ? "secondary" : "outline"}>{inv.status}</Badge>
                  </TableCell>
                  <TableCell className="text-end tabular-nums">{inv.amount}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon-xs" aria-label={"Download " + inv.id}>
                      <DownloadIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "LoadingContentSheet",
    description: "Sheet that shows skeleton placeholders while its content loads each time it opens.",
    code: `
export default function LoadingContentSheet() {
  const [loading, setLoading] = React.useState(true)
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleOpenChange(open: boolean) {
    if (timer.current) clearTimeout(timer.current)
    if (open) {
      setLoading(true)
      timer.current = setTimeout(() => setLoading(false), 1200)
    }
  }

  React.useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current)
  }, [])

  return (
    <Sheet onOpenChange={handleOpenChange}>
      <SheetTrigger render={<Button variant="outline" />}>Open usage report</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Usage this month</SheetTitle>
          <SheetDescription>{loading ? "Fetching the latest numbers…" : "Updated just now"}</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          {[
            { label: "API requests", value: "1.28M", pct: 64 },
            { label: "Storage", value: "38 GB", pct: 38 },
            { label: "Bandwidth", value: "412 GB", pct: 82 },
          ].map((row) =>
            loading ? (
              <div key={row.label} className="flex flex-col gap-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-1 w-full" />
              </div>
            ) : (
              <div key={row.label} className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span>{row.label}</span>
                  <span className="font-medium">{row.value}</span>
                </div>
                <Progress value={row.pct} />
              </div>
            )
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "SavedItemsEmptySheet",
    description: "Sheet showing an empty state with a call to action when there are no saved items.",
    code: `
export default function SavedItemsEmptySheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <BookmarkIcon data-icon="inline-start" />
        Saved
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Saved items</SheetTitle>
          <SheetDescription>Bookmarks sync across your devices.</SheetDescription>
        </SheetHeader>
        <Empty className="flex-1">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <BookmarkIcon />
            </EmptyMedia>
            <EmptyTitle>Nothing saved yet</EmptyTitle>
            <EmptyDescription>Tap the bookmark on any article to read it later.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <SheetClose render={<Button size="sm" />}>Browse articles</SheetClose>
          </EmptyContent>
        </Empty>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "SearchTopSheet",
    description: "Top sheet search overlay with an autofocused input, recent searches, and quick links.",
    code: `
const recent = ["quarterly report", "onboarding checklist", "brand colors"]
const quick = [
  { label: "Create document", icon: FilePlusIcon },
  { label: "Invite teammate", icon: UserPlusIcon },
  { label: "Open settings", icon: SettingsIcon },
]

export default function SearchTopSheet() {
  const [query, setQuery] = React.useState("")
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" className="w-56 justify-start text-muted-foreground" />}>
        <SearchIcon data-icon="inline-start" />
        Search…
        <Kbd className="ms-auto">⌘K</Kbd>
      </SheetTrigger>
      <SheetContent side="top" showCloseButton={false}>
        <div className="mx-auto flex w-full max-w-xl flex-col gap-4 p-4">
          <SheetTitle className="sr-only">Search</SheetTitle>
          <SheetDescription className="sr-only">Search documents, people, and actions.</SheetDescription>
          <InputGroup>
            <InputGroupAddon><SearchIcon /></InputGroupAddon>
            <InputGroupInput autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search docs, people, actions" />
          </InputGroup>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground">Recent</span>
            {recent.filter((r) => r.includes(query.toLowerCase())).map((r) => (
              <Button key={r} variant="ghost" className="justify-start" onClick={() => setQuery(r)}>
                <HistoryIcon data-icon="inline-start" />
                {r}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {quick.map((q) => (
              <Button key={q.label} variant="outline" size="sm">
                <q.icon data-icon="inline-start" />
                {q.label}
              </Button>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "CookieConsentSheet",
    description: "Bottom cookie preferences sheet with per-category switches and accept/save actions.",
    code: `
const categories = [
  { id: "necessary", label: "Strictly necessary", hint: "Required for sign-in and security.", locked: true },
  { id: "analytics", label: "Analytics", hint: "Helps us understand which pages are used." },
  { id: "marketing", label: "Marketing", hint: "Personalized offers on partner sites." },
]

export default function CookieConsentSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <CookieIcon data-icon="inline-start" />
        Cookie preferences
      </SheetTrigger>
      <SheetContent side="bottom">
        <div className="mx-auto w-full max-w-2xl">
          <SheetHeader>
            <SheetTitle>Your privacy choices</SheetTitle>
            <SheetDescription>Choose which cookies we can use. You can change this anytime.</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-3 px-4">
            {categories.map((c) => (
              <div key={c.id} className="flex items-center justify-between gap-4 border p-3">
                <Label htmlFor={"cookie-" + c.id} className="flex flex-col items-start gap-0.5">
                  {c.label}
                  <span className="font-normal text-muted-foreground">{c.hint}</span>
                </Label>
                <Switch id={"cookie-" + c.id} defaultChecked={c.locked} disabled={c.locked} />
              </div>
            ))}
          </div>
          <SheetFooter className="sm:flex-row sm:justify-end">
            <SheetClose render={<Button variant="outline" />}>Save choices</SheetClose>
            <SheetClose render={<Button />}>Accept all</SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "FeedbackFormSheet",
    description: "Feedback sheet with an emoji-free rating scale, comment box, and a submitted confirmation state.",
    code: `
const scores = [1, 2, 3, 4, 5]

export default function FeedbackFormSheet() {
  const [score, setScore] = React.useState<number | null>(null)
  const [sent, setSent] = React.useState(false)

  return (
    <Sheet onOpenChange={(open) => open && setSent(false)}>
      <SheetTrigger render={<Button variant="outline" />}>
        <MessageSquareIcon data-icon="inline-start" />
        Give feedback
      </SheetTrigger>
      <SheetContent>
        {sent ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 p-6 text-center">
            <CircleCheckIcon className="size-8 text-primary" />
            <SheetTitle>Thanks for the feedback</SheetTitle>
            <SheetDescription>Our product team reads every response.</SheetDescription>
            <SheetClose render={<Button variant="outline" className="mt-2" />}>Close</SheetClose>
          </div>
        ) : (
          <>
            <SheetHeader>
              <SheetTitle>How was your experience?</SheetTitle>
              <SheetDescription>Rate the new reporting dashboard.</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 px-4">
              <div className="grid grid-cols-5 gap-1">
                {scores.map((s) => (
                  <Button key={s} variant={score === s ? "default" : "outline"} onClick={() => setScore(s)}>
                    {s}
                  </Button>
                ))}
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Not useful</span>
                <span>Very useful</span>
              </div>
              <Field>
                <FieldLabel htmlFor="feedback-text">What could be better?</FieldLabel>
                <Textarea id="feedback-text" rows={4} placeholder="Tell us more…" />
              </Field>
            </div>
            <SheetFooter>
              <Button disabled={score === null} onClick={() => setSent(true)}>Submit feedback</Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "KeyboardShortcutsSheet",
    description: "Reference sheet listing keyboard shortcuts grouped by area using Kbd keys.",
    code: `
const sections = [
  {
    title: "General",
    items: [
      { label: "Command menu", keys: ["⌘", "K"] },
      { label: "Toggle sidebar", keys: ["⌘", "B"] },
      { label: "Open settings", keys: ["⌘", ","] },
    ],
  },
  {
    title: "Editor",
    items: [
      { label: "Bold", keys: ["⌘", "B"] },
      { label: "Insert link", keys: ["⌘", "K"] },
      { label: "Duplicate line", keys: ["⇧", "⌥", "↓"] },
    ],
  },
]

export default function KeyboardShortcutsSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="ghost" />}>
        <KeyboardIcon data-icon="inline-start" />
        Shortcuts
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Keyboard shortcuts</SheetTitle>
          <SheetDescription>Work faster without leaving the keyboard.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-5 px-4">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <span className="font-medium">{section.title}</span>
              {section.items.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{item.label}</span>
                  <KbdGroup>
                    {item.keys.map((k) => <Kbd key={k}>{k}</Kbd>)}
                  </KbdGroup>
                </div>
              ))}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "ActivityTimelineSheet",
    description: "Audit activity sheet presenting account events on a vertical timeline.",
    code: `
const events = [
  { icon: LogInIcon, text: "Signed in from Lisbon, PT", when: "Today, 08:12" },
  { icon: KeyIcon, text: "Created API key \\"ci-runner\\"", when: "Yesterday, 17:40" },
  { icon: UserPlusIcon, text: "Invited dana@orbit.example", when: "Mar 3, 11:05" },
  { icon: ShieldCheckIcon, text: "Enabled two-factor authentication", when: "Mar 1, 09:30" },
]

export default function ActivityTimelineSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <ActivityIcon data-icon="inline-start" />
        Activity log
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Account activity</SheetTitle>
          <SheetDescription>Security-relevant events for the last 30 days.</SheetDescription>
        </SheetHeader>
        <ol className="flex flex-col px-4">
          {events.map((event, i) => (
            <li key={event.text} className="relative flex gap-3 pb-5">
              {i < events.length - 1 && <span className="absolute start-3.5 top-7 bottom-0 w-px bg-border" />}
              <span className="flex size-7 shrink-0 items-center justify-center border bg-muted">
                <event.icon className="size-3.5" />
              </span>
              <div className="flex flex-col">
                <span>{event.text}</span>
                <span className="text-muted-foreground">{event.when}</span>
              </div>
            </li>
          ))}
        </ol>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "SheetSidesShowcase",
    description: "Four triggers that open the same sheet content from the top, right, bottom, and left edges.",
    code: `
const sides = ["top", "right", "bottom", "left"] as const

export default function SheetSidesShowcase() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {sides.map((side) => (
        <Sheet key={side}>
          <SheetTrigger render={<Button variant="outline" className="capitalize" />}>{side}</SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle className="capitalize">{side} sheet</SheetTitle>
              <SheetDescription>
                Slides in from the {side} edge. Use left/right for navigation and details, top/bottom for quick actions.
              </SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <SheetClose render={<Button variant="outline" />}>Close</SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}`,
  },
  {
    name: "DeleteProjectSheet",
    description: "Destructive bottom sheet requiring the user to type the project name before deleting.",
    code: `
const projectName = "atlas-marketing"

export default function DeleteProjectSheet() {
  const [value, setValue] = React.useState("")
  return (
    <Sheet onOpenChange={() => setValue("")}>
      <SheetTrigger render={<Button variant="destructive" />}>
        <Trash2Icon data-icon="inline-start" />
        Delete project
      </SheetTrigger>
      <SheetContent side="bottom" className="mx-auto max-w-md">
        <SheetHeader>
          <div className="mb-1 flex size-9 items-center justify-center bg-destructive/10 text-destructive">
            <TriangleAlertIcon className="size-4" />
          </div>
          <SheetTitle>Delete {projectName}?</SheetTitle>
          <SheetDescription>
            This permanently removes 3 environments, 128 deployments, and all analytics. This cannot be undone.
          </SheetDescription>
        </SheetHeader>
        <div className="px-4">
          <Field>
            <FieldLabel htmlFor="confirm-name">
              Type <span className="font-mono">{projectName}</span> to confirm
            </FieldLabel>
            <Input id="confirm-name" value={value} onChange={(e) => setValue(e.target.value)} autoComplete="off" />
          </Field>
        </div>
        <SheetFooter className="flex-row">
          <SheetClose render={<Button variant="outline" className="flex-1" />}>Cancel</SheetClose>
          <Button variant="destructive" className="flex-1" disabled={value !== projectName}>
            Delete forever
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "OnboardingStepsSheet",
    description: "Multi-step onboarding sheet with progress, back and next navigation, and a finish step.",
    code: `
const steps = [
  { title: "Name your workspace", field: "Workspace name", placeholder: "Acorn Analytics" },
  { title: "Pick a URL", field: "Workspace URL", placeholder: "acorn" },
  { title: "Invite your team", field: "Teammate emails", placeholder: "kai@acorn.example, rosa@acorn.example" },
]

export default function OnboardingStepsSheet() {
  const [step, setStep] = React.useState(0)
  const current = steps[step]!
  const last = step === steps.length - 1

  return (
    <Sheet onOpenChange={(open) => open && setStep(0)}>
      <SheetTrigger render={<Button />}>Get started</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <span className="text-muted-foreground">Step {step + 1} of {steps.length}</span>
          <SheetTitle>{current.title}</SheetTitle>
          <SheetDescription>You can change this later in settings.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <Progress value={((step + 1) / steps.length) * 100} />
          <Field>
            <FieldLabel htmlFor={"onboarding-" + step}>{current.field}</FieldLabel>
            <Input key={step} id={"onboarding-" + step} placeholder={current.placeholder} />
          </Field>
        </div>
        <SheetFooter className="flex-row">
          <Button variant="outline" className="flex-1" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
            Back
          </Button>
          {last ? (
            <SheetClose render={<Button className="flex-1" />}>Finish</SheetClose>
          ) : (
            <Button className="flex-1" onClick={() => setStep((s) => s + 1)}>
              Next
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "IntegrationsSheet",
    description: "Integrations sheet listing connectable apps with connect and disconnect actions.",
    code: `
const initial = [
  { id: "chat", name: "Relay Chat", hint: "Post alerts to channels", icon: MessageSquareIcon, connected: true },
  { id: "git", name: "Forge Git", hint: "Link commits to issues", icon: GitBranchIcon, connected: false },
  { id: "cal", name: "Daybook Calendar", hint: "Sync due dates", icon: CalendarIcon, connected: false },
  { id: "drive", name: "Cloudbox Drive", hint: "Attach files from storage", icon: CloudIcon, connected: true },
]

export default function IntegrationsSheet() {
  const [apps, setApps] = React.useState(initial)
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <PlugIcon data-icon="inline-start" />
        Integrations
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Integrations</SheetTitle>
          <SheetDescription>{apps.filter((a) => a.connected).length} of {apps.length} connected</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 px-4">
          {apps.map((app) => (
            <div key={app.id} className="flex items-center gap-3 border p-3">
              <span className="flex size-8 items-center justify-center bg-muted">
                <app.icon className="size-4" />
              </span>
              <div className="flex flex-1 flex-col">
                <span className="font-medium">{app.name}</span>
                <span className="text-muted-foreground">{app.hint}</span>
              </div>
              <Button
                size="sm"
                variant={app.connected ? "outline" : "default"}
                onClick={() => setApps((prev) => prev.map((a) => (a.id === app.id ? { ...a, connected: !a.connected } : a)))}
              >
                {app.connected ? "Disconnect" : "Connect"}
              </Button>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "ChangePlanSheet",
    description: "Billing sheet for switching subscription plans with a proration summary.",
    code: `
const plans = [
  { value: "starter", name: "Starter", price: 12, hint: "Up to 3 projects" },
  { value: "team", name: "Team", price: 39, hint: "Unlimited projects, 10 seats" },
  { value: "scale", name: "Scale", price: 99, hint: "SSO, audit logs, priority support" },
]

export default function ChangePlanSheet() {
  const [plan, setPlan] = React.useState("team")
  const selected = plans.find((p) => p.value === plan)!
  const diff = selected.price - 39

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Change plan</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Change plan</SheetTitle>
          <SheetDescription>You&apos;re currently on Team, billed monthly.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <RadioGroup value={plan} onValueChange={(v) => setPlan(v as string)}>
            {plans.map((p) => (
              <Label key={p.value} className="items-start gap-3 border p-3 font-normal has-data-checked:border-primary">
                <RadioGroupItem value={p.value} />
                <span className="flex flex-1 flex-col">
                  <span className="font-medium">{p.name}</span>
                  <span className="text-muted-foreground">{p.hint}</span>
                </span>
                <span className="font-medium">\${p.price}/mo</span>
              </Label>
            ))}
          </RadioGroup>
          <div className="bg-muted p-3 text-muted-foreground">
            {diff === 0
              ? "No change to your bill."
              : diff > 0
                ? "You'll be charged a prorated $" + (diff / 2).toFixed(2) + " today."
                : "You'll receive a $" + (Math.abs(diff) / 2).toFixed(2) + " credit on your next invoice."}
          </div>
        </div>
        <SheetFooter>
          <Button disabled={plan === "team"}>Confirm change</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "WorkspaceSwitcherSheet",
    description: "Left sheet for switching between workspaces with the active one highlighted.",
    code: `
const workspaces = [
  { id: "acme", name: "Juniper Health", plan: "Enterprise", color: "from-emerald-500 to-teal-600" },
  { id: "kite", name: "Kite Mobility", plan: "Team", color: "from-sky-500 to-indigo-600" },
  { id: "ember", name: "Ember Coffee Co.", plan: "Starter", color: "from-amber-500 to-rose-600" },
]

export default function WorkspaceSwitcherSheet() {
  const [active, setActive] = React.useState("acme")
  const current = workspaces.find((w) => w.id === active)!
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" className="gap-2" />}>
        <span className={cn("size-4 bg-gradient-to-br", current.color)} />
        {current.name}
        <ChevronsUpDownIcon data-icon="inline-end" />
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle>Workspaces</SheetTitle>
          <SheetDescription>Signed in as rhea@mail.example</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-1 px-2">
          {workspaces.map((w) => (
            <SheetClose
              key={w.id}
              render={<Button variant={w.id === active ? "secondary" : "ghost"} className="h-auto justify-start py-2" />}
              onClick={() => setActive(w.id)}
            >
              <span className={cn("size-7 shrink-0 bg-gradient-to-br", w.color)} />
              <span className="flex flex-1 flex-col items-start">
                <span className="font-medium">{w.name}</span>
                <span className="text-muted-foreground">{w.plan}</span>
              </span>
              {w.id === active && <CheckIcon data-icon="inline-end" />}
            </SheetClose>
          ))}
        </div>
        <SheetFooter>
          <Button variant="outline">
            <PlusIcon data-icon="inline-start" />
            Create workspace
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "CommentsThreadSheet",
    description: "Document comments sheet with a threaded discussion and a reply box with a resolve action.",
    code: `
const initial = [
  { name: "Ines Duarte", text: "Can we tighten the intro? It runs long on mobile.", when: "10:02" },
  { name: "Kwame Asante", text: "Agreed — I'll cut the second paragraph.", when: "10:15" },
]

export default function CommentsThreadSheet() {
  const [comments, setComments] = React.useState(initial)
  const [reply, setReply] = React.useState("")
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <MessageSquareIcon data-icon="inline-start" />
        {comments.length} comments
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b">
          <SheetTitle>Comments</SheetTitle>
          <SheetDescription>On &quot;Launch blog post — draft 3&quot;</SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          <blockquote className="border-s-2 ps-3 text-muted-foreground italic">
            Today we&apos;re introducing a faster way to plan your week…
          </blockquote>
          {comments.map((c, i) => (
            <div key={i} className="flex gap-2">
              <Avatar size="sm"><AvatarFallback>{c.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback></Avatar>
              <div className="flex flex-col">
                <span><span className="font-medium">{c.name}</span> <span className="text-muted-foreground">{c.when}</span></span>
                <span>{c.text}</span>
              </div>
            </div>
          ))}
        </div>
        <SheetFooter className="border-t">
          <Textarea rows={2} value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Reply…" />
          <div className="flex justify-between">
            <Button variant="ghost" size="sm">
              <CheckIcon data-icon="inline-start" />
              Resolve
            </Button>
            <Button
              size="sm"
              disabled={!reply.trim()}
              onClick={() => {
                setComments((prev) => [...prev, { name: "You", text: reply.trim(), when: "now" }])
                setReply("")
              }}
            >
              Reply
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "DocsOutlineSheet",
    description: "Left table-of-contents sheet for documentation with nested sections and an active page.",
    code: `
const outline = [
  { title: "Getting started", pages: ["Introduction", "Installation", "Quickstart"] },
  { title: "Guides", pages: ["Authentication", "Webhooks", "Pagination"] },
  { title: "Reference", pages: ["REST API", "SDKs", "Errors"] },
]

export default function DocsOutlineSheet() {
  const [active, setActive] = React.useState("Webhooks")
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <ListIcon data-icon="inline-start" />
        On this site
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle>Documentation</SheetTitle>
          <SheetDescription>v4.2</SheetDescription>
        </SheetHeader>
        <ScrollArea className="min-h-0 flex-1">
          <nav className="flex flex-col gap-4 px-4 pb-4">
            {outline.map((section) => (
              <div key={section.title} className="flex flex-col gap-1">
                <span className="font-medium">{section.title}</span>
                {section.pages.map((page) => (
                  <SheetClose
                    key={page}
                    nativeButton={false}
                    render={<a href="#" />}
                    onClick={() => setActive(page)}
                    className={cn(
                      "border-s py-1 ps-3 text-muted-foreground hover:text-foreground",
                      page === active && "border-primary font-medium text-foreground"
                    )}
                  >
                    {page}
                  </SheetClose>
                ))}
              </div>
            ))}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "CreateApiKeySheet",
    description: "Developer sheet that creates an API key with scopes and reveals the generated secret once.",
    code: `
const scopes = ["read:projects", "write:projects", "read:billing", "admin:members"]

export default function CreateApiKeySheet() {
  const [key, setKey] = React.useState<string | null>(null)
  return (
    <Sheet onOpenChange={(open) => open && setKey(null)}>
      <SheetTrigger render={<Button />}>
        <KeyIcon data-icon="inline-start" />
        New API key
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{key ? "Copy your key" : "Create API key"}</SheetTitle>
          <SheetDescription>
            {key ? "This is the only time the full key will be shown." : "Keys inherit the permissions you choose here."}
          </SheetDescription>
        </SheetHeader>
        {key ? (
          <div className="flex flex-col gap-3 px-4">
            <div className="flex gap-2">
              <Input readOnly value={key} className="font-mono" />
              <Button variant="outline" size="icon" aria-label="Copy key"><CopyIcon /></Button>
            </div>
            <p className="flex items-center gap-1.5 text-muted-foreground">
              <TriangleAlertIcon className="size-3.5" />
              Store it in a secret manager, not in source control.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 px-4">
            <Field>
              <FieldLabel htmlFor="key-name">Name</FieldLabel>
              <Input id="key-name" defaultValue="ci-runner" />
            </Field>
            <div className="flex flex-col gap-2">
              <span className="font-medium">Scopes</span>
              {scopes.map((scope, i) => (
                <Label key={scope} className="gap-2 font-mono font-normal">
                  <Checkbox defaultChecked={i < 2} />
                  {scope}
                </Label>
              ))}
            </div>
          </div>
        )}
        <SheetFooter>
          {key ? (
            <SheetClose render={<Button />}>Done</SheetClose>
          ) : (
            <Button onClick={() => setKey("key_demo_8nZ3")}>Generate key</Button>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "ShippingAddressSheet",
    description: "Checkout shipping address form in a sheet with validation errors on required fields.",
    code: `
export default function ShippingAddressSheet() {
  const [submitted, setSubmitted] = React.useState(false)
  const [street, setStreet] = React.useState("")
  const invalid = submitted && !street.trim()

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <MapPinIcon data-icon="inline-start" />
        Add shipping address
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shipping address</SheetTitle>
          <SheetDescription>Where should we send your order?</SheetDescription>
        </SheetHeader>
        <form
          className="flex flex-1 flex-col"
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >
          <FieldGroup className="gap-4 px-4">
            <Field>
              <FieldLabel htmlFor="ship-name">Full name</FieldLabel>
              <Input id="ship-name" defaultValue="Selin Arslan" />
            </Field>
            <Field data-invalid={invalid || undefined}>
              <FieldLabel htmlFor="ship-street">Street address</FieldLabel>
              <Input id="ship-street" value={street} onChange={(e) => setStreet(e.target.value)} aria-invalid={invalid || undefined} />
              {invalid && <FieldError>Street address is required.</FieldError>}
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="ship-city">City</FieldLabel>
                <Input id="ship-city" defaultValue="Denver" />
              </Field>
              <Field>
                <FieldLabel htmlFor="ship-zip">ZIP</FieldLabel>
                <Input id="ship-zip" defaultValue="80202" />
              </Field>
            </div>
            <Label className="gap-2 font-normal">
              <Checkbox defaultChecked />
              Use as billing address
            </Label>
          </FieldGroup>
          <SheetFooter>
            <Button type="submit">Save address</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "BookingSlotsSheet",
    description: "Appointment booking sheet with day tabs and selectable time slots, including unavailable ones.",
    code: `
const days = ["Mon 9", "Tue 10", "Wed 11"]
const slots = ["9:00", "9:30", "10:00", "10:30", "11:00", "13:00", "13:30", "14:00", "15:30"]
const taken = new Set(["9:30", "11:00", "14:00"])

export default function BookingSlotsSheet() {
  const [day, setDay] = React.useState(days[0]!)
  const [slot, setSlot] = React.useState<string | null>(null)
  return (
    <Sheet>
      <SheetTrigger render={<Button />}>
        <CalendarClockIcon data-icon="inline-start" />
        Book a consultation
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>30-min consultation</SheetTitle>
          <SheetDescription>With Dr. Amara Osei · Video call</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <div className="grid grid-cols-3 gap-1">
            {days.map((d) => (
              <Button key={d} variant={d === day ? "secondary" : "ghost"} onClick={() => { setDay(d); setSlot(null) }}>
                {d}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {slots.map((s) => (
              <Button
                key={s}
                variant={slot === s ? "default" : "outline"}
                disabled={taken.has(s)}
                onClick={() => setSlot(s)}
              >
                {s}
              </Button>
            ))}
          </div>
        </div>
        <SheetFooter className="border-t">
          <span className="text-muted-foreground">
            {slot ? day + " at " + slot : "Select a time to continue"}
          </span>
          <Button disabled={!slot}>Confirm booking</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "PlaybackQueueSheet",
    description: "Music player queue sheet with the now-playing track and reorderable up-next list.",
    code: `
const queue = [
  { title: "Low Tide", artist: "Marlow Lane", length: "3:42" },
  { title: "Paper Planes at Dusk", artist: "The Sorrels", length: "4:05" },
  { title: "Glasshouse", artist: "Nia Fontaine", length: "2:58" },
  { title: "Northbound", artist: "Atlas & Rye", length: "3:31" },
]

export default function PlaybackQueueSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <ListMusicIcon data-icon="inline-start" />
        Queue
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Up next</SheetTitle>
          <SheetDescription>{queue.length} songs · 14 min</SheetDescription>
        </SheetHeader>
        <div className="flex items-center gap-3 mx-4 border bg-muted/50 p-3">
          <div className="size-12 shrink-0 bg-gradient-to-br from-violet-500 to-fuchsia-500" />
          <div className="flex flex-1 flex-col">
            <span className="text-muted-foreground">Now playing</span>
            <span className="font-medium">Summer Static</span>
            <span className="text-muted-foreground">Juno Vale</span>
          </div>
          <Button size="icon" aria-label="Pause"><PauseIcon /></Button>
        </div>
        <div className="flex flex-col p-2">
          {queue.map((track, i) => (
            <div key={track.title} className="flex items-center gap-3 px-2 py-2 hover:bg-muted">
              <GripVerticalIcon className="size-3.5 cursor-grab text-muted-foreground" />
              <span className="w-4 text-muted-foreground tabular-nums">{i + 1}</span>
              <div className="flex flex-1 flex-col">
                <span>{track.title}</span>
                <span className="text-muted-foreground">{track.artist}</span>
              </div>
              <span className="text-muted-foreground tabular-nums">{track.length}</span>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "HelpCenterSheet",
    description: "In-app help sheet with article search, popular topics, and contact options.",
    code: `
const articles = [
  "Setting up single sign-on",
  "Exporting reports to CSV",
  "Managing seats and roles",
  "Understanding usage limits",
]

export default function HelpCenterSheet() {
  const [query, setQuery] = React.useState("")
  const results = articles.filter((a) => a.toLowerCase().includes(query.toLowerCase()))
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" size="icon" aria-label="Help" />}>
        <CircleHelpIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Help center</SheetTitle>
          <SheetDescription>Search guides or reach our team.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-4 px-4">
          <InputGroup>
            <InputGroupAddon><SearchIcon /></InputGroupAddon>
            <InputGroupInput value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search help articles" />
          </InputGroup>
          <div className="flex flex-col">
            {results.map((a) => (
              <a key={a} href="#" className="flex items-center justify-between border-b py-2.5 hover:text-primary">
                {a}
                <ChevronRightIcon className="size-3.5 text-muted-foreground" />
              </a>
            ))}
            {results.length === 0 && <p className="py-6 text-center text-muted-foreground">No articles match &quot;{query}&quot;.</p>}
          </div>
        </div>
        <SheetFooter className="border-t">
          <span className="font-medium">Still stuck?</span>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline"><MailIcon data-icon="inline-start" />Email us</Button>
            <Button variant="outline"><MessageCircleIcon data-icon="inline-start" />Live chat</Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "ProductQuickViewSheet",
    description: "E-commerce quick view sheet with a gradient preview, size picker, and add-to-bag action.",
    code: `
const sizes = ["XS", "S", "M", "L", "XL"]
const soldOut = new Set(["XS"])

export default function ProductQuickViewSheet() {
  const [size, setSize] = React.useState<string | null>(null)
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <EyeIcon data-icon="inline-start" />
        Quick view
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <div className="aspect-[4/3] bg-gradient-to-br from-stone-300 via-stone-200 to-stone-400 dark:from-stone-700 dark:via-stone-800 dark:to-stone-600" />
        <SheetHeader>
          <div className="flex items-start justify-between gap-2">
            <SheetTitle className="text-base">Harbor wool overshirt</SheetTitle>
            <span className="text-base font-semibold">$148</span>
          </div>
          <SheetDescription className="flex items-center gap-1">
            <StarIcon className="size-3 fill-current" /> 4.8 · 212 reviews
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 px-4">
          <span className="font-medium">Size</span>
          <div className="grid grid-cols-5 gap-1">
            {sizes.map((s) => (
              <Button
                key={s}
                variant={size === s ? "default" : "outline"}
                disabled={soldOut.has(s)}
                onClick={() => setSize(s)}
              >
                {s}
              </Button>
            ))}
          </div>
        </div>
        <SheetFooter className="flex-row">
          <Button variant="outline" size="icon" aria-label="Add to wishlist"><HeartIcon /></Button>
          <Button className="flex-1" disabled={!size}>
            {size ? "Add to bag" : "Select a size"}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "ExportDataSheet",
    description: "Data export sheet with format choice, date range, field options, and an export progress state.",
    code: `
export default function ExportDataSheet() {
  const [progress, setProgress] = React.useState<number | null>(null)

  React.useEffect(() => {
    if (progress === null || progress >= 100) return
    const id = setTimeout(() => setProgress((p) => Math.min((p ?? 0) + 20, 100)), 300)
    return () => clearTimeout(id)
  }, [progress])

  return (
    <Sheet onOpenChange={(open) => open && setProgress(null)}>
      <SheetTrigger render={<Button variant="outline" />}>
        <DownloadIcon data-icon="inline-start" />
        Export
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Export contacts</SheetTitle>
          <SheetDescription>4,812 contacts match your current filters.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-5 px-4">
          <div className="flex flex-col gap-2">
            <span className="font-medium">Format</span>
            <RadioGroup defaultValue="csv" className="flex gap-4">
              <Label className="gap-2 font-normal"><RadioGroupItem value="csv" />CSV</Label>
              <Label className="gap-2 font-normal"><RadioGroupItem value="xlsx" />Excel</Label>
              <Label className="gap-2 font-normal"><RadioGroupItem value="json" />JSON</Label>
            </RadioGroup>
          </div>
          <Field>
            <FieldLabel htmlFor="export-range">Date range</FieldLabel>
            <NativeSelect id="export-range" defaultValue="90" className="w-full">
              <NativeSelectOption value="30">Last 30 days</NativeSelectOption>
              <NativeSelectOption value="90">Last 90 days</NativeSelectOption>
              <NativeSelectOption value="all">All time</NativeSelectOption>
            </NativeSelect>
          </Field>
          <div className="flex flex-col gap-2">
            <Label className="gap-2 font-normal"><Checkbox defaultChecked />Include custom fields</Label>
            <Label className="gap-2 font-normal"><Checkbox />Include archived contacts</Label>
          </div>
          {progress !== null && (
            <Progress value={progress}>
              <ProgressLabel>{progress < 100 ? "Preparing file…" : "Ready to download"}</ProgressLabel>
              <ProgressValue />
            </Progress>
          )}
        </div>
        <SheetFooter>
          {progress === 100 ? (
            <Button><DownloadIcon data-icon="inline-start" />Download contacts.csv</Button>
          ) : (
            <Button disabled={progress !== null} onClick={() => setProgress(0)}>
              {progress !== null ? "Exporting…" : "Start export"}
            </Button>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "NestedSheets",
    description: "A sheet that opens a second, narrower sheet on top of it for a sub-task.",
    code: `
export default function NestedSheets() {
  const [label, setLabel] = React.useState("Priority")
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Edit issue</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit issue</SheetTitle>
          <SheetDescription>Labels open in a stacked sheet.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <Field>
            <FieldLabel htmlFor="issue-title">Title</FieldLabel>
            <Input id="issue-title" defaultValue="Billing page crashes on Safari 17" />
          </Field>
          <div className="flex items-center justify-between">
            <span>Label: <Badge variant="secondary">{label}</Badge></span>
            <Sheet>
              <SheetTrigger render={<Button variant="outline" size="sm" />}>
                <TagIcon data-icon="inline-start" />
                Change
              </SheetTrigger>
              <SheetContent className="w-64">
                <SheetHeader>
                  <SheetTitle>Choose label</SheetTitle>
                  <SheetDescription>Applies to this issue only.</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-1 px-2">
                  {["Priority", "Bug", "Design", "Backend", "Needs triage"].map((l) => (
                    <SheetClose
                      key={l}
                      render={<Button variant={l === label ? "secondary" : "ghost"} className="justify-start" />}
                      onClick={() => setLabel(l)}
                    >
                      {l}
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <SheetFooter>
          <SheetClose render={<Button />}>Save issue</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "TableRowDetailSheet",
    description: "Admin table where clicking a row opens a single controlled sheet with that record's details.",
    code: `
const customers = [
  { id: "C-301", name: "Rosa Lindgren", email: "rosa@lindgren.example", spend: "$2,410", orders: 18, since: "2023" },
  { id: "C-302", name: "Dev Malhotra", email: "dev@malhotra.example", spend: "$860", orders: 6, since: "2024" },
  { id: "C-303", name: "Chiara Bruno", email: "chiara@bruno.example", spend: "$5,120", orders: 41, since: "2021" },
]

export default function TableRowDetailSheet() {
  const [selected, setSelected] = React.useState<(typeof customers)[number] | null>(null)
  return (
    <div className="w-full max-w-md border">
      {customers.map((c) => (
        <button
          key={c.id}
          type="button"
          onClick={() => setSelected(c)}
          className="flex w-full items-center gap-3 border-b px-3 py-2.5 text-start text-xs last:border-b-0 hover:bg-muted"
        >
          <Avatar size="sm"><AvatarFallback>{c.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback></Avatar>
          <span className="flex-1 font-medium">{c.name}</span>
          <span className="text-muted-foreground tabular-nums">{c.spend}</span>
          <ChevronRightIcon className="size-3.5 text-muted-foreground" />
        </button>
      ))}
      <Sheet open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <SheetContent>
          {selected && (
            <>
              <SheetHeader>
                <SheetTitle>{selected.name}</SheetTitle>
                <SheetDescription>{selected.email}</SheetDescription>
              </SheetHeader>
              <dl className="grid grid-cols-2 gap-y-2 px-4">
                <dt className="text-muted-foreground">Customer ID</dt><dd>{selected.id}</dd>
                <dt className="text-muted-foreground">Lifetime spend</dt><dd>{selected.spend}</dd>
                <dt className="text-muted-foreground">Orders</dt><dd>{selected.orders}</dd>
                <dt className="text-muted-foreground">Customer since</dt><dd>{selected.since}</dd>
              </dl>
              <SheetFooter>
                <Button variant="outline">View all orders</Button>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}`,
  },
  {
    name: "RolePermissionsSheet",
    description: "Role editor sheet with a permissions matrix of checkboxes grouped by resource.",
    code: `
const resources = ["Projects", "Billing", "Members", "API keys"]
const actions = ["View", "Edit", "Delete"]

export default function RolePermissionsSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <ShieldIcon data-icon="inline-start" />
        Edit role: Editor
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Editor role</SheetTitle>
          <SheetDescription>Applied to 12 members in this workspace.</SheetDescription>
        </SheetHeader>
        <div className="px-4">
          <div className="grid grid-cols-[1fr_repeat(3,56px)] items-center border-b pb-2 text-muted-foreground">
            <span>Resource</span>
            {actions.map((a) => <span key={a} className="text-center">{a}</span>)}
          </div>
          {resources.map((r, ri) => (
            <div key={r} className="grid grid-cols-[1fr_repeat(3,56px)] items-center border-b py-2.5">
              <span className="font-medium">{r}</span>
              {actions.map((a, ai) => (
                <span key={a} className="flex justify-center">
                  <Checkbox aria-label={a + " " + r} defaultChecked={ai === 0 || (ai === 1 && ri === 0)} disabled={r === "Billing" && ai > 0} />
                </span>
              ))}
            </div>
          ))}
          <p className="pt-3 text-muted-foreground">Billing changes are restricted to Owners.</p>
        </div>
        <SheetFooter className="flex-row">
          <SheetClose render={<Button variant="outline" className="flex-1" />}>Cancel</SheetClose>
          <SheetClose render={<Button className="flex-1" />}>Save role</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "WalletTopUpSheet",
    description: "Bottom sheet for adding funds with preset amounts, a custom amount input, and a fee summary.",
    code: `
const presets = [10, 25, 50, 100]

export default function WalletTopUpSheet() {
  const [amount, setAmount] = React.useState("25")
  const value = Number(amount) || 0
  return (
    <Sheet>
      <SheetTrigger render={<Button />}>
        <WalletIcon data-icon="inline-start" />
        Add funds
      </SheetTrigger>
      <SheetContent side="bottom" className="mx-auto max-w-sm">
        <SheetHeader className="items-center text-center">
          <div className="mx-auto mb-2 h-1 w-10 bg-muted-foreground/30" />
          <SheetTitle>Top up wallet</SheetTitle>
          <SheetDescription>Current balance: $12.40</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-3 px-4">
          <InputGroup>
            <InputGroupAddon><InputGroupText>$</InputGroupText></InputGroupAddon>
            <InputGroupInput inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} className="text-lg font-semibold" />
          </InputGroup>
          <div className="grid grid-cols-4 gap-2">
            {presets.map((p) => (
              <Button key={p} variant={value === p ? "secondary" : "outline"} onClick={() => setAmount(String(p))}>
                \${p}
              </Button>
            ))}
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Processing fee</span>
            <span>\${(value * 0.029).toFixed(2)}</span>
          </div>
        </div>
        <SheetFooter>
          <Button disabled={value < 5}>Add \${value.toFixed(2)}</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "ActiveSessionsSheet",
    description: "Security sheet listing signed-in devices with per-device revoke and sign-out-all actions.",
    code: `
const initial = [
  { id: "1", device: "MacBook Pro · Chrome", place: "Berlin, DE", icon: LaptopIcon, current: true },
  { id: "2", device: "Pixel 8 · App", place: "Berlin, DE", icon: SmartphoneIcon },
  { id: "3", device: "Windows · Edge", place: "Warsaw, PL", icon: MonitorIcon },
]

export default function ActiveSessionsSheet() {
  const [sessions, setSessions] = React.useState(initial)
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <ShieldCheckIcon data-icon="inline-start" />
        Active sessions
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Where you&apos;re signed in</SheetTitle>
          <SheetDescription>Revoke any session you don&apos;t recognize.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 px-4">
          {sessions.map((s) => (
            <div key={s.id} className="flex items-center gap-3 border p-3">
              <s.icon className="size-4 text-muted-foreground" />
              <div className="flex flex-1 flex-col">
                <span className="font-medium">{s.device}</span>
                <span className="text-muted-foreground">{s.place} · {s.current ? "This device" : "Active 2d ago"}</span>
              </div>
              {s.current ? (
                <Badge variant="secondary">Current</Badge>
              ) : (
                <Button variant="ghost" size="sm" onClick={() => setSessions((prev) => prev.filter((p) => p.id !== s.id))}>
                  Revoke
                </Button>
              )}
            </div>
          ))}
        </div>
        <SheetFooter>
          <Button
            variant="destructive"
            disabled={sessions.length === 1}
            onClick={() => setSessions((prev) => prev.filter((p) => p.current))}
          >
            <LogOutIcon data-icon="inline-start" />
            Sign out all other sessions
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
  },
  {
    name: "NonModalNotesSheet",
    description: "Non-modal sheet for scratch notes that keeps the page behind it interactive.",
    code: `
export default function NonModalNotesSheet() {
  const [notes, setNotes] = React.useState("Follow up with Lior about the Q2 budget.")
  return (
    <div className="flex flex-col items-center gap-2">
      <Sheet modal={false}>
        <SheetTrigger render={<Button variant="outline" />}>
          <NotebookPenIcon data-icon="inline-start" />
          Scratchpad
        </SheetTrigger>
        <SheetContent className="w-80 shadow-xl">
          <SheetHeader>
            <SheetTitle>Scratchpad</SheetTitle>
            <SheetDescription>Non-modal: keep working on the page while it stays open.</SheetDescription>
          </SheetHeader>
          <div className="flex flex-1 flex-col px-4">
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="min-h-48 flex-1" />
          </div>
          <SheetFooter>
            <span className="text-muted-foreground">{notes.length} characters · saved locally</span>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <p className="text-xs text-muted-foreground">Notes: {notes.slice(0, 32)}{notes.length > 32 ? "…" : ""}</p>
    </div>
  )
}`,
  },
]

export default examples
