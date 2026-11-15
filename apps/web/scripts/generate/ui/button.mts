import { type Example } from "./_lib.mjs"

// NOTE: the first six examples that used to live here (SocialLoginButtons,
// LoadingButtonStates, EditorToolbarIconButtons, NotificationBadgeButton,
// PricingStarterCta, PricingProCta) are already committed as
// registry/designali/examples/button/button-08..13.tsx, so they are not
// regenerated here (that would create duplicate files).

const examples: Example[] = [
  {
    name: "ButtonVariantShowcase",
    description: "All six button variants side by side: default, secondary, outline, ghost, destructive and link.",
    code: `
const variants = ["default", "secondary", "outline", "ghost", "destructive", "link"] as const

export default function ButtonVariantShowcase() {
  return (
    <div className="flex max-w-md flex-wrap items-center justify-center gap-2">
      {variants.map((variant) => (
        <Button key={variant} variant={variant} className="capitalize">
          {variant}
        </Button>
      ))}
    </div>
  )
}`,
  },
  {
    name: "DeleteConfirmButton",
    description: "Destructive delete button that asks for confirmation in an alert dialog.",
    code: `
export default function DeleteConfirmButton() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>
        <Trash2Icon data-icon="inline-start" />
        Delete project
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <TriangleAlertIcon className="text-destructive" />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete &quot;Harbor CRM&quot;?</AlertDialogTitle>
          <AlertDialogDescription>
            All boards, files and 38 automations will be removed permanently.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
  },
  {
    name: "CopyToClipboardButton",
    description: "Invite link field with a button that swaps to a check icon after copying.",
    code: `
export default function CopyToClipboardButton() {
  const [copied, setCopied] = React.useState(false)
  const link = "https://app.example.com/join/k7Qx2"

  function copy() {
    void navigator.clipboard?.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <div className="h-8 min-w-0 flex-1 truncate border bg-muted/40 px-2.5 py-2 font-mono text-xs">
        {link}
      </div>
      <Button variant="outline" size="sm" onClick={copy} aria-live="polite">
        {copied ? <CheckIcon data-icon="inline-start" /> : <CopyIcon data-icon="inline-start" />}
        {copied ? "Copied" : "Copy"}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "AsyncSubmitButton",
    description: "Submit button that cycles through idle, loading and success states on click.",
    code: `
export default function AsyncSubmitButton() {
  const [state, setState] = React.useState<"idle" | "loading" | "done">("idle")

  function submit() {
    setState("loading")
    setTimeout(() => {
      setState("done")
      setTimeout(() => setState("idle"), 1500)
    }, 1200)
  }

  return (
    <Button className="w-40" disabled={state === "loading"} onClick={submit}>
      {state === "loading" && <Spinner data-icon="inline-start" />}
      {state === "done" && <CircleCheckIcon data-icon="inline-start" />}
      {state === "idle" && "Publish post"}
      {state === "loading" && "Publishing..."}
      {state === "done" && "Published"}
    </Button>
  )
}`,
  },
  {
    name: "AnchorLinkButtons",
    description: "Buttons rendered as anchor elements for navigation, including an external link.",
    code: `
export default function AnchorLinkButtons() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button nativeButton={false} render={<a href="#" />}>
        View dashboard
      </Button>
      <Button variant="outline" nativeButton={false} render={<a href="#" target="_blank" rel="noreferrer" />}>
        Status page
        <ExternalLinkIcon data-icon="inline-end" />
      </Button>
    </div>
  )
}`,
  },
  {
    name: "DisabledReasonTooltipButton",
    description: "Disabled button wrapped so a tooltip can still explain why the action is unavailable.",
    code: `
export default function DisabledReasonTooltipButton() {
  return (
    <Tooltip>
      <TooltipTrigger render={<span tabIndex={0} className="inline-flex" />}>
        <Button disabled>
          <RocketIcon data-icon="inline-start" />
          Deploy to production
        </Button>
      </TooltipTrigger>
      <TooltipContent>Waiting for 2 required checks to pass</TooltipContent>
    </Tooltip>
  )
}`,
  },
  {
    name: "FollowToggleButton",
    description: "Follow button that toggles to Following and reveals Unfollow on hover.",
    code: `
export default function FollowToggleButton() {
  const [following, setFollowing] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs items-center gap-3 border p-3">
      <Avatar>
        <AvatarFallback>RN</AvatarFallback>
      </Avatar>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-sm font-medium">Rosa Nakamura</span>
        <span className="text-xs text-muted-foreground">Illustrator</span>
      </div>
      <Button
        size="sm"
        variant={following ? "outline" : "default"}
        aria-pressed={following}
        onClick={() => setFollowing(!following)}
        className="group w-24"
      >
        {following ? (
          <>
            <span className="group-hover:hidden">Following</span>
            <span className="hidden text-destructive group-hover:inline">Unfollow</span>
          </>
        ) : (
          <>
            <UserPlusIcon data-icon="inline-start" />
            Follow
          </>
        )}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "LikeCounterButton",
    description: "Toggleable like button that fills the heart and updates its counter.",
    code: `
export default function LikeCounterButton() {
  const [liked, setLiked] = React.useState(false)
  const count = 248 + (liked ? 1 : 0)

  return (
    <Button
      variant="outline"
      aria-pressed={liked}
      onClick={() => setLiked(!liked)}
      className={cn(liked && "border-rose-500/40 text-rose-600 dark:text-rose-400")}
    >
      <HeartIcon data-icon="inline-start" className={cn(liked && "fill-current")} />
      <span className="tabular-nums">{count}</span>
    </Button>
  )
}`,
  },
  {
    name: "ShortcutHintButton",
    description: "Search trigger button showing its keyboard shortcut with Kbd keys.",
    code: `
export default function ShortcutHintButton() {
  return (
    <Button variant="outline" className="w-full max-w-xs justify-start text-muted-foreground">
      <SearchIcon data-icon="inline-start" />
      <span className="flex-1 text-left">Search documentation...</span>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </Button>
  )
}`,
  },
  {
    name: "MergeSplitButton",
    description: "Split button with a primary merge action and a dropdown to pick the merge strategy.",
    code: `
const strategies = {
  merge: "Create merge commit",
  squash: "Squash and merge",
  rebase: "Rebase and merge",
}

export default function MergeSplitButton() {
  const [strategy, setStrategy] = React.useState("squash")

  return (
    <ButtonGroup>
      <Button>
        <GitMergeIcon data-icon="inline-start" />
        {strategies[strategy as keyof typeof strategies]}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button size="icon" className="h-10 border-l-primary-foreground/20" aria-label="Choose merge strategy" />}>
          <ChevronDownIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52">
          <DropdownMenuRadioGroup value={strategy} onValueChange={setStrategy}>
            {Object.entries(strategies).map(([value, label]) => (
              <DropdownMenuRadioItem key={value} value={value}>
                {label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}`,
  },
  {
    name: "FileUploadButton",
    description: "Upload button backed by a hidden file input that shows the chosen file name.",
    code: `
export default function FileUploadButton() {
  const inputRef = React.useRef<null | HTMLInputElement>(null)
  const [fileName, setFileName] = React.useState<string | null>(null)

  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-2">
      <input
        ref={inputRef}
        type="file"
        accept=".csv"
        className="sr-only"
        onChange={(event) => setFileName(event.target.files?.[0]?.name ?? null)}
      />
      <Button variant="outline" onClick={() => inputRef.current?.click()}>
        <UploadIcon data-icon="inline-start" />
        {fileName ? "Replace file" : "Upload CSV"}
      </Button>
      <p className="flex items-center gap-1 text-xs text-muted-foreground">
        {fileName ? (
          <>
            <FileSpreadsheetIcon className="size-3.5" />
            {fileName}
          </>
        ) : (
          "Up to 10 MB, comma separated"
        )}
      </p>
    </div>
  )
}`,
  },
  {
    name: "FloatingActionButton",
    description: "Round floating action button anchored to the corner of a mobile-style list view.",
    code: `
const notes = ["Grocery run", "Call the landlord", "Book dentist", "Gift ideas for Sam"]

export default function FloatingActionButton() {
  return (
    <div className="relative h-72 w-full max-w-[260px] overflow-hidden border bg-background">
      <div className="border-b px-4 py-3 text-sm font-semibold">Notes</div>
      <ul className="divide-y">
        {notes.map((note) => (
          <li key={note} className="px-4 py-3 text-xs">
            {note}
          </li>
        ))}
      </ul>
      <Button size="icon-lg" aria-label="New note" className="absolute right-4 bottom-4 size-12 rounded-full shadow-lg">
        <PlusIcon className="size-5" />
      </Button>
    </div>
  )
}`,
  },
  {
    name: "ResendCountdownButton",
    description: "Resend code button that stays disabled while a countdown runs.",
    code: `
export default function ResendCountdownButton() {
  const [seconds, setSeconds] = React.useState(30)

  React.useEffect(() => {
    if (seconds === 0) return
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(id)
  }, [seconds])

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <p className="text-xs text-muted-foreground">We sent a 6-digit code to j•••@example.com</p>
      <Button variant="ghost" size="sm" disabled={seconds > 0} onClick={() => setSeconds(30)}>
        <RotateCcwIcon data-icon="inline-start" />
        {seconds > 0 ? "Resend code in " + seconds + "s" : "Resend code"}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "HoldToConfirmButton",
    description: "Destructive button that must be pressed and held until its fill completes.",
    code: `
export default function HoldToConfirmButton() {
  const [progress, setProgress] = React.useState(0)
  const [done, setDone] = React.useState(false)
  const timer = React.useRef<ReturnType<typeof setInterval> | null>(null)

  function start() {
    if (done) return
    timer.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          stop()
          setDone(true)
          return 100
        }
        return p + 5
      })
    }, 50)
  }

  function stop() {
    if (timer.current) clearInterval(timer.current)
    timer.current = null
  }

  function cancel() {
    stop()
    if (!done) setProgress(0)
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        variant="destructive"
        className="relative w-48 overflow-hidden"
        onPointerDown={start}
        onPointerUp={cancel}
        onPointerLeave={cancel}
      >
        <span className="absolute inset-y-0 left-0 bg-destructive/25" style={{ width: progress + "%" }} />
        <span className="relative flex items-center gap-1.5">
          <Trash2Icon className="size-4" />
          {done ? "Account deleted" : "Hold to delete"}
        </span>
      </Button>
      {done && (
        <Button variant="link" size="xs" onClick={() => { setDone(false); setProgress(0) }}>
          Undo
        </Button>
      )}
    </div>
  )
}`,
  },
  {
    name: "DownloadProgressButton",
    description: "Download button that fills with progress and switches to an open action when done.",
    code: `
export default function DownloadProgressButton() {
  const [progress, setProgress] = React.useState<number | null>(null)

  React.useEffect(() => {
    if (progress === null || progress >= 100) return
    const id = setTimeout(() => setProgress((p) => Math.min((p ?? 0) + 8, 100)), 120)
    return () => clearTimeout(id)
  }, [progress])

  const downloading = progress !== null && progress < 100

  return (
    <Button
      variant="outline"
      className="relative w-52 overflow-hidden"
      disabled={downloading}
      onClick={() => setProgress(progress === 100 ? null : 0)}
    >
      {progress !== null && (
        <span className="absolute inset-y-0 left-0 bg-primary/15 transition-[width]" style={{ width: progress + "%" }} />
      )}
      <span className="relative flex items-center gap-1.5">
        {progress === null && <DownloadIcon className="size-4" />}
        {downloading && <Spinner />}
        {progress === 100 && <FolderOpenIcon className="size-4" />}
        {progress === null && "Download report (4.2 MB)"}
        {downloading && "Downloading " + progress + "%"}
        {progress === 100 && "Show in folder"}
      </span>
    </Button>
  )
}`,
  },
  {
    name: "QuantityStepperButtons",
    description: "Cart quantity stepper with minus and plus icon buttons that disable at the limits.",
    code: `
export default function QuantityStepperButtons() {
  const [qty, setQty] = React.useState(1)

  return (
    <div className="flex w-full max-w-xs items-center justify-between gap-3 border p-3">
      <div className="flex flex-col">
        <span className="text-sm font-medium">Ceramic pour-over set</span>
        <span className="text-xs text-muted-foreground">Max 5 per order</span>
      </div>
      <ButtonGroup>
        <Button variant="outline" size="icon-sm" aria-label="Decrease quantity" disabled={qty <= 1} onClick={() => setQty(qty - 1)}>
          <MinusIcon />
        </Button>
        <ButtonGroupText className="h-7 w-9 justify-center tabular-nums">{qty}</ButtonGroupText>
        <Button variant="outline" size="icon-sm" aria-label="Increase quantity" disabled={qty >= 5} onClick={() => setQty(qty + 1)}>
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}`,
  },
  {
    name: "FilterChipButtons",
    description: "Single-select filter chips built from small buttons with a pressed state.",
    code: `
const filters = ["All", "Unread", "Mentions", "Assigned", "Archived"]

export default function FilterChipButtons() {
  const [active, setActive] = React.useState("All")

  return (
    <div className="flex max-w-sm flex-wrap gap-1.5">
      {filters.map((filter) => (
        <Button
          key={filter}
          size="xs"
          variant={active === filter ? "default" : "outline"}
          aria-pressed={active === filter}
          onClick={() => setActive(filter)}
          className="rounded-full px-3"
        >
          {filter}
        </Button>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ThemeSwitchIconButton",
    description: "Icon button that cross-fades between sun and moon icons when toggled.",
    code: `
export default function ThemeSwitchIconButton() {
  const [dark, setDark] = React.useState(false)

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setDark(!dark)}
      className="relative"
    >
      <SunIcon className={cn("absolute transition-all", dark ? "scale-0 -rotate-90" : "scale-100 rotate-0")} />
      <MoonIcon className={cn("absolute transition-all", dark ? "scale-100 rotate-0" : "scale-0 rotate-90")} />
    </Button>
  )
}`,
  },
  {
    name: "LoadMoreButton",
    description: "Activity feed with a load more button that shows loading and an end-of-list state.",
    code: `
const all = [
  "Lena merged PR #204",
  "Omar commented on Pricing page",
  "Deploy #88 succeeded",
  "Ivy invited 2 teammates",
  "Billing plan changed to Team",
  "Noah closed issue #61",
  "Weekly report generated",
]

export default function LoadMoreButton() {
  const [count, setCount] = React.useState(3)
  const [loading, setLoading] = React.useState(false)
  const finished = count >= all.length

  function loadMore() {
    setLoading(true)
    setTimeout(() => {
      setCount((c) => Math.min(c + 2, all.length))
      setLoading(false)
    }, 700)
  }

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <ul className="divide-y border text-xs">
        {all.slice(0, count).map((item) => (
          <li key={item} className="px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
      <Button variant="secondary" size="sm" disabled={loading || finished} onClick={loadMore}>
        {loading && <Spinner data-icon="inline-start" />}
        {finished ? "You're all caught up" : loading ? "Loading..." : "Load more"}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "GradientHeroCta",
    description: "Large hero call-to-action with a gradient fill and an arrow that slides on hover.",
    code: `
export default function GradientHeroCta() {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <h3 className="text-lg font-semibold">Ship your next idea this weekend</h3>
      <div className="flex flex-wrap justify-center gap-2">
        <Button size="lg" className="group bg-linear-to-r from-violet-600 to-fuchsia-500 text-white hover:opacity-90">
          Start building free
          <ArrowRightIcon data-icon="inline-end" className="transition-transform group-hover:translate-x-0.5" />
        </Button>
        <Button size="lg" variant="ghost">
          <PlayIcon data-icon="inline-start" />
          Watch demo
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "AddToCartButton",
    description: "Add to cart button that animates through adding and added states beside the price.",
    code: `
export default function AddToCartButton() {
  const [state, setState] = React.useState<"idle" | "adding" | "added">("idle")

  function add() {
    setState("adding")
    setTimeout(() => setState("added"), 800)
  }

  return (
    <div className="flex w-full max-w-xs items-center justify-between gap-3 border p-3">
      <div className="flex flex-col">
        <span className="text-sm font-medium">Linen tote bag</span>
        <span className="text-sm text-muted-foreground">$38.00</span>
      </div>
      <Button
        variant={state === "added" ? "secondary" : "default"}
        disabled={state === "adding"}
        onClick={state === "added" ? () => setState("idle") : add}
        className="w-32"
      >
        {state === "idle" && <ShoppingCartIcon data-icon="inline-start" />}
        {state === "adding" && <Spinner data-icon="inline-start" />}
        {state === "added" && <CheckIcon data-icon="inline-start" />}
        {state === "idle" ? "Add to cart" : state === "adding" ? "Adding" : "In cart"}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "MediaPlayerControls",
    description: "Audio player transport with skip, play and pause icon buttons of different sizes.",
    code: `
export default function MediaPlayerControls() {
  const [playing, setPlaying] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3 border p-4">
      <div className="text-center">
        <p className="text-sm font-medium">Low Tide Sessions</p>
        <p className="text-xs text-muted-foreground">Marlow &amp; the Lanterns</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon-sm" aria-label="Shuffle">
          <ShuffleIcon />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Previous track">
          <SkipBackIcon />
        </Button>
        <Button size="icon-lg" className="size-11 rounded-full" aria-label={playing ? "Pause" : "Play"} onClick={() => setPlaying(!playing)}>
          {playing ? <PauseIcon className="size-5" /> : <PlayIcon className="size-5" />}
        </Button>
        <Button variant="ghost" size="icon" aria-label="Next track">
          <SkipForwardIcon />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Repeat">
          <RepeatIcon />
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "VoteButtons",
    description: "Vertical upvote and downvote buttons around a score, as in a forum thread.",
    code: `
export default function VoteButtons() {
  const [vote, setVote] = React.useState<1 | 0 | -1>(0)
  const score = 132 + vote

  return (
    <div className="flex w-full max-w-sm gap-3 border p-3">
      <div className="flex flex-col items-center">
        <Button
          variant={vote === 1 ? "secondary" : "ghost"}
          size="icon-sm"
          aria-label="Upvote"
          aria-pressed={vote === 1}
          onClick={() => setVote(vote === 1 ? 0 : 1)}
        >
          <ChevronUpIcon />
        </Button>
        <span className="text-xs font-semibold tabular-nums">{score}</span>
        <Button
          variant={vote === -1 ? "secondary" : "ghost"}
          size="icon-sm"
          aria-label="Downvote"
          aria-pressed={vote === -1}
          onClick={() => setVote(vote === -1 ? 0 : -1)}
        >
          <ChevronDownIcon />
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium">How do you organise design tokens across brands?</p>
        <p className="text-xs text-muted-foreground">Asked by tomasz.k · 24 answers</p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "EmptyStateCtaButtons",
    description: "Empty state with a primary create button and a secondary import button.",
    code: `
export default function EmptyStateCtaButtons() {
  return (
    <Empty className="w-full max-w-sm border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <UsersIcon />
        </EmptyMedia>
        <EmptyTitle>No contacts yet</EmptyTitle>
        <EmptyDescription>Add your first contact or import a list from a CSV file.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button size="sm">
            <PlusIcon data-icon="inline-start" />
            Add contact
          </Button>
          <Button size="sm" variant="outline">
            <UploadIcon data-icon="inline-start" />
            Import
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  )
}`,
  },
  {
    name: "IntegrationConnectButtons",
    description: "Integration list where each row shows a connect, connected or reconnect button state.",
    code: `
const initial = [
  { name: "Calendar sync", icon: CalendarIcon, status: "connected" },
  { name: "Team chat", icon: MessageSquareIcon, status: "disconnected" },
  { name: "Cloud storage", icon: CloudIcon, status: "error" },
]

export default function IntegrationConnectButtons() {
  const [items, setItems] = React.useState(initial)

  function connect(name: string) {
    setItems(items.map((item) => (item.name === name ? { ...item, status: "connected" } : item)))
  }

  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      {items.map((item) => (
        <div key={item.name} className="flex items-center gap-3 p-3">
          <div className="flex size-8 items-center justify-center bg-muted">
            <item.icon className="size-4" />
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-medium">{item.name}</span>
            {item.status === "error" && <span className="text-xs text-destructive">Token expired</span>}
          </div>
          {item.status === "connected" && (
            <Button variant="ghost" size="sm" disabled>
              <CheckIcon data-icon="inline-start" />
              Connected
            </Button>
          )}
          {item.status === "disconnected" && (
            <Button variant="outline" size="sm" onClick={() => connect(item.name)}>
              Connect
            </Button>
          )}
          {item.status === "error" && (
            <Button variant="destructive" size="sm" onClick={() => connect(item.name)}>
              <RefreshCwIcon data-icon="inline-start" />
              Reconnect
            </Button>
          )}
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "InvalidSubmitButton",
    description: "Form submit button that switches to its aria-invalid style while required fields are empty.",
    code: `
export default function InvalidSubmitButton() {
  const [email, setEmail] = React.useState("")
  const [tried, setTried] = React.useState(false)
  const invalid = tried && !email.includes("@")

  return (
    <form
      className="flex w-full max-w-xs flex-col gap-2"
      onSubmit={(event) => {
        event.preventDefault()
        setTried(true)
      }}
    >
      <Input
        type="email"
        placeholder="you@example.com"
        value={email}
        aria-invalid={invalid}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Button type="submit" variant="outline" aria-invalid={invalid}>
        Join waitlist
      </Button>
      {invalid && <p className="text-xs text-destructive">Enter a valid email address to continue.</p>}
    </form>
  )
}`,
  },
  {
    name: "RecordToggleButton",
    description: "Screen recording toggle with a pulsing dot and elapsed timer while active.",
    code: `
export default function RecordToggleButton() {
  const [recording, setRecording] = React.useState(false)
  const [seconds, setSeconds] = React.useState(0)

  React.useEffect(() => {
    if (!recording) return
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [recording])

  const time = String(Math.floor(seconds / 60)).padStart(2, "0") + ":" + String(seconds % 60).padStart(2, "0")

  return (
    <Button
      variant={recording ? "destructive" : "outline"}
      onClick={() => {
        setRecording(!recording)
        if (recording) setSeconds(0)
      }}
      className="w-40"
    >
      <span className={cn("size-2.5 rounded-full bg-destructive", recording && "animate-pulse")} />
      {recording ? <span className="tabular-nums">Stop · {time}</span> : "Start recording"}
    </Button>
  )
}`,
  },
  {
    name: "AccountMenuButton",
    description: "Ghost button with avatar, name and chevron that opens an account dropdown menu.",
    code: `
export default function AccountMenuButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" className="h-auto gap-2 px-2 py-1.5" />}>
        <Avatar size="sm">
          <AvatarFallback>DK</AvatarFallback>
        </Avatar>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-xs font-medium">Dara Kim</span>
          <span className="text-[10px] text-muted-foreground">Admin</span>
        </span>
        <ChevronsUpDownIcon data-icon="inline-end" className="text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon />
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
  },
  {
    name: "CookieConsentButtons",
    description: "Cookie banner with reject, customize and accept buttons in descending emphasis.",
    code: `
export default function CookieConsentButtons() {
  const [choice, setChoice] = React.useState<string | null>(null)

  if (choice) {
    return (
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <CheckIcon className="size-3.5" />
        Preference saved: {choice}
      </p>
    )
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-3 border bg-background p-4">
      <div className="flex items-start gap-2">
        <CookieIcon className="mt-0.5 size-4 shrink-0" />
        <p className="text-xs text-muted-foreground">
          We use cookies to understand how the site is used and to improve your experience.
        </p>
      </div>
      <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <Button variant="ghost" size="sm" onClick={() => setChoice("essential only")}>
          Reject all
        </Button>
        <Button variant="outline" size="sm" onClick={() => setChoice("custom")}>
          Customize
        </Button>
        <Button size="sm" onClick={() => setChoice("all cookies")}>
          Accept all
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ChatComposerSendButton",
    description: "Chat composer with attach and voice icon buttons and a send button disabled until text is typed.",
    code: `
export default function ChatComposerSendButton() {
  const [message, setMessage] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-2">
      <Textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Message #design-crit"
        className="min-h-14 resize-none border-0 p-1 shadow-none focus-visible:ring-0 dark:bg-transparent"
      />
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <Button variant="ghost" size="icon-sm" aria-label="Attach file">
            <PaperclipIcon />
          </Button>
          <Button variant="ghost" size="icon-sm" aria-label="Record voice note">
            <MicIcon />
          </Button>
        </div>
        <Button size="icon-sm" aria-label="Send message" disabled={!message.trim()} onClick={() => setMessage("")}>
          <SendIcon />
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "StepNavigationButtons",
    description: "Back and Next buttons for a multi-step form where Next becomes Finish on the last step.",
    code: `
const steps = ["Profile", "Company", "Plan"]

export default function StepNavigationButtons() {
  const [step, setStep] = React.useState(0)
  const last = step === steps.length - 1

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex gap-1">
        {steps.map((label, index) => (
          <div key={label} className={cn("h-1 flex-1", index <= step ? "bg-primary" : "bg-muted")} />
        ))}
      </div>
      <p className="text-sm font-medium">
        Step {step + 1}: {steps[step]}
      </p>
      <div className="flex justify-between">
        <Button variant="ghost" disabled={step === 0} onClick={() => setStep(step - 1)}>
          <ArrowLeftIcon data-icon="inline-start" />
          Back
        </Button>
        <Button onClick={() => setStep(last ? 0 : step + 1)}>
          {last ? "Finish" : "Next"}
          {last ? <CheckIcon data-icon="inline-end" /> : <ArrowRightIcon data-icon="inline-end" />}
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "InlineLinkButtons",
    description: "Link-variant buttons used inline within helper text on a sign-in form.",
    code: `
export default function InlineLinkButtons() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2 text-xs text-muted-foreground">
      <div className="flex items-center justify-between">
        <span>Password</span>
        <Button variant="link" size="xs" className="h-auto p-0">
          Forgot password?
        </Button>
      </div>
      <p>
        Didn&apos;t get the verification email?{" "}
        <Button variant="link" size="xs" className="h-auto p-0">
          Resend it
        </Button>
      </p>
    </div>
  )
}`,
  },
  {
    name: "RowActionTooltipButtons",
    description: "Table row actions as small icon buttons, each with a tooltip and a destructive delete.",
    code: `
export default function RowActionTooltipButtons() {
  const actions = [
    { label: "Edit", icon: PencilIcon, variant: "ghost" },
    { label: "Duplicate", icon: CopyIcon, variant: "ghost" },
    { label: "Delete", icon: Trash2Icon, variant: "destructive" },
  ] as const

  return (
    <div className="flex w-full max-w-sm items-center justify-between border px-3 py-2">
      <div className="flex flex-col">
        <span className="text-sm font-medium">Welcome email</span>
        <span className="text-xs text-muted-foreground">Sent to 1,204 contacts</span>
      </div>
      <div className="flex gap-1">
        {actions.map((action) => (
          <Tooltip key={action.label}>
            <TooltipTrigger render={<Button variant={action.variant} size="icon-xs" aria-label={action.label} />}>
              <action.icon />
            </TooltipTrigger>
            <TooltipContent>{action.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "DateRangePresetButtons",
    description: "Extra-small preset buttons for picking a dashboard date range.",
    code: `
const presets = ["Today", "7D", "30D", "90D", "YTD"]

export default function DateRangePresetButtons() {
  const [range, setRange] = React.useState("30D")

  return (
    <div className="flex items-center gap-2">
      <CalendarRangeIcon className="size-4 text-muted-foreground" />
      <div className="flex border p-0.5">
        {presets.map((preset) => (
          <Button
            key={preset}
            size="xs"
            variant={range === preset ? "secondary" : "ghost"}
            aria-pressed={range === preset}
            onClick={() => setRange(preset)}
          >
            {preset}
          </Button>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "ShowMoreToggleButton",
    description: "Show more and show less toggle that rotates its chevron as the text expands.",
    code: `
export default function ShowMoreToggleButton() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-1">
      <p className={cn("text-xs text-muted-foreground", !open && "line-clamp-2")}>
        The Alder cabin sits on a quiet ridge two hours north of the city. It sleeps six across three
        bedrooms, has a wood-burning stove and a covered deck facing the lake, and is a short walk to
        hiking trails, a small general store and a public boat launch.
      </p>
      <Button variant="link" size="xs" className="px-0" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? "Show less" : "Show more"}
        <ChevronDownIcon data-icon="inline-end" className={cn("transition-transform", open && "rotate-180")} />
      </Button>
    </div>
  )
}`,
  },
  {
    name: "RefreshDataButton",
    description: "Refresh button whose icon spins while data reloads and that updates a last-synced label.",
    code: `
export default function RefreshDataButton() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [synced, setSynced] = React.useState("5 minutes ago")

  function refresh() {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
      setSynced("just now")
    }, 1000)
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-muted-foreground">Last synced {synced}</span>
      <Button variant="outline" size="sm" disabled={refreshing} onClick={refresh}>
        <RefreshCwIcon data-icon="inline-start" className={cn(refreshing && "animate-spin")} />
        Refresh
      </Button>
    </div>
  )
}`,
  },
  {
    name: "ResponsiveIconLabelButtons",
    description: "Toolbar buttons that show icon-only on narrow screens and add labels from the small breakpoint.",
    code: `
const actions = [
  { label: "Filter", icon: ListFilterIcon },
  { label: "Sort", icon: ArrowUpDownIcon },
  { label: "Export", icon: DownloadIcon },
]

export default function ResponsiveIconLabelButtons() {
  return (
    <div className="flex items-center gap-1.5">
      {actions.map((action) => (
        <Button key={action.label} variant="outline" size="sm" aria-label={action.label}>
          <action.icon data-icon="inline-start" />
          <span className="hidden sm:inline">{action.label}</span>
        </Button>
      ))}
      <Button size="sm">
        <PlusIcon data-icon="inline-start" />
        <span className="hidden sm:inline">New record</span>
      </Button>
    </div>
  )
}`,
  },
]

export default examples
