import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    client: "Northwind Coffee",
    title: "A retail identity built around the roast",
    services: ["Brand identity", "Packaging"],
    year: "2026",
    gradient: "from-amber-900/80 via-amber-700/50 to-orange-300/40",
  },
  {
    client: "Lumen Health",
    title: "Patient app redesign for 2M monthly users",
    services: ["Product design", "Research"],
    year: "2026",
    gradient: "from-sky-900/80 via-sky-600/50 to-cyan-200/40",
  },
  {
    client: "Atlas Mobility",
    title: "Fleet dashboard for electric delivery vans",
    services: ["UX", "Data visualization"],
    year: "2025",
    gradient: "from-emerald-900/80 via-emerald-600/50 to-lime-200/40",
  },
  {
    client: "Folio Press",
    title: "Editorial platform for independent publishers",
    services: ["Web design", "Development"],
    year: "2025",
    gradient: "from-rose-900/80 via-rose-600/50 to-pink-200/40",
  },
]

export default function Portfolio01() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
            Selected work
          </h2>
          <p className="text-muted-foreground md:text-right">
            Brand, product, and digital work for teams who care about the details.
            <br className="hidden md:block" /> 2023 – present.
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
          {projects.map((project, i) => (
            <a
              key={project.client}
              href="#"
              className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-border bg-muted">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`}
                />
                <span className="absolute right-4 bottom-4 flex size-10 items-center justify-center bg-background opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">{project.client}</p>
                  <h3 className="mt-1 text-xl font-medium">{project.title}</h3>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span key={service} className="border border-border px-2 py-0.5 text-xs text-muted-foreground">
                    {service}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
