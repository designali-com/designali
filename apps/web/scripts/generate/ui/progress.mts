import { type Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "FileUploadQueue",
    description: "Upload queue listing several files, each with its own progress bar and status.",
    code: `
const files = [
  { name: "brand-guidelines.pdf", size: "4.2 MB", value: 100 },
  { name: "hero-video.mp4", size: "86.1 MB", value: 64 },
  { name: "product-shots.zip", size: "212 MB", value: 18 },
]

export default function FileUploadQueue() {
  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      {files.map((file) => (
        <div key={file.name} className="flex items-start gap-3 p-3">
          <div className="flex size-9 shrink-0 items-center justify-center bg-muted">
            <FileIcon className="size-4 text-muted-foreground" />
          </div>
          <Progress value={file.value} className="min-w-0 flex-1 gap-1.5">
            <ProgressLabel className="truncate text-sm font-medium">{file.name}</ProgressLabel>
            <ProgressValue />
            <span className="w-full text-xs text-muted-foreground">
              {file.value === 100 ? "Uploaded" : file.size}
            </span>
          </Progress>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "StorageUsageMeter",
    description: "Workspace storage meter showing used space against the plan limit.",
    code: `
const breakdown = [
  { label: "Documents", size: "3.1 GB", className: "bg-primary" },
  { label: "Media", size: "2.8 GB", className: "bg-primary/60" },
  { label: "Backups", size: "1.5 GB", className: "bg-primary/30" },
]

export default function StorageUsageMeter() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center gap-2">
        <HardDriveIcon className="size-4 text-muted-foreground" />
        <span className="text-sm font-medium">Storage</span>
        <span className="ms-auto text-xs text-muted-foreground">Team plan</span>
      </div>
      <Progress value={74} className="[&_[data-slot=progress-track]]:h-2">
        <ProgressLabel className="text-sm">7.4 GB of 10 GB used</ProgressLabel>
        <ProgressValue />
      </Progress>
      <ul className="flex flex-col gap-1.5 text-xs">
        {breakdown.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span className={cn("size-2", item.className)} />
            <span className="text-muted-foreground">{item.label}</span>
            <span className="ms-auto tabular-nums">{item.size}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}`,
  },
  {
    name: "OnboardingChecklistProgress",
    description: "Onboarding checklist whose progress bar reflects completed setup tasks.",
    code: `
const tasks = [
  { label: "Create your workspace", done: true },
  { label: "Invite teammates", done: true },
  { label: "Connect a calendar", done: true },
  { label: "Import your first project", done: false },
  { label: "Set up notifications", done: false },
]

export default function OnboardingChecklistProgress() {
  const done = tasks.filter((task) => task.done).length

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <Progress value={(done / tasks.length) * 100}>
        <ProgressLabel className="text-sm font-medium">Get started</ProgressLabel>
        <span className="ms-auto text-xs text-muted-foreground">
          {done} of {tasks.length} complete
        </span>
      </Progress>
      <ul className="flex flex-col gap-2">
        {tasks.map((task) => (
          <li key={task.label} className="flex items-center gap-2 text-sm">
            {task.done ? (
              <CircleCheckIcon className="size-4 text-primary" />
            ) : (
              <CircleIcon className="size-4 text-muted-foreground" />
            )}
            <span className={cn(task.done && "text-muted-foreground line-through")}>
              {task.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}`,
  },
  {
    name: "StepWizardProgress",
    description: "Multi-step wizard header where Back and Next update a step progress bar.",
    code: `
const steps = ["Account", "Profile", "Preferences", "Review"]

export default function StepWizardProgress() {
  const [step, setStep] = React.useState(1)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <Progress value={((step + 1) / steps.length) * 100}>
        <ProgressLabel className="text-sm font-medium">{steps[step]}</ProgressLabel>
        <span className="ms-auto text-xs text-muted-foreground">
          Step {step + 1} of {steps.length}
        </span>
      </Progress>
      <p className="text-sm text-muted-foreground">
        Fill in the {steps[step]?.toLowerCase()} details to continue.
      </p>
      <div className="flex justify-between">
        <Button variant="outline" size="sm" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
          Back
        </Button>
        <Button size="sm" disabled={step === steps.length - 1} onClick={() => setStep((s) => s + 1)}>
          Next
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "IndeterminateExport",
    description: "Indeterminate progress bar for a report export with unknown duration.",
    code: `
export default function IndeterminateExport() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <Spinner className="size-4" />
        <span className="text-sm font-medium">Preparing your export</span>
      </div>
      <Progress
        value={null}
        aria-label="Preparing export"
        className="[&_[data-slot=progress-indicator]]:w-1/3 [&_[data-slot=progress-indicator]]:animate-pulse"
      />
      <p className="text-xs text-muted-foreground">
        Q3 revenue report &middot; We&apos;ll email you when it&apos;s ready.
      </p>
    </div>
  )
}`,
  },
  {
    name: "ProgressTrackSizes",
    description: "Progress bars in extra-small, default, medium, and large track heights.",
    code: `
const sizes = [
  { label: "Extra small", className: "[&_[data-slot=progress-track]]:h-0.5" },
  { label: "Default", className: "" },
  { label: "Medium", className: "[&_[data-slot=progress-track]]:h-2" },
  { label: "Large", className: "[&_[data-slot=progress-track]]:h-3" },
]

export default function ProgressTrackSizes() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5">
      {sizes.map((size, index) => (
        <Progress key={size.label} value={30 + index * 15} className={size.className}>
          <ProgressLabel>{size.label}</ProgressLabel>
          <ProgressValue />
        </Progress>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ProgressStatusTones",
    description: "Progress bars tinted for healthy, warning, and critical states.",
    code: `
const statuses = [
  { label: "Healthy", value: 42, icon: CircleCheckIcon, tone: "text-emerald-600 dark:text-emerald-400", bar: "[&_[data-slot=progress-indicator]]:bg-emerald-500" },
  { label: "Warning", value: 78, icon: TriangleAlertIcon, tone: "text-amber-600 dark:text-amber-400", bar: "[&_[data-slot=progress-indicator]]:bg-amber-500" },
  { label: "Critical", value: 96, icon: OctagonAlertIcon, tone: "text-destructive", bar: "[&_[data-slot=progress-indicator]]:bg-destructive" },
]

export default function ProgressStatusTones() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5">
      {statuses.map((status) => (
        <Progress key={status.label} value={status.value} className={cn("[&_[data-slot=progress-track]]:h-1.5", status.bar)}>
          <ProgressLabel className={cn("flex items-center gap-1.5", status.tone)}>
            <status.icon className="size-3.5" />
            {status.label}
          </ProgressLabel>
          <ProgressValue />
        </Progress>
      ))}
    </div>
  )
}`,
  },
  {
    name: "FundraisingGoal",
    description: "Fundraising campaign card with amount raised toward a goal and backer count.",
    code: `
export default function FundraisingGoal() {
  const raised = 18450
  const goal = 25000

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div>
        <p className="text-xs text-muted-foreground">Community garden rebuild</p>
        <p className="text-2xl font-semibold tabular-nums">
          {"$" + raised.toLocaleString("en-US")}
          <span className="text-sm font-normal text-muted-foreground">
            {" raised of $" + goal.toLocaleString("en-US")}
          </span>
        </p>
      </div>
      <Progress value={raised} max={goal} aria-label="Funds raised" className="[&_[data-slot=progress-track]]:h-2" />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>312 backers</span>
        <span>11 days left</span>
      </div>
      <Button className="w-full">
        <HeartIcon data-icon="inline-start" />
        Back this project
      </Button>
    </div>
  )
}`,
  },
  {
    name: "CourseCompletionCard",
    description: "Online course card showing completed lessons and a resume button.",
    code: `
export default function CourseCompletionCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Foundations of Typography</CardTitle>
        <CardDescription>Module 3 &middot; Pairing typefaces</CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={14} max={22}>
          <ProgressLabel>14 of 22 lessons</ProgressLabel>
          <ProgressValue />
        </Progress>
      </CardContent>
      <CardFooter>
        <Button size="sm" className="w-full">
          <PlayIcon data-icon="inline-start" />
          Resume lesson 15
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "PasswordStrengthMeter",
    description: "Password field with a live strength meter driven by simple rules.",
    code: `
const rules = [
  { label: "At least 8 characters", test: (v: string) => v.length >= 8 },
  { label: "An uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "A number", test: (v: string) => /\\d/.test(v) },
  { label: "A symbol", test: (v: string) => /[^A-Za-z0-9]/.test(v) },
]
const labels = ["Too weak", "Weak", "Fair", "Good", "Strong"]

export default function PasswordStrengthMeter() {
  const [password, setPassword] = React.useState("")
  const score = rules.filter((rule) => rule.test(password)).length

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Label htmlFor="pw-strength">New password</Label>
      <Input
        id="pw-strength"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Create a password"
      />
      <Progress
        value={score}
        max={rules.length}
        aria-label="Password strength"
        className={cn(
          score <= 1 && "[&_[data-slot=progress-indicator]]:bg-destructive",
          score === 2 && "[&_[data-slot=progress-indicator]]:bg-amber-500",
          score >= 3 && "[&_[data-slot=progress-indicator]]:bg-emerald-500"
        )}
      >
        <span className="text-xs font-medium">{labels[score]}</span>
      </Progress>
      <ul className="flex flex-col gap-1 text-xs">
        {rules.map((rule) => (
          <li key={rule.label} className={cn("flex items-center gap-1.5", rule.test(password) ? "text-foreground" : "text-muted-foreground")}>
            {rule.test(password) ? <CheckIcon className="size-3" /> : <XIcon className="size-3" />}
            {rule.label}
          </li>
        ))}
      </ul>
    </div>
  )
}`,
  },
  {
    name: "SegmentedStepBars",
    description: "Row of segmented progress bars for a story-style multi-part flow.",
    code: `
const segments = [
  { label: "Shipping", value: 100 },
  { label: "Payment", value: 100 },
  { label: "Review", value: 40 },
  { label: "Confirm", value: 0 },
]

export default function SegmentedStepBars() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="grid grid-cols-4 gap-1.5">
        {segments.map((segment) => (
          <Progress key={segment.label} value={segment.value} aria-label={segment.label} className="gap-1.5">
            <span className={cn("text-[11px]", segment.value > 0 ? "font-medium" : "text-muted-foreground")}>
              {segment.label}
            </span>
          </Progress>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">Check your order details before confirming.</p>
    </div>
  )
}`,
  },
  {
    name: "ApiQuotaWarning",
    description: "API usage quota nearing its limit with a warning badge and upgrade link.",
    code: `
export default function ApiQuotaWarning() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">API requests</span>
        <Badge variant="destructive">Near limit</Badge>
      </div>
      <Progress
        value={92400}
        max={100000}
        className="[&_[data-slot=progress-indicator]]:bg-destructive [&_[data-slot=progress-track]]:h-1.5"
        format={{ notation: "compact" }}
      >
        <ProgressLabel className="text-muted-foreground">This billing cycle</ProgressLabel>
        <ProgressValue>{(_, value) => (value ?? 0).toLocaleString("en-US") + " / 100,000"}</ProgressValue>
      </Progress>
      <p className="text-xs text-muted-foreground">Resets in 4 days. Requests over the limit return 429.</p>
      <Button variant="outline" size="sm" className="self-start">
        Increase limit
      </Button>
    </div>
  )
}`,
  },
  {
    name: "PausableDownload",
    description: "Download card with speed, time remaining, and pause and resume controls.",
    code: `
export default function PausableDownload() {
  const [value, setValue] = React.useState(36)
  const [paused, setPaused] = React.useState(false)

  React.useEffect(() => {
    if (paused || value >= 100) return
    const id = setInterval(() => setValue((v) => Math.min(100, v + 2)), 300)
    return () => clearInterval(id)
  }, [paused, value])

  const done = value >= 100

  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-3">
      <div className="flex size-10 shrink-0 items-center justify-center bg-muted">
        <DownloadIcon className="size-4" />
      </div>
      <Progress value={value} className="min-w-0 flex-1 gap-1.5">
        <ProgressLabel className="truncate text-sm font-medium">studio-assets-v2.dmg</ProgressLabel>
        <ProgressValue />
        <span className="w-full text-xs text-muted-foreground">
          {done ? "Download complete" : paused ? "Paused" : "4.8 MB/s · about " + Math.ceil((100 - value) / 6) + "s left"}
        </span>
      </Progress>
      <Button
        variant="ghost"
        size="icon-sm"
        disabled={done}
        aria-label={paused ? "Resume" : "Pause"}
        onClick={() => setPaused((p) => !p)}
      >
        {paused ? <PlayIcon /> : <PauseIcon />}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "SimulatedUploadButton",
    description: "Button that starts a simulated upload and swaps to a progress bar until done.",
    code: `
export default function SimulatedUploadButton() {
  const [value, setValue] = React.useState<number | null>(null)

  React.useEffect(() => {
    if (value === null || value >= 100) return
    const id = setTimeout(() => setValue((v) => Math.min(100, (v ?? 0) + 8)), 200)
    return () => clearTimeout(id)
  }, [value])

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      {value === null ? (
        <Button onClick={() => setValue(0)}>
          <UploadIcon data-icon="inline-start" />
          Upload invoice.pdf
        </Button>
      ) : value < 100 ? (
        <Progress value={value}>
          <ProgressLabel>Uploading invoice.pdf</ProgressLabel>
          <ProgressValue />
        </Progress>
      ) : (
        <div className="flex items-center justify-between gap-2 text-sm">
          <span className="flex items-center gap-1.5">
            <CircleCheckIcon className="size-4 text-primary" />
            Upload complete
          </span>
          <Button variant="ghost" size="sm" onClick={() => setValue(null)}>
            Reset
          </Button>
        </div>
      )}
    </div>
  )
}`,
  },
  {
    name: "ArticleReadingProgress",
    description: "Scrollable article whose reading progress updates as the reader scrolls.",
    code: `
const paragraphs = [
  "The studio moved into the old print works in early spring, when the skylights still leaked and the floors smelled of ink.",
  "Every desk was built from reclaimed type cases. Drawers that once held lead letters now hold pencils, cables, and sketchbooks.",
  "On Fridays the team pins work in progress to the long wall and walks it together, coffee in hand, asking what could be simpler.",
  "Clients are invited to those walks too. Seeing rough work early, it turns out, builds more trust than any polished presentation.",
  "By autumn the leaks were fixed, but the ritual stayed. It is now the oldest habit the studio has, and the one people miss most when away.",
]

export default function ArticleReadingProgress() {
  const [value, setValue] = React.useState(0)

  return (
    <div className="flex w-full max-w-sm flex-col border">
      <Progress value={value} aria-label="Reading progress" className="gap-0" />
      <div
        className="h-56 overflow-y-auto p-4"
        onScroll={(event) => {
          const el = event.currentTarget
          const max = el.scrollHeight - el.clientHeight
          setValue(max > 0 ? Math.round((el.scrollTop / max) * 100) : 100)
        }}
      >
        <h3 className="mb-3 text-base font-semibold">A year in the print works</h3>
        <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
      <div className="border-t px-4 py-2 text-xs text-muted-foreground tabular-nums">{value}% read</div>
    </div>
  )
}`,
  },
  {
    name: "SurveyQuestionProgress",
    description: "Survey card with question count progress above a set of answer buttons.",
    code: `
const answers = ["Daily", "A few times a week", "Weekly", "Rarely"]

export default function SurveyQuestionProgress() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <Progress value={4} max={10} className="gap-2">
        <ProgressLabel className="text-muted-foreground">Question 4 of 10</ProgressLabel>
        <ProgressValue />
      </Progress>
      <p className="text-sm font-medium">How often do you plan meals for the week ahead?</p>
      <div className="grid grid-cols-2 gap-2">
        {answers.map((answer) => (
          <Button key={answer} variant="outline" size="sm">
            {answer}
          </Button>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "SprintProgressCard",
    description: "Sprint summary card with story points completed and assigned team avatars.",
    code: `
const team = ["Maya Chen", "Theo Park", "Iris Vale"]

export default function SprintProgressCard() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-medium">Sprint 24 &middot; Checkout revamp</p>
          <p className="text-xs text-muted-foreground">Ends Friday, Nov 21</p>
        </div>
        <AvatarGroup>
          {team.map((name) => (
            <Avatar key={name} size="sm">
              <AvatarFallback>{name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
      </div>
      <Progress value={34} max={52} className="[&_[data-slot=progress-track]]:h-2">
        <ProgressLabel>34 of 52 points</ProgressLabel>
        <ProgressValue />
      </Progress>
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-muted p-2"><p className="text-base font-semibold">9</p>Done</div>
        <div className="bg-muted p-2"><p className="text-base font-semibold">5</p>In review</div>
        <div className="bg-muted p-2"><p className="text-base font-semibold">4</p>To do</div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "PollResults",
    description: "Poll result bars with vote percentages and the leading option highlighted.",
    code: `
const options = [
  { label: "Remote first", votes: 482 },
  { label: "Hybrid, 2 days in office", votes: 351 },
  { label: "Fully in office", votes: 97 },
]

export default function PollResults() {
  const total = options.reduce((sum, option) => sum + option.votes, 0)
  const top = Math.max(...options.map((option) => option.votes))

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <p className="text-sm font-medium">Which work setup do you prefer?</p>
      {options.map((option) => (
        <Progress
          key={option.label}
          value={option.votes}
          max={total}
          className={cn(
            "[&_[data-slot=progress-track]]:h-2",
            option.votes !== top && "[&_[data-slot=progress-indicator]]:bg-muted-foreground/40"
          )}
        >
          <ProgressLabel className={cn("text-sm", option.votes === top && "font-medium")}>{option.label}</ProgressLabel>
          <ProgressValue />
        </Progress>
      ))}
      <p className="text-xs text-muted-foreground">{total} votes &middot; Poll closed</p>
    </div>
  )
}`,
  },
  {
    name: "ReviewRatingBreakdown",
    description: "Product review summary with a progress bar per star rating.",
    code: `
const ratings = [
  { stars: 5, count: 1240 },
  { stars: 4, count: 410 },
  { stars: 3, count: 122 },
  { stars: 2, count: 41 },
  { stars: 1, count: 37 },
]

export default function ReviewRatingBreakdown() {
  const total = ratings.reduce((sum, r) => sum + r.count, 0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-semibold">4.5</span>
        <span className="text-sm text-muted-foreground">{total.toLocaleString("en-US")} reviews</span>
      </div>
      {ratings.map((r) => (
        <div key={r.stars} className="flex items-center gap-3 text-xs">
          <span className="flex w-8 items-center gap-0.5">
            {r.stars}
            <StarIcon className="size-3 fill-current" />
          </span>
          <Progress value={r.count} max={total} aria-label={r.stars + " star reviews"} className="flex-1 [&_[data-slot=progress-track]]:h-2" />
          <span className="w-10 text-end text-muted-foreground tabular-nums">{r.count}</span>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ProfileSkillLevels",
    description: "Freelancer profile section listing skills with proficiency bars.",
    code: `
const skills = [
  { name: "Interface design", level: 92 },
  { name: "Design systems", level: 85 },
  { name: "Prototyping", level: 70 },
  { name: "Motion", level: 48 },
]

export default function ProfileSkillLevels() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>NR</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Noor Rahimi</p>
          <p className="text-xs text-muted-foreground">Product designer &middot; 8 yrs</p>
        </div>
      </div>
      {skills.map((skill) => (
        <Progress key={skill.name} value={skill.level}>
          <ProgressLabel>{skill.name}</ProgressLabel>
          <ProgressValue />
        </Progress>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ServerResourceMonitor",
    description: "Server dashboard tile with CPU, memory, and disk utilization bars.",
    code: `
const resources = [
  { label: "CPU", value: 38, icon: CpuIcon, detail: "8 cores" },
  { label: "Memory", value: 71, icon: MemoryStickIcon, detail: "22.7 / 32 GB" },
  { label: "Disk", value: 89, icon: HardDriveIcon, detail: "445 / 500 GB" },
]

export default function ServerResourceMonitor() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm">api-prod-03</span>
        <Badge variant="outline">
          <span className="size-1.5 bg-emerald-500" />
          Online
        </Badge>
      </div>
      {resources.map((r) => (
        <Progress
          key={r.label}
          value={r.value}
          className={cn("[&_[data-slot=progress-track]]:h-1.5", r.value > 85 && "[&_[data-slot=progress-indicator]]:bg-destructive")}
        >
          <ProgressLabel className="flex items-center gap-1.5">
            <r.icon className="size-3.5 text-muted-foreground" />
            {r.label}
            <span className="text-muted-foreground">{r.detail}</span>
          </ProgressLabel>
          <ProgressValue />
        </Progress>
      ))}
    </div>
  )
}`,
  },
  {
    name: "DeviceBatteryLevels",
    description: "Connected devices list with battery level bars and low-battery highlighting.",
    code: `
const devices = [
  { name: "Wireless keyboard", icon: KeyboardIcon, level: 82 },
  { name: "Trackpad", icon: MouseIcon, level: 46 },
  { name: "Earbuds", icon: HeadphonesIcon, level: 12 },
]

export default function DeviceBatteryLevels() {
  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      {devices.map((device) => (
        <div key={device.name} className="flex items-center gap-3 p-3">
          <device.icon className="size-4 shrink-0 text-muted-foreground" />
          <Progress
            value={device.level}
            className={cn("flex-1", device.level < 20 && "[&_[data-slot=progress-indicator]]:bg-destructive")}
          >
            <ProgressLabel className="text-sm">{device.name}</ProgressLabel>
            <ProgressValue className={cn(device.level < 20 && "text-destructive")} />
          </Progress>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "SessionTimeoutCountdown",
    description: "Session timeout warning whose progress drains as the countdown runs.",
    code: `
const TOTAL = 60

export default function SessionTimeoutCountdown() {
  const [seconds, setSeconds] = React.useState(TOTAL)

  React.useEffect(() => {
    if (seconds <= 0) return
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(id)
  }, [seconds])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <TimerIcon className="size-4 text-muted-foreground" />
        <span className="text-sm font-medium">Your session is about to expire</span>
      </div>
      <Progress value={seconds} max={TOTAL} aria-label="Time remaining" className={cn(seconds < 15 && "[&_[data-slot=progress-indicator]]:bg-destructive")}>
        <span className="text-xs text-muted-foreground">Signing out in {seconds}s</span>
      </Progress>
      <div className="flex justify-end gap-2">
        <Button variant="ghost" size="sm">Sign out</Button>
        <Button size="sm" onClick={() => setSeconds(TOTAL)}>Stay signed in</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ContractTermProgress",
    description: "Subscription contract term using a custom max of 12 months.",
    code: `
export default function ContractTermProgress() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Annual contract</span>
        <span className="text-muted-foreground">Renews Mar 1, 2027</span>
      </div>
      <Progress value={8} min={0} max={12}>
        <ProgressLabel className="text-muted-foreground">Term elapsed</ProgressLabel>
        <ProgressValue>{(_, value) => value + " of 12 months"}</ProgressValue>
      </Progress>
      <div className="grid grid-cols-12 gap-0.5" aria-hidden>
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} className={cn("h-1", i < 8 ? "bg-primary/40" : "bg-muted")} />
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "TaskCountValueRender",
    description: "Progress value rendered through a render function as completed task counts.",
    code: `
export default function TaskCountValueRender() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
      <Progress value={12} max={20} className="[&_[data-slot=progress-track]]:h-2">
        <ProgressLabel className="text-sm font-medium">Launch checklist</ProgressLabel>
        <ProgressValue>
          {(formatted, value) => (
            <span>
              <span className="font-medium text-foreground">{value}</span>/20 tasks ({formatted})
            </span>
          )}
        </ProgressValue>
      </Progress>
      <p className="text-xs text-muted-foreground">8 tasks remaining before the release on Thursday.</p>
    </div>
  )
}`,
  },
  {
    name: "DailyFitnessGoals",
    description: "Fitness tracker showing steps, water, and sleep goal progress.",
    code: `
const goals = [
  { label: "Steps", icon: FootprintsIcon, value: 7420, max: 10000, unit: "steps" },
  { label: "Water", icon: DropletIcon, value: 1.6, max: 2.5, unit: "L" },
  { label: "Sleep", icon: MoonIcon, value: 6.5, max: 8, unit: "h" },
]

export default function DailyFitnessGoals() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <p className="text-sm font-medium">Today&apos;s goals</p>
      {goals.map((goal) => (
        <div key={goal.label} className="flex items-center gap-3">
          <div className="flex size-8 shrink-0 items-center justify-center bg-muted">
            <goal.icon className="size-4" />
          </div>
          <Progress value={goal.value} max={goal.max} className="flex-1 gap-1.5">
            <ProgressLabel>{goal.label}</ProgressLabel>
            <span className="ms-auto text-xs text-muted-foreground tabular-nums">
              {goal.value.toLocaleString("en-US")} / {goal.max.toLocaleString("en-US")} {goal.unit}
            </span>
          </Progress>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "ProfileCompleteness",
    description: "Profile completeness prompt listing the missing fields to reach 100%.",
    code: `
const missing = ["Add a profile photo", "Write a short bio", "Verify phone number"]

export default function ProfileCompleteness() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <Progress value={65} className="[&_[data-slot=progress-track]]:h-2">
        <ProgressLabel className="text-sm font-medium">Your profile is 65% complete</ProgressLabel>
      </Progress>
      <ul className="flex flex-col gap-1">
        {missing.map((item) => (
          <li key={item}>
            <Button variant="ghost" size="sm" className="w-full justify-between">
              <span className="flex items-center gap-2">
                <PlusIcon className="size-3.5" />
                {item}
              </span>
              <ChevronRightIcon className="size-3.5 text-muted-foreground" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}`,
  },
  {
    name: "DeploymentPipelineStages",
    description: "CI pipeline with complete, running (indeterminate), and queued stages.",
    code: `
const stages = [
  { name: "Build", status: "done", duration: "1m 12s" },
  { name: "Unit tests", status: "done", duration: "2m 48s" },
  { name: "Integration tests", status: "running", duration: "Running" },
  { name: "Deploy to production", status: "queued", duration: "Queued" },
]

export default function DeploymentPipelineStages() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs">main &middot; 4f2a9c1</span>
        <Badge variant="secondary">In progress</Badge>
      </div>
      {stages.map((stage) => (
        <Progress
          key={stage.name}
          value={stage.status === "done" ? 100 : stage.status === "queued" ? 0 : null}
          className={cn(
            stage.status === "running" &&
              "[&_[data-slot=progress-indicator]]:w-2/5 [&_[data-slot=progress-indicator]]:animate-pulse"
          )}
        >
          <ProgressLabel className={cn("text-sm", stage.status === "queued" && "text-muted-foreground")}>
            {stage.name}
          </ProgressLabel>
          <span className="ms-auto text-xs text-muted-foreground">{stage.duration}</span>
        </Progress>
      ))}
    </div>
  )
}`,
  },
  {
    name: "TrialDaysRemaining",
    description: "Free trial banner showing days remaining and an upgrade call to action.",
    code: `
export default function TrialDaysRemaining() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border bg-muted/40 p-4">
      <div className="flex items-center gap-2">
        <SparklesIcon className="size-4" />
        <span className="text-sm font-medium">Pro trial</span>
        <span className="ms-auto text-xs text-muted-foreground">9 days left</span>
      </div>
      <Progress value={5} max={14} aria-label="Trial days used" />
      <p className="text-xs text-muted-foreground">
        Upgrade before Nov 24 to keep unlimited projects and version history.
      </p>
      <Button size="sm" className="self-start">Upgrade to Pro</Button>
    </div>
  )
}`,
  },
  {
    name: "OrderShipmentTracker",
    description: "Order tracking card with shipment progress across fulfilment milestones.",
    code: `
const milestones = ["Ordered", "Packed", "Shipped", "Delivered"]

export default function OrderShipmentTracker() {
  const current = 2

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Order #48213</p>
          <p className="text-xs text-muted-foreground">Arriving Tuesday, Nov 18</p>
        </div>
        <TruckIcon className="size-5 text-muted-foreground" />
      </div>
      <Progress value={current} max={milestones.length - 1} aria-label="Shipment progress" />
      <div className="flex justify-between text-[11px]">
        {milestones.map((m, i) => (
          <span key={m} className={cn(i <= current ? "font-medium" : "text-muted-foreground")}>
            {m}
          </span>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "BudgetCategorySpending",
    description: "Monthly budget categories with spend bars, flagging overspent categories.",
    code: `
const categories = [
  { name: "Groceries", spent: 412, budget: 500 },
  { name: "Dining out", spent: 265, budget: 200 },
  { name: "Transport", spent: 88, budget: 150 },
  { name: "Subscriptions", spent: 54, budget: 60 },
]

export default function BudgetCategorySpending() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <p className="text-sm font-medium">November budget</p>
      {categories.map((c) => {
        const over = c.spent > c.budget
        return (
          <Progress
            key={c.name}
            value={Math.min(c.spent, c.budget)}
            max={c.budget}
            className={cn(over && "[&_[data-slot=progress-indicator]]:bg-destructive")}
          >
            <ProgressLabel className="text-sm">{c.name}</ProgressLabel>
            <span className={cn("ms-auto text-xs tabular-nums", over ? "text-destructive" : "text-muted-foreground")}>
              {"$" + c.spent} / {"$" + c.budget}
            </span>
          </Progress>
        )
      })}
    </div>
  )
}`,
  },
  {
    name: "CsvImportProgress",
    description: "Contact import progress with processed rows and skipped-row errors.",
    code: `
export default function CsvImportProgress() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <FileSpreadsheetIcon className="size-4 text-muted-foreground" />
        <span className="truncate text-sm font-medium">contacts-2026.csv</span>
      </div>
      <Progress value={3820} max={5000}>
        <ProgressLabel className="text-muted-foreground">3,820 of 5,000 rows</ProgressLabel>
        <ProgressValue />
      </Progress>
      <div className="flex items-center gap-1.5 text-xs text-destructive">
        <CircleAlertIcon className="size-3.5" />
        14 rows skipped: missing email address
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">Download error log</Button>
        <Button variant="ghost" size="sm">Cancel import</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "PackageInstallLog",
    description: "Terminal-style install output with an overall progress bar above the log.",
    code: `
const lines = [
  "resolving dependencies...",
  "fetched 214 packages",
  "linking binaries",
  "building native module: image-codec",
]

export default function PackageInstallLog() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border bg-muted/30 p-4">
      <Progress value={68}>
        <ProgressLabel className="font-mono">Installing dependencies</ProgressLabel>
        <ProgressValue className="font-mono" />
      </Progress>
      <pre className="overflow-x-auto bg-background p-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
        {lines.map((line) => "> " + line).join("\\n")}
      </pre>
    </div>
  )
}`,
  },
  {
    name: "LevelExperienceBar",
    description: "Gamified experience bar showing points toward the next level.",
    code: `
export default function LevelExperienceBar() {
  return (
    <div className="flex w-full max-w-sm items-center gap-4 border p-4">
      <div className="flex size-12 shrink-0 flex-col items-center justify-center bg-primary text-primary-foreground">
        <span className="text-[10px] uppercase">Lvl</span>
        <span className="text-lg leading-none font-semibold">7</span>
      </div>
      <Progress value={2340} min={2000} max={3000} className="flex-1 [&_[data-slot=progress-track]]:h-2">
        <ProgressLabel className="flex items-center gap-1 text-sm font-medium">
          <TrophyIcon className="size-3.5" />
          Trailblazer
        </ProgressLabel>
        <span className="ms-auto text-xs text-muted-foreground tabular-nums">660 XP to level 8</span>
      </Progress>
    </div>
  )
}`,
  },
  {
    name: "CheckoutStepHeader",
    description: "Checkout header combining step labels with a slim progress bar.",
    code: `
const steps = [
  { label: "Cart", icon: ShoppingCartIcon },
  { label: "Shipping", icon: TruckIcon },
  { label: "Payment", icon: CreditCardIcon },
]

export default function CheckoutStepHeader() {
  const current = 1

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex justify-between">
        {steps.map((step, i) => (
          <span
            key={step.label}
            className={cn("flex items-center gap-1.5 text-xs", i <= current ? "text-foreground" : "text-muted-foreground")}
          >
            <step.icon className="size-3.5" />
            {step.label}
          </span>
        ))}
      </div>
      <Progress value={50} aria-label="Checkout progress" className="[&_[data-slot=progress-track]]:h-0.5" />
      <p className="text-sm font-medium">Where should we send your order?</p>
    </div>
  )
}`,
  },
  {
    name: "ProjectsTableProgress",
    description: "Admin projects table with an inline progress column.",
    code: `
const projects = [
  { name: "Mobile app redesign", owner: "Lena Ortiz", value: 82 },
  { name: "Billing migration", owner: "Sam Okafor", value: 45 },
  { name: "Help center", owner: "Priya Nair", value: 20 },
]

export default function ProjectsTableProgress() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead className="w-32">Progress</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.name}>
              <TableCell>
                <p className="font-medium">{project.name}</p>
                <p className="text-xs text-muted-foreground">{project.owner}</p>
              </TableCell>
              <TableCell>
                <Progress value={project.value} aria-label={project.name + " progress"} className="flex-nowrap items-center gap-2">
                  <ProgressValue className="order-last w-8 text-end" />
                </Progress>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
  },
  {
    name: "QuarterlyMilestones",
    description: "Product roadmap milestones with progress and target quarter badges.",
    code: `
const milestones = [
  { title: "Offline mode", quarter: "Q1", value: 100 },
  { title: "Shared workspaces", quarter: "Q2", value: 72 },
  { title: "Public API v2", quarter: "Q3", value: 30 },
  { title: "Desktop app", quarter: "Q4", value: 5 },
]

export default function QuarterlyMilestones() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <p className="text-sm font-medium">2027 roadmap</p>
      {milestones.map((m) => (
        <div key={m.title} className="flex items-center gap-3">
          <Badge variant={m.value === 100 ? "default" : "outline"} className="w-9">
            {m.quarter}
          </Badge>
          <Progress value={m.value} className="flex-1 gap-1.5">
            <ProgressLabel>{m.title}</ProgressLabel>
            <ProgressValue />
          </Progress>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "PodcastPlayerScrubber",
    description: "Podcast player with play control and an episode progress bar with timestamps.",
    code: `
const DURATION = 2520

function formatTime(total: number) {
  const m = Math.floor(total / 60)
  const s = total % 60
  return m + ":" + String(s).padStart(2, "0")
}

export default function PodcastPlayerScrubber() {
  const [position, setPosition] = React.useState(1134)
  const [playing, setPlaying] = React.useState(false)

  React.useEffect(() => {
    if (!playing) return
    const id = setInterval(() => setPosition((p) => Math.min(DURATION, p + 1)), 1000)
    return () => clearInterval(id)
  }, [playing])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-3">
        <div className="size-12 shrink-0 bg-gradient-to-br from-primary/80 to-primary/20" />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">Ep. 41 &middot; Designing for slow internet</p>
          <p className="text-xs text-muted-foreground">Margins &amp; Grids</p>
        </div>
      </div>
      <Progress value={position} max={DURATION} aria-label="Playback position" className="gap-1.5">
        <div className="order-last flex w-full justify-between text-[11px] text-muted-foreground tabular-nums">
          <span>{formatTime(position)}</span>
          <span>-{formatTime(DURATION - position)}</span>
        </div>
      </Progress>
      <div className="flex justify-center gap-2">
        <Button variant="ghost" size="icon-sm" aria-label="Back 15 seconds" onClick={() => setPosition((p) => Math.max(0, p - 15))}>
          <RotateCcwIcon />
        </Button>
        <Button size="icon" aria-label={playing ? "Pause" : "Play"} onClick={() => setPlaying((p) => !p)}>
          {playing ? <PauseIcon /> : <PlayIcon />}
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Forward 30 seconds" onClick={() => setPosition((p) => Math.min(DURATION, p + 30))}>
          <RotateCwIcon />
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "FreeShippingThreshold",
    description: "Cart nudge showing how close the order is to free shipping.",
    code: `
export default function FreeShippingThreshold() {
  const subtotal = 63
  const threshold = 75
  const remaining = threshold - subtotal

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <p className="flex items-center gap-2 text-sm">
        <PackageIcon className="size-4 text-muted-foreground" />
        <span>
          You&apos;re <span className="font-semibold">{"$" + remaining.toFixed(2)}</span> away from free shipping
        </span>
      </p>
      <Progress value={subtotal} max={threshold} aria-label="Progress to free shipping" className="[&_[data-slot=progress-track]]:h-1.5" />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Subtotal {"$" + subtotal.toFixed(2)}</span>
        <span>{"$" + threshold} goal</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "SidebarPlanUsage",
    description: "Compact sidebar footer widget with plan usage bars and an upgrade link.",
    code: `
const usage = [
  { label: "Projects", value: 8, max: 10 },
  { label: "Members", value: 3, max: 5 },
]

export default function SidebarPlanUsage() {
  return (
    <div className="flex w-full max-w-60 flex-col gap-3 border bg-muted/30 p-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium">Starter plan</span>
        <Badge variant="outline">Free</Badge>
      </div>
      {usage.map((item) => (
        <Progress key={item.label} value={item.value} max={item.max} className="gap-1.5">
          <ProgressLabel className="text-muted-foreground">{item.label}</ProgressLabel>
          <ProgressValue>{(_, value) => value + "/" + item.max}</ProgressValue>
        </Progress>
      ))}
      <Button size="xs" variant="outline" className="w-full">
        <ZapIcon data-icon="inline-start" />
        Upgrade
      </Button>
    </div>
  )
}`,
  },
  {
    name: "ExamScoreWithPassMark",
    description: "Exam result bar with an overlaid pass mark marker.",
    code: `
export default function ExamScoreWithPassMark() {
  const score = 81
  const pass = 70

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Certification exam</span>
        <Badge>Passed</Badge>
      </div>
      <div className="relative">
        <Progress value={score} aria-label="Exam score" className="[&_[data-slot=progress-track]]:h-2.5" />
        <span
          className="absolute -top-1 h-4.5 w-0.5 bg-foreground"
          style={{ left: pass + "%" }}
          aria-hidden
        />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Your score: <span className="font-medium text-foreground">{score}%</span></span>
        <span>Pass mark: {pass}%</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "FormSectionCardProgress",
    description: "Application form card with completion progress in the card header.",
    code: `
export default function FormSectionCardProgress() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Rental application</CardTitle>
        <CardDescription>Section 2: Employment</CardDescription>
        <CardAction>
          <span className="text-xs text-muted-foreground">40%</span>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Progress value={40} aria-label="Application progress" />
        <div className="flex flex-col gap-2">
          <Label htmlFor="employer-name">Employer</Label>
          <Input id="employer-name" placeholder="Northwind Studio" />
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <Button size="sm">Save and continue</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "BackupInProgress",
    description: "Running backup job with item count, elapsed time, and a cancel action.",
    code: `
export default function BackupInProgress() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <DatabaseBackupIcon className="size-4 text-muted-foreground" />
        <span className="text-sm font-medium">Nightly backup</span>
        <Badge variant="secondary" className="ms-auto">Running</Badge>
      </div>
      <Progress value={57}>
        <ProgressLabel className="text-muted-foreground">18,204 of 31,900 files</ProgressLabel>
        <ProgressValue />
      </Progress>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Started 2:00 AM &middot; 14 min elapsed</span>
        <Button variant="ghost" size="xs">Cancel</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "FailedUploadRetry",
    description: "Upload that failed partway, with a destructive bar and retry action.",
    code: `
export default function FailedUploadRetry() {
  return (
    <div className="flex w-full max-w-sm items-start gap-3 border border-destructive/40 p-3">
      <div className="flex size-9 shrink-0 items-center justify-center bg-destructive/10">
        <FileVideoIcon className="size-4 text-destructive" />
      </div>
      <Progress value={43} className="min-w-0 flex-1 gap-1.5 [&_[data-slot=progress-indicator]]:bg-destructive">
        <ProgressLabel className="truncate text-sm font-medium">keynote-recording.mov</ProgressLabel>
        <ProgressValue className="text-destructive" />
        <span className="w-full text-xs text-destructive">Connection lost. Upload stopped at 1.2 of 2.8 GB.</span>
      </Progress>
      <Button variant="outline" size="icon-sm" aria-label="Retry upload">
        <RefreshCwIcon />
      </Button>
    </div>
  )
}`,
  },
  {
    name: "AudiobookChapterProgress",
    description: "Audiobook progress with a custom accessible value text per chapter.",
    code: `
export default function AudiobookChapterProgress() {
  return (
    <div className="flex w-full max-w-sm items-center gap-4 border p-4">
      <div className="flex h-16 w-12 shrink-0 items-center justify-center bg-gradient-to-b from-muted to-muted-foreground/20">
        <BookOpenIcon className="size-4" />
      </div>
      <Progress
        value={3}
        min={0}
        max={8}
        getAriaValueText={(_, value) => "Chapter " + value + " of 8 finished"}
        className="flex-1"
      >
        <ProgressLabel className="text-sm font-medium">The Lighthouse Keeper</ProgressLabel>
        <ProgressValue className="w-full ms-0">{(_, value) => "Chapter " + value + " of 8 · 4h 12m left"}</ProgressValue>
      </Progress>
    </div>
  )
}`,
  },
  {
    name: "MigrationStepsWithSubProgress",
    description: "Data migration with an overall bar and nested per-table progress.",
    code: `
const tables = [
  { name: "users", value: 100 },
  { name: "orders", value: 64 },
  { name: "invoices", value: 0 },
]

export default function MigrationStepsWithSubProgress() {
  const overall = Math.round(tables.reduce((s, t) => s + t.value, 0) / tables.length)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <Progress value={overall} className="[&_[data-slot=progress-track]]:h-2">
        <ProgressLabel className="text-sm font-medium">Migrating to new region</ProgressLabel>
        <ProgressValue />
      </Progress>
      <div className="flex flex-col gap-3 border-s ps-3">
        {tables.map((table) => (
          <Progress key={table.name} value={table.value} className="gap-1.5 [&_[data-slot=progress-indicator]]:bg-primary/60">
            <ProgressLabel className="font-mono text-muted-foreground">{table.name}</ProgressLabel>
            <ProgressValue />
          </Progress>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "DisabledPausedProgress",
    description: "Sync job paused by an admin, shown with a dimmed progress bar.",
    code: `
export default function DisabledPausedProgress() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <Progress value={61} className="opacity-50 [&_[data-slot=progress-indicator]]:bg-muted-foreground">
        <ProgressLabel className="flex items-center gap-1.5">
          <CirclePauseIcon className="size-3.5" />
          Drive sync paused
        </ProgressLabel>
        <ProgressValue />
      </Progress>
      <p className="text-xs text-muted-foreground">
        Your admin paused syncing during maintenance. It will resume automatically at 6:00 PM.
      </p>
    </div>
  )
}`,
  },
]

export default examples
