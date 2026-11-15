import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "MobileNavigationDrawer",
    description: "Left-side navigation drawer with sectioned links and an account footer.",
    code: `
const links = [
  { label: "Dashboard", icon: LayoutDashboardIcon, active: true },
  { label: "Projects", icon: FolderKanbanIcon, badge: "12" },
  { label: "Inbox", icon: InboxIcon, badge: "3" },
  { label: "Calendar", icon: CalendarIcon },
  { label: "Reports", icon: ChartColumnIcon },
]

export default function MobileNavigationDrawer() {
  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger render={<Button variant="outline" size="icon" aria-label="Open menu" />}>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex-row items-center gap-2">
          <div className="flex size-7 items-center justify-center bg-primary text-primary-foreground">
            <HexagonIcon className="size-4" />
          </div>
          <DrawerTitle>Pinecone HQ</DrawerTitle>
          <DrawerDescription className="sr-only">Main navigation</DrawerDescription>
        </DrawerHeader>
        <nav className="flex flex-1 flex-col gap-1 p-2 pt-4">
          {links.map((link) => (
            <DrawerClose
              key={link.label}
              render={<Button variant={link.active ? "secondary" : "ghost"} className="justify-start" />}
            >
              <link.icon data-icon="inline-start" />
              <span className="flex-1 text-start">{link.label}</span>
              {link.badge && <Badge variant="outline">{link.badge}</Badge>}
            </DrawerClose>
          ))}
        </nav>
        <DrawerFooter className="flex-row items-center gap-3 border-t pt-4">
          <Avatar size="sm">
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate font-medium">Jade Sorensen</p>
            <p className="truncate text-muted-foreground">jade@pinecone.io</p>
          </div>
          <Button variant="ghost" size="icon-sm" aria-label="Sign out">
            <LogOutIcon />
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "ShoppingCartDrawer",
    description: "Right-side cart drawer with quantity steppers, subtotal and checkout.",
    code: `
const initialItems = [
  { id: "mug", name: "Stoneware mug", variant: "Sand · 350ml", price: 22, qty: 2, gradient: "from-amber-200 to-orange-400" },
  { id: "tote", name: "Canvas tote", variant: "Natural", price: 35, qty: 1, gradient: "from-stone-200 to-stone-400" },
  { id: "candle", name: "Cedar candle", variant: "200g", price: 28, qty: 1, gradient: "from-emerald-200 to-teal-500" },
]

export default function ShoppingCartDrawer() {
  const [items, setItems] = React.useState(initialItems)
  const count = items.reduce((sum, item) => sum + item.qty, 0)
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0)

  function update(id: string, delta: number) {
    setItems((current) =>
      current
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    )
  }

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        <ShoppingCartIcon data-icon="inline-start" />
        Cart ({count})
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Your cart</DrawerTitle>
          <DrawerDescription>{count} items · Free shipping over $75</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          {items.length === 0 && <p className="py-10 text-center text-muted-foreground">Your cart is empty.</p>}
          {items.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className={cn("size-14 shrink-0 bg-gradient-to-br", item.gradient)} />
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex justify-between gap-2">
                  <span className="truncate font-medium">{item.name}</span>
                  <span className="tabular-nums">{"$" + item.price * item.qty}</span>
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
        </div>
        <DrawerFooter className="border-t pt-4">
          <div className="flex justify-between font-medium">
            <span>Subtotal</span>
            <span className="tabular-nums">{"$" + subtotal.toFixed(2)}</span>
          </div>
          <Button disabled={items.length === 0}>Checkout</Button>
          <DrawerClose render={<Button variant="ghost" />}>Continue shopping</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "ProductFiltersDrawer",
    description: "Filter drawer with category checkboxes, a price slider and an active filter count.",
    code: `
const categories = ["Jackets", "Knitwear", "Shirts", "Trousers", "Accessories"]

export default function ProductFiltersDrawer() {
  const [selected, setSelected] = React.useState<string[]>(["Knitwear"])
  const [price, setPrice] = React.useState(150)
  const active = selected.length + (price < 300 ? 1 : 0)

  function toggle(category: string) {
    setSelected((current) =>
      current.includes(category) ? current.filter((item) => item !== category) : [...current, category]
    )
  }

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        <ListFilterIcon data-icon="inline-start" />
        Filters
        {active > 0 && <Badge className="ms-1">{active}</Badge>}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
          <DrawerDescription>Showing 84 of 312 products</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-4">
          <FieldSet>
            <FieldLegend variant="label">Category</FieldLegend>
            <FieldGroup className="gap-3">
              {categories.map((category) => (
                <Field key={category} orientation="horizontal">
                  <Checkbox
                    id={"filter-" + category}
                    checked={selected.includes(category)}
                    onCheckedChange={() => toggle(category)}
                  />
                  <FieldLabel htmlFor={"filter-" + category}>{category}</FieldLabel>
                </Field>
              ))}
            </FieldGroup>
          </FieldSet>
          <Field>
            <div className="flex justify-between">
              <FieldLabel>Max price</FieldLabel>
              <span className="tabular-nums">{"$" + price}</span>
            </div>
            <Slider
              value={[price]}
              min={20}
              max={300}
              step={10}
              onValueChange={(value) => setPrice(typeof value === "number" ? value : (value[0] ?? 0))}
              aria-label="Max price"
            />
          </Field>
        </div>
        <DrawerFooter className="flex-row border-t pt-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => {
              setSelected([])
              setPrice(300)
            }}
          >
            Reset
          </Button>
          <DrawerClose render={<Button className="flex-1" />}>Show results</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "SnapPointsNearbyDrawer",
    description: "Bottom sheet with snap points that peeks a nearby places list and expands to full height.",
    code: `
const places = [
  { name: "Café Lumière", type: "Coffee", distance: "120 m", rating: 4.7 },
  { name: "Hanami Ramen", type: "Japanese", distance: "300 m", rating: 4.5 },
  { name: "Green Fork", type: "Vegetarian", distance: "450 m", rating: 4.6 },
  { name: "Old Town Bakery", type: "Bakery", distance: "600 m", rating: 4.8 },
  { name: "Brasa Grill", type: "Portuguese", distance: "850 m", rating: 4.3 },
  { name: "Lotus Tea House", type: "Tea", distance: "1.1 km", rating: 4.4 },
]

const snapPoints = ["160px", "360px", 1]

export default function SnapPointsNearbyDrawer() {
  const [snap, setSnap] = React.useState<number | string | null>(snapPoints[0] ?? null)

  return (
    <Drawer snapPoints={snapPoints} snapPoint={snap} onSnapPointChange={setSnap} showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>
        <MapPinIcon data-icon="inline-start" />
        Explore nearby
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>6 places near you</DrawerTitle>
          <DrawerDescription>Drag up to see more</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-1 overflow-y-auto p-4">
          {places.map((place) => (
            <div key={place.name} className="flex items-center gap-3 border-b py-2 last:border-b-0">
              <div className="flex size-9 shrink-0 items-center justify-center bg-muted">
                <UtensilsIcon className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{place.name}</p>
                <p className="text-muted-foreground">
                  {place.type} · {place.distance}
                </p>
              </div>
              <span className="flex items-center gap-1 tabular-nums">
                <StarIcon className="size-3 fill-current" />
                {place.rating}
              </span>
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "NotificationsPanelDrawer",
    description: "Notifications drawer with unread markers and a mark-all-as-read action.",
    code: `
const initial = [
  { id: 1, who: "Rosa Lindgren", what: "commented on Homepage redesign", when: "2m", unread: true },
  { id: 2, who: "Theo Park", what: "assigned you Fix checkout bug", when: "18m", unread: true },
  { id: 3, who: "Billing", what: "Invoice INV-0042 was paid", when: "1h", unread: true },
  { id: 4, who: "Nadia Haddad", what: "mentioned you in #design", when: "3h", unread: false },
  { id: 5, who: "Ivo Petrov", what: "shared Q4 OKRs with you", when: "Yesterday", unread: false },
]

export default function NotificationsPanelDrawer() {
  const [items, setItems] = React.useState(initial)
  const unread = items.filter((item) => item.unread).length

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" size="icon" aria-label="Notifications" className="relative" />}>
        <BellIcon />
        {unread > 0 && <span className="absolute -end-1 -top-1 size-2.5 rounded-full bg-destructive" />}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex-row items-center justify-between">
          <div>
            <DrawerTitle>Notifications</DrawerTitle>
            <DrawerDescription>{unread} unread</DrawerDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            disabled={unread === 0}
            onClick={() => setItems((current) => current.map((item) => ({ ...item, unread: false })))}
          >
            <CheckCheckIcon data-icon="inline-start" />
            Mark all read
          </Button>
        </DrawerHeader>
        <div className="flex flex-1 flex-col overflow-y-auto p-2 pt-4">
          {items.map((item) => (
            <div key={item.id} className={cn("flex gap-3 p-2", item.unread && "bg-muted/50")}>
              <Avatar size="sm">
                <AvatarFallback>{item.who.split(" ").map((part) => part[0]).join("")}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p>
                  <span className="font-medium">{item.who}</span> {item.what}
                </p>
                <p className="text-muted-foreground">{item.when}</p>
              </div>
              {item.unread && <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />}
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "ShareSheetDrawer",
    description: "Bottom share sheet with a grid of share targets and a copy link row.",
    code: `
const targets = [
  { label: "Message", icon: MessageCircleIcon },
  { label: "Email", icon: MailIcon },
  { label: "Notes", icon: StickyNoteIcon },
  { label: "Print", icon: PrinterIcon },
  { label: "QR code", icon: QrCodeIcon },
  { label: "Bookmark", icon: BookmarkIcon },
  { label: "Download", icon: DownloadIcon },
  { label: "More", icon: EllipsisIcon },
]

export default function ShareSheetDrawer() {
  const [copied, setCopied] = React.useState(false)

  return (
    <Drawer showSwipeHandle onOpenChange={(open) => !open && setCopied(false)}>
      <DrawerTrigger render={<Button variant="outline" />}>
        <ShareIcon data-icon="inline-start" />
        Share recipe
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Share &quot;Charred leek risotto&quot;</DrawerTitle>
          <DrawerDescription>Send it to a friend or save it for later.</DrawerDescription>
        </DrawerHeader>
        <div className="mx-auto grid w-full max-w-md grid-cols-4 gap-3 p-4">
          {targets.map((target) => (
            <DrawerClose
              key={target.label}
              render={<button type="button" />}
              className="flex flex-col items-center gap-1.5 p-2 hover:bg-muted"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-muted">
                <target.icon className="size-5" />
              </span>
              <span className="text-muted-foreground">{target.label}</span>
            </DrawerClose>
          ))}
        </div>
        <DrawerFooter className="mx-auto w-full max-w-md">
          <InputGroup>
            <InputGroupInput readOnly value="sprig.cooking/r/leek-risotto" aria-label="Link" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton onClick={() => setCopied(true)}>{copied ? "Copied" : "Copy link"}</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "ActionSheetDrawer",
    description: "iOS-style action sheet drawer with grouped actions and a destructive option.",
    code: `
const actions = [
  { label: "Edit photo details", icon: PencilIcon },
  { label: "Add to album", icon: FolderPlusIcon },
  { label: "Duplicate", icon: CopyIcon },
  { label: "Hide from library", icon: EyeOffIcon },
]

export default function ActionSheetDrawer() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" size="icon" aria-label="More actions" />}>
        <EllipsisVerticalIcon />
      </DrawerTrigger>
      <DrawerContent className="bg-transparent data-[swipe-direction=down]:border-t-0 [--drawer-bleed-background:transparent]">
        <div className="mx-auto flex w-full max-w-sm flex-col gap-2 p-3">
          <div className="flex flex-col overflow-hidden border bg-popover">
            <DrawerHeader className="border-b pb-3">
              <DrawerTitle>IMG_2041.heic</DrawerTitle>
              <DrawerDescription>Taken Oct 3 · 4.1 MB</DrawerDescription>
            </DrawerHeader>
            {actions.map((action) => (
              <DrawerClose
                key={action.label}
                render={<button type="button" />}
                className="flex items-center gap-3 border-b px-4 py-3 text-start last:border-b-0 hover:bg-muted"
              >
                <action.icon className="size-4 text-muted-foreground" />
                {action.label}
              </DrawerClose>
            ))}
            <DrawerClose
              render={<button type="button" />}
              className="flex items-center gap-3 border-t px-4 py-3 text-start text-destructive hover:bg-destructive/10"
            >
              <Trash2Icon className="size-4" />
              Delete photo
            </DrawerClose>
          </div>
          <DrawerClose render={<Button variant="outline" className="h-11 bg-popover" />}>Cancel</DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "EditProfileSideDrawer",
    description: "Right-side profile editing drawer with a form and sticky save footer.",
    code: `
export default function EditProfileSideDrawer() {
  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        <UserPenIcon data-icon="inline-start" />
        Edit profile
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>This is how others see you across the workspace.</DrawerDescription>
        </DrawerHeader>
        <form className="flex min-h-0 flex-1 flex-col" onSubmit={(event) => event.preventDefault()}>
          <FieldGroup className="flex-1 overflow-y-auto p-4">
            <div className="flex items-center gap-3">
              <Avatar size="lg">
                <AvatarFallback>LM</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm" type="button">
                Change
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="pf-first">First name</FieldLabel>
                <Input id="pf-first" defaultValue="Leila" />
              </Field>
              <Field>
                <FieldLabel htmlFor="pf-last">Last name</FieldLabel>
                <Input id="pf-last" defaultValue="Moradi" />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="pf-title">Job title</FieldLabel>
              <Input id="pf-title" defaultValue="Staff Product Designer" />
            </Field>
            <Field>
              <FieldLabel htmlFor="pf-bio">Bio</FieldLabel>
              <Textarea id="pf-bio" defaultValue="Designing calm software for busy teams. Based in Lisbon." />
              <FieldDescription>Max 160 characters.</FieldDescription>
            </Field>
          </FieldGroup>
          <DrawerFooter className="flex-row border-t pt-4">
            <DrawerClose render={<Button variant="outline" className="flex-1" type="button" />}>Cancel</DrawerClose>
            <Button type="submit" className="flex-1">
              Save
            </Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "TopAnnouncementDrawer",
    description: "Drawer that slides down from the top with a maintenance announcement.",
    code: `
export default function TopAnnouncementDrawer() {
  return (
    <Drawer swipeDirection="up" showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>
        <MegaphoneIcon data-icon="inline-start" />
        Show announcement
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-lg flex-col gap-3 p-4 sm:flex-row sm:items-center">
          <div className="flex size-10 shrink-0 items-center justify-center bg-amber-500/15 text-amber-600 dark:text-amber-400">
            <WrenchIcon className="size-5" />
          </div>
          <div className="flex-1">
            <DrawerTitle>Scheduled maintenance on Sunday</DrawerTitle>
            <DrawerDescription>
              The API will be read-only from 02:00 to 03:30 UTC. Webhooks will be queued and delivered after.
            </DrawerDescription>
          </div>
          <DrawerClose render={<Button size="sm" />}>Got it</DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "NestedStackedDrawers",
    description: "Stacked drawers where a payment drawer opens a nested add-card drawer.",
    code: `
export default function NestedStackedDrawers() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button />}>Checkout</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle>Payment</DrawerTitle>
            <DrawerDescription>Total due today: $129.00</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-2 p-4">
            <RadioGroup defaultValue="visa">
              <FieldLabel htmlFor="pay-visa">
                <Field orientation="horizontal">
                  <CreditCardIcon className="size-4" />
                  <FieldContent>
                    <FieldTitle>Visa •••• 4417</FieldTitle>
                    <FieldDescription>Expires 08/28</FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="visa" id="pay-visa" />
                </Field>
              </FieldLabel>
            </RadioGroup>
            <Drawer>
              <DrawerTrigger render={<Button variant="outline" />}>
                <PlusIcon data-icon="inline-start" />
                Add new card
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto flex w-full max-w-sm flex-col">
                  <DrawerHeader>
                    <DrawerTitle>New card</DrawerTitle>
                    <DrawerDescription>Swipe down to go back to payment.</DrawerDescription>
                  </DrawerHeader>
                  <FieldGroup className="p-4">
                    <Field>
                      <FieldLabel htmlFor="nc-number">Card number</FieldLabel>
                      <Input id="nc-number" placeholder="1234 5678 9012 3456" inputMode="numeric" />
                    </Field>
                    <div className="grid grid-cols-2 gap-3">
                      <Field>
                        <FieldLabel htmlFor="nc-exp">Expiry</FieldLabel>
                        <Input id="nc-exp" placeholder="MM/YY" />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="nc-cvc">CVC</FieldLabel>
                        <Input id="nc-cvc" placeholder="123" />
                      </Field>
                    </div>
                  </FieldGroup>
                  <DrawerFooter>
                    <DrawerClose render={<Button />}>Save card</DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button />}>Pay $129.00</DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "NowPlayingDrawer",
    description: "Music player bottom drawer with gradient artwork, scrubber and playback controls.",
    code: `
export default function NowPlayingDrawer() {
  const [playing, setPlaying] = React.useState(true)
  const [position, setPosition] = React.useState(84)

  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger
        render={<button type="button" />}
        className="flex w-full max-w-xs items-center gap-3 border bg-background p-2 text-start hover:bg-muted"
      >
        <span className="size-9 shrink-0 bg-gradient-to-br from-pink-500 to-orange-400" />
        <span className="min-w-0 flex-1">
          <span className="block truncate font-medium">Paper Lanterns</span>
          <span className="block truncate text-muted-foreground">The Quiet Harbors</span>
        </span>
        {playing ? <PauseIcon className="size-4" /> : <PlayIcon className="size-4" />}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-xs flex-col gap-4 p-4">
          <div className="aspect-square w-full bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400" />
          <DrawerHeader className="p-0 text-start">
            <DrawerTitle className="text-base">Paper Lanterns</DrawerTitle>
            <DrawerDescription>The Quiet Harbors · Low Light (2026)</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-1">
            <Slider
              value={[position]}
              max={214}
              onValueChange={(value) => setPosition(typeof value === "number" ? value : (value[0] ?? 0))}
              aria-label="Playback position"
            />
            <div className="flex justify-between text-muted-foreground tabular-nums">
              <span>
                {Math.floor(position / 60)}:{String(position % 60).padStart(2, "0")}
              </span>
              <span>3:34</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" aria-label="Shuffle">
              <ShuffleIcon />
            </Button>
            <Button variant="ghost" size="icon-lg" aria-label="Previous">
              <SkipBackIcon />
            </Button>
            <Button size="icon-lg" className="size-12 rounded-full" aria-label={playing ? "Pause" : "Play"} onClick={() => setPlaying(!playing)}>
              {playing ? <PauseIcon /> : <PlayIcon />}
            </Button>
            <Button variant="ghost" size="icon-lg" aria-label="Next">
              <SkipForwardIcon />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Repeat">
              <RepeatIcon />
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "ChatThreadDrawer",
    description: "Support chat drawer with a message thread and a composer that appends replies.",
    code: `
const initialMessages = [
  { id: 1, from: "agent", text: "Hi Marco! I see your order #5521 is delayed. Want me to check on it?" },
  { id: 2, from: "me", text: "Yes please, it was due yesterday." },
  { id: 3, from: "agent", text: "It left our warehouse this morning and should arrive Thursday." },
]

export default function ChatThreadDrawer() {
  const [messages, setMessages] = React.useState(initialMessages)
  const [draft, setDraft] = React.useState("")

  function send() {
    if (!draft.trim()) return
    setMessages((current) => [...current, { id: current.length + 1, from: "me", text: draft.trim() }])
    setDraft("")
  }

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button />}>
        <MessageCircleIcon data-icon="inline-start" />
        Chat with support
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex-row items-center gap-3 border-b pb-4">
          <Avatar>
            <AvatarFallback>SO</AvatarFallback>
            <AvatarBadge className="bg-emerald-500" />
          </Avatar>
          <div>
            <DrawerTitle>Sofia from Parcelwise</DrawerTitle>
            <DrawerDescription>Typically replies in 2 minutes</DrawerDescription>
          </div>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "max-w-[80%] px-3 py-2",
                message.from === "me" ? "self-end bg-primary text-primary-foreground" : "self-start bg-muted"
              )}
            >
              {message.text}
            </div>
          ))}
        </div>
        <DrawerFooter className="border-t pt-4">
          <InputGroup>
            <InputGroupInput
              placeholder="Write a reply..."
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && send()}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs" aria-label="Send" onClick={send}>
                <SendIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "TaskDetailsDrawer",
    description: "Project management drawer with task status, assignee, due date and subtasks.",
    code: `
const subtasks = [
  { id: "s1", label: "Audit current onboarding emails", done: true },
  { id: "s2", label: "Draft new welcome sequence", done: true },
  { id: "s3", label: "Review copy with legal", done: false },
  { id: "s4", label: "Schedule A/B test", done: false },
]

export default function TaskDetailsDrawer() {
  const [items, setItems] = React.useState(subtasks)
  const done = items.filter((item) => item.done).length

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={<button type="button" />}
        className="flex w-full max-w-xs flex-col gap-2 border bg-background p-3 text-start hover:bg-muted/50"
      >
        <span className="font-medium">Refresh onboarding emails</span>
        <span className="flex items-center gap-2 text-muted-foreground">
          <Badge variant="secondary">In progress</Badge>
          {done}/{items.length} subtasks
        </span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <span className="font-mono text-muted-foreground">GRW-218</span>
          <DrawerTitle className="text-base">Refresh onboarding emails</DrawerTitle>
          <DrawerDescription>Lifecycle · Growth team</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-4">
          <dl className="grid grid-cols-[6rem_1fr] items-center gap-y-3">
            <dt className="text-muted-foreground">Status</dt>
            <dd>
              <NativeSelect size="sm" defaultValue="progress" aria-label="Status">
                <NativeSelectOption value="todo">To do</NativeSelectOption>
                <NativeSelectOption value="progress">In progress</NativeSelectOption>
                <NativeSelectOption value="review">In review</NativeSelectOption>
                <NativeSelectOption value="done">Done</NativeSelectOption>
              </NativeSelect>
            </dd>
            <dt className="text-muted-foreground">Assignee</dt>
            <dd className="flex items-center gap-2">
              <Avatar size="sm">
                <AvatarFallback>OK</AvatarFallback>
              </Avatar>
              Olu Kalu
            </dd>
            <dt className="text-muted-foreground">Due</dt>
            <dd className="flex items-center gap-1">
              <CalendarIcon className="size-3.5" />
              Nov 28
            </dd>
          </dl>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="font-medium">Subtasks</p>
              <span className="text-muted-foreground">
                {done} of {items.length}
              </span>
            </div>
            <Progress value={(done / items.length) * 100} />
            {items.map((item) => (
              <Field key={item.id} orientation="horizontal">
                <Checkbox
                  id={item.id}
                  checked={item.done}
                  onCheckedChange={(checked) =>
                    setItems((current) =>
                      current.map((entry) => (entry.id === item.id ? { ...entry, done: checked === true } : entry))
                    )
                  }
                />
                <FieldLabel htmlFor={item.id} className={cn(item.done && "text-muted-foreground line-through")}>
                  {item.label}
                </FieldLabel>
              </Field>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "CheckoutPaymentDrawer",
    description: "Mobile checkout drawer with payment method options and a processing state.",
    code: `
const methods = [
  { id: "card", label: "Card ending 4417", icon: CreditCardIcon },
  { id: "wallet", label: "Digital wallet", icon: WalletIcon },
  { id: "bank", label: "Bank transfer", icon: LandmarkIcon },
]

export default function CheckoutPaymentDrawer() {
  const [open, setOpen] = React.useState(false)
  const [method, setMethod] = React.useState("card")
  const [paying, setPaying] = React.useState(false)

  function pay() {
    setPaying(true)
    window.setTimeout(() => {
      setPaying(false)
      setOpen(false)
    }, 1500)
  }

  return (
    <Drawer open={open} onOpenChange={(next) => !paying && setOpen(next)}>
      <DrawerTrigger render={<Button className="w-full max-w-xs" />}>Place order · $58.40</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle>Choose payment</DrawerTitle>
            <DrawerDescription>Order total $58.40 incl. VAT</DrawerDescription>
          </DrawerHeader>
          <RadioGroup value={method} onValueChange={(value) => setMethod(String(value))} className="gap-2 p-4" disabled={paying}>
            {methods.map((item) => (
              <FieldLabel key={item.id} htmlFor={"m-" + item.id}>
                <Field orientation="horizontal">
                  <item.icon className="size-4" />
                  <FieldTitle className="flex-1">{item.label}</FieldTitle>
                  <RadioGroupItem value={item.id} id={"m-" + item.id} />
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
          <DrawerFooter>
            <Button onClick={pay} disabled={paying}>
              {paying ? <Spinner data-icon="inline-start" /> : <LockIcon data-icon="inline-start" />}
              {paying ? "Processing..." : "Pay $58.40"}
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "CommentsBottomSheet",
    description: "Comments bottom sheet with snap points, a scrollable thread and a pinned composer.",
    code: `
const comments = [
  { name: "Ines Laurent", time: "2h", text: "The color grading in the last shot is unreal.", likes: 48 },
  { name: "Kwame Asante", time: "1h", text: "What lens did you use for the street scenes?", likes: 12 },
  { name: "Hana Kobayashi", time: "54m", text: "Saving this for my Lisbon trip next month!", likes: 9 },
  { name: "Mateo Silva", time: "20m", text: "The tram at 0:42 is perfectly timed.", likes: 5 },
  { name: "Zoe Fischer", time: "4m", text: "Need a part two of this series.", likes: 2 },
]

export default function CommentsBottomSheet() {
  return (
    <Drawer snapPoints={[0.5, 1]} showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>
        <MessageSquareIcon data-icon="inline-start" />
        128 comments
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Comments</DrawerTitle>
          <DrawerDescription className="sr-only">Comments on Lisbon in motion</DrawerDescription>
        </DrawerHeader>
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col gap-4 overflow-y-auto p-4">
          {comments.map((comment) => (
            <div key={comment.name} className="flex gap-3">
              <Avatar size="sm">
                <AvatarFallback>{comment.name.split(" ").map((part) => part[0]).join("")}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p>
                  <span className="font-medium">{comment.name}</span>{" "}
                  <span className="text-muted-foreground">{comment.time}</span>
                </p>
                <p>{comment.text}</p>
              </div>
              <button type="button" className="flex flex-col items-center text-muted-foreground" aria-label="Like">
                <HeartIcon className="size-3.5" />
                {comment.likes}
              </button>
            </div>
          ))}
        </div>
        <DrawerFooter className="mx-auto w-full max-w-md border-t pt-4">
          <InputGroup>
            <InputGroupInput placeholder="Add a comment..." />
            <InputGroupAddon align="inline-end">
              <InputGroupButton>Post</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "NonModalInspectorDrawer",
    description: "Non-modal inspector drawer for editing layer properties while the canvas stays interactive.",
    code: `
export default function NonModalInspectorDrawer() {
  const [radius, setRadius] = React.useState(12)
  const [opacity, setOpacity] = React.useState(100)

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4">
      <div className="flex h-40 w-full items-center justify-center border bg-muted/30">
        <div
          className="size-20 bg-gradient-to-br from-sky-400 to-indigo-500"
          style={{ borderRadius: radius, opacity: opacity / 100 }}
        />
      </div>
      <Drawer modal={false} disablePointerDismissal swipeDirection="right">
        <DrawerTrigger render={<Button variant="outline" />}>
          <SlidersHorizontalIcon data-icon="inline-start" />
          Inspect layer
        </DrawerTrigger>
        <DrawerContent className="shadow-lg">
          <DrawerHeader className="flex-row items-center justify-between">
            <div>
              <DrawerTitle>Rectangle 4</DrawerTitle>
              <DrawerDescription>Frame / Hero</DrawerDescription>
            </div>
            <DrawerClose render={<Button variant="ghost" size="icon-sm" aria-label="Close inspector" />}>
              <XIcon />
            </DrawerClose>
          </DrawerHeader>
          <FieldGroup className="p-4">
            <div className="grid grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="ins-w">W</FieldLabel>
                <Input id="ins-w" defaultValue="80" />
              </Field>
              <Field>
                <FieldLabel htmlFor="ins-h">H</FieldLabel>
                <Input id="ins-h" defaultValue="80" />
              </Field>
            </div>
            <Field>
              <div className="flex justify-between">
                <FieldLabel>Corner radius</FieldLabel>
                <span className="tabular-nums">{radius}px</span>
              </div>
              <Slider
                value={[radius]}
                max={40}
                onValueChange={(value) => setRadius(typeof value === "number" ? value : (value[0] ?? 0))}
                aria-label="Corner radius"
              />
            </Field>
            <Field>
              <div className="flex justify-between">
                <FieldLabel>Opacity</FieldLabel>
                <span className="tabular-nums">{opacity}%</span>
              </div>
              <Slider
                value={[opacity]}
                max={100}
                onValueChange={(value) => setOpacity(typeof value === "number" ? value : (value[0] ?? 0))}
                aria-label="Opacity"
              />
            </Field>
          </FieldGroup>
        </DrawerContent>
      </Drawer>
    </div>
  )
}`,
  },
  {
    name: "FileDetailsDrawer",
    description: "File manager drawer showing metadata, sharing and recent activity for a file.",
    code: `
const activity = [
  { who: "Ravi", what: "edited", when: "Today, 10:42" },
  { who: "Anouk", what: "commented", when: "Yesterday" },
  { who: "You", what: "uploaded", when: "Nov 2" },
]

export default function FileDetailsDrawer() {
  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={<button type="button" />}
        className="flex w-full max-w-xs items-center gap-3 border bg-background p-3 text-start hover:bg-muted/50"
      >
        <FileSpreadsheetIcon className="size-8 text-emerald-600" />
        <span className="min-w-0 flex-1">
          <span className="block truncate font-medium">2026-budget-forecast.xlsx</span>
          <span className="block text-muted-foreground">1.8 MB · Edited today</span>
        </span>
        <InfoIcon className="size-4 text-muted-foreground" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="truncate">2026-budget-forecast.xlsx</DrawerTitle>
          <DrawerDescription>Finance / Planning</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-4">
          <div className="flex h-32 items-center justify-center bg-emerald-500/10">
            <FileSpreadsheetIcon className="size-12 text-emerald-600" />
          </div>
          <dl className="grid grid-cols-2 gap-y-2">
            <dt className="text-muted-foreground">Type</dt>
            <dd>Spreadsheet</dd>
            <dt className="text-muted-foreground">Size</dt>
            <dd>1.8 MB</dd>
            <dt className="text-muted-foreground">Owner</dt>
            <dd>Anouk de Vries</dd>
            <dt className="text-muted-foreground">Created</dt>
            <dd>Nov 2, 2026</dd>
          </dl>
          <Separator />
          <div className="flex flex-col gap-3">
            <p className="font-medium">Activity</p>
            {activity.map((entry) => (
              <div key={entry.when} className="flex items-center gap-2">
                <HistoryIcon className="size-3.5 text-muted-foreground" />
                <span className="flex-1">
                  {entry.who} {entry.what}
                </span>
                <span className="text-muted-foreground">{entry.when}</span>
              </div>
            ))}
          </div>
        </div>
        <DrawerFooter className="flex-row border-t pt-4">
          <Button variant="outline" className="flex-1">
            <Share2Icon data-icon="inline-start" />
            Share
          </Button>
          <Button className="flex-1">
            <DownloadIcon data-icon="inline-start" />
            Download
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "DatePickerDrawer",
    description: "Mobile date picker drawer with a calendar and a selected date summary.",
    code: `
const initialDate: Date | undefined = new Date(2026, 10, 20)

export default function DatePickerDrawer() {
  const [date, setDate] = React.useState(initialDate)
  const label = date
    ? date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" })
    : "Pick a date"

  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" className="w-full max-w-60 justify-start" />}>
        <CalendarIcon data-icon="inline-start" />
        {label}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-xs flex-col">
          <DrawerHeader>
            <DrawerTitle>Check-in date</DrawerTitle>
            <DrawerDescription>Harborview Suites, Porto</DrawerDescription>
          </DrawerHeader>
          <div className="flex justify-center p-4">
            <Calendar mode="single" selected={date} onSelect={setDate} className="border" />
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button disabled={!date} />}>Confirm {date ? label : ""}</DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "QuickAddExpenseDrawer",
    description: "Expense entry drawer with a large amount input and category toggle group.",
    code: `
const categories = [
  { value: "food", label: "Food", icon: UtensilsIcon },
  { value: "travel", label: "Travel", icon: PlaneIcon },
  { value: "office", label: "Office", icon: BriefcaseIcon },
  { value: "other", label: "Other", icon: ShapesIcon },
]

export default function QuickAddExpenseDrawer() {
  const [amount, setAmount] = React.useState("")
  const [category, setCategory] = React.useState<string[]>(["food"])

  return (
    <Drawer onOpenChange={(open) => !open && setAmount("")}>
      <DrawerTrigger render={<Button size="icon-lg" className="rounded-full" aria-label="Add expense" />}>
        <PlusIcon />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle>New expense</DrawerTitle>
            <DrawerDescription>Charged to Team Offsite budget</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col items-center gap-4 p-4">
            <label className="flex items-baseline gap-1 font-heading text-4xl font-semibold">
              <span className="text-muted-foreground">$</span>
              <input
                inputMode="decimal"
                placeholder="0.00"
                value={amount}
                onChange={(event) => setAmount(event.target.value.replace(/[^0-9.]/g, ""))}
                className="w-40 bg-transparent text-center tabular-nums outline-none placeholder:text-muted-foreground/50"
                aria-label="Amount"
              />
            </label>
            <ToggleGroup
              variant="outline"
              value={category}
              onValueChange={(value) => value.length && setCategory(value.map(String))}
              className="grid w-full grid-cols-4"
            >
              {categories.map((item) => (
                <ToggleGroupItem key={item.value} value={item.value} className="h-14 flex-col gap-1">
                  <item.icon />
                  {item.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
            <Input placeholder="Note (e.g. Team lunch at Basil)" aria-label="Note" />
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button disabled={!Number(amount)} />}>Add expense</DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "HelpCenterDrawer",
    description: "Help drawer with article search, FAQ accordion and a contact support action.",
    code: `
const faqs = [
  { q: "How do I reset my password?", a: "Go to Settings → Security and choose Reset password. We'll email you a secure link." },
  { q: "Can I change my billing date?", a: "Yes. Billing admins can move the renewal date once per cycle from the Billing page." },
  { q: "Where can I find my invoices?", a: "Invoices live under Billing → History and can be downloaded as PDF." },
  { q: "How do I export my data?", a: "Use Workspace → Export to download a ZIP with all projects in CSV and JSON." },
]

export default function HelpCenterDrawer() {
  const [query, setQuery] = React.useState("")
  const visible = faqs.filter((faq) => faq.q.toLowerCase().includes(query.toLowerCase()))

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" size="icon" aria-label="Help" />}>
        <CircleHelpIcon />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Help center</DrawerTitle>
          <DrawerDescription>Answers to common questions</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
          <InputGroup>
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search articles" value={query} onChange={(event) => setQuery(event.target.value)} />
          </InputGroup>
          {visible.length ? (
            <Accordion>
              {visible.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="py-6 text-center text-muted-foreground">No articles found.</p>
          )}
        </div>
        <DrawerFooter className="border-t pt-4">
          <p className="text-muted-foreground">Still stuck? Our team replies within an hour.</p>
          <Button>
            <MessagesSquareIcon data-icon="inline-start" />
            Contact support
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "OrderTrackingDrawer",
    description: "Delivery tracking drawer with a vertical status timeline and courier contact.",
    code: `
const steps = [
  { label: "Order confirmed", time: "Nov 13, 09:12", done: true },
  { label: "Packed at warehouse", time: "Nov 13, 16:40", done: true },
  { label: "Out for delivery", time: "Today, 08:05", done: true, current: true },
  { label: "Delivered", time: "Expected by 14:00", done: false },
]

export default function OrderTrackingDrawer() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>
        <TruckIcon data-icon="inline-start" />
        Track order
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle>Arriving today</DrawerTitle>
            <DrawerDescription>Order #88213 · 3 items</DrawerDescription>
          </DrawerHeader>
          <ol className="flex flex-col p-4">
            {steps.map((step, index) => (
              <li key={step.label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <span
                    className={cn(
                      "flex size-5 items-center justify-center rounded-full border",
                      step.done && "border-primary bg-primary text-primary-foreground",
                      step.current && "ring-4 ring-primary/20"
                    )}
                  >
                    {step.done && <CheckIcon className="size-3" />}
                  </span>
                  {index < steps.length - 1 && (
                    <span className={cn("w-px flex-1", steps[index + 1]?.done ? "bg-primary" : "bg-border")} />
                  )}
                </div>
                <div className="pb-5">
                  <p className={cn("font-medium", !step.done && "text-muted-foreground")}>{step.label}</p>
                  <p className="text-muted-foreground">{step.time}</p>
                </div>
              </li>
            ))}
          </ol>
          <DrawerFooter className="flex-row items-center gap-3 border-t pt-4">
            <Avatar>
              <AvatarFallback>DM</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-medium">Diego Martín</p>
              <p className="text-muted-foreground">Your courier</p>
            </div>
            <Button variant="outline" size="icon" aria-label="Call courier">
              <PhoneIcon />
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "RideOptionsDrawer",
    description: "Ride-hailing bottom sheet with selectable ride tiers, ETAs and fares.",
    code: `
const rides = [
  { id: "eco", name: "Eco", seats: 4, eta: "3 min", fare: 12.4, icon: CarIcon },
  { id: "comfort", name: "Comfort", seats: 4, eta: "5 min", fare: 16.8, icon: CarFrontIcon },
  { id: "xl", name: "XL", seats: 6, eta: "8 min", fare: 22.1, icon: BusIcon },
]

export default function RideOptionsDrawer() {
  const [ride, setRide] = React.useState("eco")
  const selected = rides.find((item) => item.id === ride) ?? rides[0]!

  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button className="w-full max-w-xs" />}>
        <NavigationIcon data-icon="inline-start" />
        Where to? · Central Station
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle>Choose a ride</DrawerTitle>
            <DrawerDescription>To Central Station · 6.2 km</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-1 p-4" role="radiogroup" aria-label="Ride type">
            {rides.map((item) => (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={item.id === ride}
                onClick={() => setRide(item.id)}
                className={cn(
                  "flex items-center gap-3 border border-transparent p-3 text-start hover:bg-muted",
                  item.id === ride && "border-foreground bg-muted/50"
                )}
              >
                <item.icon className="size-6" />
                <div className="flex-1">
                  <p className="flex items-center gap-1 font-medium">
                    {item.name}
                    <UserIcon className="ms-1 size-3" />
                    <span className="font-normal text-muted-foreground">{item.seats}</span>
                  </p>
                  <p className="text-muted-foreground">{item.eta} away</p>
                </div>
                <span className="font-medium tabular-nums">{"€" + item.fare.toFixed(2)}</span>
              </button>
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button />}>Confirm {selected.name}</DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "SortOptionsDrawer",
    description: "Compact bottom drawer with sort options that closes on selection.",
    code: `
const options = [
  { value: "relevance", label: "Most relevant" },
  { value: "newest", label: "Newest first" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
]

export default function SortOptionsDrawer() {
  const [open, setOpen] = React.useState(false)
  const [sort, setSort] = React.useState("relevance")
  const current = options.find((option) => option.value === sort)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger render={<Button variant="outline" />}>
        <ArrowUpDownIcon data-icon="inline-start" />
        {current?.label}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Sort by</DrawerTitle>
            <DrawerDescription className="sr-only">Choose how results are ordered</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col p-2 pb-4">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setSort(option.value)
                  setOpen(false)
                }}
                className="flex items-center justify-between px-3 py-3 text-start hover:bg-muted"
              >
                {option.label}
                {option.value === sort && <CheckIcon className="size-4" />}
              </button>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "ControlledExternalDrawer",
    description: "Controlled drawer opened from several outside buttons that set its content.",
    code: `
const panels = {
  shipping: { title: "Shipping policy", body: "Orders ship within 2 business days. Free standard shipping on orders over $75." },
  returns: { title: "Returns", body: "Return unworn items within 30 days for a full refund. Return labels are free." },
  sizing: { title: "Size guide", body: "Our knitwear runs true to size. If you're between sizes, size up for a relaxed fit." },
}

type PanelKey = keyof typeof panels

export default function ControlledExternalDrawer() {
  const [panel, setPanel] = React.useState<PanelKey | null>(null)
  const content = panel ? panels[panel] : null

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {(Object.keys(panels) as PanelKey[]).map((key) => (
        <Button key={key} variant="outline" size="sm" onClick={() => setPanel(key)}>
          {panels[key].title}
        </Button>
      ))}
      <Drawer open={panel !== null} onOpenChange={(open) => !open && setPanel(null)} swipeDirection="right">
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{content?.title}</DrawerTitle>
            <DrawerDescription>Last updated Oct 2026</DrawerDescription>
          </DrawerHeader>
          <p className="flex-1 p-4 leading-relaxed">{content?.body}</p>
          <DrawerFooter>
            <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}`,
  },
  {
    name: "CommandSearchTopDrawer",
    description: "Top drawer with a search field and filtered quick actions.",
    code: `
const actions = [
  { label: "Create invoice", icon: FilePlusIcon, hint: "Billing" },
  { label: "Add customer", icon: UserPlusIcon, hint: "Customers" },
  { label: "View payouts", icon: BanknoteIcon, hint: "Finance" },
  { label: "Open API keys", icon: KeyRoundIcon, hint: "Developers" },
  { label: "Invite teammate", icon: UsersIcon, hint: "Team" },
]

export default function CommandSearchTopDrawer() {
  const [query, setQuery] = React.useState("")
  const visible = actions.filter((action) => action.label.toLowerCase().includes(query.toLowerCase()))

  return (
    <Drawer swipeDirection="up" onOpenChange={(open) => !open && setQuery("")}>
      <DrawerTrigger render={<Button variant="outline" className="w-full max-w-xs justify-start text-muted-foreground" />}>
        <SearchIcon data-icon="inline-start" />
        Search or jump to...
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-lg flex-col gap-2 p-4">
          <DrawerTitle className="sr-only">Quick search</DrawerTitle>
          <InputGroup>
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput autoFocus placeholder="Type a command" value={query} onChange={(event) => setQuery(event.target.value)} />
            <InputGroupAddon align="inline-end">
              <Kbd>Esc</Kbd>
            </InputGroupAddon>
          </InputGroup>
          <div className="flex flex-col">
            {visible.map((action) => (
              <DrawerClose
                key={action.label}
                render={<button type="button" />}
                className="flex items-center gap-3 px-2 py-2 text-start hover:bg-muted"
              >
                <action.icon className="size-4 text-muted-foreground" />
                <span className="flex-1">{action.label}</span>
                <span className="text-muted-foreground">{action.hint}</span>
              </DrawerClose>
            ))}
            {visible.length === 0 && <p className="py-4 text-center text-muted-foreground">No matching commands.</p>}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "LanguagePickerDrawer",
    description: "Scrollable bottom drawer listing languages with native names and a checkmark.",
    code: `
const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "es", name: "Spanish", native: "Español" },
  { code: "fr", name: "French", native: "Français" },
  { code: "de", name: "German", native: "Deutsch" },
  { code: "pt", name: "Portuguese", native: "Português" },
  { code: "ja", name: "Japanese", native: "日本語" },
  { code: "ko", name: "Korean", native: "한국어" },
  { code: "ar", name: "Arabic", native: "العربية" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
]

export default function LanguagePickerDrawer() {
  const [lang, setLang] = React.useState("en")
  const current = languages.find((item) => item.code === lang)

  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="ghost" />}>
        <LanguagesIcon data-icon="inline-start" />
        {current?.native}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex min-h-0 w-full max-w-sm flex-1 flex-col">
          <DrawerHeader>
            <DrawerTitle>App language</DrawerTitle>
            <DrawerDescription>Changes apply immediately.</DrawerDescription>
          </DrawerHeader>
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-2 pb-4">
            {languages.map((item) => (
              <DrawerClose
                key={item.code}
                render={<button type="button" />}
                onClick={() => setLang(item.code)}
                className="flex items-center gap-3 px-3 py-2.5 text-start hover:bg-muted"
              >
                <span className="flex-1">
                  <span className="block font-medium">{item.native}</span>
                  <span className="block text-muted-foreground">{item.name}</span>
                </span>
                {item.code === lang && <CheckIcon className="size-4" />}
              </DrawerClose>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "AppearanceSettingsDrawer",
    description: "Appearance drawer with theme cards, text size slider and reduced motion switch.",
    code: `
const themes = [
  { value: "light", label: "Light", className: "bg-white border-neutral-200" },
  { value: "dark", label: "Dark", className: "bg-neutral-900 border-neutral-700" },
  { value: "system", label: "System", className: "bg-gradient-to-r from-white to-neutral-900 border-neutral-400" },
]

export default function AppearanceSettingsDrawer() {
  const [theme, setTheme] = React.useState("system")
  const [textSize, setTextSize] = React.useState(16)

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        <PaletteIcon data-icon="inline-start" />
        Appearance
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Appearance</DrawerTitle>
          <DrawerDescription>Customize how Readwell looks on this device.</DrawerDescription>
        </DrawerHeader>
        <FieldGroup className="flex-1 overflow-y-auto p-4">
          <FieldSet>
            <FieldLegend variant="label">Theme</FieldLegend>
            <div className="grid grid-cols-3 gap-2">
              {themes.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={item.value === theme}
                  onClick={() => setTheme(item.value)}
                  className={cn(
                    "flex flex-col gap-1.5 border p-1.5 text-start",
                    item.value === theme ? "border-foreground" : "border-transparent"
                  )}
                >
                  <span className={cn("h-12 border", item.className)} />
                  {item.label}
                </button>
              ))}
            </div>
          </FieldSet>
          <Field>
            <div className="flex justify-between">
              <FieldLabel>Text size</FieldLabel>
              <span className="tabular-nums">{textSize}px</span>
            </div>
            <Slider
              value={[textSize]}
              min={12}
              max={22}
              onValueChange={(value) => setTextSize(typeof value === "number" ? value : (value[0] ?? 0))}
              aria-label="Text size"
            />
            <p className="border bg-muted/40 p-3" style={{ fontSize: textSize }}>
              The quick brown fox reads every chapter.
            </p>
          </Field>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="reduce-motion">Reduce motion</FieldLabel>
              <FieldDescription>Minimize page transitions.</FieldDescription>
            </FieldContent>
            <Switch id="reduce-motion" />
          </Field>
        </FieldGroup>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "AccountSwitcherDrawer",
    description: "Left drawer for switching between signed-in accounts and adding a new one.",
    code: `
const accounts = [
  { id: "personal", name: "Clara Novak", email: "clara.novak@mailbox.io", initials: "CN" },
  { id: "work", name: "Clara Novak", email: "clara@fernhill.studio", initials: "FH" },
  { id: "side", name: "Bookbinding Club", email: "hello@bindclub.org", initials: "BC" },
]

export default function AccountSwitcherDrawer() {
  const [active, setActive] = React.useState("work")
  const current = accounts.find((account) => account.id === active) ?? accounts[0]!

  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger render={<Button variant="outline" className="h-auto justify-start gap-2 py-1.5" />}>
        <Avatar size="sm">
          <AvatarFallback>{current.initials}</AvatarFallback>
        </Avatar>
        <span className="flex flex-col items-start">
          <span className="font-medium">{current.name}</span>
          <span className="font-normal text-muted-foreground">{current.email}</span>
        </span>
        <ChevronsUpDownIcon data-icon="inline-end" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Accounts</DrawerTitle>
          <DrawerDescription>Switch without signing out.</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-1 p-2 pt-4">
          {accounts.map((account) => (
            <DrawerClose
              key={account.id}
              render={<button type="button" />}
              onClick={() => setActive(account.id)}
              className={cn("flex items-center gap-3 p-2 text-start hover:bg-muted", account.id === active && "bg-muted")}
            >
              <Avatar>
                <AvatarFallback>{account.initials}</AvatarFallback>
              </Avatar>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-medium">{account.name}</span>
                <span className="block truncate text-muted-foreground">{account.email}</span>
              </span>
              {account.id === active && <CheckIcon className="size-4" />}
            </DrawerClose>
          ))}
        </div>
        <DrawerFooter className="border-t pt-4">
          <Button variant="outline">
            <PlusIcon data-icon="inline-start" />
            Add another account
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "NewsletterSignupDrawer",
    description: "Bottom drawer newsletter signup with topic checkboxes and a success state.",
    code: `
const topics = ["Product updates", "Design deep dives", "Hiring news"]

export default function NewsletterSignupDrawer() {
  const [subscribed, setSubscribed] = React.useState(false)

  return (
    <Drawer onOpenChange={(open) => open && setSubscribed(false)}>
      <DrawerTrigger render={<Button variant="secondary" />}>
        <MailIcon data-icon="inline-start" />
        Subscribe
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          {subscribed ? (
            <div className="flex flex-col items-center gap-3 p-6 text-center">
              <MailCheckIcon className="size-8" />
              <DrawerTitle>Check your inbox</DrawerTitle>
              <DrawerDescription>Confirm your email to start receiving The Field Notes.</DrawerDescription>
              <DrawerClose render={<Button variant="outline" className="mt-2" />}>Close</DrawerClose>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                setSubscribed(true)
              }}
            >
              <DrawerHeader>
                <DrawerTitle>The Field Notes</DrawerTitle>
                <DrawerDescription>One thoughtful email every other Tuesday. No spam.</DrawerDescription>
              </DrawerHeader>
              <FieldGroup className="p-4">
                <Field>
                  <FieldLabel htmlFor="nl-email">Email</FieldLabel>
                  <Input id="nl-email" type="email" required placeholder="you@example.com" />
                </Field>
                <FieldSet>
                  <FieldLegend variant="label">Topics</FieldLegend>
                  {topics.map((topic) => (
                    <Field key={topic} orientation="horizontal">
                      <Checkbox id={"nl-" + topic} defaultChecked={topic !== "Hiring news"} />
                      <FieldLabel htmlFor={"nl-" + topic}>{topic}</FieldLabel>
                    </Field>
                  ))}
                </FieldSet>
              </FieldGroup>
              <DrawerFooter>
                <Button type="submit">Subscribe</Button>
              </DrawerFooter>
            </form>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "ProductOptionsDrawer",
    description: "Storefront bottom drawer for choosing color and size before adding to bag.",
    code: `
const colors = [
  { value: "olive", label: "Olive", className: "bg-lime-800" },
  { value: "navy", label: "Navy", className: "bg-blue-900" },
  { value: "rust", label: "Rust", className: "bg-orange-700" },
]
const sizes = ["S", "M", "L", "XL"]

export default function ProductOptionsDrawer() {
  const [color, setColor] = React.useState("olive")
  const [size, setSize] = React.useState<string[]>([])

  return (
    <Drawer>
      <DrawerTrigger render={<Button className="w-full max-w-xs" />}>
        <ShoppingBagIcon data-icon="inline-start" />
        Add to bag · $148
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader className="flex-row items-center gap-3 text-start">
            <div className="size-14 shrink-0 bg-gradient-to-br from-lime-700 to-lime-950" />
            <div>
              <DrawerTitle>Field Jacket</DrawerTitle>
              <DrawerDescription>Waxed cotton · $148</DrawerDescription>
            </div>
          </DrawerHeader>
          <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-2">
              <p className="font-medium">
                Color: <span className="font-normal text-muted-foreground capitalize">{color}</span>
              </p>
              <div className="flex gap-2">
                {colors.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    aria-label={item.label}
                    aria-pressed={item.value === color}
                    onClick={() => setColor(item.value)}
                    className={cn(
                      "size-8 rounded-full ring-offset-2 ring-offset-background",
                      item.className,
                      item.value === color && "ring-2 ring-foreground"
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="font-medium">Size</p>
                <Button variant="link" size="xs" className="h-auto p-0">
                  Size guide
                </Button>
              </div>
              <ToggleGroup variant="outline" value={size} onValueChange={(value) => setSize(value.map(String))} className="grid w-full grid-cols-4">
                {sizes.map((item) => (
                  <ToggleGroupItem key={item} value={item} disabled={item === "XL"}>
                    {item}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
              <p className="text-muted-foreground">XL is sold out in {color}.</p>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button disabled={size.length === 0} />}>
              {size.length ? "Add size " + size[0] + " to bag" : "Select a size"}
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "InvoicePreviewDrawer",
    description: "Billing drawer previewing an invoice with line items, totals and actions.",
    code: `
const lines = [
  { item: "Pro plan · 12 seats", amount: 288 },
  { item: "Additional storage · 200 GB", amount: 40 },
  { item: "Priority support", amount: 99 },
]

export default function InvoicePreviewDrawer() {
  const subtotal = lines.reduce((sum, line) => sum + line.amount, 0)
  const tax = subtotal * 0.21

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        <ReceiptTextIcon data-icon="inline-start" />
        INV-2026-1107
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex-row items-start justify-between">
          <div>
            <DrawerTitle>INV-2026-1107</DrawerTitle>
            <DrawerDescription>Issued Nov 7 · Due Dec 7</DrawerDescription>
          </div>
          <Badge variant="outline">Open</Badge>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-muted-foreground">Billed to</p>
              <p className="font-medium">Quarry Labs B.V.</p>
              <p className="text-muted-foreground">Utrecht, NL</p>
            </div>
            <div>
              <p className="text-muted-foreground">Amount due</p>
              <p className="font-heading text-lg font-semibold">{"€" + (subtotal + tax).toFixed(2)}</p>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead className="text-end">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lines.map((line) => (
                <TableRow key={line.item}>
                  <TableCell className="whitespace-normal">{line.item}</TableCell>
                  <TableCell className="text-end tabular-nums">{"€" + line.amount.toFixed(2)}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className="text-muted-foreground">VAT 21%</TableCell>
                <TableCell className="text-end tabular-nums">{"€" + tax.toFixed(2)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <DrawerFooter className="border-t pt-4">
          <Button>
            <SendIcon data-icon="inline-start" />
            Send reminder
          </Button>
          <Button variant="outline">
            <DownloadIcon data-icon="inline-start" />
            Download PDF
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "ConfirmDeleteBottomDrawer",
    description: "Mobile-friendly destructive confirmation presented as a bottom drawer.",
    code: `
export default function ConfirmDeleteBottomDrawer() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="destructive" />}>
        <Trash2Icon data-icon="inline-start" />
        Delete playlist
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-2 p-4 text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <Trash2Icon className="size-5" />
          </div>
          <DrawerTitle className="text-base">Delete &quot;Late Night Drives&quot;?</DrawerTitle>
          <DrawerDescription>
            42 songs will be removed from your library. Followers will lose access.
          </DrawerDescription>
          <div className="mt-3 flex w-full flex-col gap-2">
            <DrawerClose render={<Button variant="destructive" />}>Delete playlist</DrawerClose>
            <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "UserRowDetailsDrawer",
    description: "Admin users table where clicking a row opens a controlled drawer with that user's details.",
    code: `
const users = [
  { id: 1, name: "Amara Nwosu", email: "amara@helio.dev", role: "Owner", lastSeen: "Online now", mfa: true },
  { id: 2, name: "Bastian Krüger", email: "bastian@helio.dev", role: "Admin", lastSeen: "2h ago", mfa: true },
  { id: 3, name: "Chiara Romano", email: "chiara@helio.dev", role: "Member", lastSeen: "3d ago", mfa: false },
]

type User = (typeof users)[number]

export default function UserRowDetailsDrawer() {
  const [user, setUser] = React.useState<User | null>(null)

  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.id} className="cursor-pointer" onClick={() => setUser(row)}>
              <TableCell>
                <p className="font-medium">{row.name}</p>
                <p className="text-muted-foreground">{row.email}</p>
              </TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Drawer open={user !== null} onOpenChange={(open) => !open && setUser(null)} swipeDirection="right">
        <DrawerContent>
          {user && (
            <>
              <DrawerHeader className="items-start">
                <Avatar size="lg">
                  <AvatarFallback>{user.name.split(" ").map((part) => part[0]).join("")}</AvatarFallback>
                </Avatar>
                <DrawerTitle className="mt-2 text-base">{user.name}</DrawerTitle>
                <DrawerDescription>{user.email}</DrawerDescription>
              </DrawerHeader>
              <FieldGroup className="flex-1 p-4">
                <Field>
                  <FieldLabel htmlFor="u-role">Role</FieldLabel>
                  <NativeSelect id="u-role" key={user.id} defaultValue={user.role} className="w-full" disabled={user.role === "Owner"}>
                    <NativeSelectOption value="Owner">Owner</NativeSelectOption>
                    <NativeSelectOption value="Admin">Admin</NativeSelectOption>
                    <NativeSelectOption value="Member">Member</NativeSelectOption>
                  </NativeSelect>
                </Field>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last seen</span>
                  <span>{user.lastSeen}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Two-factor</span>
                  <Badge variant={user.mfa ? "secondary" : "destructive"}>{user.mfa ? "Enabled" : "Not set up"}</Badge>
                </div>
              </FieldGroup>
              <DrawerFooter className="border-t pt-4">
                <Button variant="destructive" disabled={user.role === "Owner"}>
                  Remove from workspace
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  )
}`,
  },
  {
    name: "OnboardingStepperDrawer",
    description: "Bottom drawer onboarding flow with step dots and back and continue buttons.",
    code: `
const steps = [
  { title: "Track every habit", body: "Add the routines you want to build and pick the days that matter.", icon: ListChecksIcon },
  { title: "Get gentle nudges", body: "Choose when we remind you. You can always snooze.", icon: BellRingIcon },
  { title: "Watch your streaks", body: "See progress over weeks and celebrate the small wins.", icon: FlameIcon },
]

export default function OnboardingStepperDrawer() {
  const [step, setStep] = React.useState(0)
  const current = steps[step]!

  return (
    <Drawer onOpenChange={(open) => open && setStep(0)}>
      <DrawerTrigger render={<Button />}>Get started</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-3 p-6 text-center">
          <div className="flex size-14 items-center justify-center rounded-full bg-muted">
            <current.icon className="size-6" />
          </div>
          <DrawerTitle className="text-base">{current.title}</DrawerTitle>
          <DrawerDescription>{current.body}</DrawerDescription>
          <div className="flex gap-1.5 py-2" aria-label={"Step " + (step + 1) + " of " + steps.length}>
            {steps.map((item, index) => (
              <span
                key={item.title}
                className={cn("h-1.5 rounded-full bg-muted transition-all", index === step ? "w-6 bg-foreground" : "w-1.5")}
              />
            ))}
          </div>
          <div className="flex w-full gap-2">
            <Button variant="outline" className="flex-1" disabled={step === 0} onClick={() => setStep(step - 1)}>
              Back
            </Button>
            {step < steps.length - 1 ? (
              <Button className="flex-1" onClick={() => setStep(step + 1)}>
                Continue
              </Button>
            ) : (
              <DrawerClose render={<Button className="flex-1" />}>Start tracking</DrawerClose>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "CountrySelectorDrawer",
    description: "Long searchable country list in a bottom drawer with a sticky search field.",
    code: `
const countries = [
  "Argentina", "Australia", "Austria", "Belgium", "Brazil", "Canada", "Chile", "Denmark", "Egypt", "Finland",
  "France", "Germany", "Ghana", "Greece", "India", "Indonesia", "Ireland", "Italy", "Japan", "Kenya",
  "Mexico", "Netherlands", "New Zealand", "Nigeria", "Norway", "Pakistan", "Peru", "Poland", "Portugal", "Singapore",
  "South Africa", "Spain", "Sweden", "Switzerland", "Turkey", "United Kingdom", "United States", "Vietnam",
]

export default function CountrySelectorDrawer() {
  const [query, setQuery] = React.useState("")
  const [country, setCountry] = React.useState("Portugal")
  const visible = countries.filter((item) => item.toLowerCase().includes(query.toLowerCase()))

  return (
    <Drawer onOpenChange={(open) => !open && setQuery("")}>
      <DrawerTrigger render={<Button variant="outline" className="w-full max-w-60 justify-between" />}>
        <span className="flex items-center gap-2">
          <GlobeIcon />
          {country}
        </span>
        <ChevronDownIcon />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex min-h-0 w-full max-w-sm flex-1 flex-col">
          <DrawerHeader>
            <DrawerTitle>Country of residence</DrawerTitle>
            <DrawerDescription>Used for tax and shipping.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-2">
            <InputGroup>
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search countries" value={query} onChange={(event) => setQuery(event.target.value)} />
            </InputGroup>
          </div>
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-2 pb-4">
            {visible.map((item) => (
              <DrawerClose
                key={item}
                render={<button type="button" />}
                onClick={() => setCountry(item)}
                className={cn("flex items-center justify-between px-3 py-2 text-start hover:bg-muted", item === country && "font-medium")}
              >
                {item}
                {item === country && <CheckIcon className="size-4" />}
              </DrawerClose>
            ))}
            {visible.length === 0 && <p className="py-6 text-center text-muted-foreground">No countries match.</p>}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "NotificationPreferencesDrawer",
    description: "Grouped notification switches in a side drawer with a master pause toggle.",
    code: `
const groups = [
  { title: "Activity", items: ["Comments on my posts", "New followers", "Mentions"] },
  { title: "Account", items: ["Security alerts", "Billing receipts"] },
]

export default function NotificationPreferencesDrawer() {
  const [paused, setPaused] = React.useState(false)

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        <BellRingIcon data-icon="inline-start" />
        Notification preferences
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Notifications</DrawerTitle>
          <DrawerDescription>Push notifications on this device</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-4">
          <Field orientation="horizontal" className="border bg-muted/40 p-3">
            <FieldContent>
              <FieldLabel htmlFor="np-pause">Pause all</FieldLabel>
              <FieldDescription>Mute everything for 8 hours.</FieldDescription>
            </FieldContent>
            <Switch id="np-pause" checked={paused} onCheckedChange={setPaused} />
          </Field>
          {groups.map((group) => (
            <FieldSet key={group.title} disabled={paused}>
              <FieldLegend variant="label">{group.title}</FieldLegend>
              <FieldGroup className="gap-3">
                {group.items.map((item) => (
                  <Field key={item} orientation="horizontal" data-disabled={paused}>
                    <FieldLabel htmlFor={"np-" + item}>{item}</FieldLabel>
                    <Switch id={"np-" + item} defaultChecked={item !== "New followers"} disabled={paused} />
                  </Field>
                ))}
              </FieldGroup>
            </FieldSet>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "UploadQueueNonModalDrawer",
    description: "Non-modal bottom drawer that tracks an upload queue while the page stays usable.",
    code: `
const queue = [
  { name: "wedding-highlights.mp4", size: "1.2 GB", progress: 72 },
  { name: "ceremony-raw-01.mov", size: "3.4 GB", progress: 24 },
  { name: "speech-audio.wav", size: "180 MB", progress: 100 },
]

export default function UploadQueueNonModalDrawer() {
  return (
    <Drawer modal={false} disablePointerDismissal>
      <DrawerTrigger render={<Button variant="outline" />}>
        <CloudUploadIcon data-icon="inline-start" />
        Uploads (2 active)
      </DrawerTrigger>
      <DrawerContent className="shadow-lg">
        <div className="mx-auto flex w-full max-w-md flex-col">
          <DrawerHeader className="flex-row items-center justify-between text-start">
            <div>
              <DrawerTitle>Uploading 2 of 3</DrawerTitle>
              <DrawerDescription>About 6 minutes left</DrawerDescription>
            </div>
            <DrawerClose render={<Button variant="ghost" size="icon-sm" aria-label="Hide uploads" />}>
              <ChevronDownIcon />
            </DrawerClose>
          </DrawerHeader>
          <div className="flex flex-col gap-3 p-4">
            {queue.map((file) => (
              <div key={file.name} className="flex items-center gap-3">
                <FileVideoIcon className="size-4 shrink-0 text-muted-foreground" />
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="flex justify-between gap-2">
                    <span className="truncate">{file.name}</span>
                    <span className="shrink-0 text-muted-foreground tabular-nums">
                      {file.progress === 100 ? "Done" : file.progress + "%"}
                    </span>
                  </div>
                  <Progress value={file.progress} />
                </div>
                <Button variant="ghost" size="icon-xs" aria-label={file.progress === 100 ? "Open " + file.name : "Pause " + file.name}>
                  {file.progress === 100 ? <ExternalLinkIcon /> : <PauseIcon />}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "ReactionPickerDrawer",
    description: "Bottom drawer with category tabs of emoji reactions and recently used picks.",
    code: `
const emoji = {
  smileys: ["😀", "😂", "🥹", "😍", "🤔", "😴", "😎", "🥳", "😅", "🙃", "😇", "🤩"],
  gestures: ["👍", "👎", "👏", "🙌", "🙏", "💪", "👋", "🤝", "✌️", "🤞", "👀", "🫶"],
  objects: ["🔥", "🎉", "💡", "✅", "❤️", "⭐", "🚀", "📌", "🎯", "☕", "📈", "🧠"],
}

export default function ReactionPickerDrawer() {
  const [picked, setPicked] = React.useState<string[]>(["👍", "🎉"])

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {picked.map((item) => (
          <span key={item} className="border bg-muted px-2 py-0.5">
            {item}
          </span>
        ))}
      </div>
      <Drawer showSwipeHandle>
        <DrawerTrigger render={<Button variant="outline" size="icon-sm" aria-label="Add reaction" />}>
          <SmilePlusIcon />
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm p-4">
            <DrawerTitle className="sr-only">Add a reaction</DrawerTitle>
            <Tabs defaultValue="smileys">
              <TabsList className="w-full">
                <TabsTrigger value="smileys">Smileys</TabsTrigger>
                <TabsTrigger value="gestures">Gestures</TabsTrigger>
                <TabsTrigger value="objects">Objects</TabsTrigger>
              </TabsList>
              {(Object.keys(emoji) as (keyof typeof emoji)[]).map((group) => (
                <TabsContent key={group} value={group} className="grid grid-cols-6 gap-1 pt-3">
                  {emoji[group].map((item) => (
                    <DrawerClose
                      key={item}
                      render={<button type="button" />}
                      onClick={() => setPicked((current) => (current.includes(item) ? current : [...current, item]))}
                      className="flex aspect-square items-center justify-center text-xl hover:bg-muted"
                      aria-label={"React with " + item}
                    >
                      {item}
                    </DrawerClose>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}`,
  },
  {
    name: "EventRsvpDrawer",
    description: "Event details bottom drawer with host, location, capacity and an RSVP toggle.",
    code: `
export default function EventRsvpDrawer() {
  const [going, setGoing] = React.useState(false)
  const spots = going ? 7 : 8

  return (
    <Drawer>
      <DrawerTrigger
        render={<button type="button" />}
        className="flex w-full max-w-xs overflow-hidden border bg-background text-start hover:bg-muted/50"
      >
        <span className="flex w-14 shrink-0 flex-col items-center justify-center bg-primary text-primary-foreground">
          <span className="text-[10px] uppercase">Nov</span>
          <span className="text-lg font-semibold">22</span>
        </span>
        <span className="flex flex-col p-3">
          <span className="font-medium">Sunrise trail run</span>
          <span className="text-muted-foreground">Sat 7:00 AM · Ridge Park</span>
        </span>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <div className="h-24 bg-gradient-to-r from-orange-300 via-rose-300 to-sky-300 dark:from-orange-700 dark:via-rose-700 dark:to-sky-700" />
          <DrawerHeader className="text-start">
            <DrawerTitle className="text-base">Sunrise trail run</DrawerTitle>
            <DrawerDescription>Hosted by Ridge Runners Club</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-2 p-4">
            <p className="flex items-center gap-2">
              <CalendarIcon className="size-4 text-muted-foreground" />
              Saturday, Nov 22 · 7:00 – 8:30 AM
            </p>
            <p className="flex items-center gap-2">
              <MapPinIcon className="size-4 text-muted-foreground" />
              Ridge Park north gate
            </p>
            <p className="flex items-center gap-2">
              <UsersIcon className="size-4 text-muted-foreground" />
              {spots} spots left of 20
            </p>
            <Progress value={((20 - spots) / 20) * 100} className="mt-1" />
          </div>
          <DrawerFooter>
            <Button variant={going ? "outline" : "default"} onClick={() => setGoing(!going)}>
              {going ? <CheckIcon data-icon="inline-start" /> : <CalendarPlusIcon data-icon="inline-start" />}
              {going ? "You're going · Cancel RSVP" : "RSVP"}
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "SplitBillDrawer",
    description: "Restaurant bill drawer with tip presets, split count and live per-person totals.",
    code: `
const bill = 86.4
const tips = ["10", "15", "18", "20"]

export default function SplitBillDrawer() {
  const [tip, setTip] = React.useState<string[]>(["18"])
  const [people, setPeople] = React.useState(3)
  const tipAmount = bill * (Number(tip[0] ?? 0) / 100)
  const total = bill + tipAmount

  return (
    <Drawer>
      <DrawerTrigger render={<Button />}>
        <ReceiptIcon data-icon="inline-start" />
        Split the bill
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle>Table 12 · Osteria Lupa</DrawerTitle>
            <DrawerDescription>Bill before tip: {"$" + bill.toFixed(2)}</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-2">
              <p className="font-medium">Tip</p>
              <ToggleGroup variant="outline" value={tip} onValueChange={(value) => setTip(value.map(String))} className="grid w-full grid-cols-4">
                {tips.map((item) => (
                  <ToggleGroupItem key={item} value={item}>
                    {item}%
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium">Split between</p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon-sm" aria-label="Fewer people" disabled={people <= 1} onClick={() => setPeople(people - 1)}>
                  <MinusIcon />
                </Button>
                <span className="w-6 text-center tabular-nums">{people}</span>
                <Button variant="outline" size="icon-sm" aria-label="More people" onClick={() => setPeople(people + 1)}>
                  <PlusIcon />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1 border bg-muted/40 p-3 tabular-nums">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tip</span>
                <span>{"$" + tipAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total</span>
                <span>{"$" + total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-heading text-base font-semibold">
                <span>Each pays</span>
                <span>{"$" + (total / people).toFixed(2)}</span>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button />}>Request payments</DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "DocumentOutlineDrawer",
    description: "Left drawer table of contents for a long document with the active heading highlighted.",
    code: `
const outline = [
  { id: "intro", title: "Introduction", level: 1 },
  { id: "goals", title: "Goals and non-goals", level: 2 },
  { id: "design", title: "Proposed design", level: 1 },
  { id: "api", title: "API surface", level: 2 },
  { id: "storage", title: "Storage model", level: 2 },
  { id: "migration", title: "Migration plan", level: 1 },
  { id: "risks", title: "Risks", level: 2 },
  { id: "open", title: "Open questions", level: 1 },
]

export default function DocumentOutlineDrawer() {
  const [active, setActive] = React.useState("api")

  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger render={<Button variant="outline" />}>
        <ListTreeIcon data-icon="inline-start" />
        Outline
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>RFC-031: Event sourcing</DrawerTitle>
          <DrawerDescription>8 sections · 14 min read</DrawerDescription>
        </DrawerHeader>
        <nav className="flex flex-1 flex-col overflow-y-auto p-2 pt-4" aria-label="Document outline">
          {outline.map((item) => (
            <DrawerClose
              key={item.id}
              render={<a href={"#" + item.id} />}
              nativeButton={false}
              onClick={() => setActive(item.id)}
              className={cn(
                "border-s-2 py-1.5 pe-2 hover:bg-muted",
                item.level === 2 ? "ps-6 text-muted-foreground" : "ps-3 font-medium",
                item.id === active ? "border-primary bg-muted text-foreground" : "border-transparent"
              )}
            >
              {item.title}
            </DrawerClose>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "WifiNetworksDrawer",
    description: "Wi-Fi drawer listing networks by signal that reveals a password field on selection.",
    code: `
const networks = [
  { ssid: "Hearth-5G", signal: "high", secured: true },
  { ssid: "Hearth-Guest", signal: "medium", secured: false },
  { ssid: "Café Borealis", signal: "medium", secured: true },
  { ssid: "Printer-3F", signal: "low", secured: true },
]

export default function WifiNetworksDrawer() {
  const [selected, setSelected] = React.useState<string | null>(null)

  return (
    <Drawer onOpenChange={(open) => !open && setSelected(null)}>
      <DrawerTrigger render={<Button variant="outline" />}>
        <WifiIcon data-icon="inline-start" />
        Wi-Fi
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle>Choose a network</DrawerTitle>
            <DrawerDescription>{networks.length} networks found</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col p-2">
            {networks.map((network) => {
              const Icon = network.signal === "high" ? WifiIcon : network.signal === "medium" ? WifiHighIcon : WifiLowIcon
              const isSelected = selected === network.ssid
              return (
                <div key={network.ssid} className={cn("flex flex-col", isSelected && "bg-muted/60")}>
                  <button
                    type="button"
                    onClick={() => setSelected(isSelected ? null : network.ssid)}
                    className="flex items-center gap-3 px-3 py-2.5 text-start hover:bg-muted"
                  >
                    <Icon className="size-4" />
                    <span className="flex-1">{network.ssid}</span>
                    {network.secured && <LockIcon className="size-3.5 text-muted-foreground" />}
                  </button>
                  {isSelected && (
                    <div className="flex gap-2 px-3 pb-3">
                      {network.secured && <Input type="password" placeholder="Password" aria-label={"Password for " + network.ssid} autoFocus />}
                      <DrawerClose render={<Button />}>Join</DrawerClose>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "FloatingInsetDrawer",
    description: "Inset bottom drawer that floats with margins, holding quick control toggles.",
    code: `
const controls = [
  { id: "wifi", label: "Wi-Fi", icon: WifiIcon, on: true },
  { id: "bt", label: "Bluetooth", icon: BluetoothIcon, on: true },
  { id: "focus", label: "Focus", icon: MoonIcon, on: false },
  { id: "air", label: "Airplane", icon: PlaneIcon, on: false },
]

export default function FloatingInsetDrawer() {
  const [state, setState] = React.useState(controls)
  const [brightness, setBrightness] = React.useState(70)

  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>
        <SlidersVerticalIcon data-icon="inline-start" />
        Quick settings
      </DrawerTrigger>
      <DrawerContent className="border [--drawer-inset:0.75rem] data-[swipe-direction=down]:border sm:mx-auto sm:max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Quick settings</DrawerTitle>
          <DrawerDescription className="sr-only">Toggle connectivity and display</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 p-4">
          <div className="grid grid-cols-4 gap-2">
            {state.map((control) => (
              <button
                key={control.id}
                type="button"
                aria-pressed={control.on}
                onClick={() => setState((current) => current.map((item) => (item.id === control.id ? { ...item, on: !item.on } : item)))}
                className={cn(
                  "flex flex-col items-center gap-1.5 p-2",
                  control.on ? "bg-primary text-primary-foreground" : "bg-muted"
                )}
              >
                <control.icon className="size-5" />
                <span className="text-[11px]">{control.label}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <SunIcon className="size-4 text-muted-foreground" />
            <Slider
              value={[brightness]}
              onValueChange={(value) => setBrightness(typeof value === "number" ? value : (value[0] ?? 0))}
              aria-label="Brightness"
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "ShippingAddressDrawer",
    description: "Checkout side drawer for entering a shipping address with country and delivery options.",
    code: `
export default function ShippingAddressDrawer() {
  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" className="h-auto w-full max-w-xs justify-start py-2 text-start" />}>
        <MapPinIcon data-icon="inline-start" />
        <span className="flex flex-col">
          <span className="font-medium">Ship to</span>
          <span className="font-normal text-muted-foreground">Add a delivery address</span>
        </span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Shipping address</DrawerTitle>
          <DrawerDescription>We deliver to 40+ countries.</DrawerDescription>
        </DrawerHeader>
        <form className="flex min-h-0 flex-1 flex-col" onSubmit={(event) => event.preventDefault()}>
          <FieldGroup className="flex-1 overflow-y-auto p-4">
            <Field>
              <FieldLabel htmlFor="sa-name">Full name</FieldLabel>
              <Input id="sa-name" autoComplete="name" placeholder="Hugo Bergström" />
            </Field>
            <Field>
              <FieldLabel htmlFor="sa-line1">Street address</FieldLabel>
              <Input id="sa-line1" autoComplete="address-line1" placeholder="Kungsgatan 14" />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="sa-zip">Postal code</FieldLabel>
                <Input id="sa-zip" autoComplete="postal-code" placeholder="111 43" />
              </Field>
              <Field>
                <FieldLabel htmlFor="sa-city">City</FieldLabel>
                <Input id="sa-city" autoComplete="address-level2" placeholder="Stockholm" />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="sa-country">Country</FieldLabel>
              <NativeSelect id="sa-country" defaultValue="SE" className="w-full">
                <NativeSelectOption value="SE">Sweden</NativeSelectOption>
                <NativeSelectOption value="NO">Norway</NativeSelectOption>
                <NativeSelectOption value="DK">Denmark</NativeSelectOption>
                <NativeSelectOption value="FI">Finland</NativeSelectOption>
              </NativeSelect>
            </Field>
            <FieldSet>
              <FieldLegend variant="label">Delivery</FieldLegend>
              <RadioGroup defaultValue="standard">
                <Field orientation="horizontal">
                  <RadioGroupItem value="standard" id="sa-standard" />
                  <FieldLabel htmlFor="sa-standard">Standard · 3–5 days · Free</FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <RadioGroupItem value="express" id="sa-express" />
                  <FieldLabel htmlFor="sa-express">Express · Next day · €9</FieldLabel>
                </Field>
              </RadioGroup>
            </FieldSet>
            <Field orientation="horizontal">
              <Checkbox id="sa-billing" defaultChecked />
              <FieldLabel htmlFor="sa-billing">Use as billing address</FieldLabel>
            </Field>
          </FieldGroup>
          <DrawerFooter className="border-t pt-4">
            <Button type="submit">Save address</Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "CouponWalletDrawer",
    description: "Bottom drawer listing available coupons with apply buttons and an expired state.",
    code: `
const coupons = [
  { code: "AUTUMN20", title: "20% off outerwear", expires: "Ends Nov 30", expired: false },
  { code: "SHIPFREE", title: "Free express shipping", expires: "Ends Dec 15", expired: false },
  { code: "LOYAL15", title: "$15 off orders over $100", expires: "Expired Nov 1", expired: true },
]

export default function CouponWalletDrawer() {
  const [applied, setApplied] = React.useState<string | null>(null)

  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>
        <TicketIcon data-icon="inline-start" />
        {applied ? applied + " applied" : "Apply a coupon"}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle>Your coupons</DrawerTitle>
            <DrawerDescription>One coupon per order.</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-2 p-4">
            {coupons.map((coupon) => (
              <div
                key={coupon.code}
                className={cn("flex items-center gap-3 border border-dashed p-3", coupon.expired && "opacity-50")}
              >
                <div className="flex size-10 shrink-0 items-center justify-center bg-muted">
                  <TicketPercentIcon className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{coupon.title}</p>
                  <p className="text-muted-foreground">
                    <span className="font-mono">{coupon.code}</span> · {coupon.expires}
                  </p>
                </div>
                <DrawerClose
                  render={<Button size="sm" variant={applied === coupon.code ? "secondary" : "outline"} disabled={coupon.expired} />}
                  onClick={() => setApplied(coupon.code)}
                >
                  {applied === coupon.code ? "Applied" : "Apply"}
                </DrawerClose>
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "PermissionRequestDrawer",
    description: "Permission priming drawer explaining camera and microphone access before the system prompt.",
    code: `
const reasons = [
  { icon: CameraIcon, title: "Camera", text: "So teammates can see you during standups." },
  { icon: MicIcon, title: "Microphone", text: "So you can talk and be heard in calls." },
  { icon: ShieldCheckIcon, title: "Private by default", text: "We never record without a visible indicator." },
]

export default function PermissionRequestDrawer() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button />}>
        <VideoIcon data-icon="inline-start" />
        Join call
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle className="text-base">Allow camera and microphone</DrawerTitle>
            <DrawerDescription>Your browser will ask next. Here&apos;s why we need it.</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-4 p-4">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted">
                  <reason.icon className="size-4" />
                </div>
                <div>
                  <p className="font-medium">{reason.title}</p>
                  <p className="text-muted-foreground">{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button />}>Continue</DrawerClose>
            <DrawerClose render={<Button variant="ghost" />}>Join without audio or video</DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
  {
    name: "MetricBreakdownDrawer",
    description: "Dashboard KPI card that opens a drawer with a per-channel breakdown bar list.",
    code: `
const channels = [
  { name: "Organic search", value: 18420, color: "bg-chart-1" },
  { name: "Direct", value: 9310, color: "bg-chart-2" },
  { name: "Referral", value: 5120, color: "bg-chart-3" },
  { name: "Social", value: 3870, color: "bg-chart-4" },
  { name: "Email", value: 2240, color: "bg-chart-5" },
]

export default function MetricBreakdownDrawer() {
  const total = channels.reduce((sum, channel) => sum + channel.value, 0)
  const max = Math.max(...channels.map((channel) => channel.value))

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={<button type="button" />}
        className="flex w-full max-w-60 flex-col gap-1 border bg-background p-4 text-start hover:bg-muted/50"
      >
        <span className="flex items-center justify-between text-muted-foreground">
          Visitors · 30 days
          <ChevronRightIcon className="size-4" />
        </span>
        <span className="font-heading text-2xl font-semibold tabular-nums">{total.toLocaleString("en-US")}</span>
        <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
          <TrendingUpIcon className="size-3.5" />
          +12.4% vs last period
        </span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Visitors by channel</DrawerTitle>
          <DrawerDescription>Oct 16 – Nov 15, 2026</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          {channels.map((channel) => (
            <div key={channel.name} className="flex flex-col gap-1.5">
              <div className="flex justify-between">
                <span>{channel.name}</span>
                <span className="tabular-nums">
                  {channel.value.toLocaleString("en-US")}{" "}
                  <span className="text-muted-foreground">{Math.round((channel.value / total) * 100)}%</span>
                </span>
              </div>
              <div className="h-2 bg-muted">
                <div className={cn("h-full", channel.color)} style={{ width: (channel.value / max) * 100 + "%" }} />
              </div>
            </div>
          ))}
        </div>
        <DrawerFooter className="border-t pt-4">
          <Button variant="outline">
            <ExternalLinkIcon data-icon="inline-start" />
            Open full report
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,
  },
]

export default examples
