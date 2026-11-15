import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "FileTileMenu",
    description: "A file tile with open, rename, share submenu, download, and delete actions.",
    code: `
export default function FileTileMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-40 flex-col items-center gap-2 border p-4 text-center hover:bg-muted/50 data-popup-open:bg-muted">
        <FileTextIcon className="size-10 text-sky-500" />
        <span className="text-xs font-medium">Q4 planning.docx</span>
        <span className="text-[11px] text-muted-foreground">284 KB · Edited today</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuItem>
            <ExternalLinkIcon />
            Open
            <ContextMenuShortcut>↵</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <PencilIcon />
            Rename
            <ContextMenuShortcut>F2</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Share2Icon />
              Share
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-44">
              <ContextMenuGroup>
                <ContextMenuItem>
                  <LinkIcon />
                  Copy link
                </ContextMenuItem>
                <ContextMenuItem>
                  <MailIcon />
                  Email file
                </ContextMenuItem>
                <ContextMenuItem>
                  <UserPlusIcon />
                  Invite people...
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuItem>
            <DownloadIcon />
            Download
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive">
            <TrashIcon />
            Move to trash
            <ContextMenuShortcut>⌫</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  },
  {
    name: "FolderTreeRowMenu",
    description: "A sidebar folder tree where every row has its own context menu with folder actions.",
    code: `
const folders = [
  { name: "Clients", depth: 0 },
  { name: "Brightside Bakery", depth: 1 },
  { name: "Northwind Travel", depth: 1 },
  { name: "Internal", depth: 0 },
  { name: "Hiring", depth: 1 },
]

export default function FolderTreeRowMenu() {
  return (
    <div className="flex w-full max-w-60 flex-col border p-1">
      {folders.map((folder) => (
        <ContextMenu key={folder.name}>
          <ContextMenuTrigger
            className="flex items-center gap-2 px-2 py-1.5 text-xs hover:bg-muted data-popup-open:bg-muted"
            style={{ paddingInlineStart: 8 + folder.depth * 16 }}
          >
            <FolderIcon className="size-4 text-amber-500" />
            {folder.name}
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuLabel>{folder.name}</ContextMenuLabel>
              <ContextMenuItem>
                <FolderPlusIcon />
                New subfolder
              </ContextMenuItem>
              <ContextMenuItem>
                <FilePlusIcon />
                New file
              </ContextMenuItem>
              <ContextMenuItem>
                <PencilIcon />
                Rename
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem variant="destructive">
                <TrashIcon />
                Delete folder
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}`,
  },
  {
    name: "TableRowContextActions",
    description: "Right-clickable invoice table rows that expose view, copy, and void actions.",
    code: `
const invoices = [
  { id: "INV-2041", customer: "Brightside Bakery", amount: "$1,240.00", status: "Paid" },
  { id: "INV-2042", customer: "Northwind Travel", amount: "$860.50", status: "Due" },
  { id: "INV-2043", customer: "Lumen Studio", amount: "$3,100.00", status: "Overdue" },
]

export default function TableRowContextActions() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead className="text-end">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <ContextMenu key={invoice.id}>
              <ContextMenuTrigger render={<TableRow className="data-popup-open:bg-muted" />}>
                <TableCell className="font-mono text-xs">{invoice.id}</TableCell>
                <TableCell>{invoice.customer}</TableCell>
                <TableCell className="text-end tabular-nums">{invoice.amount}</TableCell>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-48">
                <ContextMenuGroup>
                  <ContextMenuLabel>
                    {invoice.id} · {invoice.status}
                  </ContextMenuLabel>
                  <ContextMenuItem>
                    <EyeIcon />
                    View invoice
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <CopyIcon />
                    Copy invoice ID
                  </ContextMenuItem>
                  <ContextMenuItem disabled={invoice.status === "Paid"}>
                    <SendIcon />
                    Send reminder
                  </ContextMenuItem>
                </ContextMenuGroup>
                <ContextMenuSeparator />
                <ContextMenuGroup>
                  <ContextMenuItem variant="destructive">
                    <BanIcon />
                    Void invoice
                  </ContextMenuItem>
                </ContextMenuGroup>
              </ContextMenuContent>
            </ContextMenu>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "ChatMessageMenu",
    description: "A chat bubble with reply, quick reactions submenu, copy, pin, and delete actions.",
    code: `
const reactions = ["👍", "❤️", "😂", "🎉", "👀"]

export default function ChatMessageMenu() {
  const [reaction, setReaction] = React.useState<string | null>(null)
  const [pinned, setPinned] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm items-start gap-2">
      <Avatar className="size-8">
        <AvatarFallback>LM</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">
          Leo Martins · 10:42 AM {pinned ? "· Pinned" : ""}
        </span>
        <ContextMenu>
          <ContextMenuTrigger className="w-fit max-w-64 bg-muted px-3 py-2 text-sm data-popup-open:ring-2 data-popup-open:ring-ring/40">
            The staging deploy is green. Can someone run the checkout smoke tests before 2pm?
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuItem>
                <ReplyIcon />
                Reply
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <SmilePlusIcon />
                  React
                </ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuGroup className="flex">
                    {reactions.map((emoji) => (
                      <ContextMenuItem key={emoji} className="text-base" onClick={() => setReaction(emoji)}>
                        {emoji}
                      </ContextMenuItem>
                    ))}
                  </ContextMenuGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuItem>
                <CopyIcon />
                Copy text
              </ContextMenuItem>
              <ContextMenuItem onClick={() => setPinned((v) => !v)}>
                <PinIcon />
                {pinned ? "Unpin message" : "Pin message"}
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem variant="destructive">
                <TrashIcon />
                Delete message
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
        {reaction ? (
          <span className="w-fit border bg-background px-1.5 text-xs">{reaction} 1</span>
        ) : null}
      </div>
    </div>
  )
}`,
  },
  {
    name: "InboxRowMenu",
    description: "Inbox rows whose context menu toggles read state, archives, and moves messages to folders.",
    code: `
const initial = [
  { id: 1, from: "Ava Thompson", subject: "Contract redlines for review", read: false },
  { id: 2, from: "Billing", subject: "Your November invoice is ready", read: true },
  { id: 3, from: "Kai Okafor", subject: "Offsite agenda draft", read: false },
]

export default function InboxRowMenu() {
  const [mails, setMails] = React.useState(initial)

  const update = (id: number, read: boolean) =>
    setMails((list) => list.map((m) => (m.id === id ? { ...m, read } : m)))
  const remove = (id: number) => setMails((list) => list.filter((m) => m.id !== id))

  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      {mails.map((mail) => (
        <ContextMenu key={mail.id}>
          <ContextMenuTrigger className="flex items-center gap-3 px-3 py-2.5 hover:bg-muted/50 data-popup-open:bg-muted">
            <span className={cn("size-2 shrink-0 rounded-full", mail.read ? "bg-transparent" : "bg-primary")} />
            <div className="flex min-w-0 flex-col">
              <span className={cn("text-xs", !mail.read && "font-semibold")}>{mail.from}</span>
              <span className="truncate text-xs text-muted-foreground">{mail.subject}</span>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuItem onClick={() => update(mail.id, !mail.read)}>
                {mail.read ? <MailIcon /> : <MailOpenIcon />}
                Mark as {mail.read ? "unread" : "read"}
              </ContextMenuItem>
              <ContextMenuItem onClick={() => remove(mail.id)}>
                <ArchiveIcon />
                Archive
                <ContextMenuShortcut>E</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <FolderInputIcon />
                  Move to
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-40">
                  <ContextMenuGroup>
                    <ContextMenuItem onClick={() => remove(mail.id)}>Receipts</ContextMenuItem>
                    <ContextMenuItem onClick={() => remove(mail.id)}>Clients</ContextMenuItem>
                    <ContextMenuItem onClick={() => remove(mail.id)}>Newsletters</ContextMenuItem>
                  </ContextMenuGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem variant="destructive" onClick={() => remove(mail.id)}>
                <TrashIcon />
                Delete
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
      {mails.length === 0 ? (
        <p className="p-6 text-center text-xs text-muted-foreground">Inbox zero. Nice work.</p>
      ) : null}
    </div>
  )
}`,
  },
  {
    name: "CanvasShapeMenu",
    description: "A design canvas shape with arrange, group, and lock controls in its context menu.",
    code: `
export default function CanvasShapeMenu() {
  const [locked, setLocked] = React.useState(false)
  const [visible, setVisible] = React.useState(true)

  return (
    <div className="relative h-52 w-full max-w-sm border bg-[radial-gradient(circle,var(--color-border)_1px,transparent_1px)] bg-size-[16px_16px]">
      <ContextMenu>
        <ContextMenuTrigger
          className={cn(
            "absolute top-10 left-10 flex size-28 items-center justify-center bg-linear-to-br from-violet-500 to-indigo-500 text-xs font-medium text-white ring-offset-2 ring-offset-background data-popup-open:ring-2 data-popup-open:ring-primary",
            !visible && "opacity-30"
          )}
        >
          {locked ? <LockIcon className="size-4" /> : "Hero card"}
        </ContextMenuTrigger>
        <ContextMenuContent className="w-52">
          <ContextMenuGroup>
            <ContextMenuItem disabled={locked}>
              Bring to front
              <ContextMenuShortcut>⇧⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem disabled={locked}>
              Send to back
              <ContextMenuShortcut>⇧⌘[</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem disabled={locked}>
              Group selection
              <ContextMenuShortcut>⌘G</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem disabled={locked}>
              Create component
              <ContextMenuShortcut>⌥⌘K</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuCheckboxItem checked={locked} onCheckedChange={setLocked}>
              Lock layer
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem checked={visible} onCheckedChange={setVisible}>
              Show layer
            </ContextMenuCheckboxItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}`,
  },
  {
    name: "PhotoGalleryMenu",
    description: "Gradient photo tiles with cover, download size radio submenu, and copy link actions.",
    code: `
const photos = [
  { id: "p1", gradient: "from-rose-400 to-orange-300" },
  { id: "p2", gradient: "from-sky-400 to-emerald-300" },
  { id: "p3", gradient: "from-violet-500 to-pink-400" },
  { id: "p4", gradient: "from-amber-300 to-lime-400" },
]

export default function PhotoGalleryMenu() {
  const [cover, setCover] = React.useState("p1")
  const [size, setSize] = React.useState("large")

  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-2">
      {photos.map((photo) => (
        <ContextMenu key={photo.id}>
          <ContextMenuTrigger className={cn("relative aspect-square bg-linear-to-br data-popup-open:ring-2 data-popup-open:ring-primary", photo.gradient)}>
            {cover === photo.id ? (
              <Badge className="absolute top-2 left-2">Cover</Badge>
            ) : null}
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuItem onClick={() => setCover(photo.id)} disabled={cover === photo.id}>
                <ImageIcon />
                Set as album cover
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <DownloadIcon />
                  Download
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-44">
                  <ContextMenuRadioGroup value={size} onValueChange={setSize}>
                    <ContextMenuLabel>Size</ContextMenuLabel>
                    <ContextMenuRadioItem value="small">Small · 640px</ContextMenuRadioItem>
                    <ContextMenuRadioItem value="large">Large · 2048px</ContextMenuRadioItem>
                    <ContextMenuRadioItem value="original">Original</ContextMenuRadioItem>
                  </ContextMenuRadioGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuItem>
                <LinkIcon />
                Copy link
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem variant="destructive">
                <TrashIcon />
                Remove from album
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}`,
  },
  {
    name: "CodeEditorMenu",
    description: "A code editor surface with IDE-style navigation, refactor, and formatting actions.",
    code: `
const lines = [
  "export async function getInvoice(id: string) {",
  "  const invoice = await db.invoice.find(id)",
  "  if (!invoice) throw new NotFoundError()",
  "  return serialize(invoice)",
  "}",
]

export default function CodeEditorMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="w-full max-w-md overflow-hidden border bg-muted/30 py-2 font-mono text-[11px]">
        {lines.map((line, index) => (
          <div key={index} className="flex gap-3 px-2 whitespace-pre hover:bg-muted">
            <span className="w-4 text-end text-muted-foreground select-none">{index + 1}</span>
            <span className="truncate">{line}</span>
          </div>
        ))}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuItem>
            Go to definition
            <ContextMenuShortcut>F12</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Find all references
            <ContextMenuShortcut>⇧F12</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Peek
            <ContextMenuShortcut>⌥F12</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            Rename symbol
            <ContextMenuShortcut>F2</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Refactor</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuGroup>
                <ContextMenuItem>Extract function</ContextMenuItem>
                <ContextMenuItem>Extract constant</ContextMenuItem>
                <ContextMenuItem>Inline variable</ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuItem>
            Format document
            <ContextMenuShortcut>⇧⌥F</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            Cut
            <ContextMenuShortcut>⌘X</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Paste
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  },
  {
    name: "ArticleTextMenu",
    description: "An article paragraph with copy, highlight, translate submenu, and web search actions.",
    code: `
export default function ArticleTextMenu() {
  const [highlighted, setHighlighted] = React.useState(false)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="w-full max-w-md select-text">
        <h3 className="mb-1 text-sm font-semibold">Why tide pools matter</h3>
        <p className={cn("text-sm leading-relaxed text-muted-foreground", highlighted && "bg-amber-200/60 text-foreground dark:bg-amber-500/30")}>
          Tide pools are miniature ecosystems that rebuild themselves twice a day. Sea stars,
          anemones, and hermit crabs survive crashing waves and hours of sun by adapting in ways
          scientists are still uncovering.
        </p>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuItem>
            <CopyIcon />
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem onClick={() => setHighlighted((v) => !v)}>
            <HighlighterIcon />
            {highlighted ? "Remove highlight" : "Highlight"}
          </ContextMenuItem>
          <ContextMenuItem>
            <MessageSquarePlusIcon />
            Add note
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <LanguagesIcon />
              Translate to
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-36">
              <ContextMenuGroup>
                <ContextMenuItem>Español</ContextMenuItem>
                <ContextMenuItem>Français</ContextMenuItem>
                <ContextMenuItem>Deutsch</ContextMenuItem>
                <ContextMenuItem>日本語</ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuItem>
            <SearchIcon />
            Search the web
          </ContextMenuItem>
          <ContextMenuItem>
            <Volume2Icon />
            Read aloud
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  },
  {
    name: "KanbanCardMenu",
    description: "A kanban card whose context menu moves it between columns and edits its labels.",
    code: `
const columns = ["Backlog", "In progress", "In review", "Done"]

export default function KanbanCardMenu() {
  const [column, setColumn] = React.useState("In progress")
  const [labels, setLabels] = React.useState({ frontend: true, urgent: false, customer: true })

  const toggle = (key: keyof typeof labels) => (checked: boolean) =>
    setLabels((current) => ({ ...current, [key]: checked }))

  return (
    <div className="flex w-full max-w-xs flex-col gap-2 bg-muted/50 p-2">
      <span className="px-1 text-xs font-medium text-muted-foreground">{column}</span>
      <ContextMenu>
        <ContextMenuTrigger className="flex flex-col gap-2 border bg-background p-3 shadow-xs data-popup-open:ring-2 data-popup-open:ring-ring/40">
          <span className="font-mono text-[11px] text-muted-foreground">WEB-219</span>
          <span className="text-sm">Fix coupon field losing focus on mobile Safari</span>
          <div className="flex flex-wrap gap-1">
            {labels.frontend ? <Badge variant="secondary">frontend</Badge> : null}
            {labels.urgent ? <Badge variant="destructive">urgent</Badge> : null}
            {labels.customer ? <Badge variant="outline">customer</Badge> : null}
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-48">
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <ColumnsIcon />
              Move to
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-40">
              <ContextMenuRadioGroup value={column} onValueChange={setColumn}>
                {columns.map((c) => (
                  <ContextMenuRadioItem key={c} value={c}>
                    {c}
                  </ContextMenuRadioItem>
                ))}
              </ContextMenuRadioGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <TagIcon />
              Labels
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-40">
              <ContextMenuGroup>
                <ContextMenuCheckboxItem checked={labels.frontend} onCheckedChange={toggle("frontend")}>
                  frontend
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem checked={labels.urgent} onCheckedChange={toggle("urgent")}>
                  urgent
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem checked={labels.customer} onCheckedChange={toggle("customer")}>
                  customer
                </ContextMenuCheckboxItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem>
              <CopyIcon />
              Copy issue link
            </ContextMenuItem>
            <ContextMenuItem variant="destructive">
              <TrashIcon />
              Delete issue
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}`,
  },
  {
    name: "CalendarEventMenu",
    description: "A calendar event block with RSVP radio options, color submenu, and duplicate or delete actions.",
    code: `
const colors = [
  { id: "sky", label: "Sky", className: "bg-sky-500" },
  { id: "emerald", label: "Emerald", className: "bg-emerald-500" },
  { id: "rose", label: "Rose", className: "bg-rose-500" },
  { id: "amber", label: "Amber", className: "bg-amber-500" },
]

export default function CalendarEventMenu() {
  const [rsvp, setRsvp] = React.useState("yes")
  const [color, setColor] = React.useState("sky")
  const active = colors.find((c) => c.id === color)!

  return (
    <div className="flex w-full max-w-xs gap-2 border p-2">
      <div className="flex flex-col gap-6 pt-1 text-[11px] text-muted-foreground">
        <span>10 AM</span>
        <span>11 AM</span>
      </div>
      <ContextMenu>
        <ContextMenuTrigger className={cn("flex h-20 flex-1 flex-col gap-0.5 border-s-4 bg-muted p-2 text-xs data-popup-open:ring-2 data-popup-open:ring-ring/40", rsvp === "no" && "line-through opacity-60")}>
          <span className="flex items-center gap-1.5 font-medium">
            <span className={cn("size-2 rounded-full", active.className)} />
            Quarterly business review
          </span>
          <span className="text-muted-foreground">10:00 – 11:30 · Room Kestrel</span>
          <span className="text-muted-foreground capitalize">RSVP: {rsvp}</span>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-48">
          <ContextMenuRadioGroup value={rsvp} onValueChange={setRsvp}>
            <ContextMenuLabel>Going?</ContextMenuLabel>
            <ContextMenuRadioItem value="yes">Yes</ContextMenuRadioItem>
            <ContextMenuRadioItem value="maybe">Maybe</ContextMenuRadioItem>
            <ContextMenuRadioItem value="no">No</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <PaletteIcon />
              Event color
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-36">
              <ContextMenuRadioGroup value={color} onValueChange={setColor}>
                {colors.map((c) => (
                  <ContextMenuRadioItem key={c.id} value={c.id}>
                    <span className={cn("size-3 rounded-full", c.className)} />
                    {c.label}
                  </ContextMenuRadioItem>
                ))}
              </ContextMenuRadioGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuGroup>
            <ContextMenuItem>
              <CopyPlusIcon />
              Duplicate
            </ContextMenuItem>
            <ContextMenuItem variant="destructive">
              <TrashIcon />
              Delete event
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}`,
  },
  {
    name: "BrowserTabStripMenu",
    description: "A browser tab strip where each tab can be pinned, muted, duplicated, or closed via its menu.",
    code: `
const initialTabs = [
  { id: 1, title: "Inbox (12)", pinned: true, muted: false },
  { id: 2, title: "Sprint board", pinned: false, muted: false },
  { id: 3, title: "Lo-fi beats", pinned: false, muted: true },
]

export default function BrowserTabStripMenu() {
  const [tabs, setTabs] = React.useState(initialTabs)

  const patch = (id: number, changes: Partial<(typeof initialTabs)[number]>) =>
    setTabs((list) => list.map((t) => (t.id === id ? { ...t, ...changes } : t)))

  return (
    <div className="flex w-full max-w-md items-end gap-px overflow-hidden border-b bg-muted/50 px-1 pt-1">
      {tabs.map((tab) => (
        <ContextMenu key={tab.id}>
          <ContextMenuTrigger className={cn("flex min-w-0 items-center gap-1.5 border border-b-0 bg-background px-2 py-1.5 text-xs data-popup-open:bg-muted", tab.pinned ? "w-9 shrink-0 justify-center" : "max-w-36 flex-1")}>
            <GlobeIcon className="size-3.5 shrink-0" />
            {tab.pinned ? null : <span className="truncate">{tab.title}</span>}
            {tab.muted ? <VolumeXIcon className="size-3 shrink-0 text-muted-foreground" /> : null}
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuItem>New tab to the right</ContextMenuItem>
              <ContextMenuItem>
                Reload
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem onClick={() => setTabs((list) => [...list, { ...tab, id: Date.now(), pinned: false }])}>
                Duplicate
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuCheckboxItem checked={tab.pinned} onCheckedChange={(pinned) => patch(tab.id, { pinned })}>
                Pin tab
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem checked={tab.muted} onCheckedChange={(muted) => patch(tab.id, { muted })}>
                Mute site
              </ContextMenuCheckboxItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem onClick={() => setTabs((list) => list.filter((t) => t.id !== tab.id))}>
                Close tab
                <ContextMenuShortcut>⌘W</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem disabled={tabs.length < 2} onClick={() => setTabs([tab])}>
                Close other tabs
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}`,
  },
  {
    name: "SpreadsheetCellMenu",
    description: "A spreadsheet grid whose cell menu inserts rows, sorts, and formats the clicked cell.",
    code: `
const rows = [
  ["Region", "Q3", "Q4"],
  ["North", "$42k", "$51k"],
  ["South", "$38k", "$36k"],
  ["West", "$57k", "$64k"],
]

export default function SpreadsheetCellMenu() {
  const [active, setActive] = React.useState("B2")

  return (
    <div className="w-full max-w-sm overflow-hidden border text-xs">
      <div className="border-b bg-muted/40 px-2 py-1 font-mono text-[11px]">{active}</div>
      <div className="grid grid-cols-3">
        {rows.map((row, r) =>
          row.map((cell, c) => {
            const ref = String.fromCharCode(65 + c) + (r + 1)
            return (
              <ContextMenu key={ref}>
                <ContextMenuTrigger
                  onContextMenu={() => setActive(ref)}
                  className={cn(
                    "border-e border-b px-2 py-1.5",
                    r === 0 && "bg-muted/60 font-medium",
                    active === ref && "outline-2 -outline-offset-2 outline-primary"
                  )}
                >
                  {cell}
                </ContextMenuTrigger>
                <ContextMenuContent className="w-52">
                  <ContextMenuGroup>
                    <ContextMenuLabel>Cell {ref}</ContextMenuLabel>
                    <ContextMenuItem>
                      <ScissorsIcon />
                      Cut
                      <ContextMenuShortcut>⌘X</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <CopyIcon />
                      Copy
                      <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                    </ContextMenuItem>
                  </ContextMenuGroup>
                  <ContextMenuSeparator />
                  <ContextMenuGroup>
                    <ContextMenuItem>Insert row above</ContextMenuItem>
                    <ContextMenuItem>Insert row below</ContextMenuItem>
                    <ContextMenuItem>Insert column left</ContextMenuItem>
                  </ContextMenuGroup>
                  <ContextMenuSeparator />
                  <ContextMenuSub>
                    <ContextMenuSubTrigger>
                      <ArrowUpDownIcon />
                      Sort column
                    </ContextMenuSubTrigger>
                    <ContextMenuSubContent className="w-36">
                      <ContextMenuGroup>
                        <ContextMenuItem>A → Z</ContextMenuItem>
                        <ContextMenuItem>Z → A</ContextMenuItem>
                      </ContextMenuGroup>
                    </ContextMenuSubContent>
                  </ContextMenuSub>
                  <ContextMenuGroup>
                    <ContextMenuItem variant="destructive">Delete row {r + 1}</ContextMenuItem>
                  </ContextMenuGroup>
                </ContextMenuContent>
              </ContextMenu>
            )
          })
        )}
      </div>
    </div>
  )
}`,
  },
  {
    name: "DesktopBackgroundMenu",
    description: "A desktop surface menu with new folder, sort-by radio submenu, and view toggles.",
    code: `
export default function DesktopBackgroundMenu() {
  const [sortBy, setSortBy] = React.useState("name")
  const [showIcons, setShowIcons] = React.useState(true)
  const [snapToGrid, setSnapToGrid] = React.useState(true)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="relative flex h-52 w-full max-w-md items-start gap-4 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-400 p-4 text-[11px] text-white">
        {showIcons
          ? ["Projects", "Screenshots", "Taxes 2026"].map((name) => (
              <span key={name} className="flex w-16 flex-col items-center gap-1 text-center">
                <FolderIcon className="size-8 fill-white/30" />
                {name}
              </span>
            ))
          : null}
        <span className="absolute end-3 bottom-2 opacity-80">Sorted by {sortBy}</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuItem>
            <FolderPlusIcon />
            New folder
            <ContextMenuShortcut>⇧⌘N</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <InfoIcon />
            Get info
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <ArrowDownWideNarrowIcon />
            Sort by
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-40">
            <ContextMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
              <ContextMenuRadioItem value="name">Name</ContextMenuRadioItem>
              <ContextMenuRadioItem value="kind">Kind</ContextMenuRadioItem>
              <ContextMenuRadioItem value="date added">Date added</ContextMenuRadioItem>
              <ContextMenuRadioItem value="size">Size</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuGroup>
          <ContextMenuCheckboxItem checked={showIcons} onCheckedChange={setShowIcons}>
            Show desktop icons
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={snapToGrid} onCheckedChange={setSnapToGrid}>
            Snap to grid
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            <WallpaperIcon />
            Change wallpaper...
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  },
  {
    name: "ListDisplayOptions",
    description: "Controlled checkbox items that toggle which metadata a task list shows.",
    code: `
const tasks = [
  { title: "Prepare investor update", owner: "MC", due: "Nov 18", points: 3 },
  { title: "Audit cookie banner copy", owner: "JR", due: "Nov 20", points: 1 },
  { title: "Migrate billing webhooks", owner: "PN", due: "Nov 24", points: 5 },
]

export default function ListDisplayOptions() {
  const [show, setShow] = React.useState({ owner: true, due: true, points: false })

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-full max-w-sm flex-col divide-y border">
        {tasks.map((task) => (
          <div key={task.title} className="flex items-center gap-2 px-3 py-2 text-xs">
            <CircleIcon className="size-3.5 text-muted-foreground" />
            <span className="flex-1 truncate">{task.title}</span>
            {show.points ? <Badge variant="outline">{task.points} pt</Badge> : null}
            {show.due ? <span className="text-muted-foreground">{task.due}</span> : null}
            {show.owner ? (
              <Avatar className="size-5">
                <AvatarFallback className="text-[9px]">{task.owner}</AvatarFallback>
              </Avatar>
            ) : null}
          </div>
        ))}
        <p className="px-3 py-1.5 text-[11px] text-muted-foreground">Right-click to change display options</p>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuLabel>Display properties</ContextMenuLabel>
          <ContextMenuCheckboxItem checked={show.owner} onCheckedChange={(owner) => setShow((s) => ({ ...s, owner }))}>
            Owner
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={show.due} onCheckedChange={(due) => setShow((s) => ({ ...s, due }))}>
            Due date
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={show.points} onCheckedChange={(points) => setShow((s) => ({ ...s, points }))}>
            Estimate
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  },
  {
    name: "SortOrderRadioMenu",
    description: "A leaderboard whose ordering is controlled by radio items in the context menu.",
    code: `
const players = [
  { name: "Nova", score: 9120, joined: 3 },
  { name: "Quill", score: 11840, joined: 1 },
  { name: "Juniper", score: 7600, joined: 4 },
  { name: "Atlas", score: 10230, joined: 2 },
]

export default function SortOrderRadioMenu() {
  const [sort, setSort] = React.useState("score")
  const sorted = [...players].sort((a, b) =>
    sort === "score" ? b.score - a.score : sort === "name" ? a.name.localeCompare(b.name) : a.joined - b.joined
  )

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-full max-w-xs flex-col border">
        <div className="flex items-center justify-between border-b px-3 py-2 text-xs">
          <span className="font-medium">Weekly leaderboard</span>
          <span className="text-muted-foreground">by {sort}</span>
        </div>
        {sorted.map((player, index) => (
          <div key={player.name} className="flex items-center gap-2 px-3 py-1.5 text-xs">
            <span className="w-4 text-muted-foreground">{index + 1}</span>
            <span className="flex-1">{player.name}</span>
            <span className="tabular-nums">{player.score.toLocaleString()}</span>
          </div>
        ))}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-44">
        <ContextMenuRadioGroup value={sort} onValueChange={setSort}>
          <ContextMenuLabel>Sort by</ContextMenuLabel>
          <ContextMenuRadioItem value="score">Highest score</ContextMenuRadioItem>
          <ContextMenuRadioItem value="name">Name (A–Z)</ContextMenuRadioItem>
          <ContextMenuRadioItem value="joined">First to join</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  },
  {
    name: "LockedDocumentMenu",
    description: "A context menu disabled through the root prop while a document is locked for signing.",
    code: `
export default function LockedDocumentMenu() {
  const [locked, setLocked] = React.useState(true)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between gap-2 text-xs">
        <Label htmlFor="doc-lock">Lock for e-signature</Label>
        <Switch id="doc-lock" checked={locked} onCheckedChange={setLocked} />
      </div>
      <ContextMenu disabled={locked}>
        <ContextMenuTrigger className={cn("flex flex-col gap-1 border p-4 text-xs", locked && "bg-muted/50")}>
          <span className="flex items-center gap-1.5 font-medium">
            {locked ? <LockIcon className="size-3.5" /> : <FileSignatureIcon className="size-3.5" />}
            Master services agreement
          </span>
          <span className="text-muted-foreground">
            {locked ? "Editing is locked until all parties sign." : "Right-click to edit this document."}
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-44">
          <ContextMenuGroup>
            <ContextMenuItem>
              <PencilIcon />
              Edit clauses
            </ContextMenuItem>
            <ContextMenuItem>
              <MessageSquareIcon />
              Add comment
            </ContextMenuItem>
            <ContextMenuItem>
              <SendIcon />
              Send for signature
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}`,
  },
  {
    name: "ControlledOpenMenu",
    description: "A context menu with controlled open state that reports when it opens and closes.",
    code: `
export default function ControlledOpenMenu() {
  const [open, setOpen] = React.useState(false)
  const [opens, setOpens] = React.useState(0)

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <ContextMenu
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (next) setOpens((n) => n + 1)
        }}
      >
        <ContextMenuTrigger className="flex aspect-video items-center justify-center border border-dashed text-xs text-muted-foreground">
          Right-click the dashboard canvas
        </ContextMenuTrigger>
        <ContextMenuContent className="w-44">
          <ContextMenuGroup>
            <ContextMenuItem>
              <PlusIcon />
              Add widget
            </ContextMenuItem>
            <ContextMenuItem>
              <LayoutGridIcon />
              Auto-arrange
            </ContextMenuItem>
            <ContextMenuItem>
              <RefreshCwIcon />
              Refresh all
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <div className="flex items-center justify-between text-xs">
        <span className="flex items-center gap-1.5">
          <span className={cn("size-2 rounded-full", open ? "bg-emerald-500" : "bg-muted-foreground/40")} />
          Menu is {open ? "open" : "closed"}
        </span>
        <span className="text-muted-foreground">Opened {opens}×</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ActivityLogMenu",
    description: "A context menu whose actions append entries to a visible activity log.",
    code: `
export default function ActivityLogMenu() {
  const [log, setLog] = React.useState<string[]>([])
  const add = (entry: string) =>
    setLog((current) => [new Date().toLocaleTimeString() + " — " + entry, ...current].slice(0, 4))

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <ContextMenu>
        <ContextMenuTrigger className="flex items-center gap-3 border p-3">
          <div className="flex size-10 items-center justify-center bg-muted">
            <ServerIcon className="size-5" />
          </div>
          <div className="flex flex-col text-xs">
            <span className="font-medium">api-gateway-prod</span>
            <span className="text-muted-foreground">us-east-1 · 3 replicas</span>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-44">
          <ContextMenuGroup>
            <ContextMenuItem onClick={() => add("Scaled to 4 replicas")}>
              <PlusIcon />
              Scale up
            </ContextMenuItem>
            <ContextMenuItem onClick={() => add("Rolling restart started")}>
              <RotateCwIcon />
              Restart
            </ContextMenuItem>
            <ContextMenuItem onClick={() => add("Logs opened")}>
              <ScrollTextIcon />
              View logs
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <div className="flex min-h-20 flex-col gap-1 border bg-muted/30 p-2 font-mono text-[11px] text-muted-foreground">
        {log.length ? log.map((entry) => <span key={entry}>{entry}</span>) : <span>No activity yet.</span>}
      </div>
    </div>
  )
}`,
  },
  {
    name: "MapPinDropMenu",
    description: "A map surface that captures the right-click position to drop pins and copy coordinates.",
    code: `
export default function MapPinDropMenu() {
  const [point, setPoint] = React.useState({ x: 50, y: 50 })
  const [pins, setPins] = React.useState<{ x: number; y: number }[]>([])
  const lat = (45.55 - point.y * 0.001).toFixed(4)
  const lng = (-122.7 + point.x * 0.001).toFixed(4)

  return (
    <ContextMenu>
      <ContextMenuTrigger
        onContextMenu={(event) => {
          const rect = event.currentTarget.getBoundingClientRect()
          setPoint({
            x: Math.round(((event.clientX - rect.left) / rect.width) * 100),
            y: Math.round(((event.clientY - rect.top) / rect.height) * 100),
          })
        }}
        className="relative h-56 w-full max-w-md overflow-hidden border bg-emerald-50 dark:bg-emerald-950/30"
      >
        <svg className="absolute inset-0 size-full text-emerald-200 dark:text-emerald-900" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 60 Q 30 40 55 62 T 100 50" stroke="currentColor" strokeWidth="6" fill="none" />
          <path d="M40 0 L 48 100" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
        {pins.map((pin, index) => (
          <MapPinIcon
            key={index}
            className="absolute size-5 -translate-x-1/2 -translate-y-full fill-red-500 text-red-700"
            style={{ left: pin.x + "%", top: pin.y + "%" }}
          />
        ))}
        <span className="absolute start-2 bottom-2 bg-background/80 px-1.5 py-0.5 text-[11px]">{pins.length} pins</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuLabel className="font-mono">{lat}, {lng}</ContextMenuLabel>
          <ContextMenuItem onClick={() => setPins((p) => [...p, point])}>
            <MapPinPlusIcon />
            Drop pin here
          </ContextMenuItem>
          <ContextMenuItem>
            <NavigationIcon />
            Directions from here
          </ContextMenuItem>
          <ContextMenuItem>
            <RulerIcon />
            Measure distance
          </ContextMenuItem>
          <ContextMenuItem>
            <CopyIcon />
            Copy coordinates
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem disabled={!pins.length} onClick={() => setPins([])}>
            Clear all pins
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  },
  {
    name: "ContactCardMenu",
    description: "A contact card with call, message, favorite toggle, and block actions.",
    code: `
export default function ContactCardMenu() {
  const [favorite, setFavorite] = React.useState(false)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-full max-w-xs items-center gap-3 border p-3 data-popup-open:bg-muted/50">
        <Avatar className="size-10">
          <AvatarFallback>NH</AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-col text-xs">
          <span className="flex items-center gap-1 font-medium">
            Noor Haddad
            {favorite ? <StarIcon className="size-3 fill-amber-400 text-amber-400" /> : null}
          </span>
          <span className="text-muted-foreground">Customer Success · Lisbon</span>
          <span className="text-muted-foreground">+351 912 345 678</span>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem>
            <PhoneIcon />
            Call
          </ContextMenuItem>
          <ContextMenuItem>
            <MessageCircleIcon />
            Send message
          </ContextMenuItem>
          <ContextMenuItem>
            <VideoIcon />
            Start video call
          </ContextMenuItem>
          <ContextMenuItem>
            <MailIcon />
            Email
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuCheckboxItem checked={favorite} onCheckedChange={setFavorite}>
            Favorite
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive">
            <UserXIcon />
            Block contact
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  },
  {
    name: "MusicTrackMenu",
    description: "A track list with queue actions, an add-to-playlist submenu, and a liked toggle per song.",
    code: `
const tracks = [
  { title: "Paper Lanterns", artist: "Mira Sol", length: "3:42" },
  { title: "Low Tide", artist: "The Harbor Lights", length: "4:05" },
  { title: "Glasshouse", artist: "Ondine", length: "2:58" },
]

export default function MusicTrackMenu() {
  const [liked, setLiked] = React.useState<string[]>(["Low Tide"])

  return (
    <div className="flex w-full max-w-sm flex-col border">
      {tracks.map((track, index) => (
        <ContextMenu key={track.title}>
          <ContextMenuTrigger className="flex items-center gap-3 px-3 py-2 text-xs hover:bg-muted/50 data-popup-open:bg-muted">
            <span className="w-4 text-muted-foreground">{index + 1}</span>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate font-medium">{track.title}</span>
              <span className="text-muted-foreground">{track.artist}</span>
            </div>
            {liked.includes(track.title) ? <HeartIcon className="size-3.5 fill-primary text-primary" /> : null}
            <span className="text-muted-foreground tabular-nums">{track.length}</span>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuItem>
                <ListStartIcon />
                Play next
              </ContextMenuItem>
              <ContextMenuItem>
                <ListEndIcon />
                Add to queue
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <ListPlusIcon />
                  Add to playlist
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-44">
                  <ContextMenuGroup>
                    <ContextMenuItem>
                      <PlusIcon />
                      New playlist
                    </ContextMenuItem>
                  </ContextMenuGroup>
                  <ContextMenuSeparator />
                  <ContextMenuGroup>
                    <ContextMenuItem>Focus flow</ContextMenuItem>
                    <ContextMenuItem>Sunday cooking</ContextMenuItem>
                    <ContextMenuItem>Road trip mix</ContextMenuItem>
                  </ContextMenuGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuCheckboxItem
                checked={liked.includes(track.title)}
                onCheckedChange={(checked) =>
                  setLiked((list) => (checked ? [...list, track.title] : list.filter((t) => t !== track.title)))
                }
              >
                Liked
              </ContextMenuCheckboxItem>
              <ContextMenuItem>
                <MicVocalIcon />
                Go to artist
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}`,
  },
  {
    name: "NotificationItemMenu",
    description: "Notification rows with mark-read, mute thread, per-type settings, and dismiss actions.",
    code: `
const items = [
  { id: 1, icon: GitPullRequestIcon, text: "Maya requested your review on #1284", time: "4m" },
  { id: 2, icon: MessageSquareIcon, text: "Jonah replied in Pricing page copy", time: "1h" },
  { id: 3, icon: CalendarIcon, text: "Design crit moved to 3:30 PM", time: "3h" },
]

export default function NotificationItemMenu() {
  const [list, setList] = React.useState(items)
  const [frequency, setFrequency] = React.useState("all")

  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      {list.map((n) => (
        <ContextMenu key={n.id}>
          <ContextMenuTrigger className="flex items-start gap-3 px-3 py-2.5 text-xs data-popup-open:bg-muted">
            <n.icon className="mt-0.5 size-4 text-muted-foreground" />
            <span className="flex-1">{n.text}</span>
            <span className="text-muted-foreground">{n.time}</span>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-52">
            <ContextMenuGroup>
              <ContextMenuItem>
                <CheckCheckIcon />
                Mark as read
              </ContextMenuItem>
              <ContextMenuItem>
                <BellOffIcon />
                Mute this thread
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <SettingsIcon />
                  Notify me about
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-44">
                  <ContextMenuRadioGroup value={frequency} onValueChange={setFrequency}>
                    <ContextMenuRadioItem value="all">All activity</ContextMenuRadioItem>
                    <ContextMenuRadioItem value="mentions">Mentions only</ContextMenuRadioItem>
                    <ContextMenuRadioItem value="none">Nothing</ContextMenuRadioItem>
                  </ContextMenuRadioGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem onClick={() => setList((l) => l.filter((x) => x.id !== n.id))}>
                <XIcon />
                Dismiss
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
      {list.length === 0 ? <p className="p-6 text-center text-xs text-muted-foreground">You&apos;re all caught up.</p> : null}
    </div>
  )
}`,
  },
  {
    name: "CommentThreadMenu",
    description: "A review comment with edit, copy link, resolve, and delete actions that update the thread.",
    code: `
export default function CommentThreadMenu() {
  const [resolved, setResolved] = React.useState(false)

  return (
    <ContextMenu>
      <ContextMenuTrigger className={cn("flex w-full max-w-sm flex-col gap-2 border p-3 text-xs", resolved && "opacity-60")}>
        <div className="flex items-center gap-2">
          <Avatar className="size-6">
            <AvatarFallback className="text-[10px]">PN</AvatarFallback>
          </Avatar>
          <span className="font-medium">Priya Natarajan</span>
          <span className="text-muted-foreground">2h ago</span>
          {resolved ? (
            <Badge variant="secondary" className="ms-auto">
              <CheckIcon />
              Resolved
            </Badge>
          ) : null}
        </div>
        <p className="text-muted-foreground">
          Can we bump the contrast on the secondary button? It fails AA on the dark hero.
        </p>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem>
            <ReplyIcon />
            Reply
          </ContextMenuItem>
          <ContextMenuItem>
            <PencilIcon />
            Edit comment
          </ContextMenuItem>
          <ContextMenuItem>
            <LinkIcon />
            Copy link
          </ContextMenuItem>
          <ContextMenuItem onClick={() => setResolved((v) => !v)}>
            <CircleCheckIcon />
            {resolved ? "Reopen thread" : "Resolve thread"}
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive">
            <TrashIcon />
            Delete comment
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  },
  {
    name: "DashboardWidgetMenu",
    description: "A chart widget whose context menu changes the date range, exports data, or removes it.",
    code: `
const data = {
  "7d": [40, 62, 55, 70, 48, 80, 66],
  "30d": [30, 45, 50, 38, 60, 72, 58, 64, 70, 82, 76, 90],
  "90d": [20, 34, 41, 52, 49, 63, 70, 68, 75, 84, 88, 95],
}

export default function DashboardWidgetMenu() {
  const [range, setRange] = React.useState<keyof typeof data>("7d")
  const [removed, setRemoved] = React.useState(false)

  if (removed) {
    return (
      <div className="flex w-full max-w-sm flex-col items-center gap-2 border border-dashed p-6 text-xs text-muted-foreground">
        Widget removed
        <Button size="sm" variant="outline" onClick={() => setRemoved(false)}>
          Undo
        </Button>
      </div>
    )
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-full max-w-sm flex-col gap-3 border p-4">
        <div className="flex items-baseline justify-between">
          <span className="text-xs text-muted-foreground">Active users</span>
          <span className="text-[11px] text-muted-foreground">Last {range}</span>
        </div>
        <span className="text-2xl font-semibold tabular-nums">12,480</span>
        <div className="flex h-20 items-end gap-1">
          {data[range].map((value, index) => (
            <div key={index} className="flex-1 bg-primary/80" style={{ height: value + "%" }} />
          ))}
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem>
            <RefreshCwIcon />
            Refresh
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={range} onValueChange={(value) => setRange(value as keyof typeof data)}>
          <ContextMenuLabel>Date range</ContextMenuLabel>
          <ContextMenuRadioItem value="7d">Last 7 days</ContextMenuRadioItem>
          <ContextMenuRadioItem value="30d">Last 30 days</ContextMenuRadioItem>
          <ContextMenuRadioItem value="90d">Last 90 days</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <DownloadIcon />
            Export
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-36">
            <ContextMenuGroup>
              <ContextMenuItem>CSV</ContextMenuItem>
              <ContextMenuItem>PNG image</ContextMenuItem>
              <ContextMenuItem>PDF report</ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive" onClick={() => setRemoved(true)}>
            <XIcon />
            Remove widget
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  },
  {
    name: "TerminalPaneMenu",
    description: "A terminal pane with copy, paste, clear, split, and kill process actions.",
    code: `
const initialLines = [
  "$ pnpm dev",
  "▲ Next.js ready on http://localhost:3000",
  "✓ Compiled /dashboard in 412ms",
  "GET /api/health 200 in 8ms",
]

export default function TerminalPaneMenu() {
  const [lines, setLines] = React.useState(initialLines)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-full max-w-md flex-col gap-0.5 overflow-hidden border bg-zinc-950 p-3 font-mono text-[11px] text-zinc-200">
        {lines.map((line, index) => (
          <span key={index} className={line.startsWith("$") ? "text-emerald-400" : undefined}>
            {line}
          </span>
        ))}
        <span className="animate-pulse">▍</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuItem>
            <CopyIcon />
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <ClipboardPasteIcon />
            Paste
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem onClick={() => setLines([])}>
            <EraserIcon />
            Clear
            <ContextMenuShortcut>⌘K</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            <Columns2Icon />
            Split right
            <ContextMenuShortcut>⌘D</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Rows2Icon />
            Split down
            <ContextMenuShortcut>⇧⌘D</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive" onClick={() => setLines(["Process exited with code 130"])}>
            <SquareIcon />
            Kill process
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  },
  {
    name: "PasswordVaultMenu",
    description: "Password vault entries with copy username, copy password, and open site actions.",
    code: `
const entries = [
  { site: "Ledgerly", user: "finance@fieldnote.io", strength: "Strong" },
  { site: "Trackwise", user: "maya.chen", strength: "Weak" },
  { site: "Mailroom", user: "maya@fieldnote.io", strength: "Strong" },
]

export default function PasswordVaultMenu() {
  const [copied, setCopied] = React.useState<string | null>(null)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex flex-col divide-y border">
        {entries.map((entry) => (
          <ContextMenu key={entry.site}>
            <ContextMenuTrigger className="flex items-center gap-3 px-3 py-2 text-xs data-popup-open:bg-muted">
              <div className="flex size-8 items-center justify-center bg-muted">
                <KeyRoundIcon className="size-4" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="font-medium">{entry.site}</span>
                <span className="truncate text-muted-foreground">{entry.user}</span>
              </div>
              <Badge variant={entry.strength === "Weak" ? "destructive" : "outline"}>{entry.strength}</Badge>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-48">
              <ContextMenuGroup>
                <ContextMenuItem onClick={() => setCopied("Username for " + entry.site)}>
                  <UserIcon />
                  Copy username
                  <ContextMenuShortcut>⌘B</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem onClick={() => setCopied("Password for " + entry.site)}>
                  <AsteriskIcon />
                  Copy password
                  <ContextMenuShortcut>⇧⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <ExternalLinkIcon />
                  Open and fill
                </ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem>
                  <RefreshCwIcon />
                  Generate new password
                </ContextMenuItem>
                <ContextMenuItem variant="destructive">
                  <TrashIcon />
                  Move to trash
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuContent>
          </ContextMenu>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        {copied ? copied + " copied · clears in 30s" : "Right-click an item for quick actions"}
      </p>
    </div>
  )
}`,
  },
  {
    name: "OrderFulfillmentMenu",
    description: "Store admin order rows that mark orders shipped, print labels, or issue refunds.",
    code: `
const initialOrders = [
  { id: "#48211", customer: "Ines Moreau", total: "$84.00", status: "Unfulfilled" },
  { id: "#48212", customer: "Kai Okafor", total: "$129.50", status: "Shipped" },
  { id: "#48213", customer: "Hana Sato", total: "$42.25", status: "Unfulfilled" },
]

export default function OrderFulfillmentMenu() {
  const [orders, setOrders] = React.useState(initialOrders)
  const setStatus = (id: string, status: string) =>
    setOrders((list) => list.map((o) => (o.id === id ? { ...o, status } : o)))

  return (
    <div className="flex w-full max-w-md flex-col divide-y border text-xs">
      {orders.map((order) => (
        <ContextMenu key={order.id}>
          <ContextMenuTrigger className="grid grid-cols-[4rem_1fr_auto_auto] items-center gap-3 px-3 py-2 data-popup-open:bg-muted">
            <span className="font-mono">{order.id}</span>
            <span className="truncate">{order.customer}</span>
            <span className="tabular-nums">{order.total}</span>
            <Badge variant={order.status === "Refunded" ? "destructive" : order.status === "Shipped" ? "secondary" : "outline"}>
              {order.status}
            </Badge>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuLabel>Order {order.id}</ContextMenuLabel>
              <ContextMenuItem disabled={order.status !== "Unfulfilled"} onClick={() => setStatus(order.id, "Shipped")}>
                <TruckIcon />
                Mark as shipped
              </ContextMenuItem>
              <ContextMenuItem>
                <PrinterIcon />
                Print shipping label
              </ContextMenuItem>
              <ContextMenuItem>
                <UserIcon />
                View customer
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem variant="destructive" disabled={order.status === "Refunded"} onClick={() => setStatus(order.id, "Refunded")}>
                <UndoIcon />
                Refund order
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}`,
  },
  {
    name: "VideoPlayerMenu",
    description: "A video player surface with loop toggle and speed and quality radio submenus.",
    code: `
export default function VideoPlayerMenu() {
  const [loop, setLoop] = React.useState(false)
  const [speed, setSpeed] = React.useState("1")
  const [quality, setQuality] = React.useState("1080p")

  return (
    <ContextMenu>
      <ContextMenuTrigger className="relative flex aspect-video w-full max-w-md items-center justify-center bg-linear-to-br from-slate-800 to-slate-950 text-white">
        <PlayCircleIcon className="size-12 opacity-80" />
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-black/40 px-3 py-1.5 text-[11px]">
          <span>1:24 / 6:10</span>
          <div className="h-1 flex-1 bg-white/30">
            <div className="h-full w-1/4 bg-white" />
          </div>
          <span>{speed}× · {quality}</span>
          {loop ? <RepeatIcon className="size-3" /> : null}
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuCheckboxItem checked={loop} onCheckedChange={setLoop}>
            Loop
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <GaugeIcon />
            Playback speed
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-32">
            <ContextMenuRadioGroup value={speed} onValueChange={setSpeed}>
              {["0.5", "1", "1.25", "1.5", "2"].map((s) => (
                <ContextMenuRadioItem key={s} value={s}>
                  {s === "1" ? "Normal" : s + "×"}
                </ContextMenuRadioItem>
              ))}
            </ContextMenuRadioGroup>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <SlidersHorizontalIcon />
            Quality
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-32">
            <ContextMenuRadioGroup value={quality} onValueChange={setQuality}>
              {["2160p", "1080p", "720p", "Auto"].map((q) => (
                <ContextMenuRadioItem key={q} value={q}>
                  {q}
                </ContextMenuRadioItem>
              ))}
            </ContextMenuRadioGroup>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            <LinkIcon />
            Copy video URL at 1:24
          </ContextMenuItem>
          <ContextMenuItem>
            <PictureInPicture2Icon />
            Picture in picture
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  },
  {
    name: "SidebarProjectMenu",
    description: "Sidebar navigation items with favorite toggling, new-tab, rename, and archive actions.",
    code: `
const initialProjects = [
  { name: "Atlas Redesign", favorite: true },
  { name: "Orbit API", favorite: false },
  { name: "Harbor Mobile", favorite: false },
]

export default function SidebarProjectMenu() {
  const [projects, setProjects] = React.useState(initialProjects)
  const toggleFavorite = (name: string) =>
    setProjects((list) => list.map((p) => (p.name === name ? { ...p, favorite: !p.favorite } : p)))

  return (
    <nav className="flex w-full max-w-56 flex-col gap-0.5 border p-2">
      <span className="px-2 pb-1 text-[11px] font-medium text-muted-foreground">Projects</span>
      {[...projects]
        .sort((a, b) => Number(b.favorite) - Number(a.favorite))
        .map((project) => (
          <ContextMenu key={project.name}>
            <ContextMenuTrigger className="flex items-center gap-2 px-2 py-1.5 text-xs hover:bg-muted data-popup-open:bg-muted">
              <HashIcon className="size-3.5 text-muted-foreground" />
              <span className="flex-1 truncate">{project.name}</span>
              {project.favorite ? <StarIcon className="size-3 fill-amber-400 text-amber-400" /> : null}
            </ContextMenuTrigger>
            <ContextMenuContent className="w-48">
              <ContextMenuGroup>
                <ContextMenuItem>
                  <ExternalLinkIcon />
                  Open in new tab
                </ContextMenuItem>
                <ContextMenuItem onClick={() => toggleFavorite(project.name)}>
                  {project.favorite ? <StarOffIcon /> : <StarIcon />}
                  {project.favorite ? "Remove from favorites" : "Add to favorites"}
                </ContextMenuItem>
                <ContextMenuItem>
                  <PencilIcon />
                  Rename
                </ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem onClick={() => setProjects((list) => list.filter((p) => p.name !== project.name))}>
                  <ArchiveIcon />
                  Archive project
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuContent>
          </ContextMenu>
        ))}
    </nav>
  )
}`,
  },
  {
    name: "TeamMemberRoleMenu",
    description: "A members list where the context menu changes a person's role or removes them.",
    code: `
const initialMembers = [
  { name: "Maya Chen", email: "maya@fieldnote.io", role: "owner" },
  { name: "Jonah Reyes", email: "jonah@fieldnote.io", role: "admin" },
  { name: "Elliot Brandt", email: "elliot@fieldnote.io", role: "member" },
  { name: "Sofia Laurent", email: "sofia@fieldnote.io", role: "viewer" },
]

export default function TeamMemberRoleMenu() {
  const [members, setMembers] = React.useState(initialMembers)
  const setRole = (email: string, role: string) =>
    setMembers((list) => list.map((m) => (m.email === email ? { ...m, role } : m)))

  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      {members.map((member) => (
        <ContextMenu key={member.email} disabled={member.role === "owner"}>
          <ContextMenuTrigger className="flex items-center gap-3 px-3 py-2 text-xs data-popup-open:bg-muted">
            <Avatar className="size-7">
              <AvatarFallback className="text-[10px]">
                {member.name.split(" ").map((p) => p[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="font-medium">{member.name}</span>
              <span className="truncate text-muted-foreground">{member.email}</span>
            </div>
            <Badge variant="outline" className="capitalize">{member.role}</Badge>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <ShieldIcon />
                Change role
              </ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-36">
                <ContextMenuRadioGroup value={member.role} onValueChange={(role) => setRole(member.email, role)}>
                  <ContextMenuRadioItem value="admin">Admin</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="member">Member</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="viewer">Viewer</ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuGroup>
              <ContextMenuItem>
                <MailIcon />
                Resend invite
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem
                variant="destructive"
                onClick={() => setMembers((list) => list.filter((m) => m.email !== member.email))}
              >
                <UserMinusIcon />
                Remove from team
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
      <p className="px-3 py-1.5 text-[11px] text-muted-foreground">The workspace owner can&apos;t be edited.</p>
    </div>
  )
}`,
  },
  {
    name: "TodoItemMenu",
    description: "Todo items whose menu completes tasks, sets due dates, and changes priority.",
    code: `
const initialTodos = [
  { id: 1, title: "Renew domain for fieldnote.io", done: false, due: "Today", priority: "high" },
  { id: 2, title: "Send W-9 to accountant", done: false, due: "Tomorrow", priority: "medium" },
  { id: 3, title: "Book flights for offsite", done: true, due: "Next week", priority: "low" },
]

const priorityColor: Record<string, string> = {
  high: "bg-red-500",
  medium: "bg-amber-500",
  low: "bg-sky-500",
}

export default function TodoItemMenu() {
  const [todos, setTodos] = React.useState(initialTodos)
  const patch = (id: number, changes: Partial<(typeof initialTodos)[number]>) =>
    setTodos((list) => list.map((t) => (t.id === id ? { ...t, ...changes } : t)))

  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      {todos.map((todo) => (
        <ContextMenu key={todo.id}>
          <ContextMenuTrigger className="flex items-center gap-2 border px-3 py-2 text-xs data-popup-open:bg-muted">
            <Checkbox checked={todo.done} onCheckedChange={(done) => patch(todo.id, { done })} aria-label="Complete" />
            <span className={cn("flex-1 truncate", todo.done && "text-muted-foreground line-through")}>{todo.title}</span>
            <span className={cn("size-2 rounded-full", priorityColor[todo.priority])} />
            <span className="text-muted-foreground">{todo.due}</span>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuItem onClick={() => patch(todo.id, { done: !todo.done })}>
                <CircleCheckIcon />
                Mark {todo.done ? "incomplete" : "complete"}
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <CalendarIcon />
                  Due date
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-36">
                  <ContextMenuRadioGroup value={todo.due} onValueChange={(due) => patch(todo.id, { due })}>
                    <ContextMenuRadioItem value="Today">Today</ContextMenuRadioItem>
                    <ContextMenuRadioItem value="Tomorrow">Tomorrow</ContextMenuRadioItem>
                    <ContextMenuRadioItem value="Next week">Next week</ContextMenuRadioItem>
                  </ContextMenuRadioGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup value={todo.priority} onValueChange={(priority) => patch(todo.id, { priority })}>
              <ContextMenuLabel>Priority</ContextMenuLabel>
              <ContextMenuRadioItem value="high">High</ContextMenuRadioItem>
              <ContextMenuRadioItem value="medium">Medium</ContextMenuRadioItem>
              <ContextMenuRadioItem value="low">Low</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem variant="destructive" onClick={() => setTodos((l) => l.filter((t) => t.id !== todo.id))}>
                <TrashIcon />
                Delete task
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}`,
  },
  {
    name: "StickyNoteColorMenu",
    description: "Sticky notes on a board whose background color is chosen from a swatch radio group.",
    code: `
const swatches = [
  { id: "yellow", label: "Lemon", className: "bg-yellow-200 text-yellow-950" },
  { id: "pink", label: "Bubblegum", className: "bg-pink-200 text-pink-950" },
  { id: "green", label: "Mint", className: "bg-emerald-200 text-emerald-950" },
  { id: "blue", label: "Sky", className: "bg-sky-200 text-sky-950" },
]

const initialNotes = [
  { id: 1, text: "Users want CSV export from the reports page", color: "yellow" },
  { id: 2, text: "Onboarding step 3 is confusing", color: "pink" },
  { id: 3, text: "Dark mode toggle in the header?", color: "blue" },
]

export default function StickyNoteColorMenu() {
  const [notes, setNotes] = React.useState(initialNotes)

  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-3 sm:grid-cols-3">
      {notes.map((note) => {
        const swatch = swatches.find((s) => s.id === note.color)!
        return (
          <ContextMenu key={note.id}>
            <ContextMenuTrigger className={cn("aspect-square p-3 text-xs shadow-sm data-popup-open:ring-2 data-popup-open:ring-ring/50", swatch.className)}>
              {note.text}
            </ContextMenuTrigger>
            <ContextMenuContent className="w-44">
              <ContextMenuRadioGroup
                value={note.color}
                onValueChange={(color) =>
                  setNotes((list) => list.map((n) => (n.id === note.id ? { ...n, color } : n)))
                }
              >
                <ContextMenuLabel>Note color</ContextMenuLabel>
                {swatches.map((s) => (
                  <ContextMenuRadioItem key={s.id} value={s.id}>
                    <span className={cn("size-3.5 ring-1 ring-foreground/10", s.className)} />
                    {s.label}
                  </ContextMenuRadioItem>
                ))}
              </ContextMenuRadioGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem
                  onClick={() => setNotes((list) => [...list, { ...note, id: Date.now() }])}
                >
                  <CopyPlusIcon />
                  Duplicate
                </ContextMenuItem>
                <ContextMenuItem variant="destructive" onClick={() => setNotes((list) => list.filter((n) => n.id !== note.id))}>
                  <TrashIcon />
                  Delete note
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuContent>
          </ContextMenu>
        )
      })}
    </div>
  )
}`,
  },
  {
    name: "CartLineItemMenu",
    description: "Checkout cart lines with a quantity submenu, save-for-later, and remove actions.",
    code: `
const initialCart = [
  { id: "tee", name: "Organic cotton tee", price: 28, qty: 2, swatch: "from-stone-200 to-stone-400" },
  { id: "cap", name: "Canvas baseball cap", price: 22, qty: 1, swatch: "from-emerald-300 to-emerald-600" },
]

export default function CartLineItemMenu() {
  const [cart, setCart] = React.useState(initialCart)
  const [saved, setSaved] = React.useState<string[]>([])
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="flex w-full max-w-sm flex-col border">
      {cart.map((item) => (
        <ContextMenu key={item.id}>
          <ContextMenuTrigger className="flex items-center gap-3 border-b p-3 text-xs data-popup-open:bg-muted">
            <div className={cn("size-12 bg-linear-to-br", item.swatch)} />
            <div className="flex flex-1 flex-col">
              <span className="font-medium">{item.name}</span>
              <span className="text-muted-foreground">Qty {item.qty}</span>
            </div>
            <span className="tabular-nums">\${(item.price * item.qty).toFixed(2)}</span>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-44">
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <HashIcon />
                Quantity
              </ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-24">
                <ContextMenuRadioGroup
                  value={String(item.qty)}
                  onValueChange={(qty) =>
                    setCart((list) => list.map((c) => (c.id === item.id ? { ...c, qty: Number(qty) } : c)))
                  }
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <ContextMenuRadioItem key={n} value={String(n)}>
                      {n}
                    </ContextMenuRadioItem>
                  ))}
                </ContextMenuRadioGroup>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuGroup>
              <ContextMenuItem
                onClick={() => {
                  setSaved((s) => [...s, item.name])
                  setCart((list) => list.filter((c) => c.id !== item.id))
                }}
              >
                <BookmarkIcon />
                Save for later
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem variant="destructive" onClick={() => setCart((list) => list.filter((c) => c.id !== item.id))}>
                <TrashIcon />
                Remove
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
      <div className="flex items-center justify-between p-3 text-xs">
        <span className="text-muted-foreground">{saved.length ? saved.length + " saved for later" : "Subtotal"}</span>
        <span className="font-semibold tabular-nums">\${total.toFixed(2)}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "GitCommitHistoryMenu",
    description: "A commit history list with copy SHA, checkout, cherry-pick, and revert actions.",
    code: `
const commits = [
  { sha: "a41f9c2", message: "Add usage-based billing tiers", author: "MC", time: "2h" },
  { sha: "7be03d1", message: "Fix race in webhook retries", author: "JR", time: "5h" },
  { sha: "c9921aa", message: "Bump date library to v4", author: "EB", time: "1d" },
  { sha: "15e7f40", message: "Refactor invoice PDF renderer", author: "PN", time: "2d" },
]

export default function GitCommitHistoryMenu() {
  return (
    <div className="relative flex w-full max-w-sm flex-col border">
      {commits.map((commit, index) => (
        <ContextMenu key={commit.sha}>
          <ContextMenuTrigger className="flex items-center gap-3 px-3 py-2 text-xs data-popup-open:bg-muted">
            <div className="flex flex-col items-center self-stretch">
              <span className={cn("w-px flex-1", index === 0 ? "bg-transparent" : "bg-border")} />
              <GitCommitHorizontalIcon className="size-4 rotate-90 text-muted-foreground" />
              <span className={cn("w-px flex-1", index === commits.length - 1 ? "bg-transparent" : "bg-border")} />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate">{commit.message}</span>
              <span className="text-muted-foreground">
                {commit.author} · {commit.time} ago
              </span>
            </div>
            <code className="text-[11px] text-muted-foreground">{commit.sha}</code>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-52">
            <ContextMenuGroup>
              <ContextMenuLabel className="font-mono">{commit.sha}</ContextMenuLabel>
              <ContextMenuItem>
                <CopyIcon />
                Copy SHA
              </ContextMenuItem>
              <ContextMenuItem>
                <GitCompareIcon />
                Compare with working tree
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem>
                <GitBranchPlusIcon />
                Create branch from commit
              </ContextMenuItem>
              <ContextMenuItem>
                <CherryIcon />
                Cherry-pick
              </ContextMenuItem>
              <ContextMenuItem>
                <ArrowLeftRightIcon />
                Checkout commit
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem variant="destructive">
                <Undo2Icon />
                Revert commit
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}`,
  },
  {
    name: "BookmarksBarMenu",
    description: "A browser bookmarks bar where each chip can be opened, edited, or removed.",
    code: `
const initialBookmarks = [
  { title: "Roadmap", icon: MapIcon },
  { title: "Status", icon: ActivityIcon },
  { title: "Design system", icon: ShapesIcon },
  { title: "Payroll", icon: WalletIcon },
]

export default function BookmarksBarMenu() {
  const [bookmarks, setBookmarks] = React.useState(initialBookmarks)

  return (
    <div className="flex w-full max-w-md flex-wrap items-center gap-1 border bg-muted/30 p-1">
      {bookmarks.map((bookmark) => (
        <ContextMenu key={bookmark.title}>
          <ContextMenuTrigger className="flex items-center gap-1.5 px-2 py-1 text-xs hover:bg-muted data-popup-open:bg-muted">
            <bookmark.icon className="size-3.5" />
            {bookmark.title}
          </ContextMenuTrigger>
          <ContextMenuContent className="w-52">
            <ContextMenuGroup>
              <ContextMenuItem>Open in new tab</ContextMenuItem>
              <ContextMenuItem>Open in new window</ContextMenuItem>
              <ContextMenuItem>Open in private window</ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem>
                <PencilIcon />
                Edit bookmark
              </ContextMenuItem>
              <ContextMenuItem>
                <LinkIcon />
                Copy URL
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem
                variant="destructive"
                onClick={() => setBookmarks((list) => list.filter((b) => b.title !== bookmark.title))}
              >
                <BookmarkXIcon />
                Remove bookmark
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
      {bookmarks.length === 0 ? <span className="px-2 py-1 text-xs text-muted-foreground">No bookmarks</span> : null}
    </div>
  )
}`,
  },
  {
    name: "BulkSelectionMenu",
    description: "A selectable asset grid whose context menu applies bulk actions to the current selection.",
    code: `
const assets = ["hero.png", "logo.svg", "banner.jpg", "avatar.png", "promo.mp4", "icon.svg"]
const tints = ["from-rose-300 to-rose-500", "from-sky-300 to-sky-500", "from-amber-300 to-amber-500", "from-emerald-300 to-emerald-500", "from-violet-300 to-violet-500", "from-zinc-300 to-zinc-500"]

export default function BulkSelectionMenu() {
  const [selected, setSelected] = React.useState<string[]>(["hero.png", "banner.jpg"])
  const toggle = (name: string) =>
    setSelected((s) => (s.includes(name) ? s.filter((n) => n !== name) : [...s, name]))

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-full max-w-sm flex-col gap-2">
        <div className="grid grid-cols-3 gap-2">
          {assets.map((asset, index) => (
            <button
              key={asset}
              type="button"
              onClick={() => toggle(asset)}
              onContextMenu={() => !selected.includes(asset) && setSelected([asset])}
              className={cn("flex flex-col gap-1 p-1 text-start text-[11px]", selected.includes(asset) ? "bg-primary/10 ring-2 ring-primary" : "hover:bg-muted")}
            >
              <span className={cn("aspect-square bg-linear-to-br", tints[index])} />
              <span className="truncate">{asset}</span>
            </button>
          ))}
        </div>
        <span className="text-xs text-muted-foreground">Click to select · right-click for actions</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuLabel>
            {selected.length} {selected.length === 1 ? "item" : "items"} selected
          </ContextMenuLabel>
          <ContextMenuItem disabled={!selected.length}>
            <DownloadIcon />
            Download {selected.length > 1 ? "as .zip" : ""}
          </ContextMenuItem>
          <ContextMenuItem disabled={!selected.length}>
            <FolderInputIcon />
            Move to folder...
          </ContextMenuItem>
          <ContextMenuItem disabled={!selected.length}>
            <TagIcon />
            Add tags...
          </ContextMenuItem>
          <ContextMenuItem onClick={() => setSelected(assets)}>
            <CheckSquareIcon />
            Select all
            <ContextMenuShortcut>⌘A</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive" disabled={!selected.length}>
            <TrashIcon />
            Delete {selected.length || ""}
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  },
  {
    name: "TextFormattingInsetMenu",
    description: "A text formatting menu that uses inset items to align plain actions with checkbox and radio rows.",
    code: `
export default function TextFormattingInsetMenu() {
  const [bold, setBold] = React.useState(true)
  const [italic, setItalic] = React.useState(false)
  const [align, setAlign] = React.useState("left")

  return (
    <ContextMenu>
      <ContextMenuTrigger className="w-full max-w-sm border p-4">
        <p
          className={cn("text-sm", bold && "font-semibold", italic && "italic")}
          style={{ textAlign: align as "left" | "center" | "right" }}
        >
          Welcome to the spring collection. Free shipping on orders over $50 through Sunday.
        </p>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem inset>
            Cut
            <ContextMenuShortcut>⌘X</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel inset>Style</ContextMenuLabel>
          <ContextMenuCheckboxItem inset checked={bold} onCheckedChange={setBold}>
            Bold
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem inset checked={italic} onCheckedChange={setItalic}>
            Italic
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={align} onValueChange={setAlign}>
          <ContextMenuLabel inset>Alignment</ContextMenuLabel>
          <ContextMenuRadioItem inset value="left">Left</ContextMenuRadioItem>
          <ContextMenuRadioItem inset value="center">Center</ContextMenuRadioItem>
          <ContextMenuRadioItem inset value="right">Right</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  },
  {
    name: "NestedExportSubmenus",
    description: "A document menu with two levels of nested submenus for sharing and exporting formats.",
    code: `
export default function NestedExportSubmenus() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-full max-w-xs flex-col gap-2 border p-4">
        <FileSpreadsheetIcon className="size-6 text-emerald-600" />
        <span className="text-sm font-medium">2026 Budget forecast</span>
        <span className="text-xs text-muted-foreground">Spreadsheet · 14 tabs</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem>
            <ExternalLinkIcon />
            Open
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Share2Icon />
              Share & export
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuGroup>
                <ContextMenuItem>
                  <LinkIcon />
                  Copy share link
                </ContextMenuItem>
                <ContextMenuItem>
                  <UsersIcon />
                  Manage access
                </ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <DownloadIcon />
                  Download as
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-44">
                  <ContextMenuGroup>
                    <ContextMenuItem>Excel (.xlsx)</ContextMenuItem>
                    <ContextMenuItem>CSV (current tab)</ContextMenuItem>
                    <ContextMenuItem>PDF document</ContextMenuItem>
                    <ContextMenuItem>OpenDocument (.ods)</ContextMenuItem>
                  </ContextMenuGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <SendIcon />
                  Send to
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-40">
                  <ContextMenuGroup>
                    <ContextMenuItem>Email</ContextMenuItem>
                    <ContextMenuItem>#finance channel</ContextMenuItem>
                  </ContextMenuGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            <HistoryIcon />
            Version history
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  },
  {
    name: "CloudInstanceMenu",
    description: "A cloud instance card whose available power actions depend on its running state.",
    code: `
export default function CloudInstanceMenu() {
  const [state, setState] = React.useState<"running" | "stopped" | "terminated">("running")

  return (
    <ContextMenu disabled={state === "terminated"}>
      <ContextMenuTrigger className="flex w-full max-w-xs flex-col gap-3 border p-4 text-xs">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 font-medium">
            <ServerIcon className="size-4" />
            web-worker-03
          </span>
          <Badge variant={state === "running" ? "secondary" : state === "terminated" ? "destructive" : "outline"}>
            <span className={cn("size-1.5 rounded-full", state === "running" ? "bg-emerald-500" : state === "stopped" ? "bg-amber-500" : "bg-destructive")} />
            {state}
          </Badge>
        </div>
        <dl className="grid grid-cols-2 gap-1 text-muted-foreground">
          <dt>Type</dt>
          <dd className="text-foreground">c6.large</dd>
          <dt>Region</dt>
          <dd className="text-foreground">eu-west-2</dd>
          <dt>IP</dt>
          <dd className="font-mono text-foreground">10.4.18.22</dd>
        </dl>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem disabled={state === "running"} onClick={() => setState("running")}>
            <PlayIcon />
            Start
          </ContextMenuItem>
          <ContextMenuItem disabled={state !== "running"} onClick={() => setState("stopped")}>
            <SquareIcon />
            Stop
          </ContextMenuItem>
          <ContextMenuItem disabled={state !== "running"}>
            <RotateCwIcon />
            Reboot
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            <TerminalIcon />
            Copy SSH command
          </ContextMenuItem>
          <ContextMenuItem>
            <CameraIcon />
            Create snapshot
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive" onClick={() => setState("terminated")}>
            <PowerOffIcon />
            Terminate instance
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  },
  {
    name: "ChatChannelMenu",
    description: "Chat channels in a sidebar with mute toggles, notification level submenus, and leave actions.",
    code: `
const initialChannels = [
  { name: "general", unread: 4, muted: false, level: "all" },
  { name: "design-crit", unread: 0, muted: false, level: "mentions" },
  { name: "random", unread: 12, muted: true, level: "none" },
]

export default function ChatChannelMenu() {
  const [channels, setChannels] = React.useState(initialChannels)
  const patch = (name: string, changes: Partial<(typeof initialChannels)[number]>) =>
    setChannels((list) => list.map((c) => (c.name === name ? { ...c, ...changes } : c)))

  return (
    <div className="flex w-full max-w-56 flex-col gap-0.5 border p-2">
      <span className="px-2 pb-1 text-[11px] font-medium text-muted-foreground">Channels</span>
      {channels.map((channel) => (
        <ContextMenu key={channel.name}>
          <ContextMenuTrigger className={cn("flex items-center gap-2 px-2 py-1.5 text-xs hover:bg-muted data-popup-open:bg-muted", channel.muted && "text-muted-foreground")}>
            <HashIcon className="size-3.5" />
            <span className={cn("flex-1", channel.unread > 0 && !channel.muted && "font-semibold")}>{channel.name}</span>
            {channel.muted ? <BellOffIcon className="size-3" /> : null}
            {channel.unread > 0 && !channel.muted ? <Badge className="h-4 px-1.5">{channel.unread}</Badge> : null}
          </ContextMenuTrigger>
          <ContextMenuContent className="w-52">
            <ContextMenuGroup>
              <ContextMenuItem onClick={() => patch(channel.name, { unread: 0 })}>
                <CheckCheckIcon />
                Mark as read
              </ContextMenuItem>
              <ContextMenuCheckboxItem checked={channel.muted} onCheckedChange={(muted) => patch(channel.name, { muted })}>
                Mute channel
              </ContextMenuCheckboxItem>
            </ContextMenuGroup>
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <BellIcon />
                Notifications
              </ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-44">
                <ContextMenuRadioGroup value={channel.level} onValueChange={(level) => patch(channel.name, { level })}>
                  <ContextMenuRadioItem value="all">Every message</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="mentions">@mentions only</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="none">Nothing</ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem variant="destructive" onClick={() => setChannels((l) => l.filter((c) => c.name !== channel.name))}>
                <LogOutIcon />
                Leave #{channel.name}
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}`,
  },
  {
    name: "MonthDayCellMenu",
    description: "A month calendar grid where right-clicking a day offers event and availability actions for it.",
    code: `
const busy = [3, 9, 14, 15, 22, 27]

export default function MonthDayCellMenu() {
  const [day, setDay] = React.useState(14)
  const [ooo, setOoo] = React.useState<number[]>([24, 25])

  return (
    <div className="w-full max-w-xs border p-2">
      <div className="mb-2 px-1 text-xs font-medium">November 2026</div>
      <ContextMenu>
        <ContextMenuTrigger className="grid grid-cols-7 gap-1 text-center text-[11px]">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <span key={i} className="text-muted-foreground">{d}</span>
          ))}
          {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => (
            <span
              key={d}
              onContextMenu={() => setDay(d)}
              className={cn(
                "relative flex aspect-square items-center justify-center hover:bg-muted",
                d === day && "bg-primary text-primary-foreground hover:bg-primary",
                ooo.includes(d) && d !== day && "bg-muted text-muted-foreground line-through"
              )}
            >
              {d}
              {busy.includes(d) ? <span className="absolute bottom-0.5 size-1 rounded-full bg-current" /> : null}
            </span>
          ))}
        </ContextMenuTrigger>
        <ContextMenuContent className="w-48">
          <ContextMenuGroup>
            <ContextMenuLabel>November {day}</ContextMenuLabel>
            <ContextMenuItem>
              <CalendarPlusIcon />
              New event
            </ContextMenuItem>
            <ContextMenuItem>
              <ClockIcon />
              Block focus time
            </ContextMenuItem>
            <ContextMenuItem disabled={!busy.includes(day)}>
              <ListIcon />
              View events
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuCheckboxItem
              checked={ooo.includes(day)}
              onCheckedChange={(checked) => setOoo((list) => (checked ? [...list, day] : list.filter((d) => d !== day)))}
            >
              Out of office
            </ContextMenuCheckboxItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}`,
  },
  {
    name: "ProductCardQuickMenu",
    description: "A storefront product card with wishlist, compare, share, and quick-view actions on long press.",
    code: `
export default function ProductCardQuickMenu() {
  const [wishlisted, setWishlisted] = React.useState(false)
  const [compare, setCompare] = React.useState(false)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-56 flex-col gap-2 border p-2">
        <div className="relative aspect-4/3 bg-linear-to-br from-orange-200 to-rose-300">
          {wishlisted ? <HeartIcon className="absolute top-2 end-2 size-4 fill-rose-500 text-rose-500" /> : null}
        </div>
        <div className="flex flex-col gap-0.5 px-1 text-xs">
          <span className="font-medium">Trailhead 2 running shoe</span>
          <span className="text-muted-foreground">$118.00 · 6 colors</span>
          {compare ? <span className="text-[11px] text-primary">Added to compare</span> : null}
        </div>
        <span className="px-1 text-[11px] text-muted-foreground">
          <span className="hidden pointer-fine:inline">Right-click</span>
          <span className="hidden pointer-coarse:inline">Long press</span> for options
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem>
            <EyeIcon />
            Quick view
          </ContextMenuItem>
          <ContextMenuItem>
            <ShoppingCartIcon />
            Add to cart
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuCheckboxItem checked={wishlisted} onCheckedChange={setWishlisted}>
            Wishlist
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={compare} onCheckedChange={setCompare}>
            Compare
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            <Share2Icon />
            Share product
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
  },
  {
    name: "PdfPageThumbnailMenu",
    description: "PDF page thumbnails that can be rotated, duplicated, extracted, or deleted.",
    code: `
export default function PdfPageThumbnailMenu() {
  const [pages, setPages] = React.useState([
    { id: 1, rotation: 0 },
    { id: 2, rotation: 0 },
    { id: 3, rotation: 90 },
    { id: 4, rotation: 0 },
  ])

  const rotate = (id: number, delta: number) =>
    setPages((list) => list.map((p) => (p.id === id ? { ...p, rotation: (p.rotation + delta + 360) % 360 } : p)))

  return (
    <div className="grid w-full max-w-sm grid-cols-4 gap-3">
      {pages.map((page, index) => (
        <ContextMenu key={page.id}>
          <ContextMenuTrigger className="flex flex-col items-center gap-1 text-[11px] text-muted-foreground">
            <div
              className="flex aspect-[3/4] w-full flex-col gap-1 border bg-background p-1.5 shadow-xs transition-transform data-popup-open:ring-2"
              style={{ transform: "rotate(" + page.rotation + "deg)" }}
            >
              <span className="h-1 w-3/4 bg-muted-foreground/30" />
              <span className="h-1 w-full bg-muted" />
              <span className="h-1 w-full bg-muted" />
              <span className="h-1 w-2/3 bg-muted" />
            </div>
            {index + 1}
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuLabel>Page {index + 1}</ContextMenuLabel>
              <ContextMenuItem onClick={() => rotate(page.id, 90)}>
                <RotateCwIcon />
                Rotate clockwise
              </ContextMenuItem>
              <ContextMenuItem onClick={() => rotate(page.id, -90)}>
                <RotateCcwIcon />
                Rotate counterclockwise
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem onClick={() => setPages((list) => [...list.slice(0, index + 1), { id: Date.now(), rotation: page.rotation }, ...list.slice(index + 1)])}>
                <CopyPlusIcon />
                Duplicate page
              </ContextMenuItem>
              <ContextMenuItem>
                <FileOutputIcon />
                Extract as new PDF
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem
                variant="destructive"
                disabled={pages.length === 1}
                onClick={() => setPages((list) => list.filter((p) => p.id !== page.id))}
              >
                <TrashIcon />
                Delete page
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}`,
  },
  {
    name: "TableColumnHeaderMenu",
    description: "Data table column headers with sort, pin, and hide-column options in their context menus.",
    code: `
const columns = ["Name", "Plan", "MRR"]
const rows = [
  ["Brightside Bakery", "Growth", 420],
  ["Northwind Travel", "Scale", 1280],
  ["Lumen Studio", "Starter", 49],
]

export default function TableColumnHeaderMenu() {
  const [hidden, setHidden] = React.useState<string[]>([])
  const [sort, setSort] = React.useState<{ col: number; dir: "asc" | "desc" } | null>(null)
  const [pinned, setPinned] = React.useState("none")

  const visible = columns.map((c, i) => ({ c, i })).filter(({ c }) => !hidden.includes(c))
  const sorted = [...rows].sort((a, b) => {
    if (!sort) return 0
    const x = a[sort.col]!
    const y = b[sort.col]!
    const result = typeof x === "number" ? x - (y as number) : String(x).localeCompare(String(y))
    return sort.dir === "asc" ? result : -result
  })

  return (
    <div className="w-full max-w-md overflow-x-auto border">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b bg-muted/40">
            {visible.map(({ c, i }) => (
              <ContextMenu key={c}>
                <ContextMenuTrigger
                  render={<th />}
                  className={cn("px-3 py-2 text-start font-medium data-popup-open:bg-muted", pinned === c && "bg-muted")}
                >
                  <span className="flex items-center gap-1">
                    {pinned === c ? <PinIcon className="size-3" /> : null}
                    {c}
                    {sort?.col === i ? (sort.dir === "asc" ? <ArrowUpIcon className="size-3" /> : <ArrowDownIcon className="size-3" />) : null}
                  </span>
                </ContextMenuTrigger>
                <ContextMenuContent className="w-44">
                  <ContextMenuGroup>
                    <ContextMenuItem onClick={() => setSort({ col: i, dir: "asc" })}>
                      <ArrowUpIcon />
                      Sort ascending
                    </ContextMenuItem>
                    <ContextMenuItem onClick={() => setSort({ col: i, dir: "desc" })}>
                      <ArrowDownIcon />
                      Sort descending
                    </ContextMenuItem>
                    <ContextMenuItem disabled={!sort} onClick={() => setSort(null)}>
                      Clear sort
                    </ContextMenuItem>
                  </ContextMenuGroup>
                  <ContextMenuSeparator />
                  <ContextMenuRadioGroup value={pinned} onValueChange={setPinned}>
                    <ContextMenuLabel>Pin column</ContextMenuLabel>
                    <ContextMenuRadioItem value={c}>Pin {c}</ContextMenuRadioItem>
                    <ContextMenuRadioItem value="none">No pinned column</ContextMenuRadioItem>
                  </ContextMenuRadioGroup>
                  <ContextMenuSeparator />
                  <ContextMenuGroup>
                    <ContextMenuItem disabled={visible.length === 1} onClick={() => setHidden((h) => [...h, c])}>
                      <EyeOffIcon />
                      Hide column
                    </ContextMenuItem>
                    <ContextMenuItem disabled={!hidden.length} onClick={() => setHidden([])}>
                      <EyeIcon />
                      Show all columns
                    </ContextMenuItem>
                  </ContextMenuGroup>
                </ContextMenuContent>
              </ContextMenu>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row) => (
            <tr key={String(row[0])} className="border-b last:border-0">
              {visible.map(({ c, i }) => (
                <td key={c} className={cn("px-3 py-2", pinned === c && "bg-muted/40")}>
                  {typeof row[i] === "number" ? "$" + row[i] : row[i]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}`,
  },
  {
    name: "WorkflowNodeMenu",
    description: "An automation workflow step whose menu renames, disables, duplicates, or inserts steps after it.",
    code: `
export default function WorkflowNodeMenu() {
  const [enabled, setEnabled] = React.useState(true)
  const [next, setNext] = React.useState<string | null>(null)

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-2">
      <div className="flex w-full items-center gap-2 border border-dashed p-2 text-xs text-muted-foreground">
        <ZapIcon className="size-4" />
        When a form is submitted
      </div>
      <span className="h-4 w-px bg-border" />
      <ContextMenu>
        <ContextMenuTrigger className={cn("flex w-full items-center gap-3 border bg-background p-3 text-xs shadow-xs data-popup-open:ring-2 data-popup-open:ring-ring/40", !enabled && "opacity-50")}>
          <div className="flex size-8 items-center justify-center bg-sky-500/15 text-sky-600">
            <MailIcon className="size-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium">Send welcome email</span>
            <span className="text-muted-foreground">{enabled ? "Step 2 · Email" : "Step 2 · Skipped"}</span>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-52">
          <ContextMenuGroup>
            <ContextMenuItem>
              <PencilIcon />
              Rename step
            </ContextMenuItem>
            <ContextMenuItem>
              <CopyPlusIcon />
              Duplicate step
            </ContextMenuItem>
            <ContextMenuCheckboxItem checked={enabled} onCheckedChange={setEnabled}>
              Step enabled
            </ContextMenuCheckboxItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <PlusIcon />
              Add step after
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-44">
              <ContextMenuGroup>
                <ContextMenuItem onClick={() => setNext("Wait 1 day")}>
                  <HourglassIcon />
                  Delay
                </ContextMenuItem>
                <ContextMenuItem onClick={() => setNext("If plan is Pro")}>
                  <SplitIcon />
                  Condition
                </ContextMenuItem>
                <ContextMenuItem onClick={() => setNext("Post to #signups")}>
                  <MessageSquareIcon />
                  Send message
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem variant="destructive">
              <TrashIcon />
              Delete step
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      {next ? (
        <>
          <span className="h-4 w-px bg-border" />
          <div className="w-full border p-2 text-xs">{next}</div>
        </>
      ) : null}
    </div>
  )
}`,
  },
  {
    name: "LinkPreviewCardMenu",
    description: "A link preview card with open, copy URL, copy as Markdown, and save-for-later actions.",
    code: `
export default function LinkPreviewCardMenu() {
  const [saved, setSaved] = React.useState(false)
  const [copied, setCopied] = React.useState<string | null>(null)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <ContextMenu>
        <ContextMenuTrigger className="flex overflow-hidden border data-popup-open:ring-2 data-popup-open:ring-ring/40">
          <div className="w-24 shrink-0 bg-linear-to-br from-teal-400 to-cyan-600" />
          <div className="flex min-w-0 flex-col gap-0.5 p-3 text-xs">
            <span className="text-[11px] text-muted-foreground">fieldnote.io/blog</span>
            <span className="truncate font-medium">How we cut onboarding time in half</span>
            <span className="line-clamp-2 text-muted-foreground">
              Five small changes to our signup flow that doubled activation in a quarter.
            </span>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-52">
          <ContextMenuGroup>
            <ContextMenuItem>
              <ExternalLinkIcon />
              Open in new tab
            </ContextMenuItem>
            <ContextMenuItem onClick={() => setCopied("URL")}>
              <LinkIcon />
              Copy link
            </ContextMenuItem>
            <ContextMenuItem onClick={() => setCopied("Markdown link")}>
              <CodeIcon />
              Copy as Markdown
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem onClick={() => setSaved((v) => !v)}>
              {saved ? <BookmarkCheckIcon /> : <BookmarkPlusIcon />}
              {saved ? "Remove from reading list" : "Save to reading list"}
            </ContextMenuItem>
            <ContextMenuItem>
              <EyeOffIcon />
              Hide preview
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <p className="text-xs text-muted-foreground">
        {copied ? copied + " copied to clipboard" : saved ? "Saved to your reading list" : "Right-click the card"}
      </p>
    </div>
  )
}`,
  },
]

export default examples
