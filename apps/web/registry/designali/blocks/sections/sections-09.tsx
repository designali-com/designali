import { Plus } from "lucide-react"

const leaders = [
  {
    name: "Ingrid Solberg",
    role: "Chief Executive Officer",
    since: "Co-founder, 2018",
    tone: "from-sky-400 to-indigo-500",
    bio: "Previously ran payments infrastructure at a Nordic neobank, where she scaled settlement from 2 to 31 countries. Studied applied mathematics in Trondheim.",
  },
  {
    name: "Marcus Adeyemi",
    role: "Chief Technology Officer",
    since: "Co-founder, 2018",
    tone: "from-emerald-400 to-teal-600",
    bio: "Wrote the first version of our ledger in a weekend. Before that, a decade building trading systems and one failed hardware startup he still talks about.",
  },
  {
    name: "Yuki Tanabe",
    role: "VP Product",
    since: "Joined 2020",
    tone: "from-rose-400 to-orange-400",
    bio: "Leads a product org of 40 across four time zones. Obsessed with onboarding funnels and allergic to roadmaps longer than one quarter.",
  },
  {
    name: "Carolina Reyes",
    role: "VP People",
    since: "Joined 2021",
    tone: "from-violet-400 to-fuchsia-500",
    bio: "Built our four-day-week pilot and the levelling framework every engineer now uses. Former labour economist.",
  },
  {
    name: "Owen Gallagher",
    role: "Chief Financial Officer",
    since: "Joined 2023",
    tone: "from-amber-400 to-yellow-600",
    bio: "Took two fintechs through audits and one through an IPO. Runs the monthly all-hands finance review in plain English.",
  },
]

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")

export default function Sections09() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Leadership</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            The team accountable for Fjordpay.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-6 text-muted-foreground">
            Every leader still ships something each quarter, whether it is
            code, a policy or a customer call recap.
          </p>
        </div>

        <ul className="border-t border-border">
          {leaders.map((leader) => (
            <li key={leader.name} className="border-b border-border">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <span
                    className={`flex size-12 shrink-0 items-center justify-center bg-gradient-to-br text-sm font-semibold text-white ${leader.tone}`}
                  >
                    {initials(leader.name)}
                  </span>
                  <span className="grid min-w-0 flex-1 gap-0.5 sm:grid-cols-2 sm:items-center sm:gap-6">
                    <span className="truncate text-base font-medium">{leader.name}</span>
                    <span className="truncate text-sm text-muted-foreground">{leader.role}</span>
                  </span>
                  <span className="hidden font-mono text-xs text-muted-foreground md:block">{leader.since}</span>
                  <Plus className="size-4 shrink-0 transition-transform group-open:rotate-45" />
                </summary>
                <p className="max-w-2xl pb-6 text-sm leading-7 text-muted-foreground sm:pl-16">
                  {leader.bio}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
