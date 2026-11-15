import { Mail, Phone } from "lucide-react"

const people = [
  {
    name: "Marta Okonkwo",
    role: "New business",
    region: "North America",
    email: "marta@brightfold.agency",
    phone: "+1 (312) 555-0118",
    hue: "from-amber-300 to-orange-500",
  },
  {
    name: "Jonas Lindqvist",
    role: "Partnerships",
    region: "Europe",
    email: "jonas@brightfold.agency",
    phone: "+46 8 555 012 40",
    hue: "from-sky-300 to-indigo-500",
  },
  {
    name: "Aiko Tanabe",
    role: "Client services",
    region: "Asia Pacific",
    email: "aiko@brightfold.agency",
    phone: "+81 3 5550 1294",
    hue: "from-emerald-300 to-teal-600",
  },
  {
    name: "Rafael Duarte",
    role: "Careers & talent",
    region: "Global",
    email: "rafael@brightfold.agency",
    phone: "+351 21 555 0173",
    hue: "from-rose-300 to-fuchsia-600",
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
            Every enquiry goes straight to one of four people. Pick the one
            closest to what you need.
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
                  href="#"
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
