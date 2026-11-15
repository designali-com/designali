import type { Example } from "./_lib.mjs"

const examples: Example[] = [
  {
    name: "VolumeControlSlider",
    description: "Volume slider with a mute toggle whose icon reflects the current level.",
    code: `
export default function VolumeControlSlider() {
  const [volume, setVolume] = React.useState([64])
  const [muted, setMuted] = React.useState(false)
  const level = muted ? 0 : volume[0]!
  const Icon = level === 0 ? VolumeXIcon : level < 50 ? Volume1Icon : Volume2Icon

  return (
    <div className="flex w-full max-w-xs items-center gap-3">
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label={muted ? "Unmute" : "Mute"}
        onClick={() => setMuted((m) => !m)}
      >
        <Icon />
      </Button>
      <Slider
        aria-label="Volume"
        value={muted ? [0] : volume}
        onValueChange={(value) => {
          setMuted(false)
          setVolume(value as number[])
        }}
        max={100}
      />
      <span className="w-8 text-right text-xs tabular-nums text-muted-foreground">{level}</span>
    </div>
  )
}`,
  },
  {
    name: "PriceRangeFilter",
    description: "Two-thumb price filter for a product listing with live min and max readouts.",
    code: `
export default function PriceRangeFilter() {
  const [range, setRange] = React.useState([120, 480])

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Price</span>
        <span className="text-xs text-muted-foreground">218 products</span>
      </div>
      <Slider
        aria-label="Price range"
        value={range}
        onValueChange={(value) => setRange(value as number[])}
        min={0}
        max={800}
        step={10}
        minStepsBetweenValues={5}
      />
      <div className="grid grid-cols-2 gap-2">
        <div className="border px-3 py-2">
          <div className="text-[10px] text-muted-foreground uppercase">Min</div>
          <div className="text-sm tabular-nums">\${range[0]}</div>
        </div>
        <div className="border px-3 py-2">
          <div className="text-[10px] text-muted-foreground uppercase">Max</div>
          <div className="text-sm tabular-nums">\${range[1]}</div>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "BrightnessSlider",
    description: "Display brightness control flanked by dim and bright sun icons.",
    code: `
export default function BrightnessSlider() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label>Display brightness</Label>
      <div className="flex items-center gap-3">
        <SunDimIcon className="size-4 text-muted-foreground" />
        <Slider aria-label="Display brightness" defaultValue={[70]} max={100} />
        <SunIcon className="size-5" />
      </div>
    </div>
  )
}`,
  },
  {
    name: "VerticalEqualizer",
    description: "Five vertical sliders forming a graphic equalizer with frequency labels.",
    code: `
const bands = [
  { label: "60", value: 6 },
  { label: "230", value: 3 },
  { label: "910", value: 0 },
  { label: "3.6k", value: 4 },
  { label: "14k", value: 8 },
]

export default function VerticalEqualizer() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Equalizer</span>
        <Badge variant="secondary">Custom</Badge>
      </div>
      <div className="flex h-40 justify-between px-2">
        {bands.map((band) => (
          <div key={band.label} className="flex flex-col items-center gap-2">
            <Slider
              orientation="vertical"
              aria-label={band.label + " Hz"}
              defaultValue={[band.value]}
              min={-12}
              max={12}
            />
            <span className="text-[10px] text-muted-foreground tabular-nums">{band.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "DisabledProSlider",
    description: "Disabled slider for a feature locked behind a higher plan, with an upgrade prompt.",
    code: `
export default function DisabledProSlider() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <LockIcon className="size-3.5 text-muted-foreground" />
          <span className="text-sm font-medium">Data retention</span>
        </div>
        <Badge>Pro</Badge>
      </div>
      <Slider aria-label="Data retention" defaultValue={[30]} max={365} disabled />
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>30 days on Starter</span>
        <Button variant="link" size="xs" className="h-auto px-0">
          Upgrade for 1 year
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "SliderWithTickMarks",
    description: "Stepped slider with labelled tick marks under the track.",
    code: `
const ticks = [0, 25, 50, 75, 100]

export default function SliderWithTickMarks() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label>Compression quality</Label>
      <Slider aria-label="Compression quality" defaultValue={[75]} step={25} max={100} />
      <div className="flex justify-between">
        {ticks.map((tick) => (
          <div key={tick} className="flex flex-col items-center gap-1">
            <span className="h-1.5 w-px bg-border" />
            <span className="text-[10px] text-muted-foreground tabular-nums">{tick}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "ThermostatSlider",
    description: "Thermostat control whose readout and label change between heating and cooling.",
    code: `
export default function ThermostatSlider() {
  const [temp, setTemp] = React.useState([21])
  const t = temp[0]!
  const mode = t < 19 ? "Cooling" : t > 23 ? "Heating" : "Comfort"

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-4 border p-5">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <ThermometerIcon className="size-3.5" />
        Living room
      </div>
      <div
        className={cn(
          "text-4xl font-semibold tabular-nums",
          mode === "Cooling" && "text-sky-600 dark:text-sky-400",
          mode === "Heating" && "text-orange-600 dark:text-orange-400"
        )}
      >
        {t.toFixed(1)}&deg;C
      </div>
      <Badge variant="outline">{mode}</Badge>
      <Slider
        aria-label="Target temperature"
        value={temp}
        onValueChange={(value) => setTemp(value as number[])}
        min={15}
        max={28}
        step={0.5}
      />
    </div>
  )
}`,
  },
  {
    name: "LoanCalculatorSliders",
    description: "Loan calculator with amount and term sliders that compute a monthly payment.",
    code: `
export default function LoanCalculatorSliders() {
  const [amount, setAmount] = React.useState([25000])
  const [months, setMonths] = React.useState([36])
  const rate = 0.069 / 12
  const n = months[0]!
  const payment = (amount[0]! * rate) / (1 - Math.pow(1 + rate, -n))

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Personal loan</CardTitle>
        <CardDescription>6.9% APR, fixed rate</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <span>Amount</span>
            <span className="tabular-nums">\${amount[0]!.toLocaleString()}</span>
          </div>
          <Slider
            aria-label="Loan amount"
            value={amount}
            onValueChange={(value) => setAmount(value as number[])}
            min={1000}
            max={50000}
            step={500}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <span>Term</span>
            <span className="tabular-nums">{n} months</span>
          </div>
          <Slider
            aria-label="Loan term"
            value={months}
            onValueChange={(value) => setMonths(value as number[])}
            min={12}
            max={72}
            step={12}
          />
        </div>
      </CardContent>
      <CardFooter className="justify-between border-t">
        <span className="text-sm text-muted-foreground">Monthly payment</span>
        <span className="text-lg font-semibold tabular-nums">\${payment.toFixed(2)}</span>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "FontSizePreviewSlider",
    description: "Reader setting where the slider resizes a live text preview.",
    code: `
export default function FontSizePreviewSlider() {
  const [size, setSize] = React.useState([16])

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="text-xs">A</span>
        <Slider
          aria-label="Font size"
          value={size}
          onValueChange={(value) => setSize(value as number[])}
          min={12}
          max={24}
        />
        <span className="text-lg">A</span>
      </div>
      <p className="border bg-muted/40 p-4 leading-relaxed" style={{ fontSize: size[0] }}>
        The ferry left the harbor just after dawn, carrying the morning mail.
      </p>
      <span className="text-xs text-muted-foreground tabular-nums">{size[0]}px</span>
    </div>
  )
}`,
  },
  {
    name: "ImageZoomSlider",
    description: "Avatar crop zoom control with step buttons on either side of the slider.",
    code: `
export default function ImageZoomSlider() {
  const [zoom, setZoom] = React.useState([1.4])
  const change = (delta: number) =>
    setZoom(([z]) => [Math.min(3, Math.max(1, Math.round((z! + delta) * 10) / 10))])

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-4">
      <div className="flex size-40 items-center justify-center overflow-hidden border bg-muted">
        <div
          className="size-24 rounded-full bg-gradient-to-br from-violet-400 to-sky-400 transition-transform"
          style={{ transform: "scale(" + zoom[0] + ")" }}
        />
      </div>
      <div className="flex w-full items-center gap-2">
        <Button variant="ghost" size="icon-sm" aria-label="Zoom out" onClick={() => change(-0.1)}>
          <ZoomOutIcon />
        </Button>
        <Slider
          aria-label="Zoom"
          value={zoom}
          onValueChange={(value) => setZoom(value as number[])}
          min={1}
          max={3}
          step={0.1}
        />
        <Button variant="ghost" size="icon-sm" aria-label="Zoom in" onClick={() => change(0.1)}>
          <ZoomInIcon />
        </Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: "AudioScrubberSlider",
    description: "Podcast player seek bar with elapsed and remaining time.",
    code: `
const duration = 2843

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return m + ":" + String(s).padStart(2, "0")
}

export default function AudioScrubberSlider() {
  const [position, setPosition] = React.useState([912])
  const [playing, setPlaying] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-3">
        <div className="size-10 shrink-0 bg-gradient-to-br from-amber-400 to-rose-500" />
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-medium">Episode 48: Slow Software</div>
          <div className="text-xs text-muted-foreground">The Workbench</div>
        </div>
        <Button size="icon" aria-label={playing ? "Pause" : "Play"} onClick={() => setPlaying((p) => !p)}>
          {playing ? <PauseIcon /> : <PlayIcon />}
        </Button>
      </div>
      <Slider
        aria-label="Seek"
        value={position}
        onValueChange={(value) => setPosition(value as number[])}
        max={duration}
      />
      <div className="flex justify-between text-xs text-muted-foreground tabular-nums">
        <span>{formatTime(position[0]!)}</span>
        <span>-{formatTime(duration - position[0]!)}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "PasswordLengthSlider",
    description: "Password generator where the slider sets length and strength feedback updates.",
    code: `
const charset = "k7Qm#2vR9pX!aL4zT8wN$eB6yH3cJ5uF"

export default function PasswordLengthSlider() {
  const [length, setLength] = React.useState([16])
  const n = length[0]!
  const password = Array.from({ length: n }, (_, i) => charset[(i * 7 + 3) % charset.length]).join("")
  const strength = n < 10 ? "Weak" : n < 16 ? "Good" : "Strong"

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-center gap-2 border bg-muted/40 px-3 py-2">
        <code className="min-w-0 flex-1 truncate font-mono text-sm">{password}</code>
        <Button variant="ghost" size="icon-xs" aria-label="Copy password">
          <CopyIcon />
        </Button>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span>Length: {n}</span>
        <Badge variant={strength === "Weak" ? "destructive" : "secondary"}>{strength}</Badge>
      </div>
      <Slider
        aria-label="Password length"
        value={length}
        onValueChange={(value) => setLength(value as number[])}
        min={6}
        max={32}
      />
    </div>
  )
}`,
  },
  {
    name: "SeatPricingSlider",
    description: "Team plan seat selector that switches pricing tiers as seats increase.",
    code: `
export default function SeatPricingSlider() {
  const [seats, setSeats] = React.useState([12])
  const n = seats[0]!
  const perSeat = n >= 50 ? 9 : n >= 20 ? 12 : 15

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Team plan</CardTitle>
        <CardDescription>Volume discounts apply automatically.</CardDescription>
        <CardAction>
          <Badge variant="outline">
            <UsersIcon />
            {n} seats
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Slider
          aria-label="Seats"
          value={seats}
          onValueChange={(value) => setSeats(value as number[])}
          min={1}
          max={100}
        />
        <div className="grid grid-cols-3 text-center text-xs">
          {[
            { label: "1-19", price: 15 },
            { label: "20-49", price: 12 },
            { label: "50+", price: 9 },
          ].map((tier) => (
            <div
              key={tier.label}
              className={cn(
                "border py-2",
                tier.price === perSeat ? "border-primary bg-primary/5" : "text-muted-foreground"
              )}
            >
              <div>{tier.label}</div>
              <div className="font-medium">\${tier.price}/seat</div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-between border-t">
        <span className="text-sm text-muted-foreground">Billed monthly</span>
        <span className="text-lg font-semibold tabular-nums">\${(n * perSeat).toLocaleString()}</span>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "WorkingHoursRange",
    description: "Range slider choosing daily working hours with formatted clock times.",
    code: `
function formatHour(h: number) {
  const hour = Math.floor(h)
  const minutes = h % 1 ? "30" : "00"
  const suffix = hour >= 12 && hour < 24 ? "PM" : "AM"
  const display = hour % 12 === 0 ? 12 : hour % 12
  return display + ":" + minutes + " " + suffix
}

export default function WorkingHoursRange() {
  const [hours, setHours] = React.useState([9, 17.5])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center gap-2">
        <ClockIcon className="size-4 text-muted-foreground" />
        <span className="text-sm font-medium">Working hours</span>
      </div>
      <Slider
        aria-label="Working hours"
        value={hours}
        onValueChange={(value) => setHours(value as number[])}
        min={0}
        max={24}
        step={0.5}
        minStepsBetweenValues={2}
      />
      <div className="flex justify-between text-sm tabular-nums">
        <span>{formatHour(hours[0]!)}</span>
        <span className="text-muted-foreground">{hours[1]! - hours[0]!}h</span>
        <span>{formatHour(hours[1]!)}</span>
      </div>
      <p className="text-xs text-muted-foreground">
        Teammates see you as away outside these hours.
      </p>
    </div>
  )
}`,
  },
  {
    name: "AudienceAgeRange",
    description: "Ad targeting age range with a minimum gap enforced between thumbs.",
    code: `
export default function AudienceAgeRange() {
  const [ages, setAges] = React.useState([25, 44])

  return (
    <Field className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <FieldLabel>Audience age</FieldLabel>
        <span className="text-sm tabular-nums">
          {ages[0]} - {ages[1] === 65 ? "65+" : ages[1]}
        </span>
      </div>
      <Slider
        aria-label="Audience age"
        value={ages}
        onValueChange={(value) => setAges(value as number[])}
        min={18}
        max={65}
        minStepsBetweenValues={5}
      />
      <FieldDescription>Ranges must span at least 5 years. Estimated reach: 1.2M people.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "SliderWithNumberInput",
    description: "Slider kept in sync with a numeric input for precise entry.",
    code: `
export default function SliderWithNumberInput() {
  const [value, setValue] = React.useState(40)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="max-upload">Max upload size (MB)</Label>
      <div className="flex items-center gap-3">
        <Slider
          aria-label="Max upload size"
          value={[value]}
          onValueChange={(v) => setValue((v as number[])[0]!)}
          min={1}
          max={250}
        />
        <Input
          id="max-upload"
          type="number"
          className="w-20"
          min={1}
          max={250}
          value={value}
          onChange={(e) => setValue(Math.min(250, Math.max(1, Number(e.target.value) || 1)))}
        />
      </div>
    </div>
  )
}`,
  },
  {
    name: "LayerOpacitySlider",
    description: "Design tool layer opacity control with a swatch over a checkerboard.",
    code: `
export default function LayerOpacitySlider() {
  const [opacity, setOpacity] = React.useState([80])

  return (
    <div className="flex w-full max-w-xs items-center gap-3 border p-3">
      <div
        className="size-8 shrink-0 border"
        style={{
          backgroundImage:
            "linear-gradient(45deg, var(--muted) 25%, transparent 25%, transparent 75%, var(--muted) 75%), linear-gradient(45deg, var(--muted) 25%, transparent 25%, transparent 75%, var(--muted) 75%)",
          backgroundSize: "8px 8px",
          backgroundPosition: "0 0, 4px 4px",
        }}
      >
        <div className="size-full bg-indigo-500" style={{ opacity: opacity[0]! / 100 }} />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex justify-between text-xs">
          <span>Opacity</span>
          <span className="tabular-nums text-muted-foreground">{opacity[0]}%</span>
        </div>
        <Slider
          aria-label="Layer opacity"
          value={opacity}
          onValueChange={(value) => setOpacity(value as number[])}
        />
      </div>
    </div>
  )
}`,
  },
  {
    name: "RgbColorMixer",
    description: "Three color-coded channel sliders mixing an RGB color preview.",
    code: `
const channels = [
  { key: "r", label: "Red", className: "[&_[data-slot=slider-range]]:bg-red-500" },
  { key: "g", label: "Green", className: "[&_[data-slot=slider-range]]:bg-green-500" },
  { key: "b", label: "Blue", className: "[&_[data-slot=slider-range]]:bg-blue-500" },
] as const

export default function RgbColorMixer() {
  const [rgb, setRgb] = React.useState({ r: 72, g: 132, b: 220 })
  const color = "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")"

  return (
    <div className="flex w-full max-w-sm gap-4 border p-4">
      <div className="flex w-20 shrink-0 flex-col gap-2">
        <div className="aspect-square w-full border" style={{ backgroundColor: color }} />
        <code className="text-center font-mono text-[10px] text-muted-foreground">{color}</code>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-4">
        {channels.map((channel) => (
          <div key={channel.key} className="flex items-center gap-2">
            <span className="w-3 text-xs font-medium">{channel.label[0]}</span>
            <Slider
              aria-label={channel.label}
              className={channel.className}
              value={[rgb[channel.key]]}
              onValueChange={(value) =>
                setRgb((prev) => ({ ...prev, [channel.key]: (value as number[])[0]! }))
              }
              max={255}
            />
            <span className="w-7 text-right text-xs tabular-nums text-muted-foreground">
              {rgb[channel.key]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "HueGradientSlider",
    description: "Hue picker slider whose track shows the full color spectrum.",
    code: `
export default function HueGradientSlider() {
  const [hue, setHue] = React.useState([210])

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between">
        <Label>Accent hue</Label>
        <div className="flex items-center gap-2">
          <span className="size-4 border" style={{ backgroundColor: "hsl(" + hue[0] + " 80% 55%)" }} />
          <span className="text-xs tabular-nums text-muted-foreground">{hue[0]}&deg;</span>
        </div>
      </div>
      <Slider
        aria-label="Accent hue"
        className="[&_[data-slot=slider-range]]:bg-transparent [&_[data-slot=slider-track]]:h-3! [&_[data-slot=slider-track]]:bg-[linear-gradient(to_right,red,yellow,lime,cyan,blue,magenta,red)] [&_[data-slot=slider-thumb]]:size-4"
        value={hue}
        onValueChange={(value) => setHue(value as number[])}
        max={360}
      />
    </div>
  )
}`,
  },
  {
    name: "SatisfactionScoreSlider",
    description: "Survey question scored 0 to 10 with a face icon reflecting the answer.",
    code: `
export default function SatisfactionScoreSlider() {
  const [score, setScore] = React.useState([7])
  const s = score[0]!
  const Icon = s <= 4 ? FrownIcon : s <= 7 ? MehIcon : SmileIcon

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <p className="text-sm font-medium">
        How likely are you to recommend Harbor Notes to a colleague?
      </p>
      <div className="flex items-center gap-3">
        <Icon className="size-6 shrink-0 text-muted-foreground" />
        <Slider
          aria-label="Recommendation score"
          value={score}
          onValueChange={(value) => setScore(value as number[])}
          max={10}
        />
        <span className="w-6 text-right text-lg font-semibold tabular-nums">{s}</span>
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Not likely</span>
        <span>Extremely likely</span>
      </div>
      <Button size="sm" className="self-end">
        Submit
      </Button>
    </div>
  )
}`,
  },
  {
    name: "RiskToleranceSlider",
    description: "Investment risk profile slider with discrete labelled levels and an allocation summary.",
    code: `
const profiles = [
  { label: "Conservative", stocks: 20 },
  { label: "Cautious", stocks: 40 },
  { label: "Balanced", stocks: 60 },
  { label: "Growth", stocks: 80 },
  { label: "Aggressive", stocks: 95 },
]

export default function RiskToleranceSlider() {
  const [level, setLevel] = React.useState([2])
  const profile = profiles[level[0]!]!

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium">Risk tolerance</span>
        <span className="text-sm">{profile.label}</span>
      </div>
      <Slider
        aria-label="Risk tolerance"
        value={level}
        onValueChange={(value) => setLevel(value as number[])}
        max={profiles.length - 1}
      />
      <div className="flex h-2 w-full">
        <div className="bg-primary" style={{ width: profile.stocks + "%" }} />
        <div className="flex-1 bg-muted" />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{profile.stocks}% stocks</span>
        <span>{100 - profile.stocks}% bonds</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "DeliveryRadiusSlider",
    description: "Restaurant settings card for the delivery radius with an estimated reach.",
    code: `
export default function DeliveryRadiusSlider() {
  const [radius, setRadius] = React.useState([5])
  const r = radius[0]!

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPinIcon className="size-4" />
          Delivery radius
        </CardTitle>
        <CardDescription>Orders outside this area are hidden from the menu.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-end justify-between">
          <span className="text-3xl font-semibold tabular-nums">
            {r}
            <span className="text-base font-normal text-muted-foreground"> km</span>
          </span>
          <span className="text-xs text-muted-foreground">~{Math.round(r * r * 410).toLocaleString()} households</span>
        </div>
        <Slider
          aria-label="Delivery radius"
          value={radius}
          onValueChange={(value) => setRadius(value as number[])}
          min={1}
          max={15}
          step={0.5}
        />
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "NotificationFrequencySlider",
    description: "Discrete slider snapping to named notification digest frequencies.",
    code: `
const options = ["Instantly", "Hourly", "Daily", "Weekly", "Never"]

export default function NotificationFrequencySlider() {
  const [index, setIndex] = React.useState([2])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center gap-2">
        <BellIcon className="size-4 text-muted-foreground" />
        <span className="text-sm font-medium">Email digest</span>
      </div>
      <Slider
        aria-label="Email digest frequency"
        value={index}
        onValueChange={(value) => setIndex(value as number[])}
        max={options.length - 1}
      />
      <div className="flex justify-between text-[11px]">
        {options.map((option, i) => (
          <button
            key={option}
            type="button"
            onClick={() => setIndex([i])}
            className={cn(i === index[0] ? "font-medium text-foreground" : "text-muted-foreground")}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "ModelParameterSliders",
    description: "AI playground parameters panel with temperature, top-p, and max tokens sliders.",
    code: `
const params = [
  { id: "temperature", label: "Temperature", min: 0, max: 2, step: 0.1, value: 0.7, hint: "Higher values give more varied output." },
  { id: "top-p", label: "Top P", min: 0, max: 1, step: 0.05, value: 0.9, hint: "Limits sampling to the most likely tokens." },
  { id: "max-tokens", label: "Max tokens", min: 256, max: 8192, step: 256, value: 2048, hint: "Upper bound on response length." },
]

export default function ModelParameterSliders() {
  const [values, setValues] = React.useState<Record<string, number>>(
    Object.fromEntries(params.map((p) => [p.id, p.value]))
  )

  return (
    <FieldGroup className="w-full max-w-sm border p-4">
      {params.map((param) => (
        <Field key={param.id}>
          <div className="flex items-center justify-between">
            <FieldLabel>{param.label}</FieldLabel>
            <span className="border px-1.5 font-mono text-xs tabular-nums">{values[param.id]}</span>
          </div>
          <Slider
            aria-label={param.label}
            value={[values[param.id]!]}
            onValueChange={(value) =>
              setValues((prev) => ({ ...prev, [param.id]: (value as number[])[0]! }))
            }
            min={param.min}
            max={param.max}
            step={param.step}
          />
          <FieldDescription>{param.hint}</FieldDescription>
        </Field>
      ))}
    </FieldGroup>
  )
}`,
  },
  {
    name: "VideoTrimRange",
    description: "Video clip trimmer with a range slider over a filmstrip and in and out timestamps.",
    code: `
const length = 94

function stamp(s: number) {
  return "0:" + String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0")
}

export default function VideoTrimRange() {
  const [trim, setTrim] = React.useState([12, 68])

  return (
    <div className="flex w-full max-w-md flex-col gap-3 border p-4">
      <div className="flex h-10 overflow-hidden border">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="flex-1 border-r last:border-r-0"
            style={{ background: "linear-gradient(135deg, hsl(" + (200 + i * 12) + " 60% 55%), hsl(" + (230 + i * 12) + " 50% 35%))" }}
          />
        ))}
      </div>
      <Slider
        aria-label="Trim clip"
        value={trim}
        onValueChange={(value) => setTrim(value as number[])}
        max={length}
        minStepsBetweenValues={3}
      />
      <div className="flex items-center justify-between text-xs tabular-nums">
        <span>In {stamp(trim[0]!)}</span>
        <Badge variant="secondary">
          <ScissorsIcon />
          {trim[1]! - trim[0]!}s
        </Badge>
        <span>Out {stamp(trim[1]!)}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "DownPaymentSlider",
    description: "Mortgage down payment percentage that shows the cash amount and a PMI warning.",
    code: `
const homePrice = 420000

export default function DownPaymentSlider() {
  const [percent, setPercent] = React.useState([15])
  const p = percent[0]!

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-baseline justify-between">
        <Label>Down payment</Label>
        <span className="text-sm font-medium tabular-nums">
          \${((homePrice * p) / 100).toLocaleString()} ({p}%)
        </span>
      </div>
      <Slider
        aria-label="Down payment percent"
        value={percent}
        onValueChange={(value) => setPercent(value as number[])}
        min={3}
        max={50}
      />
      {p < 20 ? (
        <p className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400">
          <InfoIcon className="size-3.5" />
          Under 20% usually requires mortgage insurance.
        </p>
      ) : (
        <p className="text-xs text-muted-foreground">No mortgage insurance required.</p>
      )}
    </div>
  )
}`,
  },
  {
    name: "SessionTimeoutField",
    description: "Admin security setting for idle session timeout inside a field with description.",
    code: `
function label(minutes: number) {
  return minutes >= 60 ? minutes / 60 + " hr" : minutes + " min"
}

export default function SessionTimeoutField() {
  const [minutes, setMinutes] = React.useState([30])

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Security</FieldLegend>
      <Field>
        <div className="flex items-center justify-between">
          <FieldLabel>Idle session timeout</FieldLabel>
          <Badge variant="outline">{label(minutes[0]!)}</Badge>
        </div>
        <Slider
          aria-label="Idle session timeout"
          value={minutes}
          onValueChange={(value) => setMinutes(value as number[])}
          min={15}
          max={240}
          step={15}
        />
        <FieldDescription>
          Members are signed out after this period of inactivity. Applies to all 84 workspace members.
        </FieldDescription>
      </Field>
    </FieldSet>
  )
}`,
  },
  {
    name: "SliderSizes",
    description: "Small, default, and large slider sizes made by scaling the track and thumb.",
    code: `
const sizes = [
  { label: "Small", className: "[&_[data-slot=slider-thumb]]:size-2.5 [&_[data-slot=slider-track]]:h-0.5!" },
  { label: "Default", className: "" },
  { label: "Large", className: "[&_[data-slot=slider-thumb]]:size-5 [&_[data-slot=slider-track]]:h-2!" },
]

export default function SliderSizes() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      {sizes.map((size) => (
        <div key={size.label} className="flex flex-col gap-2">
          <span className="text-xs text-muted-foreground">{size.label}</span>
          <Slider aria-label={size.label + " slider"} className={size.className} defaultValue={[55]} />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "StatusColorSliders",
    description: "Sliders recolored per threshold to signal healthy, warning, and critical alert levels.",
    code: `
const thresholds = [
  { label: "CPU alert", value: 45, range: "[&_[data-slot=slider-range]]:bg-emerald-500", note: "Healthy" },
  { label: "Memory alert", value: 72, range: "[&_[data-slot=slider-range]]:bg-amber-500", note: "Warning" },
  { label: "Disk alert", value: 91, range: "[&_[data-slot=slider-range]]:bg-destructive", note: "Critical" },
]

export default function StatusColorSliders() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5 border p-4">
      {thresholds.map((t) => (
        <div key={t.label} className="flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <span>{t.label}</span>
            <span className="text-xs text-muted-foreground">
              {t.value}% &middot; {t.note}
            </span>
          </div>
          <Slider aria-label={t.label} className={t.range} defaultValue={[t.value]} />
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: "BatteryChargeLimit",
    description: "Laptop battery charge limit slider that clamps between 50 and 100 percent.",
    code: `
export default function BatteryChargeLimit() {
  const [limit, setLimit] = React.useState([80])
  const l = limit[0]!

  return (
    <div className="flex w-full max-w-sm items-start gap-3 border p-4">
      <div className="flex size-9 shrink-0 items-center justify-center bg-muted">
        {l === 100 ? <BatteryFullIcon className="size-5" /> : <BatteryMediumIcon className="size-5" />}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div>
          <div className="text-sm font-medium">Charge limit: {l}%</div>
          <div className="text-xs text-muted-foreground">
            Keeping the battery below 100% extends its lifespan.
          </div>
        </div>
        <Slider
          aria-label="Charge limit"
          value={limit}
          onValueChange={(value) => setLimit(value as number[])}
          min={50}
          max={100}
          step={5}
        />
      </div>
    </div>
  )
}`,
  },
  {
    name: "ExposureCompensationSlider",
    description: "Camera exposure slider centered on zero with signed EV values and a reset.",
    code: `
export default function ExposureCompensationSlider() {
  const [ev, setEv] = React.useState([0.5])
  const v = ev[0]!

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <ApertureIcon className="size-4" />
          Exposure
        </div>
        <div className="flex items-center gap-1">
          <span className="font-mono text-xs tabular-nums">
            {v > 0 ? "+" : ""}
            {v.toFixed(1)} EV
          </span>
          <Button variant="ghost" size="icon-xs" aria-label="Reset exposure" onClick={() => setEv([0])}>
            <RotateCcwIcon />
          </Button>
        </div>
      </div>
      <Slider
        aria-label="Exposure"
        value={ev}
        onValueChange={(value) => setEv(value as number[])}
        min={-3}
        max={3}
        step={0.5}
      />
      <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
        <span>-3</span>
        <span>0</span>
        <span>+3</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "TipCalculatorSlider",
    description: "Bill splitter with a tip percentage slider and per-person totals.",
    code: `
const bill = 86.4

export default function TipCalculatorSlider() {
  const [tip, setTip] = React.useState([18])
  const [people, setPeople] = React.useState([3])
  const total = bill * (1 + tip[0]! / 100)

  return (
    <div className="flex w-full max-w-xs flex-col gap-4 border p-4">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Bill</span>
        <span className="tabular-nums">\${bill.toFixed(2)}</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span>Tip</span>
          <span className="tabular-nums">{tip[0]}%</span>
        </div>
        <Slider aria-label="Tip" value={tip} onValueChange={(value) => setTip(value as number[])} max={30} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span>Split</span>
          <span className="tabular-nums">{people[0]} people</span>
        </div>
        <Slider
          aria-label="People"
          value={people}
          onValueChange={(value) => setPeople(value as number[])}
          min={1}
          max={10}
        />
      </div>
      <div className="flex items-baseline justify-between border-t pt-3">
        <span className="text-sm">Each pays</span>
        <span className="text-xl font-semibold tabular-nums">\${(total / people[0]!).toFixed(2)}</span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "UsageTierBreakpoints",
    description: "Three-thumb slider defining usage-based pricing tier breakpoints with a legend.",
    code: `
const tiers = ["Free", "Standard", "Volume", "Enterprise"]

export default function UsageTierBreakpoints() {
  const [points, setPoints] = React.useState([10, 50, 200])
  const bounds = [0, ...points, 500]

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div>
        <div className="text-sm font-medium">API pricing tiers</div>
        <div className="text-xs text-muted-foreground">Drag to set tier boundaries (thousand requests).</div>
      </div>
      <Slider
        aria-label="Tier breakpoints"
        value={points}
        onValueChange={(value) => setPoints(value as number[])}
        max={500}
        step={10}
        minStepsBetweenValues={2}
      />
      <div className="flex flex-col gap-1.5">
        {tiers.map((tier, i) => (
          <div key={tier} className="flex justify-between text-xs">
            <span>{tier}</span>
            <span className="tabular-nums text-muted-foreground">
              {bounds[i]}k - {i === tiers.length - 1 ? "unlimited" : bounds[i + 1] + "k"}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "BudgetCategoryCaps",
    description: "Monthly budget caps per category with spent markers and over-budget highlighting.",
    code: `
const categories = [
  { name: "Groceries", spent: 412, cap: 500 },
  { name: "Dining out", spent: 268, cap: 200 },
  { name: "Transport", spent: 96, cap: 150 },
]

export default function BudgetCategoryCaps() {
  const [caps, setCaps] = React.useState(categories.map((c) => c.cap))

  return (
    <div className="flex w-full max-w-sm flex-col gap-5 border p-4">
      <div className="text-sm font-medium">March budget</div>
      {categories.map((category, i) => {
        const over = category.spent > caps[i]!
        return (
          <div key={category.name} className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <span>{category.name}</span>
              <span className={cn("tabular-nums text-xs", over ? "text-destructive" : "text-muted-foreground")}>
                \${category.spent} of \${caps[i]}
              </span>
            </div>
            <Slider
              aria-label={category.name + " cap"}
              className={cn(over && "[&_[data-slot=slider-range]]:bg-destructive")}
              value={[caps[i]!]}
              onValueChange={(value) =>
                setCaps((prev) => prev.map((c, j) => (j === i ? (value as number[])[0]! : c)))
              }
              max={800}
              step={25}
            />
          </div>
        )
      })}
    </div>
  )
}`,
  },
  {
    name: "MapZoomVerticalSlider",
    description: "Vertical map zoom control with plus and minus buttons above and below the slider.",
    code: `
export default function MapZoomVerticalSlider() {
  const [zoom, setZoom] = React.useState([12])
  const set = (z: number) => setZoom([Math.min(18, Math.max(3, z))])

  return (
    <div className="relative h-64 w-full max-w-sm overflow-hidden border bg-muted/40">
      <div className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <MapPinIcon className="absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-full text-primary" />
      <div className="absolute top-3 right-3 flex flex-col items-center gap-2 border bg-background p-1">
        <Button variant="ghost" size="icon-xs" aria-label="Zoom in" onClick={() => set(zoom[0]! + 1)}>
          <PlusIcon />
        </Button>
        <div className="h-40">
          <Slider
            orientation="vertical"
            aria-label="Map zoom"
            value={zoom}
            onValueChange={(value) => setZoom(value as number[])}
            min={3}
            max={18}
          />
        </div>
        <Button variant="ghost" size="icon-xs" aria-label="Zoom out" onClick={() => set(zoom[0]! - 1)}>
          <MinusIcon />
        </Button>
      </div>
      <span className="absolute bottom-2 left-2 bg-background px-1.5 text-[10px] tabular-nums">Zoom {zoom[0]}</span>
    </div>
  )
}`,
  },
  {
    name: "KeyboardLargeStepSlider",
    description: "Slider using a large step for Page Up and Page Down with keyboard hints.",
    code: `
export default function KeyboardLargeStepSlider() {
  const [value, setValue] = React.useState([400])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex justify-between text-sm">
        <Label>Monthly email quota</Label>
        <span className="tabular-nums">{value[0]!.toLocaleString()}</span>
      </div>
      <Slider
        aria-label="Monthly email quota"
        value={value}
        onValueChange={(v) => setValue(v as number[])}
        max={5000}
        step={10}
        largeStep={500}
      />
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <KbdGroup>
            <Kbd>&larr;</Kbd>
            <Kbd>&rarr;</Kbd>
          </KbdGroup>
          &plusmn;10
        </span>
        <span className="flex items-center gap-1">
          <KbdGroup>
            <Kbd>PgUp</Kbd>
            <Kbd>PgDn</Kbd>
          </KbdGroup>
          &plusmn;500
        </span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "CommitOnReleaseSlider",
    description: "Slider that previews while dragging and only saves when the thumb is released.",
    code: `
export default function CommitOnReleaseSlider() {
  const [live, setLive] = React.useState([60])
  const [saved, setSaved] = React.useState(60)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Autoscale threshold</span>
        <span className="text-sm tabular-nums">{live[0]}% CPU</span>
      </div>
      <Slider
        aria-label="Autoscale threshold"
        value={live}
        onValueChange={(value) => setLive(value as number[])}
        onValueCommitted={(value) => setSaved((value as number[])[0]!)}
        min={20}
        max={95}
      />
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        {live[0] === saved ? (
          <>
            <CheckIcon className="size-3.5 text-emerald-600 dark:text-emerald-400" />
            Saved at {saved}%
          </>
        ) : (
          <>
            <PencilIcon className="size-3.5" />
            Release to save (was {saved}%)
          </>
        )}
      </div>
    </div>
  )
}`,
  },
  {
    name: "InvalidReplicaSlider",
    description: "Field in an invalid state when the chosen replica count is below the required minimum.",
    code: `
export default function InvalidReplicaSlider() {
  const [replicas, setReplicas] = React.useState([1])
  const invalid = replicas[0]! < 2

  return (
    <Field data-invalid={invalid} className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <FieldLabel>Replicas</FieldLabel>
        <span className="text-sm tabular-nums">{replicas[0]}</span>
      </div>
      <Slider
        aria-label="Replicas"
        aria-invalid={invalid}
        className={cn(invalid && "[&_[data-slot=slider-range]]:bg-destructive [&_[data-slot=slider-thumb]]:border-destructive")}
        value={replicas}
        onValueChange={(value) => setReplicas(value as number[])}
        min={1}
        max={10}
      />
      {invalid ? (
        <FieldError>High availability requires at least 2 replicas.</FieldError>
      ) : (
        <FieldDescription>Traffic is balanced across all replicas.</FieldDescription>
      )}
    </Field>
  )
}`,
  },
  {
    name: "MonthTimelineRange",
    description: "Report date filter using a range slider over the months of the year.",
    code: `
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export default function MonthTimelineRange() {
  const [range, setRange] = React.useState([2, 7])

  return (
    <div className="flex w-full max-w-md flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium">
          <CalendarRangeIcon className="size-4" />
          Reporting period
        </span>
        <Badge variant="secondary">
          {months[range[0]!]} - {months[range[1]!]} 2025
        </Badge>
      </div>
      <Slider
        aria-label="Reporting period"
        value={range}
        onValueChange={(value) => setRange(value as number[])}
        max={11}
      />
      <div className="flex justify-between">
        {months.map((month, i) => (
          <span
            key={month}
            className={cn(
              "w-4 text-center text-[10px]",
              i >= range[0]! && i <= range[1]! ? "font-medium text-foreground" : "text-muted-foreground"
            )}
          >
            {month[0]}
          </span>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "PlaybackSpeedSlider",
    description: "Video playback speed slider paired with quick preset toggles.",
    code: `
const presets = [0.5, 1, 1.5, 2]

export default function PlaybackSpeedSlider() {
  const [speed, setSpeed] = React.useState([1])

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm">
          <GaugeIcon className="size-4" />
          Playback speed
        </span>
        <span className="font-mono text-sm tabular-nums">{speed[0]!.toFixed(2)}x</span>
      </div>
      <Slider
        aria-label="Playback speed"
        value={speed}
        onValueChange={(value) => setSpeed(value as number[])}
        min={0.25}
        max={2}
        step={0.25}
      />
      <div className="grid grid-cols-4 gap-1">
        {presets.map((p) => (
          <Button key={p} size="xs" variant={speed[0] === p ? "secondary" : "ghost"} onClick={() => setSpeed([p])}>
            {p}x
          </Button>
        ))}
      </div>
    </div>
  )
}`,
  },
  {
    name: "BrushSizePopover",
    description: "Drawing tool button that opens a popover containing a brush size slider.",
    code: `
export default function BrushSizePopover() {
  const [size, setSize] = React.useState([12])

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <BrushIcon data-icon="inline-start" />
        Brush {size[0]}px
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <PopoverHeader>
          <PopoverTitle>Brush size</PopoverTitle>
          <PopoverDescription>Applies to pen and eraser.</PopoverDescription>
        </PopoverHeader>
        <div className="flex items-center gap-3">
          <Slider
            aria-label="Brush size"
            value={size}
            onValueChange={(value) => setSize(value as number[])}
            min={1}
            max={48}
          />
          <div className="flex size-12 shrink-0 items-center justify-center border">
            <span className="rounded-full bg-foreground" style={{ width: size[0]! * 0.9, height: size[0]! * 0.9 }} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}`,
  },
  {
    name: "StorageAllocationSlider",
    description: "Disk partition split between system and data volumes using a single thumb.",
    code: `
const total = 512

export default function StorageAllocationSlider() {
  const [system, setSystem] = React.useState([128])

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center gap-2 text-sm font-medium">
        <HardDriveIcon className="size-4" />
        Partition disk ({total} GB)
      </div>
      <Slider
        aria-label="System partition size"
        className="[&_[data-slot=slider-track]]:h-2! [&_[data-slot=slider-track]]:bg-sky-500/40 [&_[data-slot=slider-thumb]]:size-4"
        value={system}
        onValueChange={(value) => setSystem(value as number[])}
        min={64}
        max={448}
        step={16}
      />
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="size-2.5 bg-primary" />
          System: {system[0]} GB
        </div>
        <div className="flex items-center justify-end gap-2">
          <span className="size-2.5 bg-sky-500/40" />
          Data: {total - system[0]!} GB
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: "ImageAdjustmentsPanel",
    description: "Photo editor adjustments panel with contrast, saturation, and warmth sliders plus reset.",
    code: `
const defaults = { contrast: 100, saturation: 100, warmth: 0 }

export default function ImageAdjustmentsPanel() {
  const [adj, setAdj] = React.useState(defaults)
  const rows = [
    { key: "contrast", label: "Contrast", min: 50, max: 150 },
    { key: "saturation", label: "Saturation", min: 0, max: 200 },
    { key: "warmth", label: "Warmth", min: -50, max: 50 },
  ] as const

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div
        className="h-24 w-full bg-gradient-to-r from-teal-400 via-amber-300 to-rose-400"
        style={{
          filter:
            "contrast(" + adj.contrast + "%) saturate(" + adj.saturation + "%) sepia(" + Math.max(0, adj.warmth) + "%) hue-rotate(" + Math.min(0, adj.warmth) + "deg)",
        }}
      />
      {rows.map((row) => (
        <div key={row.key} className="grid grid-cols-[80px_1fr_32px] items-center gap-3">
          <span className="text-xs">{row.label}</span>
          <Slider
            aria-label={row.label}
            value={[adj[row.key]]}
            onValueChange={(value) => setAdj((prev) => ({ ...prev, [row.key]: (value as number[])[0]! }))}
            min={row.min}
            max={row.max}
          />
          <span className="text-right text-xs tabular-nums text-muted-foreground">{adj[row.key]}</span>
        </div>
      ))}
      <Button variant="outline" size="sm" className="self-end" onClick={() => setAdj(defaults)}>
        <RotateCcwIcon data-icon="inline-start" />
        Reset
      </Button>
    </div>
  )
}`,
  },
  {
    name: "SleepScheduleRange",
    description: "Sleep tracker bedtime and wake-up range with total hours and a goal badge.",
    code: `
function clock(v: number) {
  const h = Math.floor(v) % 24
  const m = v % 1 ? "30" : "00"
  return String(h).padStart(2, "0") + ":" + m
}

export default function SleepScheduleRange() {
  const [range, setRange] = React.useState([22.5, 30.5])
  const hours = range[1]! - range[0]!

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center gap-2">
          <MoonIcon className="size-4 text-indigo-500" />
          <div>
            <div className="text-[10px] text-muted-foreground uppercase">Bedtime</div>
            <div className="font-mono text-sm">{clock(range[0]!)}</div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 text-right">
          <div>
            <div className="text-[10px] text-muted-foreground uppercase">Wake up</div>
            <div className="font-mono text-sm">{clock(range[1]!)}</div>
          </div>
          <SunriseIcon className="size-4 text-amber-500" />
        </div>
      </div>
      <Slider
        aria-label="Sleep schedule"
        className="[&_[data-slot=slider-range]]:bg-indigo-500"
        value={range}
        onValueChange={(value) => setRange(value as number[])}
        min={20}
        max={34}
        step={0.5}
        minStepsBetweenValues={8}
      />
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">{hours} hours in bed</span>
        <Badge variant={hours >= 7.5 ? "secondary" : "outline"}>
          {hours >= 7.5 ? "Meets goal" : "Below 7.5h goal"}
        </Badge>
      </div>
    </div>
  )
}`,
  },
  {
    name: "FormSubmitSliderName",
    description: "Uncontrolled slider with a name inside a form, reading its value on submit.",
    code: `
export default function FormSubmitSliderName() {
  const [submitted, setSubmitted] = React.useState<string | null>(null)

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-4 border p-4"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(String(new FormData(e.currentTarget).get("effort")))
      }}
    >
      <Field>
        <FieldLabel>Story points for &quot;Bulk invoice export&quot;</FieldLabel>
        <Slider name="effort" aria-label="Story points" defaultValue={[5]} min={1} max={13} />
        <FieldDescription>1 is trivial, 13 needs to be split.</FieldDescription>
      </Field>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {submitted ? "Submitted: " + submitted + " points" : "Not submitted yet"}
        </span>
        <Button type="submit" size="sm">
          Save estimate
        </Button>
      </div>
    </form>
  )
}`,
  },
  {
    name: "ThumbCollisionSwap",
    description: "Range slider that lets thumbs swap past each other, for comparing two benchmark values.",
    code: `
export default function ThumbCollisionSwap() {
  const [values, setValues] = React.useState([320, 540])
  const [low, high] = [...values].sort((a, b) => a - b)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="text-sm font-medium">Latency comparison window</div>
      <Slider
        aria-label="Latency window"
        value={values}
        onValueChange={(value) => setValues(value as number[])}
        thumbCollisionBehavior="swap"
        max={1000}
        step={10}
      />
      <div className="flex justify-between text-xs tabular-nums">
        <span>p50 {low} ms</span>
        <span className="text-muted-foreground">&Delta; {high! - low!} ms</span>
        <span>p99 {high} ms</span>
      </div>
    </div>
  )
}`,
  },
]

export default examples
