import {
  Mail,
  Phone,
} from "@designali/icons"

const people = [
  {
    name: "Ali Imam",
    role: "New projects",
    region: "Founder, Designali",
    email: "ali@designali.com",
    phone: "Book a call",
    hue: "from-chart-1 to-primary",
  },
  {
    name: "Designali Studio",
    role: "Partnerships",
    region: "Agencies & studios",
    email: "hello@designali.com",
    phone: "Book a call",
    hue: "from-chart-1 to-primary",
  },
  {
    name: "Designali Support",
    role: "Templates & blocks",
    region: "All customers",
    email: "support@designali.com",
    phone: "Read the docs",
    hue: "from-chart-1 to-chart-2",
  },
  {
    name: "Designali Billing",
    role: "Orders & licenses",
    region: "All customers",
    email: "billing@designali.com",
    phone: "View pricing",
    hue: "from-chart-1 to-chart-2",
  },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
}

export default function Contact09() {
  return (
    <section className="w-full bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 border-b border-background/15 pb-12 md:grid-cols-2 md:items-end">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Skip the inbox. Talk to a human.
          </h2>
          <p className="text-background/70 md:justify-self-end md:text-end">
            Every enquiry goes straight to Ali Imam or the Designali studio.
            Pick the desk closest to what you need.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
          {people.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-8 border-b border-background/15 py-10 sm:px-6 sm:[&:nth-child(odd)]:border-e lg:border-b-0 lg:not-last:border-e lg:first:ps-0"
            >
              <div className="flex items-center gap-4">
                <span
                  className={`flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${person.hue} text-lg font-semibold text-black/80`}
                >
                  {initials(person.name)}
                </span>
                <div>
                  <p className="font-medium">{person.name}</p>
                  <p className="text-sm text-background/60">{person.role}</p>
                </div>
              </div>
              <p className="text-xs tracking-widest text-background/50 uppercase">
                {person.region}
              </p>
              <div className="mt-auto space-y-2 text-sm">
                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-2 break-all text-background/80 hover:text-background"
                >
                  <Mail className="size-4 shrink-0" />
                  {person.email}
                </a>
                <a
                  href="https://cal.com/aliimam/30min"
                  className="flex items-center gap-2 text-background/80 hover:text-background"
                >
                  <Phone className="size-4 shrink-0" />
                  {person.phone}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
