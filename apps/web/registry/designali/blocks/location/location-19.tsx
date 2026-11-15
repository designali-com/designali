import { Accessibility, Bike, Bus, Car, MapPin, Plane } from "lucide-react"

const cards = [
  {
    icon: Car,
    title: "Parking",
    body: "620 spaces in the West Deck. First 30 minutes free, then £2 per hour. 24 EV chargers on level 1.",
    className: "md:col-span-2",
  },
  {
    icon: Bus,
    title: "Bus & tram",
    body: "Tram line T2 stops at Science Park North. Buses 14 and X7 every 10 minutes.",
  },
  {
    icon: Bike,
    title: "Cycling",
    body: "Covered racks for 300 bikes, showers and lockers in Building C.",
  },
  {
    icon: Plane,
    title: "From the airport",
    body: "35 minutes by taxi or the A1 airport express to Central, then tram T2.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    body: "Step-free throughout. Blue badge bays at every entrance and hearing loops in all halls.",
    className: "md:col-span-2",
  },
]

function CampusMap() {
  return (
    <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full" aria-hidden>
      <rect width="300" height="300" className="fill-indigo-50 dark:fill-indigo-950/40" />
      <path d="M0 210 C 80 190, 120 240, 300 200" className="fill-none stroke-background" strokeWidth="16" />
      <path d="M90 0 L110 300" className="stroke-background" strokeWidth="10" />
      <path d="M0 80 L300 70" className="stroke-indigo-300 dark:stroke-indigo-700" strokeWidth="3" strokeDasharray="8 5" />
      <rect x="140" y="100" width="70" height="50" className="fill-indigo-500" />
      <rect x="220" y="110" width="50" height="40" className="fill-indigo-300 dark:fill-indigo-700" />
      <rect x="150" y="160" width="40" height="30" className="fill-indigo-300 dark:fill-indigo-700" />
      <rect x="20" y="110" width="56" height="60" className="fill-background/80 stroke-indigo-300 dark:stroke-indigo-700" strokeDasharray="3 3" />
      <text x="48" y="144" textAnchor="middle" className="fill-indigo-500 text-[16px] font-bold dark:fill-indigo-300">P</text>
      <circle cx="104" cy="74" r="6" className="fill-background stroke-indigo-500" strokeWidth="3" />
    </svg>
  )
}

export default function Location19() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Visitor information
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Getting to Meridian Science Park
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-4 md:grid-rows-[auto_auto_auto]">
          <div className="relative min-h-80 overflow-hidden border md:col-span-2 md:row-span-2">
            <CampusMap />
            <div className="absolute inset-x-4 bottom-4 flex items-start gap-3 border bg-background p-4">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <div className="text-sm">
                <p className="font-medium">Main reception, Building A</p>
                <p className="text-muted-foreground">1 Meridian Way, Cambridge CB4 0WS</p>
              </div>
            </div>
          </div>
          {cards.map((card) => (
            <div key={card.title} className={`flex flex-col gap-4 border bg-card p-6 ${card.className ?? ""}`}>
              <card.icon className="size-5" />
              <div>
                <p className="font-medium">{card.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
