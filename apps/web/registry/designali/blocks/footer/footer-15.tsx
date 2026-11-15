import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"

const offices = [
  {
    city: "New York",
    zone: "EST, UTC-5",
    address: ["88 Greenwich Street, 14th Floor", "New York, NY 10006"],
    phone: "+1 212 555 0198",
    tone: "from-chart-1/30",
  },
  {
    city: "London",
    zone: "GMT, UTC+0",
    address: ["4 Bream's Buildings", "London EC4A 1HP"],
    phone: "+44 20 7946 0321",
    tone: "from-chart-2/30",
  },
  {
    city: "Singapore",
    zone: "SGT, UTC+8",
    address: ["1 Raffles Place, Tower 2, #19-61", "Singapore 048616"],
    phone: "+65 6555 0174",
    tone: "from-chart-4/30",
  },
]

const legal = ["Privacy", "Terms of engagement", "Regulatory disclosures", "Cookie settings"]

export default function Footer15() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight">Halberd Partners</p>
            <p className="mt-2 max-w-md text-2xl font-medium tracking-tight md:text-3xl">
              Advisory for founders raising Series B and beyond.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm hover:underline">
            <Mail className="size-4" />
            mandates@halberd.partners
          </a>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {offices.map((office) => (
            <a
              key={office.city}
              href="#"
              className={`group flex flex-col justify-between border bg-gradient-to-br to-transparent p-6 transition-colors hover:border-foreground/40 ${office.tone}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-lg font-medium">{office.city}</p>
                  <p className="text-xs text-muted-foreground">{office.zone}</p>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="mt-10 space-y-2 text-sm text-muted-foreground">
                <p className="flex gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0" />
                  <span>
                    {office.address[0]}
                    <br />
                    {office.address[1]}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="size-4 shrink-0" />
                  {office.phone}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t pt-6 text-xs text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
          <p>
            © 2026 Halberd Partners LLP. Authorised and regulated as an
            investment adviser in each jurisdiction we operate in.
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {legal.map((item) => (
              <a key={item} href="#" className="hover:text-foreground">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
