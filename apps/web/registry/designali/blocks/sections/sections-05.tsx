const team = [
  { name: "Ali Imam", role: "Founder, Design Engineer", location: "Design & Code" },
  { name: "Sara", role: "Brand Designer", location: "Brand identity" },
  { name: "Omar", role: "UI/UX Designer", location: "Product design" },
  { name: "Lena", role: "Frontend Developer", location: "Next.js" },
  { name: "Ravi", role: "Design Systems", location: "Components" },
  { name: "Maya", role: "Motion Designer", location: "CGI, 3D & motion" },
  { name: "Noor", role: "Illustrator", location: "@designali/vectors" },
  { name: "Sam", role: "Producer", location: "AI workflows" },
]

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)

export default function Sections05() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 border-b border-border pb-10 md:grid-cols-2">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            The people behind designali
          </h2>
          <p className="self-end text-sm leading-6 text-muted-foreground md:justify-self-end md:text-right">
            Led by Ali Imam, a studio of designers and developers.
            <br />
            Want to work with us?{" "}
            <a
              href="mailto:hello@designali.com"
              className="text-foreground underline underline-offset-4"
            >
              hello@designali.com
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
              <p className="mt-3 font-sans text-[10px] tracking-wider text-muted-foreground uppercase">
                {member.location}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
