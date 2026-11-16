import {
  ArrowUpRight,
} from "@designali/icons"

const projects = [
  {
    client: "Dalim Agency",
    title: "An agency site where design meets production-ready code",
    services: ["Brand identity", "Web design"],
    year: "Case study",
    image: "/images/templates/dalim-agency-old.jpg",
  },
  {
    client: "Dalim UI",
    title: "A component library for designers who code",
    services: ["UI/UX", "Design system"],
    year: "Case study",
    image: "/images/templates/dalim-ui-old.jpg",
  },
  {
    client: "Designali",
    title: "Design agency template built with Next.js",
    services: ["Template", "Development"],
    year: "Template",
    image: "/images/templates/design-agency.jpg",
  },
  {
    client: "Dalim Fonts",
    title: "A type foundry website for custom typefaces",
    services: ["Web design", "Development"],
    year: "Case study",
    image: "/images/templates/dalim-fonts-old.jpg",
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
            Brand, UI/UX and web work by Designali — design se code tak.
            <br className="hidden md:block" /> Dalim projects and Designali templates.
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
                <img
                  src={project.image}
                  alt={`${project.client} project by Designali`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
