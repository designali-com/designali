import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "VideoPlayerPlaceholder",
    description: "A 16:9 video player shell with a gradient poster, play button and control bar.",
    code: `
export default function VideoPlayerPlaceholder() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio ratio={16 / 9} className="overflow-hidden bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0 flex items-center justify-center">
          <Button size="icon-lg" variant="secondary" aria-label="Play video" className="rounded-full">
            <PlayIcon className="fill-current" />
          </Button>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-linear-to-t from-black/70 to-transparent px-3 pt-6 pb-2 text-white">
          <span className="font-mono text-[10px] tabular-nums">0:00</span>
          <div className="h-1 flex-1 bg-white/30">
            <div className="h-full w-1/4 bg-white" />
          </div>
          <span className="font-mono text-[10px] tabular-nums">12:48</span>
          <Volume2Icon className="size-3.5" />
          <MaximizeIcon className="size-3.5" />
        </div>
      </AspectRatio>
    </div>
  )
}`,
  },
  {
    name: "ProductCardSquare",
    description: "A storefront product card with a square gradient image area and price.",
    code: `
export default function ProductCardSquare() {
  return (
    <div className="w-full max-w-56 border">
      <AspectRatio ratio={1} className="bg-linear-to-br from-amber-200 to-orange-400 dark:from-amber-700 dark:to-orange-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-1/2 rounded-full bg-white/40 shadow-2xl ring-8 ring-white/20" />
        </div>
        <Badge className="absolute start-2 top-2">New</Badge>
      </AspectRatio>
      <div className="flex flex-col gap-1 p-3">
        <p className="text-sm font-medium">Stoneware dinner plate</p>
        <p className="text-xs text-muted-foreground">Set of 4  -  Oat glaze</p>
        <p className="mt-1 text-sm font-semibold">$48.00</p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "RatioSwitcherToggle",
    description: "Toggle group that switches a live preview between common aspect ratios.",
    code: `
const ratios = [
  { label: "16:9", value: 16 / 9 },
  { label: "4:3", value: 4 / 3 },
  { label: "1:1", value: 1 },
  { label: "3:4", value: 3 / 4 },
]

export default function RatioSwitcherToggle() {
  const [label, setLabel] = React.useState("16:9")
  const ratio = ratios.find((item) => item.label === label)?.value ?? 16 / 9

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-3">
      <ToggleGroup
        variant="outline"
        size="sm"
        spacing={0}
        value={[label]}
        onValueChange={(value) => value[0] && setLabel(value[0] as string)}
      >
        {ratios.map((item) => (
          <ToggleGroupItem key={item.label} value={item.label}>
            {item.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex h-64 w-full items-center justify-center">
        <AspectRatio
          ratio={ratio}
          className="max-h-full w-full bg-linear-to-br from-sky-400 to-emerald-400 transition-all"
          style={{ maxWidth: ratio < 1 ? 256 * ratio : undefined }}
        >
          <span className="absolute inset-0 flex items-center justify-center font-mono text-sm font-semibold text-white">
            {label}
          </span>
        </AspectRatio>
      </div>
    </div>
  )
}`,
  },
  {
    name: "PhotoGalleryGrid",
    description: "A 3-column gallery of square tiles with hover captions.",
    code: `
const photos = [
  { title: "Dune", className: "from-amber-300 to-orange-600" },
  { title: "Lagoon", className: "from-cyan-300 to-blue-600" },
  { title: "Fern", className: "from-lime-300 to-emerald-600" },
  { title: "Dusk", className: "from-fuchsia-400 to-indigo-700" },
  { title: "Clay", className: "from-rose-300 to-red-600" },
  { title: "Fog", className: "from-slate-200 to-slate-500" },
]

export default function PhotoGalleryGrid() {
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-1">
      {photos.map((photo) => (
        <AspectRatio key={photo.title} ratio={1} className={cn("group overflow-hidden bg-linear-to-br", photo.className)}>
          <div className="absolute inset-0 flex items-end bg-black/0 p-2 transition-colors group-hover:bg-black/30">
            <span className="text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
              {photo.title}
            </span>
          </div>
        </AspectRatio>
      ))}
    </div>
  )
}`,
  },
  {
    name: "MapEmbedPlaceholder",
    description: "A 4:3 static map built from SVG streets with a location pin and address card.",
    code: `
export default function MapEmbedPlaceholder() {
  return (
    <div className="w-full max-w-sm border">
      <AspectRatio ratio={4 / 3} className="overflow-hidden bg-muted">
        <svg viewBox="0 0 400 300" className="absolute inset-0 size-full text-border" aria-hidden="true">
          <rect x="40" y="30" width="90" height="70" className="fill-emerald-500/15" />
          <rect x="250" y="180" width="120" height="90" className="fill-sky-500/15" />
          <g stroke="currentColor" strokeWidth="10" fill="none">
            <path d="M0 140 H400" />
            <path d="M190 0 V300" />
            <path d="M0 260 L400 40" strokeWidth="6" />
          </g>
          <g stroke="currentColor" strokeWidth="3" fill="none" opacity="0.7">
            <path d="M0 70 H400" />
            <path d="M0 210 H400" />
            <path d="M90 0 V300" />
            <path d="M300 0 V300" />
          </g>
        </svg>
        <div className="absolute start-1/2 top-[46%] flex -translate-x-1/2 -translate-y-full flex-col items-center rtl:translate-x-1/2">
          <MapPinIcon className="size-8 fill-primary text-primary-foreground" />
        </div>
      </AspectRatio>
      <div className="flex items-center justify-between gap-2 p-3">
        <div>
          <p className="text-sm font-medium">Fern & Ember Coffee</p>
          <p className="text-xs text-muted-foreground">218 Alder Street  -  0.4 mi</p>
        </div>
        <Button size="sm" variant="outline">
          <NavigationIcon data-icon="inline-start" />
          Directions
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "BlogPostCover",
    description: "A 2:1 blog cover with a gradient mesh and the title overlaid.",
    code: `
export default function BlogPostCover() {
  return (
    <article className="w-full max-w-md">
      <AspectRatio ratio={2} className="overflow-hidden bg-zinc-900">
        <div className="absolute -start-10 -top-10 size-48 rounded-full bg-violet-500/60 blur-3xl" />
        <div className="absolute -end-10 -bottom-16 size-56 rounded-full bg-teal-400/50 blur-3xl" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
          <Badge variant="secondary" className="mb-2">Engineering</Badge>
          <h3 className="text-lg leading-tight font-semibold text-balance">How we cut cold starts by 70% with lazy hydration</h3>
        </div>
      </AspectRatio>
      <p className="mt-2 text-xs text-muted-foreground">Ines Moreau  -  8 min read  -  Mar 18</p>
    </article>
  )
}`,
  },
  {
    name: "StoryCardPortrait",
    description: "A 9:16 social story frame with segmented progress bars and reply input.",
    code: `
export default function StoryCardPortrait() {
  return (
    <AspectRatio ratio={9 / 16} className="w-full max-w-44 overflow-hidden bg-linear-to-b from-orange-400 via-rose-500 to-purple-700">
      <div className="absolute inset-x-2 top-2 flex gap-1">
        {[100, 60, 0].map((value, index) => (
          <div key={index} className="h-0.5 flex-1 bg-white/40">
            <div className="h-full bg-white" style={{ width: value + "%" }} />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-2 top-5 flex items-center gap-2 text-white">
        <Avatar size="sm">
          <AvatarFallback>LP</AvatarFallback>
        </Avatar>
        <span className="text-xs font-medium">lena.paints</span>
        <span className="text-[10px] text-white/70">2h</span>
      </div>
      <p className="absolute inset-x-3 top-1/2 -translate-y-1/2 text-center text-lg font-semibold text-white">Studio open day this Saturday</p>
      <div className="absolute inset-x-2 bottom-2 flex items-center gap-2 border border-white/50 px-2 py-1.5 text-[10px] text-white/80">
        Send message
        <SendIcon className="ms-auto size-3" />
      </div>
    </AspectRatio>
  )
}`,
  },
  {
    name: "ProfileBannerAvatar",
    description: "A 3:1 profile banner with an overlapping avatar and follow button.",
    code: `
export default function ProfileBannerAvatar() {
  return (
    <div className="w-full max-w-md border">
      <AspectRatio ratio={3} className="bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-500" />
      <div className="flex items-end justify-between gap-3 px-4 pb-4">
        <Avatar className="-mt-8 size-16 ring-4 ring-background">
          <AvatarFallback className="text-lg">OB</AvatarFallback>
        </Avatar>
        <Button size="sm">Follow</Button>
      </div>
      <div className="px-4 pb-4">
        <p className="text-sm font-semibold">Oren Baxter</p>
        <p className="text-xs text-muted-foreground">Product designer  -  Lisbon</p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ChartPanelWide",
    description: "A 16:9 dashboard panel holding a responsive SVG area chart.",
    code: `
const points = [32, 40, 36, 52, 48, 64, 58, 72, 70, 84, 78, 92]

export default function ChartPanelWide() {
  const max = 100
  const path = points.map((value, index) => (index === 0 ? "M" : "L") + (index / (points.length - 1)) * 100 + " " + (max - value)).join(" ")

  return (
    <div className="w-full max-w-md border p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Monthly recurring revenue</p>
          <p className="text-xl font-semibold tabular-nums">$92.4k</p>
        </div>
        <Badge variant="secondary">+12.6%</Badge>
      </div>
      <AspectRatio ratio={16 / 9}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full text-primary" aria-hidden="true">
          {[25, 50, 75].map((y) => (
            <line key={y} x1="0" x2="100" y1={y} y2={y} className="stroke-border" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
          ))}
          <path d={path + " L100 100 L0 100 Z"} className="fill-primary/10" />
          <path d={path} fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
      </AspectRatio>
    </div>
  )
}`,
  },
  {
    name: "SkeletonMediaLoading",
    description: "Loading state where a skeleton fills a 16:9 media slot above text placeholders.",
    code: `
export default function SkeletonMediaLoading() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <AspectRatio ratio={16 / 9}>
        <Skeleton className="absolute inset-0" />
      </AspectRatio>
      <div className="flex items-center gap-3">
        <Skeleton className="size-8 rounded-full" />
        <div className="flex flex-1 flex-col gap-1.5">
          <Skeleton className="h-3 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "UploadDropzoneWide",
    description: "An empty 16:9 dashed dropzone for uploading a cover image.",
    code: `
export default function UploadDropzoneWide() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio ratio={16 / 9} className="border-2 border-dashed bg-muted/30 transition-colors hover:bg-muted/60">
        <label className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-2 p-4 text-center">
          <div className="flex size-10 items-center justify-center bg-background ring-1 ring-border">
            <ImageUpIcon className="size-5 text-muted-foreground" />
          </div>
          <p className="text-sm font-medium">Drop a cover image here</p>
          <p className="text-xs text-muted-foreground">PNG or JPG, 1600 x 900 recommended</p>
          <input type="file" accept="image/*" className="sr-only" />
        </label>
      </AspectRatio>
    </div>
  )
}`,
  },
  {
    name: "CropFrameThirds",
    description: "A photo crop frame with rule-of-thirds guides and corner handles.",
    code: `
export default function CropFrameThirds() {
  return (
    <div className="w-full max-w-sm bg-zinc-900 p-4">
      <AspectRatio ratio={4 / 5} className="bg-linear-to-br from-teal-500 via-sky-600 to-indigo-800">
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 border border-white/80">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="border border-white/25" />
          ))}
        </div>
        {["start-0 top-0 border-s-4 border-t-4", "end-0 top-0 border-e-4 border-t-4", "start-0 bottom-0 border-s-4 border-b-4", "end-0 bottom-0 border-e-4 border-b-4"].map((pos) => (
          <span key={pos} className={cn("absolute size-5 border-white", pos)} />
        ))}
      </AspectRatio>
      <p className="mt-3 text-center font-mono text-xs text-white/70">4:5  -  1080 x 1350</p>
    </div>
  )
}`,
  },
  {
    name: "AlbumCoverPlayer",
    description: "A music player with a square generative album cover and playback controls.",
    code: `
export default function AlbumCoverPlayer() {
  return (
    <div className="w-full max-w-60 border p-3">
      <AspectRatio ratio={1} className="overflow-hidden bg-linear-to-br from-rose-500 to-amber-400">
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
          {[40, 30, 20, 10].map((r) => (
            <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" />
          ))}
          <circle cx="50" cy="50" r="4" fill="white" />
        </svg>
      </AspectRatio>
      <div className="mt-3">
        <p className="truncate text-sm font-medium">Low Tide Radio</p>
        <p className="truncate text-xs text-muted-foreground">The Marrow Sisters</p>
      </div>
      <Progress value={38} className="mt-3" />
      <div className="mt-2 flex items-center justify-center gap-1">
        <Button variant="ghost" size="icon-sm" aria-label="Previous">
          <SkipBackIcon />
        </Button>
        <Button size="icon" aria-label="Pause" className="rounded-full">
          <PauseIcon />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Next">
          <SkipForwardIcon />
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "CinemaScopeStill",
    description: "A 2.39:1 anamorphic film still inside letterbox bars with a subtitle.",
    code: `
export default function CinemaScopeStill() {
  return (
    <figure className="w-full max-w-md bg-black py-6">
      <AspectRatio ratio={2.39} className="overflow-hidden bg-linear-to-b from-orange-300 via-rose-400 to-indigo-900">
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-zinc-950 to-transparent" />
        <div className="absolute start-[20%] bottom-[30%] size-10 rounded-full bg-amber-100/90 blur-[1px]" />
        <p className="absolute inset-x-0 bottom-2 text-center text-xs text-white">We never made it to the coast that summer.</p>
      </AspectRatio>
      <figcaption className="mt-2 text-center font-mono text-[10px] tracking-widest text-white/60">2.39 : 1  -  ANAMORPHIC</figcaption>
    </figure>
  )
}`,
  },
  {
    name: "BrowserWindowPreview",
    description: "A 16:10 browser window frame previewing a landing page wireframe.",
    code: `
export default function BrowserWindowPreview() {
  return (
    <div className="w-full max-w-md overflow-hidden border shadow-sm">
      <div className="flex items-center gap-2 border-b bg-muted px-3 py-2">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="mx-auto flex items-center gap-1 bg-background px-3 py-0.5 text-[10px] text-muted-foreground">
          <LockIcon className="size-2.5" />
          tidewater.app
        </div>
      </div>
      <AspectRatio ratio={16 / 10} className="bg-background">
        <div className="absolute inset-0 flex flex-col gap-3 p-4">
          <div className="flex justify-between">
            <div className="h-2 w-12 bg-foreground/80" />
            <div className="flex gap-2">
              <div className="h-2 w-8 bg-muted" />
              <div className="h-2 w-8 bg-muted" />
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center gap-2">
            <div className="h-3 w-3/5 bg-foreground/80" />
            <div className="h-2 w-2/5 bg-muted-foreground/40" />
            <div className="mt-1 h-4 w-16 bg-primary" />
          </div>
          <div className="mt-auto grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-10 bg-muted" />
            ))}
          </div>
        </div>
      </AspectRatio>
    </div>
  )
}`,
  },
  {
    name: "PhoneMockupScreen",
    description: "A tall 9:19.5 phone frame showing a chat app screen.",
    code: `
export default function PhoneMockupScreen() {
  return (
    <div className="w-full max-w-44 rounded-[2rem] border-4 border-foreground/80 p-1">
      <AspectRatio ratio={9 / 19.5} className="overflow-hidden rounded-[1.6rem] bg-background">
        <div className="absolute start-1/2 top-1.5 h-4 w-14 -translate-x-1/2 rounded-full bg-foreground/80 rtl:translate-x-1/2" />
        <div className="absolute inset-0 flex flex-col gap-2 px-3 pt-8 pb-3 text-[10px]">
          <p className="text-xs font-semibold">Weekend hike</p>
          <div className="max-w-[80%] self-start bg-muted px-2 py-1">Trailhead at 8?</div>
          <div className="max-w-[80%] self-end bg-primary px-2 py-1 text-primary-foreground">Works for me</div>
          <div className="max-w-[80%] self-start bg-muted px-2 py-1">Bringing snacks</div>
          <div className="mt-auto border px-2 py-1 text-muted-foreground">Message</div>
        </div>
      </AspectRatio>
    </div>
  )
}`,
  },
  {
    name: "TabletReadingView",
    description: "A 3:4 tablet frame displaying an e-reader page.",
    code: `
export default function TabletReadingView() {
  return (
    <div className="w-full max-w-60 rounded-2xl border-8 border-zinc-800 dark:border-zinc-700">
      <AspectRatio ratio={3 / 4} className="bg-amber-50 dark:bg-zinc-900">
        <div className="absolute inset-0 flex flex-col p-4 font-serif text-amber-950 dark:text-amber-100">
          <p className="text-[10px] tracking-widest uppercase opacity-60">Chapter 4</p>
          <p className="mt-1 text-sm font-semibold">The Lighthouse Keeper</p>
          <p className="mt-2 text-[10px] leading-relaxed opacity-80">
            The fog arrived before the boats did, rolling in from the north like a slow tide of wool. Marit lit the lamp an hour early and waited.
          </p>
          <div className="mt-auto flex items-center justify-between text-[9px] opacity-60">
            <span>Page 82 of 310</span>
            <span>26%</span>
          </div>
        </div>
      </AspectRatio>
    </div>
  )
}`,
  },
  {
    name: "CourseLessonThumbnail",
    description: "A course lesson card with a 16:9 thumbnail, duration badge and watch progress.",
    code: `
export default function CourseLessonThumbnail() {
  return (
    <div className="w-full max-w-xs">
      <AspectRatio ratio={16 / 9} className="overflow-hidden bg-linear-to-br from-slate-800 to-slate-600">
        <span className="absolute inset-0 flex items-center justify-center font-mono text-3xl font-bold text-white/20">03</span>
        <Badge variant="secondary" className="absolute end-2 bottom-3 font-mono">
          14:20
        </Badge>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20">
          <div className="h-full w-2/3 bg-red-500" />
        </div>
      </AspectRatio>
      <p className="mt-2 text-sm font-medium">Lesson 3: Designing with constraints</p>
      <p className="text-xs text-muted-foreground">Interface Systems  -  65% watched</p>
    </div>
  )
}`,
  },
  {
    name: "RealEstateListing",
    description: "A property listing with a 4:3 gradient photo, favorite button and slide dots.",
    code: `
export default function RealEstateListing() {
  const [saved, setSaved] = React.useState(false)

  return (
    <div className="w-full max-w-xs">
      <AspectRatio ratio={4 / 3} className="overflow-hidden bg-linear-to-t from-emerald-700 via-sky-300 to-sky-100">
        <div className="absolute start-[15%] bottom-[20%] h-[40%] w-[45%] bg-stone-100 dark:bg-stone-300">
          <div className="absolute -top-6 start-0 h-0 w-full border-x-[4.5rem] border-b-[1.5rem] border-x-transparent border-b-stone-500" />
        </div>
        <Badge className="absolute start-2 top-2">Open house Sun</Badge>
        <Button
          size="icon-sm"
          variant="secondary"
          aria-label={saved ? "Remove from saved" : "Save listing"}
          className="absolute end-2 top-2 rounded-full"
          onClick={() => setSaved((value) => !value)}
        >
          <HeartIcon className={cn(saved && "fill-red-500 text-red-500")} />
        </Button>
        <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={cn("size-1.5 rounded-full bg-white/60", i === 0 && "bg-white")} />
          ))}
        </div>
      </AspectRatio>
      <div className="mt-2 flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold">$645,000</p>
          <p className="text-xs text-muted-foreground">3 bd  -  2 ba  -  1,840 sqft</p>
          <p className="text-xs text-muted-foreground">41 Juniper Lane, Ashford</p>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "SocialSharePreview",
    description: "An Open Graph link preview at 1.91:1 as it would appear in a feed.",
    code: `
export default function SocialSharePreview() {
  return (
    <div className="w-full max-w-sm overflow-hidden border">
      <AspectRatio ratio={1.91} className="bg-linear-to-br from-zinc-950 to-zinc-800">
        <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="size-4 bg-linear-to-br from-lime-300 to-emerald-500" />
            Fieldnote
          </div>
          <p className="text-xl leading-tight font-semibold text-balance">Ship your changelog in five minutes</p>
        </div>
      </AspectRatio>
      <div className="border-t bg-muted/40 p-3">
        <p className="text-[10px] tracking-wide text-muted-foreground uppercase">fieldnote.dev</p>
        <p className="truncate text-sm font-medium">Changelogs your users actually read</p>
        <p className="truncate text-xs text-muted-foreground">Write once, publish to email, in-app and your site.</p>
      </div>
    </div>
  )
}`,
  },
  {
    name: "EventPosterPaper",
    description: "An event poster using the ISO paper ratio of 1:1.414.",
    code: `
export default function EventPosterPaper() {
  return (
    <AspectRatio ratio={1 / 1.414} className="w-full max-w-52 overflow-hidden bg-[#f1ece2] text-zinc-900 shadow-md">
      <div className="absolute -end-8 top-8 size-32 rounded-full bg-orange-500" />
      <div className="absolute -start-6 top-28 size-20 bg-indigo-600" />
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase">Riverside Hall</p>
        <p className="text-2xl leading-none font-black uppercase">Night Market</p>
        <p className="mt-2 text-[10px]">Fri 18 Oct  -  6pm till late  -  Free entry</p>
      </div>
    </AspectRatio>
  )
}`,
  },
  {
    name: "GoldenRatioSpiral",
    description: "A golden-ratio frame with an SVG spiral subdivision overlay.",
    code: `
export default function GoldenRatioSpiral() {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio ratio={1.618} className="border bg-linear-to-br from-amber-100 to-yellow-300 dark:from-amber-900 dark:to-yellow-700">
        <svg viewBox="0 0 161.8 100" className="absolute inset-0 size-full text-amber-900/50 dark:text-amber-100/50" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M100 0 V100 M100 61.8 H161.8 M138.2 61.8 V100 M138.2 85.4 H100" strokeWidth="0.6" />
          <path d="M100 100 A100 100 0 0 1 0 0 M100 0 A61.8 61.8 0 0 1 161.8 61.8 M161.8 61.8 A38.2 38.2 0 0 1 123.6 100" strokeWidth="1" />
        </svg>
      </AspectRatio>
      <p className="mt-2 text-center font-mono text-xs text-muted-foreground">phi = 1.618</p>
    </div>
  )
}`,
  },
  {
    name: "HoverZoomCard",
    description: "A collection card whose 4:3 artwork zooms on hover while the frame stays fixed.",
    code: `
export default function HoverZoomCard() {
  return (
    <a href="#" className="group block w-full max-w-xs">
      <AspectRatio ratio={4 / 3} className="overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-violet-400 via-fuchsia-400 to-orange-300 transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute end-3 bottom-3 flex size-8 items-center justify-center bg-background opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRightIcon className="size-4" />
        </div>
      </AspectRatio>
      <p className="mt-2 text-sm font-medium group-hover:underline">Autumn collection</p>
      <p className="text-xs text-muted-foreground">24 pieces</p>
    </a>
  )
}`,
  },
  {
    name: "LiveStreamThumbnail",
    description: "A livestream thumbnail with a LIVE badge, viewer count and streamer row.",
    code: `
export default function LiveStreamThumbnail() {
  return (
    <div className="w-full max-w-xs">
      <AspectRatio ratio={16 / 9} className="overflow-hidden bg-linear-to-br from-emerald-900 via-teal-700 to-cyan-500">
        <svg viewBox="0 0 160 90" className="absolute inset-0 size-full opacity-40" aria-hidden="true">
          <polyline points="0,70 30,50 55,60 80,30 110,45 160,15" fill="none" stroke="white" strokeWidth="2" />
        </svg>
        <Badge variant="destructive" className="absolute start-2 top-2 bg-red-600 text-white">
          <span className="size-1.5 animate-pulse rounded-full bg-white" />
          LIVE
        </Badge>
        <span className="absolute start-2 bottom-2 flex items-center gap-1 bg-black/60 px-1.5 py-0.5 text-[10px] text-white">
          <EyeIcon className="size-3" />
          3.2k
        </span>
      </AspectRatio>
      <div className="mt-2 flex gap-2">
        <Avatar size="sm">
          <AvatarFallback>QV</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">Speedrunning the new climbing map</p>
          <p className="text-xs text-muted-foreground">quinnvale  -  Ridge Runner</p>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "VideoCallTiles",
    description: "A 2x2 grid of 16:9 participant tiles for a video call with mute indicators.",
    code: `
const people = [
  { name: "Ada Brennan", tone: "from-sky-700 to-sky-900", muted: false, speaking: true },
  { name: "Ravi Iyer", tone: "from-emerald-700 to-emerald-900", muted: true, speaking: false },
  { name: "Lucia Ferro", tone: "from-violet-700 to-violet-900", muted: false, speaking: false },
  { name: "Ken Ito", tone: "from-zinc-700 to-zinc-900", muted: true, speaking: false },
]

export default function VideoCallTiles() {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-1.5">
      {people.map((person) => (
        <AspectRatio key={person.name} ratio={16 / 9} className={cn("overflow-hidden bg-linear-to-br", person.tone, person.speaking && "ring-2 ring-emerald-400")}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Avatar size="lg">
              <AvatarFallback>{person.name.split(" ").map((part) => part[0]).join("")}</AvatarFallback>
            </Avatar>
          </div>
          <span className="absolute start-1.5 bottom-1.5 flex items-center gap-1 bg-black/50 px-1.5 py-0.5 text-[10px] text-white">
            {person.muted && <MicOffIcon className="size-3 text-red-400" />}
            {person.name}
          </span>
        </AspectRatio>
      ))}
    </div>
  )
}`,
  },
  {
    name: "RecipeCardCover",
    description: "A recipe card with a 4:3 illustrated cover and prep details.",
    code: `
export default function RecipeCardCover() {
  return (
    <div className="w-full max-w-xs border">
      <AspectRatio ratio={4 / 3} className="overflow-hidden bg-linear-to-br from-lime-200 to-green-400 dark:from-lime-800 dark:to-green-900">
        <div className="absolute start-1/2 top-1/2 size-3/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-xl rtl:translate-x-1/2 dark:bg-zinc-200">
          <div className="absolute inset-[18%] rounded-full bg-linear-to-br from-orange-300 to-red-400" />
          <div className="absolute start-[30%] top-[30%] size-[15%] rounded-full bg-green-600" />
          <div className="absolute end-[28%] bottom-[32%] size-[12%] rounded-full bg-yellow-200" />
        </div>
      </AspectRatio>
      <div className="p-3">
        <p className="text-sm font-medium">Roasted tomato & basil soup</p>
        <div className="mt-2 flex gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <ClockIcon className="size-3.5" />
            35 min
          </span>
          <span className="flex items-center gap-1">
            <UsersIcon className="size-3.5" />
            Serves 4
          </span>
          <span className="flex items-center gap-1">
            <FlameIcon className="size-3.5" />
            Easy
          </span>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "FramedArtwork",
    description: "A gallery-style 4:5 framed generative artwork with a museum label.",
    code: `
const dots = Array.from({ length: 36 }, (_, i) => ({ x: (i % 6) * 18 + 9, y: Math.floor(i / 6) * 18 + 9, r: ((i * 7) % 5) + 2 }))

export default function FramedArtwork() {
  return (
    <figure className="w-full max-w-56">
      <div className="border-[10px] border-stone-800 bg-stone-50 p-4 shadow-lg dark:border-stone-600">
        <AspectRatio ratio={4 / 5} className="bg-[#f4efe6]">
          <svg viewBox="0 0 108 135" className="absolute inset-0 size-full" aria-hidden="true">
            {dots.map((dot, i) => (
              <circle key={i} cx={dot.x} cy={dot.y + 13} r={dot.r} className={i % 3 === 0 ? "fill-rose-500" : i % 3 === 1 ? "fill-indigo-600" : "fill-amber-400"} />
            ))}
          </svg>
        </AspectRatio>
      </div>
      <figcaption className="mt-3 text-xs">
        <span className="font-medium">Grid Study No. 7</span>
        <span className="block text-muted-foreground">Hanne Solberg, 2024  -  Pigment print</span>
      </figcaption>
    </figure>
  )
}`,
  },
  {
    name: "FeedPostPortrait",
    description: "A social feed post at 4:5 with header, actions and likes.",
    code: `
export default function FeedPostPortrait() {
  const [liked, setLiked] = React.useState(false)

  return (
    <div className="w-full max-w-xs border">
      <div className="flex items-center gap-2 p-2.5">
        <Avatar size="sm">
          <AvatarFallback>MW</AvatarFallback>
        </Avatar>
        <span className="text-xs font-medium">mira.walks</span>
        <EllipsisIcon className="ms-auto size-4 text-muted-foreground" />
      </div>
      <AspectRatio ratio={4 / 5} className="bg-linear-to-b from-sky-300 via-orange-200 to-amber-500 dark:from-sky-800 dark:via-orange-800 dark:to-amber-900" onDoubleClick={() => setLiked(true)} />
      <div className="flex items-center gap-1 p-1.5">
        <Button variant="ghost" size="icon-sm" aria-label="Like" onClick={() => setLiked((value) => !value)}>
          <HeartIcon className={cn(liked && "fill-red-500 text-red-500")} />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Comment">
          <MessageCircleIcon />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Share">
          <SendIcon />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Save" className="ms-auto">
          <BookmarkIcon />
        </Button>
      </div>
      <p className="px-3 pb-3 text-xs">
        <span className="font-medium">{liked ? "1,205" : "1,204"} likes</span>
      </p>
    </div>
  )
}`,
  },
  {
    name: "SlideThumbnailStrip",
    description: "Presentation editor strip of selectable 16:9 slide thumbnails.",
    code: `
const slides = ["Title", "Problem", "Solution", "Market", "Team"]

export default function SlideThumbnailStrip() {
  const [active, setActive] = React.useState(1)

  return (
    <div className="flex w-full max-w-40 flex-col gap-2">
      {slides.map((slide, index) => (
        <button key={slide} type="button" onClick={() => setActive(index)} className="flex items-start gap-2 text-start">
          <span className="w-3 pt-1 text-[10px] text-muted-foreground tabular-nums">{index + 1}</span>
          <AspectRatio ratio={16 / 9} className={cn("flex-1 border bg-background", active === index && "ring-2 ring-primary")}>
            <div className="absolute inset-0 flex flex-col gap-1 p-1.5">
              <div className="h-1 w-1/2 bg-foreground/70" />
              <div className="h-0.5 w-3/4 bg-muted-foreground/30" />
              <div className="h-0.5 w-2/3 bg-muted-foreground/30" />
              <span className="mt-auto text-[8px] text-muted-foreground">{slide}</span>
            </div>
          </AspectRatio>
        </button>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ColorSwatchPalette",
    description: "Square color swatches from a brand palette with names and hex codes.",
    code: `
const swatches = [
  { name: "Ink", hex: "#1E1B4B" },
  { name: "Iris", hex: "#6366F1" },
  { name: "Mint", hex: "#34D399" },
  { name: "Sand", hex: "#FDE68A" },
  { name: "Coral", hex: "#FB7185" },
]

export default function ColorSwatchPalette() {
  return (
    <div className="grid w-full max-w-md grid-cols-5 gap-2">
      {swatches.map((swatch) => (
        <div key={swatch.hex} className="flex min-w-0 flex-col gap-1">
          <AspectRatio ratio={1} className="ring-1 ring-foreground/10" style={{ backgroundColor: swatch.hex }} />
          <span className="truncate text-xs font-medium">{swatch.name}</span>
          <span className="truncate font-mono text-[10px] text-muted-foreground">{swatch.hex}</span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "FileThumbnailGrid",
    description: "A file manager grid with 4:3 thumbnails keyed by file type.",
    code: `
const files = [
  { name: "brief.pdf", icon: FileTextIcon, tone: "bg-red-500/10 text-red-600 dark:text-red-400" },
  { name: "budget.xlsx", icon: FileSpreadsheetIcon, tone: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
  { name: "intro.mp4", icon: FileVideoIcon, tone: "bg-violet-500/10 text-violet-600 dark:text-violet-400" },
  { name: "theme.mp3", icon: FileAudioIcon, tone: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
  { name: "app.tsx", icon: FileCodeIcon, tone: "bg-sky-500/10 text-sky-600 dark:text-sky-400" },
  { name: "assets.zip", icon: FileArchiveIcon, tone: "bg-muted text-muted-foreground" },
]

export default function FileThumbnailGrid() {
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-3">
      {files.map((file) => (
        <button key={file.name} type="button" className="group flex flex-col gap-1.5 text-start">
          <AspectRatio ratio={4 / 3} className={cn("border transition-colors group-hover:border-foreground/30", file.tone)}>
            <file.icon className="absolute start-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rtl:translate-x-1/2" />
          </AspectRatio>
          <span className="truncate text-xs">{file.name}</span>
        </button>
      ))}
    </div>
  )
}`,
  },
  {
    name: "PromoBannerUltrawide",
    description: "A 21:9 promotional hero banner with headline and call to action.",
    code: `
export default function PromoBannerUltrawide() {
  return (
    <AspectRatio ratio={21 / 9} className="w-full max-w-lg overflow-hidden bg-linear-to-r from-indigo-600 to-violet-500">
      <div className="absolute -end-10 -top-10 size-40 rounded-full border-[24px] border-white/10" />
      <div className="absolute end-16 -bottom-12 size-28 rounded-full bg-white/10" />
      <div className="absolute inset-0 flex flex-col items-start justify-center gap-2 p-5 text-white">
        <Badge variant="secondary">Spring sale</Badge>
        <p className="max-w-[60%] text-lg leading-tight font-semibold sm:text-xl">30% off annual plans</p>
        <Button size="sm" variant="secondary">
          Claim offer
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </div>
    </AspectRatio>
  )
}`,
  },
  {
    name: "AudioWaveformStrip",
    description: "A 4:1 voice memo waveform drawn as SVG bars with a playhead.",
    code: `
const bars = Array.from({ length: 48 }, (_, i) => 20 + Math.abs(Math.sin(i * 0.7) * 60) + ((i * 13) % 17))

export default function AudioWaveformStrip() {
  const progress = 0.42

  return (
    <div className="flex w-full max-w-md items-center gap-3 border p-3">
      <Button size="icon" aria-label="Play memo" className="shrink-0 rounded-full">
        <PlayIcon className="fill-current" />
      </Button>
      <div className="min-w-0 flex-1">
        <AspectRatio ratio={4}>
          <svg viewBox="0 0 192 100" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden="true">
            {bars.map((height, i) => (
              <rect key={i} x={i * 4} y={50 - height / 2} width="2.5" height={height} className={i / bars.length < progress ? "fill-primary" : "fill-muted-foreground/30"} />
            ))}
          </svg>
        </AspectRatio>
        <div className="mt-1 flex justify-between font-mono text-[10px] text-muted-foreground">
          <span>0:27</span>
          <span>1:04</span>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "PaymentQrSquare",
    description: "A checkout QR code rendered in a 1:1 frame for scan-to-pay.",
    code: `
const size = 21
const cells = Array.from({ length: size * size }, (_, i) => {
  const x = i % size
  const y = Math.floor(i / size)
  const finder = (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13)
  if (finder) {
    const fx = x > 13 ? x - 14 : x
    const fy = y > 13 ? y - 14 : y
    return fx === 0 || fx === 6 || fy === 0 || fy === 6 || (fx > 1 && fx < 5 && fy > 1 && fy < 5)
  }
  return (x * 7 + y * 13 + x * y) % 5 < 2
})

export default function PaymentQrSquare() {
  return (
    <div className="flex w-full max-w-56 flex-col items-center gap-3 border p-4 text-center">
      <p className="text-sm font-medium">Scan to pay $36.50</p>
      <AspectRatio ratio={1} className="w-full bg-white p-3">
        <svg viewBox={"0 0 " + size + " " + size} className="size-full" shapeRendering="crispEdges" aria-label="Payment QR code">
          {cells.map((on, i) => (on ? <rect key={i} x={i % size} y={Math.floor(i / size)} width="1" height="1" fill="#111" /> : null))}
        </svg>
      </AspectRatio>
      <p className="text-xs text-muted-foreground">Order #A-2291  -  expires in 10:00</p>
    </div>
  )
}`,
  },
  {
    name: "ScreenshotHotspots",
    description: "A 16:10 product screenshot with numbered annotation hotspots and legend.",
    code: `
const spots = [
  { id: 1, x: "18%", y: "22%", label: "Workspace switcher" },
  { id: 2, x: "62%", y: "14%", label: "Global search" },
  { id: 3, x: "48%", y: "64%", label: "Activity feed" },
]

export default function ScreenshotHotspots() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio ratio={16 / 10} className="border bg-muted/40">
        <div className="absolute inset-y-0 start-0 w-1/4 border-e bg-muted" />
        <div className="absolute inset-x-0 top-0 ms-[25%] h-[12%] border-b bg-background" />
        <div className="absolute end-[6%] bottom-[8%] ms-[25%] grid h-[66%] w-[63%] grid-cols-2 gap-2">
          <div className="bg-background ring-1 ring-border" />
          <div className="bg-background ring-1 ring-border" />
        </div>
        {spots.map((spot) => (
          <span
            key={spot.id}
            className="absolute flex size-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground ring-4 ring-primary/20"
            style={{ left: spot.x, top: spot.y }}
          >
            {spot.id}
          </span>
        ))}
      </AspectRatio>
      <ol className="mt-3 flex flex-col gap-1 text-xs">
        {spots.map((spot) => (
          <li key={spot.id} className="flex gap-2">
            <span className="font-mono text-muted-foreground">{spot.id}.</span>
            {spot.label}
          </li>
        ))}
      </ol>
    </div>
  )
}`,
  },
  {
    name: "BeforeAfterSlider",
    description: "A before/after comparison where a slider reveals the edited version.",
    code: `
export default function BeforeAfterSlider() {
  const [position, setPosition] = React.useState(50)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <AspectRatio ratio={4 / 3} className="overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-stone-400 to-stone-600 grayscale" />
        <div className="absolute inset-0 bg-linear-to-br from-orange-300 via-pink-400 to-violet-600" style={{ clipPath: "inset(0 0 0 " + position + "%)" }} />
        <div className="absolute inset-y-0 w-0.5 bg-white" style={{ left: position + "%" }} />
        <Badge variant="secondary" className="absolute start-2 top-2">Before</Badge>
        <Badge className="absolute end-2 top-2">After</Badge>
      </AspectRatio>
      <Slider value={[position]} onValueChange={(value) => setPosition(Array.isArray(value) ? value[0]! : value)} aria-label="Comparison position" />
    </div>
  )
}`,
  },
  {
    name: "AspectRatioCarousel",
    description: "A carousel whose slides share a consistent 16:9 frame.",
    code: `
const slides = [
  { title: "Plan", className: "from-sky-400 to-indigo-600" },
  { title: "Build", className: "from-emerald-400 to-teal-700" },
  { title: "Launch", className: "from-orange-400 to-rose-600" },
]

export default function AspectRatioCarousel() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={slide.title}>
            <AspectRatio ratio={16 / 9} className={cn("bg-linear-to-br", slide.className)}>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="font-mono text-xs opacity-70">0{index + 1}</span>
                <span className="text-xl font-semibold">{slide.title}</span>
              </div>
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`,
  },
  {
    name: "CoverThumbnailPicker",
    description: "Video upload step for choosing a cover from generated 16:9 frame thumbnails.",
    code: `
const frames = [
  "from-sky-500 to-blue-800",
  "from-amber-400 to-orange-700",
  "from-emerald-400 to-green-800",
  "from-fuchsia-400 to-purple-800",
]

export default function CoverThumbnailPicker() {
  const [selected, setSelected] = React.useState(0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <AspectRatio ratio={16 / 9} className={cn("bg-linear-to-br transition-colors", frames[selected])}>
        <Badge variant="secondary" className="absolute start-2 bottom-2">Cover</Badge>
      </AspectRatio>
      <div className="grid grid-cols-4 gap-2" role="radiogroup" aria-label="Cover frame">
        {frames.map((frame, index) => (
          <button
            key={frame}
            type="button"
            role="radio"
            aria-checked={selected === index}
            aria-label={"Frame " + (index + 1)}
            onClick={() => setSelected(index)}
            className={cn("outline-none focus-visible:ring-2 focus-visible:ring-ring", selected === index ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : "opacity-70 hover:opacity-100")}
          >
            <AspectRatio ratio={16 / 9} className={cn("bg-linear-to-br", frame)}>
              {selected === index && <CheckIcon className="absolute end-1 top-1 size-3 text-white" />}
            </AspectRatio>
          </button>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "WidthSliderResponsive",
    description: "Demonstrates the ratio holding steady as a slider resizes the container width.",
    code: `
export default function WidthSliderResponsive() {
  const [width, setWidth] = React.useState(70)

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex h-56 items-start">
        <div style={{ width: width + "%" }} className="transition-[width]">
          <AspectRatio ratio={4 / 3} className="border-2 border-primary bg-primary/10">
            <span className="absolute inset-0 flex items-center justify-center font-mono text-xs">4:3 at {width}%</span>
          </AspectRatio>
        </div>
      </div>
      <Field>
        <FieldLabel>Container width</FieldLabel>
        <Slider min={30} max={100} value={[width]} onValueChange={(value) => setWidth(Array.isArray(value) ? value[0]! : value)} />
      </Field>
    </div>
  )
}`,
  },
  {
    name: "MasonryMixedRatios",
    description: "A two-column masonry board mixing portrait, square and landscape ratios.",
    code: `
const columns = [
  [
    { ratio: 3 / 4, className: "from-rose-300 to-pink-500" },
    { ratio: 1, className: "from-amber-200 to-yellow-500" },
  ],
  [
    { ratio: 4 / 3, className: "from-sky-300 to-cyan-600" },
    { ratio: 2 / 3, className: "from-lime-300 to-emerald-600" },
  ],
]

export default function MasonryMixedRatios() {
  return (
    <div className="grid w-full max-w-xs grid-cols-2 gap-2">
      {columns.map((column, c) => (
        <div key={c} className="flex flex-col gap-2">
          {column.map((tile, t) => (
            <AspectRatio key={t} ratio={tile.ratio} className={cn("bg-linear-to-br", tile.className)}>
              <span className="absolute end-1.5 bottom-1.5 bg-black/40 px-1 font-mono text-[9px] text-white">{tile.ratio.toFixed(2)}</span>
            </AspectRatio>
          ))}
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "PodcastEpisodeRow",
    description: "A podcast episode item with fixed square artwork beside flexible text.",
    code: `
export default function PodcastEpisodeRow() {
  return (
    <div className="flex w-full max-w-md items-center gap-3 border p-3">
      <div className="w-16 shrink-0">
        <AspectRatio ratio={1} className="bg-linear-to-br from-teal-400 to-indigo-700">
          <MicIcon className="absolute start-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 text-white rtl:translate-x-1/2" />
        </AspectRatio>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] text-muted-foreground uppercase">Ep. 112  -  May 3</p>
        <p className="truncate text-sm font-medium">Pricing is a product decision</p>
        <p className="truncate text-xs text-muted-foreground">Small Batch with Ruth Adeyemi</p>
      </div>
      <Button size="icon-sm" variant="outline" aria-label="Play episode" className="rounded-full">
        <PlayIcon />
      </Button>
    </div>
  )
}`,
  },
  {
    name: "MediaErrorFallback",
    description: "Error state inside a 16:9 slot when media fails to load, with a retry action.",
    code: `
export default function MediaErrorFallback() {
  const [loading, setLoading] = React.useState(false)

  function retry() {
    setLoading(true)
    setTimeout(() => setLoading(false), 1200)
  }

  return (
    <AspectRatio ratio={16 / 9} className="w-full max-w-sm border bg-muted/50">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <ImageOffIcon className="size-6 text-muted-foreground" />
        <p className="text-sm font-medium">Preview unavailable</p>
        <p className="text-xs text-muted-foreground">We couldn&apos;t load this media. Check your connection.</p>
        <Button size="sm" variant="outline" onClick={retry} disabled={loading}>
          {loading ? <Spinner data-icon="inline-start" /> : <RefreshCwIcon data-icon="inline-start" />}
          Retry
        </Button>
      </div>
    </AspectRatio>
  )
}`,
  },
  {
    name: "CustomRatioInputs",
    description: "Width and height inputs that compute a custom ratio and preview it live.",
    code: `
export default function CustomRatioInputs() {
  const [w, setW] = React.useState(1200)
  const [h, setH] = React.useState(628)
  const ratio = w > 0 && h > 0 ? w / h : 1
  const clamped = Math.min(Math.max(ratio, 0.5), 3)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <Field>
          <FieldLabel htmlFor="ratio-w">Width (px)</FieldLabel>
          <Input id="ratio-w" type="number" min={1} value={w} onChange={(event) => setW(Number(event.target.value))} />
        </Field>
        <Field>
          <FieldLabel htmlFor="ratio-h">Height (px)</FieldLabel>
          <Input id="ratio-h" type="number" min={1} value={h} onChange={(event) => setH(Number(event.target.value))} />
        </Field>
      </div>
      <div className="mx-auto w-full" style={{ maxWidth: clamped < 1 ? 220 * clamped : undefined }}>
        <AspectRatio ratio={clamped} className="bg-linear-to-br from-primary/20 to-primary/5 ring-1 ring-primary/30">
          <span className="absolute inset-0 flex items-center justify-center font-mono text-xs">{ratio.toFixed(3)} : 1</span>
        </AspectRatio>
      </div>
    </div>
  )
}`,
  },
  {
    name: "LaptopScreenMockup",
    description: "A laptop mockup with a 16:10 screen displaying a metrics dashboard.",
    code: `
export default function LaptopScreenMockup() {
  return (
    <div className="w-full max-w-md">
      <div className="mx-[6%] rounded-t-lg border-[6px] border-b-0 border-zinc-800 dark:border-zinc-600">
        <AspectRatio ratio={16 / 10} className="bg-background">
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-[auto_1fr] gap-1.5 p-2">
            {["$48k", "1,204", "3.2%"].map((stat) => (
              <div key={stat} className="border p-1.5">
                <div className="h-1 w-1/2 bg-muted" />
                <p className="mt-1 text-[10px] font-semibold">{stat}</p>
              </div>
            ))}
            <div className="col-span-3 flex items-end gap-1 border p-1.5">
              {[40, 65, 50, 80, 60, 90, 75].map((height, i) => (
                <div key={i} className="flex-1 bg-primary/70" style={{ height: height + "%" }} />
              ))}
            </div>
          </div>
        </AspectRatio>
      </div>
      <div className="h-3 rounded-b-xl bg-zinc-300 dark:bg-zinc-700" />
    </div>
  )
}`,
  },
  {
    name: "EmbedCodeSnippet",
    description: "A 16:9 embed preview paired with the responsive embed snippet to copy.",
    code: `
export default function EmbedCodeSnippet() {
  const [copied, setCopied] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <AspectRatio ratio={16 / 9} className="bg-linear-to-br from-zinc-800 to-zinc-950">
        <div className="absolute inset-0 flex items-center justify-center gap-2 text-white">
          <PlayCircleIcon className="size-8" />
          <span className="text-sm font-medium">Quarterly update</span>
        </div>
      </AspectRatio>
      <div className="flex items-center gap-2 border bg-muted/40 p-2">
        <code className="min-w-0 flex-1 truncate font-mono text-[10px] text-muted-foreground">
          &lt;div style=&quot;aspect-ratio:16/9&quot;&gt;&lt;iframe src=&quot;https://player.lumen.tv/e/4kq9&quot; /&gt;&lt;/div&gt;
        </code>
        <Button size="xs" variant="outline" onClick={() => setCopied(true)}>
          {copied ? <CheckIcon data-icon="inline-start" /> : <CopyIcon data-icon="inline-start" />}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "CardMediaHeader",
    description: "A Card whose header media uses a 2:1 aspect ratio above the content.",
    code: `
export default function CardMediaHeader() {
  return (
    <Card className="w-full max-w-xs gap-0 overflow-hidden pt-0">
      <AspectRatio ratio={2} className="bg-linear-to-r from-cyan-500 to-blue-600">
        <svg viewBox="0 0 200 100" className="absolute inset-0 size-full text-white/20" aria-hidden="true">
          <path d="M0 80 Q50 40 100 70 T200 50" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M0 95 Q60 60 120 85 T200 70" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </AspectRatio>
      <CardHeader className="pt-4">
        <CardTitle>Harbor Analytics</CardTitle>
        <CardDescription>Track shipments and dwell time across all ports in one view.</CardDescription>
      </CardHeader>
      <CardFooter className="pt-4">
        <Button size="sm" className="w-full">
          Open workspace
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
]

export default examples
