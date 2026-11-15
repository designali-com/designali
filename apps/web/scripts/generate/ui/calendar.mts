import { type Example } from "./_lib.mjs"

const DF = "date-fns"
const RDP = "react-day-picker"

const examples: Example[] = [
  {
    name: "PublishDateRequired",
    description: "Required single-date calendar for scheduling a post that can never be left empty.",
    imports: { [DF]: ["format"] },
    code: `
export default function PublishDateRequired() {
  const [date, setDate] = React.useState(() => new Date())

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3">
      <Calendar mode="single" required selected={date} onSelect={setDate} className="border" />
      <p className="text-center text-xs text-muted-foreground">
        Scheduled to publish on{" "}
        <span className="font-medium text-foreground">{format(date, "EEEE, MMMM d")}</span>
      </p>
    </div>
  )
}`,
  },
  {
    name: "MeetingPollDates",
    description: "Multiple-date selection capped at five options, with removable badges for a meeting poll.",
    imports: { [DF]: ["addDays", "format", "isSameDay"] },
    code: `
const today = new Date()

export default function MeetingPollDates() {
  const [dates, setDates] = React.useState<Date[]>([addDays(today, 2), addDays(today, 4)])
  const sorted = [...dates].sort((a, b) => a.getTime() - b.getTime())

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Propose meeting dates</CardTitle>
        <CardDescription>Pick up to 5 options for the team to vote on.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3">
        <Calendar
          mode="multiple"
          max={5}
          selected={dates}
          onSelect={(next) => setDates(next ?? [])}
          disabled={{ before: today }}
          className="p-0"
        />
        <div className="flex min-h-6 w-full flex-wrap gap-1.5">
          {sorted.length === 0 ? (
            <span className="text-xs text-muted-foreground">No dates selected yet.</span>
          ) : null}
          {sorted.map((d) => (
            <Badge key={d.toISOString()} variant="secondary" className="gap-1 pe-1">
              {format(d, "EEE, MMM d")}
              <button
                type="button"
                aria-label={"Remove " + format(d, "MMM d")}
                onClick={() => setDates(dates.filter((x) => !isSameDay(x, d)))}
                className="text-muted-foreground hover:text-foreground"
              >
                <XIcon className="size-3" />
              </button>
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-xs text-muted-foreground">{dates.length}/5 selected</span>
        <Button size="sm" disabled={dates.length < 2}>
          Send poll
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "HotelStayRange",
    description: "Range calendar enforcing a 2 to 14 night stay with a live nightly price total.",
    imports: { [DF]: ["addDays", "differenceInCalendarDays", "format"], [RDP]: ["type DateRange"] },
    code: `
const today = new Date()
const rate = 189

export default function HotelStayRange() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: addDays(today, 7),
    to: addDays(today, 10),
  })
  const nights = range?.from && range?.to ? differenceInCalendarDays(range.to, range.from) : 0

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Harbor View Suite</CardTitle>
        <CardDescription>Minimum 2 nights, maximum 14.</CardDescription>
        <CardAction>
          <Badge variant="outline">{"$" + rate} / night</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Calendar
          mode="range"
          min={2}
          max={14}
          selected={range}
          onSelect={setRange}
          defaultMonth={range?.from}
          disabled={{ before: today }}
          excludeDisabled
          className="p-0"
        />
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            {range?.from && range?.to
              ? format(range.from, "MMM d") + " - " + format(range.to, "MMM d")
              : "Select check-in and check-out"}
          </span>
          <span className="font-medium">
            {nights} {nights === 1 ? "night" : "nights"} · {"$" + (nights * rate).toLocaleString()}
          </span>
        </div>
        <Button disabled={nights < 2}>Reserve</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "DeliveryDateCheckout",
    description: "Checkout delivery picker that blocks weekends, holidays and the next two days.",
    imports: { [DF]: ["addDays", "format", "isWeekend"] },
    code: `
const today = new Date()

function firstDeliveryDay() {
  let d = addDays(today, 2)
  while (isWeekend(d)) d = addDays(d, 1)
  return d
}

const holidays = [addDays(today, 9), addDays(today, 10)]

export default function DeliveryDateCheckout() {
  const [date, setDate] = React.useState<undefined | Date>(firstDeliveryDay)

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TruckIcon className="size-4 text-muted-foreground" />
          Choose delivery date
        </CardTitle>
        <CardDescription>Weekdays only. Couriers are off on public holidays.</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={[{ before: addDays(today, 2) }, { dayOfWeek: [0, 6] }, ...holidays]}
          modifiers={{ holiday: holidays }}
          modifiersClassNames={{ holiday: "[&>button]:line-through" }}
          className="p-0"
        />
      </CardContent>
      <CardFooter className="justify-between gap-2">
        <div className="grid gap-0.5">
          <span className="text-muted-foreground">Arrives</span>
          <span className="font-medium">{date ? format(date, "EEEE, MMM d") : "No date selected"}</span>
        </div>
        <Button size="sm" disabled={!date}>
          Continue
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "AppointmentWindow",
    description: "Clinic appointment calendar limited to the next 30 days with navigation bounded to that window.",
    imports: { [DF]: ["addDays", "format", "startOfMonth"] },
    code: `
const today = new Date()
const lastDay = addDays(today, 30)

export default function AppointmentWindow() {
  const [date, setDate] = React.useState<undefined | Date>()

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-start gap-2 border bg-muted/40 p-3 text-xs">
        <InfoIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
        <p>
          Appointments open up to 30 days ahead, until{" "}
          <span className="font-medium">{format(lastDay, "MMMM d")}</span>.
        </p>
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        startMonth={startOfMonth(today)}
        endMonth={lastDay}
        disabled={[{ before: today }, { after: lastDay }]}
        className="self-center border"
      />
      <Button disabled={!date}>
        {date ? "Book for " + format(date, "MMM d") : "Select a day"}
      </Button>
    </div>
  )
}`,
  },
  {
    name: "InvoiceDatePopover",
    description: "Form field that opens a single-date calendar in a popover and closes on selection.",
    imports: { [DF]: ["format"] },
    code: `
export default function InvoiceDatePopover() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<undefined | Date>()

  return (
    <Field className="w-full max-w-60">
      <FieldLabel htmlFor="invoice-date">Invoice date</FieldLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={<Button id="invoice-date" variant="outline" className="w-full justify-start font-normal" />}
        >
          <CalendarIcon data-icon="inline-start" />
          {date ? format(date, "PPP") : <span className="text-muted-foreground">Pick a date</span>}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            defaultMonth={date}
            onSelect={(next) => {
              setDate(next)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
      <FieldDescription>Shown on the PDF sent to your client.</FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "ReportRangePopover",
    description: "Two-month range calendar in a popover for choosing a reporting period.",
    imports: { [DF]: ["format", "subDays"], [RDP]: ["type DateRange"] },
    code: `
const today = new Date()

export default function ReportRangePopover() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: subDays(today, 13),
    to: today,
  })

  const label = range?.from
    ? range.to
      ? format(range.from, "MMM d") + " - " + format(range.to, "MMM d, yyyy")
      : format(range.from, "MMM d, yyyy")
    : "Select period"

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <span className="text-xs font-medium">Reporting period</span>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" className="w-full justify-between font-normal" />}>
          <span className="flex items-center gap-2">
            <CalendarRangeIcon className="size-4 text-muted-foreground" />
            {label}
          </span>
          <ChevronDownIcon className="size-4 text-muted-foreground" />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            numberOfMonths={2}
            defaultMonth={range?.from}
            selected={range}
            onSelect={setRange}
            disabled={{ after: today }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}`,
  },
  {
    name: "DateOfBirthPicker",
    description: "Birthday field with month and year dropdowns spanning decades and a computed age.",
    imports: { [DF]: ["differenceInYears", "format"] },
    code: `
const today = new Date()

export default function DateOfBirthPicker() {
  const [date, setDate] = React.useState<undefined | Date>(new Date(1994, 5, 18))

  return (
    <Field className="w-full max-w-60">
      <FieldLabel htmlFor="dob">Date of birth</FieldLabel>
      <Popover>
        <PopoverTrigger render={<Button id="dob" variant="outline" className="w-full justify-between font-normal" />}>
          {date ? format(date, "MMMM d, yyyy") : "Select date"}
          <CakeIcon className="size-4 text-muted-foreground" />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            captionLayout="dropdown"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
            startMonth={new Date(1930, 0)}
            endMonth={today}
            disabled={{ after: today }}
          />
        </PopoverContent>
      </Popover>
      <FieldDescription>
        {date ? "You are " + differenceInYears(today, date) + " years old." : "Used to verify your age."}
      </FieldDescription>
    </Field>
  )
}`,
  },
  {
    name: "CaptionLayoutSwitcher",
    description: "Animated calendar that switches between label, dropdown, month-only and year-only captions.",
    code: `
const layouts = [
  { value: "label", label: "Label" },
  { value: "dropdown", label: "Both" },
  { value: "dropdown-months", label: "Month" },
  { value: "dropdown-years", label: "Year" },
] as const;

type Layout = (typeof layouts)[number]["value"]

export default function CaptionLayoutSwitcher() {
  const [layout, setLayout] = React.useState<Layout>("dropdown")
  const year = new Date().getFullYear()

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3">
      <ToggleGroup
        variant="outline"
        size="sm"
        value={[layout]}
        onValueChange={(value) => {
          if (value[0]) setLayout(value[0] as Layout)
        }}
      >
        {layouts.map((item) => (
          <ToggleGroupItem key={item.value} value={item.value}>
            {item.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <Calendar
        mode="single"
        animate
        captionLayout={layout}
        startMonth={new Date(year - 10, 0)}
        endMonth={new Date(year + 5, 11)}
        className="border"
      />
    </div>
  )
}`,
  },
  {
    name: "WeekStartSwitcher",
    description: "Regional preference control that changes which weekday the calendar starts on.",
    code: `
const options = [
  { value: "0", label: "Sunday", region: "United States, Canada" },
  { value: "1", label: "Monday", region: "Europe, ISO 8601" },
  { value: "6", label: "Saturday", region: "Middle East" },
]

export default function WeekStartSwitcher() {
  const [start, setStart] = React.useState("1")
  const current = options.find((o) => o.value === start)!

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <div className="grid">
          <span className="text-xs font-medium">Week starts on</span>
          <span className="text-xs text-muted-foreground">{current.region}</span>
        </div>
        <NativeSelect size="sm" value={start} onChange={(e) => setStart(e.target.value)} aria-label="Week starts on">
          {options.map((o) => (
            <NativeSelectOption key={o.value} value={o.value}>
              {o.label}
            </NativeSelectOption>
          ))}
        </NativeSelect>
      </div>
      <Calendar
        mode="single"
        weekStartsOn={Number(start) as 0 | 1 | 6}
        className="self-center border"
      />
    </div>
  )
}`,
  },
  {
    name: "LocalizedCalendar",
    description: "Calendar that swaps between date-fns locales for translated month and weekday names.",
    imports: { "react-day-picker/locale": ["de", "enUS", "es", "fr", "ja"] },
    code: `
const locales = { enUS, es, fr, de, ja }
type LocaleKey = keyof typeof locales

const languages: { value: LocaleKey; label: string }[] = [
  { value: "enUS", label: "English" },
  { value: "es", label: "Español" },
  { value: "fr", label: "Français" },
  { value: "de", label: "Deutsch" },
  { value: "ja", label: "日本語" },
]

export default function LocalizedCalendar() {
  const [lang, setLang] = React.useState<LocaleKey>("fr")
  const [date, setDate] = React.useState<undefined | Date>(() => new Date())
  const locale = locales[lang]

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-xs font-medium">
          <LanguagesIcon className="size-4 text-muted-foreground" />
          Display language
        </span>
        <NativeSelect size="sm" value={lang} onChange={(e) => setLang(e.target.value as LocaleKey)} aria-label="Language">
          {languages.map((l) => (
            <NativeSelectOption key={l.value} value={l.value}>
              {l.label}
            </NativeSelectOption>
          ))}
        </NativeSelect>
      </div>
      <Calendar mode="single" locale={locale} selected={date} onSelect={setDate} className="self-center border" />
      <p className="text-center text-xs text-muted-foreground">
        {date ? date.toLocaleDateString(locale.code, { dateStyle: "full" }) : "—"}
      </p>
    </div>
  )
}`,
  },
  {
    name: "ArabicRtlCalendar",
    description: "Right-to-left calendar with the Arabic locale and Eastern Arabic numerals.",
    imports: { "react-day-picker/locale": ["arSA"] },
    code: `
export default function ArabicRtlCalendar() {
  const [date, setDate] = React.useState<undefined | Date>(() => new Date())

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-2">
      <Calendar
        mode="single"
        dir="rtl"
        locale={arSA}
        numerals="arab"
        selected={date}
        onSelect={setDate}
        className="border"
      />
      <span className="text-xs text-muted-foreground">Right-to-left layout · Arabic numerals</span>
    </div>
  )
}`,
  },
  {
    name: "StudioAvailabilityDots",
    description: "Custom day buttons with colored dots showing open, limited and full availability.",
    code: `
const levels = [
  { key: "open", label: "Open", dot: "bg-emerald-500" },
  { key: "limited", label: "Limited", dot: "bg-amber-500" },
  { key: "full", label: "Full", dot: "bg-rose-500" },
]

function levelFor(date: Date) {
  const n = (date.getDate() * 7 + date.getMonth()) % 5
  return n < 3 ? levels[0]! : n === 3 ? levels[1]! : levels[2]!
}

function AvailabilityDayButton({ children, day, modifiers, ...props }: React.ComponentProps<typeof CalendarDayButton>) {
  const level = levelFor(day.date)
  return (
    <CalendarDayButton day={day} modifiers={modifiers} {...props}>
      {children}
      {!modifiers.outside && !modifiers.disabled ? (
        <span className={cn("size-1 rounded-full opacity-100!", level.dot)} />
      ) : null}
    </CalendarDayButton>
  )
}

export default function StudioAvailabilityDots() {
  const [date, setDate] = React.useState<undefined | Date>()
  const today = React.useMemo(() => new Date(), [])

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle>Studio B rental</CardTitle>
        <CardDescription>Dots show how many hourly slots remain.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={[{ before: today }, (d) => levelFor(d).key === "full"]}
          components={{ DayButton: AvailabilityDayButton }}
          className="p-0 [--cell-size:--spacing(9)]"
        />
        <div className="flex gap-4 text-xs text-muted-foreground">
          {levels.map((l) => (
            <span key={l.key} className="flex items-center gap-1.5">
              <span className={cn("size-1.5 rounded-full", l.dot)} />
              {l.label}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "EventsAgenda",
    description: "Calendar marking days that have events, with the selected day's agenda listed below.",
    imports: { [DF]: ["format", "isSameDay"] },
    code: `
const base = new Date()
const y = base.getFullYear()
const m = base.getMonth()

const events = [
  { date: new Date(y, m, 4), time: "09:30", title: "Design review", tone: "bg-sky-500" },
  { date: new Date(y, m, 4), time: "14:00", title: "1:1 with Priya", tone: "bg-violet-500" },
  { date: new Date(y, m, 11), time: "11:00", title: "Sprint planning", tone: "bg-emerald-500" },
  { date: new Date(y, m, 17), time: "16:30", title: "Customer call: Northwind", tone: "bg-amber-500" },
  { date: new Date(y, m, 22), time: "10:00", title: "Quarterly roadmap", tone: "bg-sky-500" },
  { date: new Date(y, m, 22), time: "13:00", title: "Team lunch", tone: "bg-rose-500" },
]

export default function EventsAgenda() {
  const [date, setDate] = React.useState(new Date(y, m, 4))
  const dayEvents = events.filter((e) => isSameDay(e.date, date))

  return (
    <Card className="w-fit max-w-full">
      <CardContent className="flex flex-col gap-4">
        <Calendar
          mode="single"
          required
          selected={date}
          onSelect={setDate}
          modifiers={{ hasEvent: events.map((e) => e.date) }}
          modifiersClassNames={{
            hasEvent:
              "[&>button]:after:absolute [&>button]:after:bottom-1 [&>button]:after:size-1 [&>button]:after:rounded-full [&>button]:after:bg-primary [&>button[data-selected-single=true]]:after:bg-primary-foreground",
          }}
          className="p-0"
        />
        <div className="grid gap-2 border-t pt-3">
          <span className="text-xs font-medium">{format(date, "EEEE, MMMM d")}</span>
          {dayEvents.length === 0 ? (
            <span className="text-xs text-muted-foreground">Nothing scheduled.</span>
          ) : (
            dayEvents.map((e) => (
              <div key={e.title} className="flex items-center gap-2 text-xs">
                <span className={cn("h-4 w-0.5", e.tone)} />
                <span className="w-10 text-muted-foreground tabular-nums">{e.time}</span>
                <span>{e.title}</span>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "FlightTripDates",
    description: "Tabs switch between a one-way single date and a paged two-month round-trip range.",
    imports: { [DF]: ["addDays", "format"], [RDP]: ["type DateRange"] },
    code: `
const today = new Date()

export default function FlightTripDates() {
  const [departure, setDeparture] = React.useState<undefined | Date>(addDays(today, 14))
  const [trip, setTrip] = React.useState<DateRange | undefined>({
    from: addDays(today, 14),
    to: addDays(today, 21),
  })

  return (
    <Card className="w-fit max-w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PlaneIcon className="size-4 text-muted-foreground" />
          Lisbon to Reykjavik
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="round">
          <TabsList>
            <TabsTrigger value="round">Round trip</TabsTrigger>
            <TabsTrigger value="oneway">One way</TabsTrigger>
          </TabsList>
          <TabsContent value="round" className="flex flex-col gap-2">
            <Calendar
              mode="range"
              numberOfMonths={2}
              pagedNavigation
              selected={trip}
              onSelect={setTrip}
              defaultMonth={trip?.from}
              disabled={{ before: today }}
              className="p-0"
            />
            <p className="text-xs text-muted-foreground">
              {trip?.from && trip?.to
                ? "Depart " + format(trip.from, "EEE, MMM d") + " · Return " + format(trip.to, "EEE, MMM d")
                : "Select departure and return"}
            </p>
          </TabsContent>
          <TabsContent value="oneway" className="flex flex-col gap-2">
            <Calendar
              mode="single"
              selected={departure}
              onSelect={setDeparture}
              defaultMonth={departure}
              disabled={{ before: today }}
              className="p-0"
            />
            <p className="text-xs text-muted-foreground">
              {departure ? "Depart " + format(departure, "EEE, MMM d") : "Select departure"}
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "CompactSidebarCalendar",
    description: "Small sidebar calendar with tight cells, navigation after the caption and an upcoming list.",
    code: `
const upcoming = [
  { time: "10:00", title: "Standup", tone: "bg-sky-500" },
  { time: "13:30", title: "Hiring sync", tone: "bg-violet-500" },
  { time: "17:00", title: "Release go/no-go", tone: "bg-amber-500" },
]

export default function CompactSidebarCalendar() {
  const [date, setDate] = React.useState<undefined | Date>(() => new Date())

  return (
    <aside className="flex w-full max-w-60 flex-col border bg-sidebar text-sidebar-foreground">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        navLayout="after"
        showOutsideDays={false}
        className="w-full bg-transparent [--cell-size:--spacing(6)] [&_.rdp-day]:text-xs"
      />
      <div className="grid gap-1.5 border-t p-3">
        <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">Today</span>
        {upcoming.map((u) => (
          <div key={u.title} className="flex items-center gap-2 text-xs">
            <span className={cn("size-1.5 rounded-full", u.tone)} />
            <span className="text-muted-foreground tabular-nums">{u.time}</span>
            <span className="truncate">{u.title}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}`,
  },
  {
    name: "TouchFriendlyCalendar",
    description: "Large-cell calendar with outline navigation buttons and fixed weeks for touch screens.",
    code: `
export default function TouchFriendlyCalendar() {
  const [date, setDate] = React.useState<undefined | Date>()

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        fixedWeeks
        buttonVariant="outline"
        className="border [--cell-size:--spacing(10)] sm:[--cell-size:--spacing(11)]"
      />
      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <HandIcon className="size-3.5" />
        44px targets for kiosk and tablet check-in
      </span>
    </div>
  )
}`,
  },
  {
    name: "FiscalYearExpenseDate",
    description: "Expense date picker bounded to the April-March fiscal year with a month dropdown.",
    imports: { [DF]: ["format"] },
    code: `
const now = new Date()
const fyStart = now.getMonth() >= 3 ? now.getFullYear() : now.getFullYear() - 1
const start = new Date(fyStart, 3, 1)
const end = new Date(fyStart + 1, 2, 31)

export default function FiscalYearExpenseDate() {
  const [date, setDate] = React.useState<undefined | Date>()

  return (
    <Card size="sm" className="w-fit">
      <CardHeader>
        <CardTitle>Expense date</CardTitle>
        <CardDescription>
          {format(start, "MMM yyyy")} - {format(end, "MMM yyyy")}
        </CardDescription>
        <CardAction>
          <Badge variant="secondary">
            FY{String(fyStart + 1).slice(2)}
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          captionLayout="dropdown-months"
          selected={date}
          onSelect={setDate}
          startMonth={start}
          endMonth={end}
          disabled={[{ before: start }, { after: end }]}
          className="p-0"
        />
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "PaydayCalendar",
    description: "Read-only calendar highlighting semi-monthly paydays with a matcher function.",
    imports: { [DF]: ["addDays", "format", "isLastDayOfMonth", "differenceInCalendarDays"] },
    code: `
const isPayday = (d: Date) => d.getDate() === 15 || isLastDayOfMonth(d)

function nextPayday(from: Date) {
  let d = from
  while (!isPayday(d)) d = addDays(d, 1)
  return d
}

export default function PaydayCalendar() {
  const today = React.useMemo(() => new Date(), [])
  const next = nextPayday(today)
  const days = differenceInCalendarDays(next, today)

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BanknoteIcon className="size-4 text-muted-foreground" />
          Pay schedule
        </CardTitle>
        <CardDescription>Paid on the 15th and the last day of each month.</CardDescription>
      </CardHeader>
      <CardContent>
        <Calendar
          modifiers={{ payday: isPayday }}
          modifiersClassNames={{
            payday: "[&>button]:bg-emerald-500/15 [&>button]:font-semibold [&>button]:text-emerald-700 dark:[&>button]:text-emerald-400",
          }}
          className="p-0"
        />
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-muted-foreground">Next payday</span>
        <span className="font-medium">
          {format(next, "EEE, MMM d")} · {days === 0 ? "today" : "in " + days + (days === 1 ? " day" : " days")}
        </span>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "HolidayLegendCalendar",
    description: "Company holiday calendar using two modifiers for full and half days with a legend.",
    code: `
const year = new Date().getFullYear()
const fullDays = [new Date(year, 11, 25), new Date(year, 11, 26), new Date(year + 1, 0, 1)]
const halfDays = [new Date(year, 11, 24), new Date(year, 11, 31)]

export default function HolidayLegendCalendar() {
  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3">
      <Calendar
        defaultMonth={new Date(year, 11)}
        modifiers={{ holiday: fullDays, half: halfDays }}
        modifiersClassNames={{
          holiday: "[&>button]:bg-rose-500/15 [&>button]:text-rose-700 dark:[&>button]:text-rose-400",
          half: "[&>button]:bg-[linear-gradient(135deg,var(--color-amber-500)_50%,transparent_50%)]/20 [&>button]:text-amber-700 dark:[&>button]:text-amber-400",
        }}
        className="border"
      />
      <div className="flex w-full justify-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 bg-rose-500/30" /> Office closed
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 bg-amber-500/30" /> Half day
        </span>
      </div>
    </div>
  )
}`,
  },
  {
    name: "WorkoutStreakHeatmap",
    description: "Activity heatmap built with a custom day button whose shade reflects minutes trained.",
    imports: { [DF]: ["isAfter", "startOfDay"] },
    code: `
const pattern = [0, 25, 45, 30, 0, 60, 15]
const today = startOfDay(new Date())

function minutesFor(date: Date) {
  if (isAfter(date, today)) return null
  return pattern[(date.getDate() + date.getMonth()) % pattern.length]!
}

function shade(minutes: number | null) {
  if (minutes === null) return ""
  if (minutes === 0) return "bg-muted/40"
  if (minutes < 30) return "bg-emerald-500/25"
  if (minutes < 50) return "bg-emerald-500/50"
  return "bg-emerald-500/80 text-white"
}

function HeatmapDayButton({ day, modifiers, className, ...props }: React.ComponentProps<typeof CalendarDayButton>) {
  const minutes = modifiers.outside ? null : minutesFor(day.date)
  return (
    <CalendarDayButton
      day={day}
      modifiers={modifiers}
      title={minutes === null ? undefined : minutes + " min"}
      className={cn("rounded-none", shade(minutes), className)}
      {...props}
    />
  )
}

export default function WorkoutStreakHeatmap() {
  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FlameIcon className="size-4 text-orange-500" />
          5 day streak
        </CardTitle>
        <CardDescription>Minutes trained this month.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Calendar
          components={{ DayButton: HeatmapDayButton }}
          classNames={{ today: "font-semibold underline underline-offset-4" }}
          className="p-0"
        />
        <div className="flex items-center justify-end gap-1 text-[11px] text-muted-foreground">
          Less
          {["bg-muted/40", "bg-emerald-500/25", "bg-emerald-500/50", "bg-emerald-500/80"].map((c) => (
            <span key={c} className={cn("size-3", c)} />
          ))}
          More
        </div>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "TimeSlotBooking",
    description: "Booking flow pairing a weekday-only calendar with a grid of time slot toggles.",
    imports: { [DF]: ["addDays", "format"] },
    code: `
const slots = ["09:00", "09:30", "10:30", "11:00", "13:00", "14:30", "15:00", "16:30"]
const today = new Date()

export default function TimeSlotBooking() {
  const [date, setDate] = React.useState<undefined | Date>(addDays(today, 1))
  const [slot, setSlot] = React.useState<string | undefined>()
  const taken = date ? [slots[date.getDate() % slots.length], slots[(date.getDate() + 3) % slots.length]] : []

  return (
    <Card className="w-fit max-w-full">
      <CardHeader>
        <CardTitle>Book a 30 min intro call</CardTitle>
        <CardDescription>All times are in your local time zone.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 sm:flex-row">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => {
            setDate(d)
            setSlot(undefined)
          }}
          disabled={[{ before: today }, { dayOfWeek: [0, 6] }]}
          className="p-0"
        />
        <ToggleGroup
          variant="outline"
          size="sm"
          value={slot ? [slot] : []}
          onValueChange={(value) => setSlot(value[0])}
          className="grid grid-cols-2 gap-1.5 self-start sm:grid-cols-1"
        >
          {slots.map((s) => (
            <ToggleGroupItem key={s} value={s} disabled={!date || taken.includes(s)} className="w-full tabular-nums">
              {s}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={!date || !slot}>
          {date && slot ? "Confirm " + format(date, "EEE, MMM d") + " at " + slot : "Pick a day and time"}
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "AnalyticsRangePresets",
    description: "Dashboard date range calendar with a preset sidebar for common reporting windows.",
    imports: {
      [DF]: ["endOfMonth", "format", "startOfMonth", "startOfYear", "subDays", "subMonths"],
      [RDP]: ["type DateRange"],
    },
    code: `
const today = new Date()

const presets: { label: string; range: DateRange }[] = [
  { label: "Last 7 days", range: { from: subDays(today, 6), to: today } },
  { label: "Last 30 days", range: { from: subDays(today, 29), to: today } },
  { label: "This month", range: { from: startOfMonth(today), to: today } },
  {
    label: "Last month",
    range: { from: startOfMonth(subMonths(today, 1)), to: endOfMonth(subMonths(today, 1)) },
  },
  { label: "Year to date", range: { from: startOfYear(today), to: today } },
]

export default function AnalyticsRangePresets() {
  const [active, setActive] = React.useState<string | null>("Last 7 days")
  const [range, setRange] = React.useState<DateRange | undefined>(presets[0]!.range)
  const [month, setMonth] = React.useState(today)

  return (
    <Card className="w-fit max-w-full">
      <CardContent className="flex flex-col gap-3 sm:flex-row">
        <div className="flex flex-wrap gap-1 sm:w-32 sm:flex-col">
          {presets.map((p) => (
            <Button
              key={p.label}
              size="sm"
              variant={active === p.label ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => {
                setActive(p.label)
                setRange(p.range)
                setMonth(p.range.to ?? today)
              }}
            >
              {p.label}
            </Button>
          ))}
        </div>
        <Calendar
          mode="range"
          selected={range}
          onSelect={(r) => {
            setRange(r)
            setActive(null)
          }}
          month={month}
          onMonthChange={setMonth}
          disabled={{ after: today }}
          className="p-0"
        />
      </CardContent>
      <CardFooter className="justify-between gap-2">
        <span className="text-muted-foreground">
          {range?.from && range?.to ? format(range.from, "MMM d") + " - " + format(range.to, "MMM d, yyyy") : "Custom range"}
        </span>
        <Button size="sm">Apply</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "LeaveRequestBusinessDays",
    description: "Time-off request that excludes weekends from the range and validates it against the remaining balance.",
    imports: { [DF]: ["addDays", "differenceInBusinessDays"], [RDP]: ["type DateRange"] },
    code: `
const today = new Date()
const balance = 8

export default function LeaveRequestBusinessDays() {
  const [range, setRange] = React.useState<DateRange | undefined>()
  const days = range?.from && range?.to ? differenceInBusinessDays(addDays(range.to, 1), range.from) : 0
  const over = days > balance

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Request time off</CardTitle>
        <CardDescription>{balance} vacation days remaining this year.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Field>
          <FieldLabel htmlFor="leave-type">Leave type</FieldLabel>
          <NativeSelect id="leave-type" defaultValue="vacation" className="w-full">
            <NativeSelectOption value="vacation">Vacation</NativeSelectOption>
            <NativeSelectOption value="sick">Sick leave</NativeSelectOption>
            <NativeSelectOption value="parental">Parental leave</NativeSelectOption>
          </NativeSelect>
        </Field>
        <Field data-invalid={over || undefined}>
          <Calendar
            mode="range"
            selected={range}
            onSelect={setRange}
            disabled={[{ before: today }, { dayOfWeek: [0, 6] }]}
            excludeDisabled
            className="self-center p-0"
          />
          {over ? (
            <FieldError>That&apos;s {days} working days, which exceeds your balance.</FieldError>
          ) : (
            <FieldDescription>
              {days > 0 ? days + " working days requested." : "Weekends are not counted."}
            </FieldDescription>
          )}
        </Field>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={days === 0 || over}>
          Submit request
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "RecurringClassSchedule",
    description: "Weekday toggles drive a matcher that highlights every recurring class session in the month.",
    imports: { [DF]: ["eachDayOfInterval", "endOfMonth", "startOfMonth"] },
    code: `
const weekdays = [
  { value: "1", label: "M" },
  { value: "2", label: "T" },
  { value: "3", label: "W" },
  { value: "4", label: "T" },
  { value: "5", label: "F" },
  { value: "6", label: "S" },
  { value: "0", label: "S" },
]
const names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default function RecurringClassSchedule() {
  const [days, setDays] = React.useState<string[]>(["1", "3"])
  const [month, setMonth] = React.useState(() => new Date())
  const isSession = (d: Date) => days.includes(String(d.getDay()))
  const count = eachDayOfInterval({ start: startOfMonth(month), end: endOfMonth(month) }).filter(isSession).length

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle>Evening pottery class</CardTitle>
        <CardDescription>
          {days.length ? "Every " + days.map((d) => names[Number(d)]).join(", ") : "No repeat days"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <ToggleGroup multiple variant="outline" size="sm" value={days} onValueChange={(v) => setDays(v as string[])} className="w-full">
          {weekdays.map((w) => (
            <ToggleGroupItem key={w.value} value={w.value} aria-label={names[Number(w.value)]} className="flex-1">
              {w.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <Calendar
          month={month}
          onMonthChange={setMonth}
          modifiers={{ session: isSession }}
          modifiersClassNames={{ session: "[&>button]:bg-primary [&>button]:text-primary-foreground" }}
          weekStartsOn={1}
          className="p-0"
        />
      </CardContent>
      <CardFooter className="text-muted-foreground">{count} sessions this month</CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "MilestoneCountdown",
    description: "Single-date milestone picker that shows a countdown or overdue badge relative to today.",
    imports: { [DF]: ["addDays", "differenceInCalendarDays", "format"] },
    code: `
export default function MilestoneCountdown() {
  const today = React.useMemo(() => new Date(), [])
  const [date, setDate] = React.useState<undefined | Date>(() => addDays(new Date(), 12))
  const diff = date ? differenceInCalendarDays(date, today) : null

  const status =
    diff === null
      ? { label: "No date", variant: "outline" as const }
      : diff < 0
        ? { label: Math.abs(diff) + "d overdue", variant: "destructive" as const }
        : diff === 0
          ? { label: "Due today", variant: "default" as const }
          : { label: "In " + diff + " days", variant: "secondary" as const }

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle>Beta launch</CardTitle>
        <CardDescription>{date ? format(date, "EEEE, MMMM d, yyyy") : "Set a target date"}</CardDescription>
        <CardAction>
          <Badge variant={status.variant}>{status.label}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Calendar mode="single" selected={date} onSelect={setDate} defaultMonth={date} className="p-0" />
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "TimeZoneCalendar",
    description: "Calendar rendered in a chosen IANA time zone so today and selections follow that zone.",
    code: `
const zones = [
  { value: "America/Los_Angeles", label: "Los Angeles" },
  { value: "Europe/London", label: "London" },
  { value: "Asia/Tokyo", label: "Tokyo" },
  { value: "Pacific/Auckland", label: "Auckland" },
]

export default function TimeZoneCalendar() {
  const [zone, setZone] = React.useState("Asia/Tokyo")
  const [date, setDate] = React.useState<undefined | Date>()
  const [now] = React.useState(() => new Date())
  const fmt = (d: Date, opts: Intl.DateTimeFormatOptions) => d.toLocaleString("en-US", { timeZone: zone, ...opts })

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-xs font-medium">
          <GlobeIcon className="size-4 text-muted-foreground" />
          Time zone
        </span>
        <NativeSelect size="sm" value={zone} onChange={(e) => setZone(e.target.value)} aria-label="Time zone">
          {zones.map((z) => (
            <NativeSelectOption key={z.value} value={z.value}>
              {z.label}
            </NativeSelectOption>
          ))}
        </NativeSelect>
      </div>
      <Calendar
        key={zone}
        mode="single"
        timeZone={zone}
        selected={date}
        onSelect={setDate}
        className="self-center border"
      />
      <p className="text-center text-xs text-muted-foreground">
        It&apos;s {fmt(now, { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })} in{" "}
        {zones.find((z) => z.value === zone)?.label}
        {date ? " · Selected " + fmt(date, { month: "short", day: "numeric" }) : ""}
      </p>
    </div>
  )
}`,
  },
  {
    name: "TimesheetWeekPicker",
    description: "ISO week picker with week numbers where clicking any day selects the whole week.",
    imports: { [DF]: ["endOfISOWeek", "format", "getISOWeek", "startOfISOWeek"], [RDP]: ["type DateRange"] },
    code: `
function weekOf(date: Date): DateRange {
  return { from: startOfISOWeek(date), to: endOfISOWeek(date) }
}

export default function TimesheetWeekPicker() {
  const [week, setWeek] = React.useState<DateRange>(() => weekOf(new Date()))

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle>Timesheet</CardTitle>
        <CardDescription>
          Week {getISOWeek(week.from!)} · {format(week.from!, "MMM d")} - {format(week.to!, "MMM d")}
        </CardDescription>
        <CardAction>
          <Badge variant="outline">38.5 h</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="range"
          required
          ISOWeek
          showWeekNumber
          selected={week}
          onSelect={(_, day) => setWeek(weekOf(day))}
          className="p-0"
        />
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "CustomHeaderNavigation",
    description: "Calendar with built-in navigation hidden and replaced by a custom header with a Today button.",
    imports: { [DF]: ["addMonths", "format", "isSameMonth", "subMonths"] },
    code: `
export default function CustomHeaderNavigation() {
  const [today] = React.useState(() => new Date())
  const [month, setMonth] = React.useState(today)
  const [date, setDate] = React.useState<undefined | Date>(today)

  return (
    <div className="w-fit border">
      <div className="flex items-center gap-1 border-b p-2">
        <span className="flex-1 ps-1 text-sm font-medium">{format(month, "MMMM yyyy")}</span>
        <Button
          variant="outline"
          size="sm"
          disabled={isSameMonth(month, today)}
          onClick={() => {
            setMonth(today)
            setDate(today)
          }}
        >
          Today
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Previous month" onClick={() => setMonth(subMonths(month, 1))}>
          <ChevronLeftIcon />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Next month" onClick={() => setMonth(addMonths(month, 1))}>
          <ChevronRightIcon />
        </Button>
      </div>
      <Calendar
        mode="single"
        hideNavigation
        month={month}
        onMonthChange={setMonth}
        selected={date}
        onSelect={setDate}
        classNames={{ month_caption: "hidden" }}
      />
    </div>
  )
}`,
  },
  {
    name: "BookingsPausedToggle",
    description: "Switch that disables every day in the calendar while bookings are paused.",
    code: `
export default function BookingsPausedToggle() {
  const [paused, setPaused] = React.useState(true)
  const [date, setDate] = React.useState<undefined | Date>()

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle>Public booking page</CardTitle>
        <CardDescription>{paused ? "Guests can't pick a date right now." : "Accepting new bookings."}</CardDescription>
        <CardAction>
          <Switch checked={!paused} onCheckedChange={(on) => setPaused(!on)} aria-label="Accept bookings" />
        </CardAction>
      </CardHeader>
      <CardContent className="relative">
        <Calendar mode="single" selected={date} onSelect={setDate} disabled={paused} className="p-0" />
        {paused ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Badge variant="secondary" className="gap-1">
              <PauseIcon className="size-3" />
              Bookings paused
            </Badge>
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "LoadingAvailability",
    description: "Calendar that shows a spinner and disables days while a month's availability loads.",
    code: `
function isBooked(d: Date) {
  return (d.getDate() * 3 + d.getMonth()) % 4 === 0
}

export default function LoadingAvailability() {
  const [loading, setLoading] = React.useState(false)
  const [date, setDate] = React.useState<undefined | Date>()
  const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined)

  React.useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <div className="relative w-fit border">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        onMonthChange={() => {
          setLoading(true)
          clearTimeout(timer.current)
          timer.current = setTimeout(() => setLoading(false), 900)
        }}
        disabled={loading ? true : isBooked}
        aria-busy={loading}
      />
      {loading ? (
        <div className="absolute inset-x-0 bottom-0 top-10 flex items-center justify-center gap-2 bg-background/70 text-xs text-muted-foreground">
          <Spinner />
          Checking availability...
        </div>
      ) : null}
    </div>
  )
}`,
  },
  {
    name: "FullyBookedMonth",
    description: "Empty state below a fully booked month that jumps to the next month with openings.",
    imports: { [DF]: ["addMonths", "isSameMonth"] },
    code: `
export default function FullyBookedMonth() {
  const [today] = React.useState(() => new Date())
  const [month, setMonth] = React.useState(today)
  const [date, setDate] = React.useState<undefined | Date>()
  const soldOut = isSameMonth(month, today)

  return (
    <div className="flex w-full max-w-xs flex-col border">
      <Calendar
        mode="single"
        month={month}
        onMonthChange={setMonth}
        selected={date}
        onSelect={setDate}
        disabled={[(d) => isSameMonth(d, today), { before: today }]}
        className="self-center"
      />
      {soldOut ? (
        <Empty className="border-t p-4">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <CalendarX2Icon />
            </EmptyMedia>
            <EmptyTitle>Fully booked this month</EmptyTitle>
            <EmptyDescription>Openings start next month.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm" onClick={() => setMonth(addMonths(today, 1))}>
              Show next month
            </Button>
          </EmptyContent>
        </Empty>
      ) : null}
    </div>
  )
}`,
  },
  {
    name: "StartDateValidation",
    description: "Field with a calendar that shows an inline error when the chosen start date breaks the rules.",
    imports: { [DF]: ["addDays", "format", "isBefore", "isWeekend", "startOfDay"] },
    code: `
export default function StartDateValidation() {
  const [minDate] = React.useState(() => addDays(startOfDay(new Date()), 3))
  const [date, setDate] = React.useState<undefined | Date>(() => addDays(new Date(), 1))

  const error = !date
    ? "Choose a start date."
    : isBefore(date, minDate)
      ? "Contracts need at least 3 days' notice."
      : isWeekend(date)
        ? "Start dates must fall on a weekday."
        : null

  return (
    <Field data-invalid={error ? true : undefined} className="w-fit">
      <FieldLabel>Contract start date</FieldLabel>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        aria-invalid={error ? true : undefined}
        className={cn("border", error && "border-destructive")}
      />
      {error ? (
        <FieldError>{error}</FieldError>
      ) : (
        <FieldDescription>Starts {format(date!, "EEEE, MMMM d")}.</FieldDescription>
      )}
    </Field>
  )
}`,
  },
  {
    name: "OutOfOfficeSettings",
    description: "Settings card where a switch enables a range calendar and auto-reply for out-of-office.",
    imports: { [DF]: ["format"], [RDP]: ["type DateRange"] },
    code: `
export default function OutOfOfficeSettings() {
  const [enabled, setEnabled] = React.useState(false)
  const [range, setRange] = React.useState<DateRange | undefined>()

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Out of office</CardTitle>
        <CardDescription>
          {enabled && range?.from && range?.to
            ? "Away " + format(range.from, "MMM d") + " - " + format(range.to, "MMM d")
            : "Let teammates know when you're away."}
        </CardDescription>
        <CardAction>
          <Switch checked={enabled} onCheckedChange={setEnabled} aria-label="Enable out of office" />
        </CardAction>
      </CardHeader>
      <CardContent className={cn("flex flex-col gap-3 transition-opacity", !enabled && "opacity-50")}>
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          disabled={!enabled}
          className="self-center p-0"
        />
        <Textarea
          disabled={!enabled}
          placeholder="I'm away with limited access to email. For urgent issues contact Jonah Reyes."
          className="min-h-16 text-xs"
        />
      </CardContent>
      <CardFooter className="justify-end">
        <Button size="sm" disabled={!enabled || !range?.to}>
          Save
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "BillingAnchorDay",
    description: "Billing settings calendar locked to one month that only allows days 1 to 28 as the renewal day.",
    imports: { [DF]: ["addMonths", "format", "setDate"] },
    code: `
function ordinal(n: number) {
  const s = ["th", "st", "nd", "rd"]
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || "th")
}

export default function BillingAnchorDay() {
  const [month] = React.useState(() => new Date())
  const [day, setDay] = React.useState(() => setDate(new Date(), 1))
  const next = setDate(addMonths(month, 1), day.getDate())

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle>Billing date</CardTitle>
        <CardDescription>Renew on the {ordinal(day.getDate())} of every month.</CardDescription>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          required
          month={month}
          disableNavigation
          showOutsideDays={false}
          selected={day}
          onSelect={setDay}
          disabled={(d) => d.getDate() > 28}
          formatters={{ formatCaption: () => "Day of month" }}
          className="p-0"
        />
      </CardContent>
      <CardFooter className="justify-between gap-3">
        <span className="text-muted-foreground">Next charge {format(next, "MMM d, yyyy")}</span>
        <Button size="sm">Update</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: "WeekdayFormatOptions",
    description: "Formatters customize weekday headers and the caption, switchable between narrow, short and long styles.",
    imports: { [DF]: ["format"] },
    code: `
const styles = {
  narrow: { weekday: "EEEEE", caption: "MMM ''yy" },
  short: { weekday: "EEEEEE", caption: "MMMM yyyy" },
  long: { weekday: "EEE", caption: "MMMM, yyyy" },
} as const;

type Style = keyof typeof styles

export default function WeekdayFormatOptions() {
  const [style, setStyle] = React.useState<Style>("narrow")
  const current = styles[style]

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3">
      <ToggleGroup
        variant="outline"
        size="sm"
        value={[style]}
        onValueChange={(v) => {
          if (v[0]) setStyle(v[0] as Style)
        }}
      >
        <ToggleGroupItem value="narrow">M</ToggleGroupItem>
        <ToggleGroupItem value="short">Mo</ToggleGroupItem>
        <ToggleGroupItem value="long">Mon</ToggleGroupItem>
      </ToggleGroup>
      <Calendar
        mode="single"
        formatters={{
          formatWeekdayName: (d) => format(d, current.weekday),
          formatCaption: (m) => format(m, current.caption),
        }}
        className="border"
      />
    </div>
  )
}`,
  },
  {
    name: "RangeWithDateInputs",
    description: "Start and end date inputs kept in sync with a range calendar in both directions.",
    imports: { [DF]: ["addDays", "format", "isValid", "parseISO"], [RDP]: ["type DateRange"] },
    code: `
const toInput = (d?: Date) => (d ? format(d, "yyyy-MM-dd") : "")

export default function RangeWithDateInputs() {
  const [range, setRange] = React.useState<DateRange | undefined>(() => {
    const from = new Date()
    return { from, to: addDays(from, 5) }
  })
  const [month, setMonth] = React.useState<undefined | Date>(range?.from)

  const update = (key: "from" | "to", value: string) => {
    const parsed = parseISO(value)
    if (!isValid(parsed)) return
    setRange((prev) => ({ from: prev?.from, to: prev?.to, [key]: parsed }) as DateRange)
    setMonth(parsed)
  }

  return (
    <div className="flex w-fit max-w-full flex-col gap-3 border p-3">
      <div className="grid grid-cols-2 gap-2">
        <Field>
          <FieldLabel htmlFor="range-start">Start</FieldLabel>
          <Input id="range-start" type="date" value={toInput(range?.from)} onChange={(e) => update("from", e.target.value)} />
        </Field>
        <Field>
          <FieldLabel htmlFor="range-end">End</FieldLabel>
          <Input id="range-end" type="date" value={toInput(range?.to)} onChange={(e) => update("to", e.target.value)} />
        </Field>
      </div>
      <Calendar mode="range" selected={range} onSelect={setRange} month={month} onMonthChange={setMonth} className="p-0" />
    </div>
  )
}`,
  },
  {
    name: "TypedDateInput",
    description: "Free-text date input that parses what you type, with an input-group button opening the calendar.",
    imports: { [DF]: ["format", "isValid"] },
    code: `
export default function TypedDateInput() {
  const [date, setDate] = React.useState<undefined | Date>(() => new Date())
  const [text, setText] = React.useState(() => format(new Date(), "MMM d, yyyy"))
  const [month, setMonth] = React.useState<undefined | Date>(date)
  const [open, setOpen] = React.useState(false)
  const invalid = text.length > 0 && !isValid(new Date(text))

  return (
    <Field data-invalid={invalid || undefined} className="w-full max-w-60">
      <FieldLabel htmlFor="typed-date">Follow-up date</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="typed-date"
          value={text}
          placeholder="e.g. Dec 3, 2026"
          aria-invalid={invalid || undefined}
          onChange={(e) => {
            setText(e.target.value)
            const parsed = new Date(e.target.value)
            if (isValid(parsed)) {
              setDate(parsed)
              setMonth(parsed)
            }
          }}
        />
        <InputGroupAddon align="inline-end">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger render={<InputGroupButton size="icon-xs" aria-label="Open calendar" />}>
              <CalendarIcon />
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={date}
                month={month}
                onMonthChange={setMonth}
                onSelect={(d) => {
                  setDate(d)
                  setText(d ? format(d, "MMM d, yyyy") : "")
                  setOpen(false)
                }}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
      {invalid ? <FieldError>We couldn&apos;t read that date.</FieldError> : <FieldDescription>Type a date or pick one.</FieldDescription>}
    </Field>
  )
}`,
  },
  {
    name: "ShiftRotaCalendar",
    description: "Nurse shift rota with custom day buttons labelling a repeating day, night and off pattern.",
    imports: { [DF]: ["differenceInCalendarDays"] },
    code: `
const rotation = ["D", "D", "N", "N", "-", "-", "-", "-"]
const anchor = new Date(2026, 0, 1)

const shiftStyles: Record<string, string> = {
  D: "text-sky-600 dark:text-sky-400",
  N: "text-violet-600 dark:text-violet-400",
  "-": "text-muted-foreground",
}

function shiftFor(date: Date) {
  const i = ((differenceInCalendarDays(date, anchor) % rotation.length) + rotation.length) % rotation.length
  return rotation[i]!
}

function ShiftDayButton({ children, day, modifiers, ...props }: React.ComponentProps<typeof CalendarDayButton>) {
  const shift = shiftFor(day.date)
  return (
    <CalendarDayButton day={day} modifiers={modifiers} {...props}>
      {children}
      {!modifiers.outside ? (
        <span className={cn("text-[10px] font-semibold", !modifiers.selected && shiftStyles[shift])}>
          {shift === "-" ? "off" : shift}
        </span>
      ) : null}
    </CalendarDayButton>
  )
}

export default function ShiftRotaCalendar() {
  const [date, setDate] = React.useState<undefined | Date>()

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle>Ward 4 · Team C rota</CardTitle>
        <CardDescription>2 days, 2 nights, 4 off.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          components={{ DayButton: ShiftDayButton }}
          className="p-0 [--cell-size:--spacing(9)]"
        />
        <div className="flex gap-4 text-xs">
          <span className="flex items-center gap-1.5"><SunIcon className="size-3.5 text-sky-500" /> Day 07-19</span>
          <span className="flex items-center gap-1.5"><MoonIcon className="size-3.5 text-violet-500" /> Night 19-07</span>
        </div>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "BroadcastMonthCalendar",
    description: "Media-planning calendar using broadcast months, Monday starts and broadcast week numbers.",
    code: `
export default function BroadcastMonthCalendar() {
  const [date, setDate] = React.useState<undefined | Date>()

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TvIcon className="size-4 text-muted-foreground" />
          Campaign flight
        </CardTitle>
        <CardDescription>Broadcast months always start on a Monday.</CardDescription>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          broadcastCalendar
          showWeekNumber
          selected={date}
          onSelect={setDate}
          className="p-0"
        />
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: "TaskDueDatePopover",
    description: "Task due-date popover combining quick picks like Tomorrow and Next week with a calendar.",
    imports: { [DF]: ["addDays", "format", "isBefore", "nextMonday", "startOfDay"] },
    code: `
export default function TaskDueDatePopover() {
  const [today] = React.useState(() => startOfDay(new Date()))
  const [due, setDue] = React.useState<undefined | Date>()
  const [open, setOpen] = React.useState(false)

  const quick = [
    { label: "Today", icon: SunIcon, date: today },
    { label: "Tomorrow", icon: SunriseIcon, date: addDays(today, 1) },
    { label: "Next week", icon: CalendarArrowUpIcon, date: nextMonday(today) },
  ]

  const pick = (d: Date | undefined) => {
    setDue(d)
    setOpen(false)
  }

  const overdue = due && isBefore(due, today)

  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-3 border p-3">
      <div className="flex min-w-0 items-center gap-2">
        <Checkbox aria-label="Complete task" />
        <span className="truncate text-sm">Send revised quote to Halcyon Labs</span>
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button variant="outline" size="sm" className={cn("shrink-0 font-normal", overdue && "text-destructive")} />
          }
        >
          <CalendarClockIcon data-icon="inline-start" />
          {due ? format(due, "MMM d") : "Due date"}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <div className="grid border-b p-1">
            {quick.map((q) => (
              <Button key={q.label} variant="ghost" size="sm" className="justify-start" onClick={() => pick(q.date)}>
                <q.icon data-icon="inline-start" />
                {q.label}
                <span className="ms-auto text-muted-foreground">{format(q.date, "EEE")}</span>
              </Button>
            ))}
            <Button variant="ghost" size="sm" className="justify-start text-muted-foreground" onClick={() => pick(undefined)}>
              <BanIcon data-icon="inline-start" />
              No date
            </Button>
          </div>
          <Calendar mode="single" selected={due} onSelect={pick} defaultMonth={due} />
        </PopoverContent>
      </Popover>
    </div>
  )
}`,
  },
  {
    name: "MoodTrackerCalendar",
    description: "Journal calendar with a mood icon in each past day and the selected day's entry below.",
    imports: { [DF]: ["format", "isAfter", "startOfDay"] },
    code: `
const moods = [
  { icon: LaughIcon, label: "Great", tone: "text-emerald-500" },
  { icon: SmileIcon, label: "Good", tone: "text-sky-500" },
  { icon: MehIcon, label: "Okay", tone: "text-amber-500" },
  { icon: FrownIcon, label: "Low", tone: "text-rose-500" },
]
const today = startOfDay(new Date())

function moodFor(date: Date) {
  if (isAfter(date, today)) return null
  return moods[(date.getDate() * 5 + date.getMonth()) % moods.length]!
}

function MoodDayButton({ children, day, modifiers, ...props }: React.ComponentProps<typeof CalendarDayButton>) {
  const mood = modifiers.outside ? null : moodFor(day.date)
  return (
    <CalendarDayButton day={day} modifiers={modifiers} {...props}>
      {children}
      {mood ? <mood.icon className={cn("size-3 opacity-100!", !modifiers.selected && mood.tone)} /> : null}
    </CalendarDayButton>
  )
}

export default function MoodTrackerCalendar() {
  const [date, setDate] = React.useState(today)
  const mood = moodFor(date)

  return (
    <Card className="w-fit">
      <CardContent className="flex flex-col gap-3">
        <Calendar
          mode="single"
          required
          selected={date}
          onSelect={setDate}
          disabled={{ after: today }}
          components={{ DayButton: MoodDayButton }}
          className="p-0 [--cell-size:--spacing(9)]"
        />
        <div className="flex items-center gap-3 border-t pt-3">
          {mood ? <mood.icon className={cn("size-5", mood.tone)} /> : null}
          <div className="grid">
            <span className="text-xs font-medium">
              {format(date, "EEEE, MMM d")} · {mood?.label}
            </span>
            <span className="text-xs text-muted-foreground">Slept well, long walk by the river after work.</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}`,
  },
]

export default examples
