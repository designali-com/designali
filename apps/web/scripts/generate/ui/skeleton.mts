import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "ProfileHeaderSkeleton",
    description: "Placeholder for a profile header with cover, avatar, name, bio, and follow button.",
    code: `
export default function ProfileHeaderSkeleton() {
  return (
    <div className="w-full max-w-md border">
      <Skeleton className="h-24 w-full" />
      <div className="flex flex-col gap-3 px-4 pb-4">
        <div className="-mt-8 flex items-end justify-between">
          <Skeleton className="size-16 rounded-full border-4 border-background" />
          <Skeleton className="h-8 w-24" />
        </div>
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-3 w-24" />
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ArticleSkeleton",
    description: "Long-form article placeholder with title, byline, hero block, and paragraph lines.",
    code: `
export default function ArticleSkeleton() {
  return (
    <article className="flex w-full max-w-md flex-col gap-4">
      <Skeleton className="h-3 w-20" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
      </div>
      <div className="flex items-center gap-2">
        <Skeleton className="size-7 rounded-full" />
        <Skeleton className="h-3 w-28" />
        <Skeleton className="h-3 w-16" />
      </div>
      <Skeleton className="aspect-[16/9] w-full" />
      {[100, 96, 92, 60].map((w, i) => (
        <Skeleton key={i} className="h-3" style={{ width: w + "%" }} />
      ))}
    </article>
  )
}`,
  },
  {
    name: "CommentListSkeleton",
    description: "Threaded comments placeholder with nested replies and action row stubs.",
    code: `
const rows = [
  { indent: false, lines: 2 },
  { indent: true, lines: 1 },
  { indent: true, lines: 2 },
  { indent: false, lines: 1 },
]

export default function CommentListSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-5">
      {rows.map((row, i) => (
        <div key={i} className={cn("flex gap-3", row.indent && "ms-10")}>
          <Skeleton className="size-8 shrink-0 rounded-full" />
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex gap-2">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-3 w-10" />
            </div>
            {Array.from({ length: row.lines }).map((_, j) => (
              <Skeleton key={j} className={cn("h-3", j === row.lines - 1 ? "w-2/3" : "w-full")} />
            ))}
            <div className="flex gap-3">
              <Skeleton className="h-2.5 w-8" />
              <Skeleton className="h-2.5 w-10" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ChatMessagesSkeleton",
    description: "Chat conversation placeholder with alternating incoming and outgoing bubbles.",
    code: `
const bubbles = [
  { mine: false, w: "w-48" },
  { mine: false, w: "w-32" },
  { mine: true, w: "w-56" },
  { mine: false, w: "w-40" },
  { mine: true, w: "w-24" },
  { mine: true, w: "w-44" },
]

export default function ChatMessagesSkeleton() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
      {bubbles.map((b, i) => (
        <div key={i} className={cn("flex items-end gap-2", b.mine && "flex-row-reverse")}>
          {!b.mine && <Skeleton className="size-6 shrink-0 rounded-full" />}
          <Skeleton className={cn("h-8", b.w, b.mine && "bg-primary/20")} />
        </div>
      ))}
      <div className="mt-2 flex gap-2 border-t pt-3">
        <Skeleton className="h-8 flex-1" />
        <Skeleton className="size-8" />
      </div>
    </div>
  )
}`,
  },
  {
    name: "ProductGridSkeleton",
    description: "Storefront product grid placeholder with image, title, and price for each card.",
    code: `
export default function ProductGridSkeleton() {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-4 sm:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-2">
          <Skeleton className="aspect-square w-full" />
          <Skeleton className="h-3 w-4/5" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "StatCardsSkeleton",
    description: "Dashboard KPI tiles placeholder with label, value, and trend chip.",
    code: `
export default function StatCardsSkeleton() {
  return (
    <div className="grid w-full max-w-lg grid-cols-2 gap-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i} size="sm">
          <CardContent className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="size-4" />
            </div>
            <Skeleton className="h-7 w-24" />
            <Skeleton className="h-4 w-14" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}`,
  },
  {
    name: "BarChartSkeleton",
    description: "Chart card placeholder with bars of varying height and axis labels.",
    code: `
const heights = [40, 65, 50, 80, 35, 90, 70, 55, 75, 45, 60, 85]

export default function BarChartSkeleton() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-48" />
      </CardHeader>
      <CardContent>
        <div className="flex h-40 items-end gap-2 border-b border-s ps-2">
          {heights.map((h, i) => (
            <Skeleton key={i} className="flex-1" style={{ height: h + "%" }} />
          ))}
        </div>
        <div className="mt-2 flex justify-between ps-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-2.5 w-6" />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "LineChartSkeleton",
    description: "Trend chart placeholder using a muted SVG line over grid rows with a legend.",
    code: `
export default function LineChartSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 border p-4">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-6 w-32" />
        </div>
        <Skeleton className="h-7 w-24" />
      </div>
      <div className="relative h-36 animate-pulse">
        <div className="absolute inset-0 flex flex-col justify-between">
          {Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-px bg-muted" />)}
        </div>
        <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="absolute inset-0 size-full text-muted">
          <path d="M0 80 L40 60 L80 70 L120 40 L160 50 L200 25 L240 35 L300 10" fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-1.5"><Skeleton className="size-2.5" /><Skeleton className="h-2.5 w-14" /></div>
        <div className="flex items-center gap-1.5"><Skeleton className="size-2.5" /><Skeleton className="h-2.5 w-16" /></div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "DataTableSkeleton",
    description: "Admin data table placeholder with toolbar, checkbox column, status pills, and pagination.",
    code: `
export default function DataTableSkeleton() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <div className="flex justify-between gap-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-8 w-20" />
      </div>
      <div className="border">
        <div className="flex items-center gap-3 border-b bg-muted/40 px-3 py-2.5">
          <Skeleton className="size-4" />
          <Skeleton className="h-3 w-24" />
          <Skeleton className="ms-auto h-3 w-16" />
          <Skeleton className="h-3 w-12" />
        </div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3 border-b px-3 py-3 last:border-b-0">
            <Skeleton className="size-4" />
            <Skeleton className="size-6 rounded-full" />
            <Skeleton className="h-3 w-28" />
            <Skeleton className="ms-auto h-5 w-16" />
            <Skeleton className="h-3 w-12" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-3 w-24" />
        <div className="flex gap-1">
          <Skeleton className="size-7" />
          <Skeleton className="size-7" />
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "FormSkeleton",
    description: "Settings form placeholder with label and input pairs, a textarea, and actions.",
    code: `
export default function FormSkeleton() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-3 w-56" />
      </div>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-8 w-full" />
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-20 w-full" />
      </div>
      <div className="flex justify-end gap-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-28" />
      </div>
    </div>
  )
}`,
  },
  {
    name: "SidebarNavSkeleton",
    description: "App sidebar placeholder with workspace header, grouped nav items, and user footer.",
    code: `
export default function SidebarNavSkeleton() {
  return (
    <div className="flex h-96 w-60 flex-col border bg-sidebar">
      <div className="flex items-center gap-2 border-b p-3">
        <Skeleton className="size-8" />
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-2.5 w-14" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-3">
        {[4, 3].map((count, g) => (
          <div key={g} className="flex flex-col gap-2.5">
            <Skeleton className="h-2.5 w-16" />
            {Array.from({ length: count }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="size-4" />
                <Skeleton className="h-3" style={{ width: 60 + ((i * 23) % 50) + "px" }} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t p-3">
        <Skeleton className="size-7 rounded-full" />
        <Skeleton className="h-3 w-28" />
      </div>
    </div>
  )
}`,
  },
  {
    name: "NotificationListSkeleton",
    description: "Notification feed placeholder with icon tiles, two-line text, and timestamps.",
    code: `
export default function NotificationListSkeleton() {
  return (
    <div className="w-full max-w-sm divide-y border">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex gap-3 p-3">
          <Skeleton className="size-9 shrink-0" />
          <div className="flex flex-1 flex-col gap-1.5">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-3/5" />
          </div>
          <Skeleton className="h-2.5 w-8" />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "PricingCardsSkeleton",
    description: "Pricing tier placeholders with price, feature list, and a highlighted middle plan.",
    code: `
export default function PricingCardsSkeleton() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
      {[0, 1, 2].map((i) => (
        <div key={i} className={cn("flex flex-col gap-4 border p-4", i === 1 && "border-primary/40")}>
          <Skeleton className="h-4 w-16" />
          <div className="flex items-end gap-1">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-3 w-8" />
          </div>
          <div className="flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, j) => (
              <div key={j} className="flex items-center gap-2">
                <Skeleton className="size-3 rounded-full" />
                <Skeleton className="h-3 flex-1" />
              </div>
            ))}
          </div>
          <Skeleton className={cn("h-8 w-full", i === 1 && "bg-primary/20")} />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "VideoCardSkeleton",
    description: "Video listing placeholder with a 16:9 thumbnail, duration chip, channel avatar, and meta.",
    code: `
export default function VideoCardSkeleton() {
  return (
    <div className="grid w-full max-w-lg grid-cols-1 gap-4 sm:grid-cols-2">
      {[0, 1].map((i) => (
        <div key={i} className="flex flex-col gap-3">
          <div className="relative">
            <Skeleton className="aspect-video w-full" />
            <PlayIcon className="absolute inset-0 m-auto size-6 text-muted-foreground/40" />
            <Skeleton className="absolute end-2 bottom-2 h-4 w-10 bg-foreground/10" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="size-8 shrink-0 rounded-full" />
            <div className="flex flex-1 flex-col gap-1.5">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-2/3" />
              <Skeleton className="h-2.5 w-1/2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "InboxSkeleton",
    description: "Email inbox placeholder with sender, subject, preview, and unread markers.",
    code: `
export default function InboxSkeleton() {
  return (
    <div className="w-full max-w-md border">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex gap-3 border-b px-3 py-3 last:border-b-0">
          <div className="flex w-2 justify-center pt-1">
            {i < 2 && <Skeleton className="size-2 rounded-full bg-primary/30" />}
          </div>
          <div className="flex flex-1 flex-col gap-1.5">
            <div className="flex justify-between">
              <Skeleton className="h-3 w-28" />
              <Skeleton className="h-2.5 w-10" />
            </div>
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-2.5 w-full" />
          </div>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "KanbanBoardSkeleton",
    description: "Project board placeholder with columns of task cards in varying counts.",
    code: `
const columns = [3, 2, 1]

export default function KanbanBoardSkeleton() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-3 gap-3">
      {columns.map((count, c) => (
        <div key={c} className="flex flex-col gap-2 bg-muted/40 p-2">
          <div className="flex items-center justify-between px-1 py-1">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-4 w-5" />
          </div>
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="flex flex-col gap-2 border bg-background p-2.5">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-2/3" />
              <div className="flex items-center justify-between pt-1">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="size-5 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "CalendarMonthSkeleton",
    description: "Month calendar placeholder with weekday headers, day cells, and scattered event bars.",
    code: `
const eventDays = new Set([3, 8, 9, 15, 22, 26, 30])

export default function CalendarMonthSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-32" />
        <div className="flex gap-1">
          <Skeleton className="size-7" />
          <Skeleton className="size-7" />
        </div>
      </div>
      <div className="grid grid-cols-7 border-s border-t">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={"h" + i} className="flex justify-center border-e border-b py-1.5">
            <Skeleton className="h-2.5 w-6" />
          </div>
        ))}
        {Array.from({ length: 35 }).map((_, i) => (
          <div key={i} className="flex h-12 flex-col gap-1 border-e border-b p-1">
            <Skeleton className="h-2.5 w-3" />
            {eventDays.has(i) && <Skeleton className="h-2 w-full bg-primary/20" />}
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "FileGridSkeleton",
    description: "File manager grid placeholder with folder and file tiles plus names and sizes.",
    code: `
export default function FileGridSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center gap-1.5">
        <Skeleton className="h-3 w-12" />
        <span className="text-muted-foreground">/</span>
        <Skeleton className="h-3 w-20" />
      </div>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2 border p-3">
            <Skeleton className={cn(i < 3 ? "h-8 w-10" : "h-10 w-8")} />
            <Skeleton className="h-2.5 w-14" />
            <Skeleton className="h-2 w-8" />
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "PlaylistSkeleton",
    description: "Music playlist placeholder with cover art header and numbered track rows.",
    code: `
export default function PlaylistSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-end gap-4">
        <Skeleton className="size-24 shrink-0" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-2.5 w-14" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <div className="flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3 py-2">
            <span className="w-4 text-center text-xs text-muted-foreground tabular-nums">{i + 1}</span>
            <Skeleton className="size-9" />
            <div className="flex flex-1 flex-col gap-1.5">
              <Skeleton className="h-3 w-40" />
              <Skeleton className="h-2.5 w-24" />
            </div>
            <Skeleton className="h-2.5 w-8" />
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "LoadingToggleSkeleton",
    description: "Switch-controlled demo that swaps between a skeleton and the loaded team member card.",
    code: `
export default function LoadingToggleSkeleton() {
  const [loading, setLoading] = React.useState(true)
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="skeleton-loading">Simulate loading</Label>
        <Switch id="skeleton-loading" checked={loading} onCheckedChange={setLoading} />
      </div>
      <div className="flex items-center gap-3 border p-4" aria-busy={loading}>
        {loading ? (
          <>
            <Skeleton className="size-10 rounded-full" />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton className="h-3.5 w-32" />
              <Skeleton className="h-3 w-44" />
            </div>
            <Skeleton className="h-5 w-14" />
          </>
        ) : (
          <>
            <Avatar><AvatarFallback>ZA</AvatarFallback></Avatar>
            <div className="flex flex-1 flex-col">
              <span className="text-sm font-medium">Zara Ahmed</span>
              <span className="text-xs text-muted-foreground">Staff engineer · Platform</span>
            </div>
            <Badge variant="secondary">Online</Badge>
          </>
        )}
      </div>
    </div>
  )
}`,
  },
  {
    name: "SimulatedFetchSkeleton",
    description: "Weather-style card that shows a skeleton during a simulated fetch with a refresh button.",
    code: `
export default function SimulatedFetchSkeleton() {
  const [loading, setLoading] = React.useState(true)
  const [tick, setTick] = React.useState(0)

  React.useEffect(() => {
    const id = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(id)
  }, [tick])

  return (
    <div className="flex w-full max-w-xs flex-col gap-4 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">Exchange rate</span>
        <Button variant="ghost" size="icon-xs" aria-label="Refresh" disabled={loading} onClick={() => {
            setLoading(true)
            setTick((t) => t + 1)
          }}>
          <RefreshCwIcon className={cn(loading && "animate-spin")} />
        </Button>
      </div>
      {loading ? (
        <div className="flex flex-col gap-2">
          <Skeleton className="h-8 w-28" />
          <Skeleton className="h-3 w-36" />
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-semibold">1.0842</span>
          <span className="text-xs text-muted-foreground">EUR → USD · updated just now</span>
        </div>
      )}
    </div>
  )
}`,
  },
  {
    name: "MasonryGallerySkeleton",
    description: "Image gallery placeholder with masonry columns of varying tile heights.",
    code: `
const columns = [
  ["h-32", "h-20", "h-28"],
  ["h-20", "h-36", "h-16"],
  ["h-28", "h-16", "h-32"],
]

export default function MasonryGallerySkeleton() {
  return (
    <div className="grid w-full max-w-md grid-cols-3 gap-2">
      {columns.map((col, c) => (
        <div key={c} className="flex flex-col gap-2">
          {col.map((h, i) => (
            <Skeleton key={i} className={cn("w-full", h)} />
          ))}
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "SettingsTogglesSkeleton",
    description: "Settings list placeholder whose rows end in switch-shaped skeletons.",
    code: `
export default function SettingsTogglesSkeleton() {
  return (
    <div className="w-full max-w-md border">
      <div className="border-b p-4">
        <Skeleton className="h-4 w-32" />
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center justify-between gap-4 border-b p-4 last:border-b-0">
          <div className="flex flex-1 flex-col gap-1.5">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-2.5 w-48 max-w-full" />
          </div>
          <Skeleton className="h-4.5 w-8 rounded-full" />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "CheckoutSummarySkeleton",
    description: "Checkout order summary placeholder with line items, totals, and a pay button.",
    code: `
export default function CheckoutSummarySkeleton() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <Skeleton className="h-4 w-28" />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="size-12 shrink-0" />
            <div className="flex flex-1 flex-col gap-1.5">
              <Skeleton className="h-3 w-3/4" />
              <Skeleton className="h-2.5 w-1/3" />
            </div>
            <Skeleton className="h-3 w-12" />
          </div>
        ))}
        <Separator />
        {["w-16", "w-20", "w-12"].map((w, i) => (
          <div key={i} className="flex justify-between">
            <Skeleton className={cn("h-3", w)} />
            <Skeleton className="h-3 w-14" />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "TimelineSkeleton",
    description: "Vertical activity timeline placeholder with connector line and event nodes.",
    code: `
export default function TimelineSkeleton() {
  return (
    <ol className="flex w-full max-w-sm flex-col">
      {Array.from({ length: 4 }).map((_, i) => (
        <li key={i} className="relative flex gap-3 pb-6 last:pb-0">
          {i < 3 && <span className="absolute start-3 top-7 bottom-0 w-px bg-border" />}
          <Skeleton className="size-6 shrink-0 rounded-full" />
          <div className="flex flex-1 flex-col gap-1.5 pt-0.5">
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-2.5 w-20" />
          </div>
        </li>
      ))}
    </ol>
  )
}`,
  },
  {
    name: "SearchResultsSkeleton",
    description: "Live search input that shows result skeletons while a query is being debounced.",
    code: `
const pages = ["Quarterly planning template", "Quality assurance checklist", "Quick start for new hires"]

export default function SearchResultsSkeleton() {
  const [query, setQuery] = React.useState("")
  const [pending, setPending] = React.useState(false)

  React.useEffect(() => {
    if (!query) return
    const id = setTimeout(() => setPending(false), 700)
    return () => clearTimeout(id)
  }, [query])

  const results = pages.filter((p) => p.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupAddon><SearchIcon /></InputGroupAddon>
        <InputGroupInput value={query} onChange={(e) => {
            setQuery(e.target.value)
            setPending(e.target.value.length > 0)
          }} placeholder="Type to search, e.g. qu" />
      </InputGroup>
      <div className="flex flex-col gap-1 border p-2" aria-busy={pending}>
        {!query && <p className="p-2 text-xs text-muted-foreground">Start typing to search pages.</p>}
        {query && pending &&
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2 p-2">
              <Skeleton className="size-4" />
              <Skeleton className="h-3 flex-1" />
            </div>
          ))}
        {query && !pending && results.map((r) => (
          <div key={r} className="flex items-center gap-2 p-2 text-xs hover:bg-muted">
            <FileTextIcon className="size-4 text-muted-foreground" />
            {r}
          </div>
        ))}
        {query && !pending && results.length === 0 && <p className="p-2 text-xs text-muted-foreground">No pages found.</p>}
      </div>
    </div>
  )
}`,
  },
  {
    name: "TabsContentSkeleton",
    description: "Tabs where the active panel shows skeleton content until its data arrives.",
    code: `
export default function TabsContentSkeleton() {
  const [loaded, setLoaded] = React.useState<string[]>(["overview"])

  function handleChange(value: unknown) {
    const tab = String(value)
    if (loaded.includes(tab)) return
    setTimeout(() => setLoaded((prev) => [...prev, tab]), 1000)
  }

  return (
    <Tabs defaultValue="overview" onValueChange={handleChange} className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="usage">Usage</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      {["overview", "usage", "billing"].map((tab) => (
        <TabsContent key={tab} value={tab} className="border p-4">
          {loaded.includes(tab) ? (
            <div className="flex flex-col gap-1 text-xs">
              <span className="font-medium capitalize">{tab}</span>
              <span className="text-muted-foreground">Data for the {tab} panel is ready.</span>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3.5 w-24" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-2/3" />
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  )
}`,
  },
  {
    name: "TeamMembersSkeleton",
    description: "Team roster placeholder with avatar, name, email, role pill, and overflow menu stubs.",
    code: `
export default function TeamMembersSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-8 w-24" />
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton className="size-9 rounded-full" />
          <div className="flex flex-1 flex-col gap-1.5">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-2.5 w-40" />
          </div>
          <Skeleton className="h-5 w-16" />
          <Skeleton className="size-6" />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "LocationCardSkeleton",
    description: "Store locator card placeholder with a map area, pin, address lines, and hours.",
    code: `
export default function LocationCardSkeleton() {
  return (
    <div className="w-full max-w-sm border">
      <div className="relative">
        <Skeleton className="h-36 w-full" />
        <MapPinIcon className="absolute inset-0 m-auto size-6 text-muted-foreground/40" />
      </div>
      <div className="flex flex-col gap-3 p-4">
        <Skeleton className="h-4 w-40" />
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-1/2" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-8 flex-1" />
          <Skeleton className="h-8 flex-1" />
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "PartialLoadSkeleton",
    description: "Project card where the header is loaded but the metrics and members are still skeletons.",
    code: `
export default function PartialLoadSkeleton() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Helios redesign</CardTitle>
        <CardDescription>Marketing site · updated 2h ago</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-3">
          {["Tasks", "Open", "Done"].map((label) => (
            <div key={label} className="flex flex-col gap-1.5">
              <span className="text-xs text-muted-foreground">{label}</span>
              <Skeleton className="h-6 w-10" />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs text-muted-foreground">Members</span>
          <div className="flex -space-x-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="size-7 rounded-full border-2 border-card" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "InlineTextSkeleton",
    description: "Skeletons inlined within sentences for values that are still loading.",
    code: `
export default function InlineTextSkeleton() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 text-sm">
      <p>
        Your available balance is{" "}
        <Skeleton className="inline-block h-4 w-16 align-middle" />.
      </p>
      <p>
        Next payout of <Skeleton className="inline-block h-4 w-12 align-middle" /> arrives on{" "}
        <Skeleton className="inline-block h-4 w-20 align-middle" />.
      </p>
      <p className="text-xs text-muted-foreground">
        Synced with <Skeleton className="inline-block h-3 w-24 align-middle" /> moments ago.
      </p>
    </div>
  )
}`,
  },
  {
    name: "InvoiceDocumentSkeleton",
    description: "Invoice document placeholder with header blocks, line-item table, and total.",
    code: `
export default function InvoiceDocumentSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6 border p-6">
      <div className="flex justify-between">
        <Skeleton className="size-10" />
        <div className="flex flex-col items-end gap-1.5">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {[0, 1].map((i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <Skeleton className="h-2.5 w-12" />
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-3 w-20" />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 border-t pt-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="grid grid-cols-[1fr_40px_64px] gap-4">
            <Skeleton className="h-3" />
            <Skeleton className="h-3" />
            <Skeleton className="h-3" />
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-4 border-t pt-4">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  )
}`,
  },
  {
    name: "OrderTrackingSkeleton",
    description: "Shipment tracking placeholder with a horizontal step tracker and ETA block.",
    code: `
export default function OrderTrackingSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-5 border p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-5 w-36" />
        </div>
        <TruckIcon className="size-5 text-muted-foreground/40" />
      </div>
      <div className="flex items-center">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-1 items-center last:flex-none">
            <Skeleton className="size-4 rounded-full" />
            {i < 3 && <Skeleton className="mx-1 h-0.5 flex-1" />}
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-2.5 w-12" />
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "ContactsDirectorySkeleton",
    description: "Contacts directory placeholder grouped under real alphabetical section headers.",
    code: `
const sections = [
  { letter: "A", count: 2 },
  { letter: "B", count: 3 },
  { letter: "C", count: 1 },
]

export default function ContactsDirectorySkeleton() {
  return (
    <div className="flex w-full max-w-xs flex-col border">
      {sections.map((s) => (
        <div key={s.letter}>
          <div className="sticky top-0 bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">{s.letter}</div>
          {Array.from({ length: s.count }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2">
              <Skeleton className="size-8 rounded-full" />
              <div className="flex flex-col gap-1.5">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-2.5 w-16" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "CodeBlockSkeleton",
    description: "Code editor placeholder with line numbers and indented line skeletons of varying widths.",
    code: `
const lines = [
  { indent: 0, w: 40 },
  { indent: 1, w: 64 },
  { indent: 2, w: 52 },
  { indent: 2, w: 72 },
  { indent: 1, w: 20 },
  { indent: 0, w: 8 },
  { indent: 0, w: 0 },
  { indent: 0, w: 56 },
]

export default function CodeBlockSkeleton() {
  return (
    <div className="w-full max-w-md border bg-muted/30">
      <div className="flex items-center gap-1.5 border-b px-3 py-2">
        <Skeleton className="size-2.5 rounded-full" />
        <Skeleton className="size-2.5 rounded-full" />
        <Skeleton className="size-2.5 rounded-full" />
        <Skeleton className="ms-3 h-2.5 w-20" />
      </div>
      <div className="flex flex-col gap-2 p-3 font-mono">
        {lines.map((line, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-4 text-end text-[10px] text-muted-foreground tabular-nums">{i + 1}</span>
            {line.w > 0 && (
              <Skeleton className="h-3" style={{ marginInlineStart: line.indent * 16, width: line.w + "%" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "StaggeredPulseSkeleton",
    description: "Feed placeholder whose rows pulse with staggered animation delays for a wave effect.",
    code: `
export default function StaggeredPulseSkeleton() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {Array.from({ length: 5 }).map((_, i) => {
        const style = { animationDelay: i * 150 + "ms" }
        return (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="size-10 shrink-0" style={style} />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton className="h-3 w-3/4" style={style} />
              <Skeleton className="h-3 w-1/2" style={style} />
            </div>
          </div>
        )
      })}
    </div>
  )
}`,
  },
  {
    name: "SkeletonShapes",
    description: "Reference sheet of skeleton shapes: circle, pill, square, text line, and block.",
    code: `
const shapes = [
  { label: "Circle", el: <Skeleton className="size-12 rounded-full" /> },
  { label: "Square", el: <Skeleton className="size-12" /> },
  { label: "Pill", el: <Skeleton className="h-6 w-20 rounded-full" /> },
  { label: "Text", el: <Skeleton className="h-3 w-24" /> },
  { label: "Button", el: <Skeleton className="h-8 w-24" /> },
  { label: "Block", el: <Skeleton className="h-12 w-24" /> },
]

export default function SkeletonShapes() {
  return (
    <div className="grid w-full max-w-md grid-cols-3 gap-3">
      {shapes.map((shape) => (
        <div key={shape.label} className="flex flex-col items-center gap-2 border p-3">
          <div className="flex h-12 items-center">{shape.el}</div>
          <span className="text-xs text-muted-foreground">{shape.label}</span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "WeatherWidgetSkeleton",
    description: "Weather widget placeholder with current conditions and a five-day forecast row.",
    code: `
export default function WeatherWidgetSkeleton() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 border p-4">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-10 w-16" />
          <Skeleton className="h-3 w-24" />
        </div>
        <Skeleton className="size-14 rounded-full" />
      </div>
      <div className="grid grid-cols-5 gap-2 border-t pt-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <Skeleton className="h-2.5 w-6" />
            <Skeleton className="size-5 rounded-full" />
            <Skeleton className="h-2.5 w-5" />
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "CourseCardSkeleton",
    description: "Learning platform course card placeholder with lesson count and a progress track.",
    code: `
export default function CourseCardSkeleton() {
  return (
    <div className="flex w-full max-w-sm gap-4 border p-3">
      <Skeleton className="h-20 w-28 shrink-0" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3 w-2/3" />
        <div className="mt-auto flex flex-col gap-1.5">
          <div className="flex justify-between">
            <Skeleton className="h-2.5 w-16" />
            <Skeleton className="h-2.5 w-8" />
          </div>
          <Skeleton className="h-1 w-full" />
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "InfiniteScrollSkeleton",
    description: "Loaded list items followed by skeleton rows and a spinner for the next page.",
    code: `
const loaded = [
  { title: "Migrate auth to passkeys", owner: "Ola N." },
  { title: "Archive legacy webhooks", owner: "Ben T." },
  { title: "Audit S3 bucket policies", owner: "Rina P." },
]

export default function InfiniteScrollSkeleton() {
  return (
    <div className="flex w-full max-w-sm flex-col border">
      {loaded.map((item) => (
        <div key={item.title} className="flex items-center justify-between border-b px-3 py-2.5 text-xs">
          <span className="font-medium">{item.title}</span>
          <span className="text-muted-foreground">{item.owner}</span>
        </div>
      ))}
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className="flex items-center justify-between border-b px-3 py-3">
          <Skeleton className="h-3 w-40" />
          <Skeleton className="h-3 w-12" />
        </div>
      ))}
      <div className="flex items-center justify-center gap-2 py-3 text-xs text-muted-foreground">
        <Spinner />
        Loading more
      </div>
    </div>
  )
}`,
  },
  {
    name: "AppShellSkeleton",
    description: "Full mini app shell placeholder with sidebar, top bar, stat row, and content panel.",
    code: `
export default function AppShellSkeleton() {
  return (
    <div className="flex h-72 w-full max-w-xl border">
      <div className="hidden w-36 flex-col gap-3 border-e p-3 sm:flex">
        <Skeleton className="h-6 w-20" />
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-3 w-full" />
        ))}
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between border-b p-3">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="size-7 rounded-full" />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-3">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => <Skeleton key={i} className="h-14" />)}
          </div>
          <Skeleton className="flex-1" />
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "SocialPostSkeleton",
    description: "Social feed post placeholder with author header, text, media, and an action bar.",
    code: `
export default function SocialPostSkeleton() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <Skeleton className="size-9 rounded-full" />
        <div className="flex flex-1 flex-col gap-1.5">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-2.5 w-16" />
        </div>
        <MoreHorizontalIcon className="size-4 text-muted-foreground/40" />
      </div>
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
      <Skeleton className="aspect-[4/3] w-full" />
      <div className="flex gap-6 text-muted-foreground/40">
        <HeartIcon className="size-4" />
        <MessageCircleIcon className="size-4" />
        <RepeatIcon className="size-4" />
        <BookmarkIcon className="ms-auto size-4" />
      </div>
    </div>
  )
}`,
  },
  {
    name: "StoriesRowSkeleton",
    description: "Horizontal stories strip placeholder with ringed circles and name stubs.",
    code: `
export default function StoriesRowSkeleton() {
  return (
    <div className="flex w-full max-w-md gap-3 overflow-x-auto pb-1">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="flex shrink-0 flex-col items-center gap-1.5">
          <div className="rounded-full border-2 border-muted p-0.5">
            <Skeleton className="size-12 rounded-full" />
          </div>
          <Skeleton className="h-2.5 w-10" />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "AccessibleSkeleton",
    description: "Screen-reader friendly loading region using role status, aria-busy, and hidden skeletons.",
    code: `
export default function AccessibleSkeleton() {
  return (
    <div role="status" aria-busy="true" aria-live="polite" className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <span className="sr-only">Loading your recent invoices…</span>
      <div aria-hidden="true" className="flex flex-col gap-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-2.5 w-16" />
            </div>
            <Skeleton className="h-4 w-14" />
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">Placeholders are hidden from assistive tech; a status message is announced instead.</p>
    </div>
  )
}`,
  },
  {
    name: "ReviewsSkeleton",
    description: "Product reviews placeholder with rating summary bars and individual review blocks.",
    code: `
export default function ReviewsSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-5">
      <div className="flex gap-6">
        <div className="flex flex-col items-center gap-2">
          <Skeleton className="h-9 w-12" />
          <div className="flex gap-0.5 text-muted">
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} className="size-3 fill-current" />)}
          </div>
          <Skeleton className="h-2.5 w-14" />
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          {[90, 60, 30, 15, 8].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-2 text-[10px] text-muted-foreground">{5 - i}</span>
              <Skeleton className="h-1.5" style={{ width: w + "%" }} />
            </div>
          ))}
        </div>
      </div>
      {[0, 1].map((i) => (
        <div key={i} className="flex flex-col gap-2 border-t pt-4">
          <div className="flex items-center gap-2">
            <Skeleton className="size-6 rounded-full" />
            <Skeleton className="h-3 w-24" />
            <Skeleton className="ms-auto h-2.5 w-12" />
          </div>
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-3/4" />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "TransactionsSkeleton",
    description: "Banking transactions placeholder grouped by date with right-aligned amounts.",
    code: `
const groups = [
  { label: "Today", count: 2 },
  { label: "Yesterday", count: 3 },
]

export default function TransactionsSkeleton() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {groups.map((g) => (
        <div key={g.label} className="flex flex-col gap-3">
          <span className="text-xs font-medium text-muted-foreground">{g.label}</span>
          {Array.from({ length: g.count }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="size-9 rounded-full" />
              <div className="flex flex-1 flex-col gap-1.5">
                <Skeleton className="h-3 w-28" />
                <Skeleton className="h-2.5 w-16" />
              </div>
              <Skeleton className="h-3.5 w-14" />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "HeroSectionSkeleton",
    description: "Landing page hero placeholder with eyebrow, centered headline, subcopy, and CTAs.",
    code: `
export default function HeroSectionSkeleton() {
  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-4 py-6 text-center">
      <Skeleton className="h-5 w-28 rounded-full" />
      <div className="flex w-full flex-col items-center gap-2">
        <Skeleton className="h-8 w-11/12" />
        <Skeleton className="h-8 w-2/3" />
      </div>
      <div className="flex w-full flex-col items-center gap-1.5">
        <Skeleton className="h-3 w-4/5" />
        <Skeleton className="h-3 w-3/5" />
      </div>
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-10 w-28" />
      </div>
    </div>
  )
}`,
  },
]

export default examples
