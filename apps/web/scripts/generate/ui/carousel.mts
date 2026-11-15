import { type Example } from "./_lib.mjs"

const API = { "@workspace/ui/components/carousel": ["type CarouselApi"] }

const examples: Example[] = [
  {
    name: "ProductGalleryThumbnails",
    description: "Product gallery with a main carousel synced to a clickable thumbnail strip.",
    imports: API,
    code: `
const shots = [
  { label: "Front", from: "from-sky-400", to: "to-indigo-500" },
  { label: "Side", from: "from-emerald-400", to: "to-teal-600" },
  { label: "Back", from: "from-amber-300", to: "to-orange-500" },
  { label: "Detail", from: "from-rose-400", to: "to-fuchsia-500" },
  { label: "In use", from: "from-slate-400", to: "to-slate-700" },
]

export default function ProductGalleryThumbnails() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    setSelected(next.selectedScrollSnap())
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Carousel setApi={handleApi}>
        <CarouselContent>
          {shots.map((shot) => (
            <CarouselItem key={shot.label}>
              <div
                className={cn(
                  "flex aspect-square items-end bg-gradient-to-br p-4",
                  shot.from,
                  shot.to
                )}
              >
                <span className="bg-background/80 px-2 py-1 text-xs font-medium">
                  {shot.label}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="grid grid-cols-5 gap-2">
        {shots.map((shot, index) => (
          <button
            key={shot.label}
            type="button"
            aria-label={"Show " + shot.label}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "aspect-square bg-gradient-to-br ring-offset-2 ring-offset-background transition-opacity",
              shot.from,
              shot.to,
              selected === index ? "ring-2 ring-primary" : "opacity-50 hover:opacity-80"
            )}
          />
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "TestimonialDotsCarousel",
    description: "Customer testimonials with avatar initials and clickable pagination dots.",
    imports: API,
    code: `
const testimonials = [
  {
    quote: "We cut our onboarding time in half within the first month. The team actually enjoys using it.",
    name: "Lena Ortiz",
    role: "Head of Ops, Brightpath",
  },
  {
    quote: "Reporting used to take a full day every Friday. Now it is a ten minute review over coffee.",
    name: "Tomas Reyes",
    role: "Finance Lead, Northwind Labs",
  },
  {
    quote: "Support answered every question within the hour. That alone made the switch worth it.",
    name: "Aisha Karim",
    role: "Founder, Pebble Studio",
  },
]

export default function TestimonialDotsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  return (
    <Carousel setApi={handleApi} opts={{ loop: true }} className="w-full max-w-sm">
      <CarouselContent>
        {testimonials.map((item) => (
          <CarouselItem key={item.name}>
            <Card>
              <CardContent className="flex flex-col gap-4">
                <QuoteIcon className="size-5 text-muted-foreground" />
                <p className="text-sm leading-relaxed">{item.quote}</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {item.name.split(" ").map((p) => p[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-label={"Go to testimonial " + (index + 1)}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-1.5 transition-all",
              selected === index ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"
            )}
          />
        ))}
      </div>
    </Carousel>
  )
}`,
  },
  {
    name: "OnboardingWalkthrough",
    description: "Onboarding walkthrough where the primary button advances slides and finishes on the last step.",
    imports: API,
    code: `
const steps = [
  { icon: SparklesIcon, title: "Welcome to Fieldnote", body: "Capture ideas, tasks, and meeting notes in one calm workspace." },
  { icon: FolderIcon, title: "Organize with spaces", body: "Group notes by project or client and share a space with your team." },
  { icon: BellIcon, title: "Never miss a follow-up", body: "Turn any line into a reminder and get nudged at the right time." },
]

export default function OnboardingWalkthrough() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)
  const [done, setDone] = React.useState(false)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  const isLast = selected === steps.length - 1

  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <Carousel setApi={handleApi}>
          <CarouselContent>
            {steps.map((step) => (
              <CarouselItem key={step.title}>
                <div className="flex flex-col items-center gap-3 py-6 text-center">
                  <div className="flex size-12 items-center justify-center bg-muted">
                    <step.icon className="size-5" />
                  </div>
                  <h3 className="text-base font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.body}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
      <CardFooter className="justify-between border-t">
        <span className="text-xs text-muted-foreground">
          {done ? "All set" : "Step " + (selected + 1) + " of " + steps.length}
        </span>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={() => api?.scrollTo(steps.length - 1)} disabled={isLast}>
            Skip
          </Button>
          <Button size="sm" onClick={() => (isLast ? setDone(true) : api?.scrollNext())}>
            {isLast ? "Get started" : "Next"}
            {!isLast && <ArrowRightIcon data-icon="inline-end" />}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "PricingPlansPeek",
    description: "Pricing plan cards that peek the next plan on narrow screens.",
    code: `
const plans = [
  { name: "Starter", price: "$0", note: "For side projects", features: ["1 project", "Community support", "Basic analytics"] },
  { name: "Team", price: "$24", note: "Per seat / month", features: ["Unlimited projects", "Priority support", "Shared workspaces"], featured: true },
  { name: "Business", price: "$59", note: "Per seat / month", features: ["SSO and SCIM", "Audit log", "99.9% uptime SLA"] },
]

export default function PricingPlansPeek() {
  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-md">
      <CarouselContent>
        {plans.map((plan) => (
          <CarouselItem key={plan.name} className="basis-4/5 sm:basis-1/2">
            <Card className={cn("h-full", plan.featured && "ring-2 ring-primary")}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {plan.name}
                  {plan.featured && <Badge>Popular</Badge>}
                </CardTitle>
                <CardDescription>{plan.note}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <p className="text-3xl font-semibold">{plan.price}</p>
                <ul className="flex flex-col gap-1.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs">
                      <CheckIcon className="size-3.5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.featured ? "default" : "outline"} className="mt-2">
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}`,
  },
  {
    name: "StoriesAvatarRail",
    description: "Free-scrolling rail of story avatars with unseen rings, like a social feed header.",
    code: `
const stories = [
  { name: "You", add: true },
  { name: "Mila Novak", unseen: true },
  { name: "Jonah Park", unseen: true },
  { name: "Rosa Diaz" },
  { name: "Eli Brooks", unseen: true },
  { name: "Nora Quinn" },
  { name: "Theo Grant" },
  { name: "Ivy Chen", unseen: true },
  { name: "Omar Haddad" },
]

export default function StoriesAvatarRail() {
  return (
    <Carousel opts={{ dragFree: true, align: "start" }} className="w-full max-w-sm">
      <CarouselContent className="-ms-3">
        {stories.map((story) => (
          <CarouselItem key={story.name} className="basis-auto ps-3">
            <button type="button" className="flex w-16 flex-col items-center gap-1.5">
              <span
                className={cn(
                  "relative rounded-full p-0.5",
                  story.unseen ? "bg-gradient-to-tr from-amber-400 to-fuchsia-500" : "bg-border"
                )}
              >
                <Avatar size="lg" className="ring-2 ring-background">
                  <AvatarFallback>
                    {story.add ? <PlusIcon className="size-4" /> : story.name.split(" ").map((p) => p[0]).join("")}
                  </AvatarFallback>
                </Avatar>
              </span>
              <span className="w-full truncate text-center text-[11px] text-muted-foreground">
                {story.add ? "Add story" : story.name.split(" ")[0]}
              </span>
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}`,
  },
  {
    name: "CategoryChipScroller",
    description: "Drag-free category chip row with compact inline scroll buttons and an active filter.",
    code: `
const categories = ["All", "Design", "Engineering", "Marketing", "Sales", "Support", "Finance", "People", "Legal", "Operations"]

export default function CategoryChipScroller() {
  const [active, setActive] = React.useState("All")

  return (
    <Carousel opts={{ dragFree: true, align: "start" }} className="w-full max-w-sm px-9">
      <CarouselContent className="-ms-2">
        {categories.map((category) => (
          <CarouselItem key={category} className="basis-auto ps-2">
            <Button
              size="sm"
              variant={active === category ? "default" : "outline"}
              onClick={() => setActive(category)}
            >
              {category}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant="ghost" className="start-0" />
      <CarouselNext variant="ghost" className="end-0" />
    </Carousel>
  )
}`,
  },
  {
    name: "KpiSparklineCarousel",
    description: "Dashboard KPI cards with inline SVG sparklines, two per view with header controls.",
    code: `
const kpis = [
  { label: "Revenue", value: "$48.2k", delta: "+12.4%", up: true, points: [8, 10, 9, 13, 12, 16, 18] },
  { label: "Active users", value: "3,904", delta: "+4.1%", up: true, points: [10, 11, 10, 12, 13, 13, 14] },
  { label: "Churn", value: "2.3%", delta: "-0.4%", up: false, points: [14, 13, 13, 11, 12, 10, 9] },
  { label: "Avg. order", value: "$62.10", delta: "+1.8%", up: true, points: [9, 9, 10, 9, 11, 11, 12] },
  { label: "Tickets", value: "128", delta: "-9.0%", up: false, points: [16, 15, 13, 14, 11, 10, 8] },
]

function toPath(points: number[]) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  return points
    .map((p, i) => (i === 0 ? "M" : "L") + (i * 100) / (points.length - 1) + " " + (30 - ((p - min) / (max - min || 1)) * 26 - 2))
    .join(" ")
}

export default function KpiSparklineCarousel() {
  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-md">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium">This week</h3>
        <div className="flex gap-1">
          <CarouselPrevious className="static translate-none" />
          <CarouselNext className="static translate-none" />
        </div>
      </div>
      <CarouselContent>
        {kpis.map((kpi) => (
          <CarouselItem key={kpi.label} className="basis-1/2">
            <Card size="sm">
              <CardContent className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground">{kpi.label}</span>
                <span className="text-xl font-semibold">{kpi.value}</span>
                <svg viewBox="0 0 100 30" className="h-8 w-full" preserveAspectRatio="none">
                  <path
                    d={toPath(kpi.points)}
                    fill="none"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    className={kpi.up ? "stroke-primary" : "stroke-destructive"}
                  />
                </svg>
                <span className={cn("flex items-center gap-1 text-xs", kpi.up ? "text-primary" : "text-destructive")}>
                  {kpi.up ? <TrendingUpIcon className="size-3.5" /> : <TrendingDownIcon className="size-3.5" />}
                  {kpi.delta}
                </span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}`,
  },
  {
    name: "VerticalAnnouncementTicker",
    description: "Vertical carousel that auto-advances through product announcements in a single line.",
    imports: API,
    code: `
const announcements = [
  { tag: "New", text: "Recurring invoices are now available on all plans." },
  { tag: "Update", text: "Exports now include custom fields and tags." },
  { tag: "Event", text: "Join our live Q&A on roadmap priorities this Thursday." },
  { tag: "Fix", text: "Calendar sync no longer duplicates all-day events." },
]

export default function VerticalAnnouncementTicker() {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) return
    const id = setInterval(() => api.scrollNext(), 3000)
    return () => clearInterval(id)
  }, [api])

  return (
    <div className="flex w-full max-w-md items-center gap-3 border bg-muted/40 px-3">
      <MegaphoneIcon className="size-4 shrink-0 text-muted-foreground" />
      <Carousel setApi={setApi} orientation="vertical" opts={{ loop: true }} className="min-w-0 flex-1">
        <CarouselContent className="-mt-0 h-11">
          {announcements.map((item) => (
            <CarouselItem key={item.text} className="flex items-center gap-2 pt-0">
              <Badge variant="outline">{item.tag}</Badge>
              <span className="truncate text-xs">{item.text}</span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}`,
  },
  {
    name: "AutoplayHeroWithPause",
    description: "Promotional hero carousel with timed autoplay, a pause toggle, and a progress bar.",
    imports: API,
    code: `
const slides = [
  { title: "Spring collection", body: "Lightweight layers for changing weather.", tone: "from-emerald-500 to-teal-700" },
  { title: "Free shipping weekend", body: "On every order over $50, through Sunday.", tone: "from-indigo-500 to-violet-700" },
  { title: "Members save 15%", body: "Join free and unlock early access drops.", tone: "from-orange-400 to-rose-600" },
]

export default function AutoplayHeroWithPause() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [playing, setPlaying] = React.useState(true)
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  React.useEffect(() => {
    if (!api || !playing) return
    const id = setInterval(() => api.scrollNext(), 4000)
    return () => clearInterval(id)
  }, [api, playing, selected])

  return (
    <Carousel setApi={handleApi} opts={{ loop: true }} className="w-full max-w-md">
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.title}>
            <div className={cn("flex h-44 flex-col justify-end gap-1 bg-gradient-to-br p-5 text-white", slide.tone)}>
              <h3 className="text-lg font-semibold">{slide.title}</h3>
              <p className="text-sm text-white/80">{slide.body}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-2 flex items-center gap-2">
        <Button
          variant="outline"
          size="icon-sm"
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          onClick={() => setPlaying((p) => !p)}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </Button>
        <div className="flex flex-1 gap-1">
          {slides.map((slide, index) => (
            <div key={slide.title} className="h-1 flex-1 bg-muted">
              <div className={cn("h-full bg-primary transition-all", index <= selected ? "w-full" : "w-0")} />
            </div>
          ))}
        </div>
      </div>
    </Carousel>
  )
}`,
  },
  {
    name: "SlideCounterHeader",
    description: "Section header with a live slide counter and inline previous/next controls.",
    imports: API,
    code: `
const guides = [
  { title: "Set up your first workspace", minutes: 4 },
  { title: "Invite teammates and assign roles", minutes: 3 },
  { title: "Connect your calendar", minutes: 2 },
  { title: "Build an automation", minutes: 6 },
  { title: "Share a public dashboard", minutes: 5 },
  { title: "Export data to CSV", minutes: 2 },
]

export default function SlideCounterHeader() {
  const [state, setState] = React.useState({ current: 1, count: 0 })

  const handleApi = React.useCallback((api: CarouselApi) => {
    if (!api) return
    const update = () => setState({ current: api.selectedScrollSnap() + 1, count: api.scrollSnapList().length })
    update()
    api.on("select", update).on("reInit", update)
  }, [])

  return (
    <Carousel setApi={handleApi} opts={{ align: "start" }} className="w-full max-w-md">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-medium">Getting started guides</h3>
          <p className="text-xs text-muted-foreground tabular-nums">
            {state.current} / {state.count}
          </p>
        </div>
        <div className="flex gap-1">
          <CarouselPrevious className="static translate-none" />
          <CarouselNext className="static translate-none" />
        </div>
      </div>
      <CarouselContent>
        {guides.map((guide, index) => (
          <CarouselItem key={guide.title} className="basis-1/2">
            <div className="flex h-28 flex-col justify-between border p-3">
              <span className="text-xs text-muted-foreground">Guide {index + 1}</span>
              <span className="text-sm font-medium">{guide.title}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ClockIcon className="size-3" />
                {guide.minutes} min read
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}`,
  },
  {
    name: "ScrollProgressCarousel",
    description: "Free-scrolling carousel with a Progress bar bound to Embla's scroll progress.",
    code: `
const swatches = ["Slate", "Stone", "Sand", "Sage", "Moss", "Ocean", "Dusk", "Plum", "Clay", "Rust"]

export default function ScrollProgressCarousel() {
  const [progress, setProgress] = React.useState(0)

  const handleApi = React.useCallback((api: CarouselApi) => {
    if (!api) return
    const update = () => setProgress(Math.max(0, Math.min(1, api.scrollProgress())) * 100)
    api.on("scroll", update).on("reInit", update)
  }, [])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Carousel setApi={handleApi} opts={{ dragFree: true, align: "start" }}>
        <CarouselContent className="-ms-2">
          {swatches.map((swatch, index) => (
            <CarouselItem key={swatch} className="basis-1/3 ps-2">
              <div className="flex aspect-[3/4] flex-col justify-end border bg-muted p-2" style={{ opacity: 0.4 + (index % 5) * 0.15 }}>
                <span className="text-xs font-medium">{swatch}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Progress value={progress} aria-label="Scroll progress" />
    </div>
  )
}`,
    imports: API,
  },
  {
    name: "RecipeCardsCarousel",
    description: "Recipe cards with cook time, difficulty badges, and a save toggle per slide.",
    code: `
const recipes = [
  { title: "Charred corn tacos", time: "25 min", level: "Easy", tone: "from-yellow-300 to-orange-500" },
  { title: "Miso glazed salmon", time: "35 min", level: "Medium", tone: "from-orange-300 to-rose-500" },
  { title: "Herb lentil salad", time: "20 min", level: "Easy", tone: "from-lime-300 to-emerald-600" },
  { title: "Slow roasted ragù", time: "3 hr", level: "Hard", tone: "from-red-400 to-red-800" },
]

export default function RecipeCardsCarousel() {
  const [saved, setSaved] = React.useState<string[]>(["Herb lentil salad"])

  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-[16rem] sm:max-w-md">
      <CarouselContent>
        {recipes.map((recipe) => {
          const isSaved = saved.includes(recipe.title)
          return (
            <CarouselItem key={recipe.title} className="sm:basis-1/2">
              <Card className="pt-0">
                <div className={cn("relative h-28 bg-gradient-to-br", recipe.tone)}>
                  <Button
                    size="icon-sm"
                    variant="secondary"
                    aria-label={isSaved ? "Remove from saved" : "Save recipe"}
                    className="absolute end-2 top-2"
                    onClick={() =>
                      setSaved((list) => (isSaved ? list.filter((t) => t !== recipe.title) : [...list, recipe.title]))
                    }
                  >
                    <BookmarkIcon className={cn(isSaved && "fill-current")} />
                  </Button>
                </div>
                <CardHeader>
                  <CardTitle>{recipe.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <ClockIcon className="size-3" /> {recipe.time}
                    <Badge variant="outline">{recipe.level}</Badge>
                  </CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`,
  },
  {
    name: "ConferenceDayTabs",
    description: "Conference schedule where day tabs and swipeable day slides stay in sync.",
    imports: API,
    code: `
const days = [
  { day: "Mon", sessions: [["09:00", "Opening keynote"], ["11:00", "Designing for trust"], ["14:00", "Scaling small teams"]] },
  { day: "Tue", sessions: [["09:30", "State of the web"], ["13:00", "Accessible motion"], ["16:00", "Lightning talks"]] },
  { day: "Wed", sessions: [["10:00", "Data at the edge"], ["12:30", "Roundtable lunch"], ["15:00", "Closing panel"]] },
]

export default function ConferenceDayTabs() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  return (
    <div className="w-full max-w-sm border">
      <div className="grid grid-cols-3 border-b">
        {days.map((d, index) => (
          <button
            key={d.day}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "border-b-2 py-2 text-xs font-medium transition-colors",
              selected === index ? "border-primary text-foreground" : "border-transparent text-muted-foreground"
            )}
          >
            {d.day}
          </button>
        ))}
      </div>
      <Carousel setApi={handleApi}>
        <CarouselContent>
          {days.map((d) => (
            <CarouselItem key={d.day}>
              <ul className="flex flex-col divide-y">
                {d.sessions.map(([time, title]) => (
                  <li key={title} className="flex items-center gap-3 p-3">
                    <span className="w-12 text-xs text-muted-foreground tabular-nums">{time}</span>
                    <span className="text-sm">{title}</span>
                  </li>
                ))}
              </ul>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}`,
  },
  {
    name: "WeekDayPickerStrip",
    description: "Booking date strip of selectable days with week-by-week navigation.",
    code: `
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const dates = Array.from({ length: 21 }, (_, i) => ({
  key: i,
  weekday: dayNames[(i + 1) % 7],
  date: ((i + 2) % 30) + 1,
  full: (i + 1) % 7 === 0 || i === 4,
}))

export default function WeekDayPickerStrip() {
  const [picked, setPicked] = React.useState(2)

  return (
    <div className="w-full max-w-sm">
      <p className="mb-2 text-sm font-medium">Pick a delivery date</p>
      <Carousel opts={{ slidesToScroll: 7, align: "start" }} className="px-8">
        <CarouselContent className="-ms-1">
          {dates.map((d) => (
            <CarouselItem key={d.key} className="basis-1/7 ps-1">
              <button
                type="button"
                disabled={d.full}
                onClick={() => setPicked(d.key)}
                className={cn(
                  "flex w-full flex-col items-center gap-0.5 border py-2 text-xs transition-colors disabled:cursor-not-allowed disabled:opacity-40",
                  picked === d.key ? "border-primary bg-primary text-primary-foreground" : "hover:bg-muted"
                )}
              >
                <span className="text-[10px] uppercase">{d.weekday}</span>
                <span className="text-sm font-semibold">{d.date}</span>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="ghost" className="start-0" />
        <CarouselNext variant="ghost" className="end-0" />
      </Carousel>
      <p className="mt-2 text-xs text-muted-foreground">Greyed out days are fully booked.</p>
    </div>
  )
}`,
  },
  {
    name: "RecentFilesCarousel",
    description: "File manager \"Recent\" row with file-type icons, sizes, and owners.",
    code: `
const files = [
  { name: "Q3 roadmap.pdf", size: "2.4 MB", icon: FileTextIcon, owner: "MC" },
  { name: "Brand assets", size: "18 items", icon: FolderIcon, owner: "JP" },
  { name: "Budget 2026.xlsx", size: "840 KB", icon: FileSpreadsheetIcon, owner: "AL" },
  { name: "Launch video.mp4", size: "128 MB", icon: FileVideoIcon, owner: "RK" },
  { name: "Interview notes.md", size: "12 KB", icon: FileCodeIcon, owner: "MC" },
  { name: "Archive.zip", size: "56 MB", icon: FileArchiveIcon, owner: "TS" },
]

export default function RecentFilesCarousel() {
  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-md">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-medium">Recent</h3>
        <div className="flex gap-1">
          <CarouselPrevious variant="ghost" className="static translate-none" />
          <CarouselNext variant="ghost" className="static translate-none" />
        </div>
      </div>
      <CarouselContent className="-ms-2">
        {files.map((file) => (
          <CarouselItem key={file.name} className="basis-1/2 ps-2 sm:basis-1/3">
            <button type="button" className="flex w-full flex-col gap-3 border p-3 text-start transition-colors hover:bg-muted/60">
              <file.icon className="size-6 text-muted-foreground" />
              <div className="min-w-0">
                <p className="truncate text-xs font-medium">{file.name}</p>
                <p className="text-[11px] text-muted-foreground">{file.size}</p>
              </div>
              <Avatar size="sm">
                <AvatarFallback>{file.owner}</AvatarFallback>
              </Avatar>
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}`,
  },
  {
    name: "ChatSuggestedPrompts",
    description: "Chat composer with a swipeable row of suggested prompts that fill the input.",
    code: `
const prompts = [
  "Summarize this thread",
  "Draft a polite follow-up",
  "List open action items",
  "Translate to Spanish",
  "Make it shorter",
  "Suggest a subject line",
]

export default function ChatSuggestedPrompts() {
  const [value, setValue] = React.useState("")

  return (
    <div className="flex w-full max-w-md flex-col gap-2 border p-3">
      <Carousel opts={{ dragFree: true, align: "start" }}>
        <CarouselContent className="-ms-2">
          {prompts.map((prompt) => (
            <CarouselItem key={prompt} className="basis-auto ps-2">
              <Button variant="outline" size="xs" onClick={() => setValue(prompt)}>
                <SparklesIcon data-icon="inline-start" />
                {prompt}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex gap-2">
        <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Ask the assistant..." />
        <Button size="icon" aria-label="Send" disabled={!value}>
          <SendIcon />
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "KanbanColumnsSwipe",
    description: "Kanban board columns as a swipeable carousel for small screens.",
    code: `
const columns = [
  { title: "Backlog", cards: ["Audit pricing page", "Refresh empty states"] },
  { title: "In progress", cards: ["Billing settings revamp", "Mobile nav", "Usage alerts"] },
  { title: "Review", cards: ["Invoice PDF layout"] },
  { title: "Done", cards: ["Dark mode tokens", "Team invites"] },
]

export default function KanbanColumnsSwipe() {
  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-[17rem] sm:max-w-md">
      <CarouselContent className="-ms-3">
        {columns.map((column) => (
          <CarouselItem key={column.title} className="basis-5/6 ps-3 sm:basis-1/2">
            <div className="flex h-full flex-col gap-2 bg-muted/50 p-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-medium">{column.title}</span>
                <Badge variant="secondary">{column.cards.length}</Badge>
              </div>
              {column.cards.map((card) => (
                <div key={card} className="border bg-background p-2 text-xs shadow-xs">
                  {card}
                </div>
              ))}
              <Button variant="ghost" size="xs" className="justify-start">
                <PlusIcon data-icon="inline-start" />
                Add card
              </Button>
            </div>
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
    name: "ListingPhotoCarousel",
    description: "Rental listing card with an inner photo carousel, overlay arrows, and dot indicators.",
    imports: API,
    code: `
const photos = ["from-sky-300 to-blue-600", "from-amber-200 to-amber-600", "from-emerald-200 to-emerald-700", "from-stone-300 to-stone-600"]

export default function ListingPhotoCarousel() {
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((api: CarouselApi) => {
    if (!api) return
    api.on("select", () => setSelected(api.selectedScrollSnap()))
  }, [])

  return (
    <Card className="w-full max-w-xs pt-0">
      <Carousel setApi={handleApi} className="group/listing">
        <CarouselContent className="-ms-0">
          {photos.map((tone, index) => (
            <CarouselItem key={tone} className="ps-0">
              <div className={cn("flex aspect-[4/3] items-center justify-center bg-gradient-to-br text-xs text-white/80", tone)}>
                Photo {index + 1}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="secondary" className="start-2 opacity-0 transition-opacity group-hover/listing:opacity-100 disabled:opacity-0" />
        <CarouselNext variant="secondary" className="end-2 opacity-0 transition-opacity group-hover/listing:opacity-100 disabled:opacity-0" />
        <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1">
          {photos.map((tone, index) => (
            <span key={tone} className={cn("size-1.5 rounded-full", selected === index ? "bg-white" : "bg-white/50")} />
          ))}
        </div>
      </Carousel>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Lakeside cabin, Harrow Bay
          <span className="flex items-center gap-1 text-xs font-normal">
            <StarIcon className="size-3 fill-current" /> 4.92
          </span>
        </CardTitle>
        <CardDescription>2 guests · 1 bedroom · $148 night</CardDescription>
      </CardHeader>
    </Card>
  )
}`,
  },
  {
    name: "CheckoutUpsellCarousel",
    description: "Checkout \"Complete your order\" upsell row with add-to-cart buttons that toggle state.",
    code: `
const addons = [
  { name: "Travel case", price: 19 },
  { name: "Extra cable", price: 12 },
  { name: "Screen cloth", price: 6 },
  { name: "2-year cover", price: 29 },
  { name: "Gift wrap", price: 4 },
]

export default function CheckoutUpsellCarousel() {
  const [added, setAdded] = React.useState<string[]>([])
  const total = addons.filter((a) => added.includes(a.name)).reduce((sum, a) => sum + a.price, 0)

  return (
    <div className="w-full max-w-sm border p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <h3 className="text-sm font-medium">Complete your order</h3>
        <span className="text-xs text-muted-foreground">+$\{total} add-ons</span>
      </div>
      <Carousel opts={{ align: "start" }} className="px-8">
        <CarouselContent className="-ms-2">
          {addons.map((addon) => {
            const isAdded = added.includes(addon.name)
            return (
              <CarouselItem key={addon.name} className="basis-1/2 ps-2">
                <div className="flex flex-col gap-2 border p-2">
                  <div className="flex aspect-square items-center justify-center bg-muted">
                    <PackageIcon className="size-6 text-muted-foreground" />
                  </div>
                  <span className="truncate text-xs font-medium">{addon.name}</span>
                  <span className="text-xs text-muted-foreground">\${addon.price}</span>
                  <Button
                    size="xs"
                    variant={isAdded ? "secondary" : "outline"}
                    onClick={() =>
                      setAdded((list) => (isAdded ? list.filter((n) => n !== addon.name) : [...list, addon.name]))
                    }
                  >
                    {isAdded ? <CheckIcon data-icon="inline-start" /> : <PlusIcon data-icon="inline-start" />}
                    {isAdded ? "Added" : "Add"}
                  </Button>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious variant="ghost" className="start-0" />
        <CarouselNext variant="ghost" className="end-0" />
      </Carousel>
    </div>
  )
}`,
  },
  {
    name: "ReleaseNotesCarousel",
    description: "What's new modal-style card cycling through release notes with version badges.",
    code: `
const releases = [
  { version: "v3.2", date: "Nov 4", title: "Saved views", body: "Pin your favourite filters and share them with a link." },
  { version: "v3.1", date: "Oct 18", title: "Bulk edit", body: "Update status, owner, and due date on many rows at once." },
  { version: "v3.0", date: "Sep 30", title: "New editor", body: "Faster typing, slash commands, and inline comments." },
]

export default function ReleaseNotesCarousel() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GiftIcon className="size-4" />
          What&apos;s new
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel>
          <CarouselContent>
            {releases.map((release) => (
              <CarouselItem key={release.version}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Badge>{release.version}</Badge>
                    <span className="text-xs text-muted-foreground">{release.date}</span>
                  </div>
                  <h4 className="text-sm font-semibold">{release.title}</h4>
                  <p className="text-xs text-muted-foreground">{release.body}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-4 flex justify-end gap-1">
            <CarouselPrevious className="static translate-none" />
            <CarouselNext className="static translate-none" />
          </div>
        </Carousel>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "AlbumCoversCarousel",
    description: "Music app row of gradient album covers with a hover play button.",
    code: `
const albums = [
  { title: "Low Tide", artist: "Harbor Lights", tone: "from-cyan-400 to-blue-700" },
  { title: "Paper Moons", artist: "June Avenue", tone: "from-pink-300 to-purple-600" },
  { title: "Static Bloom", artist: "Velvet Era", tone: "from-lime-300 to-green-700" },
  { title: "Ember", artist: "The Quiet Hours", tone: "from-orange-300 to-red-700" },
  { title: "Northbound", artist: "Atlas Choir", tone: "from-slate-300 to-slate-700" },
  { title: "Glasshouse", artist: "Mira Sol", tone: "from-teal-200 to-teal-600" },
]

export default function AlbumCoversCarousel() {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-[14rem] sm:max-w-md">
      <CarouselContent className="-ms-3">
        {albums.map((album) => (
          <CarouselItem key={album.title} className="basis-1/2 ps-3 sm:basis-1/3">
            <div className="group/album flex flex-col gap-1.5">
              <div className={cn("relative aspect-square bg-gradient-to-br", album.tone)}>
                <Button
                  size="icon"
                  aria-label={"Play " + album.title}
                  className="absolute end-2 bottom-2 translate-y-1 opacity-0 transition-all group-hover/album:translate-y-0 group-hover/album:opacity-100"
                >
                  <PlayIcon className="fill-current" />
                </Button>
              </div>
              <span className="truncate text-xs font-medium">{album.title}</span>
              <span className="truncate text-[11px] text-muted-foreground">{album.artist}</span>
            </div>
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
    name: "CourseLessonsCarousel",
    description: "Course module carousel showing per-lesson progress and locked lessons.",
    code: `
const lessons = [
  { title: "Foundations of color", progress: 100 },
  { title: "Building a palette", progress: 100 },
  { title: "Contrast and accessibility", progress: 45 },
  { title: "Color in data viz", progress: 0, locked: true },
  { title: "Theming systems", progress: 0, locked: true },
]

export default function CourseLessonsCarousel() {
  return (
    <Carousel opts={{ align: "start", startIndex: 2 }} className="w-full max-w-[16rem] sm:max-w-md">
      <CarouselContent>
        {lessons.map((lesson, index) => (
          <CarouselItem key={lesson.title} className="sm:basis-1/2">
            <Card size="sm" className={cn(lesson.locked && "opacity-60")}>
              <CardHeader>
                <CardDescription>Lesson {index + 1}</CardDescription>
                <CardTitle className="flex items-start justify-between gap-2">
                  {lesson.title}
                  {lesson.locked ? (
                    <LockIcon className="size-3.5 shrink-0 text-muted-foreground" />
                  ) : lesson.progress === 100 ? (
                    <CircleCheckIcon className="size-3.5 shrink-0 text-primary" />
                  ) : null}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Progress value={lesson.progress} aria-label={lesson.title + " progress"} />
                <Button size="xs" variant={lesson.progress > 0 && lesson.progress < 100 ? "default" : "outline"} disabled={lesson.locked}>
                  {lesson.progress === 100 ? "Review" : lesson.progress > 0 ? "Continue" : "Start"}
                </Button>
              </CardContent>
            </Card>
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
    name: "TeamDirectoryCarousel",
    description: "Team directory cards with avatar initials, status badges, and contact buttons.",
    code: `
const people = [
  { name: "Hana Ito", role: "Product Designer", status: "Online" },
  { name: "Marco Bell", role: "Staff Engineer", status: "In a meeting" },
  { name: "Priya Shah", role: "Data Analyst", status: "Online" },
  { name: "Jon Weller", role: "Support Lead", status: "Away" },
  { name: "Sofia Lund", role: "Recruiter", status: "Online" },
]

export default function TeamDirectoryCarousel() {
  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-[14rem] sm:max-w-md">
      <CarouselContent>
        {people.map((person) => (
          <CarouselItem key={person.name} className="sm:basis-1/2">
            <Card size="sm">
              <CardContent className="flex flex-col items-center gap-2 text-center">
                <Avatar size="lg">
                  <AvatarFallback>{person.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{person.name}</p>
                  <p className="text-xs text-muted-foreground">{person.role}</p>
                </div>
                <Badge variant={person.status === "Online" ? "secondary" : "outline"}>{person.status}</Badge>
                <div className="flex gap-1">
                  <Button size="icon-sm" variant="outline" aria-label={"Message " + person.name}>
                    <MessageSquareIcon />
                  </Button>
                  <Button size="icon-sm" variant="outline" aria-label={"Email " + person.name}>
                    <MailIcon />
                  </Button>
                </div>
              </CardContent>
            </Card>
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
    name: "HourlyForecastStrip",
    description: "Weather app hourly forecast strip with free drag and weather icons.",
    code: `
const hours = [
  { time: "Now", temp: 18, icon: SunIcon },
  { time: "1 PM", temp: 19, icon: SunIcon },
  { time: "2 PM", temp: 19, icon: CloudSunIcon },
  { time: "3 PM", temp: 17, icon: CloudIcon },
  { time: "4 PM", temp: 16, icon: CloudRainIcon },
  { time: "5 PM", temp: 15, icon: CloudRainIcon },
  { time: "6 PM", temp: 14, icon: CloudIcon },
  { time: "7 PM", temp: 13, icon: MoonIcon },
  { time: "8 PM", temp: 12, icon: MoonIcon },
]

export default function HourlyForecastStrip() {
  return (
    <div className="w-full max-w-sm border p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium">Hourly forecast</span>
        <span className="text-xs text-muted-foreground">Rain from 4 PM</span>
      </div>
      <Carousel opts={{ dragFree: true, align: "start" }}>
        <CarouselContent className="-ms-2">
          {hours.map((hour, index) => (
            <CarouselItem key={hour.time} className="basis-1/5 ps-2">
              <div className={cn("flex flex-col items-center gap-2 py-2 text-xs", index === 0 && "bg-muted")}>
                <span className="text-muted-foreground">{hour.time}</span>
                <hour.icon className="size-5" />
                <span className="font-medium">{hour.temp}°</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}`,
  },
  {
    name: "CenterFocusCarousel",
    description: "Center-aligned looping carousel that scales up the active slide and dims the rest.",
    imports: API,
    code: `
const quotes = ["Ship small, ship often.", "Clarity beats cleverness.", "Make it work, then make it nice.", "Defaults matter.", "Leave it better than you found it."]

export default function CenterFocusCarousel() {
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((api: CarouselApi) => {
    if (!api) return
    api.on("select", () => setSelected(api.selectedScrollSnap()))
  }, [])

  return (
    <Carousel setApi={handleApi} opts={{ align: "center", loop: true }} className="w-full max-w-md">
      <CarouselContent>
        {quotes.map((quote, index) => (
          <CarouselItem key={quote} className="basis-2/3 sm:basis-1/2">
            <div
              className={cn(
                "flex aspect-[4/3] items-center justify-center border p-4 text-center text-sm font-medium transition-all duration-300",
                selected === index ? "scale-100 bg-card" : "scale-90 bg-muted/50 opacity-50"
              )}
            >
              {quote}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}`,
  },
  {
    name: "KeyboardHintCarousel",
    description: "Focusable carousel that advertises its arrow-key navigation with Kbd hints.",
    code: `
const tips = [
  { title: "Quick search", body: "Open search from anywhere to jump to any record." },
  { title: "Command menu", body: "Run actions without leaving the keyboard." },
  { title: "Inline editing", body: "Press Enter on any cell to start editing." },
  { title: "Undo everything", body: "Every change in a session can be reverted." },
]

export default function KeyboardHintCarousel() {
  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3">
      <Carousel tabIndex={0} aria-label="Product tips" className="w-full outline-none focus-visible:ring-2 focus-visible:ring-ring/50">
        <CarouselContent>
          {tips.map((tip) => (
            <CarouselItem key={tip.title}>
              <div className="flex h-32 flex-col justify-center gap-1 border bg-muted/30 p-4">
                <span className="text-sm font-semibold">{tip.title}</span>
                <span className="text-xs text-muted-foreground">{tip.body}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        Focus and use
        <KbdGroup>
          <Kbd>←</Kbd>
          <Kbd>→</Kbd>
        </KbdGroup>
        to browse
      </p>
    </div>
  )
}`,
  },
  {
    name: "VerticalOrderTimeline",
    description: "Vertical carousel of shipment tracking events with controls in the header.",
    code: `
const events = [
  { title: "Order placed", time: "Nov 10, 09:14", icon: ReceiptIcon },
  { title: "Payment confirmed", time: "Nov 10, 09:15", icon: CreditCardIcon },
  { title: "Packed at warehouse", time: "Nov 11, 16:40", icon: PackageIcon },
  { title: "Out for delivery", time: "Nov 13, 07:02", icon: TruckIcon },
  { title: "Delivered", time: "Nov 13, 13:28", icon: HomeIcon },
]

export default function VerticalOrderTimeline() {
  return (
    <Carousel orientation="vertical" opts={{ align: "start" }} className="w-full max-w-xs border p-3">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Order #48213</p>
          <p className="text-xs text-muted-foreground">5 updates</p>
        </div>
        <div className="flex gap-1">
          <CarouselPrevious className="static translate-none rotate-90" />
          <CarouselNext className="static translate-none rotate-90" />
        </div>
      </div>
      <CarouselContent className="-mt-2 h-48">
        {events.map((event) => (
          <CarouselItem key={event.title} className="basis-1/3 pt-2">
            <div className="flex h-full items-center gap-3 border-s-2 border-primary/40 ps-3">
              <event.icon className="size-4 text-muted-foreground" />
              <div>
                <p className="text-sm">{event.title}</p>
                <p className="text-xs text-muted-foreground">{event.time}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}`,
  },
  {
    name: "RtlDirectionCarousel",
    description: "Right-to-left carousel using Embla's direction option for Arabic content.",
    code: `
const offers = [
  { title: "خصم ٢٠٪", body: "على جميع الاشتراكات السنوية" },
  { title: "شحن مجاني", body: "للطلبات فوق ٢٠٠ ريال" },
  { title: "هدية ترحيبية", body: "عند التسجيل لأول مرة" },
  { title: "نقاط مضاعفة", body: "طوال عطلة نهاية الأسبوع" },
]

export default function RtlDirectionCarousel() {
  return (
    <div dir="rtl" className="w-full max-w-[14rem] sm:max-w-xs">
      <Carousel opts={{ direction: "rtl" }}>
        <CarouselContent>
          {offers.map((offer) => (
            <CarouselItem key={offer.title}>
              <Card>
                <CardContent className="flex h-32 flex-col items-start justify-center gap-1">
                  <span className="text-lg font-semibold">{offer.title}</span>
                  <span className="text-sm text-muted-foreground">{offer.body}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}`,
  },
  {
    name: "FeatureTourToggleSync",
    description: "Feature tour where a ToggleGroup and the carousel drive each other.",
    imports: API,
    code: `
const features = [
  { id: "inbox", label: "Inbox", icon: InboxIcon, body: "Every request from email, chat, and forms lands in one shared queue." },
  { id: "rules", label: "Rules", icon: WorkflowIcon, body: "Route, tag, and assign conversations automatically based on content." },
  { id: "reports", label: "Reports", icon: ChartColumnIcon, body: "Track response times and satisfaction across every channel." },
]

export default function FeatureTourToggleSync() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <ToggleGroup
        variant="outline"
        value={[features[selected]!.id]}
        onValueChange={(value) => {
          const index = features.findIndex((f) => f.id === value[0])
          if (index >= 0) api?.scrollTo(index)
        }}
        className="w-full"
      >
        {features.map((feature) => (
          <ToggleGroupItem key={feature.id} value={feature.id} className="flex-1">
            {feature.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <Carousel setApi={handleApi}>
        <CarouselContent>
          {features.map((feature) => (
            <CarouselItem key={feature.id}>
              <div className="flex h-40 flex-col justify-center gap-3 border bg-muted/30 p-5">
                <feature.icon className="size-6" />
                <p className="text-sm">{feature.body}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}`,
  },
  {
    name: "CouponOffersCarousel",
    description: "Ticket-style coupon cards with a copy-code button that confirms on click.",
    code: `
const coupons = [
  { code: "WELCOME10", title: "10% off first order", expires: "Ends Dec 31" },
  { code: "FREESHIP", title: "Free standard shipping", expires: "Ends Nov 30" },
  { code: "BUNDLE25", title: "$25 off bundles", expires: "Ends Dec 15" },
]

export default function CouponOffersCarousel() {
  const [copied, setCopied] = React.useState<string | null>(null)

  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-[15rem] sm:max-w-sm">
      <CarouselContent>
        {coupons.map((coupon) => (
          <CarouselItem key={coupon.code}>
            <div className="flex border border-dashed">
              <div className="flex w-16 shrink-0 items-center justify-center bg-primary text-primary-foreground">
                <TicketPercentIcon className="size-6" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-2 p-3">
                <span className="text-sm font-medium">{coupon.title}</span>
                <span className="text-xs text-muted-foreground">{coupon.expires}</span>
                <Button
                  variant="outline"
                  size="xs"
                  className="w-fit font-mono"
                  onClick={() => {
                    navigator.clipboard?.writeText(coupon.code)
                    setCopied(coupon.code)
                  }}
                >
                  {copied === coupon.code ? <CheckIcon data-icon="inline-start" /> : <CopyIcon data-icon="inline-start" />}
                  {coupon.code}
                </Button>
              </div>
            </div>
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
    name: "NewsHeadlinesCarousel",
    description: "Editorial headline cards with category badges and read time, linked as anchors.",
    code: `
const articles = [
  { category: "Climate", title: "Coastal towns test floating flood barriers", read: 6 },
  { category: "Tech", title: "Why small models are winning on-device", read: 4 },
  { category: "Culture", title: "The quiet return of the neighborhood cinema", read: 8 },
  { category: "Science", title: "A new map of the deep ocean floor", read: 5 },
]

export default function NewsHeadlinesCarousel() {
  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-[15rem] sm:max-w-md">
      <CarouselContent>
        {articles.map((article) => (
          <CarouselItem key={article.title} className="sm:basis-1/2">
            <a href="#" className="flex h-full flex-col gap-2 border p-4 transition-colors hover:bg-muted/50">
              <Badge variant="secondary">{article.category}</Badge>
              <span className="text-sm leading-snug font-semibold">{article.title}</span>
              <span className="mt-auto text-xs text-muted-foreground">{article.read} min read</span>
            </a>
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
    name: "WalletBalancesCarousel",
    description: "Multi-currency wallet cards where the selected slide drives the transactions below.",
    imports: API,
    code: `
const wallets = [
  { currency: "USD", balance: "$12,480.20", last: ["Corvia payout +$2,100", "AWS invoice -$412"] },
  { currency: "EUR", balance: "€4,902.75", last: ["Client Lyon +€1,250", "Office rent -€980"] },
  { currency: "GBP", balance: "£1,130.00", last: ["Refund +£45", "Contractor -£600"] },
]

export default function WalletBalancesCarousel() {
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((api: CarouselApi) => {
    if (!api) return
    api.on("select", () => setSelected(api.selectedScrollSnap()))
  }, [])

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Carousel setApi={handleApi} opts={{ align: "center" }}>
        <CarouselContent>
          {wallets.map((wallet) => (
            <CarouselItem key={wallet.currency} className="basis-[85%]">
              <div className="flex h-32 flex-col justify-between bg-primary p-4 text-primary-foreground">
                <div className="flex items-center justify-between text-xs opacity-80">
                  <span>{wallet.currency} account</span>
                  <WalletIcon className="size-4" />
                </div>
                <span className="text-2xl font-semibold tabular-nums">{wallet.balance}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="border">
        <p className="border-b px-3 py-2 text-xs font-medium">Recent activity</p>
        {wallets[selected]!.last.map((line) => (
          <p key={line} className="px-3 py-2 text-xs text-muted-foreground">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "InstallCommandCarousel",
    description: "Code snippet carousel switching between package manager install commands.",
    imports: API,
    code: `
const managers = [
  { id: "npm", cmd: "npm install @acme/charts" },
  { id: "pnpm", cmd: "pnpm add @acme/charts" },
  { id: "yarn", cmd: "yarn add @acme/charts" },
  { id: "bun", cmd: "bun add @acme/charts" },
]

export default function InstallCommandCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  return (
    <div className="w-full max-w-sm border bg-muted/30">
      <div className="flex items-center gap-1 border-b px-2 py-1.5">
        <TerminalIcon className="me-1 size-3.5 text-muted-foreground" />
        {managers.map((m, index) => (
          <Button key={m.id} size="xs" variant={selected === index ? "secondary" : "ghost"} onClick={() => api?.scrollTo(index)}>
            {m.id}
          </Button>
        ))}
      </div>
      <Carousel setApi={handleApi} opts={{ duration: 18 }}>
        <CarouselContent>
          {managers.map((m) => (
            <CarouselItem key={m.id}>
              <pre className="overflow-x-auto p-4 font-mono text-xs">
                <span className="text-muted-foreground">$ </span>
                {m.cmd}
              </pre>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}`,
  },
  {
    name: "SavedItemsWithEmpty",
    description: "Dynamic carousel where removing slides re-initialises it and ends in an Empty state.",
    code: `
const initial = ["Linen shirt", "Canvas tote", "Wool beanie", "Leather wallet"]

export default function SavedItemsWithEmpty() {
  const [items, setItems] = React.useState(initial)

  if (items.length === 0) {
    return (
      <Empty className="w-full max-w-sm border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <HeartIcon />
          </EmptyMedia>
          <EmptyTitle>No saved items</EmptyTitle>
          <EmptyDescription>Items you save will show up here.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm" variant="outline" onClick={() => setItems(initial)}>
            Restore items
          </Button>
        </EmptyContent>
      </Empty>
    )
  }

  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-[14rem] sm:max-w-sm">
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item} className="sm:basis-1/2">
            <div className="flex flex-col gap-2 border p-3">
              <div className="aspect-square bg-muted" />
              <span className="text-xs font-medium">{item}</span>
              <Button size="xs" variant="ghost" onClick={() => setItems((list) => list.filter((i) => i !== item))}>
                <XIcon data-icon="inline-start" />
                Remove
              </Button>
            </div>
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
    name: "LoadingSkeletonCarousel",
    description: "Carousel that shows Skeleton slides while content loads, with a reload action.",
    code: `
const events = [
  { title: "Design critique", when: "Today, 2:00 PM" },
  { title: "Sprint planning", when: "Tomorrow, 10:00 AM" },
  { title: "Customer call", when: "Thu, 4:30 PM" },
  { title: "Team lunch", when: "Fri, 12:30 PM" },
]

export default function LoadingSkeletonCarousel() {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    if (!loading) return
    const id = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(id)
  }, [loading])

  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-md">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium">Upcoming</span>
        <Button size="xs" variant="ghost" onClick={() => setLoading(true)} disabled={loading}>
          <RefreshCwIcon data-icon="inline-start" className={cn(loading && "animate-spin")} />
          Reload
        </Button>
      </div>
      <CarouselContent className="-ms-2">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2 ps-2 sm:basis-1/3">
                <div className="flex flex-col gap-2 border p-3">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </CarouselItem>
            ))
          : events.map((event) => (
              <CarouselItem key={event.title} className="basis-1/2 ps-2 sm:basis-1/3">
                <div className="flex flex-col gap-1 border p-3">
                  <span className="truncate text-xs font-medium">{event.title}</span>
                  <span className="truncate text-[11px] text-muted-foreground">{event.when}</span>
                </div>
              </CarouselItem>
            ))}
      </CarouselContent>
    </Carousel>
  )
}`,
  },
  {
    name: "SlidesPerViewSwitcher",
    description: "Density switcher that changes how many slides are visible at once.",
    code: `
const basis: Record<string, string> = { "1": "basis-full", "2": "basis-1/2", "3": "basis-1/3" }

export default function SlidesPerViewSwitcher() {
  const [perView, setPerView] = React.useState("2")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Cards per view</span>
        <ToggleGroup variant="outline" size="sm" value={[perView]} onValueChange={(v) => v[0] && setPerView(v[0])}>
          <ToggleGroupItem value="1" aria-label="One per view">
            <SquareIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="2" aria-label="Two per view">
            <Columns2Icon />
          </ToggleGroupItem>
          <ToggleGroupItem value="3" aria-label="Three per view">
            <Columns3Icon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <Carousel key={perView} opts={{ align: "start" }} className="px-8">
        <CarouselContent className="-ms-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className={cn("ps-2", basis[perView])}>
              <div className="flex aspect-square items-center justify-center border bg-muted/40 text-lg font-semibold">
                {index + 1}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="ghost" className="start-0" />
        <CarouselNext variant="ghost" className="end-0" />
      </Carousel>
    </div>
  )
}`,
  },
  {
    name: "ProductReviewsCarousel",
    description: "Product review cards with star ratings, verified badges, and an average score header.",
    code: `
const reviews = [
  { name: "Kara M.", rating: 5, title: "Worth every penny", body: "Comfortable from day one and the battery easily lasts a week." },
  { name: "Devin L.", rating: 4, title: "Great, minor quirks", body: "Sound is excellent. The case is a little bulky for small pockets." },
  { name: "Ruth A.", rating: 5, title: "My daily driver", body: "Pairs instantly with my laptop and phone. No more fiddling." },
  { name: "Sam P.", rating: 3, title: "Good but pricey", body: "Solid build. I wish the app had more equalizer presets." },
]

export default function ProductReviewsCarousel() {
  return (
    <div className="w-full max-w-[15rem] sm:max-w-md">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-2xl font-semibold">4.3</span>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className={cn("size-4", i < 4 ? "fill-current" : "text-muted-foreground")} />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">218 reviews</span>
      </div>
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.name} className="sm:basis-1/2">
              <Card size="sm" className="h-full">
                <CardHeader>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className={cn("size-3", i < review.rating ? "fill-current" : "text-muted-foreground/40")} />
                    ))}
                  </div>
                  <CardTitle>{review.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <p className="text-xs text-muted-foreground">{review.body}</p>
                  <span className="flex items-center gap-1 text-[11px]">
                    {review.name}
                    <BadgeCheckIcon className="size-3 text-primary" />
                    Verified
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}`,
  },
  {
    name: "LogoMarqueeAutoplay",
    description: "Continuously advancing looped row of brand-neutral customer logo marks.",
    imports: API,
    code: `
const logos = [
  { name: "Northwind", icon: CompassIcon },
  { name: "Lumen", icon: SunIcon },
  { name: "Orbit", icon: OrbitIcon },
  { name: "Fernway", icon: LeafIcon },
  { name: "Quartz", icon: GemIcon },
  { name: "Harbor", icon: AnchorIcon },
  { name: "Summit", icon: MountainIcon },
]

export default function LogoMarqueeAutoplay() {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) return
    const id = setInterval(() => api.scrollNext(), 1800)
    return () => clearInterval(id)
  }, [api])

  return (
    <div className="w-full max-w-md">
      <p className="mb-3 text-center text-xs text-muted-foreground">Trusted by 4,000+ teams</p>
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start", duration: 40 }}
        className="[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      >
        <CarouselContent>
          {logos.map((logo) => (
            <CarouselItem key={logo.name} className="basis-1/3 sm:basis-1/4">
              <div className="flex items-center justify-center gap-1.5 py-2 text-muted-foreground">
                <logo.icon className="size-4" />
                <span className="text-sm font-semibold tracking-tight">{logo.name}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}`,
  },
  {
    name: "JobListingsCarousel",
    description: "Careers page job cards with location, type badges, and apply links.",
    code: `
const jobs = [
  { title: "Senior Frontend Engineer", team: "Platform", location: "Remote · EU", type: "Full-time" },
  { title: "Product Designer", team: "Growth", location: "Lisbon", type: "Full-time" },
  { title: "Support Specialist", team: "Customer", location: "Remote · US", type: "Part-time" },
  { title: "Data Engineer", team: "Insights", location: "Berlin", type: "Contract" },
]

export default function JobListingsCarousel() {
  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-[15rem] sm:max-w-md">
      <CarouselContent>
        {jobs.map((job) => (
          <CarouselItem key={job.title} className="sm:basis-1/2">
            <Card size="sm" className="h-full">
              <CardHeader>
                <CardDescription>{job.team}</CardDescription>
                <CardTitle>{job.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">
                    <MapPinIcon />
                    {job.location}
                  </Badge>
                  <Badge variant="secondary">{job.type}</Badge>
                </div>
                <Button size="sm" variant="outline" nativeButton={false} render={<a href="#" />}>
                  View role
                  <ArrowUpRightIcon data-icon="inline-end" />
                </Button>
              </CardContent>
            </Card>
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
    name: "PaymentCardSelector",
    description: "Billing settings carousel of saved payment cards where the centered card becomes the default.",
    imports: API,
    code: `
const cards = [
  { brand: "Visa", last4: "4242", exp: "08/27", tone: "from-slate-700 to-slate-900" },
  { brand: "Mastercard", last4: "5100", exp: "02/28", tone: "from-indigo-600 to-indigo-900" },
  { brand: "Amex", last4: "0005", exp: "11/26", tone: "from-emerald-600 to-emerald-900" },
]

export default function PaymentCardSelector() {
  const [selected, setSelected] = React.useState(0)
  const [defaultCard, setDefaultCard] = React.useState(0)

  const handleApi = React.useCallback((api: CarouselApi) => {
    if (!api) return
    api.on("select", () => setSelected(api.selectedScrollSnap()))
  }, [])

  const card = cards[selected]!

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Carousel setApi={handleApi} opts={{ align: "center" }}>
        <CarouselContent className="-ms-3">
          {cards.map((c, index) => (
            <CarouselItem key={c.last4} className="basis-[85%] ps-3">
              <div className={cn("relative flex aspect-[1.6] flex-col justify-between bg-gradient-to-br p-4 text-white", c.tone)}>
                <div className="flex items-center justify-between">
                  <CreditCardIcon className="size-5" />
                  {defaultCard === index && <span className="bg-white/20 px-1.5 py-0.5 text-[10px]">Default</span>}
                </div>
                <span className="font-mono text-sm tracking-widest">•••• {c.last4}</span>
                <div className="flex justify-between text-[11px] opacity-80">
                  <span>{c.brand}</span>
                  <span>{c.exp}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs text-muted-foreground">
          {card.brand} ending {card.last4}
        </span>
        <Button size="sm" disabled={defaultCard === selected} onClick={() => setDefaultCard(selected)}>
          {defaultCard === selected ? "Default card" : "Make default"}
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "AchievementBadgesRail",
    description: "Gamified achievement rail with earned, in-progress, and locked badge states.",
    code: `
const badges = [
  { name: "First commit", icon: GitCommitHorizontalIcon, state: "earned" },
  { name: "7-day streak", icon: FlameIcon, state: "earned" },
  { name: "Bug hunter", icon: BugIcon, state: "earned" },
  { name: "Reviewer", icon: EyeIcon, state: "progress", value: 60 },
  { name: "Mentor", icon: GraduationCapIcon, state: "locked" },
  { name: "Night owl", icon: MoonIcon, state: "locked" },
]

export default function AchievementBadgesRail() {
  return (
    <div className="w-full max-w-sm">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium">Achievements</span>
        <span className="text-xs text-muted-foreground">3 of 6 earned</span>
      </div>
      <Carousel opts={{ dragFree: true, align: "start" }}>
        <CarouselContent className="-ms-2">
          {badges.map((badge) => (
            <CarouselItem key={badge.name} className="basis-1/3 ps-2 sm:basis-1/4">
              <div className={cn("flex flex-col items-center gap-2 border p-3 text-center", badge.state === "locked" && "opacity-40")}>
                <div
                  className={cn(
                    "flex size-10 items-center justify-center rounded-full",
                    badge.state === "earned" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  )}
                >
                  {badge.state === "locked" ? <LockIcon className="size-4" /> : <badge.icon className="size-4" />}
                </div>
                <span className="text-[11px] leading-tight">{badge.name}</span>
                {badge.state === "progress" && <Progress value={badge.value} className="w-full" aria-label={badge.name + " progress"} />}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}`,
  },
  {
    name: "VideoChapterJump",
    description: "Video chapter carousel that can be jumped to via a NativeSelect.",
    imports: API,
    code: `
const chapters = [
  { title: "Introduction", time: "0:00" },
  { title: "Setting up the project", time: "2:14" },
  { title: "Writing the first query", time: "7:40" },
  { title: "Handling errors", time: "13:05" },
  { title: "Deploying", time: "18:22" },
]

export default function VideoChapterJump() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <NativeSelect
        aria-label="Jump to chapter"
        value={String(selected)}
        onChange={(e) => api?.scrollTo(Number(e.target.value))}
        className="w-full"
      >
        {chapters.map((chapter, index) => (
          <NativeSelectOption key={chapter.title} value={String(index)}>
            {chapter.time} · {chapter.title}
          </NativeSelectOption>
        ))}
      </NativeSelect>
      <Carousel setApi={handleApi}>
        <CarouselContent>
          {chapters.map((chapter, index) => (
            <CarouselItem key={chapter.title}>
              <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-muted to-muted-foreground/30">
                <PlayCircleIcon className="size-10 text-foreground/70" />
                <span className="absolute start-2 bottom-2 bg-background/80 px-1.5 py-0.5 font-mono text-[11px]">
                  {chapter.time}
                </span>
                <span className="absolute end-2 top-2 text-[11px] text-foreground/70">
                  Chapter {index + 1}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}`,
  },
  {
    name: "EdgeFadeOverlayControls",
    description: "Showcase carousel with faded edges and round overlay controls placed inside the frame.",
    code: `
const spaces = [
  { name: "Studio loft", seats: 8 },
  { name: "Quiet room", seats: 2 },
  { name: "Board room", seats: 14 },
  { name: "Phone booth", seats: 1 },
  { name: "Workshop", seats: 20 },
  { name: "Lounge", seats: 10 },
]

export default function EdgeFadeOverlayControls() {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-md">
      <CarouselContent className="-ms-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {spaces.map((space) => (
          <CarouselItem key={space.name} className="basis-1/2 ps-2 sm:basis-1/3">
            <div className="flex aspect-[3/4] flex-col justify-end gap-0.5 bg-muted p-3">
              <span className="text-sm font-medium">{space.name}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <UsersIcon className="size-3" />
                {space.seats} seats
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant="secondary" size="icon" className="start-2 rounded-full shadow-sm" />
      <CarouselNext variant="secondary" size="icon" className="end-2 rounded-full shadow-sm" />
    </Carousel>
  )
}`,
  },
  {
    name: "QuickViewDialogGallery",
    description: "Product quick view dialog with an image carousel, colour swatches, and add to cart.",
    imports: API,
    code: `
const colors = [
  { name: "Sand", tone: "from-amber-100 to-amber-300" },
  { name: "Sage", tone: "from-emerald-200 to-emerald-400" },
  { name: "Slate", tone: "from-slate-300 to-slate-500" },
]

export default function QuickViewDialogGallery() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    setSelected(next.selectedScrollSnap())
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <EyeIcon data-icon="inline-start" />
        Quick view
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Everyday crew sweater</DialogTitle>
          <DialogDescription>Organic cotton · $68</DialogDescription>
        </DialogHeader>
        <Carousel setApi={handleApi}>
          <CarouselContent>
            {colors.map((color) => (
              <CarouselItem key={color.name}>
                <div className={cn("flex aspect-square items-end bg-gradient-to-br p-3", color.tone)}>
                  <span className="bg-background/80 px-2 py-0.5 text-xs">{color.name}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex items-center gap-2">
          {colors.map((color, index) => (
            <button
              key={color.name}
              type="button"
              aria-label={color.name}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "size-6 rounded-full bg-gradient-to-br ring-offset-2 ring-offset-background",
                color.tone,
                selected === index && "ring-2 ring-primary"
              )}
            />
          ))}
          <span className="ms-auto text-xs text-muted-foreground">{colors[selected]!.name}</span>
        </div>
        <DialogFooter>
          <Button className="w-full">
            <ShoppingBagIcon data-icon="inline-start" />
            Add to bag
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
  },
]

export default examples
