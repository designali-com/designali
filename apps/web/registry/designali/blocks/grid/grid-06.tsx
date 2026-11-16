import { DotPattern } from "@/registry/designali/ui/dot-pattern"

const team = [
  { name: "Ali Imam", role: "Founder & Design Engineer", city: "Studio", bio: "Designs and codes every Designali product. Design se code tak." },
  { name: "Sara", role: "Brand Designer", city: "Brand", bio: "Logos, type and colour systems for Designali client projects." },
  { name: "Rohan", role: "UI/UX Designer", city: "Product", bio: "Turns briefs into intuitive interfaces and clickable prototypes in Figma." },
  { name: "Mei", role: "Frontend Developer", city: "Web", bio: "Ships Next.js and Tailwind CSS builds with clean, typed components." },
  { name: "Omar", role: "Motion Designer", city: "CGI", bio: "CGI, 3D and motion for brand launches and landing page heroes." },
  { name: "Lina", role: "Design Systems", city: "Systems", bio: "Keeps tokens, components and Figma libraries in sync across 460+ blocks." },
  { name: "Dev", role: "Client Success", city: "Clients", bio: "First point of contact for Designali clients at hello@designali.com." },
  { name: "Noor", role: "Content Designer", city: "Blogs", bio: "Writes the docs and the Designali blog, and answers support emails." },
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
            <p className="text-xs tracking-widest text-muted-foreground uppercase">The Designali team</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Small studio, design se code tak.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground md:justify-self-end">
            Founded by Ali Imam, Designali is a small studio of designers and
            developers. Hover a card to meet the people behind the work.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <li key={person.name} className="group relative overflow-hidden bg-background">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-muted">
                {person.name === "Ali Imam" ? (
                  <img
                    src="/ali.jpg"
                    alt="Ali Imam"
                    className="absolute inset-0 size-full object-cover"
                  />
                ) : (
                  <>
                    <DotPattern className="text-muted-foreground/60 [mask-image:radial-gradient(circle_at_center,white,transparent_75%)]" />
                    <span className="relative text-5xl font-semibold tracking-tight text-foreground/80">
                      {initials(person.name)}
                    </span>
                  </>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-medium">{person.name}</h3>
                  <span className="font-sans text-[10px] text-muted-foreground uppercase">
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
