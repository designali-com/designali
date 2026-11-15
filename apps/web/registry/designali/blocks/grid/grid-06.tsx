const team = [
  { name: "Amara Osei", role: "Founder & CEO", city: "Accra", hue: 25, bio: "Previously led product at two design-tool startups. Writes the Friday memo." },
  { name: "Tomás Ibarra", role: "Head of Engineering", city: "Madrid", hue: 200, bio: "Rendering nerd. Rebuilt our canvas engine twice and would do it again." },
  { name: "Hana Sato", role: "Design Lead", city: "Tokyo", hue: 330, bio: "Runs crits, owns the type system, keeps a sketchbook for every release." },
  { name: "Noah Clarke", role: "Staff Engineer", city: "Toronto", hue: 150, bio: "Collaboration and sync. Can explain CRDTs with a deck of cards." },
  { name: "Priya Raman", role: "Product Manager", city: "Bengaluru", hue: 270, bio: "Turns 400 customer calls a year into a roadmap people actually read." },
  { name: "Lukas Weber", role: "Brand Designer", city: "Berlin", hue: 60, bio: "Illustration, motion and the occasional very long email about kerning." },
  { name: "Zara Malik", role: "Customer Success", city: "London", hue: 0, bio: "First call for our largest teams. Knows every workspace by name." },
  { name: "Mateo Rossi", role: "Developer Advocate", city: "Milan", hue: 100, bio: "Writes the docs, records the videos, answers the forum at 2am." },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
}

export default function Grid06() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">The team</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Small team, eight time zones.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground md:justify-self-end">
            We are a fully remote crew of designers and engineers. Hover a card
            to meet the people behind the product.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <li key={person.name} className="group relative overflow-hidden bg-background">
              <div
                className="flex aspect-[4/3] items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, oklch(0.75 0.12 ${person.hue}), oklch(0.45 0.14 ${person.hue + 40}))`,
                }}
              >
                <span className="text-5xl font-semibold tracking-tight text-white/90">
                  {initials(person.name)}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-medium">{person.name}</h3>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase">
                    {person.city}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-foreground p-5 text-background transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-xs tracking-widest uppercase opacity-60">{person.role}</p>
                <p className="mt-2 text-sm leading-6">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
