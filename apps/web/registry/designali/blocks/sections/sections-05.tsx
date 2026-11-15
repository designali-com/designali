const team = [
  { name: "Amara Osei", role: "Founder, Creative Director", location: "London" },
  { name: "Tomás Ibarra", role: "Design Director", location: "Mexico City" },
  { name: "Hana Sato", role: "Head of Product Design", location: "Tokyo" },
  { name: "Elias Berg", role: "Lead Engineer", location: "Stockholm" },
  { name: "Priya Raman", role: "Brand Strategist", location: "Bangalore" },
  { name: "Noah Clarke", role: "Motion Designer", location: "Melbourne" },
  { name: "Sofia Moretti", role: "Type Designer", location: "Milan" },
  { name: "Kwame Asante", role: "Producer", location: "Accra" },
]

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")

export default function Sections05() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 border-b border-border pb-10 md:grid-cols-2">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            The people behind the work
          </h2>
          <p className="self-end text-sm leading-6 text-muted-foreground md:justify-self-end md:text-right">
            A distributed team of 8 across 8 cities.
            <br />
            We are hiring a senior product designer.{" "}
            <a href="#" className="text-foreground underline underline-offset-4">
              See the role
            </a>
          </p>
        </div>

        <ul className="grid grid-cols-2 border-l border-border md:grid-cols-4">
          {team.map((member) => (
            <li
              key={member.name}
              className="group border-r border-b border-border p-6"
            >
              <div className="flex aspect-square items-center justify-center bg-muted text-3xl font-medium tracking-tight text-muted-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                {initials(member.name)}
              </div>
              <p className="mt-4 text-sm font-medium">{member.name}</p>
              <p className="text-xs text-muted-foreground">{member.role}</p>
              <p className="mt-3 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                {member.location}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
