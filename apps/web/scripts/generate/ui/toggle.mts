import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "ToggleSizeScale",
    description: "The three toggle sizes, sm, default and lg, with icon and label.",
    code: `
const sizes = ["sm", "default", "lg"] as const

export default function ToggleSizeScale() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-3">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Toggle size={size} variant="outline" aria-label={"Star, " + size}>
            <StarIcon className="group-aria-pressed/toggle:fill-current" />
            Star
          </Toggle>
          <span className="text-xs text-muted-foreground">{size}</span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ToggleVariantStates",
    description: "Default and outline variants shown in both their off and pressed states.",
    code: `
export default function ToggleVariantStates() {
  return (
    <div className="grid w-full max-w-xs grid-cols-[auto_1fr_1fr] items-center gap-3 text-xs">
      <span />
      <span className="text-center text-muted-foreground">Off</span>
      <span className="text-center text-muted-foreground">On</span>
      <span className="text-muted-foreground">default</span>
      <Toggle aria-label="Pin (off)" className="justify-self-center">
        <PinIcon />
      </Toggle>
      <Toggle aria-label="Pin (on)" defaultPressed className="justify-self-center">
        <PinIcon />
      </Toggle>
      <span className="text-muted-foreground">outline</span>
      <Toggle variant="outline" aria-label="Pin outline (off)" className="justify-self-center">
        <PinIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Pin outline (on)" defaultPressed className="justify-self-center">
        <PinIcon />
      </Toggle>
    </div>
  )
}`,
  },
  {
    name: "DisabledToggleStates",
    description: "Disabled toggles in off and pressed states next to an enabled one, with a reason.",
    code: `
export default function DisabledToggleStates() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex flex-wrap gap-2">
        <Toggle variant="outline" aria-label="Notifications">
          <BellIcon />
          Alerts
        </Toggle>
        <Toggle variant="outline" disabled aria-label="Sync">
          <RefreshCwIcon />
          Sync
        </Toggle>
        <Toggle variant="outline" disabled defaultPressed aria-label="Backup">
          <CloudIcon />
          Backup
        </Toggle>
      </div>
      <p className="text-xs text-muted-foreground">Sync and Backup are managed by your organization admin.</p>
    </div>
  )
}`,
  },
  {
    name: "ControlledToggleStatus",
    description: "A controlled toggle whose pressed state is driven and displayed from outside.",
    code: `
export default function ControlledToggleStatus() {
  const [pressed, setPressed] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <Toggle variant="outline" pressed={pressed} onPressedChange={setPressed} aria-label="Do not disturb">
          {pressed ? <BellOffIcon /> : <BellIcon />}
          Do not disturb
        </Toggle>
        <Badge variant={pressed ? "default" : "secondary"}>{pressed ? "On" : "Off"}</Badge>
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" className="flex-1" onClick={() => setPressed(true)}>
          Turn on
        </Button>
        <Button size="sm" variant="outline" className="flex-1" onClick={() => setPressed(false)}>
          Turn off
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "FavoriteHeartToggle",
    description: "A heart toggle that fills and updates the like count when pressed.",
    code: `
export default function FavoriteHeartToggle() {
  const [liked, setLiked] = React.useState(false)
  const count = 128 + (liked ? 1 : 0)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <p className="text-sm">Sunrise over the Dolomites, shot on a 45mm at f/8.</p>
      <div className="flex items-center gap-2">
        <Toggle pressed={liked} onPressedChange={setLiked} aria-label="Like post" className="aria-pressed:text-rose-500">
          <HeartIcon className="group-aria-pressed/toggle:fill-current" />
          <span className="tabular-nums">{count}</span>
        </Toggle>
        <span className="text-xs text-muted-foreground">{liked ? "You and 128 others" : "128 likes"}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "StarRepositoryToggle",
    description: "A repository star toggle joined to a counter with a button group.",
    code: `
export default function StarRepositoryToggle() {
  const [starred, setStarred] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-3 border p-4">
      <div className="min-w-0">
        <p className="truncate font-mono text-sm">lumen/router</p>
        <p className="text-xs text-muted-foreground">Tiny type-safe routing for the edge</p>
      </div>
      <ButtonGroup>
        <Toggle variant="outline" size="sm" pressed={starred} onPressedChange={setStarred} aria-label="Star repository">
          <StarIcon className="group-aria-pressed/toggle:fill-amber-400 group-aria-pressed/toggle:text-amber-400" />
          {starred ? "Starred" : "Star"}
        </Toggle>
        <ButtonGroupText className="h-7 text-xs tabular-nums">{starred ? "2.4k" : "2.3k"}</ButtonGroupText>
      </ButtonGroup>
    </div>
  )
}`,
  },
  {
    name: "MicrophoneMuteToggle",
    description: "A call participant tile with a mute toggle that swaps the icon and status label.",
    code: `
export default function MicrophoneMuteToggle() {
  const [muted, setMuted] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3 border bg-muted/30 p-6">
      <Avatar size="lg">
        <AvatarFallback>DK</AvatarFallback>
      </Avatar>
      <p className="text-sm font-medium">Dana Kim (you)</p>
      <Toggle
        variant="outline"
        size="lg"
        pressed={muted}
        onPressedChange={setMuted}
        aria-label={muted ? "Unmute microphone" : "Mute microphone"}
        className="aria-pressed:border-destructive aria-pressed:bg-destructive/10 aria-pressed:text-destructive"
      >
        {muted ? <MicOffIcon /> : <MicIcon />}
        {muted ? "Muted" : "Mic on"}
      </Toggle>
    </div>
  )
}`,
  },
  {
    name: "CallControlBar",
    description: "A meeting control bar of independent toggles for camera, screen share, captions and hand raise.",
    code: `
const controls = [
  { id: "camera", label: "Camera", icon: VideoIcon, on: true },
  { id: "share", label: "Share screen", icon: MonitorUpIcon, on: false },
  { id: "captions", label: "Captions", icon: CaptionsIcon, on: false },
  { id: "hand", label: "Raise hand", icon: HandIcon, on: false },
]

export default function CallControlBar() {
  return (
    <div className="flex items-center gap-1 border bg-background p-1.5 shadow-sm">
      {controls.map((c) => (
        <Toggle key={c.id} size="lg" defaultPressed={c.on} aria-label={c.label} title={c.label}>
          <c.icon />
        </Toggle>
      ))}
      <Separator orientation="vertical" className="mx-1 h-6" />
      <Button variant="destructive" size="icon-lg" aria-label="Leave call">
        <PhoneOffIcon />
      </Button>
    </div>
  )
}`,
  },
  {
    name: "PinnedNotesToggle",
    description: "Notes with a pin toggle; pinned notes jump to a Pinned section at the top.",
    code: `
const initialNotes = [
  { id: 1, title: "Grocery run", body: "Oat milk, lemons, basil", pinned: false },
  { id: 2, title: "Wi-Fi guest", body: "Network: Lantern / pass: amber-42", pinned: true },
  { id: 3, title: "Book club", body: "Finish chapter 9 by Friday", pinned: false },
]

export default function PinnedNotesToggle() {
  const [notes, setNotes] = React.useState(initialNotes)
  const sorted = [...notes].sort((a, b) => Number(b.pinned) - Number(a.pinned))

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {sorted.map((n) => (
        <div key={n.id} className="flex items-start gap-3 border p-3">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium">{n.title}</p>
            <p className="truncate text-xs text-muted-foreground">{n.body}</p>
          </div>
          <Toggle
            size="sm"
            pressed={n.pinned}
            onPressedChange={(pinned) => setNotes((prev) => prev.map((x) => (x.id === n.id ? { ...x, pinned } : x)))}
            aria-label={n.pinned ? "Unpin note" : "Pin note"}
          >
            {n.pinned ? <PinIcon className="fill-current" /> : <PinOffIcon />}
          </Toggle>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "FollowToggleButton",
    description: "A follow toggle whose label switches between Follow and Following on a profile card.",
    code: `
export default function FollowToggleButton() {
  const [following, setFollowing] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs items-center gap-3 border p-4">
      <Avatar>
        <AvatarFallback>IR</AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">Iris Moreau</p>
        <p className="truncate text-xs text-muted-foreground">Writes about typography</p>
      </div>
      <Toggle variant="outline" size="sm" pressed={following} onPressedChange={setFollowing} aria-label="Follow Iris Moreau">
        {following ? <UserCheckIcon /> : <UserPlusIcon />}
        {following ? "Following" : "Follow"}
      </Toggle>
    </div>
  )
}`,
  },
  {
    name: "WishlistProductToggle",
    description: "A product card with a floating wishlist toggle over a gradient image placeholder.",
    code: `
export default function WishlistProductToggle() {
  return (
    <div className="w-full max-w-[240px] border">
      <div className="relative aspect-square bg-gradient-to-br from-sky-200 to-indigo-400 dark:from-sky-800 dark:to-indigo-950">
        <Toggle
          size="sm"
          aria-label="Add to wishlist"
          className="absolute end-2 top-2 bg-background/80 backdrop-blur hover:bg-background aria-pressed:bg-background aria-pressed:text-rose-500"
        >
          <HeartIcon className="group-aria-pressed/toggle:fill-current" />
        </Toggle>
      </div>
      <div className="p-3">
        <p className="text-sm font-medium">Merino crew sweater</p>
        <p className="text-sm text-muted-foreground">$89.00</p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ThreadSubscribeToggle",
    description: "A discussion header toggle to subscribe or unsubscribe from thread notifications.",
    code: `
export default function ThreadSubscribeToggle() {
  const [subscribed, setSubscribed] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium">Migrate billing to usage-based pricing</p>
          <p className="text-xs text-muted-foreground">RFC-0142 - 23 comments</p>
        </div>
        <Toggle variant="outline" size="sm" pressed={subscribed} onPressedChange={setSubscribed} aria-label="Subscribe to thread">
          {subscribed ? <BellRingIcon /> : <BellOffIcon />}
          {subscribed ? "Subscribed" : "Subscribe"}
        </Toggle>
      </div>
      <p className="text-xs text-muted-foreground">
        {subscribed ? "You will be notified about new replies." : "You will only be notified when mentioned."}
      </p>
    </div>
  )
}`,
  },
  {
    name: "PasswordVisibilityToggle",
    description: "An eye toggle inside a password field that reveals or hides the value.",
    code: `
export default function PasswordVisibilityToggle() {
  const [visible, setVisible] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label htmlFor="pw">Password</Label>
      <div className="relative">
        <Input id="pw" type={visible ? "text" : "password"} defaultValue="correct-horse-battery" className="pe-10" />
        <Toggle
          size="sm"
          pressed={visible}
          onPressedChange={setVisible}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute end-1 top-1/2 -translate-y-1/2 aria-pressed:bg-transparent"
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </Toggle>
      </div>
    </div>
  )
}`,
  },
  {
    name: "FilterChipToggles",
    description: "Independent filter chips that narrow a job listing; any combination can be active.",
    code: `
const jobs = [
  { title: "Senior Product Designer", remote: true, fullTime: true, senior: true },
  { title: "Frontend Engineer", remote: true, fullTime: true, senior: false },
  { title: "Brand Illustrator", remote: false, fullTime: false, senior: false },
  { title: "Staff Data Engineer", remote: false, fullTime: true, senior: true },
]

export default function FilterChipToggles() {
  const [remote, setRemote] = React.useState(false)
  const [fullTime, setFullTime] = React.useState(false)
  const [senior, setSenior] = React.useState(false)
  const results = jobs.filter((j) => (!remote || j.remote) && (!fullTime || j.fullTime) && (!senior || j.senior))

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Toggle variant="outline" size="sm" pressed={remote} onPressedChange={setRemote}>
          <GlobeIcon />
          Remote
        </Toggle>
        <Toggle variant="outline" size="sm" pressed={fullTime} onPressedChange={setFullTime}>
          <BriefcaseIcon />
          Full-time
        </Toggle>
        <Toggle variant="outline" size="sm" pressed={senior} onPressedChange={setSenior}>
          <AwardIcon />
          Senior
        </Toggle>
      </div>
      <div className="border">
        {results.length ? (
          results.map((j) => (
            <p key={j.title} className="border-b px-3 py-2 text-sm last:border-b-0">
              {j.title}
            </p>
          ))
        ) : (
          <p className="px-3 py-4 text-center text-sm text-muted-foreground">No roles match these filters.</p>
        )}
      </div>
    </div>
  )
}`,
  },
  {
    name: "MusicPlayerModeToggles",
    description: "Shuffle and repeat toggles around play controls in a compact music player.",
    code: `
export default function MusicPlayerModeToggles() {
  const [playing, setPlaying] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center gap-3">
        <div className="size-12 shrink-0 bg-gradient-to-br from-fuchsia-500 to-cyan-400" />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">Night Drive</p>
          <p className="truncate text-xs text-muted-foreground">The Paper Lanterns</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Toggle size="sm" aria-label="Shuffle" className="aria-pressed:text-primary">
          <ShuffleIcon />
        </Toggle>
        <Button variant="ghost" size="icon-sm" aria-label="Previous">
          <SkipBackIcon />
        </Button>
        <Toggle variant="outline" size="lg" pressed={playing} onPressedChange={setPlaying} aria-label={playing ? "Pause" : "Play"}>
          {playing ? <PauseIcon /> : <PlayIcon />}
        </Toggle>
        <Button variant="ghost" size="icon-sm" aria-label="Next">
          <SkipForwardIcon />
        </Button>
        <Toggle size="sm" aria-label="Repeat" className="aria-pressed:text-primary">
          <Repeat1Icon />
        </Toggle>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ArticleBookmarkToggles",
    description: "A reading list where each article has a bookmark toggle and a running saved count.",
    code: `
const articles = [
  { id: "a", title: "Designing calm notifications", mins: 6 },
  { id: "b", title: "A field guide to color tokens", mins: 11 },
  { id: "c", title: "Why your forms feel slow", mins: 4 },
]

export default function ArticleBookmarkToggles() {
  const [saved, setSaved] = React.useState<string[]>(["b"])

  return (
    <div className="w-full max-w-sm border">
      <div className="flex justify-between border-b bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
        <span>This week</span>
        <span>{saved.length} saved</span>
      </div>
      {articles.map((a) => (
        <div key={a.id} className="flex items-center gap-3 border-b px-3 py-2.5 last:border-b-0">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm">{a.title}</p>
            <p className="text-xs text-muted-foreground">{a.mins} min read</p>
          </div>
          <Toggle
            size="sm"
            pressed={saved.includes(a.id)}
            onPressedChange={(on) => setSaved((prev) => (on ? [...prev, a.id] : prev.filter((x) => x !== a.id)))}
            aria-label={"Bookmark " + a.title}
          >
            <BookmarkIcon className="group-aria-pressed/toggle:fill-current" />
          </Toggle>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "CodeEditorViewToggles",
    description: "Editor toolbar toggles for word wrap and line numbers that change a code preview.",
    code: `
const lines = [
  "export function formatPrice(cents: number, currency = 'EUR') {",
  "  return new Intl.NumberFormat('de-DE', { style: 'currency', currency }).format(cents / 100)",
  "}",
]

export default function CodeEditorViewToggles() {
  const [wrap, setWrap] = React.useState(false)
  const [numbers, setNumbers] = React.useState(true)

  return (
    <div className="w-full max-w-md border">
      <div className="flex items-center gap-1 border-b px-2 py-1">
        <span className="flex-1 font-mono text-xs text-muted-foreground">price.ts</span>
        <Toggle size="sm" pressed={wrap} onPressedChange={setWrap} aria-label="Word wrap">
          <WrapTextIcon />
        </Toggle>
        <Toggle size="sm" pressed={numbers} onPressedChange={setNumbers} aria-label="Line numbers">
          <ListOrderedIcon />
        </Toggle>
      </div>
      <pre className={cn("overflow-x-auto p-3 font-mono text-xs leading-5", wrap && "whitespace-pre-wrap break-all")}>
        {lines.map((line, i) => (
          <div key={i} className="flex gap-3">
            {numbers && <span className="w-4 shrink-0 text-end text-muted-foreground select-none">{i + 1}</span>}
            <span>{line}</span>
          </div>
        ))}
      </pre>
    </div>
  )
}`,
  },
  {
    name: "MarkdownPreviewToggle",
    description: "A comment box with a preview toggle that switches between writing and rendered output.",
    code: `
export default function MarkdownPreviewToggle() {
  const [preview, setPreview] = React.useState(false)
  const [text, setText] = React.useState("Looks great! Just one nit: rename **fetchAll** to **listInvoices**.")

  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="flex items-center justify-between border-b px-2 py-1">
        <span className="px-1 text-xs font-medium">Comment</span>
        <Toggle size="sm" pressed={preview} onPressedChange={setPreview} aria-label="Preview">
          <EyeIcon />
          Preview
        </Toggle>
      </div>
      {preview ? (
        <p className="min-h-24 p-3 text-sm">
          {text.split("**").map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))}
        </p>
      ) : (
        <Textarea value={text} onChange={(e) => setText(e.target.value)} className="min-h-24 border-0 focus-visible:ring-0" />
      )}
    </div>
  )
}`,
  },
  {
    name: "AspectRatioLockToggle",
    description: "A chain-link toggle that keeps width and height proportional while resizing an image.",
    code: `
export default function AspectRatioLockToggle() {
  const [locked, setLocked] = React.useState(true)
  const [size, setSize] = React.useState({ w: 1600, h: 900 })
  const ratio = 16 / 9

  return (
    <div className="flex w-full max-w-xs items-end gap-2 border p-4">
      <div className="flex flex-1 flex-col gap-1.5">
        <Label htmlFor="w">Width</Label>
        <Input
          id="w"
          type="number"
          value={size.w}
          onChange={(e) => {
            const w = Number(e.target.value)
            setSize((s) => ({ w, h: locked ? Math.round(w / ratio) : s.h }))
          }}
        />
      </div>
      <Toggle
        variant="outline"
        pressed={locked}
        onPressedChange={setLocked}
        aria-label={locked ? "Unlock aspect ratio" : "Lock aspect ratio"}
        className="h-10 min-w-10"
      >
        {locked ? <Link2Icon /> : <Link2OffIcon />}
      </Toggle>
      <div className="flex flex-1 flex-col gap-1.5">
        <Label htmlFor="h">Height</Label>
        <Input
          id="h"
          type="number"
          value={size.h}
          onChange={(e) => {
            const h = Number(e.target.value)
            setSize((s) => ({ h, w: locked ? Math.round(h * ratio) : s.w }))
          }}
        />
      </div>
    </div>
  )
}`,
  },
  {
    name: "CanvasGridSnapToggles",
    description: "Design canvas toggles to show a grid overlay and snap shapes to it.",
    code: `
export default function CanvasGridSnapToggles() {
  const [grid, setGrid] = React.useState(true)
  const [snap, setSnap] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="flex items-center gap-1 border-b p-1">
        <Toggle size="sm" pressed={grid} onPressedChange={setGrid}>
          <Grid3x3Icon />
          Grid
        </Toggle>
        <Toggle size="sm" pressed={snap} onPressedChange={setSnap} disabled={!grid}>
          <MagnetIcon />
          Snap
        </Toggle>
      </div>
      <div
        className="relative h-40 bg-background"
        style={
          grid
            ? { backgroundImage: "radial-gradient(var(--color-border) 1px, transparent 1px)", backgroundSize: "16px 16px" }
            : undefined
        }
      >
        <div className={cn("absolute size-12 bg-primary/80", snap ? "top-8 left-16" : "top-[37px] left-[69px]")} />
        <div className={cn("absolute h-8 w-20 border-2 border-primary", snap ? "top-24 left-40" : "top-[101px] left-[163px]")} />
      </div>
    </div>
  )
}`,
  },
  {
    name: "LayerVisibilityLockToggles",
    description: "A layers panel where each row has visibility and lock toggles.",
    code: `
const layers = [
  { name: "Header", visible: true, locked: false },
  { name: "Hero image", visible: true, locked: true },
  { name: "Pricing table", visible: false, locked: false },
  { name: "Footer", visible: true, locked: false },
]

export default function LayerVisibilityLockToggles() {
  return (
    <div className="w-full max-w-xs border">
      <div className="border-b px-3 py-2 text-xs font-medium text-muted-foreground">Layers</div>
      {layers.map((l) => (
        <div key={l.name} className="flex items-center gap-1 border-b px-2 py-1 last:border-b-0">
          <LayersIcon className="ms-1 size-3.5 text-muted-foreground" />
          <span className="ms-1 flex-1 text-sm">{l.name}</span>
          <Toggle size="sm" defaultPressed={l.visible} aria-label={"Toggle visibility of " + l.name} className="text-muted-foreground aria-pressed:bg-transparent aria-pressed:text-foreground">
            <EyeOffIcon className="group-aria-pressed/toggle:hidden" />
            <EyeIcon className="hidden group-aria-pressed/toggle:block" />
          </Toggle>
          <Toggle size="sm" defaultPressed={l.locked} aria-label={"Lock " + l.name}>
            <LockIcon />
          </Toggle>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "LiveUpdatesToggle",
    description: "Pauses or resumes a live metric feed, with a pulsing indicator while live.",
    code: `
export default function LiveUpdatesToggle() {
  const [live, setLive] = React.useState(true)
  const [visitors, setVisitors] = React.useState(1284)

  React.useEffect(() => {
    if (!live) return
    const id = setInterval(() => setVisitors((v) => v + Math.round(Math.random() * 10 - 4)), 1000)
    return () => clearInterval(id)
  }, [live])

  return (
    <div className="flex w-full max-w-xs flex-col gap-2 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">Visitors right now</span>
        <Toggle size="sm" variant="outline" pressed={live} onPressedChange={setLive} aria-label="Live updates">
          <span className={cn("size-2 rounded-full", live ? "animate-pulse bg-emerald-500" : "bg-muted-foreground")} />
          {live ? "Live" : "Paused"}
        </Toggle>
      </div>
      <p className="text-3xl font-semibold tabular-nums">{visitors.toLocaleString()}</p>
    </div>
  )
}`,
  },
  {
    name: "TableColumnVisibilityToggles",
    description: "Toggles above a table that show or hide optional columns.",
    code: `
const rows = [
  { id: "INV-301", customer: "Fable & Co", amount: "$1,240", due: "Oct 30" },
  { id: "INV-302", customer: "Orbit Labs", amount: "$860", due: "Nov 04" },
  { id: "INV-303", customer: "Pine Studio", amount: "$3,100", due: "Nov 12" },
]

export default function TableColumnVisibilityToggles() {
  const [showAmount, setShowAmount] = React.useState(true)
  const [showDue, setShowDue] = React.useState(false)

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Columns3Icon className="size-3.5" />
        Columns
        <Toggle size="sm" variant="outline" pressed={showAmount} onPressedChange={setShowAmount}>
          Amount
        </Toggle>
        <Toggle size="sm" variant="outline" pressed={showDue} onPressedChange={setShowDue}>
          Due date
        </Toggle>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Customer</TableHead>
            {showAmount && <TableHead className="text-end">Amount</TableHead>}
            {showDue && <TableHead>Due</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.id}>
              <TableCell className="font-mono text-xs">{r.id}</TableCell>
              <TableCell>{r.customer}</TableCell>
              {showAmount && <TableCell className="text-end tabular-nums">{r.amount}</TableCell>}
              {showDue && <TableCell>{r.due}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "HotelAmenityToggles",
    description: "Booking search filters for amenities rendered as icon toggles in a grid.",
    code: `
const amenities = [
  { label: "Wi-Fi", icon: WifiIcon },
  { label: "Parking", icon: CarIcon },
  { label: "Pool", icon: WavesIcon },
  { label: "Gym", icon: DumbbellIcon },
  { label: "Breakfast", icon: CoffeeIcon },
  { label: "Pets", icon: PawPrintIcon },
]

export default function HotelAmenityToggles() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <p className="text-sm font-medium">Amenities</p>
      <div className="grid grid-cols-3 gap-2">
        {amenities.map((a) => (
          <Toggle key={a.label} variant="outline" className="h-auto flex-col gap-1.5 py-3">
            <a.icon />
            {a.label}
          </Toggle>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "InterestPickerToggles",
    description: "Onboarding interest picker that requires at least three toggles before continuing.",
    code: `
const topics = ["Design", "Startups", "AI", "Climate", "Finance", "Travel", "Gaming", "Music", "Science"]

export default function InterestPickerToggles() {
  const [picked, setPicked] = React.useState<string[]>([])
  const remaining = Math.max(0, 3 - picked.length)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div>
        <p className="text-sm font-medium">What are you into?</p>
        <p className="text-xs text-muted-foreground">Pick at least 3 topics to personalise your feed.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {topics.map((t) => (
          <Toggle
            key={t}
            variant="outline"
            size="sm"
            pressed={picked.includes(t)}
            onPressedChange={(on) => setPicked((prev) => (on ? [...prev, t] : prev.filter((x) => x !== t)))}
            className="aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground"
          >
            {picked.includes(t) && <CheckIcon />}
            {t}
          </Toggle>
        ))}
      </div>
      <Button disabled={remaining > 0}>{remaining > 0 ? "Pick " + remaining + " more" : "Continue"}</Button>
    </div>
  )
}`,
  },
  {
    name: "AnnualBillingToggle",
    description: "A single annual billing toggle that applies a discount to the displayed price.",
    code: `
export default function AnnualBillingToggle() {
  const [annual, setAnnual] = React.useState(false)
  const price = annual ? 16 : 20

  return (
    <div className="flex w-full max-w-xs flex-col gap-4 border p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Team plan</span>
        <Toggle variant="outline" size="sm" pressed={annual} onPressedChange={setAnnual}>
          Pay yearly
          <Badge variant={annual ? "default" : "secondary"} className="ms-1">-20%</Badge>
        </Toggle>
      </div>
      <p>
        <span className="text-3xl font-semibold">{"$" + price}</span>
        <span className="text-sm text-muted-foreground"> / seat / month</span>
      </p>
      <p className="text-xs text-muted-foreground">{annual ? "Billed $192 per seat each year." : "Billed monthly. Cancel anytime."}</p>
    </div>
  )
}`,
  },
  {
    name: "ProductCompareToggle",
    description: "Compare toggles on product rows feed a tray that enables comparison at two or more.",
    code: `
const laptops = [
  { id: "air", name: "Nimbus Air 13", price: "$999" },
  { id: "pro", name: "Nimbus Pro 14", price: "$1,599" },
  { id: "max", name: "Nimbus Max 16", price: "$2,399" },
]

export default function ProductCompareToggle() {
  const [compare, setCompare] = React.useState<string[]>([])

  return (
    <div className="flex w-full max-w-sm flex-col border">
      {laptops.map((l) => (
        <div key={l.id} className="flex items-center gap-3 border-b px-3 py-2.5">
          <LaptopIcon className="size-5 text-muted-foreground" />
          <div className="flex-1">
            <p className="text-sm font-medium">{l.name}</p>
            <p className="text-xs text-muted-foreground">{l.price}</p>
          </div>
          <Toggle
            size="sm"
            variant="outline"
            pressed={compare.includes(l.id)}
            onPressedChange={(on) => setCompare((prev) => (on ? [...prev, l.id] : prev.filter((x) => x !== l.id)))}
          >
            <GitCompareIcon />
            Compare
          </Toggle>
        </div>
      ))}
      <div className="flex items-center justify-between bg-muted/40 px-3 py-2">
        <span className="text-xs text-muted-foreground">{compare.length} selected</span>
        <Button size="sm" disabled={compare.length < 2}>
          Compare now
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "VideoCaptionsToggle",
    description: "A video player overlay with a CC toggle that shows or hides subtitles.",
    code: `
export default function VideoCaptionsToggle() {
  const [captions, setCaptions] = React.useState(true)

  return (
    <div className="relative aspect-video w-full max-w-md overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950 text-white">
      <div className="absolute inset-0 flex items-center justify-center">
        <PlayCircleIcon className="size-12 opacity-80" />
      </div>
      {captions && (
        <p className="absolute inset-x-6 bottom-12 bg-black/70 px-2 py-1 text-center text-sm">
          &quot;Start by measuring the room twice, then cut once.&quot;
        </p>
      )}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-end gap-1 bg-gradient-to-t from-black/70 p-2">
        <Toggle
          size="sm"
          pressed={captions}
          onPressedChange={setCaptions}
          aria-label="Captions"
          className="text-white hover:bg-white/15 hover:text-white aria-pressed:bg-white aria-pressed:text-black"
        >
          <CaptionsIcon />
        </Toggle>
        <Button size="icon-sm" variant="ghost" aria-label="Settings" className="text-white hover:bg-white/15 hover:text-white">
          <SettingsIcon />
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "SidebarCollapseToggle",
    description: "A sidebar toggle that collapses navigation to icons only.",
    code: `
const nav = [
  { label: "Inbox", icon: InboxIcon },
  { label: "Projects", icon: FolderIcon },
  { label: "Reports", icon: ChartBarIcon },
  { label: "Settings", icon: SettingsIcon },
]

export default function SidebarCollapseToggle() {
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <div className="flex h-56 w-full max-w-sm border">
      <aside className={cn("flex flex-col gap-1 border-e p-2 transition-all", collapsed ? "w-12" : "w-40")}>
        {nav.map((n) => (
          <Button key={n.label} variant="ghost" size="sm" className={cn("justify-start", collapsed && "justify-center px-0")} aria-label={n.label}>
            <n.icon />
            {!collapsed && n.label}
          </Button>
        ))}
      </aside>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <Toggle size="sm" pressed={collapsed} onPressedChange={setCollapsed} aria-label="Collapse sidebar" className="self-start">
          {collapsed ? <PanelLeftOpenIcon /> : <PanelLeftCloseIcon />}
        </Toggle>
        <p className="text-xs text-muted-foreground">Main content area</p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "StarredEmailToggles",
    description: "Email rows with star toggles and a Starred-only filter toggle in the header.",
    code: `
const initial = [
  { id: 1, from: "Nadia Ruiz", subject: "Contract redlines attached", starred: true },
  { id: 2, from: "Billing", subject: "Your October receipt", starred: false },
  { id: 3, from: "Kofi Mensah", subject: "Offsite venue shortlist", starred: false },
]

export default function StarredEmailToggles() {
  const [mail, setMail] = React.useState(initial)
  const [onlyStarred, setOnlyStarred] = React.useState(false)
  const visible = onlyStarred ? mail.filter((m) => m.starred) : mail

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b px-3 py-1.5">
        <span className="text-xs font-medium text-muted-foreground">Inbox</span>
        <Toggle size="sm" pressed={onlyStarred} onPressedChange={setOnlyStarred}>
          <StarIcon />
          Starred only
        </Toggle>
      </div>
      {visible.map((m) => (
        <div key={m.id} className="flex items-center gap-2 border-b px-2 py-2 last:border-b-0">
          <Toggle
            size="sm"
            pressed={m.starred}
            onPressedChange={(starred) => setMail((prev) => prev.map((x) => (x.id === m.id ? { ...x, starred } : x)))}
            aria-label="Star"
            className="aria-pressed:bg-transparent aria-pressed:text-amber-500"
          >
            <StarIcon className="group-aria-pressed/toggle:fill-current" />
          </Toggle>
          <div className="min-w-0">
            <p className="text-sm font-medium">{m.from}</p>
            <p className="truncate text-xs text-muted-foreground">{m.subject}</p>
          </div>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "TooltipStateToggle",
    description: "Icon toggles wrapped in tooltips whose text reflects the current pressed state.",
    code: `
export default function TooltipStateToggle() {
  const [spell, setSpell] = React.useState(true)
  const [focus, setFocus] = React.useState(false)

  return (
    <div className="flex items-center gap-1 border p-1">
      <Tooltip>
        <TooltipTrigger render={<Toggle size="sm" pressed={spell} onPressedChange={setSpell} aria-label="Spellcheck" />}>
          <SpellCheckIcon />
        </TooltipTrigger>
        <TooltipContent>{spell ? "Spellcheck on" : "Spellcheck off"}</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Toggle size="sm" pressed={focus} onPressedChange={setFocus} aria-label="Focus mode" />}>
          <FocusIcon />
        </TooltipTrigger>
        <TooltipContent>{focus ? "Exit focus mode" : "Enter focus mode"}</TooltipContent>
      </Tooltip>
    </div>
  )
}`,
  },
  {
    name: "KeyboardShortcutToggle",
    description: "A toggle that can also be flipped with a keyboard shortcut shown in a Kbd hint.",
    code: `
export default function KeyboardShortcutToggle() {
  const [zen, setZen] = React.useState(false)

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.altKey && e.key.toLowerCase() === "z") {
        e.preventDefault()
        setZen((v) => !v)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center justify-between gap-2">
        <Toggle variant="outline" pressed={zen} onPressedChange={setZen}>
          <MoonStarIcon />
          Zen mode
        </Toggle>
        <KbdGroup>
          <Kbd>Alt</Kbd>
          <Kbd>Z</Kbd>
        </KbdGroup>
      </div>
      <p className={cn("text-sm transition-opacity", zen && "opacity-30")}>Sidebar, comments and toolbars {zen ? "are hidden" : "are visible"}.</p>
    </div>
  )
}`,
  },
  {
    name: "UnreadOnlyBadgeToggle",
    description: "An Unread only toggle that carries a count badge and filters notifications.",
    code: `
const items = [
  { text: "Lea commented on Brand refresh", unread: true },
  { text: "Your export finished", unread: false },
  { text: "Sam requested access to Q4 plan", unread: true },
  { text: "Weekly summary is ready", unread: false },
]

export default function UnreadOnlyBadgeToggle() {
  const [unreadOnly, setUnreadOnly] = React.useState(false)
  const unread = items.filter((i) => i.unread).length
  const list = unreadOnly ? items.filter((i) => i.unread) : items

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b px-3 py-1.5">
        <span className="text-sm font-medium">Notifications</span>
        <Toggle size="sm" variant="outline" pressed={unreadOnly} onPressedChange={setUnreadOnly}>
          Unread only
          <Badge className="ms-1 h-4 min-w-4 px-1 text-[10px]">{unread}</Badge>
        </Toggle>
      </div>
      {list.map((i) => (
        <p key={i.text} className="flex items-center gap-2 border-b px-3 py-2 text-sm last:border-b-0">
          <span className={cn("size-1.5 shrink-0 rounded-full", i.unread ? "bg-primary" : "bg-transparent")} />
          {i.text}
        </p>
      ))}
    </div>
  )
}`,
  },
  {
    name: "OptimisticAsyncToggle",
    description: "A toggle that saves to a fake API, showing a spinner and reverting if the request fails.",
    code: `
function savePreference(on: boolean) {
  return new Promise<void>((resolve, reject) =>
    setTimeout(() => (Math.random() > 0.3 ? resolve() : reject(new Error(on ? "on" : "off"))), 900)
  )
}

export default function OptimisticAsyncToggle() {
  const [pressed, setPressed] = React.useState(false)
  const [saving, setSaving] = React.useState(false)
  const [error, setError] = React.useState(false)

  async function change(next: boolean) {
    setPressed(next)
    setSaving(true)
    setError(false)
    try {
      await savePreference(next)
    } catch {
      setPressed(!next)
      setError(true)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex w-full max-w-xs flex-col gap-2 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm">Public profile</span>
        <Toggle variant="outline" size="sm" pressed={pressed} onPressedChange={change} disabled={saving}>
          {saving ? <Spinner /> : pressed ? <GlobeIcon /> : <EyeOffIcon />}
          {pressed ? "Public" : "Private"}
        </Toggle>
      </div>
      <p className={cn("text-xs", error ? "text-destructive" : "text-muted-foreground")}>
        {error ? "Could not save. Your previous setting was restored." : saving ? "Saving..." : "Changes save automatically."}
      </p>
    </div>
  )
}`,
  },
  {
    name: "InvalidConsentToggle",
    description: "A required consent toggle that shows an aria-invalid error state on submit.",
    code: `
export default function InvalidConsentToggle() {
  const [agreed, setAgreed] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const invalid = submitted && !agreed

  return (
    <form
      className="flex w-full max-w-xs flex-col gap-3 border p-4"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <p className="text-sm font-medium">Before you publish</p>
      <Toggle
        variant="outline"
        pressed={agreed}
        onPressedChange={setAgreed}
        aria-invalid={invalid || undefined}
        aria-describedby="consent-error"
        className="justify-start"
      >
        {agreed ? <SquareCheckIcon /> : <SquareIcon />}
        I own the rights to this content
      </Toggle>
      {invalid && (
        <p id="consent-error" className="text-xs text-destructive">
          You need to confirm this to publish.
        </p>
      )}
      <Button type="submit">{submitted && agreed ? "Published" : "Publish"}</Button>
    </form>
  )
}`,
  },
  {
    name: "MessageTranslateToggle",
    description: "A chat message with a translate toggle that swaps between original and translated text.",
    code: `
export default function MessageTranslateToggle() {
  const [translated, setTranslated] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm gap-3">
      <Avatar>
        <AvatarFallback>LM</AvatarFallback>
      </Avatar>
      <div className="flex min-w-0 flex-col gap-1">
        <div className="bg-muted px-3 py-2 text-sm">
          {translated ? "Can we move the call to Thursday morning?" : "On peut décaler l'appel à jeudi matin ?"}
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Louis Martin - 10:42</span>
          <Toggle size="sm" pressed={translated} onPressedChange={setTranslated} className="h-6 px-1.5 text-xs">
            <LanguagesIcon />
            {translated ? "Show original" : "Translate"}
          </Toggle>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ResolveCommentToggle",
    description: "A review comment with a resolve toggle that dims and collapses the thread.",
    code: `
export default function ResolveCommentToggle() {
  const [resolved, setResolved] = React.useState(false)

  return (
    <div className={cn("flex w-full max-w-sm flex-col gap-2 border p-3 transition-opacity", resolved && "bg-muted/40")}>
      <div className="flex items-center gap-2">
        <Avatar size="sm">
          <AvatarFallback>GW</AvatarFallback>
        </Avatar>
        <span className="flex-1 text-sm font-medium">Grace Wu</span>
        <Toggle size="sm" variant="outline" pressed={resolved} onPressedChange={setResolved}>
          <CircleCheckIcon />
          {resolved ? "Resolved" : "Resolve"}
        </Toggle>
      </div>
      {!resolved && (
        <p className="text-sm text-muted-foreground">The empty state copy feels too long on mobile. Could we cut the second sentence?</p>
      )}
      {resolved && <p className="text-xs text-muted-foreground">Thread resolved by you</p>}
    </div>
  )
}`,
  },
  {
    name: "EncryptionLockToggle",
    description: "A share dialog style row where a lock toggle enables end-to-end encryption.",
    code: `
export default function EncryptionLockToggle() {
  const [encrypted, setEncrypted] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-4">
      <div className={cn("flex size-10 shrink-0 items-center justify-center", encrypted ? "bg-emerald-500/15 text-emerald-600" : "bg-muted text-muted-foreground")}>
        {encrypted ? <ShieldCheckIcon className="size-5" /> : <ShieldIcon className="size-5" />}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">End-to-end encryption</p>
        <p className="text-xs text-muted-foreground">{encrypted ? "Only invited people can decrypt." : "Files are encrypted at rest only."}</p>
      </div>
      <Toggle variant="outline" pressed={encrypted} onPressedChange={setEncrypted} aria-label="End-to-end encryption">
        {encrypted ? <LockIcon /> : <LockOpenIcon />}
      </Toggle>
    </div>
  )
}`,
  },
  {
    name: "SmartHomeDeviceTiles",
    description: "Large tile toggles for smart home devices with an on count.",
    code: `
const devices = [
  { name: "Living room", icon: LightbulbIcon, on: true },
  { name: "Ceiling fan", icon: FanIcon, on: false },
  { name: "Heating", icon: ThermometerIcon, on: true },
  { name: "Front door", icon: DoorClosedIcon, on: false },
]

export default function SmartHomeDeviceTiles() {
  const [state, setState] = React.useState(devices.map((d) => d.on))

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <p className="text-xs text-muted-foreground">{state.filter(Boolean).length} of {devices.length} devices on</p>
      <div className="grid grid-cols-2 gap-2">
        {devices.map((d, i) => (
          <Toggle
            key={d.name}
            variant="outline"
            pressed={state[i]}
            onPressedChange={(on) => setState((prev) => prev.map((v, j) => (j === i ? on : v)))}
            className="h-auto flex-col items-start gap-3 p-3 aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground"
          >
            <d.icon className="size-5" />
            <span className="flex w-full justify-between">
              <span>{d.name}</span>
              <span className="opacity-70">{state[i] ? "On" : "Off"}</span>
            </span>
          </Toggle>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "TaskCompleteToggles",
    description: "A to-do list where each task uses a circular check toggle to mark completion.",
    code: `
const initialTasks = [
  { id: 1, title: "Send venue deposit", done: true },
  { id: 2, title: "Draft speaker bios", done: false },
  { id: 3, title: "Order name badges", done: false },
]

export default function TaskCompleteToggles() {
  const [tasks, setTasks] = React.useState(initialTasks)

  return (
    <div className="flex w-full max-w-xs flex-col border">
      <div className="border-b px-3 py-2 text-xs font-medium text-muted-foreground">
        Conference prep - {tasks.filter((t) => t.done).length}/{tasks.length}
      </div>
      {tasks.map((t) => (
        <div key={t.id} className="flex items-center gap-2 border-b px-2 py-1.5 last:border-b-0">
          <Toggle
            size="sm"
            pressed={t.done}
            onPressedChange={(done) => setTasks((prev) => prev.map((x) => (x.id === t.id ? { ...x, done } : x)))}
            aria-label={"Complete " + t.title}
            className="aria-pressed:bg-transparent aria-pressed:text-emerald-600"
          >
            {t.done ? <CircleCheckIcon /> : <CircleIcon />}
          </Toggle>
          <span className={cn("text-sm", t.done && "text-muted-foreground line-through")}>{t.title}</span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "MaskBalanceToggle",
    description: "A banking balance card with an eye toggle that masks sensitive amounts.",
    code: `
export default function MaskBalanceToggle() {
  const [hidden, setHidden] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border bg-gradient-to-br from-muted/60 to-background p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">Main account</span>
        <Toggle size="sm" pressed={hidden} onPressedChange={setHidden} aria-label={hidden ? "Show balance" : "Hide balance"}>
          {hidden ? <EyeOffIcon /> : <EyeIcon />}
        </Toggle>
      </div>
      <p className="text-3xl font-semibold tabular-nums">{hidden ? "€ ••••••" : "€ 12,480.55"}</p>
      <p className="text-xs text-muted-foreground">{hidden ? "•••• •••• •••• ••••" : "DE89 3704 0044 0532 0130 00"}</p>
    </div>
  )
}`,
  },
  {
    name: "SpoilerRevealToggle",
    description: "A spoiler toggle that blurs and reveals a review passage.",
    code: `
export default function SpoilerRevealToggle() {
  const [revealed, setRevealed] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Review: The Glass Orchard</span>
        <Toggle size="sm" variant="outline" pressed={revealed} onPressedChange={setRevealed}>
          {revealed ? <EyeIcon /> : <EyeOffIcon />}
          Spoilers
        </Toggle>
      </div>
      <p className={cn("text-sm text-muted-foreground transition", !revealed && "blur-sm select-none")} aria-hidden={!revealed}>
        The gardener was the narrator all along, and the final chapter rewinds the whole story from the orchard&apos;s point of view.
      </p>
    </div>
  )
}`,
  },
  {
    name: "ExpandableRowToggle",
    description: "A chevron toggle that expands an order row to reveal line items.",
    code: `
const items = [
  { name: "Linen tote bag", qty: 2, price: "$36.00" },
  { name: "Beeswax wraps (set of 3)", qty: 1, price: "$18.00" },
]

export default function ExpandableRowToggle() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center gap-2 px-3 py-2">
        <Toggle size="sm" pressed={open} onPressedChange={setOpen} aria-label={open ? "Collapse order" : "Expand order"} aria-expanded={open}>
          <ChevronRightIcon className="transition-transform group-aria-pressed/toggle:rotate-90" />
        </Toggle>
        <span className="flex-1 font-mono text-xs">#ORD-7721</span>
        <Badge variant="secondary">Shipped</Badge>
        <span className="text-sm tabular-nums">$54.00</span>
      </div>
      {open && (
        <div className="border-t bg-muted/30 px-3 py-2">
          {items.map((i) => (
            <div key={i.name} className="flex justify-between py-1 text-xs">
              <span>
                {i.qty} x {i.name}
              </span>
              <span className="tabular-nums">{i.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}`,
  },
  {
    name: "IncognitoSearchToggle",
    description: "A search bar with a private mode toggle that stops saving search history.",
    code: `
export default function IncognitoSearchToggle() {
  const [privateMode, setPrivateMode] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <SearchIcon className="absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search docs" className="ps-8" />
        </div>
        <Toggle variant="outline" pressed={privateMode} onPressedChange={setPrivateMode} aria-label="Private search" className="h-10 min-w-10">
          <VenetianMaskIcon />
        </Toggle>
      </div>
      <p className="text-xs text-muted-foreground">
        {privateMode ? "Private search: nothing you type here is saved." : "Recent searches are saved to this device."}
      </p>
    </div>
  )
}`,
  },
  {
    name: "AccessibilityPreferenceToggles",
    description: "Accessibility preference toggles that apply larger text and high contrast to a sample.",
    code: `
export default function AccessibilityPreferenceToggles() {
  const [large, setLarge] = React.useState(false)
  const [contrast, setContrast] = React.useState(false)
  const [motion, setMotion] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex flex-wrap gap-2">
        <Toggle variant="outline" size="sm" pressed={large} onPressedChange={setLarge}>
          <ALargeSmallIcon />
          Larger text
        </Toggle>
        <Toggle variant="outline" size="sm" pressed={contrast} onPressedChange={setContrast}>
          <ContrastIcon />
          High contrast
        </Toggle>
        <Toggle variant="outline" size="sm" pressed={motion} onPressedChange={setMotion}>
          <PauseCircleIcon />
          Reduce motion
        </Toggle>
      </div>
      <div className={cn("border p-3", contrast && "border-foreground bg-foreground text-background")}>
        <p className={cn("font-medium", large ? "text-lg" : "text-sm")}>Your appointment is confirmed</p>
        <p className={cn(large ? "text-base" : "text-xs", contrast ? "text-background" : "text-muted-foreground")}>
          Tue, 14 Nov at 09:15 with Dr. Alvarez
        </p>
        <div className={cn("mt-2 h-1 w-1/2 bg-primary", !motion && "animate-pulse")} />
      </div>
    </div>
  )
}`,
  },
  {
    name: "SavedSearchToggleChips",
    description: "A toggle with an inline-start icon slot and an inline-end count, used as a saved-search chip.",
    code: `
const searches = [
  { label: "Open bugs", count: 14 },
  { label: "Assigned to me", count: 6 },
  { label: "Due this week", count: 3 },
]

export default function SavedSearchToggleChips() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
      <p className="text-xs font-medium text-muted-foreground">Saved searches</p>
      <div className="flex flex-wrap gap-2">
        {searches.map((s, i) => (
          <Toggle key={s.label} variant="outline" defaultPressed={i === 0}>
            <FilterIcon data-icon="inline-start" />
            {s.label}
            <span data-icon="inline-end" className="text-muted-foreground tabular-nums">
              {s.count}
            </span>
          </Toggle>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "RecordingToggle",
    description: "A screen recording toggle with a running timer and red pressed styling.",
    code: `
export default function RecordingToggle() {
  const [recording, setRecording] = React.useState(false)
  const [seconds, setSeconds] = React.useState(0)

  React.useEffect(() => {
    if (!recording) return
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [recording])

  const time = String(Math.floor(seconds / 60)).padStart(2, "0") + ":" + String(seconds % 60).padStart(2, "0")

  return (
    <div className="flex items-center gap-3 border p-3">
      <Toggle
        variant="outline"
        pressed={recording}
        onPressedChange={(on) => {
          if (on) setSeconds(0)
          setRecording(on)
        }}
        className="aria-pressed:border-red-500 aria-pressed:bg-red-500 aria-pressed:text-white"
      >
        {recording ? <SquareIcon className="fill-current" /> : <CircleIcon className="fill-red-500 text-red-500" />}
        {recording ? "Stop" : "Record"}
      </Toggle>
      <span className={cn("font-mono text-sm tabular-nums", !recording && "text-muted-foreground")}>{time}</span>
    </div>
  )
}`,
  },
  {
    name: "ReadingModeToggle",
    description: "A reader mode toggle that switches an article to a serif, sepia reading layout.",
    code: `
export default function ReadingModeToggle() {
  const [reader, setReader] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="flex items-center justify-between border-b px-3 py-1.5">
        <span className="truncate text-xs text-muted-foreground">field-notes.example/slow-mornings</span>
        <Toggle size="sm" pressed={reader} onPressedChange={setReader} aria-label="Reader mode">
          <BookOpenIcon />
        </Toggle>
      </div>
      <article className={cn("p-4 transition-colors", reader && "bg-amber-50 font-serif text-amber-950 dark:bg-amber-950/30 dark:text-amber-100")}>
        <h3 className={cn("font-semibold", reader ? "text-lg" : "text-sm")}>The case for slow mornings</h3>
        <p className={cn("mt-1 leading-relaxed", reader ? "text-base" : "text-xs text-muted-foreground")}>
          Before the inbox, before the news, there is a quiet half hour that belongs only to you.
        </p>
      </article>
    </div>
  )
}`,
  },
]

export default examples
